# Kemény készpénzfelszabadító megtakarítások (hiányvédelem)

A kemény készpénzfelszabadító megtakarítások olyan tételsorok, amelyeket a kórház a szoftvered miatt aktívan **törölhet a jövő havi költségvetésből**. Egy szigorú pénzügyi könyvelőnek — és egy hiánnyal működő trösztnek — ez az egyetlen előnyosztály, amely teljes mértékben számít.

## Miért fontos

Sok NHS-tröszt hiány-helyreállítási terv alatt működik, minden kiadási sor intenzív vizsgálatával. Ebben a környezetben a kapacitáselőnyök és minőségjavulások — bármilyen valódiak is — nem zárják be a rést; csak a készpénz. Az a szoftvertermék, amely bizonyítani tudja, hogy költségvetési sorokat töröl, a pénzügyi igazgató szemszögéből *önfinanszírozó*, ami átalakítja a beszerzést: a beszélgetés megszűnik arról szólni, hogy „megengedhetjük-e ezt?", és azzá válik, hogy „megengedhetjük-e, hogy ne?". Ez a dokumentum a [készpénzfelszabadító és nem készpénzfelszabadító megtakarítások](../készpénzfelszabadító-és-nem-készpénzfelszabadító-megtakarítások/) hiány felé forduló éles vége.

## A matematika

Az NHS legmegbízhatóbb kemény készpénzcélpontja a **prémium díjú ideiglenes személyzet**. A trösztök a réseket belső „Bank" személyzettel (szokásos-hoz közeli díjak) és külső „Agency" személyzettel (gyakran az Agenda for Change díjak 2–3-szorosa, plafonozva, de a szűkös szerepeknél gyakran túllépve) fedezik.

```
Hard saving = premium shifts avoided × (premium rate − substantive rate)
            + overtime hours avoided × overtime premium
            + external contracts cancelled × contract value

Mechanism requirement: name the specific budget line and the manager who
will confirm its reduction. If no one can point to the line, it isn't hard cash.
```

## Kidolgozott példa

Egy Band 6 ápoló műszakonként ~1 órát veszít adminisztratív többletmunkára; a dokumentáció rendszeresen túlcsordul a műszak végén túlórába, és az osztályok extra Bank-fedezetet foglalnak a dokumentációs utolérésre.

A szoftver 300 ápolónál visszaadja ezt az órát a beosztott műszaknak:

```
Overtime avoided:   300 nurses × 2.5 paid overtime hrs/week × £8 premium × 46 wks
                    ≈ £276,000/year
Bank/agency shifts: 15 catch-up shifts/week × £180 premium × 52
                    ≈ £140,400/year
Hard cash total     ≈ £416,000/year against a licence cost of ~£150,000
```

Minden font auditálható az e-beosztási és bérszámfejtési rendszerekkel szemben — pontosan így kell az előnyt bizonyítani, havonta, a [haszonrealizáláson](../haszonrealizálás/) keresztül. (A közzétett NHS-munkaerőmodellek e mechanizmusnál akár 11+ £ megtakarítást állítottak minden elköltött 1 £-ra; bármely ilyen arányt hipotézisként kezelj a *te* trösztöd beosztási adataira, ne hordozható tényként.)

## Kapcsolat a szoftverfejlesztéssel

Az ügynökségi prémium mérnöki megfelelői a szervezet saját szorult helyzeti vásárlásai: a szállítási réseket fedező vállalkozói napidíjak, incidens-vezérelt túlóra, felgyorsított támogatási szerződések és felhős azonnali-ár pánik. A kemény készpénzt állító termelékenységi szoftvernek ugyanezzel a fegyelemmel kell ezeket a sorokat célozni — nevezd meg a költségvetési sort, a felelőst és a hónapot, amikor csökken. Minden más, amit nyújt, kapacitás ([értékteremtő kapacitás](../értékteremtő-kapacitás/)) vagy minőség: valódi, értékes és más.

## Buktatók

- **A kapacitás „megtakarításnak" nevezése** — azonnali hitelességgyilkos a pénzügynél; lásd a taxonómiát a [készpénzfelszabadító és nem készpénzfelszabadító](../készpénzfelszabadító-és-nem-készpénzfelszabadító-megtakarítások/) témában.
- **Szállítói modellarányok bemutatása helyi tényként** (a 11:1 probléma) — építsd újra a modellt a tröszt saját beosztási adatain.
- **Egyszeri és ismétlődő összekeverése**: a lemondott szerződés az értékét évente egyszer takarítja meg, nem egyszer; a törölt álláshely csak addig takarít meg fizetést, amíg törölve marad.

## Források

- NHS England, reducing agency spend in the NHS. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Digital business case guidance, economic case. <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
