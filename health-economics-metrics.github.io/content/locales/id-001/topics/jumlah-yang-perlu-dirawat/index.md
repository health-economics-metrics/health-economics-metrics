# Jumlah yang Perlu Dirawat (NNT)

NNT adalah jumlah pasien yang harus menerima sebuah intervensi agar **satu** pasien tambahan mendapat manfaat, selama jangka-waktu yang dinyatakan. Ia mengubah pengurangan-risiko persentase — yang menyesatkan — menjadi unit usaha-per-manfaat yang dapat dinalar siapa pun.

## Mengapa Ini Penting

"Mengurangi serangan jantung sebesar 25%!" terdengar meyakinkan. Jika risiko dasar adalah 4% selama 5 tahun, pengurangan absolutnya adalah 1 poin-persentase, sehingga **100 orang harus mengonsumsi obat selama 5 tahun agar 1 mendapat manfaat** — dan semua 100 orang membayar biaya dan efek samping. NNT adalah penawar untuk pemasaran risiko-relatif, itulah sebabnya kedokteran berbasis-bukti memimpin dengannya. Statin untuk pencegahan primer: NNT ≈ 50–100 selama 5 tahun per serangan-jantung-yang-dihindari. Cerminannya, **NNH** (jumlah yang perlu untuk merugikan), menghitung berapa banyak yang dirawat per orang yang dirugikan.

## Perhitungan

```
ARR = tingkat peristiwa kontrol − tingkat peristiwa perawatan   (pengurangan risiko absolut)
NNT = 1 / ARR

NNH = 1 / (tingkat bahaya_perawatan − tingkat bahaya_kontrol)

Jembatan ekonomi:
biaya per peristiwa dicegah = NNT × biaya kursus perawatan
```

Selalu nyatakan jangka-waktu dan populasi-dasar — NNT tidak berarti apa-apa tanpa keduanya.

## Contoh yang Diselesaikan

Sistem prediksi-jatuh di rumah sakit menandai pasien berisiko-tinggi untuk intervensi (sensor tempat-tidur, tinjauan, pengawasan). Uji coba: jatuh-dengan-cedera turun dari 3,2% menjadi 2,4% dari admisi.

```
ARR = 0,8 poin-persentase → NNT = 1/0,008 = 125
   (125 pasien harus mendapatkan paket intervensi untuk mencegah 1 jatuh-dengan-cedera)

Biaya intervensi ≈ £40/pasien → biaya per jatuh dicegah = 125 × 40 = £5.000
Biaya jatuh-rawat-inap-dengan-cedera (masa-tinggal ekstra, imaging, litigasi) ≈ £12.000
Bersih: pencegahan membayar ~2,4:1 — dan keuntungan QALY ada di atasnya.
```

Perhatikan bagaimana NNT menjaga klaim jujur: "mengurangi jatuh 25%" dan "mencegah satu jatuh per 125 pasien yang dirawat" adalah hasil yang sama, meyakinkan secara berbeda.

## Hubungan dengan Rekayasa Perangkat Lunak

NNT adalah unit yang tepat untuk gerbang atau pemeriksaan apa pun yang bertindak pada banyak item untuk menangkap sedikit: **"jumlah PR yang harus melewati gerbang tinjauan-AI untuk menangkap satu cacat menuju-produksi."** Jika gerbang meninjau 400 PR per satu tangkapan nyata (NNT = 400) pada 4 menit perhatian pengembang masing-masing, satu tangkapan berbiaya ~27 jam-pengembang — sekarang bandingkan itu dengan biaya insiden yang dicegahnya. NNH memetakan ke positif-palsu: berapa banyak PR per tanda *palsu*, dan berapa biaya masing-masing dalam perhatian dan kepercayaan? Perkakas gaya-skrining (linter, pemindai keamanan, deteksi anomali) harus dikirim dengan aritmatika NNT/NNH — lihat [ekonomi skrining](../ekonomi-skrining/) untuk mengapa prevalensi rendah membuat angka-angka ini brutal.

## Jebakan

- **Tidak ada jangka-waktu**: "NNT = 50" tidak berarti apa-apa; "NNT = 50 selama 5 tahun" adalah klaim.
- **Transplantasi risiko-dasar**: NNT yang dihitung dalam populasi uji-coba berisiko-tinggi runtuh dalam populasi penerapan berisiko-rendah.
- **Mengabaikan NNH** — gerbang dengan NNT 400 dan NNH 3 adalah generator gangguan, bukan sistem keselamatan.

## Sumber

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
