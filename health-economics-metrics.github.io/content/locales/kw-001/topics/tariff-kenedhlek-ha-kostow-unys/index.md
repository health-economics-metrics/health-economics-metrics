# Tariff Kenedhlek ha Kostow Unys

An NHS a bay provyoryon rag gwrians dre rol brisyow kenedhlek orth rewlys — istorek an Tariff Kenedhlek / Pewas dre Sewyansow, a veu dyskrefys gans **Skim Pewas NHS (NHSPS)** dhe 1 Ebrel 2023. A-dryk an prisow yma isstrukter kostya unys kenedhlek: an **Kuntell Kost Kenedhlek (NCC)** ha'n kompendiom **PSSRU Unit Costs of Health and Social Care**.

## Perag yth yw posek

An re ma yw denominadoryon pub kas besneth NHS kredadow. Pan lever klaym "kemmyskyans allglavji a dalvos £160" po "eur nors Band 6 a gost £31", an niverow na a dheu dhort an isstrukter ma — ha devnydhya an figuryow ofisyel yn le an re dyssynyes yw an pyth a wra gwerthjyansow anserhek keskomparadow ha parys arghans kesoberyans. Rag gwerther, an tariff a dhyllas ynwedh an tu *mona*: gwrians a wra dha vedhelweyth possybyl (klinikys ekstra, gwelyow dasglenwys) a vydh talvosys orth prisow an skim.

## An Matematik

```
Pris tariff rag unnys a wrians (spell HRG-kodys, dheuth allglavji)
  = kost unys kres kenedhlek (dhort NCC) × Faktour Nerth Marghas (addasyans leel)
  yn dann NHSPS: elvennow kemmyskys fast + kewar ("pewas ha kerensa kolmys")

Kost unys NCC = kost oll provyer-derivys a'n klass gwrians / kyfrol gwrians
                (drehys war Patient-Level Information and Costing Systems, PLICS)

Kompendiom PSSRU: ~80 kost unys standard (kussulyans GP, eur nors dre vand,
dheuth ED…) — an fenten dyffolt yn gwerthjyansow ekonomek UK.
```

## Ensampel gwrys

Dha vedhelweyth a rydh 1 eur/dydh a dermyn nors Band 6 yn bledhen oberya 250-dydh:

```
Kost Band 6 diwar PSSRU gans overheads ≈ £31/eur (gwiryewgh an dyllans a-lemmyn)
Talvos kanasow = 250 × £31 = £7,750/nors/bledhen (heb relasya arghans)
```

Po an nors a res 2 apoyntyans dilyn allglavji ekstra/dydh orth ~£160 talvos skim: 500 × £160 = **£80,000/bledhen a wrians arghansys** — diffrans dek-plyg yn talvos klamys herwydh dasplasyans, oll dhort kostow unys ofisyel. An dew glaym yw awditadow drefen bos an denominadoryon dyllys; hemma yw an poynt kowl.

## Kolm gans ynjynnyans medhelweyth

Hemma yw patrom **lyver-prisow ynterna**. Ekonomek yeghes UK a oberi drefen bos pub gwerthjyans ow devnydhya an keth kostow unys dyllys; kowethyansow ynjynnyans a ankyns y'n kemmyn hemma, ytho pub kas besneth a dyssyn y gost y honan a eur-ynjynnyer, hwarvos, displegyans. Tim platform a yll dyllas lyver a'n par ma — kost kowlvaghys rag eur-ynjynnyer dre nivel, rag hwarvos dre dhrogder, rag mynysenn-gwil — ha'y erghi y devnydh yn oll arghadow. Systemow chargya/showback a dhasdhre ynwedh fowtys kodhvedhys an tariff: prisya kost-kres a dhrif gwari kyfrol, pewasow fast a dhrif ankevi kuransek. Chanj NHSPS dhort pewas gwrians pur dhe gemmysk fast+kewar yw ugens bledhen a dhyskansow yn dyssyn kerensa rag prisya platform ynterna.

## Fowtys Kemmyn

- **Figuryow koth**: prisow NCC, PSSRU, ha NHSPS a nowydh pub bledhen — dydhewgh pub niver.
- **Pris tariff ≠ kost**: prisow yw kresow kenedhlek gans addasyansow; dha gost marginal leel a dhiffer (gwelewgh [kost marginal erbynn kres](../kost-marginal-erbynn-kres/)).
- **Talvosya kanasow orth tariff heb mekanika** dhe dhelivra ha bos paydhys rag an gwrians ekstra yn gwir.

## Fontynnow

- NHS England, Skim Pewas NHS. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, Kuntell Kost Kenedhlek. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
