# Harte zahlungswirksame Einsparungen (Defizitabwehr)

Harte zahlungswirksame Einsparungen sind Posten, die ein Krankenhaus wegen Ihrer Software aktiv **aus dem Budget des nächsten Monats streichen** kann. Für einen strengen Finanzbuchhalter — und für einen Trust im Defizit — ist das die einzige Nutzenklasse, die voll zählt.

## Warum es wichtig ist

Viele NHS-Trusts arbeiten unter Defizitabbau-Plänen mit intensiver Prüfung jeder Ausgabenzeile. In diesem Umfeld schließen Kapazitätsnutzen und Qualitätsverbesserungen — so real sie auch sind — die Lücke nicht; nur Bargeld tut das. Ein Softwareprodukt, das beweisen kann, dass es Budgetzeilen streicht, finanziert sich aus Sicht des CFO *selbst*, was die Beschaffung verwandelt: Das Gespräch hört auf, "können wir uns das leisten?" zu sein, und wird zu "können wir es uns leisten, es nicht zu tun?". Dieses Dokument ist die defizitzugewandte scharfe Kante von [zahlungswirksamen vs. nicht zahlungswirksamen Einsparungen](../zahlungswirksame-vs-nicht-zahlungswirksame-einsparungen/).

## Die Mathematik

Das verlässlichste harte Bargeldziel des NHS ist **Zeitarbeit zu Premiumsätzen**. Trusts decken Lücken mit internem "Bank"-Personal (zu einigermaßen üblichen Sätzen) und externem "Agency"-Personal (oft 2–3-fache Agenda-for-Change-Sätze, gedeckelt, aber für knappe Rollen häufig überschritten).

```
Harte Einsparung = vermiedene Premium-Schichten × (Premiumsatz − regulärer Satz)
                  + vermiedene Überstunden × Überstundenaufschlag
                  + gekündigte externe Verträge × Vertragswert

Voraussetzung des Mechanismus: die konkrete Budgetzeile und den Manager
benennen, der ihre Reduktion bestätigt. Kann niemand auf die Zeile zeigen,
ist es kein hartes Bargeld.
```

## Durchgerechnetes Beispiel

Eine Band-6-Pflegekraft verliert ~1 Stunde/Schicht an administrativen Aufwand; Dokumentation läuft regelmäßig über das Schichtende in Überstunden hinein, und Stationen buchen zusätzliche Bank-Abdeckung, um Dokumentation aufzuholen.

Software gibt diese Stunde der geplanten Schicht zurück, über 300 Pflegekräfte hinweg:

```
Vermiedene Überstunden: 300 Pflegekräfte × 2,5 bezahlte Überstunden/Woche
                        × 8 £ Aufschlag × 46 Wochen ≈ 276.000 £/Jahr
Bank-/Zeitarbeitsschichten: 15 Aufholschichten/Woche × 180 £ Aufschlag × 52
                            ≈ 140.400 £/Jahr
Hartes Bargeld gesamt    ≈ 416.000 £/Jahr gegenüber Lizenzkosten von ~150.000 £
```

Jedes Pfund ist gegen die E-Rostering- und Gehaltsabrechnungssysteme prüfbar — genau so sollte der Nutzen monatlich belegt werden, über [Nutzenrealisierung](../nutzenrealisierung/). (Veröffentlichte NHS-Personalmodelle haben Verhältnisse von bis zu über 11 £ gesparten pro 1 £ ausgegeben für diesen Mechanismus behauptet; jedes solche Verhältnis als Hypothese für die Rostering-Daten *Ihres* Trusts behandeln, nicht als übertragbare Tatsache.)

## Bezug zur Softwareentwicklung

Die Entwicklungs-Äquivalente des Zeitarbeitsaufschlags sind die eigenen Notkäufe der Organisation: Auftragnehmer-Tagessätze, die Lieferlücken abdecken, vorfallbedingte Überstunden, beschleunigte Support-Verträge und Cloud-Spotpreis-Panik. Produktivitätssoftware, die hartes Bargeld beansprucht, sollte diese Zeilen mit derselben Disziplin anvisieren — die Budgetzeile, den Verantwortlichen und den Monat benennen, in dem sie schrumpft. Alles andere, was sie liefert, ist Kapazität ([Wertschöpfungskapazität](../wertschöpfungskapazität/)) oder Qualität: real, wertvoll und etwas anderes.

## Fallstricke

- **Kapazität "Einsparung" nennen** — der sofortige Glaubwürdigkeitskiller bei der Finanzabteilung; siehe die Taxonomie in [zahlungswirksame vs. nicht zahlungswirksame Einsparungen](../zahlungswirksame-vs-nicht-zahlungswirksame-einsparungen/).
- **Anbietermodell-Verhältnisse als lokale Tatsache dargestellt** (das 11:1-Problem) — das Modell auf den eigenen Rostering-Daten des Trusts neu aufbauen.
- **Verwechslung von einmalig und wiederkehrend**: ein gekündigter Vertrag spart seinen Wert einmal pro Jahr, nicht einmalig; eine gestrichene Stelle spart Gehalt nur, solange sie gestrichen bleibt.

## Quellen

- NHS England, reducing agency spend in the NHS. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Digital business case guidance, economic case. <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
