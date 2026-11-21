# כלכלת ניטור מטופלים מרחוק

כלכלת ההחזר וקיזוז העלויות של ניטור מטופלים בבית: בארה"ב, מחסנית הכנסות מוגדרת של קודי CPT; בשירותי בריאות לאומיים, כלכלת מניעת אשפוז ומחלקות וירטואליות עד החלפה מלאה ב**אשפוז בית**.

## למה זה חשוב

RPM הוא המקום שבו נתוני מכשירים הופכים לבריאות הניתנת לחיוב. מבנה Medicare האמריקאי (ממוצעים לאומיים 2025) מפורש במיוחד:

```
99453  setup & patient education     ~$19.73  one-time (after 16 days of data)
99454  device supply + transmission  ~$43.03  per 30 days — REQUIRES ≥16 days
                                              of readings in the 30
99457  first 20 min/month management ~$47.87  requires ≥20 logged minutes
99458  each additional 20 min        ~$38.49
```

חודש-מטופל תואם נערם לכ-**$90–130 PMPM**. בצד קיזוז העלויות, תוכניות אשפוז בית (ויתור CMS Acute Hospital Care at Home: 300+ בתי חולים) מראות ~$1,800–$3,000 שנחסכו לכל מפגש לעומת טיפול אשפוזי עם פחות אשפוזים חוזרים וזיהומים — ההמחשה הברורה ביותר שניטור בתוספת טיפול וירטואלי יכולים להחליף את המשאב היקר ביותר במערכת, המיטה המאוישת.

## המתמטיקה

```
RPM revenue (US)  = enrolled × billing-compliant fraction × code stack PMPM
  — the 16-day rule makes wear-time compliance (wearable-validation.md)
    a revenue variable, and the 20-minute rule makes clinical-time
    logging an engineering requirement

NHS-style value   = admissions avoided × marginal admission cost
                  + bed days substituted × (inpatient − virtual-ward day cost)
                  − service cost (devices, platform, monitoring staff)
  (see emergency-attendance-avoidance.md and bed-days-saved.md for the
   attribution and marginal-cost rules)
```

## דוגמה מחושבת

מרפאה אמריקאית רושמת 400 חולי יתר לחץ דם; 70% עומדים בסף 16 הימים בחודש טיפוסי; דקות ניהול נרשמו ל-60%:

```
Monthly revenue ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Annual ≈ $282,000; service cost (devices $12/mo, staff 0.8 FTE) ≈ $180,000
Margin ≈ $100k/year — and note the levers are engineering levers:
raising the 16-day compliance from 70% → 85% adds ~$31k/year
(device comfort, sync reliability, reminder design).
```

השתקפות NHS: מחלקה וירטואלית של 50 מיטות בתפוסה של 80% שמחליפה ימי אשפוז בחיסכון נטו של £150 ליום ≈ 50 × 0.8 × 365 × 150 ≈ **£2.19M בשנה** ברוטו — מול פלטפורמה, מכשירים וצוות הסיעוד הקהילתי שמאייש אותה.

## הקשר להנדסת תוכנה

פלטפורמות RPM הן המוצר הנדיר שבו **זמינות ואמינות סנכרון מתורגמות ישירות להכנסה** (שבוע של סנכרונים כושלים שובר את שער 16 הימים לקוהורטה) ושבו מעקב זמן ברמת ביקורת (כלל 20 הדקות) הוא תכונה מהשורה הראשונה, לא מחשבה שנייה. בנו עבור: לוחות מחוונים של ציות לכל מטופל שמעלים חודשי חיוב בסיכון בזמן שהם ניתנים לשחזור; שבילי נתונים עם חותמת זמן ועמידים בפני חבלה (ביקורות משלמים שגרתיות); וכוונון כלכלת התראות — כל התראה צורכת את דקות צוות הניטור, שהן גם יחידת החיוב וגם המשאב הנדיר ([כלכלת סקירה](../כלכלת-סקירה/) שולטת בבחירת הסף).

## מלכודות נפוצות

- **רישום ≠ הכנסה**: החלק התואם הוא המספר; מדלו אותו, אל תניחו אותו.
- **קודים אמריקאיים שהושתלו בתיקי NHS** — שירותי בריאות לאומיים קונים מניעת אשפוז, לא מחסניות CPT; הריצו את המודל השני.
- **טענות קיזוז בעלות ממוצעת** לאשפוזים שעלויותיהם הקבועות נשארות (ראו [עלות שולית מול ממוצעת](../עלות-שולית-מול-עלות-ממוצעת/)).
- **רוויית צוות הניטור**: נפח התראות גדל עם הרישום; שורת כוח האדם היא האילוץ המחייב שרוב המודלים משמיטים.

## מקורות

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
