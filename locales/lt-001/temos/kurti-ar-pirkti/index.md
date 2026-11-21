# Kurti ar pirkti

„Kurti ar pirkti“ – struktūruotas individualios plėtros ir komercinio įsigijimo palyginimas pagal diskontuotą [TCO](../bendroji-nuosavybės-kaina/), pristatymo laiką ir riziką. Empiriniai apriorai vienpusiai: **faktinės kūrimo sąnaudos paprastai viršija prognozes 30–40 %**, pirktiniai sprendimai įdiegiami 40–60 % greičiau, o MIT 2025 m. GenAI tyrimas parodė, kad įsigyti DI įrankiai pasisekė ~67 % atvejų, o vidiniai kūriniai – maždaug trečdaliu rečiau.

## Kodėl tai svarbu

Sveikatos sistemos su šiuo sprendimu susiduria nuolat (NHS kalba – „make vs commission“), o inžinerijos organizacijos sistemingai klysta kūrimo kryptimi – nes kūrėjai vertina kūrimą, o ne [TCO](../bendroji-nuosavybės-kaina/), ir nes kurti smagiau. Ekonominis rėmas verčia palyginti sąžiningai: abi parinktys įkainotos tuo pačiu horizontu, abi pakoreguotos pagal riziką, o *laiko skirtumas įkainotas kaip [vėlavimo kaina](../vėlavimo-kaina/)* – narys, kuris dažniausiai lemia atsakymą ir dažniausiai praleidžiamas.

## Matematika

```
Compare over the same 3–5 year horizon, discounted:

NPV_option = PV(benefits, shifted by time-to-value) − PV(TCO)

Risk adjustments (Green Book "optimism bias" pattern):
  build cost × 1.3–1.4        (overrun prior)
  build time-to-value + 40–60% (deployment delay prior)
  buy: add integration reality-check and exit costs instead

Decision drivers, in the order they usually decide:
  1. differentiation — is this capability your product, or plumbing?
  2. time-to-value × CoD
  3. risk-adjusted TCO
```

## Išspręstas pavyzdys

Trestui reikia el. sutikimo sistemos. Pirkti: 150 tūkst. £ per metus SaaS, veikia po 3 mėnesių. Kurti: įvertinta 600 tūkst. £ + 120 tūkst. £ per metus priežiūrai, veikia po 12 mėnesių.

```
Risk-adjusted build: 600k × 1.35 = £810k; time-to-value ≈ 18 months
5-yr TCO:  buy = 150k × 5 = £750k
           build = 810k + 120k × 5 = £1,410k
Delay term: consent digitization saves £25k/month; build arrives 15 months
            later → CoD = 15 × 25k = £375k

Effective comparison: £750k vs £1,785k — buy wins by ~£1M, and the largest
single term after the build itself is the delay cost nobody had priced.
```

Kurti išlieka teisinga, kai gebėjimas yra diferencijuojantis (pagrindinis jūsų produkto algoritmas), kai joks tiekėjas netenkina griežto apribojimo (klinikinis saugumas, duomenų buvimo vieta) arba kai tiekėjo užrakinimo rizika didelė ir įkainota.

## Ryšys su programinės įrangos inžinerija

Perkeliama sveikatos ekonomikos disciplina yra trejopa: **aprioriais pagrįstas rizikos koregavimas** (30–40 % viršijimo priedas yra programinės įrangos Green Book optimizmo paklaida – taikykite mechaniškai, dėl išimčių ginčykitės, o ne iš jų pradėkite); **palyginamojo sąžiningumas** (alternatyva kūrimui nėra „nieko“, o geriausias prieinamas pirkinys – žr. [alternatyvioji kaina](../alternatyvioji-kaina/)); ir **ekvivalentiškumo tikrinimas prieš sąnaudų palyginimą** (jei pirkinys ir kūrinys iš tikrųjų atitinka tą pačią specifikaciją, tai yra [sąnaudų minimizavimo analizė](../sąnaudų-minimizavimo-analizė/) ir laimi pigesnis; jei ne, rezultato skirtumas turi būti įvertintas, o ne tvirtinamas).

## Spąstai

- **Tiekėjo katalogo kainos lyginimas su nepakoreguotu pagal riziką kūrimo įverčiu** – dvigubas pataikavimas kūrimui.
- **Nulinė vidinio darbo kaina** („komanda jau čia“).
- **Neįkainotas užrakinimas abiem kryptimis**: tiekėjo išėjimo sąnaudos, bet ir kūrinio autobuso faktorius bei priežiūros trukmė.
- **Tapatybe grįsti kūriniai**: „tai mums esminga“ sakoma apie paprastą infrastruktūrą – diferenciaciją tikrinkite klausdami, ar klientai pastebėtų.

## Šaltiniai

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
