# Juurdekasvav kulutõhususe suhe (ICER)

ICER mõõdab ühe sekkumise lisakulu iga lisatervisetulemuse ühiku kohta võrreldes alternatiiviga.

## Miks see on oluline

ICER on enamiku HTA süsteemide keskne otsustusreegel: alla läve = kulutõhus, üle läve = ei ole.

## Matemaatika

```
ICER = (Kulu_A − Kulu_B) / (Mõju_A − Mõju_B)
```

## Lahendatud näide

Uus ravi maksab £5000 rohkem ja annab 0,25 lisa-QALY võrreldes standardraviga: ICER = £5000 / 0,25 = £20 000/QALY — veidi alla NICE-i läve.

## Seos tarkvaraarendusega

Sarnaneb lisainfrastruktuuri kulu arvutamisega iga lisausaldusväärsuse või jõudluse ühiku kohta arhitektuurivariantide võrdlemisel.

## Lõksud

- **ICER-i arvutamine vale võrdluspunkti suhtes.**
- **Negatiivse ICER-i vale tõlgendamine ilma kvadranti määratlemata.**
- **ICER-i võrdlemine üle valuutade ilma selge ümberarvestuse sammuta**: ühe riigi valuutas arvutatud ICER tuleb märgitud meetodiga ümber arvestada, enne kui seda teise riigi lävendiga võrreldakse — vaata [ICER-i võrdlemist üle valuutade](../icer-i-võrdlemine-üle-valuutade/), miks ümberarvestusteguri valik (ostujõupariteet vs turuvahetuskurss) võib ise kasutuselevõtuotsuse pöörata.

## Allikad

- NICE, Guide to the methods of technology appraisal.
- Drummond MF, et al., Methods for the Economic Evaluation of Health Care Programmes.
