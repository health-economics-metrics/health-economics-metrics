# Naděje dožití upravená o zdraví (HALE)

HALE je populační souhrn: počet let, které může člověk očekávat, že prožije *v plném zdraví*, bez let strávených v nemoci či disabilitě. Globální HALE při narození byla asi 61,9 roku oproti naději dožití 73,3 (WHO, data z roku 2019) – lidstvo prožívá svou poslední dekádu v průměru v ne zcela plném zdraví.

## Proč na tom záleží

HALE je severní hvězdou národní a globální zdravotní politiky – čitatelem cílů „zdravého stárnutí“ a mezera, kterou odhaluje (naděje dožití minus HALE), je zátěž, kterou prevence, dřívější intervence a řízení chronických onemocnění mají zavřít. Strategie digitálního zdraví na úrovni ministerstev se zdůvodňují v termínech HALE; portfolio aplikací, screeningových služeb a monitorovacích programů se nakonec sčítá zde.

## Matematika

Standardním výpočtem je **Sullivanova metoda**:

```
HALE_age_x = Σ (life-table person-years at each age ≥ x × proportion in full health)
             / survivors at age x

"proportion in full health" = 1 − Σ (prevalence_condition × disability weight)
```

Vstupy: standardní úmrtnostní tabulka plus prevalence a váhy disability pro zdravotní stavy (z dat Global Burden of Disease). HALE souvisí s [DALY](../rok-života-upravený-o-disabilitu/) – populační zátěž DALY a mezera HALE jsou dva pohledy na totéž ztracené zdraví.

## Řešený příklad

Národní digitální program pro hypertenzi: 500 000 zapsaných, průměrná kontrola krevního tlaku se zlepší natolik, že sníží incidenci mrtvic o 0,2 procentního bodu ročně. Při modelování na celoživotním horizontu kohorty odvrácené mrtvice ušetří 15 000 let vážených disabilitou (YLD s váhou 0,32 plus YLL z fatálních mrtvic).

```
HALE contribution ≈ 15,000 healthy years / 500,000 people
                  ≈ 0.03 years (≈ 11 days) of HALE per enrolled person
```

Jedenáct dní zní málo – ale v populačním měřítku se tak národní metriky skutečně hýbou: ministerstva nakupují miliony drobných zisků na osobu. Tato aritmetika také ukazuje, proč **dosah dominuje**: intervence dvakrát účinnější s desetinou zápisu pohne HALE pětkrát méně. Viz [dosah a rovnost](../dosah-a-rovnost/).

## Souvislost se softwarovým inženýrstvím

HALE je vzorem metriky zdraví flotily: **očekávaná životnost služby × podíl této životnosti stráveného ve zdraví**. Platformní tým může spočítat „zdravou očekávanou životnost služeb“ napříč svým majetkem – roky, po které se služba očekává v provozu, snížené o čas strávený ve zhoršených, zastaralých nebo incidentních stavech (váhy z nedostatku SLO). Přerámuje spolehlivost z bodové dostupnosti na celoživotní zdraví a směruje nápravu na systémy, které táhnou HALE celého majetku dolů.

## Úskalí

- **HALE se mění pomalu a z více příčin** – žádná jediná intervence měřitelně „nehýbe HALE“; nárokujte modelovaný příspěvek, nikoli národní statistiku.
- **Data o prevalenci zaostávají** o roky; nedávné zisky se v oficiální HALE neprojeví.
- **Srovnávání HALE napříč zeměmi** s odlišným měřením zdravotních stavů je zrádné; používejte ji longitudinálně v rámci jednoho systému.

## Zdroje

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
