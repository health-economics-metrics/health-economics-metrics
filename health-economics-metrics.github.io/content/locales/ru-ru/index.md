# Метрики экономики здравоохранения

Полное введение в математику, примеры и логику экономики здравоохранения, написанное для инженеров-программистов, создающих решения для национальных систем здравоохранения по всему миру. Каждый файл посвящён одной метрике или понятию: определение, почему это важно, математика, разобранный пример, связь с разработкой программного обеспечения, типичные ошибки и источники.

Впервые здесь? Начните с [альтернативных издержек](locales/en-gb-oxendict/topics/opportunity-cost/), [года жизни с поправкой на качество](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) и [стоимости задержки](locales/en-gb-oxendict/topics/cost-of-delay/) — трёх идей, на которых строится всё остальное.

## Основы экономического мышления

- [Альтернативные издержки (Opportunity Cost)](locales/en-gb-oxendict/topics/opportunity-cost/) — ценность лучшей упущенной альтернативы; почему фиксированные бюджеты превращают любой выбор в вытеснение
- [Дисконтирование и временные предпочтения (Discounting and Time Preference)](locales/en-gb-oxendict/topics/discounting-and-time-preference/) — приведённая стоимость, ставка 3,5% из Green Book/NICE
- [Перспектива анализа (Analysis Perspective)](locales/en-gb-oxendict/topics/analysis-perspective/) — плательщик против поставщика против общества: чьи затраты учитываются
- [Временной горизонт (Time Horizon)](locales/en-gb-oxendict/topics/time-horizon/) — на какой срок считать затраты и эффекты, и игры с горизонтом
- [Предельные и средние издержки (Marginal vs Average Cost)](locales/en-gb-oxendict/topics/marginal-vs-average-cost/) — почему освобождение койки не экономит её среднюю стоимость
- [Экономия, высвобождающая и не высвобождающая денежные средства (Cash-Releasing vs Non-Cash-Releasing Savings)](locales/en-gb-oxendict/topics/cash-releasing-vs-non-cash-releasing/) — проверка на честность для любого утверждения об "сэкономленном времени"
- [Анализ чувствительности (Sensitivity Analysis)](locales/en-gb-oxendict/topics/sensitivity-analysis/) — торнадо-диаграммы; какое допущение определяет ваш кейс
- [Вероятностный анализ чувствительности (Probabilistic Sensitivity Analysis, PSA)](locales/en-gb-oxendict/topics/probabilistic-sensitivity-analysis/) — Монте-Карло, CEAC, вероятность быть правым
- [Ожидаемая ценность совершенной информации (Expected Value of Perfect Information, EVPI)](locales/en-gb-oxendict/topics/expected-value-of-perfect-information/) — оценка пилота до его запуска
- [Доминирование и граница эффективности (Dominance and the Efficiency Frontier)](locales/en-gb-oxendict/topics/dominance-and-efficiency-frontier/) — исключение вариантов, которые никто не должен выбирать

## Показатели результатов

- [Год жизни с поправкой на качество (Quality-Adjusted Life Year, QALY)](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) — общая валюта ценности здоровья
- [Год жизни с поправкой на инвалидность (Disability-Adjusted Life Year, DALY)](locales/en-gb-oxendict/topics/disability-adjusted-life-year/) — зеркало со стороны бремени болезни; метрика глобального здравоохранения
- [EQ-5D](locales/en-gb-oxendict/topics/eq-5d/) — инструмент, лежащий в основе большинства весов полезности QALY
- [Инкрементальное соотношение затрат и эффективности (Incremental Cost-Effectiveness Ratio, ICER)](locales/en-gb-oxendict/topics/incremental-cost-effectiveness-ratio/) — дополнительные затраты на дополнительную единицу здоровья
- [Пороги готовности платить (Willingness-to-Pay Thresholds)](locales/en-gb-oxendict/topics/willingness-to-pay-thresholds/) — порог NICE в £20–30 тыс./QALY и другие линии по миру
- [Чистая денежная выгода (Net Monetary Benefit, NMB)](locales/en-gb-oxendict/topics/net-monetary-benefit/) — ценность минус затраты, сделано правильно
- [Приобретённые годы жизни (Life-Years Gained, LYG)](locales/en-gb-oxendict/topics/life-years-gained/) — математика выживаемости и вариант справедливости evLYG
- [Ожидаемая продолжительность здоровой жизни (Health-Adjusted Life Expectancy, HALE)](locales/en-gb-oxendict/topics/health-adjusted-life-expectancy/) — учёт здоровых лет на уровне популяции
- [Дефицит QALY и модификаторы тяжести (QALY Shortfall and Severity Modifiers)](locales/en-gb-oxendict/topics/qaly-shortfall-and-severity-modifiers/) — почему QALY более больных групп населения значат больше

