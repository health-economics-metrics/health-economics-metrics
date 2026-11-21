# Korábbi beavatkozás

Ha a megtakarított kapacitás lehetővé teszi, hogy egy szakember hamarabb átnézze a diagnosztikai elmaradásokat, a betegek gyorsabban kerülnek a várólistáról az aktív kezelésbe — és a korábbi kezelés általában olcsóbb és jobb, mint a későbbi, mert a kezeletlen állapotok progrediálnak.

## Miért fontos

A betegség progressziója az egészségügy kamatos kamata. A kezeletlen állapottal várakozó beteg nem állandósult állapotban van: a daganatok stádiumot váltanak, a szívelégtelenség dekompenzálódik, az enyhe depresszió súlyossá válik. A korábbi beavatkozás ezért kettős osztalékot hoz — **jobb kimenetek** (több QALY, egészségesebb alapvonalról kezelve) és gyakran **alacsonyabb kezelési költségek** (a korai stádiumú kezelés kevésbé intenzív, mint a késői mentés). Ez a mechanizmus emeli a „gyorsabb útvonalakat" működési aprósággból klinikai és gazdasági követelménnyé — és ez a mély oka annak, hogy a [késedelem költsége](../a-késedelem-költsége/) a klinikai szoftverre is vonatkozik.

## A matematika

```
Value of earlier intervention (per patient) =
    [Cost_late − Cost_early]                       (treatment-cost offset)
  + [QALYs_early − QALYs_late] × λ                 (health gain × threshold)
  × P(progression during the delay)                 (probability weighting)
```

A valószínűségi súlyozás elengedhetetlen: nem minden várakozó beteg progrediál. Modellezd az időegységenkénti átmeneti valószínűséget (természetes lefolyási adatokból), ne a legrosszabb esetet. Aztán diszkontálj: az évekre lévő elkerült költségek ma kevesebbet érnek ([diszkontálás](../diszkontálás-és-időpreferencia/)) — és vedd észre, hogy a legtöbb korai beavatkozás költség*hatékony*, nem költség*megtakarító* (lásd [a megelőzés gazdaságtana](../a-megelőzés-gazdaságtana/)).

## Kidolgozott példa

Diabéteszes retinopátia szűrési elmaradás: 4000 beteg, 6 hónapos késés. Az MI-támogatott értékelés megháromszorozza az áteresztőképességet, és 8 hét alatt kiüríti a sort. Természetes lefolyás: a várakozó betegek ~2%-a/év jut át látást fenyegető stádiumba, amíg felülvizsgálatlan.

```
Progression events avoided by ~4 months' acceleration:
  4,000 × 2% × (4/12) ≈ 27 patients

Per avoided progression:
  treatment offset (intravitreal therapy vs laser) ≈ £4,000
  QALY gain (vision preserved) ≈ 0.8 QALYs × £20,000 = £16,000

Value ≈ 27 × (4,000 + 16,000) ≈ £540,000 — from one backlog cleared once,
before counting the permanent throughput gain.
```

## Kapcsolat a szoftverfejlesztéssel

Két átvitel. Első, a nyilvánvaló: a diagnosztikai és kezelési útvonalakat gyorsító szoftver (triázs, MI-értékelés, eredményirányítás) pontosan e modell szerint váltható pénzzé — és a modell megmondja, melyik útvonalat gyorsítsd: azt, amelynek a legmeredekebb a progressziós görbéje, nem a leghosszabb sorút. Második, a mérnöki tükörkép: **a hibák is progrediálnak**. A tervezésben elkapott hiba egy beszélgetésbe kerül; élesben egy incidensbe; a „shift-left" költséggörbe (10–100× szakaszonként) progressziós modell, és az őszinte változat ugyanazt a fenntartást hordozza — a korai felismerés általában költséghatékony, nem ingyenpénz, mert a felülvizsgálatoknak és teszteknek valódi költségük van, és a legtöbb elkapott probléma soha nem progrediált volna.

## Buktatók

- **Mindenkire a legrosszabb esetű progresszió feltételezése** — a valószínűségi súlyozás a különbség az elemzés és a szószólás között.
- **Lead-time torzítás**: a betegség korábbi megtalálása a kimenetek megváltoztatása nélkül előnynek látszik, de nem az; a korábbi *hatásos beavatkozás* az állítás, nem csupán a korábbi felismerés (lásd [a szűrés gazdaságtana](../a-szűrés-gazdaságtana/)).
- **Dupla számítás** a ugyanarra a gyorsításra épített várólista- és RTT-állításokkal — egy útvonal-javulás, egy előnykészlet, egyszer elosztva.

## Források

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
