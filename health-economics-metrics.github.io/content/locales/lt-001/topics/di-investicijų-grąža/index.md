# DI investicijų grąža

DI ROI yra išmatuojama pelno (nuostolių) ataskaitoje atsispindinti grąža, priskirtina DI iniciatyvoms. Blaivinantis etalonas: MIT 2025 m. tyrimas „GenAI Divide“ nustatė, kad nepaisant 30–40 mlrd. JAV dolerių įmonių investicijų į generatyvųjį DI, **~95 % bandomųjų projektų neparodė išmatuojamos grąžos pelno ataskaitoje**, o sėkmingi 5 % turėjo atpažįstamų įpročių.

## Kodėl tai svarbu

Sveikatos sistemos DI bandomųjų projektų modelį turi pavadinusios: **pilotitis** – NHS perspektyvių programėlių kapinynas, kuriose jos bandomos be galo, o plečiamos niekada. MIT išvados puikiai atitinka tai, ką sveikatos technologijų vertinimas jau žino: vertės teiginiams reikia iš anksto nustatytų galutinių rodiklių, priskyrimui reikia palyginamųjų, o „visi jaučia, kad padeda“ nėra naudos eilutė. Sėkmingoji mažuma MIT duomenyse koncentravosi užkulisių automatizavime su sekamomis sąnaudų bazinėmis reikšmėmis, o **įsigyti įrankiai pasisekė ~67 % atvejų, palyginti su maždaug trečdaliu šios dalies vidiniams kūriniams** – šie apriorai turi būti kiekvienoje DI investicijų byloje (žr. [kurti ar pirkti](../kurti-ar-pirkti/)).

## Matematika

```
AI ROI = (attributable benefit − total AI cost) / total AI cost

Total AI cost = licences/inference (see inference-unit-economics.md)
              + integration + data readiness + evaluation
              + workflow redesign + governance/assurance
              (the licence is typically the minority of the denominator)

Attributable benefit: measured against a baseline or control, classed
cash / capacity / quality per cash-releasing-vs-non-cash-releasing.md
```

## Išspręstas pavyzdys

Ligoninių grupė diegia DI dviem panaudojimo atvejais:

```
Use case A — clinical-letter drafting (back office, trackable):
  baseline: outsourced transcription £380k/yr
  after:    transcription contract cancelled; clinician review time +£60k
  AI cost:  £120k/yr all-in
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — cash-releasing, auditable ✓

Use case B — "AI copilot for clinicians" (broad, untracked):
  benefit claim: "saves time across 4,000 staff" — no baseline captured
  measured P&L effect: none demonstrable
  → the 95% bucket, regardless of whether it actually helps
```

Skirtumas yra ne DI kokybė, o tai, ar nauda turėjo **bazinę reikšmę, savininką ir biudžeto eilutę** ([naudos realizavimas](../naudos-realizavimas/)).

## Ryšys su programinės įrangos inžinerija

SVV pobūdžio DI investicijų vadovas: **įrodymus pakopuokite kaip [NICE ESF pakopas](../nice-įrodymų-standartų-sistema/)** – demonstracinio lygio įrodymai mažos rizikos įrankiams, kontroliuojami bandymai prieš visos organizacijos išlaidas, iš anksto užregistruoti diegimo vartai ([DiGA](../vokietijos-diga-greitasis-kelias/) laikino įtraukimo su terminu modelis); **sąnaudų išvengimą skaičiuokite taip, kaip sveikatos ekonomika skaičiuoja paklausos išvengimą** – tikra tik tada, kai pasikeičia konkreti biudžeto eilutė; ir **patį bandomąjį projektą įkainokite [EVPI](../tobulos-informacijos-tikėtina-vertė/)** – bandymas, kuris negali pakeisti diegimo sprendimo, vertas 0 £. Būtent kūrėjų įrankių daliai žr. [DI kūrėjų produktyvumas](../di-kūrėjų-produktyvumas/).

## Spąstai

- **Naudos išsklaidymas**: vertė, plonai paskirstyta tūkstančiams vartotojų, pagal apibrėžimą neišmatuojama; rinkitės panaudojimo atvejus su koncentruotomis, sekamomis bazinėmis reikšmėmis.
- **Sąnaudų skaičiavimas tik pagal licencijas**: integracija, vertinimas ir darbo eigos pertvarka paprastai sudaro didžiąją tikrojo vardiklio dalį.
- **Priskyrimo vagystė**: DI, įdiegtas kartu su procesų pertvarka, pasisavina visą pokytį.
- **Įklimpusio bandymo eskalavimas**: nesėkmingų bandymų pratęsimas, nes sustabdymas reikštų pripažinti nesėkmę – pabaigos data turi būti iš anksto sutarta.

## Šaltiniai

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
