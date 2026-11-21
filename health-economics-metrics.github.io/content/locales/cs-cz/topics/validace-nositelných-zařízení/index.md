# Validace nositelných zařízení

Validační metriky kvantifikují, jak dobře měření nositelného zařízení souhlasí s klinickým zlatým standardem (EKG pro tepovou frekvenci, polysomnografie pro spánek): **MAPE**, konkordanční korelace, shoda podle Blanda–Altmana – plus provozní metriky, které řídí kvalitu dat z reálného provozu: **dodržování doby nošení** a **úplnost dat**.

## Proč na tom záleží

Validace je předpokladem všeho následného: zařízení, které nedokáže prokázat shodu s referenčním měřením, nemůže ukotvit [digitální cílové ukazatele](../digitální-cílové-ukazatele-a-biomarkery/), podpořit [fakturaci RPM](../ekonomika-vzdáleného-monitorování-pacientů/) ani nést klinická tvrzení. Obecně přijímané prahy pro tepovou frekvenci: **MAPE ≤ 5 %** (přísný) nebo **≤ 10 %** (shovívavý) oproti EKG. Referenční body z literatury: Oura Gen 3 klidová TF MAPE 1,67 % (CCC 0,97); Fitbit Charge 6 MAPE ~5,5 % – spotřební zařízení nyní překlenují hranici klinické kvality, což je přesně důvod, proč měření záleží po zařízení a po stavu.

## Matematika

```
MAPE = (1/n) Σ |measured_i − reference_i| / reference_i × 100
CCC (concordance correlation) = agreement including both correlation
      and systematic bias (Pearson r penalized by location/scale shift)
Bland–Altman: mean bias ± 1.96 SD limits of agreement — shows whether
      error depends on the value's magnitude
Operational gates:
Wear-time compliance = time worn / protocol time × 100
Data completeness    = observed data points / expected × 100
```

Validace se musí uvádět **po podmínce aktivity** (klid, pohyb, spánek) a po populaci – optické snímání PPG se zhoršuje pohybovými artefakty, špatným kontaktem a tmavšími odstíny kůže, zdokumentovaný způsob selhání relevantní pro rovnost.

## Řešený příklad

Program virtuálního oddělení vybírá monitorovací nositelné zařízení. Kandidát A: MAPE v klidu 2,1 %, při cvičení 11,4 %. Kandidát B: v klidu 3,8 %, při cvičení 6,9 %.

```
Use case: deteriorating-patient detection at home — alerts trigger on
sustained elevated HR, often during activity.
Candidate A's headline (2.1%) wins the brochure; candidate B wins the
use case: at the alert-relevant condition (motion), A's 11.4% error
at HR 100 = ±11 bpm — spanning the entire alert threshold band,
generating false escalations (each a nurse callout, ~£40) or misses.
False-alert economics: 500 patients × 2 extra false alerts/week × £40
= £2.08M/year of error cost from choosing the wrong validation number.
```

## Souvislost se softwarovým inženýrstvím

Inženýři konzumují validační data při výběru senzorů a *vytvářejí* je při budování měřicích funkcí – obě role vyžadují stejnou disciplínu: testujte v podmínce nasazení, nikoli v demo podmínce (softwarová analogie: benchmarkování na vaší produkční zátěži, ne na zátěži dodavatele). Doba nošení a úplnost jsou výsledky produktového inženýrství – pohodlí, výdrž baterie, návrh rituálu nabíjení a spolehlivost synchronizace určují, zda je splněna fakturační brána RPM 16 dnů ze 30 ([ekonomika vzdáleného monitorování pacientů](../ekonomika-vzdáleného-monitorování-pacientů/)) a zda jsou datasety studií analyzovatelné. S chybějícími daty zacházejte jako s navrženým signálem: rozlišujte „nenošeno“, „nošeno, ale bez signálu“ a „synchronizace selhala“ ve schématu od prvního dne – sloučeno do null otráví každou následnou analýzu.

## Úskalí

- **Agregované MAPE skrývající selhání specifické pro podmínku** – past řešeného příkladu.
- **Validační populace ≠ populace nasazení**: věk, odstín kůže, třes a obezita všechny posouvají chybu optického senzoru; zkontrolujte demografii studie.
- **Korelace uváděná tam, kde je třeba shoda**: vysoké Pearsonovo r se systematickým zkreslením stále chybně klasifikuje vůči absolutním prahům – trvejte na CCC/Bland–Altman.
- **Úplnost nafouknutá imputací**: vyplněné mezery vykázané jako pozorovaná data.

## Zdroje

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
