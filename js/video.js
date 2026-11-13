/* =========================================================
   DATALAB - VIDEO TUTORIAL
   File: js/video.js
   Fungsi:
   - Menampilkan 18 video pembelajaran
   - Filter kategori dan pencarian
   - Pemutar YouTube
   - Menyimpan progres video yang selesai ditonton
   - Memperbarui kartu progres secara otomatis
   ========================================================= */

(() => {
  "use strict";

  const VIDEO_STORAGE_KEY = "datalab_video_progress_v1";

  const VIDEO_ASSET = {
    ui: "assets/images/video/ui/",
    banner: "banner_video_tutorial.png",
    thumbnails: "assets/images/video/",
    buttons: "assets/icons/video-buttons/",
  };

  const videos = [
    // =========================================
    // MATERI 1 — MENGENAL STATISTIKA DAN DATA
    // =========================================
    {
      id: 1,
      topicId: 1,
      part: 1,
      title: "Pengertian Statistika dan Data",
      shortTitle: "Pengertian Statistika",
      category: "Statistika dan Data",
      thumbnail: "01_statistika_dan_data.png",
      duration: "10:24",
      description:
        "Mengenal pengertian statistika dan data serta kegunaannya dalam kehidupan sehari-hari.",
      youtubeId: "MGj2RyRyioY", // Pertahankan ID YouTube video lama yang sudah berfungsi.
    },
    {
      id: 2,
      topicId: 1,
      part: 2,
      title: "Jenis-Jenis Data",
      shortTitle: "Jenis Data",
      category: "Statistika dan Data",
      thumbnail: "01_statistika_dan_data.png",
      duration: "Isi durasi",
      description:
        "Mempelajari jenis data kualitatif dan kuantitatif beserta contohnya.",
      youtubeId: "MGj2RyRyioY",
    },
    {
      id: 3,
      topicId: 1,
      part: 3,
      title: "Populasi dan Sampel",
      shortTitle: "Populasi dan Sampel",
      category: "Statistika dan Data",
      thumbnail: "01_statistika_dan_data.png",
      duration: "Isi durasi",
      description:
        "Memahami pengertian populasi dan sampel dalam penelitian sederhana.",
      youtubeId: "TbRFsxrujQI",
    },

    // =========================================
    // MATERI 2 — MENGOLAH DAN MENYAJIKAN DATA
    // =========================================
    {
      id: 4,
      topicId: 2,
      part: 1,
      title: "Cara Mengumpulkan Data",
      shortTitle: "Mengumpulkan Data",
      category: "Mengolah dan Menyajikan Data",
      thumbnail: "02_mengolah_dan_menyajikan_data.png",
      duration: "Isi durasi",
      description:
        "Mengenal cara mengumpulkan data melalui pengamatan, wawancara, dan angket.",
      youtubeId: "MGj2RyRyioY",
    },
    {
      id: 5,
      topicId: 2,
      part: 2,
      title: "Mengelompokkan Data",
      shortTitle: "Mengelompokkan Data",
      category: "Mengolah dan Menyajikan Data",
      thumbnail: "02_mengolah_dan_menyajikan_data.png",
      duration: "Isi durasi",
      description:
        "Belajar mengelompokkan dan mengurutkan data agar mudah dianalisis.",
      youtubeId: "Hp-4AH9Kwhw",
    },
    {
      id: 6,
      topicId: 2,
      part: 3,
      title: "Menyajikan Data dalam Tabel",
      shortTitle: "Tabel Data",
      category: "Mengolah dan Menyajikan Data",
      thumbnail: "02_mengolah_dan_menyajikan_data.png",
      duration: "Isi durasi",
      description:
        "Menyajikan data ke dalam tabel sederhana dan tabel frekuensi.",
      youtubeId: "59AcZRfSqEE",
    },

    // =========================================
    // MATERI 3 — DIAGRAM STATISTIKA
    // =========================================
    {
      id: 7,
      topicId: 3,
      part: 1,
      title: "Mengenal Diagram Batang",
      shortTitle: "Diagram Batang",
      category: "Diagram Statistika",
      thumbnail: "03_diagram_statistika.png",
      duration: "Isi durasi",
      description: "Mengenal cara membaca dan membuat diagram batang.",
      youtubeId: "qyPGA4UxGoM",
    },
    {
      id: 8,
      topicId: 3,
      part: 2,
      title: "Mengenal Diagram Garis",
      shortTitle: "Diagram Garis",
      category: "Diagram Statistika",
      thumbnail: "03_diagram_statistika.png",
      duration: "Isi durasi",
      description: "Mempelajari penyajian data menggunakan diagram garis.",
      youtubeId: "qyPGA4UxGoM",
    },
    {
      id: 9,
      topicId: 3,
      part: 3,
      title: "Mengenal Diagram Lingkaran",
      shortTitle: "Diagram Lingkaran",
      category: "Diagram Statistika",
      thumbnail: "03_diagram_statistika.png",
      duration: "Isi durasi",
      description: "Membaca dan memahami informasi dalam diagram lingkaran.",
      youtubeId: "qyPGA4UxGoM",
    },

    // =========================================
    // MATERI 4 — MEAN
    // =========================================
    {
      id: 10,
      topicId: 4,
      part: 1,
      title: "Pengertian Mean atau Rata-rata",
      shortTitle: "Pengertian Mean",
      category: "Mean",
      thumbnail: "04_mean_rata_rata.png",
      duration: "Isi durasi",
      description: "Mengenal konsep mean sebagai ukuran pemusatan data.",
      youtubeId: "Y96gKn7cr5k",
    },
    {
      id: 11,
      topicId: 4,
      part: 2,
      title: "Cara Menghitung Mean",
      shortTitle: "Menghitung Mean",
      category: "Mean",
      thumbnail: "04_mean_rata_rata.png",
      duration: "Isi durasi",
      description: "Belajar menghitung rata-rata dari sekumpulan data.",
      youtubeId: "Y96gKn7cr5k",
    },
    {
      id: 12,
      topicId: 4,
      part: 3,
      title: "Penerapan Mean dalam Kehidupan",
      shortTitle: "Penerapan Mean",
      category: "Mean",
      thumbnail: "04_mean_rata_rata.png",
      duration: "Isi durasi",
      description:
        "Menyelesaikan masalah sehari-hari menggunakan konsep rata-rata.",
      youtubeId: "",
    },

    // =========================================
    // MATERI 5 — MEDIAN
    // =========================================
    {
      id: 13,
      topicId: 5,
      part: 1,
      title: "Pengertian Median",
      shortTitle: "Pengertian Median",
      category: "Median",
      thumbnail: "05_median_nilai_tengah.png",
      duration: "Isi durasi",
      description: "Mengenal median sebagai nilai tengah dari sekumpulan data.",
      youtubeId: "xwUErk8K4LE",
    },
    {
      id: 14,
      topicId: 5,
      part: 2,
      title: "Menentukan Median Data Ganjil",
      shortTitle: "Median Data Ganjil",
      category: "Median",
      thumbnail: "05_median_nilai_tengah.png",
      duration: "Isi durasi",
      description:
        "Menentukan nilai tengah pada kumpulan data dengan banyak data ganjil.",
      youtubeId: "xwUErk8K4LE",
    },
    {
      id: 15,
      topicId: 5,
      part: 3,
      title: "Menentukan Median Data Genap",
      shortTitle: "Median Data Genap",
      category: "Median",
      thumbnail: "05_median_nilai_tengah.png",
      duration: "Isi durasi",
      description:
        "Menentukan median pada kumpulan data dengan banyak data genap.",
      youtubeId: "xwUErk8K4LE",
    },

    // =========================================
    // MATERI 6 — MODUS DAN INTERPRETASI DATA
    // =========================================
    {
      id: 16,
      topicId: 6,
      part: 1,
      title: "Pengertian Modus",
      shortTitle: "Pengertian Modus",
      category: "Modus dan Interpretasi",
      thumbnail: "06_modus_dan_interpretasi.png",
      duration: "Isi durasi",
      description: "Mengenal modus sebagai nilai yang paling sering muncul.",
      youtubeId: "Y96gKn7cr5k",
    },
    {
      id: 17,
      topicId: 6,
      part: 2,
      title: "Cara Menentukan Modus",
      shortTitle: "Menentukan Modus",
      category: "Modus dan Interpretasi",
      thumbnail: "06_modus_dan_interpretasi.png",
      duration: "Isi durasi",
      description: "Berlatih menentukan modus dari berbagai kumpulan data.",
      youtubeId: "",
    },
    {
      id: 18,
      topicId: 6,
      part: 3,
      title: "Interpretasi Data dalam Kehidupan",
      shortTitle: "Interpretasi Data",
      category: "Modus dan Interpretasi",
      thumbnail: "06_modus_dan_interpretasi.png",
      duration: "Isi durasi",
      description: "Membaca, menafsirkan, dan menarik kesimpulan dari data.",
      youtubeId: "d6sQg0Ga7ng",
    },
  ];

  /*
   * Setiap tombol kategori menggunakan gambar utuh dari folder
   * assets/icons/video-buttons/.
   * Gambar tidak dibuat ulang atau dipotong melalui JavaScript.
   */
  const categories = [
    { id: "all", label: "Semua Video", image: "01_semua_video.png" },
    {
      id: "1",
      label: "Statistika dan Data",
      image: "02_statistika_dan_data.png",
    },
    { id: "2", label: "Mengolah Data", image: "03_mengolah_data.png" },
    {
      id: "3",
      label: "Diagram Statistika",
      image: "04_diagram_statistika.png",
    },
    { id: "4", label: "Mean", image: "05_mean_rata_rata.png" },
    { id: "5", label: "Median", image: "06_median_nilai_tengah.png" },
    { id: "6", label: "Modus", image: "07_modus_dan_interpretasi.png" },
  ];

  let activeCategory = "all";
  let searchTerm = "";
  let player = null;
  let playerVideoId = null;
  let apiPromise = null;

  /* ---------------------------------------------------------
     UTILITAS
  --------------------------------------------------------- */

  function escapeHTML(value) {
    return String(value).replace(
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
  }

  function loadCompleted() {
    try {
      const saved = JSON.parse(localStorage.getItem(VIDEO_STORAGE_KEY) || "[]");

      if (!Array.isArray(saved)) return [];

      return [
        ...new Set(
          saved
            .map(Number)
            .filter(
              (id) => Number.isInteger(id) && id >= 1 && id <= videos.length,
            ),
        ),
      ].sort((a, b) => a - b);
    } catch (error) {
      console.warn("DataLab Video: progres tidak dapat dibaca.", error);
      return [];
    }
  }

  function saveCompleted(list) {
    try {
      const cleanList = [
        ...new Set(
          list
            .map(Number)
            .filter(
              (id) => Number.isInteger(id) && id >= 1 && id <= videos.length,
            ),
        ),
      ].sort((a, b) => a - b);

      localStorage.setItem(VIDEO_STORAGE_KEY, JSON.stringify(cleanList));
    } catch (error) {
      console.warn("DataLab Video: progres tidak dapat disimpan.", error);
    }
  }

  function markVideoCompleted(id) {
    const completed = loadCompleted();

    if (!completed.includes(Number(id))) {
      completed.push(Number(id));
      saveCompleted(completed);
    }
  }

  function getVideoById(id) {
    return videos.find((video) => video.id === Number(id));
  }

  function getFilteredVideos() {
    return videos.filter((video) => {
      const categoryMatch =
        activeCategory === "all" || String(video.topicId) === activeCategory;

      const searchableText = [
        video.title,
        video.shortTitle,
        video.description,
        video.category,
      ]
        .join(" ")
        .toLowerCase();

      const searchMatch = searchableText.includes(searchTerm.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }

  function renderFeaturedVideo(container) {
    const featuredContainer = container.querySelector("#videoFeatured");
    if (!featuredContainer) return;

    const filteredVideos = getFilteredVideos();
    const featured = filteredVideos[0];

    if (!featured) {
      featuredContainer.innerHTML = `
      <div class="video-empty">
        Tidak ada video yang sesuai dengan pencarian.
      </div>
    `;
      return;
    }

    const completed = loadCompleted();
    const isCompleted = completed.includes(featured.id);

    featuredContainer.innerHTML = `
    <article class="video-feature-card">

      <button
        class="video-feature-thumb"
        type="button"
        data-watch-video="${featured.id}"
        aria-label="Tonton ${escapeHTML(featured.title)}"
      >
        <img
          src="${VIDEO_ASSET.thumbnails}${featured.thumbnail}"
          alt="Thumbnail ${escapeHTML(featured.title)}"
        >

        <span class="video-feature-play">▶</span>
        <span class="video-duration">${escapeHTML(featured.duration)}</span>
      </button>

      <div class="video-feature-copy">

        <span class="video-unit-label">
          Materi ${featured.topicId} · Video ${featured.part}
        </span>

        <h3>${escapeHTML(featured.title)}</h3>

        <p>${escapeHTML(featured.description)}</p>

        <button
          class="video-primary-button"
          type="button"
          data-watch-video="${featured.id}"
        >
          ▶ ${isCompleted ? "Tonton Kembali" : "Tonton Sekarang"}
        </button>

      </div>
    </article>
  `;
  }

  /* ---------------------------------------------------------
     YOUTUBE IFRAME API
  --------------------------------------------------------- */

  function loadYouTubeAPI() {
    if (window.YT && window.YT.Player) {
      return Promise.resolve();
    }

    if (apiPromise) return apiPromise;

    apiPromise = new Promise((resolve) => {
      const previousCallback = window.onYouTubeIframeAPIReady;

      window.onYouTubeIframeAPIReady = () => {
        if (typeof previousCallback === "function") {
          previousCallback();
        }
        resolve();
      };

      const existingScript = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]',
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.head.appendChild(script);
      }
    });

    return apiPromise;
  }

  /* ---------------------------------------------------------
     KARTU KOLEKSI VIDEO
  --------------------------------------------------------- */
  function renderCards(container) {
    const completed = loadCompleted();
    const filteredVideos = getFilteredVideos();

    const grid = container.querySelector("#videoCollection");
    if (!grid) return;

    if (filteredVideos.length === 0) {
      grid.innerHTML = `
      <div class="video-empty">
        Video tidak ditemukan. Coba kata kunci lain.
      </div>
    `;
      return;
    }

    grid.innerHTML = filteredVideos
      .map((video) => {
        const isCompleted = completed.includes(video.id);

        return `
        <article class="video-card">
          <button
            class="video-thumb-button"
            type="button"
            data-watch-video="${video.id}"
            aria-label="Tonton ${escapeHTML(video.title)}"
          >
            <img
              src="${VIDEO_ASSET.thumbnails}${video.thumbnail}"
              alt="Thumbnail ${escapeHTML(video.title)}"
              loading="lazy"
            >

            <span class="video-duration">
              ${escapeHTML(video.duration)}
            </span>

            ${
              isCompleted
                ? '<span class="video-done-badge" aria-label="Selesai ditonton">✓</span>'
                : ""
            }
          </button>

          <div class="video-card-body">
            <h3>${escapeHTML(video.title)}</h3>

            <span class="video-unit-label">
              Materi ${video.topicId} · Video ${video.part}
            </span>

            <button
              class="video-watch-link"
              type="button"
              data-watch-video="${video.id}"
            >
              ▶ ${isCompleted ? "Tonton kembali" : "Tonton video"}
            </button>
          </div>
        </article>
      `;
      })
      .join("");
  }

  /* ---------------------------------------------------------
     TOMBOL KATEGORI
  --------------------------------------------------------- */

  function updateCategoryButtons(container) {
    container.querySelectorAll(".video-category-button").forEach((button) => {
      const selected = button.dataset.category === activeCategory;

      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }

  /* ---------------------------------------------------------
     MODAL VIDEO
  --------------------------------------------------------- */

  function closePlayer(container) {
    const modal = container.querySelector("#videoModal");

    if (modal) {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
    }

    if (player && typeof player.stopVideo === "function") {
      player.stopVideo();
    }

    playerVideoId = null;
  }

  async function openVideo(container, id) {
    const video = getVideoById(id);
    if (!video) return;

    if (!video.youtubeId || !video.youtubeId.trim()) {
      alert(
        `ID YouTube untuk "${video.title}" belum diisi. ` +
          "Silakan isi youtubeId pada data video di file js/video.js.",
      );
      return;
    }

    const modal = container.querySelector("#videoModal");
    const title = container.querySelector("#videoModalTitle");

    if (!modal || !title) return;

    title.textContent = video.title;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    playerVideoId = video.id;

    try {
      await loadYouTubeAPI();

      // Jika modal ditutup ketika API sedang dimuat, jangan lanjutkan.
      if (!modal.classList.contains("is-open")) return;

      if (player && typeof player.loadVideoById === "function") {
        player.loadVideoById(video.youtubeId);
        return;
      }

      player = new window.YT.Player("youtubePlayer", {
        width: "100%",
        height: "100%",
        videoId: video.youtubeId,
        playerVars: {
          autoplay: 1,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onStateChange: (event) => {
            if (
              event.data === window.YT.PlayerState.ENDED &&
              playerVideoId !== null
            ) {
              markVideoCompleted(playerVideoId);
              renderFeaturedVideo(container);
              renderCards(container);

              const note = container.querySelector(".video-player-note");
              if (note) {
                note.textContent =
                  "Hebat! Video ini sudah selesai ditonton dan progresmu tersimpan. 🎉";
              }
            }
          },
        },
      });
    } catch (error) {
      console.error("DataLab Video: pemutar YouTube gagal dimuat.", error);

      const note = container.querySelector(".video-player-note");
      if (note) {
        note.textContent =
          "Pemutar YouTube belum dapat dimuat. Periksa koneksi internet dan ID video.";
      }
    }
  }

  /* ---------------------------------------------------------
     EVENT HALAMAN
  --------------------------------------------------------- */

  function bindPageEvents(container) {
    // Mencegah event listener menumpuk jika halaman dirender ulang.
    if (container._videoAbortController) {
      container._videoAbortController.abort();
    }

    const controller = new AbortController();
    container._videoAbortController = controller;
    const listenerOptions = { signal: controller.signal };

    container.addEventListener(
      "click",
      (event) => {
        const categoryButton = event.target.closest(".video-category-button");

        if (categoryButton && container.contains(categoryButton)) {
          activeCategory = categoryButton.dataset.category || "all";
          updateCategoryButtons(container);
          renderFeaturedVideo(container);
          renderCards(container);
          return;
        }

        const watchButton = event.target.closest("[data-watch-video]");

        if (watchButton && container.contains(watchButton)) {
          openVideo(container, watchButton.dataset.watchVideo);
          return;
        }

        if (event.target.closest("[data-close-video]")) {
          closePlayer(container);
        }
      },
      listenerOptions,
    );

    const searchInput = container.querySelector("#videoSearch");

    if (searchInput) {
      searchInput.addEventListener(
        "input",
        () => {
          searchTerm = searchInput.value.trim();
          renderFeaturedVideo(container);
          renderCards(container);
        },
        listenerOptions,
      );
    }

    container.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "Escape") {
          closePlayer(container);
        }
      },
      listenerOptions,
    );
  }

  /* ---------------------------------------------------------
     RENDER HALAMAN VIDEO
  --------------------------------------------------------- */

  function renderVideoPage(container) {
    if (!container) return;

    activeCategory = "all";
    searchTerm = "";

    container.innerHTML = `
      <div class="video-page">

        <!-- HERO VIDEO TUTORIAL -->
        <section class="video-hero" aria-label="Video Tutorial DataLab">
          <img
            class="video-hero-banner"
            src="assets/images/video/ui/banner_video_tutorial.png"
            alt="DataLab Learning Center — Video Tutorial. Belajar statistika jadi lebih mudah dan menyenangkan."
            fetchpriority="high"
          >

        </section>

        <!-- KATEGORI -->
        <section class="video-category-section">
          <h2 class="video-section-title">
            <img src="assets/icons/video/icon_buku.png" alt="">
            Pilih Materi Video
          </h2>

          <div class="video-category-list">
            ${categories
              .map(
                (category) => `
              <button
                class="video-category-button ${category.id === "all" ? "is-active" : ""}"
                type="button"
                data-category="${category.id}"
                aria-pressed="${category.id === "all"}"
                aria-label="${escapeHTML(category.label)}"
              >
                <img
                  src="${VIDEO_ASSET.buttons}${category.image}"
                  alt="${escapeHTML(category.label)}"
                  loading="lazy"
                >
              </button>
            `,
              )
              .join("")}
          </div>
        </section>

        <!-- VIDEO UNGGULAN -->
        <section class="video-feature-section">
          <h2 class="video-section-title">
            <img src="assets/icons/video/icon_play_pink.png" alt="">
            Video Unggulan
          </h2>

          <div id="videoFeatured"></div>
        </section>

        <!-- KOLEKSI VIDEO -->
        <section class="video-collection-section">
          <div class="video-collection-heading">
            <h2 class="video-section-title">
              <img src="assets/icons/video/icon_clapperboard.png" alt="">
              Koleksi Video Pembelajaran
            </h2>

            <label class="video-search">
              <span aria-hidden="true">⌕</span>
              <input
                id="videoSearch"
                type="search"
                placeholder="Cari video (misal: mean, diagram, dll)"
                autocomplete="off"
              >
            </label>
          </div>

          <div class="video-card-grid" id="videoCollection"></div>
        </section>

      </div>

      <!-- MODAL YOUTUBE -->
      <div class="video-modal" id="videoModal" aria-hidden="true">
        <div class="video-modal-backdrop" data-close-video></div>

        <section
          class="video-modal-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="videoModalTitle"
        >
          <div class="video-modal-heading">
            <h2 id="videoModalTitle">Video pembelajaran</h2>

            <button
              type="button"
              class="video-modal-close"
              data-close-video
              aria-label="Tutup video"
            >
              ×
            </button>
          </div>

          <div class="video-player-frame">
            <div id="youtubePlayer"></div>
          </div>

          <p class="video-player-note">
            Video akan ditandai selesai secara otomatis setelah pemutaran mencapai akhir.
          </p>
        </section>
      </div>
    `;

    renderFeaturedVideo(container);
    renderCards(container);
    updateCategoryButtons(container);
    bindPageEvents(container);
  }

  /* ---------------------------------------------------------
     API GLOBAL
  --------------------------------------------------------- */

  window.renderVideoPage = renderVideoPage;

  window.DataLabVideo = {
    videos,

    getCompleted: loadCompleted,

    // Data progres tetap tersedia untuk fitur lain, tetapi kartu progres
    // tidak ditampilkan pada halaman Video Tutorial.
    getProgress() {
      const completed = loadCompleted();

      return {
        completed,
        total: videos.length,
        count: completed.length,
        percent: Math.round((completed.length / videos.length) * 100),
      };
    },

    resetProgress() {
      try {
        localStorage.removeItem(VIDEO_STORAGE_KEY);
      } catch (error) {
        console.warn("DataLab Video: progres gagal direset.", error);
      }

      const container = document.getElementById("pageContainer");

      if (container && container.querySelector(".video-page")) {
        renderFeaturedVideo(container);
        renderCards(container);
        updateCategoryButtons(container);
        bindPageEvents(container);
      }
    },
  };
})();
