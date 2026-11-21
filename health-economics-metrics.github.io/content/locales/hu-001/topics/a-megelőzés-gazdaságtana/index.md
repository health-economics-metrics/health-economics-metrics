# A megelőzés gazdaságtana

A betegség kialakulása vagy progressziója előtti beavatkozás gazdaságtana. A címszó-megállapítás ellentétes az intuícióval: **a legtöbb megelőzés nem takarít meg pénzt** — jó áron vásárol egészséget. Cohen, Neumann és Weinstein mérföldkő jelentőségű NEJM-elemzése szerint a megelőző beavatkozások kevesebb mint 20%-a nettó költségmegtakarító; a többi legfeljebb költséghatékony.

## Miért fontos

A „a megelőzés pénzt takarít meg" az egészségpolitika leggyakrabban ismételt hamis állítása, és az erre épülő üzleti eseteket az egészséggazdászok lerombolják. Az őszinte szerkezet: a megelőzés most pénzbe kerül (egész populációk szűrése, olyan emberek kockázati tényezőinek kezelése, akik soha nem betegedtek volna meg), és később ad vissza egészséget — általában *jó* QALY-nkénti költséggel, alkalmanként megtakarítással, néha borzalmas áron. Annak ismerete, melyik rendszerben vagy, maga az elemzés. A különbség kereskedelmileg is számít: az a megelőző termék, amelyet „pénzt takarít meg az NHS-nek" jelzéssel adnak el, olyan auditot hív, amelyen elbukik; „QALY-kat vásárol 4000 £-ért" jelzéssel ugyanazokkal a tényekkel nyerhet. Lásd [korábbi beavatkozás](../korábbi-beavatkozás/) az útvonalon belüli változatért. Mielőtt egy megelőzési programot költségeznél, a [populációs attributív hányad](../populációs-attributív-hányad/) válaszolja meg előbb a méretezési kérdést — a célzott betegségteher mekkora részét szüntethetné meg hihetően a programban kezelt kockázati tényező.

## A matematika

```
Net cost of prevention (per person) =
    intervention cost × everyone treated
  − downstream costs avoided × the few who would have progressed
  (both discounted — the avoided costs are years away; see
   discounting-and-time-preference.md)

Cost-saving requires: intervention cost < P(progression) × avoided cost × discount factor
Cost-effective requires only: net cost / QALYs gained < threshold
```

A megelőzési paradoxon: a beavatkozás költsége az egész populációra szorzódik; az előnyök csak a kontrafaktuális keveseknél jelentkeznek.

## Kidolgozott példa

Egy hipertónia-kezelő alkalmazás 100 000 veszélyeztetett felnőttnek, személyenként évi 25 £-ért. 10 év alatt 400 stroke-ot előz meg (mindegyik 45 000 £ diszkontált költséggel és 3 elveszett QALY-vel).

```
Cost:    100,000 × £25 × 10 yrs (discounted ≈ ×8.3) ≈ £20.8M
Offsets: 400 × £45,000 = £18.0M
Net cost ≈ £2.8M — NOT cost-saving

QALYs gained = 400 × 3 = 1,200
Cost per QALY = 2.8M / 1,200 ≈ £2,300/QALY — outstandingly cost-effective
```

Ugyanaz a program, mindkét igazság: 2,8 M£ készpénzt veszít, és a NICE-küszöb tizedén vásárol egészséget. Finanszírozd a második számon; soha ne ígérd az elsőt.

## Kapcsolat a szoftverfejlesztéssel

A shift-left minőség megelőzési gazdaságtan, a fenntartással együtt. A review-k, tesztek és statikus elemzés *minden* változásra költséget alkalmaz, hogy a kevesekben elkapja a problémákat, amelyek éles incidensekké progrediáltak volna. A hibaköltség-görbe (10–100× szakaszonként) játssza a stroke-költségek szerepét — és az őszinte következtetés tükrözi az egészségügyét: a shift-left általában költség*hatékony*, nem automatikusan költség*megtakarító*, mert a legtöbb jelzett probléma soha nem vált volna incidenssé (a kontrafaktuális kevesek problémája). Számítsd ki: a kapu teljes költsége időszakonként vs a tényleg elkerült incidensek × incidensköltség — ugyanaz a kidolgozott példa-szerkezet, az [NNT](../kezelendő-betegek-száma/) mint elkapásonkénti egység.

## Buktatók

- **Költségmegtakarítás állítása, amikor a bizonyíték költséghatékonyságot támogat** — a megelőzés-szószólás meghatározó hibája mindkét területen.
- **Diszkontálatlan jövőbeli kompenzációk**: 15 évvel későbbi előnyök névértéken.
- **A túldiagnosztizálás/túlkezelés költségeinek figyelmen kívül hagyása**: a megelőzés áldiagnózist is talál — lásd [a szűrés gazdaságtana](../a-szűrés-gazdaságtana/).

## Források

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
