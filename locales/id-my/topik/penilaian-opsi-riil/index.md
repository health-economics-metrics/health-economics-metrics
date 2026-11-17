# Penilaian Opsi Riil

Penilaian opsi riil menerapkan logika penetapan harga opsi keuangan pada keputusan investasi nyata (tidak diperdagangkan di pasar keuangan) — khususnya *opsi ekspansi*: hak untuk memperluas proyek di kemudian hari jika berhasil, tanpa wajib melakukannya. Model binomial satu periode yang disederhanakan (Cox, Ross, Rubinstein, 1979) menilai fleksibilitas ini secara langsung, mengubah "luncurkan kecil dan lihat" dari firasat menjadi angka yang dapat dihargai.

## Mengapa ini penting

Perhitungan nilai kini statis menghargai proyek sebagai taruhan semua-atau-tidak-sama-sekali: danai atau tidak, pada skala hari ini, selamanya. Proyek nyata — dan terutama peluncuran kesihatan digital bertahap — jarang disusun seperti itu: sistem kesihatan dapat mendanai percontohan kecil, melihat apa yang terjadi, dan baru berkomitmen dengan dana lebih banyak jika berhasil. Fleksibilitas itu bernilai nyata, dan mengabaikannya meremehkan investasi bertahap dibanding investasi sekaligus secara sistematis, kebalikan dari proses pengadaan yang memberi hadiah pada usulan bertahap yang tampak lebih aman. Penilaian opsi riil menghargai fleksibilitas itu sendiri, sehingga usulan bertahap dapat dibandingkan secara adil dengan alternatif berkomitmen penuh, alih-alih dihukum kerana tampak lebih kecil pada baris nilai kini yang naif.

## Matematika

```
Probabilitas netral-risiko keadaan "naik":
  p = ((1 + suku_bunga_bebas_risiko) − faktor_turun) / (faktor_naik − faktor_turun)

Pembayaran ekspansi di setiap keadaan (dibatasi nol dari bawah — ekspansi bersifat opsional):
  pembayaran_naik  = max(nilai_proyek × faktor_naik − biaya_ekspansi, 0)
  pembayaran_turun = max(nilai_proyek × faktor_turun − biaya_ekspansi, 0)

Nilai opsi (pembayaran harapan terdiskonto):
  nilai_opsi = (p × pembayaran_naik + (1 − p) × pembayaran_turun) / (1 + suku_bunga_bebas_risiko)

NPV diperluas = npv_statis + nilai_opsi
```

Nilai proyek naik (`faktor_naik`) atau turun (`faktor_turun`) hingga titik keputusan berikutnya. Ekspansi hanya dilaksanakan bila menguntungkan pada keadaan itu — batas bawah nol pada pembayaran itulah yang membuatnya *opsi* sejati, bukan kewajiban. Untuk menghargai opsi mengumpulkan informasi lebih dulu, bukan opsi memperluas kemudian, lihat [nilai harapan informasi sempurna](../nilai-harapan-dari-informasi-sempurna/). Untuk biaya menunggu keputusan ini, lihat [biaya penundaan](../biaya-keterlambatan/).

## Contoh yang diselesaikan

Sebuah percontohan layanan digital dengan `nilai_proyek = £1.000.000`, dapat naik 1,5× atau turun ke 0,5× hingga titik keputusan berikutnya, suku bunga bebas risiko 8%, dan biaya ekspansi £600.000:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

pembayaran_naik  = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
pembayaran_turun = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

Batas bawah berperan: opsi TIDAK akan dilaksanakan jika pasar mengecewakan —
biaya ekspansi £600,000 melampaui £500,000 yang bernilai proyek pada
keadaan "turun".

nilai_opsi = (0.58 × 900,000 + 0.42 × 0) / 1.08
           = 522,000 / 1.08
           ≈ £483,333.33
```

Menambahkan nilai opsi ke dasar NPV statis £200.000: NPV diperluas = 200.000 + 483.333,33 ≈ **£683.333,33**. Hanya melaporkan NPV statis £200.000 tanpa nilai opsi ini akan meremehkan nilai sebenarnya dari proyek bertahap itu lebih dari dua kali lipat.

## Hubungan dengan rekayasa perisian

Ini bentuk formal dari "kirim versi minimum sekarang, pertahankan opsi untuk berinvestasi lebih jika berhasil" — langsung relevan untuk peluncuran bertahap produk kesihatan digital, sejajar secara struktural dengan kerangka pengurutan di bawah ketidakpastian dalam [biaya penundaan](../biaya-keterlambatan/) dan [WSJF dan CD3](../wsjf-dan-cd3/), serta melengkapi [nilai harapan informasi sempurna](../nilai-harapan-dari-informasi-sempurna/) dan [nilai harapan informasi sampel](../nilai-harapan-informasi-sampel/) — ketiganya menghargai fleksibilitas atau informasi di bawah ketidakpastian dari sudut berbeda.

## Jebakan

- **Meminjam penetapan harga netral-risiko tanpa asumsi aset yang dapat diperdagangkan yang menjadi dasarnya**: model opsi riil meminjam probabilitas netral-risiko dari penetapan harga opsi keuangan, yang mengasumsikan nilai dasar adalah aset yang *dapat diperdagangkan* — untuk proyek riil yang benar-benar tidak dapat diperdagangkan, ini kemudahan pemodelan, bukan fakta pasar secara harfiah.
- **Memperlakukan `faktor_naik`/`faktor_turun` sebagai parameter bebas**: masukan naik/turun binomial sendiri adalah asumsi yang butuh pembenaran, bukan parameter bebas yang dipilih demi memperoleh jawaban yang diinginkan.
- **Hanya melaporkan nilai opsi**: nilai opsi riil *ditambahkan* pada NPV statis proyek mandiri — kekeliruan umum adalah melaporkan hanya nilai opsi dan menghilangkan kasus dasar, yang melebih-lebihkan kasus ketika NPV statis negatif, dan meremehkannya (seperti pada contoh yang diselesaikan di atas) bila NPV statis dihilangkan seluruhnya.

## Sumber

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — mengaitkan opsi riil langsung dengan konteks keputusan ekonomi kesihatan. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
