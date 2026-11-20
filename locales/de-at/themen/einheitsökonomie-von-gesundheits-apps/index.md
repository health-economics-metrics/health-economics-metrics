# Einheitsökonomie von Gesundheits-Apps

Die kommerzielle Rechnung von Konsumgesundheitsprodukten: Kundenakquisitionskosten (CAC), Lebenszeitwert (LTV), durchschnittlicher Erlös pro Nutzer (ARPU), Pro-Mitglied-pro-Monat-Preisgestaltung (PMPM), und die Unterscheidung im Arbeitgebermarkt zwischen **ROI und VOI** (Value on Investment).

## Warum es wichtig ist

Gesundheits-Apps stehen vor einer strukturellen Zwickmühle: Akquisition ist teuer (regulierte Behauptungen, Vertrauensbarrieren, Compliance-Kosten), während Bindung die schlechteste aller Software-Vertikalen ist (~90 % Abbruch innerhalb von 30 Tagen — siehe [Bindung und Abwanderung](../bindung-und-abwanderung/)). Der Standard-Tragfähigkeitstest — **LTV:CAC ≥ 3:1** — ist daher in der Konsumgesundheit brutal schwer, weshalb die Branche zu B2B2C-Modellen wandert: Arbeitgeber, Versicherer und Gesundheitssysteme zahlen PMPM für Populationen, wo der Käufer nicht das abwandernde Individuum ist.

## Die Mathematik

```
CAC   = Vertriebs- + Marketingausgaben / neue zahlende Kunden
ARPU  = Erlös / aktive Nutzer (pro Zeitraum)
LTV   = ARPU × durchschnittliche Lebensdauer = ARPU / Abwanderungsrate
Tragfähigkeit: LTV:CAC ≥ 3, Amortisationszeit ≤ 12–18 Monate

Effektive CAC pro gebundenem Nutzer = CAC / Bindung(t)
  — bei 4 % D30-Bindung sind 5 £ pro Installation = 125 £ pro
    30-Tage-gebundenem Nutzer

PMPM-Erlös = Satz × eingeschriebene Mitglieder × Monate
  Anbietermarge = PMPM − Bedienkosten pro Mitglied pro Monat
  — Engagement kehrt das Vorzeichen um: bei B2C-Abonnements treibt
    Engagement den Erlös; bei PMPM KOSTEN engagierte Mitglieder mehr
    in der Bedienung als ruhende, und Ergebnisverträge kehren es
    wieder zurück
```

## Durchgerechnetes Beispiel

Eine B2C-Schlaf-App: 6,99 £/Monat, monatliche Abwanderung 18 %, gemischte CAC 38 £.

```
LTV = 6,99 / 0,18 ≈ 38,8 £ → LTV:CAC ≈ 1,0 — nicht tragfähig

Wechsel zu Arbeitgeber-PMPM: 1,20 £ PMPM × 40.000 versicherte Leben
= 48.000 £/Monat
Bedienkosten: Infrastruktur 0,15 £ + Support 0,10 £ + Inhalt 0,05 £
  pro Mitglied ≈ 0,30 £ → Marge ~75 %, Verkaufszyklus lang, aber
  Abwanderung ist vertragsebene (jährlich), nicht nutzerebene (täglich)

Die Frage des Arbeitgebers verschiebt die Kennzahl: harter ROI in
Dollar (reduzierte Ansprüche, Fehlzeiten) ist für Wellness-Produkte
selten nachweisbar — die Branchenantwort ist VOI: Produktivität,
Rekrutierungsattraktivität, Engagement — was nur ehrlich ist, wenn es
als VOI bezeichnet wird, nicht als ROI verkleidet (siehe
return-on-investment.md und social-return-on-investment.md).
```

## Bezug zur Softwareentwicklung

Entwicklungsentscheidungen setzen beide Seiten des Verhältnisses: **Bedienkosten** sind Architektur ([Cloud-Einheitsökonomie](../cloud-einheitsökonomie/) — die PMPM-Marge steht und fällt mit den Infrastrukturkosten pro Mitglied), und **LTV** ist Bindungs-Engineering (jeder Abwanderungspunkt ist Erlösrechnung — die QALY-Mathematik im [Bindungs](../bindung-und-abwanderung/)-Dokument hat einen exakten Erlös-Zwilling). Speziell für Gesundheitsprodukte sollte das Einheitsökonomie-Dashboard eine dritte Zeile neben LTV und CAC tragen: **Gesundheitswert pro akquiriertem Nutzer** (bindungsgewichtete QALYs × Schwellenwert) — weil Kostenträger- und DiGA-artige Märkte zunehmend danach bepreisen, und weil ein Produkt, dessen kommerzielle und klinische Einheitsökonomie auseinanderlaufen (profitabel, aber gesundheitlich wirkungslos, oder wirksam, aber nicht finanzierbar), wissen muss, welches Problem es hat.

## Fallstricke

- **LTV aus früher Kohorten-Abwanderung**: Abwanderung stabilisiert sich nach unten; aber auch Survivorship — frühe Anwender binden besser als skalierte Zielgruppen. Kohorten-gereifte Daten verwenden.
- **Über Kanäle gemischte CAC**: bezahlte-Social-CAC und Kliniker-Überweisungs-CAC unterscheiden sich um das 10-Fache, mit entgegengesetzten Bindungsprofilen — segmentieren oder in die Irre geführt werden.
- **PMPM ohne Nutzungsobergrenzen**: übermäßig engagierte Ausreißer-Mitglieder können Margen umkehren; die Verteilung modellieren, nicht den Mittelwert.
- **VOI als ROI dargestellt** gegenüber einem CFO — das Glaubwürdigkeitsversagen, das sich die Arbeitgeber-Wellness-Branche ein Jahrzehnt lang erarbeitet hat.

## Quellen

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
