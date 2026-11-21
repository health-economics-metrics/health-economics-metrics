# Metrik Keterlibatan (Engagement Metrics)

Metrik keterlibatan ngukur sepira akeh pangguna bener-bener nggunakake aplikasi kesehatan: kelengketan DAU/MAU, frekuensi lan durasi sesi, panggunaan fitur. Ing kesehatan digital, keterlibatan dudu vanity — iku **dosis**: paparan sing kudu dilewati efek klinis apa wae.

## Kenapa Iki Penting

Obat sing tetep ing botol ora nyembuhake sapa wae; aplikasi sing tetep ora diinstal utawa ora dibukak iku mode kegagalan sing padha. Saben klaim ekonomi kesehatan kanggo produk kesehatan konsumen dikalikan liwat keterlibatan — efikasi sing ditunjukake ing uji diukur ing tingkat panggunaan tartamtu, lan nilai donya nyata skala karo sepira cedhak panggunaan deployment karo tingkat kuwi. Tolok ukur produk standar: DAU/MAU sekitar **20% dianggep sehat** kanggo aplikasi seluler umume, >25% luar biasa; aplikasi kesehatan asring luwih murah.

## Matematikane

```
Kelengketan (DAU/MAU) = pangguna aktif saben dina / pangguna aktif saben sasi × 100
Metrik sesi           = sesi/pangguna/periode; rata-rata durasi = total wektu / sesi
Keterlibatan fitur    = pangguna nindakake tumindak kunci / pangguna aktif

Pigura dosis-respons (peningkatan ekonomi kesehatan):
  efek sing kasembadan ≈ efek uji × f(panggunaan nyata / panggunaan uji)
  ing ngendi f saka analisis dosis-respons — deleng konsep "keterlibatan
  efektif" ing adherence-and-persistence.md: panggunaan sing cukup
  kanggo nggayuh asil sing dikarepake, sing bisa sederhana lan winates
```

## Conto Petungan

Studi pivotal aplikasi tekanan darah nuduhake pangurangan sistolik 6 mmHg ing antarane pangguna sing nyathet ≥4 bacaan/minggu. Ing deployment ing 50,000 pangguna kadaftar:

```
MAU 20,000 (40%); saka kuwi, nyathet ≥4×/minggu: 7,000
Pangguna dosis-efektif = 7,000 / 50,000 = 14% saka basis kadaftar

Efek tingkat populasi ≈ efek uji sing dikirim marang 14%, dudu 100%:
model ekonomi apa wae sing ngutip "50,000 pangguna × 6 mmHg" nggedhekake ~7×.
Model jujur: 7,000 × efek lengkap + kredit parsial (saka data
dosis-respons, yen ana) kanggo 13,000 pangguna ing ngisor ambang.
```

Perkalian iki — liwat corong keterlibatan menyang dosis efektif — iku panggonan paling umum ing ngendi ekonomi kesehatan digital nggedhekake.

## Sambungan karo Rékayasa Piranti Lunak

Insinyur nguwasani corong keterlibatan, sing ndadekake dheweke pemilik variabel *klinis*: gesekan onboarding, strategi notifikasi, wektu muat, lan katahanan offline kabeh ngobahake dosis sing dikirim. Rong implikasi desain: instrumenake **tumindak sing bermakna sacara klinis** (bacaan sing dicathet, pelajaran sing rampung), dudu bukak-bukaan — DAU sing dibangun ing sesi mantul-notifikasi iku penipuan-dosis; lan anggep target keterlibatan minangka target *kecukupan*, dudu maksimalisasi — aplikasi sing nggayuh asile ing 5 menit/minggu lan minggir iku ideal sacara klinis lan "elek" sacara metrik (deleng keterlibatan efektif ing [kepatuhan lan persistensi](../kepatuhan-lan-persistensi/)). Regani karya keterlibatan dhewe liwat model efek-populasi ing ndhuwur: gain 2-poin ing bagean dosis-efektif iku garis QALY sing bisa dietung.

## Jebakan

- **Keterlibatan minangka asil**: panggunaan iku sarana; asile yaiku [PROM](../asil-sing-dilaporake-pasien/) utawa titik pungkasan klinis.
- **Rata-rata ing panggunaan bimodal**: populasi aplikasi kesehatan kapérang dadi pangguna setya lan hantu; rata-rata ora nggambarake sapa wae — kohortake.
- **Inflasi dosis dark-pattern**: streak lan notifikasi rasa salah munggahake metrik lan bisa ngrugekake populasi kuatir sing dilayani aplikasi kesehatan; produk klinis nggawa etika klinis.
- **Asal tolok ukur vendor**: umume tolok ukur keterlibatan sing diterbitake saka vendor analitik, dudu peer review; kalibrasi marang ujimu dhewe.

## Sumber

- App engagement benchmarks. <https://getstream.io/blog/app-retention-guide/>
- Health app KPI guides. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. on effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
