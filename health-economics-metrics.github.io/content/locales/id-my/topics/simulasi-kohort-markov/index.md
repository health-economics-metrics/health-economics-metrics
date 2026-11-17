# Simulasi Kohort Markov

Model kohort Markov adalah teknik pemodelan standar HTA untuk intervensi yang efeknya terungkap selama beberapa periode (siklus), bukan sekaligus. Sebuah kohort hipotetis memulai seluruhnya di satu keadaan kesihatan, dan setiap siklus seperangkat probabilitas transisi tetap memindahkan bagian-bagian kohort di antara keadaan; biaya dan QALY terakumulasi setiap siklus sebanding dengan bagian kohort yang menempati tiap keadaan, lalu didiskontokan ke nilai kini. Setiap insinyur perisian yang memodelkan kasus bisnis kesihatan digital multitahun — di mana pengguna atau pesakit berpindah di antara keadaan seperti "terlibat", "putus", atau "berhenti" seiring waktu — sedang membangun struktur yang sama ini.

## Mengapa ini penting

Sebagian besar keputusan teknologi kesihatan yang nyata bukanlah perbandingan biaya dan hasil satu periode. Kondisi kronis berkembang, kambuh, merespons pengobatan, atau mematikan, selama bertahun-tahun — dan [analisis efektivitas biaya](../analisis-efektivitas-biaya/) satu periode tidak dapat merepresentasikannya. Pengajuan ke NICE, ICER, dan CADTH untuk intervensi penyakit kronis yang dinilai melalui [penilaian teknologi kesihatan](../penilaian-teknologi-kesihatan/) hampir selalu dibangun sebagai model kohort Markov dengan horizon waktu seumur hidup, kerana alternatifnya — memodelkan setiap jalur pesakit individual yang mungkin — tidak dapat dipecahkan pada skala besar. Model Markov kadar kohort menukar sebagian realisme kadar individu (sulit merepresentasikan ingatan tentang keadaan sebelumnya, asal kata "Markov": masa depan hanya bergantung pada keadaan sekarang) dengan model yang transparan, dapat diaudit, dan cukup cepat untuk dijalankan ribuan kali dalam [analisis sensitivitas probabilistik](../analisis-sensitivitas-probabilistik/).

## Matematika

```
Pembaruan kohort dalam satu siklus (vektor baris × matriks transisi):
  keadaan_baru[j] = jumlah_i keadaan[i] * matriks_transisi[i][j]

Biaya satu siklus:
  biaya_siklus = jumlah_s keadaan[s] * biaya_per_siklus[s]

QALY satu siklus:
  qaly_siklus = jumlah_s keadaan[s] * utilitas[s] * panjang_siklus_tahun

Simulasi penuh selama `siklus` siklus, didiskontokan pada `kadar_diskonto`:
  total_biaya_terdiskonto = jumlah_{t=0}^{siklus-1} biaya_siklus(keadaan_t) / (1 + kadar_diskonto)^t
  total_qaly_terdiskonto  = jumlah_{t=0}^{siklus-1} qaly_siklus(keadaan_t) / (1 + kadar_diskonto)^t
  dengan keadaan_0 = distribusi awal, keadaan_{t+1} = majukan_kohort(keadaan_t, matriks_transisi)
```

Mendiskontokan setiap siklus ke nilai kini memakai rumus [diskonto dan preferensi waktu](../diskonto-dan-preferensi-waktu/) persis, diterapkan siklus demi siklus alih-alih tahun demi tahun.

## Contoh yang diselesaikan

**Klinis**: model 2 keadaan — `Sehat` dan `Meninggal` — di mana 10% kohort meninggal setiap siklus dan `Meninggal` adalah keadaan penyerap (probabilitas tetap di keadaan itu 1,0; tanpa kalang ini massa kohort lenyap setelah satu siklus di `Meninggal`). Kohort mulai sepenuhnya `Sehat`, berbiaya £1.000 per siklus selama `Sehat` (£0 bila `Meninggal`), dan memperoleh 0,8 QALY per tahun selama `Sehat`. Mensimulasikan 3 siklus tahunan dengan kadar diskonto 3,5% NICE:

```
Siklus 0: keadaan = [1.00, 0.00] (100% Sehat)
  biaya = £1,000.00, qaly = 0.800, faktor diskonto = 1.000000
  terdiskonto: biaya = £1,000.00, qaly = 0.8000

Siklus 1: keadaan = [0.90, 0.10] (90% Sehat, 10% Meninggal)
  biaya = £900.00, qaly = 0.720, faktor diskonto = 0.966184
  terdiskonto: biaya = £869.57, qaly = 0.6957

Siklus 2: keadaan = [0.81, 0.19] (81% Sehat, 19% Meninggal)
  biaya = £810.00, qaly = 0.648, faktor diskonto = 0.933511
  terdiskonto: biaya = £756.14, qaly = 0.6049

Total biaya terdiskonto ≈ £2,625.71
Total QALY terdiskonto ≈ 2.1006
```

