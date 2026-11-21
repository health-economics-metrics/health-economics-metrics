# AI ગુણવત્તા મેટ્રિક્સ

AI-જનિત આઉટપુટની સાચાઈના મેટ્રિક્સ: ગ્રાઉન્ડ ટ્રુથ સામે ચોકસાઈ, **વફાદારી/આધારિતતા** (શું દરેક દાવો આપેલા સંદર્ભથી સમર્થિત છે?), અને **હૅલ્યુસિનેશન દર** (કયા અંશના આઉટપુટમાં અસમર્થિત કે ખોટી સામગ્રી છે?). આરોગ્ય સેટિંગ્સમાં આ ગુણવત્તાની નાની વાતો નથી — તે નુકસાન દરો છે.

## આ શા માટે મહત્ત્વનું છે

તબીબી-ક્ષેત્રના બેન્ચમાર્કે તબીબી કાર્યો પર **ગ્રાઉન્ડિંગ વગરના LLM માટે 60% થી ઉપર** હૅલ્યુસિનેશન દર માપ્યા છે (કેટલાક ઓપન મૉડેલ >80%), જ્યારે ગ્રાઉન્ડિંગ, રિટ્રીવલ અને તર્ક મોડ દરને નાટકીય રીતે ઘટાડે છે (દા.ત., એક બેન્ચમાર્ક પર GPT-5 ના થિંકિંગ મોડે HealthBench હૅલ્યુસિનેશન 3.6% → 1.6% કર્યા). ક્લિનિકલ વર્કફ્લોમાં ભ્રામક ડોઝ કે બનાવટી ટાંકણ એ **નુકસાન-માર્ગ ધરાવતી ખોટી-માહિતી ઘટના** છે — તે કોઈપણ આર્થિક મૉડેલના નુકસાન ભાગમાં આવે છે, [સ્ક્રીનિંગ અર્થશાસ્ત્ર](../સ્ક્રીનિંગ-અર્થશાસ્ત્ર/)ના ખોટા હકારાત્મકોની જેમ કિંમત આંકવામાં આવે છે: દરેક ડાઉનસ્ટ્રીમ ખર્ચ ઊભો કરે છે (ખોટી માહિતી પર કાર્ય, ચકાસણી શ્રમ, તબીબી-કાનૂની જોખમ, ઘટેલો વિશ્વાસ).

## ગણિત

```
Hallucination rate = outputs containing unsupported/false content / total outputs
  intrinsic:  contradicts the provided context
  extrinsic:  unverifiable fabrication beyond the context

Faithfulness (RAGAS-style) = supported claims in answer / total claims in answer
Context precision/recall   = retrieval quality feeding the generator

Economic weighting — not all hallucinations cost alike:
  expected harm cost = Σ over error types (rate × P(undetected) ×
                       P(acted upon) × cost per acted-upon error)
  The human-review layer sets P(undetected) — and its cost belongs
  in the model too (reviewer minutes × volume).
```

## ઉકેલેલું ઉદાહરણ

એક AI ક્લિનિકલ-કોડિંગ સહાયક વર્ષે 200,000 એપિસોડ પ્રક્રિયા કરે છે; ઑડિટ દર્શાવે છે કે 2% આઉટપુટમાં ભૌતિક કોડિંગ ભૂલ છે; માનવ કોડર્સ તેમાંથી 85% પકડે છે:

```
Errors reaching submission = 200,000 × 0.02 × 0.15 = 600/year
Cost per uncaught error (mis-billing avg + audit exposure) ≈ £250
Expected error cost         = 600 × 250 = £150,000/year
Review cost (2 min × 200k × £0.50/min)  = £200,000/year

Improvement case: retrieval grounding cuts error rate to 0.8%
→ uncaught errors 240, error cost £60,000 (−£90k/yr); review time
  can also drop (sampling instead of full review) — the quality
  investment pays before any speed claim.
```

## સૉફ્ટવેર એન્જિનિયરિંગ સાથે સંબંધ

મૉડેલ ગુણવત્તાને ટેસ્ટ કવરેજ અર્થશાસ્ત્રની જેમ, આરોગ્ય-કક્ષાની શિસ્ત સાથે ગણો: **મૂલ્યાંકન સમૂહો તમારી ક્લિનિકલ ટ્રાયલ છે** — પૂર્વ-નોંધાયેલા, *તમારા* કેસ-મિશ્રણના પ્રતિનિધિ, ડ્રિફ્ટ સામે તાજા કરાયેલા; **તથ્યાત્મક કાર્યો માટે ગ્રાઉન્ડિંગ સ્કેલને હરાવે છે** (રિટ્રીવલ + ટાંકણ-આવશ્યક પ્રૉમ્પ્ટિંગ સામાન્ય રીતે ઉપલબ્ધ સૌથી સસ્તો હૅલ્યુસિનેશન ઘટાડો છે — તેના ટોકન ઓવરહેડ માટે જુઓ [અનુમાન એકમ અર્થશાસ્ત્ર](../અનુમાન-એકમ-અર્થશાસ્ત્ર/)); અને **ઑપરેટિંગ બિંદુ પ્રકાશિત કરો**: [સંવેદનશીલતા/વિશિષ્ટતા](../ક્લિનિકલ-ai-મૂલ્યાંકન/)ની જેમ, કાર્ય વિતરણ અને શોધ સીમા વિના "97% વફાદાર"નો કોઈ અર્થ નથી. ઉપરનું સમીક્ષા-સ્તરનું ગણિત કોઈપણ સ્ક્રીનિંગ દ્વારની જેમ જ [NNT/NNH](../સારવાર-માટે-જરૂરી-સંખ્યા/) અંકગણિત છે.

## સામાન્ય ભૂલો

- **બેન્ચમાર્કથી ઉત્પાદનમાં પ્રત્યારોપણ**: હૅલ્યુસિનેશન દરો કાર્ય પર ખૂબ આધારિત છે; ફક્ત તમારું કેસ-મિશ્રણ જ ગણનાપાત્ર બેન્ચમાર્ક છે.
- **કિંમત ન આંકેલી માનવ સમીક્ષા**: "ક્લિનિશિયન બધું તપાસે છે" લાભ અડધો કરે છે અને ખર્ચ પંક્તિમાં દેખાવું જોઈએ — અને સતર્કતા ઘટે છે (ઑટોમેશન આત્મસંતોષ), તેથી વિશ્વાસ સાથે P(undetected) વધે છે.
- **સરેરાશ ગુણવત્તાને ઑપ્ટિમાઇઝ કરવી જ્યારે નુકસાન પૂંછડીનું જોખમ વહન કરે છે**: એક બનાવટી ઍલર્જી નોંધ હજાર અટપટા વાક્યો કરતાં વધુ ભારે છે; અપેક્ષિત-નુકસાન સૂત્ર મુજબ ભૂલોને પરિણામ દ્વારા ભારિત કરો.

## સ્રોતો

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
