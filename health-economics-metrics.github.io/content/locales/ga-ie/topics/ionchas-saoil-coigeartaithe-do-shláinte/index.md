# Ionchas saoil coigeartaithe do shláinte (HALE)

Is achoimre ar leibhéal daonra é HALE: líon na mblianta ar féidir le duine a bheith ag súil leo a mhaireachtáil *i sláinte iomlán*, ag lascainiú blianta a chaitear i dtinneas nó i míchumas. Bhí HALE domhanda ag breith thart ar 61.9 bliain i gcomparáid le hionchas saoil de 73.3 (WHO, sonraí 2019) — maireann an chine daonna a deich mbliana deireanach, ar an meán, i sláinte nach bhfuil iomlán.

## Cén fáth a bhfuil tábhacht leis

Is é HALE an méadrach réalta thuaidh de bheartas sláinte náisiúnta agus domhanda — is é an t-uimhreoir spriocanna “scothaosú sláintiúil” é agus is é an bhearna a nochtann sé (ionchas saoil lúide HALE) an t-ualach a dhíríonn cosc, idirghabháil luath, agus bainistíocht ghalar ainsealach ar dhúnadh. Tá straitéisí sláinte digití ar leibhéal aireachta údaraithe i dtéarmaí HALE; ar deireadh tagann punann aipeanna, seirbhísí scagthástála, agus cláir monatóireachta le chéile anseo.

## An mhatamaitic

Is é an ríomh caighdeánach an **modh Sullivan**:

```
HALE_aois_x = Σ (blianta-duine tábla saoil ag gach aois ≥ x × cion i sláinte iomlán)
              / marthanóirí ag aois x

“cion i sláinte iomlán” = 1 − Σ (leitheadúlacht_riocht × meáchan míchumais)
```

Ionchuir: tábla saoil caighdeánach móide leitheadúlacht agus meáchain míchumais do staideanna sláinte (ó shonraí Ualach Domhanda Galair). Baineann HALE le [DALYanna](../bliain-saoil-choigeartaithe-de-réir-míchumais/) — is dhá thuairim den sláinte chaillte chéanna iad ualach DALY daonra agus bearna HALE.

## Sampla oibrithe

Clár digiteach náisiúnta hipirtheannais: 500,000 cláraithe, feabhsaíonn rialú meán brú fola go leor chun minicíocht stróc a ghearradh 0.2 pointe céatadáin/bliain. Samhlaithe thar shaolré an chohóirt, sábhálann strócanna seachanta 15,000 bliain mheáite de réir míchumais (YLD ag meáchan 0.32 móide YLL ó strócanna marfacha).

```
Rannchuidiú HALE ≈ 15,000 bliain shláintiúla / 500,000 duine
                  ≈ 0.03 bliain (≈ 11 lá) HALE in aghaidh an duine cláraithe
```

Cloistear go bhfuil aon lá dhéag beag — ach ar scála daonra is amhlaidh a bhogann méadracha náisiúnta i ndáiríre: ceannaíonn airí milliúin gnóthachan beag in aghaidh an duine. Léiríonn an uimhríocht seo freisin cén fáth a **rialaíonn sroicheadh**: bogann idirghabháil faoi dhó chomh héifeachtach le deichiú den chlárú HALE cúig huaire níos lú. Féach [sroicheadh agus cothromas](../sroicheadh-agus-cothromaíocht/).

## An nasc le hinnealtóireacht bogearraí

Is patrún méadraigh sláinte cabhlaigh é HALE: **saolré seirbhíse ionchais × cion den saolré sin a chaitear go sláintiúil**. Is féidir le foireann ardáin “ionchas saoil seirbhíse sláintiúil” a ríomh thar a n-eastát — blianta a bhfuiltear ag súil go rithfidh seirbhís, lascainithe ag an am a chaitear i staideanna díghrádaithe, dímholta, nó teagmhais (meáchain ó easnamh SLO). Athfhráimeann sé iontaofacht ó infhaighteacht phointe go sláinte saoil, agus dírítear feabhsúchán ar na córais a tharraingíonn HALE an eastáit síos.

## Gaistí

- **Bogann HALE go mall agus il-chúiseach** — ní “bhogann” aon idirghabháil amháin HALE go intomhaiste; éiligh an rannchuidiú samhaltaithe, ní an staitistic náisiúnta.
- **Tá sonraí leitheadúlachta blianta ar gcúl**; ní bheidh gnóthachain le déanaí le feiceáil i HALE oifigiúil.
- **HALE a chur i gcomparáid thar thíortha** le tomhas staid sláinte difriúil is contúirteach; úsáid é go fadaimseartha laistigh de chóras amháin.

## Foinsí

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