## Виды экономического анализа

- [Анализ «затраты-эффективность» (Cost-Effectiveness Analysis, CEA)](locales/en-gb-oxendict/topics/cost-effectiveness-analysis/) — затраты на натуральную единицу результата
- [Анализ «затраты-полезность» (Cost-Utility Analysis, CUA)](locales/en-gb-oxendict/topics/cost-utility-analysis/) — затраты на QALY; сравнение непохожих вмешательств
- [Анализ «затраты-выгоды» (Cost-Benefit Analysis, CBA)](locales/en-gb-oxendict/topics/cost-benefit-analysis/) — всё в деньгах; NPV по Green Book
- [Анализ минимизации затрат (Cost-Minimization Analysis, CMA)](locales/en-gb-oxendict/topics/cost-minimization-analysis/) — самый дешёвый вариант после доказательства эквивалентности
- [Анализ «затраты-последствия» (Cost-Consequence Analysis, CCA)](locales/en-gb-oxendict/topics/cost-consequence-analysis/) — разложенная таблица; предпочтение NICE для цифрового здравоохранения
- [Анализ бюджетного воздействия (Budget Impact Analysis, BIA)](locales/en-gb-oxendict/topics/budget-impact-analysis/) — доступность по бюджету, в отличие от ценности
- [Рентабельность инвестиций (Return on Investment, ROI)](locales/en-gb-oxendict/topics/return-on-investment/) — общая метрика с заявленными параметрами
- [Социальная рентабельность инвестиций (Social Return on Investment, SROI)](locales/en-gb-oxendict/topics/social-return-on-investment/) — монетизация того, что не оценивают рынки

## Операционная экономика системы здравоохранения

- [Сэкономленные койко-дни (Bed Days Saved)](locales/en-gb-oxendict/topics/bed-days-saved/) — базовая выгода и ловушки её оценки
- [Длительность пребывания (Length of Stay, LOS)](locales/en-gb-oxendict/topics/length-of-stay/) — время цикла больницы
- [Частота повторных госпитализаций (Readmission Rate)](locales/en-gb-oxendict/topics/readmission-rate/) — показатель отказа изменений системы здравоохранения
- [Доля неявок (Did-Not-Attend, DNA rate)](locales/en-gb-oxendict/topics/did-not-attend-rate/) — пропущенные приёмы; самая чистая метрика потерь
- [Предотвращение обращений за неотложной помощью (Emergency Attendance Avoidance)](locales/en-gb-oxendict/topics/emergency-attendance-avoidance/) — экономика вмешательства выше по потоку
- [Национальный тариф и удельные затраты (National Tariff and Unit Costs)](locales/en-gb-oxendict/topics/national-tariff-and-unit-costs/) — прайс-лист NHS и инфраструктура расчёта затрат
- [От направления до лечения (Referral to Treatment, RTT)](locales/en-gb-oxendict/topics/referral-to-treatment/) — 18-недельный стандарт как метрика времени ожидания
- [Влияние на лист ожидания (Waiting List Impact)](locales/en-gb-oxendict/topics/waiting-list-impact/) — превращение сэкономленных часов в принятых пациентов
- [Время специалиста (Practitioner Time)](locales/en-gb-oxendict/topics/practitioner-time/) — оценка ёмкости узкого места, а не зарплаты
- [Удержание персонала (Workforce Retention)](locales/en-gb-oxendict/topics/workforce-retention/) — затраты на текучесть кадров и экономика выгорания
- [Издержки на аутсорсинг, которых можно избежать (Avoidable Outsourcing Costs)](locales/en-gb-oxendict/topics/avoidable-outsourcing-costs/) — возврат работы с премиальной ставкой в штат
- [Оптимизация последующих ресурсов (Downstream Resource Optimization)](locales/en-gb-oxendict/topics/downstream-resource-optimization/) — разблокирование роли, от которой все зависят
- [Более раннее вмешательство (Earlier Intervention)](locales/en-gb-oxendict/topics/earlier-intervention/) — экономика лечения до прогрессирования
- [Создающая ценность мощность (операционный разворот) (Value-Generating Capacity, Operational Turnaround)](locales/en-gb-oxendict/topics/value-generating-capacity-operational-turnaround/) — создание мощности без найма
- [Реальная экономия, высвобождающая денежные средства (защита от дефицита) (Hard Cash-Releasing Savings, Deficit Defence)](locales/en-gb-oxendict/topics/hard-cash-releasing-savings-deficit-defence/) — удаление статей бюджета; метрика финансового директора

