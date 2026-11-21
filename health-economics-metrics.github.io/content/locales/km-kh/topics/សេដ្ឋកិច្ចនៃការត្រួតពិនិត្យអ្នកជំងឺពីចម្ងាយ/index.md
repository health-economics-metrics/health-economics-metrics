# សេដ្ឋកិច្ចនៃការត្រួតពិនិត្យអ្នកជំងឺពីចម្ងាយ

សេដ្ឋកិច្ចនៃការសងប្រាក់វិញ និងការទូទាត់ថ្លៃដើមនៃការត្រួតពិនិត្យអ្នកជំងឺនៅផ្ទះ៖ នៅសហរដ្ឋអាមេរិក ជង់ប្រាក់ចំណូលកូដ CPT ដែលបានកំណត់; ក្នុងសេវាសុខភាពជាតិ សេដ្ឋកិច្ចការជៀសវាងការចូលសម្រាក និងវួដនិម្មិត រហូតដល់ការជំនួសពេញលេញ **មន្ទីរពេទ្យនៅផ្ទះ**។

## ហេតុអ្វីបានជាសំខាន់

RPM គឺជាកន្លែងដែលទិន្នន័យឧបករណ៍ក្លាយជាការថែទាំសុខភាពដែលអាចចេញវិក្កយបត្របាន។ រចនាសម្ព័ន្ធ Medicare របស់សហរដ្ឋអាមេរិក (មធ្យមជាតិ 2025) ច្បាស់លាស់ខុសពីធម្មតា៖

```
99453  setup & patient education     ~$19.73  one-time (after 16 days of data)
99454  device supply + transmission  ~$43.03  per 30 days — REQUIRES ≥16 days
                                              of readings in the 30
99457  first 20 min/month management ~$47.87  requires ≥20 logged minutes
99458  each additional 20 min        ~$38.49
```

ខែអ្នកជំងឺដែលអនុលោមតាមជង់ទៅប្រហែល **$90–130 PMPM**។ នៅផ្នែកទូទាត់ថ្លៃដើម កម្មវិធីមន្ទីរពេទ្យនៅផ្ទះ (ការលើកលែង CMS Acute Hospital Care at Home៖ មន្ទីរពេទ្យ 300+) បង្ហាញការសន្សំ ~$1,800–$3,000 ក្នុងមួយការជួប ធៀបនឹងការថែទាំអ្នកជំងឺក្នុង ជាមួយការចូលសម្រាកឡើងវិញ និងការឆ្លងមេរោគតិចជាង — ការបង្ហាញច្បាស់បំផុតថាការត្រួតពិនិត្យបូកការថែទាំនិម្មិតអាចជំនួសធនធានថ្លៃបំផុតក្នុងប្រព័ន្ធ គឺគ្រែដែលមានបុគ្គលិក។

## គណិតវិទ្យា

```
RPM revenue (US)  = enrolled × billing-compliant fraction × code stack PMPM
  — the 16-day rule makes wear-time compliance (wearable-validation.md)
    a revenue variable, and the 20-minute rule makes clinical-time
    logging an engineering requirement

NHS-style value   = admissions avoided × marginal admission cost
                  + bed days substituted × (inpatient − virtual-ward day cost)
                  − service cost (devices, platform, monitoring staff)
  (see emergency-attendance-avoidance.md and bed-days-saved.md for the
   attribution and marginal-cost rules)
```

## ឧទាហរណ៍ដែលបានគណនា

គ្លីនិកអាមេរិកមួយចុះឈ្មោះអ្នកជំងឺលើសសម្ពាធឈាម 400 នាក់; 70% បំពេញកម្រិត 16 ថ្ងៃក្នុងខែធម្មតា; នាទីគ្រប់គ្រងដែលបានកត់ត្រាសម្រាប់ 60%៖

