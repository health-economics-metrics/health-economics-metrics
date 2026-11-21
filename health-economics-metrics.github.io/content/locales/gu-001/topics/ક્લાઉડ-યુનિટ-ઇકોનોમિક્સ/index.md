# ક્લાઉડ યુનિટ ઇકોનોમિક્સ (FinOps)

ક્લાઉડ યુનિટ ઇકોનોમિક્સ કાચા ક્લાઉડ ખર્ચને **આઉટપુટના એકમ દીઠ ખર્ચ** — ગ્રાહક દીઠ, વ્યવહાર દીઠ, ઉકેલાયેલા કેસ દીઠ, ટોકન દીઠ — માં ફેરવે છે. તે FinOps ક્ષમતા છે જે "અમારું AWS બિલ £400k/મહિનો છે" ને "એક દર્દીની સેવાનો ખર્ચ £0.83 છે" માં ફેરવે છે.

## આ શા માટે મહત્ત્વનું છે

કુલ ખર્ચના આંકડા મહત્ત્વના પ્રશ્નોના જવાબ આપી શકતા નથી: ઉત્પાદન વધુ કે ઓછું કાર્યક્ષમ બની રહ્યું છે? વૃદ્ધિ માર્જિન સુધારે છે કે બગાડે છે? આપણે શું ભાવ રાખવો? એકમ ખર્ચ ત્રણેયના જવાબ આપે છે. ખાસ કરીને ડિજિટલ આરોગ્ય માટે, "ઉકેલાયેલા કેસ દીઠ ખર્ચ" એ આરોગ્ય-સેવા એકમ ખર્ચ *છે* — કમિશનર દરેક અન્ય સેવા માટે વાપરે છે તે [National Cost Collection](../રાષ્ટ્રીય-ટૅરિફ-અને-એકમ-ખર્ચ/) આંકડાઓ સાથે સીધો તુલનાત્મક, જે તેને ડિજિટલ માર્ગોને પરંપરાગત સામે કિંમત આંકવા માટે કુદરતી ભાષા બનાવે છે.

## ગણિત

```
Unit cost = total allocated cost (incl. shared/platform costs) / units delivered

Two families:
  resource-efficiency units: cost/GB stored, cost/vCPU-hour, cost/token,
                             cost/build-minute
  business units:            cost/customer, cost/transaction, cost/consultation,
                             cost/case-resolved

Marginal vs average discipline applies (marginal-vs-average-cost.md):
committed/reserved spend makes marginal unit cost ≈ 0 until the next
commitment step — price expansion decisions at marginal, efficiency
trends at average.
```

## ઉકેલેલું ઉદાહરણ

એક ડિજિટલ ટ્રાયેજ સેવા: ક્લાઉડ ખર્ચ £62,000/મહિનો (કમ્પ્યુટ £30k, ડેટા £18k, શેર્ડ પ્લૅટફૉર્મ ફાળવણી £14k), મહિને 380,000 ટ્રાયેજ એપિસોડ સંભાળે છે:

```
Average cost per episode = 62,000 / 380,000 ≈ £0.163

Commissioner comparison: telephone triage ≈ £8–12/call, GP consultation ≈ £42
→ digital episode runs at ~2% of the cheapest human alternative — the
channel-shift economics of gds-service-metrics.md, from the cost side.

Trend check: last year £0.21/episode at 240k episodes → improving scale
economics (fixed platform costs amortizing), worth a headline in the QBR.
```

## સૉફ્ટવેર એન્જિનિયરિંગ સાથે સંબંધ

યુનિટ ઇકોનોમિક્સ એ જગ્યા છે જ્યાં એન્જિનિયરિંગ પસંદગીઓ નાણાકીય રીતે વાંચી શકાય તેવી બને છે: એપિસોડ દીઠ ખર્ચ અડધો કરતું આર્કિટેક્ચર ભાવ લાભ છે; સુપર-લિનિયર સ્કેલ થતું ટાઇમ બૉમ્બ છે જે ફક્ત આ મેટ્રિકમાં દેખાય છે. આરોગ્ય ખર્ચ આંકણીમાંથી સ્થાનાંતરિત પ્રથાઓ: **ફાળવણી નિયમો પ્રકાશિત કરો** (PLICS એ દર્દી-સ્તરની ખર્ચ આંકણી પ્રમાણિત કરી ત્યાં સુધી શેર્ડ ખર્ચ પ્રતિ-એકમ આંકડા વિકૃત કરતા હતા — તમારી પ્લૅટફૉર્મ-ખર્ચ ફાળવણીને એ જ ચુસ્તતા જોઈએ); **ખરીદનાર જે એકમોમાં વિચારે તે પસંદ કરો** (કમિશનરો એપિસોડ ખરીદે છે, vCPU નહીં); અને દરેક [ICER](../વૃદ્ધિશીલ-ખર્ચ-અસરકારકતા-ગુણોત્તર/) અને [બજેટ અસર](../બજેટ-અસર-વિશ્લેષણ/) મૉડેલમાં એકમ ખર્ચને અધિકૃત ખર્ચ છેદ તરીકે ફીડ કરો. AI સુવિધાઓ માટે એકમ ટોકન છે — જુઓ [અનુમાન એકમ અર્થશાસ્ત્ર](../અનુમાન-એકમ-અર્થશાસ્ત્ર/).

## સામાન્ય ભૂલો

- **શેર્ડ ખર્ચની અવગણના**: પ્લૅટફૉર્મ/સુરક્ષા/ઑન-કૉલ ફાળવણી બાકાત રાખતા એકમ ખર્ચ 30–50% ઓછા આંકે છે અને ઑડિટ પર તૂટી પડે છે.
- **દેખાડાના છેદ**: "API કૉલ દીઠ ખર્ચ" ખુશામત કરે છે; "પૂર્ણ દર્દી એપિસોડ દીઠ ખર્ચ" માહિતી આપે છે.
- **સીમાંત નિર્ણયોની સરેરાશ-ખર્ચ કિંમત**: સીમાંત રીતે મફત વપરાશ માટે ટીમોને સરેરાશ એકમ ખર્ચ વસૂલવાથી બગાડ-નિવારણ નાટક ચાલે છે (આ પ્રોત્સાહન બગના NHS સંસ્કરણ માટે [રાષ્ટ્રીય ટૅરિફ](../રાષ્ટ્રીય-ટૅરિફ-અને-એકમ-ખર્ચ/) જુઓ).

## સ્રોતો

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
