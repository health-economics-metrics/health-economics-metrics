# SPACE ו-DevEx

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow — שביעות רצון ורווחה, ביצועים, פעילות, תקשורת ושיתוף פעולה, יעילות וזרימה) ו-DevEx (לולאות משוב, עומס קוגניטיבי, מצב זרימה) הן מסגרות למדידת פריון מפתחים **באופן רב-ממדי** — תשובת התחום לגילוי שאף מדד יחיד אינו שורד מגע עם המציאות.

## למה זה חשוב

שתי המסגרות מקודדות את אותו לקח שנלמד בקושי שחקר תוצאות בריאות למד עשורים קודם: מספר יחיד (שורות קוד; לחץ דם) מייצג באופן שגוי מציאות רב-ממדית, ואופטימיזציה שלו מייצרת משחקים, לא שיפור. SPACE מורה לשלב מדדים מלפחות שלושה ממדים, תוך ערבוב טלמטריה עם דיווח עצמי — זהה מבנית לאופן שבו [EQ-5D](../eq-5d/) מפרט חמישה ממדים לפני שמחושב כל מדד, ולכן [PROMs](../תוצאות-מדווחות-על-ידי-מטופל/) קיימים לצד מדדים קליניים. שביעות רצון/רווחה אינה קישוט רך: היא מזינה את כלכלת [שימור כוח אדם](../שימור-כוח-אדם/), שבה נשירה מתומחרת בחודשי שכר עמוס.

## המתמטיקה

אף אחת מהמסגרות אינה נוסחה; שתיהן תכנוני מדידה:

```
SPACE rule: ≥ 3 dimensions, ≥ 1 perceptual (survey) + ≥ 1 system (telemetry) metric

DevEx dimensions and example pairings:
  feedback loops  → CI duration (telemetry) + "waiting feels slow" (survey)
  cognitive load  → docs findability, onboarding time + perceived effort
  flow state      → meeting/interrupt density + self-reported focus

Derived indices (e.g., DX's DXI) map survey composites to time:
vendor claim ≈ 13 min/dev/week per index point — treat as a vendor
benchmark to validate locally, not a constant of nature.
```

## דוגמה מחושבת

צוות פלטפורמה מצדיק השקעת DevEx (האצת CI + שיפוץ תיעוד) ל-300 מפתחים:

```
Baseline: CI p75 = 28 min; survey "I lose focus waiting for builds": 62% agree
After:    CI p75 = 9 min;  agreement 24%

Time reclaimed (telemetry): 6 builds/day × 19 min × 0.4 usable = ~45 min/day/dev
Capacity value: 300 × 0.75h × 220d × £60/h ≈ £2.97M/year (non-cash-releasing —
see cash-releasing-vs-non-cash-releasing.md; the 0.4 usability factor is the
fragmentation discount from practitioner-time.md)
Perceptual corroboration is what makes the telemetry claim credible — either
alone is gameable; together they triangulate.
```

## הקשר להנדסת תוכנה

מסמך זה *הוא* צד התוכנה; ההעברה זורמת לעבר כלכלת הבריאות. "שנת מהנדס מתוקנת-איכות" — זמן משוקלל במדד חוויה סטנדרטי — היא בניית ה-[QALY](../שנת-חיים-מתוקנת-איכות/) מיושמת על קיבולת הנדסית, והיא יורשת את כללי ה-QALY: משקלות ממכשיר מאומת (סקר עקבי, ניקוד שפורסם), שנשלפו *לפני* ההשוואה, לעולם לא מכוונים להחניף לכלי מועדף. גם לקח [SF-6D מול EQ-5D](../eq-5d/) חל: מכשירים שונים נותנים מספרים שונים באופן שיטתי, ולכן לעולם אל תשוו מדדי DevEx בין מכשירי ספקים.

## מלכודות נפוצות

- **קריסה למדד יחיד**: לוחות מחוונים שמצמצמים SPACE לציון אחד משחזרים את הבעיה שהמסגרת קיימת כדי למנוע.
- **מדדי פעילות כתוצאות**: commits, PR ו-story points הם פעילות — הממד ש-SPACE מזהירה במפורש שהוא הניתן למשחק ביותר (אנלוג בריאותי: ספירת פרוצדורות, לא החלמות).
- **עייפות סקרים ואפקטי Hawthorne**: מכשירים קלי-מגע רבעוניים עדיפים על חקירה שבועית.
- **השוואת צוותים**: כמו טבלאות ליגה של בתי חולים בלי התאמת תמהיל מקרים — הבדלי הקשר (תחום, עומס ירושה, כוננות) שולטים.

## מקורות

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