```
Monthly revenue ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Annual ≈ $282,000; service cost (devices $12/mo, staff 0.8 FTE) ≈ $180,000
Margin ≈ $100k/year — and note the levers are engineering levers:
raising the 16-day compliance from 70% → 85% adds ~$31k/year
(device comfort, sync reliability, reminder design).
```

កញ្ចក់ឆ្លុះ NHS៖ វួដនិម្មិត 50 គ្រែនៅអត្រាកាន់កាប់ 80% ជំនួសថ្ងៃអ្នកជំងឺក្នុងដែលសន្សំសុទ្ធ £150/ថ្ងៃ ≈ 50 × 0.8 × 365 × 150 ≈ **£2.19M/ឆ្នាំ** សរុប — ធៀបនឹងវេទិកា ឧបករណ៍ និងក្រុមគិលានុបដ្ឋាយិកាសហគមន៍ដែលបម្រើវា។

## ទំនាក់ទំនងជាមួយវិស្វកម្មកម្មវិធី

វេទិកា RPM គឺជាផលិតផលកម្រដែល **ពេលដំណើរការ និងភាពអាចទុកចិត្តបាននៃការធ្វើសមកាលកម្មបម្លែងដោយផ្ទាល់ទៅជាប្រាក់ចំណូល** (មួយសប្តាហ៍នៃការធ្វើសមកាលកម្មបរាជ័យបំបែកច្រក 16 ថ្ងៃសម្រាប់ក្រុមមួយ) ហើយដែលការតាមដានពេលវេលាកម្រិតសវនកម្ម (ច្បាប់ 20 នាទី) គឺជាលក្ខណៈថ្នាក់ទីមួយ មិនមែនគំនិតក្រោយទេ។ សាងសង់សម្រាប់៖ ផ្ទាំងគ្រប់គ្រងអនុលោមភាពក្នុងមួយអ្នកជំងឺ ដែលបង្ហាញខែចេញវិក្កយបត្រហានិភ័យ ខណៈនៅអាចស្តារបាន; ផ្លូវទិន្នន័យដែលមានត្រាពេលវេលា និងបង្ហាញភាពរំលោភ (សវនកម្មអ្នកបង់ប្រាក់ជារឿងធម្មតា); និងការកែសម្រួលសេដ្ឋកិច្ចការជូនដំណឹង — រាល់ការជូនដំណឹងប្រើនាទីក្រុមត្រួតពិនិត្យ ដែលជាទាំងឯកតាដែលអាចចេញវិក្កយបត្របាន និងធនធានខ្វះខាត ([សេដ្ឋកិច្ចនៃការពិនិត្យ](../សេដ្ឋកិច្ចនៃការពិនិត្យ/) គ្រប់គ្រងជម្រើសកម្រិតកំណត់)។

## ចំណុចងាយធ្លាក់

- **ការចុះឈ្មោះ ≠ ប្រាក់ចំណូល**៖ ចំណែកអនុលោមតាមគឺជាលេខ; ធ្វើគំរូវា កុំសន្មត់។
- **កូដអាមេរិកផ្ទេរទៅករណី NHS** — សេវាសុខភាពជាតិទិញការជៀសវាងការចូលសម្រាក មិនមែនជង់ CPT; ដំណើរការគំរូទីពីរ។
- **ការអះអាងទូទាត់ថ្លៃដើមតាមថ្លៃដើមមធ្យម** សម្រាប់ការចូលសម្រាកដែលថ្លៃដើមថេរនៅតែមាន (សូមមើល[ថ្លៃដើមបន្ថែម ធៀបនឹងថ្លៃដើមមធ្យម](../ថ្លៃដើមបន្ថែម-ធៀបនឹង-ថ្លៃដើមមធ្យម/))។
- **ការឆ្អែតក្រុមត្រួតពិនិត្យ**៖ បរិមាណការជូនដំណឹងកើនតាមការចុះឈ្មោះ; បន្ទាត់បុគ្គលិកគឺជាឧបសគ្គចង្អៀតដែលគំរូភាគច្រើនបោះបង់។

## ប្រភព

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
