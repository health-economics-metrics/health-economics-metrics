# Pilve ühikumajandus

Pilve ühikumajandus analüüsib arvutusressursside kulusid tegevuse ühiku kohta (näiteks kasutaja, päring või transaktsioon kohta), et mõista skaleerimise majandust.

## Miks see on oluline

Pilveteenuste kulud skaleeruvad kasutusega, erinevalt fikseeritud kapitalikuludest — ühikumajanduse mõistmine on hädavajalik, et ennustada kulusid kasvades.

## Matemaatika

```
Kulu ühiku kohta = Kogu pilvekulu / Tegevuste koguarv (kasutajad, päringud jne)
```

## Lahendatud näide

Rakendus, mis maksab £10 000/kuus 100 000 aktiivse kasutaja kohta, on £0,10 kasutaja kohta — kasvades 1 miljoni kasutajani samade ühikukuludega, maksaks see £100 000/kuus.

## Seos tarkvaraarendusega

See ongi tarkvaraarenduse enda mõiste, mida kasutatakse analoogiana [riikliku tariifi ja ühikuhindade](../riiklik-tariif-ja-ühikuhinnad/) mõistmiseks tervishoius.

## Lõksud

- **Ühikumajanduse ekstrapoleerimine ilma mastaabisäästu või -kadu arvestamata.**
- **Pilvekulude jälgimise puudumine kasutuse kasvades, mis viib üllatavate arveteni.**

## Allikad

- a16z, cloud economics research.
- AWS, cost optimization pillar.
