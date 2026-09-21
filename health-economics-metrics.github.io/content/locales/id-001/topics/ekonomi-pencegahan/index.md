# Ekonomi Pencegahan

Ekonomi intervensi sebelum penyakit terjadi atau berkembang. Temuan utamanya kontraintuitif: **sebagian besar pencegahan tidak menghemat uang** — ia membeli kesehatan dengan harga yang baik. Analisis bersejarah Cohen, Neumann, dan Weinstein di NEJM menemukan kurang dari 20% intervensi preventif bersifat hemat-biaya bersih; sisanya paling banter efektif-biaya.

## Mengapa Ini Penting

"Pencegahan menghemat uang" adalah klaim palsu yang paling sering diulang dalam kebijakan kesehatan, dan kasus bisnis yang dibangun di atasnya dirobohkan oleh ekonom kesehatan. Struktur jujurnya: pencegahan menghabiskan uang sekarang (menyaring seluruh populasi, merawat faktor risiko pada orang yang tidak akan pernah sakit) dan mengembalikan kesehatan nanti — biasanya pada biaya per-QALY yang *baik*, kadang dengan penghematan, kadang dengan harga yang mengerikan. Mengetahui rezim mana Anda berada adalah analisisnya. Perbedaan ini penting secara komersial: produk pencegahan yang dijual sebagai "menghemat uang NHS" mengundang audit yang akan gagal; dijual sebagai "membeli QALY pada £4.000" dapat menang dengan fakta yang sama. Lihat [intervensi lebih awal](../intervensi-lebih-awal/) untuk versi dalam-jalur.

## Perhitungan

```
Biaya bersih pencegahan (per orang) =
    biaya intervensi × semua yang dirawat
  − biaya hilir yang dihindari × sedikit yang akan berkembang
  (keduanya didiskon — biaya yang dihindari bertahun-tahun ke depan; lihat
   discounting-and-time-preference.md)

Hemat-biaya memerlukan: biaya intervensi < P(perkembangan) × biaya dihindari × faktor diskon
Efektif-biaya hanya memerlukan: biaya bersih / QALY diperoleh < ambang
```

Paradoks pencegahan: biaya intervensi berkali-lipat atas seluruh populasi; manfaat hanya terkumpul pada sedikit kontrafaktual.

## Contoh yang Diselesaikan

Aplikasi manajemen-hipertensi ditawarkan kepada 100.000 orang dewasa berisiko, £25/orang/tahun. Selama 10 tahun ia mencegah 400 stroke (masing-masing berbiaya £45.000 didiskon, dan 3 QALY hilang).

```
Biaya:    100.000 × £25 × 10 thn (didiskon ≈ ×8,3) ≈ £20,8 juta
Offset:   400 × £45.000 = £18,0 juta
Biaya bersih ≈ £2,8 juta — TIDAK hemat-biaya

QALY diperoleh = 400 × 3 = 1.200
Biaya per QALY = 2,8 juta / 1.200 ≈ £2.300/QALY — luar biasa efektif-biaya
```

Program yang sama, kedua kebenaran: ia kehilangan £2,8 juta dalam kas dan membeli kesehatan pada sepersepuluh ambang NICE. Danai berdasarkan angka kedua; jangan pernah menjanjikan yang pertama.

## Hubungan dengan Rekayasa Perangkat Lunak

Kualitas shift-left adalah ekonomi pencegahan, termasuk peringatannya. Tinjauan, pengujian, dan analisis statis menerapkan biaya pada *setiap* perubahan untuk menangkap masalah pada sedikit yang akan berkembang menjadi insiden-produksi. Kurva biaya-cacat (10–100× berdasarkan tahap) memainkan peran biaya-stroke — dan kesimpulan jujurnya mencerminkan kesehatan: shift-left biasanya efektif-*biaya*, bukan otomatis hemat-*biaya*, karena sebagian besar masalah yang ditandai tidak akan pernah menjadi insiden (masalah sedikit-kontrafaktual). Hitung: total biaya gerbang per periode vs insiden yang benar-benar dihindari × biaya insiden — struktur contoh-diselesaikan yang sama, dengan [NNT](../jumlah-yang-perlu-dirawat/) sebagai unit per-tangkapan.

## Jebakan

- **Mengklaim penghematan biaya ketika bukti mendukung efektivitas-biaya** — kesalahan yang mendefinisikan advokasi pencegahan di kedua domain.
- **Offset masa-depan yang tidak-didiskon**: manfaat 15 tahun ke depan pada nilai nominal.
- **Mengabaikan biaya gerak-diagnosis-berlebih/perawatan-berlebih**: pencegahan juga menemukan pseudo-penyakit — lihat [ekonomi skrining](../ekonomi-skrining/).

## Sumber

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
