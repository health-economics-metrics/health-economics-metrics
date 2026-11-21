# Zäithorizont

Den Zäithorizont ass d'Period, iwwer déi eng Analyse Käschten an Effekter zielt. Hie muss laang genuch sinn, fir all bedeitend Ënnerscheeder tëscht de vergléchenen Optiounen z'erfaassen.

## Firwat et wichteg ass

Wielt een e kuerzen Horizont, da verpasst een spéit Notzen (Präventioun) a spéit Käschten (Maintenance). Wielt een en iwwerlangen Horizont, da gëtt alles an Onsécherheet erdrénkt. D'Gesondheetstechnologie-Bewäertung benotzt dacks en **Liewensdauer**-Horizont fir Behandlungen mat Mortalitéitseffekter; d'[Budgetimpakt-Analyse](../budgetimpakt-analyse/) benotzt bewosst en kuerzen **1–5-Joer**-Horizont, well hir Fro Bezuelbarkeet ass, net Wäert. Den Horizont ass eng deklaréiert Modelléierungsentscheedung, a net passend Horizonter si e klassesche Wee, e Verglach ze manipuléieren.

## D'Mathematik

Den Horizont ass d'Obergrenz vun der Summatioun an all Evaluatioun:

```
Netto-Gegewaertswäert = Σ (t = 0 … T) [ (Notzen_t − Käschten_t) / (1 + r)^t ]

T = Zäithorizont (Joer)
r = Diskontsaz (kuckt discounting-and-time-preference.md)
```

Resultater sollten mat dem uginnenen Horizont gemellt ginn, an ideal bei verschiddenen Horizonter gewisen.

## Berechent Beispill

E System fir elektronescht Verschreiwen kascht 2 Millioune £ an der Aféierung a 200.000 £/Joer am Betrib. Et verhënnert Medikamentefeeler am Wäert vu 600.000 £/Joer (Behandlungskäschte vum vermeidene Schued).

Nettonotzen pro Horizont (undiskontéiert, fir d'Kloerheet):

```
Horizont 1 Joer:   −2.000.000 − 200.000 + 600.000  = −1.600.000 £
Horizont 3 Joer:   −2.000.000 + 3 × 400.000        = −800.000 £
Horizont 5 Joer:   −2.000.000 + 5 × 400.000        =  0 £
Horizont 10 Joer:  −2.000.000 + 10 × 400.000       = +2.000.000 £
```

De System „versetzt" bei all Horizont ënner 5 Joer a „geléngt" bei 10. Keen ass déi richteg Äntwert; de éierleche Bericht gëtt de Break-even-Punkt un a begrënnt den Horizont duerch d'Liewensdauer vum System (wéi laang bis zum Ersatz?).

## Bezuch zur Softwareentwécklung

- **Tool-Evaluatiounen, déi iwwer ee Sprint gemooss ginn**, verpassen systematesch den Aarbechtskurve-Dip (Käschten am Viraus) a Langzäit-Maintenance (Käschten hannendrun). KI-Coding-Assistent-Piloten, déi an der Woch 2 gemooss ginn, erfaasse Spëtzen-Neiheet, net de stationäre Zoustand.
- **Vertragslängt ≠ Notzenhorizont.** E 1-Joer-SaaS-Vertrag ka trotzdem iwwer 5 Joer bewäert ginn, wann ee realistesch eng Verlängerung erwaart — awer dat soen.
- **Legacy-Ersatz-Cases** solle bis zum glaubwürdege Liewensenn vum ale System lafen, net bis zu enger arbiträrer ronner Zuel.

## Falen

- **Horizont-Shopping**: dee Horizont wielen, deen Är Optioun gewanne léisst. Den Horizont virun der Berechnung vun de Resultater pre-registréieren.
- **Ënnerschiddlech Horizonter fir ënnerschiddlech Optiounen** am selwechte Verglach.
- **Liewensdauer-Horizonter ouni Diskontéierung oder Onsécherheetsanalyse** — Joer-30-Notzen zum Nennwäert si Fiktioun. Laang Horizonter mat [Sensitivitéitsanalyse](../sensitivitéitsanalyse/) kombinéieren.

## Quellen

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
