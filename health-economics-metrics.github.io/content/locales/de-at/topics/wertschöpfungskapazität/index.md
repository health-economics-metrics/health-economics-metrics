# Wertschöpfungskapazität (operative Wende)

Wertschöpfungskapazität ist der "Chancennutzen" freigesetzter Zeit: was das Krankenhaus mit den Stunden, die Ihre Software freisetzt, jetzt *erreichen* kann. Das ist die Kennzahl, die Chief Operating Officers und Ärztlichen Direktoren am wichtigsten ist, weil sie in der Währung spricht, an der sie gemessen werden — Tätigkeit, Ziele und Durchlaufzeit.

## Warum es wichtig ist

Der NHS steht vor gewaltigen Rückständen bei der Überweisung zur Behandlung, und Trusts, die nationale Wartezeitstandards verfehlen, sehen sich aufsichtsrechtlicher Prüfung und Eingriffen gegenüber (siehe [Überweisung zur Behandlung](../überweisung-zur-behandlung/)). Einstellungen sind langsam und begrenzt; Liegenschaften sind fest. Der einzige schnelle Hebel ist, mehr wertschöpfende Tätigkeit aus vorhandenem Personal und Raum herauszuholen. Software, die Facharztzeit zurückgewinnt, "spart" nicht nur Geld — sie *schafft Kapazität*: Kliniken, die es nicht geben könnte, Beurteilungen, die nicht geplant werden könnten, ohne einzustellen oder zu bauen.

## Die Mathematik

```
Geschaffene versteckte Kapazität = freigesetzte Zeit → ermöglichte
                                   Tätigkeitseinheiten × Schema-Wert

Tätigkeitseinheiten: ambulante Termine, präoperative Beurteilungen,
                     Überwachungsdurchsichten
Schema-Wert:         nationale Tarif-/NHS-Payment-Scheme-Preise
                     (siehe national-tariff-and-unit-costs.md)
```

Das ist die Output-basierte Bewertung der [Behandlerzeit](../behandlerzeit/), hochskaliert auf eine Versorgungslinie und ausgedrückt in den Tätigkeitseinheiten, in denen das Betriebsteam ohnehin plant.

## Durchgerechnetes Beispiel

Fachpflegekräfte der Band 6 führen präoperative Beurteilungskliniken durch. Dokumentationsautomatisierung gewinnt 1 Stunde/Tag für jede von 25 Pflegekräften zurück; jede Stunde fasst 2 Beurteilungen.

```
Zusätzliche Beurteilungen = 25 Pflegekräfte × 2/Tag × 250 Tage = 12.500/Jahr
Bei ~120 £ Schema-Wert pro präoperativer Beurteilung:
  12.500 × 120 £ = 1,5 Mio. £/Jahr geschaffene Versorgungskapazität
```

— ohne eine einzige Pflegekraft einzustellen oder einen einzigen Raum zu bauen. (Das vielzitierte Modell, auf das sich dieser Ausgangstext ursprünglich stützte, bezifferte den Wert für eine kleinere Kohorte auf 766.920 £/Jahr; das Rechenmuster ist dasselbe — die Zahl skaliert mit Pflegekräften × Sitzungen × Tarif.) Die operative Darstellung für den COO: Die präoperative Beurteilung hört auf, der Engpass für OP-Listen zu sein — kurzfristig abgesagte Operationen sinken, und die OP-Auslastung steigt, was der Ansatzpunkt der *nächsten* Nutzenzeile ist (siehe [Optimierung nachgelagerter Ressourcen](../optimierung-nachgelagerter-ressourcen/)).

## Bezug zur Softwareentwicklung

Dieselbe Umformulierung rettet Behauptungen zur Entwicklerproduktivität aus der Lohnrechnung: freigesetzte Entwicklungszeit, ausgedrückt als *ausgelieferte Fähigkeit, die sich die Organisation sonst nicht leisten könnte* — Features, Migrationen, Zuverlässigkeitsarbeit —, bewertet zu dem, was die Organisation für solche Fähigkeit am Rand zahlt (Auftragnehmersätze oder Äquivalente aufgeschobener Einstellungen). Die COO-Darstellung lehrt auch etwas über das Vorstellen von Plattformarbeit: den Nutzen in den Einheiten ausdrücken, an denen das Publikum gemessen wird. Betriebsleiter denken in Tätigkeit und Zielen, nicht in abstrakten Stunden; Entwicklungsleiter denken in Roadmap-Punkten und Personalstand, nicht in gesparten Minuten.

## Fallstricke

- **Kapazitätsbehauptungen ohne Nachfrage**: 12.500 zusätzliche Beurteilungsslots zählen nur, wenn die chirurgische Pipeline sie füllt — die nachgelagerte Restriktion prüfen.
- **Tarifwert ohne Zahlungsmechanismus**: bei gemischter Vergütung bringt zusätzliche Tätigkeit möglicherweise kein zusätzliches Einkommen; der Wert kann stattdessen Wartelistenabbau sein (siehe [Auswirkung von Wartelisten](../auswirkung-von-wartelisten/)).
- **Kapazität als Bargeld darstellen** — das ist der Vorzeige-Fall nicht zahlungswirksamen Nutzens; entsprechend kennzeichnen (siehe [zahlungswirksame vs. nicht zahlungswirksame Einsparungen](../zahlungswirksame-vs-nicht-zahlungswirksame-einsparungen/)).

## Quellen

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
