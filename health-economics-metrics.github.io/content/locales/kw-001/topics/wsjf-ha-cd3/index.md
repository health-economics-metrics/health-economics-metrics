# WSJF ha CD3

CD3 (Kost Dalgh Rannys dre Hys) ha WSJF (Weighted Shortest Job First) yw rewlys frya a rol ober herwydh **dewder talvos**: pygemmys kost dalgh a vydh dileys rag pub unys a gapasita skant devnydhys. Dan gapasita kevrannys, sevys, CD3-uhella-kensa yw an sekwans gwella yn matematik rag minimya kost dalgh hollow.

## Perag yth yw posek

Pub backlog yw kudyn rannyans: lies tra wiw, unn pibrenn. Ekonomek yeghes a dhevenys an keth kudyn rag budjetow yeghes gans tablow-lyga kost-effeythusnans — rannewgh ynterventyansow herwydh yeghes gwrys rag pub puns, arghansewgh a-woeles an rol bys may fo an budjet diwedhys. CD3 yw an keth lojik rag kapasita delivrans: prow rag unys a'n *gwith kelmys*, arghansys yn ordyr rann. Kavos an sekwans yn ewn yw arghans rydh — an keth ober, an keth kapasita, le kost dalgh hollow.

## An Matematik

```
CD3  = Kost Dalgh (£/seythun) / Hys (seythun)        — unysow gwir (Black Swan Farming)

WSJF = (talvos devnydhyer-busnes + kritikalita termyn + leha risk/
        galloesans chons) / meur an ober               — proksi skala-relatif SAFe,
                                                         skorow Fibonacci chanjys
```

CD3 gans arghans gwir ([kost dalgh](../kost-dalgh/)) yw strikter krevhe ages poyntow heb unys WSJF — WSJF yw dhe CD3 pyth yw skorya liesbarametrer dhe [analys kost-talvos](../analys-kost-talvos/) leun: devnydhadow pan vo talvosa nag-ankevrus, gwariadow pan na'n eus ankerya dhe'n skorow.

## Ensampel gwrys

Tri feytur, unn skuadron:

```
Feytur    CoD (£/sth)   Hys        CD3
A         30,000        10 sth     3,000
B         12,000        2 sth      6,000
C         5,000         1 sth      5,000
```

Ordyr CD3: B, C, A. Keskomparewgh kost dalgh hollow erbynn "CoD moyha kensa" (A, B, C):

```
Ordyr CD3  (B,C,A): A a wor 3 sth, C a wor 2 → 30k×3 + 5k×2  = £100k kost dalgh
Ordyr CoD  (A,B,C): B a wor 10, C a wor 12   → 12k×10 + 5k×12 = £180k
```

An keth feyturyow, an keth skuadron — sekwans yn unnik a sav £80,000. An konsyans: tra byghan, ardhyl a'n kensa drefen y rydh aga hostow dalgh yn ankostys; an tra vras a gol nebes dre wortos berr.

## Kolm gans ynjynnyans medhelweyth

Rag portfolyo medhelweyth yeghes, derivewgh CoD yn unysow a dhyski an repo ma: QALY/seythun × harth + £/seythun oberyel, ha'n backlog a dheu bos kehavalus yn dhirek gans fatell wra an system yeghes rannya pub tra aral a bren. Dyw nowedh arfer: (1) hys a styr *termyn kalendar ow kemmeres an harth*, na ny yw strivyans — tra 2-seythun kalendar a res 2 dydh a'n skuadron botelnek yw ankostys ages y semlans (gwelewgh [gwellhe kesyow a-dhelergh](../gwellhe-kanasow-a-dhelergh/)); (2) klavjiyow a rol an keth rewl dre anyen pan wrons ordya rolyow teatr herwydh throughput pwyssys-ardhyl — klassow rannyans klinikel yw CD3 pwyssys-ankevri (gwelewgh [diffyk QALY ha chanjyoryon ankevri](../diffyk-qaly-ha-chanjyoryon-ankevri/)).

## Fowtys Kemmyn

- **Teatr skor WSJF**: dadlow Fibonacci heb unys a gonvergh war hwek a argya an uhelha; ankerewgh an dhe-lemmyn an lyha an re a-ugh an backlog yn CoD gwir.
- **Gwari hys**: dyberthi tra rag ynkressya rann CD3 — da pan dhelivrons talvos yn kewar, fugyans pan na wrons.
- **Ankevi profilys ardhyl**: CoD furvys-dewisyans (dydhyow rewlyek) a dorr tybyans ratyo sad; rolewgh an re na herwydh gwiryonedh dydh, ytho CD3 an re erel.
- **Dasrannans re-rannyans**: CD3 yw rag dewisyansow sekwans orth poynt kevrys, na rag dasrolya pub dydh ober yn-hynsa (gwelewgh [metryks lanwes](../metryks-lanwes/) war WIP).

## Fontynnow

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
