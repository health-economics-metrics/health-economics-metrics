# Метрики экономики здравоохранения

Полное введение в математику, примеры и логику экономики здравоохранения, написанное для инженеров-программистов, создающих решения для национальных систем здравоохранения по всему миру. Каждый файл посвящён одной метрике или понятию: определение, почему это важно, математика, разобранный пример, связь с разработкой программного обеспечения, типичные ошибки и источники.

Впервые здесь? Начните с [альтернативных издержек](locales/en-gb-oxendict/topics/opportunity-cost/), [года жизни с поправкой на качество](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) и [стоимости задержки](locales/en-gb-oxendict/topics/cost-of-delay/) — трёх идей, на которых строится всё остальное.

## Основы экономического мышления

- [Альтернативные издержки](locales/en-gb-oxendict/topics/opportunity-cost/) — ценность лучшей упущенной альтернативы; почему фиксированные бюджеты превращают любой выбор в вытеснение
- [Дисконтирование и временное предпочтение](locales/en-gb-oxendict/topics/discounting-and-time-preference/) — приведённая стоимость, ставка 3,5% из Green Book/NICE
- [Перспектива анализа](locales/en-gb-oxendict/topics/analysis-perspective/) — плательщик против поставщика против общества: чьи затраты учитываются
- [Временной горизонт](locales/en-gb-oxendict/topics/time-horizon/) — на какой срок считать затраты и эффекты, и игры с горизонтом
- [Предельные против средних затрат](locales/en-gb-oxendict/topics/marginal-vs-average-cost/) — почему освобождение койки не экономит её среднюю стоимость
- [Экономия, высвобождающая наличные, против не высвобождающей](locales/en-gb-oxendict/topics/cash-releasing-vs-non-cash-releasing/) — проверка на честность для любого утверждения об "сэкономленном времени"
- [Анализ чувствительности](locales/en-gb-oxendict/topics/sensitivity-analysis/) — торнадо-диаграммы; какое допущение определяет ваш кейс
- [Вероятностный анализ чувствительности (ВАЧ)](locales/en-gb-oxendict/topics/probabilistic-sensitivity-analysis/) — Монте-Карло, CEAC, вероятность быть правым
- [Ожидаемая ценность полной информации (ОЦПИ)](locales/en-gb-oxendict/topics/expected-value-of-perfect-information/) — оценка пилота до его запуска
- [Доминирование и граница эффективности](locales/en-gb-oxendict/topics/dominance-and-efficiency-frontier/) — исключение вариантов, которые никто не должен выбирать

## Показатели результатов

- [Год жизни с поправкой на качество (QALY)](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) — общая валюта ценности здоровья
- [Год жизни с поправкой на инвалидность (ГЖНИ)](locales/en-gb-oxendict/topics/disability-adjusted-life-year/) — зеркало со стороны бремени болезни; метрика глобального здравоохранения
- [EQ-5D](locales/en-gb-oxendict/topics/eq-5d/) — инструмент, лежащий в основе большинства весов полезности QALY
- [Инкрементальный коэффициент экономической эффективности (ИКЭЭ)](locales/en-gb-oxendict/topics/incremental-cost-effectiveness-ratio/) — дополнительные затраты на дополнительную единицу здоровья
- [Пороги готовности платить](locales/en-gb-oxendict/topics/willingness-to-pay-thresholds/) — порог NICE в £20–30 тыс./QALY и другие линии по миру
- [Чистая денежная выгода (ЧДВ)](locales/en-gb-oxendict/topics/net-monetary-benefit/) — ценность минус затраты, сделано правильно
- [Приобретённые годы жизни (ПГЖ)](locales/en-gb-oxendict/topics/life-years-gained/) — математика выживаемости и вариант справедливости evLYG
- [Ожидаемая продолжительность жизни с поправкой на здоровье (ОПЖЗ)](locales/en-gb-oxendict/topics/health-adjusted-life-expectancy/) — учёт здоровых лет на уровне популяции
- [Дефицит QALY и модификаторы тяжести](locales/en-gb-oxendict/topics/qaly-shortfall-and-severity-modifiers/) — почему QALY более больных групп населения значат больше

## Виды экономического анализа

- [Анализ экономической эффективности (АЭЭ)](locales/en-gb-oxendict/topics/cost-effectiveness-analysis/) — затраты на натуральную единицу результата
- [Анализ затрат и полезности (АЗП)](locales/en-gb-oxendict/topics/cost-utility-analysis/) — затраты на QALY; сравнение непохожих вмешательств
- [Анализ затрат и выгод (АЗВ)](locales/en-gb-oxendict/topics/cost-benefit-analysis/) — всё в деньгах; NPV по Green Book
- [Анализ минимизации затрат (АМЗ)](locales/en-gb-oxendict/topics/cost-minimization-analysis/) — самый дешёвый вариант после доказательства эквивалентности
- [Анализ затрат и последствий (АЗП)](locales/en-gb-oxendict/topics/cost-consequence-analysis/) — разложенная таблица; предпочтение NICE для цифрового здравоохранения
- [Анализ бюджетного воздействия (АБВ)](locales/en-gb-oxendict/topics/budget-impact-analysis/) — доступность по бюджету, в отличие от ценности
- [Возврат инвестиций (ROI)](locales/en-gb-oxendict/topics/return-on-investment/) — общая метрика с заявленными параметрами
- [Социальный возврат инвестиций (СВВ)](locales/en-gb-oxendict/topics/social-return-on-investment/) — монетизация того, что не оценивают рынки

