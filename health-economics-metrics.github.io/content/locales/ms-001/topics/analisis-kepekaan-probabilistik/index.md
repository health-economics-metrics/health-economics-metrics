# Analisis Kepekaan Probabilistik (PSA)

PSA memberikan taburan kebarangkalian kepada setiap parameter tidak pasti, mensampel kesemuanya serentak beribu kali (Monte Carlo), dan melaporkan *kebarangkalian* bahawa sesuatu pilihan ialah pilihan terbaik — dan bukan anggaran titik tunggal.

## Mengapa ia penting

Kes rujukan NICE *memerlukan* PSA. Analisis deterministik menjawab "bagaimana jika satu input salah?"; PSA menjawab "diberi segala yang kita tidak tahu serentak, seberapa mungkin kita membuat keputusan yang betul?" Outputnya yang menjadi ciri, **lengkung kebolehterimaan kos-keberkesanan (CEAC)**, memplot kebarangkalian sesuatu pilihan kos-efektif terhadap ambang kesanggupan membayar — menukar "ICER ialah £24,000/QALY" kepada "ada 78% peluang ini pilihan yang betul pada £30,000/QALY."

## Matematiknya

```
Bagi setiap daripada N cabutan (N ≈ 10,000):
  sampel setiap parameter θ daripada taburannya
    (kos ~ Gamma, kebarangkalian ~ Beta, utiliti ~ Beta, kesan ~ Normal/logNormal)
  kira NMB_j(θ) = λ × Kesan_j(θ) − Kos_j(θ) bagi setiap pilihan j

CEAC_j(λ) = pecahan cabutan di mana pilihan j mempunyai NMB tertinggi pada ambang λ
```

Lihat [manfaat monetari bersih](../manfaat-monetari-bersih/) untuk NMB dan [ambang kesanggupan membayar](../ambang-kesanggupan-membayar/) untuk λ.

## Contoh penyelesaian

Kes perniagaan migrasi platform. Tiga input tidak pasti:

```
Kos migrasi         ~ Gamma,  min £800k, sd £200k
Manfaat tahunan     ~ Normal, min £350k, sd £150k
Tempoh manfaat      ~ Seragam, 3–6 tahun
```

Bagi setiap 10,000 cabutan kira manfaat bersih = tempoh × tahunan − kos (diskaun ditinggalkan demi kejelasan). Keputusan ilustratif:

```
Min manfaat bersih:      £775k
Kebarangkalian bersih > 0: 0.86
Persentil ke-5–95:      −£180k … +£1.9J
```

Anggaran titik berkata "jelas ya." PSA berkata "86% ya, dengan ekor sebenar di mana kita rugi £180k+" — itulah yang sebenarnya diperlukan pemilik portfolio, dan ia menghargai kes menjalankan spike penemuan dahulu (lihat [EVPI](../nilai-jangkaan-maklumat-sempurna/)).

## Kaitan dengan kejuruteraan perisian

Jurutera sudah mempercayai Monte Carlo untuk ramalan penyampaian (persampelan daya pemprosesan mengalahkan anggaran titik). Panjangkan jentera sama kepada wang: taburan pada penerimaan, masa dijimatkan dan gaji, kemudian laporkan "kebarangkalian pelaburan platform ini positif bersih" dan bukan ROI ketepatan-palsu. Lengkung gaya CEAC — kebarangkalian menjadi pilihan terbaik sebagai fungsi cara organisasi menilai jam-jurutera — ialah artifak yang benar-benar lebih baik untuk jawatankuasa pembiayaan daripada mana-mana nombor tunggal.

## Perangkap

- **Taburan sampah**: PSA dengan sisihan piawai rekaan ialah analisis deterministik berkot makmal. Dasarkan serakan pada data atau elisitasi pakar berstruktur.
- **Mengabaikan korelasi** antara parameter (penerimaan tinggi biasanya berkorelasi dengan masa-dijimatkan tinggi); persampelan bebas memperkecilkan risiko ekor.
- **Melaporkan min simulasi sahaja** — inti persoalan ialah taburan dan kebarangkalian keputusan.

## Sumber

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
