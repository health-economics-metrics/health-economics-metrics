# Ekonomika vzdáleného monitorování pacientů

Ekonomika úhrad a kompenzace nákladů při monitorování pacientů doma: v USA definovaný příjmový balík kódů CPT; v národních zdravotních službách ekonomika odvrácení hospitalizací a virtuálních oddělení až po plnou náhradu **hospitalizace doma**.

## Proč na tom záleží

RPM je místo, kde se data ze zařízení stávají fakturovatelnou zdravotní péčí. Americká struktura Medicare (národní průměry 2025) je neobvykle explicitní:

```
99453  setup & patient education     ~$19.73  one-time (after 16 days of data)
99454  device supply + transmission  ~$43.03  per 30 days — REQUIRES ≥16 days
                                              of readings in the 30
99457  first 20 min/month management ~$47.87  requires ≥20 logged minutes
99458  each additional 20 min        ~$38.49
```

Vyhovující měsíc pacienta se sečte zhruba na **90–130 USD PMPM**. Na straně kompenzace nákladů programy hospitalizace doma (výjimka CMS Acute Hospital Care at Home: 300+ nemocnic) ukazují úsporu ~1 800–3 000 USD na případ oproti lůžkové péči s nižším počtem rehospitalizací a infekcí – nejjasnější důkaz, že monitorování plus virtuální péče může nahradit nejdražší zdroj v systému, obsazené lůžko.

## Matematika

```
RPM revenue (US)  = enrolled × billing-compliant fraction × code stack PMPM
  — the 16-day rule makes wear-time compliance (wearable-validation.md)
    a revenue variable, and the 20-minute rule makes clinical-time
    logging an engineering requirement
NHS-style value   = admissions avoided × marginal admission cost
                  + bed days substituted × (inpatient − virtual-ward day cost)
                  − service cost (devices, platform, monitoring staff)
  (see emergency-attendance-avoidance.md and bed-days-saved.md for the
   attribution and marginal-cost rules)
```

## Řešený příklad

Americká ordinace zapíše 400 pacientů s hypertenzí; 70 % splní v typickém měsíci práh 16 dnů; minuty řízení zaznamenány u 60 %:

```
Monthly revenue ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Annual ≈ $282,000; service cost (devices $12/mo, staff 0.8 FTE) ≈ $180,000
Margin ≈ $100k/year — and note the levers are engineering levers:
raising the 16-day compliance from 70% → 85% adds ~$31k/year
(device comfort, sync reliability, reminder design).
```

Zrcadlo NHS: 50lůžkové virtuální oddělení při 80% obsazenosti nahrazující lůžkové dny s čistou úsporou 150 £/den ≈ 50 × 0,8 × 365 × 150 ≈ **2,19 mil. £/rok** hrubě – proti platformě, zařízením a komunitnímu ošetřovatelskému týmu, který ji obsluhuje.

## Souvislost se softwarovým inženýrstvím

Platformy RPM jsou vzácným produktem, kde se **dostupnost a spolehlivost synchronizace převádějí přímo na příjem** (týden neúspěšných synchronizací zlomí bránu 16 dnů pro kohortu) a kde je auditní sledování času (pravidlo 20 minut) plnohodnotnou funkcí, nikoli dodatečným nápadem. Stavějte pro: dashboardy souladu na pacienta, které ukážou ohrožené fakturační měsíce, dokud jsou obnovitelné; časově označené, proti manipulaci odolné stopy dat (audity plátců jsou rutinní); a ladění ekonomiky upozornění – každé upozornění spotřebuje minuty monitorovacího týmu, které jsou zároveň fakturovatelnou jednotkou i vzácným zdrojem (volbu prahu řídí [ekonomika screeningu](../ekonomika-screeningu/)).

## Úskalí

- **Zápis ≠ příjem**: rozhodujícím číslem je vyhovující podíl; modelujte ho, nepředpokládejte.
- **Americké kódy přenesené do případů NHS** – národní zdravotní služby kupují odvrácení hospitalizací, nikoli balíky CPT; spusťte druhý model.
- **Tvrzení o kompenzaci průměrnými náklady** u hospitalizací, jejichž fixní náklady zůstávají (viz [mezní vs průměrné náklady](../mezní-vs-průměrné-náklady/)).
- **Saturace monitorovacího týmu**: objem upozornění se škáluje se zápisem; personální řádka je omezením, které většina modelů vynechává.

## Zdroje

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
