# QALY defizita eta larritasun-modifikatzaileak (QALY Shortfall and Severity Modifiers)

QALY defizitak neurtzen du gaixotasun batek pazienteei zenbat etorkizuneko osasun kentzen dien populazio orokorrarekin alderatuta. NICEk **larritasun-modifikatzaileak** aplikatzeko erabiltzen du: zenbat eta gaixoago populazioa, orduan eta balio handiagoa du lortutako QALY bakoitzak, atalase estandarraren 1,7× arte.

## Zergatik axola duen

NICEren 2022ko eskuliburutik, larritasuna osasun-irabazien balioaren biderkatzaile esplizitua da, bizitzaren amaierako lehengo prima ordezkatuz. Egoera larri baterako teknologia bat £30.000-ren ordez ~£51.000/QALY arteko atalase eraginkor baten aurka epaitzen da. Zure softwareak populazio larriki kaltetua zerbitzatzen badu (bihotz-gutxiegitasun aurreratua, buruko gaixotasun larria), larritasun-modifikatzailea kasu ekonomiko finantza daitekeenaren eta finantza ezin daitekeenaren arteko aldea izan daiteke, eta defizitaren matematika behar duzu aldarrikatzeko.

## Matematika

Bi neurri, geratzen den bizi osoan egungo ohiko arretarekin kalkulatuta:

```
Absolute shortfall     = QALYs_general_population − QALYs_with_condition
Proportional shortfall = Absolute shortfall / QALYs_general_population
```

NICE 2022ko pisuak (pisu handiagoa ematen duen neurria aplikatzen da):

```
Weight ×1.0: absolute < 12 and proportional < 0.85
Weight ×1.2: absolute ≥ 12 or proportional ≥ 0.85
Weight ×1.7: absolute ≥ 18 or proportional ≥ 0.95
```

Pisuak ΔE biderkatzen du (edo, baliokide, atalasea): λ eraginkorra £24k–£36k bihurtzen da ×1,2-n eta £34k–£51k ×1,7-n.

## Adibide landua

Egoera oldarkor bat duten pazienteak, batez besteko adina 60. 60 urteko populazio orokorrak 14,2 QALY eguneratu espero ditu; egoerarekin eta egungo arretarekin, 2,1.

```
Absolute shortfall     = 14.2 − 2.1 = 12.1  (≥ 12 → qualifies for ×1.2)
Proportional shortfall = 12.1 / 14.2 = 0.852 (≥ 0.85 → also ×1.2)
```

Zure monitorizazio-plataformaren ICERra £26.000/QALY da: £20k–£30k-ko erdiko epai estandarraren gainetik, mugan. ×1,2 pisuarekin: ICER eraginkorra = 26.000 / 1,2 ≈ **£21.700/QALY**, erraz finantza daitekeena. Defizitaren kalkuluak erabakia mugitu besterik ez du egin.

## Software ingeniaritzarekin lotura

Larritasun-pisaketa ingeniaritza-erakundeek senez egiten duten zerbaiten bertsio formala da: hobekuntza-unitate bakoitzeko gehiago gastatzea egoerarik txarrenean dauden sistemetan. Eredu transferigarria: kalkulatu zerbitzu bakoitzaren "SLO defizita" (espero den oinarrizko osasuntsutik zenbat behetik dabilen, absolutuki eta proportzionalki) eta pisatu konponketaren balioa horren arabera. Horrek, argudioen ordez aritmetikaz, justifikatzen du zergatik jasotzen duen legatu-sistema erretzen ari denak aurrezten den ordu bakoitzeko inbertsio handiagoa osasuntsu batek baino. Gobernantza-ikasgai bera ere badakar: argitaratu pisuak lehenespen-bilera *baino lehen*, edo talde guztiek larritasuna aldarrikatuko dute.

## Tranpak

- **Defizita oinarrizko lerro okerrarekin kalkulatzea**: *egungo ohiko arretapean* neurtzen da, ez tratatu gabeko historia naturalaren aurka.
- **Adinarekiko sentikortasuna**: defizita asko mendekoa da populazioaren adinaren gainean (gazteek QALY gehiago dute galtzeko, defizit absolutu handiagoa); erabili tratatutako populazioaren benetako adin-banaketa.
- **Modifikatzailea beste lekuetan aplikatzen dela suposatzea**: NICEren (Ingalaterra) mekanismoa da; beste HTA organoek larritasuna beste modu batean kudeatzen dute (edo batere ez).

## Iturriak

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
