# EQ-5D

EQ-5D yw holiadur safonol grŵp EuroQol ar gyfer mesur ansawdd bywyd sy'n gysylltiedig ag iechyd. Dyma'r offeryn sy'n cynhyrchu'r pwysau defnyddioldeb sydd y tu mewn i'r rhan fwyaf o gyfrifiadau [QALY](../quality-adjusted-life-year/) — mae achos cyfeirio NICE yn ei enwi fel y mesur a ffefrir ar gyfer oedolion.

## Pam mae'n bwysig

Mae angen defnyddioldebau o offeryn dilys ar unrhyw gynnyrch iechyd digidol sydd am hawlio QALYs, ac EQ-5D yw'r diofyn yn y DU ac mewn llawer o Ewrop. Mae'n ddigon byr i'w blannu mewn ap (5 cwestiwn + graddfa weledol), sy'n golygu y gall cynhyrchion meddalwedd gasglu data canlyniad o safon HTA fel sgil-effaith i ddefnydd arferol — mantais strwythurol dros gyffuriau, sydd angen astudiaethau pwrpasol.

## Y mathemateg

Mae EQ-5D-5L yn gofyn un cwestiwn ym mhob un o **5 dimensiwn** — symudedd, hunanofal, gweithgareddau arferol, poen/anghysur, gorbryder/iselder — pob un wedi'i ateb ar **5 lefel** (dim problemau … problemau eithafol), ynghyd â graddfa analog weledol 0–100 (EQ VAS).

```
Cyflwr iechyd = proffil 5 digid, e.e. "21221"
Mynegai defnyddioldeb = set_werth(proffil)

Mae'r set werthoedd yn benodol i wlad, wedi'i deillio o arolygon
cyfnewid-amser / dewis-arwahanol y cyhoedd cyffredinol. Angorion: 1 = iechyd
llawn, 0 = marw; mae cyflyrau gwaeth na marwolaeth yn negatif (gwaelod
set 3L y DU: −0.594).
```

Yna mae rhifyddeg QALY yn mynd rhagddi fel `hyd × defnyddioldeb`.

## Enghraifft wedi'i gweithio

Mae ap adsefydlu cyhyrysgerbydol yn mesur EQ-5D-5L wrth ymuno ac ar 6 mis i 1,000 o ddefnyddwyr sy'n cwblhau.

```
Defnyddioldeb cyfartalog ar y sylfaen: 0.62
Defnyddioldeb cyfartalog ar 6 mis:     0.71
Enillion parhaus (tybiedig) am 1 flwyddyn: (0.71 − 0.62) × 1.0 = 0.09 QALY fesul defnyddiwr
```

O gymharu â newid grŵp rheoli o 0.03 (adferiad naturiol), yr enillion priodoladwy yw 0.06 QALY/defnyddiwr. Wedi'i werthfawrogi ar £20,000–£30,000/QALY: **£1,200–£1,800 o werth iechyd fesul defnyddiwr sy'n cwblhau** — y ffigwr sy'n angori trafodaeth pris yr ap gyda thalwr. (Mae gwahaniaethau clinigol lleiaf-arwyddocaol i fynegai EQ-5D fel arfer yn yr amrediad 0.03–0.08, felly mae 0.06 yn gredadwy ond rhaid iddo glirio'r cymhariaeth grŵp rheoli; gweler [canlyniadau a adroddir gan gleifion](../patient-reported-outcomes/).)

## Y cysylltiad â pheirianneg feddalwedd

- **Offeryniwch ef.** Mae EQ-5D wrth gofrestru ac ar gyfnodau dilynol yn ychydig sgriniau o UI; y wobr yw tystiolaeth o safon HTA. Sicrhewch drwydded gan EuroQol (yn ofynnol, am ddim ar gyfer rhai defnyddiau).
- **Defnyddiwch y set werthoedd gywir** ar gyfer gwlad y defnydd — mae'r un atebion yn sgorio'n wahanol yn y DU o gymharu â'r Almaen a Japan.
- **Gwers ddylunio**: mae EQ-5D yn dangos sut mae arolwg safonol bach ynghyd â swyddogaeth sgorio gyhoeddedig yn cynhyrchu mynegai unigol cymharadwy. Dyna'r patrwm ar gyfer unrhyw fynegai profiad-datblygwr credadwy hefyd — offeryn safonol, pwysau cyhoeddedig, nid teimladau ad-hoc. Gweler [SPACE a DevEx](../space-and-devex/).

## Peryglon

- **Cymhariaeth cyn/ar ôl heb gymharydd** — mae atchweliad i'r cymedr ac adferiad naturiol yn chwyddo enillion naïf.
- **Rhagfarn goroesiad**: mesur dim ond defnyddwyr a arhosodd yn ymgysylltiedig (gweler [cadw a cholli defnyddwyr](../retention-and-churn/)).
- **Cymysgu fersiynau 3L a 5L neu setiau gwerthoedd** ar draws astudiaethau — rhifau sy'n wahanol yn systematig.
- **Effeithiau nenfwd** mewn poblogaethau a effeithiwyd yn ysgafn: mae llawer o ddefnyddwyr yn sgorio'n agos i 1.0 ar y sylfaen, gan adael dim lle i ddangos enillion.

## Ffynonellau

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
