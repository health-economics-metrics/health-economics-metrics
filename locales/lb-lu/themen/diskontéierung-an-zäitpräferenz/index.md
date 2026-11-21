# Diskontéierung an Zäitpräferenz

D'Diskontéierung wandelt zukünfteg Käschten an Notzen a Barwäerter ëm, well en Notzen haut méi wäert ass wéi deeselwechten Notzen an fënnef Joer.

## Firwat et wichteg ass

All Gesondheetsökonomie-Bewäertung an all eescht Business Case aus dem ëffentleche Sektor diskontéiert méijäereg Stréim. D'Green Book vum briteschen HM Treasury mandatéiert e jäerleche gesellschaftleche Zäitpräferenzsaz vun 3,5 %; dem NICE säi Referenzfall diskontéiert souwuel Käschten wéi Gesondheetseffekter mat 3,5 % pro Joer (mat engem 1,5-%-Net-Referenzfall-Saz fir bal-heilend Therapien mat Notzen iwwer 30+ Joer). Wann däi Software-Business-Case „5 Mio. £ Ersparnis iwwer 10 Joer" behaapt, freet e Finanz-Reviewer direkt no der diskontéierter Zuel.

## D'Mathematik

Barwäert vun engem zukünftege Betrag:

```
PV = FV / (1 + r)^t

PV = Barwäert
FV = zukünftege Wäert am Joer t
r  = Diskontsaz (NICE/Green Book: 0,035)
t  = Joer vun haut un
```

Fir e konstante jäerleche Notzen B iwwer n Joer (eng Annuitéit):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Berechent Beispill

Deng Software spuert engem NHS-Trust 100.000 £ pro Joer fir 5 Joer, ufänkend ee Joer no Go-live.

Net diskontéierten Total: 500.000 £.

Diskontéiert mat 3,5 %:

```
Joer 1: 100.000 / 1,035^1 = 96.618 £
Joer 2: 100.000 / 1,035^2 = 93.351 £
Joer 3: 100.000 / 1,035^3 = 90.194 £
Joer 4: 100.000 / 1,035^4 = 87.144 £
Joer 5: 100.000 / 1,035^5 = 84.197 £

Total PV ≈ 451.505 £
```

D'éierlech Schlagzeil ass ongeféier 451.000 £, rëm 10 % manner wéi d'naiv Zomm. Elo gesaat, d'Liwwerung rutscht ëm ee Joer: all Term verréckelt sech ee Joer méi spéit, an de PV fält op ongeféier 436.000 £ — d'Diskontéierungssicht op [Verzögerungskäschten](../verzögerungskäschten/).

## Bezuch zur Softwareentwécklung

- **Tech-Debt-Ofbau a Plattform-Migratiounen** verspriechen Notzenstréim Joren eraus; diskontéier se, ier se mat Aarbecht vergläicht, déi sech dëst Quartal rentéiert.
- **Vir geluedene Käschten, hannescht geluedenen Notzen** ass déi Standardform vun enger Migratioun. Diskontéierung bestrooft dës Form, zu Recht: si bewäert den risikofräie Zäitwäert dovun, Kapazitéit elo ze engagéieren fir Wäert méi spéit.
- **„Ersparnisser am Joer 5"-Behaaptunge** verdéngen duebel Skepsis — si sinn souwuel staark diskontéiert wéi och héich onsécher (kuckt [Sensitivitéitsanalyse](../sensitivitéitsanalyse/)).

## Falen

- **Käschten diskontéieren, awer net Notzen** (oder ëmgekéiert) — de Referenzfall diskontéiert béid mam selwechte Saz.
- **E kommerzielle Saz (8–12 %) an engem Ëffentleche-Sektor-Fall benotzen**, oder 3,5 % an engem venture-finanzéierten. De Saz un den Entscheedungsdréier upassen.
- **Diskontéierung mat Inflatioun verwiesselen.** Diskontéierung gëllt fir *real* (inflatiounsbereenegt) Wäerter; net béides implizit maachen.

## Quellen

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
