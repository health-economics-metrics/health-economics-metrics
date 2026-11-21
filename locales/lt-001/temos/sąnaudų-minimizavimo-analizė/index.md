# Sąnaudų minimizavimo analizė (CMA)

CMA lygina tik sąnaudas ir pasirenka pigiausią parinktį – teisėta *tik* tada, kai įrodyta, kad alternatyvų rezultatai yra ekvivalentūs.

## Kodėl tai svarbu

CMA yra paprasčiausia analizė ir labiausiai piktnaudžiaujama. Visą darbą atlieka ekvivalentiškumo teiginys: jei rezultatai tikrai nesiskiria (biosimiliaras ir jo originalas; du tos pačios paslaugos tiekėjai, atitinkantys tą pačią specifikaciją), tada kaina yra vienintelis klausimas ir CMA yra teisinga. Griežtumas slypi pirmiausia *įrodant* ekvivalentiškumą – paprastai neprastesnio veiksmingumo tyrimu su iš anksto nustatyta riba – o būtent šį žingsnį pirkėjai dažniausiai praleidžia.

## Matematika

```
Given evidence that Effect_A ≈ Effect_B (within a pre-specified margin δ):
Choose min(Cost_A, Cost_B)

Costs measured from the same perspective, over the same horizon,
including switching/transition costs.
```

Jei ekvivalentiškumo įrodyti neįmanoma, CMA negalioja – vietoje jos naudokite [CEA](../sąnaudų-efektyvumo-analizė/) / [CUA](../sąnaudų-naudingumo-analizė/).

## Išspręstas pavyzdys

Trestas renkasi tarp dviejų vaizdo konsultacijų platformų. 3 mėnesių lygiagretus bandymas rodo užbaigimo rodiklius 94,1 % ir 93,8 %, pacientų pasitenkinimą 4,4 ir 4,4 – skirtumai yra iš anksto sutartos 2 procentinių punktų δ ribose. Rezultatai: ekvivalentūs. Sąnaudos per 3 metus:

```
                     Platform A     Platform B
Licences             £360,000       £210,000
Integration          £80,000        £150,000
Training/support     £60,000        £90,000
Total                £500,000       £450,000
```

B platforma laimi 50 000 £ – *įskaitant* didesnę integracijos kainą. Be bandymo ekvivalentiškumo teiginys remtųsi tiekėjų brošiūromis, o 1 punkto užbaigimo rodiklio skirtumas (≈ tūkstančiai nepavykusių konsultacijų per metus) užgožtų 50 000 £.

## Ryšys su programinės įrangos inžinerija

CMA yra formali įprastų prekių pirkimo forma: du CI tiekėjai, atitinkantys identiškus SLO, dvi objektų saugyklos su ta pačia patvarumo specifikacija. Sveikatos ekonomikos pamoka – *veiksmų tvarka*: pirmiausia įrodykite ekvivalentiškumą (palyginkite su savo darbo apkrova, išbandykite pagal savo SLO, su iš anksto sutarta riba), tada palyginkite visas sąnaudas, įskaitant migraciją. „Jie iš esmės tokie patys, B pigesnis“ be pirmojo žingsnio yra kaip organizacijos perka įrankį, kuris 10 % pigesnis ir 40 % prastesnis. Išvada: kai tiekėjas ginčija kainą, priversk jį pripažinti ekvivalentiškumą – tai įpareigoja ir kita kryptimi.

## Spąstai

- **Prielaidomis pagrįstas ekvivalentiškumas** – pagrindinė nuodėmė; skirtumo įrodymų nebuvimas nėra ekvivalentiškumo įrodymas (per mažos galios bandymai „parodo“ ekvivalentiškumą veltui).
- **Perėjimo sąnaudų praleidimas** – migracija, perkvalifikavimas ir lygiagretus veikimas priklauso sąnaudų pusei.
- **Ekvivalentiškumas pagal netinkamus rezultatus**: ekvivalentu pagal išmatuotą rodiklį, bet skiriasi pagal svarbų (prieinamumas, uodegos vėlinimas, duomenų išėjimas).

## Šaltiniai

- York Health Economics Consortium glossary: cost-minimization analysis. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
