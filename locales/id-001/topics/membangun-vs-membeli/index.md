# Membangun vs Membeli

Membangun-vs-membeli adalah perbandingan terstruktur dari pengembangan khusus terhadap akuisisi komersial, pada [TCO](../total-biaya-kepemilikan/) yang didiskon, waktu penyampaian, dan risiko. Prior empirisnya sepihak: **biaya membangun aktual biasanya melebihi proyeksi sebesar 30–40%**, solusi yang dibeli diterapkan 40–60% lebih cepat, dan penelitian GenAI 2025 MIT menemukan alat AI yang dibeli berhasil ~67% dari waktunya sementara pembangunan internal berhasil sekitar sepertiga sesering itu.

## Mengapa Ini Penting

Sistem kesehatan menghadapi keputusan ini terus-menerus ("buat vs komisi" dalam bahasa NHS), dan organisasi rekayasa secara sistematis salah ke arah membangun — karena pembangun memperkirakan pembangunan, bukan [TCO](../total-biaya-kepemilikan/), dan karena membangun lebih menyenangkan. Kerangka ekonomi memaksa perbandingan jujur: kedua pilihan dihargai selama horizon yang sama, keduanya disesuaikan risiko, dan *selisih waktu dihargai sebagai [biaya keterlambatan](../biaya-keterlambatan/)* — istilah yang paling sering menentukan jawaban dan paling sering dihilangkan.

## Perhitungan

```
Bandingkan selama horizon 3–5 tahun yang sama, didiskon:

NPV_pilihan = PV(manfaat, digeser oleh waktu-ke-nilai) − PV(TCO)

Penyesuaian risiko (pola "bias optimisme" Green Book):
  biaya membangun × 1,3–1,4        (prior pembengkakan)
  waktu-ke-nilai membangun + 40–60% (prior penundaan penerapan)
  membeli: tambahkan pemeriksaan realitas integrasi dan biaya keluar sebagai gantinya

Pendorong keputusan, dalam urutan yang biasanya memutuskan:
  1. diferensiasi — apakah kemampuan ini produk Anda, atau pipa?
  2. waktu-ke-nilai × CoD
  3. TCO yang disesuaikan risiko
```

## Contoh yang Diselesaikan

Sebuah trust membutuhkan sistem persetujuan-elektronik. Beli: £150rb/tahun SaaS, aktif dalam 3 bulan. Bangun: diperkirakan £600rb + £120rb/tahun pemeliharaan, aktif dalam 12 bulan.

```
Bangun yang disesuaikan risiko: 600rb × 1,35 = £810rb; waktu-ke-nilai ≈ 18 bulan
TCO 5-thn:  beli = 150rb × 5 = £750rb
           bangun = 810rb + 120rb × 5 = £1.410rb
Istilah keterlambatan: digitalisasi persetujuan menghemat £25rb/bulan; pembangunan tiba 15 bulan
            kemudian → CoD = 15 × 25rb = £375rb

Perbandingan efektif: £750rb vs £1.785rb — beli menang sekitar £1 juta, dan
istilah tunggal terbesar setelah pembangunan itu sendiri adalah biaya keterlambatan yang tidak dihargai siapa pun.
```

Membangun tetap benar ketika kemampuannya membedakan (algoritma inti produk Anda), ketika tidak ada vendor yang memenuhi kendala keras (keselamatan klinis, residensi data), atau ketika risiko penguncian-vendor parah dan dihargai.

## Hubungan dengan Rekayasa Perangkat Lunak

Disiplin ekonomi-kesehatan yang dapat ditransfer bersifat tiga kali lipat: **penyesuaian risiko berbasis-prior** (peningkatan pembengkakan 30–40% adalah bias optimisme Green Book perangkat lunak — terapkan secara mekanis, berargumen untuk pengecualian alih-alih darinya); **kejujuran pembanding** (alternatif dari membangun bukan "tidak ada apa-apa", melainkan pembelian terbaik yang tersedia — lihat [biaya peluang](../biaya-peluang/)); dan **pengujian ekuivalensi sebelum perbandingan biaya** (jika beli dan bangun benar-benar memenuhi spesifikasi yang sama, ini adalah [analisis minimalisasi biaya](../analisis-minimalisasi-biaya/) dan yang murah menang; jika tidak, selisih hasil harus dinilai, bukan diasersi).

## Jebakan

- **Membandingkan harga daftar vendor dengan perkiraan pembangunan yang tidak disesuaikan risiko** — sanjungan ganda ke arah pembangunan.
- **Tenaga kerja internal berharga nol** ("timnya sudah di sini").
- **Penguncian tidak dihargai di kedua arah**: biaya keluar vendor, tetapi juga faktor-bus dan masa jabatan pemeliharaan pembangunan.
- **Pembangunan yang digerakkan identitas**: "ini inti bagi kita" diklaim untuk pipa — uji diferensiasi terhadap apakah pelanggan akan menyadarinya.

## Sumber

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
