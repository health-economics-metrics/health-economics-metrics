# Dosah a rovnost

RE-AIM – Reach, Effectiveness, Adoption, Implementation, Maintenance (dosah, účinnost, přijetí, implementace, udržení) – je standardní rámec pro posuzování *populačního* dopadu intervence. Jeho ústřední aritmetika: **dopad na veřejné zdraví ≈ dosah × účinnost**. Digitální nástroje přidávají rozměr rovnosti: digitální propast znamená, že dosah je systematicky nerovnoměrný, a digitálně-prioritní poskytování může prohloubit zdravotní rozdíly, které má zavírat.

## Proč na tom záleží

Systematické přehledy aplikující RE-AIM na mHealth nalézají konzistentní signaturu: silný dosah a přijetí, **slabá účinnost a udržení** – aplikace se snadno šíří a rychle slábnou. Pro národní zdravotní službu to znamená, že působivý produkt na uživatele může být špatnou populační investicí, a naopak: mírně účinný nástroj dosahující milionů může převýšit brilantní, který dosáhne tisíců (viz aritmetika [HALE](../naděje-dožití-upravená-o-zdraví/)). Rovnost není vedlejší omezení, ale hnací síla hodnoty: digitální vyloučení sleduje věk, deprivaci, disabilitu a jazyk – přesně populace nesoucí nejvíce léčitelné zátěže – takže mezní vyloučený uživatel má často *nadprůměrný* potenciální přínos. K formální statistické míře socioekonomicky podmíněné zdravotní nerovnosti viz [Koncentrační index](../koncentrační-index/).

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

## Řešený příklad

Digitální program prevence diabetu, vykázaný dvěma způsoby:

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

## Souvislost se softwarovým inženýrstvím

Dosah je z velké části inženýrský artefakt: požadavky na minimální zařízení a OS, předpoklady o šířce pásma, jazyková podpora, soulad s přístupností (WCAG), překážky ověření identity a distribuce jen přes obchod s aplikacemi – každé vyřezává populace ze jmenovatele, obvykle neviditelně, protože vyloučení uživatelé se v analytice nikdy neobjeví. Inženýrské postupy, které rovnost posouvají: měřte *jmenovatele* (instrumentujte způsobilou populaci, nejen uživatele); rozpočtujte výkon pro stará zařízení a špatné připojení; dodávejte asistované digitální cesty (telefon, SMS, kiosek) jako plnohodnotné toky, nikoli jako zahanbující kanály; a stratifikujte každou metriku dashboardu podle dimenzí rovnosti – nestratifikovaný průměr je místo, kde se nerovnost skrývá (stejné varování nese [přijetí GDS](../metriky-služeb-gds/)).

## Úskalí

- **Účinnost vykázaná na těch, kdo dokončili, dopad nárokovaný na populacích** – členy dosahu tiše vypuštěné.
- **Rovnost jako dodatečný audit** místo vstupu návrhu; dodatečné zlepšování dosahu je mnohem dražší než návrh pro něj.
- **Amnézie udržení**: nejslabší dimenze RE-AIM u mHealth – tvrzení o dopadu za časovým horizontem důkazů.
- **Úspory jen digitálního kanálu**, které přesouvají náklady na vyloučené uživatele a zaměstnance v první linii (viz [metriky služeb GDS](../metriky-služeb-gds/)).

## Zdroje

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
