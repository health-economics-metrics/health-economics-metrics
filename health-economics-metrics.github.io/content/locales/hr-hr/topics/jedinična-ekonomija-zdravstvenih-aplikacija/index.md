# Jedinična ekonomija zdravstvenih aplikacija

Komercijalna aritmetika potrošačkih zdravstvenih proizvoda: trošak akvizicije kupca (CAC), vrijednost kroz životni vijek (LTV), prosječni prihod po korisniku (ARPU), cijene po članu po mjesecu (PMPM) i razlika na tržištu poslodavaca između **ROI-ja i VOI-ja** (value on investment).

## Zašto je važno

Zdravstvene aplikacije suočavaju se sa strukturnim stezanjem: akvizicija je skupa (regulirane tvrdnje, prepreke povjerenja, troškovi usklađenosti), a zadržavanje je najgore od svih softverskih vertikala (~90 % odustajanja unutar 30 dana — vidi [zadržavanje i odljev](../zadržavanje-i-odljev/)). Standardni test održivosti — **LTV:CAC ≥ 3:1** — stoga je brutalno težak u potrošačkom zdravlju, zbog čega se industrija seli prema B2B2C modelima: poslodavci, osiguravatelji i zdravstveni sustavi plaćaju PMPM za populacije, gdje kupac nije pojedinac koji odlazi.

## Matematika

```
CAC   = prodaja + marketinška potrošnja / novi plaćajući kupci
ARPU  = prihod / aktivni korisnici (po razdoblju)
LTV   = ARPU × prosječni vijek  =  ARPU / stopa odljeva
Održivost: LTV : CAC ≥ 3, period povrata ≤ 12–18 mjeseci

Efektivni CAC po zadržanom korisniku = CAC / zadržavanje(t)
  — pri 4% D30 zadržavanju, £5 po instalaciji = £125 po korisniku zadržanom 30 dana

PMPM prihod = stopa × uključeni članovi × mjeseci
  marža dobavljača = PMPM − trošak posluživanja po članu po mjesecu
  — angažman mijenja predznak: uz B2C pretplate angažman pokreće
    prihod; uz PMPM, angažirani članovi koštaju VIŠE za posluživanje
    od neaktivnih, a ugovori o ishodima ponovno to okreću
```

## Riješeni primjer

B2C aplikacija za spavanje: 6,99 £/mjesečno, mjesečni odljev 18 %, miješani CAC 38 £.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — neodrživo

Zaokret na poslodavački PMPM: £1.20 PMPM × 40,000 pokrivenih života = £48k/mjesečno
Trošak posluživanja: infrastruktura £0.15 + podrška £0.10 + sadržaj £0.05
  po članu ≈ £0.30 → marža ~75%, prodajni ciklus dug ali odljev je na razini
  ugovora (godišnje), a ne korisnika (dnevno)

Pitanje poslodavca pomiče metriku: ROI u tvrdom novcu (smanjene tražbine,
izostanci) rijetko je dokaziv za wellness proizvode — odgovor industrije je
VOI: produktivnost, privlačnost za zapošljavanje, angažman — što je pošteno
samo kad je označeno kao VOI, a ne prerušeno u ROI (vidi return-on-investment.md
i social-return-on-investment.md).
```

## Veza sa softverskim inženjerstvom

Inženjerski izbori određuju obje strane omjera: **trošak posluživanja** je arhitektura ([jedinična ekonomija oblaka](../jedinična-ekonomija-oblaka/) — PMPM marža živi ili umire na infrastrukturnom trošku po članu), a **LTV** je inženjering zadržavanja (svaka točka odljeva je aritmetički prihod — QALY matematika u dokumentu o [zadržavanju](../zadržavanje-i-odljev/) ima točan prihodni blizanac). Za zdravstvene proizvode posebno, nadzorna ploča jedinične ekonomije trebala bi nositi treću liniju uz LTV i CAC: **zdravstvena vrijednost po stečenom korisniku** (QALY-ji ponderirani zadržavanjem × prag) — jer tržišta platitelja i u stilu DiGA-e sve više cijene prema njoj, i jer proizvod čija se komercijalna i klinička jedinična ekonomija razilaze (profitabilan ali zdravstveno inertan, ili učinkovit ali nefinanciran) treba znati koji problem ima.

## Zamke

- **LTV iz odljeva rane kohorte**: odljev se stabilizira naniže; ali i pristranost preživjelih — rani usvojitelji zadržavaju se bolje od skalirane publike. Koristite sazrele podatke kohorte.
- **CAC miješan preko kanala**: CAC plaćenih društvenih mreža i CAC preporuke kliničara razlikuju se 10×, uz suprotne profile zadržavanja — segmentirajte ili budite zavedeni.
- **PMPM bez ograničenja iskorištenosti**: izrazito angažirani članovi mogu preokrenuti marže; modelirajte distribuciju, a ne prosjek.
- **VOI predstavljen kao ROI** financijskom direktoru — neuspjeh vjerodostojnosti koji je industrija poslodavačkog wellnessa desetljeće zaslužila.

## Izvori

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