Keadaan tiap siklus adalah keadaan siklus sebelumnya yang dilewatkan melalui matriks transisi — 90% dari 90% yang masih `Sehat` pada siklus 1 tetap `Sehat` pada siklus 2 (0,9 × 0,9 = 0,81), sementara 19% sisanya sudah meninggal (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Perhatikan bahwa kohort tidak pernah mengosongkan keadaan `Sehat` sepenuhnya: dengan kematian tetap 10% per siklus dan tanpa kembali, proporsi `Sehat` menurun secara geometris, tidak mencapai nol dalam jumlah siklus terhingga mana pun.

## Hubungan dengan rekayasa perisian

Untuk melihat bagaimana model HTA multisiklus dipakai dalam penilaian nyata, lihat [penilaian teknologi kesihatan](../penilaian-teknologi-kesihatan/) — kasus acuan yang menetapkan kadar diskonto, sumber utilitas, dan horizon waktu yang harus dipakai model Markov yang diajukan.

Model kohort Markov secara struktural adalah mesin keadaan dengan transisi probabilistik, dijalankan sejumlah tetap tik, mendiskontokan nilai pada setiap tik. Bentuk yang sama mensimulasikan retensi kohort pengguna/transisi keadaannya seiring waktu — lihat [metrik DORA](../metrik-dora/) untuk versi keandalan: "berapa bagian sistem yang berada dalam keadaan terdegradasi pada periode ini dan berapa biayanya". Secara khusus:

- **Pemodelan retensi/churn** adalah model kohort Markov dengan keadaan seperti "aktif", "berisiko", "pergi": matriks transisi bulanan tetap, dijalankan 12 atau 24 siklus bulanan, memberi jumlah pengguna aktif yang diharapkan (dan pendapatan) pada bulan mendatang mana pun, persis seperti `Sehat`/`Meninggal` memberi penyintas yang diharapkan.
- **Keandalan dan ekonomi insiden**: keadaan sistem (sehat, terdegradasi, mati) dapat dimodelkan serupa, dengan "biaya per siklus" untuk kerusakan akibat waktu henti yang terakumulasi selama sistem berada di keadaan terdegradasi/mati — mengubah argumen frekuensi insiden menjadi argumen biaya terdiskonto yang dapat dibandingkan dengan biaya pekerjaan keandalan yang akan mengubah probabilitas transisi.
- **Keadaan penyerap sebagai keadaan akhir**: `Meninggal` dalam model klinis persis adalah "langganan yang dibatalkan" atau "offline permanen" dalam model perisian — keduanya memerlukan probabilitas tetap-di-tempat yang eksplisit sebesar 1,0, jika tidak simulasi diam-diam kehilangan massa.

## Jebakan

- **Probabilitas transisi yang tidak berjumlah 1 per baris.** Baris yang berjumlah lebih atau kurang dari 1 membuat massa kohort diam-diam "bocor" atau "bertambah" tiap siklus — selalu periksa jumlah baris sebelum memercayai keluaran model, kerana struktur model sendiri tidak menandai galat ini.
- **Panjang siklus terlalu kasar untuk dinamika penyakit yang sebenarnya.** Siklus tahunan untuk keadaan yang berubah dalam hitungan minggu meremehkan transisi di tengah siklus; pilih panjang siklus yang pendek dibandingkan seberapa cepat proses yang dimodelkan benar-benar bergerak.
- **Lupa kalang keadaan penyerap.** Keadaan penyerap (kematian, pembatalan permanen) memerlukan probabilitas tetap-di-tempat tepat 1,0. Jika dihilangkan, massa kohort menguap dari keadaan itu setelah satu siklus dan biaya kumulatif atau kehilangan QALY diremehkan.
- **Menganggap model sudah divalidasi kerana ia berjalan.** Model kohort Markov dengan probabilitas transisi yang masuk akal masih bisa keliru secara struktural (keadaan hilang, perilaku penyerap salah); validasi terhadap tolok ukur epidemiologi yang diketahui (mis. apakah kesintasan 5 tahun yang disimulasikan cocok dengan kurva kesintasan terpublikasi) sebelum memercayai keluaran.

## Sumber

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
