# Cydymffurfiaeth a Dyfalbarhad

Mae cydymffurfiaeth (adherence) yn mesur pa mor agos y mae'r defnydd gwirioneddol yn cyfateb i'r defnydd a ragnodwyd (dwyster); mae dyfalbarhad (persistence) yn mesur pa mor hir y mae'r defnydd yn parhau cyn dod i ben (hyd amser). Mae fferylliaeth wedi safoni mesurau — **MPR** a **PDC**, gyda ≥80% yn far confensiynol "cydymffurfiol" — ac mae therapiwtigau digidol yn etifeddu'r cysyniadau a'r broblem fel ei gilydd: cydymffurfiaeth yw'r lluosydd rhwng effeithiolrwydd a gwerth a wireddir.

## Pam mae hyn yn bwysig

Mae talwyr eisoes yn dibynnu ar y ffigurau hyn: mae PDC ≥80% yn bwydo Sgoriau Seren Medicare UDA, sy'n symud refeniw talwyr gwirioneddol — mae cydymffurfiaeth yn seilwaith ariannol sy'n dwyn pwysau, nid yn fetrig meddal. Ar gyfer therapiwtigau digidol mae'r patrwm yn ailadrodd: mae data DiGA yn dangos cyfaint presgripsiynu cryf gyda chydymffurfiaeth gynaliadwy wan, a bydd prisio DTx sy'n seiliedig ar ganlyniadau (yn cyrraedd yr Almaen o 2026) yn talu ar sail canlyniadau wedi'u pyrth gan gydymffurfiaeth. Y diweddariad cysyniadol o ymchwil iechyd digidol: **ymgysylltiad effeithiol** — ymgysylltiad sy'n *ddigonol* i gyflawni'r canlyniad a fwriadwyd — a'i ganlyniad, y **dos effeithiol lleiaf**, a sefydlwyd yn empirig ar gyfer pob ymyriad yn hytrach na chymryd yn ganiataol mai "mwy" sydd orau.

## Y Fathemateg

```
MPR = Σ diwrnodau o gyflenwad a ddosbarthwyd / diwrnodau yn y cyfnod × 100   (gall fod dros 100%;
      yn gorbrisio drwy ail-lenwi cynnar)
PDC = diwrnodau wedi'u gorchuddio gan gyflenwad / diwrnodau yn y cyfnod × 100  (wedi'i gapio ar 100%;
      yr amcangyfrifydd ceidwadol, a ffefrir gan CMS)
Cydymffurfiaeth ddigidol = digwyddiadau defnydd gwirioneddol / digwyddiadau defnydd a ragnodwyd × 100
Dyfalbarhad             = diwrnodau o gychwyn hyd at ddod i ben
                          (adrodd % sy'n parhau ar N mis; dulliau goroesiad)

Pyrth gwerth: canlyniad a wireddir ≈ effeithiolrwydd × g(cydymffurfiaeth)
  lle g yw'r ffwythiant dos-ymateb; islaw'r dos effeithiol lleiaf,
  g ≈ 0 — costir yn cael ei dwyn, budd yn cael ei golli
```

## Enghraifft Waith

Cynnyrch CBT digidol ar gyfer anhunedd, a ragnodwyd fel 6 modiwl dros 6 wythnos; effeithiolrwydd treial 0.025 QALY ymhlith y rhai sy'n cwblhau ≥4 modiwl (y dos effeithiol lleiaf a sefydlwyd yn empirig):

```
1,000 o bresgripsiynau ar £250 → £250,000 o wariant talwr
Cwblhau modiwlau: ≥4 modiwl 38%; 1–3 modiwl 34%; dim modiwlau 28%

QALYs a wireddir = 1,000 × 0.38 × 0.025 = 9.5
Cost fesul QALY  = 250,000 / 9.5 ≈ £26,300 — ymylol yn ôl trothwyon NICE

Mae peirianneg cydymffurfiaeth (ailddylunio atgoffâu, byrhau sesiynau) yn codi
cwblhau ≥4-modiwl i 50%: 12.5 QALY → £20,000/QALY. Croesodd y cynnyrch
y trothwy ariannu heb newid cynnwys y therapi o gwbl.
```

O dan brisio perfformiad ar ffurf 2026, mae'r un newid yn symud *refeniw* yn uniongyrchol — mae peirianneg cydymffurfiaeth yn dod yn fap ffordd masnachol.

## Cysylltiad Peirianneg Feddalwedd

Mae dau eirfa'n cydgyfeirio ar un cysyniad: mae dadansoddeg meddalwedd ([actifadu](../activation-and-uptake/), [gludiogrwydd](../engagement-metrics/), [cadw](../retention-and-churn/)) a fferylliaeth glinigol (MPR, PDC, dyfalbarhad) fel ei gilydd yn mesur amlygiad i ymyriad — mapiwch ddigwyddiadau eich cynnyrch ar yr eirfa glinigol a gall talwyr ddarllen eich dangosfyrddau. Mae peirianneg yn berchen ar liferi cydymffurfiaeth: rhesymeg atgoffâu (mae pingiau dyddiol dwl yn hyfforddi diystyru; nid felly amseriad addasol), cost sesiwn (mae modiwl 20 munud yn cwblhau'n llai na thri modiwl 7 munud), a thelemetreg ffrithiant sy'n lleoli *ble* yn y protocol y mae defnyddwyr yn syrthio i ffwrdd. Offeryna ddos-ymateb o'r diwrnod cyntaf — mae'r dadansoddiad dos-effeithiol-lleiaf sy'n pyrth y model economaidd cyfan angen data defnydd wedi'i gysylltu â chanlyniad na all neb ond y cynnyrch ei gasglu.

## Peryglon

- **Cymysgu MPR/PDC**: mae MPR yn gorbrisio; nodwch pa amcangyfrifydd a ddefnyddir a defnyddiwch PDC ar gyfer unrhyw beth sy'n wynebu talwyr.
- **Cydymffurfio â'r fetrig, nid y therapi**: agoriadau'n cael eu cyfrif fel dosau (gweler [metrigau ymgysylltiad](../engagement-metrics/)).
- **Targedau ymgysylltiad "mwy sy'n well"** lle mae gan yr ymyriad ddos meidraidd — graddio yw llwyddiant, nid defnydd parhaus.
- **Honiadau effeithiolrwydd sy'n seiliedig ar oroeswyr**: mae canlyniadau ymhlith y rhai cydymffurfiol yn cynnwys effeithiau dethol (mae pobl gydymffurfiol yn wahanol); mae'r amcangyfrif achosol gonest angen hapddosbarthu neu addasu gofalus.

## Ffynonellau

- MPR yn erbyn PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., ymgysylltiad effeithiol. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- Canfyddiadau cydymffurfiaeth DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
