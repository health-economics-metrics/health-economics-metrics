# Pengaktifan dan Pengambilan

Kadar pengaktifan ialah bahagian pendaftar yang mencapai nilai bermakna pertama (tindakan "aha" — bacaan pertama direkodkan, pelajaran pertama selesai). Pengambilan ialah versi populasi: bahagian populasi *layak* yang menggunakannya sama sekali. Bersama-sama, kedua-duanya ialah pintu hadapan corong nilai: perolehan → pengambilan → pengaktifan → [pengekalan](../pengekalan-dan-churn/) → hasil.

## Mengapa ia penting

Pengguna yang tidak diaktifkan ialah kos semata-mata: perbelanjaan perolehan, penyediaan, permukaan sokongan — tiada nilai klinikal. Penanda aras meletakkan pengaktifan perisian penjagaan kesihatan *di bawah* purata merentas industri (≈24% berbanding ≈37% bagi pengaktifan pengguna baharu dalam satu set penanda aras SaaS; penyiapan senarai semak orientasi ~20%), mencerminkan orientasi yang lebih berat (identiti, persetujuan, keselamatan klinikal). Pengambilan membawa taruhan populasi: dalam [kerangka RE-AIM](../capaian-dan-ekuiti/), impak kesihatan awam ≈ capaian × keberkesanan — aplikasi yang hebat tetapi diguna pakai oleh 3% populasi layak hanya menggerakkan jarum populasi sebanyak 3%. Bagi terapeutik digital yang dipreskripsikan, pintu pengambilan ini kelihatan dalam data kebangsaan: **~81% preskripsi DiGA Jerman diaktifkan** — satu daripada lima rawatan yang dipreskripsikan dan dibayar tidak pernah bermula (lihat [laluan pantas DiGA](../laluan-pantas-diga-jerman/)).

## Matematiknya

```
Kadar pengaktifan = pengguna melengkapkan tindakan utama dalam tempoh / pendaftar × 100
Kadar pengambilan = penerima guna / populasi layak × 100
Kadar penebusan DTx = kod preskripsi diaktifkan / preskripsi dikeluarkan × 100

Model nilai corong:
  layak × pengambilan × pengaktifan × manfaat berpemberat pengekalan = nilai populasi
  — empat pendaraban; memperbaiki faktor terkecil biasanya
  mendominasi (teori kekangan untuk corong)
```

## Contoh penyelesaian

Seorang pesuruhjaya menawarkan aplikasi pencegahan diabetes kepada 80,000 penduduk layak:

```
Dijemput → berdaftar:  80,000 → 12,000  (pengambilan 15%)
Berdaftar → diaktifkan (sesi pertama + matlamat ditetapkan, 7 hari): 12,000 → 5,400 (45%)
Diaktifkan → melengkapkan program 6 bulan: 5,400 → 1,600 (30%)

Kesan program (percubaan, yang melengkapkan): 0.03 QALY + £180 kos dielakkan
Nilai populasi = 1,600 × (0.03 × £20,000 + £180) ≈ £1.25J
Nilai bagi setiap orang layak = £15.6 — berbanding £780 jika setiap orang layak
melengkapkannya.

Di mana hendak melabur? Menggandakan pengambilan (15→30%) menggandakan nilai;
menaikkan pengaktifan 45→65% menambah ~44%; kedua-duanya mengatasi usaha
terus menggilap kandungan program yang sudah dilengkapkan oleh 1,600 orang itu.
```

## Kaitan dengan kejuruteraan perisian

Pengaktifan ialah peringkat corong yang paling mudah dikendalikan secara kejuruteraan: geseran pengesahan identiti, aliran persetujuan, reka bentuk keadaan kosong dan masa-ke-nilai-pertama ialah kod, bukan dasar (median masa-ke-nilai penjagaan kesihatan ≈ 1 hari 7 jam dalam data penanda aras — setiap jam daripadanya ialah pendedahan kepada pergeseran). Pengambilan ialah masalah sistem pengedaran: integrasi ke dalam laluan rujukan (detik preskripsi), jemputan yang disokong doktor am (kepercayaan berpindah) dan kebolehcapaian (bahasa, kemahiran digital — lihat [capaian dan ekuiti](../capaian-dan-ekuiti/)). Model nilai corong di atas ialah penjana kes perniagaan bagi kedua-duanya: darabkan faktor-faktornya, cari kekangan, dan taksir harga pembaikan berbanding nilai populasi yang dilepaskannya.

## Perangkap

- **Pengaktifan ditakrifkan sebagai kemudahan** (e-mel disahkan) dan bukan makna klinikal (tindakan terapeutik pertama) — menokok metrik, memutuskan rantaian nilai.
- **Permainan penyebut pengambilan**: "daripada mereka yang melawat laman" lwn populasi yang benar-benar layak — pesuruhjaya mengambil berat tentang yang kedua.
- **Kesan pemilihan**: pengguna yang mudah diaktifkan ialah yang paling kurang sakit dan paling kurang daif; penambahbaikan corong boleh melebarkan jurang ekuiti sambil memperbaiki purata.

## Sumber

- Activation benchmarks (healthcare SaaS). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- DiGA activation data, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- RE-AIM framework. <https://re-aim.org/>
