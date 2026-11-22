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

  function getStandaloneChartSVG(root) {
    const svg = root.querySelector("#labChart svg");
    if (!svg) {
      alert("Diagram belum tersedia. Masukkan data yang valid terlebih dahulu.");
      return null;
    }

    const clone = svg.cloneNode(true);
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    clone.setAttribute("width", "1280");
    clone.setAttribute("height", "620");

    const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
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
    return new XMLSerializer().serializeToString(clone);
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  function getChartFilename() {
    const typeName = {
      bar: "batang",
      line: "garis",
      pie: "lingkaran"
    }[chartType] || "diagram";
    return `diagram-${typeName}-datalab`;
  }

  function svgToPNG(svgText) {
    return new Promise((resolve, reject) => {
      const svgBlob = new Blob([svgText], {
        type: "image/svg+xml;charset=utf-8"
      });
      const svgURL = URL.createObjectURL(svgBlob);
      const img = new Image();

      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = 1600;
          canvas.height = 800;
          const ctx = canvas.getContext("2d");

          // Latar putih agar hasil PNG jelas saat dibuka atau dicetak.
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 40, 40, 1520, 720);

          canvas.toBlob((blob) => {
            URL.revokeObjectURL(svgURL);
            if (blob) resolve(blob);
            else reject(new Error("Gambar PNG tidak berhasil dibuat."));
          }, "image/png");
        } catch (error) {
          URL.revokeObjectURL(svgURL);
          reject(error);
        }
      };

      img.onerror = () => {
        URL.revokeObjectURL(svgURL);
        reject(new Error("Diagram tidak dapat dikonversi menjadi PNG."));
      };

      img.src = svgURL;
    });
  }

  function getExportSummary() {
    const stats = getStats();
    const typeLabel = {
      bar: "Diagram Batang",
      line: "Diagram Garis",
      pie: "Diagram Lingkaran"
    }[chartType] || "Diagram";

    const tableRows = rows.map((row, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${escapeHTML(row.category)}</td>
        <td>${escapeHTML(row.value)}</td>
      </tr>
    `).join("");

    return {
      typeLabel,
      tableRows,
      stats: [
        ["Banyak Data", fmt(stats.count)],
        ["Mean (Rata-rata)", fmt(stats.mean)],
        ["Median (Nilai Tengah)", fmt(stats.median)],
        ["Modus", stats.mode],
        ["Jangkauan", fmt(stats.range)]
      ]
    };
  }

  async function saveChart(root, format) {
    const svgText = getStandaloneChartSVG(root);
    if (!svgText || !format) return;
    const filename = getChartFilename();
    const summary = getExportSummary();

    if (format === "1") {
      try {
        const pngBlob = await svgToPNG(svgText);
        downloadBlob(pngBlob, `${filename}.png`);
      } catch (error) {
        console.error(error);
        alert("Maaf, diagram PNG gagal dibuat. Silakan coba kembali.");
      }
      return;
    }

    if (format === "2") {
      // PDF dibuat melalui dialog cetak browser agar tidak membutuhkan
      // library eksternal. Pengguna memilih "Save as PDF" pada tujuan cetak.
      const printWindow = window.open("", "_blank");
      if (!printWindow) {
        alert("Jendela PDF diblokir browser. Izinkan pop-up untuk situs ini, lalu coba lagi.");
        return;
      }

      printWindow.document.open();
      printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
          <meta charset="UTF-8">
          <title>${filename}</title>
          <style>
            @page { size: A4 landscape; margin: 18mm; }
            body { font-family: Arial, sans-serif; color: #172d61; padding: 12px; }
            h1 { color: #6336b8; margin-bottom: 6px; }
            p { color: #68769a; margin-top: 0; }
            .chart { width: 100%; max-height: 430px; margin: 20px 0; }
            .chart svg { width: 100%; height: auto; }
            table { border-collapse: collapse; width: 100%; margin-top: 14px; }
            th, td { border: 1px solid #dcd8ef; padding: 8px 10px; text-align: left; }
            th { background: #eee8ff; }
            .stats { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
            .stat { background: #f4f0ff; border-radius: 8px; padding: 10px 14px; }
            .stat b { display: block; color: #6336b8; margin-bottom: 4px; }
            @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
          </style>
        </head>
        <body>
          <h1>Hasil Diagram Laboratorium DataLab</h1>
          <p>${summary.typeLabel} · Laboratorium Statistika</p>
          <div class="chart">${svgText}</div>
          <h2>Data yang Diolah</h2>
          <table>
            <thead><tr><th>No.</th><th>Kategori</th><th>Nilai</th></tr></thead>
            <tbody>${summary.tableRows}</tbody>
          </table>
          <h2>Ringkasan Statistik</h2>
          <div class="stats">
            ${summary.stats.map(([label, value]) =>
              `<div class="stat"><b>${escapeHTML(label)}</b>${escapeHTML(value)}</div>`
            ).join("")}
          </div>
          <script>
            window.onload = () => setTimeout(() => window.print(), 400);
          <\/script>
        </body>
        </html>
      `);
      printWindow.document.close();
      return;
    }

    if (format === "3") {
      try {
        // Dokumen HTML berformat .doc kompatibel dengan Microsoft Word.
        // Diagram disematkan sebagai PNG agar tidak bergantung pada file SVG terpisah.
        const pngBlob = await svgToPNG(svgText);
        const chartDataURL = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(pngBlob);
        });

        const wordHTML = `
          <!DOCTYPE html>
          <html xmlns:o="urn:schemas-microsoft-com:office:office"
                xmlns:w="urn:schemas-microsoft-com:office:word"
                xmlns="http://www.w3.org/TR/REC-html40">
          <head>
            <meta charset="utf-8">
            <title>Hasil Diagram DataLab</title>
            <style>
              body { font-family: Arial, sans-serif; color: #172d61; }
              h1 { color: #6336b8; }
              h2 { color: #6336b8; margin-top: 24px; }
              table { border-collapse: collapse; width: 100%; }
              th, td { border: 1px solid #bdb3df; padding: 8px; }
              th { background: #eee8ff; }
              img { width: 680px; max-width: 100%; }
            </style>
          </head>
          <body>
            <h1>Hasil Diagram Laboratorium DataLab</h1>
            <p>${summary.typeLabel} · Laboratorium Statistika</p>
            <h2>Visualisasi Diagram</h2>
            <img src="${chartDataURL}" alt="${summary.typeLabel}">
            <h2>Data yang Diolah</h2>
            <table>
              <thead><tr><th>No.</th><th>Kategori</th><th>Nilai</th></tr></thead>
              <tbody>${summary.tableRows}</tbody>
            </table>
            <h2>Ringkasan Statistik</h2>
            <table>
              <tbody>
                ${summary.stats.map(([label, value]) =>
                  `<tr><th>${escapeHTML(label)}</th><td>${escapeHTML(value)}</td></tr>`
                ).join("")}
              </tbody>
            </table>
            <p><i>Dibuat menggunakan DataLab – Laboratorium Statistika.</i></p>
          </body>
          </html>
        `;

        const wordBlob = new Blob(["\ufeff", wordHTML], {
          type: "application/msword;charset=utf-8"
        });
        downloadBlob(wordBlob, `${filename}.doc`);
      } catch (error) {
        console.error(error);
        alert("Maaf, dokumen Word gagal dibuat. Silakan coba kembali.");
      }
      return;
    }

    alert("Pilihan tidak valid. Silakan masukkan angka 1, 2, atau 3.");
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
          <div class="lab-save-wrap">
            <button class="lab-quick-card quick-peach" id="labSaveChart" type="button"
                    aria-expanded="false" aria-controls="labSaveOptions">
              <img src="${ICON}ic-simpan-diagram.png" alt="">
              <span><b>Simpan Diagram</b><small>Unduh PNG, PDF, atau Word.</small></span><i>→</i>
            </button>
            <div class="lab-save-options" id="labSaveOptions" hidden role="group"
                 aria-label="Pilih format unduhan diagram">
              <div class="lab-save-options-title">Pilih format unduhan</div>
              <button type="button" class="lab-save-option" data-export-format="1">
                <span class="lab-save-format-icon png">PNG</span>
                <span><b>Gambar PNG</b><small>Kualitas gambar tinggi</small></span>
              </button>
              <button type="button" class="lab-save-option" data-export-format="2">
                <span class="lab-save-format-icon pdf">PDF</span>
                <span><b>Dokumen PDF</b><small>Siap dicetak atau dibagikan</small></span>
              </button>
              <button type="button" class="lab-save-option" data-export-format="3">
                <span class="lab-save-format-icon word">W</span>
                <span><b>Dokumen Word</b><small>Dapat dibuka di Microsoft Word</small></span>
              </button>
            </div>
          </div>
          <style>
            .lab-save-wrap{position:relative;min-width:0;width:100%;z-index:5}
            .lab-save-wrap>.lab-quick-card{width:100%;height:100%}
            .lab-save-options{position:absolute;top:calc(100% + 10px);right:0;width:min(290px,calc(100vw - 36px));padding:12px;background:#fff;border:1px solid #e6dcff;border-radius:18px;box-shadow:0 14px 36px rgba(70,42,130,.18);z-index:50;display:grid;gap:7px;animation:labSavePop .16s ease-out}
            .lab-save-options[hidden]{display:none}
            .lab-save-options-title{font-size:12px;font-weight:800;color:#6033ad;padding:3px 5px 7px}
            .lab-save-option{display:flex;align-items:center;gap:11px;width:100%;padding:10px;border:1px solid #eee9fb;border-radius:12px;background:#fff;text-align:left;cursor:pointer;transition:background .18s,border-color .18s,transform .18s}
            .lab-save-option:hover{background:#f7f2ff;border-color:#cbb7ff;transform:translateY(-1px)}
            .lab-save-option>span:last-child{display:grid;gap:3px}
            .lab-save-option b{font-size:12px;color:#172d61}
            .lab-save-option small{font-size:10px;color:#7d86a7}
            .lab-save-format-icon{display:grid;place-items:center;width:42px;height:42px;flex:0 0 42px;border-radius:12px;font-size:12px;font-weight:900}
            .lab-save-format-icon.png{background:#e7f8ef;color:#198754}
            .lab-save-format-icon.pdf{background:#fff0f2;color:#d9435b}
            .lab-save-format-icon.word{background:#eaf2ff;color:#2765c7;font-size:19px}
            @keyframes labSavePop{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}
          </style>
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
      const saveMenu = root.querySelector("#labSaveOptions");
      const saveTrigger = root.querySelector("#labSaveChart");
      if (saveMenu && !event.target.closest("#labSaveChart") &&
          !event.target.closest("#labSaveOptions") && !saveMenu.hidden) {
        saveMenu.hidden = true;
        if (saveTrigger) saveTrigger.setAttribute("aria-expanded", "false");
      }

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
        const trigger = root.querySelector("#labSaveChart");
        const menu = root.querySelector("#labSaveOptions");
        const willOpen = menu.hidden;
        menu.hidden = !willOpen;
        trigger.setAttribute("aria-expanded", String(willOpen));
        return;
      }

      const exportOption = event.target.closest("[data-export-format]");
      if (exportOption) {
        const format = exportOption.dataset.exportFormat;
        const menu = root.querySelector("#labSaveOptions");
        const trigger = root.querySelector("#labSaveChart");
        if (menu) menu.hidden = true;
        if (trigger) trigger.setAttribute("aria-expanded", "false");
        saveChart(root, format);
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
