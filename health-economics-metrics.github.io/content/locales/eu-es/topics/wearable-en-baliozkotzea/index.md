# Wearable-en baliozkotzea (Wearable Validation)

Baliozkotze-metrikek wearable baten neurketak urrezko estandar klinikoarekin zein ongi bat datozen zenbatesten dute (ECG bihotz-maiztasunerako, polisomnografia loerako): **MAPE**, adostasun-korrelazioa, Bland–Altman adostasuna — gehi mundu errealeko datuen kalitatea mugatzen duten eragiketa-metrikak: **janzte-denboraren betetzea** eta **datuen osotasuna**.

## Zergatik axola duen

Baliozkotzea behe-ibilbideko guztiaren aurrebaldintza da: erreferentzia-neurketarekin adostasuna frogatu ezin duen gailu batek ezin ditu [endpoint digitalak](../amaiera-puntu-eta-biomarkatzaile-digitalak/) ainguratu, [RPM fakturazioa](../urruneko-pazienteen-monitorizazioaren-ekonomia/) onartu edo aldarrikapen klinikorik eraman. Arloak bihotz-maiztasunerako onartutako atalaseak: ECGren aurka **MAPE ≤%5** (zorrotza) edo **≤%10** (malgua). Literaturako erreferentzia-puntuak: Oura Gen 3 atsedeneko HR MAPE %1.67 (CCC 0.97); Fitbit Charge 6 MAPE ~%5.5 — kontsumo-gailuek orain maila klinikoaren muga zeharkatzen dute, eta horregatik axola du neurketak gailuko eta egoerako egiteak.

## Matematika

```
MAPE = (1/n) Σ |measured_i − reference_i| / reference_i × 100

CCC (concordance correlation) = agreement including both correlation
      and systematic bias (Pearson r penalized by location/scale shift)

Bland–Altman: mean bias ± 1.96 SD limits of agreement — shows whether
      error depends on the value's magnitude

Operational gates:
Wear-time compliance = time worn / protocol time × 100
Data completeness    = observed data points / expected × 100
```

Baliozkotzea **jarduera-baldintza bakoitzeko** (atsedena, mugimendua, loa) eta populazio bakoitzeko jakinarazi behar da — PPG sentsore optikoa okertzen da mugimendu-artefaktuekin, kontaktu txarrarekin eta larru-ton ilunagoekin, ekitatearekin lotutako hutsegite-modu dokumentatua.

## Adibide landua

Ospitale birtual baten programak monitorizazio-wearable bat hautatzen du. A hautagaia: atsedeneko MAPE %2.1, ariketa MAPE %11.4. B hautagaia: atsedena %3.8, ariketa %6.9.

```
Use case: deteriorating-patient detection at home — alerts trigger on
sustained elevated HR, often during activity.
Candidate A's headline (2.1%) wins the brochure; candidate B wins the
use case: at the alert-relevant condition (motion), A's 11.4% error
at HR 100 = ±11 bpm — spanning the entire alert threshold band,
generating false escalations (each a nurse callout, ~£40) or misses.

False-alert economics: 500 patients × 2 extra false alerts/week × £40
= £2.08M/year of error cost from choosing the wrong validation number.
```

## Software ingeniaritzarekin lotura

Ingeniariek baliozkotze-datuak kontsumitzen dituzte sentsoreak aukeratzean eta *sortzen* dituzte neurketa-eginbideak eraikitzean — bi rolek diziplina bera behar dute: probatu hedapen-baldintzan, ez demo-baldintzan (software-analogoa: zure produkzio-lan-karga benchmarkatzea, ez saltzailearena). Janzte-denbora eta osotasuna produktu-ingeniaritzaren emaitzak dira — erosotasunak, bateriaren iraupenak, kargatze-erritualaren diseinuak eta sinkronizazioaren fidagarritasunak zehazten dute 30etik 16 eguneko RPM fakturazio-atea betetzen den ([urruneko pazienteen monitorizazioaren ekonomia](../urruneko-pazienteen-monitorizazioaren-ekonomia/)) eta saiakuntza-datu-multzoak analiza daitezkeen. Tratatu falta diren datuak diseinatutako seinale gisa: bereizi "janzten ez da", "janzten da baina seinalerik ez" eta "sinkronizazioak huts egin du" eskeman lehen egunetik — null batean kolapsatuta, behe-ibilbideko analisi guztiak pozoitzen dituzte.

## Tranpak

- **MAPE agregatuak baldintza-espezifikoko hutsegitea ezkutatzea** — adibide landuaren tranpa.
- **Baliozkotze-populazioa ≠ hedapen-populazioa**: adinak, larru-tonuak, dardarak, obesitateak sentsore optikoaren errorea aldatzen dute; egiaztatu azterlanaren demografia.
- **Adostasuna behar den lekuan korrelazioa jakinaraztea**: Pearson r handiak alborapen sistematikoarekin atalase absolutuen aurka gaizki sailkatzen du — eskatu CCC/Bland–Altman.
- **Inputazioak puztutako osotasuna**: bete diren hutsuneak behatutako datu gisa jakinaraztea.

## Iturriak

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
