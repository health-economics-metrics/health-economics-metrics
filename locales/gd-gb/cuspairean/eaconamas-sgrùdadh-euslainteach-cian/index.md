# Eaconamas sgrùdadh euslainteach cian

Eaconamas ath-dhìoladh agus cosgaisean air an dìoladh airson euslaintich a sgrùdadh aig an taigh: anns na Stàitean Aonaichte, stac teachd-a-steach le còdan CPT sònraichte; ann an seirbheisean slàinte nàiseanta, eaconamas seachnadh in-ghabhail agus uàird bhrìgheil gu làn ionadachadh **ospadal-aig-an-taigh**.

## Carson a tha e cudromach

Is e RPM an t-àite far an tig dàta uidheaman gu bhith na chùram slàinte so-bhilleadh. Tha structar Medicare nan SA (cuibheasachdan nàiseanta 2025) annasach soilleir:

```
99453  setup & patient education     ~$19.73  one-time (after 16 days of data)
99454  device supply + transmission  ~$43.03  per 30 days — REQUIRES ≥16 days
                                              of readings in the 30
99457  first 20 min/month management ~$47.87  requires ≥20 logged minutes
99458  each additional 20 min        ~$38.49
```

Bidh mìos euslaintich a tha gèillteach a’ cruinneachadh gu timcheall air **$90–130 PMPM**. Air taobh nan cosgaisean a thèid a dhìoladh, tha prògraman ospadal-aig-an-taigh (cead-seachnaidh CMS Acute Hospital Care at Home: 300+ ospadal) a’ sealltainn ~$1,800–$3,000 air an sàbhaladh gach tachartas an coimeas ri cùram euslainteach-a-staigh, le nas lugha de dh’ath-ghabhaltasan agus ghalaran – an taisbeanadh as soilleire gum faod sgrùdadh còmhla ri cùram brìgheil an goireas as daoire san t-siostam, an leabaidh le luchd-obrach, a chur na àite.

## A’ mhatamataig

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

## Eisimpleir obrach

Bidh cleachdadh anns na SA a’ clàradh 400 euslainteach le cuideam-fala àrd; tha 70% a’ coinneachadh ri stairsneach nan 16 latha ann am mìos àbhaisteach; chaidh mionaidean riaghlaidh a logadh airson 60%:

```
Monthly revenue ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Annual ≈ $282,000; service cost (devices $12/mo, staff 0.8 FTE) ≈ $180,000
Margin ≈ $100k/year — and note the levers are engineering levers:
raising the 16-day compliance from 70% → 85% adds ~$31k/year
(device comfort, sync reliability, reminder design).
```

Mac-tìre an NHS: uàrd brìgheil 50 leabaidh aig 80% làn a’ cur làithean euslainteach-a-staigh na àite aig sàbhaladh lom de £150/latha ≈ 50 × 0.8 × 365 × 150 ≈ **£2.19M/bliadhna** gu h-iomlan – an aghaidh na àrd-ùrlair, nan uidheaman, agus an sgioba nursaidh coimhearsnachd a tha ga stiùireadh.

## Ceangal ri einnseanaireachd bathar-bog

Is e ùrlaran RPM am bathar annasach far a bheil **ùine-obrach agus earbsachd sioncronachaidh** a’ tionndadh gu dìreach gu teachd-a-steach (bidh seachdain de shioncronachaidhean a dh’fhàillig a’ briseadh geata nan 16 latha airson buidheann) agus far a bheil lorg ùine aig ìre sgrùdaidh (riaghailt nan 20 mionaid) na fheart prìomh, chan e rud a chaidh a chur ris às dèidh làimhe. Tog airson: deas-bhùird gèillidh gach euslainteach a thaisbeanas mìosan billeadh a tha ann an cunnart fhad ‘s a ghabhas an càradh; slighean dàta le stampa-ùine agus dearbhadh aig an robh ceangal ri tamper (tha sgrùdaidhean pàighidh àbhaisteach); agus gleusadh eaconamas rabhaidh – bidh gach rabhadh a’ cleachdadh mionaidean na sgioba sgrùdaidh, a tha an dà chuid na h-aonad so-bhilleadh agus an goireas gann ([eaconamas sgrìonaidh](../eaconamas-sgrìonaidh/) a bhios a’ riaghladh roghainn na stairsnich).

## Cunnartan

- **Clàradh ≠ teachd-a-steach**: is e a’ chuibhreann ghèillteach an àireamh; modail e, na gabh ris.
- **Còdan nan SA air an gluasad gu cùisean NHS** – bidh seirbheisean slàinte nàiseanta a’ ceannach seachnadh in-ghabhail, chan e stacan CPT; ruith an dàrna modail.
- **Tagraidhean dìolaidh aig cosgais cuibheasach** airson in-ghabhaltasan aig a bheil cosgaisean stèidhichte fhathast (faic [cosgais iomaill an aghaidh cuibheasach](../cosgais-iomaill-an-aghaidh-cosgais-cuibheasach/)).
- **Sàthachadh na sgioba sgrùdaidh**: bidh àireamh nan rabhaidhean a’ sìor fhàs le clàradh; is e loidhne an luchd-obrach an cuingead ceangailteach a tha a’ mhòr-chuid de mhodailean a’ fàgail a-mach.

## Stòran

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
