# Anailis cosg-èifeachdais (CEA)

Bidh CEA a’ coimeas chosgaisean eadar-theachdan eile an aghaidh aon bhuilean air a thomhas ann an **aonadan nàdarra** – bliadhnaichean beatha, cùisean air an lorg, gabhaidhean-a-steach air an seachnadh, mmHg de lùghdachadh cuideam fala. Is e an toradh cosgais gach aonad builean.

## Carson a tha e cudromach

Is e CEA an coimeas obair-eich nuair a tha na roghainnean uile ag amas air an aon bhuilean. Bidh e a’ freagairt “dè an dòigh as fheàrr air X a choileanadh airson airgead?” – ach *chan e* “a bheil X airidh air a choileanadh idir?” (feumaidh sin [anailis cosgais-buannachd](../anailis-cosgais-buannachd/)) agus *chan e* “ciamar a choimeasas X ri prìomhachasan neo-cheangailte?” (feumaidh sin [anailis cosgais-fheumalachd](../anailis-cosgais-fheumalachd/) agus builean coitcheann leithid an QALY).

## A’ mhatamataig

Is e an staitistig coimeis an [ICER](../co-mheas-cosg-èifeachdais-àrdachaidh/) ann an aonadan nàdarra:

```
ICER = (Cosgais_A − Cosgais_B) / (Buaidh_A − Buaidh_B)
     = £ gach cùis a bharrachd air a lorg / gabhail-a-steach air a sheachnadh / etc.
```

Pròiseas: mìnich an t-aonad builean; cuir prìs air gach roghainn bhon aon [sheallaidh](../sealladh-na-h-anailis/) thairis air an aon [chrìoch-ùine](../fàire-ùine/); cuir às do roghainnean fo smachd ([crìoch èifeachdais](../smachd-agus-a-chrìoch-èifeachdais/)); obraich a-mach co-mheasan àrdachaidh air feadh na crìche.

## Eisimpleir obrach

Trì dòighean air fibrilleachadh atrial gun bhreithneachadh a lorg ann an sluagh de 100,000:

```
Roghainn                      Cosgais     Cùisean air an lorg
Sgrùdaidhean cuisle cothroim  £150,000    300
Tachartasan sgrùdaidh cungaidh-leigheis £400,000 520
Sgrùdadh stèidhichte air wearable £900,000 610

ICER cungaidh-leigheis an aghaidh cuisle: (400k−150k)/(520−300) = £1,136 gach cùis a bharrachd
ICER wearable an aghaidh cungaidh-leigheis: (900k−400k)/(610−520) = £5,556 gach cùis a bharrachd
```

Tha an e “airidh air” £5,556 gach cùis a bharrachd an urra ri luach cùise a chaidh a lorg (casg stròc sìos-an-t-srutha) – bidh CEA a’ rangachadh nan roghainnean ach feumaidh co-dhùnadh gabhail ris an luachadh a-muigh sin. Thoir an aire gu bheil cosgais *chuibheasach* gach cùise aig an roghainn wearable (900k/610 = £1,475) a’ coimhead ceart; is e an £5,556 *àrdachaidh* an àireamh onarach airson co-dhùnadh leudachaidh.

## Ceangal ri einnseanaireachd bathar-bog

Is e CEA an teamplaid cheart uair sam bith a tha aon bhuilean aig roghainnean: cosgais gach deuchainn briste air a cur às thairis air trì dòighean leasachaidh; cosgais gach tachartais air a sheachnadh thairis air reiceadairean amharc; cosgais gach cleachdaidh soirbheachail thairis air ailtireachdan CI. Tha an smachd a sparras e – aon aonad builean ainmichte, co-mheasan àrdachaidh (chan e cuibheasach), roghainnean fo smachd air an cur às an toiseach – a’ marbhadh a’ mhòr-chuid de choimeasan reiceadair dona mus tòisich còmhradh prìsidh.

## Cunnartan

- **A’ coimeas roghainnean le builean eadar-dhealaichte** (“cùisean air an lorg” an aghaidh “sàsachd”) ann an aon CEA – feumaidh sin [anailis cosgais-builean](../anailis-cosgais-builean/) no builean coitcheann.
- **Co-mheasan cosg-èifeachdais cuibheasach** air an taisbeanadh far a bheil feum air feadhainn àrdachaidh (eisimpleir wearable gu h-àrd).
- **Aonadan builean air an roghnachadh airson brosnachadh**: is e toradh, chan e builean, “rabhaidhean air an gineadh”; cuir ìmpidh air aonadan a ghiùlaineas luach.

## Stòran

- CDC POLARIS: cost-effectiveness analysis. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
