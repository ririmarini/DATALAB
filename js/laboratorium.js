/* =========================================================
   DATALAB | LABORATORIUM DATA
   Semua interaksi halaman Laboratorium Data berada di file ini.
   Aset gambar menggunakan folder assets milik proyek DataLab.
========================================================= */
(() => {
  "use strict";

  const ICON = "assets/icons/laboratorium/";
  const BANNER = "assets/images/lab-banner.png";

  const sampleRows = [
    { id: 1, category: "Buku", value: 12 },
    { id: 2, category: "Pulpen", value: 18 },
    { id: 3, category: "Pensil", value: 9 },
  ];

  let rows = sampleRows.map((item) => ({ ...item }));
  let nextId = 4;
  let chartType = "bar";
  let editingId = null;
  let challengeStarted = false;

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

  const fmt = (value) => {
    if (!Number.isFinite(Number(value))) return "—";
    return Number.isInteger(Number(value))
      ? String(Number(value))
      : Number(value).toLocaleString("id-ID", { maximumFractionDigits: 2 });
  };

  function getStats() {
    const values = rows.map((r) => Number(r.value)).filter(Number.isFinite);
    if (!values.length)
      return {
        count: 0,
        mean: null,
        median: null,
        mode: "-",
        range: null,
        min: null,
        max: null,
      };

    const sorted = [...values].sort((a, b) => a - b);
    const sum = values.reduce((a, b) => a + b, 0);
    const mid = Math.floor(sorted.length / 2);
    const median =
      sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

    const frequency = new Map();
    values.forEach((value) =>
      frequency.set(value, (frequency.get(value) || 0) + 1),
    );
    const maxFrequency = Math.max(...frequency.values());
    const modes = [...frequency.entries()]
      .filter(([, count]) => count === maxFrequency && maxFrequency > 1)
      .map(([value]) => value);

    return {
      count: values.length,
      mean: sum / values.length,
      median,
      mode: modes.length ? modes.map(fmt).join(", ") : "-",
      range: sorted[sorted.length - 1] - sorted[0],
      min: sorted[0],
      max: sorted[sorted.length - 1],
    };
  }

  function renderTable(root) {
    const body = root.querySelector("#labTableBody");
    if (!body) return;

    if (!rows.length) {
      body.innerHTML = `<tr><td colspan="4" class="lab-empty">Belum ada data. Tekan “Tambah Baris” untuk mulai.</td></tr>`;
      return;
    }

    body.innerHTML = rows
      .map((row, index) => {
        const editing = editingId === row.id;
        return `
        <tr data-id="${row.id}">
          <td class="lab-number">${index + 1}</td>
          <td>
            <input class="lab-cell-input" data-field="category"
              aria-label="Kategori baris ${index + 1}" maxlength="70"
              value="${escapeHTML(row.category)}" ${editing ? "" : "readonly"}>
          </td>
          <td>
            <input class="lab-cell-input lab-value-input" data-field="value"
              aria-label="Nilai baris ${index + 1}" type="number" step="any"
              value="${escapeHTML(row.value)}" ${editing ? "" : "readonly"}>
          </td>
          <td class="lab-row-actions">
            <button class="lab-row-btn edit" type="button" data-edit="${row.id}"
              aria-label="${editing ? "Simpan" : "Edit"} baris">${editing ? "✓" : "✎"}</button>
            <button class="lab-row-btn delete" type="button" data-delete="${row.id}"
              aria-label="Hapus baris">▤</button>
          </td>
        </tr>`;
      })
      .join("");
  }

  function renderStats(root) {
    const s = getStats();
    const values = {
      "#labStatCount": s.count,
      "#labStatMean": fmt(s.mean),
      "#labStatMedian": fmt(s.median),
      "#labStatMode": s.mode,
      "#labStatRange": fmt(s.range),
    };
    Object.entries(values).forEach(([selector, value]) => {
      const el = root.querySelector(selector);
      if (el) el.textContent = value;
    });
  }

  function svgLabel(text, x, y, anchor = "middle") {
    return `<text x="${x}" y="${y}" text-anchor="${anchor}" class="lab-svg-label">${escapeHTML(text)}</text>`;
  }

  function renderCartesian(rowsToDraw, type) {
    const width = 640,
      height = 310;
    const left = 52,
      right = 15,
      top = 22,
      bottom = 55;
    const plotW = width - left - right,
      plotH = height - top - bottom;
    const maxValue =
      Math.max(1, ...rowsToDraw.map((r) => Math.max(0, Number(r.value)))) *
      1.15;
    const y = (v) => top + plotH - (Math.max(0, v) / maxValue) * plotH;
    const slot = plotW / Math.max(rowsToDraw.length, 1);
    let out = "";

    for (let i = 0; i <= 4; i++) {
      const value = (maxValue * i) / 4;
      const yy = y(value);
      out += `<line x1="${left}" y1="${yy}" x2="${width - right}" y2="${yy}" class="lab-gridline"/>`;
      out += svgLabel(fmt(value), left - 9, yy + 4, "end");
    }

    if (type === "bar") {
      rowsToDraw.forEach((r, i) => {
        const barW = Math.min(72, slot * 0.62);
        const x = left + i * slot + (slot - barW) / 2;
        const yy = y(Number(r.value));
        const h = top + plotH - yy;
        out += `<rect x="${x}" y="${yy}" width="${barW}" height="${h}" rx="7" class="lab-bar lab-bar-${i % 3}"/>`;
        out += svgLabel(fmt(Number(r.value)), x + barW / 2, yy - 8);
        const label =
          r.category.length > 12 ? r.category.slice(0, 11) + "…" : r.category;
        out += svgLabel(label, x + barW / 2, height - 25);
      });
    } else {
      const points = rowsToDraw.map((r, i) => ({
        x: left + i * slot + slot / 2,
        y: y(Number(r.value)),
        value: Number(r.value),
        category: r.category,
      }));
      if (points.length > 1) {
        out += `<polyline points="${points.map((p) => `${p.x},${p.y}`).join(" ")}" class="lab-line"/>`;
      }
      points.forEach((p) => {
        out += `<circle cx="${p.x}" cy="${p.y}" r="6" class="lab-dot"/>`;
        out += svgLabel(fmt(p.value), p.x, p.y - 12);
        out += svgLabel(
          p.category.length > 12 ? p.category.slice(0, 11) + "…" : p.category,
          p.x,
          height - 25,
        );
      });
    }
    return `<svg class="lab-chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Diagram ${type === "bar" ? "batang" : "garis"}">${out}</svg>`;
  }

  function renderPie(rowsToDraw) {
    const positiveRows = rowsToDraw.filter((r) => Number(r.value) > 0);
    const total = positiveRows.reduce((sum, r) => sum + Number(r.value), 0);
    if (!total)
      return `<p class="lab-chart-empty">Diagram lingkaran memerlukan nilai positif.</p>`;

    const colors = [
      "#9274e8",
      "#54c9ac",
      "#f47fb4",
      "#ffbd68",
      "#62a9ef",
      "#b69af4",
      "#62c5d0",
      "#f28d78",
    ];
    // SVG memungkinkan diagram lingkaran ditampilkan sekaligus diunduh.
    const cx = 100;
    const cy = 100;
    const radius = 88;
    let startAngle = -Math.PI / 2;
    const slices = positiveRows.map((r, i) => {
      const portion = Number(r.value) / total;
      const endAngle = startAngle + portion * Math.PI * 2;
      const color = colors[i % colors.length];
      let slice;
      if (portion >= 1 - 1e-10) {
        slice = `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${color}"/>`;
      } else {
        const x1 = cx + radius * Math.cos(startAngle);
        const y1 = cy + radius * Math.sin(startAngle);
        const x2 = cx + radius * Math.cos(endAngle);
        const y2 = cy + radius * Math.sin(endAngle);
        const largeArc = portion > 0.5 ? 1 : 0;
        slice = `<path d="M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z" fill="${color}"/>`;
      }
      startAngle = endAngle;
      return slice;
    }).join("");

    return `
      <div class="lab-pie-layout">
        <svg class="lab-pie-svg" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200" width="165" height="165"
          role="img" aria-label="Diagram lingkaran">
          ${slices}
        </svg>
        <div class="lab-legend">
          ${positiveRows
            .map(
              (r, i) => `
            <div class="lab-legend-item">
              <i style="background:${colors[i % colors.length]}"></i>
              <span>${escapeHTML(r.category)}</span>
              <b>${fmt((Number(r.value) / total) * 100)}%</b>
            </div>`,
            )
            .join("")}
        </div>
      </div>`;
  }

  function renderChart(root) {
    const target = root.querySelector("#labChart");
    if (!target) return;
    const validRows = rows.filter(
      (r) => r.category.trim() && Number.isFinite(Number(r.value)),
    );
    if (!validRows.length) {
      target.innerHTML = `<p class="lab-chart-empty">Masukkan data untuk melihat diagrammu.</p>`;
      return;
    }
    target.innerHTML =
      chartType === "pie"
        ? renderPie(validRows)
        : renderCartesian(validRows, chartType);
  }

  function renderAll(root) {
    renderTable(root);
    renderStats(root);
    renderChart(root);
    const count = root.querySelector("#labRowCount");
    if (count) count.textContent = `${rows.length} data`;
  }

  function downloadCSV() {
    const csvRows = [
      ["Kategori", "Nilai"],
      ...rows.map((r) => [r.category, r.value]),
    ];
    const csv = csvRows
      .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))
      .join("\r\n");
    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data-laboratorium-datalab.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  function importCSV(file, root) {
    const reader = new FileReader();
    reader.onload = () => {
      const lines = String(reader.result || "")
        .replace(/^\uFEFF/, "")
        .split(/\r?\n/)
        .filter(Boolean);
      const parsed = lines
        .slice(1)
        .map((line) => {
          const cells = line
            .split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
            .map((cell) =>
              cell.trim().replace(/^"|"$/g, "").replace(/""/g, '"'),
            );
          return { category: cells[0] || "", value: Number(cells[1]) };
        })
        .filter((r) => r.category && Number.isFinite(r.value));
      if (!parsed.length) {
        alert("Data CSV tidak terbaca. Gunakan dua kolom: Kategori dan Nilai.");
        return;
      }
      rows = parsed.map((r) => ({ ...r, id: nextId++ }));
      editingId = null;
      renderAll(root);
    };
    reader.readAsText(file, "UTF-8");
  }

  function saveChart(root) {
    const svg = root.querySelector("#labChart svg");
    if (!svg) {
      alert("Diagram belum tersedia. Masukkan data yang valid terlebih dahulu.");
      return;
    }

    // Clone agar tampilan diagram pada halaman tidak berubah saat diunduh.
    const clone = svg.cloneNode(true);
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
    // Warna dan garis sama dengan laboratorium.css, sehingga SVG mandiri.
    style.textContent = `
      .lab-gridline{stroke:#e8e8f5;stroke-width:1}
      .lab-svg-label{fill:#172d61;font:600 12px Arial,sans-serif}
      .lab-bar{fill:#61aef0}
      .lab-bar-1{fill:#f47fb4}
      .lab-bar-2{fill:#55d6ac}
      .lab-line{fill:none;stroke:#9274e8;stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
      .lab-dot{fill:#f47fb4;stroke:#fff;stroke-width:2}
    `;
    clone.insertBefore(style, clone.firstChild);

    const svgText = new XMLSerializer().serializeToString(clone);
    const blob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const typeName = { bar: "batang", line: "garis", pie: "lingkaran" }[chartType] || "diagram";
    link.download = `diagram-${typeName}-datalab.svg`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    // Jangan cabut URL pada tick yang sama dengan klik unduhan.
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function renderLaboratoriumPage(container) {
    const root = container || document.getElementById("pageContainer");
    if (!root) return;

    root.innerHTML = `
      <div class="lab-page">
        
        <!-- BANNER LABORATORIUM DATA -->
        <section class="lab-banner" aria-label="Laboratorium Data">
        <img
            src="${BANNER}"
            alt="Banner Laboratorium DataLab"
        >
        </section>

        <section class="lab-quick-actions" aria-label="Akses cepat">
          <button class="lab-quick-card quick-blue" id="labSample">
            <img src="${ICON}ic-data-contoh.png" alt="">
            <span><b>Data Contoh</b><small>Gunakan data siap pakai.</small></span><i>→</i>
          </button>
          <button class="lab-quick-card quick-mint" id="labImport">
            <img src="${ICON}ic-impor-data.png" alt="">
            <span><b>Impor Data (CSV)</b><small>Unggah data dari file.</small></span><i>→</i>
          </button>
          <button class="lab-quick-card quick-pink" id="labExport">
            <img src="${ICON}ic-ekspor-data.png" alt="">
            <span><b>Ekspor Data (CSV)</b><small>Simpan data hasil olahan.</small></span><i>→</i>
          </button>
          <button class="lab-quick-card quick-peach" id="labSaveChart">
            <img src="${ICON}ic-simpan-diagram.png" alt="">
            <span><b>Simpan Diagram</b><small>Unduh diagram (SVG).</small></span><i>→</i>
          </button>
          <input id="labFileInput" type="file" accept=".csv,text/csv" hidden>
        </section>

        <section class="lab-main-grid">
          <article class="lab-panel lab-input-panel">
            <header class="lab-panel-title">
              <img src="${ICON}ic-data-contoh.png" alt="">
              <div><h2>1. Masukkan Data</h2><p>Buat dan kelola data sesuai kebutuhanmu.</p></div>
            </header>
            <div class="lab-table-wrap">
              <table class="lab-table">
                <thead><tr><th>No.</th><th>Kategori</th><th>Nilai</th><th>Aksi</th></tr></thead>
                <tbody id="labTableBody"></tbody>
              </table>
            </div>
            <div class="lab-input-actions">
              <button class="lab-primary-btn" id="labAddRow">＋ Tambah Baris</button>
              <button class="lab-secondary-btn" id="labClear">▤ Hapus Semua</button>
            </div>
            <div class="lab-table-note"><span id="labRowCount">3 data</span><span>Ubah data melalui tombol pensil.</span></div>
          </article>

          <article class="lab-panel lab-chart-panel">
            <header class="lab-panel-title">
              <img src="${ICON}ic-tambah-diagram.png" alt="">
              <div><h2>2. Buat Diagrammu</h2><p>Pilih jenis diagram dan lihat visualisasi datamu.</p></div>
            </header>
            <div class="lab-chart-tabs" role="group" aria-label="Jenis diagram">
              <button class="active" data-chart="bar">▥ Diagram Batang</button>
              <button data-chart="line">⌁ Diagram Garis</button>
              <button data-chart="pie">◕ Diagram Lingkaran</button>
            </div>
            <div class="lab-chart-area" id="labChart"></div>
          </article>

          <article class="lab-panel lab-stat-panel">
            <header class="lab-panel-title">
              <img src="${ICON}ic-statistik.png" alt="">
              <div><h2>3. Statistik Data</h2><p>Hasil pengolahan data secara otomatis.</p></div>
            </header>
            <div class="lab-stat-list">
              <div class="lab-stat-row"><span class="lab-stat-symbol">Σ</span><b>Banyak Data</b><strong id="labStatCount">3</strong></div>
              <div class="lab-stat-row"><span class="lab-stat-symbol">x̄</span><b>Mean (Rata-rata)</b><strong id="labStatMean">13</strong></div>
              <div class="lab-stat-row"><span class="lab-stat-symbol">Me</span><b>Median (Nilai Tengah)</b><strong id="labStatMedian">12</strong></div>
              <div class="lab-stat-row"><span class="lab-stat-symbol">Mo</span><b>Modus</b><strong id="labStatMode">-</strong></div>
              <div class="lab-stat-row"><span class="lab-stat-symbol">↔</span><b>Jangkauan</b><strong id="labStatRange">9</strong></div>
            </div>
          </article>
        </section>

        <section class="lab-panel lab-challenge-panel">
          <div class="lab-challenge-intro">
            <img src="${ICON}ic-tantangan-analisis.png" alt="">
            <div><h2>Tantangan Analisis Data</h2><p>Jawab pertanyaan berikut berdasarkan data dan diagram yang kamu buat!</p></div>
          </div>
          <div class="lab-questions">
            <div class="lab-question"><span>1</span><b>Kategori mana yang memiliki nilai paling banyak?</b></div>
            <div class="lab-question"><span>2</span><b>Berapa selisih nilai terbesar dan terkecil?</b></div>
            <div class="lab-question"><span>3</span><b>Apa kesimpulanmu dari data tersebut?</b></div>
            <div class="lab-answer-area" id="labAnswerArea" hidden>
              <label>Jawaban 1<input id="labAnswer1" type="text" placeholder="Tuliskan kategori dengan nilai terbesar"></label>
              <label>Jawaban 2<input id="labAnswer2" type="text" placeholder="Tuliskan hasil pengurangan"></label>
              <label>Jawaban 3<textarea id="labAnswer3" rows="2" placeholder="Tuliskan kesimpulanmu"></textarea></label>
              <button class="lab-primary-btn" id="labCheckAnswers">Periksa Jawaban</button>
              <p id="labFeedback" aria-live="polite"></p>
            </div>
          </div>
          <button class="lab-start-challenge" id="labStartChallenge">🚀 Mulai Menjawab →</button>
        </section>
      </div>
    `;

    renderAll(root);

    root.addEventListener("input", (event) => {
      const tr = event.target.closest("tr[data-id]");
      if (!tr || !event.target.matches("[data-field]")) return;
      const row = rows.find((item) => item.id === Number(tr.dataset.id));
      if (!row) return;
      if (event.target.dataset.field === "category")
        row.category = event.target.value;
      if (event.target.dataset.field === "value")
        row.value = event.target.value;
      renderStats(root);
      renderChart(root);
    });

    root.addEventListener("click", (event) => {
      const edit = event.target.closest("[data-edit]");
      if (edit) {
        const id = Number(edit.dataset.edit);
        if (editingId === id) {
          editingId = null;
          renderAll(root);
        } else {
          editingId = id;
          renderTable(root);
          root
            .querySelector(`tr[data-id="${id}"] input[data-field="category"]`)
            ?.focus();
        }
        return;
      }

      const del = event.target.closest("[data-delete]");
      if (del) {
        rows = rows.filter((r) => r.id !== Number(del.dataset.delete));
        if (editingId === Number(del.dataset.delete)) editingId = null;
        renderAll(root);
        return;
      }

      if (event.target.closest("#labAddRow")) {
        const id = nextId++;
        rows.push({ id, category: `Kategori ${rows.length + 1}`, value: 0 });
        editingId = id;
        renderAll(root);
        root
          .querySelector(`tr[data-id="${id}"] input[data-field="category"]`)
          ?.focus();
        return;
      }

      if (event.target.closest("#labClear")) {
        if (!confirm("Apakah kamu yakin ingin menghapus semua data?")) return;
        rows = [];
        editingId = null;
        renderAll(root);
        return;
      }

      if (event.target.closest("#labSample")) {
        rows = sampleRows.map((r) => ({ ...r, id: nextId++ }));
        editingId = null;
        renderAll(root);
        return;
      }

      if (event.target.closest("#labImport")) {
        root.querySelector("#labFileInput").click();
        return;
      }

      if (event.target.closest("#labExport")) {
        downloadCSV();
        return;
      }

      if (event.target.closest("#labSaveChart")) {
        saveChart(root);
        return;
      }

      const chartTab = event.target.closest("[data-chart]");
      if (chartTab) {
        chartType = chartTab.dataset.chart;
        root
          .querySelectorAll("[data-chart]")
          .forEach((button) =>
            button.classList.toggle("active", button === chartTab),
          );
        renderChart(root);
        return;
      }

      if (event.target.closest("#labStartChallenge")) {
        challengeStarted = !challengeStarted;
        const area = root.querySelector("#labAnswerArea");
        area.hidden = !challengeStarted;
        event.target.closest("#labStartChallenge").textContent =
          challengeStarted ? "Tutup Tantangan ↑" : "🚀 Mulai Menjawab →";
        return;
      }

      if (event.target.closest("#labCheckAnswers")) {
        const stats = getStats();
        const largest = [...rows].sort(
          (a, b) => Number(b.value) - Number(a.value),
        )[0];
        const a1 = root.querySelector("#labAnswer1").value.trim().toLowerCase();
        const a2 = Number(root.querySelector("#labAnswer2").value);
        const a3 = root.querySelector("#labAnswer3").value.trim();
        const feedback = root.querySelector("#labFeedback");
        const firstCorrect =
          largest && a1 === largest.category.trim().toLowerCase();
        const secondCorrect =
          Number.isFinite(a2) && stats.range !== null && a2 === stats.range;
        const thirdAnswered = a3.length >= 8;
        feedback.textContent = `Pemeriksaan: nomor 1 ${firstCorrect ? "benar" : "periksa kembali"}, nomor 2 ${secondCorrect ? "benar" : "periksa kembali"}, nomor 3 ${thirdAnswered ? "sudah diisi" : "lengkapi kesimpulanmu"}.`;
        feedback.className = "lab-feedback";
      }
    });

    root.querySelector("#labFileInput").addEventListener("change", (event) => {
      const file = event.target.files?.[0];
      if (file) importCSV(file, root);
      event.target.value = "";
    });
  }

  window.renderLaboratoriumPage = renderLaboratoriumPage;
})();
