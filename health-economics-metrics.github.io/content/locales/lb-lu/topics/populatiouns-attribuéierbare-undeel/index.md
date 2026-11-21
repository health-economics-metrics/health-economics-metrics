# Populatiouns-attribuéierbare Undeel (PAF)

PAF ass den Undeel vun der Belaaschtung vun enger Krankheet oder engem Outcome an enger Populatioun, deen enger spezifescher Risikofaktor-Exposition zougeschriwwe ka ginn — den Undeel, deen verschwanne géif, wann d'Exposition komplett ewechgeholl gëtt. Et wandelt „dëse Risikofaktor verduebelt deng Chancen" an eng Zuel op Populatiounsniveau ëm, ronderëm déi e Commissioner tatsächlech planen kann: wéi vill Fäll, a wéi vill Käschten, eng gewësse Exposition wierklech wäert ass ze verfollegen.

## Firwat et wichteg ass

De Levin huet PAF 1953 agefouert, fir eng schmuel, konkret Fro ze beäntweren: wann keen géif fëmmen, wéi vill Lungenkriibs géif verschwannen? Déiselwecht Arithmetik dimensionéiert elo national Präventiounsplanung iwwerall, vun Tubak- an Adipositas-Strategien bis zu de Risikofaktor-Rankingen vun der WHO-Global-Burden-of-Disease-Studie, well e relatiivt Risiko eleng näischt iwwer Impakt seet — e Risikofaktor kann d'Chancen vun engem seltenen Evenement verduebelen an d'Populatiouns-Krankheetsbelaaschtung kaum beweegen, oder d'Chancen vun engem heefegen Evenement nëmme liicht erhéijen an trotzdem e risege Undeel vun de Fäll ausmaachen. PAF ass dat, wat „Risikofaktor X ass geféierlech" an „Risikofaktor X ewechhuelen géif sou a sou vill Fäll pro Joer verhënneren" ëmwandelt, déi Zuel, déi de Business Case vun engem Präventiounsprogramm tatsächlech brauch. Kuckt [Präventiounsökonomie](../präventiounsökonomie/), wat et kascht, op déi Zuel ze handelen, soubal een se huet.

## D'Mathematik

```
PAF = Prävalenz_exponéiert × (relatiivt_Risiko − 1) / (1 + Prävalenz_exponéiert × (relatiivt_Risiko − 1))

Prävalenz_exponéiert = Undeel vun der Populatioun, dee dem Risikofaktor exponéiert ass (0–1)
relatiivt_Risiko     = Risiko vum Outcome bei Exponéierten vs. Net-Exponéierten (z. B. 2,5 = 2,5×)

Zougeschriwwe Fäll = Gesamtfäll × PAF
```

PAF klëmmt souwuel mat der Expositiounsprävalenz wéi och mam relativen Risiko — e bescheiden erhéicht relatiivt Risiko (soe mir 1,5×), verbonnen mat enger ganz heefeger Exposition, kann e gréissere PAF produzéieren wéi en dramatescht relatiivt Risiko (soe mir 5×), verbonnen mat enger seltener. Dat ass de ganze Grond, firwat et als eegestänneg Zuel nieft dem relativen Risiko existéiert.

## Berechent Beispill

E Risikofaktor ass bei 30 % vun enger Populatioun präsent (`Prävalenz_exponéiert = 0,3`) an erhéicht d'Risiko vum Outcome 2,5-fach (`relatiivt_Risiko = 2,5`):

```
PAF = 0,3 × (2,5 − 1) / (1 + 0,3 × (2,5 − 1))
    = 0,3 × 1,5 / (1 + 0,3 × 1,5)
    = 0,45 / 1,45
    ≈ 0,3103 (31,0 %)

Bei 1.000 Fäll/Joer an der Populatioun:
Zougeschriwwe Fäll = 1.000 × 0,3103 ≈ 310 Fäll/Joer
```

Knapp en Drëttel vun der jäerlecher Belaaschtung vun dësem Outcome ass der Exposition zougeschriwwen — se komplett ewechzehuelen (d'theoretescht Maximum; keng reell Interventioun erreecht 100 % Expositiounsentfernung) géif jäerlech ongeféier 310 vun den 1.000 Fäll verhënneren.

## Bezuch zur Softwareentwécklung

PAF ass déi epidemiologesch Versioun vun „wéi vill vun eisem Incident-Volumen ass dëser enger Root Cause zougeschriwwen?" — dee selwechte Fro, déi Equipen stellen, wa se eng spezifesch Klass vu Deploy oder Dependency géint all Produktiouns-Incidenter dimensionéieren, amplaz all Incident als gläich wäert ze behandelen, op déiselwecht Aart ze fixen. Eng Root-Cause-Kategorie, déi bei engem grousse Deel vun Deploys mat nëmme bescheidenem relativem Risiko, en Incident ze verursaachen, präsent ass, kann eng seelen, héich-relativ-Risiko-Kategorie iwwerrangéieren, wou ee Engineering-Effort als éischt ausgëtt — genau d'PAF-Erkenntnis, iwwersat.

## Falen

- **PAFs iwwer Risikofaktoren summéieren**: PAFs fir méi Faktoren, déi op deeselwechten Outcome wierken, addéieren sech net op 100 % — si kënnen insgesamt driwwer goen, well Faktoren interagéieren a kausal Weeër deelen. All PAF als „wann dëse Faktor eleng ewechgeholl gëtt" behandelen, ni als Opdeelung vum Gesamtrisiko.
- **E relatiivt Risiko iwwer Populatioune transplantéieren**: e relatiivt Risiko, geschat an enger Populatioun (aner Baseline-Expositiounsprävalenz, aner Confounder), berechent e irreféierende PAF, wann en op d'Expositiounsprävalenz vun enger anerer Populatioun ugewannt gëtt.
- **PAF mat attribuéierbarem Risiko bei den Exponéierten verwiesselen**: PAF ass Populatiounsniveau a hänkt vun der Expositiounsprävalenz of; attribuéierbart Risiko bei den Exponéierten ass Eenzelniveau a net. Si äntwere verschidde Froen — net eent zitéieren, fir dat anert ze beäntweren.

## Quellen

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
