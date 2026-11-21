# Sõeluuringute majandus

Sõeluuringute majandus hindab sõeluuringuprogrammide kulutõhusust, arvestades valepositiivseid, valenegatiivseid ja ülediagnoosimise kulusid koos varajase avastamise kasuga.

## Miks see on oluline

Sõeluuringud tunduvad alati heana ("varajane avastamine päästab elusid"), kuid igal programmil on varjatud kulud valepositiivsete uuringute, ärevuse ja ülediagnoosimise näol, mis tuleb tasakaalustada kasudega.

## Matemaatika

```
Sõeluuringu netoväärtus = (Avastatud juhtude väärtus × tundlikkus) − (Valepositiivsete kulu × (1 − spetsiifilisus)) − programmi kulud
```

## Lahendatud näide

Rinnavähi sõeluuringuprogramm avastab 10 juhtu 10 000 skaneeringu kohta, kuid genereerib 500 valepositiivset, millest igaüks nõuab lisauuringuid — kogu majanduslik hinnang peab arvestama mõlemat poolt.

## Seos tarkvaraarendusega

Sarnaneb automatiseeritud testimise vale-positiivsete määradega — liiga tundlik testimine genereerib müra, mis maksab uurimisaega. Terve sõeluuringuprogrammi, mitte ühe testi mõõtkava jaoks vaata [sõeluuritavate arvu](../sõeluuritavate-arv/) — mitu inimest peab läbima kogu sõeluuringu-ja-ravi tee, et üks tulemus ära hoida.

## Lõksud

- **Ainult tundlikkuse optimeerimine spetsiifilisust arvestamata.**
- **Ülediagnoosimise ja ületöötlemise kulude eiramine.**

## Allikad

- Wilson JMG, Jungner G, screening programme principles.
- UK National Screening Committee, evidence review process.
