# החזר חברתי על השקעה (SROI)

SROI מרחיב את [ROI](../החזר-על-השקעה/) לתוצאות שהשווקים אינם מתמחרים — רווחה, קשר חברתי, השפעה סביבתית — על ידי המרתן לכסף באמצעות פרוקסי פיננסיים, עבור *כל* בעלי העניין המושפעים.

## למה זה חשוב

חלק גדול ממה שהתערבויות בריאות וקהילה מייצרות לעולם אינו נוגע בשורת תקציב: בדידות מופחתת, הקלה למטפלים, רווחי תעסוקה, כבוד. SROI, בשליטת שבעת העקרונות של Social Value International (שתפו בעלי עניין, העריכו מה שחשוב, אל תתבעו יתר על המידה, היו שקופים, אמתו…), מייצר הצהרות כמו "£3.20 של ערך חברתי לכל £1 שהושקע." דרישות הערך החברתי ברכש ציבורי בבריטניה הופכות ראיות בסגנון SROI למסחרית רלוונטיות: הצעות לחוזים ציבוריים (כולל NHS) צוברות נקודות על ערך חברתי מוכח.

## המתמטיקה

```
SROI ratio = PV(monetized social outcomes) / PV(investment)

For each outcome:
  value = quantity × financial proxy × attribution × (1 − deadweight) × (1 − displacement)

deadweight   = would have happened anyway
attribution  = share caused by others
displacement = benefit moved from elsewhere rather than created
drop-off     = decay of the outcome over years
```

גורמי ההתאמה הם יושרת השיטה: בלעדיהם, SROI הוא בדיון עם סימן מטבע.

## דוגמה מחושבת

אפליקציית חברות שמחברת מבוגרים מבודדים למתנדבים; עלות התוכנית £200,000 בשנה; 1,500 זוגות פעילים.

```
Outcome: reduced loneliness for 1,500 people
  proxy: wellbeing valuation of "relief from loneliness" ≈ £1,800/person/yr
  deadweight 25% (some would have found connection anyway)
  attribution 80% (some credit to other services)

Value = 1,500 × 1,800 × 0.80 × 0.75 = £1,620,000

Outcome: reduced GP visits, 1,500 × 1.2 visits × £42 = £75,600 (payer-real)

SROI = (1,620,000 + 75,600) / 200,000 ≈ 8.5 : 1
```

שימו לב שהיחס הוא 96% רווחה שהוערכה בפרוקסי ו-4% מזומן קשיח. זה SROI לגיטימי — אך חייבים להציגו כערך חברתי, לעולם לא להניח שהוא מרמז ש-£1.7M ניתנים לבנק.

## הקשר להנדסת תוכנה

SROI הוא המסגרת הכנה לעבודה הנדסית שהנהנים ממנה נמצאים מחוץ לצוות המשלם: תחזוקת קוד פתוח, שיפורי נגישות, עבודת פלטפורמה הנצרכת על ידי צוותים אחרים, השקעה בקהילת מפתחים. המכניקה הניתנת להעברה: זהו את כל בעלי העניין, המירו לכסף עם פרוקסי מוצהרים, והחילו הנחות deadweight/ייחוס (האם התיקון של ה-OSS היה קורה בכל מקרה? כמה מהרווח הוא עבודתכם לעומת האקוסיסטם?). דיסציפלינת *היזמה בהנחה על טענות ההשפעה שלכם* היא מה שמבדיל SROI ממספר שיווקי.

## מלכודות נפוצות

- **קניות פרוקסי**: בחירת הערכת הרווחה הנדיבה ביותר הזמינה.
- **דילוג על deadweight/ייחוס** — הניפוח הנפוץ ביותר, לעיתים מכפיל את היחס.
- **השוואת יחסים בין מחקרים**: יחסי SROI רגישים לשיטה; השוו רק בתוך מסגרת עקבית.
- **הצגת ערך חברתי כחיסכון הניתן למימוש** למחזיק תקציב.

## מקורות

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
