# Dadansoddiad Cost-Canlyniad (CCA)

Mae CCA yn cyflwyno costau ochr yn ochr â **thabl datgyfansoddedig o'r holl ganlyniadau** — clinigol, gweithredol, profiadol — heb eu cywasgu'n un gymhareb neu sgôr. Mae'r penderfynwr yn pwyso'r cyfnewidiadau'n benodol.

## Pam mae'n bwysig

CCA yw fformat economaidd **a ffefrir** NICE ar gyfer y rhan fwyaf o dechnolegau iechyd digidol o dan y Fframwaith Safonau Tystiolaeth. Mae cynhyrchion digidol yn cynhyrchu effeithiau heterogenaidd (amser wedi'i arbed, boddhad, gostyngiad mewn peidio â mynychu, enillion clinigol bach) sy'n gwrthsefyll cyfuno gonest yn un ffigur QALY. Yn hytrach na gorfodi cyfansawdd brau, mae CCA yn dangos y llyfr cyfrifon llawn. Ar gyfer y rhan fwyaf o achosion busnes meddalwedd, dyma'r fformat mwyaf gonest a'r un mwyaf perswadiol, oherwydd gall pob rhanddeiliad ddod o hyd i'w res berthnasol ei hun i'r penderfyniad.

## Y mathemateg

Yn fwriadol, nid oes fformiwla gyfuno. Tabl yw'r allbwn:

```
                          Ymyriad        Cymharydd    Gwahaniaeth
Costau (blynyddol)        £X             £Y           ΔC
Canlyniad 1 (unedau naturiol)   …        …            Δ1
Canlyniad 2                …             …            Δ2
Canlyniadau ansoddol      wedi'u disgrifio, nid eu sgorio
```

Mae gan bob rhes ei hunedau ei hun. Rheolau: pob canlyniad wedi'i ragnodi (dim pigo-dethol ar ôl canlyniadau); yr un [persbectif](../analysis-perspective/) a'r un [gorwel](../time-horizon/) drwyddi draw; ansicrwydd fesul rhes.

## Enghraifft wedi'i gweithio

Platfform asesiad cyn llawdriniaeth digidol yn erbyn proses ar sail ffôn, y flwyddyn, un ymddiriedolaeth:

```
                                Digidol      Ffôn        Gwahaniaeth
Cost rhedeg                     £180,000     £95,000     +£85,000
Oriau nyrs ar asesiadau         6,200        11,800      −5,600 awr
Canslo llawdriniaeth ar y dydd  92           174         −82
Boddhad claf (CSAT)             4.5/5        3.9/5       +0.6
Asesiadau wedi'u colli/anghyflawn 1.2%       4.8%        −3.6 pp
```

Dim un sgôr — ond mae'n hawdd rhesymu am y penderfyniad: mae £85,000 yn prynu 5,600 awr-nyrs (≈ £15/awr, ymhell islaw unrhyw gost staffio), 82 o ganslo a osgowyd (pob un yn gwastraffu slot theatr sy'n werth ~£1,200), a phrofiad gwell. Gall pwyllgor hefyd weld yn union beth *nad* yw'n ei gael: dim effaith QALY na marwolaeth wedi'i hawlio.

## Cysylltiad â pheirianneg meddalwedd

Mae CCA yn fersiwn ffurfiol o'r cerdyn sgorio cytbwys y mae cynnig platfform da eisoes yn ei ddefnyddio: cost wrth ochr metrigau DORA, sgoriau DevEx, cyfrifon digwyddiadau — heb eu cyfuno. Y ddisgyblaeth economeg-iechyd i'w hychwanegu: **rhagnodwch y rhesi** (penderfynwch beth sy'n cyfrif cyn y peilot, fel na allwch ollwng yn dawel y metrig a aeth yn waeth), a **dangoswch resi anffafriol** — mae CCA sydd ond â newyddion da yn farchnata. Defnyddiwch CCA pan nad oes cyfansawdd amddiffynadwy, sydd, ar gyfer offer datblygwyr, bron bob amser yn wir.

## Peryglon

- **Canlyniadau wedi'u pigo-ddethol** — mae uniondeb y fformat yn dibynnu ar ragnodi ymlaen llaw.
- **Cyfuno slei**: mae codio lliw neu "sgoriau cyffredinol" yn ailgyflwyno'r pwysau mympwyol y mae CCA yn bodoli i'w osgoi.
- **Parlys penderfynu**: mae CCA angen penderfynwr sy'n barod i bwyso cyfnewidiadau; parwch ef ag argymhelliad a'r rhesymeg.

## Ffynonellau

- Fframwaith Safonau Tystiolaeth NICE ar gyfer technolegau iechyd digidol (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- Tablau safonau tystiolaeth ESF. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
