# Analisis Biaya-Manfaat (Cost-Benefit Analysis, CBA)

CBA ngregani biaya *lan* asil nganggo dhuwit. Iku siji-sijine jinis analisis sing bisa njawab "apa iki pantes ditindakake babar pisan?" — dudu mung "pilihan endi sing paling apik?" — amarga manfaat sing dimonetisasi bisa dibandhingake langsung karo biaya.

## Kenapa Iki Penting

CBA iku standar **Green Book** HM Treasury Inggris kanggo kabeh penilaian belanja umum, kalebu kesehatan nalika asil bisa dimonetisasi. Ing ngendi [CEA](../analisis-efektivitas-biaya/)/[CUA](../analisis-biaya-utilitas/) mandheg ing "biaya saben unit kesehatan," CBA ngregani kesehatan dhewe (QALY × nilai ambang) lan kabeh liyane — wektu, lelungan, karbon — lan nglaporake siji angka net. Saben kasus bisnis digital NHS lengkap ngemot kasus ekonomi bentuk-CBA.

## Matematikane

```
NPV (nilai sosial net saiki) = Σ_t [ (Manfaat_t − Biaya_t) / (1 + r)^t ]
BCR (rasio manfaat-biaya)    = PV(manfaat) / PV(biaya)

Adopsi yen NPV > 0 (setara BCR > 1); urutake miturut NPV, dudu BCR.
r = 3.5% (tingkat preferensi wektu sosial Green Book)
```

Efek kesehatan bisa mlebu minangka moneter dadi QALY × λ (deleng [ambang kesediaan-mbayar](../ambang-kesediaan-mbayar/)). Green Book uga ngamanatake **penyesuaian bias optimisme** — munggahake perkiraan biaya lan nyuda manfaat nganggo persentase adhedhasar bukti, amarga penilaian sacara sistematis kakehan optimis.

## Conto Petungan

Sistem e-referral, cakrawala 5-taun, diskon 3.5%:

```
Biaya:    build £1.2M (taun 0), operasi £300k/taun (taun 1–5)
Manfaat:  penghematan admin £250k/taun, diagnostik dobel sing dihindari £280k/taun,
          wektu pasien sing dihemat 40,000 jam/taun × £15 = £600k/taun → £1,130k/taun

PV biaya    = 1,200k + 300k × 4.515 (faktor anuitas) = £2,555k
PV manfaat  = 1,130k × 4.515                          = £5,102k

NPV = 5,102 − 2,555 = +£2,547k     BCR = 2.0
```

Trapake bias optimisme Green Book (umpamane +40% ing biaya build, −20% ing manfaat): PV biaya ≈ £3,035k, PV manfaat ≈ £4,082k, NPV ≈ **+£1,047k** — isih positif, kuwi tujuane penyesuaian: kasus kudu bisa slamet saka optimismene dhewe.

## Sambungan karo Rékayasa Piranti Lunak

Kasus bisnis rékayasa iku CBA informal. Peningkatan Green Book sing pantes dicolong:

- **Bias optimisme minangka kenaikan standar** — insinyur nyepelekake biaya migrasi sakeh dipercaya kaya kementerian nyepelekake biaya infrastruktur; trapake kenaikan sing dinyatakake tinimbang pura-pura wektu iki beda.
- **Monetisasi manfaat dominan kanthi jujur utawa ora babar pisan** — wektu pasien/pangguna dimonetisasi ing tarif sing bisa dipertahanake; "nilai merek" ora.
- **NPV ngurutake, BCR ora**: proyek cilik kanthi BCR 5 bisa kurang penting tinimbang sing gedhe kanthi BCR 1.6.

## Jebakan

- **Monetisasi sing ora bisa dimonetisasi** kanggo nggedhekake manfaat (semangat, "keselarasan strategis") — jaga kuwi kualitatif, miturut [analisis biaya-akibat](../analisis-biaya-akibat/).
- **Ngetung transfer minangka manfaat**: dhuwit sing pindhah antarane badan umum dadi nol ing [perspektif](../perspektif-analisis/) masarakat.
- **Ora ana kontrafaktual**: manfaat diukur marang pilihan do-minimum, dudu marang nol.

## Sumber

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
