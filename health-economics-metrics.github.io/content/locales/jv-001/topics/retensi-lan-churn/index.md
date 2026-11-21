# Retensi lan Churn (Retention and Churn)

Retensi ngukur pecahan kohort pangguna sing isih aktif N dina sawise miwiti (kurva D1/D7/D30); churn iku pelengkape. Baseline kesehatan-digital sing kejem: **kira-kira 90% pangguna aplikasi kesehatan ninggal ing 30 dina** — retensi D30 kesehatan digital ~3–4% dibandhingake rata-rata kabeh-aplikasi ~6%.

## Kenapa Iki Penting

Eysenbach menehi jeneng iki ing 2005: **hukum attrisi** — kelangan pangguna ing tingkat dhuwur iku sifat intrinsik, struktural intervensi eHealth, dudu bug implementasi, kanthi attrisi ing uji eHealth rutin ngluwihi 50%. Akibat ekonomi iku total: retensi nemtokake *jendhela perawatan* ing ngendi manfaat apa wae bisa dikirim, lan [ekonomi unit](../ekonomi-unit-aplikasi-kesehatan/) — CAC sing dibayar saben pangguna sing tetep 12 dina ora ngirim LTV utawa QALY. Model ekonomi apa wae kanggo produk kesehatan konsumen sing ora mbobot manfaat nganggo kurva retensi iku nggambarake produk sing ora ana.

## Matematikane

```
Retensi_Dn = pangguna aktif ing dina n / ukuran kohort × 100
Tingkat churn = pangguna ilang ing periode / pangguna ing wiwitan periode × 100

Pembobotan manfaat (obahe ekonomi kesehatan):
  manfaat sing dikarepake saben pangguna sing diakuisisi = Σ_t retensi(t) × tingkat manfaat(t)
  ≈ area ing ngisor kurva retensi × manfaat saben-wektu
  — DUDU manfaat uji × 100% pangguna sing diakuisisi

Biaya saben pangguna sing dipertahanake ing D30 = CAC / retensi D30
  (ing D30 4%, CAC £5 sejatine £125 saben pangguna sing dipertahanake)
```

## Conto Petungan

Aplikasi kesehatan mental: uji nuduhake 0.02 QALY sing dipikolehi saben pangguna sing ngrampungake 8 minggu. Kohort deployment 100,000 unduhan, retensi D7 25%, D30 8%, minggu-8 4%:

```
Sing ngrampungake    = 100,000 × 0.04 = 4,000
QALY sing dikirim    = 4,000 × 0.02 = 80  (dudu 100,000 × 0.02 = 2,000)
Ing £20,000/QALY     = £1.6M nilai kesehatan (dudu £40M)

Nilai kesehatan saben unduhan = £16 — angka sing kudu nyetel pira sing bakal
dibayar pembayar saben unduhan, lan iku 4% saka klaim naif.

Kasus perbaikan retensi: munggahake rampung minggu-8 4% → 6% nambah
40 QALY/taun ≈ £800k — rékayasa retensi IKU produksi kesehatan.
```

## Sambungan karo Rékayasa Piranti Lunak

Retensi iku metrik ing ngendi rékayasa produk paling langsung nggawe nilai kesehatan, miturut aritmetika ing ndhuwur. Praktik sing ngobahake iku biasa: wektu-menyang-nilai-pisanan onboarding, desain re-engagement, kinerja, lan sing penting **rampunge dosis sing direncanakake** — program kanthi pungkasan sing ditetepake (8 minggu, banjur lulus) kudu ngukur *rampung*, dudu DAU terus-terusan, nyelarasake metrik karo model klinis tinimbang model perhatian-sing-didanai-iklan. Analisis kaslametan iku piranti sing bener (matematika Kaplan-Meier sing padha karo [taun urip sing dipikolehi](../taun-urip-sing-dipikolehi/)); segmentasi kurva miturut saluran akuisisi, amarga campuran saluran ngowahi retensi luwih akeh tinimbang umume fitur.

## Jebakan

- **Pencucian intention-to-treat kosok balene**: uji nglaporake sing ngrampungake; ekonomi deployment kudu ngetung kabeh sing diakuisisi (peringatan inti Eysenbach).
- **Teater retensi**: pangguna "aktif" sing didorong-notifikasi sing ora tau nindakake tumindak terapeutik (deleng [metrik keterlibatan](../metrik-keterlibatan/)).
- **Mbandhingake kurva ing definisi beda**: "aktif" didefinisikan minangka bukak vs tumindak sing bermakna ngobahake D30 kanthi pirang-pirang kali.
- **Ngabaikake sapa sing churn**: yen sing paling lara churn paling cepet, manfaat saben-pangguna mudhun nalika retensi mundhak ing antarane sing sehat — pasangake kurva karo campuran-kasus (deleng [jangkauan lan keadilan](../jangkauan-lan-keadilan/)).

## Sumber

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
