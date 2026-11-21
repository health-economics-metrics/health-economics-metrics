# מדדי איכות לבינה מלאכותית

מדדים לנכונות של פלט שנוצר בבינה מלאכותית: דיוק מול אמת מידה, **נאמנות/עיגון** (האם כל טענה נתמכת בהקשר שסופק?), ו**שיעור הזיות** (איזה חלק מהפלטים מכיל תוכן לא נתמך או שגוי?). בהקשרי בריאות אלה אינם תוספות איכות — אלה שיעורי נזק.

## למה זה חשוב

מבחני ייחוס בתחום הרפואה מדדו שיעורי הזיות **מעל 60% במודלי שפה לא מעוגנים** במשימות רפואיות (חלק מהמודלים הפתוחים >80%), בעוד עיגון, אחזור ומצבי חשיבה מורידים את השיעורים דרמטית (למשל מצב החשיבה של GPT-5 הוריד הזיות ב-HealthBench מ-3.6% ל-1.6% במבחן אחד). מינון שהוזה או ציטוט בדוי בתהליך קליני הם **אירוע מידע שגוי עם מסלול נזק** — מקומם בזרוע הנזקים של כל מודל כלכלי, ומתומחרים כמו התוצאות החיוביות-השגויות ב[כלכלת סקירה](../כלכלת-סקירה/): כל אחד מהם מייצר עלות במורד הזרם (פעולה על מידע שגוי, עבודת אימות, חשיפה משפטית-רפואית, שחיקת אמון).

## המתמטיקה

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

## דוגמה מחושבת

עוזר קידוד קליני מבוסס בינה מלאכותית מעבד 200,000 אפיזודות בשנה; ביקורת מראה ש-2% מהפלטים מכילים שגיאת קידוד מהותית; מקודדים אנושיים תופסים 85% מהן:

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

## הקשר להנדסת תוכנה

התייחסו לאיכות המודל כמו לכלכלת כיסוי בדיקות, בדיסציפלינה ברמה של בריאות: **קבוצות ההערכה הן הניסוי הקליני שלכם** — רשומות מראש, מייצגות את תמהיל המקרים *שלכם*, מתרעננות מול סחיפה; **עיגון מנצח קנה מידה במשימות עובדתיות** (אחזור + הנחיות שמחייבות ציטוט הם בדרך כלל הפחתת ההזיות הזולה ביותר — השוו ל[כלכלת יחידה של הסקה](../כלכלת-יחידה-של-הסקה/) לעלות הטוקנים שלו); ו**פרסמו את נקודת הפעולה**: כמו [רגישות/סגוליות](../הערכת-בינה-מלאכותית-קלינית/), "97% נאמן" אינו אומר דבר בלי התפלגות המשימות וסף הזיהוי. מתמטיקת שכבת הסקירה לעיל היא אותה חשבונאות [NNT/NNH](../המספר-הנדרש-לטיפול/) כמו בכל שער סקירה.

## מלכודות נפוצות

- **השתלת מבחן ייחוס לייצור**: שיעורי הזיות תלויים מאוד במשימה; תמהיל המקרים שלכם הוא מבחן הייחוס היחיד שקובע.
- **סקירה אנושית שלא נחשבה בעלות**: "קלינאי בודק הכול" מקטין את התועלת בחצי וחייב להופיע בשורת העלות — והערנות דועכת (שאננות אוטומציה), כך ש-P(לא זוהה) עולה עם האמון.
- **אופטימיזציה של איכות ממוצעת בעוד סיכון הזנב נושא את הנזק**: הערת אלרגיה בדויה אחת שוקלת יותר מאלף ניסוחים מגושמים; שקללו שגיאות לפי תוצאתן, לפי נוסחת הנזק הצפוי.

## מקורות

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
