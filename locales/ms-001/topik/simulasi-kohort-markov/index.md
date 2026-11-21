# Simulasi Kohort Markov

Model kohort Markov ialah teknik pemodelan HTA piawai untuk intervensi yang kesannya berkembang merentas beberapa tempoh masa (kitaran), bukan dalam satu pukulan. Kohort hipotetikal bermula sepenuhnya dalam satu keadaan kesihatan, dan setiap kitaran set kebarangkalian peralihan tetap memindahkan pecahan kohort antara keadaan; kos dan QALY terkumpul setiap kitaran berkadar dengan seberapa banyak kohort menduduki setiap keadaan, dan didiskaun kembali kepada nilai kini. Mana-mana jurutera perisian yang memodelkan kes perniagaan kesihatan digital berbilang tahun — di mana pengguna atau pesakit berpindah antara keadaan seperti "terlibat", "luput" atau "churn" mengikut masa — membina struktur yang sama.

## Mengapa ia penting

Kebanyakan keputusan teknologi kesihatan sebenar bukan perbandingan sekali pukul kos dan hasil satu tempoh. Keadaan kronik berkembang, relaps, bertindak balas kepada rawatan, atau membunuh, selama bertahun — dan [analisis kos-keberkesanan](../analisis-kos-keberkesanan/) satu-tempoh tidak dapat mewakilinya. Penyerahan NICE, ICER dan CADTH bagi intervensi penyakit kronik, dinilai melalui [penilaian teknologi kesihatan](../penilaian-teknologi-kesihatan/), hampir selalu dibina sebagai model kohort Markov dengan ufuk masa sepanjang hayat, kerana alternatifnya — memodelkan setiap laluan pesakit individu yang mungkin — tidak boleh dikendalikan pada skala. Model Markov peringkat kohort menukar sedikit realisme peringkat individu (ia tidak mudah mewakili ingatan keadaan lalu, maka "Markov": masa depan hanya bergantung pada keadaan semasa) dengan model yang telus, boleh diaudit dan cukup pantas untuk dijalankan beribu kali dalam [analisis kepekaan probabilistik](../analisis-kepekaan-probabilistik/).

## Matematiknya

```
Pengemaskinian kohort satu kitaran (vektor-baris x matriks peralihan):
  new_state[j] = sum_i state[i] * transition_matrix[i][j]

Kos satu kitaran:
  cycle_cost = sum_s state[s] * cost_per_cycle[s]

QALY satu kitaran:
  cycle_qalys = sum_s state[s] * utility[s] * cycle_length_years

Simulasi penuh atas `cycles` kitaran, didiskaun pada `discount_rate`:
  total_discounted_cost  = sum_{t=0}^{cycles-1} cycle_cost(state_t)  / (1 + discount_rate)^t
  total_discounted_qalys = sum_{t=0}^{cycles-1} cycle_qalys(state_t) / (1 + discount_rate)^t
  di mana state_0 = initial_distribution, state_{t+1} = advance_cohort(state_t, transition_matrix)
```

Mendiskaun setiap kitaran kembali kepada nilai kini menggunakan tepat formula [diskaun dan keutamaan masa](../diskaun-dan-keutamaan-masa/), diterapkan kitaran-demi-kitaran dan bukan tahun-demi-tahun.

## Contoh penyelesaian

**Klinikal**: model 2-keadaan — `Well` dan `Dead` — di mana 10% kohort mati setiap kitaran dan `Dead` menyerap (kebarangkalian peralihan kendirinya 1.0; meninggalkan gelung-kendiri itu akan menyebabkan jisim kohort lenyap selepas satu kitaran dalam `Dead`). Kohort bermula sepenuhnya `Well`, berkos £1,000 setiap kitaran semasa `Well` (£0 sebaik `Dead`), dan memperoleh 0.8 QALY setahun semasa `Well`. Disimulasi untuk 3 kitaran tahunan pada kadar diskaun 3.5% NICE:

```
Kitaran 0: state = [1.00, 0.00] (100% Well)
  cost = £1,000.00, qalys = 0.800, discount factor = 1.000000
  didiskaun: cost = £1,000.00, qalys = 0.8000

Kitaran 1: state = [0.90, 0.10] (90% Well, 10% Dead)
  cost = £900.00, qalys = 0.720, discount factor = 0.966184
  didiskaun: cost = £869.57, qalys = 0.6957

Kitaran 2: state = [0.81, 0.19] (81% Well, 19% Dead)
  cost = £810.00, qalys = 0.648, discount factor = 0.933511
  didiskaun: cost = £756.14, qalys = 0.6049

Jumlah kos didiskaun  ≈ £2,625.71
Jumlah QALY didiskaun ≈ 2.1006
```

