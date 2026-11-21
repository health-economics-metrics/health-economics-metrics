# Analys Dewisyans Lies-Krytyryon (MCDA)

Analys dewisyans lies-krytyryon (MCDA) yw patrom skorya sommya-pysys devnydhys yn HTA pan na wra unn threshold ICER/parys-dhe-bayi kavos pub tra a dal dhe wrer-dhewisyans: kehaval, ilvergh nan-dhelivrys, nowedhyans, efekt budjet, tevyans klevyd. Pub krytyryon a res pys a dhiskwedh y vri (dynnys dhort rann-perghenogyon, pyssyansow ow sommya dhe 1), pub dewis a res skor normalizys rag pub krytyryon (peub-prys 0–1), ha'n skor kowl yw an sommya pysys — an keth furv matematek avel skorkard dewis-gwerther medhelweyth.

## Perag yth yw posek

MCDA a vydh devnydhys yn framyow kepar ha EVIDEM, ha gans nebes korfow HTA rag apraisyow klevydhyow dyber/skant le may tybyr threshold kost-rag-QALY strit re gyng rag kavos pub tra a vri dhe'n dewisyans. Task Force Praktisyow Da Dasserghys MCDA ISPOR a furvyas gidyans praktis da rag dynnya pyssyansow ha skoryow yn defendyek, drefen bos dewisyans pysys yn anfurvys es dhe wil hag es dhe wari. Pan wra teknologi yeghes kavos yn gwir dimensyons talvos na yll unn [threshold parys-dhe-bayi](../harthow-bodh-dhe-dhalleth/) aga diskwedhes — tevyans, nowedhyans, kehaval — MCDA a re dhe wrer-dhewisyansow strukter splann, awditadow dhe'ga ystynna, yn le dewisyans anlavar.

## An Matematik

```
Skor MCDA = Σ_i (pys_i × skor_i)

pyssyansow a res sommya dhe 1 (dynnys dre fordhow rann-perghenek kepar ha
pysya-swing po Proses Hierarkek Analytek)
```

## Ensampel gwrys

Kussel HTA a skor terapi nombrek dhe beswar krytyryon:

```
Krytyryon                          Pys      Skor    Pys × Skor
Prow klinikel                      0.4      0.8     0.32
Efekt kost                         0.3      0.5     0.15
Tevyans klevyd / ilvergh           0.2      0.9     0.18
Nowedhyans                         0.1      0.6     0.06
                                    ─────                ─────
                                    1.0                  0.71
```

Pyssyansow a sommya dhe 1.0 (0.4 + 0.3 + 0.2 + 0.1), ha skor MCDA yw 0.71 (0.32 + 0.15 + 0.18 + 0.06). An kussel a geskomparya 0.71 orth threshold rag-ervirys, po y ranka erbynn teknologis kesstrif skorys yn kehaval.

## Kolm gans ynjynnyans medhelweyth

Hemma yw an keth matematik avel skorkard dewis-gwerther pysys, matrik gwerthjyans RFP, po patrom skorya kynsedhel nodh — gwelewgh [gwil erbynn prena](../gwil-erbynn-prena/), kas klassek skorkard pysys yn provians medhelweyth. A dal ynwedh y geskomparya gans [WSJF ha CD3](../wsjf-ha-cd3/): WSJF/CD3 yw fordh rankya diwar *ratyo* (kost dalgh rannys dre veur ober po hys), hag MCDA yw *sommya* pysys. MCDA ha WSJF/CD3 yw dew worthyp strukturek dyffrans dhe "fatell rankyn dewisow kesstrif," ha godhvos pyth unn a wra dewisyans res yn gwir — talvos kuntellys dres krytyryon anserhek, erbynn dynsys talvos rag unnys kanasow skant — a vri moy ages pyth fordula a hevel moy krev.

## Fowtys Kemmyn

- **Bias dynnans pys**: neb a settya an pyssyansow a ragderivas yn effeythus an ranka, ytho "fordula" a yll glanhe dewisyans politek po kenwerthek avel kowntyans objektif. Dokumentewgh piw a settyas an pyssyansow ha fatell.
- **Dewblya krytyryon kowntys kyns yn tyller aral**: skorya "kost-effeythusnans" avel unn krytyryon *ha* dispar skorya "efekt kost" a'n gorbris mona erbynn krytyryon erel heb bos ervirys gans nagonan.
- **Ewnder fals**: skor pysys dew-desimal (0.71) a dhiskwedh moy kref ages an dyskyransow rann-perghenek 0–10 a skoodh yn gwir, ha'n varyans ynter-dhewisor y'n dyskyransow na a vydh menowgh na dherivys hag oll.

## Fontynnow

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
