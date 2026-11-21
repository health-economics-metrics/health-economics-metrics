# Ápolási idő (LOS)

Az ápolási idő a kórházi felvételtől az elbocsátásig eltelt napok száma — a fekvőbeteg-ellátás alapvető folyamathatékonysági mutatója. Az egyesült királyságbeli akut átlagok 4–5 nap körül vannak; minden többletnap egy szűkös ágyat fogyaszt, és kórházi eredetű kockázatoknak teszi ki a beteget.

## Miért fontos

A LOS hajtja az akut kórházi gazdaságtan szinte minden elemét: ágykapacitás, tervezett áteresztőképesség, sürgősségi áramlás, személyzet. Az átlagos LOS akár nap töredékeivel való csökkentése nagy léptékben óriási kapacitást szabadít fel (lásd [megtakarított ágynapok](../megtakarított-ágynapok/)). A LOS mindkét irányban minőségi jelzés is — a túl hosszú folyamathibára utal (késleltetett diagnosztika, elbocsátási papírmunka, szociális ellátásra várakozás); a túl rövid idő előtti elbocsátást jelenthet, amely később [újrafelvételként](../újrafelvételi-arány/) jelentkezik.

## A matematika

```
LOS (per spell)  = discharge date − admission date
Average LOS      = occupied bed days / discharges (report mean AND median;
                   LOS is heavily right-skewed by long-stay outliers)

Comparisons require case-mix adjustment (age, diagnosis, acuity),
or you are measuring who the hospital admits, not how it performs.
```

A Little-törvény összekapcsolja a folyamatváltozókat: `elfoglalt ágyak = felvételi ráta × átlagos LOS` — ugyanaz a törvény, amely a szoftveres sorokat is szabályozza (lásd [folyammutatók](../folyammutatók/)).

## Kidolgozott példa

Egy tröszt napi 40 sürgősségi belgyógyászati beteget vesz fel 6,0 napos átlagos LOS mellett: 240 ágy tartósan foglalt (40 × 6). Az elbocsátás-koordinációs szoftver (feladatkövetés, gyógyszertár–hazaadás automatizálás, szállításfoglalás) átlagosan 0,4 nappal csökkenti az ápolások nem klinikai farkát.

```
Beds needed = 40 × 5.6 = 224 → 16 beds freed continuously
            = 16 × 365 = 5,840 bed days/year
```

Értékeld az 5840 ágynapot mechanizmus szerint (újratöltés/bezárás/laza kapacitás) a [megtakarított ágynapok](../megtakarított-ágynapok/) szerint. Figyeld meg, mi mozdult: nem az orvostudomány, hanem a *várakozás* — a beteg orvosilag alkalmas volt; a rendszer még a papírmunkát végezte. Ez sorbanállási probléma, és a szoftver jó a sorbanállási problémákban.

## Kapcsolat a szoftverfejlesztéssel

A LOS a kórház átfutási ideje, és a fejlesztési játékkönyv azonos a szállítási folyamat munkájával: műszerezd a szakaszokat (felvétel → kezelés → orvosilag alkalmas → ténylegesen elbocsátva), találd meg, hol gyűlik az idő (az átadásoknál), szüntesd meg a várakozási állapotokat a kapacitás bővítése helyett. Az „orvosilag elbocsátható, de még ágyat foglal" kohorsz a kórház változata a jóváhagyott, de nem merge-ölt PR-nek. Közvetlen szoftveres lehetőségek: elbocsátási feladatok vezénylése, diagnosztikai átfutási idő, elbocsátási gyógyszerek e-rendelése, szociális ellátási beutaló integráció.

## Buktatók

- **Csak átlag közlése** — a kiugró értékek dominálnak; a csökkenő átlag elrejtheti a növekvő hosszú ápolási farkat.
- **Esetösszetétel-korrekció hiánya** az előtte/utána állításokban: a felvételi küszöbök szezonálisan és szekulárisan változnak.
- **Újrafelvételként visszatérő LOS-csökkentés** — a LOS-állításokat mindig párosítsd a 30 napos újrafelvételi adatokkal.

## Források

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
