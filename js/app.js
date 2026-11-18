/* =========================================
   DATALAB - MAIN APPLICATION
   Beranda disesuaikan dengan desain referensi.
   Navigasi dan penyimpanan progres dipertahankan.
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const ASSET = {
    logo: "assets/images/logo-datalab.png",
    banner: "assets/images/banner-datalab-utama.png",
    hero: "assets/images/dati-hero.png",
    welcome: "assets/images/dati-welcome.png",
    thinking: "assets/images/dati-thinking.png",
    decoration: {
      grass: "assets/images/rumput-panjang.png",
    },
    icons: {
      home: "assets/icons/ic-beranda.png",
      materi: "assets/icons/ic-materi.png",
      video: "assets/icons/ic-video.png",
      laboratorium: "assets/icons/ic-laboratorium.png",
      latihan: "assets/icons/ic-latihan.png",
      quiz: "assets/icons/ic-quiz.png",
      games: "assets/icons/ic-games.png",
      progres: "assets/icons/ic-progres.png",
    },
    topicIcons: {
      materi: "assets/images/ic-mengenalstatistika.png",
      data: "assets/images/ic-mengolahdata.png",
      diagram: "assets/images/ic-diagram%20statistika.png",
      mean: "assets/images/ic-mean.png",
      median: "assets/images/ic-median.png",
      modus: "assets/images/ic-modus.png",
    },
    featureIcons: {
      visualisasi: "assets/images/ic-statistika.png",
      games: "assets/icons/ic-games.png",
      video: "assets/icons/ic-video.png",
    },
  };

  const pageContainer = document.getElementById("pageContainer");
  const pageTitle = document.getElementById("pageTitle");
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");
  const sidebarBackdrop = document.getElementById("sidebarBackdrop");
  const themeToggle = document.getElementById("themeToggle");

  if (!pageContainer || !pageTitle || !sidebar || !themeToggle) {
    console.error(
      "DataLab: Elemen utama tidak ditemukan. Periksa ID pageContainer, pageTitle, sidebar, dan themeToggle.",
    );
    return;
  }

  const materials = [
    "Mengenal Statistika dan Data",
    "Mengolah dan Menyajikan Data",
    "Diagram Statistika",
    "Mean (Rata-rata)",
    "Median (Nilai Tengah)",
    "Modus dan Interpretasi Data",
  ];

  const pageNames = {
    home: "Beranda",
    materi: "Materi",
    video: "Video Tutorial",
    laboratorium: "Laboratorium Data",
    latihan: "Latihan Soal",
    games: "Tantangan Seru",
    progres: "Progres Belajar",
  };

  const STORAGE_KEY = "datalab_progress";

  function loadProgress() {
    const defaults = {
      completedMaterials: [],
      completedSections: [],
      activities: [],
      lastVisitedPage: "home",
      theme: "light",
      quizScores: [],
      gameScores: [],
    };

    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      const completedMaterials = Array.isArray(saved.completedMaterials)
        ? [...new Set(saved.completedMaterials)]
            .map(Number)
            .filter(
              (number) =>
                Number.isInteger(number) &&
                number >= 1 &&
                number <= materials.length,
            )
        : [];

      const savedSections = Array.isArray(saved.completedSections)
        ? [...new Set(saved.completedSections.map(String))]
        : completedMaterials.flatMap((number) =>
            ["tujuan", "uraian", "contoh", "ayo-coba", "rangkuman"].map(
              (sectionId) => `${number}:${sectionId}`,
            )
          );

      return {
        ...defaults,
        ...saved,
        completedMaterials,
        completedSections: savedSections,
        activities: Array.isArray(saved.activities) ? saved.activities.slice(0, 30) : [],
        quizScores: Array.isArray(saved.quizScores) ? saved.quizScores : [],
        gameScores: Array.isArray(saved.gameScores) ? saved.gameScores : [],
      };
    } catch (error) {
      console.error("DataLab: Gagal membaca progres tersimpan.", error);
      return defaults;
    }
  }

  let progress = loadProgress();

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error("DataLab: Gagal menyimpan progres.", error);
    }
  }

  const SECTIONS_PER_MATERIAL = 5;
  const TOTAL_SECTIONS = materials.length * SECTIONS_PER_MATERIAL;

  function getProgress() {
    return Math.round(
      (progress.completedSections.length / TOTAL_SECTIONS) * 100,
    );
  }

  function image(src, alt, className = "") {
    return `<img src="${src}" alt="${alt}" class="${className}" loading="lazy"
      onerror="this.hidden=true; console.warn('Aset tidak ditemukan:', this.src)">`;
  }

  const SECTION_IDS = ["tujuan", "uraian", "contoh", "ayo-coba", "rangkuman"];
  const SECTION_LABELS = {
    tujuan: "Tujuan Pembelajaran",
    uraian: "Uraian Materi",
    contoh: "Contoh Interaktif",
    "ayo-coba": "Ayo Coba",
    rangkuman: "Rangkuman",
  };

  function addActivity(message, type = "materi") {
    progress.activities = Array.isArray(progress.activities) ? progress.activities : [];
    progress.activities.unshift({
      message,
      type,
      date: new Date().toISOString(),
    });
    progress.activities = progress.activities.slice(0, 30);
  }

  function syncCompletedMaterials() {
    progress.completedMaterials = materials
      .map((_, index) => index + 1)
      .filter((number) =>
        SECTION_IDS.every((sectionId) =>
          progress.completedSections.includes(`${number}:${sectionId}`)
        )
      );
  }

  window.addEventListener("datalab:section-completed", (event) => {
    const materialNumber = Number(event.detail?.materialNumber);
    const sectionId = String(event.detail?.sectionId || "");
    if (
      !Number.isInteger(materialNumber) ||
      materialNumber < 1 ||
      materialNumber > materials.length ||
      !SECTION_IDS.includes(sectionId)
    ) return;

    const key = `${materialNumber}:${sectionId}`;
    if (progress.completedSections.includes(key)) return;

    progress.completedSections.push(key);
    addActivity(`Menyelesaikan ${SECTION_LABELS[sectionId]} — Unit ${String(materialNumber).padStart(2, "0")}`);
    syncCompletedMaterials();
    saveProgress();

    if (location.hash === "#progres") {
      const activePage = document.getElementById("pageTitle")?.textContent;
      if (activePage === "Progres Belajar" && typeof window.renderProgressPage === "function") {
        window.renderProgressPage(pageContainer);
      }
    }
  });

  // Kompatibilitas: event lama yang menandai satu materi selesai akan
  // mengisi kelima bagian pada unit tersebut.
  window.addEventListener("datalab:material-completed", (event) => {
    const materialNumber = Number(event.detail?.materialNumber);
    if (!Number.isInteger(materialNumber) || materialNumber < 1 || materialNumber > materials.length) return;

    SECTION_IDS.forEach((sectionId) => {
      const key = `${materialNumber}:${sectionId}`;
      if (!progress.completedSections.includes(key)) {
        progress.completedSections.push(key);
        addActivity(`Menyelesaikan ${SECTION_LABELS[sectionId]} — Unit ${String(materialNumber).padStart(2, "0")}`);
      }
    });
    syncCompletedMaterials();
    saveProgress();
  });

  window.addEventListener("datalab:progress-updated", () => {
    progress = loadProgress();
    if (location.hash === "#home") renderHome();
  });

  window.DataLabProgress = {
    completeSection(materialNumber, sectionId) {
      window.dispatchEvent(new CustomEvent("datalab:section-completed", {
        detail: { materialNumber, sectionId }
      }));
    },
    getData() {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    }
  };

  function renderHome() {
    const completed = progress.completedMaterials.length;
    const percentage = getProgress();

    const quickLinks = [
      {
        page: "materi",
        title: "Materi",
        icon: ASSET.icons.materi,
        color: "blue",
      },
      {
        page: "video",
        title: "Video Tutorial",
        icon: ASSET.icons.video,
        color: "pink",
      },
      {
        page: "laboratorium",
        title: "Laboratorium Data",
        icon: ASSET.icons.laboratorium,
        color: "mint",
      },
      {
        page: "latihan",
        title: "Latihan Soal",
        icon: ASSET.icons.latihan,
        color: "peach",
      },
      {
        page: "games",
        title: "Tantangan Seru",
        icon: ASSET.icons.games,
        color: "lavender",
      },
      {
        page: "progres",
        title: "Progres Belajar",
        icon: ASSET.icons.progres,
        color: "rose",
      },
    ];

    const features = [
      {
        page: "laboratorium",
        title: "Visualisasi Interaktif",
        description: "Eksplorasi data secara langsung.",
        icon: ASSET.featureIcons.visualisasi,
      },
      {
        page: "games",
        title: "Mini Games Statistika",
        description: "Latih pemahaman dengan cara seru.",
        icon: ASSET.featureIcons.games,
      },
      {
        page: "video",
        title: "Video Pembelajaran",
        description: "Penjelasan materi yang jelas dan menarik.",
        icon: ASSET.featureIcons.video,
      },
    ];

    const topicIcons = [
      ASSET.topicIcons.materi,
      ASSET.topicIcons.data,
      ASSET.topicIcons.diagram,
      ASSET.topicIcons.mean,
      ASSET.topicIcons.median,
      ASSET.topicIcons.modus,
    ];

    pageContainer.innerHTML = `
      <div class="home-dashboard">
        <div class="home-top-grid">
          <div class="home-banner-column">
            <section class="home-hero" aria-label="Banner selamat datang DataLab">
              ${image(ASSET.banner, "Banner DataLab: Laboratorium Statistika", "home-banner-image")}
              <div class="home-banner-actions">
                <button class="home-button home-button-primary" data-page="materi" type="button">
                  <span class="home-button-symbol" aria-hidden="true">▶</span>
                  Mulai Belajar
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </section>
          </div>

          <aside class="home-side-stack">
            <section class="home-side-card home-progress-card">
              <h2 class="home-side-title">${image(ASSET.icons.progres, "Ikon progres")} Progres Belajarmu</h2>
              <div class="home-progress-content">
                <div class="home-progress-ring" style="--progress: ${percentage}%">
                  <strong>${percentage}%</strong>
                </div>
                <div class="home-progress-details">
                  <div class="home-progress-detail">
                    <span>${completed} dari ${materials.length} materi sudah kamu selesaikan.</span>
                  </div>
                  <button class="home-button home-button-primary home-progress-button" data-page="progres" type="button">
                    Lihat Detail <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </section>

            <section class="home-side-card home-motivation">
              <div class="home-motivation-copy">
                <h2 class="home-side-title">Motivasi Hari Ini ✨</h2>
                <p class="home-motivation-quote">“Langkah kecil hari ini, akan membawamu pada pemahaman yang lebih besar tentang data.”</p>
              </div>
              ${image(ASSET.thinking, "Dati memberi semangat", "home-motivation-art")}
            </section>
          </aside>
        </div>

        <section class="home-quick-section" aria-label="Akses cepat">
          <div class="home-section-heading">
            <h2><span class="home-heading-mark">⚡</span> Akses Cepat <span class="home-heading-sparkle" aria-hidden="true">✨</span></h2>
          </div>
          <div class="home-quick-grid">
            ${quickLinks
              .map(
                (item) => `
              <button class="home-quick-card home-quick-${item.color}" data-page="${item.page}" type="button">
                ${image(item.icon, `Ikon ${item.title}`, "home-quick-icon")}
                <span class="home-quick-copy"><strong>${item.title}</strong></span>
              </button>
            `,
              )
              .join("")}
          </div>
        </section>

        <div class="home-lower-grid">
          <section class="home-panel home-feature-panel">
            <div class="home-section-heading">
              <h2><span class="home-heading-mark">🏅</span> Fitur Unggulan DataLab <span class="home-heading-sparkle" aria-hidden="true">✨</span></h2>
            </div>
            <div class="home-feature-grid">
              ${features
                .map(
                  (item) => `
                <button class="home-feature-card" data-page="${item.page}" type="button">
                  ${image(item.icon, item.title)}
                  <strong>${item.title}</strong>
                  <small>${item.description}</small>
                </button>
              `,
                )
                .join("")}
            </div>
          </section>

          <section class="home-material-preview">
            <div class="home-section-heading">
              <h2><span class="home-heading-mark">📖</span> Peta Materi</h2>
              <button class="home-see-all" data-page="materi" type="button">Buka Semua <span aria-hidden="true">→</span></button>
            </div>
            <div class="home-topic-grid">
              ${materials
                .map((material, index) => {
                  const number = index + 1;
                  const done = progress.completedMaterials.includes(number);
                  return `
                  <button class="home-topic-card" data-page="materi" data-material="${number}" type="button">
                    <span class="home-topic-number">${number}</span>
                    ${image(topicIcons[index], `Ilustrasi ${material}`, "home-topic-icon")}
                    <span class="home-topic-text">
                      <strong>${material}</strong>
                      <em>${done ? "✓ Selesai" : "Mulai belajar"}</em>
                    </span>
                  </button>
                `;
                })
                .join("")}
            </div>
          </section>
        </div>

        <div class="home-bottom-decoration" aria-hidden="true">
          ${image(ASSET.decoration.grass, "", "home-grass-image")}
          </div>
      </div>
    `;
  }

  function renderOtherPage(page) {
    if (page === "materi" && typeof window.renderMateriPage === "function") {
      window.renderMateriPage(pageContainer);
      return;
    }
    if (page === "video" && typeof window.renderVideoPage === "function") {
      window.renderVideoPage(pageContainer);
      return;
    }
    if (
      page === "laboratorium" &&
      typeof window.renderLaboratoriumPage === "function"
    ) {
      window.renderLaboratoriumPage(pageContainer);
      return;
    }
    if (page === "latihan" && typeof window.renderLatihanPage === "function") {
      window.renderLatihanPage(pageContainer);
      return;
    }
    if (page === "games" && typeof window.renderGamesPage === "function") {
      window.renderGamesPage(pageContainer);
      return;
    }
    if (page === "progres" && typeof window.renderProgressPage === "function") {
      window.renderProgressPage(pageContainer);
      return;
    }

    const iconPath = ASSET.icons[page] || ASSET.logo;
    const pageDescriptions = {
      materi:
        "Pelajari konsep statistika melalui enam unit materi yang disusun bertahap.",
      video:
        "Tonton video pembelajaran pilihan untuk membantu memahami konsep statistika.",
      laboratorium:
        "Masukkan data dan amati bagaimana tabel serta diagram berubah secara interaktif.",
      latihan:
        "Latih pemahamanmu melalui soal-soal statistika beserta pembahasannya.",
      games:
        "Masuki dunia permainan Dati, selesaikan misi statistika, dan kumpulkan bintang sambil belajar!",
      progres:
        "Pantau materi yang telah kamu selesaikan dan perjalanan belajarmu.",
    };

    pageContainer.innerHTML = `
      <section class="page-welcome">
        <span class="badge">DATALAB LEARNING CENTER</span>
        <h1>${pageNames[page]}</h1>
        <p>${pageDescriptions[page] || `Selamat datang di halaman ${pageNames[page]}.`}</p>
      </section>
      <section class="card page-intro-card">
        ${image(ASSET.thinking, "Dati sedang berpikir", "page-mascot")}
        <div>
          <h2>Hai, Sobat Data!</h2>
          <p>${page === "games" ? "Bersiaplah menjelajahi tantangan statistika bersama Dati. Berbagai permainan seru akan hadir di sini!" : "Halaman ini sudah terhubung dengan navigasi DataLab. Konten pembelajaran pada bagian ini akan kita kembangkan berikutnya."}</p>
          <button class="btn btn-primary" data-page="home" type="button">← Kembali ke Beranda</button>
        </div>
        ${image(iconPath, `Ikon ${pageNames[page]}`, "page-feature-icon")}
      </section>
    `;
  }

  function updateActiveNavigation(page) {
    document.querySelectorAll(".nav-item[data-page]").forEach((item) => {
      const isActive = item.dataset.page === page;
      item.classList.toggle("active", isActive);
      if (isActive) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });
  }

  function showPage(page) {
    if (!pageNames[page]) {
      console.warn("DataLab: Halaman tidak ditemukan:", page);
      page = "home";
    }

    pageTitle.textContent = pageNames[page];
    if (page === "home") renderHome();
    else renderOtherPage(page);

    updateActiveNavigation(page);
    progress.lastVisitedPage = page;
    saveProgress();
    closeSidebar();
    history.replaceState(null, "", `#${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-page]");
    if (!pageButton) return;
    showPage(pageButton.dataset.page);
  });

  function openSidebar() {
    sidebar.classList.add("open");
    if (sidebarBackdrop) sidebarBackdrop.hidden = false;
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "true");
      menuToggle.setAttribute("aria-label", "Tutup menu navigasi");
    }
    document.body.classList.add("sidebar-is-open");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    if (sidebarBackdrop) sidebarBackdrop.hidden = true;
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu navigasi");
    }
    document.body.classList.remove("sidebar-is-open");
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      if (sidebar.classList.contains("open")) closeSidebar();
      else openSidebar();
    });
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener("click", closeSidebar);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && sidebar.classList.contains("open")) {
      closeSidebar();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1050) closeSidebar();
  });

  function applyTheme(theme) {
    const isDark = theme === "dark";
    document.body.classList.toggle("theme-dark", isDark);
    themeToggle.textContent = isDark ? "🌙" : "☀️";
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap",
    );
    themeToggle.setAttribute(
      "title",
      isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap",
    );
    progress.theme = isDark ? "dark" : "light";
    saveProgress();
  }

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("theme-dark")
      ? "dark"
      : "light";
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });

  applyTheme(progress.theme);
  const hashPage = location.hash.replace("#", "");
  const initialPage = pageNames[hashPage] ? hashPage : "home";
  showPage(initialPage);

  console.log("DataLab berhasil dijalankan dengan desain beranda referensi.");
});
