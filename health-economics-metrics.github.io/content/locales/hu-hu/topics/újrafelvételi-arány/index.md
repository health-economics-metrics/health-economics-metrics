# Újrafelvételi arány

A 30 napos újrafelvételi arány az elbocsátott betegek százaléka, akik 30 napon belül sürgősséggel visszatérnek. Ez az egészségügyi rendszer kanonikus *elbocsátási minőség* mutatója — és közvetlen pénzügyi szankciókat von maga után.

## Miért fontos

Az újrafelvétel azt jelenti, hogy az első elbocsátás nem tartott: idő előtti elbocsátás, sikertelen gyógyszerátadás, hiányzó utókövetés vagy hiányzó szociális támogatás. A finanszírozók kifejezetten büntetik — az amerikai Hospital Readmissions Reduction Program a kórház Medicare-kifizetéseinek akár 3%-át levonja; az NHS történelmileg nem fizetett a megelőzhető 30 napos sürgősségi újrafelvételekért. Az újrafelvétel-elkerülés így azon kevés előnykategória egyike, amely *közvetlenül* készpénz-releváns egy szolgáltató számára, nem csupán kapacitás.

## A matematika

```
Readmission rate = emergency readmissions within 30 days / index discharges × 100

Risk-standardized comparisons adjust for case mix; penalty programmes
compare observed vs expected for like hospitals.

Value of avoidance = avoided readmissions × (cost per readmission spell
                     + penalty exposure per readmission)
```

## Kidolgozott példa

Szívelégtelenség elbocsátás-támogató alkalmazás (tünetkövetés, súlyriasztások, gyógyszeremlékeztetők, ápolói eszkaláció): évi 2000 elbocsátás, alap újrafelvételi arány 18%, a vizsgálat 14%-ot mutat az alkalmazással.

```
Avoided readmissions = 2,000 × (0.18 − 0.14) = 80/year
Cost per readmission spell ≈ £3,500 → £280,000/year avoided treatment cost
Plus penalty/non-payment exposure on those spells.
App cost: 2,000 × £60 = £120,000/year

Net ≈ +£160,000/year, before any QALY claim for avoided deterioration.
```

A megvédendő szám a 4 százalékpontos hatás: kontrollált összehasonlításból kell származnia, mert az újrafelvételi arányok az esetösszetétellel és a szezonnal ingadoznak.

## Kapcsolat a szoftverfejlesztéssel

Az újrafelvétel az egészségügyi rendszer **változási hibaaránya** (lásd [DORA-mutatók](../dora-mutatók/)): munka, amely „kiszállt", és 30 napon belül visszapattant. A párhuzamok mélyek — az újranyitott jegyek és regressziós incidensek gyenge „elbocsátási minőségre" utalnak (gyenge ellenőrzés, idő előtti lezárás, hiányzó átadási dokumentáció); a szankció-stílusú elszámolás (a javító csapat fizet, nem a fogadó) megváltoztatja a viselkedést; és mindkét terület ugyanazt a leckét tanulta meg: a nyers áteresztőképesség (gyorsabb elbocsátás, gyorsabb szállítás) hajszolása az átadásba való befektetés nélkül csupán a látható sorokat láthatatlan újramunkává alakítja. A „30 napos újranyitási arány" minden olyan csapat műszerfalára való, amely az átfutási időt ünnepli.

## Buktatók

- **Átcímkézéssel való játszadozás**: az újrafelvételeket megfigyelési tartózkodásként vagy új állapotként kódolják; auditáld a definíciót.
- **Minden ok és kapcsolódó ok**: a 30 napos minden-okú ténylegesen független eseményeket is tartalmaz; a szankciók általában a minden-okút használják éppen azért, mert a „kapcsolódó" játszható.
- **Esetösszetétel-vakság**: a betegebb, szegényebb populációkat kiszolgáló kórház olyan okokból vesz fel újra többet, amelyeket semmilyen alkalmazás nem javít — kockázatkorrigálj az összehasonlítás előtt.

## Források

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, emergency readmissions statistics. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
