# Tahun Hayat Diperoleh (LYG)

Tahun hayat diperoleh ialah kemandirian tambahan yang boleh dikaitkan dengan intervensi, tanpa pelarasan kualiti: kawasan antara lengkung kemandirian dengan dan tanpanya. Tahun hayat diperoleh nilai-setara (evLYG) ialah varian moden yang mengkredit semua pemanjangan hayat secara sama rata.

## Mengapa ia penting

LYG ialah hasil kesihatan paling mentah: berapa lama lagi orang hidup? Ia penting apabila data kualiti tiada, apabila membandingkan dengan khalayak ragu-ragu QALY, dan dalam onkologi di mana lengkung kemandirian ialah output percubaan utama. **evLYG** (digunakan institut ICER AS bersama kos/QALY) wujud atas sebab etika: QALY menilai setahun hayat dipanjangkan mengikut utiliti pesakit, jadi memanjangkan hayat seseorang yang hilang upaya "dikira kurang"; evLYG menilai setiap tahun dipanjangkan pada utiliti tetap, menghapuskan diskriminasi itu.

## Matematiknya

```
LYG = purata kemandirian_baharu − purata kemandirian_pembanding
    = kawasan antara lengkung kemandirian (terhad kepada ufuk masa)

Pandangan QALY tentang pemanjangan hayat:  pemanjangan × utiliti pesakit
Pandangan evLYG tentang pemanjangan hayat: pemanjangan × utiliti tetap (ICER menggunakan ~0.851,
                                           purata utiliti populasi AS)
```

Kedua-duanya [didiskaun](../diskaun-dan-keutamaan-masa/) dalam model ekonomi.

## Contoh penyelesaian

Algoritma amaran awal sepsis di hospital: pemodelan menunjukkan antibiotik lebih awal mencegah 12 kematian/tahun; purata umur pesakit itu memberi 8 tahun hayat berbaki setiap seorang pada utiliti 0.7.

```
LYG   = 12 × 8            = 96 tahun hayat/tahun
QALY  = 96 × 0.7          = 67.2
evLYG = 96 × 0.851        = 81.7
```

Pada £20,000 bagi setiap QALY, pembingkaian QALY menilai kemandirian itu pada £1.34J/tahun; pembingkaian evLYG pada £1.63J. Jurang itu tepat penghakiman etika tentang sama ada tahun hayat pada utiliti 0.7 bernilai 70% daripada tahun "penuh." Dosier serius melaporkan kedua-duanya.

## Kaitan dengan kejuruteraan perisian

- Analisis kemandirian ialah kit alat bersama: lengkung Kaplan-Meier bagi pesakit dan bagi *perkhidmatan* (masa-ke-kegagalan, masa-ke-churn) ialah matematik sama. "Tahun-perkhidmatan diperoleh" daripada pelaburan kebolehpercayaan = kawasan antara lengkung kemandirian dengan/tanpa sistem — pembingkaian lebih jujur daripada tuntutan MTTF titik.
- evLYG membawa amaran reka bentuk metrik untuk kejuruteraan juga: mana-mana metrik produktiviti yang memberi pemberat output dengan faktor "kualiti pasukan" akan secara sistematik menilai rendah penambahbaikan untuk pasukan yang terkekang atau bergelut — kadang-kadang anda mahu varian nilai-setara dengan sengaja.

## Perangkap

- **Kemandirian median lwn min**: model ekonomi memerlukan min (kawasan bawah lengkung); percubaan sering menjadikan median tajuk. Ia berbeza banyak dalam taburan condong.
- **Ekstrapolasi melangkaui susulan percubaan** mendominasi LYG termodel dalam penyakit kronik — nyatakan model ekstrapolasi dan ujinya dalam [analisis kepekaan](../analisis-kepekaan/).
- **Menuntut kematian dicegah daripada data sebelum/selepas pemerhatian** tanpa melaras campuran kes dan aliran sekular.

## Sumber

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
