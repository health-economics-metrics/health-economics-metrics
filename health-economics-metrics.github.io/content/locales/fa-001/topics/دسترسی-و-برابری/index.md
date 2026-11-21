# دسترسی و برابری

RE-AIM — دسترسی (Reach)، اثربخشی (Effectiveness)، پذیرش (Adoption)، اجرا (Implementation)، نگهداشت (Maintenance) — چارچوب استاندارد برای داوری اثر *جمعیتی* یک مداخله است. حساب مرکزی آن: **اثر سلامت عمومی ≈ دسترسی × اثربخشی**. ابزارهای دیجیتال بُعد برابری را می‌افزایند: شکاف دیجیتال یعنی دسترسی به‌طور سیستماتیک ناهمگن است، و تحویل دیجیتال-اول می‌تواند شکاف‌های سلامتی را که قصد بستنشان را دارد گسترش دهد.

## چرا اهمیت دارد

مرورهای سیستماتیک که RE-AIM را بر mHealth اعمال کرده‌اند امضایی ثابت می‌یابند: دسترسی و پذیرش قوی، **اثربخشی و نگهداشت ضعیف** — اپلیکیشن‌ها به‌آسانی پخش می‌شوند و سریع محو می‌شوند. برای یک خدمت سلامت ملی، این یعنی محصولی چشمگیر به ازای هر کاربر می‌تواند سرمایه‌گذاری جمعیتی ضعیفی باشد، و برعکس: ابزاری با اثربخشی متوسط که به میلیون‌ها نفر می‌رسد می‌تواند از ابزار درخشانی که به هزاران نفر می‌رسد بیشتر تولید کند (به حساب [HALE](../امید-زندگی-تعدیل-شده-بر-اساس-سلامت/) نگاه کنید). برابری قید جانبی نیست بلکه محرک ارزش است: محرومیت دیجیتال با سن، محرومیت، ناتوانی و زبان همراه است — دقیقاً جمعیت‌هایی که بیشترین بار قابل‌درمان را حمل می‌کنند — پس کاربر محروم‌شده نهایی اغلب پتانسیل منفعت *بالاتر از میانگین* دارد. برای سنجه آماری رسمی نابرابری سلامت مرتبط با وضعیت اقتصادی-اجتماعی، به [شاخص تمرکز](../شاخص-تمرکز/) نگاه کنید.

## ریاضیات

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

## مثال حل‌شده

یک برنامه دیجیتال پیشگیری از دیابت، به دو شکل گزارش‌شده:

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

## ارتباط با مهندسی نرم‌افزار

دسترسی تا حد زیادی یک مصنوع مهندسی است: حداقل‌های دستگاه و سیستم‌عامل، فرض‌های پهنای باند، پشتیبانی زبان، انطباق دسترس‌پذیری (WCAG)، موانع راستی‌آزمایی هویت و توزیع فقط از فروشگاه اپلیکیشن هر کدام جمعیت‌هایی را از مخرج حذف می‌کنند — معمولاً نامرئی، چون کاربران محروم‌شده هرگز در تحلیل‌ها ظاهر نمی‌شوند. رویه‌های مهندسی که برابری را جابه‌جا می‌کنند: *مخرج* را اندازه بگیرید (جمعیت واجد شرایط را ابزارگذاری کنید، نه فقط کاربران)؛ عملکرد را برای دستگاه‌های قدیمی و اتصال ضعیف بودجه‌بندی کنید؛ مسیرهای دیجیتال کمکی (تلفن، SMS، کیوسک) را جریان‌های درجه‌یک عرضه کنید نه کانال‌های شرم‌آور؛ و هر معیار داشبورد را بر اساس ابعاد برابری طبقه‌بندی کنید — میانگین طبقه‌بندی‌نشده جایی است که نابرابری پنهان می‌شود ([استقبال GDS](../معیارهای-سرویس-gds/) همان هشدار را دارد).

## تله‌ها و اشتباهات رایج

- **اثربخشی گزارش‌شده بر تکمیل‌کنندگان، اثر ادعاشده بر جمعیت‌ها** — جمله‌های دسترسی بی‌سروصدا حذف شده‌اند.
- **برابری به‌عنوان ممیزی بعدی** نه ورودی طراحی؛ افزودن دسترسی پس از واقعه بسیار گران‌تر از طراحی برای آن است.
- **فراموشی نگهداشت**: ضعیف‌ترین بُعد RE-AIM در mHealth — ادعاهای اثر فراتر از افق زمانی شواهد.
- **صرفه‌جویی کانال فقط دیجیتال** که هزینه‌ها را بر کاربران محروم‌شده و کارکنان خط مقدم منتقل می‌کند (به [معیارهای سرویس GDS](../معیارهای-سرویس-gds/) نگاه کنید).

## منابع

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
