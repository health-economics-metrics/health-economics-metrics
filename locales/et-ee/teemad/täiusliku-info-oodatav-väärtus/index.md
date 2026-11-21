# Täiusliku info oodatav väärtus

Täiusliku info oodatav väärtus (EVPI) hindab, kui palju oleks väärt kõrvaldada kogu ebakindlus otsuses enne selle tegemist.

## Miks see on oluline

EVPI ütleb, kas katseprojekt või täiendav uuring on oma kulu väärt, enne kui seda läbi viite. Projekti hilisema laiendamise optsiooni, mitte esmalt info kogumise optsiooni hindamise kohta vaata [reaalsete optsioonide hindamist](../reaalsete-optsioonide-hindamine/).

## Matemaatika

```
EVPI = E[maksimum variantide hulgas(väärtus täiusliku infoga)] − maksimum variantide hulgas(E[väärtus])
```

## Lahendatud näide

Otsusel, kas rakendada tehisintellekti triaažisüsteemi, on EVPI £2 miljonit populatsiooni tasandil; £500 000 maksev katseuuring on seega õigustatud.

## Seos tarkvaraarendusega

Sarnaneb spike'i või kontseptsioonitõestuse hinnastamisega enne suurt arhitektuuriotsust. *Konkreetse* kavandatud uuringu hindamise kohta kogu ebakindluse kõrvaldamise asemel vaata [EVSI-d](../valimiinfo-oodatav-väärtus/).

## Lõksud

- **EVPI arvutamise unustamine populatsiooni tasandil ja selle raporteerimine ainult patsiendi tasandil.**
- **Katseuuringute läbiviimine, mille kulu ületab EVPI.**

## Allikad

- Claxton K, et al., value of information methods.
- NICE DSU Technical Support Document 12.
