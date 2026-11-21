# Skyens enhetsøkonomi

Skyens enhetsøkonomi måler infrastrukturkostnad per individuell transaksjon, pasient eller forespørsel.

## Hvorfor det er viktig

Skyfakturaer viser totalsummen, men ikke hvilken funksjon eller pasientvei som forårsaker kostnaden.

## Matematikken

```
Enhetskostnad = skyutgifter (£/måned) / transaksjonsvolum (per måned)
```

## Gjennomarbeidet eksempel

En bildelagringstjeneste: £40 000/måned, 200 000 skanninger = £0,20 per skanning.

## Kobling til programvareutvikling

Bryter ned [total eierkostnad](../total-eierkostnad/) til operasjonell skala.

## Fallgruver

- **Å ignorere reservasjonsrabatter og beregne med forespørselspriser.**

## Kilder

- FinOps Foundation, unit economics.
- AWS Well-Architected, cost optimization pillar.
