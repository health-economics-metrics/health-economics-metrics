# Manfaat Monetari Bersih (NMB)

NMB menukar keputusan kos-keberkesanan kepada satu nilai wang: keuntungan kesihatan dihargai pada ambang kesanggupan membayar, tolak kos. Kembarnya, Manfaat Kesihatan Bersih (NHB), menyatakan peraturan sama dalam unit kesihatan.

## Mengapa ia penting

Nisbah ([ICER](../nisbah-kos-keberkesanan-inkremental/)) janggal: ia meletup berhampiran kesan sifar, tidak boleh dipurata merentas cabutan ketidakpastian, dan tidak boleh memangkatkan tiga atau lebih pilihan dengan bersih. NMB membaiki semua itu — ia linear, jadi anda boleh memangkatkan pilihan, memurata cabutan Monte Carlo dan menguraikan sumbangan. Ia juga bentuk matematik ekonomi kesihatan yang sudah diketahui setiap jurutera: *nilai tolak kos*.

## Matematiknya

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = kesan inkremental (cth., QALY)
ΔC = kos inkremental
λ  = ambang kesanggupan membayar (lihat willingness-to-pay-thresholds.md)

Peraturan keputusan: terima jika NMB > 0 (setara NHB > 0).
Antara alternatif: pilih NMB tertinggi.
```

NMB > 0 ⇔ ICER < λ (apabila ΔE > 0), jadi kedua-dua peraturan bersetuju — NMB sekadar berkelakuan lebih baik.

## Contoh penyelesaian

Tiga pilihan untuk perkhidmatan diabetes, bagi setiap 1,000 pesakit, λ = £20,000/QALY:

```
Pilihan             ΔC          ΔE (QALY)   NMB = 20,000×ΔE − ΔC
Aplikasi + bimbingan £400,000   30           600,000 − 400,000 = £200,000
Aplikasi sahaja     £150,000    12           240,000 − 150,000 = £90,000
Klinik tambahan     £700,000    32           640,000 − 700,000 = −£60,000
```

Klinik tambahan memperoleh QALY paling banyak tetapi memusnahkan nilai pada ambang ini (NMB < 0). Aplikasi + bimbingan menang. Perhatikan NMB membolehkan anda *memangkatkan ketiga-tiganya sekali gus* — ICER berpasangan memerlukan prosedur sempadan dalam [dominasi dan sempadan kecekapan](../dominasi-dan-sempadan-kecekapan/), dan sampai pada jawapan sama.

Pandangan NHB bagi pemenang: 30 − 400,000/20,000 = 30 − 20 = **10 QALY bersih** — kesihatan diperoleh melebihi apa yang akan dihasilkan wang sama di tempat lain.

## Kaitan dengan kejuruteraan perisian

`(jam dijimatkan × kadar sejam termuat) − kos alat` — kes perniagaan alat harian — secara literal pengiraan NMB dengan λ = kos jurutera termuat. Dua peningkatan yang ditambah ekonomi kesihatan:

- **Jadikan λ pemboleh ubah, bukan pemalar.** Plot NMB terhadap λ ("nilai jam-jurutera") dan tunjukkan di mana keputusan berbalik; pihak berkepentingan berbeza kemudian boleh menggunakan penilaian sendiri tanpa mengulang matematik anda.
- **Pemikiran NHB**: "platform ini menjimatkan 5,000 jam-jurutera tetapi menggunakan bajet yang akan membeli 3,000 jam-jurutera kapasiti kontraktor — bersih 2,000 jam" memaksa perbandingan kos peluang dalam unit kapasiti. Lihat [kos peluang](../kos-peluang/).

## Perangkap

- **Menyembunyikan ambang**: NMB tidak bermakna tanpa menyatakan λ; laporkan NMB pada £20k dan £30k, atau plot lengkung.
- **Menggunakan NMB untuk mencuci kesan kecil**: populasi besar darab kesan kecil setiap orang boleh menghasilkan NMB besar — laporkan kesan setiap orang bersama.
- **Melupakan NMB mewarisi setiap ketidakpastian** dalam ΔC dan ΔE — pasangkan dengan [analisis kepekaan probabilistik](../analisis-kepekaan-probabilistik/).

## Sumber

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
