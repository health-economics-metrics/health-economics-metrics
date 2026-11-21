# Käschte-Notzwäert-Analyse (CUA)

D'CUA ass Käschte-Effektivitéits-Analyse mat engem **generesche, präferenzgewiichtegen Outcome** — bal ëmmer den [QALY](../qualitéitsbereenegt-liewensjoer/) (oder vermeid [DALY](../behënnerungsbereenegt-liewensjoer/)). Well d'Outcome-Eenheet universell ass, kann d'CUA Interventiounen iwwer komplett verschidde Krankheeten vergläichen.

## Firwat et wichteg ass

E nationale Gesondheetsdingscht muss aus engem Budget tëscht engem Kriibsmedikament, enger Mental-Health-App an engem chirurgesche Roboter wielen. Natierlech Eenheeten kënne se net vergläichen; QALYs kënnen. D'CUA ass dofir d'Referenzfall-Method beim NICE a bei de meeschten HTA-Instanzen: hir Output — Käschte pro QALY, beurteelt géint eng [Schwell](../zuelungsbereetschaft-schwellewäerter/) — ass dat Noosten, wat d'Gesondheetspolitik un e Universal-Wiesselkurs huet. Wann dir wëllt, datt är Software *amplaz vun eppes anerem* finanzéiert gëtt, ass d'CUA d'Arena.

## D'Mathematik

```
ICUR = ΔKäschten / ΔQALYs      (den ICER mat QALYs als Effekt-Eenheet)

ΔQALYs = Σ (Dauer_i × Utilitéit_i)_nei − Σ (Dauer_i × Utilitéit_i)_aalt
```

Utilitéite vu validéierten Instrumenter ([EQ-5D](../eq-5d/)); Käschte a QALYs allebéid [diskontéiert](../diskontéierung-an-zäitpräferenz/) zu 3,5 % (NICE-Referenzfall); Onsécherheet iwwer [PSA](../probabilistesch-sensitivitéitsanalyse/).

## Berechent Beispill

Eng CBT-App fir mëttel Angscht vs. Waardelëscht fir Face-to-Face-Therapie, pro Patient:

```
Käschten: App-Lizenz + Support        250 £
          verdrängt Therapie          −680 £   (40 % vun de Notzer brauchen se net méi)
          ΔC = 250 − 680 = −430 £ (spuert Geld)

QALYs:    6 Méint bei Utilitéit 0,76 amplaz 0,68 beim Waarden
          ΔE = 0,5 × (0,76 − 0,68) = +0,04 QALYs
```

ΔC < 0 an ΔE > 0: d'App **dominéiert** — besser a bëlleger, kee Verhältnis néideg. Wier d'Annahm vun der Therapie-Verdrängung nëmmen 10 % gewiescht, ΔC = 250 − 170 = +80 £, an ICUR = 80 / 0,04 = **2.000 £/QALY** — nach ëmmer wäit ënner 20.000 £. De Fall iwwerlieft och mat enger staark gekierzter Schlësselannahm: sou gesäit eng robust CUA aus (an d'[Tornado-Diagramm](../sensitivitéitsanalyse/) beweist et).

## Bezuch zur Softwareentwécklung

Dem CUA seng déif Iddi — *eng zesummegesate, präferenzgewiichteg Eenheet, fir ongläich Saache ze vergläichen* — ass d'Muster, fir ongläich Engineering-Investitiounen ze vergläichen (Sécherheet vs. Developer Experience vs. Zouverlässegkeet). Déi éierlech Optiounen sinn entweder eng verdeedegbar Kompositt-Eenheet (rar) oder eng explizit [Käschte-Konsequenz-Tabell](../käschte-konsequenz-analyse/) (üblech). Wat d'CUA warnt: de falsche Kompositt — e gewiichten „Impact-Score", dem seng Gewiichter no der Tatsaach agestëmmt goufen, fir déi bevorzugt Optioun gewannen ze loossen. D'Gesondheetsökonomie huet Joerzéngte verbruecht, d'Utilitéits-Elicitéierung ze standardiséieren, genau fir datt d'Gewiichter dem Verglach viraus ginn.

## Falen

- **Utilitéitsgewënn ënner der Sensitivitéit vum Instrument** (kuckt Minimal Clinically Important Difference bei [Patient-Reported Outcomes](../patientegemellt-outcomes/)) — winzeg ΔE mol grouss Populatiounen ass e klassesche Wäschtrick.
- **Fehlend Verdrängung vun der Komparator-Betreiung** — de gréisste Käschtenterm bei digitale Produkter ass dacks dat, wat se ersetzen.
- **Net-Präferenz-Scores op Utilitéite mappen** mat net validéierte Crosswalks.

## Quellen

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
