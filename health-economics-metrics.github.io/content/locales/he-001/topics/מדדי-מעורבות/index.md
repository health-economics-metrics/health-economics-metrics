# מדדי מעורבות

מדדי מעורבות מודדים כמה משתמשים באמת משתמשים באפליקציית בריאות: דביקות DAU/MAU, תדירות ומשך מפגשים, שימוש בתכונות. בבריאות דיגיטלית מעורבות אינה יהירות — היא **מינון**: החשיפה שדרכה חייבת לזרום כל השפעה קלינית.

## למה זה חשוב

תרופה שנשארת בבקבוק אינה מרפאה איש; אפליקציה שנשארת לא מותקנת או לא פתוחה היא אותו מצב כשל. כל טענה כלכלית-בריאותית למוצר בריאות לצרכן מוכפלת דרך מעורבות — יעילות שהוצגה בניסויים נמדדה ברמת שימוש מסוימת, וערך בעולם האמיתי גדל ככל ששימוש הפריסה מתקרב לרמה הזו. אמות מידה סטנדרטיות במוצרים: DAU/MAU בסביבות **20% נחשב בריא** לאפליקציות סלולר בכלל, >25% יוצא דופן; אפליקציות בריאות נמצאות לרוב נמוך יותר.

## המתמטיקה

```
Stickiness (DAU/MAU) = daily active users / monthly active users × 100
Session metrics      = sessions/user/period; avg duration = total time / sessions
Feature engagement   = users performing key action / active users

Dose-response framing (the health-economics upgrade):
  realized effect ≈ trial effect × f(actual usage / trial usage)
  where f comes from dose-response analysis — see the "effective
  engagement" concept in adherence-and-persistence.md: enough usage
  to achieve the intended outcome, which may be modest and finite
```

## דוגמה מחושבת

המחקר המכריע של אפליקציית לחץ דם הראה הפחתה של 6 מ"מ כספית סיסטולי בקרב משתמשים שרשמו ≥4 מדידות בשבוע. בפריסה על פני 50,000 משתמשים רשומים:

```
MAU 20,000 (40%); of those, logging ≥4×/week: 7,000
Effective-dose users = 7,000 / 50,000 = 14% of the registered base

Population-level effect ≈ trial effect delivered to 14%, not 100%:
any economic model quoting "50,000 users × 6 mmHg" overstates ~7×.
Honest model: 7,000 × full effect + partial credit (from dose-response
data, if any) for the 13,000 sub-threshold users.
```

הכפלה זו — דרך משפך המעורבות עד למינון האפקטיבי — היא המקום הנפוץ ביותר שבו כלכלת בריאות דיגיטלית מנפחת.

## הקשר להנדסת תוכנה

מהנדסים הם הבעלים של משפך המעורבות, מה שהופך אותם לבעלים של משתנה *קליני*: חיכוך קליטה, אסטרטגיית התראות, זמן טעינה וחוסן לא מקוון כולם מזיזים את המינון שמסופק. שתי השלכות עיצוביות: מדדו את **הפעולה המשמעותית קלינית** (מדידות שנרשמו, שיעורים שהושלמו), לא פתיחות — DAU שנבנה על מפגשי קפיצה מהתראות הוא הונאת מינון; והתייחסו ליעדי מעורבות כיעדי *מספיקות*, לא מקסום — אפליקציה שמשיגה את תוצאתה ב-5 דקות בשבוע ויוצאת מהדרך היא אידיאלית קלינית ו"גרועה" מדדית (ראו מעורבות אפקטיבית ב[היענות והתמדה](../היענות-והתמדה/)). הוערכו את עבודת המעורבות עצמה דרך מודל ההשפעה האוכלוסייתית לעיל: רווח של 2 נקודות בחלק המינון האפקטיבי הוא שורת QALY ניתנת לכימות.

## מלכודות נפוצות

- **מעורבות כתוצאה**: שימוש הוא אמצעי; התוצאה היא ה-[PROM](../תוצאות-מדווחות-על-ידי-מטופל/) או נקודת הקצה הקלינית.
- **ממוצעים על שימוש דו-מודלי**: אוכלוסיות אפליקציות בריאות מתפצלות למשתמשים מסורים ורוחות רפאים; ממוצעים מתארים אף אחד — חלקו לקוהורטות.
- **ניפוח מינון בדפוסי חושך**: רצפים והתראות אשמה מעלים מדדים ויכולים לפגוע באוכלוסיות החרדתיות שאפליקציות בריאות משרתות; למוצרים קליניים יש אתיקה קלינית.
- **מקור אמות מידה של ספקים**: רוב אמות המידה למעורבות המפורסמות מגיעות מספקי אנליטיקה, לא מביקורת עמיתים; כיילו מול הניסויים שלכם.

## מקורות

- App engagement benchmarks. <https://getstream.io/blog/app-retention-guide/>
- Health app KPI guides. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. on effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
