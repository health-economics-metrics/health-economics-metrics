# Gesamtbesëtzkäschten (Total Cost of Ownership, TCO)

TCO sinn déi voll Käschte vun engem System iwwer säi Liewen: Unschaffung oder Bau, Integratioun, Betrib, Maintenance, Support, Training an Ofbau. Déi onbequem Basis: **Maintenance ass 50–80 % vun der Software-TCO** — ongeféier dräi Véirel vun de Liewensdauerkäschte falen *nom* dem Launch un.

## Firwat et wichteg ass

D'Gesondheetstechnologie-Bewäertung huet scho laang geléiert, datt de Präis vun engem Medikament net seng Käschte sinn — Verabreichung, Iwwerwaachung a Gestioun vun Niewewierkungen gehéieren all an de Modell. Software-Business-Cases, déi nëmmen d'Bau- oder Lizenzkäschten zielen, widderhuelen de naive Medikamentepräis-Feeler a ënnerschätzen systematesch d'Käschtesäit vun all [ICER](../inkrementellt-käschte-effektivitéitsverhältnis/) a [Budgetimpakt](../budgetimpakt-analyse/), déi si fidderen. Fir d'NHS-Beschaffung mécht d'TCO-Disziplin d'Käschte-Effektivitéits-Behaaptung vun engem digitale Produit éierlech — an do verléieren dach bëlleg ausgesinn Optiounen.

## D'Mathematik

```
TCO = Ufanksköschten (Bau/Lizenz + Integratioun + Datemigratioun + Training)
    + Σ_t [Betrib + Maintenance + Support + Infrastruktur + Upgrades
           + Compliance/Assurance]_t / (1 + r)^t
    + Ofbaukäschten (Exit, Dateextraktioun, Parallelbetrib)

Horizont: 3–5 Joer kommerziell, Systemliewensdauer fir klinesch Infrastruktur
r: 3,5 % ëffentleche Secteur (Green Book), 8–12 % kommerziell
Benchmarks: jäerlech Maintenance ≈ 15–20 % vun de Baukäschten; ~78 % vun der
Liewensdauer-TCO no dem Launch; Ofbau ignoréieren a Vendor-Lock-in preist sech selwer.
```

## Berechent Beispill

Zwou Optioune fir en E-Observatiounssystem, 5-Joer-Horizont:

```
                          Vendor-SaaS     Interne Bau
Joer 0 (Lizenz/Bau)       250.000 £       900.000 £
Integratioun + Training   180.000 £       150.000 £
Jäerleche Betrib (J. 1–5) 120.000 £/Joer  190.000 £/Joer  (Hosting + 1,5 VZÄ Maint.)
Exit/Ofbau                 60.000 £        30.000 £

Undiskontéiert TCO      1.090.000 £     2.030.000 £
```

D'Engineering-Schätzung vun der Bau-Optioun (900.000 £) war just 44 % vun hirer richteger TCO — a Bauschätzunge selwer iwwerschreiden typesch ëm 30–40 % (kuckt [Selwer bauen oder kafen](../selwer-bauen-oder-kafen/)). Ausser déi interne Optioun liwwert däitlech aner *Outcomes*, gëllt d'Logik vun der [Käschte-Minimiséierung](../käschte-minimiséierungs-analyse/), a SaaS gewënnt ëm ~940.000 £.

## Bezuch zur Softwareentwécklung

Ingenieuren ënnergewichten d'Maintenance-Daten vun hirem eegene Feld, wa si fir Selwerbauen plädéieren: d'Regel vu 15–20 % vun de Baukäschten pro Joer u Maintenance heescht, datt all System vun 1 Mio. £ roueg 150.000–200.000 £/Joer vun zukünfteger Kapazitéit bënnt — eng Verflichtung, déi op déiselwecht mental Bilanz gehéiert wéi [technesch Schold](../technesch-schold/). TCO ass och d'Käschtenhälft vun all Metrik an dësem Repo: Käschte pro Deployment, [Cloud-Unit-Economics](../cloud-unit-economics/) an d'Nenner-Disziplin, déi d'HTA de Medikamentesponsore opzwéngt. Wann de Präis vun Ärem Produit a Fro gestallt gëtt, ass en TCO-Verglach mat de richtege Betribskäschte vum Amtsinhaber meeschtens dee stäerkste Reframe. Eng méijoreg TCO-Zuel wéi déi uewen ass eng Zomm vu villen Käschtenzeilen iwwer d'Zäit — kuckt [Währungssécheren Käschte-Rollup](../währungssécheren-käschte-rollup/), firwat dës Zomm exakt-dezimal amplaz Gleitkomma soll sinn, soubal e Modell bis op de Rapp stëmme muss, an [Exact-Cents-Käschteverdeelung](../exact-cents-käschteverdeelung/), fir en TCO-Total ouni Rappe-Verloscht op Käschtestellen opzedeelen.

## Falen

- **Verankerung u Launch-Käschten**: Optiounen bei de Joer-0-Käschte vergläichen, wann d'Rangfolleg bis Joer 3 ëmdréit.
- **Fehlschluss vun der fräier interner Aarbecht**: interne Maintenance mat null bewäert, well „d'Team schonn bezuelt ass" — kuckt [Opportunitéitskäschten](../opportunitéitskäschten/).
- **Exit-Käschte ignoréieren**: Dateausgang, Vertragskënnegung a Parallelbetrib si wou „bëlleg" SaaS deier gëtt.
- **Verstéiss géint de selwechten Horizont**: eng 3-Joer-SaaS-TCO géint eng 10-Joer-Bau-Amortisatioun vergläichen (kuckt [Zäithorizont](../zäithorizont/)).

## Quellen

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
