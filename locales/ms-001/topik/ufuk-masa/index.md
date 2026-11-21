# Ufuk Masa

Ufuk masa ialah tempoh di mana analisis mengira kos dan kesan. Ia mesti cukup panjang untuk menangkap semua perbezaan bermakna antara pilihan yang dibandingkan.

## Mengapa ia penting

Pilih ufuk pendek dan anda terlepas manfaat lewat (pencegahan) dan kos lewat (penyelenggaraan). Pilih ufuk terlalu panjang dan segalanya lemas dalam ketidakpastian. Penilaian teknologi kesihatan sering menggunakan ufuk **sepanjang hayat** untuk rawatan dengan kesan kematian; [analisis impak bajet](../analisis-impak-bajet/) dengan sengaja menggunakan ufuk pendek **1–5 tahun** kerana soalannya kemampuan, bukan nilai. Ufuk ialah pilihan pemodelan yang diisytiharkan, dan ufuk tidak sepadan ialah cara klasik mempermainkan perbandingan.

## Matematiknya

Ufuk ialah had atas penjumlahan dalam mana-mana penilaian:

```
Nilai kini bersih = Σ (t = 0 … T) [ (Manfaat_t − Kos_t) / (1 + r)^t ]

T = ufuk masa (tahun)
r = kadar diskaun (lihat discounting-and-time-preference.md)
```

Keputusan patut dilaporkan dengan ufuk dinyatakan, dan idealnya ditunjukkan pada pelbagai ufuk.

## Contoh penyelesaian

Sistem preskripsi elektronik berharga £2 juta untuk dilaksanakan dan £200,000/tahun untuk dijalankan. Ia mencegah ralat ubat bernilai £600,000/tahun (kos rawatan bahaya dielakkan).

Manfaat bersih mengikut ufuk (tidak didiskaun, demi kejelasan):

```
Ufuk 1 tahun:  −2,000,000 − 200,000 + 600,000  = −£1,600,000
Ufuk 3 tahun:  −2,000,000 + 3 × 400,000        = −£800,000
Ufuk 5 tahun:  −2,000,000 + 5 × 400,000        =  £0
Ufuk 10 tahun: −2,000,000 + 10 × 400,000       = +£2,000,000
```

Sistem "gagal" pada mana-mana ufuk di bawah 5 tahun dan "berjaya" pada 10. Tiada satu pun jawapan sebenar; laporan jujur menyatakan titik pulang modal dan membenarkan ufuk mengikut hayat sistem (berapa lama sebelum diganti?).

## Kaitan dengan kejuruteraan perisian

- **Penilaian alat diukur sepanjang satu sprint** secara sistematik terlepas kejatuhan lengkung pembelajaran (kos di hadapan) dan penyelenggaraan jangka panjang (kos di belakang). Projek perintis pembantu pengekodan AI yang diukur pada minggu ke-2 menangkap kebaharuan puncak, bukan keadaan mantap.
- **Tempoh kontrak ≠ ufuk manfaat.** Kontrak SaaS 1 tahun masih boleh dinilai atas 5 tahun jika anda secara realistik menjangka pembaharuan — tetapi nyatakannya.
- **Kes penggantian warisan** patut berjalan hingga akhir hayat sistem lama yang boleh dipercayai, bukan nombor bulat sewenang-wenang.

## Perangkap

- **Membeli-belah ufuk**: memilih ufuk mana yang memenangkan pilihan anda. Daftarkan ufuk awal sebelum mengira keputusan.
- **Ufuk berbeza untuk pilihan berbeza** dalam perbandingan sama.
- **Ufuk sepanjang hayat tanpa diskaun atau analisis ketidakpastian** — manfaat tahun-30 pada nilai muka ialah fiksyen. Pasangkan ufuk panjang dengan [analisis kepekaan](../analisis-kepekaan/).

## Sumber

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
