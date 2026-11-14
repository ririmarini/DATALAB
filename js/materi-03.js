/* =========================================================
   DATALAB — MATERI 03
   Topik: Diagram Statistika
   Renderer khusus; terisolasi dari Materi 01 dan 02.
   Aset: assets/images/materi/materi_03/
   ========================================================= */
(() => {
  "use strict";

  const ROOT_ID = "materi03";
  const ASSET = "assets/images/materi/materi_03/";

  window.renderMateri03Layout = function (lesson, targetContainer) {
    const container = targetContainer || document.getElementById("pageContainer");
    if (!container) {
      console.error("DataLab Materi 03: #pageContainer tidak ditemukan.");
      return;
    }

    container.innerHTML = `<div id="${ROOT_ID}"></div>`;
    const root = container.querySelector(`#${ROOT_ID}`);
    if (!root) return;
    root.dataset.initialized = "true";

    const img = (name, alt, className = "") =>
      `<img ${className ? `class="${className}"` : ""} src="${ASSET}${name}.png" alt="${alt}" loading="lazy">`;

    root.innerHTML = `
      <section class="m3-hero" aria-label="Banner Materi 03 Diagram Statistika">
        ${img("banner-materi-03", "Unit 03 Materi Pembelajaran: Diagram Statistika")}
      </section>

      <nav class="m3-tabs" aria-label="Navigasi bagian Materi 03" role="tablist">
        <button class="m3-tab" type="button" role="tab" id="m3-tab-tujuan" aria-controls="m3-panel-tujuan" aria-selected="true" data-tab="tujuan">
          ${img("icon_tujuan_pembelajaran", "")}<span>Tujuan Pembelajaran</span>
        </button>
        <button class="m3-tab" type="button" role="tab" id="m3-tab-uraian" aria-controls="m3-panel-uraian" aria-selected="false" data-tab="uraian">
          ${img("icon_uraian_materi", "")}<span>Uraian Materi</span>
        </button>
        <button class="m3-tab" type="button" role="tab" id="m3-tab-contoh" aria-controls="m3-panel-contoh" aria-selected="false" data-tab="contoh">
          ${img("icon_contoh_interaktif", "")}<span>Contoh Interaktif</span>
        </button>
        <button class="m3-tab" type="button" role="tab" id="m3-tab-coba" aria-controls="m3-panel-coba" aria-selected="false" data-tab="coba">
          ${img("icon_ayo_coba", "")}<span>Ayo Coba</span>
        </button>
        <button class="m3-tab" type="button" role="tab" id="m3-tab-rangkuman" aria-controls="m3-panel-rangkuman" aria-selected="false" data-tab="rangkuman">
          ${img("icon_rangkuman", "")}<span>Rangkuman</span>
        </button>
      </nav>

      <div class="m3-progress" aria-live="polite">
        <div class="m3-progress-top"><span>🌱 Progres Belajar</span><strong id="m3-progress-label">1 dari 5 bagian dibuka</strong></div>
        <div class="m3-progress-track"><span id="m3-progress-fill"></span></div>
      </div>

      <section class="m3-panel is-active" id="m3-panel-tujuan" role="tabpanel" aria-labelledby="m3-tab-tujuan" data-panel="tujuan">
        <div class="m3-intro-grid">
          <article class="m3-card">
            <div class="m3-heading">
              ${img("icon_tujuan_pembelajaran", "Ikon tujuan pembelajaran")}
              <div><p class="m3-eyebrow">Tujuan pembelajaran</p><h2>Apa yang Akan Kamu Pelajari?</h2></div>
            </div>
            <div class="m3-goals">
              <div class="m3-goal"><b>01</b><span>Mengenali jenis-jenis diagram statistika (diagram batang, garis, dan lingkaran).</span></div>
              <div class="m3-goal"><b>02</b><span>Membaca dan menafsirkan informasi dari diagram.</span></div>
              <div class="m3-goal"><b>03</b><span>Menggunakan diagram untuk menyajikan data dengan tepat.</span></div>
            </div>
          </article>
          <article class="m3-card m3-overview">
            <div class="m3-heading">
              ${img("icon_diagram_batang", "Ilustrasi diagram statistika")}
              <div><p class="m3-eyebrow">Sekilas materi 03</p><h2>Kenali Tiga Jenis Diagram</h2></div>
            </div>
            <p class="m3-lead">Diagram membantu kita menyajikan data agar lebih mudah dibaca, dibandingkan, dan dipahami. Yuk, kenali tiga jenisnya!</p>
            <div class="m3-diagram-flow">
              <div class="m3-flow-item">${img("icon_diagram_batang", "Diagram batang")}<strong>1. Diagram<br>Batang</strong></div>
              <span class="m3-flow-arrow">➜</span>
              <div class="m3-flow-item">${img("icon_diagram_garis", "Diagram garis")}<strong>2. Diagram<br>Garis</strong></div>
              <span class="m3-flow-arrow">➜</span>
              <div class="m3-flow-item">${img("icon_diagram_lingkaran", "Diagram lingkaran")}<strong>3. Diagram<br>Lingkaran</strong></div>
            </div>
            <div class="m3-character-note">
              ${img("siswi-dati", "Siswi Dati mengajak belajar")}
              <p><b>Yuk, amati!</b><br>Setiap diagram memiliki kegunaan yang berbeda.</p>
            </div>
          </article>
        </div>
        <div class="m3-cta">
          <div class="m3-cta-copy">
            ${img("icon_uraian_materi", "Ikon buku materi")}
            <div><h3>Ayo Mulai Belajar!</h3><p>Pelajari fungsi setiap diagram, lalu coba membaca informasi yang ditampilkan.</p></div>
          </div>
          <button class="m3-btn" type="button" data-go="uraian">Mulai Uraian Materi <span aria-hidden="true">→</span></button>
        </div>
      </section>

      <section class="m3-panel" id="m3-panel-uraian" role="tabpanel" aria-labelledby="m3-tab-uraian" data-panel="uraian">
        <article class="m3-card">
          <p class="m3-eyebrow">Uraian materi</p>
          <h2>Mengenal Tiga Jenis Diagram Statistika</h2>
          <p class="m3-lead">Diagram merupakan cara menyajikan data dalam bentuk visual. Pilih jenis diagram yang sesuai dengan tujuan penyajian data.</p>

          <div class="m3-lesson m3-bar-theme">
            <div><span class="m3-number">01</span><h3>Diagram Batang</h3>
              <p>Diagram batang menggunakan batang untuk membandingkan jumlah atau frekuensi dari beberapa kategori.</p>
              <div class="m3-example"><b>Kapan digunakan?</b> Saat ingin membandingkan jumlah siswa yang menyukai beberapa kegiatan ekstrakurikuler.</div>
              <div class="m3-tip">💡 Semakin tinggi batang, semakin besar nilai yang ditunjukkan.</div>
            </div>
            ${img("icon_diagram_batang", "Ilustrasi diagram batang")}
          </div>

          <div class="m3-lesson m3-line-theme">
            <div><span class="m3-number">02</span><h3>Diagram Garis</h3>
              <p>Diagram garis menampilkan titik-titik data yang dihubungkan dengan garis. Diagram ini biasanya digunakan untuk menunjukkan perubahan dari waktu ke waktu.</p>
              <div class="m3-example"><b>Contoh:</b> Perubahan suhu udara selama tujuh hari.</div>
              <div class="m3-tip">💡 Garis yang naik menunjukkan nilai meningkat, sedangkan garis turun menunjukkan nilai menurun.</div>
            </div>
            ${img("icon_diagram_garis", "Ilustrasi diagram garis")}
          </div>

          <div class="m3-lesson m3-pie-theme">
            <div><span class="m3-number">03</span><h3>Diagram Lingkaran</h3>
              <p>Diagram lingkaran menunjukkan bagian-bagian data dibandingkan dengan keseluruhan data.</p>
              <div class="m3-formula">Sudut sektor = (Frekuensi ÷ Total data) × 360°</div>
              <div class="m3-example"><b>Contoh:</b> Jika 10 dari 40 siswa menyukai sepak bola, sudut sektornya adalah (10 ÷ 40) × 360° = 90°.</div>
              <div class="m3-tip">💡 Seluruh bagian diagram lingkaran memiliki total sudut 360°.</div>
            </div>
            ${img("icon_diagram_lingkaran", "Ilustrasi diagram lingkaran")}
          </div>

          <div class="m3-note"><b>Ingat, ya!</b> Perhatikan judul, label, skala, dan keterangan diagram sebelum menarik kesimpulan.</div>
          <div class="m3-btn-row"><button class="m3-btn" type="button" data-go="contoh">Lihat Contoh Interaktif →</button></div>
        </article>
      </section>

      <section class="m3-panel" id="m3-panel-contoh" role="tabpanel" aria-labelledby="m3-tab-contoh" data-panel="contoh">
        <article class="m3-card">
          <p class="m3-eyebrow">Contoh interaktif</p>
          <h2>Survei Ekstrakurikuler Favorit</h2>
          <p class="m3-lead">OSIS melakukan survei kepada siswa. Hasilnya: Pramuka 12 siswa, Basket 8 siswa, Musik 6 siswa, dan Tari 4 siswa. Pilih bentuk diagram untuk melihat penyajian data yang berbeda.</p>

          <div class="m3-interactive-layout">
            <div class="m3-chart-card">
              <div class="m3-chart-head"><div><h3>Data peminat ekstrakurikuler</h3><p>Jumlah siswa berdasarkan pilihan kegiatan</p></div><span class="m3-total-pill">Total: 30 siswa</span></div>
              <div class="m3-chart-switch" role="group" aria-label="Pilih jenis diagram">
                <button type="button" class="m3-chart-choice is-active" data-chart="bar">▥ Batang</button>
                <button type="button" class="m3-chart-choice" data-chart="line">⌁ Garis</button>
                <button type="button" class="m3-chart-choice" data-chart="pie">◉ Lingkaran</button>
              </div>
              <div class="m3-chart-stage" id="m3-chart-stage" aria-live="polite"></div>
              <div class="m3-legend" id="m3-chart-legend"></div>
            </div>
            <aside class="m3-data-aside">
              ${img("ilustrasi_dati_unit03", "Maskot Dati mendampingi belajar")}
              <h3>Ayo Amati Datanya!</h3>
              <p>Manakah kegiatan yang paling banyak diminati? Klik salah satu kategori di bawah untuk menyorot datanya pada diagram.</p>
              <div class="m3-category-list" id="m3-category-list"></div>
              <div class="m3-feedback" id="m3-chart-feedback" aria-live="polite">Pilih kategori untuk melihat informasinya.</div>
            </aside>
          </div>
          <div class="m3-interpretation">
            <span>🔎</span><p><b>Kesimpulan:</b> Pramuka merupakan kegiatan yang paling banyak diminati (12 siswa), sedangkan Tari paling sedikit diminati (4 siswa).</p>
          </div>
          <div class="m3-btn-row"><button class="m3-btn" type="button" data-go="coba">Aku Siap Mencoba →</button></div>
        </article>
      </section>

      <section class="m3-panel" id="m3-panel-coba" role="tabpanel" aria-labelledby="m3-tab-coba" data-panel="coba">
        <article class="m3-card">
          <p class="m3-eyebrow">Ayo coba</p>
          <h2>Uji Pemahamanmu!</h2>
          <p class="m3-lead">Jawab empat pertanyaan berikut. Pilih satu jawaban yang paling tepat, lalu tekan Periksa Jawaban.</p>
          <div class="m3-quiz-card">
            <div class="m3-quiz-top"><span id="m3-quiz-count">Soal 1 dari 4</span><strong id="m3-quiz-score">Skor: 0</strong></div>
            <div class="m3-progress-track"><span id="m3-quiz-progress" style="width:25%"></span></div>
            <p class="m3-question" id="m3-question"></p>
            <div class="m3-options" id="m3-options"></div>
            <div class="m3-feedback" id="m3-quiz-feedback" aria-live="polite">Pilih jawabanmu terlebih dahulu.</div>
            <div class="m3-btn-row">
              <button class="m3-btn" type="button" id="m3-check">Periksa Jawaban</button>
              <button class="m3-btn secondary" type="button" id="m3-next" disabled>Soal Berikutnya →</button>
            </div>
          </div>
          <div class="m3-quiz-aside">${img("siswi-dati", "Siswi Dati memberi semangat")}<p>Belajar itu bertahap. Tidak apa-apa jika belum benar, baca kembali petunjuknya dan coba lagi!</p></div>
        </article>
      </section>

      <section class="m3-panel" id="m3-panel-rangkuman" role="tabpanel" aria-labelledby="m3-tab-rangkuman" data-panel="rangkuman">
        <article class="m3-card">
          <div class="m3-heading">${img("icon_rangkuman", "Ikon rangkuman")}<div><p class="m3-eyebrow">Rangkuman</p><h2>Hal Penting yang Perlu Diingat</h2></div></div>
          <div class="m3-summary-grid">
            <div class="m3-summary-item">${img("icon_diagram_batang", "Ikon diagram batang")}<div><h3>Diagram Batang</h3><p>Digunakan untuk membandingkan jumlah atau frekuensi beberapa kategori.</p></div></div>
            <div class="m3-summary-item">${img("icon_diagram_garis", "Ikon diagram garis")}<div><h3>Diagram Garis</h3><p>Digunakan untuk menunjukkan perubahan data dari waktu ke waktu.</p></div></div>
            <div class="m3-summary-item">${img("icon_diagram_lingkaran", "Ikon diagram lingkaran")}<div><h3>Diagram Lingkaran</h3><p>Digunakan untuk menunjukkan bagian data terhadap keseluruhan.</p></div></div>
          </div>
          <div class="m3-note"><b>Tips membaca diagram:</b> perhatikan judul, kategori, skala, satuan, dan keterangan agar tidak salah menafsirkan data.</div>
          <div class="m3-cta">
            <div class="m3-cta-copy">${img("icon_rangkuman", "Ikon catatan")}<div><h3>Hebat! Kamu sudah belajar Diagram Statistika.</h3><p>Terus berlatih membaca dan menyajikan data dalam berbagai bentuk diagram.</p></div></div>
            <button class="m3-btn" type="button" data-go="coba">Ulangi Latihan →</button>
          </div>
        </article>
      </section>
    `;

    const tabs = [...root.querySelectorAll("[data-tab]")];
    const panels = [...root.querySelectorAll("[data-panel]")];
    const visited = new Set(["tujuan"]);

    function activate(name) {
      tabs.forEach((tab) => {
        const active = tab.dataset.tab === name;
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
      });
      panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.panel === name));
      visited.add(name);
      const label = root.querySelector("#m3-progress-label");
      const fill = root.querySelector("#m3-progress-fill");
      if (label) label.textContent = `${visited.size} dari 5 bagian dibuka`;
      if (fill) fill.style.width = `${visited.size * 20}%`;
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activate(tab.dataset.tab));
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowRight", "ArrowLeft"].includes(event.key)) return;
        event.preventDefault();
        const next = (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
        tabs[next].focus();
        activate(tabs[next].dataset.tab);
      });
    });

    root.querySelectorAll("[data-go]").forEach((button) => {
      button.addEventListener("click", () => {
        activate(button.dataset.go);
        root.querySelector(`#m3-tab-${button.dataset.go}`)?.focus();
      });
    });

    // Contoh diagram: satu data yang sama dapat ditampilkan dalam tiga bentuk.
    const data = [
      { label: "Pramuka", value: 12, color: "#9b55e8" },
      { label: "Basket", value: 8, color: "#35b8e8" },
      { label: "Musik", value: 6, color: "#f16ca9" },
      { label: "Tari", value: 4, color: "#f4bd45" },
    ];
    let chartType = "bar";
    let selectedCategory = -1;
    const chartStage = root.querySelector("#m3-chart-stage");
    const chartLegend = root.querySelector("#m3-chart-legend");
    const categoryList = root.querySelector("#m3-category-list");
    const chartFeedback = root.querySelector("#m3-chart-feedback");

    function renderBarChart() {
      const max = 14;
      const bars = data.map((item, i) => {
        const h = item.value / max * 145;
        const x = 70 + i * 112;
        return `<g class="${selectedCategory === i ? "is-highlight" : ""}">
          <rect x="${x}" y="${190-h}" width="54" height="${h}" rx="10" fill="${item.color}" opacity="${selectedCategory < 0 || selectedCategory === i ? 1 : .35}"/>
          <text x="${x+27}" y="${178-h}" text-anchor="middle" class="m3-svg-value">${item.value}</text>
          <text x="${x+27}" y="211" text-anchor="middle" class="m3-svg-label">${item.label}</text>
        </g>`;
      }).join("");
      return `<svg viewBox="0 0 520 235" role="img" aria-label="Diagram batang jumlah peminat ekstrakurikuler">
        <line x1="45" y1="190" x2="500" y2="190" class="m3-axis"/>
        ${[0,4,8,12].map(v => `<g><line x1="45" y1="${190-v/14*145}" x2="500" y2="${190-v/14*145}" class="m3-gridline"/><text x="32" y="${194-v/14*145}" text-anchor="end" class="m3-svg-tick">${v}</text></g>`).join("")}
        ${bars}
      </svg>`;
    }

    function renderLineChart() {
      const points = data.map((item, i) => ({ x: 90 + i*112, y: 184 - item.value/14*145, ...item, i }));
      const polyline = points.map(p => `${p.x},${p.y}`).join(" ");
      return `<svg viewBox="0 0 520 235" role="img" aria-label="Diagram garis jumlah peminat ekstrakurikuler">
        ${[0,4,8,12].map(v => `<g><line x1="45" y1="${184-v/14*145}" x2="500" y2="${184-v/14*145}" class="m3-gridline"/><text x="32" y="${188-v/14*145}" text-anchor="end" class="m3-svg-tick">${v}</text></g>`).join("")}
        <polyline points="${polyline}" fill="none" stroke="#8e49dc" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        ${points.map(p => `<g><circle cx="${p.x}" cy="${p.y}" r="${selectedCategory===p.i?10:7}" fill="${p.color}" stroke="#fff" stroke-width="3"/><text x="${p.x}" y="${p.y-16}" text-anchor="middle" class="m3-svg-value">${p.value}</text><text x="${p.x}" y="211" text-anchor="middle" class="m3-svg-label">${p.label}</text></g>`).join("")}
      </svg>`;
    }

    function renderPieChart() {
      const total = data.reduce((sum, item) => sum + item.value, 0);
      let angle = -90;
      const slices = data.map((item, i) => {
        const start = angle;
        const sweep = item.value / total * 360;
        angle += sweep;
        const end = angle;
        const rad = Math.PI / 180;
        const x1 = 165 + 105 * Math.cos(start*rad);
        const y1 = 115 + 105 * Math.sin(start*rad);
        const x2 = 165 + 105 * Math.cos(end*rad);
        const y2 = 115 + 105 * Math.sin(end*rad);
        const large = sweep > 180 ? 1 : 0;
        const path = `M 165 115 L ${x1} ${y1} A 105 105 0 ${large} 1 ${x2} ${y2} Z`;
        return `<path d="${path}" fill="${item.color}" opacity="${selectedCategory < 0 || selectedCategory === i ? 1 : .35}" stroke="#fff" stroke-width="3"><title>${item.label}: ${item.value} siswa</title></path>`;
      }).join("");
      return `<svg viewBox="0 0 520 235" role="img" aria-label="Diagram lingkaran peminat ekstrakurikuler"><g transform="translate(95 0)">${slices}<circle cx="165" cy="115" r="42" fill="#fff" opacity=".94"/><text x="165" y="111" text-anchor="middle" class="m3-pie-total">30</text><text x="165" y="130" text-anchor="middle" class="m3-pie-caption">siswa</text></g></svg>`;
    }

    function renderChart() {
      chartStage.innerHTML = chartType === "bar" ? renderBarChart() : chartType === "line" ? renderLineChart() : renderPieChart();
      chartLegend.innerHTML = data.map((item, i) => `<span><i style="background:${item.color}"></i>${item.label}: ${item.value}</span>`).join("");
      root.querySelectorAll("[data-chart]").forEach(button => button.classList.toggle("is-active", button.dataset.chart === chartType));
    }

    categoryList.innerHTML = data.map((item, i) => `<button type="button" class="m3-category ${selectedCategory===i?"is-selected":""}" data-category="${i}"><i style="background:${item.color}"></i><span>${item.label}</span><b>${item.value}</b></button>`).join("");

    root.querySelectorAll("[data-chart]").forEach(button => {
      button.addEventListener("click", () => {
        chartType = button.dataset.chart;
        renderChart();
      });
    });

    categoryList.addEventListener("click", event => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      const index = Number(button.dataset.category);
      selectedCategory = selectedCategory === index ? -1 : index;
      root.querySelectorAll("[data-category]").forEach(item => item.classList.toggle("is-selected", Number(item.dataset.category) === selectedCategory));
      chartFeedback.textContent = selectedCategory < 0
        ? "Semua kategori ditampilkan kembali."
        : `${data[index].label} diminati ${data[index].value} siswa. ${data[index].label === "Pramuka" ? "Ini jumlah terbanyak." : data[index].label === "Tari" ? "Ini jumlah paling sedikit." : "Bandingkan dengan kategori lainnya."}`;
      renderChart();
    });
    renderChart();

    // Latihan formatif.
    const questions = [
      { question: "Diagram yang paling tepat untuk membandingkan jumlah peminat beberapa ekstrakurikuler adalah ...", options: ["Diagram batang", "Diagram garis", "Diagram lingkaran saja", "Garis bilangan"], answer: 0, explanation: "Diagram batang memudahkan kita membandingkan jumlah pada beberapa kategori." },
      { question: "Diagram yang cocok untuk menunjukkan perubahan suhu selama tujuh hari adalah ...", options: ["Diagram batang", "Diagram garis", "Diagram lingkaran", "Piktogram saja"], answer: 1, explanation: "Diagram garis biasanya digunakan untuk menunjukkan perubahan data dari waktu ke waktu." },
      { question: "Diagram lingkaran menunjukkan ...", options: ["Urutan abjad", "Perubahan waktu", "Bagian data dibandingkan keseluruhan", "Nama responden"], answer: 2, explanation: "Diagram lingkaran memperlihatkan bagian-bagian data terhadap keseluruhannya." },
      { question: "Dari 40 siswa, 10 siswa menyukai sepak bola. Besar sudut sektornya adalah ...", options: ["45°", "60°", "90°", "120°"], answer: 2, explanation: "(10 ÷ 40) × 360° = 90°." },
    ];
    let questionIndex = 0;
    let selectedAnswer = null;
    let checked = false;
    let score = 0;
    const questionEl = root.querySelector("#m3-question");
    const optionsEl = root.querySelector("#m3-options");
    const feedbackEl = root.querySelector("#m3-quiz-feedback");
    const checkBtn = root.querySelector("#m3-check");
    const nextBtn = root.querySelector("#m3-next");

    function renderQuestion() {
      const q = questions[questionIndex];
      selectedAnswer = null;
      checked = false;
      questionEl.textContent = q.question;
      optionsEl.innerHTML = q.options.map((option, i) => `<button class="m3-option" type="button" data-answer="${i}"><strong>${String.fromCharCode(65+i)}</strong><span>${option}</span></button>`).join("");
      feedbackEl.textContent = "Pilih jawabanmu terlebih dahulu.";
      feedbackEl.className = "m3-feedback";
      checkBtn.disabled = false;
      nextBtn.disabled = true;
      nextBtn.textContent = questionIndex === questions.length - 1 ? "Lihat Hasil" : "Soal Berikutnya →";
      root.querySelector("#m3-quiz-count").textContent = `Soal ${questionIndex+1} dari ${questions.length}`;
      root.querySelector("#m3-quiz-progress").style.width = `${((questionIndex+1)/questions.length)*100}%`;
    }

    optionsEl.addEventListener("click", event => {
      const option = event.target.closest("[data-answer]");
      if (!option || checked) return;
      selectedAnswer = Number(option.dataset.answer);
      optionsEl.querySelectorAll(".m3-option").forEach(item => item.classList.toggle("is-selected", item === option));
    });

    checkBtn.addEventListener("click", () => {
      if (selectedAnswer === null || checked) {
        if (selectedAnswer === null) {
          feedbackEl.textContent = "Pilih salah satu jawaban terlebih dahulu, ya.";
          feedbackEl.className = "m3-feedback error";
        }
        return;
      }
      checked = true;
      const q = questions[questionIndex];
      const correct = selectedAnswer === q.answer;
      if (correct) score += 25;
      optionsEl.querySelectorAll(".m3-option").forEach((item, i) => {
        if (i === q.answer) item.classList.add("is-correct");
        else if (i === selectedAnswer) item.classList.add("is-wrong");
      });
      feedbackEl.textContent = `${correct ? "Hebat, jawabanmu benar! " : "Belum tepat. "}${q.explanation}`;
      feedbackEl.className = `m3-feedback ${correct ? "success" : "error"}`;
      root.querySelector("#m3-quiz-score").textContent = `Skor: ${score}`;
      checkBtn.disabled = true;
      nextBtn.disabled = false;
    });

    nextBtn.addEventListener("click", () => {
      if (!checked) return;
      if (questionIndex < questions.length - 1) {
        questionIndex += 1;
        renderQuestion();
      } else {
        questionEl.textContent = `Latihan selesai! Skor kamu ${score} dari 100.`;
        optionsEl.innerHTML = "";
        feedbackEl.textContent = score >= 75 ? "Kerja bagus! Kamu sudah memahami jenis-jenis diagram." : "Tetap semangat! Baca kembali uraian materi, lalu coba lagi.";
        feedbackEl.className = `m3-feedback ${score >= 75 ? "success" : ""}`;
        checkBtn.disabled = true;
        nextBtn.disabled = true;
        nextBtn.textContent = "Latihan Selesai";
      }
    });

    renderQuestion();
  };
})();
