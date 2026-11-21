# Patientegemellt Outcomes (PROMs, PREMs, MCID)

PROMs si standardiséiert Instrumenter, wou Patienten hire eegene Gesondheetszoustand mellen (Symptomer, Funktioun, Liewensqualitéit); PREMs erfaassen d'*Erfahrung* vun der Betreiung. De **MCID** — Minimal Clinically Important Difference — ass déi klengst Scoreännerung, déi Patienten tatsächlech als gutt empfannen: d'Hürd, déi all behaapte Verbesserung muss iwwerwannen.

## Firwat et wichteg ass

PROMs sinn déi primär Wirksamkeetswärung fir digital Gesondheet: Apps beweege selten d'Mortalitéit, kënnen awer validéiert Symptomscores glaubwürdeg beweegen. D'Instrumenter, déi zielen, si wéineg a standardiséiert — **PHQ-9** (Depressioun, 0–27; Schwéieregradbänner bei 5/10/15/20), **GAD-7** (Angscht, 0–21; Bänner bei 5/10/15), **EQ-5D** (Utilitéit fir [QALYs](../qualitéitsbereenegt-liewensjoer/)) — a Regulatoren, HTA-Instanzen a Zueler akzeptéieren se genau, well se iwwer Produkter a Studien vergläichbar sinn. De MCID ass d'Éierlechkeets-Gate: PHQ-9-MCID ≈ 5 Punkten, GAD-7 ≈ 4, EQ-5D-Index allgemeng ~0,03–0,08 — eng statistesch signifikant 1,5-Punkten-PHQ-9-Ännerung bei enger grousser Stéchprouf ass *reell awer klinesch bedeitungslos*, an e Evidenz-Reviewer wäert dat soen.

## D'Mathematik

```
PROM-Scoring: instrumentspezifesch Summen (z. B. PHQ-9 = Σ 9 Items × 0–3)

MCID-Schätzung:
  ankerbaséiert:       Scoreännerung bei Patienten, déi „e bëssen besser" mellen
  verdeelungsbaséiert: ≈ 0,5 × SD vun de Baseline-Scores (rau Heuristik)

Responder-Quote-Framing (fir Studien an Dossieren):
  Responder = Patient mat Verbesserung ≥ MCID (oder ≥50 % fir d'PHQ-9-Konventioun)
  NNT = 1 / (Responder-Quote_Behandlung − Responder-Quote_Kontroll)
  — kuckt number-needed-to-treat.md
```

## Berechent Beispill

Eng Depressiouns-Support-App, RCT vs. Waardelëscht, 12 Wochen:

```
PHQ-9-Ännerung: App −6,2 Punkten, Kontroll −2,1 → ajustéierten Ënnerscheed −4,1
MCID-Kontroll: 4,1 < 5 → Mëttelwäert-Ënnerscheed ënner dem MCID; amplaz Responder mellen:
  Responder (≥5-Punkten-Réckgang): App 48 %, Kontroll 22 % → ARR 26 %
  NNT = 1/0,26 ≈ 4 — véier behandelt Notzer pro zousätzlech klinesch Äntwert

Ökonomesche Bréck: EQ-5D-Gewënn vun de Respondere 0,06, 6 Méint gehalen
  = 0,03 QALYs; pro 1.000 Notzer: 260 zousätzlech Responder × 0,03 = 7,8 QALYs
  ≈ 156.000–234.000 £ Gesondheetswäert bei NICE-Schwellen
```

D'Responder-/NNT-Framing iwwerlieft d'Review, wou den Ënner-MCID-Mëttelwäert-Ënnerscheed ofgewise gi wier.

## Bezuch zur Softwareentwécklung

PROMs sinn e Datensammel-Problem, dat Software eenzegaarteg gutt léise kann: In-App-Instrumenter kréie Ofschlossquoten a longitudinal Dicht, déi Pabeier ni erreecht huet, a verwandelen routine Produkt-Telemetrie an HTA-Grad-Evidenz ([EQ-5D](../eq-5d/) sinn fënnef Écrane). Engineering-Reegelen: de validéierten Instrument *wuertwiertlech* benotzen (Ëmformuléieren invalidéiert en — d'Lizenzéierung gëllt); d'Moossung no Protokoll plangen, net no Engagement-Bequemlechkeet (nëmmen aktiv Notzer moossen ass Survivorship-Bias — kuckt [Retention](../retention-a-churn/)); an d'Instrumentdaten wéi all Schema versioun-spären — eng Formuléierungsännerung mëttendrun an der Studie ass Datekorruptioun. PREMs mappe op CSAT-/NPS-Stil-Instrumenter, an déiselwecht Lektioun gëllt: standardiséiert schléit hausgemaacht, wou d'Audienz e Zueler ass. Fir en Aarbechtsproduktivitéits-spezifescht Instrument, kuckt [WPAI](../aarbechtsproduktivitéit-an-aktivitéitsbeareetrachtegung/).

## Falen

- **Statistesch Signifikanz ënner dem MCID** als klinesche Notzen presentéiert — déi heefegst Opbloosung vum Feld.
- **Regressioun zum Mëttel**: Notzer schreiwen sech bei Symptom-Spëtze an; Eenarm-Virdrun/Duerno iwwerschätzt enorm — Komparatoren sinn net verhandelbar.
- **Instrument-Shopping**: PHQ-9, GAD-7 a WHO-5 lafen loossen, dann dat mellen, wat sech beweegt huet — de primäre vireg registréieren.
- **Digital-Consent-Ëmfro-Drock**: Notzer zu gënschtegen Äntwerte nudgen korrumpéiert d'Instrument (an d'Reviewer kennen d'Basisquoten).

## Quellen

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
