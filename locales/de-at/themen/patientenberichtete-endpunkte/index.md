# Patientenberichtete Endpunkte (PROMs, PREMs, MCID)

PROMs sind standardisierte Instrumente, mit denen Patienten ihren eigenen Gesundheitszustand berichten (Symptome, Funktion, Lebensqualität); PREMs erfassen die *Erfahrung* mit der Versorgung. Der **MCID** — minimal klinisch bedeutsamer Unterschied — ist die kleinste Score-Änderung, die Patienten tatsächlich als vorteilhaft wahrnehmen: der Balken, den jede behauptete Verbesserung überspringen muss.

## Warum es wichtig ist

PROMs sind die primäre Wirksamkeitswährung für digitale Gesundheit: Apps bewegen selten die Mortalität, aber sie können glaubwürdig validierte Symptom-Scores bewegen. Die Instrumente, die zählen, sind wenige und standardisiert — **PHQ-9** (Depression, 0–27; Schweregradbänder bei 5/10/15/20), **GAD-7** (Angst, 0–21; Bänder bei 5/10/15), **EQ-5D** (Nutzwert für [QALYs](../qualitätsadjustiertes-lebensjahr/)) — und Regulierer, HTA-Institutionen und Kostenträger akzeptieren sie genau deshalb, weil sie über Produkte und Studien hinweg vergleichbar sind. Der MCID ist das Ehrlichkeitstor: PHQ-9-MCID ≈ 5 Punkte, GAD-7 ≈ 4, EQ-5D-Index üblicherweise ~0,03–0,08 — eine statistisch signifikante Änderung von 1,5 PHQ-9-Punkten bei einer großen Stichprobe ist *real, aber klinisch bedeutungslos*, und ein Evidenzgutachter wird das so benennen.

## Die Mathematik

```
PROM-Bewertung: instrumentenspezifische Summen (z. B. PHQ-9 = Σ 9 Items × 0–3)

MCID-Schätzung:
  ankerbasiert:        Score-Änderung bei Patienten, die "etwas besser" berichten
  verteilungsbasiert:  ≈ 0,5 × SD der Ausgangswerte (grobe Heuristik)

Responderraten-Rahmen (für Studien und Dossiers):
  Responder = Patient mit Verbesserung ≥ MCID (oder ≥50 % nach PHQ-9-Konvention)
  NNT = 1 / (Responderrate_Behandlung − Responderrate_Kontrolle)
  — siehe number-needed-to-treat.md
```

## Durchgerechnetes Beispiel

Eine Depressions-Unterstützungs-App, RCT vs. Warteliste, 12 Wochen:

```
PHQ-9-Änderung: App −6,2 Punkte, Kontrolle −2,1 → angepasste Differenz −4,1
MCID-Prüfung: 4,1 < 5 → mittlere Differenz unter dem MCID; stattdessen
  Responderrate berichten:
  Responder (≥5-Punkte-Abfall): App 48 %, Kontrolle 22 % → ARR 26 %
  NNT = 1/0,26 ≈ 4 — vier behandelte Nutzer pro zusätzlichem klinischem
  Ansprechen

Ökonomische Brücke: EQ-5D-Gewinn der Responder 0,06, anhaltend über
  6 Monate = 0,03 QALYs; pro 1.000 Nutzer: 260 zusätzliche Responder ×
  0,03 = 7,8 QALYs ≈ 156.000–234.000 £ Gesundheitswert bei
  NICE-Schwellenwerten
```

Der Responder-/NNT-Rahmen übersteht die Begutachtung dort, wo die mittlere Differenz unter dem MCID verworfen worden wäre.

## Bezug zur Softwareentwicklung

PROMs sind ein Datenerhebungsproblem, das Software einzigartig gut lösen kann: In-App-Instrumente erreichen Abschlussraten und längsschnittliche Dichte, die Papier nie erreicht hat, und verwandeln routinemäßige Produkttelemetrie in HTA-taugliche Evidenz ([EQ-5D](../eq-5d/) sind fünf Bildschirme). Entwicklungsregeln: das validierte Instrument *wörtlich* verwenden (Umformulierung entwertet es — Lizenzierung gilt); die Messung nach Protokoll planen, nicht nach Engagement-Bequemlichkeit (nur aktive Nutzer zu messen ist Survivorship Bias — siehe [Bindung](../bindung-und-abwanderung/)); und Instrumentendaten versionssperren wie jedes Schema — eine Formulierungsänderung mitten in der Studie ist Datenkorruption. PREMs entsprechen CSAT-/NPS-artigen Instrumenten, und dieselbe Lehre gilt: Standardisiertes schlägt Selbstgebautes, wo immer das Publikum ein Kostenträger ist. Für ein arbeitsproduktivitätsspezifisches Instrument siehe [WPAI](../arbeitsproduktivität-und-aktivitätsbeeinträchtigung/).

## Fallstricke

- **Statistische Signifikanz unter dem MCID** als klinischer Nutzen dargestellt — die häufigste Aufblähung des Feldes.
- **Regression zur Mitte**: Nutzer melden sich auf Symptomspitzen an; Einarm-Vorher/Nachher überschätzt enorm — Vergleichsgruppen sind nicht verhandelbar.
- **Instrument-Shopping**: PHQ-9, GAD-7 und WHO-5 laufen lassen und dann berichten, was sich bewegt hat — den primären Endpunkt vorab registrieren.
- **Umfragedruck bei digitaler Einwilligung**: Nutzer zu günstigen Antworten zu drängen korrumpiert das Instrument (und Gutachter kennen die Basisraten).

## Quellen

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
