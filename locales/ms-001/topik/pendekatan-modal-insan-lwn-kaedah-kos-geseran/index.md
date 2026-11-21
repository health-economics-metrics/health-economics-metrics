# Pendekatan Modal Insan lwn Kaedah Kos Geseran

Ini dua kaedah bersaing untuk menilai produktiviti yang hilang — daripada penyakit, hilang upaya atau kematian — dalam kajian kos-penyakit dan kos-manfaat. Pendekatan Modal Insan (HCA) menilai semua output hilang bagi seluruh tempoh ketidakhadiran pada kadar upah; Kaedah Kos Geseran (FCM) menilainya hanya bagi tempoh lebih pendek yang sebenarnya diperlukan majikan untuk memulihkan pengeluaran. Memilih antara keduanya mengubah anggaran kos tidak langsung dua kali ganda atau lebih.

## Mengapa ia penting

Kos tidak langsung (produktiviti) ialah salah satu butiran baris paling dipertikai dalam ekonomi kesihatan tepat kerana dua kaedah piawai itu tidak bersetuju dengan begitu tajam. HCA menganggap setiap hari ketidakhadiran sebagai hari output yang benar-benar hilang oleh ekonomi, dinilai pada upah penuh untuk tempoh penuh — atau, bagi kematian atau hilang upaya kekal, bagi baki hayat bekerja. FCM berhujah bahawa dalam ekonomi dengan pengangguran dan kelonggaran pasaran buruh, kebanyakan ketidakhadiran panjang tidak sebenarnya mengurangkan output negara sebaik majikan melatih pengganti atau mengagihkan semula kerja; hanya "tempoh geseran" — masa untuk memulihkan pengeluaran ke tahap terdahulu — mewakili kerugian sebenar. FCM justeru menghasilkan anggaran kos tidak langsung yang lebih rendah dan lebih konservatif secara sistematik berbanding HCA, dan kedua-dua kaedah bukan nota kaki boleh tukar: ia teori ekonomi berbeza tentang apa maksud "produktiviti hilang." Ini juga mengapa [kes rujukan NICE](../penilaian-teknologi-kesihatan/) mengecualikan kos produktiviti secara lalai, melaporkannya, jika ada, sebagai analisis kepekaan perspektif-masyarakat berasingan dan bukan menggabungkannya ke dalam ICER kes rujukan — lihat [perspektif analisis](../perspektif-analisis/).

## Matematiknya

```
Pendekatan Modal Insan:
kos_HCA = upah_harian × hari_hilang

Kaedah Kos Geseran (dipermudah, bentuk dihadkan-pada-tempoh-geseran):
kos_FCM = upah_harian × min(hari_hilang, hari_tempoh_geseran)

hari_tempoh_geseran = anggaran khusus negara/sektor bagi masa-untuk-memulihkan
                       pengeluaran (secara sejarah ~85 hari dalam panduan
                       pengkosan iMTA Belanda; berbeza mengikut negara dan
                       dianggar semula secara berkala)
```

Seluruh percanggahan antara kedua-dua kaedah terletak dalam `min()`: HCA tidak pernah menghadkan `hari_hilang`, jadi kos terus meningkat sepanjang ketidakhadiran, manakala FCM menghadkan hari yang dikira pada tempoh geseran, tidak kira betapa panjang ketidakhadiran sebenar.

## Contoh penyelesaian

Seorang pekerja tidak bekerja selama `hari_hilang = 180` hari, berpendapatan `upah_harian = £150`.

**Pendekatan Modal Insan**:

```
kos_HCA = 150 × 180 = £27,000
```

**Kaedah Kos Geseran**, menggunakan tempoh geseran `hari_tempoh_geseran = 85` (penanda aras iMTA Belanda sejarah, setakat anggaran semula berkala panduan):

```
kos_FCM = 150 × min(180, 85) = 150 × 85 = £12,750
```

£12,750 FCM kurang separuh daripada £27,000 HCA bagi ketidakhadiran *yang sama* — pilihan kaedah sahaja mengubah kes kos-penyakit secara material, sebelum mana-mana andaian lain disentuh.

## Kaitan dengan kejuruteraan perisian

Ini terpeta terus kepada bagaimana pasukan menilai jurutera yang berhenti:

- **Pengkosan atrisi gaya HCA**: menilai kerugian sebagai gaji penuh jurutera yang pergi selama peranan itu kekal kosong. Ini versi naif kebanyakan model kos atrisi, dan ia melebih-lebihkan kerugian atas sebab sama HCA melebih-lebihkan kehilangan produktiviti — ia mengandaikan kapasiti kosong produktif sepenuhnya sepanjang masa dan tiada apa lain menyerap kelonggaran. Lihat [pengekalan tenaga kerja](../pengekalan-tenaga-kerja/), yang mengkuantifikasi rantaian pengambilan/orientasi/liputan kekosongan yang disuap kaedah ini.
- **Pengkosan atrisi gaya FCM**: menilai kerugian hanya bagi masa sebenar untuk mengisi-dan-meningkat pengganti — "tempoh geseran" kejuruteraan. Ini nombor yang lebih boleh dipertahankan untuk kes perniagaan, sama seperti FCM ialah pilihan lebih konservatif dalam kajian kos-penyakit.
- Disiplin asas sama dengan dalam [kos peluang](../kos-peluang/): nilai sumber yang disesarkan mengikut apa yang benar-benar hilang, bukan tempoh tajuk didarab kadar.

## Perangkap

- **Mencampur HCA dan FCM dalam satu analisis, atau melaporkan satu tanpa mendedahkan pilihan.** Data ketidakhadiran sama boleh menghasilkan perbezaan 2x+ dalam kos dilaporkan bergantung pada kaedah; pilihan mesti dinyatakan, bukan ditanam.
- **Menggunakan HCA untuk kes perspektif-masyarakat tanpa menandainya sebagai analisis kepekaan.** Kes rujukan NICE secara jelas mengecualikan kos produktiviti; anggaran HCA perspektif-masyarakat tergolong dalam analisis senario, bukan ICER tajuk.
- **Menggunakan mana-mana kaedah pada kerja tidak berbayar atau bukan-pasaran (cth. menjaga) tanpa pelarasan.** Kedua-dua kaedah mengandaikan proksi kadar upah bagi nilai, yang tidak berpindah dengan bersih kepada kerja tanpa upah pasaran.

## Sumber

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — topic on productivity costs.
- NICE health technology evaluations manual (PMG36) — reference-case perspective and optional societal-perspective guidance. <https://www.nice.org.uk/process/pmg36>