## Операционная экономика системы здравоохранения

- [Сэкономленные койко-дни](locales/en-gb-oxendict/topics/bed-days-saved/) — базовая выгода и ловушки её оценки
- [Длительность пребывания (ДП)](locales/en-gb-oxendict/topics/length-of-stay/) — время цикла больницы
- [Частота повторных госпитализаций](locales/en-gb-oxendict/topics/readmission-rate/) — показатель отказа изменений системы здравоохранения
- [Коэффициент неявки (DNA)](locales/en-gb-oxendict/topics/did-not-attend-rate/) — пропущенные приёмы; самая чистая метрика потерь
- [Избежание обращений в неотложную помощь](locales/en-gb-oxendict/topics/emergency-attendance-avoidance/) — экономика вмешательства выше по потоку
- [Национальный тариф и удельные затраты](locales/en-gb-oxendict/topics/national-tariff-and-unit-costs/) — прайс-лист NHS и инфраструктура расчёта затрат
- [Направление на лечение (RTT)](locales/en-gb-oxendict/topics/referral-to-treatment/) — 18-недельный стандарт как метрика времени ожидания
- [Воздействие на список ожидания](locales/en-gb-oxendict/topics/waiting-list-impact/) — превращение сэкономленных часов в принятых пациентов
- [Время практикующего врача](locales/en-gb-oxendict/topics/practitioner-time/) — оценка ёмкости узкого места, а не зарплаты
- [Удержание персонала](locales/en-gb-oxendict/topics/workforce-retention/) — затраты на текучесть кадров и экономика выгорания
- [Предотвратимые затраты на аутсорсинг](locales/en-gb-oxendict/topics/avoidable-outsourcing-costs/) — возврат работы с премиальной ставкой в штат
- [Оптимизация последующих ресурсов](locales/en-gb-oxendict/topics/downstream-resource-optimization/) — разблокирование роли, от которой все зависят
- [Более раннее вмешательство](locales/en-gb-oxendict/topics/earlier-intervention/) — экономика лечения до прогрессирования
- [Ценностно-генерирующая мощность (операционный разворот)](locales/en-gb-oxendict/topics/value-generating-capacity-operational-turnaround/) — создание мощности без найма
- [Жёсткая экономия, высвобождающая наличные (защита от дефицита)](locales/en-gb-oxendict/topics/hard-cash-releasing-savings-deficit-defence/) — удаление статей бюджета; метрика финансового директора

## Рамочные подходы HTA и экономика профилактики

- [Оценка медицинских технологий (ОМТ)](locales/en-gb-oxendict/topics/health-technology-assessment/) — NICE, ICER (США), CADTH: кто решает, что стоит покупать
- [Рамочная программа стандартов доказательств NICE (РСД)](locales/en-gb-oxendict/topics/nice-evidence-standards-framework/) — требования к доказательствам по уровню риска для цифрового здравоохранения
- [Ускоренный путь DiGA в Германии](locales/en-gb-oxendict/topics/diga-fast-track/) — приложения по рецепту; временное включение с крайним сроком предоставления доказательств
- [Число, которое нужно лечить (ЧБНЛ)](locales/en-gb-oxendict/topics/number-needed-to-treat/) — единицы усилий на пользу, которые не дают приукрасить заявления
- [Экономика профилактики](locales/en-gb-oxendict/topics/prevention-economics/) — почему профилактика экономически эффективна, но редко экономит деньги
- [Экономика скрининга](locales/en-gb-oxendict/topics/screening-economics/) — Уилсон–Юнгнер, обвал PPV при низкой распространённости, усталость от тревог
- [Избежанные последующие затраты](locales/en-gb-oxendict/topics/avoided-downstream-costs/) — компенсации затрат и правила, делающие их достоверными

## Разработка ПО и цифровая доставка

