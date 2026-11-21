# Bendroji nuosavybės kaina (TCO)

TCO – tai visa sistemos kaina per jos gyvavimo laiką: įsigijimas ar kūrimas, integracija, veikimas, priežiūra, palaikymas, mokymas ir išjungimas. Nemalonus pagrindas: **priežiūra sudaro 50–80 % programinės įrangos TCO** – maždaug trys ketvirtadaliai viso gyvavimo kainos ateina *po* paleidimo.

## Kodėl tai svarbu

Sveikatos technologijų vertinimas seniai išmoko, kad vaisto kaina nėra jo sąnaudos – skyrimas, stebėsena ir šalutinių poveikių valdymas visi priklauso modeliui. Programinės įrangos verslo bylos, skaičiuojančios tik kūrimo / licencijos kainą, kartoja naivios vaisto kainos klaidą ir sistemingai nuvertina sąnaudų pusę kiekviename [ICER](../prieaugio-sąnaudų-efektyvumo-santykis/) ir [biudžeto poveikio](../biudžeto-poveikio-analizė/) modelyje, kurį maitina. NHS pirkimuose TCO disciplina daro skaitmeninio produkto ekonominio efektyvumo teiginį sąžiningą – ir tai yra vieta, kur pigiai atrodančios parinktys pralaimi.

## Matematika

```
TCO = initial cost (build/licence + integration + data migration + training)
    + Σ_t [operations + maintenance + support + infrastructure + upgrades
           + compliance/assurance]_t / (1 + r)^t
    + decommissioning cost (exit, data extraction, parallel running)

Horizon: 3–5 years commercial, system-lifetime for clinical infrastructure
r: 3.5% public sector (Green Book), 8–12% commercial
Benchmarks: annual maintenance ≈ 15–20% of build cost; ~78% of lifetime
TCO post-launch; ignore decommissioning and vendor lock-in prices itself.
```

## Išspręstas pavyzdys

Dvi parinktys el. stebėjimų sistemai, 5 metų horizontas:

```
                        Vendor SaaS     In-house build
Year 0 (licence/build)  £250,000        £900,000
Integration + training  £180,000        £150,000
Annual run (yrs 1–5)    £120,000/yr     £190,000/yr  (hosting + 1.5 FTE maint.)
Exit/decommission       £60,000         £30,000

Undiscounted TCO        £1,090,000      £2,030,000
```

Kūrimo parinkties inžinerinis įvertis (900 tūkst. £) buvo tik 44 % tikrojo TCO – o kūrimo įverčiai patys paprastai viršijami 30–40 % (žr. [kurti ar pirkti](../kurti-ar-pirkti/)). Nebent vidinė parinktis duoda esmingai skirtingus *rezultatus*, taikoma [sąnaudų minimizavimo](../sąnaudų-minimizavimo-analizė/) logika, ir SaaS laimi ~940 tūkst. £.

## Ryšys su programinės įrangos inžinerija

Inžinieriai nepakankamai sveria savo srities priežiūros duomenis, gindami kūrimą: 15–20 % kūrimo kainos metinės priežiūros taisyklė reiškia, kad kiekviena 1 mln. £ sistema tyliai įsipareigoja 150–200 tūkst. £ per metus būsimų pajėgumų – įsipareigojimas, priklausantis tam pačiam mentaliniam balansui kaip [techninė skola](../techninė-skola/). TCO taip pat yra kainos pusė kiekvieno šio repozitorijaus rodiklio: kaina vienam diegimui, [debesijos vieneto ekonomika](../debesijos-vieneto-ekonomika/) ir vardiklio disciplina, kurią SVV primeta vaistų rėmėjams. Kai jūsų produkto kaina ginčijama, TCO palyginimas, įskaitant įsitvirtinusio tiekėjo tikrąsias veiklos sąnaudas, paprastai yra stipriausias prieinamas perrėminimas. Daugiametis TCO skaičius, kaip aukščiau, yra daugelio sąnaudų eilučių per laiką suma – žr. [valiutai saugus sąnaudų sumavimas](../valiutai-saugus-sąnaudų-sumavimas/) dėl to, kodėl ta suma turėtų būti tiksliai dešimtainė, o ne slankiojo kablelio, kai modelis privalo sutapti iki pensų, ir [tikslus sąnaudų paskirstymas centais](../tikslus-sąnaudų-paskirstymas-centais/) dėl TCO sumos padalijimo tarp sąnaudų centrų neprarandant pensų.

## Spąstai

- **Paleidimo kainos inkaravimas**: parinkčių palyginimas pagal 0 metų kainą, kai reitingas apsiverčia iki 3 metų.
- **Nemokamo vidinio darbo klaida**: vidinė priežiūra vertinama nuliu, nes „komandai jau sumokėta“ – žr. [alternatyvioji kaina](../alternatyvioji-kaina/).
- **Išėjimo sąnaudų ignoravimas**: duomenų eksportas, sutarties nutraukimas ir lygiagretus veikimas yra vieta, kur „pigus“ SaaS tampa brangus.
- **Vienodo horizonto pažeidimai**: 3 metų SaaS TCO lyginimas su 10 metų kūrimo amortizacija (žr. [laiko horizontas](../laiko-horizontas/)).

## Šaltiniai

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
