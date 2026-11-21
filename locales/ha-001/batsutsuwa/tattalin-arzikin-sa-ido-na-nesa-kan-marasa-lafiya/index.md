# Tattalin Arzikin Sa Ido na Nesa kan Marasa Lafiya

Tattalin arzikin biya da rage kuɗi na sa ido kan marasa lafiya a gida: a Amurka, tarin kuɗin shiga da lambobin CPT suka ayyana; a hidimomin lafiya na ƙasa, kauce wa shigar asibiti da tattalin arzikin sashen kama-da-wane har zuwa cikakken maye gurbin **asibiti-a-gida**.

## Dalilin muhimmancinsa

RPM shi ne inda bayanan na'ura ke zama kulawar lafiya da ake lissafa kuɗi. Tsarin Medicare na Amurka (matsakaicin ƙasa na 2025) a bayyane yake sosai:

```
99453  setup & patient education     ~$19.73  one-time (after 16 days of data)
99454  device supply + transmission  ~$43.03  per 30 days — REQUIRES ≥16 days
                                              of readings in the 30
99457  first 20 min/month management ~$47.87  requires ≥20 logged minutes
99458  each additional 20 min        ~$38.49
```

Wata mai bin ƙa'ida na majiyyaci yana tarawa zuwa kusan **$90–130 PMPM**. A ɓangaren rage kuɗi, shirye-shiryen asibiti-a-gida (izinin CMS Acute Hospital Care at Home: asibitoci 300+) suna nuna ~$1,800–$3,000 da aka ceta ga kowace shiga idan aka kwatanta da kwantar a asibiti tare da ƙarancin komawa da cututtuka — mafi bayyanan nuni cewa sa ido tare da kulawa ta kama-da-wane na iya maye gurbin albarkatu mafi tsada a tsarin, gadon da ke da ma'aikata.

## Lissafin

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

## Misali da aka lissafa

Wani asibitin Amurka yana rajistar marasa lafiya 400 masu hawan jini; 70% suna cika ƙofar kwanaki 16 a wata na yau da kullum; mintunan gudanarwa da aka rubuta ga 60%:

```
Monthly revenue ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Annual ≈ $282,000; service cost (devices $12/mo, staff 0.8 FTE) ≈ $180,000
Margin ≈ $100k/year — and note the levers are engineering levers:
raising the 16-day compliance from 70% → 85% adds ~$31k/year
(device comfort, sync reliability, reminder design).
```

Kwatankwacin NHS: sashen kama-da-wane na gadaje 50 a cika 80% yana maye gurbin kwanakin kwantar a asibiti da tanadin net £150/rana ≈ 50 × 0.8 × 365 × 150 ≈ **£2.19M/shekara** gabaɗaya — a kan dandali, na'urori, da ƙungiyar ma'aikatan jinya ta al'umma da ke ma'aikata shi.

## Alaƙa da injiniyancin manhaja

Dandalolin RPM su ne samfurin da ba kasafai ba inda **lokacin aiki da amincin daidaitawa ke canzawa kai tsaye zuwa kuɗin shiga** (mako na gazawar daidaitawa yana karya ƙofar kwanaki 16 ga ƙungiya) kuma inda bin diddigin lokaci mai darajar bincike (ƙa'idar mintuna 20) siffa ce ta farko, ba abin da aka yi daga baya ba. Gina don: dashboards na bin ƙa'ida ga kowane majiyyaci da ke nuna watannin lissafin da ke cikin haɗari yayin da za a iya dawo da su; hanyoyin bayanai masu alamar lokaci da ba za a iya ɓata ba (binciken masu biya na yau da kullum ne); da daidaita tattalin arzikin faɗakarwa — kowace faɗakarwa tana cinye mintunan ƙungiyar sa ido, waɗanda su ne naúrar lissafi da albarkatu mai ƙaranci ([tattalin arzikin gwajin bincike](../tattalin-arzikin-gwajin-bincike/) yana jagorantar zaɓin ƙofa).

## Tarkuna

- **Rajista ≠ kuɗin shiga**: kason bin ƙa'ida shi ne lambar; ƙirƙiri shi, kada ka zata.
- **Lambobin Amurka da aka dasa a shari'o'in NHS** — hidimomin lafiya na ƙasa suna sayen kauce wa shiga asibiti, ba tarin CPT ba; gudanar da samfuri na biyu.
- **Da'awar rage kuɗi a matsakaicin kuɗi** ga shigar asibiti wadda kuɗin tsayayyarsa ya rage (duba [kuɗin ƙari da matsakaicin kuɗi](../kuɗin-ƙari-da-matsakaicin-kuɗi/)).
- **Cikar ƙungiyar sa ido**: yawan faɗakarwa yana ƙaruwa da rajista; layin ma'aikata shi ne ƙuntatawa mai ɗaure da yawancin samfura ke bari.

## Tushe

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
