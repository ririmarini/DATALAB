/* =========================================================
   DATALAB — MATERI 05: MEDIAN (NILAI TENGAH)
   Struktur dan pola navigasi mengikuti Materi 04.
   Seluruh interaksi dibatasi pada .m05-page.
   ========================================================= */
(function () {
  "use strict";

  const ASSET = "assets/images/materi/materi_05/";

  function renderMateri05Layout(lesson) {
    const container = document.getElementById("pageContainer");
    if (!container) {
      console.error("DataLab: #pageContainer tidak ditemukan.");
      return;
    }

    container.innerHTML = `
      <main class="m05-page" aria-label="Materi 05 Median">
        <div class="m05-breadcrumb">
          <button type="button" data-m05-back>Materi</button>
          <span>›</span>
          <span>Median (Nilai Tengah)</span>
        </div>

        <div class="m05-banner">
          <img src="${ASSET}banner-materi-05.png"
               alt="Unit 05 Median (Nilai Tengah)"
               onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(110deg,#d8baff,#f2eaff)'">
        </div>

        <nav class="m05-tabs" aria-label="Navigasi materi Median">
          <button class="m05-tab is-active" type="button" data-m05-tab="tujuan">
            <img class="m05-tab-icon" src="${ASSET}icon_tujuan_pembelajaran.png" alt="">
            Tujuan Pembelajaran
          </button>
          <button class="m05-tab" type="button" data-m05-tab="uraian">
            <img class="m05-tab-icon" src="${ASSET}icon_uraian_materi.png" alt="">
            Uraian Materi
          </button>
          <button class="m05-tab" type="button" data-m05-tab="contoh">
            <img class="m05-tab-icon" src="${ASSET}icon_contoh_interaktif.png" alt="">
            Contoh Interaktif
          </button>
          <button class="m05-tab" type="button" data-m05-tab="coba">
            <img class="m05-tab-icon" src="${ASSET}icon_ayo_coba.png" alt="">
            Ayo Coba
          </button>
          <button class="m05-tab" type="button" data-m05-tab="rangkuman">
            <img class="m05-tab-icon" src="${ASSET}icon_rangkuman.png" alt="">
            Rangkuman
          </button>
        </nav>

        <div class="m05-content">
          <!-- PANEL 1: TUJUAN PEMBELAJARAN -->
          <section class="m05-panel is-active" data-m05-panel="tujuan">
            <div class="m05-two-col">
              <article class="m05-card m05-objectives">
                <div class="m05-heading-row">
                  <img class="m05-heading-icon" src="${ASSET}icon_tujuan_pembelajaran.png" alt="">
                  <div>
                    <p class="m05-card-kicker">Tujuan Pembelajaran</p>
                    <h2>Apa yang Akan Kamu Pelajari?</h2>
                  </div>
                </div>
                <div class="m05-objectives-list">
                  <div class="m05-objective">
                    <span class="m05-number">01</span>
                    <span>Menjelaskan pengertian median (nilai tengah) dari suatu data.</span>
                    <span class="m05-check">✓</span>
                  </div>
                  <div class="m05-objective">
                    <span class="m05-number">02</span>
                    <span>Menentukan median dari data berjumlah ganjil.</span>
                    <span class="m05-check">✓</span>
                  </div>
                  <div class="m05-objective">
                    <span class="m05-number">03</span>
                    <span>Menentukan median dari data berjumlah genap.</span>
                    <span class="m05-check">○</span>
                  </div>
                </div>
                <img class="m05-illustration" src="${ASSET}icon_buku_ide.png" alt="Ilustrasi buku dan lampu ide untuk belajar median">
              </article>

              <article class="m05-card">
                <div class="m05-heading-row">
                  <img class="m05-heading-icon" src="${ASSET}icon_visualisasi_data.png" alt="">
                  <div>
                    <p class="m05-card-kicker">Sekilas Materi 05</p>
                    <h2>Mengenal Median</h2>
                  </div>
                </div>
                <p class="m05-lead"><strong>Median (nilai tengah)</strong> adalah nilai yang terletak di tengah setelah data diurutkan dari yang terkecil sampai terbesar.</p>
                <div class="m05-example-label">Contoh urutan data:</div>
                <div class="m05-order-visual">
                  <img src="${ASSET}contoh_urutan.png" alt="Urutan data 2, 4, 6, 8, 10">
                  <span class="m05-order-arrow">➜</span>
                  <div class="m05-median-callout"><strong>Median = 6</strong><br>(karena 6 adalah nilai tengah).</div>
                </div>
              </article>
            </div>
          </section>

          <!-- PANEL 2: URAIAN MATERI -->
          <section class="m05-panel" data-m05-panel="uraian">
            <div class="m05-two-col">
              <article class="m05-card">
                <div class="m05-heading-row">
                  <img class="m05-heading-icon" src="${ASSET}icon_uraian_materi.png" alt="">
                  <div>
                    <p class="m05-card-kicker">Uraian Materi</p>
                    <h2>Bagaimana Menentukan Median?</h2>
                  </div>
                </div>
                <p class="m05-lead">Median ditentukan setelah data diurutkan dari nilai terkecil hingga terbesar. Letak nilai tengah bergantung pada banyaknya data.</p>
                <div class="m05-example">
                  <div class="m05-example-label">Contoh data berjumlah ganjil</div>
                  <div class="m05-median-diagram odd" aria-label="Lima data dengan satu nilai tengah yaitu 6">
                    <span class="m05-diagram-caption">Satu nilai tepat di tengah</span>
                  </div>
                  <div class="m05-data-pills">
                    <span class="m05-data-pill">2</span><span class="m05-data-pill">4</span>
                    <span class="m05-data-pill" style="background:#ffe36a;color:#4b2878">6</span>
                    <span class="m05-data-pill">8</span><span class="m05-data-pill">10</span>
                  </div>
                  <div class="m05-equation">Banyak data = 5 (ganjil)<br>Nilai yang berada tepat di tengah adalah <strong>6</strong>.<br>Jadi, median = <strong>6</strong>.</div>
                </div>
                <div class="m05-summary-highlight">Untuk data ganjil, median adalah satu nilai yang tepat berada di tengah.</div>
              </article>

              <article class="m05-card">
                <div class="m05-heading-row">
                  <img class="m05-heading-icon" src="${ASSET}icon_visualisasi_data.png" alt="">
                  <div>
                    <p class="m05-card-kicker">Data Berjumlah Genap</p>
                    <h2>Bagaimana Jika Ada Dua Nilai Tengah?</h2>
                  </div>
                </div>
                <p class="m05-lead">Jika banyak data genap, terdapat dua nilai yang berada di tengah. Median diperoleh dengan menghitung rata-rata kedua nilai tersebut.</p>
                <div class="m05-example">
                  <div class="m05-example-label">Contoh data berjumlah genap</div>
                  <div class="m05-median-diagram even" aria-label="Empat data dengan dua nilai tengah yaitu 4 dan 6">
                    <span class="m05-diagram-caption">Dua nilai tengah, lalu cari rata-ratanya</span>
                  </div>
                  <div class="m05-data-pills">
                    <span class="m05-data-pill">2</span><span class="m05-data-pill" style="background:#d9c4ff">4</span>
                    <span class="m05-data-pill" style="background:#d9c4ff">6</span><span class="m05-data-pill">8</span>
                  </div>
                  <div class="m05-equation">Dua nilai tengah = 4 dan 6<br>Median = (4 + 6) ÷ 2 = <strong>5</strong>.</div>
                </div>
                <div class="m05-steps">
                  <div class="m05-step"><span class="m05-step-bullet">1</span><p>Urutkan data dari yang terkecil hingga terbesar.</p></div>
                  <div class="m05-step"><span class="m05-step-bullet">2</span><p>Tentukan satu atau dua nilai yang berada di tengah.</p></div>
                  <div class="m05-step"><span class="m05-step-bullet">3</span><p>Jika ada dua nilai tengah, hitung rata-ratanya.</p></div>
                </div>
              </article>
            </div>
          </section>

          <!-- PANEL 3: CONTOH INTERAKTIF -->
          <section class="m05-panel" data-m05-panel="contoh">
            <article class="m05-card">
              <div class="m05-heading-row">
                <img class="m05-heading-icon" src="${ASSET}icon_kalkulator_mean.png" alt="">
                <div>
                  <p class="m05-card-kicker">Contoh Interaktif</p>
                  <h2>Ayo Tentukan Median dari Datamu!</h2>
                </div>
              </div>
              <p class="m05-lead">Masukkan beberapa nilai dan pisahkan dengan tanda koma. Data akan diurutkan, kemudian median dihitung secara otomatis.</p>
              <div class="m05-interactive-grid">
                <div>
                  <label class="m05-field-label" for="m05-data-input">Masukkan kumpulan data</label>
                  <input class="m05-input" id="m05-data-input" type="text" value="70, 80, 75, 90, 85" inputmode="decimal">
                  <p class="m05-help">Contoh: 70, 80, 75, 90, 85. Gunakan koma sebagai pemisah.</p>
                  <div class="m05-actions">
                    <button class="m05-button" type="button" data-m05-calculate>Hitung Median</button>
                    <button class="m05-button secondary" type="button" data-m05-reset>Gunakan Contoh</button>
                  </div>
                  <p class="m05-help" id="m05-calc-message" aria-live="polite"></p>
                </div>
                <div class="m05-result" aria-live="polite">
                  <div class="m05-result-label">Hasil median</div>
                  <div class="m05-result-value" id="m05-result-value">80</div>
                  <div class="m05-result-note" id="m05-result-note">70, 75, 80, 85, 90</div>
                </div>
              </div>
            </article>
          </section>

          <!-- PANEL 4: AYO COBA -->
          <section class="m05-panel" data-m05-panel="coba">
            <div class="m05-two-col">
              <article class="m05-card">
                <div class="m05-heading-row">
                  <img class="m05-heading-icon" src="${ASSET}ic_ayocoba.png" alt="">
                  <div>
                    <p class="m05-card-kicker">Ayo Coba</p>
                    <h2>Uji Pemahamanmu!</h2>
                  </div>
                </div>
                <p class="m05-lead">Pilih jawaban yang paling tepat berdasarkan data pada soal berikut.</p>
                <div class="m05-quiz-question">
                  <p><strong>Perhatikan data berikut:</strong> 4, 8, 2, 10, 6.</p>
                  <p>Setelah diurutkan, berapakah median dari data tersebut?</p>
                  <div class="m05-quiz-options">
                    <button class="m05-option" type="button" data-m05-answer="4">A. 4</button>
                    <button class="m05-option" type="button" data-m05-answer="6">B. 6</button>
                    <button class="m05-option" type="button" data-m05-answer="8">C. 8</button>
                    <button class="m05-option" type="button" data-m05-answer="10">D. 10</button>
                  </div>
                  <div class="m05-actions">
                    <button class="m05-button" type="button" data-m05-check>Periksa Jawaban</button>
                    <button class="m05-button secondary" type="button" data-m05-quiz-reset>Ulangi</button>
                  </div>
                  <div class="m05-feedback" id="m05-feedback" aria-live="polite"></div>
                </div>
              </article>
              <article class="m05-card">
                <div class="m05-heading-row">
                  <img class="m05-heading-icon" src="${ASSET}ic_mulailatihan.png" alt="">
                  <div>
                    <p class="m05-card-kicker">Petunjuk Pengerjaan</p>
                    <h2>Ingat Langkahnya!</h2>
                  </div>
                </div>
                <div class="m05-steps">
                  <div class="m05-step"><span class="m05-step-bullet">1</span><p>Susun data dari nilai terkecil ke terbesar.</p></div>
                  <div class="m05-step"><span class="m05-step-bullet">2</span><p>Perhatikan banyaknya data: ganjil atau genap.</p></div>
                  <div class="m05-step"><span class="m05-step-bullet">3</span><p>Tentukan nilai tengah dengan teliti.</p></div>
                </div>
                <div class="m05-summary-highlight">Semangat mencoba, Sobat Data! 💜</div>
              </article>
            </div>
          </section>

          <!-- PANEL 5: RANGKUMAN -->
          <section class="m05-panel" data-m05-panel="rangkuman">
            <div class="m05-two-col">
              <article class="m05-card">
                <div class="m05-heading-row">
                  <img class="m05-heading-icon" src="${ASSET}icon_rangkuman_statistika.png" alt="">
                  <div>
                    <p class="m05-card-kicker">Rangkuman</p>
                    <h2>Ingat Kembali!</h2>
                  </div>
                </div>
                <div class="m05-summary-list">
                  <div class="m05-summary-item"><span>📌</span><div>Median adalah nilai tengah dari data yang telah diurutkan.</div></div>
                  <div class="m05-summary-item"><span>🔢</span><div>Untuk banyak data ganjil, median adalah satu nilai yang berada tepat di tengah.</div></div>
                  <div class="m05-summary-item"><span>➗</span><div>Untuk banyak data genap, median adalah rata-rata dari dua nilai tengah.</div></div>
                  <div class="m05-summary-item"><span>↕️</span><div>Data harus diurutkan terlebih dahulu sebelum menentukan median.</div></div>
                </div>
              </article>
              <article class="m05-card">
                <div class="m05-heading-row">
                  <img class="m05-heading-icon" src="${ASSET}icon_buku_pendidikan.png" alt="">
                  <div>
                    <p class="m05-card-kicker">Pesan Belajar</p>
                    <h2>Kamu Pasti Bisa!</h2>
                  </div>
                </div>
                <div class="m05-formula-box">Median = nilai tengah</div>
                <p class="m05-lead">Urutkan data terlebih dahulu. Jika jumlah data genap, ambil rata-rata dari dua nilai yang berada di tengah.</p>
                <div class="m05-summary-highlight">Terus berlatih agar semakin mahir memahami statistika! 🌟</div>
              </article>
            </div>
          </section>
        </div>
      </main>
    `;

    bindEvents(container);
  }

  function bindEvents(root) {
    root.querySelectorAll("[data-m05-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.m05Tab;
        root
          .querySelectorAll("[data-m05-tab]")
          .forEach((item) =>
            item.classList.toggle("is-active", item === button),
          );
        root
          .querySelectorAll("[data-m05-panel]")
          .forEach((panel) =>
            panel.classList.toggle(
              "is-active",
              panel.dataset.m05Panel === target,
            ),
          );
      });
    });

    root.querySelector("[data-m05-back]")?.addEventListener("click", () => {
      if (typeof window.renderMateriPage === "function") {
        window.renderMateriPage();
      } else {
        document.querySelector('[data-page="materi"]')?.click();
      }
    });

    const input = root.querySelector("#m05-data-input");
    const result = root.querySelector("#m05-result-value");
    const note = root.querySelector("#m05-result-note");
    const message = root.querySelector("#m05-calc-message");

    function calculateMedian() {
      const raw = input.value.trim();
      const values = raw
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
        .map(Number);

      if (
        !raw ||
        values.length === 0 ||
        values.some((value) => !Number.isFinite(value))
      ) {
        message.textContent =
          "Periksa kembali datamu. Masukkan angka dan pisahkan dengan koma.";
        message.style.color = "#b43d55";
        return;
      }

      const sorted = [...values].sort((a, b) => a - b);
      const middle = Math.floor(sorted.length / 2);
      const median =
        sorted.length % 2
          ? sorted[middle]
          : (sorted[middle - 1] + sorted[middle]) / 2;

      result.textContent = Number.isInteger(median)
        ? median
        : median.toFixed(2);
      note.textContent = sorted.join(", ");
      message.textContent =
        sorted.length % 2
          ? `Data berjumlah ganjil (${sorted.length}), jadi median adalah satu nilai tengah.`
          : `Data berjumlah genap (${sorted.length}), jadi median adalah rata-rata dua nilai tengah.`;
      message.style.color = "#198653";
    }

    root
      .querySelector("[data-m05-calculate]")
      ?.addEventListener("click", calculateMedian);
    root.querySelector("[data-m05-reset]")?.addEventListener("click", () => {
      input.value = "70, 80, 75, 90, 85";
      result.textContent = "80";
      note.textContent = "70, 75, 80, 85, 90";
      message.textContent = "";
    });

    let selectedAnswer = "";
    const options = root.querySelectorAll("[data-m05-answer]");
    options.forEach((option) =>
      option.addEventListener("click", () => {
        selectedAnswer = option.dataset.m05Answer;
        options.forEach((item) =>
          item.classList.toggle("is-selected", item === option),
        );
        const feedback = root.querySelector("#m05-feedback");
        feedback.className = "m05-feedback";
        feedback.textContent = "";
      }),
    );

    root.querySelector("[data-m05-check]")?.addEventListener("click", () => {
      const feedback = root.querySelector("#m05-feedback");
      feedback.className = "m05-feedback show";
      if (!selectedAnswer) {
        feedback.classList.add("incorrect");
        feedback.textContent = "Pilih salah satu jawaban terlebih dahulu, ya!";
      } else if (selectedAnswer === "6") {
        feedback.classList.add("correct");
        feedback.textContent =
          "Hebat, jawabanmu benar! Urutan data adalah 2, 4, 6, 8, 10. Nilai tengahnya 6, jadi median = 6.";
      } else {
        feedback.classList.add("incorrect");
        feedback.textContent =
          "Belum tepat. Urutkan data dari yang terkecil: 2, 4, 6, 8, 10. Nilai yang berada tepat di tengah adalah 6.";
      }
    });

    root
      .querySelector("[data-m05-quiz-reset]")
      ?.addEventListener("click", () => {
        selectedAnswer = "";
        options.forEach((item) => item.classList.remove("is-selected"));
        const feedback = root.querySelector("#m05-feedback");
        feedback.className = "m05-feedback";
        feedback.textContent = "";
      });
  }

  window.renderMateri05Layout = renderMateri05Layout;
})();
