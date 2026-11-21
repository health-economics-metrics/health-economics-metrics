# Diru-sarrera sortzen duten aurrezki gogorrak (defizitaren defentsa) (Hard Cash-Releasing Savings, Deficit Defence)

Diru-sarrera sortzen duten aurrezki gogorrak ospitale batek zure softwareagatik datorren hileko aurrekontutik aktiboki **ezaba** ditzakeen lerroak dira. Kontulari finantzario zorrotz batentzat — eta defizita duen trust batentzat — onura-klase honek bakarrik kontatzen du osoki.

## Zergatik axola duen

NHSren trust askok defizita berreskuratzeko planekin funtzionatzen dute, gastu-lerro bakoitzaren zorroztasun handiko ikuskapenarekin. Ingurune horretan, ahalmen-onurek eta kalitate-hobekuntzek — benetakoak badira ere — ez dute hutsunea ixten; dirua bakarrik. Aurrekontu-lerroak ezabatzen dituela frogatu dezakeen software-produktu bat finantza-zuzendariaren ikuspegitik *bere burua finantzatzen duena* da, eta horrek erosketa eraldatzen du: elkarrizketa "ordain dezakegu hau?" izateari uzten dio eta "ordain dezakegu ez egitea?" bihurtzen da. Dokumentu hau [diru-sarrera sortzen duten aurrezkiak vs sortzen ez dituztenak](../diru-sarrera-sortzen-duten-aurrezkiak-vs-sortzen-ez-dituztenak/)ren defizitari begirako muturra da.

## Matematika

NHSren diru gogorreko helburu fidagarriena **tarteko langile primadunak** dira. Trustek hutsuneak barne "Bank" langileekin (ia-estandar tasetan ordainduak) eta kanpo "Agency" langileekin (askotan Agenda for Change tasen 2–3×, mugatuak baina rol urrietan maiz urratuak) estaltzen dituzte.

```
Aurrezki gogorra = saihestutako prima-txandak × (prima-tasa − langile finkoen tasa)
                 + saihestutako ordu estrak × ordu estraren prima
                 + bertan behera utzitako kanpo-kontratuak × kontratuaren balioa

Mekanismoaren eskakizuna: izendatu aurrekontu-lerro zehatza eta murrizketa
baieztatuko duen kudeatzailea. Inork lerroa seinalatu ezin badu, ez da diru gogorra.
```

## Adibide landua

6. Bandako erizain batek ordu bat inguru galtzen du txanda bakoitzeko administrazio-gainkargan; dokumentazioa maiz txandaren amaieratik haratago doa ordu estrara, eta atalek Bank estaldura gehigarria erreserbatzen dute dokumentazioa egunean jartzeko.

Softwareak ordu hori programatutako txandara itzultzen du 300 erizainetan:

```
Saihestutako ordu estrak: 300 erizain × 2.5 ordu ekstra ordainduak/aste × £8 prima × 46 aste
                          ≈ £276,000/urte
Bank/agency txandak:      15 dokumentazio-txanda/aste × £180 prima × 52
                          ≈ £140,400/urte
Diru gogorra guztira      ≈ £416,000/urte, ~£150,000ko lizentzia-kostuaren aurka
```

Pfuntu bakoitza e-rostering eta nomina-sistemen aurka auditagarria da — hain zuzen onura hilero, [onuren gauzapenaren](../onuren-gauzapena/) bidez, ebidentziatu behar den modua. (Argitaratutako NHS langile-ereduek £1 gastatuko £11+ aurreztuko lituzketen ratioak aldarrikatu dituzte mekanismo honekin; tratatu ratio horiek *zure* trustaren rostering datuetarako hipotesi gisa, ez egitate eramangarri gisa.)

## Software ingeniaritzarekin lotura

Agency primaren ingeniaritza-baliokideak erakundearen beraren larrialdi-erosketak dira: entrega-hutsuneak estaltzen dituzten kontratisten eguneko tasak, intzidentziek eragindako ordu estrak, laguntza azkarreko kontratuak eta hodei spot-prezioko izua. Diru gogorra aldarrikatzen duen produktibitate-softwareak lerro horiek diziplina berarekin hartu behar ditu helburu — izendatu aurrekontu-lerroa, jabea eta txikitzen den hilabetea. Entregatzen duen gainerako guztia ahalmena ([balioa sortzeko ahalmena](../balioa-sortzeko-gaitasuna-eragiketa-berreskurapena-value-generating-capacity-operational-turnaround/)) edo kalitatea da: benetakoa, baliotsua eta desberdina.

## Tranpak

- **Ahalmena "aurrezki" deitzea** — finantzekin sinesgarritasuna berehala hiltzen duena; ikus sailkapena [diru-sarrera sortzen duten aurrezkiak vs sortzen ez dituztenak](../diru-sarrera-sortzen-duten-aurrezkiak-vs-sortzen-ez-dituztenak/)-n.
- **Saltzailearen ereduko ratioak tokiko egitate gisa aurkeztea** (£11:£1 arazoa) — berreraiki eredua trustaren rostering datuekin.
- **Behin-bakarreko vs berrerrepikakorra nahastea**: bertan behera utzitako kontratu batek bere balioa urtean behin aurrezten du, ez behin bakarrik; ezabatutako lanpostu batek soldata aurrezten du ezabatuta dagoen bitartean bakarrik.

## Iturriak

- NHS England, reducing agency spend in the NHS. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Digital business case guidance, economic case. <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
