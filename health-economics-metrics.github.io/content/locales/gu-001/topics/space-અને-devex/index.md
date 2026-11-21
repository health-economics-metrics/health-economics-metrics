# SPACE અને DevEx

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) અને DevEx (ફીડબૅક લૂપ, જ્ઞાનાત્મક ભાર, ફ્લો સ્થિતિ) ડેવલપર ઉત્પાદકતાને **બહુ-પરિમાણીય રીતે** માપવાના માળખાં છે — એ શોધનો ક્ષેત્રનો જવાબ કે કોઈ એક મેટ્રિક વાસ્તવિકતા સાથે અથડાતાં ટકતું નથી.

## આ શા માટે મહત્ત્વનું છે

બંને માળખાં એ જ મુશ્કેલીથી મેળવેલો પાઠ સમાવે છે જે આરોગ્ય-પરિણામ સંશોધન દાયકાઓ પહેલાં શીખ્યું: એક જ આંકડો (કોડની લાઇનો; બ્લડ પ્રેશર) બહુ-પરિમાણીય વાસ્તવિકતાનું ખોટું ચિત્ર આપે છે, અને તેને ઑપ્ટિમાઇઝ કરવાથી સુધારો નહીં, ગેમિંગ થાય છે. SPACE ઓછામાં ઓછા ત્રણ પરિમાણોના મેટ્રિક્સ, ટેલિમેટ્રીને સ્વ-અહેવાલ સાથે ભેળવીને, જોડવાનું સૂચવે છે — જે રચનાત્મક રીતે [EQ-5D](../eq-5d/) કોઈ ઇન્ડેક્સ ગણતા પહેલાં પાંચ પરિમાણોની પ્રોફાઇલ બનાવે છે તેવું જ છે, અને શા માટે [PROMs](../દર્દી-નોંધિત-પરિણામો/) ક્લિનિકલ માપની સાથે અસ્તિત્વ ધરાવે છે. સંતોષ/સુખાકારી નરમ શણગાર પણ નથી: તે [કાર્યબળ જાળવણી](../કાર્યબળ-જાળવણી/) અર્થશાસ્ત્રને ખવડાવે છે, જ્યાં ક્ષયનો ભાવ લોડેડ પગારના મહિનાઓમાં મંડાય છે.

## ગણિત

બેમાંથી કોઈ માળખું સૂત્ર નથી; બંને માપન ડિઝાઇન છે:

```
SPACE rule: ≥ 3 dimensions, ≥ 1 perceptual (survey) + ≥ 1 system (telemetry) metric

DevEx dimensions and example pairings:
  feedback loops  → CI duration (telemetry) + "waiting feels slow" (survey)
  cognitive load  → docs findability, onboarding time + perceived effort
  flow state      → meeting/interrupt density + self-reported focus

Derived indices (e.g., DX's DXI) map survey composites to time:
vendor claim ≈ 13 min/dev/week per index point — treat as a vendor
benchmark to validate locally, not a constant of nature.
```

## ઉકેલેલું ઉદાહરણ

એક પ્લૅટફૉર્મ ટીમ 300 ડેવલપર્સ માટે DevEx રોકાણ (CI ઝડપ + દસ્તાવેજ સુધારણા) વાજબી ઠેરવે છે:

```
Baseline: CI p75 = 28 min; survey "I lose focus waiting for builds": 62% agree
After:    CI p75 = 9 min;  agreement 24%

Time reclaimed (telemetry): 6 builds/day × 19 min × 0.4 usable = ~45 min/day/dev
Capacity value: 300 × 0.75h × 220d × £60/h ≈ £2.97M/year (non-cash-releasing —
see cash-releasing-vs-non-cash-releasing.md; the 0.4 usability factor is the
fragmentation discount from practitioner-time.md)
Perceptual corroboration is what makes the telemetry claim credible — either
alone is gameable; together they triangulate.
```

## સૉફ્ટવેર એન્જિનિયરિંગ સાથે સંબંધ

આ દસ્તાવેજ પોતે જ સૉફ્ટવેર બાજુ છે; ટ્રાન્સફર આરોગ્ય અર્થશાસ્ત્ર તરફ વહે છે. "ગુણવત્તા-સમાયોજિત એન્જિનિયર વર્ષ" — પ્રમાણિત અનુભવ ઇન્ડેક્સથી ભારિત સમય — એ [QALY](../ગુણવત્તા-સમાયોજિત-જીવન-વર્ષ/) ની રચના છે જે એન્જિનિયરિંગ ક્ષમતા પર લાગુ થઈ, અને તે QALY ના નિયમો વારસામાં લે છે: ભારાંક માન્ય સાધનમાંથી (સુસંગત સર્વે, પ્રકાશિત સ્કોરિંગ), સરખામણી *પહેલાં* મેળવેલા, પસંદીદા ટૂલને ખુશ કરવા ક્યારેય ટ્યૂન કરેલા નહીં. [SF-6D વિરુદ્ધ EQ-5D](../eq-5d/) નો પાઠ પણ લાગુ પડે છે: જુદા સાધનો વ્યવસ્થિત રીતે જુદા આંકડા આપે છે, તેથી વિક્રેતાઓના સાધનો વચ્ચે DevEx ઇન્ડેક્સની સરખામણી ક્યારેય ન કરો.

## સામાન્ય ભૂલો

- **એક-મેટ્રિક પતન**: SPACE ને એક સ્કોર સુધી ઘટાડતા ડૅશબોર્ડ તે જ સમસ્યા ફરી સર્જે છે જે અટકાવવા માળખું અસ્તિત્વમાં છે.
- **પરિણામ તરીકે પ્રવૃત્તિ મેટ્રિક્સ**: કમિટ, PR અને સ્ટોરી પૉઇન્ટ એ Activity છે — SPACE સ્પષ્ટ ચેતવે છે કે આ પરિમાણ સૌથી વધુ ગેમ થઈ શકે છે (આરોગ્ય સમાંતર: સાજા થવાને નહીં, પ્રક્રિયાઓને ગણવી).
- **સર્વે થાક અને Hawthorne અસરો**: ત્રિમાસિક હળવા સાધનો સાપ્તાહિક પૂછપરછને હરાવે છે.
- **ટીમોની સરખામણી**: કેસ-મિશ્રણ સમાયોજન વગરના હૉસ્પિટલ લીગ ટેબલ જેવું — સંદર્ભ તફાવતો (ડોમેન, લેગસી ભાર, ઑન-કૉલ) હાવી થાય છે.

## સ્રોતો

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
