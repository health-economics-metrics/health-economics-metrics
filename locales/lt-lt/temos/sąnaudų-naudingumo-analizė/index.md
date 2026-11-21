# Sąnaudų naudingumo analizė (CUA)

CUA yra sąnaudų efektyvumo analizė su **bendru, pagal pageidavimus pasvertu rezultatu** – beveik visada [QALY](../kokybės-požiūriu-pakoreguoti-gyvenimo-metai/) (arba išvengtu [DALY](../dėl-negalios-prarasti-gyvenimo-metai/)). Kadangi rezultato vienetas universalus, CUA gali lyginti intervencijas visiškai skirtingų ligų srityse.

## Kodėl tai svarbu

Nacionalinė sveikatos tarnyba iš vieno biudžeto turi rinktis tarp vėžio vaisto, psichikos sveikatos programėlės ir chirurginio roboto. Natūralūs vienetai jų palyginti negali; QALY gali. Todėl CUA yra etaloninio atvejo metodas NICE ir daugumoje SVV institucijų: jos rezultatas – kaina vienam QALY, vertinama pagal [slenkstį](../pasirengimo-mokėti-slenksčiai/) – yra artimiausia sveikatos politikos universaliam keitimo kursui. Jei norite, kad jūsų programinė įranga būtų finansuojama *vietoje kažko kito*, CUA yra arena.

## Matematika

```
ICUR = ΔCost / ΔQALYs      (the ICER with QALYs as the effect unit)

ΔQALYs = Σ (duration_i × utility_i)_new − Σ (duration_i × utility_i)_old
```

Naudingumai iš validuotų instrumentų ([EQ-5D](../eq-5d/)); ir sąnaudos, ir QALY [diskontuojami](../diskontavimas-ir-laiko-pirmenybė/) 3,5 % (NICE etaloninis atvejis); neapibrėžtumas per [PSA](../tikimybinė-jautrumo-analizė/).

## Išspręstas pavyzdys

KET programėlė vidutiniam nerimui, palyginti su laukimo sąrašu į tiesioginę terapiją, vienam pacientui:

```
Costs:  app licence + support        £250
        therapy displaced            −£680   (40% of users no longer need it)
        ΔC = 250 − 680 = −£430 (saves money)

QALYs:  6 months at utility 0.76 instead of 0.68 while waiting
        ΔE = 0.5 × (0.76 − 0.68) = +0.04 QALYs
```

ΔC < 0 ir ΔE > 0: programėlė **dominuoja** – geresnė ir pigesnė, santykio nereikia. Jei terapijos išstūmimo prielaida būtų tik 10 %, ΔC = 250 − 170 = +80 £, o ICUR = 80 / 0,04 = **2 000 £/QALY** – vis dar gerokai žemiau nei 20 000 £. Byla išlieka net smarkiai sumažinus pagrindinę prielaidą: tokia ir yra patikima CUA (ir [tornado diagrama](../jautrumo-analizė/) tai įrodo).

## Ryšys su programinės įrangos inžinerija

Gilioji CUA idėja – *vienas junginys, pagal pageidavimus pasvertas vienetas nepanašiems dalykams palyginti* – yra šablonas nepanašioms inžinerijos investicijoms (saugumas, kūrėjų patirtis, patikimumas) palyginti. Sąžiningos galimybės: arba ginamas junginio vienetas (retai), arba aiški [sąnaudų ir pasekmių lentelė](../sąnaudų-ir-pasekmių-analizė/) (įprastai). Nuo ko CUA įspėja – tai netikras junginys: pasvertas „poveikio balas“, kurio svoriai buvo suderinti po fakto, kad laimėtų pageidaujama parinktis. Sveikatos ekonomika dešimtmečius standartizavo naudingumų išgavimą būtent tam, kad svoriai būtų nustatyti prieš palyginimą.

## Spąstai

- **Naudingumo laimėjimai žemiau instrumento jautrumo** (žr. mažiausią klinikai reikšmingą skirtumą [paciento pranešamuose rezultatuose](../paciento-pranešami-rezultatai/)) – mažas ΔE, padaugintas iš didelių populiacijų, yra klasikinis plovimo triukas.
- **Praleistas palyginamosios priežiūros išstūmimas** – didžiausias skaitmeninių produktų sąnaudų narys dažnai yra tai, ką jie pakeičia.
- **Ne pageidavimais pagrįstų balų susiejimas su naudingumais** nepatvirtintais atitikmenimis.

## Šaltiniai

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
