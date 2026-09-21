# Blwyddyn Bywyd wedi'i Addasu yn ôl Ansawdd (QALY)

Mae QALY yn un flwyddyn o fywyd a fyw mewn iechyd perffaith. Mae'n cyfuno *pa mor hir* y mae pobl yn byw gyda *pa mor dda* y maent yn byw, fel bod blwyddyn mewn iechyd gwael yn cyfrif am lai nag un QALY — gan wneud ymyriadau iechyd cwbl wahanol yn gymaradwy ar un raddfa sengl.

## Pam mae hyn yn bwysig

Y QALY yw arian cyffredin gwerthuso technoleg iechyd. Mae NICE (Lloegr) yn prisio enillion iechyd rhwng **£20,000 a £30,000 y QALY**: mae ymyriad sy'n prynu QALYs yn rhatach na'r trothwy hwnnw fel arfer yn cael ei argymell; mae un sy'n eu prynu'n ddrutach fel arfer yn cael ei wrthod. Dyma sut mae gwasanaeth iechyd cenedlaethol yn cymharu cyffur canser, llawdriniaeth glun, ac ap trearn ar yr un echel. Os gall eich meddalwedd hawlio QALYs yn gredadwy — trwy atal dirywiad, cyflymu triniaeth, neu wella diogelwch — gallwch brisio ei werth iechyd yn yr un arian â meddygaeth ei hun.

## Y Fathemateg

```
QALYs = Σ_i (hyd_i × defnyddioldeb_i)

hyd_i = blynyddoedd a dreulir yn nghyflwr iechyd i
defnyddioldeb_i  = pwysau ansawdd cyflwr i, wedi'i angori ar 1 = iechyd perffaith, 0 = marw
             (caniateir gwerthoedd negyddol ar gyfer cyflyrau gwaeth na marwolaeth)
```

Daw pwysau defnyddioldeb o offerynnau dilysedig, yn fwyaf cyffredin [EQ-5D](../eq-5d/). *Ennill* QALY o ymyriad yw'r gwahaniaeth rhwng y ffrydiau QALY gyda ac heb yr ymyriad, wedi'u [disgowntio](../discounting-and-time-preference/) ar 3.5%/blwyddyn yn achos cyfeirio NICE.

## Enghraifft Waith

Mae claf yn aros am driniaeth galon mewn cyflwr â defnyddioldeb 0.6. Mae triniaeth yn ei adfer i ddefnyddioldeb 0.85.

- **Wedi'i drin nawr**: 1 flwyddyn ar 0.85 = 0.85 QALY y flwyddyn hon.
- **Wedi'i drin ar ôl oedi o 6 mis**: 0.5 × 0.6 + 0.5 × 0.85 = 0.725 QALY.
- **Colled QALY fesul claf o'r oedi**: 0.85 − 0.725 = **0.125 QALY**.

Wedi'i ariannoli yn nhrothwy NICE: 0.125 × £20,000–£30,000 = **£2,500–£3,750 o werth iechyd a gollwyd fesul claf fesul oedi 6 mis**. Os yw meddalwedd sy'n cyflymu'r llwybr yn dileu'r oedi hwnnw ar gyfer 400 o gleifion/blwyddyn, y gwerth iechyd yw 50 QALY ≈ **£1.0–£1.5 miliwn/blwyddyn** — cyn cyfrif unrhyw arbedion gweithredol.

## Cysylltiad Peirianneg Feddalwedd

- **Llwybrau cyflymach = QALYs cynharach.** Mae unrhyw beth sy'n byrhau [atgyfeirio i driniaeth](../referral-to-treatment/) yn trosi anfudd amser aros yn enillion iechyd, wedi'i brisio fel uchod.
- **Diogelwch = QALYs a gadwyd.** Mae gwallau meddyginiaeth a diagnosisau a gollwyd a atalwyd yn golledion QALY a osgowyd.
- **Mae'r QALY hefyd yn dempled dylunio metrig**: cyfuniad o faint × ansawdd, gyda phwysau ansawdd wedi'u dwyn allan o offeryn safonedig. Mae "blwyddyn peiriannydd wedi'i haddasu yn ôl ansawdd" (amser × pwysau arolwg DevEx) yn adeiladwaith union yr un fath — gweler [SPACE a DevEx](../space-and-devex/).
- I droi QALYs yn arian ar gyfer achos busnes, defnyddiwch [budd ariannol net](../net-monetary-benefit/); i'w troi'n benderfyniad, defnyddiwch [trothwyon parodrwydd i dalu](../willingness-to-pay-thresholds/).

## Peryglon

- **Dyfeisio pwysau defnyddioldeb.** Rhaid i bwysau ddod o offerynnau dilysedig (EQ-5D) a setiau gwerth cyhoeddedig, nid greddf.
- **Hawlio QALYs heb lwybr achosol.** Nid yw "mae ein ap yn gwella lles" yn hawliad QALY; mae "yn dileu X wythnos o aros mewn cyflwr â defnyddioldeb 0.6" yn hawliad.
- **Cyfrif dwbl**: mae hawlio'r ennill QALY a'r arbedion cost o'r un dirywiad a osgowyd yn gofyn am ofal eu bod yn wirioneddol ar wahân.
- **Mannau dall tegwch**: mae QALYs yn prisio blwyddyn o estyniad bywyd yn ôl defnyddioldeb sylfaenol, a all anfanteisio pobl ag anableddau — y rheswm bod ICER (UDA) hefyd yn adrodd yr evLYG (gweler [blynyddoedd bywyd a enillwyd](../life-years-gained/)).

## Ffynonellau

- Geirfa NICE: QALY. <https://www.nice.org.uk/glossary?letter=q>
- Gwerthusiadau technoleg iechyd NICE: y llawlyfr (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
