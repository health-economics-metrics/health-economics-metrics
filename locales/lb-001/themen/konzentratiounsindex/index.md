# Konzentratiounsindex

De Konzentratiounsindex (Wagstaff, Paci, van Doorslaer, 1991) ass dat statistescht Standardmooss fir sozioökonomesch bedéngt Ongläichheet an enger Gesondheetsvariabel, vun -1 bis 1. Negativ heescht, d'Gesondheetsvariabel konzentréiert sech bei de sozioökonomesch Benodeelegten, positiv heescht, si konzentréiert sech bei de Besserstehenden, an null heescht kee konsequente sozioökonomesche Gradient — hien verwandelt e Verdacht op ongläich Verdeelung an eng eenzeg, vergläichbar Zuel.

## Firwat et wichteg ass

E Programm kann am Gesamtbild effektiv ausgesinn an säi Virdeel trotzdem bal ganz bei Leit ofliwweren, déi scho besser dru waren. Verdeelungsbedenken wéi dës verfollegt [Reechwäit an Equity](../reechwäit-a-gerechtegkeet/) genau deskriptiv — Reechwäit stratifizéiert no Deprivatiouns-Quintil, eng Equity-Lück tëscht ieweschter an ënneschter Grupp — awer eng stratifizéiert Tabell léisst sech net op eng eenzeg Trendlinn kompriméieren, an et kann net einfach tëscht zwou komplett verschiddenen Interventiounen verglach ginn, déi op verschiddene Skale gemoss ginn. De Konzentratiounsindex léist béid Problemer: hien gëtt fir all Gesondheetsvariabel géint all sozioökonomescht Ranking op déiselwecht Manéier berechent, sou datt e nationale Gesondheetsdingscht verfollege ka, ob d'Ongläichheet vun engem spezifeschen digitale Service vu Release zu Release wiisst oder schrumpft, an d'Verdeelungsfairness vun engem App-Rollout mat, zum Beispill, engem Screening-Programm op der selwechter normaliséierter Skala vergläiche ka.

## D'Mathematik

```
CI = (2 / mean(Gesondheetswäerter)) × Cov(Gesondheetswäerter, sozioökonomesch_Rang)

Cov(X, Y) = mean(X × Y) − mean(X) × mean(Y)   (Populatiouns-Kovarianz)

sozioökonomesch_Rang: de fraktionelle Rang vun all Persoun an der sozioökonomescher
Verdeelung, an [0, 1] (0 = am meeschte benodeelegt, 1 = am meeschte besserstoend;
bei gruppéierten/bandéierten Daten konventionell de Mëttelpunkts-Rang vun all Grupp)
```

Dat ass déi „praktesch Kovarianz-Formel" (O'Donnell, van Doorslaer, Wagstaff, Lindelow, World Bank 2008) — de Standard-Praktikerverkierzung, fir de Konzentratiounsindex direkt aus gepaarten Observatioune ze berechnen, ouni virdrun eng Konzentratiounskurv ze zeechnen an ze integréieren.

## Berechent Beispill

E selbstgemellte Gesondheetsscore (1 = am schlëmmsten, 4 = am beschten), observéiert iwwer véier gläichgrouss sozioökonomesch Quartiler, jiddwert duerch säi Quartil-Mëttelpunkts-Rang duergestallt:

```
Gesondheetswäerter     = [1,0, 2,0, 3,0, 4,0]
sozioökonomesch_Rang   = [0,125, 0,375, 0,625, 0,875]

mean(Gesondheetswäerter)   = 2,5
mean(Gesondheet × Rang)    = mean([0,125, 0,75, 1,875, 3,5]) = 1,5625
mean(sozioökonomesch_Rang) = 0,5

Cov = 1,5625 − 2,5 × 0,5 = 0,3125

CI = 2 × 0,3125 / 2,5 = 0,25
```

E positiven `0,25` heescht, dëse Gesondheetsscore konzentréiert sech bei der sozioökonomesch avantagéierter Grupp — déi méi héich scorend Respondente tendéieren Richtung dem besserstoenden Enn vum Ranking.

## Bezuch zur Softwareentwécklung

Dat ass déiselwecht kovarianzbaséiert Ongläichheetsmoossung, déi an der Ökonomie allgemeng benotzt gëtt (de Cousin vum Gini-Koeffizient), a si léisst sech dorop mapen, ze moossen, ob d'Virdeeler vun engem Softwareprodukt bei scho avantagéierte Notzersegmenter konzentréiert sinn, amplaz equitabel verdeelt — eng direkt Erweiderung vu [Reechwäit an Equity](../reechwäit-a-gerechtegkeet/) (RE-AIM seng „Reach"-Dimensioun) an e formal statistescht Mooss amplaz vun enger beschriwwener Lück. Wou Reach-and-Equity den Impakt pro Stratum mellt, kompriméiert de Konzentratiounsindex déi ganz Verdeelung an eng ënnerzeechent Zuel, gëeegent als eenzege verfollgten KPI iwwer Releases — praktesch fir en Dashboard, wou eng voll stratifizéiert Opschlësselung net passt.

## Falen

- **Virzeechen-Konventioun-Drift**: d'Virzeechen hänkt dovun of, wéi souwuel d'Gesondheetsvariabel wéi och de Rang definéiert sinn — een ëmdréinen dréit d'Virzeechen ëm, also muss déi benotzt Konventioun ëmmer explizit nieft all gemellte Wäert uginn ginn.
- **Grenz- amplaz Mëttelpunkts-Rang**: gruppéiert oder bandéiert sozioökonomesch Daten (z. B. Quintiler) verlaange de fraktionelle Rang vun all Grupp bei hirem *Mëttelpunkt*, net bei hirer Grenz, soss ass den Index biaséiert.
- **„Bal null" als „keng Ongläichheet" liesen**: e Konzentratiounsindex no bei null heescht „kee konsequente sozioökonomesche Gradient", net „keng Ongläichheet" am absolute Sënn — géigesätzlech Ongläichheeten a verschiddene Richtunge kënne sech ausgläichen.

## Quellen

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — the standard practitioner handbook, source of the convenient covariance formula used here. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
