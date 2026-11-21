# Perbandingan ICER Merentas Mata Wang

Membandingkan [ICER](../nisbah-kos-keberkesanan-inkremental/) yang dikira dalam mata wang satu negara dengan [ambang kesanggupan membayar](../ambang-kesanggupan-membayar/) negara lain — atau menggabungkan data kos yang dikumpul merentas percubaan pelbagai negara — memerlukan langkah penukaran mata wang yang jelas dan boleh diaudit. Jika kaedah penukaran salah, bukti asas yang sama boleh membalikkan keputusan penerimaan, walaupun tiada apa pun tentang data klinikal atau kos berubah.

## Mengapa ia penting

Panduan kaedah ISPOR untuk percubaan klinikal pelbagai negara (Willke et al., *Health Economics*, 1998) mengesyorkan menukar kos sumber menggunakan **pariti kuasa beli (PPP)** — bukan kadar pertukaran pasaran — apabila membandingkan nilai ekonomi sebenar sumber merentas negara, dan mengekalkan kadar pertukaran asing pasaran untuk apa yang sebenarnya digunakan: memodelkan aliran pembayaran tunai merentas sempadan yang sebenar. Mengelirukan kedua-duanya ialah salah satu ralat metodologi HTA pelbagai negara yang paling lazim, tepat kerana keduanya kelihatan seperti "kadar pertukaran" kepada sesiapa yang tidak membaca panduan, dan hamparan tidak menghalang anda melakukannya dengan salah.

## Matematiknya

```
icer_dalam_mata_wang_tempatan = tukar(icer_dalam_mata_wang_sumber, faktor_penukaran)

faktor_penukaran mestilah:
  faktor penukaran PPP   — untuk membandingkan nilai ekonomi sebenar sumber
                            merentas negara (disyorkan ISPOR bagi
                            CEA pelbagai negara)
  kadar FX pasaran       — hanya untuk pembayaran tunai merentas sempadan sebenar

terima jika icer_dalam_mata_wang_tempatan < ambang_tempatan
```

Peraturan keputusan itu sendiri ialah [peraturan ambang ICER](../ambang-kesanggupan-membayar/) biasa — `terima jika ICER < λ` — soalan metodologi yang ditangani topik ini sepenuhnya tentang *faktor penukaran mana* yang menghasilkan angka `icer_dalam_mata_wang_tempatan` yang dikenakan peraturan itu.

## Contoh penyelesaian

ICER ubat daripada percubaan AS ialah $45,000/QALY. Sebuah negara pengimport hipotetikal menetapkan ambangnya sendiri yang ilustratif pada £34,000/QALY (angka khusus negara hipotetikal untuk contoh ini sahaja — ambang sebenar berbeza mengikut negara dan berubah mengikut masa, dan mesti sentiasa bersumber dan bertarikh).

**Menggunakan faktor penukaran PPP 0.72** (ilustratif, untuk contoh penyelesaian ini sahaja): $45,000 × 0.72 = £32,400/QALY. £32,400 < £34,000 → **terima**.

**Menggunakan kadar pertukaran pasaran 0.79** sebaliknya (ilustratif): $45,000 × 0.79 = £35,550/QALY. £35,550 > £34,000 → **tolak**.

ICER $45,000/QALY asas yang sama menghasilkan keputusan terima di bawah penukaran PPP dan keputusan tolak di bawah penukaran FX pasaran. Ini ilustrasi konkrit mengapa panduan ISPOR menganggap pilihan faktor penukaran sebagai berimpak metodologi — bukan butiran pembundaran, dan bukan sesuatu untuk dibiarkan tersirat dalam formula hamparan yang tiada siapa semak dua kali.

## Kaitan dengan kejuruteraan perisian

Ini cermin ekonomi kesihatan bagi domain kejuruteraan yang terkenal: ketepatan penetapan harga berbilang mata wang i18n/l10n dalam perisian komersial, di mana halaman harga SaaS tidak boleh sekali-kali membandingkan jumlah `$` dengan harga `£` secara senyap. Jaminan peringkat jenis yang diberikan jenis `Money` yang dibina dengan baik — kaedah perbandingan yang enggan membandingkan mata wang tidak sepadan, memaksa langkah penukaran yang jelas dahulu — ialah selari kejuruteraan perisian langsung bagi isu metodologi ekonomi kesihatan di sini: jangan bandingkan angka tidak ditukar merentas mata wang, dan jangan biarkan langkah penukaran tersirat atau tidak didokumenkan.

## Perangkap

- **Membandingkan jumlah dalam mata wang berbeza secara senyap**: kerja HTA hamparan ad hoc yang menolak atau membandingkan angka dolar dan paun tanpa langkah penukaran dahulu — kelas pepijat yang ditangkap jenis `Money` sedar mata wang yang sebenar secara reka bentuk dan bukan dibiarkan sebagai ralat senyap.
- **Mengelirukan kadar pertukaran pasaran dengan PPP**: ralat kaedah HTA pelbagai negara paling lazim menurut panduan ISPOR — kedua-dua nombor boleh berbeza ketara dan menjawab soalan berbeza (nilai ekonomi sebenar lwn aliran tunai sebenar).
- **Tidak menarikhkan kadar pertukaran atau indeks PPP yang digunakan**: kedua-duanya bergerak mengikut masa, jadi sebarang faktor penukaran yang dipetik mesti bertarikh sama seperti repositori ini menarikhkan angka penanda aras lain (nilai karbon Green Book, nilai kematian dicegah, dan sebagainya).

## Sumber

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
