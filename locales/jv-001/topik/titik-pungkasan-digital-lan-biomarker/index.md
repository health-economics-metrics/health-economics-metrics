# Titik Pungkasan Digital lan Biomarker (Digital Endpoints and Biomarkers)

Biomarker digital iku ukuran fisiologis utawa prilaku objektif sing dikumpulake liwat sensor (kacepetan lakune saka telpon, turu saka wearable, tremor saka akselerometri). Titik pungkasan digital iku ukuran kaya ngono sing diunggahake dadi **asil uji** — dienggo nuduhake efek perawatan. Kenaikan saka "data sing dipancarake piranti" dadi "bukti sing ditampa regulator" liwat tangga validasi sing ditetepake.

## Kenapa Iki Penting

Titik pungkasan uji tradisional iku episodik (kunjungan klinik saben 3 sasi) lan larang; titik pungkasan digital iku terus-terusan, ekologis (urip nyata, dudu kinerja klinik), lan murah saben pengamatan — bisa nyuda uji, ndeteksi efek luwih awal, lan ngidini studi desentralisasi. Kendalane yaiku validasi: kerangka sing ditampa (selaras FDA, telung pilar) mbutuhake **verifikasi/validasi analitik** (sensor ngukur kuantitas fisik kanthi akurat), **validasi klinis** (ukuran nggambarake kahanan klinis sing diklaim), lan **aspek kesehatan sing bermakna** sing wis dituduhake (pasien peduli apa sing ditangkep). Titik pungkasan tanpa katelu-telune iku telemetri, dudu bukti.

## Matematikane

```
Validasi analitik: persetujuan karo rujukan (deleng wearable-validation.md —
                   MAPE, CCC, Bland-Altman)
Validasi klinis:   korelasi/diskriminasi marang jangkar klinis
                   (validitas kelompok-dikenal, responsivitas marang owah-owahan)
Ekonomi titik pungkasan:
  kedadean sing dideteksi saben pasien-taun (terus-terusan) vs sampling saben-kunjungan
  daya uji: ukuran terus-terusan nyuda ukuran sampel nalika varians
  antar-kunjungan nguwasani — N ∝ σ²/Δ², lan σ² mudhun karo sampling rapet
```

## Conto Petungan

Uji Parkinson nimbang kacepetan lakune saka sensor bangkekan versus skor sing dinilai klinik saben kuartal:

```
Titik pungkasan klinik:  4 pengukuran/pasien/taun, noise saben-dina dhuwur
Titik pungkasan digital: ~200 pengukuran pasif/pasien/taun

Varians perkiraan owah-owahan taunan mudhun ~5× karo sampling rapet →
ukuran efek sing bisa dideteksi ing daya tetep mundhak ~√5 ≈ 2.2×, utawa
padha wae ukuran sampel nyusut ~40–60% kanggo hipotesis sing padha.
Ing £25,000 saben pasien sing didaftarake, ngurangi 200 pasien ≈ £5M hemat
saben uji — kasus komersial kanggo investasi validasi
(dhewe mungkin £1–2M) ing saindhenge pipeline sponsor.
```

## Sambungan karo Rékayasa Piranti Lunak

Titik pungkasan digital iku disiplin rékayasa-data nganggo busana klinis: **provenance lan versi** (nganyari algoritma ing tengah studi ngancam komparabilitas — masalah [PCCP](../evaluasi-regulasi-ai/) ing wujud uji; kunci versi lan bridge-validate); **desain data-ilang** (kesenjangan wear-time iku informatif, dudu acak — deleng [validasi wearable](../validasi-wearable/); pilihan imputasi iku klaim ilmiah); lan **keputusan pamisahan edge/cloud** sing ngowahi sinyal mentah apa wae sing bisa dipulihake mengko. Tim sing nganggep pipeline pangukuran minangka piranti lunak sing diatur wiwit dina pisanan — dites, diversi, kadokumentasi — tuku kredibilitas titik pungkasane kanthi murah; nambah validasi ing pipeline sing digawe cepet iku ing ngendi program titik-pungkasan-digital mati.

## Jebakan

- **Korelasi-karo-klinik minangka validasi lengkap**: cocog karo ukuran klinik sing cacat mbuktekake pewarisan, dudu bebener; validasi marang aspek kesehatan sing bermakna.
- **Risiko regulasi titik pungkasan anyar**: titik pungkasan sing durung ana preseden bisa unggul sacara ilmiah lan isih nggawe pengajuan klelep — libatake regulator awal (program kualifikasi ana).
- **Ora cocog sensor-populasi**: validasi ing bangkekan enom sehat, deployment ing pasien tuwa kanthi tremor lan beda pigmentasi sing ora tau dideleng PPG.
- **Drift fitur**: nglatih ulang algoritma lakune ing data anyar meneng-meneng nemtokake maneh titik pungkasan ing tengah studi.

## Sumber

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
