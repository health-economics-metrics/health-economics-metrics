# Diskon lan Preferensi Wektu (Discounting and Time Preference)

Diskon ngowahi biaya lan manfaat ing mangsa ngarep dadi nilai saiki, amarga manfaat dina iki regane luwih akeh tinimbang manfaat sing padha limang taun maneh.

## Kenapa Iki Penting

Saben penilaian ekonomi kesehatan lan saben kasus bisnis sektor publik sing serius ndiskon aliran pirang-pirang taun. Green Book HM Treasury Inggris ngamanatake tingkat preferensi wektu sosial 3.5% saben taun; kasus acuan NICE ndiskon biaya lan efek kesehatan ing 3.5% saben taun (kanthi tingkat kasus non-acuan 1.5% kanggo terapi cedhak-sembuh kanthi manfaat luwih saka 30+ taun). Yen kasus bisnis piranti lunakmu ngaku "penghematan £5 yuta sajrone 10 taun," reviewer keuangan bakal langsung njaluk angka sing didiskon.

## Matematikane

Nilai saiki saka jumlah mangsa ngarep:

```
PV = FV / (1 + r)^t

PV = nilai saiki
FV = nilai mangsa ngarep ing taun t
r  = tingkat diskon (NICE/Green Book: 0.035)
t  = taun saka saiki
```

Kanggo manfaat taunan konstan B sajrone n taun (anuitas):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Conto Petungan

Piranti lunakmu ngirit trust NHS £100,000 saben taun sajrone 5 taun, wiwit setaun sawise go-live.

Total tanpa diskon: £500,000.

Didiskon ing 3.5%:

```
Taun 1: 100,000 / 1.035^1 = £96,618
Taun 2: 100,000 / 1.035^2 = £93,351
Taun 3: 100,000 / 1.035^3 = £90,194
Taun 4: 100,000 / 1.035^4 = £87,144
Taun 5: 100,000 / 1.035^5 = £84,197

Total PV ≈ £451,505
```

Judhul sing jujur kira-kira £451,000, kira-kira 10% luwih sithik tinimbang jumlah naif. Saiki umpamane panyampaian mundur setaun: saben suku geser setaun mengko, lan PV mudhun dadi kira-kira £436,000 — tampilan diskon saka [biaya keterlambatan](../biaya-keterlambatan/).

## Sambungan karo Rékayasa Piranti Lunak

- **Pelunasan utang teknis lan migrasi platform** njanjekake aliran manfaat pirang-pirang taun mbesuk; diskonen sadurunge dibandhingake karo karya sing bali modal kuartal iki.
- **Biaya ing ngarep, manfaat ing mburi** iku wujud standar migrasi. Diskon ngukum wujud kuwi, kanthi bener: iku ngregani nilai wektu bebas-risiko saka ngomitake kapasitas saiki kanggo nilai mengko.
- **Klaim "penghematan ing taun 5"** pantes diragukan kaping pindho — loro-lorone didiskon abot lan ora mesthi banget (deleng [analisis sensitivitas](../analisis-sensitivitas/)).

## Jebakan

- **Ndiskon biaya nanging ora manfaat** (utawa kosok balene) — kasus acuan ndiskon loro-lorone, ing tingkat sing padha.
- **Nganggo tingkat komersial (8–12%) ing kasus sektor publik**, utawa 3.5% ing sing didhukung venture. Cocokake tingkat karo pangambil keputusan.
- **Nyampur diskon karo inflasi.** Diskon ditrapake ing nilai *riil* (disesuaikan inflasi); aja nindakake loro-lorone kanthi implisit.

## Sumber

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
