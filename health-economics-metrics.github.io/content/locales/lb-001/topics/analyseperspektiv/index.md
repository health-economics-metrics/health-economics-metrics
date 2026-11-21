# Analyseperspektiv

D'Perspektiv definéiert, *wiere* seng Käschten an Notzen an enger ökonomescher Analyse zielen: dee vum Zueler, dee vum Leeschtungserbrénger oder dee vun der Gesellschaft als Ganzt. Déiselwecht Interventioun kann aus enger Perspektiv brillant an aus enger anerer schrecklech ausgesinn.

## Firwat et wichteg ass

All ökonomesch Evaluatioun muss hir Perspektiv vun Ufank un deklaréieren, well d'Perspektiv bestëmmt, wéi eng Posten et gëtt:

- **Zueler-Perspektiv** (z. B. NHS-Commissioner, Versécherer): nëmmen Käschten, déi de Zueler rembourséiert.
- **Leeschtungserbrénger-Perspektiv** (z. B. en Hospital Trust): intern Liwwerkäschten, Personal, Immobilien.
- **Gesellschaftlech Perspektiv**: alles — och d'Zäit vun de Patienten, Reesen, informell Betreiung duerch d'Famill a Produktivitéitsverloschter fir d'Patronen.

dem NICE säi Referenzfall benotzt d'**NHS-a-Personal-Social-Services-(PSS)-Perspektiv** fir Käschten. Dat US-Second-Panel zur Käschte-Effektivitéit empfehlt, souwuel eng Analyse vum Gesondheetssektor wéi och eng gesellschaftlech ze mellen, mat engem „Impact Inventory", dat opléscht, wat dran ass.

## D'Mathematik

Keng Formel — eng Scoping-Regel, déi virun all Mathematik ugewannt gëtt:

```
Abegraff Käschten-/Notzenkategorien = f(Perspektiv)
```

Eng nëtzlech Kontroll: eng Impact-Inventory-Tabell opbauen mat enger Zeil pro Käschte/Notzen an enger Kolonn pro Perspektiv, an markéieren, wéi eng Zellen zielen.

## Berechent Beispill

Eng Symptom-Checker-App leet 10.000 Hausdokterbesich pro Joer op Selbstbetreiung ëm.

- **Zueler (NHS)**: spuert 10.000 × 42 £ pro Hausdokter-Consultatioun = **420.000 £/Joer** — staark positiv.
- **Leeschtungserbrénger (Hausdokter-Praxis)**: bei Zuele per Kapitatioun bleift hiren Akommes onverännert, awer d'Aarbechtsbelaaschtung fält — liicht positiv.
- **Gesellschaftlech**: déi agespuert Rees- a Wartezäit vun de Patienten derbäi, soen mir 10.000 × 2 Stonnen × 15 £/Stonn = 300.000 £ Zäitwäert; awer de Schued ofzéien, wann 2 % falsch berouegt ginn a méi spéit, méi krank, derhier kommen, bei 200 × 3.000 £ = 600.000 £ zousätzlech Behandlung. Gesellschaftlechen Netto: 420.000 + 300.000 − 600.000 = **120.000 £/Joer** — positiv, awer dominéiert vun der Sécherheetsannahm.

Déiselwecht App, dräi verschidden Äntwerten. D'Deklaratioun vun der Perspektiv ass dat, wat d'Zuelen vergläichbar an éierlech mécht.

## Bezuch zur Softwareentwécklung

Tool- a Plattform-ROI huet och Perspektiven:

- **Team-Budget („Zueler")**: passt d'Lizenzgebühr an meng Käschtestell?
- **Plattform-Organisatioun („Leeschtungserbrénger")**: Gesamtkäschten inklusiv Integratioun, Support a Maintenance.
- **Firma („gesellschaftlech")**: Clientekimpakt, Sécherheets-Externalitéiten an d'Zäit vun all betraffenen Equipe abezéien.

E CI-Tool, dat fir d'kafend Team bëllig ass, awer Migratiounsaarbecht op 40 aner Equipe verréckelt, ass d'Softwareversioun vu Cost-Shifting — nëmmen aus der méi breeder Perspektiv siichtbar. Gëff an all Business Case d'Perspektiv un; Reviewer kënnen Annahmen net erausfuerderen, déi se net gesinn.

## Falen

- **Stëlle Perspektivwiessel**: gesellschaftlech Notzen zielen, awer nëmmen Zueler-Käschten, léisst alles käschte-effektiv ausgesinn.
- **Duebelzielen**, wann Perspektive vermëscht ginn (z. B. e agespuerten Hausdokter-Rendez-vous als Zueler-Ersparnis an als Patientenzäit-Ersparnis zielen, wann d'Zuelerzuel d'Personalzäit scho enthält).
- **Cost-Shifting ignoréieren**: „Ersparnisser", déi d'Käschte just op Patienten, Betreier oder en anert Departement verréckelen.

## Quellen

- Sanders GD, et al. "Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine." JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
