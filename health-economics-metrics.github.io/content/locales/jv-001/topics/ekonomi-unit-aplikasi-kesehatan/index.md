# Ekonomi Unit Aplikasi Kesehatan (Health App Unit Economics)

Aritmetika komersial produk kesehatan konsumen: biaya akuisisi pelanggan (CAC), nilai umur (LTV), rata-rata pendapatan saben pangguna (ARPU), rega per-anggota-saben-sasi (PMPM), lan bedane pasar-majikan antarane **ROI lan VOI** (value on investment).

## Kenapa Iki Penting

Aplikasi kesehatan ngadhepi himpitan struktural: akuisisi larang (klaim sing diatur, alangan kapercayan, biaya kepatuhan) nalika retensi paling elek ing vertikal piranti lunak apa wae (~90% ditinggal ing 30 dina — deleng [retensi lan churn](../retensi-lan-churn/)). Tes viabilitas standar — **LTV:CAC ≥ 3:1** — mula angel banget ing kesehatan konsumen, sing sebabe industri migrasi menyang model B2B2C: majikan, asuransi, lan sistem kesehatan mbayar PMPM kanggo populasi, ing ngendi pembeli dudu individu sing churn.

## Matematikane

```
CAC   = belanja sales + marketing / pelanggan mbayar anyar
ARPU  = pendapatan / pangguna aktif (saben periode)
LTV   = ARPU × rata-rata umur  =  ARPU / tingkat churn
Viabilitas: LTV : CAC ≥ 3, periode payback ≤ 12–18 sasi

CAC efektif saben pangguna sing dipertahanake = CAC / retensi(t)
  — ing retensi D30 4%, £5 saben instal = £125 saben pangguna sing dipertahanake 30-dina

Pendapatan PMPM = tarif × anggota kadaftar × sasi
  margin vendor = PMPM − biaya-ngladeni saben anggota saben sasi
  — keterlibatan mbalikake tandha: ing langganan B2C keterlibatan ngobahake
    pendapatan; ing PMPM, anggota sing terlibat BIAYANE luwih akeh kanggo diladeni
    tinimbang sing dormant, lan kontrak asil mbalikake maneh
```

## Conto Petungan

Aplikasi turu B2C: £6.99/sasi, churn saben sasi 18%, CAC campuran £38.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — ora viabel

Pivot menyang PMPM majikan: £1.20 PMPM × 40,000 nyawa sing katutup = £48k/sasi
Biaya-ngladeni: infrastruktur £0.15 + dhukungan £0.10 + isi £0.05
  saben anggota ≈ £0.30 → margin ~75%, siklus penjualan dawa nanging churn
  tingkat-kontrak (taunan), dudu tingkat-pangguna (saben dina)

Pitakonan majikan ngowahi metrik: ROI awis keras (klaim suda,
absensi) arang bisa dituduhake kanggo produk wellness —
wangsulan industri yaiku VOI: produktivitas, daya tarik rekrutmen,
keterlibatan — jujur mung yen diwenehi label VOI, dudu didandani
minangka ROI (deleng return-on-investment.md lan social-return-on-investment.md).
```

## Sambungan karo Rékayasa Piranti Lunak

Pilihan rékayasa nyetel loro sisi rasio: **biaya-ngladeni** iku arsitektur ([ekonomi unit cloud](../ekonomi-unit-cloud/) — margin PMPM urip utawa mati ing biaya infrastruktur saben-anggota), lan **LTV** iku rékayasa retensi (saben titik-churn iku pendapatan aritmetika — matematika QALY dokumen [retensi](../retensi-lan-churn/) duwe kembar pendapatan persis). Kanggo produk kesehatan khusus, dasbor ekonomi unit kudu nggawa garis katelu jejer LTV lan CAC: **nilai kesehatan saben pangguna sing diakuisisi** (QALY sing dibobot-retensi × ambang) — amarga pasar pembayar lan gaya-DiGA saya ngregani nganggo iku, lan amarga produk sing ekonomi unit komersial lan klinise beda (nguntungake nanging inert-kesehatan, utawa efektif nanging ora bisa didanai) kudu ngerti masalah endi sing dialami.

## Jebakan

- **LTV saka churn kohort awal**: churn stabil mudhun; nanging uga survivorship — pangguna awal ngandhut luwih apik tinimbang pamirsa skala. Gunakake data kohort sing wis mateng.
- **CAC campuran ing saluran**: CAC paid-social lan CAC rujukan-dokter beda 10×, kanthi profil retensi sing mbalikake — segmentasi utawa disesatake.
- **PMPM tanpa watesan utilisasi**: anggota outlier-terlibat bisa mbalikake margin; modelake distribusi, dudu rata-rata.
- **VOI diwenehake minangka ROI** marang CFO — kegagalan kredibilitas sing dienggo industri wellness majikan sak dasawarsa kanggo entuk.

## Sumber

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