## Рамочные подходы HTA и экономика профилактики

- [Оценка медицинских технологий (Health Technology Assessment, HTA)](locales/en-gb-oxendict/topics/health-technology-assessment/) — NICE, ICER (США), CADTH: кто решает, что стоит покупать
- [Система стандартов доказательности NICE (NICE Evidence Standards Framework, ESF)](locales/en-gb-oxendict/topics/nice-evidence-standards-framework/) — требования к доказательствам по уровню риска для цифрового здравоохранения
- [Ускоренный путь DiGA в Германии (Germany's DiGA Fast-Track)](locales/en-gb-oxendict/topics/diga-fast-track/) — приложения по рецепту; временное включение с крайним сроком предоставления доказательств
- [Число, которое необходимо пролечить (Number Needed to Treat, NNT)](locales/en-gb-oxendict/topics/number-needed-to-treat/) — единицы усилий на пользу, которые не дают приукрасить заявления
- [Экономика профилактики (Prevention Economics)](locales/en-gb-oxendict/topics/prevention-economics/) — почему профилактика экономически эффективна, но редко экономит деньги
- [Экономика скрининга (Screening Economics)](locales/en-gb-oxendict/topics/screening-economics/) — Уилсон–Юнгнер, обвал PPV при низкой распространённости, усталость от тревог
- [Предотвращённые последующие затраты (Avoided Downstream Costs)](locales/en-gb-oxendict/topics/avoided-downstream-costs/) — компенсации затрат и правила, делающие их достоверными

## Разработка ПО и цифровая доставка

- [Стоимость задержки (Cost of Delay, CoD)](locales/en-gb-oxendict/topics/cost-of-delay/) — £/неделю или QALY/неделю недопоставки; главная мостовая метрика
- [Метрики DORA (DORA Metrics)](locales/en-gb-oxendict/topics/dora-metrics/) — производительность доставки, переведённая на язык экономики здравоохранения
- [Метрики потока (Flow Metrics)](locales/en-gb-oxendict/topics/flow-metrics/) — закон Литтла, WIP, эффективность потока; общая математика очередей больниц и конвейеров разработки
- [WSJF и CD3 (WSJF and CD3)](locales/en-gb-oxendict/topics/wsjf-and-cd3/) — приоритизация по плотности ценности; бэклог как турнирная таблица QALY
- [SPACE и DevEx (SPACE and DevEx)](locales/en-gb-oxendict/topics/space-and-devex/) — многомерная продуктивность; урок EQ-5D для инженерных метрик
- [Технический долг (Technical Debt)](locales/en-gb-oxendict/topics/technical-debt/) — основной долг, проценты и экономика хронической болезни для кодовых баз
- [Совокупная стоимость владения (Total Cost of Ownership, TCO)](locales/en-gb-oxendict/topics/total-cost-of-ownership/) — обслуживание — это 50–80%; ошибка наивной цены лекарства, применённая к ПО
- [Юнит-экономика облачных сервисов (Cloud Unit Economics, FinOps)](locales/en-gb-oxendict/topics/cloud-unit-economics/) — затраты на единицу выпуска; эталонная стоимость цифровой услуги
- [Разработка своими силами или покупка готового решения (Build vs Buy)](locales/en-gb-oxendict/topics/build-vs-buy/) — сравнение с поправкой на риск с учётом стоимости задержки
- [Реализация выгод (Benefits Realization)](locales/en-gb-oxendict/topics/benefits-realization/) — аудит того, что прогнозируемые выгоды действительно произошли
- [Метрики сервисов GDS (GDS Service Metrics)](locales/en-gb-oxendict/topics/gds-service-metrics/) — затраты на транзакцию, удовлетворённость, завершение, охват

## Ускорение с помощью ИИ

- [Продуктивность разработчиков с ИИ (AI Developer Productivity)](locales/en-gb-oxendict/topics/ai-developer-productivity/) — РКИ Copilot против РКИ METR; эффективность в идеале против эффективности на практике
- [Рентабельность инвестиций в ИИ (AI Return on Investment)](locales/en-gb-oxendict/topics/ai-return-on-investment/) — вывод о 95% без отдачи и что сделали иначе те 5%
- [Юнит-экономика инференса (Inference Unit Economics)](locales/en-gb-oxendict/topics/inference-unit-economics/) — стоимость токена и моделирование неумолимого падения цен
- [Метрики качества ИИ (AI Quality Metrics)](locales/en-gb-oxendict/topics/ai-quality-metrics/) — частота галлюцинаций как частота вреда с ценой
- [Клиническая оценка ИИ (Clinical AI Evaluation)](locales/en-gb-oxendict/topics/clinical-ai-evaluation/) — чувствительность, специфичность, AUROC и почему распространённость определяет экономику
- [Регуляторная оценка ИИ (AI Regulatory Evaluation)](locales/en-gb-oxendict/topics/ai-regulatory-evaluation/) — SaMD FDA, PCCP и экономика обновлений моделей

## Потребительские приложения и устройства для здоровья

- [Метрики вовлечённости (Engagement Metrics)](locales/en-gb-oxendict/topics/engagement-metrics/) — вовлечённость как клиническая доза
- [Удержание и отток (Retention and Churn)](locales/en-gb-oxendict/topics/retention-and-churn/) — закон убыли; кривые удержания как окна лечения
- [Активация и охват внедрением (Activation and Uptake)](locales/en-gb-oxendict/topics/activation-and-uptake/) — передние ворота воронки ценности
- [Приверженность и устойчивость приёма (Adherence and Persistence)](locales/en-gb-oxendict/topics/adherence-and-persistence/) — MPR, PDC, эффективная вовлечённость, минимальная эффективная доза
- [Исходы, сообщаемые пациентами (Patient-Reported Outcomes, PROMs, PREMs, MCID)](locales/en-gb-oxendict/topics/patient-reported-outcomes/) — PROM, PREM и порог честности MCID
- [Цифровые конечные точки и биомаркеры (Digital Endpoints and Biomarkers)](locales/en-gb-oxendict/topics/digital-endpoints-and-biomarkers/) — от телеметрии датчиков до доказательств регуляторного уровня
- [Валидация носимых устройств (Wearable Validation)](locales/en-gb-oxendict/topics/wearable-validation/) — MAPE, статистика согласия, время ношения, полнота данных
- [Экономика удалённого мониторинга пациентов (Remote Patient Monitoring Economics)](locales/en-gb-oxendict/topics/remote-patient-monitoring-economics/) — наборы кодов CPT и замена стационарного лечения на домашнее
- [Юнит-экономика медицинского приложения (Health App Unit Economics)](locales/en-gb-oxendict/topics/health-app-unit-economics/) — CAC, LTV, PMPM и ROI против VOI
- [Охват и равенство (Reach and Equity)](locales/en-gb-oxendict/topics/reach-and-equity/) — RE-AIM; популяционное воздействие = охват × эффективность

## Актуальность приводимых показателей

Многие приводимые цифры обновляются ежегодно (удельные затраты NHS, цены платёжной схемы, кластеры DORA, число DiGA, цены на LLM). В каждом документе дата приводимых показателей указана прямо в тексте; перепроверяйте их перед использованием в реальном бизнес-кейсе.

## Навыки Claude

В этом репозитории есть два [навыка Claude](https://code.claude.com/docs/en/skills) — поместите любой из них в `.claude/skills/` проекта (или направьте Claude на `skills/` этого репозитория), чтобы задействовать эту книгу прямо внутри агентной сессии программирования:

- [health-economics-metrics-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-skill/SKILL.md) — для общего использования: объяснить понятие, рассчитать метрику по собственным цифрам или собрать бизнес-кейс с несколькими метриками, опираясь на формулы, разобранные примеры и типичные ошибки этой книги, а не на общие знания.
- [health-economics-metrics-maintainer-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-maintainer-skill/SKILL.md) — для сопровождающих этот репозиторий: шаблон по темам, соглашения по индексации README и чек-лист проверки ссылок и синхронизации при добавлении или редактировании тем.
