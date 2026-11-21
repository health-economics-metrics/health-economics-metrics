# Aktivasi lan Panampa (Activation and Uptake)

Tingkat aktivasi yaiku bagian saka wong sing wis daftar lan tekan nilai migunani sing sepisanan (tindakan "aha" — wacan sepisanan kacathet, pelajaran sepisanan rampung). Panampa (uptake) yaiku versi tingkat populasi: bagian saka populasi *sing layak* sing nampa babar pisan. Bareng, kuwi dadi gerbang ngarep corong nilai: akuisisi → panampa → aktivasi → [retensi](../retensi-lan-churn/) → asil.

## Kenapa Iki Penting

Pangguna sing ora aktif iku biaya murni: ragad akuisisi, panyiapan, lan permukaan dhukungan — nilai klinis nol. Tolok ukur nuduhake yen aktivasi piranti lunak kesehatan ana *ing ngisor* rata-rata lintas industri (≈24% lawan ≈37% kanggo aktivasi pangguna anyar ing sawijining set tolok ukur SaaS; rampunge daftar-cek onboarding ~20%), amarga onboarding sing luwih abot (identitas, idin, keslametan klinis). Panampa nggawa taruhan tingkat populasi: ing [kerangka RE-AIM](../jangkauan-lan-keadilan/), dampak kesehatan masarakat ≈ jangkauan × efektivitas — aplikasi sing apik banget nanging mung ditampa 3% populasi sing layak mung ngobahake jarum populasi sakjerone 3%. Kanggo terapi digital sing diresepake, gerbang panampa katon ing data nasional: **~81% resep DiGA Jerman diaktifake** — siji saka limang perawatan sing wis diresepake lan dibayar ora tau diwiwiti (deleng [jalur cepet DiGA](../jalur-cepet-diga-jerman/)).

## Matematikane

```
Tingkat aktivasi = pangguna sing ngrampungake tindakan kunci ing jendela / pendaftar × 100
Tingkat panampa  = sing nampa / populasi sing layak × 100
Tingkat isi DTx  = kode resep sing diaktifake / resep sing diterbitake × 100

Model nilai corong:
  layak × panampa × aktivasi × manfaat kanthi bobot retensi = nilai populasi
  — papat perkalian; ndandani faktor sing paling cilik biasane
  luwih dominan (teori kendala kanggo corong)
```

## Conto Petungan

Sawijining komisioner nawakake aplikasi pencegahan diabetes marang 80,000 warga sing layak:

```
Diundang → kadaftar:  80,000 → 12,000  (panampa 15%)
Kadaftar → aktif (sesi pisanan + target ditetepake, 7 dina): 12,000 → 5,400 (45%)
Aktif → ngrampungake program 6 sasi: 5,400 → 1,600 (30%)

Efek program (uji coba, sing rampung): 0.03 QALY + £180 biaya sing dihindari
Nilai populasi = 1,600 × (0.03 × £20,000 + £180) ≈ £1.25M
Nilai saben wong sing layak = £15.6 — dibandhingake £780 yen saben wong sing layak ngrampungake.

Ngendi sing kudu diinvestasi? Ngganda-ake panampa (15→30%) ngganda-ake nilai;
munggahake aktivasi 45→65% nambah ~44%; loro-lorone ngungkuli
terus nyempurnakake isi program sing wis dirampungake 1,600 wong kuwi.
```

## Sambungan karo Rékayasa Piranti Lunak

Aktivasi iku tahap corong sing paling gampang digarap rékayasa: gesekan verifikasi identitas, alur idin, desain kahanan kosong, lan wektu-menyang-nilai-sepisanan iku kode, dudu kebijakan (tengah wektu-menyang-nilai ing kesehatan ≈ 1 dina 7 jam ing data tolok ukur — saben jam iku paparan marang churn). Panampa iku masalah sistem distribusi: integrasi menyang jalur rujukan (wektu resep), undhangan sing didhukung dokter umum (kapercayan pindhah), lan aksesibilitas (basa, katrampilan digital — deleng [jangkauan lan keadilan](../jangkauan-lan-keadilan/)). Model nilai corong ing ndhuwur iku generator kasus bisnis kanggo loro-lorone: kalikake faktor-faktore, golek kendalane, banjur regani perbaikane marang nilai populasi sing dibebasake.

## Jebakan

- **Aktivasi diartikan minangka kepenak** (email wis diverifikasi) tinimbang makna klinis (tindakan terapi pisanan) — nggedhekake metrik, medhot rantai nilai.
- **Dolanan denominator panampa**: "saka sing nekani situs" lawan populasi sing bener-bener layak — komisioner kapentingan marang sing nomer loro.
- **Efek seleksi**: pangguna sing gampang diaktifake iku sing paling ora lara lan paling ora kekurangan; perbaikan corong bisa nggedhekake jurang keadilan nalika ningkatake rata-rata.

## Sumber

- Activation benchmarks (healthcare SaaS). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- DiGA activation data, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- RE-AIM framework. <https://re-aim.org/>
