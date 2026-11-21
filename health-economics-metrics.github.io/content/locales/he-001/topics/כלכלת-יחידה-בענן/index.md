# כלכלת יחידה בענן (FinOps)

כלכלת יחידה בענן מתרגמת הוצאה גולמית בענן ל**עלות ליחידת תפוקה** — ללקוח, לעסקה, למקרה שנפתר, לטוקן. זו יכולת ה-FinOps שהופכת את "חשבון ה-AWS שלנו הוא £400k לחודש" ל"שירות מטופל אחד עולה £0.83".

## למה זה חשוב

מספרי הוצאה כוללת אינם יכולים לענות על השאלות החשובות: האם המוצר נעשה יעיל יותר או פחות? האם צמיחה משפרת או הורסת מרווח? כמה לגבות? עלויות יחידה עונות על שלושתן. בבריאות דיגיטלית בפרט, "עלות למקרה שנפתר" *היא* עלות יחידה של שירות בריאות — ברת השוואה ישירה לנתוני [אוסף העלויות הלאומי](../תעריף-לאומי-ועלויות-יחידה/) שגוף מזמין משתמש בהם לכל שירות אחר, מה שהופך אותה לשפה הטבעית לתמחור מסלולים דיגיטליים מול מסורתיים.

## המתמטיקה

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

## דוגמה מחושבת

שירות מיון דיגיטלי: הוצאה בענן £62,000 לחודש (מחשוב £30k, נתונים £18k, הקצאת פלטפורמה משותפת £14k), מטפל ב-380,000 אפיזודות מיון בחודש:

```
Average cost per episode = 62,000 / 380,000 ≈ £0.163

Commissioner comparison: telephone triage ≈ £8–12/call, GP consultation ≈ £42
→ digital episode runs at ~2% of the cheapest human alternative — the
channel-shift economics of gds-service-metrics.md, from the cost side.

Trend check: last year £0.21/episode at 240k episodes → improving scale
economics (fixed platform costs amortizing), worth a headline in the QBR.
```

## הקשר להנדסת תוכנה

כלכלת יחידה היא המקום שבו בחירות הנדסיות הופכות לקריאות פיננסית: ארכיטקטורה שמקטינה בחצי את העלות לאפיזודה היא יתרון תמחור; כזו שגדלה סופר-לינארית היא פצצת זמן הנראית רק במדד הזה. פרקטיקות שעוברות מתמחור בריאות: **פרסמו את כללי ההקצאה** (עלויות משותפות עיוותו נתונים ליחידה עד ש-PLICS תיקן תמחור ברמת מטופל — הקצאת עלות הפלטפורמה שלכם צריכה אותה קפדנות); **בחרו יחידות שהקונה חושב בהן** (גופים מזמינים קונים אפיזודות, לא vCPU); והזינו עלויות יחידה לכל מודל [ICER](../יחס-עלות-אפקטיביות-מצטבר/) ו[השפעה תקציבית](../ניתוח-השפעה-תקציבית/) כמכנה העלות המוסמך. בתכונות בינה מלאכותית היחידה היא הטוקן — ראו [כלכלת יחידה של הסקה](../כלכלת-יחידה-של-הסקה/).

## מלכודות נפוצות

- **התעלמות מעלויות משותפות**: עלויות יחידה ללא הקצאות פלטפורמה/אבטחה/כוננות מעריכות בחסר ב-30–50% וקורסות בביקורת.
- **מכנים להצגה**: "עלות לקריאת API" מחמיאה; "עלות לאפיזודת מטופל שהושלמה" מלמדת.
- **תמחור לפי עלות ממוצעת של החלטות שוליות**: חיוב צוותים בעלות יחידה ממוצעת על שימוש חינמי שולית מניע תיאטרון הימנעות מבזבוז (ראו [תעריף לאומי](../תעריף-לאומי-ועלויות-יחידה/) לגרסת ה-NHS של באג התמריץ הזה).

## מקורות

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
