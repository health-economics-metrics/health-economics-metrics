# Probabilistesch Sensitivitéitsanalyse (PSA)

PSA weist all onsécheren Parameter eng Wahrscheinlechkeetsverdeelung zou, zitt se all gläichzäiteg dausendfach (Monte Carlo) a mellt d'*Wahrscheinlechkeet*, datt eng Optioun déi beschte Wiel ass — amplaz vun enger eenzeger Punktschätzung.

## Firwat et wichteg ass

Dem NICE säi Referenzfall *verlaangt* PSA. Déi deterministesch Analyse beäntwert „wat, wann ee Input falsch ass?"; PSA beäntwert „wat all dat betrëfft, wat mir gläichzäiteg net wëssen, wéi wahrscheinlech ass et, datt mir déi richteg Entscheedung treffen?" Hiren typeschen Output, d'**Käschte-Effektivitéits-Akzeptabilitéitskurv (CEAC)**, plot d'Wahrscheinlechkeet, datt eng Optioun käschte-effektiv ass, géint de Zuelungsbereetschaft-Schwellewäert — an mécht aus „den ICER ass 24.000 £/QALY" e „et gëtt eng 78 %-Chance, datt dat bei 30.000 £/QALY déi richteg Wiel ass."

## D'Mathematik

```
Fir all vun N Zich (N ≈ 10.000):
  all Parameter θ aus senger Verdeelung zéien
    (Käschten ~ Gamma, Wahrscheinlechkeeten ~ Beta, Utilitéiten ~ Beta, Effekter ~ Normal/logNormal)
  NMB_j(θ) = λ × Effekt_j(θ) − Käschten_j(θ) fir all Optioun j berechnen

CEAC_j(λ) = Undeel vun den Zich, an deenen d'Optioun j bei Schwellewäert λ den héchsten NMB huet
```

Kuckt [Nettomonetären Notzen](../nettomonetären-notzen/) fir NMB a [Zuelungsbereetschaft-Schwellewäerter](../zuelungsbereetschaft-schwellewäerter/) fir λ.

## Berechent Beispill

Business Case fir eng Plattformmigratioun. Dräi onsécher Inputen:

```
Migratiounskäschten ~ Gamma,   Mëttel 800.000 £, SD 200.000 £
Jäerlechen Notzen   ~ Normal,  Mëttel 350.000 £, SD 150.000 £
Notzendauer         ~ Uniform, 3–6 Joer
```

Fir all vun 10.000 Zich de Nettonotzen = Dauer × jäerlech − Käschte berechnen (Diskontéierung fir d'Kloerheet weggelooss). Illustrativ Resultater:

```
Mëttleren Nettonotzen:     775.000 £
Wahrscheinlechkeet Netto > 0:  0,86
5.–95. Perzentil:         −180.000 £ … +1,9 Mio. £
```

D'Punktschätzung huet „kloer jo" gesot. D'PSA seet „86 % jo, mat engem richtegen Tail, wou mir 180.000 £+ verléieren" — wat e Portfolio-Besëtzer wierklech brauch, an et präist de Fall fir en Discovery-Spike virdrun (kuckt [EVPI](../erwaarte-wäert-vu-perfekter-informatioun/)).

## Bezuch zur Softwareentwécklung

Ingenieuren vertrauen Monte Carlo schonn fir Liwwerprognosen (Sampling vum Duerchsaz schléit Punktschätzungen). Déi selwecht Maschinn op Geld ausdehnen: Verdeelungen op Notzungsopnam, gespuerter Zäit a Gehalt, dann „Wahrscheinlechkeet, datt dës Plattforminvestitioun netto positiv ass" mellen amplaz engem ROI mat falscher Präzisioun. Eng CEAC-Stil-Kurv — Wahrscheinlechkeet, déi beschte Optioun ze sinn, als Funktioun dovun, wéi d'Organisatioun eng Ingenieursstonn bewäert — ass e wierklech besseren Artefakt fir e Finanzéierungskomitee wéi all eenzeg Zuel.

## Falen

- **Müll-Verdeelungen**: PSA mat erfonnenen Standardofwäichunge ass deterministesch Analyse am Laborkittel. Spreedungen op Daten oder strukturéiert Expertenerhiewung baséieren.
- **Korrelatioun tëscht Parameteren ignoréieren** (héich Notzungsopnam korreléiert normalerweis mat héijer gespuerter Zäit); onofhängegt Sampling ënnerschätzt d'Tail-Risiko.
- **Nëmmen de Mëttelwäert vun der Simulatioun mellen** — de ganze Sënn ass d'Verdeelung an d'Entscheedungswahrscheinlechkeet.

## Quellen

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
