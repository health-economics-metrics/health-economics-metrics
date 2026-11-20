# Gesamtbetriebskosten (TCO)

TCO sind die vollständigen Kosten eines Systems über seine Lebensdauer: Anschaffung oder Bau, Integration, Betrieb, Wartung, Support, Schulung und Stilllegung. Die unbequeme Ausgangslage: **Wartung macht 50–80 % der Software-TCO aus** — etwa drei Viertel der Lebenszeitkosten fallen *nach* dem Start an.

## Warum es wichtig ist

Health Technology Assessment hat längst gelernt, dass der Preis eines Medikaments nicht seine Kosten sind — Verabreichung, Überwachung und das Management von Nebenwirkungen gehören alle ins Modell. Software-Business-Cases, die nur Bau-/Lizenzkosten zählen, wiederholen den naiven Arzneimittelpreis-Fehler und unterschätzen systematisch die Kostenseite jedes [ICER](../inkrementelles-kosten-effektivitäts-verhältnis/) und jedes [Budget-Impacts](../budget-impact-analyse/), den sie speisen. Für die NHS-Beschaffung ist TCO-Disziplin das, was die Kosteneffektivitätsbehauptung eines digitalen Produkts ehrlich macht — und es ist dort, wo günstig aussehende Optionen verlieren.

## Die Mathematik

```
TCO = Anfangskosten (Bau/Lizenz + Integration + Datenmigration + Schulung)
    + Σ_t [Betrieb + Wartung + Support + Infrastruktur + Upgrades
           + Compliance/Absicherung]_t / (1 + r)^t
    + Stilllegungskosten (Ausstieg, Datenextraktion, Parallelbetrieb)

Horizont: 3–5 Jahre kommerziell, Systemlebensdauer für klinische Infrastruktur
r: 3,5 % öffentlicher Sektor (Green Book), 8–12 % kommerziell
Referenzwerte: jährliche Wartung ≈ 15–20 % der Baukosten; ~78 % der
Lebenszeit-TCO nach dem Start; Stilllegung ignorieren und Anbieterbindung
haben ihren eigenen Preis.
```

## Durchgerechnetes Beispiel

Zwei Optionen für ein E-Observations-System, 5-Jahres-Horizont:

```
                             Anbieter-SaaS    Eigenentwicklung
Jahr 0 (Lizenz/Bau)          250.000 £        900.000 £
Integration + Schulung       180.000 £        150.000 £
Jährlicher Betrieb (J. 1–5)  120.000 £/Jahr   190.000 £/Jahr (Hosting + 1,5 VZÄ Wartung)
Ausstieg/Stilllegung         60.000 £         30.000 £

Undiskontierte TCO           1.090.000 £      2.030.000 £
```

Die Entwicklungsschätzung der Eigenbau-Option (900.000 £) betrug nur 44 % ihrer wahren TCO — und Bauschätzungen selbst überschreiten typischerweise um 30–40 % (siehe [Eigenentwicklung oder Fremdbezug](../eigenentwicklung-oder-fremdbezug/)). Sofern die Eigenbau-Option nicht wesentlich andere *Ergebnisse* liefert, gilt die Logik der [Kostenminimierung](../kostenminimierungsanalyse/), und SaaS gewinnt um ~940.000 £.

## Bezug zur Softwareentwicklung

Entwickler gewichten die eigenen Wartungsdaten ihres Feldes zu gering, wenn sie Eigenbau befürworten: Die Regel von 15–20 % jährlicher Wartung der Baukosten bedeutet, dass jedes 1-Mio.-£-System still 150.000–200.000 £/Jahr künftiger Kapazität bindet — eine Verbindlichkeit, die auf dieselbe gedankliche Bilanz gehört wie [technische Schulden](../technische-schulden/). TCO ist auch die Kostenhälfte jeder Kennzahl in diesem Repository: Kosten pro Deployment, [Cloud-Einheitsökonomie](../cloud-einheitsökonomie/), und die Nenner-Disziplin, die HTA Medikamentensponsoren auferlegt. Wird der Preis Ihres Produkts infrage gestellt, ist ein TCO-Vergleich einschließlich der wahren Betriebskosten des etablierten Anbieters meist die stärkste verfügbare Umrahmung. Eine mehrjährige TCO-Zahl wie die obige ist eine Summe vieler Kostenposten über die Zeit — siehe [währungssichere Kostenaggregation](../währungssichere-kostenaggregation/), warum diese Summe exakt dezimal statt Gleitkomma sein sollte, sobald ein Modell auf den Cent genau abstimmen muss, und [Cent-genaue Kostenzuordnung](../cent-genaue-kostenzuordnung/), um eine TCO-Summe ohne Cent-Verluste auf Kostenstellen aufzuteilen.

## Fallstricke

- **Ankern am Startkosten**: Optionen zu Jahr-0-Kosten vergleichen, wenn sich die Rangfolge bis Jahr 3 umkehrt.
- **Trugschluss der kostenlosen internen Arbeit**: interne Wartung mit null Kosten angesetzt, weil "das Team ohnehin bezahlt wird" — siehe [Opportunitätskosten](../opportunitätskosten/).
- **Ausstiegskosten ignorieren**: Datenabzug, Vertragskündigung und Parallelbetrieb sind es, wo "günstiges" SaaS teuer wird.
- **Verstöße gegen denselben Horizont**: eine dreijährige SaaS-TCO gegen eine zehnjährige Eigenbau-Abschreibung vergleichen (siehe [Zeithorizont](../zeithorizont/)).

## Quellen

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
