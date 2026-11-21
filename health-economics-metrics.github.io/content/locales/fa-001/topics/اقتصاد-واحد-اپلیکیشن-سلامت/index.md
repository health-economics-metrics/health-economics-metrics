# اقتصاد واحد اپلیکیشن سلامت

حساب تجاری محصولات سلامت مصرفی: هزینه جذب مشتری (CAC)، ارزش طول عمر (LTV)، میانگین درآمد به ازای هر کاربر (ARPU)، قیمت‌گذاری به ازای هر عضو در ماه (PMPM)، و تمایز بازار کارفرمایی بین **ROI و VOI** (ارزش بر سرمایه‌گذاری).

## چرا اهمیت دارد

اپلیکیشن‌های سلامت با فشار ساختاری روبه‌رویند: جذب گران است (ادعاهای تنظیم‌شده، موانع اعتماد، هزینه‌های انطباق) در حالی که ماندگاری بدترین در میان همه عمودهای نرم‌افزاری است (حدود 90% رهاسازی در 30 روز — به [ماندگاری و ریزش](../ماندگاری-و-ریزش/) نگاه کنید). آزمون استاندارد دوام — **LTV:CAC ≥ 3:1** — بنابراین در سلامت مصرفی به‌شدت دشوار است، به همین دلیل صنعت به سمت مدل‌های B2B2C مهاجرت می‌کند: کارفرمایان، بیمه‌گران و نظام‌های سلامت که PMPM برای جمعیت‌ها می‌پردازند، جایی که خریدار فرد ریزش‌کننده نیست.

## ریاضیات

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

## مثال حل‌شده

یک اپلیکیشن خواب B2C: £6.99/ماه، ریزش ماهانه 18%، CAC ترکیبی £38.

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

## ارتباط با مهندسی نرم‌افزار

انتخاب‌های مهندسی هر دو طرف نسبت را تعیین می‌کنند: **هزینه ارائه خدمت** معماری است ([اقتصاد واحد ابری](../اقتصاد-واحد-ابری/) — حاشیه PMPM بر هزینه زیرساخت هر عضو زنده یا مرده است)، و **LTV** مهندسی ماندگاری است (هر نقطه ریزش درآمد حسابی است — ریاضیات QALY سند [ماندگاری](../ماندگاری-و-ریزش/) دوقلوی دقیق درآمدی دارد). برای محصولات سلامت به‌طور خاص، داشبورد اقتصاد واحد باید خط سومی در کنار LTV و CAC داشته باشد: **ارزش سلامت به ازای هر کاربر جذب‌شده** (QALYهای وزن‌دهی‌شده با ماندگاری × آستانه) — چون بازارهای پرداخت‌کننده و سبک DiGA بیش از پیش بر آن قیمت‌گذاری می‌کنند، و چون محصولی که اقتصاد واحد تجاری و بالینی‌اش واگرا می‌شود (سودآور اما بی‌اثر در سلامت، یا مؤثر اما غیرقابل‌تأمین مالی) باید بداند کدام مشکل را دارد.

## تله‌ها و اشتباهات رایج

- **LTV از ریزش کوهورت اولیه**: ریزش به سمت پایین تثبیت می‌شود؛ اما بازماندگی هم هست — پذیرندگان اولیه از مخاطبان مقیاس‌یافته بهتر می‌مانند. از داده‌های کوهورت بالغ استفاده کنید.
- **CAC ترکیبی در کانال‌ها**: CAC شبکه اجتماعی پولی و CAC ارجاع پزشک 10 برابر فرق دارند، با نمایه‌های ماندگاری متضاد — تفکیک کنید وگرنه گمراه می‌شوید.
- **PMPM بدون سقف استفاده**: اعضای پرتعامل پرت می‌توانند حاشیه‌ها را وارونه کنند؛ توزیع را مدل کنید، نه میانگین.
- **VOI به‌عنوان ROI به مدیر مالی ارائه شود** — شکست اعتباری که صنعت سلامت کارکنان یک دهه برای کسب آن زحمت کشید.

## منابع

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
