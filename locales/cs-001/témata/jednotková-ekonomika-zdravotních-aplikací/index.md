# Jednotková ekonomika zdravotních aplikací

Komerční aritmetika spotřebních zdravotních produktů: náklady na akvizici zákazníka (CAC), celoživotní hodnota (LTV), průměrný příjem na uživatele (ARPU), cenotvorba za člena a měsíc (PMPM) a rozlišení na trhu zaměstnavatelů mezi **ROI a VOI** (value on investment).

## Proč na tom záleží

Zdravotní aplikace čelí strukturálnímu sevření: akvizice je drahá (regulovaná tvrzení, bariéry důvěry, náklady na soulad), zatímco udržení je nejhorší ze všech softwarových odvětví (~90% opuštění do 30 dnů – viz [udržení a odchod](../udržení-a-odchod-uživatelů/)). Standardní test životaschopnosti – **LTV:CAC ≥ 3:1** – je proto v spotřebním zdravotnictví brutálně těžký, a proto se odvětví posouvá k modelům B2B2C: zaměstnavatelé, pojišťovny a zdravotní systémy platící PMPM za populace, kde kupujícím není odcházející jednotlivec.

## Matematika

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

## Řešený příklad

Spotřebitelská aplikace pro spánek B2C: 6,99 £/měsíc, měsíční odchod 18 %, smíšené CAC 38 £.

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

## Souvislost se softwarovým inženýrstvím

Inženýrské volby určují obě strany poměru: **náklady na obsluhu** jsou architektura ([jednotková ekonomika cloudu](../jednotková-ekonomika-cloudu/) – marže PMPM stojí a padá s infrastrukturními náklady na člena) a **LTV** je inženýrství udržení (každý bod odchodu je aritmetický příjem – matematika QALY v dokumentu o [udržení](../udržení-a-odchod-uživatelů/) má přesného příjmového dvojníka). Pro zdravotní produkty konkrétně by dashboard jednotkové ekonomiky měl mít vedle LTV a CAC třetí řádek: **zdravotní hodnota na získaného uživatele** (QALY vážené udržením × práh) – protože na ní stále častěji oceňují trhy plátců a typu DiGA a protože produkt, jehož komerční a klinická jednotková ekonomika se rozcházejí (ziskový, ale zdravotně inertní, nebo účinný, ale nefinancovatelný), musí vědět, který problém má.

## Úskalí

- **LTV z odchodu rané kohorty**: odchod se stabilizuje směrem dolů; ale také zkreslení přeživších – první uživatelé se udržují lépe než rozšířené publikum. Používejte data z vyzrálých kohort.
- **CAC zprůměrované přes kanály**: CAC placených sociálních sítí a CAC doporučení klinikem se liší 10× s opačnými profily udržení – segmentujte, nebo budete uvedeni v omyl.
- **PMPM bez stropů využití**: extrémně zapojení členové mohou převrátit marže; modelujte rozdělení, nikoli průměr.
- **VOI prezentované jako ROI** před CFO – selhání věrohodnosti, které si odvětví firemní wellness zasloužilo celou dekádu.

## Zdroje

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
