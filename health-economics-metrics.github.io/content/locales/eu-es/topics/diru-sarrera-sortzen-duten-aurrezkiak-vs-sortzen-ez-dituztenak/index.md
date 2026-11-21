# Diru-sarrera sortzen duten aurrezkiak vs sortzen ez dituztenak (Cash-Releasing vs Non-Cash-Releasing Savings)

Diru-sarrera sortzen duten aurrezkiek benetako gastua murrizten dute — aurrekontu-lerro bat txikiagoa bihurtzen da. Diru-sarrera sortzen ez dutenek denbora edo ahalmena askatzen dute, baina *berrerabili* egiten da, ez da kutxan sartzen. Osasun-sistemetako finantza-zuzendariek espezie ezberdintzat dituzte, eta zuk ere hala egin beharko zenuke.

## Zergatik axola duen

Hau da osasun-zerbitzu nazional bateko negozio-kasu digital oro gainditu behar duen zintzotasun-proba zorrotzena. NHSren onura-esparruek aldarrikatutako onura bakoitza zehatz-mehatz sailkatzen dute: diru-sarrera sortzen duena, sortzen ez duena edo kualitatiboa. Osasun digitaleko "aurrezki" gehienak — paziente bakoitzeko klinikoaren minutuak, dokumentazio azkarragoa — diru-sarrerarik sortzen ez dutenak dira: baliotsuak, baina ez dute defizita murrizten. Finantzaketa-hutsunea duen trust-eko finantza-zuzendariak dirua bakarrik gastatu dezake. Ikus [diru-sarrera sortzen duten aurrezki gogorrak](../diru-sarrera-sortzen-duten-aurrezki-gogorrak/) ere.

## Matematika

```
Diru-sarrera sortzen duen aurrezkia = aurrekontu-lerroa lehen − aurrekontu-lerroa ondoren
                          (erauzgarria izan behar du: kontratu bertan behera utzia, ataria ixtea,
                           agentzia-gastu murriztua, erosketa saihestua)

Diru-sarrera sortzen ez duen balioa = askatutako denbora × denbora horren unitate-kostua
                          (aukera-kostuan balioetsia; dirua EZ da erauzgarria)
```

Gertaera fisiko bera (aurreztutako ordu bat) kategoria batean edo bestean sartzen da hurrengoan gertatzen denaren arabera:

```
aurreztutako ordua → ordu estra/agentzia-txanda bertan behera → diru-sarrera sortzen du
aurreztutako ordua → klinikoak itxaroten duen paziente bat gehiago ikusten du → diru-sarrera sortzen ez duena (ahalmena)
aurreztutako ordua → tartean xurgatua, ezer ez da aldatzen → onurarik batere ez
```

## Adibide landua

Software batek 100 erizainetako bakoitzari 30 minutu aurrezten dizkio txanda bakoitzeko. Hori 100 × 0.5 × 5 txanda/aste × 46 aste ≈ 11.500 ordu/urte da. 5. Bandako ~£25/orduko enplegatzaile-kostuarekin, titular erakargarria £287,500/urte da.

Banaketa zintzoa:

- Denboraren %20 egun atalek bank/agentzia prima ordaintzen duten lekuan erortzen da dokumentazioaren gehiegikeriak estaltzeko: 2,300 ordu × £35 agentzia-tasa = **£80,500 diru-sarrera sortzen duena** (txandak benetan erreserbatu gabe).
- %60 zuzeneko pazienteen arretara birbideratzen da: 6,900 ordu × £25 = **£172,500 diru-sarrera sortzen ez duen ahalmena** — benetako balioa, bereizita jakinarazia, inoiz "aurrezki" deitu gabe.
- %20 atsedenetan eta eten-aldietan barreiatzen da: **£0**. Hori aldarrikatzea fikzioa litzateke.

£80.5k diru-sarrera + £172.5k ahalmena aurkezten dituen negozio-kasu bat sinesgarria da. £287.5k "aurrezki" aurkezten dituena irakurtzen duen lehen kontulariak baztertzen du.

## Software ingeniaritzarekin lotura

Logika bera gobernatzen du AA kodetze-laguntzaileen ROIa: "30 minutu garatzaile bakoitzeko egunean" diru-sarrera sortzen ez duen ahalmena da, plantillak, kontratisten gastuak edo hodei-kostuak benetan jaisten ez badira. Jakinarazi kategoriak bereizita:

- Diru-sarrera sortzen duena: bertan behera utzitako kontratista-lanak, desegindako tresna-lizentziak, hodei-gastu murriztua.
- Ahalmena: lehenago entregatutako funtzionalitateak (balioa [atzerapenaren kostuaren](../atzerapenaren-kostua/) bidez), backlog-a murriztua.
- Ezer ez: testuinguru-aldaketetan zatitzen diren aurreztutako minutuak.

Jarraitu ere *askatutako denbora benetan nora joan den* — onuren gauzapena ([benefits-realization.md](../onuren-gauzapena/)) existitzen da aldarrikatutako ahalmen-irabaziak sarri auditoretzan lurruntzen direlako.

## Tranpak

- **Minutuak soldatarekin biderkatzea eta aurrezki deitzea** — bekatu kanonikoa.
- **Askatutako denbora batez besteko kostu osoan balioestea** denbora horren erabilera marjinala balio gutxikoa denean — ikus [kostu marjinala vs batez bestekoa](../kostu-marjinala-vs-batez-bestekoa/).
- **Ordu bera bi aldiz zenbatzea**: dirutzat (txanda saihestua) eta ahalmentzat (paziente gehigarriak ikusiak).

## Iturriak

- NHS Digital connectivity business case guidance, economic case (benefit categories). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
