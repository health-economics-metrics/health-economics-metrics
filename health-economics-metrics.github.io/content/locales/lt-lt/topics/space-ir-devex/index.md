# SPACE ir DevEx

SPACE (pasitenkinimas ir gerovė (Satisfaction & well-being), veiksmingumas (Performance), veikla (Activity), bendravimas ir bendradarbiavimas (Communication & collaboration), efektyvumas ir srautas (Efficiency & flow)) ir DevEx (grįžtamojo ryšio kilpos, pažintinė apkrova, srauto būsena) yra sistemos kūrėjų produktyvumui matuoti **daugiamatiškai** – srities atsakas į atradimą, kad joks vienas rodiklis neišgyvena susidūrimo su realybe.

## Kodėl tai svarbu

Abi sistemos koduoja tą pačią sunkiai įgytą pamoką, kurią sveikatos rezultatų tyrimai išmoko dešimtmečiais anksčiau: vienas skaičius (kodo eilutės; kraujospūdis) iškreipia daugiamatę realybę, o jo optimizavimas duoda žaidimą, o ne pagerėjimą. SPACE nurodo derinti rodiklius bent iš trijų dimensijų, maišant telemetriją su savęs pranešimu – struktūriškai identiškai tam, kaip [EQ-5D](../eq-5d/) profiliuoja penkias dimensijas prieš skaičiuojant bet kokį indeksą, ir kodėl [PROM](../paciento-pranešami-rezultatai/) egzistuoja šalia klinikinių matų. Pasitenkinimas / gerovė taip pat nėra minkštas papuošalas: jis maitina [darbo jėgos išlaikymo](../darbuotojų-išlaikymas/) ekonomiką, kur kaita įkainojama visų atlyginimo mėnesiais.

## Matematika

Nė viena sistema nėra formulė; abi yra matavimo dizainai:

```
SPACE rule: ≥ 3 dimensions, ≥ 1 perceptual (survey) + ≥ 1 system (telemetry) metric

DevEx dimensions and example pairings:
  feedback loops  → CI duration (telemetry) + "waiting feels slow" (survey)
  cognitive load  → docs findability, onboarding time + perceived effort
  flow state      → meeting/interrupt density + self-reported focus

Derived indices (e.g., DX's DXI) map survey composites to time:
vendor claim ≈ 13 min/dev/week per index point — treat as a vendor
benchmark to validate locally, not a constant of nature.
```

## Išspręstas pavyzdys

Platformos komanda pagrindžia DevEx investiciją (CI pagreitinimas + dokumentacijos pertvarka) 300 kūrėjų:

```
Baseline: CI p75 = 28 min; survey "I lose focus waiting for builds": 62% agree
After:    CI p75 = 9 min;  agreement 24%

Time reclaimed (telemetry): 6 builds/day × 19 min × 0.4 usable = ~45 min/day/dev
Capacity value: 300 × 0.75h × 220d × £60/h ≈ £2.97M/year (non-cash-releasing —
see cash-releasing-vs-non-cash-releasing.md; the 0.4 usability factor is the
fragmentation discount from practitioner-time.md)
Perceptual corroboration is what makes the telemetry claim credible — either
alone is gameable; together they triangulate.
```

## Ryšys su programinės įrangos inžinerija

Šis dokumentas *yra* programinės įrangos pusė; perkėlimas eina link sveikatos ekonomikos. „Kokybės požiūriu pakoreguoti inžinieriaus metai“ – laikas, pasvertas standartizuotu patirties indeksu – yra [QALY](../kokybės-požiūriu-pakoreguoti-gyvenimo-metai/) konstrukcija, pritaikyta inžinerijos pajėgumams, ir ji paveldi QALY taisykles: svoriai iš validuoto instrumento (nuosekli apklausa, paskelbtas vertinimas), išgauti *prieš* palyginimą, niekada nesuderinti pataikauti pageidaujamam įrankiui. [SF-6D prieš EQ-5D](../eq-5d/) pamoka taip pat galioja: skirtingi instrumentai duoda sistemingai skirtingus skaičius, todėl niekada nelyginkite DevEx indeksų tarp tiekėjų instrumentų.

## Spąstai

- **Vieno rodiklio žlugimas**: skydeliai, redukuojantys SPACE į vieną balą, atkuria problemą, kurios išvengti ir egzistuoja sistema.
- **Veiklos rodikliai kaip rezultatai**: commit'ai, PR ir istorijų taškai yra Veikla – dimensija, kurią SPACE aiškiai įspėja esant labiausiai žaidžiamą (sveikatos analogas: procedūrų, o ne pasveikimų skaičiavimas).
- **Apklausų nuovargis ir Hawthorne efektai**: kas ketvirtį lengvi instrumentai lenkia savaitinį tardymą.
- **Komandų palyginimas**: kaip ligoninių lyginamosios lentelės be atvejų struktūros koregavimo – konteksto skirtumai (sritis, senos sistemos krūvis, budėjimas) dominuoja.

## Šaltiniai

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
