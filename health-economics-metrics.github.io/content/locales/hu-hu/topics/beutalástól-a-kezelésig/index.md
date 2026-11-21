# Beutalástól a kezelésig (RTT)

A beutalástól a kezelésig eltelt idő a háziorvosi beutalástól a szakorvos által vezetett kezelés megkezdéséig tartó eltelt idő. Az NHS Constitution határozza meg a szabványt: **a betegek 92%-ának 18 héten belül kell megkezdenie a kezelést**. Az RTT az angol NHS egyetlen legpolitikaibb láthatóságú működési mutatója.

## Miért fontos

Azok a trösztök, amelyek elmulasztják az RTT-célokat, szabályozói vizsgálattal, beavatkozással és hírnévkárral szembesülnek; az országos várólista címlapszám. Minden hét, amelyet egy beteg vár, elveszett egészség (rosszabb egészségi állapotban várakozás — lásd lent a QALY-számtant), és gyakran nyert költség (az állapotok romlanak; lásd [korábbi beavatkozás](../korábbi-beavatkozás/)). Az a szoftver, amely időt takarít meg a beutalástól a kezelésig tartó útvonal bármely pontján — triázs, diagnosztikai átfutás, rendelői kapacitás, ütemezés —, közvetlenül enyhíti a szabvány nem teljesítésének működési és pénzügyi következményeit, ezért az RTT-hatás elsőrangú előnysor az NHS digitális üzleti eseteiben.

## A matematika

```
RTT performance = patients treated within 18 weeks / total treated × 100
Waiting-time health cost per patient = wait duration × (utility_treated − utility_waiting)

Pathway view: RTT = Σ stage durations (referral triage → first appointment →
diagnostics → decision → treatment) — improve the longest queue, not the
busiest stage (see flow-metrics.md).
```

## Kidolgozott példa

Egy szakterület évente 5000 útvonalbeteget kezel; átlagos várakozás 24 hét; várakozási hasznosság 0,68, kezelt 0,80.

A digitális triázs plusz a közvetlenül-vizsgálatra protokollok 5 hét tiszta sorbanállást szüntetnek meg:

```
QALY gain = 5,000 × (5/52) × (0.80 − 0.68) = 57.7 QALYs/year
Monetized at £20,000–£30,000/QALY (see willingness-to-pay-thresholds.md):
  ≈ £1.15M–£1.73M/year of health value
```

— plusz a tröszt a 18 hetes szabvány megsértéséről a teljesítésére vált, aminek olyan irányítási értéke van, amelyet egyetlen táblázat sem ragad meg teljesen.

## Kapcsolat a szoftverfejlesztéssel

Az RTT egy **átfutásiidő-mutató többlépcsős soron keresztül** — a kórház változata a commit-től élesig tartó átfutási időnek (lásd [DORA-mutatók](../dora-mutatók/)). A javítási módszer azonos: műszerezz minden szakaszt, találd meg, hol gyűlik a naptári idő (szinte mindig az átadások és sorok, nem a klinikai munka), és szüntesd meg a várakozási állapotokat. Tipikus szoftveres nyereségek: e-triázs, amely a beutalókat órák alatt irányítja heti kötegek helyett, diagnosztikai eredmények push-olása utánkövető időpontok helyett, és automatizált közvetlenül-vizsgálatra kritériumok. Értékeld a javulást a QALY/hétben denominált [késedelem költségével](../a-késedelem-költsége/).

## Buktatók

- **Egy olyan szakasz javítása, amely nem a szűk keresztmetszet** — az első időpont várakozásának csökkentése, miközben a diagnosztikai sorok nőnek, csak a gyűlőhelyet mozgatja.
- **Játszadozás**: az útvonal-visszaállítások és óraszüneteltetések javíthatják a jelentett RTT-t anélkül, hogy bárkit korábban kezelnének; auditáld az alapul szolgáló eloszlást.
- **A teljes útvonal-javulás állítása** egy eszköznek, amikor több változás együtt érkezett — a tulajdonításhoz összehasonlító kell.

## Források

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
