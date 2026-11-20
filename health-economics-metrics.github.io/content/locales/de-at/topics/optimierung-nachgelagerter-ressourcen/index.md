# Optimierung nachgelagerter Ressourcen

Eine Stunde für einen leitenden Behandler zu sparen — einen Hausarzt, einen leitenden Assistenzarzt, einen Facharzt — verhindert oft Engpassverzögerungen für ein gesamtes multidisziplinäres Team (MDT) aus Pflegekräften, Verwaltungspersonal und Therapeuten, die auf klinische Freigaben warten. Der Wert, den Engpass zu entstauen, ist der Durchsatz aller, die ihm nachgelagert sind.

## Warum es wichtig ist

Die Gesundheitsversorgung läuft über Genehmigungsketten: Entlassungen warten auf die Freigabe des Facharztes, Behandlungspläne warten auf die MDT-Besprechung, Überweisungen warten auf Triage. Verzögert sich die steuernde Rolle, sind die Kosten nicht die Stunde einer Person — es ist Leerlauf- oder Blockierzeit über jede abhängige Rolle hinweg, plus Patientenzeit im Schwebezustand (zusätzliche [Bettentage](../eingesparte-bettentage/), längere [RTT-Wartezeiten](../überweisung-zur-behandlung/)). Das ist die Theory of Constraints, angewendet auf klinische Pfade: Eine *am Engpass* gesparte Stunde ist den Grenzdurchsatz des gesamten Systems wert; eine anderswo gesparte Stunde ist viel weniger wert.

## Die Mathematik

```
Wert des Entstauens = Σ über nachgelagerte Rollen (freigesetzte blockierte
                      Stunden × Einheitskosten)
                    + Pfaddurchsatzgewinn × Wert pro Pfadabschluss

Vergleich: Wert derselben gesparten Stunde bei einer nicht steuernden Rolle
≈ nur der Kapazitätswert dieser Rolle (siehe practitioner-time.md).
```

Den Engpass empirisch identifizieren: Wo staut sich Arbeit am längsten? Auf wessen Posteingang führen Verzögerungen zurück?

## Durchgerechnetes Beispiel

Die Entlassungen einer Station brauchen jeden Morgen eine fachärztliche Durchsicht. Der Facharzt verbringt 90 Min./Tag damit, über Systeme verstreute Informationen zusammenzustellen; Durchsichten enden erst um 14:00 Uhr, und 6 Entlassungen/Tag werden zu spät fertig für diesen Tag — jede kostet einen vermeidbaren Bettentag.

Ein Entlassungszusammenfassungs-Dashboard (Laborwerte, Medikamente, Hinweise in einer Ansicht) kürzt die Zusammenstellung auf 20 Minuten; Durchsichten enden um 11:30 Uhr:

```
Vermiedene Bettentage    = 4 der 6 späten Entlassungen × 365 ≈ 1.460 Bettentage/Jahr
Nachgelagertes Entstauen: 2 Entlassungskoordinatoren + Apotheke + Transport,
                          zuvor jeden Nachmittag erst untätig, dann überlastet —
                          ~3 Personalstunden/Tag blockierte Zeit freigesetzt
                          ≈ 1.100 Std./Jahr
```

Die eigenen 70 Minuten des Facharztes sind der *kleinste* Teil des Werts — genau das ist der Punkt dieser Kennzahl. Die Bettentage nach Mechanismus bewerten (siehe [eingesparte Bettentage](../eingesparte-bettentage/)) und die Personalstunden als Kapazität.

## Bezug zur Softwareentwicklung

Das ist Code-Review, Architekturfreigabe und der Posteingang des Staff Engineers. Wenn fünf Entwickler einen Tag auf die eine Person warten, die ein Design genehmigen kann, sind die Kosten fünf Entwicklertage plus ein Tag [Verzögerungskosten](../verzögerungskosten/) auf die Arbeit selbst — nicht eine Reviewer-Stunde. Tooling, das die Aufgabe der steuernden Rolle verdichtet (besserer Review-Kontext, automatisierte Vorprüfungen, Dashboards, die zusammenstellen, was der Genehmiger braucht), kauft Systemdurchsatz, keine individuelle Bequemlichkeit. Abhol-/Wartezeit am Engpass messen (siehe [Flow-Metriken](../flow-metriken/)) — das ist das Software-Äquivalent der 14:00-Uhr-Entlassungsklippe.

## Fallstricke

- **Einen Nicht-Engpass optimieren**: wunderschönes Tooling für eine Rolle, hinter der sich nichts staut, erzeugt nahezu keinen Systemwert.
- **Engpass-Wanderung**: den Facharzt entstauen, und der Engpass wandert (zur Apotheke, zum Transport) — den *nächsten* Engpass modellieren, bevor volle Durchsatzgewinne beansprucht werden.
- **Nachgelagerte Stunden als Bargeld zählen**: die Freisetzung blockierter Zeit ist Kapazität, unterliegt dem üblichen [Wiedereinsatz-Test](../zahlungswirksame-vs-nicht-zahlungswirksame-einsparungen/).

## Quellen

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
