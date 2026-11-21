# Jumlah Kos Pemilikan (TCO)

TCO ialah kos penuh sesebuah sistem sepanjang hayatnya: perolehan atau binaan, integrasi, operasi, penyelenggaraan, sokongan, latihan dan penyahtauliahan. Garis asas yang tidak menyenangkan: **penyelenggaraan ialah 50–80% TCO perisian** — kira-kira tiga perempat kos sepanjang hayat tiba *selepas* pelancaran.

## Mengapa ia penting

Penilaian teknologi kesihatan telah lama belajar bahawa harga ubat bukan kosnya — pentadbiran, pemantauan dan pengurusan kesan sampingan semuanya tergolong dalam model. Kes perniagaan perisian yang hanya mengira kos binaan/lesen mengulang kesilapan harga-ubat-naif dan secara sistematik memperkecilkan sisi kos setiap [ICER](../nisbah-kos-keberkesanan-inkremental/) dan [impak bajet](../analisis-impak-bajet/) yang disuapnya. Bagi perolehan NHS, disiplin TCO ialah apa yang menjadikan tuntutan kos-keberkesanan produk digital jujur — dan di situlah pilihan yang kelihatan murah kalah.

## Matematiknya

```
TCO = kos awal (binaan/lesen + integrasi + migrasi data + latihan)
    + Σ_t [operasi + penyelenggaraan + sokongan + infrastruktur + naik taraf
           + pematuhan/jaminan]_t / (1 + r)^t
    + kos penyahtauliahan (keluar, pengekstrakan data, operasi selari)

Ufuk: 3–5 tahun komersial, hayat-sistem untuk infrastruktur klinikal
r: 3.5% sektor awam (Green Book), 8–12% komersial
Penanda aras: penyelenggaraan tahunan ≈ 15–20% kos binaan; ~78% TCO sepanjang hayat
selepas pelancaran; mengabaikan penyahtauliahan dan penguncian vendor menghargai dirinya sendiri.
```

## Contoh penyelesaian

Dua pilihan untuk sistem e-pemerhatian, ufuk 5 tahun:

```
                        SaaS vendor     Binaan dalaman
Tahun 0 (lesen/binaan)  £250,000        £900,000
Integrasi + latihan     £180,000        £150,000
Operasi tahunan (thn 1–5) £120,000/thn  £190,000/thn  (hosting + 1.5 FTE penyelenggaraan)
Keluar/penyahtauliahan  £60,000         £30,000

TCO tidak didiskaun     £1,090,000      £2,030,000
```

Anggaran kejuruteraan pilihan binaan (£900k) hanya 44% daripada TCO sebenarnya — dan anggaran binaan sendiri lazimnya melebihi 30–40% (lihat [bina lwn beli](../bina-lwn-beli/)). Kecuali pilihan dalaman menyampaikan *hasil* yang berbeza secara material, logik [pengurangan kos](../analisis-pengurangan-kos/) terpakai dan SaaS menang sebanyak ~£940k.

## Kaitan dengan kejuruteraan perisian

Jurutera meremehkan data penyelenggaraan bidang sendiri apabila menyokong binaan: peraturan penyelenggaraan tahunan 15–20%-kos-binaan bermakna setiap sistem £1J secara senyap memperuntukkan kapasiti masa depan £150–200k/tahun — liabiliti yang tergolong pada kunci kira-kira mental sama seperti [hutang teknikal](../hutang-teknikal/). TCO juga separuh kos setiap metrik dalam repositori ini: kos setiap penggunaan, [ekonomi unit awan](../ekonomi-unit-awan/), dan disiplin penyebut yang HTA kenakan kepada penaja ubat. Apabila harga produk anda dicabar, perbandingan TCO yang termasuk kos operasi sebenar petahana biasanya pembingkaian semula paling kuat yang ada. Angka TCO berbilang tahun seperti di atas ialah hasil tambah banyak butiran baris kos mengikut masa — lihat [rollup kos selamat mata wang](../rollup-kos-selamat-mata-wang/) untuk sebab hasil tambah itu patut perpuluhan-tepat dan bukan titik terapung sebaik model mesti berdamai hingga ke pence, dan [peruntukan kos sen tepat](../peruntukan-kos-sen-tepat/) untuk memisahkan jumlah TCO merentas pusat kos tanpa kehilangan pence.

## Perangkap

- **Penyauhan kos-pelancaran**: membandingkan pilihan pada kos tahun-0 apabila kedudukan berbalik menjelang tahun 3.
- **Kesilapan buruh-dalaman-percuma**: penyelenggaraan dalaman dikos sifar kerana "pasukan sudah dibayar" — lihat [kos peluang](../kos-peluang/).
- **Mengabaikan kos keluar**: egress data, penamatan kontrak dan operasi selari ialah tempat SaaS "murah" menjadi mahal.
- **Pelanggaran ufuk-sama**: membandingkan TCO SaaS 3 tahun dengan pelunasan binaan 10 tahun (lihat [ufuk masa](../ufuk-masa/)).

## Sumber

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
