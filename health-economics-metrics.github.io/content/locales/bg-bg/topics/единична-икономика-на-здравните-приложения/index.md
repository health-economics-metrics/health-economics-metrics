# Единична икономика на здравните приложения

Търговската аритметика на потребителските здравни продукти: разход за привличане на клиент (CAC), стойност през живота (LTV), среден приход на потребител (ARPU), ценообразуване на член на месец (PMPM) и разграничението на работодателския пазар между **ROI и VOI** (стойност от инвестицията).

## Защо е важно

Здравните приложения са изправени пред структурен натиск: привличането е скъпо (регулирани твърдения, бариери на доверие, разходи за съответствие), докато задържането е най-лошото от всеки софтуерен вертикал (~90% изоставяне в рамките на 30 дни — вж. [задържане и отпадане](../задържане-и-отпадане/)). Стандартният тест за жизнеспособност — **LTV:CAC ≥ 3:1** — затова е брутално труден в потребителското здраве, поради което индустрията мигрира към B2B2C модели: работодатели, застрахователи и здравни системи, плащащи PMPM за популации, където купувачът не е отпадащият индивид.

## Математиката

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

## Решен пример

B2C приложение за сън: £6,99/месец, месечно отпадане 18%, смесен CAC £38.

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

## Връзка със софтуерното инженерство

Инженерните избори определят и двете страни на съотношението: **разходът за обслужване** е архитектура ([единична икономика на облака](../единична-икономика-на-облака/) — маржът на PMPM живее или умира от инфраструктурния разход на член), а **LTV** е инженеринг на задържането (всяка точка на отпадане е аритметичен приход — математиката на QALY в документа за [задържане](../задържане-и-отпадане/) има точен близнак в приходите). За здравните продукти конкретно таблото за единична икономика трябва да носи трети ред до LTV и CAC: **здравна стойност на привлечен потребител** (QALY, претеглени по задържане × праг) — защото платците и пазарите в стил DiGA все повече ценообразуват по него, и защото продукт, чиито търговска и клинична единична икономика се разминават (печеливш, но здравно инертен, или ефективен, но нефинансируем), трябва да знае кой проблем има.

## Често срещани грешки

- **LTV от отпадането на ранни кохорти**: отпадането се стабилизира надолу; но също и пристрастие на оцелелите — ранните последователи задържат по-добре от мащабираните аудитории. Използвайте данни от узрели кохорти.
- **CAC, смесен по канали**: CAC от платени социални мрежи и CAC от насочване от клиницист се различават 10×, с противоположни профили на задържане — сегментирайте или бъдете подведени.
- **PMPM без ограничения на използването**: членове с изключителна ангажираност могат да обърнат маржовете; моделирайте разпределението, а не средното.
- **VOI, представено като ROI** пред финансов директор — провалът на достоверността, който индустрията за корпоративно уелнес спечели за десетилетие.

## Източници

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
