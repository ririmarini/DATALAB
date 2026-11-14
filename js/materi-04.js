/* =========================================================
   DATALAB — MATERI 04: MEAN (RATA-RATA)
   Dipanggil oleh materi.js melalui:
   window.renderMateri04Layout(lesson)
   ========================================================= */
(function () {
  "use strict";

  const ASSET = "assets/images/materi/materi_04/";

  function renderMateri04Layout(lesson) {
    const container = document.getElementById("pageContainer");
    if (!container) {
      console.error("DataLab: #pageContainer tidak ditemukan.");
      return;
    }

    container.innerHTML = `
      <main class="m04-page" aria-label="Materi 04 Mean">
        <div class="m04-banner">
          <img src="${ASSET}banner-materi-04.png" alt="Unit 04 Mean atau rata-rata"
               onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(110deg,#d8baff,#f2eaff)'">
        </div>

        <nav class="m04-tabs" aria-label="Navigasi materi Mean">
          <button class="m04-tab is-active" type="button" data-m04-tab="tujuan"><span class="m04-tab-icon">🎯</span>Tujuan Pembelajaran</button>
          <button class="m04-tab" type="button" data-m04-tab="uraian"><span class="m04-tab-icon">📖</span>Uraian Materi</button>
          <button class="m04-tab" type="button" data-m04-tab="contoh"><span class="m04-tab-icon">💻</span>Contoh Interaktif</button>
          <button class="m04-tab" type="button" data-m04-tab="coba"><span class="m04-tab-icon">🧪</span>Ayo Coba</button>
          <button class="m04-tab" type="button" data-m04-tab="rangkuman"><span class="m04-tab-icon">📋</span>Rangkuman</button>
        </nav>

        <div class="m04-content">
          <section class="m04-panel is-active" data-m04-panel="tujuan">
            <div class="m04-two-col">
              <article class="m04-card">
                <div class="m04-heading-row">
                  <span class="m04-heading-icon">🎯</span>
                  <div><p class="m04-card-kicker">Tujuan Pembelajaran</p><h2>Apa yang Akan Kamu Pelajari?</h2></div>
                </div>
                <div class="m04-objectives">
                  <div class="m04-objective"><span class="m04-number">01</span><span>Memahami pengertian mean (rata-rata).</span><span class="m04-check">✓</span></div>
                  <div class="m04-objective"><span class="m04-number">02</span><span>Menghitung mean dari sekumpulan data.</span><span class="m04-check">✓</span></div>
                  <div class="m04-objective"><span class="m04-number">03</span><span>Menggunakan mean untuk menyelesaikan masalah sederhana dalam kehidupan sehari-hari.</span><span class="m04-check">✓</span></div>
                </div>
                <img class="m04-illustration" src="${ASSET}icon_tujuan_pembelajaran.png" alt="Ilustrasi tujuan pembelajaran"
                     onerror="this.style.display='none'">
              </article>

              <article class="m04-card">
                <div class="m04-heading-row">
                  <span class="m04-heading-icon">📊</span>
                  <div><p class="m04-card-kicker">Sekilas Materi 04</p><h2>Mengenal Mean</h2></div>
                </div>
                <p class="m04-lead"><strong>Mean</strong> atau rata-rata adalah nilai yang mewakili sekumpulan data. Mean diperoleh dengan menjumlahkan seluruh nilai data, kemudian membaginya dengan banyaknya data.</p>
                <div class="m04-formula-box">x̄ = <span style="display:inline-flex;flex-direction:column;align-items:center;line-height:1.05;margin-left:8px"><span style="border-bottom:3px solid currentColor;padding:0 9px 5px">Σx</span><span style="padding-top:5px">n</span></span></div>
                <div class="m04-definition-list">
                  <div class="m04-definition"><strong>x̄</strong><span>Mean (rata-rata)</span></div>
                  <div class="m04-definition"><strong>Σx</strong><span>Jumlah seluruh nilai data</span></div>
                  <div class="m04-definition"><strong>n</strong><span>Banyaknya data</span></div>
                </div>
              </article>
            </div>
          </section>

          <section class="m04-panel" data-m04-panel="uraian">
            <div class="m04-two-col">
              <article class="m04-card">
                <div class="m04-heading-row"><span class="m04-heading-icon">📖</span><div><p class="m04-card-kicker">Uraian Materi</p><h2>Bagaimana Cara Menghitung Mean?</h2></div></div>
                <p class="m04-lead">Bayangkan lima siswa memperoleh nilai latihan yang berbeda. Kita dapat mencari satu nilai yang mewakili nilai mereka dengan menghitung rata-rata.</p>
                <div class="m04-example">
                  <div class="m04-example-label">Contoh data nilai</div>
                  <div class="m04-data-pills"><span class="m04-data-pill">70</span><span class="m04-data-pill">80</span><span class="m04-data-pill">75</span><span class="m04-data-pill">85</span><span class="m04-data-pill">90</span></div>
                  <div class="m04-equation">Jumlah data = 70 + 80 + 75 + 85 + 90 = 400<br>Banyak data = 5<br>Mean = 400 ÷ 5 = <strong>80</strong></div>
                </div>
              </article>
              <article class="m04-card">
                <div class="m04-heading-row"><span class="m04-heading-icon">🪜</span><div><p class="m04-card-kicker">Langkah Menghitung</p><h2>Ikuti 3 Langkah Ini</h2></div></div>
                <div class="m04-steps">
                  <div class="m04-step"><span class="m04-step-bullet">1</span><p><strong>Jumlahkan</strong> semua nilai yang ada pada data.</p></div>
                  <div class="m04-step"><span class="m04-step-bullet">2</span><p><strong>Hitung</strong> banyaknya nilai atau jumlah data.</p></div>
                  <div class="m04-step"><span class="m04-step-bullet">3</span><p><strong>Bagikan</strong> jumlah seluruh nilai dengan banyak data.</p></div>
                </div>
                <div class="m04-summary-highlight">Mean = Jumlah seluruh data ÷ Banyak data</div>
              </article>
            </div>
          </section>

          <section class="m04-panel" data-m04-panel="contoh">
            <div class="m04-card">
              <div class="m04-heading-row"><span class="m04-heading-icon">🧮</span><div><p class="m04-card-kicker">Contoh Interaktif</p><h2>Coba Hitung Rata-ratanya!</h2></div></div>
              <p class="m04-lead">Ubah angka di bawah ini sesuai keinginanmu. Pisahkan setiap nilai dengan tanda koma, lalu tekan tombol hitung.</p>
              <div class="m04-interactive-grid">
                <div>
                  <label class="m04-field-label" for="m04-data-input">Masukkan kumpulan data</label>
                  <input class="m04-input" id="m04-data-input" type="text" value="70, 80, 75, 85, 90" inputmode="decimal">
                  <p class="m04-help">Contoh penulisan: 70, 80, 75, 85, 90. Gunakan angka dan pisahkan dengan koma.</p>
                  <div class="m04-actions">
                    <button class="m04-button" type="button" data-m04-calculate>Hitung Mean</button>
                    <button class="m04-button secondary" type="button" data-m04-reset>Gunakan Contoh</button>
                  </div>
                  <p class="m04-help" id="m04-calc-message" aria-live="polite"></p>
                </div>
                <div class="m04-result" aria-live="polite">
                  <div class="m04-result-label">Hasil rata-rata (mean)</div>
                  <div class="m04-result-value" id="m04-result-value">80</div>
                  <div class="m04-result-note" id="m04-result-note">400 ÷ 5 data</div>
                </div>
              </div>
            </div>
          </section>

          <section class="m04-panel" data-m04-panel="coba">
            <div class="m04-card">
              <div class="m04-heading-row"><span class="m04-heading-icon">🧪</span><div><p class="m04-card-kicker">Ayo Coba</p><h2>Uji Pemahamanmu!</h2></div></div>
              <p class="m04-lead">Baca soal dengan teliti, lalu pilih jawaban yang menurutmu benar.</p>
              <div class="m04-quiz-question">
                <p><strong>Perhatikan data berikut:</strong> 6, 8, 10, 12, 14.</p>
                <p>Berapa mean dari data tersebut?</p>
                <div class="m04-quiz-options">
                  <button class="m04-option" type="button" data-m04-answer="8">A. 8</button>
                  <button class="m04-option" type="button" data-m04-answer="9">B. 9</button>
                  <button class="m04-option" type="button" data-m04-answer="10">C. 10</button>
                  <button class="m04-option" type="button" data-m04-answer="12">D. 12</button>
                </div>
                <div class="m04-actions"><button class="m04-button" type="button" data-m04-check>Periksa Jawaban</button><button class="m04-button secondary" type="button" data-m04-quiz-reset>Ulangi</button></div>
                <div class="m04-feedback" id="m04-feedback" aria-live="polite"></div>
              </div>
            </div>
          </section>

          <section class="m04-panel" data-m04-panel="rangkuman">
            <div class="m04-two-col">
              <article class="m04-card">
                <div class="m04-heading-row"><span class="m04-heading-icon">📋</span><div><p class="m04-card-kicker">Rangkuman</p><h2>Ingat Kembali!</h2></div></div>
                <div class="m04-summary-list">
                  <div class="m04-summary-item"><span>📌</span><div>Mean adalah nilai rata-rata yang mewakili sekumpulan data.</div></div>
                  <div class="m04-summary-item"><span>➕</span><div>Untuk mencari mean, jumlahkan seluruh nilai data terlebih dahulu.</div></div>
                  <div class="m04-summary-item"><span>🔢</span><div>Bagilah jumlah seluruh nilai dengan banyaknya data.</div></div>
                </div>
              </article>
              <article class="m04-card">
                <div class="m04-heading-row"><span class="m04-heading-icon">💡</span><div><p class="m04-card-kicker">Rumus Penting</p><h2>Rumus Mean</h2></div></div>
                <div class="m04-formula-box">x̄ = Σx / n</div>
                <p class="m04-lead">Jangan lupa: jumlahkan semua data, hitung banyak datanya, lalu bagi. Itulah cara menemukan mean!</p>
                <div class="m04-summary-highlight">Kamu hebat! Terus berlatih agar semakin mahir. 🌟</div>
              </article>
            </div>
          </section>
        </div>
      </main>
    `;

    bindEvents(container);
  }

  function bindEvents(root) {
    root.querySelectorAll("[data-m04-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.m04Tab;
        root.querySelectorAll("[data-m04-tab]").forEach((b) => b.classList.toggle("is-active", b === button));
        root.querySelectorAll("[data-m04-panel]").forEach((panel) => {
          panel.classList.toggle("is-active", panel.dataset.m04Panel === target);
        });
      });
    });

    const input = root.querySelector("#m04-data-input");
    const value = root.querySelector("#m04-result-value");
    const note = root.querySelector("#m04-result-note");
    const message = root.querySelector("#m04-calc-message");

    root.querySelector("[data-m04-calculate]")?.addEventListener("click", () => {
      const raw = input.value.trim();
      const values = raw.split(",").map(v => v.trim()).filter(Boolean).map(Number);
      if (!raw || values.length === 0 || values.some(v => !Number.isFinite(v))) {
        message.textContent = "Periksa kembali datamu. Masukkan angka dan pisahkan dengan koma.";
        message.style.color = "#b43d55";
        return;
      }
      const sum = values.reduce((a, b) => a + b, 0);
      const mean = sum / values.length;
      value.textContent = Number.isInteger(mean) ? mean : mean.toFixed(2);
      note.textContent = `${sum} ÷ ${values.length} data`;
      message.textContent = "Berhasil! Kamu sudah mendapatkan nilai mean.";
      message.style.color = "#198653";
    });

    root.querySelector("[data-m04-reset]")?.addEventListener("click", () => {
      input.value = "70, 80, 75, 85, 90";
      value.textContent = "80";
      note.textContent = "400 ÷ 5 data";
      message.textContent = "";
    });

    let selectedAnswer = "";
    const options = root.querySelectorAll("[data-m04-answer]");
    options.forEach(option => option.addEventListener("click", () => {
      selectedAnswer = option.dataset.m04Answer;
      options.forEach(item => item.classList.toggle("is-selected", item === option));
      const feedback = root.querySelector("#m04-feedback");
      feedback.className = "m04-feedback";
      feedback.textContent = "";
    }));

    root.querySelector("[data-m04-check]")?.addEventListener("click", () => {
      const feedback = root.querySelector("#m04-feedback");
      feedback.classList.add("show");
      if (!selectedAnswer) {
        feedback.classList.add("incorrect");
        feedback.textContent = "Pilih salah satu jawaban terlebih dahulu, ya!";
      } else if (selectedAnswer === "10") {
        feedback.classList.add("correct");
        feedback.textContent = "Hebat, jawabanmu benar! Jumlah data = 50 dan banyak data = 5, sehingga mean = 50 ÷ 5 = 10.";
      } else {
        feedback.classList.add("incorrect");
        feedback.textContent = "Belum tepat. Coba jumlahkan 6 + 8 + 10 + 12 + 14, lalu bagi dengan 5.";
      }
    });

    root.querySelector("[data-m04-quiz-reset]")?.addEventListener("click", () => {
      selectedAnswer = "";
      options.forEach(item => item.classList.remove("is-selected"));
      const feedback = root.querySelector("#m04-feedback");
      feedback.className = "m04-feedback";
      feedback.textContent = "";
    });

  }

  window.renderMateri04Layout = renderMateri04Layout;
})();
