# KI-Qualitätskennzahlen

Kennzahlen für die Korrektheit von KI-generiertem Output: Genauigkeit gegen die Grundwahrheit, **Treue/Fundierung** (wird jede Behauptung vom bereitgestellten Kontext gestützt?), und **Halluzinationsrate** (welcher Anteil der Outputs enthält unbelegten oder falschen Inhalt?). In Gesundheitsumgebungen sind das keine Qualitäts-Nettigkeiten — es sind Schadensraten.

## Warum es wichtig ist

Benchmarks im medizinischen Bereich haben Halluzinationsraten von **über 60 % für ungrundierte LLMs** bei medizinischen Aufgaben gemessen (manche offene Modelle >80 %), während Grundierung, Retrieval und Reasoning-Modi die Raten drastisch senken (z. B. senkte GPT-5s Denk-Modus HealthBench-Halluzinationen von 3,6 % auf 1,6 % bei einem Benchmark). Eine halluzinierte Dosierung oder erfundene Quellenangabe in einem klinischen Workflow ist ein **Fehlinformationsereignis mit Schadenspfad** — es gehört in den Schadensarm jedes ökonomischen Modells, bepreist wie die Falsch-Positiven der [Screening-Ökonomie](../screening-ökonomie/): jede löst nachgelagerte Kosten aus (Handeln nach falscher Information, Verifikationsarbeit, medizinrechtliches Risiko, untergrabenes Vertrauen).

## Die Mathematik

```
Halluzinationsrate = Outputs mit unbelegtem/falschem Inhalt / Outputs gesamt
  intrinsisch: widerspricht dem bereitgestellten Kontext
  extrinsisch: unverifizierbare Erfindung über den Kontext hinaus

Treue (RAGAS-artig) = gestützte Behauptungen in der Antwort / Behauptungen
                      gesamt in der Antwort
Kontext-Präzision/-Recall = Retrieval-Qualität, die den Generator speist

Ökonomische Gewichtung — nicht alle Halluzinationen kosten gleich:
  erwartete Schadenskosten = Σ über Fehlerarten (Rate × P(unentdeckt) ×
                             P(danach gehandelt) × Kosten pro danach
                             gehandeltem Fehler)
  Die menschliche Überprüfungsebene bestimmt P(unentdeckt) — und ihre
  Kosten gehören auch ins Modell (Reviewerminuten × Volumen).
```

## Durchgerechnetes Beispiel

Ein KI-Assistent zur klinischen Kodierung verarbeitet 200.000 Episoden/Jahr; eine Prüfung zeigt, dass 2 % der Outputs einen wesentlichen Kodierfehler enthalten; menschliche Kodierer fangen 85 % davon:

```
Fehler, die zur Einreichung gelangen = 200.000 × 0,02 × 0,15 = 600/Jahr
Kosten pro unentdecktem Fehler (Fehlabrechnung im Schnitt + Prüfungsrisiko) ≈ 250 £
Erwartete Fehlerkosten                = 600 × 250 = 150.000 £/Jahr
Überprüfungskosten (2 Min. × 200.000 × 0,50 £/Min.) = 200.000 £/Jahr

Verbesserungsfall: Retrieval-Grundierung senkt die Fehlerrate auf 0,8 %
→ unentdeckte Fehler 240, Fehlerkosten 60.000 £ (−90.000 £/Jahr); die
  Überprüfungszeit kann ebenfalls sinken (Stichprobe statt Vollprüfung)
  — die Qualitätsinvestition zahlt sich aus, noch bevor eine
  Geschwindigkeitsbehauptung aufgestellt wird.
```

## Bezug zur Softwareentwicklung

Modellqualität wie Testabdeckungs-Ökonomie behandeln, mit Disziplin auf Gesundheitsniveau: **Evaluationssets sind Ihre klinische Studie** — vorab registriert, repräsentativ für den *eigenen* Fallmix, gegen Drift aufgefrischt; **Grundierung schlägt Skalierung bei faktischen Aufgaben** (Retrieval + zitierpflichtiges Prompting ist meist die günstigste verfügbare Halluzinationsreduktion — vgl. [Einheitsökonomie der Inferenz](../einheitsökonomie-der-inferenz/) für ihren Token-Overhead); und **den Betriebspunkt veröffentlichen**: wie [Sensitivität/Spezifität](../klinische-ki-evaluation/) bedeutet "97 % treu" nichts ohne die Aufgabenverteilung und die Erkennungsschwelle. Die Überprüfungsebenen-Rechnung oben ist dieselbe [NNT/NNH](../anzahl-der-notwendigen-behandlungen/)-Rechnung wie bei jedem Screening-Gate.

## Fallstricke

- **Transplantation von Benchmark zu Produktion**: Halluzinationsraten sind stark aufgabenabhängig; der eigene Fallmix ist der einzige Benchmark, der zählt.
- **Unbepreiste menschliche Überprüfung**: "ein Kliniker prüft alles" halbiert den Nutzen und muss in der Kostenzeile erscheinen — und Wachsamkeit lässt nach (Automatisierungs-Selbstgefälligkeit), sodass P(unentdeckt) mit dem Vertrauen steigt.
- **Durchschnittliche Qualität optimieren, während das Randrisiko den Schaden trägt**: eine erfundene Allergie-Notiz wiegt tausend unbeholfene Formulierungen auf; Fehler nach Konsequenz gewichten, gemäß der Formel für erwarteten Schaden.

## Quellen

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