- [Стоимость задержки (СЗ)](locales/en-gb-oxendict/topics/cost-of-delay/) — £/неделю или QALY/неделю недопоставки; главная мостовая метрика
- [Метрики DORA](locales/en-gb-oxendict/topics/dora-metrics/) — производительность доставки, переведённая на язык экономики здравоохранения
- [Метрики потока](locales/en-gb-oxendict/topics/flow-metrics/) — закон Литтла, WIP, эффективность потока; общая математика очередей больниц и конвейеров разработки
- [WSJF и CD3](locales/en-gb-oxendict/topics/wsjf-and-cd3/) — приоритизация по плотности ценности; бэклог как турнирная таблица QALY
- [SPACE и DevEx](locales/en-gb-oxendict/topics/space-and-devex/) — многомерная продуктивность; урок EQ-5D для инженерных метрик
- [Технический долг](locales/en-gb-oxendict/topics/technical-debt/) — основной долг, проценты и экономика хронической болезни для кодовых баз
- [Совокупная стоимость владения (ПСВ)](locales/en-gb-oxendict/topics/total-cost-of-ownership/) — обслуживание — это 50–80%; ошибка наивной цены лекарства, применённая к ПО
- [Юнит-экономика облака (FinOps)](locales/en-gb-oxendict/topics/cloud-unit-economics/) — затраты на единицу выпуска; эталонная стоимость цифровой услуги
- [Разработка против покупки](locales/en-gb-oxendict/topics/build-vs-buy/) — сравнение с поправкой на риск с учётом стоимости задержки
- [Реализация выгод](locales/en-gb-oxendict/topics/benefits-realization/) — аудит того, что прогнозируемые выгоды действительно произошли
- [Метрики сервиса GDS](locales/en-gb-oxendict/topics/gds-service-metrics/) — затраты на транзакцию, удовлетворённость, завершение, охват

## Ускорение с помощью ИИ

- [Продуктивность разработчиков с ИИ](locales/en-gb-oxendict/topics/ai-developer-productivity/) — РКИ Copilot против РКИ METR; эффективность в идеале против эффективности на практике
- [Окупаемость инвестиций в ИИ](locales/en-gb-oxendict/topics/ai-return-on-investment/) — вывод о 95% без отдачи и что сделали иначе те 5%
- [Юнит-экономика вывода](locales/en-gb-oxendict/topics/inference-unit-economics/) — стоимость токена и моделирование неумолимого падения цен
- [Метрики качества ИИ](locales/en-gb-oxendict/topics/ai-quality-metrics/) — частота галлюцинаций как частота вреда с ценой
- [Клиническая оценка ИИ](locales/en-gb-oxendict/topics/clinical-ai-evaluation/) — чувствительность, специфичность, AUROC и почему распространённость определяет экономику
- [Регуляторная оценка ИИ](locales/en-gb-oxendict/topics/ai-regulatory-evaluation/) — SaMD FDA, PCCP и экономика обновлений моделей

## Потребительские приложения и устройства для здоровья

- [Метрики вовлечённости](locales/en-gb-oxendict/topics/engagement-metrics/) — вовлечённость как клиническая доза
- [Удержание и отток](locales/en-gb-oxendict/topics/retention-and-churn/) — закон убыли; кривые удержания как окна лечения
- [Активация и охват](locales/en-gb-oxendict/topics/activation-and-uptake/) — передние ворота воронки ценности
- [Приверженность и устойчивость](locales/en-gb-oxendict/topics/adherence-and-persistence/) — MPR, PDC, эффективная вовлечённость, минимальная эффективная доза
- [Результаты, сообщаемые пациентами (PROM, PREM, ММЗР)](locales/en-gb-oxendict/topics/patient-reported-outcomes/) — PROM, PREM и порог честности MCID
- [Цифровые конечные точки и биомаркеры](locales/en-gb-oxendict/topics/digital-endpoints-and-biomarkers/) — от телеметрии датчиков до доказательств регуляторного уровня
- [Валидация носимых устройств](locales/en-gb-oxendict/topics/wearable-validation/) — MAPE, статистика согласия, время ношения, полнота данных
- [Экономика дистанционного мониторинга пациентов](locales/en-gb-oxendict/topics/remote-patient-monitoring-economics/) — наборы кодов CPT и замена стационарного лечения на домашнее
- [Юнит-экономика медицинских приложений](locales/en-gb-oxendict/topics/health-app-unit-economics/) — CAC, LTV, PMPM и ROI против VOI
- [Охват и справедливость](locales/en-gb-oxendict/topics/reach-and-equity/) — RE-AIM; популяционное воздействие = охват × эффективность

## Актуальность приводимых показателей

Многие приводимые цифры обновляются ежегодно (удельные затраты NHS, цены платёжной схемы, кластеры DORA, число DiGA, цены на LLM). В каждом документе дата приводимых показателей указана прямо в тексте; перепроверяйте их перед использованием в реальном бизнес-кейсе.

## Навыки Claude

В этом репозитории есть два [навыка Claude](https://code.claude.com/docs/en/skills) — поместите любой из них в `.claude/skills/` проекта (или направьте Claude на `skills/` этого репозитория), чтобы задействовать эту книгу прямо внутри агентной сессии программирования:

- [health-economics-metrics-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-skill/SKILL.md) — для общего использования: объяснить понятие, рассчитать метрику по собственным цифрам или собрать бизнес-кейс с несколькими метриками, опираясь на формулы, разобранные примеры и типичные ошибки этой книги, а не на общие знания.
- [health-economics-metrics-maintainer-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-maintainer-skill/SKILL.md) — для сопровождающих этот репозиторий: шаблон по темам, соглашения по индексации README и чек-лист проверки ссылок и синхронизации при добавлении или редактировании тем.
