# Optimeiddio Adnoddau i Lawr yr Afon

Mae arbed awr i ymarferydd uwch — meddyg teulu, uwch-gofrestrydd, meddyg ymgynghorol — yn aml yn atal oedi tagfa i dîm amlddisgyblaethol (MDT) cyfan o nyrsys, clercod gweinyddol, a therapyddion sy'n aros am gymeradwyaethau clinigol. Gwerth datgloi'r dagfa yw trwybwn pawb sydd i lawr yr afon ohoni.

## Pam mae'n bwysig

Mae gofal iechyd yn rhedeg ar gadwyni awdurdodi: mae rhyddhau cleifion yn aros am gymeradwyaeth meddyg ymgynghorol, mae cynlluniau triniaeth yn aros am adolygiad MDT, mae atgyfeiriadau'n aros am frysbennu. Pan fo'r rôl giatio wedi'i hoedi, nid awr un person yw'r gost — mae'n amser segur neu wedi'i rwystro ar draws pob rôl ddibynnol, ynghyd ag amser claf mewn limbo (mwy o [ddiwrnodau gwely](../bed-days-saved/), aros [RTT](../referral-to-treatment/) hwy). Dyma theori cyfyngiadau wedi'i chymhwyso i lwybrau clinigol: mae awr a arbedwyd *wrth y cyfyngiad* yn werth trwybwn ymylol y system gyfan; mae awr a arbedwyd yn rhywle arall yn werth llawer llai.

## Y fathemateg

```
Gwerth datgloi = Σ dros rolau i lawr yr afon (oriau wedi'u rhwystro a ryddhawyd × cost uned)
               + enillion trwybwn llwybr × gwerth fesul cwblhad llwybr

Cyferbyniad: gwerth yr un awr a arbedwyd mewn rôl nad yw'n giatio ≈ gwerth
capasiti'r rôl honno yn unig (gweler practitioner-time.md).
```

Nodwch y cyfyngiad yn empeiraidd: ble mae gwaith yn ciwio hiraf? At flwch derbyn pwy y mae oedi'n olrhain yn ôl?

## Enghraifft wedi'i datrys

Mae angen adolygiad meddyg ymgynghorol bob bore ar gyfer rhyddhau cleifion o ward. Mae'r meddyg ymgynghorol yn treulio 90 munud/dydd yn casglu gwybodaeth wedi'i gwasgaru ar draws systemau; mae adolygiadau'n gorffen erbyn 14:00, ac mae 6 rhyddhad/dydd yn cwblhau'n rhy hwyr ar gyfer y diwrnod hwnnw — pob un yn costio diwrnod gwely y gellid ei osgoi.

Mae dangosfwrdd crynodeb rhyddhau (labordai, meddyginiaethau, fflagiau mewn un olwg) yn torri'r casglu i 20 munud; mae adolygiadau'n gorffen erbyn 11:30:

```
Diwrnodau gwely a osgowyd = 4 o'r 6 rhyddhad hwyr × 365 ≈ 1,460 diwrnod gwely/flwyddyn
Datgloi i lawr yr afon: 2 gydgysylltydd rhyddhau + fferyllfa + trafnidiaeth
                        yn segur-yna'n-sgramblo bob prynhawn cynt —
                        ~3 awr-staff/dydd o amser wedi'i rwystro a ryddhawyd ≈ 1,100 awr/flwyddyn
```

70 munud y meddyg ymgynghorol ei hun yw'r rhan *leiaf* o'r gwerth — dyna bwynt y metrig hwn. Priswch y diwrnodau gwely yn ôl mecanwaith (gweler [diwrnodau gwely a arbedwyd](../bed-days-saved/)) a'r oriau staff fel capasiti.

## Cysylltiad â pheirianneg meddalwedd

Dyma adolygu cod, cymeradwyo pensaernïaeth, a blwch derbyn y peiriannydd staff. Pan fo pum peiriannydd yn aros diwrnod am yr un person a all gymeradwyo cynllun, y gost yw pum diwrnod-peiriannydd ynghyd â diwrnod o [gost oedi](../cost-of-delay/) ar y gwaith ei hun — nid un awr-adolygydd. Mae offer sy'n cywasgu tasg y rôl giatio (cyd-destun adolygu gwell, gwiriadau ymlaen llaw awtomataidd, dangosfyrddau sy'n casglu'r hyn sydd ei angen ar y cymeradwywr) yn prynu trwybwn system, nid cyfleustra unigol. Mesurwch amser codi/aros wrth y cyfyngiad (gweler [metrigau llif](../flow-metrics/)) — dyma gyfatebiaeth feddalwedd i glogwyn rhyddhau 14:00.

## Peryglon

- **Optimeiddio rôl nad yw'n gyfyngiad**: mae offer hardd ar gyfer rôl nad oes dim yn ciwio y tu ôl iddi'n cynhyrchu gwerth system agos at sero.
- **Ymfudiad cyfyngiad**: datglowch y meddyg ymgynghorol ac mae'r cyfyngiad yn symud (i'r fferyllfa, i drafnidiaeth) — modelwch y cyfyngiad *nesaf* cyn hawlio enillion trwybwn llawn.
- **Cyfrif oriau i lawr yr afon fel arian parod**: capasiti yw rhyddhau amser wedi'i rwystro, sy'n ddarostyngedig i'r [prawf ailddefnyddio](../cash-releasing-vs-non-cash-releasing/) arferol.

## Ffynonellau

- Goldratt EM, *The Goal* (theori cyfyngiadau).
- NHS England, cynhyrchedd NHS. <https://www.england.nhs.uk/long-read/nhs-productivity/>
