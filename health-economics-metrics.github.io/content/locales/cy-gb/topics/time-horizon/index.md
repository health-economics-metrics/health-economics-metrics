# Gorwel Amser

Y gorwel amser yw'r cyfnod y mae dadansoddiad yn cyfrif costau ac effeithiau drosto. Rhaid iddo fod yn ddigon hir i ddal pob gwahaniaeth ystyrlon rhwng y dewisiadau sy'n cael eu cymharu.

## Pam mae'n bwysig

Dewiswch orwel byr a byddwch yn colli buddion hwyr (atal) a chostau hwyr (cynnal a chadw). Dewiswch orwel rhy hir a bydd popeth yn boddi mewn ansicrwydd. Mae asesu technoleg iechyd yn aml yn defnyddio gorwel **oes gyfan** ar gyfer triniaethau ag effeithiau marwolaeth; mae [dadansoddiad effaith cyllideb](../budget-impact-analysis/) yn defnyddio gorwel byr bwriadol o **1–5 mlynedd** oherwydd mai fforddiadwyedd, nid gwerth, yw ei gwestiwn. Mae'r gorwel yn ddewis modelu datganedig, ac mae gorwelion sy'n anghyfateb yn ffordd glasurol o gemio cymhariaeth.

## Y fathemateg

Y gorwel yw terfyn uchaf y crynswm mewn unrhyw werthusiad:

```
Net present value = Σ (t = 0 … T) [ (Benefits_t − Costs_t) / (1 + r)^t ]

T = y gorwel amser (blynyddoedd)
r = y gyfradd ddisgowntio (gweler discounting-and-time-preference.md)
```

Dylid adrodd canlyniadau gyda'r gorwel wedi'i nodi, ac yn ddelfrydol eu dangos ar sawl gorwel.

## Enghraifft wedi'i gweithio

Mae system bresgripsiynu electronig yn costio £2 filiwn i'w gweithredu a £200,000/flwyddyn i'w rhedeg. Mae'n atal camgymeriadau meddyginiaeth sy'n werth £600,000/flwyddyn (cost triniaeth niwed a osgowyd).

Budd net yn ôl gorwel (heb ei ddisgowntio, er eglurder):

```
Gorwel 1 flwyddyn:  −2,000,000 − 200,000 + 600,000  = −£1,600,000
Gorwel 3 blynedd:   −2,000,000 + 3 × 400,000        = −£800,000
Gorwel 5 mlynedd:   −2,000,000 + 5 × 400,000        =  £0
Gorwel 10 mlynedd:  −2,000,000 + 10 × 400,000       = +£2,000,000
```

Mae'r system yn "methu" ar unrhyw orwel dan 5 mlynedd ac yn "llwyddo" ar 10. Nid yr un o'r ddau yw'r ateb gwirioneddol; mae'r adroddiad gonest yn nodi'r pwynt ymaddasu (break-even) ac yn cyfiawnhau'r gorwel yn ôl oes y system (pa mor hir cyn ei disodli?).

## Cysylltiad â Pheirianneg Meddalwedd

- **Gwerthusiadau offer a fesurir dros un sbrint** yn methu'n systematig â dal y gostyngiad ar y gromlin ddysgu (costau wedi'u pwyso'n gynnar) a chynnal a chadw hirdymor (costau wedi'u pwyso'n hwyr). Mae peilotiaid cynorthwyydd codio AI a fesurir yn wythnos 2 yn dal brig y newydd-deb, nid y cyflwr sefydlog.
- **Nid yw hyd contract yn gyfystyr â'r gorwel budd.** Gellir dal i arfarnu contract SaaS 1 flwyddyn dros 5 mlynedd os ydych yn disgwyl adnewyddiad yn realistig — ond dywedwch hynny.
- **Dylai achosion disodli systemau etifeddol redeg hyd at ddiwedd oes credadwy'r hen system**, nid hyd at rif crwn mympwyol.

## Peryglon

- **Siopa gorwelion**: dewis pa bynnag orwel sy'n gwneud i'ch dewis chi ennill. Cofrestrwch y gorwel ymlaen llaw cyn cyfrifo canlyniadau.
- **Gorwelion gwahanol ar gyfer dewisiadau gwahanol** yn yr un gymhariaeth.
- **Gorwelion oes gyfan heb ddisgowntio na dadansoddiad ansicrwydd** — mae buddion blwyddyn-30 ar eu gwerth wyneb yn ffuglen. Parwch orwelion hir â [dadansoddiad sensitifrwydd](../sensitivity-analysis/).

## Ffynonellau

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
