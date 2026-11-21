# Analisis Dampak Anggaran (Budget Impact Analysis, BIA)

BIA ngira apa sing ditindakake nampa intervensi marang **anggaran** pembayar tartamtu sajrone 1–5 taun sabanjure. Iki njawab *keterjangkauan*; efektivitas-biaya njawab *nilai*. Teknologi bisa dadi nilai apik banget nanging ora kejangkau — utawa kejangkau nanging nilaine elek. Penilaian serius mbutuhake loro-lorone.

## Kenapa Iki Penting

Pitakonane direktur keuangan ora tau "pira ICER-e?" — nanging "iki ngapa-ngapakake anggaran taun ngarep?" Pedoman praktik apik ISPOR (standar bidang) nemtokake: perspektif pembayar dhewe, cakrawala 1–5 taun, arus kas taunan *tanpa diskon*, kurva panampa sing realistis, lan ketidakpastian skenario (dudu probabilistik). NICE mbutuhake informasi dampak anggaran bareng efektivitas-biaya; produk kanthi dampak anggaran nasional ing ndhuwur ~£20M/taun ing Inggris nyetel negosiasi komersial preduli ICER-e.

## Matematikane

```
BI_taun_t = Biaya_skenario_nganggo_anyar(t) − Biaya_skenario_saiki(t)

Biaya_skenario(t) = Σ ing kelompok pasien:
   populasi sing layak(t) × panampa(t) × biaya net saben pasien(t)

biaya net saben pasien = biaya intervensi − biaya perawatan sing diganti + biaya perawatan sing diinduksi
```

Pilihan pemodelan kunci: wutah populasi layak, kurva panampa (adopsi ora tau cepet), apa sing diganti pilihan anyar, lan permintaan apa wae sing *diinduksi* (akses luwih gampang → pangguna luwih akeh).

## Conto Petungan

Pembayar sing nutupi 2M wong nimbang terapi digital £300/pasien/taun; 1.5% anggota layak (30,000); panampa 20% → 40% → 60% sajrone 3 taun; saben pangguna ngganti £120/taun perawatan liyane.

```
Biaya net saben pangguna = 300 − 120 = £180

Taun 1: 30,000 × 0.20 × 180 = £1.08M
Taun 2: 30,000 × 0.40 × 180 = £2.16M
Taun 3: 30,000 × 0.60 × 180 = £3.24M
```

Sanajan ICER produk apik banget £8,000/QALY, pembayar kudu nemokake £3.24M *dhuwit anyar* ing taun 3 — £120 sing diganti kasebar tipis ing garis anggaran liyane lan ora bakal dibebasake minangka awis (deleng [cash-releasing vs non-cash-releasing](../penghematan-cash-releasing-vs-non-cash-releasing/)). Iki sebabe nilai saben unit lan keterjangkauan iku alangan kapisah.

## Sambungan karo Rékayasa Piranti Lunak

BIA iku pelengkap sing madhep-CFO saka klaim ROI saben-kursi: "efektif-biaya saben pangembang, nanging apa kita bisa nanggung peluncuran saorganisasi taun fiskal iki?" Modelake tingkat lisensi, kurva-S adopsi, belanja piranti sing diganti sing mung cash-releasing nalika kontrak lawas bener-bener mandheg, lan panggunaan sing diinduksi (CI luwih murah → CI luwih akeh). Nampilake tabel dampak anggaran 3 taun bareng ROI iku sing ndadekake proposal piranti perusahaan kredibel kanggo keuangan. Mecah total dampak anggaran sing dipublikasi ing situs, kohort, utawa taun fiskal — lan nggawe bagian-bagiane cocok persis karo angka sing dipublikasi — iku persis [alokasi biaya sen-pas](../alokasi-biaya-sen-pas/); njumlahake akeh item garis sing nyuplai total ing wiwitane iku [rollup biaya aman-mata-uang](../rollup-biaya-aman-mata-uang/).

## Jebakan

- **Fantasi panampa langsung**: dampak taun-1 dietung ing adopsi kahanan mapan.
- **Ngetung biaya sing diganti minangka awis** nalika iku kapasitas sing nyebar.
- **Ngabaikake permintaan sing diinduksi** — perbaikan akses nggedhekake panggunaan populasi sing layak.
- **Mbingungake cakrawala/diskon BIA lan CEA**: BIA iku cakrawala-cendhak, tanpa diskon, khusus-pembayar kanthi desain.

## Sumber

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
