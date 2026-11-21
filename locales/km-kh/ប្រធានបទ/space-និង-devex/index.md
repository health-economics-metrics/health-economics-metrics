# SPACE និង DevEx

SPACE (Satisfaction & well-being ការពេញចិត្ត និងសុខុមាលភាព, Performance ដំណើរការ, Activity សកម្មភាព, Communication & collaboration ទំនាក់ទំនង និងកិច្ចសហការ, Efficiency & flow ប្រសិទ្ធភាព និងលំហូរ) និង DevEx (រង្វិលព្រឹត្តិការណ៍មតិកែលម្អ បន្ទុកការយល់ដឹង ស្ថានភាពលំហូរ) គឺជាក្របខ័ណ្ឌសម្រាប់វាស់ផលិតភាពអ្នកអភិវឌ្ឍន៍ **ច្រើនវិមាត្រ** — ចម្លើយរបស់វិស័យនេះចំពោះការរកឃើញថាគ្មានរង្វាស់តែមួយរួចផុតពីការប៉ះពាល់នឹងការពិតទេ។

## ហេតុអ្វីបានជាសំខាន់

ក្របខ័ណ្ឌទាំងពីរបញ្ចូលមេរៀនដែលបានមកដោយលំបាកដូចគ្នា ដែលការស្រាវជ្រាវលទ្ធផលសុខភាពបានរៀនកាលពីទសវត្សរ៍មុន៖ លេខតែមួយ (ចំនួនបន្ទាត់កូដ; សម្ពាធឈាម) បង្ហាញការពិតច្រើនវិមាត្រខុស ហើយការបង្កើនប្រសិទ្ធភាពវាបង្កើតការបន្លំ មិនមែនភាពប្រសើរឡើងទេ។ SPACE ណែនាំឱ្យបញ្ចូលរង្វាស់ពីយ៉ាងហោចណាស់បីវិមាត្រ លាយតេឡេមេទ្រីជាមួយការរាយការណ៍ខ្លួនឯង — រចនាសម្ព័ន្ធដូចគ្នានឹងរបៀបដែល [EQ-5D](../eq-5d/) កំណត់ប្រូហ្វាល់ប្រាំវិមាត្រមុនគណនាសន្ទស្សន៍ណាមួយ និងមូលហេតុដែល [PROM](../លទ្ធផលដែលអ្នកជំងឺរាយការណ៍/) មានជាមួយរង្វាស់គ្លីនិក។ ការពេញចិត្ត/សុខុមាលភាពក៏មិនមែនជាគ្រឿងលម្អទន់ដែរ៖ វាចូលក្នុងសេដ្ឋកិច្ច[ការរក្សាកម្លាំងពលកម្ម](../ការរក្សាកម្លាំងពលកម្ម/) ដែលការចាកចេញត្រូវបានកំណត់តម្លៃជាខែនៃប្រាក់ខែពេញលេញ។

## គណិតវិទ្យា

ក្របខ័ណ្ឌទាំងពីរមិនមែនជារូបមន្តទេ; ពួកវាជាការរចនាការវាស់៖

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

## ឧទាហរណ៍ដែលបានគណនា

ក្រុមវេទិកាបង្ហាញហេតុផលការវិនិយោគ DevEx (បង្កើនល្បឿន CI + កែឯកសារ) សម្រាប់អ្នកអភិវឌ្ឍន៍ 300 នាក់៖

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

## ទំនាក់ទំនងជាមួយវិស្វកម្មកម្មវិធី

ឯកសារនេះ *គឺជា* ផ្នែកកម្មវិធី; ការផ្ទេរទៅរកសេដ្ឋកិច្ចសុខភាព។ "ឆ្នាំវិស្វករដែលកែតម្រូវតាមគុណភាព" — ពេលវេលាដែលមានទម្ងន់ដោយសន្ទស្សន៍បទពិសោធន៍ស្តង់ដារ — គឺជាការសាងសង់ [QALY](../ឆ្នាំជីវិតដែលកែតម្រូវតាមគុណភាព/) អនុវត្តលើសមត្ថភាពវិស្វកម្ម ហើយវាទទួលមរតកច្បាប់របស់ QALY៖ ទម្ងន់ពីឧបករណ៍ដែលបានបញ្ជាក់ត្រឹមត្រូវ (ការស្ទង់មតិស្របគ្នា ការដាក់ពិន្ទុដែលបានបោះពុម្ព) ដែលទាញយក *មុន* ការប្រៀបធៀប មិនដែលកែសម្រួលដើម្បីបញ្ជាក់ឧបករណ៍ដែលចូលចិត្តឡើយ។ មេរៀន [SF-6D ធៀបនឹង EQ-5D](../eq-5d/) ក៏អនុវត្តដែរ៖ ឧបករណ៍ខុសគ្នាផ្តល់លេខខុសគ្នាជាប្រព័ន្ធ ដូច្នេះកុំប្រៀបធៀបសន្ទស្សន៍ DevEx ឆ្លងឧបករណ៍របស់អ្នកលក់ផ្សេងគ្នា។

## ចំណុចងាយធ្លាក់

- **ការដួលរលំជារង្វាស់តែមួយ**៖ ផ្ទាំងគ្រប់គ្រងដែលបង្រួម SPACE ទៅពិន្ទុតែមួយ បង្កើតបញ្ហាដែលក្របខ័ណ្ឌមានដើម្បីការពារឡើងវិញ។
- **រង្វាស់សកម្មភាពជាលទ្ធផល**៖ commit, PR និង story point គឺជាសកម្មភាព — វិមាត្រដែល SPACE ព្រមានយ៉ាងច្បាស់ថាអាចបន្លំបំផុត (ស្រដៀងសុខភាព៖ រាប់នីតិវិធី មិនមែនការជាសះស្បើយ)។
- **ភាពអស់កម្លាំងស្ទង់មតិ និងឥទ្ធិពល Hawthorne**៖ ឧបករណ៍ស្រាលប្រចាំត្រីមាសឈ្នះការសួរចម្លើយប្រចាំសប្តាហ៍។
- **ការប្រៀបធៀបក្រុម**៖ ដូចតារាងចំណាត់ថ្នាក់មន្ទីរពេទ្យដោយគ្មានការកែតម្រូវសមាសភាពករណី — ភាពខុសគ្នាបរិបទ (ដែន បន្ទុកមរតក on-call) គ្របដណ្តប់។

## ប្រភព

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
