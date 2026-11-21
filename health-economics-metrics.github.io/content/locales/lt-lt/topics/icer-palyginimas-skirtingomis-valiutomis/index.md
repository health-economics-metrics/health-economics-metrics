# ICER palyginimas skirtingomis valiutomis

Vienos šalies valiuta apskaičiuoto [ICER](../prieaugio-sąnaudų-efektyvumo-santykis/) palyginimas su kitos šalies [norimo mokėti slenksčiu](../pasirengimo-mokėti-slenksčiai/) arba daugianacionaliniame tyrime surinktų sąnaudų duomenų sujungimas reikalauja aiškaus, audituojamo valiutos konvertavimo žingsnio. Jei konvertavimo metodas pasirinktas neteisingai, tie patys pagrindiniai įrodymai gali apversti priėmimo sprendimą, nors nieko nepasikeitė klinikiniuose ar sąnaudų duomenyse.

## Kodėl tai svarbu

ISPOR metodinės gairės daugianacionaliniams klinikiniams tyrimams (Willke et al., *Health Economics*, 1998) rekomenduoja išteklių sąnaudas konvertuoti naudojant **perkamosios galios paritetą (PPP)**, o ne rinkos valiutų kursus, kai lyginama realioji ekonominė išteklių vertė tarp šalių, o rinkos užsienio valiutos kursus palikti tam, kam jie iš tikrųjų skirti: realiems tarpvalstybiniams grynųjų pinigų mokėjimo srautams modeliuoti. Šių dviejų painiojimas yra viena dažniausių daugianacionalinių SVV metodologinių klaidų – būtent todėl, kad abu žmogui, neskaičiusiam gairių, atrodo kaip „valiutos kursas“, o skaičiuoklė netrukdo to padaryti neteisingai.

## Matematika

```
icer_in_local_currency = convert(icer_in_source_currency, conversion_factor)

conversion_factor should be:
  PPP conversion factor  — for comparing real economic value of resources
                            across countries (ISPOR-recommended for
                            multinational CEA)
  market FX rate         — only for actual cross-border cash payments

adopt if icer_in_local_currency < local_threshold
```

Pati sprendimo taisyklė yra įprasta [ICER slenksčio taisyklė](../pasirengimo-mokėti-slenksčiai/) – `adopt if ICER < λ` – o šios temos metodologinis klausimas visiškai susijęs su tuo, *kuris konversijos koeficientas* sukuria `icer_in_local_currency` skaičių, kuriam taikoma ta taisyklė.

## Išspręstas pavyzdys

Vaisto ICER iš JAV tyrimo yra 45 000 USD/QALY. Hipotetinė importuojanti šalis nustato savo iliustracinį slenkstį 34 000 £/QALY (hipotetinis šaliai specifinis skaičius tik šiam pavyzdžiui – tikri slenksčiai skiriasi pagal šalį ir laikui bėgant keičiasi, jie visada turi būti nurodomi su šaltiniu ir data).

**Naudojant PPP konversijos koeficientą 0,72** (iliustracinis, tik šiam išspręstam pavyzdžiui): 45 000 USD × 0,72 = 32 400 £/QALY. 32 400 £ < 34 000 £ → **priimti**.

**Vietoje to naudojant rinkos valiutos kursą 0,79** (iliustracinis): 45 000 USD × 0,79 = 35 550 £/QALY. 35 550 £ > 34 000 £ → **atmesti**.

Tas pats pagrindinis 45 000 USD/QALY ICER pagal PPP konversiją duoda sprendimą priimti, o pagal rinkos valiutos kurso konversiją – atmesti. Tai konkreti iliustracija, kodėl ISPOR gairės konversijos koeficiento pasirinkimą laiko metodologiškai reikšmingu – ne apvalinimo detale ir ne tuo, ką reikia palikti numanomą skaičiuoklės formulėje, kurios niekas du kartus netikrina.

## Ryšys su programinės įrangos inžinerija

Tai gerai žinomos inžinerijos srities sveikatos ekonomikos veidrodis: i18n / l10n daugiavaliučio kainodaros teisingumas komercinėje programinėje įrangoje, kur SaaS kainų puslapis niekada neturi tyliai lyginti `$` sumos su `£` kaina. Tipo lygmens garantija, kurią suteikia gerai sukurtas `Money` tipas – palyginimo metodai, atsisakantys lyginti nesutampančias valiutas ir verčiantys pirmiausia atlikti aiškų konvertavimo žingsnį – yra tiesioginė programinės įrangos inžinerijos paralelė čia išdėstytam sveikatos ekonomikos metodologiniam punktui: nelyginkite nekonvertuotų skaičių skirtingomis valiutomis ir neleiskite, kad konvertavimo žingsnis būtų numanomas ar nedokumentuotas.

## Spąstai

- **Tylus skirtingų valiutų sumų lyginimas**: ad hoc skaičiuoklių SVV darbas, kuris atima ar lygina dolerių ir svarų skaičių be išankstinio konvertavimo – klaidų klasė, kurią tikras valiutą suprantantis `Money` tipas pagauna pagal konstrukciją, o ne palieka kaip tylią klaidą.
- **Rinkos valiutos kurso painiojimas su PPP**: pagal ISPOR gaires – dažniausia daugianacionalinė SVV metodų klaida; šie du skaičiai gali gerokai skirtis ir atsako į skirtingus klausimus (realioji ekonominė vertė prieš faktinį pinigų srautą).
- **Nenurodyta naudoto valiutos kurso ar PPP indekso data**: abu laikui bėgant kinta, todėl bet kuris cituojamas konversijos koeficientas turi būti datuotas taip, kaip šis repozitorijus datuoja kitus etaloninius skaičius (Green Book anglies vertės, išvengiamos mirties vertė ir t. t.).

## Šaltiniai

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
