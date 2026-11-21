# Eskern Karbon rag QALY

Karbon rag QALY yw ratyo effeythusnans — skoryow karbon an ynkleth (po skoryow hwithys) rannys dre an QALYs a dhelivr — kehaval dhe gost rag QALY, ow leva effeythusnans karbon an ynkleth dhe vos gwerthjys a-ryb y effeythusnans kost. "Prow mona nett karbon-addasys" a wra step moy, ow monodhya an efekt karbon dre dalvosow karbon ancovnys ofisyel Green Book an Rewlm Unys ha'y nettya erbynn [prow mona nett](../prow-mona-nett/) standard.

## Perag yth yw posek

NICE ha NHS England lemmyn a wra gwayans pyth yw efekt amwedhek a vo gwerthjys a-ryb kost ha QALYs. An NHS a'n jeves ervirans poblek nul-nett: nul-nett rag y skoryow dhirek erbynn 2040, ha nul-nett rag y eskern kowl an chayn-provians erbynn 2045. Lyver-dyski NICE rag gwerthjyansow teknologi yeghes (PMG36) a styr kerghynnedh amwedhek avel konsideryans nowydh yn apprais teknologi. Rag produkt yeghes nombrek, hemma a styr bos karbon ow tos avel pedrek pilier a'n kas talvos, a-ryb kost, QALYs ha [dominans war an harth effeythusnans](../dominans-ha-harth-effeythusnans/) — nyns yw dasserghyans rag nagonan anodhans, mes dimension a res moy hag moy dhe gas besneth gwrys yn ewn dh'y dhiskwedhes.

## An Matematik

```
Karbon rag QALY = skoryow_tonnes_co2e_oll / qalys_oll
  (talvos negativ a styr skoryow nett HWITHYS rag QALY gwynnys — gwayn
  dew-plyg: yeghes gwell ha karbon le)

Efekt karbon monodhys = skoryow_tonnes_co2e × talvos_karbon_rag_tonn
  (skoryow negativ × talvos pozitiv = kost negativ, hen yw prow)

NMB karbon-addasys = prow_mona_nett − efekt_karbon_monodhys
```

Hemma a ystynn an tybyans harth effeythusnans kost/QALY gans nessa ebel — karbon rag QALY — an keth lojik "tresewgh pub dewis ha gwelewgh pyth yw dominys" kepar ha [dominans ha harth effeythusnans](../dominans-ha-harth-effeythusnans/), devnydhys dhe garbon yn le kost.

## Ensampel gwrys

Servis telehyeghes a dhisplas gwelyansow dhirek, ow hwitha 5,000 viaj a-dro pub bledhen orth ogas 8kg CO2e kenyver — 40 tonn a CO2e hwithys, diskwedhys avel skoryow negativ (−40.0 tonn), ha hi a dhelivr 25 QALY/bledhen:

```
Karbon rag QALY = −40.0 / 25.0 = −1.6 tonn CO2e hwithys rag QALY gwynnys
```

Gans talvos karbon na vo marghasys Green Book (figyr displegya, talvos kres na vo marghasys 2023 ≈ £269/tonn CO2e — Green Book a nowydh talvosow karbon pub bledhen, gwiryewgh arta kyns ow menegi yn analys byw):

```
Efekt karbon monodhys = −40.0 × £269 = −£10,760
```

"Kost" a −£10,760 yw prow a £10,760. Mar yw prow mona nett a-ughel an ynkleth £500,000:

```
NMB karbon-addasys = £500,000 − (−£10,760) = £510,760
```

An sawyans karbon a gressa dhe'n kas yn le y wul le — an gwayn dew-plyg a vynn an framya skoryow negativ diskwedhes.

## Kolm gans ynjynnyans medhelweyth

Hemma yw kyfarvos bew, lemmyn gans ekonomek AI/skeul: an eskern karbon kompoutya a dhesky ha ledya model AI yw lemmyn linenn gwir yn prenas NHS, drefen kontraktow provyoryon NHS a-ugh thresholdys a res Towl Dyllas Karbon. [Ekonomek unys skeul](../ekonomek-unys-skeul/) a holya seulabrys kost rag unn a ger kompoutya; karbon rag QALY yw an patrom naturel rag metrik a dhe "kost karbon rag ynferans" a ystynn an modul ma ha ekonomek unys ynferans dhe'n dimension amwedhek, kyn na vydh an metrik na hag yn pur nowydh.

## Fowtys Kemmyn

- **Gamys harth-skope**: kowntya skoryow dhirek (Scope 1) yn unnik hag a-der skoryow chayn-provians (Scope 3), usi an moyha rann eskern gwir produkt yeghes nombrek.
- **Devnydh talvos karbon koth**: Green Book a nowydh y dalvosow karbon pub bledhen, ytho pub figyr £/tonn menegys a res bos dydhys, na ny yw konstant fast.
- **Trettya "karbon-effeythus" avel dasserghyans a "kost-effeythus"**: ynkleth karbon-ysel, talvos-ysel yw hogen devnydh gwann a drygow NHS. Karbon yw pedrek pilier a-ryb kost ha QALYs, nyns yw dasserghyans a nagonan.

## Fontynnow

- NHS England, "Delivering a Net Zero National Health Service" (2020, nowydhys 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, Green Book: gidyans ystynnys Talvosow Karbon (nowydhys pub bledhen; talvos kres na vo marghasys ≈ £269/tCO2e, 2023 — dydhewgh pub menegyans). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
