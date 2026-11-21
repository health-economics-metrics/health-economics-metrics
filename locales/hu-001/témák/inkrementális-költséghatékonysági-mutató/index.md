# Inkrementális költséghatékonysági mutató (ICER)

Az ICER a többletköltség az egészséghatás többletegységére vetítve, amikor az egyik lehetőséget a következő legjobb alternatíva helyett választod. Az egészségügyi technológiaértékelés címszáma. (Ha a hatásegység a QALY, inkrementális költség-hasznossági hányadosnak, ICUR-nak is nevezik.)

## Miért fontos

Az egészségügyi rendszerek soha nem önmagában értékelnek egy technológiát — mindig *inkrementálisan*, ahhoz képest, amit egyébként tennének. A NICE a technológia ICER-ét a **20 000–30 000 £ per QALY** küszöbhöz hasonlítja; az amerikai ICER intézet 50 000–200 000 $/QALY között közöl; Kanada nagyjából 50 000 CAD$/QALY-vel dolgozik. Hogy a termékedet „megéri-e" egy nemzeti egészségügyi szolgálatnak, formálisan az, hogy az ICER-je átmegy-e a helyi küszöbön. Lásd [fizetési hajlandósági küszöbök](../fizetési-hajlandósági-küszöbök/).

## A matematika

```
ICER = (Cost_new − Cost_comparator) / (Effect_new − Effect_comparator)
     = ΔC / ΔE
```

Az értelmezés szabályai:

- ΔC < 0, ΔE > 0: az új lehetőség **dominál** — olcsóbb és jobb; nincs szükség hányadosra.
- ΔC > 0, ΔE > 0: számítsd ki az ICER-t, hasonlítsd a λ küszöbhöz; fogadd el, ha ICER < λ.
- ΔC > 0, ΔE < 0: az új lehetőség dominált — utasítsd el.
- A hányadosok rosszul viselkednek ΔE = 0 közelében — a rangsoroláshoz részesítsd előnyben a [nettó pénzbeli hasznot](../nettó-pénzbeli-haszon/).

Az összehasonlítónak a *következő legjobb nem dominált lehetőségnek* kell lennie, nem a „semmittevésnek" — lásd [dominancia és hatékonysági határ](../dominancia-és-hatékonysági-határ/).

## Kidolgozott példa

Szívelégtelen betegek távfelügyeleti szolgáltatása, 1000 beteg/évre, a szokásos ellátáshoz képest:

```
Costs:   service £900,000; admissions avoided save £600,000
         ΔC = 900,000 − 600,000 = £300,000
Effects: earlier intervention gains 25 QALYs
         ΔE = 25

ICER = 300,000 / 25 = £12,000 per QALY
```

A 12 000 £/QALY kényelmesen a NICE 20 000 £-os küszöbe alatt van — erős eset. Figyeld meg, mennyire számít a *nettó* költség: a 600 000 £-os kompenzáció nélkül az ICER 36 000 £/QALY lenne, és az eset valószínűleg elbukna. A költségkompenzációk és bizonyítékaik minősége az, ahol ezek az elemzések eldőlnek (lásd [elkerült lefelé irányuló költségek](../elkerült-lefelé-irányuló-költségek/)).

## Kapcsolat a szoftverfejlesztéssel

Az ICER-fegyelem egészében átvihető a mérnöki döntésekre:

```
(cost of option B − cost of option A) / (outcome B − outcome A)
```

— inkrementális költség további telepítésenként, megtakarított mérnökóránként, elkerült incidensenként — mindig a következő legjobb alternatívával szemben, nem a semmittevéssel. A két érdemes szokás: (1) *nevezd meg kifejezetten az összehasonlítót*; a legtöbb eszköz-ROI állítás titokban szalmabábuhoz hasonlít; (2) *előbb nettósítsd a költségeket* — egy 100 ezer £-ba kerülő eszköz, amely 80 ezer £ meglévő kiadást vált ki, ΔC = 20 ezer £.

## Buktatók

- **Egy ICER összehasonlítása pénznemek között kifejezett átváltási lépés nélkül**: az egyik ország pénznemében számított ICER-t megadott módszerrel át kell váltani, mielőtt egy másik ország küszöbéhez hasonlítjuk — lásd [valutaközi ICER-összehasonlítás](../valutaközi-icer-összehasonlítás/) arról, miért fordíthatja meg az átváltási tényező megválasztása (vásárlóerő-paritás vagy piaci árfolyam) maga is a bevezetési döntést.
- **Összehasonlítóval való játszadozás**: egy elavult vagy mesterségesen rossz alapvonalhoz való hasonlítás felfújja a ΔE-t, és hízeleg az ICER-nek.
- **Átlagok inkrementumok helyett**: egy egész program QALY-nkénti költsége nem az ICER-je a kiterjesztésének vagy bevezetésének.
- **Pontbecslés-imádat**: az ICER-ek két bizonytalan különbség hányadosai; a bizonytalanságot [PSA és CEAC-k](../valószínűségi-érzékenységvizsgálat/) útján közöld.
- **A negatív ICER-ek kétértelműek** (az olcsóbb-és-jobb és a drágább-és-rosszabb azonos előjelet ad) — soha ne közölj negatív ICER-t anélkül, hogy megmondanád, melyik kvadránsról van szó.

## Források

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
