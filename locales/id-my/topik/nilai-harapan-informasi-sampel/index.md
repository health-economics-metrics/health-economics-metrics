# Nilai Harapan Informasi Sampel (EVSI)

EVSI adalah nilai dari *satu studi spesifik yang diusulkan* — dengan desain dan ukuran sampel tertentu — sebelum studi itu dilakukan, berbeda dengan [EVPI](../nilai-harapan-dari-informasi-sempurna/) yang menilai penghapusan seluruh ketidakpastian secara total. EVSI menjawab pertanyaan yang benar-benar dihadapi pemberi dana penelitian: "apakah studi *ini*, pada ukuran *ini*, sepadan dengan biayanya?"

## Mengapa ini penting

EVPI memberi batas atas nilai yang dapat dimiliki studi apa pun; ia tak pernah mengatakan apakah studi di hadapan Anda melampaui ambang. Pemberi dana penelitian nasional yang memilih antara uji coba percontohan 50 pesakit dan uji coba penentu 500 pesakit perlu tahu nilai *setiap desain*, bukan hanya nilai mengetahui segalanya. EVSI memberikan angka itu, dan kerana ia berubah menurut ukuran sampel, pemberi dana dapat menemukan ukuran yang memaksimalkan manfaat bersih yang diharapkan alih-alih menebak.

Itu pula sebabnya EVSI selalu kurang dari atau sama dengan EVPI: sampel terbatas hanya menyelesaikan ketidakpastian sebagian, dan studi yang tampak lebih bernilai daripada informasi sempurna adalah tanda perhitungan yang salah, bukan hasil nyata.

## Matematika

```
Kasus umum:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (ekspektasi bersarang: luar atas hasil studi yang mungkin, dalam atas
  keyakinan posterior tentang θ setelah melihat hasil itu — biasanya
  diestimasi dengan Monte Carlo bersarang / pembaruan Bayes atas tarikan
  analisis sensitivitas probabilistik)

Aproksimasi normal bentuk tertutup (satu parameter tak pasti, model
normal-normal konjugat — jalan pintas umum, tidak eksak untuk setiap model):
EVSI(n) = EVPI × n / (n + n0)

n  = ukuran sampel studi yang diusulkan
n0 = "ukuran sampel setara prior" — ukuran sampel hipotetis yang membawa
     informasi sebanyak keyakinan saat ini, diturunkan dari rasio varians
     data terhadap varians prior
ENBS(n) = EVSI(n) − Biaya(n)
EVSI populasi = EVSI_per_keputusan × keputusan_yang_terdampak
```

Bentuk umumnya adalah ekspektasi bersarang kerana hasil studi di masa depan sendiri tidak pasti: harus dirata-ratakan atas setiap himpunan data yang mungkin, dan untuk masing-masing dihitung ulang keputusan terbaik menurut keyakinan yang diperbarui (posterior). Aproksimasi normal menukar biaya komputasi itu dengan satu rasio, berlaku ketika parameter tak pasti dan data (kira-kira) normal dan konjugat — kemudahan, bukan hukum universal. Monte Carlo bersarang penuh adalah metode serbaguna ketika asumsi ini tidak berlaku. Lihat [analisis sensitivitas probabilistik](../analisis-sensitivitas-probabilistik/) untuk tarikan PSA yang biasanya dipakai mengestimasi EVSI.

## Contoh yang diselesaikan

Melanjutkan contoh [EVPI](../nilai-harapan-dari-informasi-sempurna/) — penerapan asisten dokumentasi AI di 5.000 klinik, di mana EVPI sebesar £1,2 juta — di sini EVPI yang sama ditulis lengkap: **EVPI = £1.200.000**.

Sebuah studi percontohan yang diusulkan mencakup 50 klinik. Dari rasio varians keyakinan prior terhadap ketelitian pengukuran percontohan, ukuran sampel setara prior adalah `n0 = 75`:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

Percontohan itu berbiaya £120.000:

```
ENBS = EVSI − Biaya = 480,000 − 120,000 = £360,000
```

ENBS positif dengan jelas: danai percontohan itu. Jika keputusan pengadaan yang sama berulang di 3 trust regional serupa, nilai percontohan berskala sesuai:

```
EVSI populasi = 480,000 × 3 = £1,440,000
```

## Hubungan dengan rekayasa perisian

EVSI adalah ekonomi tentang seberapa *besar* sebuah proyek percontohan atau uji A/B seharusnya, bukan hanya apakah akan melakukannya:

- **Ukuran sampel adalah keputusan investasi.** Beta 50 pengguna dan peluncuran bertahap hingga 5.000 pengguna adalah "studi" berbeda dengan EVSI dan biaya berbeda — EVSI memungkinkan membandingkannya pada dasar yang sama alih-alih kembali ke bawaan "lebih banyak data selalu lebih baik".
- **Uji langganan adalah ENBS, bukan EVSI saja.** Studi dengan EVSI tinggi yang biayanya memakan hampir semuanya adalah usulan yang lemah; aturan keputusannya adalah manfaat bersih yang diharapkan dari sampel, sebagaimana kasus bisnis menempatkan manfaat berhadapan dengan biaya, bukan hanya melaporkan manfaat.
- **Hasil marginal yang menurun tampak jelas.** Kerana EVSI(n) tumbuh sebagai `n/(n+n0)`, menggandakan ukuran percontohan tidak pernah menggandakan nilainya — bentuk formal dari intuisi insinyur bahwa eksperimen yang lebih besar memiliki nilai informasi marginal yang menurun.

## Jebakan

- **Memakai aproksimasi normal di luar asumsinya.** Ia hanya kira-kira berlaku untuk ketidakpastian satu parameter yang konjugat; model keputusan yang benar-benar tak linear atau berparameter banyak memerlukan Monte Carlo bersarang penuh, bukan jalan pintas ini.
- **Membandingkan EVSI hanya dengan biaya tunai.** EVSI harus ditimbang terhadap biaya *penuh* studi, termasuk biaya menunda keputusan itu sendiri — lihat [biaya penundaan](../biaya-keterlambatan/) — bukan hanya tagihan studi.
- **Menganggap EVSI > EVPI sebagai temuan nyata.** Secara konstruksi EVSI tak pernah dapat melampaui EVPI; perhitungan yang menghasilkannya adalah galat model, bukan penemuan.

## Sumber

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
