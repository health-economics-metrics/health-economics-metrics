# Sveikatos programėlių vieneto ekonomika

Vartotojų sveikatos produktų komercinė aritmetika: klientų pritraukimo kaina (CAC), gyvavimo ciklo vertė (LTV), vidutinės pajamos vienam vartotojui (ARPU), kainodara vienam nariui per mėnesį (PMPM) ir darbdavių rinkos skirtumas tarp **ROI ir VOI** (vertė investicijai).

## Kodėl tai svarbu

Sveikatos programėlės patiria struktūrinį spaudimą: pritraukimas brangus (reguliuojami teiginiai, pasitikėjimo barjerai, atitikties kaštai), o išlaikymas yra prasčiausias iš visų programinės įrangos vertikalių (~90 % atsisakymas per 30 dienų – žr. [išlaikymas ir nutekėjimas](../išlaikymas-ir-nutekėjimas/)). Standartinis gyvybingumo testas – **LTV:CAC ≥ 3:1** – todėl yra žiauriai sunkus vartotojų sveikatoje, ir todėl pramonė migruoja link B2B2C modelių: darbdavių, draudikų ir sveikatos sistemų, mokančių PMPM už populiacijas, kur pirkėjas nėra nutekantis individas.

## Matematika

```
CAC   = sales + marketing spend / new paying customers
ARPU  = revenue / active users (per period)
LTV   = ARPU × average lifetime  =  ARPU / churn rate
Viability: LTV : CAC ≥ 3, payback period ≤ 12–18 months

Effective CAC per retained user = CAC / retention(t)
  — at 4% D30 retention, £5 per install = £125 per 30-day-retained user

PMPM revenue = rate × enrolled members × months
  vendor margin = PMPM − cost-to-serve per member per month
  — engagement flips sign: under B2C subscriptions engagement drives
    revenue; under PMPM, engaged members COST more to serve than
    dormant ones, and outcomes contracts flip it back again
```

## Išspręstas pavyzdys

B2C miego programėlė: 6,99 £/mėn., mėnesinis nutekėjimas 18 %, mišri CAC 38 £.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — non-viable

Pivot to employer PMPM: £1.20 PMPM × 40,000 covered lives = £48k/month
Cost-to-serve: infrastructure £0.15 + support £0.10 + content £0.05
  per member ≈ £0.30 → margin ~75%, sales cycle long but churn is
  contract-level (annual), not user-level (daily)

The employer's question shifts the metric: hard-dollar ROI (reduced
claims, absenteeism) is rarely demonstrable for wellness products —
the industry answer is VOI: productivity, recruitment appeal,
engagement — which is honest only when labelled as VOI, not dressed
as ROI (see return-on-investment.md and social-return-on-investment.md).
```

## Ryšys su programinės įrangos inžinerija

Inžineriniai pasirinkimai nustato abi santykio puses: **aptarnavimo kaina** yra architektūra ([debesijos vieneto ekonomika](../debesijos-vieneto-ekonomika/) – PMPM marža gyvuoja ar žūsta nuo vieno nario infrastruktūros kainos), o **LTV** yra išlaikymo inžinerija (kiekvienas nutekėjimo taškas yra aritmetinės pajamos – [išlaikymo](../išlaikymas-ir-nutekėjimas/) dokumento QALY matematika turi tikslų pajamų dvynį). Konkrečiai sveikatos produktams vieneto ekonomikos skydelyje šalia LTV ir CAC turėtų būti trečia eilutė: **sveikatos vertė vienam pritrauktam vartotojui** (išlaikymu svertas QALY × slenkstis) – nes mokėtojų ir DiGA tipo rinkos vis dažniau kainuoja pagal tai, ir nes produktas, kurio komercinė ir klinikinė vieneto ekonomika išsiskiria (pelningas, bet sveikatai inertiškas, ar veiksmingas, bet nefinansuojamas), turi žinoti, kokią problemą turi.

## Spąstai

- **LTV iš ankstyvos kohortos nutekėjimo**: nutekėjimas stabilizuojasi žemyn; bet ir išgyvenusiųjų šališkumas – ankstyvieji vartotojai išlieka geriau nei išplėsta auditorija. Naudokite subrendusių kohortų duomenis.
- **CAC, sumaišyta tarp kanalų**: mokamo socialinio tinklo CAC ir gydytojo siuntimo CAC skiriasi 10×, su priešingais išlaikymo profiliais – segmentuokite arba būsite klaidinami.
- **PMPM be naudojimo ribų**: itin įsitraukę nariai gali apversti maržas; modeliuokite skirstinį, o ne vidurkį.
- **VOI, pateikta kaip ROI** finansų direktoriui – patikimumo nesėkmė, kurią darbuotojų gerovės pramonė uždirbo per dešimtmetį.

## Šaltiniai

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
