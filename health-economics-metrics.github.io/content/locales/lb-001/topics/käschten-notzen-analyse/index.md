# Käschten-Notzen-Analyse (CBA)

D'CBA bewäert souwuel Käschten *wéi och* Outcomes a Geld. Et ass deen eenzegen Analysetyp, deen „ass dat iwwerhaapt wäert ze maachen?" beäntwere kann — net nëmmen „wéi eng Optioun ass am beschten?" — well monetiséiert Notzen direkt géint Käschte verglach kënne ginn.

## Firwat et wichteg ass

D'CBA ass de Standard vum **Green Book** vum briteschen HM Treasury fir all Bewäertung vun ëffentlechen Ausgaben, och Gesondheet, wann Outcomes monetiséiert kënne ginn. Wou [CEA](../käschte-effektivitéits-analyse/)/[CUA](../käschte-notzwäert-analyse/) bei „Käschte pro Eenheet Gesondheet" ophalen, bewäert d'CBA d'Gesondheet selwer (QALY × Schwellewäert) an alles anert — Zäit, Rees, Kuelestoff — a mellt eng Nettozuel. All voll NHS-Digital-Business-Case enthält en CBA-geformten ökonomesche Fall.

## D'Mathematik

```
NPV (Netto-Present-Social-Value) = Σ_t [ (Notzen_t − Käschten_t) / (1 + r)^t ]
BCR (Notzen-Käschte-Verhältnis)  = PV(Notzen) / PV(Käschten)

Adoptéieren, wann NPV > 0 (äquivalent BCR > 1); no NPV rangéieren, net no BCR.
r = 3,5 % (Green-Book-Sazz fir gesellschaftlech Zäitpräferenz)
```

Gesondheetseffekter kënne monetiséiert als QALYs × λ eragoen (kuckt [Zuelungsbereetschaftsschwellen](../zuelungsbereetschaft-schwellewäerter/)). D'Green Book mandatéiert och **Optimismus-Bias-Ajustéierungen** — Käschteschätzunge ophiewen an Notzen em evidenzbaséiert Prozentsätz kierzen, well Bewäertunge systematesch rosa sinn.

## Berechent Beispill

E E-Referral-System, 5-Joer-Horizont, 3,5 % Diskont:

```
Käschten:  Bau 1,2 Mio. £ (Joer 0), Betrib 300k £/Joer (Joer 1–5)
Notzen:    Admin-Ersparnisser 250k £/Joer, vermeid duebel Diagnostik 280k £/Joer,
           agespuert Patientenzäit 40.000 Stonnen/Joer × 15 £ = 600k £/Joer → 1.130k £/Joer

PV Käschten = 1.200k + 300k × 4,515 (Annuitéitsfaktor) = 2.555k £
PV Notzen   = 1.130k × 4,515                            = 5.102k £

NPV = 5.102 − 2.555 = +2.547k £     BCR = 2,0
```

Green-Book-Optimismus-Bias ugewannt (soe mir +40 % op d'Baukäschten, −20 % op d'Notzen): PV Käschten ≈ 3.035k £, PV Notzen ≈ 4.082k £, NPV ≈ **+1.047k £** — nach ëmmer positiv, wat de Punkt vun der Ajustéierung ass: Fäll sollen hiren eegenen Optimismus iwwerliewen.

## Bezuch zur Softwareentwécklung

Engineering-Business-Cases si informell CBAs. D'Green-Book-Upgrades, déi et wäert sinn ze klauen:

- **Optimismus-Bias als Standard-Opschlag** — Ingenieure ënnerschätzen d'Migratiounskäschten esou zouverlässeg wéi Ministèren d'Infrastrukturkäschte ënnerschätzen; e festgeluechten Opschlag uwenden amplaz ze tun, wéi wann et dës Kéier anescht wier.
- **De dominanten Notzen éierlech monetiséieren oder guer net** — Patienten-/Notzerzäit gëtt zu verdeedegbare Sazzen monetiséiert; „Markewäert" net.
- **NPV rangéiert, BCR net**: e klenge Projet mat BCR 5 kann manner wichteg sinn wéi e grousse mat BCR 1,6.

## Falen

- **Dat Net-Monetiséierbaart monetiséieren**, fir Notzen opzeblosen (Moral, „strategesch Ausriichtung") — dës qualitativ halen, no [Käschte-Konsequenz-Analyse](../käschte-konsequenz-analyse/).
- **Transferen als Notzen zielen**: Geld, dat tëscht ëffentleche Kierperschafte wandert, gëtt bei der gesellschaftlecher [Perspektiv](../analyseperspektiv/) netto null.
- **Kee Kontrafaktum**: Notzen ginn géint d'Do-Minimum-Optioun gemoss, net géint null.

## Quellen

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
