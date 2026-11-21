# Kos Kelewatan (CoD)

Kos Kelewatan ialah nilai ekonomi yang hilang bagi setiap unit masa apabila sesuatu ciri, produk atau perkhidmatan *tidak* disampaikan. Ia jambatan tunggal terkuat antara metrik penyampaian perisian dan ekonomi kesihatan: ia menukar "kami menghantar lewat" kepada mata wang — atau kepada QALY.

## Mengapa ia penting

Peraturan Reinertsen: "Jika anda hanya mengkuantifikasi satu perkara, kuantifikasikan Kos Kelewatan." Kebanyakan organisasi tahu berapa kos projek tetapi tidak tahu berapa kos sebulan kelewatan, jadi mereka mengoptimumkan bajet sambil kehilangan nilai-masa. Bagi perisian penjagaan kesihatan, taruhannya literal: setiap minggu penambahbaikan laluan ditangguhkan, pesakit menunggu lebih lama dalam keadaan kesihatan lebih teruk. CoD ialah kerangka matematik terkuat untuk dibentangkan kepada pihak berkepentingan NHS kerana ia menghargai *ketiadaan* perisian anda.

## Matematiknya

```
CoD = manfaat bagi setiap unit masa yang dilepaskan semasa tidak disampaikan   (£/minggu atau QALY/minggu)

Jumlah kerugian kelewatan = CoD × tempoh kelewatan

Untuk pengutamaan, lihat wsjf-and-cd3.md: CD3 = CoD / tempoh.
```

Bagi perisian klinikal, nyatakan dalam kesihatan serta wang:

```
CoD_kesihatan = pesakit terjejas seminggu × keuntungan QALY setiap pesakit
CoD_wang      = CoD_kesihatan × λ (ambang kesanggupan membayar, £20k–30k/QALY)
                + penjimatan operasi seminggu yang dilepaskan
```

## Contoh penyelesaian

**Operasi**: perisian menjimatkan £200 bagi setiap pesakit pada satu laluan; trust memproses 50 pesakit sebegitu/minggu.

```
CoD = 200 × 50 = £10,000/minggu
Kelewatan perolehan 10 minggu berharga 200 × 50 × 10 = £100,000 pembaziran yang boleh dielakkan.
```

**Klinikal**: penambahbaikan triaj menghapuskan 5 minggu menunggu (utiliti 0.68 → 0.80 lebih awal) bagi 100 pesakit/minggu:

```
Keuntungan QALY setiap pesakit = (5/52) × 0.12 ≈ 0.0115
CoD_kesihatan = 100 × 0.0115 = 1.15 QALY/minggu
CoD_wang      = 1.15 × £20,000 ≈ £23,000/minggu nilai kesihatan
```

Kelewatan penggunaan 6 bulan "berharga" ~30 QALY — hujah yang membingkai semula gelinciran go-live IT sebagai peristiwa klinikal. (Penanda aras untuk skala: analisis Maersk terkenal Black Swan Farming mendapati ciri tunggal dengan CoD ≈ $200k/minggu yang telah menunggu 38 minggu.)

## Kaitan dengan kejuruteraan perisian

CoD ialah metrik yang menjadikan [masa pimpinan DORA](../metrik-dora/) dan [kecekapan aliran](../metrik-aliran/) boleh dibaca dari segi kewangan: masa pimpinan × CoD = wang (atau kesihatan) terbakar dalam baris gilir. Kegunaan:

- **Pengutamaan**: pangkatkan kerja mengikut CoD/tempoh ([WSJF/CD3](../wsjf-dan-cd3/)) dan bukan pihak berkepentingan paling lantang.
- **Ekonomi proses**: kadens keluaran 2 minggu mempunyai kos kelewatan jangkaan ~1 minggu × CoD bagi setiap ciri berbanding penghantaran berterusan — harga kelompok itu.
- **Perolehan**: kitaran perolehan NHS 6–18 bulan mempunyai CoD; menunjukkannya mengubah perbualan kecemasan (lihat [analisis impak bajet](../analisis-impak-bajet/) untuk pasangan kemampuan).

## Perangkap

- **Mengandaikan CoD linear**: sesetengah kerja mempunyai nilai berbentuk tarikh akhir (tarikh kawal selia — CoD tak terhingga selepas tarikh, sifar sebelumnya) atau nilai mereput (tetingkap penggerak pertama). Kelaskan profil kecemasan sebelum mendarab.
- **CoD pada output yang tiada siapa mahu**: kelewatan hanya berharga jika perkara itu bernilai; sampah yang ditangguhkan percuma.
- **Mengira berganda kelewatan dan diskaun**: [diskaun](../diskaun-dan-keutamaan-masa/) sudah menghargai masa atas ufuk berbilang tahun; CoD ialah versi operasi dalam-ufuk. Gunakan CoD untuk minggu/bulan, anjakan NPV untuk tahun.

## Sumber

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
