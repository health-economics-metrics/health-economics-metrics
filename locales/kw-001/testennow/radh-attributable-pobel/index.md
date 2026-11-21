# Radh Attributable Pobel (PAF)

PAF yw an radh a'n fardel klevyd po sewyans yn pobel usi attributable dhe ekspoziyans risk-faktour spesifek — an rann a dhiwanya mar fo an ekspoziyans dyberthys yn tien. Hi a dreyl "an faktour risk ma a dhewblya dha hap" dhe niver nivel-pobel a yll kommyssyoner ervira orto: pys kas, ha pyth kost, a dal ekspoziyans dhe vos hwiles.

## Perag yth yw posek

Levin a dhallethas PAF yn 1953 dhe worthyp govyn kul, konkrit: mar na ve den ow pyska, pys kanser skyber a dhiwanya? An keth aritmetik a settya lemmyn towlow lettyans kenedhlek yn pub tyller dhort strateji tobak ha kesk dhe rankyow faktour risk studhyans Global Burden of Disease WHO, drefen bos risk perthynek yn unnik heb lavar tra a efekt — faktour risk a yll dewblya dha hap a hwarvos skant ha na symudh fardel klevyd pobel marnas nebes, po kressa hap hwarvos kemmyn marnas bynnari ha hwath kowntya rann vras a gasow. PAF yw an pyth a dreyl "faktour risk X yw peryllus" dhe "dyberth faktour risk X a wetha an niver ma a gasow/bledhen," an niver a res kas besneth towl lettyans yn gwir. Gwelewgh [ekonomek lettyans](../ekonomek-lettyans/) rag pyth a gost gul warnodho wosa kavos an niver.

## An Matematik

```
PAF = pewas_ekspoziys × (risk_perthynek − 1) / (1 + pewas_ekspoziys × (risk_perthynek − 1))

pewas_ekspoziys = radh a'n pobel ekspoziys dhe'n faktour risk (0–1)
risk_perthynek  = risk a'n sewyans yn tus ekspoziys erbynn heb ekspoziyans (rag ensampel 2.5 = 2.5×)

Kasow attributable = kasow_oll × PAF
```

PAF a yskynn gans an dew bewas ekspoziyans ha risk perthynek — risk perthynek moderat (lavar 1.5×) kolmys dhe ekspoziyans pur gemmyn a yll dhri PAF brassa ages risk perthynek dramatek (lavar 5×) kolmys dhe unn skant. Hemma yw an kaus a dhyskudh perag y'ma hi niver dispar dhort risk perthynek.

## Ensampel gwrys

Faktour risk yw present yn 30% a bobel (`pewas_ekspoziys = 0.3`) ha a dhrehedh risk an sewyans 2.5-plyg (`risk_perthynek = 2.5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31.0%)

Gans 1,000 kas/bledhen y'n pobel:
Kasow attributable = 1,000 × 0.3103 ≈ 310 kas/bledhen
```

Nebes ogas a dhiwettha tredhel a fardel bledhenyek an sewyans ma yw attributable dhe'n ekspoziyans — y dhyberth yn tien (an gwarthel tybyek; nagonan ynkleth gwir a dhrehedh 100% dyberth ekspoziyans) a wetha ogas 310 a'n 1,000 kas pub bledhen.

## Kolm gans ynjynnyans medhelweyth

PAF yw an versyon epidemiologek a "pyth radh a'gan kyfrol hwarvos yw attributable dhe'n unn kaus-gwredh ma?" — an keth furv govyn a wra tymow pan wrons pysya klass displegya po dependans erbynn oll hwarvosow produksyon, yn le trettya pub hwarvos kehaval dhe dhasserghi yn keth fordh. Klass kaus-gwredh present y'n rann vras a displegyansow gans risk perthynek moderat a dhrehedh hwarvos a yll ranka a-ugh klass skant, risk-perthynek-uhel rag ple spena kensa ynjynnyans — an keth poynt PAF, treylys.

## Fowtys Kemmyn

- **Sommya PAFs dres faktours risk**: PAFs rag lies faktour ow tuchya an keth sewyans na sommya dhe 100% — y hyllons dhres, drefen bos faktours ow kesvyska ha rannya fordhow kawsek. Trettewgh pub PAF avel "mar fo an faktour ma yn unnik dyberthys," bythkweth avel rannans a risk kowl.
- **Treuswerth risk perthynek dres pobel**: risk perthynek estymys yn unn pobel (pewas ekspoziyans dalleth dyffrans, kesmeskyoryon dyffrans) a gownt PAF kamdhesys pan vo devnydhys dhe bewas ekspoziyans pobel aral.
- **Kemmysk PAF gans risk attributable yn tus ekspoziys**: PAF yw nivel-pobel hag a dhepyn war bewas ekspoziyans; risk attributable yn ekspoziys yw nivel-unn-den ha na ra. Y worthypons govynnow dyffrans — na dhelivrewgh unn dhe worthyp an aral.

## Fontynnow

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
