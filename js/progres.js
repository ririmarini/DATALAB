/* =========================================================
   DATALAB — PROGRES BELAJAR
   Layout mengikuti desain dashboard referensi:
   header + banner, ringkasan, peta materi, aktivitas, badge.
   Pencatatan dilakukan per bagian materi (5 bagian x 6 unit).
========================================================= */
(() => {
  "use strict";

  const STORAGE_KEY = "datalab_progress";
  const ASSET = "assets/images/progres/";
  const SECTIONS = [
    { id: "tujuan", label: "Tujuan Pembelajaran" },
    { id: "uraian", label: "Uraian Materi" },
    { id: "contoh", label: "Contoh Interaktif" },
    { id: "ayo-coba", label: "Ayo Coba" },
    { id: "rangkuman", label: "Rangkuman" },
  ];

  const UNITS = [
    { number: 1, title: "Mengenal Statistika dan Data", icon: "icon-unit-01.png" },
    { number: 2, title: "Mengolah dan Menyajikan Data", icon: "icon-unit-02.png" },
    { number: 3, title: "Diagram dalam Statistika", icon: "icon-unit-03.png" },
    { number: 4, title: "Ukuran Pemusatan Data", icon: "icon-unit-04.png" },
    { number: 5, title: "Median (Nilai Tengah)", icon: "icon-unit-05.png" },
    { number: 6, title: "Modus dan Interpretasi Data", icon: "icon-unit-06.png" },
  ];

  const BADGES = [
    { id: "pemula", title: "Pemula", active: "badge-pemula-aktif.png", locked: "badge-pemula-terkunci.png", threshold: 1, description: "Selesaikan bagian materi pertamamu." },
    { id: "penjelajah", title: "Penjelajah Data", active: "badge-penjelajah-data-aktif.png", locked: "badge-penjelajah-data-terkunci.png", threshold: 10, description: "Selesaikan 10 bagian pembelajaran." },
    { id: "ahli", title: "Ahli Statistika", active: "badge-ahli-statistika-aktif.png", locked: "badge-ahli-statistika-terkunci.png", threshold: 30, description: "Tuntaskan seluruh bagian materi." },
    { id: "juara", title: "Juara Kuis", active: "badge-juara-kuis-aktif.png", locked: "badge-juara-kuis-terkunci.png", quiz: true, description: "Raih nilai kuis minimal 90." },
  ];

  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

  const image = (name, alt = "", className = "") =>
    `<img src="${ASSET}${escapeHTML(name)}" alt="${escapeHTML(alt)}" class="${escapeHTML(className)}" loading="lazy" onerror="this.hidden=true">`;

  function readData() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
    catch (error) { console.warn("DataLab: progres tidak dapat dibaca.", error); return {}; }
  }

  function getCompleted(data) {
    return Array.isArray(data.completedSections) ? [...new Set(data.completedSections.map(String))] : [];
  }

  function unitDoneCount(completed, unitNumber) {
    return SECTIONS.filter(section => completed.includes(`${unitNumber}:${section.id}`)).length;
  }

  function getQuizCount(data) {
    const scores = Array.isArray(data.quizScores) ? data.quizScores : [];
    const activities = Array.isArray(data.activities) ? data.activities : [];
    const practiceActivities = activities.filter(item => {
      const type = String(item?.type || "").toLowerCase();
      return type === "latihan" || type === "practice";
    }).length;
    return scores.length + practiceActivities;
  }

  function getActivityCount(data) {
    const total = Number(data.totalActivities);
    return Number.isFinite(total) && total >= 0
      ? total
      : (Array.isArray(data.activities) ? data.activities.length : 0);
  }

  function quizBadgeUnlocked(data) {
    const scores = Array.isArray(data.quizScores) ? data.quizScores : [];
    return scores.some(item => {
      const score = typeof item === "number" ? item : Number(item?.score ?? item?.nilai ?? item?.percentage);
      return Number.isFinite(score) && score >= 90;
    });
  }

  function formatActivityDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Aktivitas terbaru";
    const today = new Date();
    const sameDay = date.toDateString() === today.toDateString();
    return `${sameDay ? "Hari ini" : new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short" }).format(date)}, ${new Intl.DateTimeFormat("id-ID", { hour: "2-digit", minute: "2-digit" }).format(date)}`;
  }

  function getActivityIcon(activity) {
    const type = String(activity?.type || "").toLowerCase();
    if (type.includes("quiz") || type.includes("latihan") || type.includes("practice")) return "icon-latihan.png";
    if (type.includes("badge") || type.includes("lencana")) return "icon-lencana.png";
    if (type.includes("laboratorium") || type.includes("lab") || type.includes("game") || type.includes("tantangan")) return "icon-aktivitas.png";
    return "icon-materi.png";
  }

  function renderProgressPage(container) {
    if (!container) return;
    const data = readData();
    const completed = getCompleted(data);
    const completedUnits = UNITS.filter(unit => unitDoneCount(completed, unit.number) === SECTIONS.length).length;
    const overall = Math.round((completedUnits / UNITS.length) * 100);
    const quizCount = getQuizCount(data);
    const activityCount = getActivityCount(data);
    const activities = Array.isArray(data.activities) ? data.activities.slice(0, 10) : [];
    const unlockedBadges = BADGES.filter(badge =>
      badge.quiz ? quizBadgeUnlocked(data) : completed.length >= badge.threshold
    ).length;

    const nextUnit = UNITS.find(unit => unitDoneCount(completed, unit.number) < SECTIONS.length);
    const encouragement = completedUnits === 0
      ? "Ayo mulai perjalanan belajarmu. Selesaikan bagian pertama dan kumpulkan lencana!"
      : completedUnits === 6
        ? "Luar biasa! Kamu telah menyelesaikan seluruh materi DataLab."
        : `Kamu sudah berada di ${overall}% perjalanan belajar. Yuk, lanjutkan materi berikutnya!`;

    container.innerHTML = `
      <div class="progress-dashboard">
        <section class="progress-hero-row">
          <div class="progress-page-intro">
            <span class="progress-eyebrow">DATALAB LEARNING CENTER</span>
            <h1>Progres Belajar</h1>
            <p>Pantau pencapaian dan perjalanan belajarmu di DataLab.</p>
          </div>
          <div class="progress-banner">${image("banner-progres.png", "Hai, Sobat Data! Terus semangat belajar.")}</div>
        </section>

        <section class="progress-summary-row">
          <article class="progress-overall-card">
            <div class="progress-card-title">
              ${image("ic_progres.png", "Ikon progres")}
              <h2>Progres Keseluruhan</h2>
            </div>
            <div class="progress-overall-body">
              <div class="progress-big-ring" style="--progress:${overall}">
                <strong>${overall}%</strong>
              </div>
              <div class="progress-overall-copy">
                <p><strong>${completedUnits}</strong> dari <strong>6</strong> materi telah<br>diselesaikan.</p>
                <div class="progress-main-track"><span style="width:${overall}%"></span></div>
                <div class="progress-encouragement"><span aria-hidden="true">🚀</span><span>${encouragement}</span></div>
              </div>
            </div>
          </article>

          <article class="progress-achievement-card">
            <div class="progress-card-title">
              ${image("ic_ringkasan.png", "Ikon ringkasan")}
              <h2>Ringkasan Pencapaian</h2>
            </div>
            <div class="progress-metric-grid">
              <div class="progress-metric metric-purple">
                ${image("icon-materi.png", "Materi")}
                <strong>${completedUnits}/6</strong><span>Materi diselesaikan</span>
              </div>
              <div class="progress-metric metric-blue">
                ${image("icon-latihan.png", "Latihan")}
                <strong>${quizCount}</strong><span>Latihan dikerjakan</span>
              </div>
              <div class="progress-metric metric-gold">
                ${image("icon-lencana.png", "Lencana")}
                <strong>${unlockedBadges}</strong><span>Lencana diperoleh</span>
              </div>
              <div class="progress-metric metric-mint">
                ${image("icon-aktivitas.png", "Aktivitas")}
                <strong>${activityCount}</strong><span>Aktivitas belajar</span>
              </div>
            </div>
          </article>
        </section>

        <section class="progress-content-row">
          <article class="progress-map-card">
            <div class="progress-card-title">
              <span class="progress-title-emoji" aria-hidden="true">📍</span>
              <h2>Peta Perjalanan Materi</h2>
            </div>
            <div class="progress-journey-grid">
              ${UNITS.map(unit => {
                const done = unitDoneCount(completed, unit.number);
                const pct = Math.round(done / SECTIONS.length * 100);
                const finished = done === SECTIONS.length;
                const active = !finished && done > 0;
                const state = finished ? "finished" : active ? "learning" : "waiting";
                const label = finished ? "Selesai" : active ? "Sedang Belajar" : "Belum Dimulai";
                return `
                  <article class="progress-journey-unit ${state}">
                    <span class="progress-journey-node">${finished ? "✓" : ""}</span>
                    <span class="progress-unit-pill">Unit ${String(unit.number).padStart(2, "0")}</span>
                    ${image(unit.icon, `Ikon Unit ${unit.number}`, "progress-journey-icon")}
                    <h3>${unit.title}</h3>
                    <div class="progress-unit-percent"><span class="progress-unit-mini-track"><i style="width:${pct}%"></i></span><b>${pct}%</b></div>
                    <button type="button" class="progress-unit-action" data-progress-unit="${unit.number}">${label}</button>
                  </article>`;
              }).join("")}
            </div>
          </article>

          <aside class="progress-side-column">
            <article class="progress-side-card progress-activity-card">
              <div class="progress-side-heading">
                <div>${image("icon-aktivitas.png", "")}<h2>Aktivitas Terakhir</h2></div>
                <button class="progress-view-all" type="button" data-progress-show-all aria-expanded="false">Lihat Semua <b>›</b></button>
              </div>
              ${activities.length ? `
                <ul class="progress-activity-list">
                  ${activities.map(activity => `
                    <li ${activities.indexOf(activity) >= 3 ? 'hidden' : ''}>
                      <span class="progress-activity-icon">${image(getActivityIcon(activity), "")}</span>
                      <span class="progress-activity-text">${escapeHTML(activity.message || "Menyelesaikan aktivitas belajar")}</span>
                      <time>${formatActivityDate(activity.date)}</time>
                    </li>
                  `).join("")}
                </ul>` : `
                <div class="progress-activity-empty">
                  Belum ada aktivitas. Mulai belajar untuk melihat riwayatmu di sini.
                </div>`}
            </article>

            <article class="progress-side-card progress-badges-card">
              <div class="progress-side-heading">
                <div>${image("icon-lencana.png", "")}<h2>Koleksi Penghargaan</h2></div>
                <span class="progress-view-all progress-view-all-static">${BADGES.length} Lencana <b>✦</b></span>
              </div>
              <div class="progress-badge-list">
                ${BADGES.map(badge => {
                  const unlocked = badge.quiz ? quizBadgeUnlocked(data) : completed.length >= badge.threshold;
                  return `
                    <div class="progress-badge ${unlocked ? "earned" : "locked"}">
                      ${image(unlocked ? badge.active : badge.locked, `Lencana ${badge.title}`)}
                      <strong>${badge.title}</strong>
                      <span>${unlocked ? "✓ Diperoleh" : "● Terkunci"}</span>
                    </div>`;
                }).join("")}
              </div>
            </article>
          </aside>
        </section>

        <div class="progress-unit-modal" id="progressUnitModal" hidden>
          <button class="progress-modal-backdrop" type="button" data-progress-close aria-label="Tutup detail"></button>
          <section class="progress-modal-card" role="dialog" aria-modal="true" aria-labelledby="progressModalTitle">
            <button class="progress-modal-close" type="button" data-progress-close aria-label="Tutup">×</button>
            <span class="progress-eyebrow" id="progressModalUnit">UNIT</span>
            <h2 id="progressModalTitle">Bagian Materi</h2>
            <p class="progress-modal-subtitle">Status penyelesaian setiap bagian pada unit ini.</p>
            <div class="progress-modal-sections" id="progressModalSections"></div>
          </section>
        </div>
      </div>
    `;

    bindInteractions(container);
  }

  function bindInteractions(container) {
    const modal = container.querySelector("#progressUnitModal");
    const close = () => { if (modal) modal.hidden = true; };

    container.querySelectorAll("[data-progress-unit]").forEach(button => {
      button.addEventListener("click", () => {
        const number = Number(button.dataset.progressUnit);
        const unit = UNITS.find(item => item.number === number);
        const completed = getCompleted(readData());
        container.querySelector("#progressModalUnit").textContent = `UNIT ${String(number).padStart(2, "0")}`;
        container.querySelector("#progressModalTitle").textContent = unit.title;
        container.querySelector("#progressModalSections").innerHTML = SECTIONS.map(section => {
          const done = completed.includes(`${number}:${section.id}`);
          return `<div class="progress-modal-row ${done ? "is-done" : ""}">
            <span class="progress-modal-check">${done ? "✓" : "○"}</span>
            <span><strong>${section.label}</strong><small>${done ? "Sudah diselesaikan" : "Belum diselesaikan"}</small></span>
          </div>`;
        }).join("");
        modal.hidden = false;
      });
    });

    container.querySelectorAll("[data-progress-close]").forEach(button => button.addEventListener("click", close));

    const showAllButton = container.querySelector("[data-progress-show-all]");
    if (showAllButton) {
      showAllButton.addEventListener("click", () => {
        const expanded = showAllButton.getAttribute("aria-expanded") === "true";
        container.querySelectorAll(".progress-activity-list li[hidden]").forEach(item => {
          item.hidden = expanded;
        });
        showAllButton.setAttribute("aria-expanded", String(!expanded));
        showAllButton.innerHTML = expanded ? 'Lihat Semua <b>›</b>' : 'Tampilkan Sedikit <b>⌃</b>';
      });
    }
    const esc = event => {
      if (event.key === "Escape" && modal && !modal.hidden) {
        close();
        document.removeEventListener("keydown", esc);
      }
    };
    document.addEventListener("keydown", esc);
  }

  window.renderProgressPage = renderProgressPage;
  window.DataLabProgressUI = { render: renderProgressPage, refresh: renderProgressPage };
})();
