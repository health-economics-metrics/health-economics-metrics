# NICE Evidence Standards Framework (ESF)

Den ESF ass dem NICE säi Kader, dee spezifizéiert, **wéi vill Evidenz eng digital Gesondheetstechnologie brauch, proportional zu hirem Risiko**. Et ass dat Noosten, wat et un eng offiziell Äntwert op „wat musse mir beweisen, ier den NHS eis App kaaft?" gëtt.

## Firwat et wichteg ass

Den ESF (2019 fir d'éischt erauskomm, 2022 aktualiséiert, fir KI an adaptiv Algorithmen ofzedecken) klasséiert digital Gesondheetstechnologien no klinescher Funktioun a Stufen, mat **kumulativen** Evidenzstandarden — 21 Standarden an 5 Gruppen (Design-Faktoren, Wäert, Leeschtung/Wirksamkeet, ökonomeschen Impakt, Asaz):

```
Stuf A — Systemservicer, kee direkten Patienten-Outcome (z. B. E-Rostering)
         → Basisstandarden: Glaubwürdegkeet, Dateschutz, technesch Assurance
Stuf B — informéieren, einfach Monitoring, Kommunikatioun (z. B. Symptomdagebuch)
         → + Evidenz fir Notzernotzen, adäquat Zouverlässegkeet
Stuf C — behandelen, diagnostizéieren oder klinescht Management aktiv leeden
         → + héichqualitativ vergläichend Wirksamkeetsevidenz (idealerweis RCT)
           an ökonomesch Analys
```

Fir ökonomesch Evidenz ass [Käschte-Konsequenz-Analyse](../käschte-konsequenz-analyse/) fir déi meescht Stufen akzeptabel; [Käschte-Notzwäert-Analyse](../käschte-notzwäert-analyse/) gëtt beim héchste Risiko erwaart. Den ESF definéiert deng **Evidenzkäschte fir de Maartzougang** — dofir budgetéieren wéi all aner Baukäschten.

## D'Mathematik

Keng Formelen — eng Entscheedungstabell. Déi operativ Berechnung ass kommerziell:

```
Néideg Evidenzinvestitioun = f(Stuf)
  Stuf A: Dokumentatioun + Assurance ≈ 10k–50k £
  Stuf B: observational/vergläichend Notzernotzen-Studie ≈ 50k–250k £
  Stuf C: RCT-Grad vergläichend Studie + ökonomescht Modell ≈ 250k–2 Mio. £+

D'Behaaptunge vum Produkt bewosst positionéieren: „ënnerstëtzt klinesch Entscheedungen"
amplaz „informéiert Patienten" ze behaapten verréckelt dech eng Stuf a kann d'Rechnung
verzéngfachen.
```

## Berechent Beispill

E Medikamenterënnerungs-App-Hiersteller iwwerleet, eng Dosis-Ajustéierungs-Empfehlungs-Feature derbäizesetzen.

- Als Erënnerungs-App: **Stuf B** — eng Kohortestudie, déi Adhärenz-Verbesserung weist, duergeet.
- Mat Dosis-Empfehlungen: **Stuf C** — vergläichend Wirksamkeetsevidenz (wahrscheinlech en RCT géint üblech Betreiung) plus ökonomesch Analys.

Wann den RCT 600k £ kascht an dem Dosis-Feature säin inkrementellen Ëmsaz 200k £/Joer ass, muss d'Feature 3+ Joer Wäert halen, bis d'Evidenzkäschte sech ausgläichen — eng Produktentscheedung, déi ganz anescht ausgesäit, soubal d'ESF-Stuf bewäert ass. Vill Equipen liwwere dat Stuf-B-Produkt aus a stufe d'Stuf-C-Behaaptung hannert Finanzéierung.

## Bezuch zur Softwareentwécklung

Den ESF ass dat eenzegt am meeschte iwwerdroebart Governance-Muster an dësem Repo: **risikogestuffte Evidenzfuerderunge fir Tool-Adoptioun**. Intern Versioun: e Code-Formatter brauch en Demo (Stuf A); en Produktivitéitstool, dat agespuert Stonnen behaapt, brauch e gemoossenen Pilot (Stuf B); e KI-Gate, deen Deploys automatesch blockéiert oder klinesche Code automatesch schreift, brauch kontrolléiert-Studie-Grad Evidenz virum organisatiounsweiten Rollout (Stuf C). Proportional Evidenz stoppt béid Feelermoduser — Bürokratie, déi trivial Tools erdréckt, a Stëmmungen, déi konsequent liwweren. Kuckt och [DiGA-Fast-Track](../dem-däitschland-säin-diga-fast-track/) fir de „provisoresch Adoptioun mat Evidenz-Delai"-Komplement.

## Falen

- **Stuf-Falschklassifizéierung duerch Wonschdenken** — Regulatoren a Keefer klasséieren no deem, wat de Produkt *mécht*, net wat de Marketing seet.
- **Evidenz no dem Produkt gebaut**: e RCT op e geliwwert Produkt ouni Instrumentéierung oder Equipoise nozerüsten ass lues an dacks onméiglech.
- **Den ESF erfëllen an de Rescht vergiessen**: den ESF steet nieft DTAC (klinesch Sécherheet, Dateschutz, Interoperabilitéit) an, bei KI, reglementarescher Zertifizéierung — kuckt [Reglementaresch Evaluatioun vu KI](../reglementaresch-evaluatioun-vu-ki/).

## Quellen

- NICE Evidence Standards Framework (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
