/* =========================================
   DATALAB - MAIN APPLICATION
   Beranda baru mengikuti desain referensi DataLab
   Navigasi dan penyimpanan progres tetap dipertahankan
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const ASSET = {
    logo: "assets/images/logo-datalab.png",
    hero: "assets/images/dati-hero.png",
    welcome: "assets/images/dati-welcome.png",
    thinking: "assets/images/dati-thinking.png",
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
      diagram: "assets/images/ic-diagram statistika.png",
      mean: "assets/images/ic-mean.png",
      median: "assets/images/ic-median.png",
      modus: "assets/images/ic-modus.png",
    },
  };

  const pageContainer = document.getElementById("pageContainer");
  const pageTitle = document.getElementById("pageTitle");
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");
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
    materi: "Materi Pembelajaran",
    video: "Video Tutorial",
    laboratorium: "Laboratorium Data",
    latihan: "Latihan Soal",
    quiz: "Quiz",
    games: "Mini Games",
    progres: "Progres Belajar",
  };

  const STORAGE_KEY = "datalab_progress";

  function loadProgress() {
    const defaults = {
      completedMaterials: [],
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

      return {
        ...defaults,
        ...saved,
        completedMaterials,
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

  function getProgress() {
    return Math.round(
      (progress.completedMaterials.length / materials.length) * 100,
    );
  }

  function image(src, alt, className = "") {
    return `<img src="${src}" alt="${alt}" class="${className}" loading="lazy"
      onerror="this.hidden=true; console.warn('Aset tidak ditemukan:', this.src)">`;
  }

  window.addEventListener("datalab:material-completed", (event) => {
    const materialNumber = Number(event.detail?.materialNumber);
    if (
      !Number.isInteger(materialNumber) ||
      materialNumber < 1 ||
      materialNumber > materials.length
    )
      return;
    if (progress.completedMaterials.includes(materialNumber)) return;
    progress.completedMaterials.push(materialNumber);
    saveProgress();
  });

  function renderHome() {
    const completed = progress.completedMaterials.length;
    const percentage = getProgress();
    const activitiesDone =
      progress.quizScores.length + progress.gameScores.length;

    const quickLinks = [
      {
        page: "materi",
        title: "Materi",
        description: "Pelajari 6 unit materi statistika.",
        icon: ASSET.icons.materi,
        color: "blue",
      },
      {
        page: "video",
        title: "Video Tutorial",
        description: "Tonton penjelasan materi melalui video.",
        icon: ASSET.icons.video,
        color: "mint",
      },
      {
        page: "laboratorium",
        title: "Laboratorium Data",
        description: "Eksplorasi dan olah data secara langsung.",
        icon: ASSET.icons.laboratorium,
        color: "pink",
      },
      {
        page: "games",
        title: "Mini Games",
        description: "Belajar sambil bermain interaktif.",
        icon: ASSET.icons.games,
        color: "peach",
      },
    ];

    const learningSteps = [
      {
        page: "materi",
        title: "Pelajari",
        subtitle: "Materi",
        icon: ASSET.icons.materi,
      },
      {
        page: "video",
        title: "Tonton",
        subtitle: "Video",
        icon: ASSET.icons.video,
      },
      {
        page: "laboratorium",
        title: "Eksplorasi",
        subtitle: "di Lab Data",
        icon: ASSET.icons.laboratorium,
      },
      {
        page: "latihan",
        title: "Latihan",
        subtitle: "Soal",
        icon: ASSET.icons.latihan,
      },
      {
        page: "quiz",
        title: "Ikuti",
        subtitle: "Quiz",
        icon: ASSET.icons.quiz,
      },
      {
        page: "progres",
        title: "Lihat",
        subtitle: "Progres",
        icon: ASSET.icons.progres,
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
        <section class="home-hero" aria-label="Selamat datang di DataLab">
          <div class="home-hero-copy">
            <span class="home-eyebrow">WELCOME TO DATALAB</span>
            <h1>DataLab</h1>
            <h2>Laboratorium Statistika</h2>
            <p>Media pembelajaran interaktif untuk memahami konsep statistika, mengolah data, dan menganalisis informasi dengan cara yang menyenangkan!</p>
            <div class="home-hero-actions">
              <button class="home-button home-button-primary" data-page="materi" type="button">
                <span class="home-button-symbol">▶</span> Mulai Belajar <span aria-hidden="true">→</span>
              </button>
              <button class="home-button home-button-outline" data-guide-toggle type="button">
                <span class="home-button-symbol">▤</span> Panduan Penggunaan
              </button>
            </div>
          </div>
          <div class="home-hero-art">
            ${image(ASSET.hero, "Dati, maskot DataLab", "home-hero-mascot")}
          </div>
          <div class="home-guide-panel" id="homeGuidePanel" hidden>
            <button class="home-guide-close" type="button" data-guide-close aria-label="Tutup panduan">×</button>
            <strong>Selamat datang di DataLab!</strong>
            <p>Mulailah dari menu Materi, pelajari penjelasan melalui Video Tutorial, lalu berlatih di Laboratorium Data, Latihan Soal, dan Quiz. Pantau perkembanganmu melalui Progres Belajar.</p>
          </div>
        </section>

        <section class="home-quick-section" aria-label="Akses cepat">
          <div class="home-section-heading home-quick-heading">
            <h2><span class="home-heading-mark">▦</span> Akses Cepat</h2>
            <button class="home-see-all" data-page="materi" type="button">Lihat Semua <span aria-hidden="true">→</span></button>
          </div>
          <div class="home-quick-grid">
            ${quickLinks
              .map(
                (item) => `
              <button class="home-quick-card home-quick-${item.color}" data-page="${item.page}" type="button">
                ${image(item.icon, `Ikon ${item.title}`, "home-quick-icon")}
                <span class="home-quick-copy">
                  <strong>${item.title}</strong>
                  <small>${item.description}</small>
                </span>
                <span class="home-quick-arrow" aria-hidden="true">→</span>
              </button>
            `,
              )
              .join("")}
          </div>
        </section>

        <section class="home-bottom-grid">
          <div class="home-panel home-learning-panel">
            <div class="home-section-heading">
              <h2><span class="home-heading-mark">▥</span> Alur Belajar di DataLab</h2>
            </div>
            <div class="home-learning-flow">
              ${learningSteps
                .map(
                  (step, index) => `
                <div class="home-step-wrap">
                  <button class="home-step" data-page="${step.page}" type="button">
                    <span class="home-step-icon">${image(step.icon, "", "")}</span>
                    <strong>${step.title}<br>${step.subtitle}</strong>
                  </button>
                  ${index < learningSteps.length - 1 ? '<span class="home-step-arrow" aria-hidden="true">→</span>' : ""}
                </div>
              `,
                )
                .join("")}
            </div>
          </div>

          <aside class="home-panel home-progress-panel">
            <div class="home-section-heading">
              <h2><span class="home-heading-mark home-trophy">🏆</span> Progres Belajarmu</h2>
            </div>
            <p class="home-progress-caption">Lihat perkembangan belajarmu di DataLab.</p>
            <div class="home-progress-content">
              <div class="home-progress-ring" style="--progress: ${percentage}%">
                <strong>${percentage}%</strong>
              </div>
              <div class="home-progress-details">
                <div class="home-progress-detail">
                  <span class="home-detail-icon">${image(ASSET.icons.materi, "Ikon materi", "")}</span>
                  <span>${completed} dari ${materials.length} materi selesai</span>
                </div>
                <div class="home-progress-detail">
                  <span class="home-detail-check">✓</span>
                  <span>${activitiesDone} aktivitas diselesaikan</span>
                </div>
                <button class="home-button home-button-primary home-progress-button" data-page="progres" type="button">
                  Lihat Detail Progres <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </aside>
        </section>

        <section class="home-material-preview">
          <div class="home-section-heading">
            <h2><span class="home-heading-mark">▤</span> Enam Materi Pembelajaran</h2>
            <button class="home-see-all" data-page="materi" type="button">Buka Materi <span aria-hidden="true">→</span></button>
          </div>
          <div class="home-topic-grid">
            ${materials
              .map((material, index) => {
                const number = index + 1;
                const done = progress.completedMaterials.includes(number);
                return `
                <button class="home-topic-card" data-page="materi" data-material="${number}" type="button">
                  ${image(topicIcons[index], `Ilustrasi ${material}`, "home-topic-icon")}
                  <span class="home-topic-text">
                    <small>UNIT ${String(number).padStart(2, "0")}</small>
                    <strong>${material}</strong>
                    <em>${done ? "✓ Materi selesai" : "Mulai belajar →"}</em>
                  </span>
                </button>
              `;
              })
              .join("")}
          </div>
        </section>
      </div>
    `;

    // Panduan singkat beranda.
    const guidePanel = pageContainer.querySelector("#homeGuidePanel");
    pageContainer
      .querySelector("[data-guide-toggle]")
      ?.addEventListener("click", () => {
        guidePanel.hidden = !guidePanel.hidden;
      });
    pageContainer
      .querySelector("[data-guide-close]")
      ?.addEventListener("click", () => {
        guidePanel.hidden = true;
      });
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
      quiz: "Uji pemahamanmu dan lihat hasil kuis setelah menyelesaikan pertanyaan.",
      games: "Asah kemampuan membaca data melalui permainan edukatif.",
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
          <p>Halaman ini sudah terhubung dengan navigasi DataLab. Konten pembelajaran pada bagian ini akan kita kembangkan berikutnya.</p>
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
    sidebar.classList.remove("open");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    history.replaceState(null, "", `#${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-page]");
    if (!pageButton) return;
    showPage(pageButton.dataset.page);
  });

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = sidebar.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

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

  console.log("DataLab berhasil dijalankan dengan desain beranda baru.");
});
