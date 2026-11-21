# Távoli betegfigyelés gazdaságtana

A betegek otthoni megfigyelésének térítési és költségellensúlyozási gazdaságtana: az Egyesült Államokban egy meghatározott CPT-kódokból álló bevételi köteg; a nemzeti egészségügyi szolgálatoknál a felvétel-elkerülés és a virtuális osztályok gazdaságtana egészen a teljes **otthoni kórházi ellátás** (hospital-at-home) általi helyettesítésig.

## Miért fontos

Az RPM az a pont, ahol az eszközadatból számlázható egészségügyi ellátás lesz. Az amerikai Medicare szerkezete (2025-ös országos átlagok) szokatlanul explicit:

```
99453  setup & patient education     ~$19.73  one-time (after 16 days of data)
99454  device supply + transmission  ~$43.03  per 30 days — REQUIRES ≥16 days
                                              of readings in the 30
99457  first 20 min/month management ~$47.87  requires ≥20 logged minutes
99458  each additional 20 min        ~$38.49
```

Egy szabályos betegmonitoring-hónap nagyjából **90–130 USD PMPM**-re rakódik össze. A költségellensúlyozási oldalon az otthoni kórházi programok (a CMS Acute Hospital Care at Home mentesítése: 300+ kórház) alacsonyabb újrafelvétellel és fertőzésszámmal ~1800–3000 USD megtakarítást mutatnak esetenként a fekvőbeteg-ellátáshoz képest — ez a legvilágosabb bizonyíték arra, hogy a megfigyelés és a virtuális ellátás helyettesítheti a rendszer legdrágább erőforrását, a személyzettel ellátott ágyat.

## A matematika

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

## Kidolgozott példa

Egy amerikai praxis 400 hipertóniás beteget vesz fel; egy tipikus hónapban 70%-uk teljesíti a 16 napos küszöböt, a kezelési percek 60%-uknál kerülnek rögzítésre:

```
Monthly revenue ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Annual ≈ $282,000; service cost (devices $12/mo, staff 0.8 FTE) ≈ $180,000
Margin ≈ $100k/year — and note the levers are engineering levers:
raising the 16-day compliance from 70% → 85% adds ~$31k/year
(device comfort, sync reliability, reminder design).
```

NHS-tükörkép: egy 50 ágyas virtuális osztály 80%-os kihasználtsággal, napi 150 £ nettó megtakarítással helyettesítve a fekvőbeteg-napokat ≈ 50 × 0.8 × 365 × 150 ≈ **2,19 M£/év** bruttó — szemben a platformmal, az eszközökkel és a személyzetet adó közösségi ápolói csapattal.

## Kapcsolat a szoftverfejlesztéssel

Az RPM-platformok azon ritka termékek, ahol az **üzemidő és a szinkronizálás megbízhatósága közvetlenül bevétellé alakul** (egy hétnyi sikertelen szinkron egy kohorsz számára megtöri a 16 napos kaput), és ahol az auditálható időkövetés (a 20 perces szabály) első osztályú funkció, nem utólagos gondolat. Építs a következőkre: betegenkénti megfelelési irányítópultok, amelyek a veszélyeztetett számlázási hónapokat még helyreállítható állapotban jelzik; időbélyegzett, manipulációt jelző adatnyomvonalak (a fizetői auditok rutinszerűek); és riasztásgazdaságtani hangolás — minden riasztás a megfigyelő csapat perceit fogyasztja, amely egyszerre a számlázható egység és a szűkös erőforrás (a küszöbválasztást a [szűrés gazdaságtana](../a-szűrés-gazdaságtana/) szabályozza).

## Buktatók

- **Beiratkozás ≠ bevétel**: a megfelelő hányad a lényeges szám; modellezd, ne feltételezd.
- **Amerikai kódok átültetése NHS-esetekre** — a nemzeti egészségügyi szolgálatok felvétel-elkerülést vásárolnak, nem CPT-kötegeket; futtasd a második modellt.
- **Ellensúlyozási állítások átlagköltségen** olyan felvételekre, amelyeknek az állandó költségei megmaradnak (lásd [határköltség és átlagköltség](../határköltség-és-átlagköltség/)).
- **A megfigyelő csapat telítődése**: a riasztások száma a beiratkozással nő; a személyzeti sor a kötő korlát, amelyet a legtöbb modell kihagy.

## Források

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
