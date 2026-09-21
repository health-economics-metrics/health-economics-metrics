# Tahun Kehidupan yang Diperoleh (LYG)

Tahun kehidupan yang diperoleh adalah kelangsungan-hidup tambahan yang dapat diatribusikan pada sebuah intervensi, tanpa penyesuaian kualitas: area antara kurva kelangsungan-hidup dengan dan tanpanya. Tahun-kehidupan-diperoleh-nilai-setara (evLYG) adalah varian modern yang mengkreditkan semua perpanjangan-hidup secara setara.

## Mengapa Ini Penting

LYG adalah hasil kesehatan paling mentah: berapa lama lagi orang hidup? Ini penting ketika data kualitas hilang, ketika membandingkan terhadap audiens skeptis-QALY, dan dalam onkologi di mana kurva kelangsungan-hidup adalah output uji-coba utama. **evLYG** (digunakan institut ICER AS bersama biaya/QALY) ada karena alasan etis: QALY menilai satu tahun kehidupan yang diperpanjang berdasarkan utilitas pasien, sehingga memperpanjang hidup seseorang dengan disabilitas "dihitung lebih sedikit" — evLYG menilai setiap tahun yang diperpanjang pada utilitas tetap, menghilangkan diskriminasi itu.

## Perhitungan

```
LYG = kelangsungan-hidup rata-rata_baru − kelangsungan-hidup rata-rata_pembanding
    = area antara kurva kelangsungan-hidup (terbatas pada horizon waktu)

Pandangan QALY dari perpanjangan-hidup:  perpanjangan × utilitas pasien
Pandangan evLYG dari perpanjangan-hidup: perpanjangan × utilitas tetap (ICER menggunakan ~0,851,
                              rata-rata utilitas populasi AS)
```

Keduanya [didiskon](../diskonto-dan-preferensi-waktu/) dalam model ekonomi.

## Contoh yang Diselesaikan

Algoritma peringatan-dini sepsis di sebuah rumah sakit: pemodelan menunjukkan antibiotik lebih awal mencegah 12 kematian/tahun; usia rata-rata pasien-pasien tersebut memberikan 8 tahun-kehidupan tersisa masing-masing pada utilitas 0,7.

```
LYG   = 12 × 8            = 96 tahun-kehidupan/tahun
QALY  = 96 × 0,7          = 67,2
evLYG = 96 × 0,851        = 81,7
```

Pada £20.000 per QALY, pembingkaian QALY menilai kelangsungan-hidup pada £1,34 juta/tahun; pembingkaian evLYG pada £1,63 juta. Kesenjangannya persis penilaian etis tentang apakah satu tahun-kehidupan pada utilitas 0,7 bernilai 70% dari yang "penuh". Dosier yang serius melaporkan keduanya.

## Hubungan dengan Rekayasa Perangkat Lunak

- Analisis kelangsungan-hidup adalah toolkit bersama: kurva Kaplan-Meier untuk pasien dan untuk *layanan* (waktu-hingga-kegagalan, waktu-hingga-churn) adalah matematika yang sama. "Tahun-layanan diperoleh" dari investasi keandalan = area antara kurva kelangsungan-hidup dengan/tanpa sistem — pembingkaian yang lebih jujur daripada klaim MTTF titik.
- evLYG juga membawa peringatan desain-metrik untuk rekayasa: metrik produktivitas apa pun yang membobotkan output dengan faktor "kualitas-tim" akan secara sistematis meremehkan perbaikan untuk tim yang terbatas atau berjuang — kadang Anda sengaja menginginkan varian nilai-setara.

## Jebakan

- **Kelangsungan-hidup median vs rata-rata**: model ekonomi membutuhkan rata-rata (area di bawah kurva); uji coba sering menonjolkan median. Mereka berbeda banyak dalam distribusi miring.
- **Ekstrapolasi melampaui tindak-lanjut uji-coba** mendominasi LYG yang dimodelkan dalam penyakit kronis — nyatakan model ekstrapolasi dan ujilah dalam [analisis sensitivitas](../analisis-sensitivitas/).
- **Mengklaim kematian yang dicegah dari data observasional sebelum/sesudah** tanpa menyesuaikan untuk campuran-kasus dan tren sekuler.

## Sumber

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
