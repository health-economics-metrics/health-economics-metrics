# Währungssécheren Käschte-Rollup

Vill Geldzeilen — monatlech Rechnungen, Käschte pro Site, méijäereg Budgetimpakt-Zuelen — mat gewéinleche binäre Gleitkomma-Zuelen (`f64`) ze summéieren, sammelt kleng Duerstellungsfeeler un, well déi meescht Dezimalbréch (1.234,56 $ zum Beispill) a binärer Gleitkomma net exakt duerstellbar sinn. All eenzele Feeler ass winzeg, awer e grousse Modell, deen Honnerte oder dausende Zeilen iwwer e puer Joer summéiert, kann em Bruchdeeler vun engem Cent ofdriften — an d'Drift hänkt vun der *Reiefolleg* of, an där d'Additioune geschéien, wat se net reproduzéierbar mécht. E Währungs-Rollup an exakter Dezimal- (oder Integer-Minor-Unit-)Arithmetik summéiert exakt, esou wéi Comptabilitéitssystemer an Duebelbuchhaltungs-Ledgeren sech op de Cent ofstëmme mussen.

## Firwat et wichteg ass

Dat ass eng gutt dokumentéiert, fundamental Klass vu Softwarebugs: dem Goldberg säi 1991-ACM-Computing-Surveys-Pabeier „What Every Computer Scientist Should Know About Floating-Point Arithmetic" ass d'Standardreferenz genau dofir, firwat binär Gleitkomma déi meescht Dezimal-Geldwäerter net exakt duerstelle kann, a firwat d'Summéiere vu villen dovun de Feeler verstäerkt. Gesondheetsökonomie- an NHS-Finanzmodeller summéieren routinéiert vill Joren a vill Käschtekategorien — [Total Cost of Ownership](../gesamtbesëtzkäschten/) a [Budgetimpakt-Analyse](../budgetimpakt-analyse/) aggregéieren allebéid grouss Zuele vun `f64`-Käschtezeilen iwwer méijäereg Horizonter. Wann e Modell sech op de Cent ofstëmme muss — en Audit, deen den Total vun Hand nei berechent, muss déi *identesch* Zuel kréien — muss d'Arithmetik selwer exakt-dezimal sinn, net Gleitkomma.

## D'Mathematik

```
Naive Rollup:              total = Σ f64(Zeil_i)         — reiefolleg-ofhängeg Drift
Währungssécheren Rollup:   total = Σ Decimal(Zeil_i)      — exakt, reproduzéierbar

Eng prozentual Ajustéierung uwenden (z. B. e Contingency-Puffer):
  ajustéiert = total × Multiplikator           — exakt Decimal-Resultat, kann
                                                  méi Dezimalstelle droen wéi de
                                                  Minor-Unit-Exponent vun der
                                                  Währung
  gerundet   = round(ajustéiert, Währungsexponent, Rundungsreegel)  — d'Rundungsreegel
                                                  (half-up vs. half-even/banker's
                                                  rounding) muss explizit uginn ginn
```

Bemierkt dat Zwee-Schrëtt-Disziplin: en exakte `Decimal`-Betrag mat engem Multiplikator ze multiplizéieren kann méi Dezimalstelle produzéieren, wéi d'Währung tatsächlech benotzt (zum Beispill dräi Dezimalstelle aus engem Betrag mat zwou Dezimalstelle mol engem Multiplikator mat zwou Dezimalstellen) — dës Zwëschepräzisioun gëtt *net* automatesch ewechgerundet; nëmmen en expliziten Rundungsschrëtt, mat angegebener Rundungsreegel, bréngt se erof op dem Währung säin tatsächleche Minor-Unit-Exponent.

## Berechent Beispill

Zwielef identesch monatlech Rechnunge vun 1.234,56 $ jidderee, a exakter Dezimalarithmetik summéiert: 1.234,56 $ × 12 = **14.814,72 $**, exakt. Dat kontrastéiert mam Summéiere vum `f64`-Literal `1234.56` zwielef Mol an IEEE-754-Duebelpräzisioun, wat je no Summatiounsreiefolleg em Bruchdeeler vun engem Cent ofdriften kann — eng reell, dokumentéiert Bug-Klass, kee Problem fir e Modell, dat op exakter Dezimal-`Money`-Arithmetik opgebaut ass.

Elo en Standard-Budgetimpakt-Contingency-Puffer vu 5 % (en 1,05×-Multiplikator) op dësen Total vu 14.814,72 $ uwenden: 14.814,72 $ × 1,05 = 15.555,456 $ — dräi Dezimalstellen, well d'Multiplikatioun exakt ass an net automatesch op dem Währung seng zwou Dezimalstelle gerundet gëtt. Dat explizit op 2 Dezimalstelle mat Banker-Rundung (half-even) ze runnen gëtt genau **15.555,46 $**.

## Bezuch zur Softwareentwécklung

Dat ass déi direkt, fundamental Lektioun hannert „Finanzsoftware benotzt `Decimal`, net `float`" — si verbënnt sech explizit mat dësem Repo sengem [Total-Cost-of-Ownership](../gesamtbesëtzkäschten/)- a [Budgetimpakt-Analyse](../budgetimpakt-analyse/)-Modul, déi allebéid aktuell einfach Gleitkomma-Käschte summéieren; d'Korrektheetsargument hei verlaangt net, dës Modeller direkt ze migréieren, awer et seet präzis, *wéini* e System sech op de Cent ofstëmme muss an dofir keng binär Gleitkomma fir seng Geldarithmetik benotze däerf. Kuckt och [Exact-Cents-Käschteverdeelung](../exact-cents-käschteverdeelung/) fir dat Begleitproblem, Totaler opzedeelen (amplaz ze summéieren), ouni Cent ze verléieren.

## Falen

- **Mëttel an der Kette op `float` konvertéieren**: e Geldwäert mëttels an enger Berechnung zu enger Gleitkommazuel erauszezéien (verschidde `Money`-Bibliothéike nennen dës Konversiounsmethod souguer „lossy" als explizit Warnung) wërft d'Exaktheetsgarantie fir all Berechnung no deem Punkt roueg ewech.
- **„Decimal ass ze lues, fir sech domat ze beschäftegen"**: exakt-dezimal Arithmetik als onnéidege Overhead ofzeweisen, wann Korrektheet an Auditéierbarkeet — net rau Duerchsaz — fir Finanzberichterstattung zielen.
- **E Contingency-Prozentsaz uwenden ouni d'Rundungsreegel unzeginn**: half-up géint half-even (Banker-Rundung) kann de leschte Cent änneren; d'Rundungskonventioun selwer muss eng angegebene, auditéierbar Wiel sinn — kuckt [Käschten-Notzen-Analyse](../käschten-notzen-analyse/) fir d'HM-Treasury-Green-Book-Guidance iwwer Contingency- an Optimismus-Bias-Ajustéierungen, genau déi Zort Zuel, op déi dëse Rundungsschrëtt ugewannt gëtt.

## Quellen

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` pattern.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimism-bias and contingency guidance for budget-impact modelling. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
