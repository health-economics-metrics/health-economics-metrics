# Meastóireacht rialála AI

Na creataí rialála a rialaíonn AI sa chúram sláinte — córas Bogearraí mar Fheiste Leighis (SaMD) an FDA le **Pleananna Rialaithe Athraithe Réamhchinntithe (PCCPanna)**, agus cláir mheastóireachta fíor-domhanda mar Dhuais AI san Sláinte agus Cúram an NHS — agus a gcostas agus a gcumasú ó thaobh na heacnamaíochta.

## Cén fáth a bhfuil tábhacht leis

Socraíonn rialáil **costas fianaise iontrála ar an margadh** agus **costas gach nuashonraithe samhla ina dhiaidh sin** araon — i gcás táirgí AI, is minic gurb é an dara ceann is tábhachtaí. Rinne mód traidisiúnta an FDA (an tsamhail a ghlasáil; athghlanadh le haghaidh athruithe) feabhsú leanúnach an-chrua go heacnamaíoch. D’athraigh **treoir PCCP (críochnaithe Nollaig 2024)** an eacnamaíocht: is féidir le monaróir nuashonruithe samhla *sonraithe* amach anseo a réamhúdarú — cur síos ar mhodhnuithe pleanáilte, prótacal modhnúcháin (conas a bhfíoraítear gach ceann), agus measúnú tionchair — ionas go seolfar feabhsuithe údaraithe gan aighneacht nua. Tá údarú FDA ag os cionn 1,000 feiste ar a bhfuil AI; fiosraíonn an FDA anois freisin monatóireacht feidhmíochta fíor-domhanda (méadracha réamhshonraithe: rátaí bonnlíne FP/FN, drift calabraithe, táscairí aistrithe fearainn).

## An mhatamaitic

Is é an PCCP eacnamaíocht [ama seolta DORA](../méadracha-dora/) a cuireadh i bhfeidhm ar shamhlacha rialáilte:

```
Costas in aghaidh nuashonraithe samhla (traidisiúnta) = costas athaighneachta + moill athbhreithnithe × CoD
Costas in aghaidh nuashonraithe samhla (faoi scóip PCCP) = costas forghníomhaithe prótacail amháin

Eacnamaíocht nuashonraithe thar shaolré táirge:
  N nuashonrú × (costas aighneachta + míonna athbhreithnithe × costas moille in aghaidh na míosa)
  vs costas amháin údaraithe PCCP + N × forghníomhuithe prótacail
```

Maidir le patrún Dhuais AI an NHS, tá an tacar méadrach níos leithne ná cruinneas: déanann meastóireachtaí fíor-domhanda neamhspleácha measúnú ar fheidhmíocht chliniciúil, éifeachtaí sreabhadh oibre/cur i bhfeidhm, agus tionchar eacnamaíoch — an phíblíne iomlán [éifeachtacht → éifeachtúlacht → costéifeachtúlacht](../táirgiúlacht-forbróirí-le-ai/) institiúidithe.

## Sampla oibrithe

Pleanálann díoltóir AI raideolaíochta feabhsuithe samhla ráithiúla thar 3 bliana (12 nuashonrú):

```
Traidisiúnta: 12 × (£80k aighneacht + 4 mhí × £50k/mí CoD sochair mhoillithe)
           = 12 × £280k = £3.36M
Bealach PCCP:  £250k údarú PCCP + 12 × £30k forghníomhú prótacail = £610k
Coigilteas ≈ £2.75M — agus faigheann othair gach feabhsú ~4 mhí níos luaithe:
12 × 4 mhí × sochar cliniciúil an nuashonraithe, líne QALY ina cheart féin.
```

Is aitheantas rialála é an PCCP go bhfuil **luach cliniciúil ag minicíocht imlonnaithe** — slabhra cúise máistir an stóir seo, formheasta ag rialálaí.

## An nasc le hinnealtóireacht bogearraí

Is fadhb bogearraí é an PCCP a innealtóireacht go maith: tacair mheastóireachta réamhshonraithe, tacair sonraí leagtha, píblínte fíoraithe uathoibrithe, monatóireacht drift — col ceathrair rialáilte an imlonnaithe leanúnaigh, áit arb é prótacal fíoraithe an “geata imlonnaithe” in ionad athbhreithnithe cód. Faigheann foirne a bhfuil bonneagar meastóireachta aibí acu ([méadracha cáilíochta AI](../méadracha-cáilíochta-ai/)) PCCPanna go saor; faigheann siúd nach bhfuil go bhfuil an srian rialála ina shrian aibíochta innealtóireachta i ndáiríre. I gcás táirgí a ritheann isteach san NHS, is é an cruach comhthreomhar DTAC (sábháilteacht chliniciúil, cosaint sonraí, idir-inoibritheacht) móide leibhéil fianaise [NICE ESF](../creat-caighdeán-fianaise-nice/) — buiséadaigh iad ar fad mar [TCO](../costas-iomlán-úinéireachta/) iontrála ar an margadh.

## Gaistí

- **Brionglóidí scóip-sceite PCCP**: ní réamhúdaraítear ach cineálacha modhnúcháin *sonraithe*; teastaíonn athbhreithniú iomlán fós d’athruithe ailtireachta nó d’úsáidí beartaithe nua.
- **Drift fíor-domhanda gan monatóireacht**: údarú ar fheidhmíocht seolta + drift daonra ciúin = táirge ag feidhmiú lasmuigh dá chlúdach glanta; is ionchas rialála agus féinchosaint araon é monatóireacht.
- **Cead a mhearbhall le luach**: ní chiallaíonn glanadh FDA/UKCA ≠ go n-íocfaidh aon duine — is é sin an bacainn [HTA](../measúnú-teicneolaíochta-sláinte/), a ritheann ar leithligh.

## Foinsí

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- Anailís ar threoir cur i bhfeidhm PCCP. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
