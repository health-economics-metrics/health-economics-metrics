# Metrik Keterlibatan

Metrik keterlibatan mengukur seberapa banyak pengguna benar-benar menggunakan aplikasi kesehatan: kelengketan DAU/MAU, frekuensi dan durasi sesi, penggunaan fitur. Dalam kesehatan digital, keterlibatan bukanlah kesombongan — ini adalah **dosis**: paparan yang harus dilalui setiap efek klinis.

## Mengapa Ini Penting

Obat yang tetap dalam botol tidak menyembuhkan siapa pun; aplikasi yang tetap tidak-terinstal atau tidak-dibuka adalah mode-kegagalan yang sama. Setiap klaim ekonomi-kesehatan untuk produk kesehatan-konsumen dikalikan melalui keterlibatan — efikasi yang ditunjukkan dalam uji coba diukur pada tingkat penggunaan tertentu, dan nilai dunia-nyata berskala dengan seberapa dekat penggunaan penerapan mencapai tingkat itu. Tolok ukur produk standar: DAU/MAU sekitar **20% dianggap sehat** untuk aplikasi seluler secara umum, >25% luar biasa; aplikasi kesehatan sering berjalan lebih rendah.

## Perhitungan

```
Kelengketan (DAU/MAU) = pengguna aktif harian / pengguna aktif bulanan × 100
Metrik sesi            = sesi/pengguna/periode; durasi rata-rata = total waktu / sesi
Keterlibatan fitur      = pengguna yang melakukan tindakan-kunci / pengguna aktif

Pembingkaian dosis-respons (peningkatan ekonomi-kesehatan):
  efek terealisasi ≈ efek uji coba × f(penggunaan aktual / penggunaan uji coba)
  di mana f berasal dari analisis dosis-respons — lihat konsep "keterlibatan
  efektif" di adherence-and-persistence.md: penggunaan yang cukup
  untuk mencapai hasil yang dimaksud, yang mungkin sederhana dan terbatas
```

## Contoh yang Diselesaikan

Studi pivotal aplikasi tekanan-darah menunjukkan pengurangan sistolik 6 mmHg di antara pengguna yang mencatat ≥4 pembacaan/minggu. Dalam penerapan di 50.000 pengguna terdaftar:

```
MAU 20.000 (40%); dari itu, mencatat ≥4×/minggu: 7.000
Pengguna dosis-efektif = 7.000 / 50.000 = 14% dari basis terdaftar

Efek tingkat-populasi ≈ efek uji coba disampaikan ke 14%, bukan 100%:
model ekonomi apa pun yang mengutip "50.000 pengguna × 6 mmHg" melebih-lebihkan ~7×.
Model jujur: 7.000 × efek penuh + kredit parsial (dari data dosis-respons,
jika ada) untuk 13.000 pengguna sub-ambang.
```

Perkalian ini — melalui corong keterlibatan hingga dosis efektif — adalah tempat tunggal paling umum di mana ekonomi kesehatan-digital menggembung.

## Hubungan dengan Rekayasa Perangkat Lunak

Insinyur memiliki corong keterlibatan, yang menjadikan mereka pemilik variabel *klinis*: gesekan orientasi, strategi notifikasi, waktu muat, dan ketahanan offline semuanya menggerakkan dosis yang disampaikan. Dua implikasi desain: instrumenkan **tindakan yang bermakna-secara-klinis** (pembacaan yang dicatat, pelajaran yang diselesaikan), bukan pembukaan — DAU yang dibangun dari sesi pantulan-notifikasi adalah penipuan-dosis; dan perlakukan target keterlibatan sebagai target *kecukupan*, bukan maksimalisasi — sebuah aplikasi yang mencapai hasilnya dalam 5 menit/minggu dan menyingkir secara klinis ideal dan secara metrik "buruk" (lihat keterlibatan efektif di [kepatuhan dan persistensi](../kepatuhan-dan-persistensi/)). Nilai pekerjaan keterlibatan itu sendiri melalui model efek-populasi di atas: keuntungan 2-poin dalam pangsa dosis-efektif adalah garis QALY yang dapat diukur.

## Jebakan

- **Keterlibatan sebagai hasil**: penggunaan adalah sarana; hasilnya adalah [PROM](../hasil-yang-dilaporkan-pasien/) atau titik akhir klinis.
- **Rata-rata atas penggunaan bimodal**: populasi aplikasi-kesehatan terbagi menjadi pengguna setia dan hantu; rata-rata tidak mendeskripsikan siapa pun — kelompokkan berdasarkan kohort.
- **Inflasi dosis pola-gelap**: rangkaian-beruntun dan notifikasi rasa-bersalah mengangkat metrik dan dapat merugikan populasi cemas yang dilayani aplikasi kesehatan; produk klinis membawa etika klinis.
- **Provenansi tolok-ukur-vendor**: sebagian besar tolok ukur keterlibatan yang dipublikasikan berasal dari vendor analitik, bukan tinjauan sejawat; kalibrasikan terhadap uji coba Anda sendiri.

## Sumber

- App engagement benchmarks. <https://getstream.io/blog/app-retention-guide/>
- Health app KPI guides. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. on effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
