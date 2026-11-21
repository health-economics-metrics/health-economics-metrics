# WSJF agus CD3

Tha CD3 (Cosgais Dàil air a roinn le Fad) agus WSJF (Weighted Shortest Job First) nan riaghailtean prìomhachaidh a bhios a’ cur obair air clàr a rèir **dùmhlachd luach**: dè cho mòr de chosgais dàil a thèid a thoirt air falbh gach aonad de chomas gann a chaitear. Fo chomas co-roinnte, stèidhichte, is e an CD3-as-àirde-an-toiseach an òrdugh as fheàrr gu matamataigeach airson iomlan cosgais dàil a lùghdachadh.

## Carson a tha e cudromach

Is e duilgheadas ratanachaidh a th’ anns a h-uile cùl-chlàr: mòran nithean airidh, aon phìob. Fhuasgail eaconamas slàinte an duilgheadas ceudna airson buidseatan slàinte le clàran-lìog cosg-èifeachdais – rangaich eadar-theachdan a rèir slàinte buannaichte gach punnd, maoinich sìos an liosta gus an tèid am buidseat a chosg. Is e CD3 an loidhsig ceudna airson comas lìbhrigidh: buannachd gach aonad den *ghoireas cuingichte*, air a mhaoineachadh ann an òrdugh rangachaidh. Tha òrdugh ceart a’ ciallachadh airgead an-asgaidh – an aon obair, an aon chomas, nas lugha de chosgais dàil iomlan.

## A’ mhatamataig

```
CD3  = Cosgais Dàil (£/seachdain) / Fad (seachdainean)      — fìor aonadan (Black Swan Farming)

WSJF = (luach-neach-cleachdaidh-gnìomhachais + èiginn-ùine + lùghdachadh cunnairt/
        comasachadh cothrom) / meud obrach               — progsaidh sgèile cho-cheangailte SAFe,
                                                        sgòran Fibonacci atharraichte
```

Tha CD3 le fìor-airgead ([cosgais dàil](../cosgais-dàil/)) gu teann nas làidire na puingean gun aonad WSJF – tha WSJF ri CD3 mar a tha sgòradh ioma-shlatan-tomhais ri [anailis cosgais-fheumalachd](../anailis-cosgais-fheumalachd/) slàn: ri chleachdadh nuair a tha airgead-atharrachadh do-dhèanta, so-chluiche nuair nach eil acair aig na sgòran.

## Eisimpleir obrach

Trì feartan, aon sgioba:

```
Feart     CoD (£/seachd)   Fad       CD3
A         30,000           10 seachd 3,000
B         12,000           2 sheachd 6,000
C         5,000            1 seachd  5,000
```

Òrdugh CD3: B, C, A. Coimeas cosgais dàil iomlan an aghaidh “CoD as motha an toiseach” (A, B, C):

```
Òrdugh CD3  (B,C,A): A a’ feitheamh 3 seachd, C a’ feitheamh 2 → 30k×3 + 5k×2  = £100k cosgais dàil
Òrdugh CoD  (A,B,C): B a’ feitheamh 10, C a’ feitheamh 12      → 12k×10 + 5k×12 = £180k
```

Na h-aon fheartan, an aon sgioba – tha òrdugh leis fhèin a’ sàbhaladh £80,000. An t-intuition: bidh nithean beaga èiginneach a’ dol an toiseach oir bidh iad a’ leigeil ma sgaoil an cosgais dàil aca gu saor; chan eil an nì mòr a’ call mòran le feitheamh goirid.

## Ceangal ri einnseanaireachd bathar-bog

Airson pasganan bathar-bog slàinte, cuir CoD ann an aonadan a tha an stòr seo a’ teagasg: QALYan/seachdain × stairsneach + £/seachdain obrachaidh, agus bidh an cùl-chlàr gu dìreach so-thomhaiste ri mar a bhios an siostam slàinte a’ rangachadh a h-uile càil eile a cheannaicheas e. Dà nòta cleachdaidh: (1) tha fad a’ ciallachadh *ùine mhìosachain a’ gabhail a’ chuingeadh*, chan e oidhirp – tha nì 2 sheachdain de dh’ùine ruith a dh’fheumas 2 latha den sgioba cnap-starra nas saoire na tha e coltach (faic [optimachadh ghoireasan sìos-an-t-srutha](../optimachadh-ghoireasan-sìos-an-t-srutha/)); (2) bidh ospadalan a’ ruith an aon riaghailt gu fillte nuair a dh’òrdaicheas iad liostaichean theatar a rèir sruthadh le cuideam èiginn – tha roinnean prìomhachais clionaigeach nan CD3 le cuideam dhroch-ìre (faic [easbhaidh QALY agus atharraichean dhroch-ìre](../easbhaidh-qaly-agus-modaladairean-dèine/)).

## Cunnartan

- **Taigh-cluiche sgòir WSJF**: bidh deasbadan Fibonacci gun aonad a’ tighinn còmhla air an neach as àirde a bhios ag argamaid; cuir acair air co-dhiù na nithean aig mullach a’ chùl-chlàir ann am fìor CoD.
- **Cluich fad**: nithean a roinn gus rangachadh CD3 àrdachadh – ceart nuair a bheir na roinnean luach gu neo-eisimeileach, foill nuair nach toir.
- **A bhith a’ leigeil seachad pròifilean èiginn**: bidh CoD cumadh-ceann-latha (ceann-latha riaghlaidh) a’ briseadh barail ìre seasmhach; cuir an sin air clàr a rèir dèantachd cinn-latha, an uair sin CD3 an còrr.
- **Brùid ath-rangachaidh**: tha CD3 airson co-dhùnaidhean òrdugh aig àm gealltanais, chan ann airson ath-chlàradh làitheil de dh’obair a tha a’ dol (faic [meatrachan sruthaidh](../meatrachan-sruthaidh/) air WIP).

## Stòran

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
