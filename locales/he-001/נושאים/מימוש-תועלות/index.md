# מימוש תועלות

ניהול מימוש תועלות (BRM) הוא הדיסציפלינה של זיהוי, קביעת קו בסיס, מעקב ו*הוכחה* שהתועלות שהובטחו בתיק עסקי אכן התממשו לאחר האספקה. בהשקעה ציבורית בבריטניה הוא חי בתוך **מודל חמשת התיקים** של Green Book של משרד האוצר; ברפואה, קרוב משפחתו הוא מעקב לאחר שיווק.

## למה זה חשוב

תיקים עסקיים הם הבטחות; מימוש תועלות הוא הביקורת. הערכות של תוכניות דיגיטליות גדולות של ה-NHS מצאו שוב ושוב תועלות חזויות שלא התממשו — וכשהתועלות לא שחררו מזומן, הן לא תרמו דבר לשורה התחתונה של הנאמנות. תגובת ה-Green Book: כל תיק הוצאה חייב לעבור **חמישה תיקים** (אסטרטגי, כלכלי, מסחרי, פיננסי, ניהולי), כשמימוש התועלות מתוכנן בתיק הניהולי *לפני האישור* — בעלים מוגדרים, קווי בסיס נלכדים, מועדי מדידה נקבעים. בלי זה, "התוכנה חסכה 30 דקות לכל אחות" נשארת בדיון ספקים לנצח.

## המתמטיקה

```
Realization rate = benefits realized / benefits forecast   (per benefit, per period)

Mechanics that make it computable:
  baseline captured BEFORE go-live (else the delta is unmeasurable)
  each benefit: owner, metric, data source, measurement schedule
  forecast adjusted for optimism bias at appraisal (Green Book mandate)
  benefits classed cash / non-cash / qualitative and tracked separately
  (see cash-releasing-vs-non-cash-releasing.md)
```

## דוגמה מחושבת

תיק עסקי לשיבוץ אלקטרוני הבטיח, לשנה: הפחתה של £450k בהוצאות סוכנויות (מזומן), 8,000 שעות מנהלי מחלקה (קיבולת), שיפור בעמידה בשיעורי מילוי (איכותי). שנים-עשר חודשים לאחר העלייה לאוויר:

```
Benefit           Forecast    Realized    Rate   Evidence
Agency spend      £450,000    £287,000    64%    ledger vs baseline year
Manager hours     8,000       5,100       64%    time-motion sample
Fill compliance   +10pp       +12pp       120%   rostering system data

Actions from the review (the point of BRM):
agency shortfall traced to two wards never onboarded → onboard them;
forecast model's 30%-optimism error logged → applied to the next case.
```

מימוש של 64% אינו כישלון — הוא *ידע*. מקרים שלא נמדדים טוענים ל-100% לנצח.

## הקשר להנדסת תוכנה

ארגוני הנדסה מאשרים השקעות פלטפורמה על סמך תועלות חזויות ונדיר שהם מבקרים אותן — בדיוק הפתולוגיה ש-BRM מתקן. הפורט הקל: כל הצעה מעל סף מסוים מציינת בעלי תועלות, מדדי בסיס ותאריך סקירה בנקודת T+6 חודשים; שיעורי מימוש מוזנים חזרה לכמה הארגון מנכה מהתחזית הבאה של אותו צוות (או ספק). זו גם התשובה לספקנות כלפי כלי בינה מלאכותית: [ממצא MIT שכ-95% מפיילוטי GenAI לא הראו תשואה מדידה ברווח והפסד](../החזר-על-השקעה-בבינה-מלאכותית/) הוא תוצאה של מימוש תועלות — לפיילוטים שכן החזירו היו שורות תועלת ניתנות למעקב ובעלות בעלים. תחזית → מדידה → כיול מחדש הוא אותו לולאה כמו פיילוטים שמתומחרים ב-[EVPI](../ערך-צפוי-של-מידע-מושלם/), בקנה מידה של תיק.

## מלכודות נפוצות

- **אין קו בסיס לפני העלייה לאוויר** — המחדל הקטלני שלא ניתן לתקן.
- **יתמות תועלת**: בלי בעלים מוגדר אף אחד אינו אוסף את הנתונים וכל סקירה אומרת "בדרך כלל במסלול".
- **תועלות שנספרות כפול בין תוכניות** שתובעות את אותה קיבולת שהתפנתה — נהלו רישום תועלות על פני התיק.
- **תיאטרון מימוש**: מדידת הניצחונות האיכותיים הקלים בעוד שורות המזומן נותרות שקטות ללא בחינה.

## מקורות

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
