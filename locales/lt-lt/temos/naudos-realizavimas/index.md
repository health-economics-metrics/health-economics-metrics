# Naudos realizavimas

Naudos realizavimo valdymas (BRM) – tai disciplina, kuri nustato, pradinėmis reikšmėmis užfiksuoja, seka ir *įrodo*, kad verslo byloje pažadėta nauda iš tikrųjų atsirado po įgyvendinimo. Jungtinės Karalystės viešosiose investicijose ji įtvirtinta HM Treasury Green Book **penkių bylų modelyje**; medicinoje jos giminaitis yra stebėsena po patekimo į rinką.

## Kodėl tai svarbu

Verslo bylos yra pažadai; naudos realizavimas yra auditas. Stambių NHS skaitmeninių programų vertinimai pakartotinai rado prognozuotą naudą, kuri niekada neatsirado – o kai nauda neatlaisvino pinigų, ji niekaip nepaveikė trestų finansinio rezultato. Green Book atsakas: kiekviena išlaidų byla turi atitikti **penkias bylas** (strateginę, ekonominę, komercinę, finansinę, valdymo), o naudos realizavimas planuojamas valdymo byloje *prieš patvirtinimą* – paskiriami savininkai, užfiksuojamos bazinės reikšmės, nustatomos matavimo datos. Be to „programinė įranga sutaupė 30 minučių vienam slaugytojui“ amžinai lieka tiekėjo fikcija.

## Matematika

```
Realization rate = benefits realized / benefits forecast   (per benefit, per period)

Mechanics that make it computable:
  baseline captured BEFORE go-live (else the delta is unmeasurable)
  each benefit: owner, metric, data source, measurement schedule
  forecast adjusted for optimism bias at appraisal (Green Book mandate)
  benefits classed cash / non-cash / qualitative and tracked separately
  (see cash-releasing-vs-non-cash-releasing.md)
```

## Išspręstas pavyzdys

Elektroninio darbo grafikų verslo byla per metus žadėjo: 450 tūkst. £ agentūrų išlaidų sumažėjimą (pinigai), 8 000 palatų vadovų valandų (pajėgumai), geresnį užpildymo atitikties rodiklį (kokybinis). Praėjus dvylikai mėnesių po paleidimo:

```
Benefit           Forecast    Realized    Rate   Evidence
Agency spend      £450,000    £287,000    64%    ledger vs baseline year
Manager hours     8,000       5,100       64%    time-motion sample
Fill compliance   +10pp       +12pp       120%   rostering system data

Actions from the review (the point of BRM):
agency shortfall traced to two wards never onboarded → onboard them;
forecast model's 30%-optimism error logged → applied to the next case.
```

64 % realizavimas nėra nesėkmė – tai *žinios*. Neišmatuotos bylos amžinai skelbia 100 %.

## Ryšys su programinės įrangos inžinerija

Inžinerijos organizacijos tvirtina platformų investicijas pagal prognozuotą naudą ir beveik niekada jų neaudituoja – būtent tą patologiją BRM ir sprendžia. Lengvas perkėlimas: kiekvienas pasiūlymas virš slenksčio įvardija naudos savininkus, bazinius rodiklius ir T+6 mėnesių peržiūros datą; realizavimo rodikliai grįžta atgal ir nulemia, kiek organizacija nuvertina tos komandos (ar tiekėjo) kitą prognozę. Tai ir atsakas į DI įrankių skepticizmą: [MIT išvada, kad ~95 % GenAI bandomųjų projektų neparodė išmatuojamos grąžos pelno ataskaitoje](../di-investicijų-grąža/), yra naudos realizavimo rezultatas – projektai, kurie *davė* grąžą, turėjo sekamas, savininkus turinčias naudos eilutes. Prognozė → matavimas → perkalibravimas yra ta pati kilpa kaip [EVPI](../tobulos-informacijos-tikėtina-vertė/) įkainoti bandymai, tik portfelio mastu.

## Spąstai

- **Nėra bazinės reikšmės prieš paleidimą** – lemtinga, nepataisoma klaida.
- **Naudos našlaitystė**: be įvardyto savininko niekas nerenka duomenų, o kiekviena peržiūra sako „iš esmės pagal planą“.
- **Dvigubai skaičiuojama nauda skirtingose programose**, deklaruojant tuos pačius atlaisvintus pajėgumus – saugokite naudos registrą per visą portfelį.
- **Realizavimo teatras**: matuojami lengvi kokybiniai laimėjimai, o pinigų eilutės tyliai lieka netikrintos.

## Šaltiniai

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
