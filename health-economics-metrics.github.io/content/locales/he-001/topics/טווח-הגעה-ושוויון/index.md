# טווח הגעה ושוויון

RE-AIM — Reach, Effectiveness, Adoption, Implementation, Maintenance (טווח הגעה, יעילות, אימוץ, יישום, שימור) — היא המסגרת הסטנדרטית לשיפוט ההשפעה *האוכלוסייתית* של התערבות. החשבון המרכזי שלה: **השפעה על בריאות הציבור ≈ טווח הגעה × יעילות**. כלים דיגיטליים מוסיפים ממד שוויון: הפער הדיגיטלי הופך את טווח ההגעה לבלתי אחיד באופן שיטתי, ואספקה דיגיטלית-תחילה יכולה להרחיב את פערי הבריאות שהיא שואפת לסגור.

## למה זה חשוב

סקירות שיטתיות שמיישמות RE-AIM על mHealth מוצאות חתימה עקבית: טווח הגעה ואימוץ חזקים, **יעילות ושימור חלשים** — אפליקציות מתפשטות בקלות ודוהות מהר. לשירות בריאות לאומי, משמעות הדבר שמוצר מרשים לכל משתמש יכול להיות השקעה אוכלוסייתית גרועה, ולהפך: כלי יעיל במידה צנועה שמגיע למיליונים יכול להפיק יותר מכלי מבריק שמגיע לאלפים (ראו חשבון [HALE](../תוחלת-חיים-מתוקנת-בריאות/)). שוויון אינו אילוץ צדדי אלא מניע ערך: הדרה דיגיטלית עוקבת אחר גיל, מחסור, מוגבלות ושפה — בדיוק האוכלוסיות הנושאות את מרב הנטל הניתן לטיפול — כך שלמשתמש השולי המודר יש לעיתים קרובות פוטנציאל תועלת *מעל הממוצע*. למדד סטטיסטי פורמלי של אי-שוויון בריאותי הקשור למצב סוציו-אקונומי, ראו [מדד הריכוז](../מדד-הריכוז/).

## המתמטיקה

```
Population impact ≈ reach × effectiveness
  reach         = participants / eligible population (see activation-and-uptake.md)
  effectiveness = real-world effect among participants (retention-weighted —
                  see retention-and-churn.md)

Equity-stratified version:
  impact_group_g = reach_g × effectiveness_g, reported per deprivation
  quintile / age band / language group
  equity gap = impact_top quintile − impact_bottom quintile

Distributional cost-effectiveness: apply equity weights to QALYs by
recipient group — a QALY to the worst-off counts more (an increasingly
mainstream HTA extension).
```

## דוגמה מחושבת

תוכנית דיגיטלית למניעת סוכרת, מדווחת בשתי דרכים:

```
Aggregate: reach 12%, effect 0.02 QALYs/participant → 0.0024 QALYs/eligible person

Stratified (deprivation quintiles):
  Q1 (least deprived): reach 22%, effect 0.02 → 0.0044
  Q5 (most deprived):  reach 4%,  effect 0.025 → 0.0010

The programme delivers 4.4× more health to the least deprived —
while Q5's per-participant effect is HIGHER (more headroom). An
assisted-digital arm (phone coaching + community access) costing 20%
more per Q5 participant that lifts Q5 reach to 12% triples Q5 impact
and improves the aggregate — the equity investment IS the efficiency
investment here.
```

## הקשר להנדסת תוכנה

טווח ההגעה הוא במידה רבה ארטיפקט הנדסי: דרישות רצפת מכשיר ומערכת הפעלה, הנחות רוחב פס, תמיכה בשפות, עמידה בנגישות (WCAG), מכשולי אימות זהות והפצה רק בחנות אפליקציות כל אחד מגלף אוכלוסיות מהמכנה — בדרך כלל בלי שנראה, כי משתמשים מודרים לעולם אינם מופיעים באנליטיקה. פרקטיקות הנדסיות שמזיזות שוויון: מדדו את *המכנה* (מדדו את האוכלוסייה הזכאית, לא רק משתמשים); תקצבו ביצועים למכשירים ישנים ולקישוריות גרועה; שלחו מסלולי דיגיטל בסיוע (טלפון, SMS, קיוסק) כזרימות מהשורה הראשונה ולא כערוצי בושה; ופלחו כל מדד לוח מחוונים לפי ממדי השוויון — ממוצע לא מפולח הוא המקום שבו אי-שוויון מסתתר ([קליטה של GDS](../מדדי-שירות-של-gds/) נושאת אותה אזהרה).

## מלכודות נפוצות

- **יעילות מדווחת על משלימים, השפעה נטענת על אוכלוסיות** — איברי טווח ההגעה מושמטים בשקט.
- **שוויון כביקורת בדיעבד** במקום קלט עיצובי; התקנת טווח הגעה בדיעבד יקרה בהרבה מתכנונו מראש.
- **אמנזיית שימור**: הממד החלש ביותר של RE-AIM ב-mHealth — טענות השפעה מעבר לאופק הזמן של הראיות.
- **חסכונות ערוץ דיגיטלי בלבד** שמעבירים עלויות למשתמשים מודרים ולצוות החזית (ראו [מדדי שירות של GDS](../מדדי-שירות-של-gds/)).

## מקורות

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
