# Utjecaj na listu čekanja

Utjecaj na listu čekanja pretvara ušteđeni klinički kapacitet u pacijente uklonjene s liste čekanja (ili brže provedene kroz nju). Pretvaranje ušteđenih sati u dodatne termine u ambulanti izravno smanjuje veličinu liste čekanja trusta — najopipljiviji način da se zdravstvenom sustavu pokaže čemu služi oslobođeni kapacitet.

## Zašto je važno

Elektivna lista čekanja definirajući je izazov NHS-a nakon pandemije (njezina veličina je nacionalna politička metrika), a svaki trust provodi program elektivnog oporavka protiv nje. Poslovni slučaj koji kaže „štedi 2.000 sati medicinskih sestara” apstraktan je; onaj koji kaže „stvara 4.000 dodatnih termina, prima 3.800 pacijenata s liste, smanjuje listu specijalnosti za 9 %” priča je koju operativni direktor može odnijeti svom odboru. Utjecaj na listu čekanja prirodna je *obračunska jedinica* za [kapacitet koji ne oslobađa gotovinu](../uštede-koje-oslobađaju-gotovinu-naspram-onih-koje-je-ne-oslobađaju/).

## Matematika

```
Dodatni termini    = oslobođeni sati / trajanje termina × iskorištenost
Primljeni pacijenti = dodatni termini × (1 − DNA stopa)
Smanjenje liste    = primljeni pacijenti − inducirana nova potražnja
Dobitak u čekanju  = poboljšanje reda zbog veće stope usluživanja
                     (za stabilne redove, smanjenje zaostatka N za ΔN pri
                     stopi usluživanja μ pomiče sve naprijed ~ΔN/μ)
```

Zdravstvena vrijednost kraćih čekanja: pacijenti provode manje tjedana u nižem stanju korisnosti prije liječenja — QALY aritmetika u [od upute do liječenja](../od-upute-do-liječenja/).

## Riješeni primjer

Softver za ambijentalnu dokumentaciju štedi svakoj od 20 ambulantnih medicinskih sestara 45 min/dan. Kroz 250 dana: 20 × 0,75 × 250 = 3.750 sati godišnje.

```
Termini (30 min, 85% iskoristivo) = 3,750 / 0.5 × 0.85 = 6,375 termina
Primljeni pacijenti (7% DNA)      = 6,375 × 0.93       ≈ 5,929/godišnje
```

Za specijalnost s listom od 12.000 pacijenata i 24.000 termina godišnje usklađenog kapaciteta, ~5.900 dodatnih termina smanjuje prosječna čekanja za otprilike četvrtinu — pomičući trust bitno prema standardu od 18 tjedana bez zapošljavanja. Uz ~160 £ vrijednosti sheme po dolasku, aktivnost vrijedi ~949.000 £/godišnje (vidi [nacionalni tarifni sustav i jedinične troškove](../nacionalni-tarifni-sustav-i-jedinični-troškovi/)) — ali prvo prikažite okvir *liste čekanja*; to je onaj prema kojem se sustavom upravlja.

## Veza sa softverskim inženjerstvom

Lista čekanja je backlog, a ekonomija smanjenja backloga prenosi se u oba smjera. Iz zdravstva u softver: vrednujte smanjenje backloga prema tome koliko dugo *korisnici* čekaju vrijednost, a ne prema zatvorenim stavkama ([trošak odgode](../trošak-odgode/) po stavci u redu). Iz softvera u zdravstvo: Littleov zakon kaže da se lista smanjuje samo ako stopa usluživanja premašuje stopu dolazaka — dobici u kapacitetu apsorbirani rastućim uputama ostavljaju čekanja nepromijenjenima, pa modelirajte i dolaske. A u obje domene, prioritizirajte prema vrijednosti ponderiranoj težinom (kategorije kliničke hitnosti ↔ [modifikatori težine](../qaly-manjak-i-modifikatori-težine/)), a ne prema redoslijedu dolaska.

## Zamke

- **Termini ≠ pacijenti**: zaboravljanje DNA stopa i neiskoristivih fragmenata oslobođenog vremena.
- **Inducirana potražnja**: vidljiv dodatni kapacitet privlači upute; neto utjecaj na listu manji je od bruto.
- **Tvrdnja o gotovini**: utjecaj na listu čekanja je vrijednost kapaciteta; novčana tvrdnja (izbjegnuto eksternaliziranje posla iz backloga) je druga stavka — vidi [izbjegive troškove eksternalizacije](../izbjegivi-troškovi-eksternalizacije/).

## Izvori

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
