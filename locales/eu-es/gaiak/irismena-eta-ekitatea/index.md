# Irismena eta ekitatea (Reach and Equity)

RE-AIM (Reach, Effectiveness, Adoption, Implementation, Maintenance; irismena, eraginkortasuna, hartzea, ezarpena, mantentzea) esku-hartze baten *populazio* mailako inpaktua epaitzeko esparru estandarra da. Bere aritmetika zentrala: **osasun publikoaren inpaktua ≈ irismena × eraginkortasuna**. Tresna digitalek ekitate-dimentsio bat gehitzen dute: zulo digitalak irismena sistematikoki irregularra egiten du, eta lehen-digitala den entregak itxi nahi dituen osasun-arrakalak zabal ditzake.

## Zergatik axola duen

RE-AIM mHealth-i aplikatzen dieten berrikuspen sistematikoek sinadura koherente bat aurkitzen dute: Irismen eta Hartze sendoak, **Eraginkortasun eta Mantentze ahulak**; aplikazioak erraz hedatzen dira eta azkar itzaltzen dira. Osasun-zerbitzu nazional batentzat, horrek esan nahi du erabiltzaile bakoitzeko produktu liluragarri bat populazio-inbertsio kaxkarra izan daitekeela, eta alderantziz: milioika pertsonengana iristen den tresna apal eraginkor batek milaka pertsonengana iristen den bikain batek baino gehiago sor dezake (ikus [HALE](../osasunez-doitutako-bizi-itxaropena/) aritmetika). Ekitatea ez da albo-murrizketa bat, balio-eragile bat baizik: bazterketa digitalak adinarekin, pobreziarekin, ezgaitasunarekin eta hizkuntzarekin bat egiten du, hau da, tratagarria den zama gehien daramaten populazioekin, beraz kanpoan geratzen den erabiltzaile marjinalak sarritan batez bestekoaren *gaineko* onura-potentziala du. Osasun-desberdintasun sozioekonomikoaren neurri estatistiko formal baterako, ikus [kontzentrazio-indizea](../kontzentrazio-indizea/).

## Matematika

```
Population impact ≈ reach × effectiveness
  reach         = participants / eligible population (see activation-and-uptake.md)
  effectiveness = real-world effect among participants (retention-weighted —
                  see retention-and-churn.md)

Equity-stratified version:
  impact_group_g = reach_g × effectiveness_g, reported per deprivation
  quintile / age band / language group
  equity gap = impact_top quintile − impact_bottom quintile

Distributional cost-effectiveness: apply equity weights to QALYs by
recipient group — a QALY to the worst-off counts more (an increasingly
mainstream HTA extension).
```

## Adibide landua

Diabetesa prebenitzeko programa digital bat, bi eratara jakinarazita:

```
Aggregate: reach 12%, effect 0.02 QALYs/participant → 0.0024 QALYs/eligible person

Stratified (deprivation quintiles):
  Q1 (least deprived): reach 22%, effect 0.02 → 0.0044
  Q5 (most deprived):  reach 4%,  effect 0.025 → 0.0010

The programme delivers 4.4× more health to the least deprived —
while Q5's per-participant effect is HIGHER (more headroom). An
assisted-digital arm (phone coaching + community access) costing 20%
more per Q5 participant that lifts Q5 reach to 12% triples Q5 impact
and improves the aggregate — the equity investment IS the efficiency
investment here.
```

## Software ingeniaritzarekin lotura

Irismena neurri handi batean ingeniaritza-artefaktu bat da: gailu- eta SE-lurzoruko eskakizunak, banda-zabalerako hipotesiak, hizkuntza-euskarria, irisgarritasun-betetzea (WCAG), nortasun-egiaztapeneko oztopoak eta aplikazio-denda bidezko banaketa bakarrak populazioak izendatzailetik kentzen dituzte, normalean ikusezin moduan, bazterturiko erabiltzaileak ez direlako inoiz analitikan agertzen. Ekitatea mugitzen duten ingeniaritza-praktikak: neurtu *izendatzailea* (instrumentatu populazio eskuragarria, ez erabiltzaileak soilik); aurrekontua egin errendimendua gailu zaharrentzat eta konexio eskasarentzat; bidali laguntza digitaleko bideak (telefonoa, SMS, kiosko) lehen mailako fluxu gisa, ez lotsa-kanal gisa; eta estratifikatu panel bakoitzeko metrika ekitate-dimentsioen arabera: estratifikatu gabeko batez bestekoa da desberdintasuna ezkutatzen den lekua ([GDS hartzea](../gds-zerbitzu-metrikak/) abisu bera darama).

## Tranpak

- **Eraginkortasuna amaitu dutenetan jakinaraztea, inpaktua populazioetan aldarrikatzea** — irismen-terminoak isilean botata.
- **Ekitatea ondorengo auditoria gisa**, diseinu-sarrera gisa baino; irismena atzera-begira konpontzea diseinatzea baino askoz garestiagoa da.
- **Mantentze-amnesia**: RE-AIMen mHealth dimentsio ahulena; ebidentziaren denbora-horizontetik haratagoko inpaktu-aldarrikapenak.
- **Kanal digital bakarreko aurrezkiak** kostuak bazterturiko erabiltzaileei eta lehen lerroko langileei lekualdatzen dietenak (ikus [GDS zerbitzu-metrikak](../gds-zerbitzu-metrikak/)).

## Iturriak

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
