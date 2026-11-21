# Analisis Kos-Utiliti (CUA)

CUA ialah analisis kos-keberkesanan dengan **hasil generik berpemberat keutamaan** — hampir selalu [QALY](../tahun-hayat-terlaras-kualiti/) (atau [DALY](../tahun-hayat-terlaras-hilang-upaya/) dielakkan). Kerana unit hasilnya universal, CUA boleh membandingkan intervensi merentas penyakit yang sama sekali berbeza.

## Mengapa ia penting

Perkhidmatan kesihatan kebangsaan mesti memilih antara ubat kanser, aplikasi kesihatan mental dan robot pembedahan daripada satu bajet. Unit semula jadi tidak dapat membandingkannya; QALY boleh. CUA justeru kaedah kes rujukan di NICE dan kebanyakan badan HTA: outputnya — kos bagi setiap QALY, dinilai berbanding [ambang](../ambang-kesanggupan-membayar/) — yang paling hampir dengan kadar pertukaran universal dalam dasar kesihatan. Jika anda mahu perisian anda dibiayai *menggantikan sesuatu yang lain*, CUA ialah gelanggangnya.

## Matematiknya

```
ICUR = ΔKos / ΔQALY      (ICER dengan QALY sebagai unit kesan)

ΔQALY = Σ (tempoh_i × utiliti_i)_baharu − Σ (tempoh_i × utiliti_i)_lama
```

Utiliti daripada instrumen yang disahkan ([EQ-5D](../eq-5d/)); kos dan QALY kedua-duanya [didiskaun](../diskaun-dan-keutamaan-masa/) pada 3.5% (kes rujukan NICE); ketidakpastian melalui [PSA](../analisis-kepekaan-probabilistik/).

## Contoh penyelesaian

Aplikasi CBT untuk kebimbangan sederhana lwn senarai menunggu terapi bersemuka, bagi setiap pesakit:

```
Kos:    lesen aplikasi + sokongan     £250
        terapi disesarkan             −£680   (40% pengguna tidak lagi memerlukannya)
        ΔC = 250 − 680 = −£430 (menjimatkan wang)

QALY:   6 bulan pada utiliti 0.76 dan bukan 0.68 semasa menunggu
        ΔE = 0.5 × (0.76 − 0.68) = +0.04 QALY
```

ΔC < 0 dan ΔE > 0: aplikasi **mendominasi** — lebih baik dan lebih murah, tiada nisbah diperlukan. Sekiranya andaian penyesaran terapi hanya 10%, ΔC = 250 − 170 = +£80, dan ICUR = 80 / 0.04 = **£2,000/QALY** — masih jauh di bawah £20,000. Kes bertahan walaupun andaian utama dipotong: itulah rupa CUA yang teguh (dan [gambar rajah tornado](../analisis-kepekaan/) membuktikannya).

## Kaitan dengan kejuruteraan perisian

Idea mendalam CUA — *satu unit komposit berpemberat keutamaan untuk membandingkan perkara tidak serupa* — ialah corak untuk membandingkan pelaburan kejuruteraan tidak serupa (keselamatan lwn pengalaman pembangun lwn kebolehpercayaan). Pilihan jujur ialah unit komposit yang boleh dipertahankan (jarang) atau [jadual kos-akibat](../analisis-kos-akibat/) yang eksplisit (lazim). Yang diberi amaran CUA ialah komposit palsu: "skor impak" berpemberat yang pemberatnya ditala selepas kejadian untuk memastikan pilihan pilihan menang. Ekonomi kesihatan menghabiskan beberapa dekad menyeragamkan pengelisitan utiliti tepat supaya pemberat mendahului perbandingan.

## Perangkap

- **Keuntungan utiliti di bawah kepekaan instrumen** (lihat perbezaan penting klinikal minimum dalam [hasil dilaporkan pesakit](../hasil-dilaporkan-pesakit/)) — ΔE kecil darab populasi besar ialah helah pencucian klasik.
- **Penyesaran penjagaan pembanding yang tertinggal** — sebutan kos terbesar bagi produk digital selalunya apa yang digantikannya.
- **Memetakan skor bukan-keutamaan kepada utiliti** dengan jadual silang yang tidak disahkan.

## Sumber

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
