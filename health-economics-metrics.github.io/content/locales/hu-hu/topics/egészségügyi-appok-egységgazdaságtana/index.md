# Egészségügyi appok egységgazdaságtana

A fogyasztói egészségügyi termékek kereskedelmi számtana: ügyfélszerzési költség (CAC), élettartam-érték (LTV), felhasználónkénti átlagos bevétel (ARPU), tagonkénti havi (PMPM) árazás, valamint a munkáltatói piacon az **ROI és a VOI** (befektetésen realizált érték) közötti különbségtétel.

## Miért fontos

Az egészségügyi appok szerkezeti szorításban vannak: a megszerzés drága (szabályozott állítások, bizalmi gátak, megfelelési költségek), miközben a megtartás a legrosszabb az összes szoftveriparági vertikum közül (~90%-os lemorzsolódás 30 napon belül — lásd [megtartás és lemorzsolódás](../megtartás-és-lemorzsolódás/)). A szokásos életképességi próba — **LTV:CAC ≥ 3:1** — ezért fogyasztói egészségügyben könyörtelenül nehezen teljesül, és ezért vándorol az iparág a B2B2C modellek felé: munkáltatók, biztosítók és egészségügyi rendszerek fizetnek PMPM-alapon népességekért, ahol a vevő nem a lemorzsolódó egyén.

## A matematika

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

## Kidolgozott példa

Egy B2C alvásapp: 6,99 £/hó, havi lemorzsolódás 18%, vegyes CAC 38 £.

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

## Kapcsolat a szoftverfejlesztéssel

A mérnöki döntések a hányados mindkét oldalát meghatározzák: a **kiszolgálási költség** architektúra ([felhő-egységgazdaságtan](../felhő-egységgazdaságtan/) — a PMPM-árrés a tagonkénti infrastrukturális költségen áll vagy bukik), az **LTV** pedig megtartásmérnökség (minden lemorzsolódási pont számtanilag bevétel — a [megtartás](../megtartás-és-lemorzsolódás/) dokumentum QALY-matematikájának pontos bevételi párja van). Az egészségügyi termékeknél az egységgazdaságtani irányítópultnak az LTV és a CAC mellett egy harmadik sort is hordoznia kell: az **egy megszerzett felhasználóra jutó egészségértéket** (megtartással súlyozott QALY-k × küszöb) — mert a fizetők és a DiGA-típusú piacok egyre inkább erre árazzák a termékeket, és mert a termék, amelynek kereskedelmi és klinikai egységgazdaságtana eltér (nyereséges, de egészségügyileg inert, vagy hatékony, de finanszírozhatatlan), tudnia kell, melyik problémával küzd.

## Buktatók

- **LTV a korai kohorsz lemorzsolódásából**: a lemorzsolódás lefelé stabilizálódik; de van túlélési torzítás is — a korai alkalmazók jobban megmaradnak, mint a skálázott közönség. Érett kohorszadatokat használj.
- **Csatornák között átlagolt CAC**: a fizetett közösségimédia-CAC és az orvosi beutalású CAC 10-szeresen eltér, ellentétes megtartási profillal — szegmentálj, különben félrevezetnek.
- **PMPM kihasználtsági plafon nélkül**: a kiugróan aktív tagok megfordíthatják az árrést; az eloszlást modellezd, ne az átlagot.
- **VOI-t ROI-ként előadva** egy pénzügyi igazgatónak — az a hitelességi kudarc, amelyet a munkáltatói wellness-ipar egy évtizeden át érdemelt ki.

## Források

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
