# اقتصاد واحد ابری (FinOps)

اقتصاد واحد ابری هزینه خام ابر را به **هزینه به ازای هر واحد خروجی** ترجمه می‌کند — به ازای هر مشتری، هر تراکنش، هر پرونده حل‌شده، هر توکن. این قابلیت FinOps است که «صورت‌حساب AWS ما ماهانه £400k است» را به «ارائه خدمت به یک بیمار £0.83 هزینه دارد» تبدیل می‌کند.

## چرا اهمیت دارد

اعداد هزینه کل نمی‌توانند به پرسش‌های مهم پاسخ دهند: آیا محصول کارآمدتر یا ناکارآمدتر می‌شود؟ آیا رشد حاشیه را بهبود می‌دهد یا نابود می‌کند؟ چه قیمتی باید گرفت؟ هزینه‌های واحد به هر سه پاسخ می‌دهند. برای سلامت دیجیتال به‌طور خاص، «هزینه به ازای هر پرونده حل‌شده» *خودش* یک هزینه واحد خدمت سلامت است — مستقیماً قابل‌مقایسه با ارقام [مجموعه هزینه ملی](../تعرفه-ملی-و-هزینه-های-واحد/) که متولی خرید برای هر خدمت دیگر استفاده می‌کند، که آن را زبان طبیعی قیمت‌گذاری مسیرهای دیجیتال در برابر مسیرهای سنتی می‌کند.

## ریاضیات

```
Unit cost = total allocated cost (incl. shared/platform costs) / units delivered

Two families:
  resource-efficiency units: cost/GB stored, cost/vCPU-hour, cost/token,
                             cost/build-minute
  business units:            cost/customer, cost/transaction, cost/consultation,
                             cost/case-resolved

Marginal vs average discipline applies (marginal-vs-average-cost.md):
committed/reserved spend makes marginal unit cost ≈ 0 until the next
commitment step — price expansion decisions at marginal, efficiency
trends at average.
```

## مثال حل‌شده

یک خدمت تریاژ دیجیتال: هزینه ابر £62,000/ماه (محاسبات £30k، داده £18k، تخصیص پلتفرم مشترک £14k)، با پردازش 380,000 اپیزود تریاژ در ماه:

```
Average cost per episode = 62,000 / 380,000 ≈ £0.163

Commissioner comparison: telephone triage ≈ £8–12/call, GP consultation ≈ £42
→ digital episode runs at ~2% of the cheapest human alternative — the
channel-shift economics of gds-service-metrics.md, from the cost side.

Trend check: last year £0.21/episode at 240k episodes → improving scale
economics (fixed platform costs amortizing), worth a headline in the QBR.
```

## ارتباط با مهندسی نرم‌افزار

اقتصاد واحد جایی است که انتخاب‌های مهندسی برای امور مالی خواناپذیر می‌شوند: معماری‌ای که هزینه هر اپیزود را نصف کند مزیت قیمت‌گذاری است؛ معماری‌ای که فراخطی مقیاس می‌گیرد بمب ساعتی‌ای است که فقط در این معیار دیده می‌شود. رویه‌هایی که از هزینه‌یابی سلامت منتقل می‌شوند: **قواعد تخصیص را منتشر کنید** (هزینه‌های مشترک تا زمانی که PLICS هزینه‌یابی سطح بیمار را استاندارد کرد ارقام واحد را مخدوش می‌کرد — تخصیص هزینه پلتفرم شما به همان دقت نیاز دارد)؛ **واحدهایی را انتخاب کنید که خریدار با آنها فکر می‌کند** (متولیان خرید اپیزود می‌خرند، نه vCPU)؛ و هزینه‌های واحد را به هر مدل [ICER](../نسبت-هزینه-اثربخشی-افزایشی/) و [اثر بودجه](../تحلیل-اثر-بودجه/) به‌عنوان مخرج معتبر هزینه بدهید. برای ویژگی‌های هوش مصنوعی، واحد توکن است — به [اقتصاد واحد استنتاج](../اقتصاد-واحد-استنتاج/) نگاه کنید.

## تله‌ها و اشتباهات رایج

- **نادیده گرفتن هزینه‌های مشترک**: هزینه‌های واحد بدون تخصیص پلتفرم/امنیت/آنکال 30 تا 50% کمتر برآورد می‌کنند و در ممیزی فرو می‌ریزند.
- **مخرج‌های ظاهری**: «هزینه به ازای هر فراخوان API» چاپلوسی می‌کند؛ «هزینه به ازای هر اپیزود تکمیل‌شده بیمار» آگاه می‌کند.
- **قیمت‌گذاری هزینه متوسط برای تصمیم‌های نهایی**: دریافت هزینه واحد متوسط از تیم‌ها برای مصرفی که در حد نهایی رایگان است، نمایش اجتناب از اتلاف را تشویق می‌کند (برای نسخه NHS این باگ انگیزشی به [تعرفه ملی](../تعرفه-ملی-و-هزینه-های-واحد/) نگاه کنید).

## منابع

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
