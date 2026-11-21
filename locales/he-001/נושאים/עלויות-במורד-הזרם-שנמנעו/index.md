# עלויות במורד הזרם שנמנעו

עלויות במורד הזרם שנמנעו (קיזוזי עלות) הן הוצאות טיפול עתידיות שנמנעו הודות לפעולה מוקדמת או טובה יותר, בניכוי עלות ההתערבות עצמה. קיזוזים הם המנגנון שבאמצעותו התערבות יכולה להפוך ל*דומיננטית* — זולה **וגם** טובה יותר — והם גם השורה הנספרת כפול והמנופחת ביותר בכלכלת הבריאות.

## למה זה חשוב

כמעט בכל הצעת ערך של בריאות דיגיטלית יש טענת קיזוז: "האפליקציה שלנו מונעת אשפוזים", "ההתראות שלנו מונעות הידרדרות", "הפלטפורמה שלנו נמנעת מבדיקות כפולות". כשהקיזוזים אמיתיים הם משנים את הכלכלה (ראו את הדוגמה המחושבת של [ICER](../יחס-עלות-אפקטיביות-מצטבר/), שבה קיזוז של £600k הוא שמכריע את התיק). המשלמים יודעים זאת — ולכן טענות קיזוז מושכות את הבחינה הקפדנית ביותר בכל הערכה. כללי האמינות שלהלן מבדילים בין מודל שניתן לממן לבין שיווק.

## המתמטיקה

```
Net cost = intervention cost − Σ offsets

A valid offset must be:
  Attributable — causally linked to the intervention (comparator evidence)
  Marginal     — the money actually stops being spent, at marginal not
                 average cost (see marginal-vs-average-cost.md)
  Probability- — weighted by P(the downstream event would have occurred)
  weighted
  Discounted   — future avoided costs at present value
  Unique       — counted once, in one benefit line
```

## דוגמה מחושבת

"טענת סיכון ההגירה הזו, נעשית נכון": אפליקציית ניטור פצעים ל-5,000 מטופלים לאחר ניתוח טוענת שהיא מונעת אשפוזים חוזרים עקב זיהום.

```
Baseline readmission for infection: 4.0% ; with app (RCT): 3.1%
Attributable events avoided = 5,000 × 0.009 = 45/year
Cost per readmission spell (marginal, this trust): £3,200
Offset = 45 × 3,200 = £144,000/year
App cost = 5,000 × £20 = £100,000/year
Net cost = −£44,000 → genuinely cost-saving, with:
  attribution from an RCT ✓  marginal costing ✓  probability from trial data ✓
```

אותה טענה שנבנית על "אשפוזים חוזרים עולים £5,800 בממוצע, נמנע המון" נכשלת בכל ארבע הבדיקות וראויה לדחייה שהיא מקבלת.

## הקשר להנדסת תוכנה

"ההגירה הזו נמנעת מהכתיבה מחדש העתידית" היא טענת קיזוז, וכללי כלכלת הבריאות הופכים אותה לכנה:

- **עלות נגדית**: כמה תעלה הכתיבה מחדש בפועל, ובאילו ראיות?
- **הסתברות**: עד כמה העתיד הזה סביר? (לא 100% — מוצרים נסגרים, סדרי עדיפויות משתנים.)
- **היוון**: כתיבה מחדש שנמנעה בשנה 4 בהיוון של 3.5–10% שווה הרבה פחות מערכה הנקוב.
- **ייחודיות**: אל תתבעו את אותה כתיבה מחדש שנמנעה גם בשורת החוב הטכני וגם בשורת השימור.

`Offset value = P(future event) × counterfactual cost × discount factor` — כתבו את השורה הזו בהצעה וראו את האומדן הופך לבר-דיון, וזו הנקודה.

## מלכודות נפוצות

- **ספירה כפולה** — אותו אשפוז שנמנע נתבע כקיזוז, כימי מיטה וכ-QALY עם עלות מצורפת.
- **קיזוזים לפי עלות ממוצעת** לאירועים שעלויותיהם הקבועות נמשכות בכל מקרה.
- **הסתברות של 100% שקטה** לאירועים במורד הזרם שהיו רק אפשריים.
- **קיזוזים לתקציבים אחרים** המוצגים כחיסכון למשלם שמתבקש לשלם — ראו [נקודת מבט הניתוח](../נקודת-מבט-הניתוח/).

## מקורות

- York Health Economics Consortium glossary: cost offset. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (offsets rarely exceed costs). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
