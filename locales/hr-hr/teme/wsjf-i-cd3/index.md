# WSJF i CD3

CD3 (trošak odgode podijeljen s trajanjem) i WSJF (Weighted Shortest Job First) su pravila prioritizacije koja raspoređuju rad prema **gustoći vrijednosti**: koliko se troška odgode ukloni po jedinici oskudnog potrošenog kapaciteta. Pod zajedničkim, fiksnim kapacitetom, redoslijed najvišeg CD3 prvi matematički je optimalan slijed za minimiziranje ukupnog troška odgode.

## Zašto je važno

Svaki backlog je problem raspodjele: mnogo vrijednih stavki, jedan cjevovod. Zdravstvena ekonomija riješila je isti problem za zdravstvene proračune ljestvicama isplativosti — rangirajte intervencije po zdravlju stečenom po funti, financirajte niz popis dok se proračun ne iscrpi. CD3 je identična logika za kapacitet isporuke: korist po jedinici *ograničenog resursa*, financirana prema rangu. Ispravan redoslijed je besplatan novac — isti posao, isti kapacitet, manje ukupnog troška odgode.

## Matematika

```
CD3  = Trošak odgode (£/tjedan) / Trajanje (tjedni)      — stvarne jedinice (Black Swan Farming)

WSJF = (vrijednost za korisnika-posao + vremenska kritičnost + smanjenje rizika/omogućavanje
        prilike) / veličina posla                          — SAFe-ov proxy u relativnoj ljestvici,
                                                            modificirani Fibonaccijevi rezultati
```

CD3 sa stvarnom valutom ([trošak odgode](../trošak-odgode/)) strogo je jači od WSJF-ovih bezjediničnih bodova — WSJF je prema CD3 ono što je višekriterijsko bodovanje prema punoj [analizi troška i korisnosti](../analiza-troška-i-korisnosti/): upotrebljiv kad je unovčavanje nepraktično, podložan namještanju kad bodovi nemaju sidro.

## Riješeni primjer

Tri funkcionalnosti, jedan tim:

```
Funkcionalnost  CoD (£/tj)   Trajanje   CD3
A               30,000       10 tj      3,000
B               12,000       2 tj       6,000
C               5,000        1 tj       5,000
```

CD3 redoslijed: B, C, A. Usporedite ukupni trošak odgode naspram „najveći CoD prvi” (A, B, C):

```
CD3 redoslijed  (B,C,A): A čeka 3 tj, C čeka 2 → 30k×3 + 5k×2  = £100k troška odgode
CoD redoslijed  (A,B,C): B čeka 10, C čeka 12  → 12k×10 + 5k×12 = £180k
```

Iste funkcionalnosti, isti tim — samo slijed štedi 80.000 £. Intuicija: male, hitne stavke idu prve jer jeftino oslobađaju svoj trošak odgode; velika stavka malo gubi kratkim čekanjem.

## Veza sa softverskim inženjerstvom

Za portfelje zdravstvenog softvera, izrazite CoD u jedinicama koje ovaj repozitorij uči: QALY/tjedan × prag + operativne £/tjedan, i backlog postaje izravno sumjerljiv s načinom na koji zdravstveni sustav rangira sve ostalo što kupuje. Dvije napomene iz prakse: (1) trajanje znači *kalendarsko vrijeme zauzimanja ograničenja*, a ne napor — stavka od 2 proteklog tjedna koja treba 2 dana tima koji je usko grlo jeftinija je nego što izgleda (vidi [optimizaciju nizvodnih resursa](../optimizacija-nizvodnih-resursa/)); (2) bolnice implicitno primjenjuju isto pravilo kad poredaju liste operacijskih sala prema propusnosti ponderiranoj hitnošću — kategorije kliničke prioritizacije su CD3 ponderiran težinom (vidi [QALY manjak i modifikatore težine](../qaly-manjak-i-modifikatori-težine/)).

## Zamke

- **WSJF kazalište bodova**: bezjedinične Fibonaccijeve rasprave konvergiraju prema onome tko najglasnije argumentira; usidrite barem stavke s vrha backloga u stvarni CoD.
- **Namještanje trajanja**: cijepanje stavki da se napuhne CD3 rang — u redu kad dijelovi neovisno isporučuju vrijednost, prijevara kad ne.
- **Zanemarivanje profila hitnosti**: CoD oblikovan rokom (regulatorni datumi) lomi pretpostavku stalne stope; njih rasporedite prema izvedivosti datuma, a ostatak CD3-om.
- **Prekomjerno prerangiranje**: CD3 je za odluke o slijedu pri trenutku obveze, a ne za svakodnevno premetanje posla u tijeku (vidi [metrike toka](../metrike-toka/) o WIP-u).

## Izvori

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
