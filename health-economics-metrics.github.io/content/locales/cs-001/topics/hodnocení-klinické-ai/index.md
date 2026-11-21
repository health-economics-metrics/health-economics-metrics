# Hodnocení klinické AI

Základní statistiky pro hodnocení klinické AI nebo diagnostického modelu: senzitivita, specificita, AUROC, prediktivní hodnoty a počet vyšetřených nutných k nalezení případu. Ústřední ekonomické poučení: **skvělé AUROC ještě neznamená nákladově efektivní nasazení** – hodnota závisí na pracovním bodě, prevalenci a na tom, co se děje po každém pozitivním nálezu.

## Proč na tom záleží

Regulátoři (FDA, MHRA) schvalují klinickou AI při **zamčeném pracovním bodě** – konkrétní dvojici senzitivity/specificity (např. první autonomní systém pro diabetickou retinopatii schválený FDA: senzitivita 87,2 %, specificita 90,7 % v pivotní studii). Zdravotní ekonomové pak kladou otázku, na kterou metriky přesnosti neodpoví: při prevalenci ve vaší nasazované populaci, kolik každý záchyt *stojí* a vyplatí se podle něj jednat? Ekonomické hodnocení AI pro screening retinopatie (npj Digital Medicine 2024) ukázalo, že samotná vyšší přesnost nezaručovala nákladovou efektivitu, jakmile se započítaly náklady na doporučení.

## Matematika

```
Sensitivity = TP / (TP + FN)        — of the truly positive, share caught
Specificity = TN / (TN + FP)        — of the truly negative, share cleared
AUROC       = P(model ranks a random positive above a random negative)
              0.5 chance … 1.0 perfect; threshold-independent — and therefore
              deployment-decision-insufficient

PPV = TP / (TP + FP)   ← prevalence-dependent (Bayes); collapses when rare
NPV = TN / (TN + FN)

NNS  ≈ 1 / (prevalence × sensitivity)       — screened per true case found
Cost per true case = programme cost / TP      — the economic bottom line
```

## Řešený příklad

Týž model ve dvou prostředích – senzitivita 90 %, specificita 93 %:

```
Specialist clinic (prevalence 20%):
  PPV = (0.9×0.2)/(0.9×0.2 + 0.07×0.8) = 0.18/0.236 ≈ 76%  → 3 in 4 alerts real

Primary care (prevalence 1%):
  PPV = (0.9×0.01)/(0.9×0.01 + 0.07×0.99) = 0.009/0.0783 ≈ 11.5%
  → 8 in 9 alerts false; workup at £350 each:
  cost per true case = (0.009 + 0.0693) × 350 / 0.009 ≈ £3,045 per case found
```

Identický model, radikálně odlišná ekonomika – proto je hodnocení specifické pro místo regulačním tématem a proto je „náš model má AUROC 0,95“ začátkem ekonomického případu, nikoli jeho koncem. Úplnou matematiku programu viz [ekonomika screeningu](../ekonomika-screeningu/).

## Souvislost se softwarovým inženýrstvím

Pro inženýry, kteří klinickou AI vyvíjejí nebo kupují: **dodávejte matici záměn při prevalenci nasazení**, nejen křivku ROC; **nechte práh být ekonomickým rozhodnutím** – kompromis senz./spec. má minimalizovat očekávané náklady (zmeškané případy × cena zmeškání vs falešné poplachy × cena došetření), nikoli maximalizovat benchmarkovou statistiku; a poznejte stejnou matematiku ve vlastních nástrojích – systémy upozornění, detektory anomálií a bezpečnostní skenery jsou diagnostické testy nad proudy událostí s nízkou prevalencí, kde únava z upozornění je [NNH](../počet-pacientů-nutných-k-léčbě/). Aktualizace modelu, které posunou pracovní bod, znovu otevírají ekonomiku (a regulační schválení – viz [regulační hodnocení AI](../regulační-hodnocení-ai/)).

## Úskalí

- **Nakupování podle AUROC**: srovnávání modelů podle AUROC, když poběží při jediném prahu – srovnávejte v pracovním bodě.
- **PPV z prevalence ve studii citované pro nasazení v reálném provozu** – klasika; vždy přepočítejte při místní prevalenci.
- **Spektrální zkreslení**: modely validované na zjevných případech vs zdravých kontrolách podávají nadprůměrný výkon, zatímco nejednoznačný střed, který v praxi převládá, zvládají hůř.
- **Žádné ocenění navazující cesty**: každý pozitivní nález spouští došetření; model je intervence do ekonomiky *celé cesty*.

## Zdroje

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
