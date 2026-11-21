# SPACE و DevEx

SPACE (رضایت و بهزیستی، عملکرد، فعالیت، ارتباط و همکاری، کارایی و جریان) و DevEx (حلقه‌های بازخورد، بار شناختی، حالت جریان) چارچوب‌هایی برای سنجش بهره‌وری توسعه‌دهنده به‌صورت **چندبُعدی** هستند — پاسخ این حوزه به کشف اینکه هیچ معیار واحدی در برخورد با واقعیت دوام نمی‌آورد.

## چرا اهمیت دارد

هر دو چارچوب همان درس سخت‌به‌دست‌آمده‌ای را رمزگذاری می‌کنند که پژوهش پیامد سلامت دهه‌ها زودتر آموخت: یک عدد واحد (خطوط کد؛ فشار خون) واقعیت چندبُعدی را بد نمایش می‌دهد، و بهینه‌سازی آن دستکاری می‌آورد نه بهبود. SPACE ترکیب معیارها از حداقل سه بُعد، با آمیختن تله‌متری با خوداظهاری را تجویز می‌کند — ساختاراً مشابه اینکه [EQ-5D](../eq-5d/) پیش از محاسبه هر شاخصی پنج بُعد را نمایه می‌کند، و چرا [PROMها](../پیامدهای-گزارش-شده-توسط-بیمار/) در کنار سنجه‌های بالینی وجود دارند. رضایت/بهزیستی تزئین نرم هم نیست: به اقتصاد [ماندگاری نیروی کار](../ماندگاری-نیروی-کار/) تغذیه می‌شود، جایی که ریزش با ماه‌های حقوق بارگذاری‌شده قیمت‌گذاری می‌شود.

## ریاضیات

هیچ‌یک از چارچوب‌ها فرمول نیست؛ هر دو طرح‌های سنجش‌اند:

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

## مثال حل‌شده

یک تیم پلتفرم سرمایه‌گذاری DevEx (تسریع CI + بازنگری مستندات) را برای 300 توسعه‌دهنده توجیه می‌کند:

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

## ارتباط با مهندسی نرم‌افزار

این سند *خود* سمت نرم‌افزار است؛ انتقال به سمت اقتصاد سلامت است. «سال مهندس تعدیل‌شده بر کیفیت» — زمان وزن‌دهی‌شده با شاخص تجربه استاندارد — ساخت [QALY](../سال-زندگی-تعدیل-شده-بر-اساس-کیفیت/) اعمال‌شده بر ظرفیت مهندسی است، و قواعد QALY را به ارث می‌برد: وزن‌ها از ابزار معتبر (نظرسنجی سازگار، امتیازدهی منتشرشده)، *پیش از* مقایسه استخراج شوند، هرگز برای چاپلوسی ابزار مورد علاقه تنظیم نشوند. درس [SF-6D در برابر EQ-5D](../eq-5d/) هم اعمال می‌شود: ابزارهای مختلف به‌طور سیستماتیک اعداد متفاوت می‌دهند، پس هرگز شاخص‌های DevEx را بین ابزارهای فروشندگان مختلف مقایسه نکنید.

## تله‌ها و اشتباهات رایج

- **فروپاشی تک‌معیار**: داشبوردهایی که SPACE را به یک امتیاز کاهش می‌دهند مسئله‌ای را که چارچوب برای پیشگیری از آن وجود دارد بازتولید می‌کنند.
- **معیارهای فعالیت به‌عنوان پیامد**: commitها، PRها و امتیازهای داستان فعالیت‌اند — بُعدی که SPACE صراحتاً هشدار می‌دهد دستکاری‌پذیرترین است (همتای سلامت: شمردن اقدامات، نه بهبودها).
- **خستگی نظرسنجی و اثرات هاثورن**: ابزارهای سبک فصلی از بازجویی هفتگی بهترند.
- **مقایسه تیم‌ها**: مانند جدول‌های رده‌بندی بیمارستان بدون تعدیل ترکیب موارد — تفاوت‌های زمینه (دامنه، بار میراثی، آنکال) غالب‌اند.

## منابع

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
