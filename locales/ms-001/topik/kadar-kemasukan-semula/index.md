# Kadar Kemasukan Semula

Kadar kemasukan semula 30 hari ialah peratusan pesakit yang didiscaj dan kembali sebagai kecemasan dalam 30 hari. Ia metrik *kualiti-discaj* kanonik sistem kesihatan — dan membawa penalti kewangan langsung.

## Mengapa ia penting

Kemasukan semula bermakna discaj pertama tidak melekat: discaj pramatang, serah-terima ubat yang gagal, tiada susulan atau sokongan sosial tiada. Pembayar menghukumnya dengan jelas — Program Pengurangan Kemasukan Semula Hospital AS memotong sehingga 3% bayaran Medicare hospital; NHS secara sejarah tidak membayar untuk kemasukan semula kecemasan 30 hari yang boleh dielakkan. Jadi pengelakan kemasukan semula ialah salah satu daripada beberapa kategori manfaat yang *terus* relevan tunai bagi penyedia, bukan sekadar kapasiti.

## Matematiknya

```
Kadar kemasukan semula = kemasukan semula kecemasan dalam 30 hari / discaj indeks × 100

Perbandingan terpiawai-risiko melaras campuran kes; program penalti
membandingkan diperhatikan lwn dijangka bagi hospital setara.

Nilai pengelakan = kemasukan semula dielakkan × (kos setiap episod kemasukan semula
                   + pendedahan penalti setiap kemasukan semula)
```

## Contoh penyelesaian

Aplikasi sokongan discaj kegagalan jantung (penjejakan simptom, amaran berat, peringatan ubat, eskalasi jururawat): 2,000 discaj/tahun, kadar kemasukan semula garis asas 18%, percubaan menunjukkan 14% dengan aplikasi.

```
Kemasukan semula dielakkan = 2,000 × (0.18 − 0.14) = 80/tahun
Kos setiap episod kemasukan semula ≈ £3,500 → £280,000/tahun kos rawatan dielakkan
Serta pendedahan penalti/tanpa-bayaran pada episod itu.
Kos aplikasi: 2,000 × £60 = £120,000/tahun

Bersih ≈ +£160,000/tahun, sebelum sebarang tuntutan QALY bagi kemerosotan dielakkan.
```

Nombor untuk dipertahankan ialah kesan 4-mata-peratusan: ia mesti datang daripada perbandingan terkawal, kerana kadar kemasukan semula berayun mengikut campuran kes dan musim.

## Kaitan dengan kejuruteraan perisian

Kemasukan semula ialah **kadar kegagalan perubahan** sistem kesihatan (lihat [metrik DORA](../metrik-dora/)): kerja yang "dihantar" dan melantun balik dalam 30 hari. Analoginya mendalam — tiket dibuka semula dan insiden regresi menunjukkan "kualiti discaj" yang lemah (pengesahan lemah, penutupan pramatang, dokumen serah-terima tiada); perakaunan gaya penalti (pasukan pembaiki membayar, bukan pasukan penerima) mengubah tingkah laku; dan kedua-dua bidang belajar pengajaran sama, bahawa menolak daya pemprosesan mentah (discaj lebih pantas, penghantaran lebih pantas) tanpa melabur dalam serah-terima hanya menukar baris gilir kelihatan kepada kerja semula tidak kelihatan. "Kadar buka semula 30 hari" tergolong pada mana-mana papan pemuka pasukan yang meraikan masa kitar.

## Perangkap

- **Permainan melalui pelabelan semula**: kemasukan semula dikodkan sebagai tinggal pemerhatian atau keadaan baharu; audit takrifan.
- **Semua-sebab lwn sebab-berkaitan**: semua-sebab 30 hari termasuk peristiwa tidak berkaitan sebenar; penalti biasanya menggunakan semua-sebab tepat kerana "berkaitan" boleh dipermainkan.
- **Buta campuran-kes**: hospital yang melayani populasi lebih sakit dan miskin menerima masuk semula lebih untuk sebab yang tiada aplikasi boleh membaiki — laras-risiko sebelum membandingkan.

## Sumber

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, emergency readmissions statistics. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
