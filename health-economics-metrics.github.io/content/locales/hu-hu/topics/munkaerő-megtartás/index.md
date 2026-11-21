# Munkaerő-megtartás

A munkaerő-megtartás gazdaságtana számszerűsíti, mibe kerül egy egészségügyi rendszernek a személyzeti fluktuáció — toborzás, beillesztés, betöltetlen állás pótlása — és ezért mennyit ér az a szoftver, amely csökkenti az adminisztratív kiégést. A rutinszerű adminisztratív adatfeladatok okozta kiégés az NHS-ben a személyzeti fluktuáció és betegszabadság elsődleges mozgatója.

## Miért fontos

Amikor egy klinikus távozik, a tröszt háromszor fizet: a pótló toborzásáért (hirdetés, ügynökségi díjak, interjúk), a beillesztéséért (hónapokig csökkent termelékenység, felügyelet), és a betöltetlen állás addigi pótlásáért — jellemzően ügynökségi vagy helyettesítő személyzettel az érdemi Agenda for Change díjak 2–3-szorosán (lásd [elkerülhető kiszervezési költségek](../elkerülhető-kiszervezési-költségek/) és [kemény készpénzfelszabadító megtakarítások](../kemény-készpénzfelszabadító-megtakarítások/)). Mivel a fluktuációs költségek valódi készpénz, a megtartás javítása azon kevés munkaerő-előny egyike, amelyet egy pénzügyi igazgató félre tud tenni. Az adminisztratív súrlódás következetesen a klinikai kiégés leggyakrabban említett okai közé tartozik, ami szoftverrel kezelhető költséggé teszi.

## A matematika

```
Cost per leaver = recruitment cost + onboarding/productivity-ramp cost
                + vacancy cover premium × vacancy duration

Annual turnover cost = headcount × turnover rate × cost per leaver

Value of software  = headcount × Δturnover rate × cost per leaver
                   + sickness-absence reduction × cover cost/day
```

Az oksági láncnak két becsült szeme van — szoftver → kiégés/súrlódás, és kiégés → fluktuáció —, ezért mindkettőt támaszd alá bizonyítékkal (személyzeti felmérések előtte/utána; közzétett kiégés–lemorzsolódás összefüggések), és tartsd szerényen az állított Δ-t.

## Kidolgozott példa

Egy tröszt 1200 ápolót foglalkoztat; a fluktuáció 11%/év. Távozónkénti költség:

```
Recruitment ≈ £4,500;  onboarding/ramp ≈ £6,000
Vacancy cover: 4 months × 0.6 WTE covered by agency premium ≈ £8,000
Total ≈ £18,500 per leaver
Baseline turnover cost = 1,200 × 0.11 × 18,500 ≈ £2.44M/year
```

A dokumentációs terhet csökkentő szoftver (automatikusan kitöltött felmérések, egyszeri bejelentkezés, diktálás) hihetően 1 százalékponttal mozdítja a fluktuációt:

```
Value = 1,200 × 0.01 × 18,500 = £222,000/year cash-relevant
```

A személyzeti felmérés súrlódási pontszámaival alátámasztott 1 pontos állítás hiteles; a 4 pontos nem. Futtasd a [tornádót](../érzékenységvizsgálat/) a Δfluktuáción: minden mást dominál a modellben.

## Kapcsolat a szoftverfejlesztéssel

A mérnöki megtartás matematikája azonos és rosszabbul dokumentált: egy senior mérnök pótlása 6–12 havi teljes fizetésbe kerül (toborzás, bejáratás, elveszett kontextus), így egy 15% lemorzsolódású, 200 fős szervezet évente milliókat éget el a fluktuációra. A fejlesztői élménybe való befektetés ([SPACE és DevEx](../space-és-devex/)) az ápolók dokumentációs terhének csökkentésének közvetlen analógja — és ugyanúgy kell indokolni: mért súrlódási pontszámok, a lemorzsolódásra állított szerény hatás, a távozónkénti költség a saját pénzügyi adataidból. Az egészséggazdasági fegyelem, amelyet másolni kell: a távozót *őszintén költségezni*, ahelyett hogy azon vitatkoznánk, vajon az emberek „valóban" az eszközök miatt mennek-e el.

## Buktatók

- **A fluktuáció minden mozgásának a beavatkozásnak tulajdonítása** — a munkaerőpiacok sokkal jobban mozgatják a fluktuációt, mint a szoftver; használj kontrollcsoportokat vagy legalább ágazati trendkorrekciót.
- **Dupla számítás**: a megtartási megtakarítások és az ügynökségi kiadási megtakarítások átfedik egymást (a betöltetlen állás pótlása *az* ügynökségi kiadás); egyeztesd a sorokat.
- **A késleltetés figyelmen kívül hagyása**: a kiégés által hajtott lemorzsolódás a súrlódás változásaira 1–2 év alatt reagál, nem a következő negyedévben.

## Források

- NHS England, reducing agency spend. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Staff Survey (burnout and intention-to-leave data). <https://www.nhsstaffsurveys.com/>
