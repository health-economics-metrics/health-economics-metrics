# Azterketaren ikuspegia (Analysis Perspective)

Ikuspegiak zehazten du *noren* kostuak eta onurak kontatzen diren azterketa ekonomiko batean: ordaintzailearenak, hornitzailearenak edo gizarte osoarenak. Esku-hartze bera bikaina izan daiteke ikuspegi batetik eta ikaragarria beste batetik.

## Zergatik axola duen

Ebaluazio ekonomiko guztiek hasieratik adierazi behar dute ikuspegia, ikuspegiak zehazten baitu zein kostu-atal dauden:

- **Ordaintzailearen ikuspegia** (adib., NHS komisiodunak, aseguratzaileak): ordaintzaileak ordaintzen dituen kostuak bakarrik.
- **Hornitzailearen ikuspegia** (adib., ospitale-trust bat): barne-entrega kostuak, langileak, instalazioak.
- **Gizartearen ikuspegia**: dena — pazientearen denbora, joan-etorriak, familiaren zaintza informala eta enplegatzaileentzako produktibitate-galerak barne.

NICEren erreferentzia-kasuak **NHS eta Personal Social Services (PSS)** ikuspegia erabiltzen du kostuetarako. AEBetako Kostu-eraginkortasunaren Bigarren Panelak osasun-sektoreko eta gizarte-mailako analisiak biak jakinaraztea gomendatzen du, sartutakoa zerrendatzen duen "inpaktu-inbentarioarekin".

## Matematika

Formularik ez — edozein matematika baino lehen aplikatzen den irismen-araua:

```
Barne hartutako kostu/onura kategoriak = f(ikuspegia)
```

Egiaztapen erabilgarria: egin inpaktu-inbentario taula bat, kostu/onura bakoitzeko lerro bat eta ikuspegi bakoitzeko zutabe bat, eta markatu zein gelaxkak kontatzen duten.

## Adibide landua

Sintoma-egiaztatzaile aplikazio batek urtean 10.000 GP bisita autozaintzara desbideratzen ditu.

- **Ordaintzailea (NHS)**: GP kontsulta bakoitzeko 10,000 × £42 aurrezten du = **£420,000/urte** — oso positiboa.
- **Hornitzailea (GP kontsulta)**: kontsultak kapitazioz ordaintzen badira, diru-sarrerak berdin; lan-zama jaisten da — neurriz positiboa.
- **Gizartea**: gehitu pazienteek aurreztutako joan-etorria eta itxarote-denbora, adibidez 10,000 × 2 ordu × £15/ordu = £300,000 denbora-balio; baina kendu kaltea %2 faltsuki lasaitzen bada eta geroago, gaixoago, itzultzen bada, 200 × £3,000 = £600,000 tratamendu gehigarri. Gizarte-mailako garbia: 420,000 + 300,000 − 600,000 = **£120,000/urte** — positiboa, baina segurtasun-hipotesiak menderatua.

Aplikazio bera, hiru erantzun desberdin. Ikuspegiaren adierazpenak egiten ditu zenbakiak alderagarri eta zintzo.

## Software ingeniaritzarekin lotura

Tresnen eta plataformen ROIak ere ikuspegiak ditu:

- **Taldearen aurrekontua ("ordaintzailea")**: lizentzia-kuota nire kostu-zentroan sartzen al da?
- **Plataforma-erakundea ("hornitzailea")**: kostu osoa, integrazioa, laguntza eta mantentze-lanak barne.
- **Enpresa ("gizartea")**: sartu bezeroen inpaktua, segurtasun-kanpo-efektuak eta kaltetutako talde guztien denbora.

Erosten duen taldearentzat merkea baina beste 40 taldeei migrazio-lana ezartzen dien CI tresna kostu-aldaketaren software-bertsioa da — ikuspegi zabalagotik bakarrik ikusten dena. Adierazi ikuspegia negozio-kasu guztietan; berrikusleek ezin dituzte ikusten ez dituzten hipotesiak zalantzan jarri.

## Tranpak

- **Ikuspegi-aldaketa isila**: gizarte-onurak zenbatzea baina ordaintzailearen kostuak bakarrik edozer kostu-eraginkor ikusarazten du.
- **Zenbaketa bikoitza** ikuspegiak batzen direnean (adib., aurreztutako GP hitzordua ordaintzailearen aurrezki eta pazientearen denbora-aurrezki gisa zenbatzea, ordaintzailearen zifrak langileen denbora barne hartzen duenean).
- **Kostu-aldaketari ez erreparatzea**: kostua pazienteei, zaintzaileei edo beste departamentu bati mugitzen dieten "aurrezkiak".

## Iturriak

- Sanders GD, et al. "Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine." JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
