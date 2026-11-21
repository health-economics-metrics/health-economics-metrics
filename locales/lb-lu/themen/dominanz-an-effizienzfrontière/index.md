# Dominanz an Effizienzfrontière

Eng Optioun ass **dominéiert**, wann eng aner Optioun manner kascht *an* méi liwwert. D'**Effizienzfrontière** ass dat, wat iwwreg bleift, nodeems dominéiert Optiounen eliminéiert goufen: d'Mass vun de Choixen, wou méi ze kréien méi Bezuelen erfuerdert.

## Firwat et wichteg ass

Virun all Debatt iwwer Schwellen oder Budgeten eliminéiert d'Gesondheetstechnologie-Bewäertung als éischt Optiounen, déi ni een soll wielen. All Optioun op enger Käschte-vs.-Effekt-Ebene ze plotten an d'Frontière ze zéien ass eng Fënnef-Minutte-Übung, déi routinéiert d'Halschent vun enger Shortlist killt. Inkrementell Vergläicher ([ICERs](../inkrementellt-käschte-effektivitéitsverhältnis/)) ginn dann nëmmen *entlaanscht der Frontière* berechent, all Optioun géint déi nächstbëllegst net-dominéiert — ni géint „näischt maachen", wann et besser Zwëschenoptioune gëtt.

## D'Mathematik

```
Strikt Dominanz:    A dominéiert B, wann Käschten_A ≤ Käschten_B an Effekt_A ≥ Effekt_B
                    (mat mindestens enger strikter Ongläichheet)

Erweidert Dominanz: B gëtt ausgeschloss, wann e Mix aus A an C méi Effekt
                    pro Pond erreecht — detektéiert, wann ICERs falen, wann ee
                    d'Frontière erop geet. Gülteg Frontière-ICERs mussen eropgoen.
```

Prozedur: Optiounen no Effekt sortéieren; strikt dominéiert eliminéieren; paarweis ICERs tëscht Nopere berechnen; all Optioun eliminéieren, dem säin ICER dee vun der nächster méi effektiver Optioun iwwerschreit (erweidert Dominanz); widderhuelen, bis ICERs monoton eropgoen.

## Berechent Beispill

Véier Optiounen, fir verpasst Rendez-vousen ze reduzéieren (Effekt = recuperéiert Rendez-vousen/Joer):

```
Optioun            Käschten/Joer  Recuperéiert
Näischt maachen    0 £            0
SMS-Erënnerungen   20.000 £       2.000
Telefonuriff       120.000 £      2.200
SMS + KI-Triage    90.000 £       3.500
```

Telefonuriff si **strikt dominéiert** vun SMS + KI-Triage (kaschten méi, recuperéieren manner). Frontière: näischt → SMS → SMS + KI.

```
ICER(SMS vs. näischt)    = 20.000 / 2.000  = 10 £ pro recuperéierte Rendez-vous
ICER(SMS+KI vs. SMS)     = (90.000 − 20.000) / (3.500 − 2.000) = 46,67 £ pro Rendez-vous
```

Eropgoend ICERs → gülteg Frontière. Bei ~160 £ gespuert pro recuperéierte Spidols-Rendez-vous (kuckt [Net-erschéngen-Quote](../net-erschéngen-quote/)) ass et wäert, béid Frontière-Schrëtt ze goen; de Phone-Bank-Virschlag sollt ni bis bei de Comité kommen.

## Bezuch zur Softwareentwécklung

Bau dee selwechte Chart fir all Tooling-Entscheedung: Käschten pro Joer op enger Achs, gemoossenen Outcome (agespuert Stonnen, vermeid Incidenter, erméiglecht Deployments) op der anerer. Punkten uewen-lénks vun der Frontière ginn eliminéiert, ier iergendeen iwwer Budget streit. Dat rahmt d'Vendor-Auswiel vu Feature-Checklëscht-Debatten op „dir sidd dominéiert; d'Reunioun ass eriwwer" ëm. Et deckt och dat gängegt Enterprise-Muster op, déi deierst Optioun fir e marginale Gewënn ze kafen — nëmme legitim, wann de inkrementelle Präis pro inkrementell Eenheet ee ass, deen d'Organisatioun bewosst géif bezuelen.

## Falen

- **Alles mat der Baseline vergläichen** amplaz mat der nächster Optioun op der Frontière — dat schmeechelt deieren Optiounen, andeems et méi bëlleg bal-Äquivalenter verstoppt.
- **Ee-Dimensiounen-Effekt-Scores**, déi verstoppen, wat zielt; wa zwee Outcomes zielen, entweder se verdeedegbar kombinéieren (kuckt [Käschte-Notzwäert-Analyse](../käschte-notzwäert-analyse/)) oder zwou Frontièren weisen.
- **Onsécherheet vergiessen**: Optioune no bei der Frontière kënnen ënner [Sensitivitéitsanalyse](../sensitivitéitsanalyse/) d'Plaz wiesselen.

## Quellen

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
