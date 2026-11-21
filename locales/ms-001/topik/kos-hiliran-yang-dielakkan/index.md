# Kos Hiliran yang Dielakkan

Kos hiliran yang dielakkan (offset kos) ialah perbelanjaan rawatan masa depan yang dicegah oleh tindakan lebih awal atau lebih baik, ditolak daripada kos intervensi itu sendiri. Offset ialah mekanisme yang membolehkan intervensi menjadi *dominan* — lebih murah **dan** lebih baik — dan ia juga baris yang paling kerap dikira berganda dan dituntut berlebihan dalam ekonomi kesihatan.

## Mengapa ia penting

Hampir setiap proposisi nilai kesihatan digital mengandungi tuntutan offset: "aplikasi kami mencegah kemasukan," "amaran kami mencegah kemerosotan," "platform kami mengelakkan ujian bertindih." Apabila offset benar, ia mengubah ekonomi (lihat contoh penyelesaian [ICER](../nisbah-kos-keberkesanan-inkremental/), di mana offset £600k menjayakan kes itu). Pembayar tahu ini — maka tuntutan offset menarik penelitian paling ketat dalam mana-mana penilaian. Peraturan kredibiliti di bawah ialah pembeza antara model yang boleh dibiayai dengan pemasaran.

## Matematiknya

```
Kos bersih = kos intervensi − Σ offset

Offset yang sah mestilah:
  Boleh dikaitkan — dikaitkan secara kausal dengan intervensi (bukti pembanding)
  Marginal        — wang itu benar-benar berhenti dibelanjakan, pada kos marginal
                    bukan purata (lihat marginal-vs-average-cost.md)
  Berpemberat     — ditimbang dengan P(peristiwa hiliran itu akan berlaku)
  kebarangkalian
  Didiskaun       — kos dielakkan masa depan pada nilai kini
  Unik            — dikira sekali, dalam satu baris manfaat
```

## Contoh penyelesaian

"Tuntutan risiko migrasi ini, dilakukan dengan betul": aplikasi pemantauan luka untuk 5,000 pesakit pascapembedahan menuntut mengelakkan kemasukan semula berkaitan jangkitan.

```
Kemasukan semula garis asas kerana jangkitan: 4.0% ; dengan aplikasi (RCT): 3.1%
Peristiwa boleh dikaitkan dielakkan = 5,000 × 0.009 = 45/tahun
Kos setiap episod kemasukan semula (marginal, trust ini): £3,200
Offset = 45 × 3,200 = £144,000/tahun
Kos aplikasi = 5,000 × £20 = £100,000/tahun
Kos bersih = −£44,000 → benar-benar menjimatkan kos, dengan:
  atribusi daripada RCT ✓  pengkosan marginal ✓  kebarangkalian daripada data percubaan ✓
```

Tuntutan yang sama yang dibina atas "kemasukan semula berharga £5,800 secara purata, kami akan mencegah banyak" gagal keempat-empat ujian dan wajar ditolak.

## Kaitan dengan kejuruteraan perisian

"Migrasi ini mengelakkan penulisan semula masa depan" ialah tuntutan offset, dan peraturan ekonomi kesihatan menjadikannya jujur:

- **Kos kontrafaktual**: berapakah kos sebenar penulisan semula itu, dibuktikan bagaimana?
- **Kebarangkalian**: seberapa mungkin masa depan itu? (Bukan 100% — produk dihentikan, keutamaan berubah.)
- **Diskaun**: penulisan semula yang dielakkan pada tahun ke-4 dengan diskaun 3.5–10% bernilai jauh kurang daripada nilai muka.
- **Keunikan**: jangan tuntut penulisan semula yang sama dielakkan dalam baris hutang teknikal dan baris pengekalan sekali gus.

`Nilai offset = P(peristiwa masa depan) × kos kontrafaktual × faktor diskaun` — tulis baris itu dalam cadangan dan lihat anggaran menjadi boleh dibahaskan, itulah tujuannya.

## Perangkap

- **Pengiraan berganda** — kemasukan dielakkan yang sama dituntut sebagai offset, hari katil dan QALY-dengan-kos-dilampirkan.
- **Offset kos purata** untuk peristiwa yang kos tetapnya berterusan tanpa mengira.
- **Kebarangkalian 100% senyap** pada peristiwa hiliran yang sekadar mungkin.
- **Offset kepada bajet lain** dibentangkan sebagai penjimatan kepada pembayar yang diminta membayar — lihat [perspektif analisis](../perspektif-analisis/).

## Sumber

- York Health Economics Consortium glossary: cost offset. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (offsets rarely exceed costs). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
