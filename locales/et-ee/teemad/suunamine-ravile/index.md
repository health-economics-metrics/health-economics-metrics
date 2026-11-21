# Suunamine ravile (RTT)

RTT mõõdab aega esimesest suunamisest ravi alustamiseni, kusjuures 18-nädalane standard on peamine riiklik tulemusnäitaja.

## Miks see on oluline

RTT on sisuliselt tarneaja näitaja, mida rakendatakse patsiendiravile — kui kaua võtab väärtuse (ravi) tarnimine pärast taotlust (suunamist).

## Matemaatika

```
RTT vastavus = 18 nädala jooksul ravitud patsientide arv / RTT järjekorras olevate patsientide koguarv × 100%
```

## Lahendatud näide

Erialal on 5000 patsienti RTT teekonnal, kellest 4100 ravitakse 18 nädala jooksul: vastavus 82%, alla riikliku standardi 92%.

## Seos tarkvaraarendusega

Otsene analoog [DORA tarneajale](../dora-näitajad/) — aeg commitist (suunamine) tarnimiseni (ravi).

## Lõksud

- **Kellapeatuste (patsiendi algatus) vale rakendamine vastavusnumbrite moonutamiseks.**
- **Ainult keskmise jälgimine, kui jaotuse saba on tegelik probleem.**

## Allikad

- NHS England, referral to treatment statistics.
- NHS Digital, RTT data quality guidance.
