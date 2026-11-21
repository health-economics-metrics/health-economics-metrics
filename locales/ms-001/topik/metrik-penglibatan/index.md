# Metrik Penglibatan

Metrik penglibatan mengukur seberapa banyak pengguna benar-benar menggunakan aplikasi kesihatan: kelekatan DAU/MAU, kekerapan dan tempoh sesi, penggunaan ciri. Dalam kesihatan digital, penglibatan bukan kesombongan — ia **dos**: pendedahan yang mesti dilalui oleh sebarang kesan klinikal.

## Mengapa ia penting

Ubat yang kekal dalam botol tidak menyembuhkan sesiapa; aplikasi yang kekal tidak dipasang atau tidak dibuka ialah mod kegagalan sama. Setiap tuntutan ekonomi kesihatan bagi produk kesihatan pengguna mendarab melalui penglibatan — keberkesanan yang ditunjukkan dalam percubaan diukur pada tahap penggunaan tertentu, dan nilai dunia sebenar berskala dengan seberapa hampir penggunaan penggunaan mencapai tahap itu. Penanda aras produk piawai: DAU/MAU sekitar **20% dianggap sihat** bagi aplikasi mudah alih umumnya, >25% cemerlang; aplikasi kesihatan selalunya lebih rendah.

## Matematiknya

```
Kelekatan (DAU/MAU) = pengguna aktif harian / pengguna aktif bulanan × 100
Metrik sesi         = sesi/pengguna/tempoh; purata tempoh = jumlah masa / sesi
Penglibatan ciri    = pengguna melakukan tindakan utama / pengguna aktif

Pembingkaian dos-respons (peningkatan ekonomi kesihatan):
  kesan direalisasi ≈ kesan percubaan × f(penggunaan sebenar / penggunaan percubaan)
  di mana f datang daripada analisis dos-respons — lihat konsep
  "penglibatan berkesan" dalam adherence-and-persistence.md: penggunaan
  yang cukup untuk mencapai hasil dimaksudkan, yang mungkin sederhana dan terhad
```

## Contoh penyelesaian

Kajian utama aplikasi tekanan darah menunjukkan pengurangan sistolik 6 mmHg dalam kalangan pengguna yang merekod ≥4 bacaan/minggu. Dalam penggunaan merentas 50,000 pengguna berdaftar:

```
MAU 20,000 (40%); daripada itu, merekod ≥4×/minggu: 7,000
Pengguna dos-berkesan = 7,000 / 50,000 = 14% asas berdaftar

Kesan peringkat populasi ≈ kesan percubaan disampaikan kepada 14%, bukan 100%:
mana-mana model ekonomi yang memetik "50,000 pengguna × 6 mmHg" melebih-lebihkan ~7×.
Model jujur: 7,000 × kesan penuh + kredit separa (daripada data dos-respons,
jika ada) bagi 13,000 pengguna bawah-ambang.
```

Pendaraban ini — melalui corong penglibatan kepada dos berkesan — ialah tempat tunggal paling lazim ekonomi kesihatan digital dikembungkan.

## Kaitan dengan kejuruteraan perisian

Jurutera memiliki corong penglibatan, menjadikan mereka pemilik pemboleh ubah *klinikal*: geseran orientasi, strategi pemberitahuan, masa muat dan daya tahan luar talian semuanya menggerakkan dos yang disampaikan. Dua implikasi reka bentuk: instrumenkan **tindakan bermakna secara klinikal** (bacaan direkod, pelajaran diselesaikan), bukan pembukaan — DAU yang dibina atas sesi lantunan pemberitahuan ialah penipuan dos; dan anggap sasaran penglibatan sebagai sasaran *kecukupan*, bukan pemaksimuman — aplikasi yang mencapai hasilnya dalam 5 minit/minggu dan memberi laluan ialah ideal secara klinikal dan "lemah" secara metrik (lihat penglibatan berkesan dalam [pematuhan dan ketekunan](../pematuhan-dan-kegigihan/)). Nilaikan kerja penglibatan itu sendiri melalui model kesan-populasi di atas: keuntungan 2 mata dalam bahagian dos-berkesan ialah baris QALY yang boleh dikuantifikasi.

## Perangkap

- **Penglibatan sebagai hasil**: penggunaan ialah cara; hasilnya ialah [PROM](../hasil-dilaporkan-pesakit/) atau titik akhir klinikal.
- **Purata ke atas penggunaan bimodal**: populasi aplikasi kesihatan berpecah kepada pengguna setia dan hantu; min menggambarkan tiada sesiapa — kohortkannya.
- **Inflasi dos corak gelap**: garis berterusan dan pemberitahuan rasa bersalah menaikkan metrik dan boleh memudaratkan populasi cemas yang dilayani aplikasi kesihatan; produk klinikal membawa etika klinikal.
- **Asal usul penanda aras vendor**: kebanyakan penanda aras penglibatan yang diterbitkan datang daripada vendor analitik, bukan semakan rakan sebaya; kalibrasi terhadap percubaan anda sendiri.

## Sumber

- App engagement benchmarks. <https://getstream.io/blog/app-retention-guide/>
- Health app KPI guides. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. on effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
