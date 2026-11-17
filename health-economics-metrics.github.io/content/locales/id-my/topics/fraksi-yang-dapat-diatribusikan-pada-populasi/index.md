# Fraksi yang Dapat Diatribusikan pada Populasi (PAF)

PAF adalah proporsi beban penyakit atau hasil dalam suatu populasi yang dapat diatribusikan pada paparan terhadap faktor risiko tertentu — proporsi yang akan hilang jika paparan itu dihapuskan sepenuhnya. Ia mengubah "faktor risiko ini melipatgandakan peluang Anda" menjadi angka kadar populasi yang benar-benar dapat dijadikan dasar perencanaan: seberapa layak paparan ini dilawan dari segi jumlah kasus dan biaya.

## Mengapa ini penting

Levin memperkenalkan PAF pada 1953 untuk menjawab pertanyaan yang sempit dan spesifik: jika tak seorang pun merokok, berapa banyak kanker paru yang akan hilang? Aritmetika yang sama kini menentukan skala perencanaan pencegahan nasional di mana-mana, dari strategi tembakau dan obesitas hingga peringkat faktor risiko dalam studi Global Burden of Disease WHO, kerana risiko relatif saja berkata sangat sedikit tentang dampak — faktor risiko dapat melipatgandakan peluang peristiwa langka dan nyaris tak menggeser beban penyakit populasi, atau sedikit menaikkan peluang peristiwa umum namun tetap menjelaskan sebagian besar kasus. PAF mengubah "faktor risiko X berbahaya" menjadi "menghilangkan faktor risiko X akan mencegah sekian kasus per tahun", angka yang sebenarnya dibutuhkan kasus bisnis program pencegahan. Lihat [ekonomi pencegahan](../ekonomi-pencegahan/) untuk menghitung biaya bertindak berdasarkan angka itu setelah ada.

## Matematika

```
PAF = prevalensi_paparan × (risiko_relatif − 1) / (1 + prevalensi_paparan × (risiko_relatif − 1))

prevalensi_paparan = proporsi populasi yang terpapar faktor risiko (0–1)
risiko_relatif     = risiko hasil pada yang terpapar dibanding tidak terpapar (mis. 2,5 = 2,5×)

kasus_teratribusi = total_kasus × PAF
```

PAF naik baik dengan prevalensi paparan maupun risiko relatif — risiko relatif yang meningkat sedang (katakanlah 1,5×) yang terkait dengan paparan sangat umum dapat menghasilkan PAF lebih besar daripada risiko relatif dramatis (katakanlah 5×) yang terkait dengan paparan langka. Itulah seluruh alasan mengapa ia ada sebagai angka tersendiri di samping risiko relatif.

## Contoh yang diselesaikan

Sebuah faktor risiko ada pada 30% populasi (`prevalensi_paparan = 0,3`) dan melipatgandakan risiko hasil 2,5 kali (`risiko_relatif = 2,5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31,0%)

Dengan 1.000 kasus per tahun dalam populasi:
kasus_teratribusi = 1,000 × 0.3103 ≈ 310 kasus per tahun
```

Sedikit kurang dari sepertiga beban tahunan hasil ini dapat diatribusikan pada paparan — menghilangkannya sepenuhnya (batas teoretis; tidak ada intervensi nyata yang menghilangkan 100% paparan) akan mencegah sekitar 310 dari setiap 1.000 kasus setiap tahun.

## Hubungan dengan rekayasa perisian

PAF adalah versi epidemiologis dari pertanyaan "berapa bagian volume insiden kita yang dapat diatribusikan pada akar masalah ini?" — jenis pertanyaan yang sama yang diajukan tim ketika mengukur kelas tertentu dari penerapan atau dependensi terhadap himpunan insiden produksi, alih-alih memperlakukan setiap insiden sebagai sama layaknya diperbaiki. Kategori akar masalah yang muncul di sebagian besar penerapan dan hanya memiliki risiko relatif sedang untuk menimbulkan insiden dapat mengungguli kategori langka berisiko relatif tinggi dalam hal ke mana upaya rekayasa diarahkan lebih dulu — persis pengamatan PAF, dikemas ulang.

## Jebakan

- **Menjumlahkan PAF lintas faktor risiko**: PAF dari beberapa faktor yang memengaruhi hasil yang sama tidak berjumlah 100% — bersama-sama mereka dapat melampauinya, kerana faktor saling berinteraksi dan berbagi jalur kausal. Perlakukan setiap PAF sebagai "jika hanya faktor ini yang dihilangkan", jangan pernah sebagai pembagian risiko total.
- **Memindahkan risiko relatif antarpopulasi**: risiko relatif yang diestimasi pada satu populasi (prevalensi paparan dasar berbeda, perancu berbeda) memberi PAF yang menyesatkan bila diterapkan pada prevalensi paparan populasi lain.
- **Mengacaukan PAF dengan risiko teratribusi pada yang terpapar**: PAF berada pada kadar populasi dan bergantung pada prevalensi paparan; risiko teratribusi pada yang terpapar berada pada kadar individu dan tidak bergantung padanya. Keduanya menjawab pertanyaan berbeda — jangan memakai yang satu untuk menjawab pertanyaan yang lain.

## Sumber

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
