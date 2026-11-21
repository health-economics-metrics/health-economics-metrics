# Vertę kuriantys pajėgumai (veiklos pervertimas)

Vertę kuriantys pajėgumai – tai atlaisvinto laiko „galimybės nauda“: ką ligoninė dabar gali *pasiekti* per valandas, kurias atlaisvina jūsų programinė įranga. Tai rodiklis, svarbiausias vyriausiesiems veiklos direktoriams ir medicinos direktoriams, nes jis kalba valiuta, pagal kurią jie vertinami – veikla, tikslai ir apyvarta.

## Kodėl tai svarbu

NHS susiduria su didžiuliais siuntimo-gydymui atsilikimais, ir trestai, nepasiekiantys nacionalinių laukimo laiko standartų, susiduria su reguliavimo priežiūra ir įsikišimu (žr. [siuntimas gydymui](../siuntimas-gydymui/)). Samdymas lėtas ir ribotas; patalpos fiksuotos. Vienintelis greitas svertas – išspausti daugiau vertę kuriančios veiklos iš esamo personalo ir erdvės. Programinė įranga, susigrąžinanti specialistų laiką, ne tiesiog „taupo pinigus“ – ji *kala pajėgumus*: klinikas, kurios negalėjo egzistuoti, vertinimus, kurių nebuvo galima suplanuoti, be samdymo ar statybų.

## Matematika

```
Hidden capacity created = time released → activity units enabled × scheme value

Activity units: outpatient attendances, pre-op assessments, monitoring reviews
Scheme value:   national tariff / NHS Payment Scheme prices
                (see national-tariff-and-unit-costs.md)
```

Tai [gydytojo laiko](../gydytojo-laikas/) išvesties pagrindu atlikta vertinimo versija, išplėsta iki paslaugų linijos ir išreikšta veiklos vienetais, kuriais veiklos komanda jau planuoja.

## Išspręstas pavyzdys

6 pakopos specializuotos slaugytojos veda priešoperacinio įvertinimo klinikas. Dokumentavimo automatizavimas susigrąžina 1 valandą per dieną kiekvienai iš 25 slaugytojų; kiekviena valanda telpa 2 vertinimus.

```
Extra assessments = 25 nurses × 2/day × 250 days = 12,500/year
At ~£120 scheme value per pre-op assessment:
  12,500 × £120 = £1.5M/year of care capacity created
```

– nesamdant nė vienos slaugytojos ir nestatant nė vieno kambario. (Plačiai cituojamas modelis, kurį šis užrašas iš pradžių nurodė, mažesnei kohortai nurodė 766 920 £ per metus; aritmetikos šablonas tas pats – skaičius auga su slaugytojomis × sesijomis × tarifu.) Veiklos perrėminimas veiklos direktoriui: priešoperacinis vertinimas nustoja būti operacijų sąrašų apribojimu – tos pačios dienos atšaukimai mažėja, o operacinių išnaudojimas auga, ir ten prasideda *kita* naudos eilutė (žr. [tolesnių išteklių optimizavimas](../tolesnių-išteklių-optimizavimas/)).

## Ryšys su programinės įrangos inžinerija

Tas pats perrėminimas gelbsti kūrėjų produktyvumo teiginius nuo atlyginimų matematikos: atlaisvintas inžinerijos laikas, išreikštas kaip *pristatytas gebėjimas, kurio organizacija kitu atveju negalėtų sau leisti* – funkcijos, migracijos, patikimumo darbas – vertinamas tuo, ką organizacija moka už tokį gebėjimą ties riba (rangovų įkainiai ar atidėto samdymo atitikmenys). Veiklos direktoriaus rėmas taip pat moko ką nors apie platformos darbo pristatymą: naudą išreikškite vienetais, pagal kuriuos auditorija vertinama. Veiklos vadovai mąsto veikla ir tikslais, o ne abstrakčiomis valandomis; inžinerijos vadovai – kelrodžio elementais ir etatais, o ne sutaupytomis minutėmis.

## Spąstai

- **Pajėgumų teiginiai be paklausos**: 12 500 papildomų vertinimo laiko tarpų svarbūs tik jei chirurginis vamzdynas juos užpildo – patikrinkite tolesnį apribojimą.
- **Tarifo vertė be mokėjimo mechanizmo**: esant mišriam apmokėjimui papildoma veikla gali neatnešti papildomų pajamų; vertė gali būti laukimo sąrašo sumažinimas (žr. [laukimo sąrašo poveikis](../laukimo-sąrašo-poveikis/)).
- **Pajėgumų pateikimas kaip pinigų** – tai pavyzdinė pinigų neatlaisvinanti nauda; pažymėkite ją (žr. [pinigus atlaisvinančios ir neatlaisvinančios santaupos](../pinigus-atlaisvinančios-ir-neatlaisvinančios-santaupos/)).

## Šaltiniai

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
