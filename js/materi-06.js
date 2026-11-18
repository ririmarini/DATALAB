/* =========================================================
   DATALAB — MATERI 06: MODUS DAN INTERPRETASI DATA
   Layout khusus mengikuti pola Materi-05.
   Panggil window.renderMateri06Layout(lesson) dari materi.js.
   ========================================================= */
(() => {
  "use strict";

  const ASSET = "assets/images/materi/materi_06/";

  const fallbackLesson = {
    title: "Modus dan Interpretasi Data",
    objectives: [
      "Menjelaskan pengertian modus.",
      "Menentukan modus dari sekumpulan data.",
      "Menghitung jangkauan data.",
      "Menafsirkan informasi dari penyajian data.",
      "Menarik kesimpulan berdasarkan data.",
    ],
    concepts: [
      {
        title: "A. Pengertian Modus",
        icon: "🏆",
        content:
          "Modus adalah nilai atau kategori yang mempunyai frekuensi kemunculan paling tinggi.",
        note: "Sekumpulan data dapat mempunyai satu modus, lebih dari satu modus, atau tidak mempunyai modus jika semua nilai muncul sama sering.",
      },
      {
        title: "B. Interpretasi Data",
        icon: "📊",
        content:
          "Interpretasi data berarti membaca, membandingkan, menjelaskan, dan menarik kesimpulan berdasarkan data.",
        note: "Kesimpulan harus sesuai dengan informasi yang tersedia, bukan berdasarkan dugaan.",
      },
      {
        title: "C. Jangkauan Data",
        icon: "📏",
        content:
          "Jangkauan adalah selisih antara nilai terbesar dan nilai terkecil.",
        formula: "Jangkauan = Nilai terbesar − Nilai terkecil",
        note: "Pada data 2, 5, 7, 9, jangkauannya adalah 9 − 2 = 7.",
      },
    ],
    example: {
      title: "Menentukan Modus dan Jangkauan",
      problem: "Diketahui data 4, 5, 5, 6, 7, 5, 8.",
      steps: [
        "Hitung frekuensi setiap nilai.",
        "Nilai 5 muncul tiga kali, lebih sering daripada nilai lainnya.",
        "Jadi, modus = 5.",
        "Nilai terbesar = 8 dan nilai terkecil = 4.",
        "Jangkauan = 8 − 4 = 4.",
      ],
      conclusion:
        "Nilai yang paling sering muncul adalah 5, sedangkan jangkauan datanya adalah 4.",
    },
    exploration:
      "Lakukan survei warna favorit teman-temanmu. Tentukan warna yang menjadi modus dan jelaskan kesimpulan berdasarkan hasil survei.",
    question: "Diketahui data 3, 4, 4, 5, 6, 4, 7. Berapakah modusnya?",
    options: ["3", "4", "5", "7"],
    answer: 1,
    explanation:
      "Nilai 4 muncul tiga kali, lebih sering dibandingkan nilai lainnya. Jadi, modusnya 4.",
    summary: [
      "Modus adalah nilai yang paling sering muncul.",
      "Modus ditentukan berdasarkan frekuensi tertinggi.",
      "Jangkauan adalah selisih nilai terbesar dan terkecil.",
      "Interpretasi data membantu menarik kesimpulan berdasarkan bukti.",
    ],
  };

  const image = (name, alt = "", className = "") =>
    `<img${className ? ` class="${className}"` : ""} src="${ASSET}${name}.png" alt="${alt}" onerror="this.style.display='none'">`;

  function renderHeading(iconFile, kicker, title) {
    return `
      <div class="m06-heading-row">
        ${image(iconFile, "", "m06-heading-icon")}
        <div><p class="m06-card-kicker">${kicker}</p><h2>${title}</h2></div>
      </div>`;
  }

  function renderChart(values) {
    const counts = new Map();
    values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
    const max = Math.max(...counts.values());
    return [...counts.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(
        ([value, count]) => `
      <div class="m06-bar-group ${count === max ? "is-mode" : ""}">
        <span class="m06-bar-value">${count}</span>
        <div class="m06-bar" style="height:${Math.max(12, (count / max) * 118)}px"></div>
        <span class="m06-bar-label">${value}</span>
      </div>`,
      )
      .join("");
  }

  function renderTopicDetail(lesson) {
    return (lesson.concepts || fallbackLesson.concepts)
      .map(
        (concept, index) => `
      <div class="m06-topic-detail" data-m06-topic-detail="${index}" ${index ? "hidden" : ""}>
        <h3>${concept.icon || "📘"} ${concept.title}</h3>
        <p>${concept.content}</p>
        ${concept.formula ? `<span class="m06-formula">${concept.formula}</span>` : ""}
        ${concept.note ? `<p><strong>Ingat:</strong> ${concept.note}</p>` : ""}
      </div>`,
      )
      .join("");
  }

  function renderLayout(lesson = fallbackLesson) {
    const data = { ...fallbackLesson, ...(lesson || {}) };
    const container = document.getElementById("pageContainer");
    if (!container) {
      console.error("DataLab: #pageContainer tidak ditemukan.");
      return;
    }

    const objectives = (data.objectives || fallbackLesson.objectives).slice(
      0,
      5,
    );
    const concepts = data.concepts || fallbackLesson.concepts;
    const example = data.example || fallbackLesson.example;
    const topicConcepts = [
      ...concepts,
      {
        title: "C. Penerapan dalam Masalah Kontekstual",
        icon: "📝",
        content: example.problem,
        note: example.conclusion,
      },
    ];
    const summary = data.summary || fallbackLesson.summary;

    container.innerHTML = `
      <main class="m06-page" aria-label="Materi 06 Modus dan Interpretasi Data">
        <div class="m06-breadcrumb">
          <button type="button" data-m06-back>Materi</button><span>›</span>
          <span>Modus dan Interpretasi Data</span>
        </div>

        <div class="m06-banner">
          <img src="${ASSET}banner-materi-06.png" alt="Unit 06 Modus dan Interpretasi Data"
            onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(110deg,#d8baff,#f2eaff)'">
        </div>

        <nav class="m06-tabs" aria-label="Navigasi materi Modus">
          <button class="m06-tab is-active" type="button" data-m06-tab="tujuan">${image("icon_tujuan_pembelajaran", "", "m06-tab-icon")}Tujuan Pembelajaran</button>
          <button class="m06-tab" type="button" data-m06-tab="uraian">${image("icon_uraian_materi", "", "m06-tab-icon")}Uraian Materi</button>
          <button class="m06-tab" type="button" data-m06-tab="contoh">${image("icon_contoh_interaktif", "", "m06-tab-icon")}Contoh Interaktif</button>
          <button class="m06-tab" type="button" data-m06-tab="coba">${image("icon_ayo_coba", "", "m06-tab-icon")}Ayo Coba</button>
          <button class="m06-tab" type="button" data-m06-tab="rangkuman">${image("icon_rangkuman", "", "m06-tab-icon")}Rangkuman</button>
        </nav>

        <div class="m06-content">
          <section class="m06-panel is-active" data-m06-panel="tujuan">
            <div class="m06-three-col">
              <article class="m06-card">
                ${renderHeading("icon_tujuan_pembelajaran", "Tujuan Pembelajaran", "Apa yang Akan Kamu Pelajari?")}
                <div class="m06-objectives">
                  ${objectives
                    .map(
                      (item, i) => `
                    <div class="m06-objective">
                      <span class="m06-number">${String(i + 1).padStart(2, "0")}</span>
                      <span>${item}</span><span class="m06-check">✓</span>
                    </div>`,
                    )
                    .join("")}
                </div>
              </article>

              <article class="m06-card">
                ${renderHeading("ic_interpretasi", "Peta Konsep", "Alur Materi Unit 06")}
                <div class="m06-concept-map">
                  <div class="m06-concept-main">Modus dan<br>Interpretasi Data</div>
                  <div class="m06-concept-branches">
                    <div class="m06-concept-child">Modus<br>(Frekuensi Tertinggi)</div>
                    <div class="m06-concept-child">Interpretasi<br>Data</div>
                  </div>
                  <div class="m06-concept-bottom">Penerapan dalam<br>Masalah Kontekstual</div>
                </div>
              </article>

              <article class="m06-card">
                ${renderHeading("img_buku", "Sekilas Materi 06", "Materi Unit 06")}
                <div class="m06-unit-list">
                  <button type="button" class="m06-unit-item" data-m06-topic="0">
                    ${image("ic_modus", "Ilustrasi modus")}
                    <strong>A. Modus (Data Tunggal)</strong><span class="m06-unit-arrow">›</span>
                  </button>
                  <button type="button" class="m06-unit-item" data-m06-topic="1">
                    ${image("ic_interpretasi", "Ilustrasi interpretasi data")}
                    <strong>B. Interpretasi Data</strong><span class="m06-unit-arrow">›</span>
                  </button>
                  <button type="button" class="m06-unit-item" data-m06-topic="4">
                    ${image("ic_penerapan", "Ilustrasi penerapan")}
                    <strong>C. Penerapan dalam Masalah Kontekstual</strong><span class="m06-unit-arrow">›</span>
                  </button>
                </div>
                <div class="m06-topic-details">${renderTopicDetail({ ...data, concepts: topicConcepts })}</div>
              </article>
            </div>
          </section>

          <section class="m06-panel" data-m06-panel="uraian">
            <div class="m06-two-col">
              <article class="m06-card">
                ${renderHeading("icon_uraian_materi", "Uraian Materi", "Mengenal Modus")}
                <p class="m06-lead">Modus adalah nilai atau kategori yang mempunyai frekuensi kemunculan paling tinggi. Perhatikan berapa kali setiap nilai muncul.</p>
                <div class="m06-example">
                  <div class="m06-example-label">Contoh data penjualan buku selama tujuh hari</div>
                  <div class="m06-frequency-table-wrap">
                    <table class="m06-frequency-table">
                      <thead><tr><th>Jumlah buku</th><th>Frekuensi</th></tr></thead>
                      <tbody>
                        <tr><td>4</td><td>1</td></tr>
                        <tr class="is-mode"><td>5</td><td>3</td></tr>
                        <tr><td>6</td><td>1</td></tr>
                        <tr><td>7</td><td>1</td></tr>
                        <tr><td>8</td><td>1</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="m06-insight">Modus = 5, karena nilai 5 muncul sebanyak 3 kali.</div>
                </div>
                <div class="m06-steps">
                  <div class="m06-step"><span class="m06-step-number">1</span><p>Catat semua nilai yang terdapat dalam data.</p></div>
                  <div class="m06-step"><span class="m06-step-number">2</span><p>Hitung frekuensi kemunculan setiap nilai.</p></div>
                  <div class="m06-step"><span class="m06-step-number">3</span><p>Pilih nilai dengan frekuensi paling tinggi sebagai modus.</p></div>
                </div>
              </article>

              <article class="m06-card">
                ${renderHeading("ic_interpretasi", "Visualisasi Data", "Diagram Frekuensi")}
                <p class="m06-lead">Diagram batang membantu kita membandingkan frekuensi setiap nilai. Batang tertinggi menunjukkan nilai yang paling sering muncul.</p>
                <div class="m06-chart" aria-label="Diagram frekuensi data 4, 5, 5, 6, 7, 5, 8">${renderChart([4, 5, 5, 6, 7, 5, 8])}</div>
                <p class="m06-chart-legend">Sumbu mendatar: jumlah buku · Sumbu tegak: frekuensi</p>
                <div class="m06-insight">Batang berwarna kuning menunjukkan modus, yaitu 5 buku.</div>
                <div class="m06-example">
                  <div class="m06-example-label">Jangkauan Data</div>
                  <div class="m06-formula-box">Jangkauan = terbesar − terkecil</div>
                  <p class="m06-lead">Pada data 4, 5, 5, 6, 7, 5, 8, nilai terbesar 8 dan terkecil 4.</p>
                  <strong>Jangkauan = 8 − 4 = 4</strong>
                </div>
              </article>
            </div>
            <article class="m06-card" style="margin-top:16px">
              ${renderHeading("ic_penerapan", "Interpretasi Data", "Bagaimana Membaca Hasil Data?")}
              <p class="m06-lead">Interpretasi data berarti membaca, membandingkan, menjelaskan, dan menarik kesimpulan berdasarkan informasi yang tersedia. Kesimpulan tidak boleh dibuat hanya berdasarkan dugaan.</p>
              <div class="m06-insight">Contoh kesimpulan: jumlah buku yang paling sering terjual adalah 5 buku per hari. Informasi ini dapat membantu pemilik toko memperkirakan persediaan buku.</div>
            </article>
          </section>

          <section class="m06-panel" data-m06-panel="contoh">
            <article class="m06-card">
              ${renderHeading("icon_contoh_interaktif", "Contoh Interaktif", "Ayo Analisis Kumpulan Datamu!")}
              <p class="m06-lead">Masukkan data angka yang dipisahkan dengan koma. DataLab akan menampilkan frekuensi, modus, jangkauan, dan diagram batang.</p>
              <div class="m06-two-col">
                <div>
                  <label class="m06-field-label" for="m06-data-input">Masukkan kumpulan data</label>
                  <input class="m06-input" id="m06-data-input" type="text" value="4, 5, 5, 6, 7, 5, 8" inputmode="decimal">
                  <p class="m06-help">Contoh: 4, 5, 5, 6, 7, 5, 8. Gunakan koma sebagai pemisah.</p>
                  <div class="m06-actions">
                    <button class="m06-button" type="button" data-m06-calculate>Analisis Data</button>
                    <button class="m06-button secondary" type="button" data-m06-reset>Gunakan Contoh</button>
                  </div>
                  <p class="m06-status" id="m06-calc-message" aria-live="polite"></p>
                </div>
                <div class="m06-result" aria-live="polite">
                  <div class="m06-result-label">Modus data</div>
                  <div class="m06-result-value" id="m06-result-mode">5</div>
                  <div class="m06-result-note" id="m06-result-note">Frekuensi tertinggi: 3 kali · Jangkauan: 4</div>
                </div>
              </div>
              <div class="m06-two-col" style="margin-top:16px">
                <div>
                  <h3>Diagram Frekuensi</h3>
                  <div class="m06-chart" id="m06-live-chart">${renderChart([4, 5, 5, 6, 7, 5, 8])}</div>
                  <p class="m06-chart-legend">Batang kuning menandai modus.</p>
                </div>
                <div>
                  <h3>Tabel Frekuensi</h3>
                  <div id="m06-live-table">
                    <table class="m06-frequency-table"><thead><tr><th>Nilai</th><th>Frekuensi</th></tr></thead><tbody>
                    <tr><td>4</td><td>1</td></tr><tr class="is-mode"><td>5</td><td>3</td></tr><tr><td>6</td><td>1</td></tr><tr><td>7</td><td>1</td></tr><tr><td>8</td><td>1</td></tr>
                    </tbody></table>
                  </div>
                </div>
              </div>
            </article>
          </section>

          <section class="m06-panel" data-m06-panel="coba">
            <div class="m06-two-col">
              <article class="m06-card">
                ${renderHeading("icon_ayo_coba", "Ayo Coba", "Uji Pemahamanmu!")}
                <p class="m06-lead">Pilih jawaban yang paling tepat berdasarkan data berikut.</p>
                <div class="m06-quiz-question">
                  <p><strong>Perhatikan data berikut:</strong> 3, 4, 4, 5, 6, 4, 7.</p>
                  <p>Berapakah modus dari data tersebut?</p>
                  <div class="m06-options">
                    ${(data.options || fallbackLesson.options)
                      .map(
                        (option, index) => `
                      <button type="button" class="m06-option" data-m06-answer="${index}">
                        ${String.fromCharCode(65 + index)}. ${option}
                      </button>`,
                      )
                      .join("")}
                  </div>
                  <div class="m06-actions">
                    <button class="m06-button" type="button" data-m06-check>Periksa Jawaban</button>
                    <button class="m06-button secondary" type="button" data-m06-quiz-reset>Ulangi</button>
                  </div>
                  <div class="m06-feedback" id="m06-feedback" aria-live="polite"></div>
                </div>
              </article>
              <article class="m06-card">
                ${renderHeading("ic_penerapan", "Petunjuk Pengerjaan", "Ingat Langkahnya!")}
                <div class="m06-steps">
                  <div class="m06-step"><span class="m06-step-number">1</span><p>Perhatikan seluruh nilai dalam kumpulan data.</p></div>
                  <div class="m06-step"><span class="m06-step-number">2</span><p>Hitung berapa kali setiap nilai muncul.</p></div>
                  <div class="m06-step"><span class="m06-step-number">3</span><p>Tentukan nilai dengan frekuensi tertinggi.</p></div>
                </div>
                <div class="m06-insight">Semangat mencoba, Sobat Data! 💜</div>
              </article>
            </div>
          </section>

          <section class="m06-panel" data-m06-panel="rangkuman">
            <div class="m06-two-col">
              <article class="m06-card">
                ${renderHeading("icon_rangkuman", "Rangkuman", "Ingat Kembali!")}
                <div class="m06-summary-list">
                  ${summary
                    .map(
                      (item, index) => `
                    <div class="m06-summary-item">
                      <span class="m06-summary-icon">${["🏆", "🔢", "📏", "📊"][index % 4]}</span>
                      <div>${item}</div>
                    </div>`,
                    )
                    .join("")}
                </div>
              </article>
              <article class="m06-card">
                ${renderHeading("img_buku", "Pesan Belajar", "Kamu Pasti Bisa!")}
                <div class="m06-formula-box">Modus = frekuensi tertinggi</div>
                <p class="m06-lead">Jangkauan diperoleh dengan mengurangkan nilai terkecil dari nilai terbesar. Gunakan data sebagai dasar untuk membuat kesimpulan.</p>
                <div class="m06-insight">Terus berlatih agar semakin mahir memahami statistika! 🌟</div>
                <img class="m06-card-illustration" src="${ASSET}ic_penerapan.png" alt="Ilustrasi penerapan data">
              </article>
            </div>
          </section>
        </div>
      </main>`;

    bindEvents(container, data);
  }

  function analyzeValues(raw) {
    const tokens = raw.split(",").map((item) => item.trim());
    if (!raw.trim() || tokens.some((token) => token === "")) {
      throw new Error(
        "Masukkan minimal satu data dan pisahkan setiap angka dengan koma.",
      );
    }
    const values = tokens.map(Number);
    if (values.some((value) => !Number.isFinite(value))) {
      throw new Error(
        "Data harus berupa angka yang valid. Periksa kembali pemisah koma.",
      );
    }
    const counts = new Map();
    values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
    const maxFrequency = Math.max(...counts.values());
    const modes = [...counts.entries()]
      .filter(([, frequency]) => frequency === maxFrequency)
      .map(([value]) => value)
      .sort((a, b) => a - b);
    const unique = counts.size === 1;
    return {
      values,
      counts,
      maxFrequency,
      modes,
      range: Math.max(...values) - Math.min(...values),
      noMode: !unique && maxFrequency === 1,
    };
  }

  function renderFrequencyTable(result) {
    const rows = [...result.counts.entries()].sort((a, b) => a[0] - b[0]);
    return `<table class="m06-frequency-table">
      <thead><tr><th>Nilai</th><th>Frekuensi</th></tr></thead>
      <tbody>${rows
        .map(
          ([value, count]) => `
        <tr class="${result.modes.includes(value) && !result.noMode ? "is-mode" : ""}">
          <td>${value}</td><td>${count}</td>
        </tr>`,
        )
        .join("")}</tbody></table>`;
  }

  function updateAnalysis(root, raw) {
    const message = root.querySelector("#m06-calc-message");
    try {
      const result = analyzeValues(raw);
      const modeNode = root.querySelector("#m06-result-mode");
      const noteNode = root.querySelector("#m06-result-note");
      const chart = root.querySelector("#m06-live-chart");
      const table = root.querySelector("#m06-live-table");
      modeNode.textContent = result.noMode
        ? "Tidak ada"
        : result.modes.join(", ");
      noteNode.textContent = `Frekuensi tertinggi: ${result.maxFrequency} kali · Jangkauan: ${result.range}`;
      chart.innerHTML = renderChart(result.values);
      table.innerHTML = renderFrequencyTable(result);
      message.className = "m06-status success";
      message.textContent = result.noMode
        ? "Semua nilai muncul satu kali, sehingga data tidak mempunyai modus."
        : result.modes.length > 1
          ? "Data memiliki lebih dari satu modus karena beberapa nilai memiliki frekuensi tertinggi yang sama."
          : "Analisis berhasil! Batang kuning menunjukkan nilai modus.";
    } catch (error) {
      message.className = "m06-status error";
      message.textContent = error.message;
    }
  }

  function bindEvents(root, lesson) {
    root.querySelectorAll("[data-m06-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.m06Tab;
        root
          .querySelectorAll("[data-m06-tab]")
          .forEach((item) =>
            item.classList.toggle("is-active", item === button),
          );
        root
          .querySelectorAll("[data-m06-panel]")
          .forEach((panel) =>
            panel.classList.toggle(
              "is-active",
              panel.dataset.m06Panel === target,
            ),
          );
      });
    });

    root.querySelector("[data-m06-back]")?.addEventListener("click", () => {
      if (typeof window.renderMateriPage === "function")
        window.renderMateriPage();
      else document.querySelector('[data-page="materi"]')?.click();
    });

    root.querySelectorAll("[data-m06-topic]").forEach((button) => {
      button.addEventListener("click", () => {
        const index = button.dataset.m06Topic;
        root.querySelectorAll("[data-m06-topic-detail]").forEach((detail) => {
          detail.hidden = detail.dataset.m06TopicDetail !== index;
        });
        const target = root.querySelector(`[data-m06-topic-detail="${index}"]`);
        target?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });

    const input = root.querySelector("#m06-data-input");
    root
      .querySelector("[data-m06-calculate]")
      ?.addEventListener("click", () => updateAnalysis(root, input.value));
    root.querySelector("[data-m06-reset]")?.addEventListener("click", () => {
      input.value = "4, 5, 5, 6, 7, 5, 8";
      updateAnalysis(root, input.value);
    });

    let selectedAnswer = null;
    const options = root.querySelectorAll("[data-m06-answer]");
    options.forEach((option) =>
      option.addEventListener("click", () => {
        selectedAnswer = Number(option.dataset.m06Answer);
        options.forEach((item) =>
          item.classList.toggle("is-selected", item === option),
        );
        const feedback = root.querySelector("#m06-feedback");
        feedback.className = "m06-feedback";
        feedback.textContent = "";
      }),
    );

    root.querySelector("[data-m06-check]")?.addEventListener("click", () => {
      const feedback = root.querySelector("#m06-feedback");
      feedback.className = "m06-feedback show";
      if (selectedAnswer === null) {
        feedback.classList.add("incorrect");
        feedback.textContent = "Pilih salah satu jawaban terlebih dahulu, ya!";
      } else if (
        selectedAnswer === Number(lesson.answer ?? fallbackLesson.answer)
      ) {
        feedback.classList.add("correct");
        feedback.textContent = `Hebat, jawabanmu benar! ${lesson.explanation || fallbackLesson.explanation}`;
      } else {
        feedback.classList.add("incorrect");
        feedback.textContent = `Belum tepat. ${lesson.explanation || fallbackLesson.explanation}`;
      }
    });

    root
      .querySelector("[data-m06-quiz-reset]")
      ?.addEventListener("click", () => {
        selectedAnswer = null;
        options.forEach((item) => item.classList.remove("is-selected"));
        const feedback = root.querySelector("#m06-feedback");
        feedback.className = "m06-feedback";
        feedback.textContent = "";
      });
  }

  window.renderMateri06Layout = renderLayout;
})();
