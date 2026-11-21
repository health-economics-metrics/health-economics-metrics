# Selwer bauen oder kafen (Build vs Buy)

Build-vs-Buy ass e strukturéierte Verglach vun enger Eegenentwécklung mat kommerzieller Akquisitioun, op diskontéiertem [TCO](../gesamtbesëtzkäschten/), Liwwerzäit a Risiko. D'empiresch Prioren sinn eendäiteg: **tatsächlech Baukäschte iwwerschreiden d'Prognosen typesch em 30–40 %**, kaaf Léisunge ginn 40–60 % méi séier an de Betrib, an dem MIT seng GenAI-Fuerschung 2025 huet festgestallt, datt kaaf KI-Tools ~67 % vun der Zäit erfollegräich waren, während intern Entwécklungen ongeféier en Drëttel sou dacks erfollegräich waren.

## Firwat et wichteg ass

Gesondheetssystemer stinn dacks viru dëser Entscheedung („make vs commission" an der NHS-Sprooch), an Engineering-Organisatioune maachen se systematesch a Richtung Bauen falsch — well Entwéckler de Bau schätzen, net den [TCO](../gesamtbesëtzkäschten/), a well Bauen méi Spaass mécht. De ökonomesche Kader zwéngt de éierleche Verglach: béid Optiounen iwwer deeselwechten Horizont bewäert, béid risikoajustéiert, an den *Zäitënnerscheed als [Cost of Delay](../verzögerungskäschten/) bewäert* — de Begrëff, deen d'Äntwert am dackste entscheet an am dackste vergiess gëtt.

## D'Mathematik

```
Iwwer deeselwechten 3–5-Joer-Horizont vergläichen, diskontéiert:

NPV_Optioun = PV(Notzen, verréckelt ëm Time-to-Value) − PV(TCO)

Risikoajustéierungen (Green-Book-„Optimism-Bias"-Muster):
  Baukäschte × 1,3–1,4         (Iwwerlaaf-Prior)
  Bau-Time-to-Value + 40–60 %  (Deployment-Verzögerungs-Prior)
  Kaf: amplaz Integratiouns-Realitéitscheck an Ausstiegskäschten derbäisetzen

Entscheedungstreiber, an der Reiefolleg, wéi se normalerweis entscheeden:
  1. Differenzéierung — ass dës Fäegkeet däi Produkt, oder Installatioun?
  2. Time-to-Value × CoD
  3. risikoajustéiert TCO
```

## Berechent Beispill

En Trust brauch en E-Consent-System. Kaf: 150k £/Joer SaaS, live an 3 Méint. Bau: geschat 600k £ + 120k £/Joer Maintenance, live an 12 Méint.

```
Risikoajustéierte Bau: 600k × 1,35 = 810k £; Time-to-Value ≈ 18 Méint
5-Joer-TCO:  Kaf = 150k × 5 = 750k £
             Bau = 810k + 120k × 5 = 1.410k £
Verzögerungsterm: d'Digitaliséierung vum Consent spuert 25k £/Mount; de Bau kënnt 15 Méint
            méi spéit → CoD = 15 × 25k = 375k £

Effektive Verglach: 750k £ vs. 1.785k £ — Kaf gewënnt ëm ~1 Mio. £, an dee gréisste
eenzelen Term no dem Bau selwer ass d'Verzögerungskäschten, déi keen bewäert hat.
```

Bau bleift richteg, wann d'Fäegkeet differenzéierend ass (de Kärlgorithmus vun dengem Produkt), wann kee Vendor eng haart Aschränkung erfëllt (klinesch Sécherheet, Datenresidenz) oder wann d'Vendor-Lock-in-Risiko schwéier a bewäert ass.

## Bezuch zur Softwareentwécklung

Déi iwwerdroebar Disziplin aus der Gesondheetsökonomie ass dräifach: **prior-baséiert Risikoajustéierung** (den 30–40-%-Iwwerlaaf-Opschlag ass de Software-Green-Book-Optimismus-Bias — mechanesch uwenden, fir Ausnamen argumentéieren amplaz vun hinne ze starten); **Komparator-Éierlechkeet** (d'Alternativ zum Bauen ass net „näischt", et ass de beschte verfügbare Kaf — kuckt [Opportunitéitskäschten](../opportunitéitskäschten/)); an **Equivalenztest virum Käschteverglach** (wann Kaf a Bau dee selwechte Spec wierklech erfëllen, ass dat [Käschteminimiséierungsanalyse](../käschte-minimiséierungs-analyse/) an dee Bëllege gewënnt; wann net, muss den Outcome-Ënnerscheed bewäert, net behaapt ginn).

## Falen

- **Vendor-Lëschtepräis mat net risikoajustéierte Bauschätzunge vergläichen** — duebel Schmeechelei Richtung Bau.
- **Intern Aarbecht zum Präis null** („d'Equipe ass jo schonn do").
- **Net bewäert Lock-in a béid Richtungen**: Vendor-Ausstiegskäschten, awer och dem Bau säi Bus-Factor a Maintenance-Dauer.
- **Identitéitsgedriwwe Bauten**: „dat ass zentral fir eis" fir Installatioun behaapt — Differenzéierung dergéint testen, ob Cliente et géife gewuer ginn.

## Quellen

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
