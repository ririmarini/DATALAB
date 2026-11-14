/* =========================================================
   DATALAB — MATERI 02
   Topik: Mengolah dan Menyajikan Data
   File: materi-02.js (versi integrasi)

   File ini mendaftarkan renderer untuk dipanggil oleh materi.js.
   Elemen #materi02 dibuat saat siswa membuka Materi 02, bukan
   saat file JavaScript pertama kali dimuat.

   Path aset: assets/images/materi/materi_02/
   ========================================================= */
(() => {
  "use strict";

  const ROOT_ID = "materi02";
  const ASSET = "assets/images/materi/materi_02/";

  window.renderMateri02Layout = function (lesson, targetContainer) {
    const container =
      targetContainer || document.getElementById("pageContainer");
    if (!container) {
      console.error("DataLab Materi 02: #pageContainer tidak ditemukan.");
      return;
    }

    // Siapkan wadah khusus agar CSS Materi 02 tetap terisolasi.
    container.innerHTML = `<div id="${ROOT_ID}"></div>`;
    const root = container.querySelector(`#${ROOT_ID}`);
    if (!root) return;
    root.dataset.initialized = "true";

    const img = (name, alt, className = "") =>
      `<img ${className ? `class="${className}"` : ""} src="${ASSET}${name}.png" alt="${alt}" loading="lazy">`;

    root.innerHTML = `
    <section class="m2-hero" aria-label="Materi 2 Mengolah dan Menyajikan Data">
      ${img("banner-materi-02", "Banner Materi 2: Mengolah dan Menyajikan Data")}
    </section>

    <nav class="m2-tabs" aria-label="Navigasi bagian Materi 2" role="tablist">
      <button class="m2-tab" type="button" role="tab" id="m2-tab-tujuan" aria-controls="m2-panel-tujuan" aria-selected="true" data-tab="tujuan">
        ${img("ic-tujuan", "")} <span>Tujuan Pembelajaran</span>
      </button>
      <button class="m2-tab" type="button" role="tab" id="m2-tab-uraian" aria-controls="m2-panel-uraian" aria-selected="false" data-tab="uraian">
        ${img("ic-uraian", "")} <span>Uraian Materi</span>
      </button>
      <button class="m2-tab" type="button" role="tab" id="m2-tab-contoh" aria-controls="m2-panel-contoh" aria-selected="false" data-tab="contoh">
        ${img("ic-contoh-interaktif", "")} <span>Contoh Interaktif</span>
      </button>
      <button class="m2-tab" type="button" role="tab" id="m2-tab-coba" aria-controls="m2-panel-coba" aria-selected="false" data-tab="coba">
        ${img("ic-ayo-coba", "")} <span>Ayo Coba</span>
      </button>
      <button class="m2-tab" type="button" role="tab" id="m2-tab-rangkuman" aria-controls="m2-panel-rangkuman" aria-selected="false" data-tab="rangkuman">
        ${img("ic-rangkuman", "")} <span>Rangkuman</span>
      </button>
    </nav>

    <section class="m2-panel is-active" id="m2-panel-tujuan" role="tabpanel" aria-labelledby="m2-tab-tujuan" data-panel="tujuan">
      <div class="m2-intro-grid">
        <article class="m2-card">
          <div class="m2-heading">
            ${img("ic-tujuan", "Ikon target pembelajaran")}
            <div><p class="m2-eyebrow">Tujuan pembelajaran</p><h2>Apa yang Akan Kamu Pelajari?</h2></div>
          </div>
          <div class="m2-goals">
            <div class="m2-goal"><b>01</b><span>Menjelaskan cara mengumpulkan data dari suatu kegiatan sederhana.</span></div>
            <div class="m2-goal"><b>02</b><span>Mengurutkan data dari nilai terkecil hingga terbesar.</span></div>
            <div class="m2-goal"><b>03</b><span>Menyajikan data ke dalam tabel frekuensi sederhana.</span></div>
          </div>
        </article>
        <article class="m2-card">
          <div class="m2-heading">
            ${img("img-checklist", "Ilustrasi daftar langkah")}
            <div><p class="m2-eyebrow">Sekilas materi 02</p><h2>Belajar Langkah demi Langkah</h2></div>
          </div>
          <p class="m2-lead">Data yang sudah dikumpulkan perlu diolah agar lebih teratur dan mudah dibaca. Yuk, ikuti tiga langkah berikut!</p>
          <div class="m2-flow">
            ${img("step-kumpulkan-data", "Langkah 1: Kumpulkan data")}
            ${img("step-urutkan-data", "Langkah 2: Urutkan data")}
            ${img("step-tabel-frekuensi", "Langkah 3: Sajikan dalam tabel frekuensi")}
          </div>
          <div class="m2-flow-note">Ingat: kumpulkan dahulu, urutkan, kemudian sajikan dengan rapi.</div>
        </article>
      </div>
      <div class="m2-cta">
        <div class="m2-cta-copy">
          ${img("img-buku", "Ilustrasi tumpukan buku")}
          <div><h3>Ayo Mulai Belajar!</h3><p>Pilih bagian materi di atas atau mulai membaca uraian materi.</p></div>
        </div>
        <button class="m2-btn" type="button" data-go="uraian">Mulai Uraian Materi <span aria-hidden="true">→</span></button>
      </div>
    </section>

    <section class="m2-panel" id="m2-panel-uraian" role="tabpanel" aria-labelledby="m2-tab-uraian" data-panel="uraian">
      <article class="m2-card">
        <p class="m2-eyebrow">Uraian materi</p>
        <h2>Bagaimana Cara Mengolah Data?</h2>
        <p class="m2-lead">Mengolah data adalah kegiatan menata data yang telah diperoleh agar informasi di dalamnya lebih mudah dipahami.</p>

        <div class="m2-lesson">
          <div>
            <h3>1. Mengumpulkan Data</h3>
            <p>Mengumpulkan data berarti memperoleh informasi yang dibutuhkan melalui pengamatan, pencatatan, wawancara, atau angket.</p>
            <div class="m2-example"><b>Contoh:</b> Guru bertanya kepada 10 siswa tentang jumlah saudara yang mereka miliki, lalu mencatat setiap jawaban.</div>
          </div>
          ${img("step-kumpulkan-data", "Ilustrasi mengumpulkan data")}
        </div>

        <div class="m2-lesson">
          <div>
            <h3>2. Mengurutkan Data</h3>
            <p>Data dapat diurutkan dari nilai terkecil ke terbesar (menaik) atau dari terbesar ke terkecil (menurun). Pengurutan membantu kita melihat pola dan membandingkan nilai.</p>
            <div class="m2-example"><b>Contoh:</b> Data 3, 1, 2, 4, 2 jika diurutkan menaik menjadi 1, 2, 2, 3, 4.</div>
          </div>
          ${img("step-urutkan-data", "Ilustrasi mengurutkan data")}
        </div>

        <div class="m2-lesson">
          <div>
            <h3>3. Menyajikan Data dalam Tabel Frekuensi</h3>
            <p>Tabel frekuensi menyajikan nilai atau kategori data beserta banyak kemunculannya. Banyak kemunculan suatu nilai disebut frekuensi.</p>
            <div class="m2-example"><b>Contoh:</b> Jika nilai 2 muncul dua kali, frekuensi untuk nilai 2 adalah 2.</div>
          </div>
          ${img("step-tabel-frekuensi", "Ilustrasi tabel frekuensi")}
        </div>
        <div class="m2-btn-row"><button class="m2-btn" type="button" data-go="contoh">Coba Contoh Interaktif →</button></div>
      </article>
    </section>

    <section class="m2-panel" id="m2-panel-contoh" role="tabpanel" aria-labelledby="m2-tab-contoh" data-panel="contoh">
      <div class="m2-card">
        <p class="m2-eyebrow">Contoh interaktif</p>
        <h2>Yuk, Urutkan Data!</h2>
        <p class="m2-lead">Perhatikan data jumlah buku yang dibaca oleh 8 siswa dalam satu bulan. Klik tombol untuk mengurutkan data dari yang terkecil ke terbesar.</p>
        <div class="m2-interactive">
          <div>
            <h3>Data awal</h3>
            <div class="m2-data-pills m2-editable-data" id="m2-unsorted" aria-label="Data yang dapat diubah"></div>
            <p class="m2-edit-hint">Ubah angka pada kotak sesuai keinginanmu (0–99), lalu tekan Urutkan Data.</p>
            <div class="m2-btn-row m2-sort-actions">
              <button class="m2-btn" type="button" id="m2-sort">↕ Urutkan Data</button>
              <button class="m2-btn secondary" type="button" id="m2-reset">↻ Ulangi</button>
            </div>
            <div class="m2-feedback" id="m2-sort-feedback" aria-live="polite">Silakan ubah angka atau langsung urutkan data yang tersedia.</div>
            <div class="m2-table-wrap">
              <table class="m2-table">
                <thead><tr><th>Jumlah buku</th><th>Frekuensi</th></tr></thead>
                <tbody id="m2-frequency-body"><tr><td colspan="2">Urutkan data untuk melihat tabel frekuensi.</td></tr></tbody>
              </table>
            </div>
          </div>
          <aside class="m2-aside">
            ${img("siswi-dati", "Ilustrasi siswi pendamping belajar")}
            <div><h3>Ingat, ya!</h3><p>Frekuensi menunjukkan berapa kali suatu nilai muncul dalam kumpulan data.</p></div>
          </aside>
        </div>
      </div>
    </section>

    <section class="m2-panel" id="m2-panel-coba" role="tabpanel" aria-labelledby="m2-tab-coba" data-panel="coba">
      <div class="m2-card">
        <p class="m2-eyebrow">Ayo coba</p>
        <h2>Uji Pemahamanmu!</h2>
        <p class="m2-lead">Pilih satu jawaban yang paling tepat. Setelah memilih, tekan Periksa Jawaban untuk melihat hasilnya.</p>
        <div class="m2-card" style="margin-top:16px;background:#fcfaff">
          <p class="m2-progress"><span id="m2-quiz-count">Soal 1 dari 3</span><span id="m2-quiz-score">Skor: 0</span></p>
          <div class="m2-progress-track"><div class="m2-progress-fill" id="m2-quiz-progress" style="width:33.33%"></div></div>
          <div style="margin-top:20px">
            <p class="m2-question" id="m2-question">Apa langkah pertama dalam mengolah data?</p>
            <div class="m2-options" id="m2-options">
              <button class="m2-option" type="button" data-answer="a"><strong>A</strong><span>Menyajikan data</span></button>
              <button class="m2-option" type="button" data-answer="b"><strong>B</strong><span>Mengumpulkan data</span></button>
              <button class="m2-option" type="button" data-answer="c"><strong>C</strong><span>Menghapus data</span></button>
              <button class="m2-option" type="button" data-answer="d"><strong>D</strong><span>Menggambar hiasan</span></button>
            </div>
            <div class="m2-feedback" id="m2-quiz-feedback" aria-live="polite">Pilih jawabanmu terlebih dahulu.</div>
            <div class="m2-btn-row">
              <button class="m2-btn" type="button" id="m2-check">Periksa Jawaban</button>
              <button class="m2-btn secondary" type="button" id="m2-next" disabled>Soal Berikutnya →</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="m2-panel" id="m2-panel-rangkuman" role="tabpanel" aria-labelledby="m2-tab-rangkuman" data-panel="rangkuman">
      <div class="m2-card">
        <div class="m2-heading">
          ${img("ic-rangkuman", "Ikon rangkuman")}
          <div><p class="m2-eyebrow">Rangkuman</p><h2>Hal Penting yang Perlu Diingat</h2></div>
        </div>
        <ul class="m2-summary-list">
          <li>Data adalah kumpulan informasi yang diperoleh dari pengamatan atau kegiatan pengumpulan informasi.</li>
          <li>Pengumpulan data dapat dilakukan melalui pengamatan, pencatatan, wawancara, atau angket.</li>
          <li>Data dapat diurutkan secara menaik (kecil ke besar) atau menurun (besar ke kecil).</li>
          <li>Tabel frekuensi memuat nilai atau kategori data dan banyak kemunculannya.</li>
          <li>Jumlah seluruh frekuensi sama dengan banyaknya data yang dikumpulkan.</li>
        </ul>
        <div class="m2-cta">
          <div class="m2-cta-copy">
            ${img("img-buku", "Ilustrasi buku")}
            <div><h3>Hebat! Kamu sudah sampai di akhir materi.</h3><p>Pastikan kamu sudah memahami setiap langkah sebelum melanjutkan.</p></div>
          </div>
          <button class="m2-btn" type="button" data-go="coba">Kerjakan Latihan →</button>
        </div>
      </div>
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
      panels.forEach((panel) =>
        panel.classList.toggle("is-active", panel.dataset.panel === name),
      );
      visited.add(name);
      const label = root.querySelector("#m2-progress-label");
      const fill = root.querySelector("#m2-progress-fill");
      if (label) label.textContent = `${visited.size} dari 5 bagian dibuka`;
      if (fill) fill.style.width = `${visited.size * 20}%`;
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activate(tab.dataset.tab));
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowRight", "ArrowLeft"].includes(event.key)) return;
        event.preventDefault();
        const next =
          (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) %
          tabs.length;
        tabs[next].focus();
        activate(tabs[next].dataset.tab);
      });
    });

    root.querySelectorAll("[data-go]").forEach((button) => {
      button.addEventListener("click", () => {
        activate(button.dataset.go);
        root.querySelector(`#m2-tab-${button.dataset.go}`)?.focus();
      });
    });

    // Aktivitas interaktif: siswa dapat mengubah data, mengurutkan, dan reset.
    const originalData = [3, 1, 4, 2, 2, 5, 3, 2];
    let currentData = [...originalData];
    const dataContainer = root.querySelector("#m2-unsorted");
    const sortButton = root.querySelector("#m2-sort");
    const resetButton = root.querySelector("#m2-reset");
    const feedback = root.querySelector("#m2-sort-feedback");
    const frequencyBody = root.querySelector("#m2-frequency-body");

    function renderEditableData(values = currentData, isSorted = false) {
      dataContainer.innerHTML = values.map((value, index) => `
        <label class="m2-data-edit">
          <span class="m2-data-index">Data ${index + 1}</span>
          <input class="m2-data-input ${isSorted ? "is-sorted" : ""}" type="number" inputmode="numeric"
            min="0" max="99" step="1" value="${value}"
            aria-label="Data ke-${index + 1}">
        </label>
      `).join("");
    }

    function resetFrequencyTable() {
      frequencyBody.innerHTML =
        '<tr><td colspan="2">Urutkan data untuk melihat tabel frekuensi.</td></tr>';
    }

    function showUnsortedState(message = "Data berubah. Tekan Urutkan Data untuk melihat hasil dan tabel frekuensi.") {
      feedback.textContent = message;
      feedback.className = "m2-feedback";
      sortButton.disabled = false;
      sortButton.textContent = "↕ Urutkan Data";
      resetFrequencyTable();
    }

    function readCurrentData() {
      const inputs = [...dataContainer.querySelectorAll(".m2-data-input")];
      if (inputs.length !== originalData.length) {
        return { valid: false, message: "Pastikan terdapat 8 data." };
      }

      const values = inputs.map((input) => {
        const raw = input.value.trim();
        return raw === "" ? NaN : Number(raw);
      });

      const invalidIndex = values.findIndex(
        (value) => !Number.isInteger(value) || value < 0 || value > 99
      );

      if (invalidIndex !== -1) {
        inputs[invalidIndex].focus();
        return {
          valid: false,
          message: "Masukkan bilangan bulat antara 0 sampai 99 pada semua kotak."
        };
      }

      return { valid: true, values };
    }

    dataContainer?.addEventListener("input", (event) => {
      if (!event.target.matches(".m2-data-input")) return;
      currentData = [...dataContainer.querySelectorAll(".m2-data-input")]
        .map((input) => input.value === "" ? NaN : Number(input.value));
      dataContainer.querySelectorAll(".m2-data-input").forEach((input) =>
        input.classList.remove("is-sorted")
      );
      showUnsortedState();
    });

    sortButton?.addEventListener("click", () => {
      const result = readCurrentData();
      if (!result.valid) {
        feedback.textContent = result.message;
        feedback.className = "m2-feedback error";
        return;
      }

      currentData = [...result.values];
      const sorted = [...currentData].sort((a, b) => a - b);
      renderEditableData(sorted, true);

      const counts = new Map();
      sorted.forEach((value) =>
        counts.set(value, (counts.get(value) || 0) + 1)
      );

      frequencyBody.innerHTML =
        [...counts.entries()].map(([value, frequency]) =>
          `<tr><td>${value}</td><td>${frequency}</td></tr>`
        ).join("") +
        `<tr><th>Jumlah</th><th>${sorted.length}</th></tr>`;

      const maxFrequency = Math.max(...counts.values());
      const mostFrequent = [...counts.entries()]
        .filter(([, frequency]) => frequency === maxFrequency)
        .map(([value]) => value);

      feedback.textContent =
        `Bagus! Data berhasil diurutkan. Nilai dengan frekuensi terbanyak: ${mostFrequent.join(", ")} (${maxFrequency} kali).`;
      feedback.className = "m2-feedback success";
      sortButton.disabled = true;
      sortButton.textContent = "Data Berhasil Diurutkan ✓";
    });

    resetButton?.addEventListener("click", () => {
      currentData = [...originalData];
      renderEditableData(originalData);
      showUnsortedState("Data berhasil dikembalikan ke susunan awal. Kamu bisa mengubahnya dan mencoba lagi!");
      dataContainer.querySelector(".m2-data-input")?.focus();
    });

    renderEditableData(originalData);

    // Latihan formatif 3 soal.
    const questions = [
      {
        question: "Apa langkah pertama dalam mengolah data?",
        options: [
          "Menyajikan data",
          "Mengumpulkan data",
          "Menghapus data",
          "Menggambar hiasan",
        ],
        answer: 1,
        explanation:
          "Benar! Data perlu dikumpulkan terlebih dahulu sebelum diolah dan disajikan.",
      },
      {
        question: "Urutan menaik dari data 4, 1, 3, 2 adalah ...",
        options: ["4, 3, 2, 1", "1, 2, 3, 4", "2, 1, 4, 3", "1, 3, 2, 4"],
        answer: 1,
        explanation:
          "Tepat! Urutan menaik dimulai dari nilai terkecil hingga terbesar.",
      },
      {
        question: "Data 2, 3, 2, 4, 2. Berapa frekuensi nilai 2?",
        options: ["1", "2", "3", "4"],
        answer: 2,
        explanation:
          "Betul! Nilai 2 muncul sebanyak tiga kali, sehingga frekuensinya adalah 3.",
      },
    ];
    let questionIndex = 0;
    let selectedAnswer = null;
    let checked = false;
    let score = 0;

    const questionEl = root.querySelector("#m2-question");
    const optionsEl = root.querySelector("#m2-options");
    const feedbackEl = root.querySelector("#m2-quiz-feedback");
    const checkBtn = root.querySelector("#m2-check");
    const nextBtn = root.querySelector("#m2-next");

    function renderQuestion() {
      const q = questions[questionIndex];
      selectedAnswer = null;
      checked = false;
      questionEl.textContent = q.question;
      optionsEl.innerHTML = q.options
        .map(
          (option, i) =>
            `<button class="m2-option" type="button" data-answer="${i}"><strong>${String.fromCharCode(65 + i)}</strong><span>${option}</span></button>`,
        )
        .join("");
      feedbackEl.textContent = "Pilih jawabanmu terlebih dahulu.";
      feedbackEl.className = "m2-feedback";
      checkBtn.disabled = false;
      nextBtn.disabled = true;
      nextBtn.textContent =
        questionIndex === questions.length - 1
          ? "Lihat Hasil"
          : "Soal Berikutnya →";
      root.querySelector("#m2-quiz-count").textContent =
        `Soal ${questionIndex + 1} dari ${questions.length}`;
      root.querySelector("#m2-quiz-progress").style.width =
        `${((questionIndex + 1) / questions.length) * 100}%`;
    }

    optionsEl?.addEventListener("click", (event) => {
      const option = event.target.closest("[data-answer]");
      if (!option || checked) return;
      selectedAnswer = Number(option.dataset.answer);
      optionsEl
        .querySelectorAll(".m2-option")
        .forEach((item) =>
          item.classList.toggle("is-selected", item === option),
        );
    });

    checkBtn?.addEventListener("click", () => {
      if (selectedAnswer === null || checked) {
        if (selectedAnswer === null) {
          feedbackEl.textContent =
            "Pilih salah satu jawaban terlebih dahulu, ya.";
          feedbackEl.className = "m2-feedback error";
        }
        return;
      }
      checked = true;
      const q = questions[questionIndex];
      const correct = selectedAnswer === q.answer;
      if (correct) score += 100 / questions.length;
      optionsEl.querySelectorAll(".m2-option").forEach((item, i) => {
        if (i === q.answer) item.classList.add("is-correct");
        else if (i === selectedAnswer) item.classList.add("is-wrong");
      });
      feedbackEl.textContent = `${correct ? "Hebat, jawabanmu benar! " : "Belum tepat. "}${q.explanation}`;
      feedbackEl.className = `m2-feedback ${correct ? "success" : "error"}`;
      root.querySelector("#m2-quiz-score").textContent =
        `Skor: ${Math.round(score)}`;
      checkBtn.disabled = true;
      nextBtn.disabled = false;
    });

    nextBtn?.addEventListener("click", () => {
      if (!checked) return;
      if (questionIndex < questions.length - 1) {
        questionIndex += 1;
        renderQuestion();
      } else {
        questionEl.textContent = `Latihan selesai! Skor kamu ${Math.round(score)} dari 100.`;
        optionsEl.innerHTML = "";
        feedbackEl.textContent =
          score >= 66.67
            ? "Kerja bagus! Terus pertahankan pemahamanmu."
            : "Tetap semangat! Baca kembali uraian materi, lalu coba lagi.";
        feedbackEl.className = `m2-feedback ${score >= 66.67 ? "success" : ""}`;
        checkBtn.disabled = true;
        nextBtn.disabled = true;
        nextBtn.textContent = "Latihan Selesai";
      }
    });

    renderQuestion();
  };
})();
