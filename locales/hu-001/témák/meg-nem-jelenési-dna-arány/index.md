# Meg nem jelenési (DNA) arány

A DNA-arány a lefoglalt időpontok azon százaléka, ahol a beteg sem meg nem jelenik, sem nem mond le. A klinikus, a rendelő és az időablak ki van fizetve; semmi nem történik. Ez az egészségügy legtisztább pazarlásmutatója — és az egyik leginkább szoftverrel javítható.

## Miért fontos

Az NHS England adatai (2019): az elmulasztott háziorvosi időpontok évente meghaladják a 15 milliót, ~30 £-os darabköltséggel — több mint **216 M£/év** —, a kórházi járóbeteg-DNA-k pedig ~8 M/év (az időpontok ~6,4%-a), elmulasztott időablakonként átlagosan ~**160 £**-ért. Mivel egy emlékeztető határköltsége fillér, a visszaszerzett érték pedig egy teljesen személyzettel ellátott klinikai időablak, a DNA-csökkentésnek a digitális egészségügy egyik legjobb ROI-számtana van, ezért tartoztak az SMS-emlékeztetők, a könnyű újrafoglalás és a prediktív túlfoglalás az első bizonyított digitális egészségügyi sikerek közé.

## A matematika

```
DNA rate = DNAs / booked appointments × 100

Value of reduction = appointments × ΔDNA rate × value per recovered slot

value per recovered slot: the slot is refilled (activity value / waiting-list
reduction) or it is not (staff time partially reusable) — mechanism matters,
as with bed-days-saved.md.
```

## Kidolgozott példa

Egy járóbeteg-osztály: évi 200 000 időpont, DNA-arány 8%. Egy emlékeztető-plusz-újrafoglalási szolgáltatás (SMS egykattintásos újrafoglalással, közlekedési információval, akadálymentes formátumokkal) a DNA-kat 5,5%-ra csökkenti.

```
Recovered slots = 200,000 × 0.025 = 5,000/year
Refilled from the waiting list at ~£160 average outpatient value:
  5,000 × £160 = £800,000/year of recovered activity
Service cost: 200,000 × £0.40 = £80,000/year

Return ≈ 10:1, plus 5,000 waiting-list patients seen sooner
(see waiting-list-impact.md and referral-to-treatment.md).
```

A hatásnagyság (2,5 pont) reális: az emlékeztető-RCT-k következetesen 25–40%-os relatív DNA-csökkenést mutatnak.

## Kapcsolat a szoftverfejlesztéssel

- **Ez ütemezési rendszerek problémája**: emlékeztetők, önkiszolgáló újrafoglalás, várólista automatikus feltöltése lemondásokból, és meg nem jelenés-előrejelző modellek, amelyek célzott túlfoglalást vezérelnek. Mindegyik hétköznapi szoftvermérnöki munka szokatlanul éles gazdasági esettel.
- **A mérnöki analóg**: meg nem jelenés a lefoglalt kapacitásnál — lefoglalt, de tétlen CI-időablakok, foglalt felhőkapacitás, tárgyalók, interjúbizottságok. A gazdaságtan átvihető: egy olcsó automatizált lökés (vagy a nem használt foglalások automatikus felszabadítása) drága, vállalt kapacitást szerez vissza.
- **Előzetes az előrejelzés etikájához**: a részvételi adatokon tanított meg nem jelenés-modellek a hátrányos helyzetet és a hozzáférési akadályokat kódolják; ha ezekkel a valószínű meg nem jelenőket *hátrébb sorolják*, az növeli az egyenlőtlenséget, ha a megjelenést *támogatják* (szállítási segítség, telefonos alternatívák), az csökkenti. Lásd [elérés és méltányosság](../elérés-és-méltányosság/).

## Buktatók

- **A lemondott-és-újrafoglalt kétszeri számlálása visszaszerzett értékként.**
- **Olyan visszaszerzett időablakok értékelése, amelyeket nem töltenek fel újra** — egy üres időablak emlékeztető elküldése után is üres.
- **A DNA nullára hajszolása**: a DNA utolsó pontjai valódi akadályokkal szembesülő betegek; a büntető megközelítések (elbocsátás N DNA után) a mutatót a betegek cserbenhagyásával csökkentik.

## Források

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- DNA cost summaries. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
