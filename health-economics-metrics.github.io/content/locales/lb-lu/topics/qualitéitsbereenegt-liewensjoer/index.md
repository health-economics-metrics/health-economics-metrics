# Qualitéitsbereenegt Liewensjoer (QALY)

E QALY ass ee Joer Liewen a perfekter Gesondheet. Et kombinéiert, *wéi laang* d'Leit liewen, mat *wéi gutt* si liewen, sou datt e Joer a schlechter Gesondheet manner wéi een QALY zielt — a mécht gläichermoossen ënnerschiddlech Gesondheetsinterventiounen op enger eenzeger Skala vergläichbar.

## Firwat et wichteg ass

De QALY ass déi gemeinsam Währung vun der Gesondheetstechnologie-Bewäertung. NICE (England) bewäert Gesondheetsgewënn mat **20.000–30.000 £ pro QALY**: eng Interventioun, déi QALYs méi bëlleg wéi dësen Schwellewäert kaaft, gëtt normalerweis recommandéiert; eng, déi se méi deier kaaft, gëtt normalerweis ofgeleent. Dës eng Zuel ass, wéi e nationale Gesondheetsdingscht e Krebsmedikament, eng Hëftersatzoperatioun an eng Triage-App op der selwechter Achs vergläicht. Wann Är Software glaubwürdeg QALYs ka behaapten — duerch d'Verhënnere vu Verschlechterung, d'Beschleunege vu Behandlung oder d'Verbesseren vun der Sécherheet —, kënnt Dir hire Gesondheetswäert an der selwechter Währung präisen wéi d'Medizin selwer.

## D'Mathematik

```
QALYs = Σ_i (Dauer_i × Utilitéit_i)

Dauer_i    = Joer, déi am Gesondheetszoustand i verbruecht ginn
Utilitéit_i = Qualitéitsgewiicht vum Zoustand i, verankert bei 1 = perfekt Gesondheet, 0 = dout
              (negativ Wäerter erlaabt fir Zoustänn méi schlëmm wéi den Doud)
```

Utilitéitsgewiichter kommen vu validéierte Instrumenter, am heefegsten [EQ-5D](../eq-5d/). De QALY-*Gewënn* vun enger Interventioun ass den Ënnerscheed tëscht de QALY-Stréim mat an ouni si, mat 3,5 %/Joer [diskontéiert](../diskontéierung-an-zäitpräferenz/) am NICE-Referenzfall.

## Berechent Beispill

E Patient waart op eng Häerzbehandlung an engem Zoustand mat Utilitéit 0,6. D'Behandlung bréngt en op Utilitéit 0,85 zréck.

- **Elo behandelt**: 1 Joer bei 0,85 = 0,85 QALYs dëst Joer.
- **No 6 Méint Verzögerung behandelt**: 0,5 × 0,6 + 0,5 × 0,85 = 0,725 QALYs.
- **QALY-Verloscht pro Patient duerch d'Verzögerung**: 0,85 − 0,725 = **0,125 QALYs**.

Monetiséiert mam NICE-Schwellewäert: 0,125 × 20.000–30.000 £ = **2.500–3.750 £ u verluerene Gesondheetswäert pro Patient pro 6-Méint-Verzögerung**. Wann Software, déi de Wee beschleunegt, déi Verzögerung fir 400 Patienten/Joer ewechhëlt, ass de Gesondheetswäert 50 QALYs ≈ **1,0–1,5 Mio. £/Joer** — virun all operationelle Spueren.

## Bezuch zur Softwareentwécklung

- **Méi séier Weeër = méi fréi QALYs.** Alles, wat [Referral to Treatment](../iwwerweisung-bis-behandlung/) verkierzt, wandelt d'Waardezäit-Disutilitéit an Gesondheetsgewënn ëm, wéi uewen bewäert.
- **Sécherheet = bewahrte QALYs.** Verhënnert Medikamentefeeler a verpasst Diagnosen si vermeide QALY-Verloschter.
- **De QALY ass och eng Metrik-Design-Virlag**: e Kompositum aus Quantitéit × Qualitéit, mat Qualitéitsgewiichter aus engem standardiséierte Instrument erhuewen. E „qualitéitsbereenegt Ingenieursjoer" (Zäit × DevEx-Ëmfro-Gewiicht) ass déiselwecht Konstruktioun — kuckt [SPACE an DevEx](../space-an-devex/).
- Fir QALYs an e Business Case a Geld ëmzewandelen, de [nettomonetären Notzen](../nettomonetären-notzen/) benotzen; fir se an eng Entscheedung ëmzewandelen, [Zuelungsbereetschaft-Schwellewäerter](../zuelungsbereetschaft-schwellewäerter/).

## Falen

- **Utilitéitsgewiichter erfannen.** Gewiichter musse vu validéierte Instrumenter (EQ-5D) a publizéierte Wäertsätz kommen, net aus der Intuitioun.
- **QALYs ouni Kausalwee behaapten.** „Eis App verbessert d'Wuelbefannen" ass keng QALY-Behaaptung; „hëlt X Wochen Waarden am Zoustand mat Utilitéit 0,6 ewech" ass eng.
- **Duebelzielung**: souwuel de QALY-Gewënn wéi och d'Käschtespueren vun der selwechter vermeidener Verschlechterung ze behaapten verlaangt Suergfalt, datt si wierklech getrennt sinn.
- **Gerechtegkeets-Blannflecken**: QALYs bewäerten e Joer Liewensverlängerung no der Basisutilitéit, wat Leit mat Behënnerungen benodeelege ka — de Grond, firwat ICER (USA) och den evLYG mellt (kuckt [Gewonnene Liewensjoer](../gewonnene-liewensjoer/)).

## Quellen

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
