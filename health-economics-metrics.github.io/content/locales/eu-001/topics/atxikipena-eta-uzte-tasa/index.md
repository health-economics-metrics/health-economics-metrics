# Atxikipena eta uzte-tasa (Retention and Churn)

Atxikipenak neurtzen du erabiltzaile-kohorte baten zer zati dagoen oraindik aktibo hasi eta N egunera (D1/D7/D30 kurbak); churn (uzte-tasa) haren osagarria da. Osasun digitalaren oinarri latza: **osasun-aplikazioetako erabiltzaileen ~%90k 30 egunen barruan uzten du** — osasun digitalaren D30 atxikipena ~%3–4 da, aplikazio guztien batez besteko ~%6aren aurrean.

## Zergatik axola duen

Eysenbachek 2005ean izendatu zuen: **atxikipen-galeraren legea** (law of attrition) — erabiltzaileak tasa handietan galtzea eHealth esku-hartzeen berezko propietate estrukturala da, ez inplementazio-akatsa, eHealth saiakuntzetako galerak %50 maiz gainditzen dituelarik. Ondorio ekonomikoa osoa da: atxikipenak edozein onura entregatu daitekeen *tratamendu-leihoa* definitzen du, eta [unitate-ekonomia](../osasun-aplikazioen-unitate-ekonomia/) ere bai: 12 egun geratzen den erabiltzaile bakoitzeko ordaindutako CACk ez du LTVrik ez QALYrik entregatzen. Kontsumo-osasun produktu baterako atxikipen-kurbaz onurak pisatzen ez dituen edozein eredu ekonomikok existitzen ez den produktu bat deskribatzen du.

## Matematika

```
Retention_Dn = users active on day n / cohort size × 100
Churn rate   = users lost in period / users at period start × 100

Benefit weighting (the health-economics move):
  expected benefit per acquired user = Σ_t retention(t) × benefit rate(t)
  ≈ area under the retention curve × per-time benefit
  — NOT trial benefit × 100% of acquired users

Cost per retained-at-D30 user = CAC / D30 retention
  (at 4% D30, a £5 CAC is really £125 per retained user)
```

## Adibide landua

Osasun mentaleko aplikazio bat: saiakuntzak 0.02 QALY irabazi erakutsi zuen 8 aste osatzen dituen erabiltzaile bakoitzeko. 100,000 deskargako hedapen-kohortea, atxikipena D7 %25, D30 %8, 8. astea %4:

```
Completers          = 100,000 × 0.04 = 4,000
QALYs delivered     = 4,000 × 0.02 = 80  (not 100,000 × 0.02 = 2,000)
At £20,000/QALY     = £1.6M of health value (not £40M)

Per-download health value = £16 — the number that should set what a
payer will pay per download, and it is 4% of the naive claim.
Retention improvement case: moving week-8 completion 4% → 6% adds
40 QALYs/year ≈ £800k — retention engineering IS health production.
```

## Software ingeniaritzarekin lotura

Atxikipena produktu-ingeniaritzak osasun-balioa zuzenen fabrikatzen duen metrika da, goiko aritmetikaren arabera. Mugitzen duten praktikak arruntak dira: lehen baliorako onboarding-denbora, berriro-konpromisoaren diseinua, errendimendua, eta funtsezkoa dena, **dosiaren osaketa planifikatua** — amaiera zehaztua duen programak (8 aste, gero graduazioa) *osaketa* neurtu behar du, ez betiereko DAU, metrika publizitatez finantzatutako arreta-ereduarekin ez baizik eredu klinikoarekin lerrokatuz. Biziraupen-analisia da tresna-multzo egokia ([bizi-urte irabazien](../irabazitako-bizi-urteak/) Kaplan-Meier matematika bera); segmentatu kurbak eskuratze-kanalaren arabera, kanal-nahasketak eginbide gehienek baino gehiago aldatzen baitu atxikipena.

## Tranpak

- **Intention-to-treat zuritzea alderantziz**: saiakuntzek osatzaileak jakinarazten dituzte; hedapenaren ekonomiak eskuratutako guztiak zenbatu behar ditu (Eysenbachen oinarrizko oharra).
- **Atxikipen-antzerkia**: jakinarazpenek eragindako erabiltzaile "aktiboak" ekintza terapeutikoa inoiz egiten ez dutenak (ikus [konpromiso-metrikak](../engagement-metrikak/)).
- **Kurbak definizioen artean alderatzea**: "aktibo" irekitzea vs ekintza esanguratsua gisa definituta D30 halako zenbatetan aldatzen da.
- **Nork uzten duen ez ikustea**: gaixoenak azkarren uzten badute, erabiltzaile bakoitzeko onurak jaisten dira osasuntsuen artean atxikipena hobetzen den heinean — parekatu kurbak kasu-nahasketarekin (ikus [irismena eta ekitatea](../irismena-eta-ekitatea/)).

## Iturriak

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
