# معیارهای کیفیت هوش مصنوعی

معیارهایی برای درستی خروجی تولیدشده توسط هوش مصنوعی: دقت در برابر حقیقت مبنا، **وفاداری/زمین‌گیری** (آیا هر ادعا توسط زمینه ارائه‌شده پشتیبانی می‌شود؟)، و **نرخ توهم** (چه کسری از خروجی‌ها محتوای بی‌پشتوانه یا نادرست دارند؟). در محیط‌های سلامت اینها تجملات کیفی نیستند — نرخ‌های آسیب‌اند.

## چرا اهمیت دارد

محک‌های حوزه پزشکی نرخ‌های توهم **بالای 60% برای مدل‌های زبانی بزرگ بدون زمین‌گیری** را در وظایف پزشکی اندازه گرفته‌اند (برخی مدل‌های باز >80%)، در حالی که زمین‌گیری، بازیابی و حالت‌های استدلال نرخ‌ها را چشمگیر کاهش می‌دهند (برای مثال حالت تفکر GPT-5 توهم‌های HealthBench را در یک محک از 3.6% به 1.6% رساند). یک دوز توهمی یا ارجاع ساختگی در جریان کار بالینی یک **رویداد اطلاعات نادرست با مسیر آسیب** است — جایش در بازوی آسیب‌های هر مدل اقتصادی است و مانند مثبت‌های کاذب [اقتصاد غربالگری](../اقتصاد-غربالگری/) قیمت‌گذاری می‌شود: هر یک هزینه پایین‌دست به راه می‌اندازد (اقدام بر پایه اطلاعات غلط، نیروی کار راستی‌آزمایی، مواجهه حقوقی-پزشکی، فرسایش اعتماد).

## ریاضیات

```
Hallucination rate = outputs containing unsupported/false content / total outputs
  intrinsic:  contradicts the provided context
  extrinsic:  unverifiable fabrication beyond the context

Faithfulness (RAGAS-style) = supported claims in answer / total claims in answer
Context precision/recall   = retrieval quality feeding the generator

Economic weighting — not all hallucinations cost alike:
  expected harm cost = Σ over error types (rate × P(undetected) ×
                       P(acted upon) × cost per acted-upon error)
  The human-review layer sets P(undetected) — and its cost belongs
  in the model too (reviewer minutes × volume).
```

## مثال حل‌شده

یک دستیار کدگذاری بالینی مبتنی بر هوش مصنوعی سالانه 200,000 اپیزود را پردازش می‌کند؛ ممیزی نشان می‌دهد 2% خروجی‌ها خطای کدگذاری مادی دارند؛ کدگذاران انسانی 85% از آنها را می‌گیرند:

```
Errors reaching submission = 200,000 × 0.02 × 0.15 = 600/year
Cost per uncaught error (mis-billing avg + audit exposure) ≈ £250
Expected error cost         = 600 × 250 = £150,000/year
Review cost (2 min × 200k × £0.50/min)  = £200,000/year

Improvement case: retrieval grounding cuts error rate to 0.8%
→ uncaught errors 240, error cost £60,000 (−£90k/yr); review time
  can also drop (sampling instead of full review) — the quality
  investment pays before any speed claim.
```

## ارتباط با مهندسی نرم‌افزار

کیفیت مدل را مانند اقتصاد پوشش آزمون با انضباطی در سطح سلامت ببینید: **مجموعه‌های ارزیابی کارآزمایی بالینی شما هستند** — پیش‌ثبت‌شده، نماینده ترکیب موارد *شما*، و تازه‌شده در برابر رانش؛ **زمین‌گیری از مقیاس بهتر است** برای وظایف واقعیت‌محور (بازیابی + درخواست با الزام ارجاع معمولاً ارزان‌ترین کاهش توهم موجود است — برای سربار توکن آن به [اقتصاد واحد استنتاج](../اقتصاد-واحد-استنتاج/) نگاه کنید)؛ و **نقطه عملیاتی را منتشر کنید**: مانند [حساسیت/ویژگی](../ارزیابی-هوش-مصنوعی-بالینی/)، «97% وفادار» بدون توزیع وظیفه و آستانه تشخیص معنایی ندارد. ریاضیات لایه بازبینی بالا همان حساب [NNT/NNH](../تعداد-لازم-برای-درمان/) هر دروازه غربالگری است.

## تله‌ها و اشتباهات رایج

- **پیوند محک به تولید**: نرخ‌های توهم به‌شدت وابسته به وظیفه‌اند؛ ترکیب موارد شما تنها محکی است که اهمیت دارد.
- **بازبینی انسانی بدون هزینه**: «پزشک همه‌چیز را بررسی می‌کند» منفعت را نصف می‌کند و باید در ردیف هزینه ظاهر شود — و هوشیاری فرسوده می‌شود (رضایت‌مندی ناشی از خودکارسازی)، پس P(undetected) با اعتماد بالا می‌رود.
- **بهینه‌سازی کیفیت میانگین در حالی که ریسک دم بار آسیب را می‌کشد**: یک یادداشت آلرژی ساختگی از هزار عبارت ناجور سنگین‌تر است؛ خطاها را بر اساس پیامد وزن دهید، طبق فرمول آسیب مورد انتظار.

## منابع

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
