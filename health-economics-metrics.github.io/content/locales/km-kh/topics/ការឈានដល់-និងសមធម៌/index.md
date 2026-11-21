# ការឈានដល់ និងសមធម៌

RE-AIM — Reach (ការឈានដល់) Effectiveness (ប្រសិទ្ធភាព) Adoption (ការទទួលយក) Implementation (ការអនុវត្ត) Maintenance (ការថែរក្សា) — គឺជាក្របខ័ណ្ឌស្តង់ដារសម្រាប់វិនិច្ឆ័យផលប៉ះពាល់ *ប្រជាជន* នៃអន្តរាគមន៍។ នព្វន្ធកណ្តាលរបស់វា៖ **ផលប៉ះពាល់សុខភាពសាធារណៈ ≈ ការឈានដល់ × ប្រសិទ្ធភាព**។ ឧបករណ៍ឌីជីថលបន្ថែមវិមាត្រសមធម៌៖ ចន្លោះឌីជីថលមានន័យថាការឈានដល់មិនស្មើគ្នាជាប្រព័ន្ធ ហើយការផ្តល់ជាឌីជីថលមុនអាចពង្រីកគម្លាតសុខភាពដែលវាមានបំណងបិទ។

## ហេតុអ្វីបានជាសំខាន់

ការពិនិត្យជាប្រព័ន្ធដែលអនុវត្ត RE-AIM លើ mHealth រកឃើញហត្ថលេខាស្របគ្នា៖ ការឈានដល់ និងការទទួលយកខ្លាំង **ប្រសិទ្ធភាព និងការថែរក្សាខ្សោយ** — កម្មវិធីរីករាលដាលងាយស្រួល ហើយរសាត់ឆាប់។ សម្រាប់សេវាសុខភាពជាតិ នេះមានន័យថាផលិតផលក្នុងមួយអ្នកប្រើដ៏គួរឱ្យចាប់អារម្មណ៍អាចជាការវិនិយោគប្រជាជនមិនល្អ ហើយផ្ទុយមកវិញ៖ ឧបករណ៍ដែលមានប្រសិទ្ធភាពបន្តិចបន្តួចឈានដល់រាប់លាននាក់ អាចផលិតច្រើនជាងឧបករណ៍អស្ចារ្យដែលឈានដល់រាប់ពាន់នាក់ (សូមមើលនព្វន្ធ [HALE](../អាយុកាលរំពឹងទុកដែលកែតម្រូវតាមសុខភាព/))។ សមធម៌មិនមែនជាឧបសគ្គចំហៀងទេ ប៉ុន្តែជាកត្តាជំរុញតម្លៃ៖ ការរើសអើងឌីជីថលតាមដានអាយុ ភាពខ្វះខាត ពិការភាព និងភាសា — ពិតជាប្រជាជនដែលផ្ទុកបន្ទុកដែលអាចព្យាបាលបានច្រើនបំផុត — ដូច្នេះអ្នកប្រើដែលត្រូវបានដកចេញនៅគែមតែងមានសក្តានុពលអត្ថប្រយោជន៍ *លើសមធ្យម*។ សម្រាប់រង្វាស់ស្ថិតិផ្លូវការនៃវិសមភាពសុខភាពទាក់ទងនឹងសេដ្ឋកិច្ចសង្គម សូមមើល[សន្ទស្សន៍កំហាប់](../សន្ទស្សន៍កំហាប់/)។

## គណិតវិទ្យា

```
Population impact ≈ reach × effectiveness
  reach         = participants / eligible population (see activation-and-uptake.md)
  effectiveness = real-world effect among participants (retention-weighted —
                  see retention-and-churn.md)

Equity-stratified version:
  impact_group_g = reach_g × effectiveness_g, reported per deprivation
  quintile / age band / language group
  equity gap = impact_top quintile − impact_bottom quintile

Distributional cost-effectiveness: apply equity weights to QALYs by
recipient group — a QALY to the worst-off counts more (an increasingly
mainstream HTA extension).
```

