# Míra nedostavení se (DNA)

Míra DNA je procento objednaných návštěv, na něž se pacient ani nedostaví, ani je nezruší. Klinik, místnost i termín jsou zaplaceny; nic se neděje. Je to nejčistší metrika plýtvání ve zdravotnictví – a jedna z nejlépe softwarově řešitelných.

## Proč na tom záleží

Údaje NHS England (2019): zmeškané návštěvy praktických lékařů přesahují 15 milionů ročně při ~30 £ za kus – přes **216 mil. £ ročně** – a nedostavení se k nemocničním ambulantním návštěvám činí ~8 mil. ročně (~6,4 % návštěv) při průměrných ~**160 £** za zmeškaný termín. Protože mezní náklad připomínky je v haléřích a získanou hodnotou je plně obsazený klinický termín, má snížení DNA jednu z nejlepších aritmetik ROI v digitálním zdraví, proto patřily SMS připomínky, snadné přeobjednání a prediktivní nadměrné objednávání mezi první prokázané úspěchy digitálního zdraví.

## Matematika

```
DNA rate = DNAs / booked appointments × 100

Value of reduction = appointments × ΔDNA rate × value per recovered slot

value per recovered slot: the slot is refilled (activity value / waiting-list
reduction) or it is not (staff time partially reusable) — mechanism matters,
as with bed-days-saved.md.
```

## Řešený příklad

Ambulantní oddělení: 200 000 návštěv ročně, míra DNA 8 %. Služba připomínek s přeobjednáním (SMS s přeobjednáním jedním klepnutím, informacemi o dopravě, přístupnými formáty) sníží DNA na 5,5 %.

```
Recovered slots = 200,000 × 0.025 = 5,000/year
Refilled from the waiting list at ~£160 average outpatient value:
  5,000 × £160 = £800,000/year of recovered activity
Service cost: 200,000 × £0.40 = £80,000/year

Return ≈ 10:1, plus 5,000 waiting-list patients seen sooner
(see waiting-list-impact.md and referral-to-treatment.md).
```

Velikost účinku (2,5 bodu) je realistická: RCT připomínek soustavně ukazují 25–40% relativní snížení DNA.

## Souvislost se softwarovým inženýrstvím

- **Je to problém plánovacích systémů**: připomínky, samoobslužné přeobjednání, automatické zaplnění čekací listiny ze zrušení a modely predikce nedostavení, které řídí cílené dvojí objednání. Každé je běžným softwarovým inženýrstvím s neobvykle jasným ekonomickým případem.
- **Inženýrská analogie**: nedostavení na rezervovanou kapacitu – zarezervované, ale nečinné sloty CI, rezervovaná kapacita cloudu, zasedací místnosti, panely pro pohovory. Ekonomika se přenáší: levné automatizované postrčení (nebo automatické uvolnění nevyužitých rezervací) získá zpět drahou zavázanou kapacitu.
- **Náhled etiky predikce**: modely nedostavení natrénované na datech o docházce kódují deprivaci a bariéry přístupu; jejich použití k *upozadění* pravděpodobných nedostavivších se prohlubuje nerovnost, jejich použití k *podpoře* docházky (pomoc s dopravou, telefonické alternativy) ji snižuje. Viz [dosah a rovnost](../dosah-a-rovnost/).

## Úskalí

- **Dvojí započtení zrušených a přeobjednaných termínů jako získané hodnoty.**
- **Oceňování získaných termínů, které se nezaplní** – prázdný termín s odeslanou připomínkou je stále prázdný.
- **Honba za nulovým DNA**: poslední body DNA jsou pacienti čelící skutečným bariérám; represivní přístupy (propuštění po N DNA) metriku snižují tím, že pacienty opouštějí.

## Zdroje

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- DNA cost summaries. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
