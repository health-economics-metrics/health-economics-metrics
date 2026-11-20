# Zahlungswirksame vs. nicht zahlungswirksame Einsparungen

Zahlungswirksame Einsparungen senken tatsächliche Ausgaben — eine Budgetzeile wird kleiner. Nicht zahlungswirksame Einsparungen setzen Zeit oder Kapazität frei, die *wiederverwendet* statt eingespart wird. Finanzdirektoren im Gesundheitswesen behandeln dies als zwei verschiedene Arten — Sie sollten es auch tun.

## Warum es wichtig ist

Dies ist der schärfste Ehrlichkeitstest, der auf jeden digitalen Business Case in einem nationalen Gesundheitsdienst angewendet wird. NHS-Nutzenrahmenwerke kategorisieren jeden behaupteten Nutzen explizit als zahlungswirksam, nicht zahlungswirksam oder qualitativ. Die meisten "Einsparungen" der digitalen Gesundheit — pro Patient gesparte Klinikerminuten, schnellere Dokumentation — sind nicht zahlungswirksam: wertvoll, aber sie verringern nicht das Defizit. Ein Trust-CFO mit einer Finanzierungslücke kann nur Bargeld ausgeben. Siehe auch [harte zahlungswirksame Einsparungen](../harte-zahlungswirksame-einsparungen/).

## Die Mathematik

```
Zahlungswirksame Einsparung   = Budgetzeile vorher − Budgetzeile nachher
                                (muss entnehmbar sein: ein gekündigter Vertrag,
                                 eine geschlossene Station, geringere Zeitarbeits-
                                 ausgaben, eine vermiedene Anschaffung)

Nicht zahlungswirksamer Wert  = freigesetzte Zeit × Einheitskosten dieser Zeit
                                (bewertet zu Opportunitätskosten; das Geld ist
                                 NICHT entnehmbar)
```

Dasselbe physische Ereignis (eine gesparte Stunde) landet je nach Folge in der einen oder anderen Kategorie:

```
Stunde gespart → Überstunden-/Zeitarbeitsschicht storniert    → zahlungswirksam
Stunde gespart → Kliniker behandelt einen weiteren wartenden
                  Patienten                                    → nicht zahlungswirksam (Kapazität)
Stunde gespart → geht in Leerlauf auf, nichts ändert sich       → gar kein Nutzen
```

## Durchgerechnetes Beispiel

Software spart jeder von 100 Pflegekräften 30 Minuten pro Schicht. Das sind 100 × 0,5 × 5 Schichten/Woche × 46 Wochen ≈ 11.500 Stunden/Jahr. Bei Arbeitgeberkosten einer Band-5-Stelle von ~25 £/Stunde lautet die verlockende Schlagzeile 287.500 £/Jahr.

Die ehrliche Aufteilung:

- 20 % der Zeit fallen dort an, wo Stationen derzeit Bank-/Zeitarbeitszuschläge zahlen, um Dokumentationsüberhänge abzudecken: 2.300 Stunden × 35 £ Zeitarbeitstarif = **80.500 £ zahlungswirksam** (Schichten, die tatsächlich nicht gebucht werden).
- 60 % werden in die direkte Patientenversorgung umgelenkt: 6.900 Stunden × 25 £ = **172.500 £ nicht zahlungswirksame Kapazität** — realer Wert, separat ausgewiesen, nie als "Einsparung" bezeichnet.
- 20 % verpuffen in Pausen und Unterbrechungen: **0 £**. Sie zu behaupten wäre Fiktion.

Ein Business Case, der 80.500 £ Bargeld + 172.500 £ Kapazität ausweist, ist glaubwürdig. Einer, der 287.500 £ "Einsparungen" ausweist, wird vom ersten Controller abgelehnt, der ihn liest.

## Bezug zur Softwareentwicklung

Dieselbe Logik gilt für den ROI von KI-Coding-Assistenten: "30 Minuten pro Entwickler und Tag" ist nicht zahlungswirksame Kapazität, sofern nicht tatsächlich Personalstand, Auftragnehmerausgaben oder Cloud-Kosten sinken. Die Kategorien getrennt ausweisen:

- Zahlungswirksam: gekündigte Auftragnehmerverträge, abgeschaltete Tool-Lizenzen, gesenkte Cloud-Ausgaben.
- Kapazität: früher ausgelieferte Features (Wert über [Verzögerungskosten](../verzögerungskosten/)), abgebauter Rückstand.
- Nichts: gesparte Minuten, die im Kontextwechsel zerfasern.

Auch verfolgen, *wohin die freigesetzte Zeit tatsächlich ging* — Nutzenrealisierung ([benefits-realization.md](../nutzenrealisierung/)) existiert, weil behauptete Kapazitätsgewinne bei einer Prüfung häufig verdunsten.

## Fallstricke

- **Minuten mit dem Gehalt multiplizieren und es Einsparung nennen** — die klassische Sünde.
- **Freigesetzte Zeit zu durchschnittlichen Vollkosten bewerten**, wenn die Grenzverwendung dieser Zeit geringwertig ist — siehe [Grenzkosten vs. Durchschnittskosten](../grenzkosten-vs-durchschnittskosten/).
- **Dieselbe Stunde doppelt zählen**: als Bargeld (vermiedene Schicht) und als Kapazität (zusätzlich behandelte Patienten).

## Quellen

- NHS Digital connectivity business case guidance, economic case (benefit categories). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
