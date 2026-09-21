# Arbedion sy'n Rhyddhau Arian Parod Caled (Amddiffyn Diffyg)

Arbedion sy'n rhyddhau arian parod caled yw eitemau llinell y gall ysbyty eu **dileu'n weithredol o gyllideb y mis nesaf** o achos eich meddalwedd. I gyfrifydd ariannol llym — ac i ymddiriedolaeth sy'n rhedeg diffyg — dyma'r unig ddosbarth budd sy'n cyfrif yn llawn.

## Pam mae'n bwysig

Mae llawer o ymddiriedolaethau NHS yn gweithredu o dan gynlluniau adfer diffyg gyda chraffu dwys ar bob llinell wariant. Yn yr amgylchedd hwnnw, nid yw buddion capasiti a gwelliannau ansawdd — waeth pa mor real ydynt — yn cau'r bwlch; arian parod yn unig sy'n gwneud hynny. Mae cynnyrch meddalwedd sy'n gallu profi ei fod yn dileu llinellau cyllideb yn *hunan-ariannol o safbwynt y Prif Swyddog Ariannol (CFO)*, sy'n trawsnewid caffael: mae'r sgwrs yn peidio â bod yn "allwn ni fforddio hyn?" ac yn dod yn "allwn ni fforddio peidio?". Mae'r ddogfen hon yn ochr finiog, wynebu-diffyg [arbedion sy'n rhyddhau arian parod yn erbyn rhai nad ydynt](../cash-releasing-vs-non-cash-releasing/).

## Y mathemateg

Targed arian parod caled mwyaf dibynadwy'r NHS yw **staffio dros dro ar gyfradd premiwm**. Mae ymddiriedolaethau'n llenwi bylchau â staff "Banc" mewnol (a delir ar gyfraddau lled-safonol) a staff "Asiantaeth" allanol (yn aml 2–3× cyfraddau Agenda for Change, wedi'u capio ond yn cael eu torri'n aml ar gyfer rolau prin).

```
Arbediad caled = shifftiau premiwm a osgowyd × (cyfradd premiwm − cyfradd sylfaenol)
              + oriau goramser a osgowyd × premiwm goramser
              + contractau allanol wedi'u canslo × gwerth y contract

Gofyniad mecanwaith: enwch y llinell gyllideb benodol a'r rheolwr a fydd
yn cadarnhau ei gostyngiad. Os na all neb bwyntio at y llinell, nid arian
parod caled ydyw.
```

## Enghraifft wedi'i gweithio

Mae nyrs Band 6 yn colli ~1 awr/shifft i faich gweinyddol; mae dogfennu'n rheolaidd yn gorlifo i mewn i oramser y tu hwnt i ddiwedd shifft, ac mae wardiau'n archebu cymorth Banc ychwanegol i ddal i fyny â dogfennu.

Mae meddalwedd yn dychwelyd yr awr honno i'r shifft a drefnwyd ar draws 300 o nyrsys:

```
Goramser a osgowyd: 300 nyrs × 2.5 awr oramser a delir/wythnos × £8 premiwm × 46 wythnos
                    ≈ £276,000/blwyddyn
Shifftiau Banc/Asiantaeth: 15 shifft dal-i-fyny/wythnos × £180 premiwm × 52
                    ≈ £140,400/blwyddyn
Cyfanswm arian parod caled ≈ £416,000/blwyddyn yn erbyn cost trwydded o ~£150,000
```

Mae pob punt yn archwiliadwy yn erbyn y systemau e-restru a chyflogres — a dyna'n union sut y dylid tystio'r budd, yn fisol, drwy [wireddu buddion](../benefits-realization/). (Mae modelau gweithlu NHS a gyhoeddwyd wedi honni cymarebau mor uchel â £11+ a arbedwyd fesul £1 a wariwyd ar y mecanwaith hwn; trinwch unrhyw gymhareb o'r fath fel damcaniaeth ar gyfer data restru *eich* ymddiriedolaeth chi, nid ffaith y gellir ei chludo.)

## Y cysylltiad â pheirianneg feddalwedd

Cyfwerthau peirianneg premiwm asiantaeth yw pryniannau trallod y sefydliad ei hun: cyfraddau dydd contractwyr yn llenwi bylchau cyflenwi, goramser wedi'i yrru gan ddigwyddiadau, contractau cymorth cyflymedig, a phanig prisiau smotyn cwmwl. Dylai meddalwedd cynhyrchedd sy'n honni arian parod caled dargedu'r llinellau hynny gyda'r un ddisgyblaeth — enwi'r llinell gyllideb, y perchennog, a'r mis y bydd yn crebachu. Capasiti ([capasiti sy'n creu gwerth](../value-generating-capacity-operational-turnaround/)) neu ansawdd yw popeth arall a gyflenwir: real, gwerthfawr, a gwahanol.

## Peryglon

- **Galw capasiti'n "arbedion"** — y lladdwr credadwyedd sydyn gyda chyllid; gweler y tacsonomeg yn [arbedion sy'n rhyddhau arian parod yn erbyn rhai nad ydynt](../cash-releasing-vs-non-cash-releasing/).
- **Cymarebau model gwerthwr wedi'u cyflwyno fel ffaith leol** (problem £11:£1) — ailadeiladwch y model ar ddata restru'r ymddiriedolaeth ei hun.
- **Dryswch unwaith-yn-unig vs cylchol**: mae contract wedi'i ganslo'n arbed ei werth unwaith y flwyddyn, nid unwaith; mae swydd wedi'i dileu'n arbed cyflog dim ond tra bydd yn parhau wedi'i dileu.

## Ffynonellau

- NHS England, reducing agency spend in the NHS. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Digital business case guidance, economic case. <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
