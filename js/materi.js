/* ==========================================================
   DATALAB - LABORATORIUM STATISTIKA
   FILE: js/materi.js
   MATERI SMP KELAS VIII

   Halaman utama materi dipertahankan.
   Halaman detail 6 unit didesain ulang.
========================================================== */

(() => {
  "use strict";

  const STORAGE_KEY = "datalab_progress";
  const IMAGE_PATH = "assets/images/";

  /* ==========================================================
     1. DATABASE ENAM MATERI
  ========================================================== */

  const lessons = [
    {
      id: 1,
      title: "Mengenal Statistika dan Data",
      shortTitle: "Mengenal Statistika",
      image: "materi/img_materi1.png",
      color: "course-purple",
      duration: "25 menit",
      level: "Dasar",
      description:
        "Kenali statistika, data, populasi, sampel, dan jenis-jenis data melalui kegiatan sehari-hari.",

      objectives: [
        "Menjelaskan pengertian statistika dan data.",
        "Membedakan populasi dan sampel.",
        "Mengidentifikasi jenis-jenis data.",
        "Memberikan contoh penggunaan statistika dalam kehidupan.",
      ],

      context:
        "Ketua kelas VIII ingin mengetahui buah favorit teman-temannya. Ia bertanya kepada seluruh siswa dan mencatat jawaban mereka. Mengapa hasil jawaban tersebut perlu dikumpulkan dan diolah?",

      observationQuestion:
        "Bagaimana cara mengetahui buah yang paling disukai siswa?",

      concepts: [
        {
          title: "A. Pengertian Statistika",
          icon: "📊",
          content:
            "Statistika adalah ilmu yang mempelajari cara mengumpulkan, mengolah, menyajikan, menganalisis, dan menafsirkan data.",
          note: "Contohnya, sekolah menggunakan data nilai ulangan untuk mengetahui perkembangan hasil belajar siswa.",
        },
        {
          title: "B. Pengertian Data",
          icon: "📝",
          content:
            "Data adalah kumpulan fakta atau informasi yang diperoleh melalui pengamatan, pengukuran, wawancara, atau kegiatan lainnya.",
          note: "Contoh data: tinggi badan siswa, jumlah saudara, warna kesukaan, dan nilai ulangan.",
        },
        {
          title: "C. Populasi dan Sampel",
          icon: "👥",
          content:
            "Populasi adalah seluruh objek atau individu yang menjadi sasaran penelitian. Sampel adalah sebagian anggota populasi yang dipilih untuk mewakili populasi.",
          note: "Jika terdapat 200 siswa dan 40 siswa dipilih untuk disurvei, populasinya 200 siswa dan sampelnya 40 siswa.",
        },
        {
          title: "D. Jenis-Jenis Data",
          icon: "🗂️",
          content:
            "Data kualitatif berbentuk kategori atau sifat, misalnya warna kesukaan. Data kuantitatif berbentuk angka, misalnya jumlah saudara dan tinggi badan.",
          note: "Coba bedakan: warna tas termasuk data kualitatif, sedangkan berat tas termasuk data kuantitatif.",
        },
      ],

      example: {
        title: "Menentukan Populasi dan Sampel",
        problem:
          "Sebuah sekolah memiliki 500 siswa. Peneliti memilih 50 siswa untuk mengetahui kebiasaan membaca.",
        steps: [
          "Tentukan seluruh kelompok yang menjadi sasaran penelitian: 500 siswa.",
          "Tentukan kelompok yang benar-benar dipilih untuk diteliti: 50 siswa.",
          "Populasi = 500 siswa dan sampel = 50 siswa.",
        ],
        conclusion:
          "Populasi mencakup seluruh siswa, sedangkan sampel hanya sebagian siswa yang dipilih.",
      },

      exploration:
        "Amati teman-teman di kelasmu. Tuliskan tiga contoh data kualitatif dan tiga contoh data kuantitatif yang dapat dikumpulkan.",

      question:
        "Seorang peneliti memilih 40 siswa dari total 400 siswa. Berapa jumlah sampelnya?",
      options: ["40 siswa", "400 siswa", "440 siswa", "360 siswa"],
      answer: 0,
      explanation:
        "Sampel adalah bagian populasi yang dipilih untuk diteliti. Jadi, jumlah sampelnya 40 siswa.",

      summary: [
        "Statistika digunakan untuk mengolah dan menafsirkan data.",
        "Data merupakan kumpulan fakta atau informasi.",
        "Populasi adalah keseluruhan objek penelitian, sedangkan sampel adalah sebagian anggotanya.",
        "Data dapat dibedakan menjadi kualitatif dan kuantitatif.",
      ],
    },

    {
      id: 2,
      title: "Mengolah dan Menyajikan Data",
      shortTitle: "Mengolah Data",
      image: "materi/img_materi2.png",
      color: "course-blue",
      duration: "30 menit",
      level: "Dasar",
      description:
        "Belajar mengumpulkan, mengurutkan, dan menyajikan data dalam tabel frekuensi.",

      objectives: [
        "Menjelaskan beberapa cara pengumpulan data.",
        "Mengurutkan data dari nilai terkecil ke terbesar.",
        "Membuat tabel frekuensi sederhana.",
        "Membaca informasi yang terdapat dalam tabel.",
      ],

      context:
        "Dati mencatat jumlah buku yang dibaca lima siswa dalam satu bulan, yaitu 3, 5, 2, 4, dan 3 buku. Bagaimana cara menyusun data tersebut agar lebih mudah dibaca?",

      observationQuestion:
        "Mengapa data yang belum terurut lebih sulit dibandingkan?",

      concepts: [
        {
          title: "A. Pengumpulan Data",
          icon: "📋",
          content:
            "Data dapat dikumpulkan melalui pengamatan, wawancara, angket, pengukuran, atau dokumentasi.",
          note: "Misalnya, kamu dapat mewawancarai teman untuk mengetahui jumlah buku yang dibaca.",
        },
        {
          title: "B. Mengurutkan Data",
          icon: "🔢",
          content:
            "Data dapat diurutkan dari nilai terkecil ke terbesar atau sebaliknya.",
          note: "Data 3, 5, 2, 4, 3 setelah diurutkan menjadi 2, 3, 3, 4, 5.",
        },
        {
          title: "C. Tabel Frekuensi",
          icon: "📊",
          content:
            "Tabel frekuensi menunjukkan berapa kali suatu nilai atau kategori muncul dalam sekumpulan data.",
          note: "Pada data 2, 3, 3, 4, 5, nilai 3 mempunyai frekuensi 2.",
        },
        {
          title: "D. Membaca Tabel",
          icon: "🔎",
          content:
            "Informasi dalam tabel dapat digunakan untuk mengetahui nilai yang paling sering muncul, jumlah data, dan perbandingan antarkategori.",
          note: "Jumlah seluruh frekuensi harus sama dengan banyaknya data.",
        },
      ],

      example: {
        title: "Menyusun Tabel Frekuensi",
        problem: "Diketahui data jumlah buku yang dibaca siswa: 3, 5, 2, 4, 3.",
        steps: [
          "Urutkan data menjadi 2, 3, 3, 4, 5.",
          "Catat setiap nilai berbeda, yaitu 2, 3, 4, dan 5.",
          "Hitung frekuensi: nilai 2 muncul 1 kali, nilai 3 muncul 2 kali, nilai 4 muncul 1 kali, dan nilai 5 muncul 1 kali.",
          "Jumlah frekuensi = 1 + 2 + 1 + 1 = 5.",
        ],
        conclusion:
          "Tabel frekuensi membantu kita membaca banyaknya kemunculan setiap nilai.",
      },

      exploration:
        "Kumpulkan data jumlah saudara dari lima temanmu, lalu urutkan dan buat tabel frekuensinya.",

      question: "Data nilai: 5, 6, 5, 7, 8, 5. Berapa frekuensi nilai 5?",
      options: ["1 kali", "2 kali", "3 kali", "4 kali"],
      answer: 2,
      explanation:
        "Nilai 5 muncul pada urutan pertama, ketiga, dan keenam. Jadi, frekuensinya 3.",

      summary: [
        "Data dapat dikumpulkan melalui beberapa metode.",
        "Data dapat diurutkan untuk mempermudah pengolahan.",
        "Frekuensi adalah banyaknya kemunculan suatu nilai.",
        "Tabel frekuensi mempermudah penyajian dan pembacaan data.",
      ],
    },

    {
      id: 3,
      title: "Diagram Statistika",
      shortTitle: "Diagram Statistika",
      image: "materi/img_materi3.png",
      color: "course-pink",
      duration: "30 menit",
      level: "Menengah",
      description:
        "Mengenal diagram batang, garis, dan lingkaran untuk menyajikan serta menafsirkan data.",

      objectives: [
        "Mengenali jenis-jenis diagram statistika.",
        "Menyajikan data dalam diagram batang.",
        "Membaca informasi pada diagram garis.",
        "Memahami diagram lingkaran.",
        "Menafsirkan informasi yang ditampilkan dalam diagram.",
      ],

      context:
        "OSIS melakukan survei ekstrakurikuler favorit siswa. Hasilnya adalah Pramuka 12 siswa, Basket 8 siswa, Musik 6 siswa, dan Tari 4 siswa. Bagaimana menampilkan data tersebut agar mudah dibandingkan?",

      observationQuestion:
        "Jenis diagram apa yang paling sesuai untuk membandingkan jumlah peminat ekstrakurikuler?",

      concepts: [
        {
          title: "A. Diagram Batang",
          icon: "📊",
          content:
            "Diagram batang menggunakan batang untuk membandingkan jumlah atau frekuensi dari beberapa kategori.",
          note: "Semakin tinggi batang, semakin besar nilai yang ditunjukkan.",
        },
        {
          title: "B. Diagram Garis",
          icon: "📈",
          content:
            "Diagram garis menampilkan titik-titik data yang dihubungkan dengan garis, biasanya untuk menunjukkan perubahan dari waktu ke waktu.",
          note: "Contohnya, perubahan suhu udara selama satu minggu.",
        },
        {
          title: "C. Diagram Lingkaran",
          icon: "🥧",
          content:
            "Diagram lingkaran menunjukkan bagian-bagian data dibandingkan dengan keseluruhannya.",
          formula: "Sudut sektor = (Frekuensi ÷ Total data) × 360°",
          note: "Seluruh bagian diagram lingkaran memiliki total sudut 360°.",
        },
        {
          title: "D. Menafsirkan Diagram",
          icon: "🔍",
          content:
            "Menafsirkan diagram berarti membaca nilai, membandingkan kategori, dan menarik kesimpulan berdasarkan informasi yang ditampilkan.",
          note: "Perhatikan judul, label, skala, dan keterangan sebelum membuat kesimpulan.",
        },
      ],

      example: {
        title: "Menghitung Sudut Diagram Lingkaran",
        problem:
          "Dari 40 siswa, sebanyak 10 siswa menyukai sepak bola. Tentukan besar sudut sektornya.",
        steps: [
          "Frekuensi siswa yang menyukai sepak bola = 10.",
          "Jumlah seluruh siswa = 40.",
          "Sudut sektor = (10 ÷ 40) × 360°.",
          "Sudut sektor = 90°.",
        ],
        conclusion:
          "Bagian sepak bola menempati sudut 90° atau seperempat lingkaran.",
      },

      exploration:
        "Buat diagram batang berdasarkan data ekstrakurikuler pada cerita pengamatan. Tentukan kegiatan dengan peminat terbanyak dan paling sedikit.",

      question:
        "Diagram yang paling tepat untuk menunjukkan perubahan suhu selama tujuh hari adalah ...",
      options: [
        "Diagram garis",
        "Diagram lingkaran",
        "Diagram gambar",
        "Tabel biasa",
      ],
      answer: 0,
      explanation:
        "Diagram garis cocok untuk menunjukkan perubahan data dari waktu ke waktu.",

      summary: [
        "Diagram batang digunakan untuk membandingkan kategori.",
        "Diagram garis digunakan untuk melihat perubahan data.",
        "Diagram lingkaran menunjukkan bagian terhadap keseluruhan.",
        "Diagram membantu kita menafsirkan data dengan lebih mudah.",
      ],
    },

    {
      id: 4,
      title: "Mean (Rata-rata)",
      shortTitle: "Mean (Rata-rata)",
      image: "materi/img_materi4.png",
      color: "course-mint",
      duration: "30 menit",
      level: "Menengah",
      description: "Memahami dan menghitung rata-rata dari sekumpulan data.",

      objectives: [
        "Menjelaskan pengertian mean.",
        "Menjumlahkan seluruh nilai data.",
        "Menghitung mean data tunggal.",
        "Menyelesaikan masalah sehari-hari menggunakan mean.",
      ],

      context:
        "Lima siswa memperoleh nilai 70, 80, 75, 85, dan 90. Guru ingin mengetahui rata-rata nilai kelima siswa tersebut.",

      observationQuestion:
        "Bagaimana cara memperoleh satu nilai yang mewakili rata-rata seluruh siswa?",

      concepts: [
        {
          title: "A. Pengertian Mean",
          icon: "📊",
          content:
            "Mean atau rata-rata adalah jumlah seluruh nilai data yang dibagi dengan banyaknya data.",
          note: "Mean dapat digunakan untuk menggambarkan nilai rata-rata suatu kelompok.",
        },
        {
          title: "B. Rumus Mean",
          icon: "🧮",
          content:
            "Untuk menghitung mean, jumlahkan semua nilai, kemudian bagi dengan banyaknya data.",
          formula: "Mean = Jumlah seluruh nilai ÷ Banyak data",
          note: "Banyak data berbeda dengan jumlah seluruh nilai data.",
        },
        {
          title: "C. Menafsirkan Mean",
          icon: "💡",
          content:
            "Mean dapat digunakan untuk membandingkan hasil dua kelompok, tetapi perlu memperhatikan nilai-nilai penyusunnya.",
          note: "Nilai yang sangat besar atau sangat kecil dapat memengaruhi mean.",
        },
      ],

      example: {
        title: "Menghitung Rata-rata Nilai",
        problem: "Nilai lima siswa adalah 70, 80, 75, 85, dan 90.",
        steps: [
          "Jumlah seluruh nilai = 70 + 80 + 75 + 85 + 90 = 400.",
          "Banyak data = 5 siswa.",
          "Mean = 400 ÷ 5.",
          "Mean = 80.",
        ],
        conclusion: "Rata-rata nilai kelima siswa adalah 80.",
      },

      exploration:
        "Catat jumlah langkah kakimu selama lima hari, kemudian hitung rata-rata langkah per hari.",

      question: "Diketahui data 6, 8, 10, 12, 14. Berapakah mean-nya?",
      options: ["8", "9", "10", "12"],
      answer: 2,
      explanation:
        "Jumlah data = 50 dan banyak data = 5, sehingga mean = 50 ÷ 5 = 10.",

      summary: [
        "Mean adalah rata-rata dari sekumpulan data.",
        "Mean dihitung dengan menjumlahkan seluruh nilai.",
        "Jumlah tersebut dibagi dengan banyaknya data.",
        "Mean dapat digunakan untuk membandingkan data.",
      ],
    },

    {
      id: 5,
      title: "Median (Nilai Tengah)",
      shortTitle: "Median (Nilai Tengah)",
      image: "materi/img_materi5.png",
      color: "course-peach",
      duration: "30 menit",
      level: "Menengah",
      description:
        "Menentukan nilai tengah dari data berjumlah ganjil maupun genap.",

      objectives: [
        "Menjelaskan pengertian median.",
        "Mengurutkan data sebelum menentukan median.",
        "Menentukan median data berjumlah ganjil.",
        "Menentukan median data berjumlah genap.",
      ],

      context:
        "Lima siswa mempunyai tinggi badan 150, 145, 155, 148, dan 152 cm. Dati ingin mengetahui tinggi badan yang berada tepat di tengah.",

      observationQuestion:
        "Mengapa data perlu diurutkan sebelum menentukan nilai tengah?",

      concepts: [
        {
          title: "A. Pengertian Median",
          icon: "🔢",
          content:
            "Median adalah nilai tengah dari sekumpulan data yang sudah diurutkan.",
          note: "Langkah pertama menentukan median adalah mengurutkan data.",
        },
        {
          title: "B. Median Data Ganjil",
          icon: "🎯",
          content:
            "Jika banyak data ganjil, median merupakan nilai yang berada tepat di posisi tengah.",
          formula: "Posisi median = (n + 1) ÷ 2",
          note: "Untuk lima data, posisi median adalah data ke-3.",
        },
        {
          title: "C. Median Data Genap",
          icon: "🧮",
          content:
            "Jika banyak data genap, median diperoleh dari rata-rata dua nilai yang berada di tengah.",
          formula: "Median = (Nilai tengah 1 + Nilai tengah 2) ÷ 2",
          note: "Untuk empat data, gunakan nilai pada posisi ke-2 dan ke-3.",
        },
      ],

      example: {
        title: "Menentukan Median Ganjil dan Genap",
        problem:
          "Tentukan median dari data 3, 5, 7, 9, 11 dan data 2, 4, 6, 8.",
        steps: [
          "Data pertama sudah urut: 3, 5, 7, 9, 11.",
          "Banyak data pertama 5, sehingga nilai tengahnya 7.",
          "Data kedua sudah urut: 2, 4, 6, 8.",
          "Dua nilai tengahnya adalah 4 dan 6.",
          "Median data kedua = (4 + 6) ÷ 2 = 5.",
        ],
        conclusion:
          "Median data pertama adalah 7 dan median data kedua adalah 5.",
      },

      exploration:
        "Tuliskan lima nilai ulangan, lalu tentukan mediannya. Tambahkan satu nilai baru dan perhatikan apakah median berubah.",

      question: "Median dari data 2, 4, 6, 8, 10 adalah ...",
      options: ["4", "5", "6", "8"],
      answer: 2,
      explanation:
        "Data sudah urut dan memiliki lima nilai. Nilai ketiga, yaitu 6, merupakan median.",

      summary: [
        "Median adalah nilai tengah dari data yang telah diurutkan.",
        "Untuk data ganjil, pilih satu nilai yang berada di tengah.",
        "Untuk data genap, hitung rata-rata dua nilai tengah.",
        "Mengurutkan data merupakan langkah penting.",
      ],
    },

    {
      id: 6,
      title: "Modus dan Interpretasi Data",
      shortTitle: "Modus",
      image: "materi/img_materi6.png",
      color: "course-lavender",
      duration: "35 menit",
      level: "Menantang",
      description:
        "Menentukan modus, menghitung jangkauan, dan menarik kesimpulan dari data.",

      objectives: [
        "Menjelaskan pengertian modus.",
        "Menentukan modus dari sekumpulan data.",
        "Menghitung jangkauan data.",
        "Menafsirkan informasi dari penyajian data.",
        "Menarik kesimpulan berdasarkan data.",
      ],

      context:
        "Sebuah toko mencatat jumlah buku yang terjual selama tujuh hari, yaitu 4, 5, 5, 6, 7, 5, dan 8 buku. Pemilik ingin mengetahui jumlah penjualan yang paling sering terjadi.",

      observationQuestion:
        "Nilai manakah yang paling sering muncul, dan apa artinya bagi pemilik toko?",

      concepts: [
        {
          title: "A. Pengertian Modus",
          icon: "🏆",
          content:
            "Modus adalah nilai atau kategori yang mempunyai frekuensi kemunculan paling tinggi.",
          note: "Sekumpulan data dapat mempunyai satu modus, lebih dari satu modus, atau tidak mempunyai modus jika semua nilai muncul sama sering.",
        },
        {
          title: "B. Menentukan Modus",
          icon: "🔍",
          content:
            "Untuk menentukan modus, perhatikan setiap nilai dan hitung banyaknya kemunculan.",
          note: "Pada data 3, 4, 4, 5, 6, nilai 4 muncul paling sering sehingga modusnya 4.",
        },
        {
          title: "C. Jangkauan Data",
          icon: "📏",
          content:
            "Jangkauan adalah selisih antara nilai terbesar dan nilai terkecil.",
          formula: "Jangkauan = Nilai terbesar − Nilai terkecil",
          note: "Pada data 2, 5, 7, 9, jangkauannya adalah 9 − 2 = 7.",
        },
        {
          title: "D. Interpretasi Data",
          icon: "📊",
          content:
            "Interpretasi data berarti membaca, membandingkan, menjelaskan, dan menarik kesimpulan berdasarkan data.",
          note: "Kesimpulan harus sesuai dengan informasi yang tersedia, bukan berdasarkan dugaan.",
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
    },
  ];

  /* ==========================================================
     2. GAMBAR HALAMAN UTAMA
  ========================================================== */

  // Semua alamat gambar disesuaikan dengan folder assets/images
  // yang benar-benar tersedia pada proyek DataLab.
  const images = {
    hero: IMAGE_PATH + "banner/banner_materi.png",
    observation: IMAGE_PATH + "ilustrasi/ilustrasi_ringkasan_statistika.png",
    tips: IMAGE_PATH + "ilustrasi/ikon_tips_belajar.png",
    mascot: IMAGE_PATH + "ilustrasi/maskot_dati_belajar.png",
    checklist: IMAGE_PATH + "ilustrasi/ilustrasi_checklist.png",
  };

  function renderImage(src, alt, className = "") {
    return `
      <img
        src="${src}"
        alt="${alt}"
        class="${className}"
        loading="lazy"
        onerror="this.style.display='none'"
      >
    `;
  }

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* ==========================================================
     3. PROGRES BELAJAR
  ========================================================== */

  function getProgress() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

      return data && typeof data === "object" && !Array.isArray(data)
        ? data
        : {};
    } catch (error) {
      console.warn("Gagal membaca progres:", error);
      return {};
    }
  }

  function getCompletedLessons() {
    const progress = getProgress();

    if (!Array.isArray(progress.completedMaterials)) {
      return [];
    }

    return [
      ...new Set(
        progress.completedMaterials
          .map(Number)
          .filter((id) => lessons.some((lesson) => lesson.id === id)),
      ),
    ];
  }

  function getProgressPercentage() {
    return Math.round((getCompletedLessons().length / lessons.length) * 100);
  }

  function markLessonComplete(id) {
    const lesson = lessons.find((item) => item.id === id);
    if (!lesson) return false;

    const progress = getProgress();
    const completed = getCompletedLessons();

    if (!completed.includes(id)) {
      completed.push(id);
    }

    progress.completedMaterials = completed;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));

      window.dispatchEvent(
        new CustomEvent("datalab:material-completed", {
          detail: { materialNumber: id },
        }),
      );

      return true;
    } catch (error) {
      console.error("Gagal menyimpan progres:", error);
      return false;
    }
  }

  /* ==========================================================
     4. JUDUL BAGIAN
  ========================================================== */

  function renderHeading(icon, title, subtitle = "") {
    return `
      <div class="materi-heading">
        <span class="materi-heading-icon" aria-hidden="true">
          ${icon}
        </span>

        <div class="materi-heading-text">
          <h2>${title}</h2>
          ${
            subtitle ? `<p class="materi-heading-subtitle">${subtitle}</p>` : ""
          }
        </div>
      </div>
    `;
  }

  /* ==========================================================
     5. HALAMAN UTAMA MATERI
     BAGIAN INI DIPERTAHANKAN
  ========================================================== */

  function renderHero() {
    return `
      <section class="material-hero" aria-label="Pengenalan materi statistika">
        ${renderImage(images.hero, "Banner Materi Pembelajaran DataLab bersama Dati", "material-hero-banner")}
        <div class="material-hero-fallback">
          <span class="material-hero-badge">📖 Materi Pembelajaran</span>
          <h1>Mengenal Statistika dan Data</h1>
          <p>Pelajari konsep dasar statistika, jenis data, dan penerapannya dalam kehidupan sehari-hari!</p>
        </div>
      </section>
    `;
  }

  function renderObjectives() {
    const objectives = [
      "Menjelaskan pengertian statistika dan data.",
      "Mengidentifikasi jenis-jenis data.",
      "Menyajikan data dalam bentuk tabel dan diagram.",
      "Menafsirkan informasi dari penyajian data.",
    ];

    return `
      <article class="lesson-card intro-objectives">

        ${renderHeading("🎯", "Tujuan Pembelajaran")}

        <div class="objective-list">
          ${objectives
            .map(
              (objective, index) => `
            <div class="objective-item">
              <span class="objective-number">
                ${String(index + 1).padStart(2, "0")}
              </span>

              <span class="objective-text">
                ${objective}
              </span>

              <span class="objective-check" aria-hidden="true">
                ✓
              </span>
            </div>
          `,
            )
            .join("")}
        </div>
      </article>
    `;
  }

  function renderObservation() {
    return `
      <article class="lesson-card intro-observation">

        ${renderHeading("🔎", "Ayo Mengamati!")}

        <div class="observation-content">
          <div class="observation-image-area">
            ${renderImage(
              images.observation,
              "Ilustrasi pengamatan data",
              "observation-image",
            )}
          </div>

          <div class="observation-text">
            <span class="observation-label">
              Cerita di Sekitar Kita
            </span>

            <p>
              Sebuah toko mencatat jumlah buku
              yang terjual selama lima hari.
              Pemilik toko ingin mengetahui
              jenis buku yang paling sering
              terjual dan perbedaan penjualan
              tertinggi serta terendah.
            </p>
          </div>
        </div>

        <div class="observation-question">
          Menurutmu, mengapa data perlu dikumpulkan?
        </div>
      </article>
    `;
  }

  function renderCourseCard(lesson, completed) {
    const isDone = completed.includes(lesson.id);
    return `
      <button type="button"
        class="material-course ${lesson.color} ${lesson.id === 1 ? "is-selected" : ""}"
        data-open-lesson="${lesson.id}"
        aria-label="Buka materi ${escapeHTML(lesson.title)}">
        <span class="course-image-wrap">
          ${renderImage(IMAGE_PATH + lesson.image, "", "course-image")}
        </span>
        <span class="course-body">
          <span class="course-number">${lesson.id}</span>
          <span class="course-title">${escapeHTML(lesson.title)}</span>
          ${isDone ? '<span class="course-complete">✓ Selesai</span>' : ""}
        </span>
      </button>
    `;
  }

  function renderMaterialSidebar(completed) {
    return `
      <aside class="materi-right-sidebar">
        <section class="lesson-card right-example-card">
          ${renderHeading("🎯", "Contoh Singkat")}
          <p class="example-short-copy">Data hobi 5 siswa: membaca, olahraga, membaca, musik, olahraga.</p>
          <div class="example-short-note">
            <span aria-hidden="true">💡</span>
            <p>Data hobi termasuk <strong>data kualitatif</strong>, karena berupa kategori atau jenis hobi.</p>
          </div>
        </section>
        <section class="lesson-card right-practice-card">
          ${renderHeading("🎮", "Coba Pahami!")}
          <div class="practice-promo">
            <div>
              <p>Yuk, kerjakan latihan singkat untuk menguatkan pemahamanmu!</p>
              <button type="button" class="hero-start-button" data-open-lesson="1">
                Latihan Sekarang <span aria-hidden="true">→</span>
              </button>
            </div>
            ${renderImage(images.tips, "Ilustrasi buku dan alat belajar", "practice-promo-image")}
          </div>
        </section>
      </aside>
    `;
  }

  function renderMateriPage(container) {
    if (!container) return;
    const completed = getCompletedLessons();
    const percentage = getProgressPercentage();
    const featured = lessons[0];

    container.innerHTML = `
      <div class="material-page material-overview-page">
        ${renderHero()}
        <section class="materi-map-section">
          <div class="materi-map-heading">
            <span class="materi-map-icon">📚</span>
            <div><h2>Peta Materi</h2><p>Pilih topik yang ingin kamu pelajari.</p></div>
          </div>
          <div class="material-grid">
            ${lessons.map((lesson) => renderCourseCard(lesson, completed)).join("")}
          </div>
        </section>

        <section class="materi-overview-lower">
          <article class="lesson-card materi-summary-card">
            <div class="materi-summary-heading">
              <span class="materi-summary-icon">📄</span>
              <div><h2>Ringkasan Materi</h2><span class="materi-summary-label">1. ${escapeHTML(featured.title)}</span></div>
            </div>
            <div class="materi-summary-content">
              <div class="materi-summary-visual">
                ${renderImage(IMAGE_PATH + featured.image, "Ilustrasi statistika dan data", "materi-summary-image")}
              </div>
              <div class="materi-summary-copy">
                <p><strong>Statistika</strong> adalah ilmu yang mempelajari cara mengumpulkan, mengolah, menyajikan, menganalisis, dan menarik kesimpulan dari data.</p>
                <div class="materi-data-types">
                  <h3>Jenis Data</h3>
                  <div class="materi-data-type-grid">
                    <div class="materi-data-type"><span>🏷️</span><div><strong>Data Kualitatif</strong><p>Berupa sifat atau kategori.</p></div></div>
                    <div class="materi-data-type"><span>🔢</span><div><strong>Data Kuantitatif</strong><p>Berupa angka hasil pengukuran atau perhitungan.</p></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="materi-progress-inline">
              <div><strong>🌱 Perjalanan Belajarmu</strong><p>${completed.length} dari ${lessons.length} materi selesai</p></div>
              <strong>${percentage}%</strong>
              <div class="lesson-progress-track"><div class="lesson-progress-fill" style="width:${percentage}%"></div></div>
            </div>
          </article>
          ${renderMaterialSidebar(completed)}
        </section>
      </div>
    `;
  }

  /* ==========================================================
     6. PEMBELAJARAN BERTAHAP ENAM MATERI
     Beranda Materi tetap dipertahankan.
  ========================================================== */

  const STAGE_STORAGE_KEY = "datalab_lesson_stages_v1";

  const learningStages = [
    {
      id: 1,
      title: "Ayo Mengamati",
      subtitle: "Amati cerita dalam kehidupan sehari-hari",
      icon: "🔎",
    },
    {
      id: 2,
      title: "Ayo Memahami",
      subtitle: "Pelajari konsep dan visualisasi materi",
      icon: "📖",
    },
    {
      id: 3,
      title: "Ayo Eksplorasi",
      subtitle: "Lakukan kegiatan penyelidikan",
      icon: "💡",
    },
    {
      id: 4,
      title: "Ayo Mencoba",
      subtitle: "Pelajari contoh penyelesaian soal",
      icon: "✏️",
    },
    {
      id: 5,
      title: "Tantangan Dati",
      subtitle: "Uji pemahamanmu melalui latihan",
      icon: "🚀",
    },
    {
      id: 6,
      title: "Rangkuman dan Refleksi",
      subtitle: "Simpulkan pembelajaran hari ini",
      icon: "🌟",
    },
  ];

  let activeLessonId = null;
  let activeStage = 1;
  let selectedAnswer = null;
  let checkedAnswer = false;

  /* ==========================================================
     7. PENYIMPANAN PROGRES TAHAP
  ========================================================== */

  function getStageProgress() {
    try {
      const data = JSON.parse(localStorage.getItem(STAGE_STORAGE_KEY) || "{}");

      return data && typeof data === "object" ? data : {};
    } catch (error) {
      console.warn("Progres tahap tidak dapat dibaca:", error);
      return {};
    }
  }

  function getCompletedStages(lessonId) {
    const progress = getStageProgress();
    const item = progress[lessonId];

    if (!item || !Array.isArray(item.completedStages)) {
      return [];
    }

    return item.completedStages
      .map(Number)
      .filter((stage) => stage >= 1 && stage <= 6);
  }

  function saveCompletedStage(lessonId, stageId) {
    const progress = getStageProgress();

    if (!progress[lessonId]) {
      progress[lessonId] = {
        completedStages: [],
      };
    }

    const completed = progress[lessonId].completedStages;

    if (!completed.includes(stageId)) {
      completed.push(stageId);
    }

    progress[lessonId].completedStages = completed;

    try {
      localStorage.setItem(STAGE_STORAGE_KEY, JSON.stringify(progress));

      return true;
    } catch (error) {
      console.error("Gagal menyimpan tahap belajar:", error);
      return false;
    }
  }

  function getCurrentAvailableStage(lessonId) {
    const completed = getCompletedStages(lessonId);

    for (let i = 1; i <= 6; i++) {
      if (!completed.includes(i)) {
        return i;
      }
    }

    return 6;
  }

  function isStageUnlocked(lessonId, stageId) {
    const completed = getCompletedStages(lessonId);

    return (
      stageId === 1 ||
      completed.includes(stageId - 1) ||
      completed.includes(stageId)
    );
  }

  function completeCurrentStage(lessonId, stageId) {
    const saved = saveCompletedStage(lessonId, stageId);

    if (!saved) {
      alert("Progres belum berhasil disimpan. Silakan coba lagi.");
      return;
    }

    if (stageId < 6) {
      activeStage = stageId + 1;
      renderActiveLesson();
    } else {
      renderActiveLesson();
    }
  }

  function getStagePercentage(lessonId) {
    const completed = getCompletedStages(lessonId);

    return Math.round((completed.length / 6) * 100);
  }

  /* ==========================================================
     8. KOMPONEN JUDUL DAN SIDEBAR
  ========================================================== */

  function renderSectionTitle(icon, eyebrow, title) {
    return `
      <div class="lesson-section-title">
        <span class="section-icon" aria-hidden="true">
          ${icon}
        </span>

        <div>
          <span>${eyebrow}</span>
          <h2>${title}</h2>
        </div>
      </div>
    `;
  }

  function renderDetailSidebar(lessonId, completed) {
    const stageCompleted = getCompletedStages(lessonId);

    return `
      <aside class="lesson-sidebar">

        <div class="lesson-sidebar-card">

          <span class="sidebar-eyebrow">
            DAFTAR PEMBELAJARAN
          </span>

          <h3>📚 Daftar Materi</h3>

          <div class="lesson-nav">
            ${lessons
              .map(
                (item) => `
              <button
                type="button"
                class="${item.id === lessonId ? "active" : ""}"
                data-open-lesson="${item.id}"
              >
                <span class="lesson-nav-number">
                  ${completed.includes(item.id) ? "✓" : item.id}
                </span>

                <span>${escapeHTML(item.title)}</span>
              </button>
            `,
              )
              .join("")}
          </div>
        </div>

        <div class="lesson-sidebar-card lesson-tip-card">
          <div class="sidebar-tip-icon">💡</div>

          <h3>Tips Belajar</h3>

          <p>
            Ikuti setiap tahap secara berurutan.
            Baca materi, lakukan eksplorasi,
            dan kerjakan tantangan dari Dati.
          </p>
        </div>

        <div class="lesson-sidebar-card">
          <span class="sidebar-eyebrow">PROGRES TAHAP</span>

          <h3>🌱 Perjalanan Belajarmu</h3>

          <p>
            ${stageCompleted.length} dari 6 tahap selesai
          </p>

          <div class="lesson-progress-track">
            <div
              class="lesson-progress-fill"
              style="width:${getStagePercentage(lessonId)}%"
            ></div>
          </div>

          <strong>${getStagePercentage(lessonId)}%</strong>
        </div>

        <div class="lesson-sidebar-card detail-dati-card">
          ${renderImage(images.mascot, "Maskot Dati", "detail-dati-image")}

          <h3>Semangat, Sobat Data!</h3>

          <p>
            Kamu pasti bisa memahami statistika
            sedikit demi sedikit.
          </p>
        </div>

      </aside>
    `;
  }

  /* ==========================================================
     9. VISUALISASI SETIAP MATERI
  ========================================================== */

  function renderLessonVisual(id) {
    if (id === 1) {
      return `
        <div class="detail-visual detail-visual-purple">
          <h3>🍎 Contoh Data Buah Favorit</h3>
          <p>Hasil pengamatan terhadap 10 siswa</p>

          <div class="visual-fruit-grid">
            <span>🍎</span><span>🍌</span>
            <span>🍎</span><span>🍇</span>
            <span>🍎</span><span>🍌</span>
            <span>🍇</span><span>🍎</span>
            <span>🍌</span><span>🍎</span>
          </div>

          <div class="visual-result">
            🍎 Apel = 5 &nbsp; 🍌 Pisang = 3
            &nbsp; 🍇 Anggur = 2
          </div>

          <p class="visual-caption">
            Data dapat dikumpulkan dan dikelompokkan
            untuk memperoleh informasi.
          </p>
        </div>
      `;
    }

    if (id === 2) {
      return `
        <div class="detail-visual detail-visual-blue">
          <h3>📋 Tabel Frekuensi Jumlah Buku</h3>

          <div class="visual-number-row">
            <span>3</span><span>5</span>
            <span>2</span><span>4</span><span>3</span>
          </div>

          <p>Setelah diurutkan:</p>

          <div class="visual-number-row sorted">
            <span>2</span><span>3</span>
            <span>3</span><span>4</span><span>5</span>
          </div>

          <table class="detail-data-table">
            <thead>
              <tr>
                <th>Jumlah Buku</th>
                <th>Frekuensi</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2</td><td>1</td></tr>
              <tr><td>3</td><td>2</td></tr>
              <tr><td>4</td><td>1</td></tr>
              <tr><td>5</td><td>1</td></tr>
              <tr><th>Total</th><th>5</th></tr>
            </tbody>
          </table>
        </div>
      `;
    }

    if (id === 3) {
      const data = [
        { label: "Pramuka", value: 12, color: "#9569e8" },
        { label: "Basket", value: 8, color: "#6ab5f3" },
        { label: "Musik", value: 6, color: "#f58fc3" },
        { label: "Tari", value: 4, color: "#ffc86e" },
      ];

      return `
        <div class="detail-visual detail-visual-pink">
          <h3>📊 Diagram Ekstrakurikuler Favorit</h3>
          <p>Hasil survei terhadap 30 siswa</p>

          <div class="visual-bar-chart">
            ${data
              .map(
                (item) => `
              <div class="visual-bar-item">
                <span>${item.label}</span>

                <div class="visual-bar-track">
                  <div
                    class="visual-bar-fill"
                    style="
                      width:${(item.value / 12) * 100}%;
                      background:${item.color};
                    "
                  ></div>
                </div>

                <strong>${item.value}</strong>
              </div>
            `,
              )
              .join("")}
          </div>

          <div class="visual-result">
            Pramuka memiliki peminat terbanyak,
            sedangkan Tari paling sedikit.
          </div>
        </div>
      `;
    }

    if (id === 4) {
      return `
        <div class="detail-visual detail-visual-mint">
          <h3>🧮 Menghitung Mean</h3>

          <div class="visual-number-row">
            <span>70</span><span>80</span>
            <span>75</span><span>85</span><span>90</span>
          </div>

          <div class="visual-formula">
            <strong>70 + 80 + 75 + 85 + 90</strong>
            <div class="formula-divider"></div>
            <strong>5</strong>
          </div>

          <div class="visual-result">
            Mean = 400 ÷ 5 = 80
          </div>
        </div>
      `;
    }

    if (id === 5) {
      return `
        <div class="detail-visual detail-visual-peach">
          <h3>🎯 Menemukan Nilai Tengah</h3>

          <p>Contoh data berjumlah ganjil</p>

          <div class="visual-number-row median-numbers">
            <span>3</span><span>5</span>
            <span class="highlight-number">7</span>
            <span>9</span><span>11</span>
          </div>

          <div class="visual-result">
            Median = 7
          </div>

          <p>Contoh data berjumlah genap</p>

          <div class="visual-number-row median-numbers">
            <span>2</span>
            <span class="highlight-number">4</span>
            <span class="highlight-number">6</span>
            <span>8</span>
          </div>

          <div class="visual-result">
            Median = (4 + 6) ÷ 2 = 5
          </div>
        </div>
      `;
    }

    if (id === 6) {
      return `
        <div class="detail-visual detail-visual-lavender">
          <h3>🏆 Menemukan Modus</h3>

          <div class="visual-number-row mode-numbers">
            <span>4</span>
            <span class="highlight-number">5</span>
            <span class="highlight-number">5</span>
            <span>6</span>
            <span>7</span>
            <span class="highlight-number">5</span>
            <span>8</span>
          </div>

          <div class="visual-result">
            Modus = 5
          </div>

          <p>Nilai 5 muncul sebanyak tiga kali.</p>

          <div class="visual-result">
            Jangkauan = 8 − 4 = 4
          </div>
        </div>
      `;
    }

    return "";
  }

  /* ==========================================================
     10. KARTU KONSEP
  ========================================================== */

  function renderConceptCards(lesson) {
    return `
      <div class="detail-concept-grid">
        ${lesson.concepts
          .map(
            (concept, index) => `
          <article class="detail-concept-card">

            <div class="detail-concept-top">
              <span class="detail-concept-icon">
                ${concept.icon}
              </span>

              <span class="detail-concept-index">
                ${String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3>${escapeHTML(concept.title)}</h3>

            <p>${escapeHTML(concept.content)}</p>

            ${
              concept.formula
                ? `<div class="formula-box">${escapeHTML(concept.formula)}</div>`
                : ""
            }

            <div class="detail-concept-note">
              <strong>💡 Ingat!</strong>
              <p>${escapeHTML(concept.note)}</p>
            </div>

          </article>
        `,
          )
          .join("")}
      </div>
    `;
  }

  /* ==========================================================
     11. CONTOH SOAL
  ========================================================== */

  function renderExample(lesson) {
    return `
      <div class="detail-example-box">

        <div class="detail-example-question">
          <span class="detail-mini-label">
            📌 Permasalahan
          </span>

          <h3>${escapeHTML(lesson.example.title)}</h3>

          <p>${escapeHTML(lesson.example.problem)}</p>
        </div>

        <div class="detail-example-steps">
          <h3>✨ Langkah Penyelesaian</h3>

          ${lesson.example.steps
            .map(
              (step, index) => `
            <div class="detail-example-step">
              <span class="detail-step-number">${index + 1}</span>
              <p>${escapeHTML(step)}</p>
            </div>
          `,
            )
            .join("")}
        </div>

        <div class="detail-example-conclusion">
          <strong>✓ Kesimpulan</strong>
          <p>${escapeHTML(lesson.example.conclusion)}</p>
        </div>

      </div>
    `;
  }

  /* ==========================================================
     12. TAMPILAN SETIAP TAHAP
  ========================================================== */

  function renderStageNavigation(lessonId) {
    const completed = getCompletedStages(lessonId);

    return `
      <div class="datalab-stage-navigation">
        ${learningStages
          .map((stage) => {
            const unlocked = isStageUnlocked(lessonId, stage.id);
            const isActive = activeStage === stage.id;
            const isDone = completed.includes(stage.id);

            return `
            <button
              type="button"
              class="
                datalab-stage-button
                ${isActive ? "active" : ""}
                ${isDone ? "completed" : ""}
                ${!unlocked ? "locked" : ""}
              "
              data-stage="${stage.id}"
              ${!unlocked ? "disabled" : ""}
            >
              <span class="datalab-stage-icon">
                ${isDone ? "✓" : stage.icon}
              </span>

              <span class="datalab-stage-name">
                ${stage.title}
              </span>
            </button>
          `;
          })
          .join("")}
      </div>
    `;
  }

  function renderStageContent(lesson) {
    const completed = getCompletedStages(lesson.id);
    const isDone = completed.includes(activeStage);

    let content = "";

    if (activeStage === 1) {
      content = `
        <article class="lesson-card lesson-context">
          ${renderSectionTitle("🔎", "TAHAP 1", "Ayo Mengamati!")}

          <div class="detail-context-box">
            <div class="detail-context-copy">
              <span class="detail-mini-label">
                📖 Cerita di Sekitar Kita
              </span>

              <p>${escapeHTML(lesson.context)}</p>

              <div class="detail-context-question">
                <strong>🤔 Coba Pikirkan!</strong>
                <p>${escapeHTML(lesson.observationQuestion)}</p>
              </div>
            </div>

            <div class="detail-context-illustration">
              ${renderImage(
                images.observation,
                "Ilustrasi pengamatan",
                "detail-observation-image",
              )}
            </div>
          </div>

          <div class="datalab-stage-instruction">
            Amati cerita di atas. Pikirkan informasi
            apa yang dapat kamu peroleh dari cerita tersebut.
          </div>

          <button
            type="button"
            class="datalab-next-button"
            data-complete-stage="1"
          >
            Saya Selesai Mengamati →
          </button>
        </article>
      `;
    }

    if (activeStage === 2) {
      content = `
        <article class="lesson-card lesson-concept">
          ${renderSectionTitle("📖", "TAHAP 2", "Ayo Memahami!")}

          <p class="detail-section-intro">
            Pelajari penjelasan konsep berikut.
            Perhatikan contoh dan visualisasi yang disediakan.
          </p>

          ${renderConceptCards(lesson)}

          <div class="lesson-card detail-illustration-card">
            ${renderSectionTitle(
              "📊",
              "VISUALISASI",
              "Belajar dengan Ilustrasi",
            )}

            ${renderLessonVisual(lesson.id)}
          </div>

          <button
            type="button"
            class="datalab-next-button"
            data-complete-stage="2"
          >
            Saya Sudah Memahami →
          </button>
        </article>
      `;
    }

    if (activeStage === 3) {
      content = `
        <article class="lesson-card lesson-exploration">
          ${renderSectionTitle("💡", "TAHAP 3", "Ayo Eksplorasi!")}

          <div class="detail-mission-box">
            <span class="detail-mission-icon">🚀</span>

            <div>
              <h3>Misi Penyelidikan Bersama Dati</h3>

              <p>${escapeHTML(lesson.exploration)}</p>

              <span class="detail-mission-tip">
                Tuliskan hasil kegiatanmu di buku catatan.
              </span>
            </div>
          </div>

          <div class="datalab-stage-instruction">
            Kerjakan kegiatan eksplorasi secara mandiri.
            Setelah selesai, kamu dapat melanjutkan ke tahap berikutnya.
          </div>

          <button
            type="button"
            class="datalab-next-button"
            data-complete-stage="3"
          >
            Eksplorasi Selesai →
          </button>
        </article>
      `;
    }

    if (activeStage === 4) {
      content = `
        <article class="lesson-card lesson-example-card">
          ${renderSectionTitle("✏️", "TAHAP 4", "Ayo Mencoba!")}

          <p class="detail-section-intro">
            Perhatikan contoh soal dan langkah penyelesaian
            berikut. Cobalah memahami alasan pada setiap langkah.
          </p>

          ${renderExample(lesson)}

          <button
            type="button"
            class="datalab-next-button"
            data-complete-stage="4"
          >
            Saya Sudah Mempelajari Contoh →
          </button>
        </article>
      `;
    }

    if (activeStage === 5) {
      content = `
        <article class="lesson-card lesson-practice-card">
          ${renderSectionTitle("🚀", "TAHAP 5", "Tantangan Dati!")}

          <div class="detail-practice-intro">
            Pilih satu jawaban yang menurutmu paling tepat.
            Kamu harus menjawab dengan benar untuk membuka
            tahap selanjutnya.
          </div>

          <div class="practice-question">
            <strong>${escapeHTML(lesson.question)}</strong>
          </div>

          <div class="practice-options">
            ${lesson.options
              .map(
                (option, index) => `
              <button
                type="button"
                class="practice-option"
                data-answer="${index}"
                aria-pressed="false"
                ${checkedAnswer ? "disabled" : ""}
              >
                <span>${String.fromCharCode(65 + index)}</span>
                ${escapeHTML(option)}
              </button>
            `,
              )
              .join("")}
          </div>

          <button
            type="button"
            class="check-answer-button"
            data-check-answer
            ${selectedAnswer === null || checkedAnswer ? "disabled" : ""}
          >
            Periksa Jawaban →
          </button>

          <div
            class="practice-feedback"
            id="practiceFeedback"
            aria-live="polite"
          ></div>

          ${
            checkedAnswer && selectedAnswer === lesson.answer
              ? `
                <button
                  type="button"
                  class="datalab-next-button"
                  data-complete-stage="5"
                >
                  Jawaban Benar! Lanjutkan →
                </button>
              `
              : ""
          }
        </article>
      `;
    }

    if (activeStage === 6) {
      content = `
        <article class="lesson-card detail-summary-card">
          ${renderSectionTitle("🌟", "TAHAP 6", "Rangkuman dan Refleksi")}

          <h3>Apa yang Sudah Kita Pelajari?</h3>

          <div class="detail-summary-list">
            ${lesson.summary
              .map(
                (item, index) => `
              <div class="detail-summary-item">
                <span>${index + 1}</span>
                <p>${escapeHTML(item)}</p>
              </div>
            `,
              )
              .join("")}
          </div>

          <div class="detail-reflection">
            <h3>💬 Refleksi Bersama Dati</h3>

            <p>
              Bagian mana yang paling mudah kamu pahami?
              Apa manfaat materi ini dalam kehidupan sehari-hari?
              Adakah bagian yang masih ingin kamu pelajari?
            </p>

            <textarea
              class="detail-reflection-input"
              data-reflection="${lesson.id}"
              rows="4"
              maxlength="1000"
              placeholder="Tuliskan refleksimu di sini..."
            ></textarea>

            <button
              type="button"
              class="detail-save-reflection"
              data-save-reflection="${lesson.id}"
            >
              Simpan Refleksi
            </button>

            <p
              class="detail-reflection-feedback"
              aria-live="polite"
            ></p>
          </div>

          <div class="datalab-stage-instruction">
            Simpan refleksimu terlebih dahulu.
            Setelah itu, tandai materi sebagai selesai.
          </div>

          <button
            type="button"
            class="datalab-next-button"
            data-complete-stage="6"
            ${isDone ? "disabled" : ""}
          >
            ${isDone ? "✓ Tahap Ini Sudah Selesai" : "Selesaikan Materi ✓"}
          </button>
        </article>
      `;
    }

    return content;
  }

  /* ==========================================================
     13. HALAMAN DETAIL MATERI
  ========================================================== */

  function renderLessonDetail(container, id) {
    if (!container) return;

    const lesson = lessons.find((item) => item.id === id);

    if (!lesson) {
      renderMateriPage(container);
      return;
    }

    activeLessonId = id;
    selectedAnswer = null;
    checkedAnswer = false;

    activeStage = getCurrentAvailableStage(id);

    renderActiveLesson();
  }

  function renderActiveLesson() {
    const container = document.getElementById("pageContainer");

    if (!container || !activeLessonId) return;

    const lesson = lessons.find((item) => item.id === activeLessonId);

    if (!lesson) return;

    // Desain khusus untuk Materi 1
    if (lesson.id === 1 && typeof window.renderMateri01Layout === "function") {
      window.renderMateri01Layout(lesson);
      return;
    }

    const completed = getCompletedLessons();
    const stageCompleted = getCompletedStages(lesson.id);
    const isDone = completed.includes(lesson.id);

    const index = lessons.findIndex((item) => item.id === lesson.id);

    const previous = lessons[index - 1];
    const next = lessons[index + 1];

    const stagePercentage = getStagePercentage(lesson.id);

    container.innerHTML = `
      <div class="material-page lesson-detail-page">

        <div class="lesson-breadcrumb">
          <button type="button" data-back-materials>
            Materi
          </button>

          <span>›</span>
          <span>${escapeHTML(lesson.title)}</span>
        </div>

        <section class="lesson-detail-hero ${lesson.color}">
          <div class="lesson-detail-hero-content">

            <span class="badge">
              UNIT ${String(lesson.id).padStart(2, "0")}
              · MATERI PEMBELAJARAN
            </span>

            <h1>${escapeHTML(lesson.title)}</h1>

            <p>${escapeHTML(lesson.description)}</p>

            <div class="lesson-meta">
              <span>⏱ ${lesson.duration}</span>
              <span>📖 ${lesson.level}</span>
              <span>
                ${isDone ? "✓ Sudah selesai" : "Sedang dipelajari"}
              </span>
            </div>
          </div>

          <div class="lesson-detail-icon">
            ${renderImage(
              IMAGE_PATH + lesson.image,
              lesson.title,
              "lesson-detail-image",
            )}
          </div>
        </section>

        <div class="lesson-progress-card">
          <div class="lesson-progress-info">
            <strong>🌱 Progres Pembelajaran</strong>

            <span>
              ${stageCompleted.length} dari 6 tahap selesai
            </span>
          </div>

          <div class="lesson-progress-track">
            <div
              class="lesson-progress-fill"
              style="width:${stagePercentage}%"
            ></div>
          </div>

          <strong>${stagePercentage}%</strong>
        </div>

        <section class="lesson-detail-layout">

          <main class="lesson-content">

            <article class="lesson-card objectives-card">
              ${renderSectionTitle(
                "🎯",
                "TUJUAN PEMBELAJARAN",
                "Apa yang Akan Kamu Pelajari?",
              )}

              <div class="lesson-objectives">
                ${lesson.objectives
                  .map(
                    (objective, index) => `
                  <div class="objective-item">
                    <span class="objective-number">
                      ${String(index + 1).padStart(2, "0")}
                    </span>

                    <span>${escapeHTML(objective)}</span>
                    <span class="objective-check">✓</span>
                  </div>
                `,
                  )
                  .join("")}
              </div>
            </article>

            <article class="lesson-card datalab-learning-card">

              ${renderSectionTitle(
                "🧭",
                "ALUR PEMBELAJARAN",
                "Ikuti Enam Tahap Bersama Dati",
              )}

              <p>
                Setiap tahap perlu diselesaikan secara berurutan.
                Kamu tetap dapat membuka kembali tahap yang sudah selesai.
              </p>

              ${renderStageNavigation(lesson.id)}

            </article>

            <div class="datalab-stage-panel">
              ${renderStageContent(lesson)}
            </div>

            <div class="lesson-navigation">

              ${
                previous
                  ? `
                    <button
                      type="button"
                      data-open-lesson="${previous.id}"
                    >
                      ← Materi Sebelumnya
                    </button>
                  `
                  : `
                    <button
                      type="button"
                      data-back-materials
                    >
                      ← Daftar Materi
                    </button>
                  `
              }

              ${
                next
                  ? `
                    <button
                      type="button"
                      data-open-lesson="${next.id}"
                    >
                      Materi Selanjutnya →
                    </button>
                  `
                  : `
                    <button
                      type="button"
                      data-back-materials
                    >
                      Kembali ke Daftar Materi →
                    </button>
                  `
              }

            </div>

          </main>

          ${renderDetailSidebar(lesson.id, completed)}

        </section>
      </div>
    `;

    restoreReflection(lesson.id);
    restorePracticeFeedback(lesson.id);
  }

  /* ==========================================================
     14. REFLEKSI SISWA
  ========================================================== */

  function getReflectionKey(id) {
    return "datalab_reflection_" + id;
  }

  function restoreReflection(id) {
    const textarea = document.querySelector(`[data-reflection="${id}"]`);

    if (!textarea) return;

    try {
      textarea.value = localStorage.getItem(getReflectionKey(id)) || "";
    } catch (error) {
      console.warn("Refleksi belum dapat dibaca:", error);
    }
  }

  function saveReflection(id) {
    const textarea = document.querySelector(`[data-reflection="${id}"]`);

    if (!textarea) return false;

    const feedback = textarea
      .closest(".detail-reflection")
      ?.querySelector(".detail-reflection-feedback");

    const value = textarea.value.trim();

    if (!value) {
      if (feedback) {
        feedback.textContent = "Tuliskan refleksimu terlebih dahulu.";
      }

      return false;
    }

    try {
      localStorage.setItem(getReflectionKey(id), value);

      if (feedback) {
        feedback.textContent = "✓ Refleksimu berhasil disimpan!";
      }

      return true;
    } catch (error) {
      if (feedback) {
        feedback.textContent = "Refleksi belum berhasil disimpan.";
      }

      return false;
    }
  }

  /* ==========================================================
     15. LATIHAN DAN UMPAN BALIK
  ========================================================== */

  function getPracticeKey(id) {
    return "datalab_practice_" + id;
  }

  function restorePracticeFeedback(id) {
    const saved = localStorage.getItem(getPracticeKey(id));

    if (!saved || activeStage !== 5) return;

    try {
      const result = JSON.parse(saved);

      if (!result.correct) return;

      const feedback = document.getElementById("practiceFeedback");

      if (feedback) {
        const lesson = lessons.find((item) => item.id === id);

        feedback.className = "practice-feedback correct";

        feedback.innerHTML = `
          <strong>🎉 Jawaban Benar!</strong>
          <p>${escapeHTML(lesson.explanation)}</p>
        `;
      }

      document.querySelectorAll(".practice-option").forEach((button) => {
        button.disabled = true;

        if (Number(button.dataset.answer) === result.answer) {
          button.classList.add("correct");
        }
      });
    } catch (error) {
      console.warn("Hasil latihan tidak dapat dibaca:", error);
    }
  }

  function checkPracticeAnswer() {
    const lesson = lessons.find((item) => item.id === activeLessonId);

    if (!lesson || selectedAnswer === null || checkedAnswer) {
      return;
    }

    const isCorrect = selectedAnswer === lesson.answer;

    checkedAnswer = true;

    const feedback = document.getElementById("practiceFeedback");

    document.querySelectorAll(".practice-option").forEach((button) => {
      button.disabled = true;

      const optionIndex = Number(button.dataset.answer);

      if (optionIndex === lesson.answer) {
        button.classList.add("correct");
      } else if (optionIndex === selectedAnswer) {
        button.classList.add("incorrect");
      }
    });

    if (feedback) {
      feedback.className =
        "practice-feedback " + (isCorrect ? "correct" : "incorrect");

      feedback.innerHTML = `
        <strong>
          ${isCorrect ? "🎉 Jawaban Benar!" : "💡 Jawaban Belum Tepat"}
        </strong>

        <p>${escapeHTML(lesson.explanation)}</p>

        ${
          isCorrect
            ? "<p>Bagus! Kamu berhasil menyelesaikan tantangan Dati.</p>"
            : "<p>Coba pelajari kembali materi, kemudian ulangi tantangannya.</p>"
        }
      `;
    }

    if (isCorrect) {
      localStorage.setItem(
        getPracticeKey(lesson.id),
        JSON.stringify({
          answer: selectedAnswer,
          correct: true,
        }),
      );

      const nextButton = document.createElement("button");

      nextButton.type = "button";
      nextButton.className = "datalab-next-button";
      nextButton.dataset.completeStage = "5";
      nextButton.textContent = "Jawaban Benar! Lanjutkan →";

      document.querySelector(".lesson-practice-card")?.appendChild(nextButton);
    } else {
      const retryButton = document.createElement("button");

      retryButton.type = "button";
      retryButton.className = "datalab-next-button";
      retryButton.textContent = "Coba Lagi";

      retryButton.addEventListener("click", () => {
        selectedAnswer = null;
        checkedAnswer = false;
        renderActiveLesson();
      });

      document.querySelector(".lesson-practice-card")?.appendChild(retryButton);
    }
  }

  /* ==========================================================
     16. NAVIGASI
  ========================================================== */

  function getContainer() {
    return document.getElementById("pageContainer");
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function openLesson(id) {
    const container = getContainer();

    if (!container) return;

    renderLessonDetail(container, id);
    scrollToTop();
  }

  function backToMaterials() {
    const container = getContainer();

    if (!container) return;

    activeLessonId = null;
    activeStage = 1;

    renderMateriPage(container);
    scrollToTop();
  }

  /* ==========================================================
     17. INTERAKSI TOMBOL
  ========================================================== */

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    // BUKA MATERI
    const openButton = target.closest("[data-open-lesson]");

    if (openButton) {
      openLesson(Number(openButton.dataset.openLesson));
      return;
    }

    // KEMBALI KE DAFTAR MATERI
    const backButton = target.closest("[data-back-materials]");

    if (backButton) {
      backToMaterials();
      return;
    }

    // PILIH TAHAP
    const stageButton = target.closest("[data-stage]");

    if (stageButton) {
      const stageId = Number(stageButton.dataset.stage);

      if (!isStageUnlocked(activeLessonId, stageId)) {
        return;
      }

      activeStage = stageId;
      selectedAnswer = null;
      checkedAnswer = false;

      renderActiveLesson();
      scrollToTop();
      return;
    }

    // SELESAIKAN TAHAP
    const completeStageButton = target.closest("[data-complete-stage]");

    if (completeStageButton) {
      const stageId = Number(completeStageButton.dataset.completeStage);

      // Tahap 5 harus dijawab dengan benar
      if (stageId === 5) {
        const saved = localStorage.getItem(getPracticeKey(activeLessonId));

        if (!saved || !JSON.parse(saved).correct) {
          alert("Jawab Tantangan Dati dengan benar terlebih dahulu.");
          return;
        }
      }

      // Tahap 6 harus memiliki refleksi
      if (stageId === 6) {
        const reflection = localStorage.getItem(
          getReflectionKey(activeLessonId),
        );

        if (!reflection || !reflection.trim()) {
          alert("Simpan refleksimu terlebih dahulu.");
          return;
        }
      }

      completeCurrentStage(activeLessonId, stageId);

      if (stageId === 6) {
        markLessonComplete(activeLessonId);
        renderActiveLesson();
      }

      scrollToTop();
      return;
    }

    // PILIH JAWABAN
    const answerButton = target.closest("[data-answer]");

    if (answerButton && !checkedAnswer) {
      selectedAnswer = Number(answerButton.dataset.answer);

      document.querySelectorAll(".practice-option").forEach((button) => {
        button.classList.remove("selected");
        button.setAttribute("aria-pressed", "false");
      });

      answerButton.classList.add("selected");
      answerButton.setAttribute("aria-pressed", "true");

      const checkButton = document.querySelector("[data-check-answer]");

      if (checkButton) {
        checkButton.disabled = false;
      }

      return;
    }

    // PERIKSA JAWABAN
    const checkButton = target.closest("[data-check-answer]");

    if (checkButton) {
      checkPracticeAnswer();
      return;
    }

    // SIMPAN REFLEKSI
    const reflectionButton = target.closest("[data-save-reflection]");

    if (reflectionButton) {
      const id = Number(reflectionButton.dataset.saveReflection);

      saveReflection(id);
      return;
    }
  }); // PENUTUP document.addEventListener

  /* ==========================================================
     18. EXPORT UNTUK APP.JS
  ========================================================== */

  window.renderMateriPage = renderMateriPage;
  window.renderLessonDetail = renderLessonDetail;
})();
