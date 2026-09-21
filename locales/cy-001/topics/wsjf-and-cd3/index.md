# WSJF a CD3

Mae CD3 (Cost Oedi wedi'i Rannu â Hyd) a WSJF (Y Swydd Fyrraf sydd wedi'i Phwysoli yn Gyntaf) yn rheolau blaenoriaethu sy'n trefnu gwaith yn ôl **dwysedd gwerth**: faint o gost oedi sy'n cael ei dileu fesul uned o allu prin a ddefnyddir. O dan allu a rennir, sefydlog, y drefn CD3-uchaf-yn-gyntaf yw'r dilyniant mathemategol optimaidd ar gyfer lleihau cyfanswm cost oedi.

## Pam mae hyn yn bwysig

Mae pob ôl-groniad yn broblem ddogni: llawer o eitemau teilwng, un bibell. Datryswyd yr un broblem gan economeg iechyd ar gyfer cyllidebau iechyd gyda thablau cynghrair cost-effeithiolrwydd — graddio ymyriadau yn ôl iechyd a enillwyd fesul punt, ariannu i lawr y rhestr nes bod y gyllideb yn dihysbyddu. Mae CD3 yr un rhesymeg yn union ar gyfer gallu cyflenwi: budd fesul uned o'r *adnodd cyfyngedig*, wedi'i ariannu yn nhrefn y rhestr. Mae cael y drefn yn iawn yn arian am ddim — yr un gwaith, yr un gallu, llai o gyfanswm cost oedi.

## Y Fathemateg

```
CD3  = Cost Oedi (£/wythnos) / Hyd (wythnosau)      — unedau go iawn (Black Swan Farming)

WSJF = (gwerth defnyddiwr-busnes + brys amser + lleihau risg/galluogi
        cyfle) / maint y swydd                       — dirprwy raddfa gymharol
                                                       SAFe, sgoriau Fibonacci wedi'u haddasu
```

Mae CD3 gydag arian cyfred go iawn ([cost oedi](../cost-of-delay/)) yn gryfach yn llym na phwyntiau di-uned WSJF — mae WSJF i CD3 yr un fath ag y mae sgorio aml-faen prawf i [ddadansoddiad cost-defnyddioldeb](../cost-utility-analysis/) llawn: yn ddefnyddiadwy pan fo ariannu'n anymarferol, yn agored i chwarae pan nad oes gan y sgoriau angor.

## Enghraifft Waith

Tair nodwedd, un tîm:

```
Nodwedd   CoD (£/wythnos)   Hyd        CD3
A         30,000            10 wythnos 3,000
B         12,000            2 wythnos  6,000
C         5,000             1 wythnos  5,000
```

Trefn CD3: B, C, A. Cymharwch gyfanswm cost oedi yn erbyn "y CoD mwyaf yn gyntaf" (A, B, C):

```
Trefn CD3  (B,C,A): mae A yn aros 3 wythnos, C yn aros 2 → 30k×3 + 5k×2  = £100k cost oedi
Trefn CoD  (A,B,C): mae B yn aros 10, C yn aros 12         → 12k×10 + 5k×12 = £180k
```

Yr un nodweddion, yr un tîm — mae'r drefn ar ei phen ei hun yn arbed £80,000. Y reddf: mae eitemau bach, brys yn mynd yn gyntaf gan eu bod yn rhyddhau eu cost oedi'n rhad; nid yw'r eitem fawr yn colli fawr ddim drwy aros ychydig.

## Cysylltiad Peirianneg Feddalwedd

Ar gyfer portffolios meddalwedd gofal iechyd, mynegwch CoD yn yr unedau y mae'r ystorfa hon yn eu dysgu: QALYs/wythnos × trothwy + £/wythnos gweithredol, ac mae'r ôl-groniad yn dod yn uniongyrchol gymesur â sut mae'r system iechyd yn graddio popeth arall y mae'n ei brynu. Dau nodyn ymarfer: (1) mae hyd yn golygu *amser calendr yn meddiannu'r cyfyngiad*, nid ymdrech — mae eitem sy'n cymryd 2 wythnos i fynd heibio ac sydd angen 2 ddiwrnod gan y tîm sy'n dagfa yn rhatach nag y mae'n edrych (gweler [optimeiddio adnoddau diweddarach](../downstream-resource-optimization/)); (2) mae ysbytai'n rhedeg yr un rheol yn ymhlyg pan fyddant yn trefnu rhestrau theatr yn ôl trwygyddiad wedi'i bwysoli yn ôl brys — mae categorïau blaenoriaethu clinigol yn CD3 wedi'i bwysoli yn ôl difrifoldeb (gweler [diffyg QALY ac addasyddion difrifoldeb](../qaly-shortfall-and-severity-modifiers/)).

## Peryglon

- **Theatr sgorio WSJF**: mae dadleuon Fibonacci di-uned yn cydgyfeirio ar bwy bynnag sy'n dadlau uchaf; angorwch o leiaf eitemau brig yr ôl-groniad mewn CoD go iawn.
- **Chwarae gyda hyd**: rhannu eitemau i chwyddo safle CD3 — yn iawn pan fo rhaniadau'n cyflawni gwerth yn annibynnol, yn dwyll pan na fyddant.
- **Anwybyddu proffiliau brys**: mae CoD siâp terfyn amser (dyddiadau rheoleiddiol) yn torri'r rhagdybiaeth cyfradd sefydlog; trefnwch y rheiny yn ôl dichonoldeb dyddiad, yna CD3 y gweddill.
- **Ailraddio cyson**: mae CD3 ar gyfer penderfyniadau trefnu ar adeg ymrwymo, nid ar gyfer aildrefnu dyddiol gwaith sydd eisoes ar y gweill (gweler [metrigau llif](../flow-metrics/) ar WIP).

## Ffynonellau

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
