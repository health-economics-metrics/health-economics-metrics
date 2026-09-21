# Rasio Efektivitas-Biaya Inkremental (ICER)

ICER adalah biaya ekstra per unit ekstra efek kesehatan ketika Anda memilih satu pilihan dibandingkan alternatif-terbaik-berikutnya. Ini adalah angka utama penilaian teknologi kesehatan. (Ketika unit efeknya adalah QALY, ini juga disebut rasio biaya-utilitas inkremental, ICUR.)

## Mengapa Ini Penting

Sistem kesehatan tidak pernah mengevaluasi teknologi secara terisolasi — selalu *secara inkremental*, terhadap apa yang seharusnya dilakukan. NICE membandingkan ICER sebuah teknologi dengan ambangnya **£20.000–£30.000 per QALY**; institut ICER AS melaporkan pada rentang $50.000–$200.000/QALY; Kanada bekerja pada kira-kira CAD$50.000/QALY. Apakah produk Anda "layak" bagi sistem kesehatan nasional adalah, secara formal, apakah ICER-nya melewati ambang lokal. Lihat [ambang batas kesediaan-membayar](../ambang-batas-kesediaan-membayar/).

## Perhitungan

```
ICER = (Biaya_baru − Biaya_pembanding) / (Efek_baru − Efek_pembanding)
     = ΔC / ΔE
```

Aturan interpretasi:

- ΔC < 0, ΔE > 0: pilihan baru **mendominasi** — lebih murah dan lebih baik; tidak diperlukan rasio.
- ΔC > 0, ΔE > 0: hitung ICER, bandingkan dengan ambang λ; adopsi jika ICER < λ.
- ΔC > 0, ΔE < 0: pilihan baru didominasi — tolak.
- Rasio berperilaku buruk dekat ΔE = 0 — lebih suka [manfaat moneter bersih](../manfaat-moneter-bersih/) untuk perangkingan.

Pembanding harus menjadi *pilihan tidak-didominasi terbaik berikutnya*, bukan "tidak melakukan apa-apa" — lihat [dominansi dan batas efisiensi](../dominansi-dan-batas-efisiensi/).

## Contoh yang Diselesaikan

Layanan pemantauan-jarak-jauh untuk pasien gagal-jantung, per 1.000 pasien/tahun, versus perawatan biasa:

```
Biaya:   layanan £900.000; rawat-inap yang dihindari menghemat £600.000
         ΔC = 900.000 − 600.000 = £300.000
Efek:    intervensi lebih awal mendapatkan 25 QALY
         ΔE = 25

ICER = 300.000 / 25 = £12.000 per QALY
```

£12.000/QALY nyaman di bawah ambang £20.000 NICE — kasus yang kuat. Perhatikan bagaimana biaya *bersih* penting: tanpa offset £600.000 ICER akan menjadi £36.000/QALY dan kasusnya kemungkinan gagal. Offset biaya dan kualitas buktinya adalah di mana analisis ini dimenangkan dan dikalahkan (lihat [biaya hilir yang dihindari](../biaya-hilir-yang-dihindari/)).

## Hubungan dengan Rekayasa Perangkat Lunak

Disiplin ICER ditransfer utuh ke keputusan rekayasa:

```
(biaya pilihan B − biaya pilihan A) / (hasil B − hasil A)
```

— biaya inkremental per penerapan tambahan, per jam-insinyur dihemat, per insiden dihindari — selalu terhadap alternatif-terbaik-berikutnya, bukan terhadap tidak-melakukan-apa-apa. Dua kebiasaan yang layak dicuri: (1) *sebutkan pembanding secara eksplisit*; sebagian besar klaim ROI alat secara diam-diam membandingkan dengan orang-orangan-sawah; (2) *bersihkan biaya dulu* — alat yang berbiaya £100rb tetapi menggantikan £80rb pengeluaran yang ada memiliki ΔC = £20rb.

## Jebakan

- **Manipulasi pembanding**: membandingkan terhadap garis dasar yang usang atau buruk secara buatan menggembungkan ΔE dan menyanjung ICER.
- **Rata-rata alih-alih inkremen**: biaya per QALY dari seluruh program bukanlah ICER dari memperluas atau mengadopsinya.
- **Pemujaan estimasi-titik**: ICER adalah rasio dua perbedaan yang tidak pasti; laporkan ketidakpastian melalui [PSA dan CEAC](../analisis-sensitivitas-probabilistik/).
- **ICER negatif bersifat ambigu** (lebih-murah-dan-lebih-baik vs lebih-mahal-dan-lebih-buruk memberikan tanda yang sama) — jangan pernah melaporkan ICER negatif tanpa mengatakan kuadran mana itu.

## Sumber

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
