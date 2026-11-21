# વેરેબલ માન્યતા

માન્યતા મેટ્રિક્સ માપે છે કે વેરેબલના માપ ક્લિનિકલ ગોલ્ડ સ્ટાન્ડર્ડ (હૃદય દર માટે ECG, ઊંઘ માટે પોલિસોમ્નોગ્રાફી) સાથે કેટલા સુસંગત છે: **MAPE**, સુસંગતતા સહસંબંધ, Bland–Altman સંમતિ — ઉપરાંત વાસ્તવિક-વિશ્વ ડેટા ગુણવત્તાને દરવાજે રોકતા ઑપરેશનલ મેટ્રિક્સ: **પહેરવાના સમયનું અનુપાલન** અને **ડેટા સંપૂર્ણતા**.

## આ શા માટે મહત્ત્વનું છે

માન્યતા ડાઉનસ્ટ્રીમ દરેક બાબતની પૂર્વશરત છે: જે ઉપકરણ સંદર્ભ માપ સાથે સંમતિ સાબિત ન કરી શકે તે [ડિજિટલ અંતિમબિંદુઓ](../ડિજિટલ-અંતિમબિંદુઓ-અને-બાયોમાર્કર્સ/) ને ઍન્કર કરી શકતું નથી, [RPM બિલિંગ](../દૂરસ્થ-દર્દી-નિરીક્ષણ-અર્થશાસ્ત્ર/) ને ટેકો આપી શકતું નથી, કે ક્લિનિકલ દાવા ઉપાડી શકતું નથી. હૃદય દર માટે ક્ષેત્રની સ્વીકૃત સીમાઓ: ECG સામે **MAPE ≤5%** (કડક) અથવા **≤10%** (ઉદાર). સાહિત્યમાંથી સંદર્ભ બિંદુઓ: Oura Gen 3 આરામનો HR MAPE 1.67% (CCC 0.97); Fitbit Charge 6 MAPE ~5.5% — ગ્રાહક ઉપકરણો હવે ક્લિનિકલ-ગ્રેડ સીમા ઓળંગે છે, એટલે જ માપન પ્રતિ-ઉપકરણ અને પ્રતિ-સ્થિતિ મહત્ત્વનું છે.

## ગણિત

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

માન્યતા **પ્રતિ પ્રવૃત્તિ સ્થિતિ** (આરામ, ગતિ, ઊંઘ) અને પ્રતિ વસ્તી જણાવવી જોઈએ — PPG ઑપ્ટિકલ સેન્સિંગ ગતિ આર્ટિફેક્ટ, નબળા સંપર્ક અને ઘેરા ત્વચા ટોન સાથે બગડે છે, જે દસ્તાવેજીકૃત સમાનતા-સંબંધિત નિષ્ફળતા રીત છે.

## ઉકેલેલું ઉદાહરણ

એક વર્ચ્યુઅલ-વૉર્ડ કાર્યક્રમ નિરીક્ષણ વેરેબલ પસંદ કરે છે. ઉમેદવાર A: આરામ MAPE 2.1%, કસરત MAPE 11.4%. ઉમેદવાર B: આરામ 3.8%, કસરત 6.9%.

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

## સૉફ્ટવેર એન્જિનિયરિંગ સાથે સંબંધ

સેન્સર પસંદ કરતી વખતે એન્જિનિયરો માન્યતા ડેટા *વાપરે* છે અને માપન ફીચર બનાવતી વખતે તે *ઉત્પન્ન* કરે છે — બંને ભૂમિકાઓને સમાન શિસ્ત જોઈએ: ડેમો સ્થિતિમાં નહીં, ડિપ્લોયમેન્ટ સ્થિતિમાં પરીક્ષણ કરો (સૉફ્ટવેર સમાંતર: વિક્રેતાના નહીં, તમારા પ્રોડક્શન વર્કલોડ પર બેન્ચમાર્કિંગ). પહેરવાનો સમય અને સંપૂર્ણતા પ્રોડક્ટ-એન્જિનિયરિંગ પરિણામો છે — આરામ, બૅટરી જીવન, ચાર્જિંગ વિધિ ડિઝાઇન અને સિંક વિશ્વસનીયતા નક્કી કરે છે કે 30માંથી 16-દિવસનો RPM બિલિંગ દરવાજો પૂરો થાય છે કે નહીં ([દૂરસ્થ દર્દી નિરીક્ષણ અર્થશાસ્ત્ર](../દૂરસ્થ-દર્દી-નિરીક્ષણ-અર્થશાસ્ત્ર/)) અને ટ્રાયલ ડેટાસેટ વિશ્લેષણ યોગ્ય છે કે નહીં. ગેરહાજરીને ડિઝાઇન કરેલા સંકેત તરીકે લો: પ્રથમ દિવસથી સ્કીમામાં "પહેર્યું નથી", "પહેર્યું પણ સંકેત નથી" અને "સિંક નિષ્ફળ" ને અલગ પાડો — null માં ભેળવાતા, તે દરેક ડાઉનસ્ટ્રીમ વિશ્લેષણને ઝેરી બનાવે છે.

## સામાન્ય ભૂલો

- **સ્થિતિ-વિશિષ્ટ નિષ્ફળતા છુપાવતો સમગ્ર MAPE** — ઉકેલેલા ઉદાહરણની જાળ.
- **માન્યતા વસ્તી ≠ ડિપ્લોયમેન્ટ વસ્તી**: ઉંમર, ત્વચા ટોન, ધ્રુજારી, સ્થૂળતા બધા ઑપ્ટિકલ-સેન્સર ભૂલ બદલે છે; અભ્યાસ વસ્તી વિષયક તપાસો.
- **જ્યાં સંમતિ જોઈએ ત્યાં સહસંબંધ જણાવવો**: વ્યવસ્થિત પૂર્વગ્રહ સાથે ઊંચો Pearson r પણ નિરપેક્ષ સીમાઓ સામે ખોટું વર્ગીકરણ કરે છે — CCC/Bland–Altman નો આગ્રહ રાખો.
- **ઇમ્પ્યુટેશનથી ફુલાવેલી સંપૂર્ણતા**: ભરેલા ગાબડાં અવલોકિત ડેટા તરીકે જણાવવા.

## સ્રોતો

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
