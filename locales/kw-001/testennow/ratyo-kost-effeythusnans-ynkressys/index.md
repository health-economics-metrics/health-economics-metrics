# Ratyo Kost-Effeythusnans Ynkressys (ICER)

An ICER yw an kost ekstra rag pub unnys ekstra a efekt yeghes pan dhewisewgh unn dewis a-ugh an dewis gwella nessa. Yw an niver-penn a wartherans teknologi yeghes. (Pan yw an unnys efekt QALYs, hi yw gelwys ynwedh ratyo kost-talvos ynkressys, ICUR.)

## Perag yth yw posek

Systemow yeghes na wrons bythkweth gwerthjya teknologi yn y unnyk — bythkweth *yn ynkressys*, erbynn an pyth a vedhya gwrys. NICE a geskomparya ICER teknologi dhe'y threshold **£20,000–£30,000 rag QALY**; an institut ICER US a dhrapporta dres $50,000–$200,000/QALY; Kanada a oberi orth ogas CAD$50,000/QALY. Mar yw dha broduk "talvosek" dhe servis yeghes kenedhlek yw, yn furvyek, mar tremena y ICER an threshold leel. Gwelewgh [thresholdys parys-dhe-bayi](../harthow-bodh-dhe-dhalleth/).

## An Matematik

```
ICER = (Kost_nowydh − Kost_keskomparyer) / (Efekt_nowydh − Efekt_keskomparyer)
     = ΔC / ΔE
```

Rewlys styrans:

- ΔC < 0, ΔE > 0: an dewis nowydh **a dhominya** — es ha gwell; heb res a ratyo.
- ΔC > 0, ΔE > 0: kowntewgh ICER, keskomparewgh gans threshold λ; degemerewgh mar ICER < λ.
- ΔC > 0, ΔE < 0: an dewis nowydh yw dominys — dyskewgh.
- Ratyos a omdhal yn drog ogas ΔE = 0 — kemmerewgh [prow mona nett](../prow-mona-nett/) rag rankya.

An keskomparyer a res bos an *dewis gwella nan-dominys nessa*, na ny yw "gul tra vyth" — gwelewgh [dominans ha harth effeythusnans](../dominans-ha-harth-effeythusnans/).

## Ensampel gwrys

Servis wolok pell rag klevyon fyllans kolon, rag 1,000 klav/bledhen, erbynn kuransek usadow:

```
Kostow:  servis £900,000; kemmyskyow hwithys a sav £600,000
         ΔC = 900,000 − 600,000 = £300,000
Efektys: ynkleth a-varr a wayn 25 QALY
         ΔE = 25

ICER = 300,000 / 25 = £12,000 rag QALY
```

£12,000/QALY yw yn es a-woeles threshold £20,000 NICE — kas krev. Merkewgh fatell dal kost *nett*: heb an gwyskyans £600,000 an ICER a via £36,000/QALY ha'n kas a fyllsa yn tybyadow. Gwyskyansow kost ha ansawor aga skoodhyans yw ple may veu analys a'n par ma gwynnys ha kellys (gwelewgh [kostow a-dhelergh hwithys](../kostow-a-dhelergh-hwithys/)).

## Kolm gans ynjynnyans medhelweyth

Dyskyplin ICER a dreuswerth yn kowal dhe dewisyansow ynjynnyans:

```
(kost dewis B − kost dewis A) / (sewyans B − sewyans A)
```

— kost ynkressys rag displegyans ekstra, rag eur-ynjynnyer sawys, rag hwarvos hwithys — bythkweth erbynn an dewis gwella nessa, na ny yw erbynn gul tra vyth. An dew usadow dhe ladra: (1) *henwewgh an keskomparyer yn splann*; an moyha klaymow ROI ark a geskomparya yn kuv orth den-gwellen; (2) *nettewgh kostow kensa* — ark a gost £100k mes a dhisplas £80k a spena a-lemmyn a'n jeves ΔC = £20k.

## Fowtys Kemmyn

- **Keskomparya ICER dres arghansow heb step treylya splann**: ICER kowntys yn arghans unn pow a res bos treylys gans fordh derivys kyns y geskomparya dhe threshold pow aral — gwelewgh [keskomparyans ICER kroes-arghans](../keskomparyans-icer-kroes-arghans/) rag perag y hyll dewis faktour treylya (parita nerth-prena erbynn reyt chanj marghas) yn y honan dreylya an dewisyans degemeryans.
- **Gwari keskomparyer**: keskomparya orth dalleth-linenn koth po fals-drog a ormens ΔE ha flatra ICER.
- **Kresow yn le ynkressow**: kost rag QALY towl kowl nyns yw ICER an ystynnans po degemeryans anodho.
- **Gordhya talvos-poynt**: ICERs yw ratyos a dhew diffrans ansyker; derivewgh ansylder dre [PSA ha CEACs](../analys-ansylder-probabilistek/).
- **ICERs negativ yw dew-styrek** (es-ha-gwell erbynn kostus-ha-gwettha a re an keth arwodh) — na dherivewgh bythkweth ICER negativ heb lavar pyth kwadrant yw.

## Fontynnow

- NICE: FAQ thresholdys kost-effeythusnans. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- Gerlyver York Health Economics Consortium: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
