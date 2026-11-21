# נקודות קצה דיגיטליות וסמנים ביולוגיים

סמן ביולוגי דיגיטלי הוא מדד פיזיולוגי או התנהגותי אובייקטיבי שנאסף באמצעות חיישנים (מהירות הליכה מטלפון, שינה מלביש, רעד מתאוצה). נקודת קצה דיגיטלית היא מדד כזה שהועלה לדרגת **תוצאת ניסוי** — המשמש להוכחת אפקט טיפולי. הקידום מ"נתונים שהמכשיר פולט" ל"ראיה שרגולטור מקבל" עובר בסולם אימות מוגדר.

## למה זה חשוב

נקודות קצה מסורתיות בניסויים הן אפיזודיות (ביקורי מרפאה כל 3 חודשים) ויקרות; נקודות קצה דיגיטליות הן רציפות, אקולוגיות (חיים אמיתיים, לא ביצועי מרפאה) וזולות לתצפית — הן יכולות לכווץ ניסויים, לזהות אפקטים מוקדם יותר ולאפשר מחקרים מבוזרים. הקאץ' הוא האימות: המסגרת המקובלת (בהתאם ל-FDA, שלושה עמודים) דורשת **אימות/אימות אנליטי** (החיישן מודד את הגודל הפיזיקלי במדויק), **אימות קליני** (המדד משקף את המצב הקליני שהוא טוען לו), ו**היבט משמעותי של בריאות** שהוכח (מטופלים אכפתיים ממה שהוא לוכד). נקודת קצה בלי שלושתם היא טלמטריה, לא ראיה.

## המתמטיקה

```
Analytical validation: agreement with reference (see wearable-validation.md —
                       MAPE, CCC, Bland-Altman)
Clinical validation:   correlation/discrimination against clinical anchors
                       (known-groups validity, responsiveness to change)
Endpoint economics:
  events detected per patient-year (continuous) vs per-visit sampling
  trial power: continuous measures cut sample size when between-visit
  variance dominates — N ∝ σ²/Δ², and σ² falls with dense sampling
```

## דוגמה מחושבת

ניסוי פרקינסון שוקל מהירות הליכה מחיישן פרק כף יד מול ציוני מרפאה רבעוניים:

```
Clinic endpoint:  4 measurements/patient/year, high day-to-day noise
Digital endpoint: ~200 passive measurements/patient/year

Variance of the annual-change estimate falls ~5× with dense sampling →
detectable effect size at fixed power improves ~√5 ≈ 2.2×, or
equivalently sample size shrinks ~40–60% for the same hypothesis.
At £25,000 per enrolled patient, cutting 200 patients ≈ £5M saved
per trial — the commercial case for the validation investment
(itself perhaps £1–2M) across a sponsor's pipeline.
```

## הקשר להנדסת תוכנה

נקודות קצה דיגיטליות הן דיסציפלינת הנדסת נתונים בלבוש קליני: **מקוריות וגרסאות** (עדכוני אלגוריתם באמצע מחקר מאיימים על ההשוואתיות — בעיית ה-[PCCP](../הערכה-רגולטורית-של-בינה-מלאכותית/) בצורת ניסוי; נעלו גרסה ואמתו גשר); **תכנון נתונים חסרים** (פערי זמן לבישה הם אינפורמטיביים, לא אקראיים — ראו [אימות מכשירים לבישים](../אימות-מכשירים-לביש/); בחירות השלמה הן טענות מדעיות); ו**החלטות פיצול קצה/ענן** ששינו איזה אות גולמי ניתן בכלל לשחזר מאוחר יותר. צוותים שמתייחסים לצינור המדידה כתוכנה מוסדרת מהיום הראשון — נבדק, בגרסאות, מתועד — קונים את אמינות נקודות הקצה שלהם בזול; הוספת אימות בדיעבד לצינור שנבנה מהר היא המקום שבו תוכניות נקודות קצה דיגיטליות מתות.

## מלכודות נפוצות

- **מתאם עם המרפאה כאימות מלא**: התאמה למדד מרפאה פגום מוכיחה ירושה, לא אמת; אמתו מול ההיבט הבריאותי המשמעותי.
- **סיכון רגולטורי של נקודת קצה חדשה**: נקודת קצה חסרת תקדים יכולה להיות עדיפה מדעית ועדיין להטביע הגשה — פנו לרגולטורים מוקדם (קיימות תוכניות הסמכה).
- **אי-התאמה בין אוכלוסיית החיישן**: אימות בפרקי כף יד צעירים ובריאים, פריסה בחולים קשישים עם רעד והבדלי פיגמנטציה שה-PPG מעולם לא ראה.
- **סחיפת מאפיינים**: אימון מחדש של אלגוריתם ההליכה על נתונים חדשים מגדיר מחדש בשקט את נקודת הקצה באמצע המחקר.

## מקורות

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
