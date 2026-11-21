# Net-erschéngen-Quote (Did-Not-Attend, DNA)

D'DNA-Quote ass de Prozentsaz vun de gebuchten Rendez-vousen, wou de Patient weder erschéngt nach ofseet. De Kliniker, de Raum an de Slot si bezuelt; et geschitt näischt. Et ass déi reinst Verschwendungsmetrik an der Gesondheetsversuergung — an eng vun deenen, déi sech am beschte mat Software fixe loossen.

## Firwat et wichteg ass

NHS-England-Zuelen (2019): verpasst Hausdokter-Rendez-vousen iwwerschreide 15 Mio./Joer zu ~30 £ jidderee — iwwer **216 Mio. £/Joer** — an ambulant Spidols-DNAs lafen ~8 Mio./Joer (~6,4 % vun de Rendez-vousen) bei engem Duerchschnëtt vun ~**160 £** pro verpasste Slot. Well d'Grenzkäschte vun enger Erënnerung Cent sinn an dee recuperéierte Wäert e voll besate klinesche Slot ass, huet DNA-Reduktioun e puer vun de beschte ROI-Arithmetiken an der digitaler Gesondheet, dofir ware SMS-Erënnerungen, einfach Ëmbuchung a prädiktiv Iwwerbuchung ënner den éischte bewisene digitale Gesondheetserfolleger.

## D'Mathematik

```
DNA-Quote = DNAs / gebuchte Rendez-vousen × 100

Wäert vun der Reduktioun = Rendez-vousen × ΔDNA-Quote × Wäert pro recuperéierte Slot

Wäert pro recuperéierte Slot: de Slot gëtt nei opgefëllt (Aktivitéitswäert / Waardelëscht-
Reduktioun) oder net (Personalzäit deelweis nei notzbar) — de Mechanismus ass wichteg,
wéi bei bed-days-saved.md.
```

## Berechent Beispill

En ambulanten Departement: 200.000 Rendez-vousen/Joer, DNA-Quote 8 %. E Service mat Erënnerung plus Ëmbuchung (SMS mat Een-Tipp-Ëmbuchung, Transportinfo, zougänglech Formater) senkt d'DNAs op 5,5 %.

```
Recuperéiert Slots = 200.000 × 0,025 = 5.000/Joer
Aus der Waardelëscht nei opgefëllt zu ~160 £ duerchschnëttlechem ambulantem Wäert:
  5.000 × 160 £ = 800.000 £/Joer recuperéiert Aktivitéit
Servicekäschten: 200.000 × 0,40 £ = 80.000 £/Joer

Return ≈ 10:1, plus 5.000 Waardelëscht-Patienten méi fréi gesinn
(kuckt waiting-list-impact.md a referral-to-treatment.md).
```

D'Effektgréisst (2,5 Punkten) ass realistesch: Erënnerungs-RCTs weisen konsequent 25–40 % relativ DNA-Reduktioun.

## Bezuch zur Softwareentwécklung

- **Dat ass e Scheduling-Systemer-Problem**: Erënnerungen, Self-Service-Ëmbuchung, automatescht Waardelëscht-Backfill aus Annulatiounen a No-Show-Prädiktiounsmodeller, déi gezielt Duebelbuchung dreiwen. All ass gewéinlech Software-Engineering mat engem ongewéinlech scharfe ökonomesche Fall.
- **Dat Engineering-Analogon**: No-Shows bei reservéierter Kapazitéit — gebuchte-awer-idle CI-Slots, reservéiert Cloud-Kapazitéit, Reunioun-Raim, Interview-Panelen. D'Ökonomie iwwerdréit sech: e bëllegen automatiséierten Nudge (oder Auto-Release vun onbenotzte Reservatiounen) recuperéiert deier engagéiert Kapazitéit.
- **Virschau op Prädiktiounsethik**: No-Show-Modeller, déi op Participatiounsdaten trainéiert sinn, kodéieren Deprivatioun an Zougangsbarrièren; si ze benotzen, fir wahrscheinlech Net-Erschéngender *erofzepriorisieren*, verstäerkt Inequity, si ze benotzen, fir d'Participatioun ze *ënnerstëtzen* (Transporthëllef, Telefonalternativen), reduzéiert se. Kuckt [Reechwäit an Equity](../reechwäit-a-gerechtegkeet/).

## Falen

- **Annuléiert-a-nei-gebuchte Wäert duebel als recuperéiert zielen.**
- **Recuperéiert Slots bewäerten, déi net nei opgefëllt ginn** — e leere Slot mat geschécker Erënnerung ass nach ëmmer eidel.
- **DNA op null jagen**: déi lescht DNA-Punkten si Patienten, déi richteg Barrièren hunn; punitiv Usätz (Entloossung no N DNAs) senken d'Metrik, andeems se d'Patienten opginn.

## Quellen

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- DNA cost summaries. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
