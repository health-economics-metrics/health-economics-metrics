# AI રોકાણ પર વળતર

AI ROI એ AI પહેલોને આભારી માપી શકાય તેવું P&L વળતર છે. ગંભીર બેન્ચમાર્ક: MIT ના 2025 "GenAI Divide" સંશોધનમાં જણાયું કે $30–40B ના એન્ટરપ્રાઇઝ GenAI રોકાણ છતાં, **~95% પાયલટ્સે કોઈ માપી શકાય તેવું P&L વળતર બતાવ્યું નહીં** — અને સફળ 5% ની ઓળખી શકાય તેવી સમાન ટેવો હતી.

## આ શા માટે મહત્ત્વનું છે

આરોગ્ય પ્રણાલીઓ પાસે AI-પાયલટ પેટર્ન માટે નામ છે: **pilotitis** — NHS નું આશાસ્પદ ઍપ્સનું કબ્રસ્તાન, જે કાયમ પાયલટ થાય છે અને ક્યારેય સ્કેલ થતી નથી. MIT ના તારણો આરોગ્ય ટેકનોલોજી મૂલ્યાંકન પહેલેથી જે જાણે છે તેની સાથે સ્પષ્ટ બંધબેસે છે: મૂલ્ય દાવાઓને પૂર્વ-નિર્દિષ્ટ અંતિમબિંદુઓ જોઈએ, એટ્રિબ્યુશનને તુલનાકારો જોઈએ, અને "બધાને લાગે છે કે તે મદદ કરે છે" એ લાભ પંક્તિ નથી. MIT માહિતીમાં સફળ લઘુમતી ટ્રૅક કરી શકાય તેવી ખર્ચ આધારરેખા ધરાવતા બૅક-ઑફિસ ઑટોમેશનમાં કેન્દ્રિત હતી, અને **ખરીદેલા સાધનો ~67% વખત સફળ થયા જ્યારે આંતરિક બિલ્ડ્સ તેના લગભગ ત્રીજા ભાગે** — પૂર્વ-અનુમાનો જે દરેક AI રોકાણ કેસમાં હોવા જોઈએ (જુઓ [બનાવો વિરુદ્ધ ખરીદો](../બનાવો-વિરુદ્ધ-ખરીદો/)).

## ગણિત

```
AI ROI = (attributable benefit − total AI cost) / total AI cost

Total AI cost = licences/inference (see inference-unit-economics.md)
              + integration + data readiness + evaluation
              + workflow redesign + governance/assurance
              (the licence is typically the minority of the denominator)

Attributable benefit: measured against a baseline or control, classed
cash / capacity / quality per cash-releasing-vs-non-cash-releasing.md
```

## ઉકેલેલું ઉદાહરણ

એક હૉસ્પિટલ જૂથ બે ઉપયોગ કેસ માટે AI ગોઠવે છે:

```
Use case A — clinical-letter drafting (back office, trackable):
  baseline: outsourced transcription £380k/yr
  after:    transcription contract cancelled; clinician review time +£60k
  AI cost:  £120k/yr all-in
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — cash-releasing, auditable ✓

Use case B — "AI copilot for clinicians" (broad, untracked):
  benefit claim: "saves time across 4,000 staff" — no baseline captured
  measured P&L effect: none demonstrable
  → the 95% bucket, regardless of whether it actually helps
```

તફાવત AI ની ગુણવત્તાનો નથી — લાભને **આધારરેખા, માલિક અને બજેટ પંક્તિ** હતી કે નહીં તેનો છે ([લાભ સાકારીકરણ](../લાભ-સાકારીકરણ/)).

## સૉફ્ટવેર એન્જિનિયરિંગ સાથે સંબંધ

AI રોકાણ માટે HTA-આકારનું પ્લેબુક: **પુરાવાને [NICE ESF સ્તરો](../nice-પુરાવા-ધોરણ-માળખું/) જેવા તબક્કાવાર કરો** — ઓછા દાવની સાધનો માટે ડેમો-કક્ષાનો પુરાવો, સંસ્થા-વ્યાપી ખર્ચ પહેલાં નિયંત્રિત પાયલટ્સ, રોલઆઉટ દ્વારો પૂર્વ-નોંધાયેલા ([DiGA ની](../જર્મનીનો-diga-ફાસ્ટ-ટ્રૅક/) સમયમર્યાદા સાથે કામચલાઉ-સૂચિબદ્ધતા પેટર્ન); **ખર્ચ નિવારણને આરોગ્ય અર્થશાસ્ત્ર માંગ નિવારણ ગણે તેમ ગણો** — ચોક્કસ બજેટ પંક્તિ ખસે ત્યારે જ વાસ્તવિક; અને **પાયલટની પોતાની કિંમત [EVPI](../સંપૂર્ણ-માહિતીનું-અપેક્ષિત-મૂલ્ય/) થી આંકો** — જે પાયલટ રોલઆઉટ નિર્ણય બદલી ન શકે તેની કિંમત £0 છે. ખાસ ડેવલપર-ટૂલ્સ ભાગ માટે જુઓ [AI ડેવલપર ઉત્પાદકતા](../ai-ડેવલપર-ઉત્પાદકતા/).

## સામાન્ય ભૂલો

- **લાભનું ફેલાવું**: હજારો વપરાશકર્તાઓમાં પાતળું ફેલાયેલું મૂલ્ય રચનાથી જ અમાપ્ય છે; કેન્દ્રિત, ટ્રૅક કરી શકાય તેવી આધારરેખાવાળા ઉપયોગ કેસ પસંદ કરો.
- **ફક્ત લાઇસન્સનો ખર્ચ ગણવો**: સંકલન, મૂલ્યાંકન અને વર્કફ્લો પુનઃડિઝાઇન સામાન્ય રીતે સાચા છેદમાં પ્રભુત્વ ધરાવે છે.
- **એટ્રિબ્યુશન ચોરી**: પ્રક્રિયા પુનઃડિઝાઇન સાથે ગોઠવાયેલું AI આખો તફાવત પોતાને નામે લે છે.
- **ડૂબેલા-પાયલટનું વધારવું**: નિષ્ફળ પાયલટ્સને લંબાવવા કારણ કે બંધ કરવાથી નિષ્ફળતા સ્વીકારવી પડે છે — સમાપ્તિ તારીખ પૂર્વ-સંમત હોવી જોઈએ.

## સ્રોતો

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
