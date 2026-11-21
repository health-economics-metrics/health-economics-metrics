# Diszkontálás és időpreferencia

A diszkontálás a jövőbeli költségeket és előnyöket jelenértékekre váltja át, mert a ma megkapott előny többet ér, mint ugyanaz az előny öt év múlva.

## Miért fontos

Minden egészséggazdaságtani értékelés és minden komoly közszféra-beli üzleti eset diszkontálja a többéves pénzáramokat. Az Egyesült Királyság HM Treasury Green Bookja évi 3,5%-os társadalmi időpreferencia-rátát ír elő; a NICE referenciaesete mind a költségeket, mind az egészségügyi hatásokat évi 3,5%-kal diszkontálja (a 30 évnél hosszabb előnyökkel járó, közel gyógyító terápiákra a nem referenciaesetben 1,5%-os ráta használatos). Ha a szoftveres üzleti esetedben ez áll: „5 millió £ megtakarítás 10 év alatt", egy pénzügyi ellenőr azonnal a diszkontált összeget fogja kérni.

## A matematika

Egy jövőbeli összeg jelenértéke:

```
PV = FV / (1 + r)^t

PV = present value
FV = future value in year t
r  = discount rate (NICE/Green Book: 0.035)
t  = years from now
```

Állandó éves B előny esetén n éven át (annuitás):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Kidolgozott példa

A szoftvered évi 100 000 £-ot takarít meg egy NHS-trösztnek 5 éven át, az éles indulás után egy évvel kezdődően.

Diszkontálatlan összeg: 500 000 £.

3,5%-kal diszkontálva:

```
Year 1: 100,000 / 1.035^1 = £96,618
Year 2: 100,000 / 1.035^2 = £93,351
Year 3: 100,000 / 1.035^3 = £90,194
Year 4: 100,000 / 1.035^4 = £87,144
Year 5: 100,000 / 1.035^5 = £84,197

Total PV ≈ £451,505
```

Az őszinte főszám körülbelül 451 000 £, nagyjából 10%-kal kevesebb a naiv összegnél. Tegyük fel, hogy a szállítás egy évet késik: minden tag egy évvel későbbre tolódik, és a jelenérték mintegy 436 000 £-ra esik — ez a [késedelem költségének](../a-késedelem-költsége/) diszkontálási nézete.

## Kapcsolat a szoftverfejlesztéssel

- A **technikai adósság törlesztése és a platformmigrációk** évekkel későbbi előnyáramokat ígérnek; diszkontáld őket, mielőtt összeveted azokkal a munkákkal, amelyek ebben a negyedévben térülnek meg.
- A **költségek előre terheltsége és az előnyök hátratolása** a migrációk szokásos alakja. A diszkontálás ezt az alakot büntetni — helyesen: árazza a kockázatmentes időértéket, amelyet a kapacitás mostani lekötése az értékért később jelent.
- Az **„5. évi megtakarítás" állításokat** kétszeresen is gyanakodva kell fogadni — erősen diszkontáltak és erősen bizonytalanok (lásd [érzékenységvizsgálat](../érzékenységvizsgálat/)).

## Buktatók

- **A költségek diszkontálása az előnyök nélkül** (vagy fordítva) — a referenciaeset mindkettőt ugyanazzal a rátával diszkontálja.
- **Kereskedelmi ráta (8–12%) használata közszféra-beli esetben**, vagy 3,5% kockázati tőkés esetben. A rátát a döntéshozóhoz kell igazítani.
- **A diszkontálás összekeverése az inflációval.** A diszkontálás *reál* (inflációval korrigált) értékekre vonatkozik; ne csináld mindkettőt hallgatólagosan.

## Források

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
