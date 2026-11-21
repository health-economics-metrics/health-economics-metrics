# Aurrekontu-inpaktuaren analisia (Budget Impact Analysis, BIA)

BIAk estimatzen du esku-hartze bat onartzeak ordaintzaile zehatz baten **aurrekontuari** zer egiten dion hurrengo 1–5 urteetan. *Eskuragarritasunari* erantzuten dio; kostu-eraginkortasunak *balioari*. Teknologia bat balio bikaina izan daiteke eta ordaindu ezina izan — edo ordain daiteke eta balio eskasekoa. Ebaluazio serioek biak eskatzen dituzte.

## Zergatik axola duen

Finantza-zuzendariaren galdera ez da inoiz "zein da ICERa?" — "zer egiten dio honek datorren urteko aurrekontuari?" da. ISPORen jardunbide onen gidak (arloko estandarra) zehazten du: ordaintzailearen bere ikuspegia, 1–5 urteko horizontea, urteko diru-fluxu *deskontatu gabeak*, hartze-kurba errealistak eta agertoki-ziurgabetasuna (ez probabilistikoa). NICEk aurrekontu-inpaktuaren informazioa eskatzen du kostu-eraginkortasunarekin batera; Ingalaterran urteko ~£20M baino aurrekontu-inpaktu nazional handiagoa duen produktuak negoziazio komertziala abiarazten du, ICERa edozein dela ere.

## Matematika

```
BI_urtea_t = Kostua_agertoki_berriarekin(t) − Kostua_agertoki_egungoa(t)

Kostua_agertokia(t) = Σ paziente-taldeen gainean:
   populazio egokia(t) × hartzea(t) × paziente bakoitzeko kostu garbia(t)

paziente bakoitzeko kostu garbia = esku-hartzearen kostua − ordezkatutako arretaren kostua + eragindako arretaren kostua
```

Eredu-hautu giltzarriak: populazio egokiaren hazkundea, hartze-kurba (onarpena ez da inoiz berehalakoa), aukera berriak zer ordezkatzen duen, eta *eragiten duen* edozein eskari (sarbide errazagoa → erabiltzaile gehiago).

## Adibide landua

2M pertsona estaltzen dituen ordaintzaile batek terapia digital bat aztertzen du £300/paziente/urte; bazkideen %1,5 egokiak (30.000); hartzea %20 → %40 → %60 3 urtetan; erabiltzaile bakoitzak £120/urte beste arreta ordezkatzen du.

```
Erabiltzaile bakoitzeko kostu garbia = 300 − 120 = £180

1. urtea: 30,000 × 0.20 × 180 = £1.08M
2. urtea: 30,000 × 0.40 × 180 = £2.16M
3. urtea: 30,000 × 0.60 × 180 = £3.24M
```

Produktuaren ICERa £8,000/QALY bikaina izan arren, ordaintzaileak £3.24M *diru berri* aurkitu behar ditu 3. urterako — ordezkatutako £120 beste aurrekontu-lerro askotan barreiatuta dago eta ez da dirua bezala askatuko ([diru-sarrera sortzen duten aurrezkiak vs sortzen ez dituztenak](../diru-sarrera-sortzen-duten-aurrezkiak-vs-sortzen-ez-dituztenak/) ikus). Horregatik dira unitate-balioa eta eskuragarritasuna langa bereiziak.

## Software ingeniaritzarekin lotura

BIA eserleku bakoitzeko ROI aldarrikapenaren finantza-zuzendariari begirako osagarria da: "garatzaile bakoitzeko kostu-eraginkorra da, baina ahal dugu erakunde osoko hedapena ordaindu aurrekontu-urte honetan?" Modelatu lizentzia-mailak, onarpen-S kurba bat, kontratu zaharrak benetan amaitzen direnean bakarrik dirua askatzen duen ordezkatutako tresna-gastua, eta eragindako erabilera (CI merkeagoa → CI gehiago). 3 urteko aurrekontu-inpaktuko taula ROIarekin batera aurkezteak egiten du enpresa-tresnen proposamen bat finantzaz sinesgarri. Argitaratutako aurrekontu-inpaktuaren guztizko bat lekuen, kohorteen edo finantza-urteen artean zatitzea — eta zatiek argitaratutako zifrarekin zehatz-mehatz koadratzea — [zentimo zehatzeko kostu-esleipena](../zentimo-zehatzeko-kostu-esleipena/) da; guztizkoa elikatzen duten lerro asko batzea [moneta-segurua den kostu-agregazioa](../moneta-segurua-den-kostu-agregazioa/) da.

## Tranpak

- **Berehalako hartzearen fantasia**: 1. urteko inpaktua egoera egonkorreko onarpenarekin kalkulatzea.
- **Ordezkatutako kostua dirutzat zenbatzea** ahalmen barreiatua denean.
- **Eragindako eskaria ez ikustea** — sarbide-hobekuntzek populazio egokiaren erabilera handitzen dute.
- **BIA eta CEA horizonteak/eguneratzea nahastea**: BIA diseinuz epe laburrekoa, deskontatu gabea eta ordaintzaile-espezifikoa da.

## Iturriak

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
