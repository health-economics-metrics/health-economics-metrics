# Heiansaufnamquote (Readmission Rate)

D'30-Deeg-Heiansaufnamquote ass de Prozentsaz vun de Patienten, déi aus dem Spidol entlooss goufen, an déi bannent 30 Deeg als Noutfall zeréckkommen. Et ass déi kanonesch *Entloossungsqualitéits*-Metrik vum Gesondheetssystem — a si dréit direkt finanziell Strofen.

## Firwat et wichteg ass

Eng Heiansaufnam heescht, datt déi éischt Entloossung net gehalen huet: virzäiteg Entloossung, gescheitert Medikamenteniwwergab, kee Follow-up oder fehlend sozial Ënnerstëtzung. Zueler bestrofen et explizit — den US Hospital Readmissions Reduction Program kierzt bis zu 3 % vun de Medicare-Zuelunge vun engem Spidol; den NHS huet historesch vermeidbar 30-Deeg-Noutfall-Heiansaufnamen net bezuelt. Heiansaufnam-Vermeidung ass also eng vun de wéinege Notzenkategorien, déi *direkt* cash-relevant fir e Leeschtungserbringer ass, net nëmmen Kapazitéit.

## D'Mathematik

```
Heiansaufnamquote = Noutfall-Heiansaufnamen bannent 30 Deeg / Index-Entloossungen × 100

Risiko-standardiséiert Verglécher passen un de Case-Mix un; Strofprogrammer
vergläichen beobachtet géint erwaart fir ähnlech Spideeler.

Wäert vun der Vermeidung = vermeide Heiansaufnamen × (Käschte pro Heiansaufnam-
                           Openthalt + Strofexpositioun pro Heiansaufnam)
```

## Berechent Beispill

Eng App fir d'Entloossungsënnerstëtzung bei Häerzinsuffisenz (Symptomerfaassung, Gewiichtsalarmer, Medikamenteerënnerungen, Eskalatioun un d'Pfleeg): 2.000 Entloossungen/Joer, Basis-Heiansaufnamquote 18 %, Studie weist 14 % mat der App.

```
Vermeide Heiansaufnamen = 2.000 × (0,18 − 0,14) = 80/Joer
Käschte pro Heiansaufnam-Openthalt ≈ 3.500 £ → 280.000 £/Joer vermeide Behandlungskäschten
Plus Strof-/Net-Zuelungsexpositioun op dës Openthalter.
Appkäschten: 2.000 × 60 £ = 120.000 £/Joer

Netto ≈ +160.000 £/Joer, virun all QALY-Behaaptung fir vermeidener Verschlechterung.
```

D'Zuel, déi ze verdeedegen ass, ass den 4-Prozentpunkt-Effekt: hie muss aus engem kontrolléierte Verglach kommen, well Heiansaufnamquoten mam Case-Mix a mat der Joreszäit schwanken.

## Bezuch zur Softwareentwécklung

Heiansaufnam ass d'**Change-Failure-Rate** vum Gesondheetssystem (kuckt [DORA-Metriken](../dora-metriken/)): Aarbecht, déi „ausgeliwwert" gouf a bannent 30 Deeg zréckkoum. D'Analogien ginn déif — nei opgemaach Tickets a Regressiounsincidenter weisen op schlecht „Entloossungsqualitéit" (schwaach Verifikatioun, virzäiteg Zoumaachung, fehlend Iwwergabdokumentatioun); Strof-Stil-Comptabilitéit (dat fixéierend Team bezilt, net dat empfangend Team) verännert d'Verhalen; a béid Felder hunn déiselwecht Lektioun geléiert, datt de rauen Duerchsaz ze drécken (méi séier entloossen, méi séier auszeliwweren), ouni an d'Iwwergab ze investéieren, siichtbar Schlaangen just a onsiichtbar Nuarbecht ëmwandelt. Eng „30-Deeg-Reopen-Rate" gehéiert op all Team-Dashboard, dat d'Zyklus-Zäit feiert.

## Falen

- **Manipulatioun duerch Ëmbenennung**: Heiansaufnamen als Observatiounsopenthalter oder nei Krankheeten kodéiert; d'Definitioun auditéieren.
- **All-Ursaach vs. Verbonnen-Ursaach**: 30-Deeg-All-Ursaach enthält wierklech onverbonnen Eventer; Strofe benotzen normalerweis All-Ursaach, genau well „verbonnen" manipuléierbar ass.
- **Case-Mix-Blannheet**: e Spidol, dat méi krank, méi aarm Bevëlkerunge bedéngt, hëlt méi dacks erëm op aus Grënn, déi keng App fixéiert — virum Verglach risikoadjustéieren.

## Quellen

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, emergency readmissions statistics. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
