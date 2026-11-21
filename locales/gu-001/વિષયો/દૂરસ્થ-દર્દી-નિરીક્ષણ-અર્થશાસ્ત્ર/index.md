# દૂરસ્થ દર્દી નિરીક્ષણ અર્થશાસ્ત્ર

ઘરે દર્દીઓના નિરીક્ષણનું વળતર અને ખર્ચ-સરભર અર્થશાસ્ત્ર: યુએસમાં નિશ્ચિત CPT-કોડ આવક-સ્ટૅક; રાષ્ટ્રીય આરોગ્ય સેવાઓમાં પ્રવેશ-નિવારણ અને વર્ચ્યુઅલ-વૉર્ડ અર્થશાસ્ત્ર, છેક સંપૂર્ણ **હૉસ્પિટલ-એટ-હોમ** અવેજી સુધી.

## આ શા માટે મહત્ત્વનું છે

RPM એ એવું સ્થાન છે જ્યાં ઉપકરણનો ડેટા બિલ કરી શકાય એવી આરોગ્યસંભાળ બને છે. યુએસ Medicare માળખું (2025 રાષ્ટ્રીય સરેરાશ) અસાધારણ રીતે સ્પષ્ટ છે:

```
99453  setup & patient education     ~$19.73  one-time (after 16 days of data)
99454  device supply + transmission  ~$43.03  per 30 days — REQUIRES ≥16 days
                                              of readings in the 30
99457  first 20 min/month management ~$47.87  requires ≥20 logged minutes
99458  each additional 20 min        ~$38.49
```

નિયમોનું પાલન કરતો દર્દી-મહિનો લગભગ **$90–130 PMPM** સુધી સ્ટૅક થાય છે. ખર્ચ-સરભરની બાજુએ, હૉસ્પિટલ-એટ-હોમ કાર્યક્રમો (CMS Acute Hospital Care at Home waiver: 300+ હૉસ્પિટલ) ઇનપેશન્ટ સંભાળની સરખામણીમાં પ્રતિ એન્કાઉન્ટર ~$1,800–$3,000 બચત, ઓછા પુનઃપ્રવેશ અને ઓછા ચેપ દર્શાવે છે — નિરીક્ષણ અને વર્ચ્યુઅલ સંભાળ તંત્રના સૌથી મોંઘા સંસાધન, સ્ટાફવાળા બેડ, નું સ્થાન લઈ શકે છે તેનું સૌથી સ્પષ્ટ પ્રદર્શન.

## ગણિત

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

## ઉકેલેલું ઉદાહરણ

એક યુએસ પ્રૅક્ટિસ 400 હાઇપરટેન્શન દર્દીઓને નોંધે છે; સામાન્ય મહિનામાં 70% 16-દિવસની સીમા પૂરી કરે છે; 60% માટે મેનેજમેન્ટ મિનિટ નોંધાય છે:

```
Monthly revenue ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Annual ≈ $282,000; service cost (devices $12/mo, staff 0.8 FTE) ≈ $180,000
Margin ≈ $100k/year — and note the levers are engineering levers:
raising the 16-day compliance from 70% → 85% adds ~$31k/year
(device comfort, sync reliability, reminder design).
```

NHS સમાંતર: 80% ઑક્યુપન્સી ધરાવતો 50-બેડનો વર્ચ્યુઅલ વૉર્ડ, ઇનપેશન્ટ દિવસોને પ્રતિ દિવસ £150 ચોખ્ખી બચતે બદલે, તો ≈ 50 × 0.8 × 365 × 150 ≈ **£2.19M/વર્ષ** કુલ — જેની સામે પ્લૅટફૉર્મ, ઉપકરણો અને તેને ચલાવતી સામુદાયિક નર્સિંગ ટીમનો ખર્ચ આવે છે.

## સૉફ્ટવેર એન્જિનિયરિંગ સાથે સંબંધ

RPM પ્લૅટફૉર્મ એવું દુર્લભ ઉત્પાદન છે જ્યાં **અપટાઇમ અને સિંક વિશ્વસનીયતા સીધી આવકમાં ફેરવાય છે** (એક અઠવાડિયાનું નિષ્ફળ સિંક સમૂહ માટે 16-દિવસનો દરવાજો તોડી નાખે છે) અને જ્યાં ઑડિટ-સ્તરનું સમય-ટ્રૅકિંગ (20-મિનિટનો નિયમ) પાછળથી ઉમેરાતી બાબત નહીં પણ પ્રથમ-કક્ષાનું લક્ષણ છે. આ માટે બનાવો: દર્દી-દીઠ અનુપાલન ડૅશબોર્ડ જે જોખમમાં રહેલા બિલિંગ મહિનાઓ સુધારી શકાય ત્યાં સુધીમાં બતાવે; સમય-છાપવાળા, છેડછાડ-સ્પષ્ટ ડેટા ટ્રેલ (પેયર ઑડિટ નિયમિત હોય છે); અને ચેતવણી-અર્થશાસ્ત્રનું ટ્યૂનિંગ — દરેક ચેતવણી નિરીક્ષણ ટીમની મિનિટો વાપરે છે, જે બિલ કરી શકાય એવો એકમ અને દુર્લભ સંસાધન બંને છે ([સ્ક્રીનિંગ અર્થશાસ્ત્ર](../સ્ક્રીનિંગ-અર્થશાસ્ત્ર/) સીમાની પસંદગી નક્કી કરે છે).

## સામાન્ય ભૂલો

- **નોંધણી ≠ આવક**: અનુપાલન કરતો હિસ્સો જ સાચો આંકડો છે; તેને મૉડેલ કરો, ધારી ન લો.
- **NHS કેસોમાં યુએસ કોડનું આરોપણ** — રાષ્ટ્રીય આરોગ્ય સેવાઓ પ્રવેશ-નિવારણ ખરીદે છે, CPT સ્ટૅક નહીં; બીજું મૉડેલ ચલાવો.
- **સરેરાશ ખર્ચે સરભરના દાવા** એવા પ્રવેશો માટે જેમના નિશ્ચિત ખર્ચ રહે છે ([સીમાંત વિરુદ્ધ સરેરાશ ખર્ચ](../સીમાંત-વિરુદ્ધ-સરેરાશ-ખર્ચ/) જુઓ).
- **નિરીક્ષણ ટીમની સંતૃપ્તિ**: ચેતવણીનું પ્રમાણ નોંધણી સાથે વધે છે; સ્ટાફિંગ લાઇન એ બાધક મર્યાદા છે જે મોટાભાગના મૉડેલ છોડી દે છે.

## સ્રોતો

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
