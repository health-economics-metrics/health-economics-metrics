# Nisbah Kos-Keberkesanan Inkremental (ICER)

ICER ialah kos tambahan bagi setiap unit tambahan kesan kesihatan apabila anda memilih satu pilihan berbanding alternatif terbaik seterusnya. Ia nombor tajuk penilaian teknologi kesihatan. (Apabila unit kesan ialah QALY, ia juga dipanggil nisbah kos-utiliti inkremental, ICUR.)

## Mengapa ia penting

Sistem kesihatan tidak pernah menilai teknologi secara terasing — sentiasa *secara inkremental*, berbanding apa yang akan dilakukan sebaliknya. NICE membandingkan ICER teknologi dengan ambangnya **£20,000–£30,000 bagi setiap QALY**; institut ICER AS melaporkan merentas $50,000–$200,000/QALY; Kanada bekerja pada kira-kira CAD$50,000/QALY. Sama ada produk anda "berbaloi" kepada perkhidmatan kesihatan kebangsaan ialah, secara formal, sama ada ICER-nya melepasi ambang tempatan. Lihat [ambang kesanggupan membayar](../ambang-kesanggupan-membayar/).

## Matematiknya

```
ICER = (Kos_baharu − Kos_pembanding) / (Kesan_baharu − Kesan_pembanding)
     = ΔC / ΔE
```

Peraturan tafsiran:

- ΔC < 0, ΔE > 0: pilihan baharu **mendominasi** — lebih murah dan lebih baik; tiada nisbah diperlukan.
- ΔC > 0, ΔE > 0: kira ICER, bandingkan dengan ambang λ; terima jika ICER < λ.
- ΔC > 0, ΔE < 0: pilihan baharu didominasi — tolak.
- Nisbah berkelakuan buruk berhampiran ΔE = 0 — utamakan [manfaat monetari bersih](../manfaat-monetari-bersih/) untuk pemangkatan.

Pembanding mestilah *pilihan tidak didominasi terbaik seterusnya*, bukan "tiada apa-apa" — lihat [dominasi dan sempadan kecekapan](../dominasi-dan-sempadan-kecekapan/).

## Contoh penyelesaian

Perkhidmatan pemantauan jauh untuk pesakit kegagalan jantung, bagi setiap 1,000 pesakit/tahun, lwn penjagaan biasa:

```
Kos:     perkhidmatan £900,000; kemasukan dielakkan menjimatkan £600,000
         ΔC = 900,000 − 600,000 = £300,000
Kesan:   intervensi lebih awal memperoleh 25 QALY
         ΔE = 25

ICER = 300,000 / 25 = £12,000 bagi setiap QALY
```

£12,000/QALY selesa di bawah ambang £20,000 NICE — kes yang kuat. Perhatikan betapa kos *bersih* penting: tanpa offset £600,000, ICER akan jadi £36,000/QALY dan kes mungkin gagal. Offset kos dan kualiti buktinya ialah tempat analisis ini dimenangi dan ditewaskan (lihat [kos hiliran dielakkan](../kos-hiliran-yang-dielakkan/)).

## Kaitan dengan kejuruteraan perisian

Disiplin ICER berpindah sepenuhnya kepada keputusan kejuruteraan:

```
(kos pilihan B − kos pilihan A) / (hasil B − hasil A)
```

— kos inkremental bagi setiap penggunaan tambahan, setiap jam-jurutera dijimatkan, setiap insiden dielakkan — sentiasa berbanding alternatif terbaik seterusnya, bukan berbanding tidak berbuat apa-apa. Dua tabiat yang patut dicuri: (1) *namakan pembanding dengan jelas*; kebanyakan tuntutan ROI alat secara rahsia membandingkan dengan orang-orangan; (2) *bersihkan kos dahulu* — alat berharga £100k yang menyesarkan £80k perbelanjaan sedia ada mempunyai ΔC = £20k.

## Perangkap

- **Membandingkan ICER merentas mata wang tanpa langkah penukaran yang jelas**: ICER yang dikira dalam mata wang satu negara mesti ditukar dengan kaedah dinyatakan sebelum dibandingkan dengan ambang negara lain — lihat [perbandingan ICER merentas mata wang](../perbandingan-icer-merentas-mata-wang/) untuk sebab pilihan faktor penukaran (pariti kuasa beli lwn kadar pertukaran pasaran) boleh sendiri membalikkan keputusan penerimaan.
- **Permainan pembanding**: membandingkan dengan garis asas usang atau sengaja buruk mengembungkan ΔE dan memuji ICER.
- **Purata bukannya inkremen**: kos bagi setiap QALY keseluruhan program bukan ICER mengembang atau menerimanya.
- **Pemujaan anggaran titik**: ICER ialah nisbah dua perbezaan tidak pasti; laporkan ketidakpastian melalui [PSA dan CEAC](../analisis-kepekaan-probabilistik/).
- **ICER negatif adalah taksa** (lebih-murah-dan-lebih-baik lwn lebih-mahal-dan-lebih-buruk memberi tanda sama) — jangan sekali-kali melaporkan ICER negatif tanpa menyatakan kuadran mana.

## Sumber

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
