# Fizetési hajlandósági küszöbök

A fizetési hajlandósági (WTP) küszöb az a legnagyobb összeg, amelyet egy döntéshozó az egészségnyereség egy egységéért hajlandó fizetni — az a vonal, amely az [ICER](../inkrementális-költséghatékonysági-mutató/)-t elfogad/elutasít döntéssé alakítja.

## Miért fontos

A küszöb az a pont, ahol az egészséggazdaságtan mérésből politikává válik. Minden nemzeti rendszernek van egy, kifejezett vagy hallgatólagos, és a helyi szám ismerete pontosan megmondja, hogyan kell egy egészségérték-állítást árazni:

| Szervezet | Küszöb (a kutatás szerint, 2024–2025) |
|---|---|
| NICE (Anglia) | 20 000–30 000 £ per QALY; empirikus átlagos döntési küszöb ≈ 24 400 £ (2022–24); a súlyossági módosítók a tényleges plafont ~36–51 ezer £-ra emelik; a nagyon speciális technológiáknál akár 100 ezer £+ |
| ICER (USA, nem kormányzati) | 100 000–150 000 $ per QALY/evLYG ár-viszonyítási értékek; 50–200 ezer $ tartományt közöl |
| Kanada (CADTH / CDA-AMC) | ≈ 50 000 CAD$ per QALY munkaküszöb |
| WHO-CHOICE (történelmi, globális) | 1–3× az egy főre jutó GDP elkerült DALY-nként (ma elvetik mint túl tompát) |
| Empirikus brit kínálati oldal (Claxton et al.) | ≈ 13 000 £ per QALY, amelyet az NHS határán ténylegesen kiszorítanak |

## A matematika

A λ küszöb minden döntési szabályba belép:

```
Adopt if ICER = ΔC/ΔE < λ
Equivalently: adopt if NMB = λ×ΔE − ΔC > 0
```

Két elmélet arról, mi a λ *valójában*:

- **Keresleti oldal**: amit a társadalom hajlandó fizetni az egészségért (értékítélet).
- **Kínálati oldal**: az egészség, amelyet a költségvetés jelenleg a határon előállít (empirikus mennyiség — Claxton ~13 ezer £/QALY). Ha a döntésekhez használt λ meghaladja a kínálati oldali rátát, az új technológia jóváhagyása több egészséget szorít ki, mint amennyit hozzáad.

## Kidolgozott példa

A digitális terápiád kezelt betegenként 0,05 QALY-t nyújt 800 £ nettó költséggel (ár mínusz kompenzációk).

```
ICER = 800 / 0.05 = £16,000 per QALY
```

- Anglia: 20 ezer £ alatt → finanszírozható. Legnagyobb védhető ár: λ = 20 000 £ mellett price_max = 0,05 × 20 000 + kompenzációk = 1000 £ + kompenzációk.
- Amerikai kereskedelmi keretezés 150 ezer $/QALY mellett: az értékalapú ár jóval magasabb.
- Egy 4000 $ egy főre jutó GDP-küszöbű ország: ugyanennek a terméknek nettó ~200 $ alatt kell kerülnie.

Ugyanaz a termék, három piac, három ár — a küszöb *maga* az árazási modell. Ez értékalapú árazás, a λ-ból visszafelé futtatva.

## Kapcsolat a szoftverfejlesztéssel

Minden mérnöki szervezetnek van hallgatólagos λ-ja: az a küszöb, amelynél a megtakarított mérnökóránként finanszíroz eszközöket. Kifejezetté tétele — „mindent finanszírozunk, ami hiteles megtakarított mérnökóránként 40 £ alatt van" — lehetővé teszi a platformbefektetések ranglistás összehasonlítását, pontosan úgy, ahogy a QALY-nkénti költség ranglistái rangsorolják az egészségügyi kiadásokat. A kínálati oldali tanulság is átvihető: az igazi belső λ az, amit a *jelenlegi* backlogod a határon előállít, nem az, amit a vezetés mond, hogy az idő ér.

## Buktatók

- **Küszöbvásárlás** joghatóságok között, vagy a HST-plafon idézése egy hétköznapi termékre.
- **A λ árküszöbként kezelése**: a küszöb teljesítése szükséges, nem elégséges — a [költségvetési hatás](../költségvetési-hatáselemzés/) még egységenként megfizethető terméket is elsüllyeszthet.
- **Annak figyelmen kívül hagyása, hogy a küszöbök mozognak**: a NICE súlyossági módosítói (2022) és az időszakos felülvizsgálatok változtatják a tényleges λ-t; keltezd az állításaidat.
- **Egy ICER összehasonlítása egy másik pénznemű küszöbbel átváltás nélkül**: lásd [valutaközi ICER-összehasonlítás](../valutaközi-icer-összehasonlítás/) — az átváltási módszer (vásárlóerő-paritás vagy piaci árfolyam) módszertanilag következményes, nem kerekítési részlet.
- **A λ-alapú értékelés összekeverése a munkaerőpiaci VSL/VPF-hagyománnyal**: ezek különböző elméleti hagyományokból jönnek (egészségügyi költségvetés által korlátozott módszertan vagy bér-kockázat cserékből feltárt preferencia), és nem mindig összeegyeztethetők — az élet értékelésének alternatív, feltárt preferenciás megközelítéséhez lásd [statisztikai élet értéke](../statisztikai-élet-értéke/).

## Források

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
