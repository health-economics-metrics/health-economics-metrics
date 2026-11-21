# תוצאות מדווחות על ידי מטופל (PROMs, PREMs, MCID)

PROMs הם מכשירים סטנדרטיים שבהם מטופלים מדווחים על מצב הבריאות שלהם (תסמינים, תפקוד, איכות חיים); PREMs לוכדים את *חוויית* הטיפול. ה-**MCID** — ההפרש הקליני החשוב המינימלי — הוא שינוי הציון הקטן ביותר שמטופלים תופסים בפועל כמועיל: הרף שכל שיפור נטען חייב לעבור.

## למה זה חשוב

PROMs הם מטבע היעילות הראשי של בריאות דיגיטלית: אפליקציות לעיתים רחוקות מזיזות תמותה, אך הן יכולות להזיז באופן אמין ציוני תסמינים מאומתים. המכשירים החשובים מעטים וסטנדרטיים — **PHQ-9** (דיכאון, 0–27; רצועות חומרה ב-5/10/15/20), **GAD-7** (חרדה, 0–21; רצועות ב-5/10/15), **EQ-5D** (תועלתנות ל-[QALY](../שנת-חיים-מתוקנת-איכות/)) — ורגולטורים, גופי HTA ומשלמים מקבלים אותם דווקא משום שהם ברי השוואה בין מוצרים וניסויים. ה-MCID הוא שער הכנות: MCID של PHQ-9 ≈ 5 נקודות, GAD-7 ≈ 4, מדד EQ-5D לרוב ~0.03–0.08 — שינוי PHQ-9 מובהק סטטיסטית של 1.5 נקודות במדגם גדול הוא *אמיתי אך חסר משמעות קלינית*, וסוקר ראיות יאמר זאת.

## המתמטיקה

```
PROM scoring: instrument-specific sums (e.g., PHQ-9 = Σ 9 items × 0–3)

MCID estimation:
  anchor-based:      score change among patients who report "somewhat better"
  distribution-based: ≈ 0.5 × SD of baseline scores (rough heuristic)

Response rate framing (for trials and dossiers):
  responder = patient improving ≥ MCID (or ≥50% for PHQ-9 convention)
  NNT = 1 / (responder rate_treatment − responder rate_control)
  — see number-needed-to-treat.md
```

## דוגמה מחושבת

אפליקציית תמיכה בדיכאון, RCT מול רשימת המתנה, 12 שבועות:

```
PHQ-9 change: app −6.2 points, control −2.1 → adjusted difference −4.1
MCID check: 4.1 < 5 → mean difference below MCID; report responders instead:
  responders (≥5-point drop): app 48%, control 22% → ARR 26%
  NNT = 1/0.26 ≈ 4 — four users treated per additional clinical response

Economic bridge: responders' EQ-5D gain 0.06 sustained 6 months
  = 0.03 QALYs; per 1,000 users: 260 extra responders × 0.03 = 7.8 QALYs
  ≈ £156,000–£234,000 of health value at NICE thresholds
```

מסגור המגיבים/NNT שורד סקירה, בעוד שההפרש הממוצע מתחת ל-MCID היה נדחה.

## הקשר להנדסת תוכנה

PROMs הם בעיית איסוף נתונים שתוכנה ממוקמת באופן ייחודי לפתור: למכשירים בתוך האפליקציה יש שיעורי השלמה וצפיפות אורכית שנייר לא השיג מעולם, והופכים טלמטריית מוצר שגרתית לראיות ברמת HTA ([EQ-5D](../eq-5d/) הוא חמישה מסכים). כללים הנדסיים: השתמשו במכשיר המאומת *מילה במילה* (ניסוח מחדש פוסל אותו — חל רישוי); תזמנו מדידה לפי פרוטוקול, לא נוחות מעורבות (מדידת משתמשים פעילים בלבד היא הטיית ניצולים — ראו [שימור](../שימור-ונטישה/)); ונעלו גרסה של נתוני מכשיר כמו כל סכמה — שינוי ניסוח באמצע מחקר הוא השחתת נתונים. PREMs ממפים למכשירים בסגנון CSAT/NPS, ואותו לקח חל: סטנדרטי מנצח תוצרת בית בכל מקום שהקהל הוא משלם. למכשיר ספציפי לפריון בעבודה, ראו [WPAI](../ליקוי-בפריון-עבודה-ובפעילות/).

## מלכודות נפוצות

- **מובהקות סטטיסטית מתחת ל-MCID** המוצגת כתועלת קלינית — הניפוח הנפוץ ביותר בתחום.
- **רגרסיה לממוצע**: משתמשים נרשמים בשיאי תסמינים; לפני/אחרי חד-זרועי מעריך ביתר מאוד — קבוצות השוואה אינן ניתנות למשא ומתן.
- **קניות מכשירים**: הרצת PHQ-9, GAD-7 ו-WHO-5, ואז דיווח על מה שזז — רשמו מראש את הראשי.
- **לחץ בסקר הסכמה דיגיטלית**: דחיפת משתמשים לתגובות חיוביות משחיתה את המכשיר (והסוקרים מכירים את שיעורי הבסיס).

## מקורות

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
