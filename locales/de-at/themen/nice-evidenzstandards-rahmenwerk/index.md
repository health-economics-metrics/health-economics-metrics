# NICE-Evidenzstandards-Rahmenwerk (ESF)

Das ESF ist NICEs Rahmenwerk, das festlegt, **wie viel Evidenz eine digitale Gesundheitstechnologie braucht, verhältnismäßig zu ihrem Risiko**. Es ist das Nächste an einer offiziellen Antwort auf "was müssen wir beweisen, bevor der NHS unsere App kauft?"

## Warum es wichtig ist

Das ESF (erstmals 2019 veröffentlicht, 2022 aktualisiert, um KI und adaptive Algorithmen abzudecken) klassifiziert digitale Gesundheitstechnologien nach klinischer Funktion in Stufen, mit **kumulativen** Evidenzstandards — 21 Standards über 5 Gruppen (Designfaktoren, Wert, Leistung/Wirksamkeit, ökonomische Wirkung, Einsatz):

```
Stufe A — Systemdienste, kein direktes Patientenergebnis (z. B. E-Rostering)
         → Basisstandards: Glaubwürdigkeit, Datenschutz, technische Absicherung
Stufe B — informieren, einfache Überwachung, Kommunikation (z. B. Symptomtagebuch)
         → + Evidenz für Nutzernutzen, angemessene Zuverlässigkeit
Stufe C — behandeln, diagnostizieren oder aktiv das klinische Management leiten
         → + hochwertige vergleichende Wirksamkeitsevidenz (idealerweise RCT)
           und ökonomische Analyse
```

Für ökonomische Evidenz ist die [Kosten-Konsequenzen-Analyse](../kosten-konsequenzen-analyse/) für die meisten Stufen akzeptabel; die [Kosten-Nutzwert-Analyse](../kosten-nutzwert-analyse/) wird beim höchsten Risiko erwartet. Das ESF definiert Ihre **Evidenzkosten des Markteintritts** — dafür budgetieren wie für jede andere Baukosten.

## Die Mathematik

Keine Formeln — eine Entscheidungstabelle. Die operative Rechnung ist kommerziell:

```
Erforderliche Evidenzinvestition = f(Stufe)
  Stufe A: Dokumentation + Absicherung ≈ 10.000–50.000 £
  Stufe B: beobachtende/vergleichende Nutzenstudie ≈ 50.000–250.000 £
  Stufe C: vergleichende Studie in RCT-Qualität + ökonomisches Modell
           ≈ 250.000 £–2 Mio. £+

Die Behauptungen des eigenen Produkts bewusst positionieren: "unterstützt
klinische Entscheidungen" statt "informiert Patienten" zu behaupten,
verschiebt eine Stufe nach oben und kann die Rechnung verzehnfachen.
```

## Durchgerechnetes Beispiel

Ein Hersteller einer Medikamentenerinnerungs-App erwägt, eine Funktion zur Dosisanpassungsempfehlung hinzuzufügen.

- Als Erinnerungs-App: **Stufe B** — eine Kohortenstudie, die eine Verbesserung der Adhärenz zeigt, genügt.
- Mit Dosisempfehlungen: **Stufe C** — vergleichende Wirksamkeitsevidenz (wahrscheinlich ein RCT gegen übliche Versorgung) plus ökonomische Analyse.

Kostet das RCT 600.000 £ und der inkrementelle Umsatz der Dosisfunktion 200.000 £/Jahr, muss die Funktion 3+ Jahre lang Wert halten, bevor sich die Evidenzkosten amortisieren — eine Produktentscheidung, die völlig anders aussieht, sobald die ESF-Stufe eingepreist ist. Viele Teams liefern das Stufe-B-Produkt aus und stellen die Stufe-C-Behauptung hinter Finanzierung zurück.

## Bezug zur Softwareentwicklung

Das ESF ist das übertragbarste Governance-Muster in diesem Repository: **risikogestufte Evidenzanforderungen für die Einführung von Tools**. Interne Version: Ein Code-Formatierer braucht eine Demo (Stufe A); ein Produktivitätstool, das gesparte Stunden behauptet, braucht einen gemessenen Piloten (Stufe B); ein KI-Gate, das Deployments automatisch blockiert oder klinischen Code automatisch schreibt, braucht Evidenz in kontrollierter-Studien-Qualität vor dem organisationsweiten Rollout (Stufe C). Verhältnismäßige Evidenz stoppt beide Fehlermodi — Bürokratie, die triviale Tools erdrosselt, und Bauchgefühl, das folgenreiche Tools ausliefert. Siehe auch [Deutschlands DiGA-Schnellverfahren](../deutschlands-diga-schnellverfahren/) für das ergänzende Muster "vorläufige Einführung mit Evidenzfrist".

## Fallstricke

- **Stufen-Fehlklassifizierung durch Wunschdenken** — Regulierer und Käufer klassifizieren nach dem, was das Produkt *tut*, nicht danach, was das Marketing sagt.
- **Evidenz nachträglich zum Produkt gebaut**: ein RCT nachträglich auf ein ausgeliefertes Produkt aufzusetzen, ohne Instrumentierung oder Equipoise, ist langsam und oft unmöglich.
- **Das ESF erfüllen und den Rest vergessen**: Das ESF steht neben DTAC (klinische Sicherheit, Datenschutz, Interoperabilität) und, für KI, regulatorischer Zulassung — siehe [Regulatorische KI-Evaluation](../regulatorische-ki-evaluation/).

## Quellen

- NICE Evidence Standards Framework (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
