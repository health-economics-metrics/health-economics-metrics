# Paciento pranešami rezultatai (PROM, PREM, MCID)

PROM – standartizuoti instrumentai, kuriais pacientai patys praneša apie savo sveikatos būklę (simptomai, funkcija, gyvenimo kokybė); PREM fiksuoja priežiūros *patirtį*. **MCID** – mažiausias klinikai svarbus skirtumas – mažiausias balų pokytis, kurį pacientai iš tikrųjų suvokia kaip naudingą: kartelė, kurią turi peržengti bet koks deklaruotas pagerėjimas.

## Kodėl tai svarbu

PROM yra pagrindinė skaitmeninės sveikatos veiksmingumo valiuta: programėlės retai pajudina mirtingumą, bet gali patikimai pajudinti validuotus simptomų balus. Svarbių instrumentų nedaug ir jie standartizuoti – **PHQ-9** (depresija, 0–27; sunkumo juostos ties 5/10/15/20), **GAD-7** (nerimas, 0–21; juostos ties 5/10/15), **EQ-5D** (naudingumas [QALY](../kokybės-požiūriu-pakoreguoti-gyvenimo-metai/)) – ir reguliatoriai, SVV institucijos bei mokėtojai juos priima būtent todėl, kad jie palyginami tarp produktų ir tyrimų. MCID yra sąžiningumo vartai: PHQ-9 MCID ≈ 5 balai, GAD-7 ≈ 4, EQ-5D indeksas paprastai ~0,03–0,08 – statistiškai reikšmingas 1,5 balo PHQ-9 pokytis didelėje imtyje yra *tikras, bet klinikai beprasmis*, ir įrodymų recenzentas tai pasakys.

## Matematika

```
PROM scoring: instrument-specific sums (e.g., PHQ-9 = Σ 9 items × 0–3)

MCID estimation:
  anchor-based:      score change among patients who report "somewhat better"
  distribution-based: ≈ 0.5 × SD of baseline scores (rough heuristic)

Response rate framing (for trials and dossiers):
  responder = patient improving ≥ MCID (or ≥50% for PHQ-9 convention)
  NNT = 1 / (responder rate_treatment − responder rate_control)
  — see number-needed-to-treat.md
```

## Išspręstas pavyzdys

Depresijos palaikymo programėlė, RCT prieš laukimo sąrašą, 12 savaičių:

```
PHQ-9 change: app −6.2 points, control −2.1 → adjusted difference −4.1
MCID check: 4.1 < 5 → mean difference below MCID; report responders instead:
  responders (≥5-point drop): app 48%, control 22% → ARR 26%
  NNT = 1/0.26 ≈ 4 — four users treated per additional clinical response

Economic bridge: responders' EQ-5D gain 0.06 sustained 6 months
  = 0.03 QALYs; per 1,000 users: 260 extra responders × 0.03 = 7.8 QALYs
  ≈ £156,000–£234,000 of health value at NICE thresholds
```

Reaguojančiųjų / NNT pateikimas atlaiko peržiūrą ten, kur sub-MCID vidutinis skirtumas būtų atmestas.

## Ryšys su programinės įrangos inžinerija

PROM yra duomenų rinkimo problema, kurią programinė įranga unikaliai pajėgi išspręsti: programėlėje esantys instrumentai pasiekia užbaigimo rodiklius ir išilginį tankį, kurių popierius niekada nepasiekė, paversdami įprastą produkto telemetriją SVV lygio įrodymais ([EQ-5D](../eq-5d/) yra penki ekranai). Inžinerijos taisyklės: naudokite validuotą instrumentą *pažodžiui* (performulavimas jį paneigia – taikomos licencijos); matavimą planuokite pagal protokolą, o ne įsitraukimo patogumą (matuoti tik aktyvius vartotojus yra išgyvenusiųjų šališkumas – žr. [išlaikymas](../išlaikymas-ir-nutekėjimas/)); ir instrumento duomenis versijuokite kaip bet kurią schemą – formuluotės pakeitimas tyrimo viduryje yra duomenų sugadinimas. PREM atitinka CSAT / NPS tipo instrumentus, ir ta pati pamoka galioja: standartizuota geriau nei namudinė visur, kur auditorija yra mokėtojas. Su darbo produktyvumu susijusiam instrumentui žr. [WPAI](../darbo-produktyvumo-ir-veiklos-sutrikimo-klausimynas/).

## Spąstai

- **Statistinis reikšmingumas žemiau MCID**, pateiktas kaip klinikinė nauda – dažniausias srities išpūtimas.
- **Regresija link vidurkio**: vartotojai registruojasi simptomų piko metu; vienos grupės prieš / po neapsakomai pervertina – palyginamosios grupės nederamos.
- **Instrumentų rinkimasis**: PHQ-9, GAD-7 ir WHO-5 paleidimas ir pranešimas to, kuris pajudėjo – iš anksto užregistruokite pirminį.
- **Skaitmeninės sutikimo apklausos spaudimas**: vartotojų stūmimas link palankių atsakymų sugadina instrumentą (o recenzentai žino bazinius rodiklius).

## Šaltiniai

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
