# લાભ સાકારીકરણ

લાભ સાકારીકરણ વ્યવસ્થાપન (BRM) એ ઓળખવા, આધારરેખા બનાવવા, ટ્રૅક કરવા અને ડિલિવરી પછી બિઝનેસ કેસમાં વચન આપેલા લાભો ખરેખર સાકાર થયા તે *પુરવાર* કરવાની શિસ્ત છે. UK જાહેર રોકાણમાં તે HM Treasury ના Green Book **Five Case Model** ની અંદર રહે છે; દવામાં તેનું પિતરાઈ પોસ્ટ-માર્કેટ સર્વેલન્સ છે.

## આ શા માટે મહત્ત્વનું છે

બિઝનેસ કેસ વચનો છે; લાભ સાકારીકરણ ઑડિટ છે. મોટા NHS ડિજિટલ કાર્યક્રમોના મૂલ્યાંકનોમાં વારંવાર જણાયું કે અંદાજિત લાભો ક્યારેય સાકાર થયા નહીં — અને જ્યારે લાભો રોકડ-મુક્તિકારક ન હતા, ત્યારે તેમણે ટ્રસ્ટના બૉટમ લાઇન માટે કંઈ કર્યું નહીં. Green Book નો પ્રતિભાવ: દરેક ખર્ચ કેસે **પાંચ કેસ** (વ્યૂહાત્મક, આર્થિક, વાણિજ્યિક, નાણાકીય, વ્યવસ્થાપન) પાસ કરવા જોઈએ, જેમાં લાભ સાકારીકરણ *મંજૂરી પહેલાં* વ્યવસ્થાપન કેસમાં આયોજિત હોય — માલિકો નામાંકિત, આધારરેખાઓ નોંધાયેલી, માપન તારીખો નક્કી. આ વિના, "સૉફ્ટવેરે દરેક નર્સ દીઠ 30 મિનિટ બચાવી" કાયમ વેન્ડરની કલ્પના રહે છે.

## ગણિત

```
Realization rate = benefits realized / benefits forecast   (per benefit, per period)

Mechanics that make it computable:
  baseline captured BEFORE go-live (else the delta is unmeasurable)
  each benefit: owner, metric, data source, measurement schedule
  forecast adjusted for optimism bias at appraisal (Green Book mandate)
  benefits classed cash / non-cash / qualitative and tracked separately
  (see cash-releasing-vs-non-cash-releasing.md)
```

## ઉકેલેલું ઉદાહરણ

એક ઇ-રોસ્ટરિંગ બિઝનેસ કેસે વર્ષ દીઠ વચન આપ્યું: £450k એજન્સી-ખર્ચ ઘટાડો (રોકડ), 8,000 વૉર્ડ-મેનેજર કલાકો (ક્ષમતા), સુધરેલું ફિલ-રેટ અનુપાલન (ગુણાત્મક). ગો-લાઇવ પછી બાર મહિને:

```
Benefit           Forecast    Realized    Rate   Evidence
Agency spend      £450,000    £287,000    64%    ledger vs baseline year
Manager hours     8,000       5,100       64%    time-motion sample
Fill compliance   +10pp       +12pp       120%   rostering system data

Actions from the review (the point of BRM):
agency shortfall traced to two wards never onboarded → onboard them;
forecast model's 30%-optimism error logged → applied to the next case.
```

64% સાકારીકરણ નિષ્ફળતા નથી — તે *જ્ઞાન* છે. ન માપેલા કેસ કાયમ 100% દાવો કરે છે.

## સૉફ્ટવેર એન્જિનિયરિંગ સાથે સંબંધ

એન્જિનિયરિંગ સંસ્થાઓ અંદાજિત લાભો પર પ્લૅટફૉર્મ રોકાણો મંજૂર કરે છે અને લગભગ ક્યારેય તેમનું ઑડિટ કરતી નથી — BRM જે રોગ સુધારે છે તે જ. હલકું સ્વરૂપ: એક સીમાથી ઉપરની દરેક દરખાસ્ત લાભ માલિકો, આધારરેખા મેટ્રિક્સ અને T+6-મહિનાની સમીક્ષા તારીખનું નામ આપે; સાકારીકરણ દરો એ ફીડબેકમાં જાય કે સંસ્થા તે ટીમની (કે વેન્ડરની) આગામી આગાહીને કેટલી ડિસ્કાઉન્ટ કરે. AI-ટૂલિંગ સંશય નો પણ આ જવાબ છે: [~95% GenAI પાયલટ્સે કોઈ માપી શકાય તેવું P&L વળતર બતાવ્યું નહીં એ MIT તારણ](../ai-રોકાણ-પર-વળતર/) લાભ-સાકારીકરણ પરિણામ છે — જે પાયલટ્સે *વળતર* આપ્યું તેમની પાસે ટ્રૅક કરી શકાય તેવી, માલિકીવાળી લાભ પંક્તિઓ હતી. આગાહી → માપ → પુનઃકેલિબ્રેટ એ [EVPI](../સંપૂર્ણ-માહિતીનું-અપેક્ષિત-મૂલ્ય/)-કિંમતવાળા પાયલટ્સ જેવો જ લૂપ છે, પોર્ટફોલિયો સ્કેલ પર ચલાવેલો.

## સામાન્ય ભૂલો

- **ગો-લાઇવ પહેલાંની આધારરેખા નહીં** — ઘાતક, ન સુધરી શકે તેવી ચૂક.
- **લાભ અનાથતા**: નામાંકિત માલિક નહીં એટલે કોઈ માહિતી એકત્ર કરતું નથી અને દરેક સમીક્ષા કહે છે "મોટે ભાગે ટ્રૅક પર."
- **કાર્યક્રમો વચ્ચે બેવડા ગણાયેલા લાભો** જે એ જ મુક્ત ક્ષમતાનો દાવો કરે — પોર્ટફોલિયોમાં લાભ રજિસ્ટર રાખો.
- **સાકારીકરણ નાટક**: સરળ ગુણાત્મક જીત માપવી જ્યારે રોકડ પંક્તિઓ શાંતિથી ચકાસાયા વગર રહે.

## સ્રોતો

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
