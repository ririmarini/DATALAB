/* ==========================================================
   DATALAB | MATERI 01
   Halaman khusus: Mengenal Statistika dan Data
   File: js/materi-01.js
   ========================================================== */

(() => {
  "use strict";

  const ROOT = "assets/images/materi/materi_01/";
  const DONE_KEY = "datalab_materi01_done";
  const QUIZ_KEY = "datalab_materi01_quiz";

  const escapeHTML = (value) =>
    String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[char]));

  const image = (name, alt, className = "") => `
    <img class="${className}" src="${ROOT}${name}.png"
         alt="${escapeHTML(alt)}" loading="lazy"
         onerror="this.style.display='none'">
  `;

  const sections = [
    { id: "belajar", label: "Ayo Belajar", icon: "ic-ayo-belajar" },
    { id: "ilustrasi", label: "Contoh & Ilustrasi", icon: "ic-contoh-ilustrasi" },
    { id: "mencoba", label: "Ayo Mencoba", icon: "ic-ayo-mencoba" },
    { id: "ringkasan", label: "Ringkasan", icon: "ic-ringkasan" },
    { id: "latihan", label: "Latihan Mini", icon: "ic-latihan-mini" }
  ];

  function renderMateri01Layout(lesson) {
    const container = document.getElementById("pageContainer");
    if (!container || !lesson || Number(lesson.id) !== 1) return;

    const completed = localStorage.getItem(DONE_KEY) === "true";
    const savedQuiz = JSON.parse(localStorage.getItem(QUIZ_KEY) || "null");

    container.innerHTML = `
      <div class="material-page materi01-page">
        <div class="materi01-breadcrumb">
          <button type="button" data-back-materials>Materi</button>
          <span>›</span>
          <span>Mengenal Statistika dan Data</span>
        </div>

        <section class="materi01-hero">
          ${image("banner-materi-01", "Unit 01 Mengenal Statistika dan Data", "materi01-banner")}
        </section>

        <nav class="materi01-tabs" aria-label="Navigasi bagian materi">
          ${sections.map((item, index) => `
            <button type="button" class="materi01-tab ${index === 0 ? "is-active" : ""}"
                    data-materi01-tab="${item.id}">
              ${image(item.icon, "", "materi01-tab-icon")}
              <span>${item.label}</span>
            </button>
          `).join("")}
        </nav>

        <div class="materi01-layout">
          <main class="materi01-main">
            <section class="materi01-panel materi01-learning" id="materi01-belajar">
              <div class="materi01-section-title">
                ${image("ic-angka-1", "Bagian satu", "materi01-number")}
                <div>
                  <span class="materi01-eyebrow">KONSEP DASAR</span>
                  <h2>Apa Itu Statistika?</h2>
                </div>
              </div>

              <div class="materi01-definition">
                <div class="materi01-definition-copy">
                  <span class="materi01-definition-label">PENGERTIAN STATISTIKA</span>
                  <p><strong>Statistika</strong> adalah ilmu yang mempelajari cara
                  <em>mengumpulkan</em>, <em>mengolah</em>, <em>menyajikan</em>,
                  <em>menganalisis</em>, dan <em>menafsirkan</em> data untuk memperoleh
                  informasi yang bermanfaat.</p>
                  <p class="materi01-definition-note">Melalui statistika, kumpulan data yang awalnya terlihat biasa
                  dapat membantu kita memahami keadaan dan mengambil keputusan.</p>
                </div>
                <div class="materi01-definition-art">
                  ${image("ilustrasi-statistika", "Ilustrasi statistika", "")}
                </div>
              </div>

              <div class="materi01-process">
                <div class="materi01-process-heading">
                  ${image("ic-tahapan", "Ikon tahapan")}
                  <h3>Tahapan dalam Statistika</h3>
                </div>
                <div class="materi01-process-grid">
                  <article class="materi01-process-item">
                    ${image("ilustrasi-daftar", "Mengumpulkan data")}
                    <strong>1. Mengumpulkan<br>Data</strong>
                  </article>
                  <span class="materi01-process-arrow">›</span>
                  <article class="materi01-process-item">
                    ${image("ilustrasi-grafik-batang", "Mengolah data")}
                    <strong>2. Mengolah<br>Data</strong>
                  </article>
                  <span class="materi01-process-arrow">›</span>
                  <article class="materi01-process-item">
                    ${image("ilustrasi-diagram-lingkaran", "Menyajikan data")}
                    <strong>3. Menyajikan<br>Data</strong>
                  </article>
                  <span class="materi01-process-arrow">›</span>
                  <article class="materi01-process-item">
                    ${image("ic-tahukah-kamu", "Menafsirkan data")}
                    <strong>4. Menafsirkan<br>Data</strong>
                  </article>
                </div>
              </div>
            </section>

            <section class="materi01-panel" id="materi01-ilustrasi">
              <div class="materi01-section-title">
                ${image("ic-angka-2", "Bagian dua", "materi01-number")}
                <div>
                  <span class="materi01-eyebrow">KENALI LEBIH DEKAT</span>
                  <h2>Data, Populasi, dan Sampel</h2>
                </div>
              </div>

              <div class="materi01-concept-grid">
                <article class="materi01-concept-card concept-blue">
                  <span class="materi01-concept-icon">📝</span>
                  <h3>Apa itu Data?</h3>
                  <p>Data adalah kumpulan fakta atau informasi yang diperoleh melalui
                  pengamatan, pengukuran, wawancara, atau kegiatan lainnya.</p>
                  <small>Contoh: tinggi badan, jumlah saudara, warna kesukaan, dan nilai ulangan.</small>
                </article>
                <article class="materi01-concept-card concept-pink">
                  <span class="materi01-concept-icon">👥</span>
                  <h3>Populasi</h3>
                  <p>Populasi adalah seluruh objek atau individu yang menjadi sasaran penelitian.</p>
                  <small>Ingat: populasi berarti keseluruhan kelompok yang diteliti.</small>
                </article>
                <article class="materi01-concept-card concept-mint">
                  <span class="materi01-concept-icon">🔎</span>
                  <h3>Sampel</h3>
                  <p>Sampel adalah sebagian anggota populasi yang dipilih untuk mewakili populasi.</p>
                  <small>Ingat: sampel merupakan bagian dari populasi.</small>
                </article>
              </div>

              <div class="materi01-example">
                <div class="materi01-example-copy">
                  <span class="materi01-pill">CONTOH SEDERHANA</span>
                  <h3>Mengenali Populasi dan Sampel</h3>
                  <p>Sebuah sekolah memiliki <strong>500 siswa</strong>. Peneliti memilih
                  <strong>50 siswa</strong> untuk mengetahui kebiasaan membaca.</p>
                  <div class="materi01-mini-table-wrap">
                    <table class="materi01-mini-table">
                      <thead><tr><th>Kelompok</th><th>Jumlah</th><th>Keterangan</th></tr></thead>
                      <tbody>
                        <tr><td>Populasi</td><td>500</td><td>Seluruh siswa</td></tr>
                        <tr><td>Sampel</td><td>50</td><td>Siswa yang dipilih</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p class="materi01-conclusion"><strong>Kesimpulan:</strong> 500 siswa adalah populasi, sedangkan 50 siswa adalah sampel.</p>
                </div>
                <div class="materi01-example-art">
                  ${image("ilustrasi-siswa", "Ilustrasi kelompok siswa", "")}
                </div>
              </div>
            </section>

            <section class="materi01-panel" id="materi01-mencoba">
              <div class="materi01-section-title">
                ${image("ic-angka-3", "Bagian tiga", "materi01-number")}
                <div>
                  <span class="materi01-eyebrow">AMATI DAN KELOMPOKKAN</span>
                  <h2>Mengenal Jenis-Jenis Data</h2>
                </div>
              </div>
              <p class="materi01-lead">Data dapat dibedakan menjadi dua jenis berdasarkan bentuknya.</p>
              <div class="materi01-data-types">
                <article class="materi01-type-card type-qualitative">
                  <div class="materi01-type-heading"><span>🎨</span><h3>Data Kualitatif</h3></div>
                  <p>Data berbentuk kategori atau sifat, bukan hasil hitungan angka.</p>
                  <div class="materi01-example-chips"><span>Warna kesukaan</span><span>Jenis buah</span><span>Warna tas</span></div>
                </article>
                <article class="materi01-type-card type-quantitative">
                  <div class="materi01-type-heading"><span>🔢</span><h3>Data Kuantitatif</h3></div>
                  <p>Data berbentuk angka yang dapat dihitung atau diukur.</p>
                  <div class="materi01-example-chips"><span>Jumlah saudara</span><span>Tinggi badan</span><span>Nilai ulangan</span></div>
                </article>
              </div>

              <div class="materi01-sort-activity">
                <div>
                  <span class="materi01-pill">COBA KLASIFIKASIKAN</span>
                  <h3>Termasuk jenis data apakah contoh berikut?</h3>
                  <p>Pilih salah satu contoh, lalu tentukan jenis datanya.</p>
                </div>
                <div class="materi01-sort-controls">
                  <label for="materi01-example-select">Contoh data</label>
                  <select id="materi01-example-select">
                    <option value="qualitative">Warna tas siswa</option>
                    <option value="quantitative">Tinggi badan siswa</option>
                    <option value="qualitative">Buah kesukaan siswa</option>
                    <option value="quantitative">Jumlah saudara</option>
                  </select>
                  <div class="materi01-sort-buttons">
                    <button type="button" data-sort-answer="qualitative">Kualitatif</button>
                    <button type="button" data-sort-answer="quantitative">Kuantitatif</button>
                  </div>
                  <p class="materi01-sort-feedback" aria-live="polite"></p>
                </div>
              </div>
            </section>

            <section class="materi01-panel" id="materi01-ringkasan">
              <div class="materi01-section-title">
                ${image("ic-angka-4", "Bagian empat", "materi01-number")}
                <div>
                  <span class="materi01-eyebrow">INGAT KEMBALI</span>
                  <h2>Ringkasan Materi</h2>
                </div>
              </div>
              <div class="materi01-summary-list">
                <div><span>01</span><p>Statistika digunakan untuk mengumpulkan, mengolah, menyajikan, menganalisis, dan menafsirkan data.</p></div>
                <div><span>02</span><p>Data merupakan kumpulan fakta atau informasi.</p></div>
                <div><span>03</span><p>Populasi adalah seluruh objek penelitian, sedangkan sampel adalah sebagian anggotanya.</p></div>
                <div><span>04</span><p>Data kualitatif berbentuk kategori, sedangkan data kuantitatif berbentuk angka.</p></div>
              </div>
            </section>

            <section class="materi01-panel materi01-quiz-panel" id="materi01-latihan">
              <div class="materi01-section-title">
                ${image("ic-latihan-mini", "Latihan mini", "materi01-number")}
                <div>
                  <span class="materi01-eyebrow">UJI PEMAHAMANMU</span>
                  <h2>Tantangan Mini Dati</h2>
                </div>
              </div>
              <div class="materi01-quiz-card">
                ${image("dati-belajar", "Dati mengajak belajar", "materi01-quiz-mascot")}
                <div class="materi01-quiz-content">
                  <span class="materi01-pill">1 PERTANYAAN</span>
                  <h3>Seorang peneliti memilih 40 siswa dari total 400 siswa. Berapa jumlah sampelnya?</h3>
                  <div class="materi01-quiz-options">
                    ${["40 siswa", "400 siswa", "440 siswa", "360 siswa"].map((option, index) => `
                      <button type="button" class="materi01-quiz-option ${savedQuiz && savedQuiz.answer === index ? "is-selected" : ""}"
                              data-materi01-answer="${index}" ${savedQuiz ? "disabled" : ""}>
                        <span>${String.fromCharCode(65 + index)}</span>${option}
                      </button>
                    `).join("")}
                  </div>
                  <button type="button" class="materi01-check-button" data-materi01-check ${savedQuiz ? "disabled" : ""}>Periksa Jawaban</button>
                  <div class="materi01-quiz-feedback" aria-live="polite">
                    ${savedQuiz ? (savedQuiz.correct
                      ? "<strong>🎉 Jawaban benar!</strong><p>Sampel adalah bagian populasi yang dipilih untuk diteliti. Jumlah sampelnya 40 siswa.</p>"
                      : "<strong>Belum tepat.</strong><p>Ingat, sampel adalah kelompok yang dipilih dari seluruh populasi.</p>") : ""}
                  </div>
                </div>
              </div>
              <div class="materi01-finish-row">
                <p>${completed ? "Materi 1 sudah ditandai selesai." : "Jawab tantangan dengan benar untuk menandai materi ini selesai."}</p>
                <button type="button" data-materi01-finish ${completed ? "disabled" : ""}>${completed ? "✓ Materi Selesai" : "Tandai Materi Selesai"}</button>
              </div>
            </section>

            <div class="materi01-footer-nav">
              <button type="button" data-back-materials>‹ Daftar Materi</button>
              <div class="materi01-page-indicator"><strong>Halaman 1 dari 6</strong><span><i class="is-current"></i><i></i><i></i><i></i><i></i><i></i></span></div>
              <button type="button" data-open-lesson="2">Materi Berikutnya ›</button>
            </div>
          </main>

          <aside class="materi01-aside">
            <article class="materi01-side-card materi01-tip-card">
              <div class="materi01-side-heading">
                ${image("ic-tahukah-kamu", "Ikon tahukah kamu")}
                <h3>Tahukah Kamu?</h3>
              </div>
              <p>Statistika membantu kita membuat keputusan yang lebih tepat, misalnya mengetahui minat siswa, hasil survei, atau data cuaca.</p>
              ${image("ilustrasi-grafik-batang", "Ilustrasi grafik", "materi01-side-art")}
            </article>

            <article class="materi01-side-card materi01-side-example">
              <div class="materi01-side-heading">
                <span class="materi01-side-emoji">🎯</span>
                <h3>Contoh Penerapan</h3>
              </div>
              <p>Data jumlah pengunjung perpustakaan selama lima hari dapat dicatat, diolah, lalu digunakan untuk melihat hari yang paling ramai.</p>
              <div class="materi01-library-data">
                <div><span>Senin</span><strong>24</strong></div>
                <div><span>Selasa</span><strong>30</strong></div>
                <div><span>Rabu</span><strong>28</strong></div>
                <div><span>Kamis</span><strong>35</strong></div>
                <div><span>Jumat</span><strong>33</strong></div>
              </div>
              ${image("ilustrasi-perpustakaan", "Ilustrasi perpustakaan", "materi01-library-art")}
              <p class="materi01-side-note">Data tersebut menunjukkan bahwa pengunjung terbanyak datang pada hari Kamis.</p>
              <button type="button" class="materi01-side-link" data-materi01-tab="ilustrasi">Lihat Pembahasan →</button>
            </article>
          </aside>
        </div>
      </div>
    `;

    bindMateri01Events(container);
    if (savedQuiz) {
      const options = container.querySelectorAll("[data-materi01-answer]");
      options.forEach((button) => {
        const value = Number(button.dataset.materi01Answer);
        if (value === 0) button.classList.add("is-correct");
        else if (value === savedQuiz.answer && !savedQuiz.correct) button.classList.add("is-wrong");
      });
    }
  }

  function bindMateri01Events(container) {
    container.querySelectorAll("[data-materi01-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.materi01Tab;
        const section = container.querySelector(`#materi01-${id}`);
        if (!section) return;
        container.querySelectorAll(".materi01-tab").forEach((tab) => tab.classList.toggle("is-active", tab === button));
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    let selectedAnswer = null;
    container.querySelectorAll("[data-materi01-answer]").forEach((button) => {
      button.addEventListener("click", () => {
        container.querySelectorAll("[data-materi01-answer]").forEach((item) => item.classList.remove("is-selected"));
        button.classList.add("is-selected");
        selectedAnswer = Number(button.dataset.materi01Answer);
      });
    });

    const checkButton = container.querySelector("[data-materi01-check]");
    if (checkButton) {
      checkButton.addEventListener("click", () => {
        if (selectedAnswer === null) {
          container.querySelector(".materi01-quiz-feedback").innerHTML = "<p>Pilih salah satu jawaban terlebih dahulu, ya!</p>";
          return;
        }
        const correct = selectedAnswer === 0;
        localStorage.setItem(QUIZ_KEY, JSON.stringify({ answer: selectedAnswer, correct }));
        container.querySelectorAll("[data-materi01-answer]").forEach((button) => {
          button.disabled = true;
          const value = Number(button.dataset.materi01Answer);
          if (value === 0) button.classList.add("is-correct");
          if (value === selectedAnswer && !correct) button.classList.add("is-wrong");
        });
        checkButton.disabled = true;
        container.querySelector(".materi01-quiz-feedback").innerHTML = correct
          ? "<strong>🎉 Jawaban benar!</strong><p>Sampel adalah bagian populasi yang dipilih untuk diteliti. Jumlah sampelnya 40 siswa.</p>"
          : "<strong>Belum tepat.</strong><p>Perhatikan kembali: 400 siswa adalah populasi, sedangkan 40 siswa yang dipilih adalah sampel.</p>";
      });
    }

    const finishButton = container.querySelector("[data-materi01-finish]");
    if (finishButton) {
      finishButton.addEventListener("click", () => {
        const result = JSON.parse(localStorage.getItem(QUIZ_KEY) || "null");
        if (!result || !result.correct) {
          container.querySelector(".materi01-finish-row p").textContent =
            "Selesaikan tantangan mini dengan jawaban benar terlebih dahulu.";
          return;
        }
        localStorage.setItem(DONE_KEY, "true");
        window.dispatchEvent(new CustomEvent("datalab:material-completed", {
          detail: { materialNumber: 1 }
        }));
        finishButton.disabled = true;
        finishButton.textContent = "✓ Materi Selesai";
        container.querySelector(".materi01-finish-row p").textContent =
          "Hebat! Materi 1 berhasil kamu selesaikan.";
      });
    }

    const select = container.querySelector("#materi01-example-select");
    container.querySelectorAll("[data-sort-answer]").forEach((button) => {
      button.addEventListener("click", () => {
        const correctType = select.value;
        const chosenType = button.dataset.sortAnswer;
        const feedback = container.querySelector(".materi01-sort-feedback");
        const correct = correctType === chosenType;
        feedback.className = `materi01-sort-feedback ${correct ? "is-correct" : "is-wrong"}`;
        feedback.textContent = correct
          ? "✓ Tepat! Kamu berhasil mengelompokkan contoh data tersebut."
          : "Belum tepat. Coba perhatikan apakah contoh tersebut berupa kategori atau angka.";
      });
    });
  }

  window.renderMateri01Layout = renderMateri01Layout;
})();
