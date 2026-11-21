# Prevencijos ekonomika

Ekonomika intervencijos prieš ligai atsirandant ar progresuojant. Pagrindinė išvada prieštarauja intuicijai: **dauguma prevencijos pinigų netaupo** – ji perka sveikatą už gerą kainą. Cohen, Neumann ir Weinstein reikšminga NEJM analizė nustatė, kad mažiau nei 20 % prevencinių intervencijų yra grynai taupančios; likusios – geriausiu atveju ekonomiškai efektyvios.

## Kodėl tai svarbu

„Prevencija taupo pinigus“ yra dažniausiai kartojamas klaidingas teiginys sveikatos politikoje, ir ja grįstas verslo bylas sveikatos ekonomistai sunaikina. Sąžininga struktūra: prevencija kainuoja pinigus dabar (visos populiacijos patikra, rizikos veiksnių gydymas žmonėms, kurie niekada nebūtų susirgę) ir grąžina sveikatą vėliau – paprastai už *gerą* kainą vienam QALY, retkarčiais su santaupa, kartais už siaubingą kainą. Žinoti, kuriame režime esate, yra pati analizė. Skirtumas svarbus komerciškai: prevencijos produktas, parduodamas kaip „taupo NHS pinigus“, kviečia auditą, kurio nepraeis; parduodamas kaip „perka QALY po 4 000 £“, tais pačiais faktais gali laimėti. Žr. [ankstesnė intervencija](../ankstesnė-intervencija/) dėl versijos kelio viduje. Prieš įkainojant prevencijos programą, [populiacijai priskirtina dalis](../populiacijai-priskirtina-dalis/) pirmiausia atsako į apimties klausimą – kiek tikslinės ligos naštos rizikos veiksnys, kurį programa sprendžia, galėtų tikėtinai pašalinti.

## Matematika

```
Net cost of prevention (per person) =
    intervention cost × everyone treated
  − downstream costs avoided × the few who would have progressed
  (both discounted — the avoided costs are years away; see
   discounting-and-time-preference.md)

Cost-saving requires: intervention cost < P(progression) × avoided cost × discount factor
Cost-effective requires only: net cost / QALYs gained < threshold
```

Prevencijos paradoksas: intervencijos kaina dauginasi per visą populiaciją; nauda atitenka tik kontrafaktiniams nedaugeliui.

## Išspręstas pavyzdys

Hipertenzijos valdymo programėlė, siūloma 100 000 rizikos grupės suaugusiųjų, 25 £/asmeniui per metus. Per 10 metų ji užkerta kelią 400 insultų (kiekvienas kainuoja 45 000 £ diskontuotų ir praranda 3 QALY).

```
Cost:    100,000 × £25 × 10 yrs (discounted ≈ ×8.3) ≈ £20.8M
Offsets: 400 × £45,000 = £18.0M
Net cost ≈ £2.8M — NOT cost-saving

QALYs gained = 400 × 3 = 1,200
Cost per QALY = 2.8M / 1,200 ≈ £2,300/QALY — outstandingly cost-effective
```

Ta pati programa, abi tiesos: ji pinigais praranda 2,8 mln. £ ir perka sveikatą už dešimtadalį NICE slenksčio. Finansuokite pagal antrąjį skaičių; niekada nežadėkite pirmojo.

## Ryšys su programinės įrangos inžinerija

Shift-left kokybė yra prevencijos ekonomika, įskaitant išlygą. Peržiūros, testai ir statinė analizė taiko kainą *kiekvienam* pakeitimui, kad pagautų problemas nedaugelyje, kurie būtų progresavę iki gamybos incidentų. Defekto kainos kreivė (10–100× pagal etapą) atlieka insulto sąnaudų vaidmenį – ir sąžininga išvada atkartoja sveikatą: shift-left paprastai yra ekonomiškai *efektyvus*, o ne automatiškai *taupantis*, nes dauguma pažymėtų problemų niekada netaptų incidentais (kontrafaktinių nedaugelio problema). Suskaičiuokite: bendra vartų kaina per laikotarpį prieš faktiškai išvengtus incidentus × incidento kaina – ta pati išspręsto pavyzdžio struktūra su [NNT](../reikalingas-gydyti-skaičius/) kaip vieneto vienam pagavimui.

## Spąstai

- **Sąnaudų taupymo deklaravimas, kai įrodymai palaiko ekonominį efektyvumą** – prevencijos propagandos apibrėžiama klaida abiejose srityse.
- **Nediskontuotos būsimos užskaitos**: nauda po 15 metų nominalia verte.
- **Per didelės diagnostikos / per didelio gydymo sąnaudų ignoravimas**: prevencija randa ir pseudo-ligą – žr. [patikros ekonomika](../patikros-ekonomika/).

## Šaltiniai

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
