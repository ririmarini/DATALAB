/* =========================================================
   DATALAB - TANTANGAN SERU
   ---------------------------------------------------------
   Fitur:
   1. Enam misi petualangan statistika.
   2. Sepuluh soal pada setiap misi.
   3. Sistem pulau terbuka dan terkunci.
   4. Pemeriksaan jawaban dan pembahasan.
   5. Perolehan skor, bintang, dan XP.
   6. Sistem level petualangan.
   7. Penyimpanan progres menggunakan localStorage.
   8. Menggunakan aset gambar asli DataLab.
   ========================================================= */

(() => {
  "use strict";

  /* =========================================================
     01. KONFIGURASI DAN PENYIMPANAN
     ========================================================= */

  const IMG = "assets/images/";
  const STORE = "datalab_game_adventure_v4";
  const OLD_STORE = "datalab_game_adventure_v3";

  /* =========================================================
     02. BANK SOAL MISI 1
     MENGENAL STATISTIKA DAN DATA
     ========================================================= */

  const missions = [
    {
      id: 1,
      title: "Mengenal Statistika dan Data",
      short: "Detektif Data",
      tone: "lavender",
      image: "misi1_mengenal_statistika.png",

      questions: [
        {
          q: "Data tinggi badan siswa dalam sentimeter termasuk jenis data ....",
          o: ["Kualitatif", "Kuantitatif", "Nominal", "Kategori"],
          a: 1,
          e: "Tinggi badan dinyatakan dengan angka hasil pengukuran, sehingga termasuk data kuantitatif.",
        },
        {
          q: "Warna tas yang disukai siswa merupakan data ....",
          o: ["Kuantitatif", "Numerik", "Kualitatif", "Kontinu"],
          a: 2,
          e: "Warna merupakan kategori atau sifat, bukan hasil pengukuran angka.",
        },
        {
          q: "Kumpulan fakta atau hasil pengamatan yang dicatat disebut ....",
          o: ["Data", "Rumus", "Diagram", "Kesimpulan"],
          a: 0,
          e: "Data adalah kumpulan fakta atau hasil pengamatan yang dikumpulkan untuk diolah.",
        },
        {
          q: "Dari pilihan berikut, yang merupakan data diskrit adalah ....",
          o: ["Berat badan", "Tinggi badan", "Waktu tempuh", "Jumlah saudara"],
          a: 3,
          e: "Jumlah saudara dihitung dalam bilangan cacah dan tidak berupa pecahan, sehingga termasuk data diskrit.",
        },
        {
          q: "Seorang guru mencatat hobi 30 siswa. Cara memperoleh data tersebut adalah ....",
          o: [
            "Mengukur",
            "Mengamati atau bertanya",
            "Menghitung luas",
            "Menggambar",
          ],
          a: 1,
          e: "Hobi diperoleh dengan bertanya kepada siswa atau mengamati informasi yang relevan.",
        },
        {
          q: "Data nilai ulangan 70, 80, 90, 80, 70. Banyak seluruh data adalah ....",
          o: ["3", "4", "5", "6"],
          a: 2,
          e: "Ada lima nilai yang tercatat, jadi banyak data adalah 5.",
        },
        {
          q: "Pernyataan yang tepat tentang populasi adalah ....",
          o: [
            "Sebagian objek yang dipilih",
            "Seluruh objek yang menjadi perhatian penelitian",
            "Satu hasil pengukuran",
            "Data yang salah",
          ],
          a: 1,
          e: "Populasi merupakan seluruh objek atau individu yang menjadi sasaran pengamatan.",
        },
        {
          q: "Dari 200 siswa dipilih 40 siswa untuk diteliti. Kelompok 40 siswa disebut ....",
          o: ["Populasi", "Variabel", "Sampel", "Parameter"],
          a: 2,
          e: "Sampel adalah sebagian anggota populasi yang dipilih untuk mewakili populasi.",
        },
        {
          q: "Data jumlah buku yang dibaca siswa selama sebulan paling tepat diperoleh melalui ....",
          o: [
            "Pencatatan jumlah buku",
            "Pengukuran suhu",
            "Pengukuran panjang",
            "Wawancara warna",
          ],
          a: 0,
          e: "Jumlah buku dapat diperoleh dengan mencatat banyak buku yang selesai dibaca setiap siswa.",
        },
        {
          q: "Ketua kelas ingin mengetahui makanan favorit seluruh siswa kelas VIII. Langkah awal yang paling tepat adalah ....",
          o: [
            "Menebak makanan favorit",
            "Memilih satu teman saja",
            "Mengumpulkan jawaban seluruh siswa kelas VIII",
            "Langsung membuat diagram",
          ],
          a: 2,
          e: "Data perlu dikumpulkan dari kelompok yang menjadi sasaran agar kesimpulan tidak sekadar tebakan.",
        },
      ],
    },

    /* =========================================================
       03. BANK SOAL MISI 2
       MENGOLAH DAN MENYAJIKAN DATA
       ========================================================= */

    {
      id: 2,
      title: "Mengolah dan Menyajikan Data",
      short: "Penyusun Data",
      tone: "mint",
      image: "misi2_mengolah_data.png",

      questions: [
        {
          q: "Data 6, 7, 6, 8, 7, 6. Frekuensi nilai 6 adalah ....",
          o: ["1", "2", "3", "4"],
          a: 2,
          e: "Nilai 6 muncul tiga kali, sehingga frekuensinya adalah 3.",
        },
        {
          q: "Penyajian data dalam baris dan kolom disebut ....",
          o: ["Tabel", "Peta", "Rumus", "Kalimat"],
          a: 0,
          e: "Tabel menyusun data dalam baris dan kolom agar mudah dibaca.",
        },
        {
          q: "Tujuan mengelompokkan data adalah ....",
          o: [
            "Membuat data hilang",
            "Memudahkan membaca data",
            "Mengubah semua nilai",
            "Memperbanyak data",
          ],
          a: 1,
          e: "Pengelompokan membuat data lebih teratur dan mudah dipahami.",
        },
        {
          q: "Perhatikan data: 4, 5, 5, 6, 7, 7, 7. Frekuensi nilai 7 adalah ....",
          o: ["1", "2", "3", "4"],
          a: 2,
          e: "Angka 7 muncul tiga kali pada kumpulan data.",
        },
        {
          q: "Tabel frekuensi digunakan untuk menunjukkan ....",
          o: [
            "Warna setiap objek",
            "Banyak kemunculan setiap nilai atau kategori",
            "Urutan nama berdasarkan abjad saja",
            "Rumus bangun ruang",
          ],
          a: 1,
          e: "Tabel frekuensi menunjukkan berapa kali setiap nilai atau kategori muncul.",
        },
        {
          q: "Data jumlah pengunjung perpustakaan: Senin 12, Selasa 15, Rabu 9. Hari dengan pengunjung terbanyak adalah ....",
          o: ["Senin", "Selasa", "Rabu", "Sama banyak"],
          a: 1,
          e: "Jumlah terbesar adalah 15, yaitu pada hari Selasa.",
        },
        {
          q: "Jumlah seluruh frekuensi pada suatu tabel harus sama dengan ....",
          o: [
            "Nilai terbesar",
            "Banyak seluruh data",
            "Nilai terkecil",
            "Banyak kategori dikali dua",
          ],
          a: 1,
          e: "Jika semua data telah dicatat, jumlah frekuensi seluruh kategori sama dengan banyak data.",
        },
        {
          q: "Diketahui tabel hobi: membaca 8 siswa, olahraga 12 siswa, musik 5 siswa. Jumlah siswa adalah ....",
          o: ["20", "23", "25", "30"],
          a: 2,
          e: "Jumlah siswa = 8 + 12 + 5 = 25 siswa.",
        },
        {
          q: "Data yang belum diurutkan akan lebih mudah dianalisis jika terlebih dahulu ....",
          o: [
            "Dihapus",
            "Dikelompokkan atau diurutkan sesuai kebutuhan",
            "Ditambah angka acak",
            "Diubah menjadi huruf",
          ],
          a: 1,
          e: "Mengelompokkan atau mengurutkan data membantu menemukan pola dan membandingkan nilai.",
        },
        {
          q: "Dalam tabel frekuensi, kategori A berjumlah 6, B berjumlah 9, dan C berjumlah 5. Kesimpulan yang tepat adalah ....",
          o: [
            "A paling banyak",
            "B paling banyak",
            "C paling banyak",
            "Semua sama",
          ],
          a: 1,
          e: "Kategori B memiliki frekuensi tertinggi, yaitu 9.",
        },
      ],
    },

    /* =========================================================
       04. BANK SOAL MISI 3
       DIAGRAM STATISTIKA
       ========================================================= */

    {
      id: 3,
      title: "Diagram Statistika",
      short: "Racik Diagram",
      tone: "pink",
      image: "misi3_diagram_statistika.png",

      questions: [
        {
          q: "Diagram batang paling tepat digunakan untuk ....",
          o: [
            "Membandingkan kategori",
            "Menulis cerita",
            "Mengukur suhu langsung",
            "Mengurutkan huruf",
          ],
          a: 0,
          e: "Diagram batang memudahkan perbandingan jumlah atau nilai antar kategori.",
        },
        {
          q: "Bagian pada diagram lingkaran menunjukkan ....",
          o: [
            "Waktu pengamatan",
            "Proporsi bagian terhadap keseluruhan",
            "Urutan abjad",
            "Nama responden",
          ],
          a: 1,
          e: "Setiap sektor diagram lingkaran mewakili bagian atau proporsi dari keseluruhan data.",
        },
        {
          q: "Diagram garis cocok untuk menunjukkan perubahan data ....",
          o: [
            "Warna benda",
            "Dari waktu ke waktu",
            "Nama siswa",
            "Jenis hobi saja",
          ],
          a: 1,
          e: "Diagram garis membantu melihat perubahan atau tren data berdasarkan waktu.",
        },
        {
          q: "Pada diagram batang, tinggi batang menyatakan ....",
          o: [
            "Frekuensi atau nilai kategori",
            "Judul diagram",
            "Nama pembuat",
            "Warna kategori",
          ],
          a: 0,
          e: "Tinggi batang menunjukkan besar nilai atau frekuensi yang diwakili kategori tersebut.",
        },
        {
          q: "Diagram lingkaran menunjukkan 25% siswa memilih membaca. Jika jumlah siswa 40, banyak siswa yang memilih membaca adalah ....",
          o: ["5", "10", "15", "20"],
          a: 1,
          e: "25% × 40 = 0,25 × 40 = 10 siswa.",
        },
        {
          q: "Pada diagram batang, nilai kategori A = 12 dan kategori B = 18. Selisih keduanya adalah ....",
          o: ["4", "5", "6", "8"],
          a: 2,
          e: "Selisih = 18 − 12 = 6.",
        },
        {
          q: "Diagram yang paling sesuai untuk memperlihatkan perubahan suhu selama 7 hari adalah ....",
          o: [
            "Diagram garis",
            "Diagram gambar tanpa skala",
            "Tabel nama",
            "Piktogram hobi",
          ],
          a: 0,
          e: "Data suhu selama beberapa hari merupakan data berurutan menurut waktu, sehingga diagram garis sesuai.",
        },
        {
          q: "Jumlah siswa pada diagram lingkaran adalah 80. Bagian olahraga sebesar 40%. Banyak siswa yang memilih olahraga adalah ....",
          o: ["24", "28", "32", "40"],
          a: 2,
          e: "40% × 80 = 32 siswa.",
        },
        {
          q: "Diagram batang memiliki batang tertinggi pada kategori sepak bola. Artinya ....",
          o: [
            "Sepak bola paling sedikit dipilih",
            "Sepak bola paling banyak dipilih",
            "Semua kategori sama",
            "Data tidak dapat dibaca",
          ],
          a: 1,
          e: "Batang tertinggi menunjukkan kategori dengan frekuensi paling besar.",
        },
        {
          q: "Mengapa skala pada sumbu diagram harus dibuat konsisten?",
          o: [
            "Agar diagram tampak penuh",
            "Agar pembacaan dan perbandingan data tidak menyesatkan",
            "Agar warna lebih banyak",
            "Agar judul lebih panjang",
          ],
          a: 1,
          e: "Skala konsisten menjaga ketepatan pembacaan dan mencegah kesan perbandingan yang keliru.",
        },
      ],
    },

    /* =========================================================
       05. BANK SOAL MISI 4
       MEAN (RATA-RATA)
       ========================================================= */

    {
      id: 4,
      title: "Mean (Rata-rata)",
      short: "Kejar Mean",
      tone: "peach",
      image: "misi4_mean.png",

      questions: [
        {
          q: "Mean dari 4, 6, dan 8 adalah ....",
          o: ["5", "6", "7", "8"],
          a: 1,
          e: "Mean = (4 + 6 + 8) ÷ 3 = 18 ÷ 3 = 6.",
        },
        {
          q: "Jumlah data 5, 7, 8, dan 10 adalah ....",
          o: ["28", "29", "30", "31"],
          a: 2,
          e: "Jumlah seluruh data = 5 + 7 + 8 + 10 = 30.",
        },
        {
          q: "Rata-rata 5 nilai adalah 8. Jumlah seluruh nilainya adalah ....",
          o: ["13", "20", "35", "40"],
          a: 3,
          e: "Jumlah data = mean × banyak data = 8 × 5 = 40.",
        },
        {
          q: "Mean dari 6, 8, 10, dan 12 adalah ....",
          o: ["8", "9", "10", "11"],
          a: 1,
          e: "Jumlahnya 36. Mean = 36 ÷ 4 = 9.",
        },
        {
          q: "Nilai ulangan 70, 80, 90. Rata-ratanya adalah ....",
          o: ["75", "80", "85", "90"],
          a: 1,
          e: "Mean = (70 + 80 + 90) ÷ 3 = 240 ÷ 3 = 80.",
        },
        {
          q: "Rata-rata 4 bilangan adalah 12. Jika tiga bilangan berjumlah 30, bilangan keempat adalah ....",
          o: ["12", "14", "16", "18"],
          a: 3,
          e: "Jumlah empat bilangan = 4 × 12 = 48. Bilangan keempat = 48 − 30 = 18.",
        },
        {
          q: "Berat rata-rata 5 paket adalah 2 kg. Total berat seluruh paket adalah ....",
          o: ["7 kg", "10 kg", "12 kg", "15 kg"],
          a: 1,
          e: "Total berat = rata-rata × banyak paket = 2 × 5 = 10 kg.",
        },
        {
          q: "Data 5, 7, 9 memiliki mean 7. Jika ditambahkan nilai 11, mean baru adalah ....",
          o: ["7", "8", "9", "10"],
          a: 1,
          e: "Jumlah baru = 5 + 7 + 9 + 11 = 32. Mean = 32 ÷ 4 = 8.",
        },
        {
          q: "Rata-rata nilai 6 siswa adalah 75. Setelah satu siswa baru ikut, rata-rata 7 siswa menjadi 76. Nilai siswa baru adalah ....",
          o: ["76", "80", "82", "85"],
          a: 2,
          e: "Jumlah awal = 6 × 75 = 450. Jumlah nilai setelah siswa baru ikut = 7 × 76 = 532. Nilai siswa baru = 532 − 450 = 82.",
        },
        {
          q: "Lima siswa memperoleh nilai 60, 70, 70, 80, dan 90. Jika nilai 90 berubah menjadi 100, mean naik sebesar ....",
          o: ["1", "2", "3", "5"],
          a: 1,
          e: "Jumlah bertambah 10 untuk 5 siswa, sehingga mean naik 10 ÷ 5 = 2.",
        },
      ],
    },

    /* =========================================================
       06. BANK SOAL MISI 5
       MEDIAN (NILAI TENGAH)
       ========================================================= */

    {
      id: 5,
      title: "Median (Nilai Tengah)",
      short: "Pemburu Median",
      tone: "blue",
      image: "misi5_median.png",

      questions: [
        {
          q: "Median dari 3, 5, 7, 9, 11 adalah ....",
          o: ["5", "7", "9", "11"],
          a: 1,
          e: "Data sudah berurutan. Nilai yang tepat di tengah adalah 7.",
        },
        {
          q: "Median dari 2, 4, 6, 8 adalah ....",
          o: ["4", "5", "6", "7"],
          a: 1,
          e: "Karena ada empat data, median = (4 + 6) ÷ 2 = 5.",
        },
        {
          q: "Sebelum mencari median, data harus ....",
          o: ["Dijumlahkan", "Diurutkan", "Dikalikan", "Dihapus"],
          a: 1,
          e: "Urutkan data dari nilai terkecil ke terbesar terlebih dahulu.",
        },
        {
          q: "Median dari 4, 8, 2, 6, 10 adalah ....",
          o: ["4", "6", "8", "10"],
          a: 1,
          e: "Urutkan menjadi 2, 4, 6, 8, 10. Nilai tengahnya 6.",
        },
        {
          q: "Median dari 1, 3, 5, 7, 9, 11 adalah ....",
          o: ["5", "6", "7", "8"],
          a: 1,
          e: "Dua nilai tengah adalah 5 dan 7. Median = (5 + 7) ÷ 2 = 6.",
        },
        {
          q: "Data 12, 8, 10, 6, 14. Median data tersebut adalah ....",
          o: ["8", "10", "12", "14"],
          a: 1,
          e: "Urutan data: 6, 8, 10, 12, 14. Nilai tengah = 10.",
        },
        {
          q: "Jika banyak data ganjil, median terletak pada ....",
          o: [
            "Dua nilai paling kecil",
            "Satu nilai tepat di tengah setelah diurutkan",
            "Nilai paling besar",
            "Jumlah seluruh data",
          ],
          a: 1,
          e: "Untuk banyak data ganjil, median adalah satu nilai yang berada tepat di posisi tengah.",
        },
        {
          q: "Data 2, 3, 4, 8, 9, 10 memiliki median ....",
          o: ["4", "5", "6", "8"],
          a: 2,
          e: "Dua nilai tengah adalah 4 dan 8. Median = (4 + 8) ÷ 2 = 6.",
        },
        {
          q: "Nilai 5 siswa adalah 60, 70, 75, 80, 95. Jika nilai 95 diganti 100, median menjadi ....",
          o: ["70", "75", "80", "100"],
          a: 1,
          e: "Urutan baru 60, 70, 75, 80, 100. Nilai tengah tetap 75.",
        },
        {
          q: "Data waktu membaca (menit): 20, 15, 30, 25, 10. Median waktu membaca adalah ....",
          o: ["15 menit", "20 menit", "25 menit", "30 menit"],
          a: 1,
          e: "Urutkan 10, 15, 20, 25, 30. Nilai tengah adalah 20 menit.",
        },
      ],
    },

    /* =========================================================
       07. BANK SOAL MISI 6
       MODUS DAN INTERPRETASI DATA
       ========================================================= */

    {
      id: 6,
      title: "Modus dan Interpretasi Data",
      short: "Pemburu Modus",
      tone: "gold",
      image: "misi6_modus_interpretasi.png",

      questions: [
        {
          q: "Modus dari 2, 3, 3, 4, 5 adalah ....",
          o: ["2", "3", "4", "5"],
          a: 1,
          e: "Angka 3 muncul paling sering, yaitu dua kali.",
        },
        {
          q: "Data 5, 5, 6, 6, 7 memiliki ....",
          o: ["Satu modus", "Dua modus", "Tidak ada data", "Tiga modus"],
          a: 1,
          e: "Nilai 5 dan 6 sama-sama memiliki frekuensi tertinggi, sehingga terdapat dua modus.",
        },
        {
          q: "Modus menunjukkan nilai yang ....",
          o: [
            "Paling besar",
            "Paling kecil",
            "Paling sering muncul",
            "Berada di tengah",
          ],
          a: 2,
          e: "Modus adalah nilai atau kategori yang paling sering muncul.",
        },
        {
          q: "Modus dari 4, 4, 5, 6, 6, 6, 7 adalah ....",
          o: ["4", "5", "6", "7"],
          a: 2,
          e: "Nilai 6 muncul tiga kali, lebih sering daripada nilai lainnya.",
        },
        {
          q: "Data ukuran sepatu: 36, 37, 37, 38, 39. Modusnya adalah ....",
          o: ["36", "37", "38", "39"],
          a: 1,
          e: "Ukuran 37 muncul dua kali, sedangkan ukuran lain hanya sekali.",
        },
        {
          q: "Data 2, 2, 3, 3, 4, 5 tidak memiliki modus tunggal karena ....",
          o: [
            "Semua nilai berbeda",
            "Nilai 2 dan 3 sama-sama paling sering muncul",
            "Nilai 5 paling besar",
            "Jumlah data genap",
          ],
          a: 1,
          e: "Nilai 2 dan 3 sama-sama muncul dua kali, sehingga keduanya menjadi modus.",
        },
        {
          q: "Dalam survei makanan favorit, nasi goreng dipilih 15 siswa, mi goreng 10 siswa, dan soto 5 siswa. Modus kategori makanan adalah ....",
          o: ["Mi goreng", "Soto", "Nasi goreng", "Semua sama"],
          a: 2,
          e: "Nasi goreng memiliki frekuensi tertinggi, yaitu 15 siswa.",
        },
        {
          q: "Data 1, 2, 2, 3, 3, 3, 4. Jika ditambahkan satu angka 4, modus data menjadi ....",
          o: ["2", "3", "4", "2 dan 4"],
          a: 1,
          e: "Setelah ditambah 4, frekuensi 3 tetap tiga kali, sedangkan 4 menjadi dua kali. Modus tetap 3.",
        },
        {
          q: "Toko ingin menyediakan ukuran kaus yang paling banyak diminati. Ukuran yang sebaiknya diprioritaskan berdasarkan data adalah ....",
          o: [
            "Ukuran dengan frekuensi tertinggi",
            "Ukuran paling mahal",
            "Ukuran paling kecil",
            "Ukuran yang dipilih satu orang",
          ],
          a: 0,
          e: "Frekuensi tertinggi menunjukkan ukuran yang paling banyak diminati pelanggan.",
        },
        {
          q: "Data pengunjung kantin selama lima hari: 20, 25, 25, 30, 35. Kesimpulan yang tepat tentang modus adalah ....",
          o: [
            "Pengunjung paling sering 20",
            "Pengunjung paling sering 25",
            "Pengunjung paling sering 30",
            "Tidak ada nilai yang berulang",
          ],
          a: 1,
          e: "Angka 25 muncul dua kali, sedangkan nilai lainnya hanya sekali.",
        },
      ],
    },
  ];

  /* =========================================================
     08. FUNGSI PENYIMPANAN PROGRES
     ========================================================= */

  function readState() {
    try {
      const current = JSON.parse(localStorage.getItem(STORE) || "null");

      if (current && current.results) {
        return {
          results: current.results,
          xp: Math.max(0, Number(current.xp) || 0),
        };
      }

      // Data versi lama tidak dikonversi menjadi skor baru.
      const old = JSON.parse(localStorage.getItem(OLD_STORE) || "null");

      if (old && old.results) {
        return {
          results: {},
          xp: 0,
        };
      }
    } catch (error) {
      console.warn("Data progres permainan tidak dapat dibaca:", error);
    }

    return {
      results: {},
      xp: 0,
    };
  }

  let state = readState();

  function save() {
    try {
      localStorage.setItem(STORE, JSON.stringify(state));
    } catch (error) {
      console.error("Gagal menyimpan progres permainan:", error);
    }
  }

  /* =========================================================
     09. FUNGSI BANTUAN
     ========================================================= */

  // Mengambil alamat aset gambar.
  const asset = (name) => `${IMG}${name}`;

  // Mengamankan teks sebelum dimasukkan ke HTML.
  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => {
      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      };

      return entities[character];
    });
  }

  // Mengambil hasil misi.
  function resultFor(id) {
    return (
      state.results[id] || {
        bestScore: 0,
        completed: false,
        stars: 0,
      }
    );
  }

  // Menghitung bintang berdasarkan nilai.
  function starsFor(score) {
    if (score >= 90) return 3;
    if (score >= 70) return 2;
    if (score >= 50) return 1;

    return 0;
  }

  // Menghitung jumlah misi yang selesai.
  function completedCount() {
    return missions.filter((mission) => {
      return resultFor(mission.id).completed;
    }).length;
  }

  // Menghitung seluruh bintang yang diperoleh.
  function totalStars() {
    return missions.reduce((total, mission) => {
      return total + resultFor(mission.id).stars;
    }, 0);
  }

  // Misi pertama selalu terbuka.
  // Misi berikutnya terbuka setelah misi sebelumnya selesai.
  function unlocked(id) {
    return id === 1 || resultFor(id - 1).completed;
  }

  // Setiap 100 XP akan menaikkan level.
  function currentLevel() {
    return Math.floor(state.xp / 100) + 1;
  }

  /* =========================================================
     10. KOORDINAT PULAU PADA PETA PETUALANGAN
     ========================================================= */

  /*
   * Titik pusat bundaran pada peta_utama.png (1506 x 585 px).
   * Nilai menggunakan persentase agar posisi tetap sejajar
   * ketika ukuran peta berubah pada layar laptop, tablet, dan HP.
   */
  const mapPoints = [
    { id: 1, left: 31.87, top: 46.15 },
    { id: 2, left: 51.79, top: 33.33 },
    { id: 3, left: 72.04, top: 39.32 },
    { id: 4, left: 31.21, top: 68.38 },
    { id: 5, left: 51.79, top: 68.38 },
    { id: 6, left: 76.03, top: 64.96 },
  ];

  /* =========================================================
     11. RENDER HALAMAN TANTANGAN SERU
     ========================================================= */

  function renderGamesPage(container) {
    if (!container) return;

    state = readState();
    const completed = completedCount();
    const stars = totalStars();
    const xpInLevel = state.xp % 100;
    const level = currentLevel();

    const percentage = Math.round((completed / missions.length) * 100);

    container.innerHTML = `
      <main class="games-page" id="datalabGames">

        <!-- BANNER UTAMA -->
        <section class="games-banner" aria-label="Tantangan Seru">
          <img
            src="${asset("banner/banner_tantangan_seru.png")}"
            alt="Tantangan Seru, Petualangan Statistika Bersama Dati"
          />
        </section>

        <!-- AREA PETA DAN PROGRES -->
        <section class="games-adventure-layout" id="gamesMap">

          <!-- PANEL PETA PETUALANGAN -->
          <section class="games-map-panel">

            <div class="games-map-heading">
              <div>
                <span class="games-kicker">PETA PETUALANGAN DATI</span>
                <h2>Jelajahi Pulau Statistik</h2>
                <p>
                  Pilih pulau yang terbuka, selesaikan 10 soal,
                  dan kumpulkan bintang!
                </p>
              </div>

              <img
                src="${asset("ui/icon_peta.png")}"
                alt=""
              />
            </div>

            <!-- GAMBAR PETA DAN TOMBOL PULAU -->
            <div class="games-map-stage">

              <img
                class="games-map-background"
                src="${asset("map/peta_utama.png")}"
                alt="Peta enam pulau petualangan statistik"
              />

              ${mapPoints
                .map((point) => {
                  const mission = missions[point.id - 1];
                  const result = resultFor(point.id);
                  const isOpen = unlocked(point.id);

                  return `
                    <button
                      class="games-map-point
                        ${isOpen ? "is-open" : "is-locked"}
                        ${result.completed ? "is-done" : ""}"
                      type="button"
                      data-play="${point.id}"
                      style="
                        --point-x:${point.left}%;
                        --point-y:${point.top}%;
                      "
                      ${isOpen ? "" : "disabled"}
                      aria-label="${
                        isOpen
                          ? `Mulai misi ${point.id}: ${mission.title}`
                          : `Misi ${point.id} terkunci. Selesaikan misi sebelumnya`
                      }"
                    >

                      <img
                        src="${asset(`map/level_${point.id}.png`)}"
                        alt="Pulau misi ${point.id}"
                      />

                      ${
                        !isOpen ? '<span class="games-lock-mark">🔒</span>' : ""
                      }

                      <span class="games-map-stars">
                        ${[1, 2, 3]
                          .map((number) => {
                            return `
                              <i class="${
                                number <= result.stars ? "earned" : ""
                              }">★</i>
                            `;
                          })
                          .join("")}
                      </span>

                    </button>
                  `;
                })
                .join("")}

              <div class="games-map-hint">
                🧭 Tekan pulau yang terbuka untuk bermain!
              </div>

            </div>

            <!-- INFORMASI PENYELESAIAN PETA -->
            <div class="games-map-footer">
              <strong>${percentage}% perjalanan selesai</strong>
              <span>${completed} dari 6 misi tuntas</span>
            </div>

          </section>

          <!-- PANEL PROGRES PETUALANGAN -->
          <aside class="games-progress-panel">

            <div class="games-progress-title">
              <img
                src="${asset("ui/icon_medali.png")}"
                alt=""
              />

              <div>
                <span class="games-kicker">PETUALANGANMU</span>
                <h2>Progress Petualangan</h2>
              </div>
            </div>

            <!-- LEVEL DAN XP -->
            <div class="games-level-card">
              <img
                src="${asset("ui/icon_level.png")}"
                alt="Level ${level}"
              />

              <div class="games-level-info">
                <small>Level Petualangan</small>
                <strong>Level ${level}</strong>

                <div class="games-level-track">
                  <i style="width:${xpInLevel}%"></i>
                </div>

                <em>${xpInLevel} / 100 XP</em>
              </div>
            </div>

            <!-- JUMLAH BINTANG -->
            <div class="games-progress-stat">
              <img
                src="${asset("ui/icon_bintang.png")}"
                alt=""
              />

              <div>
                <small>Bintang Dikumpulkan</small>
                <strong>${stars} / 18</strong>
              </div>
            </div>

            <!-- MISI SELESAI -->
            <div class="games-progress-stat">
              <span class="games-target-icon">🎯</span>

              <div>
                <small>Misi Selesai</small>
                <strong>${completed} / 6</strong>
              </div>
            </div>

            <!-- GELAR PETUALANG -->
            <div class="games-rank-card">
              <img
                src="${asset("ui/icon_piala.png")}"
                alt=""
              />

              <div>
                <small>Gelar Saat Ini</small>
                <strong>
                  ${
                    completed === 6
                      ? "Juara Statistik"
                      : completed >= 3
                        ? "Penjelajah Data"
                        : completed >= 1
                          ? "Petualang Pemula"
                          : "Pelajar Statistik"
                  }
                </strong>
              </div>
            </div>

            <div class="games-progress-tip">
              Terus berusaha, kumpulkan bintang,
              dan buka peti harta karun!
            </div>

          </aside>

        </section>

        <!-- DAFTAR ENAM KARTU MISI -->
        <section class="games-missions-section" id="gamesMissions">

          <div class="games-missions-heading">
            <div>
              <span class="games-kicker">PILIH MISI</span>
              <h2>Enam Tantangan Menantimu!</h2>
              <p>
                Mainkan setiap misi, kuasai materi,
                dan lengkapi bintang petualanganmu! ✨
              </p>
            </div>

            <img
              src="${asset("ui/icon_gamepad.png")}"
              alt=""
            />
          </div>

          <div class="games-mission-grid">

            ${missions
              .map((mission) => {
                const result = resultFor(mission.id);
                const isOpen = unlocked(mission.id);

                return `
                  <article
                    class="games-mission-card ${mission.tone}
                      ${result.completed ? "is-completed" : ""}
                      ${!isOpen ? "is-locked" : ""}"
                  >

                    <button
                      type="button"
                      class="games-mission-image-button"
                      data-play="${mission.id}"
                      ${isOpen ? "" : "disabled"}
                      aria-label="${
                        isOpen
                          ? `Mainkan misi ${mission.id} ${mission.title}`
                          : `Misi ${mission.id} terkunci`
                      }"
                    >

                      <img
                        src="${asset(`missions/${mission.image}`)}"
                        alt="Misi ${mission.id}: ${escapeHTML(mission.title)}"
                      />

                      ${
                        !isOpen
                          ? '<span class="games-card-lock">🔒 Selesaikan misi sebelumnya</span>'
                          : ""
                      }

                    </button>

                    <div class="games-mission-status">
                      <span>
                        ${
                          result.completed
                            ? `✓ Selesai · Nilai ${result.bestScore}`
                            : isOpen
                              ? "Siap dimainkan"
                              : "Terkunci"
                        }
                      </span>

                      <span>${result.stars} / 3 ★</span>
                    </div>

                  </article>
                `;
              })
              .join("")}

          </div>

        </section>

        <!-- PETI HARTA KARUN -->
        <section class="games-treasure">

          <img
            src="${asset("ui/icon_peti_harta.png")}"
            alt="Peti harta karun"
          />

          <div>
            <span class="games-kicker">HADIAH AKHIR</span>

            <h2>
              ${
                completed === 6
                  ? "JUARA STATISTIK!"
                  : "Peti Harta Karun Menanti"
              }
            </h2>

            <p>
              ${
                completed === 6
                  ? "Luar biasa! Kamu berhasil menuntaskan keenam misi."
                  : `Selesaikan keenam misi dan kumpulkan hingga 18 bintang. Saat ini ${stars} bintang sudah terkumpul.`
              }
            </p>
          </div>

          <img
            class="games-treasure-cup"
            src="${asset("ui/icon_piala.png")}"
            alt="Piala"
          />

        </section>

        <!-- TEMPAT MODAL PERMAINAN -->
        <div class="games-modal-host" id="gamesModalHost"></div>

      </main>
    `;

    /* =======================================================
       12. EVENT TOMBOL PULAU DAN KARTU MISI
       ======================================================= */

    container.querySelectorAll("[data-play]").forEach((button) => {
      button.addEventListener("click", () => {
        const missionId = Number(button.dataset.play);
        startMission(container, missionId);
      });
    });
  }

  /* =========================================================
     13. MEMULAI PERMAINAN
     ========================================================= */

  function startMission(container, missionId) {
    const mission = missions.find((item) => {
      return item.id === missionId;
    });

    const host = container.querySelector("#gamesModalHost");

    if (!mission || !host || !unlocked(missionId)) {
      return;
    }

    let index = 0;
    let correct = 0;
    let locked = false;

    /* =======================================================
       14. MENAMPILKAN SOAL
       ======================================================= */

    function renderQuestion() {
      const question = mission.questions[index];

      host.innerHTML = `
        <div class="games-modal-backdrop" data-backdrop>

          <section
            class="games-game-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gamesQuestionTitle"
          >

            <!-- TOMBOL TUTUP -->
            <button
              class="games-modal-close"
              data-close
              type="button"
              aria-label="Tutup"
            >
              ×
            </button>

            <!-- IDENTITAS MISI -->
            <div class="games-game-brand">
              <img
                src="${asset("ui/icon_gamepad.png")}"
                alt=""
              />

              <span>
                MISI ${String(missionId).padStart(2, "0")}
              </span>
            </div>

            <!-- NOMOR SOAL DAN JUMLAH JAWABAN BENAR -->
            <div class="games-question-meta">
              <span>Soal ${index + 1} dari ${mission.questions.length}</span>
              <strong>${correct} benar</strong>
            </div>

            <!-- PROGRES PENGERJAAN SOAL -->
            <div class="games-question-track">
              <i
                style="width:${((index + 1) / mission.questions.length) * 100}%"
              ></i>
            </div>

            <!-- PERTANYAAN -->
            <h2 id="gamesQuestionTitle">
              ${escapeHTML(mission.short)}
            </h2>

            <p class="games-question">
              ${escapeHTML(question.q)}
            </p>

            <!-- PILIHAN JAWABAN -->
            <div class="games-answer-list">
              ${question.o
                .map((option, optionIndex) => {
                  return `
                    <button
                      class="games-answer-option"
                      type="button"
                      data-answer="${optionIndex}"
                    >
                      <b>${String.fromCharCode(65 + optionIndex)}</b>
                      <span>${escapeHTML(option)}</span>
                    </button>
                  `;
                })
                .join("")}
            </div>

            <!-- UMPAN BALIK DAN PEMBAHASAN -->
            <div
              class="games-feedback"
              id="gamesFeedback"
              aria-live="polite"
            ></div>

            <!-- TOMBOL LANJUT -->
            <div class="games-modal-actions"></div>

          </section>
        </div>
      `;

      /* =====================================================
         15. EVENT TOMBOL TUTUP
         ===================================================== */

      host.querySelector("[data-close]").addEventListener("click", () => {
        host.innerHTML = "";
      });

      /* =====================================================
         16. PEMERIKSAAN JAWABAN
         ===================================================== */

      host.querySelectorAll("[data-answer]").forEach((button) => {
        button.addEventListener("click", () => {
          if (locked) return;

          locked = true;

          const correctIndex = question.a;
          const selectedIndex = Number(button.dataset.answer);
          const isCorrect = selectedIndex === correctIndex;

          if (isCorrect) {
            correct++;
          }

          // Nonaktifkan seluruh pilihan setelah siswa menjawab.
          host.querySelectorAll("[data-answer]").forEach((option) => {
            option.disabled = true;

            // Tandai jawaban yang benar.
            if (Number(option.dataset.answer) === correctIndex) {
              option.classList.add("is-correct");
            }
          });

          // Tandai jawaban siswa jika salah.
          if (!isCorrect) {
            button.classList.add("is-wrong");
          }

          // Tampilkan umpan balik dan pembahasan.
          const feedback = host.querySelector("#gamesFeedback");

          feedback.className = `games-feedback ${
            isCorrect ? "is-success" : "is-error"
          }`;

          feedback.innerHTML = `
            <strong>
              ${isCorrect ? "✨ Tepat sekali!" : "💜 Tetap semangat!"}
            </strong>

            <p>${escapeHTML(question.e)}</p>
          `;

          // Tampilkan tombol soal berikutnya.
          const actions = host.querySelector(".games-modal-actions");

          const isLastQuestion = index === mission.questions.length - 1;

          actions.innerHTML = `
            <button
              class="games-next-btn"
              type="button"
              data-next
            >
              ${isLastQuestion ? "Lihat Hasil" : "Soal Berikutnya →"}
            </button>
          `;

          actions.querySelector("[data-next]").addEventListener("click", () => {
            index++;
            locked = false;

            if (index < mission.questions.length) {
              renderQuestion();
            } else {
              renderResult();
            }
          });
        });
      });
    }

    /* =======================================================
       17. MENAMPILKAN HASIL PERMAINAN
       ======================================================= */

    function renderResult() {
      state = readState();

      const previous = resultFor(missionId);

      // Setiap soal bernilai 10 poin.
      const score = correct * 10;

      // Bintang berdasarkan skor.
      const earnedStars = starsFor(score);

      // Pertahankan skor terbaik siswa.
      const bestScore = Math.max(previous.bestScore || 0, score);

      // Pertahankan jumlah bintang terbaik.
      const bestStarCount = Math.max(previous.stars || 0, earnedStars);

      // XP bertambah berdasarkan peningkatan skor terbaik.
      const previousBestScore = previous.bestScore || 0;
      const xpGain = Math.max(0, bestScore - previousBestScore);

      // Simpan hasil misi.
      state.results[missionId] = {
        bestScore,
        stars: bestStarCount,
        completed: true,
      };

      state.xp += xpGain;

      save();

      /* =====================================================
         18. PESAN HASIL BERDASARKAN SKOR
         ===================================================== */

      let message = "";

      if (score >= 90) {
        message = "Luar biasa! Kamu menguasai misi ini.";
      } else if (score >= 70) {
        message = "Hebat! Teruskan petualanganmu.";
      } else if (score >= 50) {
        message = "Bagus, tetap berlatih agar makin mahir.";
      } else {
        message = "Jangan menyerah. Pelajari pembahasan dan coba lagi!";
      }

      /* =====================================================
         19. TAMPILAN HASIL DAN BINTANG
         ===================================================== */

      host.innerHTML = `
        <div class="games-modal-backdrop">

          <section
            class="games-game-modal games-result-modal"
            role="dialog"
            aria-modal="true"
          >

            <!-- MEDALI HASIL -->
            <img
              class="games-result-medal"
              src="${asset("ui/icon_medali.png")}"
              alt="Medali hasil misi"
            />

            <span class="games-kicker">
              HASIL MISI ${missionId}
            </span>

            <h2>
              ${score >= 90 ? "Misi Gemilang!" : "Misi Selesai!"}
            </h2>

            <!-- NILAI AKHIR -->
            <div class="games-score-circle">
              <strong>${score}</strong>
              <span>/ 100</span>
            </div>

            <p class="games-result-summary">
              Kamu menjawab
              <b>${correct} dari ${mission.questions.length} soal</b>
              dengan benar.
            </p>

            <!-- BINTANG YANG DIPEROLEH -->
            <div class="games-result-stars">
              ${[1, 2, 3]
                .map((number) => {
                  const earned = number <= earnedStars;

                  return `
                    <img
                      src="${asset(
                        earned ? "ui/star_full.png" : "ui/star_empty.png",
                      )}"
                      alt="${
                        earned ? "Bintang diperoleh" : "Bintang belum diperoleh"
                      }"
                    />
                  `;
                })
                .join("")}
            </div>

            <!-- PESAN DAN XP -->
            <p class="games-result-note">
              ${message}
            </p>

            <p class="games-xp-note">
              +${xpGain} XP · Rekor terbaik: ${bestScore}/100
            </p>

            <!-- INFORMASI PULAU SELANJUTNYA -->
            <p class="games-unlock-note">
              ${
                missionId < missions.length
                  ? `Pulau ${missionId + 1} sekarang ${
                      unlocked(missionId + 1)
                        ? "terbuka"
                        : "akan terbuka setelah misi ini"
                    }.`
                  : "Kamu telah menyelesaikan seluruh pulau!"
              }
            </p>

            <!-- TOMBOL AKSI HASIL -->
            <div class="games-modal-actions">

              <button
                class="games-next-btn"
                data-done
                type="button"
              >
                Kembali ke Peta
              </button>

              <button
                class="games-retry-btn"
                data-retry
                type="button"
              >
                Ulangi Misi
              </button>

            </div>

          </section>
        </div>
      `;

      /* =====================================================
         20. EVENT TOMBOL KEMBALI KE PETA
         ===================================================== */

      host.querySelector("[data-done]").addEventListener("click", () => {
        host.innerHTML = "";
        renderGamesPage(container);
      });

      /* =====================================================
         21. EVENT TOMBOL ULANGI MISI
         ===================================================== */

      host.querySelector("[data-retry]").addEventListener("click", () => {
        startMission(container, missionId);
      });
    }

    // Mulai dari soal pertama.
    renderQuestion();
  }

  /* =========================================================
     22. FUNGSI GLOBAL UNTUK ROUTING APLIKASI
     ========================================================= */

  window.renderGamesPage = renderGamesPage;
})();
