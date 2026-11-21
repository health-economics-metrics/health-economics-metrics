# אימות מכשירים לביש

מדדי אימות מכמתים עד כמה מדידות של מכשיר לביש מתיישבות עם תקן זהב קליני (ECG לדופק, פוליסומנוגרפיה לשינה): **MAPE**, מתאם התאמה, הסכמת Bland–Altman — ולצדם המדדים התפעוליים שמשערים את איכות הנתונים בעולם האמיתי: **ציות לזמן לבישה** ו**שלמות נתונים**.

## למה זה חשוב

אימות הוא תנאי מוקדם לכל מה שבא אחריו: מכשיר שאינו יכול להוכיח הסכמה עם מדידת ייחוס אינו יכול לעגן [נקודות קצה דיגיטליות](../נקודות-קצה-דיגיטליות-וסמנים-ביולוגיים/), לתמוך ב[חיוב RPM](../כלכלת-ניטור-מטופלים-מרחוק/) או לשאת טענות קליניות. הספים המקובלים בתחום לדופק: **MAPE ≤5%** (מחמיר) או **≤10%** (מקל) מול ECG. נקודות ייחוס מהספרות: Oura Gen 3 דופק במנוחה MAPE 1.67% (CCC 0.97); Fitbit Charge 6 MAPE כ-5.5% — מכשירי צריכה חוצים כעת את גבול הדרגה הקלינית, וזו בדיוק הסיבה שהמדידה חשובה לכל מכשיר ולכל מצב.

## המתמטיקה

```
MAPE = (1/n) Σ |measured_i − reference_i| / reference_i × 100

CCC (concordance correlation) = agreement including both correlation
      and systematic bias (Pearson r penalized by location/scale shift)

Bland–Altman: mean bias ± 1.96 SD limits of agreement — shows whether
      error depends on the value's magnitude

Operational gates:
Wear-time compliance = time worn / protocol time × 100
Data completeness    = observed data points / expected × 100
```

יש לדווח על אימות **לכל תנאי פעילות** (מנוחה, תנועה, שינה) ולכל אוכלוסייה — חישה אופטית PPG מתדרדרת עם ארטיפקט תנועה, מגע גרוע וגווני עור כהים יותר, כשל מתועד הרלוונטי לשוויון.

## דוגמה מחושבת

תוכנית מחלקה וירטואלית בוחרת לביש לניטור. מועמד A: MAPE במנוחה 2.1%, MAPE במאמץ 11.4%. מועמד B: מנוחה 3.8%, מאמץ 6.9%.

```
Use case: deteriorating-patient detection at home — alerts trigger on
sustained elevated HR, often during activity.
Candidate A's headline (2.1%) wins the brochure; candidate B wins the
use case: at the alert-relevant condition (motion), A's 11.4% error
at HR 100 = ±11 bpm — spanning the entire alert threshold band,
generating false escalations (each a nurse callout, ~£40) or misses.

False-alert economics: 500 patients × 2 extra false alerts/week × £40
= £2.08M/year of error cost from choosing the wrong validation number.
```

## הקשר להנדסת תוכנה

מהנדסים צורכים נתוני אימות כשהם בוחרים חיישנים ו*מפיקים* אותם כשהם בונים פיצ'רי מדידה — שני התפקידים דורשים אותה משמעת: בדקו בתנאי הפריסה, לא בתנאי הדמו (האנלוג בתוכנה: בנצ'מרק על עומס העבודה בייצור שלכם, לא של הספק). זמן לבישה ושלמות הם תוצאות של הנדסת מוצר — נוחות, חיי סוללה, עיצוב טקס הטעינה ואמינות הסנכרון קובעים אם שער החיוב של 16 ימים מתוך 30 ב-RPM מתקיים ([כלכלת ניטור מטופלים מרחוק](../כלכלת-ניטור-מטופלים-מרחוק/)) והאם ניתן לנתח את מערכי נתוני הניסוי. התייחסו לחוסר נתונים כאות מתוכנן: הבדילו בסכמה מהיום הראשון בין "לא נלבש", "נלבש אך אין אות" ו"הסנכרון נכשל" — כשהם מקופלים ל-null, הם מרעילים כל ניתוח בהמשך.

## מלכודות נפוצות

- **MAPE מצטבר שמסתיר כשל ספציפי לתנאי** — המלכודת בדוגמה המחושבת.
- **אוכלוסיית אימות ≠ אוכלוסיית פריסה**: גיל, גוון עור, רעד והשמנה משנים את שגיאת החיישן האופטי; בדקו את הדמוגרפיה של המחקר.
- **דיווח מתאם היכן שנדרשת הסכמה**: Pearson r גבוה עם הטיה שיטתית עדיין מסווג שגוי מול ספים מוחלטים — התעקשו על CCC/Bland–Altman.
- **שלמות מנופחת באמצעות השלמה**: פערים שמולאו מדווחים כנתונים שנצפו.

## מקורות

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
