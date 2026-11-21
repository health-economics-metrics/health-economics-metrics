# Bledhydhyow Bewnans Gwynnys (LYG)

Bledhydhyow bewnans gwynnys yw an gwythyans ekstra attributable dhe ynkleth, heb addasyans kwalita: an ranndir ynter kromm gwythyans gans ha heb. An bledhen-bewnans gwynnys-talvos-kehaval (evLYG) yw variant nowydh a gryt oll ystynnans bewnans yn kehaval.

## Perag yth yw posek

LYG yw an sewyans yeghes an moyha krev: pygen hir a vew an bobel? A dal pan yw data kwalita ankavadow, pan geskomparyr orth arvedhoryon dyskredhek QALY, ha yn onkolojieth le may yw kromm gwythyans pennhweth derivas an previans. An **evLYG** (devnydhys gans an institut ICER US a-ryb kost/QALY) a eus rag kaus ethek: QALYs a dalvos bledhen bewnans ystynnys dre dalvos an klav, ytho ystynna bewnans den gans anabalder a "gownt le"; evLYG a dalvos pub bledhen ystynnys orth talvos fast, ow tiberthi an diwysyans na.

## An Matematik

```
LYG = gwythyans kres_nowydh − gwythyans kres_keskomparyer
    = ranndir ynter kromm gwythyans (kesys dhe horizon termyn)

Golok QALY a ystynnans bewnans:  ystynnans × talvos klav
Golok evLYG a ystynnans bewnans: ystynnans × talvos fast (ICER a dhevnydh ~0.851,
                                 talvos kres pobel US)
```

An dew yw [diskontys](../diskontya-ha-preferans-termyn/) yn patromow ekonomek.

## Ensampel gwrys

Algorythm rag-wolok sepsis y'n klavji: patrom a dhiskwedh bos antibiotykow a-varr a wetha 12 mernans/bledhen; oos kres an klevyon na a re 8 bledhen bewnans a-gedh rag pub unn orth talvos 0.7.

```
LYG   = 12 × 8            = 96 bledhen-bewnans/bledhen
QALYs = 96 × 0.7          = 67.2
evLYG = 96 × 0.851        = 81.7
```

Orth £20,000 rag QALY, an framya QALY a dalvos an gwythyans orth £1.34M/bledhen; an framya evLYG orth £1.63M. An bwlgh yw an dewisyans ethek a-dro mar talvos bledhen bewnans orth talvos 0.7 70% a'n unn "kowl". Dossierys krev a dherivow an dew.

## Kolm gans ynjynnyans medhelweyth

- Analys gwythyans yw an kyst-ark kemmyn: kromm Kaplan-Meier rag klevyon ha rag *servisow* (termyn-bys-fyll, termyn-bys-dilanans) yw an keth matematik. "Bledhydhyow-servis gwynnys" dhort investyans fydhyansri = ranndir ynter kromm gwythyans an system gans/heb — framya moy onest ages klaymow MTTF poynt.
- An evLYG a dheg gwarnyans dyssynyans-metrik rag ynjynnyans ynwedh: kenyver metrik produktivita a bys worrow dre faktour "kwalita tim" a wra systemek leha-talvosya gwellheansow rag timow strishys po ow strivya — nebes prys y fynnewgh an variant kehaval yn arvedh.

## Fowtys Kemmyn

- **Gwythyans kres-an-kres erbynn kres**: patromow ekonomek a res kres (ranndir a-dann kromm); previansow a bennhweth menowgh kres-an-kres. Y a dhiffer meur yn dasparthow skeusys.
- **Ystynna a-hes holya previans** a ledh LYG patromys yn klevyd hirdermyn — derivewgh an patrom ystynna ha previewgh yn [analys ansylder](../analys-tebelder/).
- **Klamya mernansow lettys dhort data kyns/wosa gwelys** heb addasya rag kesmesk-kas ha tuedhow hirdermyn.

## Fontynnow

- Gerlyver York Health Economics Consortium: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
