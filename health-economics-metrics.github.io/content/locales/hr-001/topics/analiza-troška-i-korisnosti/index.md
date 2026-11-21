# Analiza troška i korisnosti (CUA)

CUA je analiza isplativosti s **generičkim, preferencijama ponderiranim ishodom** — gotovo uvijek [QALY](../godina-života-prilagođena-kvaliteti/) (ili izbjegnuti [DALY](../godina-života-prilagođena-invaliditetu/)). Budući da je jedinica ishoda univerzalna, CUA može uspoređivati intervencije kroz posve različite bolesti.

## Zašto je važno

Nacionalna zdravstvena služba mora iz jednog proračuna birati između lijeka za rak, aplikacije za mentalno zdravlje i kirurškog robota. Prirodne jedinice ih ne mogu usporediti; QALY-ji mogu. CUA je stoga metoda referentnog slučaja u NICE-u i većini HTA tijela: njezin izlaz — trošak po QALY-ju, procijenjen naspram [praga](../pragovi-spremnosti-na-plaćanje/) — najbliža je stvar univerzalnom tečaju koju zdravstvena politika ima. Ako želite da vaš softver bude financiran *umjesto nečeg drugog*, CUA je arena.

## Matematika

```
ICUR = ΔCost / ΔQALYs      (ICER s QALY-jima kao jedinicom učinka)

ΔQALYs = Σ (trajanje_i × korisnost_i)_novo − Σ (trajanje_i × korisnost_i)_staro
```

Korisnosti iz validiranih instrumenata ([EQ-5D](../eq-5d/)); troškovi i QALY-ji [diskontirani](../diskontiranje-i-vremenska-preferencija/) po 3,5 % (referentni slučaj NICE-a); neizvjesnost putem [PSA](../probabilistička-analiza-osjetljivosti/).

## Riješeni primjer

CBT aplikacija za umjerenu anksioznost naspram liste čekanja za terapiju licem u lice, po pacijentu:

```
Troškovi: licenca aplikacije + podrška   £250
          istisnuta terapija             −£680   (40% korisnika je više ne treba)
          ΔC = 250 − 680 = −£430 (štedi novac)

QALY-ji:  6 mjeseci uz korisnost 0.76 umjesto 0.68 tijekom čekanja
          ΔE = 0.5 × (0.76 − 0.68) = +0.04 QALY-ja
```

ΔC < 0 i ΔE > 0: aplikacija **dominira** — bolja i jeftinija, omjer nije potreban. Da je pretpostavka o istiskivanju terapije bila samo 10 %, ΔC = 250 − 170 = +80 £, a ICUR = 80 / 0,04 = **2.000 £/QALY** — i dalje daleko ispod 20.000 £. Slučaj preživljava čak i kad se ključna pretpostavka drastično smanji: tako izgleda robusna CUA (a [tornado dijagram](../analiza-osjetljivosti/) to dokazuje).

## Veza sa softverskim inženjerstvom

Duboka ideja CUA — *jedna kompozitna, preferencijama ponderirana jedinica za usporedbu nesumjerljivih stvari* — obrazac je za usporedbu nesumjerljivih inženjerskih ulaganja (sigurnost naspram iskustva programera naspram pouzdanosti). Pošteni izbori su ili obranjiva kompozitna jedinica (rijetko) ili izričita [tablica troškova i posljedica](../analiza-troškova-i-posljedica/) (uobičajeno). Pred čim CUA upozorava je lažni kompozit: ponderirani „ocjena utjecaja” čije su težine naknadno podešene da omiljena opcija pobijedi. Zdravstvena ekonomija desetljećima je standardizirala prikupljanje korisnosti upravo da težine prethode usporedbi.

## Zamke

- **Dobici korisnosti ispod osjetljivosti instrumenta** (vidi minimalnu klinički važnu razliku u [ishodima koje prijavljuju pacijenti](../ishodi-koje-prijavljuju-pacijenti/)) — sićušan ΔE puta velike populacije klasičan je trik pranja.
- **Propuštanje istiskivanja skrbi komparatora** — najveća stavka troška za digitalne proizvode često je ono što zamjenjuju.
- **Mapiranje nepreferencijskih rezultata u korisnosti** nevalidiranim tablicama prevođenja.

## Izvori

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
