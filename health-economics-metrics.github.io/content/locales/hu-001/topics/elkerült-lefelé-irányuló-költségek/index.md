# Elkerült lefelé irányuló költségek

Az elkerült lefelé irányuló költségek (költségkompenzációk) a korábbi vagy jobb cselekvéssel megelőzött jövőbeli kezelési kiadások, a beavatkozás saját költségével szemben nettósítva. A kompenzációk az a mechanizmus, amellyel egy beavatkozás *dominánssá* válhat — olcsóbbá **és** jobbá —, és ők az egészséggazdaságtan leggyakrabban duplán számolt, leginkább túlállított sora is.

## Miért fontos

Szinte minden digitális egészségügyi értékajánlat tartalmaz kompenzációs állítást: „az alkalmazásunk megelőzi a felvételeket", „a riasztásaink megelőzik a romlást", „a platformunk elkerüli a duplikált teszteket". Amikor a kompenzációk valódiak, átalakítják a gazdaságtant (lásd az [ICER](../inkrementális-költséghatékonysági-mutató/) kidolgozott példáját, ahol egy 600 ezer £-os kompenzáció teszi az esetet). A finanszírozók ezt tudják — így a kompenzációs állítások vonzzák a legkeményebb vizsgálatot bármely értékelésben. Az alábbi hitelességi szabályok választják el a finanszírozható modellt a marketingtől.

## A matematika

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

## Kidolgozott példa

„Ez a migrációs kockázati állítás, helyesen csinálva": egy sebfigyelő alkalmazás 5000 műtét utáni betegnek fertőzéssel összefüggő újrafelvételek elkerülését állítja.

```
Baseline readmission for infection: 4.0% ; with app (RCT): 3.1%
Attributable events avoided = 5,000 × 0.009 = 45/year
Cost per readmission spell (marginal, this trust): £3,200
Offset = 45 × 3,200 = £144,000/year
App cost = 5,000 × £20 = £100,000/year
Net cost = −£44,000 → genuinely cost-saving, with:
  attribution from an RCT ✓  marginal costing ✓  probability from trial data ✓
```

Ugyanez az állítás „az újrafelvételek átlagosan 5800 £-ba kerülnek, rengeteget megelőzünk" alapon mind a négy teszten megbukik, és megérdemli az elutasítást, amelyet kap.

## Kapcsolat a szoftverfejlesztéssel

A „ez a migráció elkerüli a jövőbeli újraírást" kompenzációs állítás, és az egészséggazdasági szabályok teszik tisztességessé:

- **Kontrafaktuális költség**: mennyibe kerülne valójában az újraírás, és hogyan bizonyítva?
- **Valószínűség**: mennyire valószínű az a jövő? (Nem 100% — a termékeket leállítják, a prioritások változnak.)
- **Diszkontálás**: a 4. évben elkerült újraírás 3,5–10%-os diszkonttal sokkal kevesebbet ér a névértéknél.
- **Egyediség**: ne állítsd ugyanazt az elkerült újraírást a technikai adósság és a megtartás sorában is.

`Offset value = P(future event) × counterfactual cost × discount factor` — írd le ezt a sort a javaslatba, és nézd, ahogy a becslés vitathatóvá válik, ami a lényeg.

## Buktatók

- **Dupla számítás** — ugyanaz az elkerült felvétel kompenzációként, ágynapokként és költséggel ellátott QALY-kként állítva.
- **Átlagköltség-kompenzációk** olyan eseményekre, amelyek fix költségei úgyis folytatódnak.
- **Csendes 100%-os valószínűség** olyan lefelé irányuló eseményekre, amelyek csak lehetségesek voltak.
- **Más költségvetésekhez tartozó kompenzációk** megtakarításként bemutatva a fizetésre kért finanszírozónak — lásd [elemzési nézőpont](../elemzési-nézőpont/).

## Források

- York Health Economics Consortium glossary: cost offset. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (offsets rarely exceed costs). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
