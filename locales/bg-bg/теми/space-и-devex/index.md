# SPACE и DevEx

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow — удовлетвореност и благосъстояние, представяне, активност, комуникация и сътрудничество, ефективност и поток) и DevEx (обратни връзки, когнитивно натоварване, състояние на поток) са рамки за измерване на продуктивността на разработчиците **многомерно** — отговорът на областта на откритието, че никой единичен показател не оцелява при досег с реалността.

## Защо е важно

И двете рамки кодират същия трудно извоюван урок, който изследванията на здравните резултати са научили десетилетия по-рано: единично число (редове код; кръвно налягане) изкривява многомерна реалност, а оптимизирането му произвежда манипулиране, а не подобрение. SPACE предписва комбиниране на показатели от поне три измерения, смесвайки телеметрия със самоотчет — структурно идентично с начина, по който [EQ-5D](../eq-5d/) профилира пет измерения, преди да се изчисли какъвто и да е индекс, и защо [PROM](../резултати-отчитани-от-пациентите/) съществуват заедно с клиничните мерки. Удовлетвореността/благосъстоянието също не е мека украса: тя захранва икономиката на [задържането на работната сила](../задържане-на-работната-сила/), където текучеството се оценява в месеци натоварена заплата.

## Математиката

Нито една от рамките не е формула; и двете са дизайни на измерване:

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

## Решен пример

Платформен екип обосновава инвестиция в DevEx (ускоряване на CI + преработка на документацията) за 300 разработчици:

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

## Връзка със софтуерното инженерство

Този документ *е* софтуерната страна; прехвърлянето върви към здравната икономика. „Коригираната спрямо качеството инженерна година“ — време, претеглено със стандартизиран индекс на изживяването — е конструкцията на [QALY](../коригирана-спрямо-качеството-година-живот/), приложена към инженерния капацитет, и наследява правилата на QALY: тегла от валидиран инструмент (последователно проучване, публикувано оценяване), извлечени *преди* сравнението, никога настройвани да ласкаят предпочитан инструмент. Урокът за [SF-6D срещу EQ-5D](../eq-5d/) също важи: различните инструменти дават системно различни числа, така че никога не сравнявайте индекси на DevEx между инструментите на различни доставчици.

## Често срещани грешки

- **Свиване до единичен показател**: табла, които свеждат SPACE до една оценка, пресъздават проблема, който рамката съществува да предотврати.
- **Показатели за активност като резултати**: commit-и, PR и story points са активност — измерението, за което SPACE изрично предупреждава, че е най-манипулируемо (здравен аналог: броене на процедури, а не на възстановявания).
- **Умора от проучвания и ефекти на Хотърн**: тримесечни леки инструменти бият седмичните разпити.
- **Сравняване на екипи**: като болнични класации без корекция за структурата на случаите — разликите в контекста (домейн, наследен товар, дежурства) доминират.

## Източници

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
