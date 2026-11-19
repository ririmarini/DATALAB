/* =========================================================
   DATALAB — MODUL PROFIL SISWA
   File terpisah dari app.js agar mudah diedit.
   Penyimpanan: localStorage (peramban/perangkat yang sama).
========================================================= */
(() => {
  "use strict";

  const STORAGE_KEY = "datalab_student_profile";
  const AVATARS = {
    siswa: "assets/images/avatar-siswa.png",
    siswi: "assets/images/avatar-siswi.png"
  };

  const $ = (selector, root = document) => root.querySelector(selector);

  function readProfile() {
    const fallback = {
      fullName: "",
      nickname: "Sobat Data",
      classLevel: "VIII",
      school: "",
      avatar: "siswi"
    };
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return { ...fallback, ...saved };
    } catch (error) {
      console.warn("DataLab: profil tidak dapat dibaca.", error);
      return fallback;
    }
  }

  let profile = readProfile();

  function saveProfile() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  }

  function updateTopbar() {
    const name = $("#topbarStudentName");
    const className = $("#topbarStudentClass");
    const avatar = $("#topbarStudentAvatar");
    if (name) name.textContent = profile.nickname || "Sobat Data";
    if (className) className.textContent = `SMP Kelas ${profile.classLevel}`;
    if (avatar) {
      avatar.src = AVATARS[profile.avatar] || AVATARS.siswi;
      avatar.alt = `Avatar ${profile.nickname || "Sobat Data"}`;
    }
  }

  function modalMarkup() {
    return `
      <div class="profile-modal-backdrop" id="studentProfileModal" hidden>
        <section class="profile-modal" role="dialog" aria-modal="true"
          aria-labelledby="profileModalTitle">
          <button class="profile-close" type="button" data-profile-close
            aria-label="Tutup profil">×</button>

          <div class="profile-modal-heading">
            <span class="profile-kicker">DATALAB • RUANG SISWA</span>
            <h2 id="profileModalTitle">Profil Sobat Data</h2>
            <p>Yuk, lengkapi identitas belajarmu!</p>
          </div>

          <div class="profile-avatar-area">
            <img id="profilePreviewAvatar" src="${AVATARS[profile.avatar]}"
              alt="Pratinjau avatar siswa" />
            <div>
              <strong>Pilih avatar kamu</strong>
              <p> pilih karakter yang paling kamu suka.</p>
              <div class="profile-avatar-options" role="group" aria-label="Pilihan avatar">
                <button type="button" class="profile-avatar-choice" data-avatar="siswa"
                  aria-pressed="${profile.avatar === "siswa"}">
                  <img src="${AVATARS.siswa}" alt="" />
                  <span>Siswa</span>
                </button>
                <button type="button" class="profile-avatar-choice" data-avatar="siswi"
                  aria-pressed="${profile.avatar === "siswi"}">
                  <img src="${AVATARS.siswi}" alt="" />
                  <span>Siswi</span>
                </button>
              </div>
            </div>
          </div>

          <form id="studentProfileForm" class="profile-form">
            <div class="profile-form-grid">
              <label class="profile-field profile-field-full">
                <span>Nama lengkap</span>
                <input name="fullName" type="text" maxlength="70"
                  placeholder="Contoh: Alya Putri" value="${escapeAttribute(profile.fullName)}" />
              </label>
              <label class="profile-field">
                <span>Nama panggilan <i>*</i></span>
                <input name="nickname" type="text" maxlength="24" required
                  placeholder="Contoh: Alya" value="${escapeAttribute(profile.nickname === "Sobat Data" ? "" : profile.nickname)}" />
              </label>
              <label class="profile-field">
                <span>Kelas <i>*</i></span>
                <select name="classLevel" required>
                  ${["VII","VIII","IX"].map(level => `<option value="${level}" ${profile.classLevel === level ? "selected" : ""}>Kelas ${level}</option>`).join("")}
                </select>
              </label>
              <label class="profile-field profile-field-full">
                <span>Asal sekolah <small>(opsional)</small></span>
                <input name="school" type="text" maxlength="80"
                  placeholder="Nama sekolahmu" value="${escapeAttribute(profile.school)}" />
              </label>
            </div>
            <p class="profile-privacy-note">🔒 Data profil disimpan di browser pada perangkat ini.</p>
            <div class="profile-form-actions">
              <button class="profile-cancel-button" type="button" data-profile-close>Nanti saja</button>
              <button class="profile-save-button" type="submit">Simpan Profil <span>✓</span></button>
            </div>
            <p class="profile-feedback" id="profileFeedback" aria-live="polite"></p>
          </form>
        </section>
      </div>`;
  }

  function escapeAttribute(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
  }

  function openModal() {
    const modal = $("#studentProfileModal");
    if (!modal) return;
    modal.hidden = false;
    document.body.classList.add("profile-modal-open");
    const nickname = $('input[name="nickname"]', modal);
    window.setTimeout(() => nickname?.focus(), 30);
  }

  function closeModal() {
    const modal = $("#studentProfileModal");
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("profile-modal-open");
    $("#studentProfileButton")?.focus();
  }

  function chooseAvatar(choice) {
    if (!AVATARS[choice]) return;
    profile.avatar = choice;
    const preview = $("#profilePreviewAvatar");
    if (preview) preview.src = AVATARS[choice];
    document.querySelectorAll(".profile-avatar-choice").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.avatar === choice));
    });
  }

  function init() {
    const trigger = $("#studentProfileButton");
    if (!trigger) {
      console.warn("DataLab: tombol profil tidak ditemukan.");
      return;
    }

    if (!$("#studentProfileModal")) {
      document.body.insertAdjacentHTML("beforeend", modalMarkup());
    }

    updateTopbar();
    trigger.addEventListener("click", openModal);

    document.addEventListener("click", event => {
      const closeButton = event.target.closest("[data-profile-close]");
      if (closeButton) closeModal();

      const avatarButton = event.target.closest("[data-avatar]");
      if (avatarButton) chooseAvatar(avatarButton.dataset.avatar);

      if (event.target.id === "studentProfileModal") closeModal();
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !$("#studentProfileModal")?.hidden) closeModal();
    });

    $("#studentProfileForm")?.addEventListener("submit", event => {
      event.preventDefault();
      const form = event.currentTarget;
      const data = new FormData(form);
      const nickname = String(data.get("nickname") || "").trim();
      const feedback = $("#profileFeedback");

      if (!nickname) {
        feedback.textContent = "Nama panggilan perlu diisi terlebih dahulu.";
        feedback.classList.add("is-error");
        form.elements.nickname.focus();
        return;
      }

      profile = {
        fullName: String(data.get("fullName") || "").trim(),
        nickname,
        classLevel: String(data.get("classLevel") || "VIII"),
        school: String(data.get("school") || "").trim(),
        avatar: profile.avatar
      };

      try {
        saveProfile();
        updateTopbar();
        feedback.classList.remove("is-error");
        feedback.textContent = "Profil berhasil disimpan. Semangat belajar, " + nickname + "!";
        window.setTimeout(closeModal, 900);
      } catch (error) {
        feedback.classList.add("is-error");
        feedback.textContent = "Profil belum bisa disimpan. Periksa ruang penyimpanan browser.";
        console.error("DataLab: gagal menyimpan profil.", error);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  window.DataLabStudentProfile = {
    getData: () => ({ ...profile }),
    open: openModal
  };
})();