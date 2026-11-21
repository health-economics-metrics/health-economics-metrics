# Költség-haszon elemzés (CBA)

A CBA mind a költségeket, *mind* a kimeneteket pénzben értékeli. Ez az egyetlen elemzéstípus, amely a „megéri-e ezt egyáltalán megtenni?" kérdésre válaszolhat — nem csupán arra, hogy „melyik lehetőség a legjobb?" — mert a pénzzé tett előnyök közvetlenül összehasonlíthatók a költségekkel.

## Miért fontos

A CBA az Egyesült Királyság HM Treasury **Green Book** szabványa minden közkiadás értékelésére, beleértve az egészségügyet is, ha a kimenetek pénzzé tehetők. Ahol a [CEA](../költséghatékonysági-elemzés/)/[CUA](../költség-hasznosság-elemzés/) az „egészségegységenkénti költségnél" megáll, a CBA magát az egészséget (QALY × küszöbérték) és minden mást — időt, utazást, szén-dioxidot — árazza, és egyetlen nettó számot közöl. Minden teljes NHS digitális üzleti eset tartalmaz CBA-alakú gazdasági esetet.

## A matematika

```
NPV (net present social value) = Σ_t [ (Benefits_t − Costs_t) / (1 + r)^t ]
BCR (benefit-cost ratio)       = PV(benefits) / PV(costs)

Adopt if NPV > 0 (equivalently BCR > 1); rank by NPV, not BCR.
r = 3.5% (Green Book social time preference rate)
```

Az egészséghatások pénzzé téve QALY × λ-ként léphetnek be (lásd [fizetési hajlandósági küszöbök](../fizetési-hajlandósági-küszöbök/)). A Green Book **optimizmustorzítás-korrekciókat** is előír — a költségbecslések felfelé, az előnyök lefelé korrigálása bizonyítékalapú százalékokkal, mert az értékelések rendszeresen rózsaszínűek.

## Kidolgozott példa

E-beutaló rendszer, 5 éves horizont, 3,5% diszkont:

```
Costs:    build £1.2M (year 0), run £300k/yr (years 1–5)
Benefits: admin savings £250k/yr, avoided duplicate diagnostics £280k/yr,
          patient time saved 40,000 hrs/yr × £15 = £600k/yr → £1,130k/yr

PV costs    = 1,200k + 300k × 4.515 (annuity factor) = £2,555k
PV benefits = 1,130k × 4.515                          = £5,102k

NPV = 5,102 − 2,555 = +£2,547k     BCR = 2.0
```

Alkalmazd a Green Book optimizmustorzítást (mondjuk +40% az építési költségre, −20% az előnyökre): a költségek jelenértéke ≈ 3035 ezer £, az előnyöké ≈ 4082 ezer £, NPV ≈ **+1047 ezer £** — még mindig pozitív, ami a korrekció lényege: az eseteknek túl kell élniük a saját optimizmusukat.

## Kapcsolat a szoftverfejlesztéssel

A mérnöki üzleti esetek informális CBA-k. A Green Book fejlesztései, amelyeket érdemes ellopni:

- **Az optimizmustorzítás mint szokásos felár** — a mérnökök ugyanolyan megbízhatóan alábecsülik a migrációs költséget, ahogy a minisztériumok az infrastruktúra-költséget; alkalmazz kimondott felárat ahelyett, hogy úgy tennél, mintha ez alkalommal más lenne.
- **A meghatározó előnyt tisztességesen értékeld pénzben, vagy sehogy** — a beteg/felhasználó ideje védhető rátákon pénzzé tehető; a „márkaérték" nem.
- **Az NPV rangsorol, a BCR nem**: egy apró, 5-ös BCR-ű projekt kevesebbet számíthat, mint egy nagy 1,6-os BCR-ű.

## Buktatók

- **A pénzzé tehetetlen pénzzé tétele** az előnyök felfújására (morál, „stratégiai illeszkedés") — tartsd ezeket kvalitatívnak, a [költség-következmény elemzés](../költség-következmény-elemzés/) szerint.
- **Átutalások előnyként számlálása**: a közintézmények közötti pénzmozgás nullára nettósodik a társadalmi [nézőpontból](../elemzési-nézőpont/).
- **Nincs kontrafaktuális**: az előnyöket a minimális beavatkozás lehetőségéhez mérik, nem a nullához.

## Források

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
