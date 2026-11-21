# Gesondheetsbereenegt Liewenserwaardung (HALE)

HALE ass eng Zesummefaassung op Populatiounsniveau: d'Zuel u Joer, déi eng Persoun erwaarde ka *a voller Gesondheet* ze liewen, wann Joer a Krankheet oder Behënnerung ofgezunn ginn. Déi global HALE bei der Gebuert war ongeféier 61,9 Joer géint eng Liewenserwaardung vun 73,3 (WHO, 2019-Daten) — d'Mënschheet lieft ëmmer am Duerchschnëtt hiert lescht Joerzéngt a manner wéi voller Gesondheet.

## Firwat et wichteg ass

HALE ass d'Nordstär-Metrik vun der nationaler a globaler Gesondheetspolitik — den Zieler vun den „gesond Alteren"-Zielen, an d'Lück, déi se opdeckt (Liewenserwaardung minus HALE), ass d'Belaaschtung, déi Präventioun, fréi Interventioun a Chronesch-Krankheeten-Management zoumaachen wëllen. Digital Gesondheetsstrategien op Ministère-Niveau ginn a HALE-Begrëffer gerechtfäerdegt; e Portfolio vun Apps, Screening-Servicer a Monitoring-Programmer rullt schlussendlech hei op.

## D'Mathematik

Déi Standardberechnung ass d'**Sullivan-Method**:

```
HALE_Alter_x = Σ (Liewenstabell-Persounejoer bei all Alter ≥ x × Undeel a voller Gesondheet)
               / Iwwerliewend am Alter x

„Undeel a voller Gesondheet" = 1 − Σ (Prävalenz_Zoustand × Behënnerungsgewiicht)
```

Inputs: eng Standard-Liewenstabell plus Prävalenz a Behënnerungsgewiichter fir Gesondheetszoustänn (aus Global-Burden-of-Disease-Daten). HALE hänkt mat [DALYs](../behënnerungsbereenegt-liewensjoer/) zesummen — populatiounsweit DALY-Belaaschtung an d'HALE-Lück sinn zwou Sichte vun der selwechter verluerer Gesondheet.

## Berechent Beispill

E nationaalt digitaalt Hypertonie-Programm: 500.000 ageschriwwen, duerchschnëttlech Bluttdrock-Kontroll verbessert sech genuch, fir d'Schlaganfall-Inzidenz em 0,2 Prozentpunkten/Joer ze senken. Iwwer d'Liewe vun der Kohort modelléiert, spueren vermeid Schlaganfäll 15.000 behënnerungsgewiichte Joer (YLD bei Gewiicht 0,32 plus YLL aus déidlechen Schlaganfäll).

```
HALE-Bäitrag ≈ 15.000 gesond Joer / 500.000 Leit
             ≈ 0,03 Joer (≈ 11 Deeg) HALE pro ageschriwwene Persoun
```

Eelef Deeg kléngt wéineg — awer op Populatiounsskala ass et, wéi nationale Metriken sech tatsächlech beweegen: Ministèren kafen Millioune vu winzege Gewënn pro Persoun. Dës Arithmetik weist och, firwat **Reechwäit dominéiert**: eng Interventioun, déi zweemol sou effektiv ass mat engem Zéngtel vun der Aschreiwung, beweegt HALE fënnef Mol manner. Kuckt [Reechwäit an Equity](../reechwäit-a-gerechtegkeet/).

## Bezuch zur Softwareentwécklung

HALE ass e Flott-Gesondheet-Metrikmuster: **erwaart Service-Liewen × Undeel vun deem Liewen, dat gesond verbruecht gëtt**. E Plattform-Team ka „gesond Service-Liewenserwaardung" iwwer säi Bestand berechnen — Joer, déi e Service erwaart leeft, diskontéiert duerch Zäit an degradéierten, deprecated oder Incident-Zoustänn (Gewiichter aus SLO-Mankem). Et rahmt Zouverlässegkeet vu Punkt-Verfügbarkeet op Liewenszäit-Gesondheet ëm, a riicht Remediatioun op d'Systemer, déi dem Bestand säin HALE erofzéien.

## Falen

- **HALE beweegt sech lues a multikausal** — keng eenzel Interventioun „beweegt HALE" moossbar; de modelléierte Bäitrag behaapten, net déi national Statistik.
- **Prävalenzdaten hunn Joren Verspéidung**; rezent Gewënn erschéngen net am offiziellen HALE.
- **HALE iwwer Länner vergläichen** mat verschiddener Gesondheetszoustandsmoossung ass heikel; et longitudinal bannent engem System benotzen.

## Quellen

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
