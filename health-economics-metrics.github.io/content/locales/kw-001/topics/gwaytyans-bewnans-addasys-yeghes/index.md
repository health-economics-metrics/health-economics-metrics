# Gwaytyans Bewnans Addasys-Yeghes (HALE)

HALE yw berrans nivel-pobel: niver a vledhydhyow may hyll den gwaytya bewa *yn yeghes kowl*, ow diskontya bledhydhyow dres klevyd po anabalder. HALE bys orth genesigeth o ogas 61.9 bledhen erbynn gwaytyans bewnans 73.3 (WHO, data 2019) — mabkynda a vew y dhegvledhen diwettha, yn kres, yn yeghes le ages kowl.

## Perag yth yw posek

HALE yw metrik arghadhek polici yeghes kenedhlek ha bys — an niverador a dowlow "heneth yagh" ha'n bwlgh a dhiskwedh (gwaytyans bewnans minus HALE) yw an kasow a'n re a vynn lettyans, ynkleth a-varr ha maynans klevyd-hirdermyn degea. Strategiow yeghes nombrek orth nivel minystrys yw justys yn termys HALE; portfolio a appys, servisow keres ha towlow wolok a dhirgel dhe hemma.

## An Matematik

An kowntyans standard yw an **fordh Sullivan**:

```
HALE_oos_x = Σ (bledhydhyow-den tabel-bewnans orth pub oos ≥ x × radh yn yeghes kowl)
             / gwythyoryon orth oos x

"radh yn yeghes kowl" = 1 − Σ (pewas_kondysyon × pys anabalder)
```

Kavadow: tabel-bewnans standard ha pewas ha pyssyansow anabalder rag statys yeghes (dhort data Global Burden of Disease). HALE a golm dhe [DALYs](../bledhen-bewnans-addasys-anabalder/) — doll DALY pobel ha bwlgh HALE yw dew golok a'n keth yeghes kellys.

## Ensampel gwrys

Towl gwerinas nombrek kenedhlek: 500,000 enrolys, kontrol gwerinas kres a wellha lowr dhe dorra kwitthder strokk dre 0.2 poynt dyskyrans/bledhen. Patromys dres bewnans an kohort, strokks hwithys a sav 15,000 bledhen pysys-anabalder (YLD orth pys 0.32 ha YLL dhort strokks marthus).

```
Kevran HALE ≈ 15,000 bledhen yagh / 500,000 den
            ≈ 0.03 bledhen (≈ 11 dydh) HALE rag enrolys
```

Unnek dydh a hevel byghan — mes orth skala pobel yw fatell wra niverow kenedhlek yn gwir omsymudh: minystrys a bren miliynow a wayn byghan rag pub den. An aritmetik ma a dhiskwedh ynwedh perag **y hwra hedhyans dominya**: ynkleth dewblya effeythus gans deg-tredhel an enrolyans a symudh HALE pymp gweyth le. Gwelewgh [hedhyans ha kehaval](../hedhes-hag-ekwita/).

## Kolm gans ynjynnyans medhelweyth

HALE yw patrom metrik yeghes-lester: **bewnans servis gwaytys × radh a'n bewnans na usys yn yeghes**. Tim platform a yll kowntya "gwaytyans bewnans servis yagh" dres y ystad — bledhydhyow may hyll servis bos ow ledya, diskontys dre dermyn yn statys dyskyllys, dirgelys, po hwarvos (pyssyansow dhort gwall SLO). Hi a dhasdhyssyn fydhyansri dhort kavadowder poynt dhe yeghes bewnans, ha ledya dasserghyans dhe'n systemow a dynn HALE an ystad a-woeles.

## Fowtys Kemmyn

- **HALE a symudh yn lent ha lies-kaws** — nagonan ynkleth unn "a symudh HALE" yn musuradow; klamewgh an kevran patromys, na ny yw an statystyk kenedhlek.
- **Data pewas a dhelergh** bledhydhyow; gwaynyow nowydh na dhiskwedhons yn HALE ofisyel.
- **Keskomparya HALE dres powyow** gans musur stat-yeghes dyffrans yw peryllus; devnydhewgh hy yn hyrdermyn a-bervedh unn system.

## Fontynnow

- Registri dyllyow WHO: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Studhyans Global Burden of Disease (IHME). <https://www.healthdata.org/research-analysis/gbd>
