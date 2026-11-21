# Tikslus sąnaudų paskirstymas centais

Bendros pinigų sumos – bendros dotacijos, infrastruktūros sąskaitos, biudžeto poveikio skaičiaus – skaidymas keliems gavėjams naiviu procentų aritmetika įprastai sukuria dalis, kurių suma nesutampa su pradine bendra suma. Tikslus paskirstymas centais yra sprendimas: sveikųjų / dešimtainių skaičių metodas, dirbantis mažosiomis valiutos vienetomis (centais), garantuojantis, kad dalys sudaro *tiksliai* visumą, kad ir kaip netolygiai ji dalytųsi. Kiekvienam programinės įrangos inžinieriui, kuriam reikia suderinti padalytą sumą iki cento – atlyginimų skaičiavimas, dotacijų išmokėjimas, bendrųjų paslaugų perskirstymas – reikia šio šablono, o ne slankiojo kablelio procentų.

## Kodėl tai svarbu

Tai įvardytas, esminis įmonių programinės įrangos inžinerijos šablonas: Martino Fowlerio *Patterns of Enterprise Application Architecture* (2002) dokumentuoja `Money` ir `Allocate` būtent todėl, kad „padalyti 100 USD trim“ yra problema, kurią naivus kodas nuolat sprendžia neteisingai ir tyliai – klaida išlenda tik kai kas nors derina knygas ir randa dalis cento trūkstant (ar viršijant) bendrą sumą. Sveikatos ekonomikos ir NHS finansų darbe tai nėra akademiška: biudžeto poveikio sumos skaidomos tarp vietų, metų ar direktoratų; bendra infrastruktūra ir licencijavimo išlaidos paskirstomos skyriams pagal darbuotojų skaičių ar veiklos dalį. Kiekvienas toks padalijimas privalo sutapti tiksliai, nes finansų direktorius, gavęs dalis, kurių suma nesudaro visumos, nustoja pasitikėti visu modeliu.

## Matematika

```
Naive (broken) method:
  part_i = round(total × share_i / Σ shares)     — rounds each part independently

Exact method (largest remainder / "largest remainder allocation"):
  1. base_i = floor(total_minor_units × share_i / Σ shares)   — whole minor units (cents) only
  2. remainder = total_minor_units − Σ base_i                  — leftover cents, always < number of recipients
  3. distribute 1 extra minor unit each to the `remainder` recipients with the
     largest fractional remainder from step 1, until the leftover is exhausted

Result: Σ part_i == total, always, by construction.
```

Tikslus metodas niekada neapvalina dalies atskirai – jis apvalina *visą paskirstymą* kaip vieną operaciją, ir tai užtikrina sumos invariantą.

## Išspręstas pavyzdys

Padalykite 100,00 USD trims lygiomis dalimis (`shares = [1, 1, 1]`).

Naivus metodas: 100,00 USD ÷ 3 = 33,333… USD, nepriklausomai apvalinant iki artimiausio cento, kiekvienam gavėjui gaunama 33,33 USD. Suma: 33,33 × 3 = 99,99 USD – vienas centas pradingo, ir joks atskiras eilutės elementas nėra pakankamai „neteisingas“, kad būtų pastebėtas apžiūros metu.

Tikslus metodas: `base` = 33,33 USD visiems trims (iš viso 9 999 mažieji vienetai iš `floor(10,000 / 3) = 3,333` centų kiekvienam), paliekant 1 cento likutį (10 000 − 9 999). Tas vienas likęs centas atitenka gavėjui, turinčiam didžiausią trupmeninį likutį dalyboje – konkretus gavėjas yra vidinė lygiųjų sprendimo detalė, ne tai, nuo ko turėtų priklausyti iškviečiantysis. Du gavėjai gauna 33,33 USD, vienas – 33,34 USD, ir trys dalys sudaro tiksliai 100,00 USD.

Tai būtent ta aritmetika, kurios reikia [biudžeto poveikio analizei](../biudžeto-poveikio-analizė/), kai bendras biudžeto poveikio skaičius turi būti padalytas tarp vietų, kohortų ar finansinių metų ir suderintas su paskelbta suma – žr. [valiutai saugus sąnaudų sumavimas](../valiutai-saugus-sąnaudų-sumavimas/) dėl lydinčios problemos, kaip susumuoti daug tokių eilučių be dreifo.

## Ryšys su programinės įrangos inžinerija

Tai pažodžiui „Money šablonas“ iš įmonių programinės įrangos architektūros – esminis, įvardytas šablonas būtent šiai klaidų klasei, o ne vienkartinis triukas. Tikri finansinio derinimo gedimai pateko į gamybą būtent iš šios klaidų klasės: procentų padalijimai, skaičiuojami `f64`, apvalinami kiekvienam gavėjui ir niekada netikrinami su pradine suma. Tai tiesiogiai susiję su šio repozitorijaus [bendrosios nuosavybės kainos](../bendroji-nuosavybės-kaina/) moduliu, kuris šiuo metu sumuoja paprastas slankiojo kablelio sąnaudas per metus ir parinktis – ta pati tikslumo disciplina galioja, kai TCO ar biudžeto poveikio suma turi būti paskirstyta, o ne tik susumuota.

## Spąstai

- **Procentas, tada apvalinimas vietoje didžiausio likučio**: paskirstymas slankiojo kablelio procentais ir kiekvieno gavėjo apvalinimas atskirai, kas kaupia apvalinimo paklaidą ir retai sutampa su bendra suma, ypač daugeliui gavėjų.
- **Valiutos mažųjų vienetų eksponentų ignoravimas**: prielaida, kad kiekviena valiuta turi 2 dešimtainius ženklus – Japonijos jena turi 0, kai kurios valiutos turi 3 – ranka rašytas procentų padalijimas paprastai užkoduoja 2 ir tyliai genda kitoms valiutoms; tiksli paskirstymo rutina eksponentą skaito iš pačios valiutos (ISO 4217).
- **Jau paskirstyto likučio paskirstymas iš naujo**: paskirstymo rutinos paleidimas iš naujo su tuo, kas liko po ankstesnio paskirstymo, be idempotentiškumo patikrų, kas gali du kartus įskaityti tą patį centą tam pačiam gavėjui.

## Šaltiniai

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` and `Allocate` patterns.
- ISO 4217 — currency and funds code standard, which defines each currency's minor-unit exponent.
