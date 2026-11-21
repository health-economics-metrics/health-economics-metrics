# Ekonomi Pencegahan

Ekonomi campur tangan sebelum penyakit berlaku atau berkembang. Dapatan utamanya berlawanan intuisi: **kebanyakan pencegahan tidak menjimatkan wang** — ia membeli kesihatan pada harga yang baik. Analisis NEJM mercu tanda Cohen, Neumann dan Weinstein mendapati kurang 20% intervensi pencegahan yang menjimatkan kos bersih; selebihnya kos-efektif paling baik.

## Mengapa ia penting

"Pencegahan menjimatkan wang" ialah tuntutan palsu paling banyak diulang dalam dasar kesihatan, dan kes perniagaan yang dibina atasnya dirobohkan oleh ahli ekonomi kesihatan. Struktur jujur: pencegahan berkos wang sekarang (menyaring seluruh populasi, merawat faktor risiko pada orang yang tidak akan jatuh sakit) dan memulangkan kesihatan kemudian — lazimnya pada kos *baik* setiap QALY, kadang-kadang pada penjimatan, kadang-kadang pada harga yang teruk. Mengetahui rejim mana anda berada ialah analisisnya. Perbezaan ini penting secara komersial: produk pencegahan yang dijual sebagai "menjimatkan wang NHS" mengundang audit yang akan gagal; dijual sebagai "membeli QALY pada £4,000" ia boleh menang atas fakta sama. Lihat [intervensi lebih awal](../intervensi-lebih-awal/) untuk versi dalam-laluan. Sebelum mengos program pencegahan, [pecahan boleh dikaitkan populasi](../pecahan-boleh-dikaitkan-populasi/) menjawab soalan saiz dahulu — berapa banyak beban penyakit sasaran yang boleh dihapuskan secara munasabah oleh faktor risiko yang ditangani program.

## Matematiknya

```
Kos bersih pencegahan (setiap orang) =
    kos intervensi × semua yang dirawat
  − kos hiliran dielakkan × segelintir yang akan berkembang
  (kedua-duanya didiskaun — kos dielakkan bertahun jauhnya; lihat
   discounting-and-time-preference.md)

Menjimatkan-kos memerlukan: kos intervensi < P(perkembangan) × kos dielakkan × faktor diskaun
Kos-efektif hanya memerlukan: kos bersih / QALY diperoleh < ambang
```

Paradoks pencegahan: kos intervensi didarab merentas seluruh populasi; manfaat terkumpul hanya kepada segelintir kontrafaktual.

## Contoh penyelesaian

Aplikasi pengurusan hipertensi ditawarkan kepada 100,000 orang dewasa berisiko, £25/orang/tahun. Dalam 10 tahun ia mencegah 400 strok (masing-masing berkos £45,000 terdiskaun, dan kehilangan 3 QALY).

```
Kos:      100,000 × £25 × 10 thn (didiskaun ≈ ×8.3) ≈ £20.8J
Offset:   400 × £45,000 = £18.0J
Kos bersih ≈ £2.8J — BUKAN menjimatkan-kos

QALY diperoleh = 400 × 3 = 1,200
Kos setiap QALY = 2.8J / 1,200 ≈ £2,300/QALY — kos-efektif cemerlang
```

Program sama, kedua-dua kebenaran: ia rugi £2.8J tunai dan membeli kesihatan pada sepersepuluh ambang NICE. Biayai atas nombor kedua; jangan janjikan yang pertama.

## Kaitan dengan kejuruteraan perisian

Kualiti anjak-kiri ialah ekonomi pencegahan, dengan amaran termasuk. Semakan, ujian dan analisis statik mengenakan kos kepada *setiap* perubahan untuk menangkap isu dalam segelintir yang akan berkembang menjadi insiden pengeluaran. Lengkung kos-kecacatan (10–100× mengikut peringkat) memainkan peranan kos strok — dan kesimpulan jujur mencerminkan kesihatan: anjak-kiri biasanya kos-*efektif*, bukan menjimatkan-kos secara automatik, kerana kebanyakan isu yang ditanda tidak akan menjadi insiden (masalah segelintir kontrafaktual). Kira: jumlah kos get setiap tempoh lwn insiden sebenarnya dielakkan × kos insiden — struktur contoh penyelesaian sama, dengan [NNT](../bilangan-perlu-dirawat/) sebagai unit setiap tangkapan.

## Perangkap

- **Menuntut penjimatan kos apabila bukti menyokong kos-keberkesanan** — kesilapan penentu advokasi pencegahan dalam kedua-dua domain.
- **Offset masa depan tidak didiskaun**: manfaat 15 tahun jauhnya pada nilai muka.
- **Mengabaikan kos pendiagnosisan-lebih/perawatan-lebih**: pencegahan juga menemui pseudo-penyakit — lihat [ekonomi saringan](../ekonomi-saringan/).

## Sumber

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
