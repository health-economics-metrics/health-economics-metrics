# Ambang Kesanggupan Membayar

Ambang kesanggupan membayar (WTP) ialah jumlah maksimum yang akan dibayar pembuat keputusan bagi setiap unit keuntungan kesihatan — garis yang menukar [ICER](../nisbah-kos-keberkesanan-inkremental/) kepada keputusan terima/tolak.

## Mengapa ia penting

Ambang ialah tempat ekonomi kesihatan berhenti menjadi pengukuran dan menjadi dasar. Setiap sistem kebangsaan mempunyai satu, jelas atau tersirat, dan mengetahui nombor tempatan memberitahu anda dengan tepat bagaimana menghargai tuntutan nilai kesihatan:

| Badan | Ambang (seperti dikaji, 2024–2025) |
|---|---|
| NICE (England) | £20,000–£30,000 bagi setiap QALY; purata ambang keputusan empirik ≈ £24,400 (2022–24); pengubah suai keterukan menaikkan siling berkesan kepada ~£36k–£51k; teknologi sangat khusus sehingga £100k+ |
| ICER (AS, bukan kerajaan) | $100,000–$150,000 bagi setiap penanda aras harga QALY/evLYG; melaporkan julat $50k–$200k |
| Kanada (CADTH / CDA-AMC) | ≈ CAD$50,000 bagi setiap QALY ambang kerja |
| WHO-CHOICE (sejarah, global) | 1–3× KDNK per kapita bagi setiap DALY dielakkan (kini tidak digalakkan kerana terlalu tumpul) |
| Sisi bekalan empirik UK (Claxton et al.) | ≈ £13,000 bagi setiap QALY yang sebenarnya disesarkan di margin NHS |

## Matematiknya

Ambang λ memasuki setiap peraturan keputusan:

```
Terima jika ICER = ΔC/ΔE < λ
Setara: terima jika NMB = λ×ΔE − ΔC > 0
```

Dua teori tentang apa *itu* λ:

- **Sisi permintaan**: apa yang masyarakat sanggup bayar untuk kesihatan (penghakiman nilai).
- **Sisi bekalan**: kesihatan yang dihasilkan bajet semasa di margin (kuantiti empirik — ~£13k/QALY Claxton). Jika λ yang digunakan untuk keputusan melebihi kadar sisi-bekalan, meluluskan teknologi baharu menyesarkan lebih banyak kesihatan daripada yang ditambahnya.

## Contoh penyelesaian

Terapeutik digital anda menyampaikan 0.05 QALY bagi setiap pesakit dirawat pada kos bersih (harga tolak offset) £800.

```
ICER = 800 / 0.05 = £16,000 bagi setiap QALY
```

- England: di bawah £20k → boleh dibiayai. Harga maksimum yang boleh dipertahankan: pada λ = £20,000, harga_maks = 0.05 × 20,000 + offset = £1,000 + offset.
- Pembingkaian komersial AS pada $150k/QALY: harga berasaskan-nilai jauh lebih tinggi.
- Ambang negara KDNK-per-kapita $4,000: produk sama mesti berharga di bawah ~$200 bersih.

Produk sama, tiga pasaran, tiga harga — ambang *ialah* model penetapan harga. Ini penetapan harga berasaskan-nilai, dijalankan songsang daripada λ.

## Kaitan dengan kejuruteraan perisian

Setiap organisasi kejuruteraan mempunyai λ tersirat: halangan di mana ia membiayai alat bagi setiap jam-jurutera dijimatkan. Menjadikannya jelas — "kami membiayai apa-apa di bawah £40 bagi setiap jam-jurutera yang dijimatkan secara boleh dipercayai" — membolehkan perbandingan jadual liga pelaburan platform, tepat seperti jadual liga kos-setiap-QALY memangkatkan perbelanjaan kesihatan. Pengajaran sisi-bekalan juga berpindah: λ dalaman sebenar anda ialah apa yang dihasilkan tunggakan *semasa* anda di margin, bukan apa yang pimpinan katakan masa bernilai.

## Perangkap

- **Membeli-belah ambang** merentas bidang kuasa atau memetik siling HST untuk produk biasa.
- **Menganggap λ sebagai lantai harga**: melepasi ambang perlu, bukan mencukupi — [impak bajet](../analisis-impak-bajet/) masih boleh menenggelamkan produk yang mampu-setiap-unit.
- **Mengabaikan bahawa ambang bergerak**: pengubah suai keterukan NICE (2022) dan semakan berkala mengubah λ berkesan; tarikhkan tuntutan anda.
- **Membandingkan ICER dengan ambang dalam mata wang berbeza tanpa menukar dahulu**: lihat [perbandingan ICER merentas mata wang](../perbandingan-icer-merentas-mata-wang/) — kaedah penukaran (pariti kuasa beli lwn kadar pertukaran pasaran) berimpak metodologi, bukan butiran pembundaran.
- **Mengelirukan penilaian berasaskan-λ dengan tradisi VSL/VPF pasaran buruh**: ini datang daripada tradisi teori berbeza (metodologi terkekang-bajet-kesihatan lwn keutamaan terdedah daripada tukar ganti upah-risiko) dan tidak selalu boleh didamaikan — untuk pendekatan keutamaan-terdedah alternatif bagi menilai nyawa, lihat [Nilai Nyawa Statistik](../nilai-nyawa-statistik/).

## Sumber

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
