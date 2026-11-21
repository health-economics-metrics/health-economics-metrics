# ICER-Verglach iwwer Währungen

E [ICER](../inkrementellt-käschte-effektivitéitsverhältnis/), deen an der Währung vun engem Land berechent gouf, mat der [Zuelungsbereetschaftsschwell](../zuelungsbereetschaft-schwellewäerter/) vun engem anere Land ze vergläichen — oder Käschtedaten, déi an enger multinationaler Studie gesammelt goufen, ze poolen — verlaangt e kloere, nopréifbare Währungsëmrechnungsschrëtt. Wann d'Ëmrechnungsmethod falsch ass, kann déiselwecht zugrondeliegend Evidenz eng Adoptiounsentscheedung ëmdréien, obwuel sech näischt un den klineschen oder Käschtedaten geännert huet.

## Firwat et wichteg ass

D'ISPOR-Methodeguidance fir multinational klinesch Studien (Willke et al., *Health Economics*, 1998) empfehlt, Ressourcekäschten mat **Kafkraaftparitéit (PPP)** ëmzerechnen — net mat Maartwiesselkursen — wann den echte ökonomesche Wäert vu Ressourcen tëscht Länner vergläicht gëtt, an Maart-Devisenkurse fir dat ze reservéieren, wat se tatsächlech sinn: d'Modelléierung vu realen grenziwwerschreidende Cash-Zuelungsflëss. Déi zwee ze vermëschen ass ee vun de heefegsten Methodefeeler an der multinationaler HTA, genee well béid fir een, deen d'Guidance net gelies huet, wéi „de Wiesselkurs" ausgesinn, an eng Tabellekalkulatioun hält een net dovun of, et falsch ze maachen.

## D'Mathematik

```
icer_a_lokaler_Währung = convert(icer_a_Quellwährung, conversion_factor)

conversion_factor soll sinn:
  PPP-Ëmrechnungsfaktor — fir den echten ökonomesche Wäert vu Ressourcen
                          tëscht Länner ze vergläichen (ISPOR-recommandéiert
                          fir multinational CEA)
  Maart-FX-Kurs         — nëmme fir tatsächlech grenziwwerschreidend Cash-Zuelungen

adoptéieren, wann icer_a_lokaler_Währung < lokal_Schwell
```

D'Entscheedungsreegel selwer ass déi gewéinlech [ICER-Schwellereegel](../zuelungsbereetschaft-schwellewäerter/) — `adoptéieren, wann ICER < λ` — d'Methodefro, déi dëst Thema behandelt, dréit sech ganz drëm, *wéi ee Ëmrechnungsfaktor* d'`icer_a_lokaler_Währung`-Zuel produzéiert, op déi dës Reegel ugewannt gëtt.

## Berechent Beispill

Den ICER vun engem Medikament aus enger US-Studie ass 45.000 $/QALY. E hypothetescht Importland setzt seng eege illustrativ Schwell op 34.000 £/QALY (eng hypothetesch landesspezifesch Zuel nëmme fir dëst Beispill — echt Schwellen variéieren no Land an änneren sech mat der Zäit, a musse ëmmer mat Quell a Datum ugi ginn).

**Mat engem PPP-Ëmrechnungsfaktor vun 0,72** (illustrativ, nëmme fir dëst Beispill): 45.000 $ × 0,72 = 32.400 £/QALY. 32.400 £ < 34.000 £ → **adoptéieren**.

**Mat engem Maartwiesselkurs vun 0,79** amplaz (illustrativ): 45.000 $ × 0,79 = 35.550 £/QALY. 35.550 £ > 34.000 £ → **refuséieren**.

Deeselwechten zugrondeliegende ICER vu 45.000 $/QALY produzéiert eng Adoptiounsentscheedung ënner PPP-Ëmrechnung an eng Refus-Entscheedung ënner Maart-FX-Ëmrechnung. Dat ass d'konkret Illustratioun, firwat d'ISPOR-Guidance d'Wiel vum Ëmrechnungsfaktor als methodologesch konsequent behandelt — keng Rundungsdetail, a näischt, wat een implizit an enger Tabellenformel loosse soll, déi kee duerchkontrolléiert.

## Bezuch zur Softwareentwécklung

Dat ass den Health-Economics-Spigel vun engem bekannten Engineering-Domän: i18n/l10n-Korrektheet bei Multi-Währungs-Präisser a kommerzieller Software, wou eng SaaS-Präisseit ni roueg e `$`-Betrag mat engem `£`-Präis vergläiche däerf. D'Typniveau-Garantie, déi e gutt gebaute `Money`-Typ gëtt — Verglächsmethoden, déi refuséieren, net passend Währungen ze vergläichen, an als éischt en expliziten Ëmrechnungsschrëtt erzwéngen — ass e direkt Software-Engineering-Parallel zum methodologesche Punkt hei: net ongewandelt Zuelen iwwer Währungen vergläichen, an den Ëmrechnungsschrëtt net implizit oder undokumentéiert loossen.

## Falen

- **Stëll Beträg a verschiddene Währunge vergläichen**: ad-hoc Tabellen-HTA-Aarbecht, déi eng Dollarzuel an eng Pondzuel subtrahéiert oder vergläicht ouni virdrun en Ëmrechnungsschrëtt — eng Bug-Klass, déi en echten währungsbewosste `Money`-Typ per Konstruktioun fänkt, amplaz se als stillen Feeler ze loossen.
- **Maartwiesselkurs mat PPP vermëschen**: dee heefegste multinational-HTA-Methodefeeler no ISPOR-Guidance — déi zwou Zuele kënnen däitlech ofwäichen an äntweren op verschidde Froen (echte ökonomesche Wäert vs. tatsächleche Cashflow).
- **De benotzte Wiesselkurs oder PPP-Index net datéieren**: béid beweege sech mat der Zäit, also muss all zitéierten Ëmrechnungsfaktor datéiert ginn, esou wéi dëse Repo seng aner Benchmark-Zuelen datéiert (Green-Book-Kuelestoffwäerter, Wäert vun enger vermeidener Doudesfall, asw.).

## Quellen

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
