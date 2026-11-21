# Inkrementellt Käschte-Effektivitéitsverhältnis (ICER)

Den ICER sinn déi zousätzlech Käschte pro zousätzlech Eenheet Gesondheetseffekt, wann een eng Optioun iwwer déi nächstbescht Alternativ wielt. Et ass déi Schlagzeil-Zuel vun der Gesondheetstechnologie-Bewäertung. (Wann d'Effekt-Eenheet QALYs sinn, gëtt et och inkrementellt Käschte-Notzwäert-Verhältnis genannt, ICUR.)

## Firwat et wichteg ass

Gesondheetssystemer evaluéieren ni eng Technologie isoléiert — ëmmer *inkrementell*, géint dat, wat soss gemaach géif. NICE vergläicht den ICER vun enger Technologie mat senger **20.000–30.000 £ pro QALY**-Schwell; den US-ICER-Institut mellt iwwer 50.000–200.000 $/QALY; Kanada schafft mat ongeféier 50.000 CAD$/QALY. Ob däi Produkt fir e nationale Gesondheetsdingscht „et wäert ass", ass formell, ob säin ICER déi lokal Schwell erfëllt. Kuckt [Zuelungsbereetschaftsschwellen](../zuelungsbereetschaft-schwellewäerter/).

## D'Mathematik

```
ICER = (Käschten_nei − Käschten_Komparator) / (Effekt_nei − Effekt_Komparator)
     = ΔC / ΔE
```

Interpretatiounsreegelen:

- ΔC < 0, ΔE > 0: nei Optioun **dominéiert** — méi bëlleg a besser; kee Verhältnis néideg.
- ΔC > 0, ΔE > 0: ICER berechnen, mat der Schwell λ vergläichen; adoptéieren, wann ICER < λ.
- ΔC > 0, ΔE < 0: nei Optioun ass dominéiert — refuséieren.
- Verhältnisser behuele sech schlecht no bei ΔE = 0 — [Nettomonetären Notzen](../nettomonetären-notzen/) fir d'Rangéierung bevorzugen.

De Komparator muss déi *nächstbescht net-dominéiert Optioun* sinn, net „näischt maachen" — kuckt [Dominanz an Effizienzfrontière](../dominanz-an-effizienzfrontière/).

## Berechent Beispill

E Remote-Monitoring-Service fir Häerzschwächt-Patienten, pro 1.000 Patienten/Joer, géint üblech Betreiung:

```
Käschten: Service 900.000 £; vermeid Admissiounen spueren 600.000 £
          ΔC = 900.000 − 600.000 = 300.000 £
Effekter: méi fréi Interventioun gewënnt 25 QALYs
          ΔE = 25

ICER = 300.000 / 25 = 12.000 £ pro QALY
```

12.000 £/QALY ass bequem ënner dem NICE seng 20.000-£-Schwell — e staarke Fall. Bemierkt, wéi d'*Netto*-Käschte spillen: ouni den Offset vu 600.000 £ wier den ICER 36.000 £/QALY an de Fall géif wahrscheinlech feelen. Cost-Offsets an hir Evidenzqualitéit si, wou dës Analysen gewonn oder verluer ginn (kuckt [vermeid nodeeleg Käschten](../vermeid-nodeeleg-käschten/)).

## Bezuch zur Softwareentwécklung

D'ICER-Disziplin iwwerdréit sech komplett op Engineering-Entscheedungen:

```
(Käschte vun Optioun B − Käschte vun Optioun A) / (Outcome B − Outcome A)
```

— inkrementell Käschte pro zousätzlechen Deploy, pro agespuerter Ingenieur-Stonn, pro vermeidenen Incident — ëmmer géint déi nächstbescht Alternativ, net géint Näischt-Maachen. Déi zwou Gewunnechten, déi et wäert sinn ze klauen: (1) *de Komparator explizit nennen*; déi meescht Tool-ROI-Behaaptungen vergläiche geheim mat engem Strohmann; (2) *d'Käschte als éischt netto rechnen* — en Tool, dat 100k £ kascht, awer 80k £ vun bestehende Ausgaben verdrängt, huet ΔC = 20k £.

## Falen

- **E ICER iwwer Währungen ouni expliziten Ëmrechnungsschrëtt vergläichen**: en ICER, deen an der Währung vun engem Land berechent gouf, muss mat enger uginner Method ëmgerechent ginn, ier en mat der Schwell vun engem anere Land vergläicht gëtt — kuckt [ICER-Verglach iwwer Währungen](../icer-verglach-iwwer-währungen/), firwat d'Wiel vum Ëmrechnungsfaktor (Kafkraaftparitéit vs. Maartwiesselkurs) selwer d'Adoptiounsentscheedung ëmdréine kann.
- **Komparator-Gaming**: géint eng iwwerhollt oder kënschtlech schlecht Baseline vergläichen bléist ΔE op a schmeechelt dem ICER.
- **Duerchschnëtter amplaz Inkremente**: Käschte pro QALY vun engem ganze Programm sinn net den ICER vun der Erweiderung oder Adoptioun dovun.
- **Punktschätzung-Verehrung**: ICERs sinn Verhältnisser vun zwee onsécheren Ënnerscheeder; Onsécherheet iwwer [PSA a CEACs](../probabilistesch-sensitivitéitsanalyse/) mellen.
- **Negativ ICERs si zweedeiteg** (méi bëlleg-a-besser vs. méi deier-a-méi schlecht ginn dat selwecht Virzeechen) — ni en negativen ICER mellen, ouni ze soen, a wéi engem Quadrant en ass.

## Quellen

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
