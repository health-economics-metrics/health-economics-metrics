# פריון מפתחים בעידן הבינה המלאכותית

מדדים למה שסיוע קידוד מבוסס בינה מלאכותית עושה בפועל לתפוקה ההנדסית: שיעורי קבלת הצעות, האצות במחקרים מבוקרים, תפוקת PR ושימור קוד. בסיס הראיות סותר באמת — מה שהופך אותו למקרה מבחן מושלם להבחנה בין יעילות ניסויית (efficacy) ליעילות בפועל (effectiveness), שכלכלת הבריאות נבנתה כדי להתמודד איתה.

## למה זה חשוב

שני המחקרים המבוקרים המצוטטים ביותר מצביעים בכיוונים מנוגדים:

- **Peng et al. 2023 (ניסוי RCT של GitHub Copilot)**: מפתחים השלימו משימת שרת HTTP מאפס **מהר ב-55.8%** עם Copilot (שעה ו-11 דקות לעומת 2 שעות ו-41 דקות, n=95).
- **METR 2025 RCT**: מפתחי קוד פתוח מנוסים שעבדו על *המאגרים הבוגרים שלהם עצמם* היו **איטיים ב-19%** עם כלי בינה מלאכותית מראשית 2025 (16 מפתחים, 246 משימות) — בעודם *מאמינים* שהם מהירים ב-20%.

שני המחקרים טובים. הסתירה היא הממצא: יעילות במשימות מאפס אינה עוברת ליעילות בבסיס קוד בוגר, ותועלת *נתפסת* אינה תחליף לתועלת נמדדת. לרפואה יש שמות לשתי התופעות (ניסויים מסבירים מול פרגמטיים; בעיית הפלצבו) ומנגנונים להתמודד איתן.

## המתמטיקה

```
Acceptance rate  = accepted suggestions / shown suggestions
                   (GitHub telemetry ~30% avg; varies: SQL 45%, Python 35%, JS 28%)
Retention rate   = AI code surviving to merge / accepted AI code (~88% reported)
Speedup          = (t_control − t_AI) / t_control  (from controlled comparison ONLY)
Throughput delta = Δ merged PRs/dev/week (GitHub/Accenture field data: +8.7%)

Value model     = devs × time saved × loaded rate × utilization factor
                  — every term needs local measurement; see the tornado in
                  sensitivity-analysis.md, where time-saved dominates all
                  other parameters combined
```

## דוגמה מחושבת

ארגון בן 500 מפתחים מפעיל פיילוט של עוזר עם בקרה מסודרת (צוותים תואמים, 3 חודשים, מדדים שנרשמו מראש):

```
Pilot result: PR cycle time −18%; merged PRs +6%; CFR unchanged;
              self-reported time saved 45 min/day; measured task-level ≈ 15 min/day

Value the MEASURED number: 500 × 0.25h × 220d × £60 × 0.6 utilization
                          ≈ £990,000/year capacity (non-cash-releasing)
Cost: 500 × £39/mo × 12 ≈ £234,000/year
Net capacity ratio ≈ 4:1 — fundable, at one-third the self-reported claim.
```

הפער פי 3 בין הנתפס לנמדד הוא ממצא METR בשטח; תקצוב על סמך דיווח עצמי היה מכפיל פי שלושה את שורת התועלת.

## הקשר להנדסת תוכנה

היבוא מכלכלת הבריאות לכל מי שמעריך כלי בינה מלאכותית: הריצו **ניסויים פרגמטיים** (בסיס הקוד שלכם, המהנדסים שלכם, כרטיסים אמיתיים — לא משימות הדגמה של ספקים); התייחסו ל**שיעור הקבלה כמדד תחליפי, לא כתוצאה** (זהו ה-[PPV](../הערכת-בינה-מלאכותית-קלינית/) של ההצעות מנקודת מבטו של המפתח — קבלה גבוהה עם שימור נמוך היא אבחון-יתר); צרפו לכל רווח תפוקה **בדיקת יציבות** (DORA 2025: בינה מלאכותית מעלה תפוקה, פוגעת ביציבות — התערבות עם תופעות לוואי דורשת ניתוח תועלת נטו, לפי [מדדי DORA](../מדדי-dora/)); וסווגו את התועלת ביושר כקיבולת ([משחררת מזומן לעומת שאינה משחררת מזומן](../חיסכון-משחרר-מזומן-לעומת-חיסכון-שאינו-משחרר-מזומן/)).

## מלכודות נפוצות

- **השתלת מחקרי ספקים**: מספרי RCT של עבודה מאפס שמיושמים על עבודה בבסיס קוד ישן — בדיוק הטעות שמחקר METR חשף.
- **דיווח עצמי כמדידה**: פער התפיסה של 20 נקודות האחוז הוא ההטיה הגדולה ביותר הידועה בספרות זו.
- **ניפוח פעילות**: יותר PR ויותר קוד הם פעילות, לא תוצאות ([SPACE](../space-ו-devex/)); שלבו עם עבודה חוזרת ו-CFR.
- **התעלמות מעקומת הלמידה**: מדידות בשבוע 2 לוכדות אפקטי חידוש בשני הכיוונים; מדדו במצב יציב ([אופק זמן](../אופק-זמן/)).

## מקורות

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>
