# Eraiki vs erosi (Build vs Buy)

Eraiki-vs-erosi garapen pertsonalizatuaren eta eskuraketa komertzialaren arteko konparaketa egituratua da, [TCO](../jabetzaren-kostu-osoa/) eguneratuan, entrega-denboran eta arriskuan oinarrituta. Aurreko enpirikoak alde batekoak dira: **eraikuntza-kostu errealek normalean aurreikuspenak %30–40 gainditzen dituzte**, erositako irtenbideak %40–60 azkarrago hedatzen dira, eta MITen 2025eko GenAI ikerketak aurkitu zuen erositako AA tresnek ~%67ko arrakasta izan zutela barne eraikuntzek horren heren bat inguru.

## Zergatik axola duen

Osasun-sistemek etengabe hartzen dute erabaki hau (NHSren hizkeran "make vs commission"), eta ingeniaritza-erakundeek sistematikoki oker egiten dute eraikitzearen noranzkoan — eraikitzaileek eraikuntza estimatzen dutelako, ez [TCO](../jabetzaren-kostu-osoa/)a, eta eraikitzea dibertigarriagoa delako. Esparru ekonomikoak konparaketa zintzoa behartzen du: bi aukerak horizonte berean prezioztatuak, biak arriskuaren arabera doituak, eta *denbora-aldea [atzerapenaren kostu](../atzerapenaren-kostua/) gisa prezioztatua* — erantzuna gehien erabakitzen duen eta gehien ahazten den terminoa.

## Matematika

```
Konparatu 3–5 urteko horizonte berean, eguneratuta:

NPV_aukera = PV(onurak, balio-denboraren arabera aldatuak) − PV(TCO)

Arrisku-doikuntzak (Green Book-en "baikortasun-alborapena" eredua):
  eraikuntza-kostua × 1.3–1.4        (gainkostuaren aurrekoa)
  eraikuntzaren balio-denbora + %40–60 (hedapen-atzerapenaren aurrekoa)
  erosketa: gehitu integrazioaren errealitate-egiaztapena eta irteera-kostuak

Erabaki-eragileak, normalean erabakitzen duten ordenan:
  1. bereizgarritasuna — gaitasun hau zure produktua da, ala hodiak?
  2. balio-denbora × CoD
  3. arriskuaren arabera doitutako TCO
```

## Adibide landua

Trust batek adostasun elektronikoko sistema bat behar du. Erosi: £150k/urte SaaS, 3 hilabetetan martxan. Eraiki: £600k + £120k/urte mantentze-lanak estimatuta, 12 hilabetetan martxan.

```
Arriskuaren arabera doitutako eraikuntza: 600k × 1.35 = £810k; balio-denbora ≈ 18 hilabete
5 urteko TCO:  erosi = 150k × 5 = £750k
               eraiki = 810k + 120k × 5 = £1,410k
Atzerapen-terminoa: adostasunaren digitalizazioak £25k/hilabete aurrezten ditu; eraikuntza
            15 hilabete beranduago iristen da → CoD = 15 × 25k = £375k

Konparaketa eraginkorra: £750k vs £1,785k — erosteak ~£1M irabazten du, eta eraikuntzaren
ondoren termino bakarrik handiena inork prezioztatu ez zuen atzerapen-kostua da.
```

Eraikitzea zuzena izaten jarraitzen du gaitasuna bereizgarria denean (zure produktuaren oinarrizko algoritmoa), saltzaileren batek murrizketa gogor bat betetzen ez duenean (segurtasun klinikoa, datuen egoitza) edo saltzaileari lotzeko arriskua larria eta prezioztatua denean.

## Software ingeniaritzarekin lotura

Eraman daitekeen osasun-ekonomiako diziplina hirukoitza da: **aurrekoetan oinarritutako arrisku-doikuntza** (%30–40ko gainkostu-igoera softwareko Green Book-aren baikortasun-alborapena da — aplikatu mekanikoki, eztabaidatu salbuespenen alde, ez haietatik abiatuta); **konparatzailearen zintzotasuna** (eraikitzearen alternatiba ez da "ezer", eskura dagoen erosketarik onena baizik — ikus [aukera-kostua](../aukera-kostua/)); eta **baliokidetasun-proba kostuen konparaketaren aurretik** (erosketak eta eraikuntzak espezifikazio bera betetzen badute, hau [kostu-minimizazio analisia](../kostu-minimizazio-analisia/) da eta merkeak irabazten du; ez bada, emaitza-aldea balioztatu behar da, ez baieztatu).

## Tranpak

- **Saltzailearen prezio-zerrenda arriskuaren arabera doitu gabeko eraikuntza-estimazioekin alderatzea** — eraikitzearen aldeko bikoitzeko lausengua.
- **Barne-lana zero prezioan** ("taldea dagoeneko hemen dago").
- **Bi noranzkoetako lock-in prezioztatu gabea**: saltzailearen irteera-kostuak, baina baita eraikuntzaren bus-factor-a eta mantentze-iraupena ere.
- **Identitateak bultzatutako eraikuntzak**: "hau gurea da funtsean" hodietarako aldarrikatuta — probatu bereizgarritasuna bezeroek konturatuko liratekeen ala ez.

## Iturriak

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
