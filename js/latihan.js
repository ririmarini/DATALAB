/* =========================================================
   DATALAB - LATIHAN SOAL
   Render dinamis melalui window.renderLatihanPage(container)
========================================================= */
(() => {
  "use strict";

  const STORAGE_KEY = "datalab_latihan_history_v1";
  const ASSET = {
    banner: "assets/images/banner-latihan.png",
    progressIcon: "assets/images/ic-progres-latihan.png",
    icons: "assets/icons/latihan/",
  };

  const materials = [
    { id: 1, title: "Mengenal Statistika dan Data", icon: "ic-mengenalstatistika.png" },
    { id: 2, title: "Mengolah dan Menyajikan Data", icon: "ic-mengolahdata.png" },
    {
      id: 3,
      title: "Diagram Statistika",
      icon: "ic-diagramstatistika.png",
      // Beberapa kemungkinan nama file lama; dipakai berurutan jika nama utama tidak ditemukan.
      iconFallbacks: [
        "ic-diagram-statistika.png",
        "ic-diagram statistika.png",
        "ic-statistika.png",
      ],
    },
    { id: 4, title: "Mean (Rata-rata)", icon: "ic-mean.png" },
    { id: 5, title: "Median (Nilai Tengah)", icon: "ic-median.png" },
    { id: 6, title: "Modus dan Interpretasi Data", icon: "ic-modus.png" },
  ];

  // Setiap materi memiliki 10 soal. Soal dan pembahasan dapat diedit di sini.
  const questionBank = {
    1: [
      [
        "Statistika adalah ilmu yang mempelajari tentang ...",
        [
          "Bangun ruang",
          "Pengumpulan, pengolahan, penyajian, dan analisis data",
          "Operasi bilangan saja",
          "Pengukuran panjang",
        ],
        1,
        "Statistika merupakan ilmu tentang cara mengumpulkan, mengolah, menyajikan, menganalisis, dan menarik kesimpulan dari data.",
      ],
      [
        "Sekumpulan informasi yang diperoleh dari pengamatan disebut ...",
        ["Data", "Rumus", "Sampel", "Populasi"],
        0,
        "Data adalah kumpulan fakta atau informasi hasil pengamatan maupun pengukuran.",
      ],
      [
        "Data tinggi badan siswa termasuk data ...",
        ["Kualitatif", "Kuantitatif", "Nominal", "Kategori warna"],
        1,
        "Tinggi badan dinyatakan dengan angka sehingga termasuk data kuantitatif.",
      ],
      [
        "Warna kesukaan siswa termasuk data ...",
        ["Kuantitatif", "Numerik", "Kualitatif", "Kontinu"],
        2,
        "Warna kesukaan berupa kategori atau sifat, bukan hasil pengukuran angka.",
      ],
      [
        "Seluruh siswa kelas VIII di sebuah sekolah disebut ...",
        ["Sampel", "Populasi", "Variabel", "Frekuensi"],
        1,
        "Populasi adalah seluruh objek yang menjadi sasaran pengamatan.",
      ],
      [
        "Sebagian siswa yang dipilih untuk mewakili seluruh siswa disebut ...",
        ["Populasi", "Sampel", "Sensus", "Data tunggal"],
        1,
        "Sampel merupakan sebagian anggota populasi yang dipilih untuk diteliti.",
      ],
      [
        "Data jumlah saudara kandung termasuk data ...",
        [
          "Kuantitatif diskrit",
          "Kualitatif",
          "Kuantitatif kontinu",
          "Kategori",
        ],
        0,
        "Jumlah saudara dihitung dalam bilangan bulat sehingga termasuk kuantitatif diskrit.",
      ],
      [
        "Kegiatan mengumpulkan data dari setiap anggota populasi disebut ...",
        ["Sampling", "Sensus", "Prediksi", "Modus"],
        1,
        "Sensus dilakukan dengan mengumpulkan data dari seluruh anggota populasi.",
      ],
      [
        "Seorang guru mencatat nilai ulangan 30 siswa. Objek yang diamati adalah ...",
        ["Nilai ulangan siswa", "Nama guru", "Ruang kelas", "Jadwal sekolah"],
        0,
        "Variabel atau karakteristik yang dicatat adalah nilai ulangan siswa.",
      ],
      [
        "Alasan menggunakan sampel dalam penelitian adalah ...",
        [
          "Agar data selalu sama",
          "Menghemat waktu dan biaya ketika populasi besar",
          "Menghilangkan data",
          "Mengubah hasil pengamatan",
        ],
        1,
        "Sampel dapat membuat pengumpulan data lebih efisien, asalkan dipilih secara tepat dan mewakili populasi.",
      ],
    ],
    2: [
      [
        "Tabel yang menyajikan banyak kemunculan setiap nilai disebut ...",
        ["Tabel frekuensi", "Tabel perkalian", "Tabel geometri", "Tabel rumus"],
        0,
        "Tabel frekuensi menunjukkan banyaknya kemunculan setiap nilai atau kategori.",
      ],
      [
        "Banyak kemunculan suatu nilai dalam data disebut ...",
        ["Rata-rata", "Frekuensi", "Median", "Jangkauan"],
        1,
        "Frekuensi adalah jumlah kemunculan suatu nilai atau kategori.",
      ],
      [
        "Data 2, 3, 3, 4, 5. Frekuensi nilai 3 adalah ...",
        ["1", "2", "3", "4"],
        1,
        "Angka 3 muncul sebanyak dua kali.",
      ],
      [
        "Penyajian data dalam baris dan kolom disebut ...",
        ["Diagram lingkaran", "Tabel", "Diagram garis", "Piktogram"],
        1,
        "Tabel menyusun data dalam baris dan kolom agar mudah dibaca.",
      ],
      [
        "Diagram yang cocok untuk membandingkan jumlah beberapa kategori adalah ...",
        ["Diagram batang", "Diagram garis saja", "Peta", "Denah"],
        0,
        "Diagram batang memudahkan perbandingan nilai antar kategori.",
      ],
      [
        "Diagram garis paling tepat digunakan untuk menunjukkan ...",
        [
          "Perubahan dari waktu ke waktu",
          "Bentuk bangun ruang",
          "Nama siswa",
          "Warna favorit saja",
        ],
        0,
        "Diagram garis memperlihatkan kecenderungan atau perubahan data berurutan, misalnya berdasarkan waktu.",
      ],
      [
        "Jumlah seluruh frekuensi pada tabel harus sama dengan ...",
        ["Nilai terbesar", "Banyak data", "Rata-rata", "Jangkauan"],
        1,
        "Jika tabel mencakup semua data, jumlah frekuensinya sama dengan banyak seluruh data.",
      ],
      [
        "Data nilai 5, 6, 6, 7 memiliki frekuensi nilai 6 sebesar ...",
        ["1", "2", "3", "4"],
        1,
        "Nilai 6 muncul dua kali.",
      ],
      [
        "Tujuan mengelompokkan data ke dalam tabel frekuensi adalah ...",
        [
          "Membuat data lebih sulit",
          "Memudahkan membaca pola dan jumlah data",
          "Menghapus nilai",
          "Mengubah data asli",
        ],
        1,
        "Pengelompokan membantu pembaca melihat sebaran dan frekuensi data.",
      ],
      [
        "Sebelum membuat diagram, langkah yang tepat adalah ...",
        [
          "Mengabaikan data",
          "Memeriksa dan mengelompokkan data",
          "Menghapus kategori",
          "Menebak hasil",
        ],
        1,
        "Data perlu diperiksa dan disusun agar diagram akurat dan mudah dipahami.",
      ],
    ],
    3: [
      [
        "Diagram batang menggunakan ... untuk menunjukkan nilai data.",
        [
          "Batang persegi panjang",
          "Garis lengkung saja",
          "Sektor lingkaran",
          "Gambar peta",
        ],
        0,
        "Tinggi atau panjang batang mewakili nilai atau frekuensi setiap kategori.",
      ],
      [
        "Diagram lingkaran menyajikan data dalam bentuk ...",
        [
          "Batang",
          "Sektor-sektor lingkaran",
          "Titik koordinat saja",
          "Tabel perkalian",
        ],
        1,
        "Setiap sektor menunjukkan bagian atau proporsi kategori terhadap keseluruhan.",
      ],
      [
        "Diagram garis menghubungkan titik-titik data dengan ...",
        ["Garis", "Sektor", "Balok", "Simbol acak"],
        0,
        "Titik data dihubungkan dengan garis untuk memperlihatkan perubahan.",
      ],
      [
        "Jumlah sudut satu lingkaran penuh adalah ...",
        ["90°", "180°", "270°", "360°"],
        3,
        "Satu lingkaran penuh memiliki sudut 360 derajat.",
      ],
      [
        "Jika 25% siswa menyukai sepak bola, besar sudut sektornya adalah ...",
        ["45°", "90°", "120°", "180°"],
        1,
        "25% × 360° = 90°.",
      ],
      [
        "Diagram yang tepat untuk membandingkan penjualan beberapa jenis buah adalah ...",
        ["Diagram batang", "Diagram garis waktu", "Denah", "Peta"],
        0,
        "Diagram batang cocok untuk membandingkan jumlah antar jenis buah.",
      ],
      [
        "Penjualan naik dari Januari hingga Maret. Diagram yang paling jelas menunjukkan tren tersebut adalah ...",
        ["Diagram garis", "Diagram gambar bangun", "Tabel perkalian", "Denah"],
        0,
        "Diagram garis menampilkan arah perubahan dari waktu ke waktu.",
      ],
      [
        "Pada diagram batang, sumbu mendatar biasanya memuat ...",
        ["Kategori", "Judul saja", "Kesimpulan", "Sumber warna"],
        0,
        "Sumbu mendatar umumnya berisi nama kategori, sedangkan sumbu tegak berisi nilai atau frekuensi.",
      ],
      [
        "Jika sebuah kategori memiliki sektor 180° pada diagram lingkaran, proporsinya adalah ...",
        ["25%", "40%", "50%", "75%"],
        2,
        "180° ÷ 360° × 100% = 50%.",
      ],
      [
        "Hal penting yang harus ada agar diagram mudah dipahami adalah ...",
        [
          "Judul dan keterangan yang jelas",
          "Warna sebanyak mungkin",
          "Angka tanpa label",
          "Batang tanpa skala",
        ],
        0,
        "Judul, label, skala, dan keterangan membantu pembaca memahami informasi diagram.",
      ],
    ],
    4: [
      [
        "Mean disebut juga ...",
        ["Nilai tengah", "Rata-rata", "Nilai paling sering", "Jangkauan"],
        1,
        "Mean adalah ukuran pemusatan data yang dikenal sebagai rata-rata.",
      ],
      [
        "Mean dari 4, 6, dan 8 adalah ...",
        ["5", "6", "7", "8"],
        1,
        "(4 + 6 + 8) ÷ 3 = 6.",
      ],
      [
        "Rumus mean data tunggal adalah ...",
        [
          "Jumlah data ÷ banyak data",
          "Nilai terbesar − terkecil",
          "Nilai tengah",
          "Frekuensi terbesar",
        ],
        0,
        "Mean diperoleh dengan membagi jumlah seluruh nilai dengan banyaknya data.",
      ],
      [
        "Jumlah nilai 5 siswa adalah 400. Mean nilainya adalah ...",
        ["70", "75", "80", "85"],
        2,
        "400 ÷ 5 = 80.",
      ],
      [
        "Mean dari 5, 7, 8, dan 10 adalah ...",
        ["7", "7,5", "8", "8,5"],
        1,
        "(5 + 7 + 8 + 10) ÷ 4 = 7,5.",
      ],
      [
        "Data 6, 8, 10 memiliki mean ...",
        ["7", "8", "9", "10"],
        1,
        "(6 + 8 + 10) ÷ 3 = 8.",
      ],
      [
        "Jika mean 4 bilangan adalah 9, jumlah keempat bilangan itu ...",
        ["13", "18", "27", "36"],
        3,
        "Jumlah data = mean × banyak data = 9 × 4 = 36.",
      ],
      [
        "Data 4, 6, 8, x memiliki mean 7. Nilai x adalah ...",
        ["8", "9", "10", "11"],
        2,
        "Jumlah yang diperlukan 7 × 4 = 28. Maka x = 28 − 18 = 10.",
      ],
      [
        "Nilai 70, 80, 90, 100 memiliki mean ...",
        ["80", "82,5", "85", "90"],
        2,
        "Jumlah 340 dibagi 4 sama dengan 85.",
      ],
      [
        "Satu nilai yang sangat tinggi dapat menyebabkan mean ...",
        [
          "Tidak berubah",
          "Tertarik ke arah nilai tinggi",
          "Selalu menjadi nol",
          "Sama dengan median",
        ],
        1,
        "Mean menggunakan seluruh nilai sehingga nilai ekstrem dapat memengaruhi rata-rata.",
      ],
    ],
    5: [
      [
        "Median adalah ...",
        [
          "Nilai paling sering muncul",
          "Nilai tengah setelah data diurutkan",
          "Jumlah seluruh data",
          "Selisih nilai",
        ],
        1,
        "Median merupakan nilai tengah dari data yang telah diurutkan.",
      ],
      [
        "Median dari 2, 4, 6 adalah ...",
        ["2", "4", "6", "12"],
        1,
        "Data sudah urut dan nilai tengahnya adalah 4.",
      ],
      [
        "Median dari 2, 4, 6, 8 adalah ...",
        ["4", "5", "6", "7"],
        1,
        "Karena banyak data genap, median = (4 + 6) ÷ 2 = 5.",
      ],
      [
        "Sebelum menentukan median, data harus ...",
        ["Dijumlahkan saja", "Diurutkan", "Dihapus", "Dikalikan"],
        1,
        "Data perlu diurutkan dari terkecil ke terbesar atau sebaliknya.",
      ],
      [
        "Median dari 3, 1, 5, 7, 9 adalah ...",
        ["3", "5", "7", "9"],
        1,
        "Urutan data 1, 3, 5, 7, 9; nilai tengahnya 5.",
      ],
      [
        "Median dari 4, 8, 2, 6 adalah ...",
        ["4", "5", "6", "7"],
        1,
        "Urutkan menjadi 2, 4, 6, 8. Median = (4 + 6) ÷ 2 = 5.",
      ],
      [
        "Jika banyak data ganjil, median terletak pada posisi ...",
        ["n ÷ 2", "(n + 1) ÷ 2", "n + 1", "2n"],
        1,
        "Untuk n ganjil, posisi median adalah (n + 1) ÷ 2 setelah data diurutkan.",
      ],
      [
        "Median dari 10, 12, 14, 16, 18, 20 adalah ...",
        ["14", "15", "16", "17"],
        1,
        "Data genap: median = (14 + 16) ÷ 2 = 15.",
      ],
      [
        "Data 5, 7, 9, 11, 13 memiliki median ...",
        ["7", "9", "10", "11"],
        1,
        "Nilai ketiga dari lima data terurut adalah 9.",
      ],
      [
        "Ukuran pemusatan yang relatif tidak mudah dipengaruhi nilai ekstrem adalah ...",
        ["Median", "Jumlah", "Jangkauan", "Nilai maksimum"],
        0,
        "Median ditentukan oleh posisi tengah sehingga umumnya lebih tahan terhadap nilai ekstrem dibanding mean.",
      ],
    ],
    6: [
      [
        "Modus adalah nilai yang ...",
        [
          "Paling kecil",
          "Paling besar",
          "Paling sering muncul",
          "Berada di tengah",
        ],
        2,
        "Modus merupakan nilai dengan frekuensi kemunculan tertinggi.",
      ],
      [
        "Modus dari 2, 3, 3, 4, 5 adalah ...",
        ["2", "3", "4", "5"],
        1,
        "Angka 3 muncul dua kali, lebih sering daripada nilai lainnya.",
      ],
      [
        "Data 4, 4, 5, 5, 6 memiliki ...",
        ["Tidak ada modus", "Dua modus, 4 dan 5", "Modus 6", "Modus 4 saja"],
        1,
        "Nilai 4 dan 5 sama-sama memiliki frekuensi tertinggi, yaitu dua.",
      ],
      [
        "Data 1, 2, 3, 4 memiliki modus ...",
        ["1", "2", "3", "Tidak ada"],
        3,
        "Semua nilai muncul satu kali sehingga tidak ada nilai yang paling sering.",
      ],
      [
        "Pada data 5, 5, 6, 7, 7, 7, modusnya adalah ...",
        ["5", "6", "7", "Tidak ada"],
        2,
        "Nilai 7 muncul tiga kali, paling banyak.",
      ],
      [
        "Jika sebagian besar siswa memilih sepak bola sebagai olahraga favorit, kategori tersebut merupakan ...",
        ["Mean", "Median", "Modus", "Jangkauan"],
        2,
        "Kategori yang paling banyak dipilih adalah modus.",
      ],
      [
        "Jangkauan data diperoleh dari ...",
        [
          "Nilai terbesar − nilai terkecil",
          "Jumlah ÷ banyak data",
          "Nilai tengah",
          "Frekuensi terkecil",
        ],
        0,
        "Jangkauan menunjukkan selisih antara nilai maksimum dan minimum.",
      ],
      [
        "Jangkauan dari 4, 7, 9, 12, 15 adalah ...",
        ["8", "9", "11", "15"],
        2,
        "Jangkauan = 15 − 4 = 11.",
      ],
      [
        "Data penjualan: Senin 5, Selasa 8, Rabu 8, Kamis 6. Hari dengan penjualan terbanyak adalah ...",
        ["Senin", "Selasa dan Rabu", "Kamis", "Semua sama"],
        1,
        "Penjualan tertinggi adalah 8 dan terjadi pada Selasa serta Rabu.",
      ],
      [
        "Kesimpulan yang baik berdasarkan data harus ...",
        [
          "Sesuai informasi dan bukti pada data",
          "Berdasarkan tebakan",
          "Mengabaikan sebagian data",
          "Selalu menyatakan semua sama",
        ],
        0,
        "Interpretasi harus didukung oleh pola dan nilai yang benar-benar ditunjukkan data.",
      ],
    ],
  };

  let activeContainer = null;
  let currentQuestions = [];
  let currentIndex = 0;
  let correctCount = 0;
  let answered = false;
  let currentTitle = "";
  let sessionAnswers = [];

  const escapeHTML = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char],
    );

  function readHistory() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  }

  function saveResult(key, result) {
    const history = readHistory();
    if (!history[key]) history[key] = [];
    history[key].push({
      score: result.score,
      correct: result.correct,
      total: result.total,
      date: new Date().toISOString(),
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }

  function getBestScore(key) {
    const list = readHistory()[key] || [];
    return list.length
      ? Math.max(...list.map((item) => Number(item.score) || 0))
      : null;
  }

  function getAsset(name) {
    return `${ASSET.icons}${name}`;
  }

  // Ilustrasi materi menggunakan aset PNG yang sudah tersedia di assets/images.
  function getMaterialAsset(name) {
    return `assets/images/${name}`;
  }

  function renderHome(container) {
    const history = readHistory();
    const totalAttempts = Object.values(history).reduce(
      (sum, arr) => sum + (Array.isArray(arr) ? arr.length : 0),
      0,
    );
    const completedMaterials = materials.filter(
      (m) => (history[String(m.id)] || []).length > 0,
    ).length;
    const percent = Math.round((completedMaterials / materials.length) * 100);

    container.innerHTML = `
      <div id="latihanPage">
        <div class="latihan-banner">
          <img src="${ASSET.banner}" alt="Banner Latihan Soal DataLab">
        </div>

        <div class="latihan-layout">
          <main class="latihan-main">
            <section class="latihan-section latihan-material-section">
              <div class="latihan-section-heading latihan-material-heading">
                <div class="latihan-heading-copy">
                  <h2 class="latihan-title-with-icon">
                    <img src="assets/images/icon-pilih-materi-HD-transparan.png"
                      alt="" aria-hidden="true" class="latihan-heading-icon">
                    <span>Pilih Materi Latihan</span>
                  </h2>
                  <p>Pilih materi yang ingin kamu pelajari dan kerjakan.</p>
                </div>
                <label class="latihan-search">
                  <span aria-hidden="true">⌕</span>
                  <input type="search" id="latihanSearch" placeholder="Cari materi latihan..." aria-label="Cari materi latihan">
                </label>
              </div>

              <div class="latihan-material-grid">
                ${materials
                  .map((m) => {
                    const attempts = history[String(m.id)] || [];
                    const best = getBestScore(String(m.id));
                    const progress = attempts.length ? 100 : 0;
                    return `
                    <button class="latihan-material-card latihan-material-${m.id}" type="button"
                      data-start-material="${m.id}" data-material-search="${escapeHTML(m.title.toLowerCase())}">
                      <span class="latihan-material-icon">
                        <img src="${getMaterialAsset(m.icon)}" alt=""
                          ${m.iconFallbacks ? `data-icon-fallbacks="${escapeHTML(JSON.stringify(m.iconFallbacks))}"` : ""}>
                      </span>
                      <span class="latihan-material-info">
                        <span class="latihan-unit">UNIT ${String(m.id).padStart(2, "0")}</span>
                        <strong>${escapeHTML(m.title)}</strong>
                        <span class="latihan-card-meta">
                          <span>▤ 10 Soal</span><span>◷ ±15 menit</span>
                        </span>
                        <span class="latihan-card-progress-label">Progres: ${progress}%</span>
                        <span class="latihan-mini-progress"><span style="width:${progress}%"></span></span>
                        <span class="latihan-start-label">▶ Mulai Latihan</span>
                        ${attempts.length ? `<small class="latihan-best-score">Nilai terbaik: ${best}</small>` : ""}
                      </span>
                    </button>`;
                  })
                  .join("")}
              </div>
              <p class="latihan-no-results" id="latihanNoResults" hidden>Materi tidak ditemukan. Coba kata kunci lain.</p>
            </section>
          </main>

          <aside class="latihan-sidebar-panels">
            <section class="latihan-overview-card latihan-progress-panel">
              <h3><img class="latihan-heading-icon latihan-progress-heading-icon" src="${ASSET.progressIcon}" alt="Ilustrasi progres latihan" width="44" height="44"> <span>Progres Latihan</span></h3>
              <div class="latihan-progress-row">
                <div class="latihan-progress-ring" style="--progress:${percent}%"><strong>${percent}%</strong></div>
                <div class="latihan-progress-copy">
                  <strong>${completedMaterials} dari 6 materi sudah dikerjakan</strong>
                  <span>${totalAttempts} sesi latihan telah diselesaikan.</span>
                </div>
              </div>
            </section>

            <section class="latihan-overview-card latihan-mode-panel">
              <h3>⚙️ Mode Latihan</h3>
              <button class="latihan-mode-card" type="button" data-start-mode="per-materi">
                <img src="${getAsset("ic-latihan-permateri.png")}" alt="">
                <span><strong>Latihan Per Materi</strong><small>Pilih satu topik materi.</small></span>
                <span class="latihan-mode-arrow">›</span>
              </button>
              <button class="latihan-mode-card" type="button" data-start-mode="campuran">
                <img src="${getAsset("ic-latihan-campuran.png")}" alt="">
                <span><strong>Latihan Campuran</strong><small>Soal dari seluruh materi.</small></span>
                <span class="latihan-mode-arrow">›</span>
              </button>
            </section>

            <section class="latihan-overview-card latihan-tips">
              <img src="${getAsset("ic-tips.png")}" alt="">
              <div>
                <h3>Tips Latihan!</h3>
                <p>Baca soal dengan teliti, periksa pembahasan, dan ulangi jika perlu agar pemahamanmu semakin kuat.</p>
              </div>
            </section>
          </aside>
        </div>

        <div id="latihanWorkspace"></div>
      </div>`;

    // Perbaikan khusus ikon Unit 03: coba variasi nama file yang umum dipakai
    // sebelum memakai ikon statistika umum yang sudah tersedia di assets/images.
    container
      .querySelectorAll(".latihan-material-card img[data-icon-fallbacks]")
      .forEach((img) => {
        let candidates = [];
        try {
          candidates = JSON.parse(img.dataset.iconFallbacks || "[]");
        } catch (_) {
          candidates = [];
        }
        img.addEventListener("error", function tryNextMaterialIcon() {
          const next = candidates.shift();
          if (next) {
            img.src = getMaterialAsset(next);
          } else {
            img.removeEventListener("error", tryNextMaterialIcon);
          }
        });
      });
  }

  function startSession(container, materialId) {
    const isMixed = materialId === "mixed";
    let pool;
    if (isMixed) {
      pool = materials.flatMap((m) =>
        questionBank[m.id].map((q, i) => ({
          q,
          material: m,
          originalIndex: i,
        })),
      );
      pool = pool.sort(() => Math.random() - 0.5).slice(0, 10);
      currentQuestions = pool.map((item) => ({
        prompt: item.q[0],
        options: item.q[1],
        answer: item.q[2],
        explanation: item.q[3],
        materialTitle: item.material.title,
        materialId: item.material.id,
      }));
      currentTitle = "Latihan Campuran";
    } else {
      const material = materials.find((m) => m.id === Number(materialId));
      currentQuestions = questionBank[material.id].map((q) => [
        ...q,
        material.title,
      ]);
      currentQuestions = currentQuestions.map((q) => ({
        prompt: q[0],
        options: q[1],
        answer: q[2],
        explanation: q[3],
        materialTitle: material.title,
        materialId: material.id,
      }));
      currentTitle = material.title;
    }
    currentIndex = 0;
    correctCount = 0;
    answered = false;
    sessionAnswers = [];
    renderQuestion(container);
    container
      .querySelector("#latihanWorkspace")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderQuestion(container) {
    const workspace = container.querySelector("#latihanWorkspace");
    if (!workspace) return;
    const q = currentQuestions[currentIndex];
    if (!q) return;
    const pct = Math.round((currentIndex / currentQuestions.length) * 100);
    workspace.innerHTML = `
      <section class="latihan-workspace">
        <div class="latihan-workspace-top">
          <h2>${escapeHTML(currentTitle)}</h2>
          <div class="latihan-question-meta">
            <span class="latihan-pill">Soal ${currentIndex + 1} dari ${currentQuestions.length}</span>
            <span class="latihan-pill">${escapeHTML(q.materialTitle)}</span>
          </div>
        </div>
        <div class="latihan-question-progress"><span style="width:${pct}%"></span></div>
        <h3 class="latihan-question-text">${escapeHTML(q.prompt)}</h3>
        <div class="latihan-options">
          ${q.options
            .map(
              (option, index) => `
            <button class="latihan-option" type="button" data-answer="${index}">
              <span class="latihan-option-letter">${"ABCD"[index]}</span>
              <span>${escapeHTML(option)}</span>
            </button>`,
            )
            .join("")}
        </div>
        <div class="latihan-feedback" id="latihanFeedback" aria-live="polite"></div>
        <div class="latihan-question-actions">
          <button class="latihan-btn secondary" type="button" data-back-home>← Kembali ke materi</button>
          <button class="latihan-btn" type="button" data-next-question disabled>${currentIndex === currentQuestions.length - 1 ? "Lihat Hasil" : "Soal Berikutnya →"}</button>
        </div>
      </section>`;
  }

  function chooseAnswer(container, answerIndex) {
    if (answered) return;
    answered = true;
    const q = currentQuestions[currentIndex];
    const isCorrect = answerIndex === q.answer;
    if (isCorrect) correctCount++;
    sessionAnswers.push({
      question: q.prompt,
      selected: answerIndex,
      correct: q.answer,
      isCorrect,
    });

    container.querySelectorAll("[data-answer]").forEach((button, index) => {
      button.disabled = true;
      if (index === q.answer) button.classList.add("is-correct");
      if (index === answerIndex && !isCorrect) button.classList.add("is-wrong");
    });

    const feedback = container.querySelector("#latihanFeedback");
    feedback.className = `latihan-feedback show ${isCorrect ? "correct" : "wrong"}`;
    feedback.innerHTML = `
      <strong>${isCorrect ? "🎉 Jawabanmu benar!" : "💡 Belum tepat, yuk pelajari pembahasannya."}</strong>
      ${escapeHTML(q.explanation)}`;
    const next = container.querySelector("[data-next-question]");
    if (next) next.disabled = false;
  }

  function renderResult(container) {
    const total = currentQuestions.length;
    if (!total) return;

    const score = Math.round((correctCount / total) * 100);
    const wrongCount = total - correctCount;
    const key =
      currentQuestions[0]?.materialId &&
      currentQuestions.every(
        (q) => q.materialId === currentQuestions[0].materialId,
      )
        ? String(currentQuestions[0].materialId)
        : "mixed";

    // Simpan hasil satu kali, lalu perbarui ringkasan progres.
    saveResult(key, { score, correct: correctCount, total });
    renderHome(container);

    const target = container.querySelector("#latihanWorkspace");
    if (!target) return;

    let title = "Tetap Semangat!";
    let message = "Jangan menyerah. Pelajari kembali materi dan coba lagi, ya.";
    let badgeMarkup = "";

    if (score >= 90) {
      title = "Luar Biasa!";
      message = "Hasil yang sangat membanggakan. Pertahankan prestasimu!";
      badgeMarkup = `<div class="latihan-result-badge"><img src="assets/images/badges/badge-luar-biasa.png" alt="Badge Luar Biasa"><span>Badge Luar Biasa</span></div>`;
    } else if (score >= 80) {
      title = "Hebat Sekali!";
      message = "Kamu sudah memahami materi dengan sangat baik.";
      badgeMarkup = `<div class="latihan-result-badge"><img src="assets/images/badges/badge-sangat-baik.png" alt="Badge Sangat Baik"><span>Badge Sangat Baik</span></div>`;
    } else if (score >= 70) {
      title = "Bagus Sekali!";
      message = "Terus berlatih agar pemahamanmu semakin kuat.";
      badgeMarkup = `<div class="latihan-result-badge"><img src="assets/images/badges/badge-bagus.png" alt="Badge Bagus"><span>Badge Bagus</span></div>`;
    } else if (score >= 60) {
      title = "Usaha yang Bagus!";
      message =
        "Kamu sudah berusaha. Pelajari pembahasan dan tingkatkan lagi nilaimu.";
    }

    target.innerHTML = `
      <section class="latihan-result" aria-live="polite">
        <div class="latihan-result-decoration" aria-hidden="true">✦ ✧ ✦</div>
        <img class="latihan-result-mascot" src="assets/images/characters/dati-juara.png" alt="Dati memberikan semangat setelah latihan">
        <p class="latihan-result-eyebrow">LATIHAN SELESAI</p>
        <h2>${title}</h2>
        <p class="latihan-result-message">${message}</p>
        <div class="latihan-result-score-wrap">
          <span class="latihan-result-score">${score}</span>
          <span class="latihan-result-score-caption">Nilai Akhir</span>
        </div>
        ${badgeMarkup}
        <div class="latihan-result-stats">
          <div class="latihan-result-stat is-correct"><strong>${correctCount}</strong><span>Jawaban benar</span></div>
          <div class="latihan-result-stat is-wrong"><strong>${wrongCount}</strong><span>Jawaban salah</span></div>
          <div class="latihan-result-stat"><strong>${total}</strong><span>Total soal</span></div>
        </div>
        <p class="latihan-result-topic">Kamu telah menyelesaikan latihan <strong>${escapeHTML(currentTitle)}</strong>.</p>
        <div class="latihan-result-actions">
          <button class="latihan-btn secondary" type="button" data-back-home>← Kembali ke Materi</button>
          <button class="latihan-btn" type="button" data-retry>↻ Ulangi Latihan</button>
        </div>
      </section>`;

    target.dataset.lastMaterial = key;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleClick(event) {
    const container = activeContainer;
    if (!container || !(event.target instanceof Element)) return;
    const startMaterial = event.target.closest("[data-start-material]");
    const startMode = event.target.closest("[data-start-mode]");
    const answer = event.target.closest("[data-answer]");
    const next = event.target.closest("[data-next-question]");
    const back = event.target.closest("[data-back-home]");
    const retry = event.target.closest("[data-retry]");

    if (startMaterial)
      startSession(container, startMaterial.dataset.startMaterial);
    else if (startMode) {
      if (startMode.dataset.startMode === "campuran") {
        startSession(container, "mixed");
      } else {
        container
          .querySelector(".latihan-material-section")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        container.querySelector("#latihanSearch")?.focus();
      }
    } else if (answer) chooseAnswer(container, Number(answer.dataset.answer));
    else if (next && !next.disabled) {
      if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        answered = false;
        renderQuestion(container);
      } else renderResult(container);
    } else if (back) renderHome(container);
    else if (retry) {
      const key =
        container.querySelector("#latihanWorkspace")?.dataset.lastMaterial;
      startSession(
        container,
        key === "mixed" ? "mixed" : key || currentQuestions[0]?.materialId || 1,
      );
    }
  }

  function handleSearch(event) {
    if (event.target.id !== "latihanSearch") return;
    const query = event.target.value.trim().toLowerCase();
    let visibleCount = 0;
    activeContainer
      ?.querySelectorAll("[data-start-material]")
      .forEach((card) => {
        const matches = card.dataset.materialSearch.includes(query);
        card.hidden = !matches;
        if (matches) visibleCount++;
      });
    const empty = activeContainer?.querySelector("#latihanNoResults");
    if (empty) empty.hidden = visibleCount !== 0;
  }

  window.renderLatihanPage = function (container) {
    if (!container) return;
    activeContainer = container;
    renderHome(container);
    container.removeEventListener("click", handleClick);
    container.addEventListener("click", handleClick);
    container.removeEventListener("input", handleSearch);
    container.addEventListener("input", handleSearch);
  };
})();
