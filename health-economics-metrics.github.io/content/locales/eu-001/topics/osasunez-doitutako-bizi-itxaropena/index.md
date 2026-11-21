# Osasunez doitutako bizi-itxaropena (Health-Adjusted Life Expectancy, HALE)

HALE populazio-mailako laburpena da: pertsona batek *osasun betean* bizitzea espero dezakeen urte-kopurua, gaixotasunean edo ezgaitasunean igarotako urteak kenduta. HALE globala jaiotzean 61,9 urte ingurukoa zen bizi-itxaropena 73,3 zenean (OME, 2019ko datuak) — gizateriak azken hamarkada, batez beste, osasun osoa baino gutxiagorekin bizi du.

## Zergatik axola duen

HALE osasun-politika nazional eta globalaren iparrorratz-metrika da — "zahartze osasuntsua" helburuen zenbakitzailea, eta agerian uzten duen tartea (bizi-itxaropena ken HALE) prebentzioak, esku-hartze goiztiarrak eta gaixotasun kronikoen kudeaketak itxi nahi duten zama da. Ministerio-mailako osasun digitaleko estrategiak HALE terminoetan justifikatzen dira; aplikazio, kribatze-zerbitzu eta monitorizazio-programen zorro batek azkenean hemen batzen du.

## Matematika

Kalkulu estandarra **Sullivan metodoa** da:

```
HALE_adina_x = Σ (bizitza-taulako pertsona-urteak adin bakoitzean ≥ x × osasun betean dagoen proportzioa)
               / x adinean bizirauten dutenak

"osasun betean dagoen proportzioa" = 1 − Σ (egoeraren prebalentzia × ezgaitasun-pisua)
```

Sarrerak: bizitza-taula estandar bat gehi osasun-egoeren prebalentzia eta ezgaitasun-pisuak (Global Burden of Disease datuetatik). HALE [DALY](../ezgaitasunez-doitutako-bizi-urtea/)ekin lotuta dago — populazioaren DALY zama eta HALE tartea galdutako osasun beraren bi ikuspegi dira.

## Adibide landua

Hipertentsio-programa digital nazional bat: 500.000 izena emanda, odol-presioaren kontrol-hobekuntzak iktus-intzidentzia urteko 0,2 puntu-portzentuan murrizten du. Kohortearen bizitza osoan modelatuta, saihestutako iktusek 15.000 ezgaitasunez haztatutako urte aurrezten dituzte (YLD 0.32 pisuarekin gehi iktus hilgarrien YLL).

```
HALE ekarpena ≈ 15,000 urte osasuntsu / 500,000 pertsona
              ≈ 0.03 urte (≈ 11 egun) HALE izena emandako pertsona bakoitzeko
```

Hamaika egun txikia dirudi — baina populazio-eskalan horrela mugitzen dira benetan metrika nazionalak: ministerioek pertsona bakoitzeko irabazi txiki milioika erosten dituzte. Aritmetika honek ere erakusten du zergatik menderatzen duen **irismenak**: bi aldiz eraginkorragoa den baina izen-ematearen hamarrena duen esku-hartze batek bost aldiz gutxiago mugitzen du HALE. Ikus [irismena eta ekitatea](../irismena-eta-ekitatea/).

## Software ingeniaritzarekin lotura

HALE flota-osasun metrikaren eredua da: **zerbitzu-bizitza esperoa × bizitza horren zenbat osasuntsu pasatzen den**. Plataforma-talde batek "zerbitzu-bizitza osasuntsuaren itxaropena" kalkula dezake bere patrimonio osoan — zerbitzu batek funtzionatzea espero den urteak, egoera degradatu, zaharkitu edo intzidentzia-egoeretan emandako denboragatik deskontatuta (pisuak SLO hutsegiteetatik). Fidagarritasuna erabilgarritasun-puntualetik bizitza-osasunera birformulatzen du, eta konponketa patrimonioaren HALE behera tiratzen duten sistemetara zuzentzen du.

## Tranpak

- **HALE poliki eta kausa anitzez mugitzen da** — esku-hartze bakar batek ez du neurgarriki "HALE mugitzen"; aldarrikatu modelatutako ekarpena, ez estatistika nazionala.
- **Prebalentzia-datuak urteak atzeratuta daude**; azken irabaziak ez dira HALE ofizialean ikusiko.
- **HALE herrialde artean alderatzea** osasun-egoeren neurketa desberdinekin tranpatsua da; erabili luzetarako sistema berean.

## Iturriak

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
