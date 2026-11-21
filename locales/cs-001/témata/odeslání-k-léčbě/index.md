# Odeslání k léčbě (RTT)

Odeslání k léčbě je doba, která uplyne od doporučení praktickým lékařem do zahájení léčby vedené konzultantem. Standard stanoví NHS Constitution: **92 % pacientů by mělo zahájit léčbu do 18 týdnů**. RTT je nejpolitičtěji viditelnou provozní metrikou anglického NHS.

## Proč na tom záleží

Trusty, které cíle RTT zmeškají, čelí regulačnímu dohledu, zásahu a poškození pověsti; národní čekací listina je číslo na titulní straně. Každý týden čekání je ztracené zdraví (čekání v horším zdravotním stavu – viz matematika QALY níže) a často získaný náklad (stavy se zhoršují; viz [dřívější intervence](../dřívější-intervence/)). Software, který šetří čas kdekoli na cestě od odeslání k léčbě – triáž, rychlost diagnostiky, kapacita klinik, plánování – přímo zmírňuje provozní a finanční důsledky nesplnění standardu, proto je dopad RTT plnohodnotnou přínosovou řádkou v digitálních byznys případech NHS.

## Matematika

```
RTT performance = patients treated within 18 weeks / total treated × 100
Waiting-time health cost per patient = wait duration × (utility_treated − utility_waiting)
Pathway view: RTT = Σ stage durations (referral triage → first appointment →
diagnostics → decision → treatment) — improve the longest queue, not the
busiest stage (see flow-metrics.md).
```

## Řešený příklad

Obor léčí 5 000 pacientů cesty ročně; průměrné čekání 24 týdnů; užitek při čekání 0,68 vs léčený 0,80.

Digitální triáž plus protokoly rovnou na vyšetření odstraní 5 týdnů čisté fronty:

```
QALY gain = 5,000 × (5/52) × (0.80 − 0.68) = 57.7 QALYs/year
Monetized at £20,000–£30,000/QALY (see willingness-to-pay-thresholds.md):
  ≈ £1.15M–£1.73M/year of health value
```

– plus trust přejde od porušování ke splňování 18týdenního standardu, což má hodnotu pro správu, kterou žádná tabulka plně nezachytí.

## Souvislost se softwarovým inženýrstvím

RTT je **metrika doby realizace přes vícefázovou frontu** – nemocniční verze doby realizace od commitu do produkce (viz [metriky DORA](../metriky-dora/)). Metoda zlepšování je totožná: instrumentujte každou fázi, najděte, kde se kalendářní čas hromadí (téměř vždy jde o předání a fronty, nikoli klinickou práci), a odstraňte stavy čekání. Typické softwarové úspěchy: e-triáž, která směruje doporučení v hodinách místo týdenních dávek, zasílání výsledků diagnostiky místo kontrolních návštěv a automatizovaná kritéria rovnou na vyšetření. Ocenění zlepšení pomocí [nákladů zpoždění](../náklady-zpoždění/) vyjádřených v QALY/týden.

## Úskalí

- **Zlepšování fáze, která není omezením** – zkracování čekání na první návštěvu, zatímco fronty diagnostiky rostou, jen přesouvá kaluž.
- **Hrátky**: resety cesty a pozastavení hodin mohou zlepšit vykázané RTT, aniž by kdokoli byl léčen dříve; auditujte podkladové rozdělení.
- **Nárokování celého zlepšení cesty** pro jeden nástroj, když dorazilo několik změn současně – přičítání potřebuje komparátor.

## Zdroje

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
