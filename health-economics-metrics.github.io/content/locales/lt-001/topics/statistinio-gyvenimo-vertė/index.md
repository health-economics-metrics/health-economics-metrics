# Statistinio gyvenimo vertė (VSL)

Statistinio gyvenimo vertė (VSL) – JK vadinama „išvengtos mirties verte“ (VPF) – yra suma, kurią *populiacija* kolektyviai pasirengusi mokėti, kad sumažintų vienos statistinės mirties riziką; ji išvedama iš darbo užmokesčio ir rizikos kompromisų tyrimų (kiek papildomo atlygio darbuotojai reikalauja už rizikingesnį darbą) ir deklaruojamų pirmenybių apklausų. Tai nėra jokio konkretaus asmens gyvybės kaina; tai populiacijos rizikos konstruktas, o programinės įrangos inžinieriui, kuriančiam riziką mažinančias sistemas – triažo algoritmus, greitosios pagalbos paskirstymą, saugos stebėseną – svarbu žinoti, kad jis kilęs iš kitos teorinės tradicijos nei [pasirengimo mokėti slenksčiai](../pasirengimo-mokėti-slenksčiai/).

## Kodėl tai svarbu

VSL/VPF yra standartinė priemonė mirtingumo rizikos sumažinimams įkainoti reguliavimo sąnaudų ir naudos analizėje: transporto sauga, aplinkos apsaugos reguliavimas ir kai kurios visuomenės sveikatos intervencijos savo verslo atvejus vykdo per ją. HM Treasury Green Book skelbia VPF skaičių, išvestą iš JK darbo rinkos ir apklausų įrodymų, o Transporto departamentas jį tiesiogiai naudoja kelių saugos vertinime. Tai tikrai kita vertinimo tradicija nei QALY × pasirengimo mokėti slenksčio metodologija: slenksčio požiūris vertina sveikatos prieaugį pagal tai, ką sveikatos *biudžetas* šiuo metu sukuria ribinėje srityje, o VSL/VPF vertina rizikos sumažinimą pagal tai, ką darbo rinkos dalyviai ar apklausos respondentai atskleidžia pasirengę mokėti. Šios dvi sistemos ne visada suderinamos, o abiejų naudojimas tame pačiame atvejyje to nepripažįstant – dažna analitinė klaida.

## Matematika

```
Deaths averted = population × risk_reduction_per_person
  (risk_reduction_per_person is a probability, e.g. 0.000001 = 1-in-a-million
   reduction in annual mortality risk)

Monetized mortality benefit = deaths_averted × value_of_prevented_fatality
```

## Išspręstas pavyzdys

800 000 gyventojų regionas gauna naudos iš kelių saugos skaitmeninio dispečerizavimo/triažo intervencijos, mažinančios kiekvieno asmens metinę mirtingumo riziką vienu milijoniniu (0,000001):

```
Deaths averted = 800,000 × 0.000001 = 0.8
```

Naudojant JK išvengtos mirties vertę 2 180 000 £ (HM Treasury/DfT skaičius, 2023/24 m. kainos – Green Book ją atnaujina kasmet, prieš cituodami aktyvioje analizėje patikrinkite iš naujo):

```
Monetized mortality benefit = 0.8 × £2,180,000 = £1,744,000/year
```

Kiek mažiau nei 1,75 mln. £ per metus pinigais išreikštos mirtingumo naudos – iš rizikos sumažinimo, kurio dauguma paveiktos populiacijos individualiai niekada nepastebėtų.

## Ryšys su programinės įrangos inžinerija

Saugai kritinės programinės įrangos komandos – medicinos prietaisų programinė aparatinė įranga, autonominių transporto priemonių programinė įranga, pramoninės valdymo sistemos – susiduria su tiksliai šia kainodaros problema kurdamos saugos investicijos sąnaudų ir naudos atvejį: kaip įkainoti „išvengti vieno katastrofiško gedimo“, kai gedimas retas, sunkus ir pasiskirstęs didelėje naudotojų populiacijoje? VSL/VPF yra dešimtmečius senas, viešai dokumentuotas realaus pasaulio precedentas skaičiui priskirti retam, sunkiam, populiacijos lygio rizikos sumažinimui – tos pačios formos argumentas kaip SRE investicijos įkainojimas retai katastrofiškai prastovai, tik su mirtingumo, o ne prastovos rezultatu.

## Spąstai

- **VSL laikymas „identifikuoto gyvenimo kaina“**: tai ne ji. VSL/VPF yra populiacijos statistinis konstruktas, išvestas iš rizikos mažinimo kompromisų tarp daugelio žmonių, o ne konkretaus asmens gyvybės ar mirties vertinimas.
- **Dvigubas skaičiavimas su QALY pagrįstu grynosios piniginės naudos skaičiavimu**: VSL/VPF skaičiaus ir atskiro QALY × slenkstis skaičiavimo naudojimas tame pačiame atvejyje be suderinimo tyliai dvigubai skaičiuoja tų pačių išvengtų mirčių vertę. Konkrečiam atvejui pasirinkite vieną sistemą.
- **VSL įverčio perkėlimas tarp kontekstų be koregavimo**: VSL, išvestas iš vienos šalies darbo rinkos ar darbingo amžiaus darbo užmokesčio ir rizikos duomenų, taikomas nekoreguotas kitam pajamų kontekstui ar kitai populiacijai (vaikams, pensininkams), yra seniai besitęsianti, tikrai ginčytina metodologinė problema – ne išspręsta.

## Šaltiniai

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality supplementary guidance (2023/24 prices; Green Book values are updated annually). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (for the US VSL tradition, cited for contrast with the UK VPF figure above). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
