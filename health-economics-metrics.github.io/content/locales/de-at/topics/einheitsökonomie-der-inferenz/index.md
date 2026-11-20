# Einheitsökonomie der Inferenz

Die Einheitsökonomie der Inferenz bepreist KI-Features nach ihrer Grenzrechenleistung: **Kosten pro Token**, hochgerechnet auf Kosten pro Transaktion, pro Nutzer, pro klinischer Episode. Die prägende Dynamik: LLM-Preise sind bei konstanter Fähigkeit etwa **um eine Größenordnung alle 1–2 Jahre** gefallen — eine Deflationsrate ohne Präzedenzfall in der Gesundheitstechnologie-Kostenrechnung.

## Warum es wichtig ist

Zwei Folgen ergeben sich aus dem Preisverfall. Kommerziell kann ein heute grenzwertiges KI-Feature in 18 Monaten trivial profitabel sein — und ein Wettbewerber, der zu heutigen Kosten kalkuliert, wird unterboten. Für die ökonomische Evaluation überschätzt jedes Kosteneffektivitätsmodell für einen KI-gestützten klinischen Dienst, das Inferenzpreise von 2024 einfriert, **die laufenden Kosten wesentlich** — die Analyse braucht Preisverfall-Szenarien, so wie Arzneimittelmodelle Patentablauf und Generika-Eintritt behandeln. (Referenzpunkte aus der Forschung: Frontier-Output-Tokens ~15–75 $/Mio. Mitte 2026, Mid-Tier-Modelle eine Größenordnung günstiger, GPT-4-Niveau-Fähigkeit von ~20 $/Mio. 2022 auf ~0,40 $/Mio. gefallen; Epoch AI maß 9- bis 900-fache jährliche Rückgänge, je nach Fähigkeits-Meilenstein.)

## Die Mathematik

```
Kosten pro Aufruf = Input-Tokens × Input-Satz + Output-Tokens × Output-Satz
Kosten pro Einheit = Σ Aufrufe pro Geschäfts-Output-Einheit (pro Triage-
                     Episode, pro entworfenem Brief, pro Konsultations-
                     zusammenfassung)

Gemischte Realität = Basisaufruf + Wiederholungen + RAG-Kontext
                     (input-lastig) + Evaluations-/Guardrail-Aufrufe
                     (oft 20–50 % Overhead)

Preisverfall-Szenario für mehrjährige Modelle:
  Kosten_t = Kosten_0 × d^t, d ∈ {0,3; 0,5; 0,7}/Jahr in der
             Sensitivitätsanalyse testen
```

## Durchgerechnetes Beispiel

Ein KI-Entlassungszusammenfassungsdienst: eine durchschnittliche Zusammenfassung nutzt 12.000 Input-Tokens (Akten-Kontext) + 1.200 Output, plus einen Verifikationsdurchlauf (6.000 ein / 300 aus). Bei 3 $/Mio. ein, 15 $/Mio. aus:

```
Entwurf:      12.000 × 3/1 Mio. + 1.200 × 15/1 Mio. = 0,036 $ + 0,018 $ = 0,054 $
Verifikation:  6.000 × 3/1 Mio. +   300 × 15/1 Mio. = 0,018 $ + 0,0045 $ ≈ 0,023 $
Pro Zusammenfassung ≈ 0,077 $ → pro 100.000 Zusammenfassungen/Jahr ≈ 7.700 $

Gegenüber ~20 gesparten Klinikerminuten pro Zusammenfassung (≈ 25 £)
macht Inferenz 0,25 % des geschaffenen Werts aus — die Ökonomie wird von
allem AUSSER den Tokens dominiert: Integration, Evaluation, Governance,
Adoption.
```

Diese Schlussfolgerung — Inferenzkosten sind bei aktuellen Preisen für hochwertige klinische Aufgaben selten die bindende Restriktion — ist selbst der Befund, der es wert ist, in Preisgespräche mitgenommen zu werden.

## Bezug zur Softwareentwicklung

Das ist [Cloud-Einheitsökonomie](../cloud-einheitsökonomie/), spezialisiert auf KI, mit drei Praxishinweisen: **pro Geschäftseinheit messen**, nicht pro API-Aufruf, damit die Zahl direkt in [ICER](../inkrementelles-kosten-effektivitäts-verhältnis/)-/[Budget-Impact](../budget-impact-analyse/)-Modelle passt; **die Input-/Output-Asymmetrie beachten** (Output typischerweise ~4× Input-Preis; RAG-Architekturen sind input-lastig — Architekturentscheidungen sind Preisentscheidungen); und **nach Aufgabenstufe routen** — Modellfähigkeit an Aufgabenschwierigkeit anpassen (günstige Modelle für Klassifikation, Frontier für Synthese) senkt die gemischten Kosten routinemäßig um das 5- bis 10-Fache bei gleicher Qualität, die Software-Version der Nutzung der günstigsten wirksamen Intervention ([Kostenminimierung](../kostenminimierungsanalyse/), Gleichwertigkeit belegt).

## Fallstricke

- **Mehrjährige Modelle mit eingefrorenem Preis** — überschätzt die Kosten; aber auch **Umsatzmodelle mit angenommener Deflation** — ein Preiskrieg ist kein Vertrag; beides szenariomäßig testen.
- **Evaluations-Overhead ignorieren**: Guardrails, Judges und Wiederholungen sind echte Tokens, oft die Mehrheit in regulierten Umgebungen.
- **Pro-Token-Kurzsichtigkeit**: Latenz, Ratenbegrenzungen und Kontextfenster-Einschränkungen tragen Kosten, die kein Tokenpreis erfasst.

## Quellen

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
