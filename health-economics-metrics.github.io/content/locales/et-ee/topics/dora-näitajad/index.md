# DORA näitajad

DORA (DevOps Research and Assessment) näitajad mõõdavad tarkvaraarenduse meeskonna tõhusust nelja peamise mõõdiku kaudu: juurutamissagedus, muudatuste tarneaeg, muudatuste ebaõnnestumise määr ja taastamisaeg.

## Miks see on oluline

DORA näitajad annavad tõenduspõhise raamistiku tarkvaraarenduse tõhususe mõõtmiseks, mis korreleerub organisatsiooni tulemuslikkusega, mitte ainult subjektiivsete tunnetega "kas me oleme kiired".

## Matemaatika

```
Muudatuste tarneaeg = Commit'i aeg kuni tootmises juurutamiseni
Muudatuste ebaõnnestumise määr = Ebaõnnestunud juurutuste arv / Juurutuste koguarv × 100%
```

## Lahendatud näide

Meeskond, mis juurutab 10 korda päevas, keskmise tarneajaga 1 tund, ja 5% ebaõnnestumise määraga, klassifitseeruks "eliit"-tasemele DORA võrdlusalustes.

## Seos tarkvaraarendusega

See ongi tarkvaraarenduse enda näitaja; dokumendis kasutatakse seda korduvalt analoogiana tervishoiunäitajatele (taasvastuvõtt = muudatuste ebaõnnestumise määr, RTT = tarneaeg).

## Lõksud

- **Näitajate optimeerimine ise, mitte aluseks oleva kliendiväärtuse jaoks.**
- **Näitajate võrdlemine meeskondade vahel väga erinevate kontekstidega.**

## Allikad

- Forsgren N, et al., Accelerate.
- DORA, State of DevOps reports.
