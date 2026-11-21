# מדדי שירות של GDS

מדריך השירות של שירות הדיגיטל הממשלתי הבריטי (GDS) מחייב ארבעה KPI לכל שירות דיגיטלי ממשלתי: **עלות לעסקה, שביעות רצון משתמשים, שיעור השלמה וקליטה דיגיטלית**. יחד הם הכלכלה המינימלית של שירות דיגיטלי ציבורי — והתבנית ששירותי דיגיטל של ה-NHS יורשים.

## למה זה חשוב

מדדי GDS מקודדים את התיק העסקי של מעבר ערוצים שמימן עשור של דיגיטציה ממשלתית: דוח היעילות הדיגיטלית מצא שעסקאות דיגיטליות זולות פי ~20 מטלפון ופי ~50 ממפגש פנים-אל-פנים (נתוני ממשל מקומי: אינטרנט £0.15, טלפון £2.83, פנים-אל-פנים £8.62). אך החיסכון מתממש רק כשאנשים *משלימים* את המסע הדיגיטלי (שיעור השלמה) *במקום* הערוץ היקר (קליטה) — ארבעת ה-KPI הם מודל כלכלי אחד, לא ארבעה לוחות מחוונים.

## המתמטיקה

```
Cost per transaction = total service cost / completed transactions
Completion rate      = completed / started transactions × 100
Digital take-up      = digital transactions / all-channel transactions × 100
User satisfaction    = % satisfied+very satisfied (5-point, in-service survey)

Channel-shift saving = volume × take-up shift × (cost_old_channel − cost_digital)
… minus failure demand: (1 − completion rate) × fallback channel cost
```

## דוגמה מחושבת

שירות ניהול תורים של NHS: 2M עסקאות בשנה, כיום 70% טלפון (£3.20 לשיחה) / 30% דיגיטלי (£0.25). עיצוב מחדש מעלה קליטה דיגיטלית ל-55% ושיעור השלמה מ-84% ל-93%:

```
Take-up shift saving = 2M × 0.25 × (3.20 − 0.25) = £1,475,000/year

Failure-demand saving: failed digital journeys fall back to phone
  before: 2M × 0.30 × 0.16 × £3.20 = £307,200
  after:  2M × 0.55 × 0.07 × £3.20 = £246,400
  net £60,800/year — completion improvements protect the take-up gains

Satisfaction is the leading indicator: dissatisfied users revert to phone,
so a satisfaction drop forecasts take-up decay before it appears.
```

## הקשר להנדסת תוכנה

ארבעת ה-KPI האלה הם דוגמה ברמת ייצור ל[טבלת עלות-השלכות](../ניתוח-עלות-השלכות/): מדד עלות אחד, שלושה מדדי תוצאה, לעולם לא מכווצים לציון. לקחים תפעוליים למהנדסי מוצר: **שיעור השלמה הוא בעיית מדידת משפך** (כל נקודת נטישה ניתנת לאיתור ולתיקון); **עלות לעסקה היא [כלכלת יחידה בענן](../כלכלת-יחידה-בענן/)** בתוספת עלויות ערוצים בסיוע צוות; **קליטה היא מדד שוויון בהסוואה** — משתמשים שאינם יכולים או אינם רוצים להחליף ערוץ הם באופן לא פרופורציונלי קשישים, נכים ומקופחים, ולכן סגירת ערוצים אגרסיבית ממירה "חיסכון" לפגיעה בגישה (ראו [טווח הגעה ושוויון](../טווח-הגעה-ושוויון/)). פרסום ה-KPI (GOV.UK עושה זאת, לכל שירות) הוא בעצמו מנגנון: שקיפות מטילה דיסציפלינה על תחזיות כפי שביקורות [מימוש תועלות](../מימוש-תועלות/) עושות.

## מלכודות נפוצות

- **קליטה בכפייה**: סגירת קו הטלפון מעלה קליטה ומשליכה ביקוש כשל על צוות החזית; מדדו עלות מערכת כוללת.
- **השלמה הנמדדת מעמוד 2**: התחלת המשפך אחרי נקודת הנשירה מחמיאה לשיעור.
- **עלות לעסקה שמתעלמת מתמיכה דיגיטלית בסיוע** ומטיפול בביקוש כשל.
- **סקרי שביעות רצון רק בהשלמה מוצלחת** — הלא-מרוצים לרוב לעולם אינם מגיעים לסקר.

## מקורות

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
