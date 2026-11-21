# Opportunitéitskäschten

Opportunitéitskäschte sinn de Wäert vun der beschter Alternativ, op déi een verzicht, wann een eng Ressource engagéiert. An engem Gesondheetssystem mat fixem Budget heescht 1 Million £ fir eng Saach ausginn, datt 1 Million £ u Gesondheet iergendwou anescht *net* produzéiert gëtt.

## Firwat et wichteg ass

Opportunitéitskäschte sinn déi déifste Iddi an der Gesondheetsökonomie, an déi, déi Softwareingenieuren am dackste iwwersprangen. Gesondheetsbudgeten si a jidwerem Joer fix, also gëtt eng nei Technologie ni aus „zousätzlechem" Geld finanzéiert — si verdrängt eppes. D'Fro, déi e Zueler tatsächlech stellt, ass net „ass dat gutt?" mee „ass dat besser wéi dat, wat dat selwecht Geld aktuell kaaft?"

Dofir gëtt et Käschte-Effektivitéitsschwellen iwwerhaapt: d'Schwell ass eng Schätzung vun der Gesondheet, déi Geld um Rand vum aktuelle System kaaft. Kuckt [Zuelungsbereetschaftsschwellen](../zuelungsbereetschaft-schwellewäerter/).

## D'Mathematik

Et gëtt keng eenzeg Formel; Opportunitéitskäschte sinn eng Verglächsdisziplin:

```
Opportunitéitskäschte vum Wielen vun A = Wäert vun der beschter opgegebener Alternativ B
Nettogewënn vun A = Wäert(A) − Wäert(B)
```

De empiresche Benchmark: Claxton et al. (2015) hunn geschat, datt den NHS um Rand ongeféier **13.000 £** pro QALY produzéiert. Also mécht 13.000 £, déi fir eng Technologie ausginn ginn, déi manner wéi ee QALY produzéiert, d'Natioun *manner* gesond, och wann d'Technologie „funktionéiert".

## Berechent Beispill

Dem Transformatiounsbudget vun engem NHS-Trust kann genau eng vun dësen zwou Optiounen finanzéieren:

- **Optioun A**: E-Rostering-Software — spuert 400.000 £/Joer u Agentur-Personalausgaben.
- **Optioun B**: Entloossungskoordinatiouns-Software — spuert 2.000 Bettdeeg/Joer. Bei Grenzkäschte vun ongeféier 150 £ pro tatsächlech fräigesate Bettdag sinn dat 300.000 £/Joer, plus méi fréi Behandlung fir waardend Patienten.

A ze finanzéieren heescht, B opzeginn. D'Opportunitéitskäschte vun A si B seng 300.000 £ + Patientenotzen; de *Netto*-Fall fir A ass nëmmen den Ënnerscheed, net dem A seng Schlagzeil-400.000 £. All Business Case, deen en Virschlag mat „näischt maachen" amplaz mat der beschter Alternativ vergläicht, iwwerschätzt säi Wäert.

## Bezuch zur Softwareentwécklung

Engineering-Kapazitéit ass och e fixe Budget — Roadmap-Slots, keng Pond. E Plattform-Team, dat Tool A finanzéiert, dat Ingenieur-Stonnen zu 500 £/Stonn spuert, wann Tool B dat selwecht zu 200 £/Stonn liwwert, zerstéiert Kapazitéit, genau wéi e Gesondheetssystem, dat en 40.000-£/QALY-Medikament finanzéiert, 13.000-£/QALY-Betreiung verdrängt. D'Disziplin iwwerdréit sech direkt:

- Ëmmer de Komparator nennen („versus wat?").
- Ingenieurszäit bewäerten no deem, wat se soss produzéiere géif, net nëmmen no Gehalt.
- „Mir hunn nach Budget iwwreg" als Ufank vun der Analyse behandelen, net als Enn.

## Falen

- **Géint näischt vergläichen.** De korrekte Komparator ass déi nächstbescht Notzung vum Geld, déi selten „näischt maachen" ass.
- **Unhuelen, gespuert Zäit hätt null Opportunitéitskäschten.** Gespuert Zäit ass nëmme wäertvoll, wann se op eppes Wäertvolls ëmverdeelt gëtt — kuckt [cash-fräisetzend vs. net cash-fräisetzend Ersparnisser](../cash-fräisetzend-vs-net-cash-fräisetzend-ersparnisser/).
- **Verdrängung ignoréieren.** „D'Budget wäert sech upassen" ass an engem nationale Gesondheetsdingscht bannent engem Joer bal ni wouer.
- **Ignoréieren, wéi eng Method eng verdrängt Ressource bewäert.** Speziell fir verluer Produktivitéit — duerch Krankheet, Behënnerung oder en fortgaangene Mataarbechter — kuckt [Human-Capital-Usaz vs. Friction-Cost-Method](../human-capital-usaz-vs-friction-cost-method/), d'produktivitätskäschtespezifesch Versioun vun dëser Iddi.

## Quellen

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/opportunity-cost/>
