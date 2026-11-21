# GDS સેવા મેટ્રિક્સ

UK Government Digital Service (GDS) Service Manual દરેક સરકારી ડિજિટલ સેવા માટે ચાર KPI ફરજિયાત કરે છે: **વ્યવહાર દીઠ ખર્ચ, વપરાશકર્તા સંતોષ, પૂર્ણતા દર અને ડિજિટલ સ્વીકાર**. સાથે મળીને તે જાહેર ડિજિટલ સેવાનું ન્યૂનતમ અર્થશાસ્ત્ર છે — અને NHS ડિજિટલ સેવાઓને વારસામાં મળતો નમૂનો.

## આ શા માટે મહત્ત્વનું છે

GDS મેટ્રિક્સ ચેનલ-શિફ્ટ બિઝનેસ કેસને કોડ કરે છે જેણે સરકારી ડિજિટાઇઝેશનના દાયકાને ભંડોળ આપ્યું: Digital Efficiency Report એ ડિજિટલ વ્યવહારો ફોન કરતાં ~20× સસ્તા અને રૂબરૂ કરતાં ~50× સસ્તા શોધ્યા (સ્થાનિક-સરકાર આંકડા: વેબ £0.15, ફોન £2.83, રૂબરૂ £8.62). પરંતુ બચત ત્યારે જ સાકાર થાય છે જ્યારે લોકો ડિજિટલ પ્રવાસ *પૂર્ણ* કરે (પૂર્ણતા દર) મોંઘી ચેનલ *ને બદલે* (સ્વીકાર) — ચાર KPI એક આર્થિક મૉડેલ છે, ચાર ડૅશબોર્ડ નહીં.

## ગણિત

```
Cost per transaction = total service cost / completed transactions
Completion rate      = completed / started transactions × 100
Digital take-up      = digital transactions / all-channel transactions × 100
User satisfaction    = % satisfied+very satisfied (5-point, in-service survey)

Channel-shift saving = volume × take-up shift × (cost_old_channel − cost_digital)
… minus failure demand: (1 − completion rate) × fallback channel cost
```

## ઉકેલેલું ઉદાહરણ

NHS એપૉઇન્ટમેન્ટ-વ્યવસ્થાપન સેવા: વર્ષે 20 લાખ વ્યવહારો, હાલમાં 70% ફોન (£3.20/કૉલ) / 30% ડિજિટલ (£0.25). પુનઃડિઝાઇન ડિજિટલ સ્વીકાર 55% અને પૂર્ણતા 84% થી 93% સુધી વધારે છે:

```
Take-up shift saving = 2M × 0.25 × (3.20 − 0.25) = £1,475,000/year

Failure-demand saving: failed digital journeys fall back to phone
  before: 2M × 0.30 × 0.16 × £3.20 = £307,200
  after:  2M × 0.55 × 0.07 × £3.20 = £246,400
  net £60,800/year — completion improvements protect the take-up gains

Satisfaction is the leading indicator: dissatisfied users revert to phone,
so a satisfaction drop forecasts take-up decay before it appears.
```

## સૉફ્ટવેર એન્જિનિયરિંગ સાથે સંબંધ

આ ચાર KPI [ખર્ચ-પરિણામ કોષ્ટક](../ખર્ચ-પરિણામ-વિશ્લેષણ/) નું ઉત્પાદન-કક્ષાનું ઉદાહરણ છે: એક ખર્ચ મેટ્રિક, ત્રણ પરિણામ મેટ્રિક્સ, ક્યારેય ગુણાંકમાં સંકોચાયેલા નહીં. ઉત્પાદન એન્જિનિયરો માટે સંચાલન પાઠ: **પૂર્ણતા દર ફનલ-ઇન્સ્ટ્રુમેન્ટેશન સમસ્યા છે** (દરેક ત્યજવાનું બિંદુ શોધી અને સુધારી શકાય); **વ્યવહાર દીઠ ખર્ચ [ક્લાઉડ યુનિટ ઇકોનોમિક્સ](../ક્લાઉડ-યુનિટ-ઇકોનોમિક્સ/)** વત્તા સ્ટાફ-સહાયિત-ચેનલ ખર્ચ છે; **સ્વીકાર વેશ બદલેલું સમાનતા મેટ્રિક છે** — જે વપરાશકર્તાઓ ચેનલ બદલી શકતા નથી કે બદલશે નહીં તેઓ અપ્રમાણસર વૃદ્ધ, વિકલાંગ અને વંચિત છે, તેથી આક્રમક ચેનલ બંધ કરવી "બચત"ને પહોંચ નુકસાનમાં ફેરવે છે ([પહોંચ અને સમાનતા](../પહોંચ-અને-સમાનતા/) જુઓ). KPI પ્રકાશિત કરવું (GOV.UK કરે છે, સેવા દીઠ) એ પોતે એક પદ્ધતિ છે: પારદર્શિતા [લાભ સાકારીકરણ](../લાભ-સાકારીકરણ/) ઑડિટ જેમ આગાહીઓને શિસ્તબદ્ધ કરે છે.

## સામાન્ય ભૂલો

- **બળજબરીથી સ્વીકાર**: ફોન લાઇન બંધ કરવાથી સ્વીકાર વધે છે અને નિષ્ફળતા-માંગ ફ્રન્ટ-લાઇન સ્ટાફ પર ઠલવાય છે; કુલ-પ્રણાલી ખર્ચ માપો.
- **પેજ-2 થી માપેલી પૂર્ણતા**: ત્યજવાના બિંદુ પછી ફનલ શરૂ કરવું દરની ખુશામત કરે છે.
- **સહાયિત-ડિજિટલ સપોર્ટ અને નિષ્ફળતા-માંગ સંચાલનની અવગણના કરતો વ્યવહાર દીઠ ખર્ચ.**
- **ફક્ત સફળ પૂર્ણતા પર સંતોષ સર્વે** — અસંતુષ્ટ મોટે ભાગે સર્વે સુધી પહોંચતા જ નથી.

## સ્રોતો

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
