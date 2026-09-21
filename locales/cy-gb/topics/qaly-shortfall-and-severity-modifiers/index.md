# Diffyg QALY ac Addasyddion Difrifoldeb

Mae diffyg QALY yn mesur faint o iechyd yn y dyfodol y mae clefyd yn ei gymryd oddi wrth gleifion o'i gymharu â'r boblogaeth gyffredinol. Mae NICE yn ei ddefnyddio i gymhwyso **addasyddion difrifoldeb**: po fwyaf sâl y boblogaeth, y mwyaf gwerthfawr yw pob QALY a enillir — hyd at 1.7× y trothwy safonol.

## Pam mae hyn yn bwysig

Ers llawlyfr 2022 NICE, mae difrifoldeb yn lluosydd penodol ar werth enillion iechyd, gan ddisodli'r premiwm diwedd-oes blaenorol. Mae technoleg ar gyfer cyflwr difrifol yn cael ei farnu yn erbyn trothwy effeithiol o hyd at ~£51,000/QALY yn hytrach na £30,000. Os yw eich meddalwedd yn gwasanaethu poblogaeth a effeithir yn ddifrifol (methiant calon uwch, salwch meddwl difrifol), gall yr addasydd difrifoldeb fod y gwahaniaeth rhwng achos economaidd y gellir ei ariannu ac un na ellir ei ariannu — ac mae angen mathemateg diffyg arnoch i'w hawlio.

## Y Fathemateg

Dau fesur, wedi'u cyfrifo dros oes weddill gyda safon gofal gyfredol:

```
Diffyg absoliwt     = QALYs_poblogaeth_gyffredinol − QALYs_gyda_chyflwr
Diffyg cyfrannol     = Diffyg absoliwt / QALYs_poblogaeth_gyffredinol
```

Pwysau NICE 2022 (pa fesur bynnag sy'n rhoi'r pwysau uwch sy'n berthnasol):

```
Pwysau ×1.0: absoliwt < 12 a chyfrannol < 0.85
Pwysau ×1.2: absoliwt ≥ 12 neu gyfrannol ≥ 0.85
Pwysau ×1.7: absoliwt ≥ 18 neu gyfrannol ≥ 0.95
```

Mae'r pwysau'n lluosi ΔE (neu'n gyfatebol y trothwy): mae λ effeithiol yn dod yn £24k–£36k ar ×1.2 ac yn £34k–£51k ar ×1.7.

## Enghraifft Waith

Cleifion â chyflwr ymosodol, oedran cyfartalog 60. Mae'r boblogaeth gyffredinol yn 60 oed yn disgwyl 14.2 QALY wedi'u disgowntio; gyda'r cyflwr o dan ofal cyfredol, 2.1.

```
Diffyg absoliwt     = 14.2 − 2.1 = 12.1  (≥ 12 → yn gymwys ar gyfer ×1.2)
Diffyg cyfrannol     = 12.1 / 14.2 = 0.852 (≥ 0.85 → hefyd ×1.2)
```

Mae ICER eich platfform monitro yn £26,000/QALY — uwchlaw'r farn canolbwynt safonol o £20k–£30k, ar y ffin. Gyda'r pwysau ×1.2: ICER effeithiol = 26,000 / 1.2 ≈ **£21,700/QALY** — yn gyffyrddus y gellir ei ariannu. Newidiodd y cyfrifiad diffyg y penderfyniad yn syml.

## Cysylltiad Peirianneg Feddalwedd

Mae pwysoli difrifoldeb yn fersiwn ffurfiol o rywbeth y mae sefydliadau peirianneg yn ei wneud yn reddfol: gwario mwy fesul uned gwelliant ar y systemau gwaethaf eu byd. Y patrwm trosglwyddadwy — cyfrifwch "ddiffyg SLO" pob gwasanaeth (pa mor bell islaw ei linell sylfaen iach ddisgwyliedig y mae'n rhedeg, yn absoliwt ac yn gyfrannol), a phwyswch werth adfer yn unol â hynny. Mae hyn yn cyfiawnhau, gydag arithmetig yn hytrach na dadleuon, pam mae'r system etifeddiaeth sy'n llosgi'n cael mwy o fuddsoddiad fesul awr a arbedwyd na system iach. Mae hefyd yn cario'r un wers lywodraethu: cyhoeddwch y pwysau *cyn* y cyfarfod blaenoriaethu, neu bydd pob tîm yn hawlio difrifoldeb.

## Peryglon

- **Cyfrifo diffyg yn erbyn y llinell sylfaen anghywir**: mae'n cael ei fesur o dan y *safon gofal gyfredol*, nid hanes naturiol heb ei drin.
- **Sensitifrwydd oedran**: mae diffyg yn dibynnu'n drwm ar oedran y boblogaeth (mae gan gleifion iau fwy o QALYs i'w colli → diffyg absoliwt uwch); defnyddiwch ddosraniad oedran gwirioneddol y boblogaeth a driniwyd.
- **Tybio bod yr addasydd yn berthnasol mewn mannau eraill** — mecanwaith NICE (Lloegr) ydyw; mae cyrff HTA eraill yn trin difrifoldeb yn wahanol (neu ddim o gwbl).

## Ffynonellau

- Dadansoddiad o benderfyniadau addasydd difrifoldeb NICE, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Gwerthusiadau technoleg iechyd NICE: y llawlyfr (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, esboniad addasyddion penderfyniad HTA NICE. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
