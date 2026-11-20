# Kapitalrendite von KI (ROI)

KI-ROI ist die messbare Gewinn-und-Verlust-Rendite, die KI-Initiativen zuzuschreiben ist. Der ernüchternde Referenzwert: MITs "GenAI Divide"-Forschung von 2025 fand, dass trotz 30–40 Mrd. $ an Unternehmens-GenAI-Investitionen **~95 % der Piloten keine messbare Gewinn-und-Verlust-Rendite zeigten** — und die erfolgreichen 5 % teilten identifizierbare Gewohnheiten.

## Warum es wichtig ist

Gesundheitssysteme haben einen Namen für das KI-Pilot-Muster: **Pilotitis** — der NHS-Friedhof vielversprechender Apps, für immer pilotiert und nie skaliert. Die MIT-Befunde bilden sauber ab, was Health Technology Assessment bereits weiß: Wertbehauptungen brauchen vorab festgelegte Endpunkte, Zurechnung braucht Vergleichsgruppen, und "alle haben das Gefühl, es hilft" ist keine Nutzenzeile. Die erfolgreiche Minderheit in den MIT-Daten konzentrierte sich auf Back-Office-Automatisierung mit verfolgbaren Kostenausgangswerten, und **gekaufte Tools waren zu ~67 % der Fälle erfolgreich gegenüber internen Eigenbauten bei etwa einem Drittel davon** — Ausgangswerte, die in jeden KI-Investitionsfall gehören (siehe [Eigenentwicklung oder Fremdbezug](../eigenentwicklung-oder-fremdbezug/)).

## Die Mathematik

```
KI-ROI = (zurechenbarer Nutzen − Gesamt-KI-Kosten) / Gesamt-KI-Kosten

Gesamt-KI-Kosten = Lizenzen/Inferenz (siehe inference-unit-economics.md)
                  + Integration + Datenaufbereitung + Evaluation
                  + Workflow-Neugestaltung + Governance/Absicherung
                  (die Lizenz ist typischerweise die Minderheit des Nenners)

Zurechenbarer Nutzen: gemessen gegen einen Ausgangswert oder eine
Kontrollgruppe, klassifiziert als Bargeld/Kapazität/Qualität gemäß
cash-releasing-vs-non-cash-releasing.md
```

## Durchgerechnetes Beispiel

Eine Krankenhausgruppe setzt KI für zwei Anwendungsfälle ein:

```
Anwendungsfall A — Entwurf klinischer Briefe (Back Office, verfolgbar):
  Ausgangswert: ausgelagerte Transkription 380.000 £/Jahr
  danach:       Transkriptionsvertrag gekündigt; Klinikerüberprüfungszeit +60.000 £
  KI-Kosten:    120.000 £/Jahr komplett
  ROI = (380.000 − 60.000 − 120.000) / 120.000 ≈ 167 % — zahlungswirksam, prüfbar ✓

Anwendungsfall B — "KI-Copilot für Kliniker" (breit, unverfolgt):
  Nutzenbehauptung: "spart Zeit über 4.000 Mitarbeiter" — kein Ausgangswert erfasst
  gemessener Gewinn-und-Verlust-Effekt: nicht nachweisbar
  → der 95-%-Eimer, unabhängig davon, ob es tatsächlich hilft
```

Der Unterschied ist nicht die Qualität der KI — es ist, ob der Nutzen einen **Ausgangswert, einen Verantwortlichen und eine Budgetzeile** hatte ([Nutzenrealisierung](../nutzenrealisierung/)).

## Bezug zur Softwareentwicklung

Das HTA-geformte Playbook für KI-Investitionen: **die Evidenz stufen wie bei den [NICE-ESF-Stufen](../nice-evidenzstandards-rahmenwerk/)** — demo-taugliche Evidenz für risikoarme Tools, kontrollierte Piloten vor organisationsweiten Ausgaben, mit vorab registrierten Rollout-Gates (das Muster der [DiGA](../deutschlands-diga-schnellverfahren/) von vorläufiger Listung mit Frist); **Kostenvermeidung so zählen, wie die Gesundheitsökonomie Nachfragevermeidung zählt** — nur real, wenn sich eine konkrete Budgetzeile bewegt; und **den Piloten selbst mit [EVPI](../erwarteter-wert-perfekter-information/) bepreisen** — ein Pilot, der die Rollout-Entscheidung nicht ändern kann, ist 0 £ wert. Für den Entwicklerwerkzeug-Ausschnitt speziell siehe [KI-Entwicklerproduktivität](../ki-entwicklerproduktivität/).

## Fallstricke

- **Nutzen-Verwässerung**: Wert, dünn über Tausende Nutzer verteilt, ist konstruktionsbedingt unmessbar; Anwendungsfälle mit konzentrierten, verfolgbaren Ausgangswerten wählen.
- **Nur-Lizenz-Kostenrechnung**: Integration, Evaluation und Workflow-Neugestaltung dominieren meist den wahren Nenner.
- **Zurechnungsdiebstahl**: KI, zusammen mit Prozessneugestaltung eingeführt, beansprucht die gesamte Differenz.
- **Eskalation versunkener Piloten**: gescheiterte Piloten verlängern, weil das Aufhören Scheitern eingesteht — der Auslauftermin muss vorab vereinbart sein.

## Quellen

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
