# Behandlerzeit

Behandlerzeit ist die knappste Ressource in den meisten Gesundheitssystemen. Den Wert einer Ersparnis von Klinikerminuten pro Tag zu messen, erfordert den Wechsel von einfacher Lohnrechnung zu **Opportunitätskosten und Systemkapazität**: Innerhalb eines nationalen Gesundheitsdienstes ist die Zeit eines Behandlers ein starrer operativer Engpass, keine flexible Kostenzeile.

## Warum es wichtig ist

Man kann nicht schnell mehr Hausärzte, Fachärzte oder Fachpflegekräfte schaffen — Ausbildungswege dauern 5–15 Jahre, und Vakanzen sind chronisch. Eine gesparte Stunde Behandlerzeit ist also nicht "vermiedener Lohn" (der Behandler wird weiterhin bezahlt); sie ist *freigesetzte Engpasskapazität*, und Engpasskapazität ist das wert, was der Engpass erzeugt. Deshalb sind Behauptungen wie "spart 10 Minuten pro Konsultation" gleichzeitig die häufigste und die am falschesten bepreiste Zeile in der digitalen Gesundheit.

## Die Mathematik

Drei Bewertungsebenen, mit steigender Ehrlichkeit:

```
1. Lohnbasis:           Stunden × Vollkostensatz (PSSRU-Einheitskosten)
                        — was die Zeit kostet, nicht was sie erzeugt
2. Output-Basis:        Stunden → ermöglichte Termine/Eingriffe × Schema-Wert
                        (siehe national-tariff-and-unit-costs.md)
3. Engpass-Basis:       wenn diese Rolle einen ganzen Pfad steuert, Stunden ×
                        Wert des freigesetzten Pfaddurchsatzes (Theory of
                        Constraints)
```

Fragmentierungsabschlag: In Bruchstücken unterhalb einer nutzbaren Einheit gesparte Zeit (z. B. 3 Minuten verstreut über eine Klinik) lässt sich schlecht umeinsetzen; einen benannten Nutzungsfaktor anwenden.

## Durchgerechnetes Beispiel

Ambiente Dokumentationsassistenz spart einem Hausarzt 2 Minuten pro Konsultation, 30 Konsultationen/Tag: 60 Minuten/Tag, oder **220 Stunden/Jahr pro Hausarzt** über 220 Arbeitstage.

```
Lohnbasis:    220 × 80 £ (Vollkostenstunde Hausarzt, PSSRU-Region) ≈ 17.600 £/Hausarzt/Jahr
Output-Basis: 60 Min./Tag = 5 zusätzliche 12-Minuten-Konsultationen/Tag
              = 1.100 zusätzliche Termine/Hausarzt/Jahr × 42 £ ≈ 46.200 £/Hausarzt/Jahr
              — oder dieselben Termine aufgenommen als reduzierte Überstunden
              und sicherere, entspanntere Konsultationen (qualitative Zeile)
```

Über eine Föderation von 50 Hausärzten ist die Output-basierte Kapazität ~2,3 Mio. £/Jahr wert — vorausgesetzt, die Minuten sind real (gemessen, nicht vom Anbieter behauptet), konsolidiert (ganze Konsultationen, keine Bruchstücke) und wiedereingesetzt (siehe [zahlungswirksame vs. nicht zahlungswirksame Einsparungen](../zahlungswirksame-vs-nicht-zahlungswirksame-einsparungen/)).

## Bezug zur Softwareentwicklung

Die Zeit eines Senior-Entwicklers verhält sich identisch: Sie ist der Engpass, durch den Designs, Reviews und Vorfälle fließen, also nach dem bewerten, was der Engpass steuert, nicht nach Gehalt. Dieselbe dreistufige Bewertung gilt für jede Behauptung "KI spart jedem Entwickler X Minuten" — Lohnrechnung schmeichelt kleinen Zahlen; die ehrlichen Fragen sind, ob sich Minuten zu nutzbaren Blöcken konsolidieren und was die freigesetzte Kapazität tatsächlich erzeugt. Siehe [Optimierung nachgelagerter Ressourcen](../optimierung-nachgelagerter-ressourcen/) für den Multiplikator, wenn die gesparte Stunde der Person gehört, auf die alle anderen warten.

## Fallstricke

- **Minuten × Gehalt = Einsparung** — die klassische Aufblähung; es ist Kapazität, und nur zum benannten Nutzungsgrad.
- **Das Quantenproblem ignorieren**: 12 × 5-Minuten-Ersparnisse ≠ eine freie Stunde.
- **Alle Rollen gleich bewerten**: eine Stunde des Pfad-Engpasses ist ein Vielfaches einer Stunde einer nicht steuernden Rolle wert.

## Quellen

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
