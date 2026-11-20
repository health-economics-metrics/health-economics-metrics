# KI-Entwicklerproduktivität

Kennzahlen dafür, was KI-Coding-Unterstützung tatsächlich mit dem Entwicklungs-Output macht: Akzeptanzraten von Vorschlägen, Beschleunigungen aus kontrollierten Studien, PR-Durchsatz und Code-Verbleib. Die Evidenzbasis ist echt widersprüchlich — was sie zu einem perfekten Fallbeispiel für die Unterscheidung Wirksamkeit-vs.-Effektivität macht, für die die Gesundheitsökonomie gebaut wurde.

## Warum es wichtig ist

Die zwei meistzitierten kontrollierten Studien zeigen in entgegengesetzte Richtungen:

- **Peng et al. 2023 (GitHub-Copilot-RCT)**: Entwickler schlossen eine Greenfield-HTTP-Server-Aufgabe mit Copilot **55,8 % schneller** ab (1 Std. 11 Min. vs. 2 Std. 41 Min., n=95).
- **METR-2025-RCT**: erfahrene Open-Source-Entwickler, die an *ihren eigenen ausgereiften Repositorys* arbeiteten, waren mit KI-Tools von Anfang 2025 **19 % langsamer** (16 Entwickler, 246 Aufgaben) — während sie *glaubten*, 20 % schneller zu sein.

Beides sind gute Studien. Der Widerspruch ist der Befund: Greenfield-Aufgaben-Wirksamkeit überträgt sich nicht auf Effektivität bei ausgereiften Codebasen, und *wahrgenommener* Nutzen kann gemessenen Nutzen nicht ersetzen. Die Medizin hat Namen für beide Phänomene (erklärende vs. pragmatische Studien; das Placebo-Problem) und Maschinerie, um damit umzugehen.

## Die Mathematik

```
Akzeptanzrate     = akzeptierte Vorschläge / gezeigte Vorschläge
                    (GitHub-Telemetrie ~30 % im Schnitt; variiert: SQL 45 %,
                    Python 35 %, JS 28 %)
Verbleibsrate     = KI-Code, der bis zum Merge überlebt / akzeptierter
                    KI-Code (~88 % berichtet)
Beschleunigung    = (t_Kontrolle − t_KI) / t_Kontrolle (NUR aus
                    kontrolliertem Vergleich)
Durchsatzänderung = Δ gemergte PRs/Entwickler/Woche (GitHub/Accenture-
                    Felddaten: +8,7 %)

Wertmodell = Entwickler × gesparte Zeit × Vollkostensatz × Nutzungsfaktor
             — jeder Term braucht lokale Messung; siehe den Tornado in
             sensitivity-analysis.md, wo die gesparte Zeit alle anderen
             Parameter zusammen dominiert
```

## Durchgerechnetes Beispiel

Eine Organisation mit 500 Entwicklern pilotiert einen Assistenten mit echter Kontrolle (abgeglichene Teams, 3 Monate, vorab registrierte Kennzahlen):

```
Pilotergebnis: PR-Zykluszeit −18 %; gemergte PRs +6 %; CFR unverändert;
               selbstberichtete Zeitersparnis 45 Min./Tag; gemessen auf
               Aufgabenebene ≈ 15 Min./Tag

Die GEMESSENE Zahl bewerten: 500 × 0,25 Std. × 220 Tage × 60 £ × 0,6
                             Nutzungsfaktor ≈ 990.000 £/Jahr Kapazität
                             (nicht zahlungswirksam)
Kosten: 500 × 39 £/Monat × 12 ≈ 234.000 £/Jahr
Netto-Kapazitätsverhältnis ≈ 4:1 — finanzierbar, bei einem Drittel der
selbstberichteten Behauptung.
```

Die dreifache Lücke zwischen wahrgenommen und gemessen ist der METR-Befund in freier Wildbahn; eine Budgetierung nach Selbstauskunft hätte die Nutzenzeile verdreifacht.

## Bezug zur Softwareentwicklung

Die gesundheitsökonomischen Importe für alle, die KI-Tooling evaluieren: **pragmatische Studien** durchführen (die eigene Codebasis, die eigenen Entwickler, echte Tickets — nicht Anbieter-Demo-Aufgaben); **Akzeptanzrate als Proxy behandeln, nicht als Ergebnis** (sie ist der [PPV](../klinische-ki-evaluation/) von Vorschlägen aus Entwicklersicht — hohe Akzeptanz bei niedrigem Verbleib ist Überdiagnose); jeden Durchsatzgewinn mit einer **Stabilitätsprüfung** kombinieren (DORA 2025: KI hebt den Durchsatz, schadet der Stabilität — eine Intervention mit Nebenwirkungen braucht eine Netto-Nutzen-Analyse, gemäß [DORA-Metriken](../dora-metriken/)); und den Nutzen ehrlich als Kapazität klassifizieren ([zahlungswirksame vs. nicht zahlungswirksame Einsparungen](../zahlungswirksame-vs-nicht-zahlungswirksame-einsparungen/)).

## Fallstricke

- **Transplantation von Anbieterstudien**: Greenfield-RCT-Zahlen auf Arbeit an Legacy-Codebasen angewendet — genau der Fehler, den die METR-Studie aufdeckte.
- **Selbstauskunft als Messung**: die Wahrnehmungslücke von 20 Prozentpunkten ist die größte bekannte Verzerrung in dieser Literatur.
- **Aktivitätsinflation**: mehr PRs und mehr Code sind Activity, keine Ergebnisse ([SPACE](../space-und-devex/)); mit Nacharbeit und CFR kombinieren.
- **Die Lernkurve ignorieren**: Messungen in Woche 2 erfassen Neuheitseffekte in beide Richtungen; im stationären Zustand messen ([Zeithorizont](../zeithorizont/)).

## Quellen

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>
