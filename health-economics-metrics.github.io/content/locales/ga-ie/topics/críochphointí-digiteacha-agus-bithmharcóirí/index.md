# Críochphointí digiteacha agus bithmharcóirí

Is tomhas oibiachtúil fiseolaíoch nó iompraíochta é bithmharcóir digiteach a bhailítear trí braiteoirí (luas siúil ó fhón, codladh ó threalamh caite, creathadh ó luasmhéadracht). Is críochphointe digiteach é a leithéid de thomhas arna ardú go **toradh trialach** — a úsáidtear chun éifeacht cóireála a léiriú. Ritheann an ardú ó “sonraí a astaíonn an gléas” go “fianaise a ghlacann rialálaí” trí dréimire bailíochtaithe sainithe.

## Cén fáth a bhfuil tábhacht leis

Tá críochphointí traidisiúnta trialach eipeasóideach (cuairteanna clinice gach 3 mhí) agus costasach; tá críochphointí digiteacha leanúnach, éiceolaíoch (fíorshaol, ní feidhmíocht clinice), agus saor in aghaidh an bhreathnaithe — is féidir leo trialacha a chrapadh, éifeachtaí a bhrath níos luaithe, agus staidéir dhíláraithe a chumasú. Is é an breacadh bailíochtú: éilíonn an creat glactha (ailínithe le FDA, trí cholún) **fíorú/bailíochtú anailíseach** (tomhaiseann an braiteoir an cainníocht fhisiciúil go cruinn), **bailíochtú cliniciúil** (léiríonn an tomhas an staid chliniciúil a éilíonn sé), agus **gné bhríoch sláinte** a léiríodh (bíonn cúram ar othair faoin méid a ghabhann sé). Is teilimeitric é críochphointe gan an triúr, ní fianaise.

## An mhatamaitic

```
Bailíochtú anailíseach: comhaontú le tagarmharc (féach wearable-validation.md —
                       MAPE, CCC, Bland-Altman)
Bailíochtú cliniciúil:   comhghaol/idirdhealú i gcoinne ancairí cliniciúla
                       (bailíocht grúpaí aitheanta, freagrúlacht ar athrú)
Eacnamaíocht críochphointe:
  imeachtaí braite in aghaidh na bliana-othair (leanúnach) vs samplú in aghaidh na cuairte
  cumhacht trialach: laghdaíonn tomhais leanúnacha méid samplach nuair a
  rialaíonn athraitheacht idir cuairteanna — N ∝ σ²/Δ², agus titeann σ² le samplú dlúth
```

## Sampla oibrithe

Breathnaíonn triail Parkinson ar luas siúil ó bhraiteoir chaol láimhe seachas scóir clinice ráithiúla:

```
Críochphointe clinice:  4 thomhas/othar/bliain, torann ard lá-go-lá
Críochphointe digiteach: ~200 tomhas éighníomhach/othar/bliain

Titeann athraitheacht mheastacháin an athraithe bhliantúil ~5× le samplú dlúth →
feabhsaíonn méid éifeachta braite ag cumhacht seasta ~√5 ≈ 2.2×, nó
go coibhéiseach crapann méid samplach ~40–60% don hipitéis chéanna.
Ag £25,000 in aghaidh an othair cláraithe, cuireann gearradh 200 othar ≈ £5M sábháilte
in aghaidh na trialach — an cás tráchtála don infheistíocht bailíochtaithe
(féin b’fhéidir £1–2M) thar phíblíne urraí.
```

## An nasc le hinnealtóireacht bogearraí

Is araíonacht innealtóireachta sonraí iad críochphointí digiteacha faoi éadach cliniciúil: **bunús agus leagan** (bagraíonn nuashonruithe algartaim i lár staidéir ar chomparáideacht — fadhb [PCCP](../meastóireacht-rialála-ai/) i bhfoirm trialach; glasáil leagan agus bailíochtaigh droichid); **dearadh sonraí ar iarraidh** (tá bearnaí ama caite faisnéiseach, ní randamach — féach [bailíochtú trealaimh chaite](../bailíochtú-ar-fheistí-caitheamh/); is éilimh eolaíochta iad roghanna ionchuir); agus **cinntí scoilte imeall/scamall** a athraíonn cén comhartha amh is inghnóthaithe níos déanaí. Ceannaíonn foirne a chaitheann leis an bpíblíne tomhais mar bhogearraí rialáilte ón gcéad lá — tástáilte, leagtha, doiciméadaithe — creidiúnacht a gcríochphointí go saor; is ann a fhaigheann cláir chríochphointe digiteacha bás nuair a chuirtear bailíochtú in oiriúint do phíblíne a bhog go tapa.

## Gaistí

- **Comhghaol-le-clinic mar bhailíochtú iomlán**: ní chruthaíonn tomhas easnamhach clinice a mheaitseáil ach oidhreacht, ní fírinne; bailíochtaigh i gcoinne an ghné bhríoch sláinte.
- **Riosca rialála críochphointe nua**: is féidir le críochphointe gan fasach a bheith níos fearr go heolaíoch agus aighneacht a bhá fós — gabh le rialálaithe go luath (tá cláir cháilíochta ann).
- **Neamhréir braiteoir-daonra**: bailíochtú ar chaol láimhe óga sláintiúla, imlonnú in othair aosta le difríochtaí creathadh agus pigmentiú nach bhfaca an PPG riamh.
- **Sodar gné**: athraíonn athoiliúint an algartaim siúil ar shonraí nua an críochphointe go ciúin i lár staidéir.

## Foinsí

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
