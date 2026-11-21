# החזר על השקעה בבינה מלאכותית

החזר על השקעה בבינה מלאכותית (AI ROI) הוא התשואה הניתנת למדידה ברווח והפסד שניתן לייחס ליוזמות בינה מלאכותית. אמת המידה המפכחת: מחקר "GenAI Divide" של MIT מ-2025 מצא שלמרות השקעה ארגונית של $30–40 מיליארד ב-GenAI, **כ-95% מהפיילוטים לא הראו תשואה מדידה ברווח והפסד** — ול-5% המצליחים היו הרגלים משותפים שניתן לזהות.

## למה זה חשוב

למערכות בריאות יש שם לדפוס פיילוט הבינה המלאכותית: **פיילוטיטיס** — בית הקברות של ה-NHS לאפליקציות מבטיחות שנוסו לנצח ולא הורחבו לעולם. ממצאי MIT מתיישבים היטב עם מה שהערכת טכנולוגיות בריאות כבר יודעת: טענות ערך צריכות נקודות קצה שנקבעו מראש, ייחוס צריך קבוצות השוואה, ו"כולם מרגישים שזה עוזר" אינו שורת תועלת. המיעוט המצליח בנתוני MIT התרכז באוטומציה של משרד אחורי עם קווי בסיס עלות שניתנים למעקב, ו**כלים שנרכשו הצליחו כ-67% מהמקרים לעומת בנייה פנימית בכשליש מכך** — הסתברויות מוקדמות שמקומן בכל תיק השקעה בבינה מלאכותית (ראו [לבנות או לקנות](../לבנות-או-לקנות/)).

## המתמטיקה

```
AI ROI = (attributable benefit − total AI cost) / total AI cost

Total AI cost = licences/inference (see inference-unit-economics.md)
              + integration + data readiness + evaluation
              + workflow redesign + governance/assurance
              (the licence is typically the minority of the denominator)

Attributable benefit: measured against a baseline or control, classed
cash / capacity / quality per cash-releasing-vs-non-cash-releasing.md
```

## דוגמה מחושבת

קבוצת בתי חולים מפעילה בינה מלאכותית בשני מקרי שימוש:

```
Use case A — clinical-letter drafting (back office, trackable):
  baseline: outsourced transcription £380k/yr
  after:    transcription contract cancelled; clinician review time +£60k
  AI cost:  £120k/yr all-in
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — cash-releasing, auditable ✓

Use case B — "AI copilot for clinicians" (broad, untracked):
  benefit claim: "saves time across 4,000 staff" — no baseline captured
  measured P&L effect: none demonstrable
  → the 95% bucket, regardless of whether it actually helps
```

ההבדל אינו איכות הבינה המלאכותית — אלא האם לתועלת היו **קו בסיס, בעלים ושורת תקציב** ([מימוש תועלות](../מימוש-תועלות/)).

## הקשר להנדסת תוכנה

ספר המשחקים בדגם HTA להשקעה בבינה מלאכותית: **דרגו את הראיות כמו [דרגות ה-ESF של NICE](../מסגרת-תקני-הראיות-של-nice/)** — ראיות ברמת הדגמה לכלים בסיכון נמוך, פיילוטים מבוקרים לפני הוצאה ארגונית רחבה, עם שערי פריסה שנקבעו מראש (דפוס הרישום הזמני עם מועד אחרון של [DiGA](../המסלול-המהיר-diga-של-גרמניה/)); **ספרו הימנעות מעלות כפי שכלכלת בריאות סופרת הימנעות מביקוש** — אמיתית רק כששורת תקציב מסוימת זזה; ו**תמחרו את הפיילוט עצמו באמצעות [EVPI](../ערך-צפוי-של-מידע-מושלם/)** — פיילוט שאינו יכול לשנות את החלטת הפריסה שווה £0. לפרוסת כלי המפתחים בפרט, ראו [פריון מפתחים בעידן הבינה המלאכותית](../פריון-מפתחים-בעידן-הבינה-המלאכותית/).

## מלכודות נפוצות

- **פיזור תועלת**: ערך שמרוח דק על פני אלפי משתמשים אינו ניתן למדידה מעצם הגדרתו; בחרו מקרי שימוש עם קווי בסיס מרוכזים וניתנים למעקב.
- **תמחור לפי רישיון בלבד**: אינטגרציה, הערכה ועיצוב מחדש של זרימות עבודה שולטים בדרך כלל במכנה האמיתי.
- **גניבת ייחוס**: בינה מלאכותית שמופעלת לצד עיצוב מחדש של תהליכים תובעת את כל השינוי.
- **הסלמת פיילוט שקוע**: הארכת פיילוטים שנכשלו כי עצירה משמעה הודאה בכישלון — תאריך השקיעה חייב להיקבע מראש.

## מקורות

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
