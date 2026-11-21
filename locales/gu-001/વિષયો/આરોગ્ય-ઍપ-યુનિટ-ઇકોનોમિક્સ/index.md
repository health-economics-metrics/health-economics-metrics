# આરોગ્ય ઍપ યુનિટ ઇકોનોમિક્સ

ગ્રાહક આરોગ્ય ઉત્પાદનોનું વાણિજ્યિક અંકગણિત: ગ્રાહક પ્રાપ્તિ ખર્ચ (CAC), આજીવન મૂલ્ય (LTV), વપરાશકર્તા દીઠ સરેરાશ આવક (ARPU), પ્રતિ-સભ્ય-પ્રતિ-માસ (PMPM) ભાવ, અને **ROI અને VOI** (value on investment) વચ્ચેનો એમ્પ્લૉયર-બજાર ભેદ.

## આ શા માટે મહત્ત્વનું છે

આરોગ્ય ઍપ્સ માળખાકીય દબાણનો સામનો કરે છે: પ્રાપ્તિ મોંઘી છે (નિયંત્રિત દાવા, વિશ્વાસ અવરોધો, અનુપાલન ખર્ચ) જ્યારે જાળવણી કોઈપણ સૉફ્ટવેર વર્ટિકલમાં સૌથી ખરાબ છે (30 દિવસમાં ~90% ત્યજવું — જુઓ [જાળવણી અને છોડી જવું](../જાળવણી-અને-છોડી-જવું/)). પ્રમાણભૂત વ્યવહાર્યતા કસોટી — **LTV:CAC ≥ 3:1** — તેથી ગ્રાહક આરોગ્યમાં અત્યંત કઠિન છે, એટલે જ ઉદ્યોગ B2B2C મૉડેલો તરફ સ્થળાંતર કરે છે: નોકરીદાતાઓ, વીમાદાતાઓ અને આરોગ્ય પ્રણાલીઓ વસ્તી માટે PMPM ચૂકવે છે, જ્યાં ખરીદનાર છોડી જતી વ્યક્તિ નથી.

## ગણિત

```
CAC   = sales + marketing spend / new paying customers
ARPU  = revenue / active users (per period)
LTV   = ARPU × average lifetime  =  ARPU / churn rate
Viability: LTV : CAC ≥ 3, payback period ≤ 12–18 months

Effective CAC per retained user = CAC / retention(t)
  — at 4% D30 retention, £5 per install = £125 per 30-day-retained user

PMPM revenue = rate × enrolled members × months
  vendor margin = PMPM − cost-to-serve per member per month
  — engagement flips sign: under B2C subscriptions engagement drives
    revenue; under PMPM, engaged members COST more to serve than
    dormant ones, and outcomes contracts flip it back again
```

## ઉકેલેલું ઉદાહરણ

B2C ઊંઘ ઍપ: £6.99/મહિનો, માસિક છોડી જવું 18%, મિશ્ર CAC £38.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — non-viable

Pivot to employer PMPM: £1.20 PMPM × 40,000 covered lives = £48k/month
Cost-to-serve: infrastructure £0.15 + support £0.10 + content £0.05
  per member ≈ £0.30 → margin ~75%, sales cycle long but churn is
  contract-level (annual), not user-level (daily)

The employer's question shifts the metric: hard-dollar ROI (reduced
claims, absenteeism) is rarely demonstrable for wellness products —
the industry answer is VOI: productivity, recruitment appeal,
engagement — which is honest only when labelled as VOI, not dressed
as ROI (see return-on-investment.md and social-return-on-investment.md).
```

## સૉફ્ટવેર એન્જિનિયરિંગ સાથે સંબંધ

એન્જિનિયરિંગ પસંદગીઓ ગુણોત્તરની બંને બાજુ નક્કી કરે છે: **સેવા આપવાનો ખર્ચ** આર્કિટેક્ચર છે ([ક્લાઉડ યુનિટ ઇકોનોમિક્સ](../ક્લાઉડ-યુનિટ-ઇકોનોમિક્સ/) — PMPM માર્જિન પ્રતિ-સભ્ય માળખાકીય ખર્ચ પર જીવે કે મરે છે), અને **LTV** જાળવણી એન્જિનિયરિંગ છે (દરેક છોડી જવાનો બિંદુ ગાણિતિક આવક છે — [જાળવણી](../જાળવણી-અને-છોડી-જવું/) દસ્તાવેજના QALY ગણિતનું ચોક્કસ આવક જોડિયું છે). ખાસ કરીને આરોગ્ય ઉત્પાદનો માટે, યુનિટ-ઇકોનોમિક્સ ડૅશબોર્ડે LTV અને CAC ની બાજુમાં ત્રીજી પંક્તિ રાખવી જોઈએ: **પ્રાપ્ત વપરાશકર્તા દીઠ આરોગ્ય મૂલ્ય** (જાળવણી-ભારિત QALY × સીમા) — કારણ કે ચુકવણીકાર અને DiGA-શૈલીના બજારો વધુને વધુ તેના પર ભાવ નક્કી કરે છે, અને કારણ કે જે ઉત્પાદનના વાણિજ્યિક અને ક્લિનિકલ યુનિટ ઇકોનોમિક્સ અલગ પડે (નફાકારક પણ આરોગ્ય-નિષ્ક્રિય, કે અસરકારક પણ ભંડોળ વિહોણું) તેને જાણવું જોઈએ કે તેની પાસે કઈ સમસ્યા છે.

## સામાન્ય ભૂલો

- **પ્રારંભિક-કોહોર્ટ છોડી જવાથી LTV**: છોડી જવું નીચે સ્થિર થાય છે; પણ ટકી રહેનાર પૂર્વગ્રહ પણ — પ્રારંભિક અપનાવનારા સ્કેલ કરેલા પ્રેક્ષકો કરતાં વધુ જાળવાય છે. કોહોર્ટ-પરિપક્વ ડેટા વાપરો.
- **ચેનલો પર મિશ્ર CAC**: પેઇડ-સોશિયલ CAC અને ક્લિનિશિયન-રેફરલ CAC 10× અલગ છે, વિરુદ્ધ જાળવણી પ્રોફાઇલ સાથે — વિભાજિત કરો અથવા ગેરમાર્ગે દોરાઓ.
- **ઉપયોગ મર્યાદા વિના PMPM**: આઉટલાયર-જોડાયેલા સભ્યો માર્જિન ઊલટાવી શકે; સરેરાશ નહીં, વિતરણનું મૉડેલ કરો.
- **CFO ને ROI તરીકે VOI રજૂ કરવો** — નોકરીદાતા-વેલનેસ ઉદ્યોગે દાયકા સુધી કમાયેલી વિશ્વસનીયતા નિષ્ફળતા.

## સ્રોતો

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
