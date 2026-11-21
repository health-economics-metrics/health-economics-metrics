# Broj potreban za liječenje (NNT)

NNT je broj pacijenata koji moraju primiti intervenciju da bi **jedan** dodatni pacijent imao koristi, kroz navedeno vremensko razdoblje. Pretvara postotna smanjenja rizika — koja zavaravaju — u jedinice napora po koristi o kojima svatko može razmišljati.

## Zašto je važno

„Smanjuje srčane udare za 25 %!” zvuči odlučno. Ako je osnovni rizik 4 % kroz 5 godina, apsolutno smanjenje je 1 postotni bod, pa **100 ljudi mora uzimati lijek 5 godina da bi 1 imao koristi** — a svih 100 plaća troškove i nuspojave. NNT je protuotrov marketingu relativnog rizika, zbog čega medicina utemeljena na dokazima njime započinje. Statini za primarnu prevenciju: NNT ≈ 50–100 kroz 5 godina po izbjegnutom srčanom udaru. Njegovo zrcalo, **NNH** (broj potreban za štetu), broji koliko je liječenih po jednoj oštećenoj osobi.

## Matematika

```
ARR = stopa događaja u kontroli − stopa događaja u liječenju   (apsolutno smanjenje rizika)
NNT = 1 / ARR

NNH = 1 / (stopa štete_liječenje − stopa štete_kontrola)

Ekonomski most:
trošak po spriječenom događaju = NNT × trošak po terapijskom ciklusu
```

Uvijek navedite vremenski okvir i osnovnu populaciju — NNT je besmislen bez oboje.

## Riješeni primjer

Sustav za predviđanje padova u bolnici označava visokorizične pacijente za intervenciju (senzori kreveta, pregled, nadzor). Ispitivanje: padovi s ozljedom padaju s 3,2 % na 2,4 % prijma.

```
ARR = 0.8 postotnih bodova → NNT = 1/0.008 = 125
   (125 pacijenata mora dobiti paket intervencija da bi se spriječio 1 pad s ozljedom)

Trošak intervencije ≈ £40/pacijentu → trošak po spriječenom padu = 125 × 40 = £5,000
Trošak bolničkog pada s ozljedom (dodatni boravak, snimanje, parnice) ≈ £12,000
Neto: prevencija se isplati ~2,4:1 — a QALY dobitak je povrh toga.
```

Primijetite kako NNT drži tvrdnju poštenom: „smanjuje padove za 25 %” i „spriječi jedan pad na 125 liječenih pacijenata” isti su rezultat, različito uvjerljiv.

## Veza sa softverskim inženjerstvom

NNT je prava jedinica za svaka vrata ili provjeru koja djeluje na mnogo stavki da uhvati malo: **„broj PR-ova koji moraju proći kroz AI vrata za recenziju da se uhvati jedan defekt koji ide u produkciju.”** Ako vrata pregledaju 400 PR-ova po stvarnom hvatanju (NNT = 400) uz 4 minute programerske pažnje svaki, jedno hvatanje košta ~27 programerskih sati — usporedite to s troškom incidenta koji sprječava. NNH se preslikava na lažno pozitivne: koliko PR-ova po jednoj *lažnoj* oznaci i što svaka košta u pažnji i povjerenju? Alati u stilu probira (linteri, sigurnosni skeneri, detekcija anomalija) trebali bi se isporučivati s aritmetikom NNT/NNH — vidi [ekonomiju probira](../ekonomija-probira/) zašto niska prevalencija čini te brojeve brutalnima. [Broj potreban za probir](../broj-potreban-za-probir/) analogna je brojka razinu više, za cijeli program probira-pa-liječenja, a ne samo liječenje.

## Zamke

- **Bez vremenskog okvira**: „NNT = 50” ne znači ništa; „NNT = 50 kroz 5 godina” je tvrdnja.
- **Presađivanje osnovnog rizika**: NNT izračunan u visokorizičnoj populaciji ispitivanja kolabira u niskorizičnoj populaciji uvođenja.
- **Zanemarivanje NNH-a** — vrata s NNT 400 i NNH 3 su generator smetnji, a ne sigurnosni sustav.

## Izvori

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
