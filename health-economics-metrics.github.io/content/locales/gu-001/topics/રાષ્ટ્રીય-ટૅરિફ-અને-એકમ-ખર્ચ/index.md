# રાષ્ટ્રીય ટૅરિફ અને એકમ ખર્ચ

NHS પ્રદાતાઓને પ્રવૃત્તિ માટે નિયમ-આધારિત રાષ્ટ્રીય ભાવ યાદી હેઠળ ચૂકવે છે — ઐતિહાસિક રીતે National Tariff / Payment by Results, જેની જગ્યાએ 1 એપ્રિલ 2023 થી **NHS Payment Scheme (NHSPS)** આવી. ભાવોની પાછળ રાષ્ટ્રીય એકમ-ખર્ચ આંકણી માળખું છે: **National Cost Collection (NCC)** અને **PSSRU Unit Costs of Health and Social Care** સંગ્રહ.

## આ શા માટે મહત્ત્વનું છે

આ દરેક વિશ્વસનીય NHS બિઝનેસ કેસના છેદ છે. જ્યારે દાવો કહે છે "આઉટપેશન્ટ હાજરીનું મૂલ્ય £160 છે" અથવા "Band 6 નર્સ-કલાકનો ખર્ચ £31 છે", ત્યારે તે સંખ્યાઓ આ માળખામાંથી આવે છે — અને શોધી કાઢેલાને બદલે સત્તાવાર આંકડા વાપરવાથી જ સ્વતંત્ર મૂલ્યાંકનો તુલનાત્મક અને નાણા ટીમો સહકારી બને છે. વેન્ડર માટે, ટૅરિફ *આવક* બાજુ પણ વ્યાખ્યાયિત કરે છે: તમારું સૉફ્ટવેર જે પ્રવૃત્તિ સક્ષમ કરે (વધારાની ક્લિનિક્સ, બૅકફિલ કરેલી પથારીઓ) તેનું મૂલ્ય યોજના ભાવે આંકાય છે.

## ગણિત

```
Tariff price per unit of activity (HRG-coded spell, outpatient attendance)
  = national average unit cost (from NCC) × Market Forces Factor (local adjustment)
  under NHSPS: blended fixed + variable ("aligned payment and incentive") elements

NCC unit cost = trust-reported total cost of an activity type / activity volume
                (built on Patient-Level Information and Costing Systems, PLICS)

PSSRU compendium: ~80 standard unit costs (GP consultation, nurse-hour by band,
ED attendance…) — the default source in UK economic evaluations.
```

## ઉકેલેલું ઉદાહરણ

તમારું સૉફ્ટવેર 250-દિવસના કાર્ય વર્ષમાં Band 6 નર્સના સમયનો દિવસ દીઠ 1 કલાક મુક્ત કરે છે:

```
PSSRU-based Band 6 cost incl. overheads ≈ £31/hour (check current edition)
Capacity value = 250 × £31 = £7,750/nurse/year (non-cash-releasing)
```

વૈકલ્પિક રીતે નર્સ ~£160 યોજના મૂલ્ય પર દિવસ દીઠ 2 વધારાની આઉટપેશન્ટ ફૉલો-અપ એપૉઇન્ટમેન્ટ ચલાવે છે: 500 × £160 = **£80,000/વર્ષ ભંડોળવાળી પ્રવૃત્તિ** — પુનઃનિયુક્તિ પર આધારિત દાવો કરેલા મૂલ્યમાં દસ ગણો તફાવત, બધું સત્તાવાર એકમ ખર્ચમાંથી. બંને દાવા ઑડિટ કરી શકાય તેવા છે કારણ કે છેદ પ્રકાશિત છે; એ જ આખો મુદ્દો છે.

## સૉફ્ટવેર એન્જિનિયરિંગ સાથે સંબંધ

આ **આંતરિક ભાવ-પુસ્તિકા** પૅટર્ન છે. UK આરોગ્ય અર્થશાસ્ત્ર કામ કરે છે કારણ કે દરેક મૂલ્યાંકન એ જ પ્રકાશિત એકમ ખર્ચ વાપરે છે; એન્જિનિયરિંગ સંસ્થાઓ પાસે મોટે ભાગે આ નથી, તેથી દરેક બિઝનેસ કેસ એન્જિનિયર-કલાક, ઘટના, ડિપ્લોયનો પોતાનો ખર્ચ શોધે છે. પ્લૅટફૉર્મ ટીમ બરાબર આવી પુસ્તિકા પ્રકાશિત કરી શકે — સ્તર દીઠ એન્જિનિયર-કલાક, ગંભીરતા દીઠ ઘટના, બિલ્ડ-મિનિટ દીઠ લોડેડ ખર્ચ — અને બધી દરખાસ્તોમાં તેનો ઉપયોગ જરૂરી બનાવી શકે. ચાર્જબૅક/શોબૅક પ્રણાલીઓ ટૅરિફની જાણીતી નિષ્ફળતા રીતો પણ પુનરાવર્તિત કરે છે: સરેરાશ-ખર્ચ ભાવ જથ્થા સાથે રમત ચલાવે છે, નિશ્ચિત ચુકવણી ઓછી જોગવાઈ ચલાવે છે. NHSPS નું શુદ્ધ પ્રવૃત્તિ ચુકવણીથી મિશ્ર નિશ્ચિત+ચલ તરફનું ઉત્ક્રાંતિ આંતરિક પ્લૅટફૉર્મ ભાવ નિર્ધારણ માટે પ્રોત્સાહન ડિઝાઇનના વીસ વર્ષના પાઠ છે.

## સામાન્ય ભૂલો

- **જૂના આંકડા**: NCC, PSSRU અને NHSPS ભાવ વાર્ષિક તાજા થાય છે — દરેક સંખ્યાને તારીખ આપો.
- **ટૅરિફ ભાવ ≠ ખર્ચ**: ભાવ સમાયોજનો સાથે રાષ્ટ્રીય સરેરાશ છે; તમારો સ્થાનિક સીમાંત ખર્ચ અલગ છે ([સીમાંત વિરુદ્ધ સરેરાશ ખર્ચ](../સીમાંત-વિરુદ્ધ-સરેરાશ-ખર્ચ/) જુઓ).
- **વધારાની પ્રવૃત્તિ ખરેખર પહોંચાડવા અને તેના માટે ચૂકવણી પામવાની પદ્ધતિ વિના ટૅરિફે ક્ષમતાનું મૂલ્યાંકન.**

## સ્રોતો

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
