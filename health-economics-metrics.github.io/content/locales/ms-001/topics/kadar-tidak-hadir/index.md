# Kadar Tidak Hadir (DNA)

Kadar DNA ialah peratusan temujanji yang ditempah di mana pesakit tidak hadir mahupun membatalkan. Klinisian, bilik dan slot dibayar; tiada apa berlaku. Ia metrik pembaziran paling tulen dalam penjagaan kesihatan — dan salah satu yang paling boleh dibaiki perisian.

## Mengapa ia penting

Angka NHS England (2019): temujanji GP terlepas melebihi 15 juta/tahun pada ~£30 setiap satu — melebihi **£216J/tahun** — dan DNA pesakit luar hospital berjalan ~8J/tahun (~6.4% temujanji) pada purata ~**£160** bagi setiap slot terlepas. Kerana kos marginal peringatan hanya beberapa pence dan nilai yang dipulihkan ialah slot klinikal yang dikakitangani sepenuhnya, pengurangan DNA mempunyai antara aritmetik ROI terbaik dalam kesihatan digital, itulah sebabnya peringatan SMS, tempahan semula mudah dan tempahan berlebihan ramalan antara kemenangan kesihatan digital pertama yang terbukti.

## Matematiknya

```
Kadar DNA = DNA / temujanji ditempah × 100

Nilai pengurangan = temujanji × Δ kadar DNA × nilai setiap slot dipulihkan

nilai setiap slot dipulihkan: slot diisi semula (nilai aktiviti / pengurangan
senarai menunggu) atau tidak (masa kakitangan sebahagiannya boleh digunakan semula) —
mekanisme penting, seperti dalam bed-days-saved.md.
```

## Contoh penyelesaian

Jabatan pesakit luar: 200,000 temujanji/tahun, kadar DNA 8%. Perkhidmatan peringatan-serta-tempahan-semula (SMS dengan tempah semula satu ketikan, maklumat pengangkutan, format boleh akses) memotong DNA kepada 5.5%.

```
Slot dipulihkan = 200,000 × 0.025 = 5,000/tahun
Diisi semula daripada senarai menunggu pada purata nilai pesakit luar ~£160:
  5,000 × £160 = £800,000/tahun aktiviti dipulihkan
Kos perkhidmatan: 200,000 × £0.40 = £80,000/tahun

Pulangan ≈ 10:1, serta 5,000 pesakit senarai menunggu dilihat lebih awal
(lihat waiting-list-impact.md dan referral-to-treatment.md).
```

Saiz kesan (2.5 mata) realistik: RCT peringatan secara konsisten menunjukkan pengurangan DNA relatif 25–40%.

## Kaitan dengan kejuruteraan perisian

- **Ini masalah sistem penjadualan**: peringatan, tempahan semula layan diri, pengisian semula automatik senarai menunggu daripada pembatalan, dan model ramalan tidak-hadir yang memacu tempahan berlebihan tersasar. Setiap satu ialah kejuruteraan perisian biasa dengan kes ekonomi yang luar biasa jelas.
- **Analogi kejuruteraan**: tidak-hadir bagi kapasiti terpelihara — slot CI ditempah-tetapi-melahu, kapasiti awan terpelihara, bilik mesyuarat, panel temu duga. Ekonomi itu berpindah: dorongan automatik murah (atau pelepasan automatik tempahan tidak digunakan) memulihkan kapasiti terikat yang mahal.
- **Tinjauan etika ramalan**: model tidak-hadir yang dilatih pada data kehadiran mengekodkan kedaifan dan halangan akses; menggunakannya untuk *menyahutamakan* yang mungkin tidak hadir menguatkan ketidaksamaan, menggunakannya untuk *menyokong* kehadiran (bantuan pengangkutan, alternatif telefon) mengurangkannya. Lihat [capaian dan ekuiti](../capaian-dan-ekuiti/).

## Perangkap

- **Mengira dibatalkan-dan-ditempah-semula sebagai nilai dipulihkan dua kali.**
- **Menilai slot dipulihkan yang tidak diisi semula** — slot kosong dengan peringatan dihantar tetap kosong.
- **Mengejar DNA ke sifar**: mata terakhir DNA ialah pesakit yang menghadapi halangan sebenar; pendekatan menghukum (discaj selepas N DNA) memotong metrik dengan meninggalkan pesakit.

## Sumber

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- DNA cost summaries. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
