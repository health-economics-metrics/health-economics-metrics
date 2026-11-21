# לבנות או לקנות

"לבנות או לקנות" היא השוואה מובנית בין פיתוח מותאם לרכישה מסחרית, על בסיס [TCO](../עלות-בעלות-כוללת/) מהוון, זמן אספקה וסיכון. הסתברויות המוקדמות האמפיריות חד-צדדיות: **עלויות בנייה בפועל חורגות בדרך כלל מהתחזיות ב-30–40%**, פתרונות שנרכשים נפרסים מהר ב-40–60%, ומחקר ה-GenAI של MIT מ-2025 מצא שכלי בינה מלאכותית שנרכשו הצליחו בכ-67% מהמקרים בעוד בנייה פנימית הצליחה בכשליש מכך.

## למה זה חשוב

מערכות בריאות ניצבות בפני ההחלטה הזו כל הזמן ("לייצר או להזמין" בשפת ה-NHS), וארגוני הנדסה טועים בה שיטתית לכיוון הבנייה — כי הבונים מעריכים את הבנייה, לא את ה-[TCO](../עלות-בעלות-כוללת/), ומפני שלבנות זה יותר כיף. המסגרת הכלכלית כופה השוואה כנה: שתי האפשרויות מתומחרות על אותו אופק, שתיהן מותאמות לסיכון, ו*הפרש הזמן מתומחר כ[עלות עיכוב](../עלות-עיכוב/)* — האיבר שמכריע הכי הרבה פעמים והכי הרבה פעמים מושמט.

## המתמטיקה

```
Compare over the same 3–5 year horizon, discounted:

NPV_option = PV(benefits, shifted by time-to-value) − PV(TCO)

Risk adjustments (Green Book "optimism bias" pattern):
  build cost × 1.3–1.4        (overrun prior)
  build time-to-value + 40–60% (deployment delay prior)
  buy: add integration reality-check and exit costs instead

Decision drivers, in the order they usually decide:
  1. differentiation — is this capability your product, or plumbing?
  2. time-to-value × CoD
  3. risk-adjusted TCO
```

## דוגמה מחושבת

נאמנות זקוקה למערכת הסכמה אלקטרונית. קנייה: SaaS ב-£150k לשנה, באוויר תוך 3 חודשים. בנייה: הערכה של £600k + £120k לשנה תחזוקה, באוויר תוך 12 חודשים.

```
Risk-adjusted build: 600k × 1.35 = £810k; time-to-value ≈ 18 months
5-yr TCO:  buy = 150k × 5 = £750k
           build = 810k + 120k × 5 = £1,410k
Delay term: consent digitization saves £25k/month; build arrives 15 months
            later → CoD = 15 × 25k = £375k

Effective comparison: £750k vs £1,785k — buy wins by ~£1M, and the largest
single term after the build itself is the delay cost nobody had priced.
```

בנייה נשארת נכונה כשהיכולת מבדלת (האלגוריתם המרכזי של המוצר שלכם), כשאף ספק אינו עומד באילוץ קשיח (בטיחות קלינית, מקום שהות נתונים), או כשסיכון הנעילה לספק חמור ומתומחר.

## הקשר להנדסת תוכנה

הדיסציפלינה הניתנת להעברה מכלכלת הבריאות היא משולשת: **התאמת סיכון מבוססת הסתברות מוקדמת** (תוספת חריגה של 30–40% היא הטיית האופטימיות של Green Book בתוכנה — יישמו אותה מכנית, וטענו לחריגים במקום להתחיל מהם); **כנות בקבוצת ההשוואה** (האלטרנטיבה לבנייה אינה "כלום" אלא הרכישה הטובה ביותר הזמינה — ראו [עלות הזדמנות](../עלות-הזדמנות/)); ו**בדיקת שקילות לפני השוואת עלויות** (אם הקנייה והבנייה עומדות באמת באותה מפרט, זהו [ניתוח מזעור עלויות](../ניתוח-מזעור-עלויות/) והזול מנצח; אם לא, הפרש התוצאה חייב להיות מוערך, לא מוצהר).

## מלכודות נפוצות

- **השוואת מחיר מחירון של ספק להערכות בנייה שלא הותאמו לסיכון** — חנופה כפולה לכיוון הבנייה.
- **עבודה פנימית בתמחור אפס** ("הצוות כבר כאן").
- **נעילה לא מתומחרת בשני הכיוונים**: עלויות יציאה מספק, אך גם גורם האוטובוס של הבנייה וחיי התחזוקה שלה.
- **בנייה מונעת-זהות**: "זה ליבה אצלנו" נטען על אינסטלציה — בדקו בידול מול השאלה אם לקוחות היו שמים לב.

## מקורות

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
