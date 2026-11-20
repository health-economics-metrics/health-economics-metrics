# Währungsübergreifender ICER-Vergleich

Wer einen [ICER](../inkrementelles-kosten-effektivitäts-verhältnis/), der in der Währung eines Landes berechnet wurde, mit der [Zahlungsbereitschaftsschwelle](../zahlungsbereitschaftsschwellen/) eines anderen Landes vergleicht — oder Kostendaten einer multinationalen Studie zusammenführt —, braucht einen expliziten, nachvollziehbaren Währungsumrechnungsschritt. Wird die Umrechnungsmethode falsch gewählt, kann dieselbe Evidenz eine Einführungsentscheidung kippen, obwohl sich an den klinischen oder Kostendaten nichts geändert hat.

## Warum es wichtig ist

Die ISPOR-Methodenleitlinie für multinationale klinische Studien (Willke et al., *Health Economics*, 1998) empfiehlt, Ressourcenkosten mit der **Kaufkraftparität (KKP)** — nicht mit Marktwechselkursen — umzurechnen, wenn der reale ökonomische Wert von Ressourcen zwischen Ländern verglichen wird, und Marktdevisenkurse dem vorzubehalten, wofür sie tatsächlich da sind: der Modellierung realer grenzüberschreitender Zahlungsströme. Beides zu vermengen ist einer der häufigsten Methodenfehler in multinationalen HTA-Analysen, gerade weil beides für jemanden, der die Leitlinie nicht gelesen hat, nach „dem Wechselkurs" aussieht — und eine Tabellenkalkulation hindert niemanden daran, es falsch zu machen.

## Die Mathematik

```
ICER_in_lokaler_Währung = umrechnen(ICER_in_Quellwährung, Umrechnungsfaktor)

Der Umrechnungsfaktor sollte sein:
  KKP-Umrechnungsfaktor — zum Vergleich des realen ökonomischen Werts von
                           Ressourcen zwischen Ländern (von ISPOR für
                           multinationale CEA empfohlen)
  Marktwechselkurs      — nur für tatsächliche grenzüberschreitende
                           Barzahlungen

einführen, wenn ICER_in_lokaler_Währung < lokale_Schwelle
```

Die Entscheidungsregel selbst ist die gewöhnliche [ICER-Schwellenregel](../zahlungsbereitschaftsschwellen/) — `einführen, wenn ICER < λ`; die methodische Frage dieses Themas betrifft ausschließlich, *welcher Umrechnungsfaktor* die Zahl `ICER_in_lokaler_Währung` erzeugt, auf die diese Regel angewandt wird.

## Durchgerechnetes Beispiel

Der ICER eines Arzneimittels aus einer US-Studie beträgt 45.000 $/QALY. Ein hypothetisches Importland setzt seine eigene, beispielhafte Schwelle bei 34.000 £/QALY an (eine hypothetische länderspezifische Zahl nur für dieses Beispiel — reale Schwellen unterscheiden sich je Land und ändern sich im Zeitverlauf und müssen stets belegt und datiert werden).

**Mit einem KKP-Umrechnungsfaktor von 0,72** (beispielhaft, nur für dieses Rechenbeispiel): 45.000 $ × 0,72 = 32.400 £/QALY. 32.400 £ < 34.000 £ → **einführen**.

**Mit einem Marktwechselkurs von 0,79** stattdessen (beispielhaft): 45.000 $ × 0,79 = 35.550 £/QALY. 35.550 £ > 34.000 £ → **ablehnen**.

Derselbe zugrunde liegende ICER von 45.000 $/QALY ergibt bei KKP-Umrechnung eine Einführungs- und bei Marktkurs-Umrechnung eine Ablehnungsentscheidung. Das ist die konkrete Veranschaulichung, warum die ISPOR-Leitlinie die Wahl des Umrechnungsfaktors als methodisch folgenreich behandelt — nicht als Rundungsdetail und nicht als etwas, das man implizit in einer Tabellenformel lässt, die niemand gegenprüft.

## Bezug zur Softwareentwicklung

Das ist das gesundheitsökonomische Spiegelbild eines bekannten Ingenieurgebiets: Korrektheit bei i18n/l10n-Mehrwährungspreisen in kommerzieller Software, wo eine SaaS-Preisseite nie stillschweigend einen `$`-Betrag mit einem `£`-Preis vergleichen darf. Die Garantie auf Typebene, die ein gut gebauter `Money`-Typ bietet — Vergleichsmethoden, die den Vergleich unterschiedlicher Währungen verweigern und zuerst einen expliziten Umrechnungsschritt erzwingen —, ist eine direkte softwaretechnische Parallele zum gesundheitsökonomischen Methodenpunkt hier: nicht unkonvertierte Zahlen über Währungen hinweg vergleichen und den Umrechnungsschritt nie implizit oder undokumentiert lassen.

## Fallstricke

- **Beträge in verschiedenen Währungen stillschweigend vergleichen**: Ad-hoc-HTA-Arbeit in Tabellenkalkulationen, die einen Dollar- und einen Pfundbetrag ohne vorherige Umrechnung subtrahiert oder vergleicht — eine Fehlerklasse, die ein echter währungsbewusster `Money`-Typ konstruktionsbedingt abfängt, statt sie als stillen Fehler zu belassen.
- **Marktwechselkurs mit KKP verwechseln**: der laut ISPOR-Leitlinie häufigste Methodenfehler in multinationalen HTA-Analysen — beide Zahlen können sich erheblich unterscheiden und beantworten verschiedene Fragen (realer ökonomischer Wert vs. tatsächlicher Zahlungsstrom).
- **Den verwendeten Wechselkurs oder KKP-Index nicht datieren**: beide ändern sich im Zeitverlauf, daher muss jeder zitierte Umrechnungsfaktor so datiert werden wie die übrigen Richtwerte in diesem Repository (Green-Book-Kohlenstoffwerte, Wert eines vermiedenen Todesfalls usw.).

## Quellen

- Willke RJ, Glick HA, Polsky D, Schulman K. „Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
