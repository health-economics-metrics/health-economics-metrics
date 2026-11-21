# សេដ្ឋកិច្ចឯកតានៃកម្មវិធីសុខភាព

នព្វន្ធពាណិជ្ជកម្មនៃផលិតផលសុខភាពអ្នកប្រើប្រាស់៖ ថ្លៃទាញយកអតិថិជន (CAC) តម្លៃអាយុជីវិត (LTV) ចំណូលមធ្យមក្នុងមួយអ្នកប្រើ (ARPU) ការកំណត់តម្លៃក្នុងមួយសមាជិកក្នុងមួយខែ (PMPM) និងភាពខុសគ្នាទីផ្សារនិយោជកនៃ **ROI ធៀបនឹង VOI** (តម្លៃលើការវិនិយោគ)។

## ហេតុអ្វីបានជាសំខាន់

កម្មវិធីសុខភាពប្រឈមនឹងការច្របាច់រចនាសម្ព័ន្ធ៖ ការទាញយកថ្លៃ (ការអះអាងមានបទប្បញ្ញត្តិ ឧបសគ្គទំនុកចិត្ត ថ្លៃអនុលោមភាព) ខណៈការរក្សាអាក្រក់បំផុតនៃឧបករណ៍កម្មវិធីណាមួយ (~90% បោះបង់ក្នុង 30 ថ្ងៃ — សូមមើល[ការរក្សា និងការបោះបង់](../ការរក្សា-និងការបោះបង់/))។ តេស្តភាពអាចដំណើរការបានស្តង់ដារ — **LTV:CAC ≥ 3:1** — ដូច្នេះពិបាកយ៉ាងសាហាវក្នុងសុខភាពអ្នកប្រើប្រាស់ ដែលជាមូលហេតុដែលឧស្សាហកម្មធ្វើចំណាកស្រុកឆ្ពោះទៅគំរូ B2B2C៖ និយោជក អ្នកធានារ៉ាប់រង និងប្រព័ន្ធសុខាភិបាលបង់ PMPM សម្រាប់ប្រជាជន ដែលអ្នកទិញមិនមែនជាបុគ្គលដែលបោះបង់។

## គណិតវិទ្យា

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

## ឧទាហរណ៍ដែលបានគណនា

កម្មវិធីគេង B2C៖ £6.99/ខែ អត្រាបោះបង់ប្រចាំខែ 18% CAC លាយ £38។

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

## ទំនាក់ទំនងជាមួយវិស្វកម្មកម្មវិធី

ជម្រើសវិស្វកម្មកំណត់ទាំងសងខាងនៃសមាមាត្រ៖ **ថ្លៃបម្រើ** គឺជាស្ថាបត្យកម្ម ([សេដ្ឋកិច្ចឯកតាពពក](../សេដ្ឋកិច្ចឯកតាពពក/) — រឹម PMPM រស់ ឬស្លាប់តាមថ្លៃហេដ្ឋារចនាសម្ព័ន្ធក្នុងមួយសមាជិក) ហើយ **LTV** គឺជាវិស្វកម្មការរក្សា (រាល់ចំណុចបោះបង់គឺជាចំណូលនព្វន្ធ — គណិតវិទ្យា QALY នៃឯកសារ[ការរក្សា](../ការរក្សា-និងការបោះបង់/)មានកូនភ្លោះចំណូលពិតប្រាកដ)។ សម្រាប់ផលិតផលសុខភាពជាពិសេស ផ្ទាំងសេដ្ឋកិច្ចឯកតាគួរមានបន្ទាត់ទីបីក្បែរ LTV និង CAC៖ **តម្លៃសុខភាពក្នុងមួយអ្នកប្រើដែលបានទាញយក** (QALYs ថ្លឹងតាមការរក្សា × កម្រិត) — ព្រោះទីផ្សារអ្នកបង់ប្រាក់ និងបែប DiGA កាន់តែកំណត់តម្លៃលើវា ហើយព្រោះផលិតផលដែលសេដ្ឋកិច្ចឯកតាពាណិជ្ជកម្ម និងគ្លីនិកខុសគ្នា (មានប្រាក់ចំណេញប៉ុន្តែគ្មានសុខភាព ឬមានប្រសិទ្ធភាពប៉ុន្តែមិនអាចផ្តល់មូលនិធិ) ត្រូវដឹងថាវាមានបញ្ហាមួយណា។

## កំហុសដែលត្រូវជៀសវាង

- **LTV ពីការបោះបង់ក្រុមដំបូង**៖ ការបោះបង់ស្ថិរភាពចុះក្រោម; ប៉ុន្តែក៏មានភាពលំអៀងអ្នករួចជីវិត — អ្នកទទួលយកដំបូងរក្សាបានល្អជាងទស្សនិកជនមាត្រដ្ឋាន។ ប្រើទិន្នន័យក្រុមដែលបានចាស់ទុំ។
- **CAC លាយឆ្លងឆានែល**៖ CAC បណ្តាញសង្គមបង់ប្រាក់ និង CAC ការបញ្ជូនគ្លីនិកខុសគ្នា 10× ជាមួយទម្រង់រក្សាផ្ទុយគ្នា — បែងចែក ឬត្រូវបានបំភាន់។
- **PMPM ដោយគ្មានពិដានការប្រើប្រាស់**៖ សមាជិកចូលរួមខ្លាំងអាចបង្វិលរឹម; ធ្វើគំរូការចែកចាយ មិនមែនមធ្យមទេ។
- **VOI បង្ហាញជា ROI** ដល់ CFO — ការបរាជ័យភាពជឿជាក់ដែលឧស្សាហកម្មសុខុមាលភាពនិយោជកចំណាយមួយទសវត្សរ៍ទទួលបាន។

## ប្រភព

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
