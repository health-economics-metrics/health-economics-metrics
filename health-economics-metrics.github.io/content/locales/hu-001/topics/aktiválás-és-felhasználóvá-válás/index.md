# Aktiválás és felhasználóvá válás

Az aktiválási arány a regisztrálók azon hányada, akik elérik az első értelmes értéket (az „aha" cselekvés — első naplózott mérés, első elvégzett lecke). A felhasználóvá válás (uptake) a populációs változat: a *jogosult* populáció azon hányada, amely egyáltalán bevezeti. Együtt az értéktölcsér első kapui: akvizíció → felhasználóvá válás → aktiválás → [megtartás](../megtartás-és-lemorzsolódás/) → kimenet.

## Miért fontos

A nem aktivált felhasználók tiszta költség: akvizíciós kiadás, kiépítés, támogatási felület — nulla klinikai érték. A viszonyítási értékek az egészségügyi szoftver aktiválását az ágazatok közti átlag *alá* teszik (≈24% vs ≈37% az új felhasználói aktiválásra egy SaaS-viszonyítási halmazban; a beléptetési ellenőrzőlista befejezése ~20%), ami a nehezebb beléptetést tükrözi (azonosítás, beleegyezés, klinikai biztonság). A felhasználóvá válás a populációs téteket hordozza: a [RE-AIM keretezésben](../elérés-és-méltányosság/) a közegészségügyi hatás ≈ elérés × hatásosság — egy kiváló alkalmazás, amelyet a jogosult populáció 3%-a fogad el, 3%-nyit mozdít a populációs mutatón. A receptre felírt digitális terápiáknál a felhasználóvá válási kapu látható az országos adatokban: **a német DiGA-receptek ~81%-át aktiválják** — a felírt és kifizetett kezelések ötödéből egy soha nem indul el (lásd [DiGA gyorsított eljárás](../németország-diga-gyorsított-eljárása/)).

## A matematika

```
Activation rate = users completing key action within window / sign-ups × 100
Uptake rate     = adopters / eligible population × 100
DTx fill rate   = activated prescription codes / issued prescriptions × 100

Funnel value model:
  eligible × uptake × activation × retention-weighted benefit = population value
  — four multiplications; improving the smallest factor usually
  dominates (theory-of-constraints for funnels)
```

## Kidolgozott példa

Egy megrendelő diabétesz-megelőzési alkalmazást kínál 80 000 jogosult lakosnak:

```
Invited → registered:  80,000 → 12,000  (uptake 15%)
Registered → activated (first session + goal set, 7 days): 12,000 → 5,400 (45%)
Activated → completed 6-month programme: 5,400 → 1,600 (30%)

Programme effect (trial, completers): 0.03 QALYs + £180 avoided costs
Population value = 1,600 × (0.03 × £20,000 + £180) ≈ £1.25M
Per-eligible-person value = £15.6 — versus £780 if every eligible person completed.

Where to invest? Doubling uptake (15→30%) doubles value; raising
activation 45→65% adds ~44%; both beat further polishing the programme
content the 1,600 already complete.
```

## Kapcsolat a szoftverfejlesztéssel

Az aktiválás a tölcsér legmérnökibb kezelhető szakasza: az azonosítás-ellenőrzési súrlódás, a beleegyezési folyamatok, az üres állapot tervezése és az első értékig tartó idő kód, nem politika (az egészségügyi medián első értékig tartó idő ≈ 1 nap 7 óra a viszonyítási adatokban — minden órája lemorzsolódási kitettség). A felhasználóvá válás elosztási rendszerek problémája: integráció a beutalási útvonalakba (a receptfelírás pillanata), háziorvos által támogatott meghívók (a bizalom átvihető), és akadálymentesség (nyelv, digitális készségek — lásd [elérés és méltányosság](../elérés-és-méltányosság/)). A fenti tölcsér-értékmodell mindkettő üzleti eset-generátora: szorozd a tényezőket, találd meg a korlátot, áraztad a javítást a felszabadított populációs értékhez.

## Buktatók

- **Kényelmi aktiválásdefiníció** (e-mail megerősítve) a klinikai jelentés (első terápiás cselekvés) helyett — felfújja a mutatót, megtöri az értéklánc.
- **Felhasználóvá válás nevező-játékok**: „a webhelyet meglátogatókból" vs a valóban jogosult populáció — a megrendelőket az utóbbi érdekli.
- **Szelekciós hatások**: a könnyen aktiválható felhasználók a legkevésbé betegek és legkevésbé hátrányosak; a tölcsérjavítások szélesíthetik a méltányossági réseket, miközben javítják az átlagokat.

## Források

- Activation benchmarks (healthcare SaaS). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- DiGA activation data, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- RE-AIM framework. <https://re-aim.org/>
