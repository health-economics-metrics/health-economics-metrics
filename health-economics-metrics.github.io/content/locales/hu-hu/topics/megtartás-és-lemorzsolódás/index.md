# Megtartás és lemorzsolódás

A megtartás azt méri, egy felhasználói kohorsz mekkora hányada aktív még N nappal az indulás után (D1/D7/D30 görbék); a lemorzsolódás a komplementere. A könyörtelen digitális egészségügyi alapvonal: **az egészségügyi alkalmazások felhasználóinak nagyjából 90%-a 30 napon belül felhagy** — a digitális egészségügyi D30 megtartás ~3–4%, a ~6%-os teljes alkalmazás-átlaggal szemben.

## Miért fontos

Eysenbach ezt 2005-ben nevezte meg: a **lemorzsolódás törvénye** — a felhasználók magas arányú elvesztése az eHealth beavatkozások belső, szerkezeti tulajdonsága, nem megvalósítási hiba, az eHealth vizsgálatokban a lemorzsolódás rutinszerűen 50% fölött van. A gazdasági következmény teljes: a megtartás határozza meg a *kezelési ablakot*, amelyen belül bármely előny szállítható, és az [egységgazdaságtant](../egészségügyi-appok-egységgazdaságtana/) — a 12 napig maradó felhasználónként fizetett CAC sem LTV-t, sem QALY-kat nem hoz. Minden olyan fogyasztói egészségügyi termék gazdasági modellje, amely nem súlyozza az előnyöket a megtartási görbével, egy nem létező terméket ír le.

## A matematika

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

## Kidolgozott példa

Egy mentálhigiénés alkalmazás: a vizsgálat 0,02 nyert QALY-t mutatott a 8 hetet befejező felhasználónként. 100 000 letöltéses bevezetési kohorsz, megtartás D7 25%, D30 8%, 8. hét 4%:

```
Completers          = 100,000 × 0.04 = 4,000
QALYs delivered     = 4,000 × 0.02 = 80  (not 100,000 × 0.02 = 2,000)
At £20,000/QALY     = £1.6M of health value (not £40M)

Per-download health value = £16 — the number that should set what a
payer will pay per download, and it is 4% of the naive claim.
Retention improvement case: moving week-8 completion 4% → 6% adds
40 QALYs/year ≈ £800k — retention engineering IS health production.
```

## Kapcsolat a szoftverfejlesztéssel

A megtartás az a mutató, ahol a termékmérnökség a fenti számtan szerint a legközvetlenebbül gyártja az egészségértéket. A mozgatására szolgáló gyakorlatok hétköznapiak: beléptetés az első értékig tartó idő, újraelköteleződés-tervezés, teljesítmény, és döntően a **tervezett dózis-befejezés** — a meghatározott véggel rendelkező program (8 hét, majd diplomaosztás) a *befejezést* mérje, ne az örökös DAU-t, a mutatót a klinikai modellhez igazítva a hirdetésfinanszírozott figyelemmodell helyett. A túlélési elemzés a helyes eszköztár (ugyanaz a Kaplan–Meier-matematika, mint a [nyert életévek](../nyert-életévek/)nél); szegmentáld a görbéket akvizíciós csatornánként, mert a csatornamix a legtöbb funkciónál jobban változtatja a megtartást.

## Buktatók

- **Intention-to-treat tisztára mosás fordítva**: a vizsgálatok a befejezőket közlik; a bevezetési gazdaságtannak mindenkit számolnia kell, akit megszereztek (Eysenbach központi figyelmeztetése).
- **Megtartási színház**: értesítés-vezérelt „aktív" felhasználók, akik soha nem végzik el a terápiás cselekvést (lásd [elköteleződési mutatók](../elköteleződési-mutatók/)).
- **Görbék összehasonlítása eltérő definíciók között**: az „aktív" mint megnyitás vagy értelmes cselekvés a D30-at többszörösére tolja.
- **Annak figyelmen kívül hagyása, ki morzsolódik le**: ha a legbetegebbek morzsolódnak le leggyorsabban, a felhasználónkénti előnyök csökkennek, ahogy a megtartás az egészségesek között javul — párosítsd a görbéket esetösszetétellel (lásd [elérés és méltányosság](../elérés-és-méltányosság/)).

## Források

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
