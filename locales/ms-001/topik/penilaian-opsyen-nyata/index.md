# Penilaian Opsyen Nyata

Penilaian opsyen nyata menerapkan logik penetapan harga opsyen kewangan kepada keputusan pelaburan nyata (bukan pasaran kewangan) — khususnya, *opsyen untuk mengembangkan* projek kemudian jika ia berjaya, tanpa diwajibkan. Model binomial satu-tempoh yang dipermudah (Cox, Ross, Rubinstein, 1979) menilai fleksibiliti ini secara langsung, menukar "mari hantar kecil dan lihat" daripada gerak hati menjadi nombor yang dihargai.

## Mengapa ia penting

Pengiraan NPV statik menghargai projek sebagai pertaruhan semua-atau-tiada: biayai atau tidak, pada skala hari ini, selama-lamanya. Projek sebenar — terutamanya pelancaran kesihatan digital berfasa — jarang dipertaruhkan begitu: sistem kesihatan boleh membiayai projek perintis kecil, memerhati apa berlaku, dan hanya menyerahkan lebih banyak wang jika ia berjaya. Fleksibiliti itu mempunyai nilai sebenar, dan mengabaikannya secara sistematik menilai rendah pelaburan berperingkat berbanding sekali-pukul, yang betul-betul songsang bagi proses perolehan yang menganugerahkan cadangan berfasa yang kelihatan lebih selamat. Penilaian opsyen nyata menghargai fleksibiliti itu sendiri, supaya cadangan berfasa boleh dibandingkan secara adil dengan alternatif komitmen penuh dan tidak dihukum kerana kelihatan lebih kecil pada baris NPV naif.

## Matematiknya

```
Kebarangkalian neutral-risiko keadaan "naik":
  p = ((1 + kadar_bebas_risiko) − faktor_turun) / (faktor_naik − faktor_turun)

Pulangan pengembangan dalam setiap keadaan (berlantai sifar — mengembang itu pilihan):
  pulangan_naik   = max(nilai_projek × faktor_naik   − kos_pengembangan, 0)
  pulangan_turun  = max(nilai_projek × faktor_turun  − kos_pengembangan, 0)

Nilai opsyen (pulangan jangkaan didiskaun):
  nilai_opsyen = (p × pulangan_naik + (1 − p) × pulangan_turun) / (1 + kadar_bebas_risiko)

NPV dikembangkan = npv_statik + nilai_opsyen
```

Nilai projek sama ada naik (`faktor_naik`) atau turun (`faktor_turun`) menjelang titik keputusan seterusnya. Pengembangan hanya dilaksanakan jika menguntungkan dalam keadaan itu — lantai sifar pada pulangan itulah yang menjadikan ini *opsyen* sebenar dan bukan kewajipan. Untuk menghargai opsyen mengumpul maklumat dahulu, dan bukan opsyen mengembang kemudian, lihat [nilai jangkaan maklumat sempurna](../nilai-jangkaan-maklumat-sempurna/). Untuk kos menunggu membuat keputusan itu, lihat [kos kelewatan](../kos-kelewatan/).

## Contoh penyelesaian

Projek perintis perkhidmatan digital dengan `nilai_projek = £1,000,000`, kemungkinan naik kepada 1.5× atau turun kepada 0.5× menjelang titik keputusan seterusnya, kadar bebas risiko 8%, dan kos pengembangan £600,000:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

pulangan_naik  = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
pulangan_turun = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

Lantai itu penting: opsyen TIDAK akan dilaksanakan jika pasaran mengecewakan
— kos pengembangan £600,000 melebihi £500,000 yang bernilai projek
dalam keadaan turun.

nilai_opsyen = (0.58 × 900,000 + 0.42 × 0) / 1.08
             = 522,000 / 1.08
             ≈ £483,333.33
```

Menambah nilai opsyen kepada garis asas NPV-statik £200,000: NPV dikembangkan = 200,000 + 483,333.33 ≈ **£683,333.33**. Melaporkan NPV statik £200,000 sahaja, tanpa nilai opsyen ini, akan memperkecilkan nilai sebenar projek berfasa lebih daripada separuh.

## Kaitan dengan kejuruteraan perisian

Ini versi formal "hantar versi minimum sekarang, kekalkan opsyen melabur lagi jika ia meletup" — relevan terus kepada pelancaran produk kesihatan digital berfasa, selari struktur dengan pembingkaian penjujukan-di-bawah-ketidakpastian [kos kelewatan](../kos-kelewatan/) dan [WSJF/CD3](../wsjf-dan-cd3/), dan melengkapi [nilai jangkaan maklumat sempurna](../nilai-jangkaan-maklumat-sempurna/) dan [nilai jangkaan maklumat sampel](../nilai-jangkaan-maklumat-sampel/) — ketiga-tiganya menghargai fleksibiliti atau maklumat di bawah ketidakpastian, dari sudut berbeza.

## Perangkap

- **Meminjam penetapan harga neutral-risiko tanpa andaian aset-diniagakan yang dibergantunginya**: model opsyen nyata meminjam kebarangkalian neutral-risiko daripada penetapan harga opsyen kewangan, yang mengandaikan nilai asas ialah aset *diniagakan* — bagi projek nyata yang benar-benar tidak diniagakan ini kemudahan pemodelan, bukan fakta pasaran literal.
- **Menganggap `faktor_naik`/`faktor_turun` sebagai parameter bebas**: input naik/turun binomial itu sendiri andaian yang memerlukan justifikasi, bukan parameter bebas yang dipilih untuk menghasilkan jawapan dikehendaki.
- **Melaporkan nilai opsyen sahaja**: nilai opsyen nyata *tambahan* kepada NPV statik projek tersendiri — kesilapan lazim ialah melaporkan nilai opsyen sahaja dan menggugurkan kes asas, yang melebih-lebihkan kes jika NPV statik negatif dan memperkecilkannya (seperti dalam contoh penyelesaian di atas) apabila NPV statik ditinggalkan sepenuhnya.

## Sumber

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — ties real options directly to a health-economics decision context. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
