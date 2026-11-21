# Időhorizont

Az időhorizont az az időszak, amelyre az elemzés a költségeket és hatásokat számolja. Elég hosszúnak kell lennie ahhoz, hogy az összehasonlított lehetőségek minden érdemi különbségét felölelje.

## Miért fontos

Ha rövid horizontot választasz, lemaradsz a késői előnyökről (megelőzés) és a késői költségekről (karbantartás). Ha túl hosszút, minden elmerül a bizonytalanságban. Az egészségügyi technológiaértékelés a halálozási hatású kezeléseknél gyakran **élethosszig tartó** horizontot használ; a [költségvetési hatáselemzés](../költségvetési-hatáselemzés/) szándékosan rövid, **1–5 éves** horizontot használ, mert a kérdése a megfizethetőség, nem az érték. A horizont deklarált modellezési döntés, és az eltérő horizontok az összehasonlítás kijátszásának klasszikus módja.

## A matematika

A horizont a felső határa az összegzésnek bármely értékelésben:

```
Net present value = Σ (t = 0 … T) [ (Benefits_t − Costs_t) / (1 + r)^t ]

T = time horizon (years)
r = discount rate (see discounting-and-time-preference.md)
```

Az eredményeket a horizont megadásával kell közölni, lehetőleg több horizonton is bemutatva.

## Kidolgozott példa

Egy elektronikus gyógyszerrendelő rendszer bevezetése 2 millió £-ba kerül, üzemeltetése évi 200 000 £. Évi 600 000 £ értékű gyógyszerelési hibát előz meg (az elkerült kár kezelési költsége).

Nettó haszon horizontonként (diszkontálatlanul, az áttekinthetőségért):

```
Horizon 1 year:  −2,000,000 − 200,000 + 600,000  = −£1,600,000
Horizon 3 years: −2,000,000 + 3 × 400,000        = −£800,000
Horizon 5 years: −2,000,000 + 5 × 400,000        =  £0
Horizon 10 years:−2,000,000 + 10 × 400,000       = +£2,000,000
```

A rendszer 5 év alatti bármely horizonton „megbukik", 10 évesen „sikeres". Egyik sem az igazi válasz; az őszinte jelentés megadja a fedezeti pontot, és a horizontot a rendszer élettartamával indokolja (mennyi idő a csere előtt?).

## Kapcsolat a szoftverfejlesztéssel

- Az **egy sprint alatt mért eszközértékelések** rendszeresen elkerülik a tanulási görbe süllyedését (előre terhelt költségek) és a hosszú távú karbantartást (hátra terhelt költségek). A 2. héten mért MI-kódolássegéd-kísérletek a csúcsújdonságot rögzítik, nem az állandósult állapotot.
- A **szerződés hossza ≠ az előnyök horizontja.** Az 1 éves SaaS-szerződés is értékelhető 5 évre, ha reálisan megújítást vársz — de mondd ki.
- A **régi rendszer lecserélésére vonatkozó esetek** a régi rendszer hihető életciklus-végéig fussanak, ne egy önkényes kerek számig.

## Buktatók

- **Horizontvásárlás**: azt a horizontot választani, amelyik a te lehetőségedet nyerteséve teszi. Az eredmények kiszámítása előtt rögzítsd előre a horizontot.
- **Eltérő horizontok az eltérő lehetőségekhez** ugyanabban az összehasonlításban.
- **Élethosszig tartó horizont diszkontálás vagy bizonytalansági elemzés nélkül** — a 30. évi előnyök névértéken fikciók. Párosítsd a hosszú horizontokat [érzékenységvizsgálattal](../érzékenységvizsgálat/).

## Források

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
