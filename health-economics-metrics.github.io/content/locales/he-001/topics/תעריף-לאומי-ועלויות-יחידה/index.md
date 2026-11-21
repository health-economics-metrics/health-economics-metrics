# תעריף לאומי ועלויות יחידה

ה-NHS משלם לספקים עבור פעילות לפי מחירון לאומי מבוסס כללים — היסטורית ה-National Tariff / Payment by Results, שהוחלף ב-**NHS Payment Scheme (NHSPS)** ב-1 באפריל 2023. מאחורי המחירים עומדת תשתית תמחור יחידה לאומית: **National Cost Collection (NCC)** והקומפנדיום **PSSRU Unit Costs of Health and Social Care**.

## למה זה חשוב

אלה המכנים של כל תיק עסקי אמין של ה-NHS. כשטענה אומרת "פנייה למרפאת חוץ שווה £160" או "שעת אחות Band 6 עולה £31", המספרים האלה מגיעים מהתשתית הזו — ושימוש בנתונים הרשמיים ולא בבדויים הוא מה שהופך הערכות עצמאיות לברות השוואה וצוותי כספים לשיתופי פעולה. לספק, התעריף מגדיר גם את צד ה*הכנסה*: פעילות שהתוכנה שלכם מאפשרת (מרפאות נוספות, מיטות שמולאו מחדש) מוערכת במחירי התוכנית.

## המתמטיקה

```
Tariff price per unit of activity (HRG-coded spell, outpatient attendance)
  = national average unit cost (from NCC) × Market Forces Factor (local adjustment)
  under NHSPS: blended fixed + variable ("aligned payment and incentive") elements

NCC unit cost = trust-reported total cost of an activity type / activity volume
                (built on Patient-Level Information and Costing Systems, PLICS)

PSSRU compendium: ~80 standard unit costs (GP consultation, nurse-hour by band,
ED attendance…) — the default source in UK economic evaluations.
```

## דוגמה מחושבת

התוכנה שלכם משחררת שעה ביום מזמנה של אחות Band 6 בשנת עבודה של 250 ימים:

```
PSSRU-based Band 6 cost incl. overheads ≈ £31/hour (check current edition)
Capacity value = 250 × £31 = £7,750/nurse/year (non-cash-releasing)
```

לחלופין האחות מקיימת 2 פגישות מעקב נוספות במרפאת חוץ ביום ב-~£160 ערך תוכנית: 500 × £160 = **£80,000 בשנה של פעילות ממומנת** — הפרש של פי עשרה בערך הנטען בהתאם להפניה מחדש, הכל מעלויות יחידה רשמיות. שתי הטענות ניתנות לביקורת כי המכנים מפורסמים; זו כל הנקודה.

## הקשר להנדסת תוכנה

זו תבנית **מחירון פנימי**. כלכלת הבריאות הבריטית עובדת כי כל הערכה משתמשת באותן עלויות יחידה שפורסמו; לארגוני הנדסה לרוב אין זאת, כך שכל תיק עסקי ממציא את עלות שעת מהנדס, תקרית, פריסה. צוות פלטפורמה יכול לפרסם בדיוק מחירון כזה — עלות עמוסה לשעת מהנדס לפי רמה, לתקרית לפי חומרה, לדקת בנייה — ולדרוש את השימוש בו בכל ההצעות. מערכות חיוב-חוזר/showback משכפלות גם את מצבי הכשל הידועים של התעריף: תמחור עלות ממוצעת מניע משחקי נפח, תשלומים קבועים מניעים תת-אספקה. התפתחות ה-NHSPS מתשלום פעילות טהור לשילוב קבוע+משתנה היא עשרים שנות לקחים בתכנון תמריצים לתמחור פלטפורמה פנימי.

## מלכודות נפוצות

- **נתונים מיושנים**: מחירי NCC, PSSRU ו-NHSPS מתרעננים מדי שנה — תארכו כל מספר.
- **מחיר תעריף ≠ עלות**: מחירים הם ממוצעים לאומיים עם התאמות; העלות השולית המקומית שלכם שונה (ראו [עלות שולית מול ממוצעת](../עלות-שולית-מול-עלות-ממוצעת/)).
- **הערכת קיבולת לפי תעריף בלי מנגנון** לספק בפועל ולקבל תשלום על הפעילות הנוספת.

## מקורות

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
