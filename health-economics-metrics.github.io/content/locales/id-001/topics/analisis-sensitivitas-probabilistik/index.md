# Analisis Sensitivitas Probabilistik (PSA)

PSA menetapkan distribusi probabilitas untuk setiap parameter tidak-pasti, mengambil sampel semuanya secara bersamaan ribuan kali (Monte Carlo), dan melaporkan *probabilitas* bahwa sebuah pilihan adalah pilihan terbaik — alih-alih satu estimasi titik.

## Mengapa Ini Penting

Kasus rujukan NICE *mewajibkan* PSA. Analisis deterministik menjawab "bagaimana jika satu input salah?"; PSA menjawab "mengingat segala sesuatu yang tidak kita ketahui sekaligus, seberapa mungkin kita membuat keputusan yang benar?" Output khasnya, **kurva penerimaan efektivitas-biaya (CEAC)**, memplot probabilitas bahwa sebuah pilihan efektif-biaya terhadap ambang kesediaan-membayar — mengubah "ICER-nya £24.000/QALY" menjadi "ada peluang 78% ini adalah pilihan yang tepat pada £30.000/QALY."

## Perhitungan

```
Untuk setiap N pengambilan (N ≈ 10.000):
  ambil sampel setiap parameter θ dari distribusinya
    (biaya ~ Gamma, probabilitas ~ Beta, utilitas ~ Beta, efek ~ Normal/logNormal)
  hitung NMB_j(θ) = λ × Efek_j(θ) − Biaya_j(θ) untuk setiap pilihan j

CEAC_j(λ) = fraksi pengambilan di mana pilihan j memiliki NMB tertinggi pada ambang λ
```

Lihat [manfaat moneter bersih](../manfaat-moneter-bersih/) untuk NMB dan [ambang batas kesediaan-membayar](../ambang-batas-kesediaan-membayar/) untuk λ.

## Contoh yang Diselesaikan

Kasus bisnis migrasi platform. Tiga input tidak-pasti:

```
Biaya migrasi      ~ Gamma,  rata-rata £800rb, sd £200rb
Manfaat tahunan     ~ Normal, rata-rata £350rb, sd £150rb
Durasi manfaat      ~ Uniform, 3–6 tahun
```

Untuk setiap 10.000 pengambilan hitung manfaat-bersih = durasi × tahunan − biaya (diskon dihilangkan demi kejelasan). Hasil ilustratif:

```
Manfaat bersih rata-rata:  £775rb
Probabilitas bersih > 0:   0,86
Persentil ke-5–ke-95:      −£180rb … +£1,9 juta
```

Estimasi titik mengatakan "jelas ya." PSA mengatakan "86% ya, dengan ekor nyata di mana kita kehilangan £180rb+" — yang persis dibutuhkan pemilik-portofolio, dan ia menetapkan-harga kasus untuk menjalankan spike-penemuan lebih dulu (lihat [EVPI](../nilai-harapan-dari-informasi-sempurna/)).

## Hubungan dengan Rekayasa Perangkat Lunak

Insinyur sudah mempercayai Monte Carlo untuk perkiraan-penyampaian (pengambilan-sampel throughput mengalahkan estimasi titik). Perluas mekanisme yang sama ke uang: distribusi pada adopsi, waktu yang dihemat, dan gaji, lalu laporkan "probabilitas bahwa investasi platform ini bersih-positif" alih-alih ROI presisi-palsu. Kurva gaya-CEAC — probabilitas menjadi pilihan terbaik sebagai fungsi dari bagaimana organisasi menilai satu jam-insinyur — adalah artefak yang secara genuin lebih baik untuk komite pendanaan daripada angka tunggal mana pun.

## Jebakan

- **Distribusi sampah**: PSA dengan standar-deviasi yang diciptakan adalah analisis deterministik yang mengenakan jas lab. Dasarkan penyebaran pada data atau elisitasi ahli terstruktur.
- **Mengabaikan korelasi** antar parameter (adopsi tinggi biasanya berkorelasi dengan waktu-yang-dihemat tinggi); pengambilan-sampel independen meremehkan risiko-ekor.
- **Melaporkan hanya rata-rata** dari simulasi — seluruh intinya adalah distribusi dan probabilitas-keputusan.

## Sumber

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
