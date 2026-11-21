# Pengelakan Kehadiran Kecemasan

Pengelakan kehadiran kecemasan mengira lawatan ED (A&E) dan kemasukan kecemasan yang dicegah oleh intervensi hulu — aplikasi triaj, pemantauan jauh, wad maya, pengalihan penjagaan segera. Ia menukar "kami menangkapnya lebih awal" kepada tuntutan berkos.

## Mengapa ia penting

Penjagaan kecemasan ialah tetapan rutin paling mahal dalam sistem (kos unit kehadiran ED dalam julat £250–£400 mengikut angka National Cost Collection / PSSRU; kemasukan kecemasan beribu-ribu), dan kesesakan ED berlarutan kepada kelewatan ambulans dan elektif dibatalkan. Apa-apa yang menyelesaikan permintaan di hulu dengan selamat — nasihat jaga kendiri, penjagaan primer hari sama, tindak balas komuniti — membeli kapasiti sistem pada titik paling tertekan. Ini baris manfaat piawai bagi penyemak simptom, perkhidmatan triaj gaya 111 dan [pemantauan pesakit jauh](../ekonomi-pemantauan-pesakit-jauh/).

## Matematiknya

```
Kehadiran dielakkan = populasi × (kadar garis asas − kadar intervensi)
Penjimatan kasar    = kehadiran dielakkan × kos unit setiap kehadiran
                      (+ kemasukan dielakkan × kos kemasukan, dikira berasingan)

Penjimatan bersih   = penjimatan kasar − kos intervensi − kos penggunaan laluan baharu
                      (permintaan dialihkan tidak percuma: panggilan 111, slot GP,
                       sehari wad maya semuanya mempunyai kos unit)
```

Tuntutan sebab memerlukan pembanding: kadar kehadiran berubah mengikut aliran dan bermusim, jadi sebelum/selepas sahaja tidak membuktikan apa-apa.

## Contoh penyelesaian

Perkhidmatan pemantauan jauh COPD untuk 3,000 pesakit berisiko tinggi. Penilaian kawalan sepadan menunjukkan kehadiran ED berkaitan eksaserbasi jatuh daripada 0.9 kepada 0.7 setiap pesakit-tahun, dan kemasukan kecemasan daripada 0.5 kepada 0.42.

```
Kehadiran dielakkan = 3,000 × 0.2  = 600 × £300   = £180,000
Kemasukan dielakkan = 3,000 × 0.08 = 240 × £3,800 = £912,000
Kasar                                               £1,092,000/tahun

Kos: perkhidmatan pemantauan £600,000; tindak balas jururawat komuniti tambahan £150,000
Bersih ≈ +£342,000/tahun — serta keuntungan QALY eksaserbasi yang dirawat lebih awal.
```

Perhatikan baris kemasukan mendominasi: pengelakan kehadiran sahaja jarang membayar perkhidmatan pemantauan; pengelakan *kemasukan* di mana wangnya.

## Kaitan dengan kejuruteraan perisian

Ini **ekonomi pengelakan insiden**. Nilai kebolehcerapan, penggunaan canary dan sistem amaran awal ialah "kehadiran kecemasan" dielakkan — halaman, bilik perang, sev-1 — masing-masing dengan kos termuat (jam-jurutera × kadar + impak pelanggan). Peraturan pemodelan sama terpakai: tolak kos laluan hulu baharu (triaj amaran tidak percuma), awas penggantian (amaran yang mencipta kerja tanpa mencegah insiden ialah kebimbangan kesihatan, bukan kesihatan), dan buktikan kontrafaktual dengan kawalan (kadar insiden pasukan berubah aliran dan kembali ke purata, sama seperti kehadiran ED).

## Perangkap

- **Regresi ke purata**: kohort berisiko tinggi yang dipilih pada tahun buruk bertambah baik tanpa dirawat; kawalan sepadan atau reka bentuk baji-berperingkat adalah penting.
- **Permintaan teraruh bekalan**: triaj digital mudah boleh *menambah* jumlah hubungan (ambang lebih rendah mencari bantuan) sambil mengurangkan bahagian ED — kira jumlah kos sistem.
- **Menilai kehadiran pada kos purata** apabila kos tetap ED tidak jatuh — lihat [kos marginal lwn purata](../kos-marginal-lwn-kos-purata/).

## Sumber

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
