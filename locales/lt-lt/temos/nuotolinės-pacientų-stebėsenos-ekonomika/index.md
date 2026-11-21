# Nuotolinės pacientų stebėsenos ekonomika

Pacientų stebėjimo namuose kompensavimo ir sąnaudų užskaitos ekonomika: JAV – apibrėžtas CPT kodų pajamų rinkinys; nacionalinėse sveikatos tarnybose – hospitalizacijų išvengimo ir virtualių palatų ekonomika iki pilno **ligoninės namuose** pakeitimo.

## Kodėl tai svarbu

RPM yra vieta, kur prietaiso duomenys tampa apmokestinama sveikatos priežiūra. JAV Medicare struktūra (2025 m. nacionaliniai vidurkiai) neįprastai aiški:

```
99453  setup & patient education     ~$19.73  one-time (after 16 days of data)
99454  device supply + transmission  ~$43.03  per 30 days — REQUIRES ≥16 days
                                              of readings in the 30
99457  first 20 min/month management ~$47.87  requires ≥20 logged minutes
99458  each additional 20 min        ~$38.49
```

Atitinkantis paciento mėnuo susideda maždaug į **90–130 USD PMPM**. Sąnaudų užskaitos pusėje ligoninės namuose programos (CMS Acute Hospital Care at Home atleidimas: 300+ ligoninių) rodo ~1 800–3 000 USD sutaupymą vienam atvejui palyginti su stacionaru, su mažesniais pakartotinių hospitalizacijų ir infekcijų rodikliais – aiškiausias įrodymas, kad stebėsena plius virtuali priežiūra gali pakeisti brangiausią sistemos išteklių – aprūpintą lovą.

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

## Išspręstas pavyzdys

JAV praktika užregistruoja 400 hipertenzijos pacientų; 70 % įvykdo 16 dienų slenkstį tipiniu mėnesiu; valdymo minutės užregistruotos 60 %:

```
Monthly revenue ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Annual ≈ $282,000; service cost (devices $12/mo, staff 0.8 FTE) ≈ $180,000
Margin ≈ $100k/year — and note the levers are engineering levers:
raising the 16-day compliance from 70% → 85% adds ~$31k/year
(device comfort, sync reliability, reminder design).
```

NHS veidrodis: 50 lovų virtuali palata 80 % užimtumu, pakeičianti stacionaro dienas po 150 £ grynosios santaupos per dieną ≈ 50 × 0,8 × 365 × 150 ≈ **2,19 mln. £ per metus** bendrai – palyginti su platforma, prietaisais ir bendruomenės slaugos komanda, kuri ją aptarnauja.

## Ryšys su programinės įrangos inžinerija

RPM platformos yra retas produktas, kur **veikimo laikas ir sinchronizavimo patikimumas tiesiogiai virsta pajamomis** (savaitė nepavykusių sinchronizavimų sulaužo 16 dienų vartus kohortai) ir kur auditui tinkamas laiko sekimas (20 minučių taisyklė) yra pirmos klasės funkcija, o ne vėlesnė mintis. Kurkite: paciento atitikties skydelius, parodančius rizikos mėnesius, kol jie dar atkuriami; laiko žymomis pažymėtus, klastoti atsparius duomenų pėdsakus (mokėtojų auditai įprasti); ir perspėjimų ekonomikos derinimą – kiekvienas perspėjimas sunaudoja stebėsenos komandos minutes, kurios yra ir apmokestinamas vienetas, ir retas išteklius ([patikros ekonomika](../patikros-ekonomika/) valdo slenksčio pasirinkimą).

## Spąstai

- **Užsiregistravimas ≠ pajamos**: atitinkanti dalis yra skaičius; modeliuokite ją, o ne prielaidaukite.
- **JAV kodų perkėlimas į NHS bylas** – nacionalinės sveikatos tarnybos perka hospitalizacijų išvengimą, o ne CPT rinkinius; vykdykite antrąjį modelį.
- **Užskaitos teiginiai vidutinėmis sąnaudomis** hospitalizacijoms, kurių pastoviosios sąnaudos išlieka (žr. [ribinės ir vidutinės sąnaudos](../ribinės-ir-vidutinės-sąnaudos/)).
- **Stebėsenos komandos prisotinimas**: perspėjimų kiekis auga su registracija; personalo eilutė yra ribojantis veiksnys, kurį dauguma modelių praleidžia.

## Šaltiniai

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
