# שימור ונטישה

שימור מודד איזה שבר מקוהורטת משתמשים עדיין פעיל N ימים אחרי ההתחלה (עקומות D1/D7/D30); נטישה היא המשלים שלו. קו הבסיס האכזרי של בריאות דיגיטלית: **כ-90% ממשתמשי אפליקציות בריאות נוטשים תוך 30 יום** — שימור D30 בבריאות דיגיטלית עומד על ~3–4% לעומת ממוצע כל האפליקציות של ~6%.

## למה זה חשוב

Eysenbach קרא לזה בשם ב-2005: **חוק הנשירה** — אובדן משתמשים בשיעורים גבוהים הוא תכונה מהותית ומבנית של התערבויות eHealth, לא באג יישום, עם נשירה בניסויי eHealth שחורגת באופן שגרתי מ-50%. ההשלכה הכלכלית מוחלטת: שימור מגדיר את *חלון הטיפול* שבתוכו ניתן לספק כל תועלת, וה[כלכלת יחידה](../כלכלת-יחידה-של-אפליקציות-בריאות/) — CAC ששולם למשתמש שנשאר 12 ימים אינו מספק לא LTV ולא QALY. כל מודל כלכלי למוצר בריאות לצרכן שאינו משקלל תועלות לפי עקומת השימור מתאר מוצר שאינו קיים.

## המתמטיקה

```
Retention_Dn = users active on day n / cohort size × 100
Churn rate   = users lost in period / users at period start × 100

Benefit weighting (the health-economics move):
  expected benefit per acquired user = Σ_t retention(t) × benefit rate(t)
  ≈ area under the retention curve × per-time benefit
  — NOT trial benefit × 100% of acquired users

Cost per retained-at-D30 user = CAC / D30 retention
  (at 4% D30, a £5 CAC is really £125 per retained user)
```

## דוגמה מחושבת

אפליקציית בריאות נפש: ניסוי הראה 0.02 QALY שנרווחו למשתמש שהשלים 8 שבועות. קוהורטת פריסה של 100,000 הורדות, שימור D7 25%, D30 8%, שבוע-8 4%:

```
Completers          = 100,000 × 0.04 = 4,000
QALYs delivered     = 4,000 × 0.02 = 80  (not 100,000 × 0.02 = 2,000)
At £20,000/QALY     = £1.6M of health value (not £40M)

Per-download health value = £16 — the number that should set what a
payer will pay per download, and it is 4% of the naive claim.
Retention improvement case: moving week-8 completion 4% → 6% adds
40 QALYs/year ≈ £800k — retention engineering IS health production.
```

## הקשר להנדסת תוכנה

שימור הוא המדד שבו הנדסת מוצר מייצרת ערך בריאותי בצורה הישירה ביותר, לפי החשבון לעיל. הפרקטיקות שמזיזות אותו רגילות: זמן-עד-ערך-ראשון בקליטה, עיצוב מעורבות מחדש, ביצועים, ובעיקר **השלמת מינון מתוכננת** — תוכנית עם סוף מוגדר (8 שבועות, אז סיום) צריכה למדוד *השלמה*, לא DAU נצחי, ולישר את המדד עם המודל הקליני במקום עם מודל הקשב הממומן בפרסומות. ניתוח הישרדות הוא ארגז הכלים הנכון (אותה מתמטיקת Kaplan-Meier כמו [שנות חיים שנרווחו](../שנות-חיים-שנרווחו/)); פלחו עקומות לפי ערוץ רכישה, כי תמהיל ערוצים משנה שימור יותר מרוב התכונות.

## מלכודות נפוצות

- **הלבנת כוונה-לטפל בהפוך**: ניסויים מדווחים על משלימים; כלכלת פריסה חייבת לספור את כל מי שנרכש (האזהרה המרכזית של Eysenbach).
- **תיאטרון שימור**: משתמשים "פעילים" מונעי-התראות שלעולם אינם מבצעים את הפעולה הטיפולית (ראו [מדדי מעורבות](../מדדי-מעורבות/)).
- **השוואת עקומות בין הגדרות**: "פעיל" שהוגדר כפתיחה מול פעולה משמעותית מזיז D30 בכפולות.
- **התעלמות ממי נוטש**: אם החולים ביותר נוטשים הכי מהר, תועלות למשתמש יורדות ככל ששימור משתפר בקרב הבריאים — צרפו עקומות לתמהיל מקרים (ראו [טווח הגעה ושוויון](../טווח-הגעה-ושוויון/)).

## מקורות

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
