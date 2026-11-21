# Sąnaudų efektyvumo analizė (CEA)

CEA lygina alternatyvių intervencijų sąnaudas pagal vieną rezultatą, išmatuotą **natūraliais vienetais** – gyvenimo metais, aptiktais atvejais, išvengtomis hospitalizacijomis, sumažintu kraujospūdžiu mmHg. Jos rezultatas – kaina vienam rezultato vienetui.

## Kodėl tai svarbu

CEA yra darbinis palyginimas, kai visos parinktys siekia to paties rezultato. Ji atsako „kuris iš šių būdų pasiekti X yra geriausias pinigų panaudojimas?“ – bet *ne* „ar apskritai verta siekti X?“ (tam reikia [sąnaudų ir naudos analizės](../sąnaudų-ir-naudos-analizė/)) ir *ne* „kaip X palyginti su nesusijusiais prioritetais?“ (tam reikia [sąnaudų naudingumo analizės](../sąnaudų-naudingumo-analizė/) ir bendro rezultato, pavyzdžiui, QALY).

## Matematika

Palyginimo statistika yra [ICER](../prieaugio-sąnaudų-efektyvumo-santykis/) natūraliais vienetais:

```
ICER = (Cost_A − Cost_B) / (Effect_A − Effect_B)
     = £ per additional case detected / admission avoided / etc.
```

Procedūra: apibrėžkite rezultato vienetą; įkainokite kiekvieną parinktį ta pačia [perspektyva](../analizės-perspektyva/) tuo pačiu [laiko horizontu](../laiko-horizontas/); pašalinkite dominuojamas parinktis ([efektyvumo riba](../dominavimas-ir-efektyvumo-riba/)); apskaičiuokite prieaugio santykius išilgai ribos.

## Išspręstas pavyzdys

Trys būdai rasti nediagnozuotą prieširdžių virpėjimą 100 000 gyventojų:

```
Option                    Cost        Cases found
Opportunistic pulse checks £150,000       300
Pharmacy screening events  £400,000       520
Wearable-based screening   £900,000       610

ICER pharmacy vs pulse:  (400k−150k)/(520−300) = £1,136 per additional case
ICER wearable vs pharmacy:(900k−400k)/(610−520) = £5,556 per additional case
```

Ar 5 556 £ už papildomą atvejį „verta“, priklauso nuo rasto atvejo vertės (insulto prevencija vėliau) – CEA surikiuoja parinktis, bet priėmimo sprendimui reikia to išorinio vertinimo. Atkreipkite dėmesį, kad nešiojamo prietaiso parinkties *vidutinė* kaina vienam atvejui (900 tūkst. / 610 = 1 475 £) atrodo gerai; *prieaugio* 5 556 £ yra sąžiningas skaičius plėtimo sprendimui.

## Ryšys su programinės įrangos inžinerija

CEA yra tinkamas šablonas, kai parinktys dalijasi vienu rezultatu: kaina vienam pašalintam nestabiliam testui trimis taisymo būdais; kaina vienam išvengtam incidentui tarp stebimumo tiekėjų; kaina vienam sėkmingam diegimui tarp CI architektūrų. Disciplina, kurią ji primeta – vienas deklaruotas rezultato vienetas, prieaugio (o ne vidutiniai) santykiai, pirmiausia pašalintos dominuojamos parinktys – užmuša daugumą blogų tiekėjų palyginimų dar prieš prasidedant kainų diskusijai.

## Spąstai

- **Parinkčių su skirtingais rezultatais palyginimas** („rasti atvejai“ prieš „pasitenkinimas“) vienoje CEA – tam reikia [sąnaudų ir pasekmių analizės](../sąnaudų-ir-pasekmių-analizė/) arba bendro rezultato.
- **Vidutiniai ekonominio efektyvumo santykiai**, pateikti ten, kur reikia prieaugio (nešiojamo prietaiso pavyzdys aukščiau).
- **Rezultato vienetai, parinkti pataikavimui**: „sugeneruoti perspėjimai“ yra produktas, o ne rezultatas; reikalaukite vienetų, turinčių vertę.

## Šaltiniai

- CDC POLARIS: cost-effectiveness analysis. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
