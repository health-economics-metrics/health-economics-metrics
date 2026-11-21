# כלכלת יחידה של אפליקציות בריאות

החשבון המסחרי של מוצרי בריאות לצרכן: עלות רכישת לקוח (CAC), ערך חיי לקוח (LTV), הכנסה ממוצעת למשתמש (ARPU), תמחור לחבר-לחודש (PMPM), וההבחנה בשוק המעסיקים בין **ROI ל-VOI** (ערך על השקעה).

## למה זה חשוב

אפליקציות בריאות ניצבות בפני כיווץ מבני: רכישה יקרה (טענות מוסדרות, חסמי אמון, עלויות ציות) בעוד שימור הוא הגרוע מכל ורטיקל תוכנה (~90% נטישה תוך 30 יום — ראו [שימור ונטישה](../שימור-ונטישה/)). מבחן הכדאיות הסטנדרטי — **LTV:CAC ≥ 3:1** — קשה אפוא באכזריות בבריאות לצרכן, ולכן התעשייה נודדת למודלי B2B2C: מעסיקים, מבטחים ומערכות בריאות שמשלמים PMPM על אוכלוסיות, שבהם הקונה אינו הפרט הנוטש.

## המתמטיקה

```
CAC   = sales + marketing spend / new paying customers
ARPU  = revenue / active users (per period)
LTV   = ARPU × average lifetime  =  ARPU / churn rate
Viability: LTV : CAC ≥ 3, payback period ≤ 12–18 months

Effective CAC per retained user = CAC / retention(t)
  — at 4% D30 retention, £5 per install = £125 per 30-day-retained user

PMPM revenue = rate × enrolled members × months
  vendor margin = PMPM − cost-to-serve per member per month
  — engagement flips sign: under B2C subscriptions engagement drives
    revenue; under PMPM, engaged members COST more to serve than
    dormant ones, and outcomes contracts flip it back again
```

## דוגמה מחושבת

אפליקציית שינה B2C: £6.99 לחודש, נטישה חודשית 18%, CAC משולב £38.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — non-viable

Pivot to employer PMPM: £1.20 PMPM × 40,000 covered lives = £48k/month
Cost-to-serve: infrastructure £0.15 + support £0.10 + content £0.05
  per member ≈ £0.30 → margin ~75%, sales cycle long but churn is
  contract-level (annual), not user-level (daily)

The employer's question shifts the metric: hard-dollar ROI (reduced
claims, absenteeism) is rarely demonstrable for wellness products —
the industry answer is VOI: productivity, recruitment appeal,
engagement — which is honest only when labelled as VOI, not dressed
as ROI (see return-on-investment.md and social-return-on-investment.md).
```

## הקשר להנדסת תוכנה

בחירות הנדסיות קובעות את שני צדי היחס: **עלות-שירות** היא ארכיטקטורה ([כלכלת יחידה בענן](../כלכלת-יחידה-בענן/) — מרווח PMPM חי או מת על עלות תשתית לחבר), ו-**LTV** הוא הנדסת שימור (כל נקודת נטישה היא הכנסה חשבונית — לחשבון ה-QALY במסמך [השימור](../שימור-ונטישה/) יש תאום הכנסה מדויק). למוצרי בריאות בפרט, לוח מחוונים של כלכלת יחידה צריך לשאת שורה שלישית לצד LTV ו-CAC: **ערך בריאותי לכל משתמש שנרכש** (QALY משוקללי שימור × סף) — כי שווקי משלמים בסגנון DiGA מתמחרים יותר ויותר לפיו, ומפני שמוצר שכלכלת היחידה המסחרית והקלינית שלו מתפצלות (רווחי אך אינרטי בריאותית, או יעיל אך בלתי ניתן למימון) צריך לדעת איזו בעיה יש לו.

## מלכודות נפוצות

- **LTV מנטישת קוהורטה מוקדמת**: נטישה מתייצבת כלפי מטה; אך גם הטיית ניצולים — מאמצים מוקדמים נשמרים טוב יותר מקהלים מוגדלים. השתמשו בנתוני קוהורטה בשלים.
- **CAC משולב על פני ערוצים**: CAC מרשתות חברתיות ממומנות ו-CAC מהפניית קלינאים שונים פי 10, עם פרופילי שימור הפוכים — פלחו או הוטעו.
- **PMPM בלי תקרות ניצול**: חברים חריגים במעורבות יכולים להפוך מרווחים; מדלו את ההתפלגות, לא את הממוצע.
- **VOI המוצג כ-ROI** למנהל כספים — כשל האמינות שתעשיית הוולנס של מעסיקים הרוויחה בעשור.

## מקורות

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
