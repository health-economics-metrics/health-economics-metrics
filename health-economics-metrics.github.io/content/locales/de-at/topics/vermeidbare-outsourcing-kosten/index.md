# Vermeidbare Outsourcing-Kosten

Kann ein Trust Ziele nicht mit interner Kapazität erreichen, kauft er Kapazität zu Premiumsätzen: Wochenend-Überstunden für eigenes Personal oder das Auslagern von Eingriffen an private Anbieter. Der ökonomische Wert kapazitätsfreisetzender Software umfasst die **vermeidbaren Kosten dieser Premium-Arbeit**.

## Warum es wichtig ist

Unter dem Druck der elektiven Aufholung zahlen Trusts routinemäßig private Spotpreise (oft das 1,2- bis 1,5-Fache des NHS-Schema-Preises) oder Premium-Wartelisten-Initiativsätze an ihre eigenen Fachärzte für Wochenendlisten. Anders als gewöhnliche Kapazitätsbehauptungen ist vermiedenes Outsourcing **zahlungswirksam**: Die Rechnung an den privaten Anbieter wird schlicht nicht gestellt. Das macht es zu einer der stärksten verfügbaren Nutzenzeilen für Software, die den internen Durchsatz erhöht — und einer der am leichtesten zu belegenden, weil die Outsourcing-Ausgabe bereits eine sichtbare Budgetzeile ist.

## Die Mathematik

```
Vermeidbare Outsourcing-Kosten = intern verlagerte Tätigkeit × (ausgelagerter
                                 Einheitspreis − interne Grenzkosten pro Fall)

Interne Grenzkosten: Verbrauchsmaterial + variable Personalkosten für die
zusätzliche Tätigkeit — die feste Liegenschaft ist ohnehin bereits bezahlt
(siehe marginal-vs-average-cost.md).
```

Die Behauptung setzt voraus, dass freigesetzte interne Kapazität die Tätigkeit tatsächlich aufnimmt: OP-Säle, Betten und Personal müssen alle verfügbar sein (die bindende Restriktion regiert — wieder die Theory of Constraints).

## Durchgerechnetes Beispiel

Ein Trust lagert 800 Kataraktoperationen/Jahr zu je 900 £ aus: 720.000 £/Jahr externe Ausgaben, gegenüber einem Schema-Preis von ~750 £.

OP-Planungssoftware (Listenoptimierung, Nachbelegung von Lücken bei Absagen, Verfolgung der Wechselzeit) erhöht die interne OP-Auslastung genug, um 500 Eingriffe zurückzuholen:

```
Interne Grenzkosten pro Fall ≈ 350 £ (Verbrauchsmaterial + Sitzungspersonal)
Einsparung = 500 × (900 − 350) = 275.000 £/Jahr — zahlungswirksam
Verbleibendes Outsourcing: 300 × 900 £ = 270.000 £ (war 720.000 £)
```

Softwarekosten 90.000 £/Jahr → netto ≈ **+185.000 £/Jahr bankfähiges Bargeld**, zuzüglich interner Qualitäts- und Ausbildungsnutzen dadurch, die Arbeit intern zu behalten.

## Bezug zur Softwareentwicklung

Das direkte Analogon ist der **Auftragnehmer- und Beratungsaufschlag**: Kann interne Entwicklungskapazität Zusagen nicht erfüllen, kaufen Organisationen externe Kapazität zum 1,5- bis 3-Fachen interner Vollkostensätze. Plattform- und Produktivitätsinvestitionen, die den internen Durchsatz erhöhen, sollten vermiedene Auftragnehmerausgaben genau wie oben beanspruchen — externer Tagessatz minus interne Grenzkosten, mal zurückgeholte Arbeit —, weil das eine der wenigen echt zahlungswirksamen Zeilen in einem Business Case zur Entwicklerproduktivität ist. Derselbe Vorbehalt gilt: Die interne Kapazität muss tatsächlich existieren und für die zurückgeholte Arbeit eingeplant sein, sonst ist die Behauptung Fiktion.

## Fallstricke

- **Rückholung behaupten ohne die vollständige Kapazitätskette** — freigesetzte Chirurgen, aber keine OP-Slots (oder freigesetzte Entwickler, aber keine Produktmanagement-Kapazität) holen nichts zurück.
- **Ausgelagerten Preis mit internen Durchschnittskosten vergleichen** statt mit Grenzkosten — unterschätzt seltsamerweise die Einsparung; die Fixkosten laufen so oder so.
- **Asymmetrie bei Qualität/Komplexität**: Ausgelagerte Fälle sind oft die einfachen; ihre Rückholung ändert den internen Fallmix und die Einheitskosten.

## Quellen

- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
