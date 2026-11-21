# Tehniline võlg

Tehniline võlg mõõdab tulevase lisatöö kulusid, mis tekivad kiirema, kuid vähem põhjaliku lahenduse valimisest praegu, mitte parema lähenemisviisi kasutamisest.

## Miks see on oluline

Nagu rahaline võlg, kannab tehniline võlg "intressi" aeglasema tuleviku arenduse näol, kuni see tagasi makstakse (refaktoreeritud) või see muutub halvasti hallatavaks.

## Matemaatika

```
Tehnilise võla intress = Lisaaeg, mis kulub iga tulevase muudatuse jaoks tänu praegusele kiirele lahendusele
```

## Lahendatud näide

Kiiresti kirjutatud moodul ilma testideta säästab 2 nädalat kohe, kuid lisab 20% lisaaega igale järgnevale muudatusele sellele moodulile — kui moodulit muudetakse 10 korda, ületab kogu "intress" algse säästu.

## Seos tarkvaraarendusega

See ongi tarkvaraarenduse enda mõiste, mida siin kasutatakse analoogiana [kõvade raha vabastavate säästude](../kõvad-raha-vabastavad-säästud/) edasilükatud kulude mõistmiseks.

## Lõksud

- **Kogu tehnilise võla käsitlemine halvana — mõni võlg on strateegiliselt õigustatud.**
- **Tehnilise võla tagasimaksmise planeerimata jätmine, lastes sellel akumuleeruda piiramatult.**

## Allikad

- Cunningham W, technical debt metaphor origin.
- Fowler M, technical debt quadrant.
