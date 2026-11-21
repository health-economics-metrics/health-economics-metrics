# Statisztikai élet értéke (VSL)

A statisztikai élet értéke (VSL) — az Egyesült Királyságban a „megelőzött haláleset értéke" (VPF) — az az összeg, amelyet egy *populáció* kollektíven hajlandó fizetni egy statisztikai haláleset kockázatának csökkentéséért, bér-kockázat cserevizsgálatokból (mennyi többletbért követelnek a munkavállalók a veszélyesebb munkákért) és kinyilvánított preferenciás felmérésekből levezetve. Nem egyetlen azonosított egyén életének ára; populációs kockázati konstrukció, és a kockázatcsökkentő rendszereket — triázsalgoritmusok, mentőirányítás, biztonsági monitorozás — építő szoftvermérnöknek tudnia kell, hogy más elméleti hagyományból származik, mint a [fizetési hajlandósági küszöbök](../fizetési-hajlandósági-küszöbök/).

## Miért fontos

A VSL/VPF a halálozási kockázat csökkenésének pénzzé tételére szolgáló szokásos eszköz a szabályozási költség-haszon elemzésben: a közlekedésbiztonság, a környezetszabályozás és egyes közegészségügyi beavatkozások üzleti esetei mind rajta futnak át. A HM Treasury Green Bookja az egyesült királyságbeli munkaerőpiaci és felmérési bizonyítékokból levezetett VPF-értéket közöl, és a Közlekedési Minisztérium közvetlenül használja az útbiztonsági értékelésben. Ez valóban eltérő értékelési hagyomány a QALY × fizetési hajlandósági küszöb módszertanhoz képest: a küszöbös megközelítés az egészségnyereséget ahhoz értékeli, amit egy egészségügyi *költségvetés* jelenleg a határon előállít, míg a VSL/VPF a kockázatcsökkentést ahhoz, amit a munkaerőpiac vagy felmérés szereplői feltárnak, hogy megfizetnének érte. A két keretrendszer nem mindig összeegyeztethető, és mindkettő használata ugyanabban az esetben ennek elismerése nélkül gyakori elemzési hiba.

## A matematika

```
Deaths averted = population × risk_reduction_per_person
  (risk_reduction_per_person is a probability, e.g. 0.000001 = 1-in-a-million
   reduction in annual mortality risk)

Monetized mortality benefit = deaths_averted × value_of_prevented_fatality
```

## Kidolgozott példa

Egy 800 000 fős régió egy közúti biztonsági digitális irányítási/triázs-beavatkozásból profitál, amely minden személy éves halálozási kockázatát milliomodnyival (0,000001) csökkenti:

```
Deaths averted = 800,000 × 0.000001 = 0.8
```

Az Egyesült Királyság megelőzött haláleset értékét használva, 2 180 000 £ (HM Treasury/DfT-érték, 2023/24-es árakon — a Green Book évente frissíti, élő elemzésben való idézés előtt ellenőrizd újra):

```
Monetized mortality benefit = 0.8 × £2,180,000 = £1,744,000/year
```

Alig 1,75 millió £ alatti éves pénzzé tett halálozási haszon, olyan kockázatcsökkentésből, amelyet az érintett populáció többsége egyénileg soha nem venne észre.

## Kapcsolat a szoftverfejlesztéssel

A biztonságkritikus szoftvercsapatok — orvosi eszköz firmware, önvezető járművek szoftvere, ipari vezérlőrendszerek — pontosan ezzel az árazási problémával szembesülnek, amikor biztonsági befektetés költség-haszon esetét építik: hogyan árazod a „egy katasztrofális hiba megelőzését", ha a hiba ritka, súlyos és a felhasználók nagy populációjára oszlik el? A VSL/VPF évtizedes, nyilvánosan dokumentált valós előzmény egy ritka, súlyos, populációs szintű kockázatcsökkentés számszerűsítésére — ugyanaz az érvelési forma, mint egy SRE-befektetés árazása egy ritka katasztrofális kiesés ellen, csak halálozási kimenettel a leállási kimenet helyett.

## Buktatók

- **A VSL kezelése „egy azonosított élet áraként"**: nem az. A VSL/VPF populációs statisztikai konstrukció, amelyet sok ember kockázatcsökkentési cseréiből vezettek le, nem egy konkrét személy életének vagy halálának értékelése.
- **Dupla számítás egy QALY-alapú nettó pénzbeli haszon számítással szemben**: VSL/VPF-érték és külön QALY × küszöb számítás használata ugyanabban az esetben, egyeztetés nélkül, csendben duplán számolja ugyanazon elkerült halálesetek értékét. Egy adott esethez válassz egy keretrendszert.
- **A VSL-becslés átültetése kontextusok között kiigazítás nélkül**: az egyik ország munkaerőpiacáról vagy a munkaképes korúak bér-kockázat adataiból levezetett VSL kiigazítatlan alkalmazása más jövedelmi környezetre vagy más populációra (gyermekek, nyugdíjasok) régóta tartó, valóban vitatott módszertani kérdés — nem megoldott.

## Források

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality supplementary guidance (2023/24 prices; Green Book values are updated annually). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (for the US VSL tradition, cited for contrast with the UK VPF figure above). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
