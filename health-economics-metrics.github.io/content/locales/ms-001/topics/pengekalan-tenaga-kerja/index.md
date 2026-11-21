# Pengekalan Tenaga Kerja

Ekonomi pengekalan tenaga kerja mengkuantifikasi apa kos pusing ganti kakitangan kepada sistem kesihatan — pengambilan, orientasi, liputan kekosongan — dan oleh itu apa nilai perisian yang mengurangkan keletihan pentadbiran. Keletihan daripada tugas data pentadbiran berulang ialah pemacu utama pusing ganti kakitangan dan ketidakhadiran sakit dalam NHS.

## Mengapa ia penting

Apabila klinisian berhenti, trust membayar tiga kali: untuk mengambil pengganti (iklan, yuran agensi, temu duga), untuk orientasi mereka (berbulan produktiviti berkurang, penyeliaan), dan untuk menampung kekosongan sementara itu — lazimnya dengan kakitangan agensi atau locum pada 2–3× kadar Agenda for Change substantif (lihat [kos penyumberluaran boleh dielakkan](../kos-penyumberluaran-yang-boleh-dielakkan/) dan [penjimatan melepaskan tunai keras](../penjimatan-melepaskan-tunai-keras/)). Kerana kos pusing ganti ialah tunai sebenar, penambahbaikan pengekalan antara beberapa manfaat tenaga kerja yang boleh disimpan pengarah kewangan. Geseran pentadbiran secara konsisten antara pemacu keletihan klinikal paling kerap disebut, menjadikannya kos yang boleh ditangani perisian.

## Matematiknya

```
Kos setiap yang berhenti = kos pengambilan + kos orientasi/pendakian produktiviti
                         + premium liputan kekosongan × tempoh kekosongan

Kos pusing ganti tahunan = bilangan kakitangan × kadar pusing ganti × kos setiap yang berhenti

Nilai perisian = bilangan kakitangan × Δkadar pusing ganti × kos setiap yang berhenti
               + pengurangan ketidakhadiran sakit × kos liputan/hari
```

Rantaian sebab mempunyai dua pautan dianggar — perisian → keletihan/geseran, dan keletihan → pusing ganti — jadi buktikan kedua-duanya (tinjauan kakitangan pra/pasca; perkaitan keletihan-atrisi diterbitkan) dan kekalkan Δ yang dituntut sederhana.

## Contoh penyelesaian

Trust menggaji 1,200 jururawat; pusing ganti 11%/tahun. Kos setiap yang berhenti:

```
Pengambilan ≈ £4,500;  orientasi/pendakian ≈ £6,000
Liputan kekosongan: 4 bulan × 0.6 WTE ditampung premium agensi ≈ £8,000
Jumlah ≈ £18,500 bagi setiap yang berhenti
Kos pusing ganti garis asas = 1,200 × 0.11 × 18,500 ≈ £2.44J/tahun
```

Perisian pengurangan beban dokumentasi (penilaian diisi automatik, log masuk tunggal, dikte) secara munasabah menggerakkan pusing ganti 1 mata peratusan:

```
Nilai = 1,200 × 0.01 × 18,500 = £222,000/tahun relevan-tunai
```

Tuntutan 1-mata yang disokong skor geseran tinjauan kakitangan boleh dipercayai; tuntutan 4-mata tidak. Jalankan [tornado](../analisis-kepekaan/) pada Δpusing ganti: ia mendominasi segala yang lain dalam model.

## Kaitan dengan kejuruteraan perisian

Matematik pengekalan kejuruteraan serupa dan kurang didokumenkan: menggantikan jurutera kanan berharga 6–12 bulan gaji termuat (pengambilan, pendakian, konteks hilang), jadi organisasi 200-orang pada atrisi 15% membakar berjuta setiap tahun pada churn. Pelaburan pengalaman pembangun ([SPACE dan DevEx](../space-dan-devex/)) ialah analogi langsung kelegaan beban dokumentasi untuk jururawat — dan patut dibenarkan dengan cara sama: skor geseran terukur, kesan atrisi dituntut sederhana, kos setiap yang berhenti daripada data kewangan anda sendiri. Disiplin ekonomi kesihatan untuk disalin ialah *mengos yang berhenti dengan jujur* dan bukan bertikai sama ada orang "benar-benar" berhenti kerana alat.

## Perangkap

- **Mengaitkan semua pergerakan pusing ganti kepada intervensi anda** — pasaran buruh menggerakkan pusing ganti jauh lebih daripada perisian; gunakan kumpulan kawalan atau sekurang-kurangnya pelarasan aliran sektor.
- **Pengiraan berganda**: penjimatan pengekalan dan penjimatan perbelanjaan agensi bertindih (liputan kekosongan *ialah* perbelanjaan agensi); damaikan baris.
- **Mengabaikan lengah**: atrisi didorong keletihan bertindak balas kepada perubahan geseran dalam 1–2 tahun, bukan suku tahun seterusnya.

## Sumber

- NHS England, reducing agency spend. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Staff Survey (burnout and intention-to-leave data). <https://www.nhsstaffsurveys.com/>
