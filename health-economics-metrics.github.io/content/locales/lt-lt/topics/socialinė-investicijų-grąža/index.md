# Socialinė investicijų grąža (SROI)

SROI išplečia [ROI](../investicijų-grąža/) iki rezultatų, kurių rinkos neįkainoja – gerovė, socialinis ryšys, aplinkos poveikis – juos išreikšdama pinigais finansiniais pakaitalais, *visoms* paveiktoms suinteresuotosioms šalims.

## Kodėl tai svarbu

Didelė dalis to, ką sukuria sveikatos ir bendruomenės intervencijos, niekada nepaliečia biudžeto eilutės: sumažėjusi vienatvė, slaugytojų palengvėjimas, užimtumo laimėjimai, orumas. SROI, valdomas Social Value International septynių principų (įtraukite suinteresuotuosius asmenis, vertinkite tai, kas svarbu, neperdėkite, būkite skaidrūs, patikrinkite…), duoda teiginius kaip „3,20 £ socialinės vertės už 1 £ investicijų“. JK viešųjų pirkimų socialinės vertės reikalavimai daro SROI tipo įrodymus komerciškai aktualius: konkursai viešosioms sutartims (įskaitant NHS) gauna taškų už įrodytą socialinę vertę.

## Matematika

```
SROI ratio = PV(monetized social outcomes) / PV(investment)

For each outcome:
  value = quantity × financial proxy × attribution × (1 − deadweight) × (1 − displacement)

deadweight   = would have happened anyway
attribution  = share caused by others
displacement = benefit moved from elsewhere rather than created
drop-off     = decay of the outcome over years
```

Koregavimo veiksniai yra metodo vientisumas: be jų SROI yra fikcija su valiutos ženklu.

## Išspręstas pavyzdys

Draugystės programėlė, siejanti vienišus vyresnio amžiaus žmones su savanoriais; programos kaina 200 000 £ per metus; 1 500 aktyvių porų.

```
Outcome: reduced loneliness for 1,500 people
  proxy: wellbeing valuation of "relief from loneliness" ≈ £1,800/person/yr
  deadweight 25% (some would have found connection anyway)
  attribution 80% (some credit to other services)

Value = 1,500 × 1,800 × 0.80 × 0.75 = £1,620,000

Outcome: reduced GP visits, 1,500 × 1.2 visits × £42 = £75,600 (payer-real)

SROI = (1,620,000 + 75,600) / 200,000 ≈ 8.5 : 1
```

Atkreipkite dėmesį, kad santykis 96 % yra pakaitalu įvertinta gerovė ir 4 % realūs pinigai. Tai teisėtas SROI – bet jis turi būti pateiktas kaip socialinė vertė, niekada neleidžiant implikuoti, kad 1,7 mln. £ galima realizuoti.

## Ryšys su programinės įrangos inžinerija

SROI yra sąžininga sistema inžinerijos darbui, kurio naudos gavėjai yra už mokančios komandos ribų: atvirojo kodo priežiūrai, prieinamumo pagerinimams, platformos darbui, kurį naudoja kitos komandos, kūrėjų bendruomenės investicijoms. Perkeliama mechanika: nustatykite visas suinteresuotąsias šalis, išreikškite pinigais nurodytais pakaitalais ir taikykite negyvos masės (deadweight) / priskyrimo nuolaidas (ar tas OSS pataisymas būtų įvykęs ir taip? kiek laimėjimo yra jūsų darbas, o kiek ekosistemos?). *Savo paties poveikio teiginių diskontavimo* disciplina yra tai, kas skiria SROI nuo rinkodaros skaičiaus.

## Spąstai

- **Pakaitalų rinkimasis**: pasirenkama dosniausia prieinama gerovės vertė.
- **Negyvos masės / priskyrimo praleidimas** – dažniausias išpūtimas, dažnai padvigubinantis santykį.
- **Santykių palyginimas tarp tyrimų**: SROI santykiai jautrūs metodui; lyginkite tik nuosekliame rėme.
- **Socialinės vertės pateikimas kaip realizuojamų santaupų** biudžeto turėtojui.

## Šaltiniai

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
