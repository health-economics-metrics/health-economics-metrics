# Nilai Nyawa Statistik (Value of a Statistical Life, VSL)

Nilai nyawa statistik (VSL) — diarani "nilai fatalitas sing dicegah" (VPF) ing panggunaan Inggris — iku jumlah sing gelem dibayar sacara kolektif dening *populasi* kanggo nyuda risiko siji pati statistik, asale saka studi trade-off upah-risiko (pira bayaran ekstra sing dituntut pekerja kanggo pagawean sing luwih mbebayani) lan survei preferensi-sing-dinyatakake. Iku dudu rega nyawa individu sing dikenal; iku konstruk risiko-populasi, lan insinyur piranti lunak sing mbangun sistem nyuda-risiko — algoritma triase, dispatch ambulans, pemantauan keslametan — kudu ngerti yen asale saka tradisi teoretis beda saka [ambang kesediaan-mbayar](../ambang-kesediaan-mbayar/).

## Kenapa Iki Penting

VSL/VPF iku piranti standar kanggo monetisasi pangurangan risiko-mortalitas ing analisis biaya-manfaat regulasi: keslametan transportasi, regulasi lingkungan, lan sawetara intervensi kesehatan masarakat kabeh nglakokake kasus bisnise liwat iku. Green Book HM Treasury nerbitake angka VPF sing asale saka bukti pasar tenaga kerja lan survei UK, lan Department for Transport nganggo langsung ing penilaian keslametan dalan. Iki tradisi valuasi sing pancen beda saka metodologi QALY × ambang-kesediaan-mbayar: pendekatan ambang ngregani gain kesehatan marang apa sing saiki diprodhuksi *anggaran* kesehatan ing margin, dene VSL/VPF ngregani pangurangan risiko marang apa sing diungkapake wong ing pasar tenaga kerja utawa survei bakal dibayar kanggo iku. Loro kerangka ora tansah bisa dirukunake, lan nggunakake loro-lorone ing kasus sing padha tanpa ngakoni iku kesalahan analitis sing umum.

## Matematikane

```
Pati sing dihindari = populasi × pangurangan_risiko_saben_wong
  (pangurangan_risiko_saben_wong iku probabilitas, contone 0.000001 = pangurangan
   1-saka-sayuta ing risiko mortalitas taunan)

Manfaat mortalitas sing dimonetisasi = pati_sing_dihindari × nilai_fatalitas_sing_dicegah
```

## Conto Petungan

Wilayah 800,000 wong entuk manfaat saka intervensi dispatch/triase digital keslametan-dalan sing nyuda risiko mortalitas taunan saben wong 1 saka sayuta (0.000001):

```
Pati sing dihindari = 800,000 × 0.000001 = 0.8
```

Nganggo Nilai Fatalitas sing Dicegah UK, £2,180,000 (angka HM Treasury/DfT, rega 2023/24 — Green Book nganyari iki saben taun, verifikasi maneh sadurunge dikutip ing analisis urip):

```
Manfaat mortalitas sing dimonetisasi = 0.8 × £2,180,000 = £1,744,000/taun
```

Kurang saka £1.75 yuta saben taun manfaat mortalitas sing dimonetisasi, saka pangurangan risiko sing umume populasi sing kena ora bakal ngerti kanthi individu.

## Sambungan karo Rékayasa Piranti Lunak

Tim piranti lunak kritis-keslametan — firmware piranti medis, piranti lunak kendaraan otonom, sistem kontrol industri — ngadhepi masalah penentuan rega persis iki nalika mbangun kasus biaya-manfaat kanggo investasi keslametan: kepriye ngregani "nyegah siji kegagalan katastrofik" nalika kegagalane langka, abot, lan nyebar ing populasi pangguna sing gedhe? VSL/VPF iku preseden donya nyata sing wis puluhan taun lan didokumentasi umum kanggo menehi angka marang pangurangan risiko tingkat-populasi sing langka lan abot — wujud argumen sing padha karo ngregani investasi SRE marang pemadaman katastrofik langka, mung karo asil mortalitas tinimbang asil downtime.

## Jebakan

- **Nganggep VSL minangka "rega nyawa sing dikenal"**: dudu. VSL/VPF iku konstruk statistik populasi sing asale saka trade-off pangurangan-risiko ing akeh wong, dudu valuasi urip utawa pati wong tartamtu.
- **Ngetung ganda marang petungan manfaat moneter net adhedhasar QALY**: nggunakake angka VSL/VPF lan petungan QALY × ambang kapisah ing kasus sing padha, tanpa rekonsiliasi, meneng-meneng ngetung ganda nilai pati sing dihindari sing padha. Pilih siji kerangka kanggo kasus tartamtu.
- **Mindhah perkiraan VSL ing konteks tanpa penyesuaian**: VSL sing asale saka pasar tenaga kerja siji negara, utawa saka data upah-risiko umur-kerja, ditrapake tanpa penyesuaian ing konteks penghasilan beda utawa populasi beda (bocah, pensiunan) iku masalah metodologis sing wis suwe lan pancen dibantah — dudu sing wis rampung.

## Sumber

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality supplementary guidance (2023/24 prices; Green Book values are updated annually). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (for the US VSL tradition, cited for contrast with the UK VPF figure above). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
