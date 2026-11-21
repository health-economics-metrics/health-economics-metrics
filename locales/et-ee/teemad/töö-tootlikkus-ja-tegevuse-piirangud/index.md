# Töö tootlikkus ja tegevuse piirangud (WPAI)

WPAI on valideeritud enesehinnangu küsimustik (Reilly, Zbrozek, Dasbach, 1993), mis mõõdab, kui palju terviseprobleem mõjutab tasustatud tööd ja igapäevaseid tegevusi, tavaliselt viimase 7 päeva jooksul. See jagab kaotuse *töölt puudumiseks* (absenteeism) — töö aeg, mis on sõna-sõnalt kaotsi läinud — ja *töölolekuks halvenenud võimekusega* (presenteeism) — vähenenud tootlikkus füüsiliselt tööl viibides —, ning teine on tavaliselt suurem, varjatum kulukomponent.

## Miks see on oluline

Lihtsad haigepäevade loendused näevad ainult töölt puudumist. Kliinik või teadmustöötaja, kes ei võta kunagi vaba päeva, kuid töötab kroonilise seisundi tõttu 60% võimsusega, ei lisa puudumisregistrile midagi ja tekitab ikkagi suure, tegeliku tootlikkuskao — WPAI on loodud just selle nähtamatu kulu nähtavaks tegemiseks. Kuna see on valideeritud instrument, mitte tellimustööna tehtud uuring, saab selle skoore kasutada [patsiendi teatatud tulemuste](../patsiendi-teatatud-tulemusnäitajad/) tõendipakettides ja haigusekulu uuringutes ilma, et hindaja peaks mõõdet uuesti valideerima. Enesehinnangu instrumendina on see ise PROM-i vorm, mida eristab peamiselt keskendumine tööle ja tegevusele, mitte sümptomitele või elukvaliteedile.

## Matemaatika

```
Töölt puudumine % = tervise_tõttu_kaotatud_tunnid / (tervise_tõttu_kaotatud_tunnid + töötatud_tunnid) × 100

Töölolek halvenenud võimekusega %  = enesehinnanguline kahjustus 0–10 töötamise ajal, × 10
                  (saadud otse küsimustikust, siin mitte tuletatud)

Kogu töökahjustus % =
    Töölt_puudumine% + (1 − Töölt_puudumine%/100) × Töölolek_halvenenud%
    (ühendab need kaks nii, et summa ei saa kunagi ületada 100%)

Tootlikkuse kulu = Kogu_töökahjustus% / 100 × perioodi_sissetulek
```

Kogu kahjustuse valem ei ole tahtlikult lihtne summa: kahe protsendi otse liitmine võiks ületada 100%, nii et töölolek halvenenud võimekusega rakendatakse ainult tööaja *allesjäänud* (mitte puuduva) osale.

## Lahendatud näide

Migreeniga töötaja on plaanitud 40-tunniseks nädalaks, kuid jätab sellest 4 tundi vahele:

```
kaotatud_tunnid = 4, töötatud_tunnid = 36
Töölt puudumine% = 4 / (4 + 36) × 100 = 10%
```

Ta hindab eraldi oma tootlikkusmõju töötamise ajal WPAI küsimustikus 3 punktiga 10-st, s.o `Töölolek_halvenenud% = 30%` (see samm on toores küsimustikuvastus, mitte midagi teistest arvudest tuletatut):

```
Kogu töökahjustus% = 10 + (1 − 10/100) × 30
                   = 10 + 0,9 × 30
                   = 10 + 27
                   = 37%
```

5-päevasel nädalal sissetulekuga £800 (£160/päev):

```
Tootlikkuse kulu = 37/100 × 800 = £296
```

Pane tähele, et naiivne haigepäevade loendus oleks salvestanud ainult kaotatud 4 tundi (10%) — komponent töölolek halvenenud võimekusega kolmekordistab tegeliku kahjustuse peaaegu, kui see arvesse võtta.

## Seos tarkvaraarendusega

See kaardistub otse inseneerimismeeskondade tervisenäitajatele:

- **Töölt puudumine** on haigusleht ja tasuline puhkus — nähtav, juba jälgitud ja lihtne osa.
- **Töölolek halvenenud võimekusega** on läbipõlenud või kontekstivahetuse all kurnatud insener, kes on igal stand-upil kohal, kuid töötab vähendatud võimsusega — tavaliselt suurem ja varjatum kulu, nähtamatu peade või kohalolu andmetele. See ilmneb hoopis vähenenud läbilaskevõimena [DORA](../dora-näitajad/) ja [vooniitajates](../vooniitajad/) või aeglasema lahendamisena just sellele [tehnilisele võlale](../tehniline-võlg/), mille „intress“ halvendab kahjustust veelgi.
- Inseneeria õppetund on sama mis kliiniline: ainult puudumise mõõtmine ja selle „tootlikkuskaoks“ nimetamine alahindab süstemaatiliselt tegelikku kulu, sest see jätab märkamata kõik, kes on kohal, kuid kahjustatud.

## Lõksud

- **Meenutusnihe enesehinnangus.** 7-päevane meenutusaken on allutatud samadele aruandluse moonutustele nagu iga tagasivaatav enesehinnang.
- **Skaala 0–10 käsitamine kui tõelist füüsilist mõõtmist.** See on järjestikune, saadud enesehindamisega, mitte valideeritud füüsikaline suurus — erinevuste käsitamine sellel rangelt lineaarsete või intervallskaalaga on modelleerimismugavus, mitte valideeritud füüsikaline fakt.
- **Skooride koondamine üle WPAI variantide.** WPAI-l on mitu seisundispetsiifilist versiooni — WPAI:GH (üldtervis), WPAI:SHP (konkreetne terviseprobleem) ja haigusspetsiifilised variandid — ning eri variantide skoore ei tohiks koondada ega võrrelda ilma esmalt kontrollimata, et tegu on sama instrumendiversiooniga.

## Allikad

- Reilly MC, Zbrozek AS, Dasbach EJ. „The validity and reproducibility of a work productivity and activity impairment instrument.“ PharmacoEconomics 1993;4(5):353-65.
- WPAI instrumendi dokumentatsioon, Reilly Associates — ametlik skoorimise teatmik. <https://www.reillyassociates.net/>
