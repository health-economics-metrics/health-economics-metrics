# Kokybės požiūriu pakoreguoti gyvenimo metai (QALY)

QALY – tai vieni gyvenimo metai, nugyventi tobuloje sveikatoje. Jis sujungia, *kiek ilgai* žmonės gyvena, su tuo, *kaip gerai* jie gyvena, todėl metai prastos sveikatos skaičiuojami kaip mažiau nei vienas QALY – taip visiškai skirtingas sveikatos intervencijas padarant palyginamas viena skale.

## Kodėl tai svarbu

QALY yra bendra sveikatos technologijų vertinimo valiuta. NICE (Anglija) sveikatos laimėjimus vertina **20 000–30 000 £ už QALY**: intervencija, perkanti QALY pigiau nei šis slenkstis, paprastai rekomenduojama; perkanti brangiau – paprastai atmetama. Šis vienas skaičius yra tai, kaip nacionalinė sveikatos tarnyba lygina vėžio vaistą, klubo sąnario keitimą ir triažo programėlę toje pačioje ašyje. Jei jūsų programinė įranga gali patikimai deklaruoti QALY – užkertant kelią blogėjimui, spartinant gydymą ar gerinant saugumą – galite įkainoti jos sveikatos vertę ta pačia valiuta kaip ir pati medicina.

## Matematika

```
QALYs = Σ_i (duration_i × utility_i)

duration_i = years spent in health state i
utility_i  = quality weight of state i, anchored at 1 = perfect health, 0 = dead
             (negative values allowed for states worse than death)
```

Naudingumo svoriai ateina iš validuotų instrumentų, dažniausiai [EQ-5D](../eq-5d/). Intervencijos QALY *laimėjimas* yra skirtumas tarp QALY srautų su ja ir be jos, [diskontuotas](../diskontavimas-ir-laiko-pirmenybė/) 3,5 % per metus NICE etaloniniame atvejyje.

## Išspręstas pavyzdys

Pacientas laukia širdies gydymo būsenoje su naudingumu 0,6. Gydymas atkuria jį iki naudingumo 0,85.

- **Gydomas dabar**: 1 metai su 0,85 = 0,85 QALY šiais metais.
- **Gydomas po 6 mėnesių vėlavimo**: 0,5 × 0,6 + 0,5 × 0,85 = 0,725 QALY.
- **QALY praradimas vienam pacientui dėl vėlavimo**: 0,85 − 0,725 = **0,125 QALY**.

Išreikšta pinigais pagal NICE slenkstį: 0,125 × 20 000–30 000 £ = **2 500–3 750 £ prarastos sveikatos vertės vienam pacientui per 6 mėnesių vėlavimą**. Jei programinė įranga, spartinanti kelią, pašalina tą vėlavimą 400 pacientų per metus, sveikatos vertė yra 50 QALY ≈ **1,0–1,5 mln. £ per metus** – dar neįskaičiavus jokių veiklos santaupų.

## Ryšys su programinės įrangos inžinerija

- **Greitesni keliai = ankstesni QALY.** Viskas, kas sutrumpina [siuntimą gydymui](../siuntimas-gydymui/), paverčia laukimo laiko neigiamą naudingumą sveikatos laimėjimu, vertinamu kaip aukščiau.
- **Saugumas = išsaugoti QALY.** Išvengtos vaistų klaidos ir praleistos diagnozės yra išvengti QALY praradimai.
- **QALY taip pat yra rodiklių dizaino šablonas**: kiekybės × kokybės junginys su kokybės svoriais, išgautais iš standartizuoto instrumento. „Kokybės požiūriu pakoreguoti inžinieriaus metai“ (laikas × DevEx apklausos svoris) yra ta pati konstrukcija – žr. [SPACE ir DevEx](../space-ir-devex/).
- QALY paversti pinigais verslo bylai naudokite [grynąją piniginę naudą](../grynoji-piniginė-nauda/); paversti sprendimu – [norimo mokėti slenksčius](../pasirengimo-mokėti-slenksčiai/).

## Spąstai

- **Naudingumo svorių išgalvojimas.** Svoriai turi ateiti iš validuotų instrumentų (EQ-5D) ir paskelbtų verčių rinkinių, o ne iš nuojautos.
- **QALY deklaravimas be priežastinio kelio.** „Mūsų programėlė gerina gerovę“ nėra QALY teiginys; „pašalina X savaičių laukimo būsenoje su naudingumu 0,6“ yra.
- **Dvigubas skaičiavimas**: deklaruoti ir QALY laimėjimą, ir to paties išvengto blogėjimo sąnaudų santaupas reikia atsargiai, kad jie būtų tikrai atskiri.
- **Lygybės aklosios dėmės**: QALY pratęsimo metus vertina pagal bazinį naudingumą, o tai gali nuskriausti žmones su negalia – todėl ICER (JAV) taip pat pateikia evLYG (žr. [įgyti gyvenimo metai](../įgyti-gyvenimo-metai/)).

## Šaltiniai

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
