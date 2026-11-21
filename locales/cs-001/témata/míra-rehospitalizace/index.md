# Míra rehospitalizace

30denní míra rehospitalizace je procento propuštěných pacientů, kteří se do 30 dnů vrátí jako akutní případ. Je to kanonická metrika *kvality propuštění* zdravotního systému – a nese přímé finanční sankce.

## Proč na tom záleží

Rehospitalizace znamená, že první propuštění nevydrželo: předčasné propuštění, selhání předání léků, žádná následná péče nebo chybějící sociální podpora. Plátci ji výslovně penalizují – americký Hospital Readmissions Reduction Program krátí hospitalizaci až 3 % plateb Medicare; NHS historicky neplatilo za odvratitelné 30denní akutní rehospitalizace. Odvrácení rehospitalizace je tedy jednou z mála kategorií přínosů, která je pro poskytovatele *přímo* relevantní z hlediska hotovosti, nejen kapacity.

## Matematika

```
Readmission rate = emergency readmissions within 30 days / index discharges × 100
Risk-standardized comparisons adjust for case mix; penalty programmes
compare observed vs expected for like hospitals.
Value of avoidance = avoided readmissions × (cost per readmission spell
                     + penalty exposure per readmission)
```

## Řešený příklad

Aplikace podpory po propuštění při srdečním selhání (sledování příznaků, upozornění na váhu, připomínky léků, eskalace sestrou): 2 000 propuštění ročně, základní míra rehospitalizace 18 %, studie ukazuje 14 % s aplikací.

```
Avoided readmissions = 2,000 × (0.18 − 0.14) = 80/year
Cost per readmission spell ≈ £3,500 → £280,000/year avoided treatment cost
Plus penalty/non-payment exposure on those spells.
App cost: 2,000 × £60 = £120,000/year
Net ≈ +£160,000/year, before any QALY claim for avoided deterioration.
```

Číslem k obhajobě je účinek 4 procentních bodů: musí pocházet z kontrolovaného srovnání, protože míry rehospitalizace kolísají s případovým mixem a sezónou.

## Souvislost se softwarovým inženýrstvím

Rehospitalizace je **míra selhání změn** zdravotního systému (viz [metriky DORA](../metriky-dora/)): práce, která byla „dodána“ a do 30 dnů se vrátila. Analogie jsou hluboké – znovuotevřené tikety a regresní incidenty ukazují na špatnou „kvalitu propuštění“ (slabé ověření, předčasné uzavření, chybějící dokumenty předání); účetnictví ve stylu sankce (platí opravující tým, ne přijímající) mění chování; a obě oblasti se naučily stejné poučení, že tlačit surovou propustnost (rychlejší propuštění, rychlejší dodání) bez investice do předání jen mění viditelné fronty na neviditelné přepracování. „30denní míra znovuotevření“ patří na dashboard každého týmu, který slaví cycle time.

## Úskalí

- **Hrátky přeznačením**: rehospitalizace kódované jako pozorovací pobyty nebo nové stavy; auditujte definici.
- **Z jakékoli příčiny vs související příčina**: 30denní z jakékoli příčiny zahrnuje skutečně nesouvisející události; sankce obvykle používají jakoukoli příčinu právě proto, že „související“ se dá zmanipulovat.
- **Slepota k případovému mixu**: nemocnice sloužící nemocnějším, chudším populacím má více rehospitalizací z důvodů, které žádná aplikace nespraví – před srovnáním upravte na riziko.

## Zdroje

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, emergency readmissions statistics. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
