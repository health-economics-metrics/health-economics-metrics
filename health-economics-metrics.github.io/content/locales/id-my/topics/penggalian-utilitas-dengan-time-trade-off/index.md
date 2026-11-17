# Penggalian Utilitas dengan Time Trade-Off (TTO)

TTO adalah metode standar untuk memperoleh nilai utilitas suatu keadaan kesihatan langsung dari responden, bukan mengarangnya. Ia salah satu metode penggalian — bersama standard gamble dan eksperimen pilihan diskret — yang menghasilkan himpunan nilai (value set) di balik instrumen seperti [EQ-5D](../eq-5d/) dan kerananya di balik sebagian besar perhitungan [QALY](../tahun-kehidupan-yang-disesuaikan-kualiti/) di hilirnya.

## Mengapa ini penting

Setiap bobot utilitas yang masuk ke perhitungan QALY pasti berasal dari suatu tempat. TTO adalah "bagaimana"-nya: untuk keadaan yang dianggap lebih baik daripada kematian, responden ditanya berapa tahun `X` dalam kesihatan sempurna yang setara dengan `T` tahun dalam keadaan terganggu (`X < T`); utilitasnya adalah `X / T`. Untuk keadaan yang dianggap sebagian responden lebih buruk daripada kematian, rumus standar tidak lagi berlaku (ia tidak dapat merepresentasikan utilitas di bawah nol dengan bersih), sehingga dipakai TTO yang diperluas. Insinyur perisian atau analis yang memperlakukan bobot utilitas sebagai masukan yang diberikan, tanpa menyadari bahwa diperlukan protokol penggalian yang tervalidasi untuk memperolehnya, hanya selangkah dari angka yang tak dapat dipertahankannya ketika ditantang.

## Matematika

```
TTO standar (keadaan lebih baik daripada kematian):
  utilitas = waktu_dalam_kesehatan_sempurna / waktu_dalam_keadaan_terganggu

TTO diperluas (keadaan lebih buruk daripada kematian):
  utilitas = -waktu_ditukar_dengan_kematian / (durasi_total - waktu_ditukar_dengan_kematian)
```

`waktu_dalam_kesehatan_sempurna` / `waktu_dalam_keadaan_terganggu` — `X` tahun dalam kesihatan sempurna yang dianggap setara dengan `T` tahun dalam keadaan terganggu. `waktu_ditukar_dengan_kematian` / `durasi_total` — dalam pembingkaian lebih-buruk-daripada-kematian, dari `T` tahun sisa hidup, jumlah tahun `a` yang rela ditukar responden dengan kematian seketika, lebih memilih `T − a` tahun dalam kesihatan sempurna diikuti kematian daripada `T` tahun dalam keadaan yang lebih buruk daripada kematian. Hasilnya negatif, ditambatkan sehingga kematian = 0.

## Contoh yang diselesaikan

**Standar**: responden berada dalam keadaan terganggu selama 10 tahun dan tidak peduli antara itu dan 7 tahun dalam kesihatan sempurna: utilitas = 7 / 10 = **0,7**.

**Lebih buruk daripada kematian**: dari 10 tahun sisa hidup, responden rela menukar 2 tahun dengan kematian seketika — ia lebih memilih 8 tahun dalam kesihatan sempurna diikuti kematian daripada 10 tahun dalam keadaan lebih buruk daripada kematian: utilitas = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Hubungan dengan rekayasa perisian

Poin yang sama yang dihadapi survei DevEx atau keterlibatan ketika meminta orang menilai sesuatu pada skala 0–10 yang belum divalidasi berlaku di sini secara terbalik: TTO ada justru kerana "minta saja orang menilainya" bukan, dengan sendirinya, metode penggalian yang tervalidasi. Sebelum membangun indeks komposit — skor DevEx, indeks keterlibatan, skala kelelahan — di atas angka yang dilaporkan sendiri, tanyakan dengan apa angka itu digali dan apakah metode itu tervalidasi; pertanyaan yang sama yang diajukan para ekonom kesihatan tentang bobot utilitas sebelum masuk ke QALY.

## Jebakan

- **Menggeneralisasi dari satu nilai**: nilai TTO diambil dari *sampel* masyarakat (atau pesakit), bukan dari orang yang perawatannya sedang diputuskan — memakai nilai TTO satu responden seolah dapat digeneralisasi adalah kesalahan sampling.
- **Membingkai keadaan dengan keliru**: rumus TTO standar mengasumsikan keadaan itu jelas lebih baik daripada kematian; menerapkannya pada keadaan yang dianggap sebagian responden lebih buruk daripada kematian tanpa beralih ke pembingkaian yang diperluas diam-diam menghasilkan utilitas yang keliru (positif).
- **Durasi yang tidak sebanding**: nilai TTO yang digali dari sisa hidup `T` berbeda untuk perbandingan lebih-buruk-daripada-kematian tidak dapat langsung dibandingkan tanpa memeriksa bahwa desain studi menjaga `T` tetap.

## Sumber

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
