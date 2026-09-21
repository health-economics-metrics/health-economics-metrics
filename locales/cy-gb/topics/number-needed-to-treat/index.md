# Nifer sy'n Angenrheidiol i'w Trin (NNT)

NNT yw nifer y cleifion sy'n rhaid iddynt dderbyn ymyriad er mwyn i **un** claf ychwanegol elwa, dros gyfnod amser penodedig. Mae'n trosi gostyngiadau risg canrannol — sy'n gamarweiniol — yn unedau ymdrech-fesul-budd y gall unrhyw un resymu yn eu cylch.

## Pam mae hyn yn bwysig

Mae "Lleihau trawiadau ar y galon 25%!" yn swnio'n derfynol. Os yw'r risg sylfaenol yn 4% dros 5 mlynedd, mae'r gostyngiad absoliwt yn 1 pwynt canran, felly **rhaid i 100 o bobl gymryd y cyffur am 5 mlynedd er mwyn i 1 elwa** — ac mae'r 100 i gyd yn talu'r costau a'r sgil-effeithiau. NNT yw'r gwrthwenwyn i farchnata risg gymharol, a dyna pam mae meddygaeth seiliedig ar dystiolaeth yn arwain gydag ef. Statinau ar gyfer atal cynradd: NNT ≈ 50–100 dros 5 mlynedd fesul trawiad ar y galon a osgowyd. Mae ei ddrych, **NNH** (nifer sy'n angenrheidiol i niweidio), yn cyfrif faint a drinnir fesul person a niweidiwyd.

## Y Fathemateg

```
ARR = cyfradd digwyddiad rheoli − cyfradd digwyddiad triniaeth   (gostyngiad risg absoliwt)
NNT = 1 / ARR

NNH = 1 / (cyfradd niwed_triniaeth − cyfradd niwed_rheoli)

Pont economaidd:
cost fesul digwyddiad a atalwyd = NNT × cost fesul cwrs triniaeth
```

Nodwch bob amser y cyfnod amser a'r boblogaeth sylfaenol — mae NNT yn ddiystyr heb y ddau.

## Enghraifft Waith

Mae system rhagfynegi cwympiadau mewn ysbyty'n fflagio cleifion risg uchel ar gyfer ymyriad (synwyryddion gwely, adolygiad, goruchwyliaeth). Treial: mae cwympiadau ag anaf yn gostwng o 3.2% i 2.4% o dderbyniadau.

```
ARR = 0.8 pwynt canran → NNT = 1/0.008 = 125
   (rhaid i 125 o gleifion gael y bwndel ymyriad i atal 1 cwymp niweidiol)

Cost ymyriad ≈ £40/claf → cost fesul cwymp a atalwyd = 125 × 40 = £5,000
Cost cwymp niweidiol i glaf mewnol (arhosiad ychwanegol, delweddu, litigiaeth) ≈ £12,000
Net: mae atal yn talu ~2.4:1 — a'r enillion QALY ar ben hynny.
```

Sylwch sut mae NNT yn cadw'r honiad yn onest: mae "lleihau cwympiadau 25%" ac "atal un cwymp fesul 125 o gleifion a drinnir" yr un canlyniad, yn wahanol berswadiol.

## Cysylltiad Peirianneg Feddalwedd

NNT yw'r uned gywir ar gyfer unrhyw borth neu wiriad sy'n gweithredu ar lawer o eitemau er mwyn dal ychydig: **"nifer y PRs sy'n rhaid iddynt basio drwy'r porth adolygu AI i ddal un diffyg sy'n mynd i gynhyrchu."** Os yw'r porth yn adolygu 400 PR fesul dalfa go iawn (NNT = 400) am 4 munud o sylw datblygwr yr un, mae un ddalfa'n costio ~27 awr-datblygwr — nawr cymharwch hynny â chost y digwyddiad y mae'n ei atal. Mae NNH yn mapio i gadarnhaol ffug: faint o PRs fesul fflag *ffug*, a beth mae pob un yn ei gostio o ran sylw ac ymddiriedaeth? Dylai offer arddull sgrinio (leintwyr, sganwyr diogelwch, canfod anomaledd) gael eu llongio gyda rhifyddeg NNT/NNH — gweler [economeg sgrinio](../screening-economics/) am pam mae cyffredinolrwydd isel yn gwneud y rhifau hyn yn greulon.

## Peryglon

- **Dim cyfnod amser**: nid yw "NNT = 50" yn golygu dim; mae "NNT = 50 dros 5 mlynedd" yn honiad.
- **Trawsblannu risg sylfaenol**: mae NNT a gyfrifwyd mewn poblogaeth treial risg uchel yn cwympo mewn poblogaeth defnyddio risg isel.
- **Anwybyddu NNH** — mae porth ag NNT 400 ac NNH 3 yn generadur niwsans, nid yn system ddiogelwch.

## Ffynonellau

- Laupacis A, Sackett DL, Roberts RS. "Asesiad o fesurau defnyddiol yn glinigol o ganlyniadau triniaeth." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT wedi'i esbonio. <https://www.thennt.com/thennt-explained/>
