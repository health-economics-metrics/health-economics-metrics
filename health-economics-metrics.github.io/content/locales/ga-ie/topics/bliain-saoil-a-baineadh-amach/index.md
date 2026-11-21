# Bliain saoil a baineadh amach (LYG)

Is é bliain saoil a baineadh amach an marthanas breise is inchurtha i leith idirghabhála, gan aon choigeartú cáilíochta: an limistéar idir na cuair mharthanais lena cois agus hiompu. Is leagan nua-aimseartha é an bhliain saoil chomhluacha a baineadh amach (evLYG) a chreidmheasann gach síneadh saoil go cothrom.

## Cén fáth a bhfuil tábhacht leis

Is é LYG an toradh sláinte is amhaille: cá fhad is a mhaireann daoine? Tá tábhacht leis nuair a bhíonn sonraí cáilíochta ar iarraidh, nuair a dhéantar comparáid le lucht éisteachta amhrasach faoi QALY, agus in oncology nuair is iad cuair mharthanais príomh-aschur na trialach. Tá an **evLYG** (a úsáideann institiúid ICER na SA taobh le costas/QALY) ann ar chúis eiticiúil: luacháiltear bliain de shíneadh saoil le QALYanna de réir úsáidíochta an othair, mar sin “áireamh níos lú” a bhíonn sa saol a fhadú de dhuine faoi mhíchumas — luacháiltear gach bliain fhadaithe leis an evLYG ag úsáidíocht sheasta, rud a bhaineann an leatrom sin.

## An mhatamaitic

```
LYG = mean survival_new − mean survival_comparator
    = area between survival curves (restricted to the time horizon)

QALY view of life extension:  extension × patient utility
evLYG view of life extension: extension × fixed utility (ICER uses ~0.851,
                              the average US population utility)
```

Déantar an dá cheann a [lascainiú](../lascainiú-agus-rogha-ama/) i samhlacha eacnamaíocha.

## Sampla oibrithe

Algartam luathrabhaidh sepsis in ospidéal: taispeánann samhaltú go gcuireann antaibheathaigh níos luaithe cosc ar 12 bhás sa bhliain; tugann meánaois na n-othar sin 8 mbliana saoil eile an duine ag úsáidíocht 0.7.

```
LYG   = 12 × 8            = 96 life-years/year
QALYs = 96 × 0.7          = 67.2
evLYG = 96 × 0.851        = 81.7
```

Ag £20,000 in aghaidh an QALY, luacháiltear an marthanas le frámaíocht QALY ag £1.34M/bliain; le frámaíocht evLYG ag £1.63M. Is é an bhearna go beacht an breithiúnas eiticiúil an bhfuil bliain saoil ag úsáidíocht 0.7 fiú 70% de bhliain “iomlán”. Tuairiscíonn doiciméid dháiríre an dá cheann.

## An nasc le hinnealtóireacht bogearraí

- Is é anailís marthanais an bosca uirlisí comhroinnte: tá cuair Kaplan-Meier d’othair agus de *sheirbhísí* (am go teip, am go meathlú) mar an matamaitic chéanna. Is é “bliain seirbhíse a baineadh amach” ó infheistíocht iontaofachta = an limistéar idir cuair mharthanais an chórais lena cois agus hiompu — frámaíocht níos macánta ná éilimh MTTF phointe.
- Tá rabhadh deartha méadrachta san evLYG d’innealtóireacht freisin: déanfaidh aon mhéadracht tháirgiúlachta a mheáníonn aschur le fachtóir “cáilíocht foirne” easluacháil chórasach ar fheabhsuithe d’fhoirne srianta nó faoi strus — uaireanta ba mhaith leat an leagan comhluacha d’aon ghnó.

## Gaistí

- **Meánmharthanas vs airmheán**: teastaíonn an meán ó shamhlacha eacnamaíocha (limistéar faoin gcuar); is minic a thugann trialacha an t-airmheán mar cheannlíne. Tá difríocht mhór eatarthu i ndáiltí claonta.
- **Eachtarshuíomh thar leanúint na trialach** is mó a mheallann LYG samhaltaithe i ngalar ainsealach — luaigh an tsamhail eachtarshuímh agus tástáil í in [anailís íogaireachta](../anailís-íogaireachta/).
- **Básanna a sheachaint a éileamh ó shonraí breathnadacha roimh/tar éis** gan coigeartú le haghaidh meascán cásanna agus treochtaí séasúracha.

## Foinsí

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
