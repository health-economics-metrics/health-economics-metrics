# WSJF ir CD3

CD3 (Cost of Delay Divided by Duration – vėlavimo kaina, padalyta iš trukmės) ir WSJF (Weighted Shortest Job First – svertinis trumpiausias darbas pirmas) yra prioritetų nustatymo taisyklės, planuojančios darbą pagal **vertės tankį**: kiek vėlavimo kainos pašalinama vienam suvartotam ribotų pajėgumų vienetui. Esant bendriems, fiksuotiems pajėgumams, didžiausio CD3 pirmumas yra matematiškai optimali seka bendrai vėlavimo kainai minimizuoti.

## Kodėl tai svarbu

Kiekvienas atsilikimų sąrašas yra racionavimo problema: daug vertų elementų, vienas konvejeris. Sveikatos ekonomika tą pačią problemą sveikatos biudžetams išsprendė sąnaudų efektyvumo lentelėmis – reitinguoti intervencijas pagal sveikatos prieaugį už svarą, finansuoti žemyn sąrašu, kol biudžetas išsenka. CD3 yra identiška logika pristatymo pajėgumams: nauda vienam *ribojamo ištekliaus* vienetui, finansuojama reitingo tvarka. Teisinga seka yra nemokami pinigai – tas pats darbas, tie patys pajėgumai, mažesnė bendra vėlavimo kaina.

## Matematika

```
CD3  = Cost of Delay (£/week) / Duration (weeks)      — real units (Black Swan Farming)

WSJF = (user-business value + time criticality + risk reduction/opportunity
        enablement) / job size                         — SAFe's relative-scale proxy,
                                                        modified-Fibonacci scores
```

CD3 su tikra valiuta ([vėlavimo kaina](../vėlavimo-kaina/)) yra griežtai stipresnis už WSJF bevienečius taškus – WSJF santykis su CD3 yra toks pat kaip daugiakriterinio balų vertinimo su pilna [sąnaudų naudingumo analize](../sąnaudų-naudingumo-analizė/): tinka, kai pinigais įvertinti nepraktiška, manipuliuotinas, kai balai neturi inkaro.

## Išspręstas pavyzdys

Trys funkcijos, viena komanda:

```
Feature   CoD (£/wk)   Duration   CD3
A         30,000       10 wks     3,000
B         12,000       2 wks      6,000
C         5,000        1 wk       5,000
```

CD3 tvarka: B, C, A. Palyginkite bendrą vėlavimo kainą su tvarka „didžiausia CoD pirma“ (A, B, C):

```
CD3 order  (B,C,A): A waits 3 wks, C waits 2 → 30k×3 + 5k×2  = £100k delay cost
CoD order  (A,B,C): B waits 10, C waits 12   → 12k×10 + 5k×12 = £180k
```

Tos pačios funkcijos, ta pati komanda – vien seka sutaupo 80 000 £. Intuicija: mažos, skubios užduotys eina pirmos, nes pigiai atlaisvina savo vėlavimo kainą; didelė užduotis trumpai palaukdama praranda mažai.

## Ryšys su programinės įrangos inžinerija

Sveikatos priežiūros programinės įrangos portfeliams denominuokite CoD šioje knygoje mokomais vienetais: QALY/savaitę × slenkstis + veiklos £/savaitę, ir atsilikimų sąrašas tampa tiesiogiai palyginamas su tuo, kaip sveikatos sistema reitinguoja viską kita, ką perka. Dvi praktinės pastabos: (1) trukmė reiškia *kalendorinį laiką, užimantį apribojimą*, o ne pastangas – 2 savaičių elementas, kuriam reikia 2 dienų kliūties komandos, yra pigesnis, nei atrodo (žr. [tolesnių išteklių optimizavimas](../tolesnių-išteklių-optimizavimas/)); (2) ligoninės tą pačią taisyklę taiko numanomai, tvarkydamos operacinių sąrašus pagal skubumu svertą pralaidumą – klinikinio prioriteto kategorijos yra sunkumu sverti CD3 (žr. [QALY deficitas ir sunkumo modifikatoriai](../qaly-deficitas-ir-sunkumo-modifikatoriai/)).

## Spąstai

- **WSJF balų teatras**: bevienečių Fibonačio taškų diskusijos sutampa su tuo, kas garsiausiai ginčijasi; bent atsilikimų sąrašo viršaus elementus inkaruokite tikroje CoD.
- **Trukmės žaidimai**: elementų skaidymas siekiant išpūsti CD3 reitingą – tinka, kai skaidiniai teikia vertę nepriklausomai, sukčiavimas, kai neteikia.
- **Skubumo profilių ignoravimas**: terminu apibrėžta CoD (reguliaciniai terminai) laužo pastovios spartos prielaidą; juos planuokite pagal datos įgyvendinamumą, likusius – pagal CD3.
- **Perreitingavimo sūkurys**: CD3 skirtas sekos sprendimams įsipareigojimo metu, o ne kasdieniam vykdomo darbo permaišymui (žr. [srauto rodikliai](../srauto-rodikliai/) apie WIP).

## Šaltiniai

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
