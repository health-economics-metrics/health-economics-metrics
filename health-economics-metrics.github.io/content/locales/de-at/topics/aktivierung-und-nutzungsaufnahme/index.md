# Aktivierung und Nutzungsaufnahme

Die Aktivierungsrate ist der Anteil der Anmeldungen, die den ersten bedeutsamen Wert erreichen (die "Aha"-Handlung — erste protokollierte Messung, erste abgeschlossene Lektion). Die Nutzungsaufnahme ist die Bevölkerungsversion: der Anteil der *förderfähigen* Bevölkerung, der überhaupt annimmt. Zusammen sind sie die vorderen Tore des Wertetrichters: Akquisition → Nutzungsaufnahme → Aktivierung → [Bindung](../bindung-und-abwanderung/) → Ergebnis.

## Warum es wichtig ist

Nicht aktivierte Nutzer sind reine Kosten: Akquisitionsausgaben, Bereitstellung, Support-Aufwand — null klinischer Wert. Referenzwerte setzen die Aktivierung von Gesundheitssoftware *unter* den branchenübergreifenden Durchschnitt (≈24 % vs. ≈37 % für Neunutzer-Aktivierung in einem SaaS-Referenzsatz; Abschluss der Onboarding-Checkliste ~20 %), was das schwerere Onboarding widerspiegelt (Identität, Einwilligung, klinische Sicherheit). Die Nutzungsaufnahme trägt die Bevölkerungseinsätze: Im [RE-AIM-Rahmen](../reichweite-und-gerechtigkeit/) gilt Public-Health-Wirkung ≈ Reichweite × Wirksamkeit — eine hervorragende App, angenommen von 3 % der förderfähigen Bevölkerung, bewegt die Bevölkerungsnadel um 3 %. Für verschriebene digitale Therapeutika ist das Nutzungsaufnahme-Tor in nationalen Daten sichtbar: **~81 % der deutschen DiGA-Verordnungen werden aktiviert** — eine von fünf verschriebenen und bezahlten Behandlungen beginnt nie (siehe [Deutschlands DiGA-Schnellverfahren](../deutschlands-diga-schnellverfahren/)).

## Die Mathematik

```
Aktivierungsrate = Nutzer mit Schlüsselhandlung im Fenster / Anmeldungen × 100
Nutzungsaufnahmerate = Annehmende / förderfähige Bevölkerung × 100
DiGA-Einlöserate  = aktivierte Verordnungscodes / ausgestellte Verordnungen × 100

Trichter-Wertmodell:
  förderfähig × Nutzungsaufnahme × Aktivierung × bindungsgewichteter
  Nutzen = Bevölkerungswert
  — vier Multiplikationen; die Verbesserung des kleinsten Faktors
  dominiert meist (Theory of Constraints für Trichter)
```

## Durchgerechnetes Beispiel

Ein Commissioner bietet 80.000 förderfähigen Einwohnern eine Diabetes-Präventions-App an:

```
Eingeladen → registriert:  80.000 → 12.000  (Nutzungsaufnahme 15 %)
Registriert → aktiviert (erste Sitzung + Ziel gesetzt, 7 Tage):
  12.000 → 5.400 (45 %)
Aktiviert → 6-Monats-Programm abgeschlossen: 5.400 → 1.600 (30 %)

Programmeffekt (Studie, Abschließende): 0,03 QALYs + 180 £ vermiedene Kosten
Bevölkerungswert = 1.600 × (0,03 × 20.000 £ + 180 £) ≈ 1,25 Mio. £
Wert pro förderfähiger Person = 15,60 £ — gegenüber 780 £, wenn jede
förderfähige Person abschließen würde.

Wo investieren? Nutzungsaufnahme zu verdoppeln (15→30 %) verdoppelt den
Wert; Aktivierung von 45→65 % zu heben fügt ~44 % hinzu; beides schlägt
weiteres Polieren der Programminhalte, die die 1.600 bereits abschließen.
```

## Bezug zur Softwareentwicklung

Aktivierung ist die entwicklungstechnisch am leichtesten angehbare Trichterphase: Reibung bei der Identitätsprüfung, Einwilligungsabläufe, Leerzustand-Design und Zeit-bis-zum-ersten-Wert sind Code, keine Politik (mittlere Zeit-bis-zum-Wert im Gesundheitswesen ≈ 1 Tag 7 Stunden in Referenzdaten — jede Stunde davon ist Abwanderungsrisiko). Nutzungsaufnahme ist ein Verteilungssystem-Problem: Integration in Überweisungspfade (der Verordnungsmoment), hausärztlich befürwortete Einladungen (Vertrauensübertragung), und Barrierefreiheit (Sprache, digitale Kompetenz — siehe [Reichweite und Gerechtigkeit](../reichweite-und-gerechtigkeit/)). Das obige Trichter-Wertmodell ist der Business-Case-Generator für beides: die Faktoren multiplizieren, die Restriktion finden, die Behebung gegen den Bevölkerungswert bepreisen, den sie freisetzt.

## Fallstricke

- **Aktivierung als Bequemlichkeit definiert** (E-Mail verifiziert) statt klinisch bedeutsam (erste therapeutische Handlung) — bläht die Kennzahl auf, bricht die Wertschöpfungskette.
- **Nenner-Spiele bei der Nutzungsaufnahme**: "von denen, die die Website besucht haben" statt der wirklich förderfähigen Bevölkerung — Commissioner kümmert Letzteres.
- **Selektionseffekte**: leicht zu aktivierende Nutzer sind am wenigsten krank und am wenigsten benachteiligt; Trichterverbesserungen können Gerechtigkeitslücken vergrößern, während sie Durchschnittswerte verbessern.

## Quellen

- Activation benchmarks (healthcare SaaS). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- DiGA activation data, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- RE-AIM framework. <https://re-aim.org/>
