# Ezgaitasunez doitutako bizi-urtea (Disability-Adjusted Life Year, DALY)

DALY bat osasuntsu bizitako urte bat galdua da — [QALY](../kalitatez-doitutako-bizi-urtea/)ren zamaren aldeko ispilua. QALYek *irabazitako* osasuna zenbatzen duten lekuan, DALYek gaixotasunagatik *galdutako* osasuna zenbatzen dute; esku-hartzeak **saihestutako** DALYen arabera balioesten dira.

## Zergatik axola duen

DALY osasun globalaren estandarra da (OME, Global Burden of Disease azterketa eta diru-sarrera baxuko eta ertaineko herrialde gehienetako osasun-ministerioek DALYetan planifikatzen dute). Zure softwareak nazioarteko osasun-sistemak, emaileak edo OMEarekin lerrokatutako programak helburu baditu, balio-hizkuntza saihestutako DALYak dira, ez irabazitako QALYak. WHO-CHOICEren erreferentzia historikoa: DALY bat BPG per capitaren 1× baino gutxiagoan saihesten duen esku-hartzea "oso kostu-eraginkorra" da, BPG per capitaren 1–3× "kostu-eraginkorra" (OMEk orain banda zurrun hauen erabilera desadoste du, baina praktikan nonahi daude).

## Matematika

```
DALY = YLL + YLD

YLL (galdutako bizi-urteak)          = heriotzak × bizi-itxaropen estandarra heriotza-adinean
YLD (ezgaitasunarekin bizitako urteak) = prebalentzia × ezgaitasun-pisua

ezgaitasun-pisua ∈ [0, 1], 0 = osasun osoa, 1 = heriotzaren baliokidea
(Global Burden of Disease azterketak argitaratutako pisuak)
```

## Adibide landua

Eskualde bateko kribatze-gogorarazpen plataforma batek gaixotasun baten detekzio goiztiarra handitzen du. Urtean 10 heriotza goiztiar saihesten ditu (bakoitzak 20 urte galtzen ditu bizi-itxaropen estandarraren aldean) eta 200 pertsonak ezgaitasun-pisua 0.2 duen egoera batekin urte bat bizitzea saihesten du.

```
Saihestutako YLL = 10 × 20        = 200
Saihestutako YLD = 200 × 0.2      = 40
Saihestutako DALYak               = 240 urteko
```

Plataformak $600,000/urte kostatzen badu funtzionatzeko, saihestutako DALY bakoitzeko kostua 600,000 / 240 = **$2,500** da. BPG per capita $8,000 den herrialde batean, hori 1× BPG erreferentzia baino askoz txikiagoa da — WHO-CHOICE terminoetan "oso kostu-eraginkorra".

## Software ingeniaritzarekin lotura

- Osasun globaleko finantzatzaileei zuzendutako osasun digitalak (Gavi, Global Fund, programa nazionalak) inpaktua **saihestutako DALY bakoitzeko kostu** gisa adierazi behar du — diru-laguntzen berrikusleek dagoeneko pentsatzen duten metrika da.
- DALY ingeniaritzarako *zama-kontabilitate* txantiloi erabilgarria ere bada: intzidentziak, build hauskorrak eta legacy marruskadura kode-base baten "ezgaitasunarekin bizitako urteak" dira — toil-ez haztatutako zama-inbentarioak esaten dizu non erosten duen konponketak "ingeniaritza-urte osasuntsu" gehien, GBD zama-taulek osasun-gastua zuzentzen duten bezala.

## Tranpak

- **Irabazitako QALYak ≠ saihestutako DALYak numerikoki** — pisu desberdinak, bizitza-taula desberdinak, konbentzio desberdinak (DALYek historikoki adin-haztapena eta eguneratzea erabiltzen zituzten neurriaren barruan). Ez bihurtu arinki.
- **BPG-multiplo atalaseak zigilu gisa erabiltzea** — OMEk berak ohartarazten du aurrekontuak eta aukera-kostua baztertzen dituztela; ikus [ordaintzeko borondatearen atalaseak](../ordaintzeko-borondatearen-atalaseak/).
- **Populazio-eskalako DALYak erabiltzaile-eraginkortasunetik aldarrikatzea** hartzea eta atxikimendua biderkatu gabe — ikus [irismena eta ekitatea](../irismena-eta-ekitatea/).

## Iturriak

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
