# GDS-szolgáltatásmutatók

Az Egyesült Királyság Government Digital Service (GDS) Service Manualja minden kormányzati digitális szolgáltatásra négy KPI-t ír elő: **tranzakciónkénti költség, felhasználói elégedettség, befejezési arány és digitális igénybevétel**. Együtt egy közszolgálati digitális szolgáltatás minimális gazdaságtana — és az a sablon, amelyet az NHS digitális szolgáltatásai öröklenek.

## Miért fontos

A GDS-mutatók a csatornaváltási üzleti esetet kódolják, amely egy évtizednyi kormányzati digitalizálást finanszírozott: a Digital Efficiency Report a digitális tranzakciókat ~20-szor olcsóbbnak találta a telefonnál és ~50-szer olcsóbbnak a személyes ügyintézésnél (helyi önkormányzati számok: web 0,15 £, telefon 2,83 £, személyes 8,62 £). De a megtakarítások csak akkor valósulnak meg, ha az emberek *befejezik* a digitális utat (befejezési arány) a drága csatorna *helyett* (igénybevétel) — a négy KPI egy gazdasági modell, nem négy műszerfal.

## A matematika

```
Cost per transaction = total service cost / completed transactions
Completion rate      = completed / started transactions × 100
Digital take-up      = digital transactions / all-channel transactions × 100
User satisfaction    = % satisfied+very satisfied (5-point, in-service survey)

Channel-shift saving = volume × take-up shift × (cost_old_channel − cost_digital)
… minus failure demand: (1 − completion rate) × fallback channel cost
```

## Kidolgozott példa

Egy NHS időpontkezelő szolgáltatás: évi 2 M tranzakció, jelenleg 70% telefon (3,20 £/hívás) / 30% digitális (0,25 £). Egy újratervezés a digitális igénybevételt 55%-ra, a befejezést 84%-ról 93%-ra emeli:

```
Take-up shift saving = 2M × 0.25 × (3.20 − 0.25) = £1,475,000/year

Failure-demand saving: failed digital journeys fall back to phone
  before: 2M × 0.30 × 0.16 × £3.20 = £307,200
  after:  2M × 0.55 × 0.07 × £3.20 = £246,400
  net £60,800/year — completion improvements protect the take-up gains

Satisfaction is the leading indicator: dissatisfied users revert to phone,
so a satisfaction drop forecasts take-up decay before it appears.
```

## Kapcsolat a szoftverfejlesztéssel

Ez a négy KPI a [költség-következmény táblázat](../költség-következmény-elemzés/) éles minőségű példája: egy költségmutató, három kimenetmutató, soha nem pontszámmá zsugorítva. A termékmérnökök számára a működési tanulságok: **a befejezési arány tölcsér-műszerezési probléma** (minden lemorzsolódási pont megtalálható és javítható); **a tranzakciónkénti költség a [felhő-egységgazdaságtan](../felhő-egységgazdaságtan/)** plusz a személyzet által támogatott csatornák költségei; **az igénybevétel álcázott méltányossági mutató** — azok a felhasználók, akik nem tudnak vagy nem akarnak csatornát váltani, aránytalanul idősek, fogyatékkal élők és hátrányos helyzetűek, így az agresszív csatornazárás a „megtakarításokat" hozzáférési kárrá alakítja (lásd [elérés és méltányosság](../elérés-és-méltányosság/)). A KPI-k közzététele (a GOV.UK szolgáltatásonként közzéteszi) maga is mechanizmus: az átláthatóság úgy fegyelmezi az előrejelzéseket, ahogy a [haszonrealizálási](../haszonrealizálás/) auditok.

## Buktatók

- **Igénybevétel kényszerrel**: a telefonvonal bezárása növeli az igénybevételt, és a hibakeresletet az első vonalbeli személyzetre zúdítja; mérd az egész rendszer költségét.
- **A befejezés mérése a 2. oldaltól**: a tölcsér elkezdése a lemorzsolódási pont után hízeleg az aránynak.
- **A tranzakciónkénti költség a támogatott digitális segítség és a hibakereslet kezelése nélkül.**
- **Elégedettségi felmérések csak sikeres befejezéskor** — az elégedetlenek többnyire soha nem érik el a felmérést.

## Források

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
