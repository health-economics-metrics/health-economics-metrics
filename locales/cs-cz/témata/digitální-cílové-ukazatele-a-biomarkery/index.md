# Digitální cílové ukazatele a biomarkery

Digitální biomarker je objektivní fyziologické nebo behaviorální měření sbírané senzory (rychlost chůze z telefonu, spánek z nositelného zařízení, třes z akcelerometrie). Digitální cílový ukazatel je takové měření povýšené na **výsledek studie** – používané k prokázání účinku léčby. Povýšení z „dat, která zařízení vysílá“ na „důkaz, který regulátor přijme“ vede přes definovaný validační žebřík.

## Proč na tom záleží

Tradiční cílové ukazatele studií jsou epizodické (návštěvy kliniky každé 3 měsíce) a drahé; digitální cílové ukazatele jsou kontinuální, ekologické (reálný život, nikoli výkon na klinice) a levné na pozorování – mohou zmenšit studie, odhalit účinky dříve a umožnit decentralizované studie. Zádrhel je validace: akceptovaný rámec (sladěný s FDA, tři pilíře) vyžaduje **verifikaci/analytickou validaci** (senzor přesně měří fyzikální veličinu), **klinickou validaci** (měření odráží klinický stav, který tvrdí) a prokázaný **smysluplný aspekt zdraví** (pacienty zajímá to, co zachycuje). Cílový ukazatel bez všech tří je telemetrie, nikoli důkaz.

## Matematika

```
Analytical validation: agreement with reference (see wearable-validation.md —
                       MAPE, CCC, Bland-Altman)
Clinical validation:   correlation/discrimination against clinical anchors
                       (known-groups validity, responsiveness to change)
Endpoint economics:
  events detected per patient-year (continuous) vs per-visit sampling
  trial power: continuous measures cut sample size when between-visit
  variance dominates — N ∝ σ²/Δ², and σ² falls with dense sampling
```

## Řešený příklad

Studie Parkinsonovy nemoci zvažuje rychlost chůze ze senzoru na zápěstí versus čtvrtletní klinicky hodnocená skóre:

```
Clinic endpoint:  4 measurements/patient/year, high day-to-day noise
Digital endpoint: ~200 passive measurements/patient/year

Variance of the annual-change estimate falls ~5× with dense sampling →
detectable effect size at fixed power improves ~√5 ≈ 2.2×, or
equivalently sample size shrinks ~40–60% for the same hypothesis.
At £25,000 per enrolled patient, cutting 200 patients ≈ £5M saved
per trial — the commercial case for the validation investment
(itself perhaps £1–2M) across a sponsor's pipeline.
```

## Souvislost se softwarovým inženýrstvím

Digitální cílové ukazatele jsou datově-inženýrská disciplína v klinickém hávu: **provenience a verzování** (aktualizace algoritmu uprostřed studie ohrožují srovnatelnost – problém [PCCP](../regulační-hodnocení-ai/) ve formě studie; zamkněte verzi a validujte přechod); **návrh chybějících dat** (mezery v nošení jsou informativní, nikoli náhodné – viz [validace nositelných zařízení](../validace-nositelných-zařízení/); volby imputace jsou vědecká tvrzení); a **rozhodnutí o dělení edge/cloud**, která mění, jaký surový signál je vůbec později obnovitelný. Týmy, které s měřicí pipeline od prvního dne zacházejí jako s regulovaným softwarem – testovaným, verzovaným, zdokumentovaným – koupí důvěryhodnost svých cílových ukazatelů levně; dodatečné vtlačení validace do rychle vyvinuté pipeline je místo, kde programy digitálních cílových ukazatelů umírají.

## Úskalí

- **Korelace s klinikou jako úplná validace**: shoda s chybným klinickým měřením dokazuje dědictví, nikoli pravdu; validujte proti smysluplnému aspektu zdraví.
- **Regulační riziko nového cílového ukazatele**: bezprecedentní cílový ukazatel může být vědecky lepší a přesto potopit podání – zapojte regulátory brzy (existují kvalifikační programy).
- **Nesoulad populace senzoru**: validace na mladých zdravých zápěstích, nasazení u starších pacientů s třesem a rozdíly v pigmentaci, které PPG nikdy neviděl.
- **Drift příznaků**: přetrénování algoritmu chůze na nových datech tiše předefinuje cílový ukazatel uprostřed studie.

## Zdroje

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
