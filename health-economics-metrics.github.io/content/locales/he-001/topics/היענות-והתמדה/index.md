# היענות והתמדה

היענות (adherence) היא מידת ההתאמה בין השימוש בפועל לשימוש שנקבע במרשם (עוצמה); התמדה (persistence) היא משך הזמן שבו השימוש נמשך עד להפסקה (משך). לרוקחות יש מדדים סטנדרטיים — **MPR** ו-**PDC**, כאשר ≥80% הוא הסף המקובל ל"היענות" — וטיפולים דיגיטליים יורשים הן את המושגים והן את הבעיה: היענות היא המכפיל שבין יעילות לבין ערך שמומש.

## למה זה חשוב

משלמים כבר פועלים לפי המספרים האלה: PDC ≥80% מזין את דירוגי הכוכבים של Medicare בארה"ב, שמזיזים הכנסות ממשיות של משלמים — היענות היא תשתית נושאת עומס כספי, לא מדד רך. בטיפולים דיגיטליים התבנית חוזרת: נתוני DiGA מראים נפחי מרשמים חזקים עם היענות מתמשכת חלשה, ותמחור טיפולים דיגיטליים מבוסס תוצאות (שמגיע לגרמניה מ-2026) ישלם על תוצאות המותנות בהיענות. השדרוג המושגי ממחקר הבריאות הדיגיטלית: **מעורבות אפקטיבית** — מעורבות *מספקת* להשגת התוצאה המיועדת — והמסקנה הנגזרת ממנה, **המינון האפקטיבי המינימלי**, שנקבע אמפירית לכל התערבות ולא מונח כ"ככל שיותר, כך טוב".

## המתמטיקה

```
MPR = Σ days' supply dispensed / days in period × 100   (can exceed 100%;
      overestimates via early refills)
PDC = days covered by supply / days in period × 100     (capped at 100%;
      the conservative, CMS-preferred estimator)
Digital adherence = actual usage events / prescribed usage events × 100
Persistence       = days from initiation to discontinuation
                    (report % persistent at N months; survival methods)

Value gating: realized outcome ≈ efficacy × g(adherence)
  where g is the dose-response function; below the minimum effective
  dose, g ≈ 0 — cost incurred, benefit forfeited
```

## דוגמה מחושבת

מוצר דיגיטלי של CBT לנדודי שינה, שנרשם כ-6 מודולים במשך 6 שבועות; יעילות בניסוי של 0.025 QALY בקרב מי שהשלימו ≥4 מודולים (המינון האפקטיבי המינימלי שנקבע אמפירית):

```
1,000 prescriptions at £250 → £250,000 payer spend
Module completion: ≥4 modules 38%; 1–3 modules 34%; zero modules 28%

QALYs realized = 1,000 × 0.38 × 0.025 = 9.5
Cost per QALY  = 250,000 / 9.5 ≈ £26,300 — marginal at NICE thresholds

Adherence engineering (reminders redesign, session shortening) lifts
≥4-module completion to 50%: 12.5 QALYs → £20,000/QALY. The product
crossed the funding threshold without touching the therapy content.
```

בתמחור מבוסס ביצועים בסגנון 2026, אותו שינוי מזיז ישירות את *ההכנסות* — הנדסת היענות הופכת למפת הדרכים המסחרית.

## הקשר להנדסת תוכנה

שני אוצרות מילים מתכנסים למושג אחד: אנליטיקת תוכנה ([הפעלה](../הפעלה-וקליטה/), [דבקות](../מדדי-מעורבות/), [שימור](../שימור-ונטישה/)) ורוקחות קלינית (MPR, PDC, התמדה) מודדות שתיהן חשיפה להתערבות — מפו את אירועי המוצר שלכם אל המילון הקליני והמשלמים יוכלו לקרוא את הלוחות שלכם. ההנדסה שולטת במנופי ההיענות: לוגיקת תזכורות (פינגים יומיים טיפשיים מאמנים לדחות; תזמון אדפטיבי לא), עלות מפגש (מודול של 20 דקות מושלם פחות מ-3 מודולים של 7 דקות), וטלמטריית חיכוך שמאתרת *היכן* בפרוטוקול המשתמשים נושרים. הטמיעו מדידת מינון-תגובה מהיום הראשון — ניתוח המינון האפקטיבי המינימלי, שמהווה שער לכל המודל הכלכלי, דורש נתוני שימוש המקושרים לתוצאה שרק המוצר יכול לאסוף.

## מלכודות נפוצות

- **ערבוב MPR/PDC**: MPR מנפח; ציינו באיזה אומד השתמשתם והשתמשו ב-PDC לכל דבר שפונה למשלמים.
- **היענות למדד, לא לטיפול**: פתיחות שנספרות כמנות (ראו [מדדי מעורבות](../מדדי-מעורבות/)).
- **יעדי מעורבות של "יותר זה יותר טוב"** כשלהתערבות יש מינון סופי — סיום מוצלח הוא הצלחה, שימוש נצחי אינו.
- **טענות יעילות מבוססות ניצולים**: תוצאות בקרב המשתפים פעולה כוללות אפקטי בחירה (אנשים צייתנים שונים); אומדן סיבתי כן דורש הקצאה אקראית או התאמה זהירה.

## מקורות

- MPR vs PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA adherence findings, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
