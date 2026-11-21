# પહોંચ અને સમાનતા

RE-AIM — Reach (પહોંચ), Effectiveness (અસરકારકતા), Adoption (અપનાવવું), Implementation (અમલીકરણ), Maintenance (જાળવણી) — હસ્તક્ષેપની *વસ્તી* અસરને આંકવાનું પ્રમાણભૂત માળખું છે. તેનું કેન્દ્રીય અંકગણિત: **જાહેર-આરોગ્ય અસર ≈ પહોંચ × અસરકારકતા**. ડિજિટલ સાધનો સમાનતા પરિમાણ ઉમેરે છે: ડિજિટલ વિભાજનનો અર્થ છે કે પહોંચ વ્યવસ્થિત રીતે અસમાન છે, અને ડિજિટલ-પ્રથમ ડિલિવરી જે આરોગ્ય અંતર બંધ કરવા માંગે છે તેને પહોળા કરી શકે છે.

## આ શા માટે મહત્ત્વનું છે

mHealth પર RE-AIM લાગુ કરતી વ્યવસ્થિત સમીક્ષાઓ સતત સહી શોધે છે: મજબૂત પહોંચ અને અપનાવવું, **નબળી અસરકારકતા અને જાળવણી** — ઍપ્સ સરળતાથી ફેલાય છે અને ઝડપથી ઝાંખી થાય છે. રાષ્ટ્રીય આરોગ્ય સેવા માટે, આનો અર્થ છે કે પ્રભાવશાળી પ્રતિ-વપરાશકર્તા ઉત્પાદન નબળું વસ્તી રોકાણ હોઈ શકે, અને ઊલટું: લાખો સુધી પહોંચતું સાધારણ અસરકારક સાધન હજારો સુધી પહોંચતા તેજસ્વી સાધનને હરાવી શકે ([HALE](../આરોગ્ય-સમાયોજિત-આયુષ્ય/) અંકગણિત જુઓ). સમાનતા બાજુ અવરોધ નથી પણ મૂલ્ય ચાલક છે: ડિજિટલ બાકાતી ઉંમર, વંચિતતા, અપંગતા અને ભાષા સાથે ચાલે છે — બરાબર તે વસ્તી જે સૌથી વધુ સારવાર-યોગ્ય બોજ ઉઠાવે છે — તેથી સીમાંત બાકાત વપરાશકર્તાને ઘણી વાર *સરેરાશથી ઊંચી* સંભવિત લાભ હોય છે. સામાજિક-આર્થિક-સંબંધિત આરોગ્ય અસમાનતાના ઔપચારિક આંકડાકીય માપ માટે, [સાંદ્રતા સૂચકાંક](../સાંદ્રતા-સૂચકાંક/) જુઓ.

## ગણિત

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

## ઉકેલેલું ઉદાહરણ

ડિજિટલ ડાયાબિટીસ-નિવારણ કાર્યક્રમ, બે રીતે અહેવાલિત:

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

## સૉફ્ટવેર એન્જિનિયરિંગ સાથે સંબંધ

પહોંચ મોટા ભાગે એન્જિનિયરિંગ કૃતિ છે: ઉપકરણ અને OS ન્યૂનતમ જરૂરિયાતો, બૅન્ડવિડ્થ ધારણાઓ, ભાષા સપોર્ટ, સુલભતા અનુરૂપતા (WCAG), ઓળખ-ચકાસણી અવરોધો અને ફક્ત-ઍપ-સ્ટોર વિતરણ દરેક છેદમાંથી વસ્તીને કાપી નાખે છે — સામાન્ય રીતે અદૃશ્ય રીતે, કારણ કે બાકાત વપરાશકર્તાઓ ઍનાલિટિક્સમાં ક્યારેય દેખાતા નથી. સમાનતા ખસેડતી એન્જિનિયરિંગ પ્રથાઓ: *છેદ* માપો (ફક્ત વપરાશકર્તાઓ નહીં, પાત્ર વસ્તી ઇન્સ્ટ્રુમેન્ટ કરો); જૂના ઉપકરણો અને નબળી કનેક્ટિવિટી માટે કામગીરી બજેટ કરો; સહાયિત-ડિજિટલ માર્ગો (ફોન, SMS, કિઓસ્ક) શરમજનક ચેનલ તરીકે નહીં, પ્રથમ-વર્ગ પ્રવાહો તરીકે મોકલો; અને દરેક ડૅશબોર્ડ મેટ્રિકને સમાનતા પરિમાણો દ્વારા સ્તરીકૃત કરો — સ્તરીકૃત ન કરેલી સરેરાશ એ જગ્યા છે જ્યાં અસમાનતા છુપાય છે ([GDS સ્વીકાર](../gds-સેવા-મેટ્રિક્સ/) સમાન ચેતવણી ધરાવે છે).

## સામાન્ય ભૂલો

- **પૂર્ણ કરનારાઓ પર અહેવાલિત અસરકારકતા, વસ્તી પર દાવો કરેલી અસર** — પહોંચ પદો શાંતિથી છોડી દેવાયા.
- **ડિઝાઇન ઇનપુટને બદલે પાછળથી ઑડિટ તરીકે સમાનતા**; પહોંચ પાછળથી બેસાડવી તેના માટે ડિઝાઇન કરવા કરતાં ઘણી મોંઘી છે.
- **જાળવણી વિસ્મૃતિ**: RE-AIM નું સૌથી નબળું mHealth પરિમાણ — પુરાવાના સમય ક્ષિતિજથી આગળ અસરના દાવા.
- **ફક્ત-ડિજિટલ ચેનલ બચત** જે ખર્ચ બાકાત વપરાશકર્તાઓ અને ફ્રન્ટ-લાઇન સ્ટાફ પર ખસેડે છે ([GDS સેવા મેટ્રિક્સ](../gds-સેવા-મેટ્રિક્સ/) જુઓ).

## સ્રોતો

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