Keadaan setiap kitaran ialah keadaan kitaran lalu yang dibawa melalui matriks peralihan — 90% daripada 90% yang masih `Well` pada kitaran 1 kekal `Well` pada kitaran 2 (0.9 × 0.9 = 0.81), manakala 19% lagi kini telah mati (0.9 × 0.1 + 0.1 × 1.0 = 0.19). Perhatikan kohort tidak pernah sepenuhnya mengosongkan `Well`: dengan kematian malar 10% setiap kitaran dan tiada kemasukan semula, pecahan `Well` mereput secara geometri dan bukan mencapai sifar pada sebarang bilangan kitaran terhingga.

## Kaitan dengan kejuruteraan perisian

Untuk bagaimana model HTA berbilang kitaran digunakan dalam penilaian sebenar, lihat [penilaian teknologi kesihatan](../penilaian-teknologi-kesihatan/) — kes rujukan yang mengawal kadar diskaun, sumber utiliti dan ufuk masa yang mesti digunakan model Markov yang diserahkan.

Model kohort Markov secara struktur ialah mesin keadaan dengan peralihan probabilistik, dijalankan untuk bilangan detik tetap, mendiskaun nilai setiap detik. Bentuk sama mensimulasikan pengekalan/peralihan keadaan kohort pengguna mengikut masa — lihat [metrik DORA](../metrik-dora/) untuk versi kebolehpercayaan operasi bagi "apakah pecahan sistem dalam keadaan merosot tempoh ini, dan berapa kosnya". Secara konkrit:

- **Pemodelan pengekalan/churn** ialah model kohort Markov dengan keadaan seperti "aktif", "berisiko", "churn": matriks peralihan bulanan tetap, dijalankan untuk 12 atau 24 kitaran bulanan, memberitahu anda bilangan pengguna aktif jangkaan (dan hasil) pada mana-mana bulan masa depan, sama seperti `Well`/`Dead` memberitahu anda yang masih hidup jangkaan.
- **Kebolehpercayaan dan ekonomi insiden**: keadaan sistem (sihat, merosot, tumbang) boleh dimodelkan dengan cara sama, dengan "kos setiap kitaran" bahaya henti masa terkumpul semasa sistem menduduki keadaan merosot/tumbang — menukar hujah kekerapan insiden menjadi hujah kos terdiskaun yang boleh dibandingkan dengan kos kerja kebolehpercayaan yang akan mengubah kebarangkalian peralihan.
- **Keadaan penyerap sebagai keadaan terminal**: `Dead` dalam model klinikal tepat keadaan "langganan dibatalkan" atau "luar talian kekal" dalam model perisian — kedua-duanya memerlukan kebarangkalian peralihan kendiri 1.0 yang jelas, atau simulasi senyap-senyap kehilangan jisim.

## Perangkap

- **Kebarangkalian peralihan yang tidak berjumlah 1 bagi setiap baris.** Baris yang berjumlah lebih atau kurang daripada 1 senyap-senyap menjadikan kohort "bocor" atau "bertambah" jisim setiap kitaran — sentiasa semak jumlah baris sebelum mempercayai output model, kerana tiada apa dalam struktur model itu sendiri menandakan ralat.
- **Panjang kitaran terlalu kasar untuk dinamik sebenar penyakit.** Kitaran tahunan untuk keadaan yang berubah keadaan bermakna dalam beberapa minggu memperkecilkan peralihan yang berlaku pertengahan kitaran; pilih panjang kitaran pendek berbanding kelajuan proses yang dimodelkan sebenarnya bergerak.
- **Melupakan gelung-kendiri keadaan penyerap.** Keadaan penyerap (kematian, penghentian kekal) memerlukan kebarangkalian peralihan kendiri tepat 1.0. Tinggalkannya dan jisim kohort dalam keadaan itu menguap selepas satu kitaran, memperkecilkan kos kumulatif atau kehilangan QALY.
- **Menganggap model disahkan kerana ia berjalan.** Model kohort Markov dengan kebarangkalian peralihan yang kelihatan munasabah masih boleh salah secara struktur (keadaan tertinggal, tingkah laku penyerap salah); sahkan terhadap penanda aras epidemiologi diketahui (cth. adakah kemandirian termodel pada 5 tahun sepadan dengan lengkung kemandirian diterbitkan) sebelum mempercayai output.

## Sumber

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