## ឧទាហរណ៍ដែលបានគណនា

កម្មវិធីបង្ការជំងឺទឹកនោមផ្អែមឌីជីថល រាយការណ៍តាមពីរវិធី៖

```
Aggregate: reach 12%, effect 0.02 QALYs/participant → 0.0024 QALYs/eligible person

Stratified (deprivation quintiles):
  Q1 (least deprived): reach 22%, effect 0.02 → 0.0044
  Q5 (most deprived):  reach 4%,  effect 0.025 → 0.0010

The programme delivers 4.4× more health to the least deprived —
while Q5's per-participant effect is HIGHER (more headroom). An
assisted-digital arm (phone coaching + community access) costing 20%
more per Q5 participant that lifts Q5 reach to 12% triples Q5 impact
and improves the aggregate — the equity investment IS the efficiency
investment here.
```

## ទំនាក់ទំនងជាមួយវិស្វកម្មកម្មវិធី

ការឈានដល់ភាគច្រើនជាសិល្បៈវត្ថុវិស្វកម្ម៖ តម្រូវការជាន់ឧបករណ៍ និង OS ការសន្មត់កម្រិតបញ្ជូន ការគាំទ្រភាសា ភាពស្របតាមភាពងាយស្រួលប្រើ (WCAG) ឧបសគ្គផ្ទៀងផ្ទាត់អត្តសញ្ញាណ និងការចែកចាយតែតាម app-store នីមួយៗកាត់ប្រជាជនចេញពីភាគបែង — ជាធម្មតាមើលមិនឃើញ ពីព្រោះអ្នកប្រើដែលត្រូវបានដកចេញមិនដែលបង្ហាញក្នុងការវិភាគ។ ការអនុវត្តវិស្វកម្មដែលផ្លាស់ប្តូរសមធម៌៖ វាស់ *ភាគបែង* (ដាក់ឧបករណ៍វាស់លើប្រជាជនដែលមានសិទ្ធិ មិនមែនតែអ្នកប្រើទេ); កំណត់ថវិកាដំណើរការសម្រាប់ឧបករណ៍ចាស់ និងការតភ្ជាប់មិនល្អ; បញ្ជូនផ្លូវឌីជីថលដែលមានជំនួយ (ទូរស័ព្ទ SMS កៀអូស) ជាលំហូរថ្នាក់ទីមួយ ជំនួសឱ្យឆានែលអាម៉ាស់; និងបំបែករាល់រង្វាស់ផ្ទាំងគ្រប់គ្រងតាមវិមាត្រសមធម៌ — មធ្យមភាគដែលមិនបានបំបែកគឺជាកន្លែងដែលវិសមភាពលាក់ខ្លួន ([ការទទួលយក GDS](../រង្វាស់សេវា-gds/) ផ្ទុកការព្រមានដូចគ្នា)។

## ចំណុចងាយធ្លាក់

- **ប្រសិទ្ធភាពរាយការណ៍លើអ្នកបញ្ចប់ ផលប៉ះពាល់អះអាងលើប្រជាជន** — ពាក្យការឈានដល់ត្រូវបានលុបចោលដោយស្ងៀមស្ងាត់។
- **សមធម៌ជាសវនកម្មក្រោយ** ជាជាងធាតុចូលនៃការរចនា; ការបន្ថែមការឈានដល់ឡើងវិញមានថ្លៃជាងការរចនាសម្រាប់វា។
- **ការភ្លេចការថែរក្សា**៖ វិមាត្រ mHealth ខ្សោយបំផុតរបស់ RE-AIM — ការអះអាងផលប៉ះពាល់លើសពីរយៈពេលនៃភស្តុតាង។
- **ការសន្សំឆានែលឌីជីថលតែប៉ុណ្ណោះ** ដែលផ្ទេរថ្លៃដើមទៅអ្នកប្រើដែលត្រូវដកចេញ និងបុគ្គលិកជួរមុខ (សូមមើល[រង្វាស់សេវា GDS](../រង្វាស់សេវា-gds/))។

## ប្រភព

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
