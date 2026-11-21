# Keskomparyans ICER Kroes-Arghans

Keskomparya [ICER](../ratyo-kost-effeythusnans-ynkressys/) kowntys yn arghans unn pow erbynn [threshold parys-dhe-bayi](../harthow-bodh-dhe-dhalleth/) pow aral — po kuntell data kost kuntellys dres previans multinasyonal — a res step treylya arghans splann ha awditadow. Mar fyllir an fordh treylya, an keth skoodhyans a wra dhe flippya dewisyans degemeryans, kynth ny chanjis tra yn data klinikel po kost.

## Perag yth yw posek

Gidyans metodys ISPOR rag previansow klinikel multinasyonal (Willke et al., *Health Economics*, 1998) a erghis treylya kostow kanasow orth **parita nerth-prena (PPP)** — na ny yw reytys chanj marghas — pan geskomparyr an talvos ekonomek gwir a kanasow dres powyow, ha gwitha reytys chanj estern marghas rag an pyth may hons: patromya kasow arghans kroes-harth gwir. Kemmysk an dew yw unn a'n fowtys metodys HTA multinasyonal an moyha kemmyn, drefen bos an dew a hevel "an reyt chanj" dhe nebonan na wrug redya an gidyans, ha spredshyt ny lett dhis y wul yn kamm.

## An Matematik

```
icer_yn_arghans_leel = treylya(icer_yn_arghans_fenten, faktour_treylyans)

faktour_treylyans a res bos:
  faktour treylyans PPP  — rag keskomparya talvos ekonomek gwir a kanasow
                            dres powyow (erghys ISPOR rag CEA
                            multinasyonal)
  reyt FX marghas        — yn unnik rag pewasow arghans kroes-harth gwir

degemerewgh mar icer_yn_arghans_leel < threshold_leel
```

An rewl dewisyans y honan yw rewl threshold [ICER](../harthow-bodh-dhe-dhalleth/) kemmyn — `degemerewgh mar ICER < λ` — an govyn metodys a dheu hwosa an tema ma yw yn tien *pyth faktour treylyans* a dhre an figyr `icer_yn_arghans_leel` may hevel an rewl.

## Ensampel gwrys

ICER drog dhort previans US yw $45,000/QALY. Pow hypotetik ow ymportya a set y threshold displegyek y honan orth £34,000/QALY (figyr hypotetik kewar dhe'n pow rag an ensampel ma yn unnik — thresholdys gwir a dhiffer dre bow ha chanjya gans termyn, ha res yw pup-prys aga fenten ha'ga dydhya).

**Gans faktour treylyans PPP a 0.72** (displegyek, rag an ensampel ma yn unnik): $45,000 × 0.72 = £32,400/QALY. £32,400 < £34,000 → **degemerewgh**.

**Gans reyt chanj marghas a 0.79** yn le (displegyek): $45,000 × 0.79 = £35,550/QALY. £35,550 > £34,000 → **gwrewgh dewis**.

An keth ICER $45,000/QALY a dhre dewisyans degemeryans yn dann treylya PPP ha dewisyans dilansya yn dann treylya FX marghas. Hemma yw an displegyans konkrit a berag gidyans ISPOR a'n kemmer dewis faktour treylyans avel kas metodys a vri — na ny yw manylyon rondya, ha na ny yw tra dhe asa kuv yn fordula spredshyt na wra nagonan y dhiwiriya.

## Kolm gans ynjynnyans medhelweyth

Hemma yw an myrwhes ekonomek yeghes a gylgh ynjynnyans godhvedhys: ewnder pris-hanow kroes-arghans i18n/l10n yn medhelweyth kenwerthek, le may res bos pajen brisyow SaaS bythkweth keskomparya kuv an kevran `$` orth pris `£`. An sawder-an-sort a wra ehedh `Money` gwrys yn dha — metodys keskomparya a dhenys keskomparya arghansow na hevelens, ow terghi step treylya splann kyns — yw kehaval dhirek medhelweyth dhe'n poynt metodys ekonomek yeghes omma: na geskomparyewgh figuryow heb treylya dres arghansow, ha na asewgh an step treylya bos kuv po heb dogen.

## Fowtys Kemmyn

- **Keskomparya kevrennow yn arghansow dyffrans yn kuv**: ober HTA spredshyt ad hoc a dhiverra po keskomparya figyr dollar ha figyr pownd heb step treylya kyns — klass fowt a gachya an `Money` kodhvedhys-arghans dre dhyssyn yn le y asa avel fowt kuv.
- **Kemmysk reyt chanj marghas ha PPP**: an unn fowt metodys HTA multinasyonal an moyha kemmyn herwydh gidyans ISPOR — an dew niver a yll dhiffra yn kref ha gorthyp govynnow dyffrans (talvos ekonomek gwir erbynn kasow arghans gwir).
- **Na ra dydhya an reyt chanj po menegva PPP devnydhys**: an dew a vydh ow chanjya gans termyn, ytho pub faktour treylyans menegys a res bos dydhys kepar dell wra an repo ma dydhya y figuryow skoodhyer erel (talvosow karbon Green Book, talvos marwolieth lettys, hag yn rag).

## Fontynnow

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, data Parita Nerth-Prena (PPP). <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
