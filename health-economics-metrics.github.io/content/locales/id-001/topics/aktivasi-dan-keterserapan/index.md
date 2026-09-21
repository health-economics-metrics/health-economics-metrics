# Aktivasi dan Keterserapan

Tingkat aktivasi adalah proporsi pendaftar yang mencapai nilai bermakna pertama (tindakan "aha" — pembacaan pertama tercatat, pelajaran pertama selesai). Keterserapan adalah versi populasinya: proporsi populasi *yang memenuhi syarat* yang mengadopsi sama sekali. Bersama-sama, keduanya adalah gerbang depan corong nilai: akuisisi → keterserapan → aktivasi → [retensi](../retensi-dan-churn/) → hasil.

## Mengapa Ini Penting

Pengguna yang tidak teraktivasi adalah biaya murni: biaya akuisisi, penyediaan, permukaan dukungan — nol nilai klinis. Tolok ukur menempatkan aktivasi perangkat lunak kesehatan *di bawah* rata-rata lintas industri (≈24% vs ≈37% untuk aktivasi pengguna baru dalam satu set tolok ukur SaaS; penyelesaian daftar periksa orientasi ~20%), mencerminkan orientasi yang lebih berat (identitas, persetujuan, keselamatan klinis). Keterserapan membawa taruhan populasi: dalam [kerangka RE-AIM](../jangkauan-dan-kesetaraan/), dampak kesehatan masyarakat ≈ jangkauan × efektivitas — aplikasi yang luar biasa yang diadopsi oleh 3% populasi yang memenuhi syarat menggerakkan jarum populasi sebesar 3% saja. Untuk terapeutik digital yang diresepkan, gerbang keterserapan terlihat dalam data nasional: **~81% resep DiGA Jerman diaktifkan** — satu dari lima perawatan yang diresepkan dan dibayar tidak pernah dimulai (lihat [jalur cepat DiGA](../jalur-cepat-diga-jerman/)).

## Perhitungan

```
Tingkat aktivasi = pengguna yang menyelesaikan tindakan kunci dalam jendela waktu / pendaftar × 100
Tingkat keterserapan = pengadopsi / populasi yang memenuhi syarat × 100
Tingkat pengisian DTx = kode resep yang diaktifkan / resep yang diterbitkan × 100

Model nilai corong:
  memenuhi syarat × keterserapan × aktivasi × manfaat berbobot retensi = nilai populasi
  — empat perkalian; meningkatkan faktor terkecil biasanya
  mendominasi (teori kendala untuk corong)
```

## Contoh yang Diselesaikan

Sebuah komisioner menawarkan aplikasi pencegahan diabetes kepada 80.000 penduduk yang memenuhi syarat:

```
Diundang → terdaftar:  80.000 → 12.000  (keterserapan 15%)
Terdaftar → teraktivasi (sesi pertama + tujuan ditetapkan, 7 hari): 12.000 → 5.400 (45%)
Teraktivasi → menyelesaikan program 6 bulan: 5.400 → 1.600 (30%)

Efek program (uji coba, penyelesai): 0,03 QALY + £180 biaya yang dihindari
Nilai populasi = 1.600 × (0,03 × £20.000 + £180) ≈ £1,25 juta
Nilai per orang yang memenuhi syarat = £15,6 — dibandingkan £780 jika setiap orang
yang memenuhi syarat menyelesaikan.

Di mana harus berinvestasi? Menggandakan keterserapan (15→30%) menggandakan nilai;
meningkatkan aktivasi 45→65% menambah ~44%; keduanya mengalahkan terus
memoles konten program yang sudah diselesaikan oleh 1.600 orang tersebut.
```

## Hubungan dengan Rekayasa Perangkat Lunak

Aktivasi adalah tahap corong yang paling dapat ditangani dari sisi rekayasa: gesekan verifikasi identitas, alur persetujuan, desain keadaan kosong, dan waktu-ke-nilai-pertama adalah kode, bukan kebijakan (median waktu-ke-nilai kesehatan ≈ 1 hari 7 jam dalam data tolok ukur — setiap jamnya adalah eksposur pengabaian). Keterserapan adalah masalah sistem distribusi: integrasi ke dalam jalur rujukan (momen resep), undangan yang didukung dokter umum (transfer kepercayaan), dan aksesibilitas (bahasa, keterampilan digital — lihat [jangkauan dan kesetaraan](../jangkauan-dan-kesetaraan/)). Model nilai corong di atas adalah generator kasus bisnis untuk keduanya: kalikan faktor-faktornya, temukan kendalanya, hargai perbaikan terhadap nilai populasi yang dilepaskannya.

## Jebakan

- **Aktivasi yang didefinisikan sebagai kenyamanan** (email terverifikasi) daripada makna klinis (tindakan terapeutik pertama) — menggembungkan metrik, merusak rantai nilai.
- **Permainan penyebut keterserapan**: "dari yang mengunjungi situs" vs populasi yang benar-benar memenuhi syarat — komisioner peduli dengan yang kedua.
- **Efek seleksi**: pengguna yang mudah diaktifkan adalah yang paling tidak sakit dan paling tidak kekurangan; perbaikan corong dapat memperlebar kesenjangan kesetaraan sambil meningkatkan rata-rata.

## Sumber

- Activation benchmarks (healthcare SaaS). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- DiGA activation data, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- RE-AIM framework. <https://re-aim.org/>
