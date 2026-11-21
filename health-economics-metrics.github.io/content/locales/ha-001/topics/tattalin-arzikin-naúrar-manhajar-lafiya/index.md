# Tattalin Arzikin Naúrar Manhajar Lafiya

Lissafin kasuwanci na samfuran lafiya na masu amfani: kuɗin samun abokin ciniki (CAC), darajar rayuwa (LTV), matsakaicin kuɗin shiga ga kowane mai amfani (ARPU), farashin kowane-memba-kowane-wata (PMPM), da bambancin kasuwar ma'aikata tsakanin **ROI da VOI** (daraja kan jari).

## Dalilin muhimmancinsa

Manhajojin lafiya suna fuskantar matsi na tsari: samun masu amfani yana da tsada (da'awa da ake sarrafawa, shingen amana, kuɗin bin ƙa'ida) alhali riƙewa shi ne mafi muni a kowane ɓangaren manhaja (~90% barin amfani cikin kwanaki 30 — duba [riƙewa da barin amfani](../riƙewa-da-barin-amfani/)). Gwajin cin gajiya na yau da kullum — **LTV:CAC ≥ 3:1** — don haka yana da wuya ƙwarai a lafiyar masu amfani, shi ya sa masana'antar ke ƙaura zuwa samfuran B2B2C: ma'aikata, masu inshora, da tsarin lafiya suna biyan PMPM ga al'umma, inda mai saye ba mutum mai barin amfani ba ne.

## Lissafin

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

## Misali da aka lissafa

Manhajar barci ta B2C: £6.99/wata, barin amfani na wata 18%, CAC gauraye £38.

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

## Alaƙa da injiniyancin manhaja

Zaɓuɓɓukan injiniya suna saita ɓangarorin rabon biyu: **kuɗin hidima** gine-gine ne ([tattalin arzikin naúrar gajimare](../tattalin-arzikin-naúrar-gajimare/) — ribar PMPM tana rayuwa ko mutuwa a kan kuɗin kayayyakin more rayuwa ga kowane memba), kuma **LTV** injiniyancin riƙewa ne (kowane wurin barin kuɗin shiga ne na lissafi — lissafin QALY na [riƙewa](../riƙewa-da-barin-amfani/) yana da takwaran kuɗin shiga daidai). Ga samfuran lafiya musamman, allon tattalin arzikin naúrar ya kamata ya ɗauki layi na uku kusa da LTV da CAC: **darajar lafiya ga kowane mai amfani da aka samu** (QALY masu nauyin riƙewa × iyaka) — domin kasuwannin masu biya da irin DiGA suna ƙara farashi a kai, kuma saboda samfurin da tattalin arzikin naúrarsa na kasuwanci da na asibiti suka rabu (mai riba amma ba shi da tasirin lafiya, ko mai tasiri amma ba za a iya ba da kuɗi ba) yana buƙatar sanin wace matsala yake da ita.

## Tarkuna

- **LTV daga barin amfani na ƙungiyar farko**: barin amfani yana daidaita ƙasa; amma kuma son zuciya na waɗanda suka tsira — masu karɓa na farko suna riƙewa fiye da masu sauraro masu girma. A yi amfani da bayanan ƙungiya da suka balaga.
- **CAC gauraye a tashoshi**: CAC na paid-social da na turawa daga likita sun bambanta sau 10, tare da bayanan riƙewa masu gaba da juna — a raba su ko a ɓatar da su.
- **PMPM ba tare da iyakar amfani ba**: mambobi masu shiga aiki fiye da kima za su iya juya riba; a yi samfurin rarrabuwa, ba matsakaici ba.
- **VOI da aka gabatar a matsayin ROI** ga CFO — gazawar sahihanci da masana'antar lafiyar ma'aikata ta kwashe shekaru goma tana samu.

## Tushe

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
