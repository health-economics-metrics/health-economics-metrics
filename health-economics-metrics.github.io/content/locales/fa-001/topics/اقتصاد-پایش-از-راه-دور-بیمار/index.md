# اقتصاد پایش از راه دور بیمار

اقتصاد بازپرداخت و جبران هزینه پایش بیماران در خانه: در آمریکا، پشته درآمدی تعریف‌شده کدهای CPT؛ در خدمات سلامت ملی، اقتصاد اجتناب از بستری و بخش مجازی تا جایگزینی کامل **بیمارستان در خانه**.

## چرا اهمیت دارد

RPM جایی است که داده دستگاه به مراقبت سلامت قابل‌صورت‌حساب تبدیل می‌شود. ساختار Medicare آمریکا (میانگین‌های ملی 2025) به‌طور غیرمعمولی صریح است:

```
99453  setup & patient education     ~$19.73  one-time (after 16 days of data)
99454  device supply + transmission  ~$43.03  per 30 days — REQUIRES ≥16 days
                                              of readings in the 30
99457  first 20 min/month management ~$47.87  requires ≥20 logged minutes
99458  each additional 20 min        ~$38.49
```

یک ماه-بیمار منطبق تقریباً به **$90 تا $130 PMPM** پشته می‌شود. در سمت جبران هزینه، برنامه‌های بیمارستان در خانه (معافیت مراقبت حاد بیمارستان در خانه CMS: 300+ بیمارستان) حدود $1,800 تا $3,000 صرفه‌جویی به ازای هر مواجهه نسبت به مراقبت بستری با بستری مجدد و عفونت کمتر نشان می‌دهند — روشن‌ترین نمایش اینکه پایش به‌علاوه مراقبت مجازی می‌تواند جایگزین گران‌ترین منبع نظام شود، یعنی تخت کادربندی‌شده.

## ریاضیات

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

## مثال حل‌شده

یک مطب آمریکایی 400 بیمار فشار خون را ثبت‌نام می‌کند؛ 70% در یک ماه معمول به آستانه 16 روز می‌رسند؛ دقایق مدیریت برای 60% ثبت می‌شود:

```
Monthly revenue ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Annual ≈ $282,000; service cost (devices $12/mo, staff 0.8 FTE) ≈ $180,000
Margin ≈ $100k/year — and note the levers are engineering levers:
raising the 16-day compliance from 70% → 85% adds ~$31k/year
(device comfort, sync reliability, reminder design).
```

آینه NHS: یک بخش مجازی 50 تخته با 80% اشغال که روزهای بستری را با £150 صرفه‌جویی خالص در روز جایگزین می‌کند ≈ 50 × 0.8 × 365 × 150 ≈ **£2.19M/سال** ناخالص — در برابر پلتفرم، دستگاه‌ها و تیم پرستاری اجتماعی که آن را کادربندی می‌کند.

## ارتباط با مهندسی نرم‌افزار

پلتفرم‌های RPM محصول نادری هستند که در آنها **آپتایم و قابلیت اطمینان همگام‌سازی مستقیماً به درآمد تبدیل می‌شود** (یک هفته همگام‌سازی ناموفق دروازه 16 روز را برای یک کوهورت می‌شکند) و ردیابی زمان در سطح ممیزی (قاعده 20 دقیقه) قابلیت درجه‌یک است نه فکر بعدی. برای این بسازید: داشبوردهای انطباق هر بیمار که ماه‌های صورت‌حساب در خطر را وقتی هنوز قابل‌بازیابی‌اند نشان می‌دهند؛ مسیرهای داده مهر زمانی‌شده و مقاوم در برابر دستکاری (ممیزی‌های پرداخت‌کننده روتین‌اند)؛ و تنظیم اقتصاد هشدار — هر هشدار دقایق تیم پایش را مصرف می‌کند، که هم واحد قابل‌صورت‌حساب و هم منبع کمیاب است ([اقتصاد غربالگری](../اقتصاد-غربالگری/) انتخاب آستانه را تنظیم می‌کند).

## تله‌ها و اشتباهات رایج

- **ثبت‌نام ≠ درآمد**: کسر منطبق عدد است؛ آن را مدل کنید، فرض نکنید.
- **انتقال کدهای آمریکا به پرونده‌های NHS** — خدمات سلامت ملی اجتناب از بستری می‌خرند، نه پشته‌های CPT؛ مدل دوم را اجرا کنید.
- **ادعاهای جبران با هزینه متوسط** برای بستری‌هایی که هزینه‌های ثابتشان باقی می‌ماند (به [هزینه نهایی در برابر هزینه متوسط](../هزینه-نهایی-در-برابر-هزینه-متوسط/) نگاه کنید).
- **اشباع تیم پایش**: حجم هشدار با ثبت‌نام مقیاس می‌گیرد؛ ردیف کادربندی محدودیت الزام‌آوری است که بیشتر مدل‌ها حذف می‌کنند.

## منابع

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
