# بازگشت سرمایه هوش مصنوعی

ROI هوش مصنوعی بازگشت قابل‌اندازه‌گیری سود و زیان (P&L) منتسب به ابتکارهای هوش مصنوعی است. محک هشداردهنده: پژوهش «شکاف GenAI» MIT در 2025 دریافت که با وجود 30 تا 40 میلیارد دلار سرمایه‌گذاری سازمانی در GenAI، **حدود 95% پایلوت‌ها بازگشت P&L قابل‌اندازه‌گیری نشان ندادند** — و 5% موفق عادت‌های مشترک قابل‌شناسایی داشتند.

## چرا اهمیت دارد

نظام‌های سلامت برای الگوی پایلوت هوش مصنوعی نامی دارند: **pilotitis** — گورستان NHS از اپلیکیشن‌های نویدبخش که تا ابد پایلوت می‌شوند و هرگز مقیاس نمی‌گیرند. یافته‌های MIT به‌روشنی بر آنچه ارزیابی فناوری سلامت از قبل می‌داند منطبق است: ادعاهای ارزش به نقاط پایانی از پیش‌مشخص نیاز دارند، انتساب به گروه مقایسه نیاز دارد، و «همه حس می‌کنند کمک می‌کند» ردیف منفعت نیست. اقلیت موفق در داده‌های MIT در خودکارسازی پشت‌صحنه با خط پایه هزینه قابل‌ردیابی متمرکز بود، و **ابزارهای خریداری‌شده حدود 67% مواقع موفق شدند در برابر ساخت داخلی با تقریباً یک‌سوم آن** — پیش‌فرض‌هایی که در هر پرونده سرمایه‌گذاری هوش مصنوعی جا دارند (به [ساخت در برابر خرید](../ساخت-در-برابر-خرید/) نگاه کنید).

## ریاضیات

```
AI ROI = (attributable benefit − total AI cost) / total AI cost

Total AI cost = licences/inference (see inference-unit-economics.md)
              + integration + data readiness + evaluation
              + workflow redesign + governance/assurance
              (the licence is typically the minority of the denominator)

Attributable benefit: measured against a baseline or control, classed
cash / capacity / quality per cash-releasing-vs-non-cash-releasing.md
```

## مثال حل‌شده

یک گروه بیمارستانی هوش مصنوعی را برای دو مورد استفاده مستقر می‌کند:

```
Use case A — clinical-letter drafting (back office, trackable):
  baseline: outsourced transcription £380k/yr
  after:    transcription contract cancelled; clinician review time +£60k
  AI cost:  £120k/yr all-in
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — cash-releasing, auditable ✓

Use case B — "AI copilot for clinicians" (broad, untracked):
  benefit claim: "saves time across 4,000 staff" — no baseline captured
  measured P&L effect: none demonstrable
  → the 95% bucket, regardless of whether it actually helps
```

تفاوت در کیفیت هوش مصنوعی نیست — در این است که منفعت یک **خط پایه، یک مالک و یک ردیف بودجه** داشته است ([تحقق منافع](../تحقق-منافع/)).

## ارتباط با مهندسی نرم‌افزار

دستورالعمل سبک HTA برای سرمایه‌گذاری هوش مصنوعی: **شواهد را مانند [لایه‌های NICE ESF](../چارچوب-استانداردهای-شواهد-nice/) مرحله‌بندی کنید** — شواهد در سطح نمایش برای ابزارهای کم‌خطر، پایلوت‌های کنترل‌شده پیش از هزینه در سطح سازمان، با دروازه‌های استقرار پیش‌ثبت‌شده (الگوی فهرست‌شدن موقت با مهلت در [DiGA](../مسیر-سریع-diga-آلمان/))؛ **اجتناب از هزینه را همان‌گونه بشمارید که اقتصاد سلامت اجتناب از تقاضا را می‌شمارد** — فقط وقتی واقعی است که یک ردیف بودجه مشخص جابه‌جا شود؛ و **خود پایلوت را با [EVPI](../ارزش-مورد-انتظار-اطلاعات-کامل/) قیمت‌گذاری کنید** — پایلوتی که نتواند تصمیم استقرار را تغییر دهد ارزشش £0 است. برای بخش ابزارهای توسعه‌دهنده به‌طور مشخص، به [بهره‌وری توسعه‌دهنده با هوش مصنوعی](../بهره-وری-توسعه-دهنده-با-هوش-مصنوعی/) نگاه کنید.

## تله‌ها و اشتباهات رایج

- **پراکندگی منفعت**: ارزشی که بین هزاران کاربر نازک پخش شود ذاتاً قابل‌اندازه‌گیری نیست؛ موارد استفاده با خط پایه متمرکز و قابل‌ردیابی انتخاب کنید.
- **هزینه‌یابی فقط مجوز**: یکپارچه‌سازی، ارزیابی و بازطراحی جریان کار معمولاً بر مخرج واقعی غالب است.
- **سرقت انتساب**: هوش مصنوعی که همراه با بازطراحی فرایند مستقر می‌شود کل تفاوت را به نام خود می‌زند.
- **تشدید پایلوت غرق‌شده**: تمدید پایلوت‌های ناموفق چون توقف به معنای پذیرش شکست است — تاریخ غروب باید از پیش توافق شود.

## منابع

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
