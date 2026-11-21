# Tantance AI na Asibiti

Muhimman ƙididdiga don tantance AI na asibiti ko samfurin bincike: ji, keɓancewa, AUROC, ƙimar hasashe, da adadin da ake bukatar bincike. Babban darasin tattalin arziki: **kyakkyawan AUROC ba ya sa tura aiki ya zama mai tasirin kuɗi** — daraja tana dogara ne a kan wurin aiki, yaɗuwa, da abin da ke faruwa bayan kowane sakamako mai kyau.

## Dalilin muhimmancinsa

Masu ƙa'ida (FDA, MHRA) suna ba da izinin AI na asibiti a **wurin aiki da aka kulle** — takamaiman ma'aurata ji/keɓancewa (misali, tsarin farko da FDA ta amince da shi na gano ciwon ido na masu ciwon suga ba tare da likita ba: ji 87.2%, keɓancewa 90.7% a gwajinsa na ainihi). Masana tattalin arzikin lafiya sai su yi tambayar da ma'aunan daidaito ba za su iya amsawa ba: a yaɗuwar al'ummar da ake turawa, menene kowane ganowa yake *kashewa*, kuma ko aiki a kansa ya cancanta? Kimantawar tattalin arziki ta AI na binciken ciwon ido (npj Digital Medicine 2024) ta nuna cewa ƙarin daidaito kaɗai bai tabbatar da tasirin kuɗi ba da zarar an ƙidaya kuɗin turawa.

## Lissafin

```
Sensitivity = TP / (TP + FN)        — of the truly positive, share caught
Specificity = TN / (TN + FP)        — of the truly negative, share cleared
AUROC       = P(model ranks a random positive above a random negative)
              0.5 chance … 1.0 perfect; threshold-independent — and therefore
              deployment-decision-insufficient

PPV = TP / (TP + FP)   ← prevalence-dependent (Bayes); collapses when rare
NPV = TN / (TN + FN)

NNS  ≈ 1 / (prevalence × sensitivity)       — screened per true case found
Cost per true case = programme cost / TP      — the economic bottom line
```

## Misali da aka lissafa

Samfuri ɗaya, yanayi biyu — ji 90%, keɓancewa 93%:

```
Specialist clinic (prevalence 20%):
  PPV = (0.9×0.2)/(0.9×0.2 + 0.07×0.8) = 0.18/0.236 ≈ 76%  → 3 in 4 alerts real

Primary care (prevalence 1%):
  PPV = (0.9×0.01)/(0.9×0.01 + 0.07×0.99) = 0.009/0.0783 ≈ 11.5%
  → 8 in 9 alerts false; workup at £350 each:
  cost per true case = (0.009 + 0.0693) × 350 / 0.009 ≈ £3,045 per case found
```

Samfuri iri ɗaya, tattalin arziki mabambanta ƙwarai — shi ya sa tantancewa ta musamman ga wuri jigon ƙa'ida ne kuma "samfurinmu yana da AUROC 0.95" farkon shari'ar tattalin arziki ne, ba ƙarshenta ba. Duba [tattalin arzikin gwajin bincike](../tattalin-arzikin-gwajin-bincike/) don cikakken lissafin shirin.

## Alaƙa da injiniyancin manhaja

Ga injiniyoyin da ke ginawa ko sayen AI na asibiti: **a aika matrix na rikicewa a yaɗuwar turawa**, ba lanƙwasar ROC kaɗai ba; **a bar iyaka ta zama shawarar tattalin arziki** — cinikin ji/keɓancewa ya kamata ya rage kuɗin da ake tsammani (lamuran da aka rasa × kuɗin rashi da ƙarairayin faɗakarwa × kuɗin bincike), ba ya ƙara ƙididdigar ma'auni ba; kuma a gane lissafin ɗaya a cikin kayan aikinka — tsarin faɗakarwa, masu gano abubuwan da ba na yau da kullum ba, da na'urorin duba tsaro gwaje-gwajen bincike ne a kan rafukan abubuwan da ba su da yaɗuwa, tare da gajiyar faɗakarwa a matsayin [NNH](../adadin-da-ake-bukatar-magani/). Sabunta samfuri da ke sauya wurin aiki yana sake buɗe tattalin arziki (da izinin ƙa'ida — duba [tantance AI ta hukumomin ƙa'ida](../tantance-ai-ta-hukumomin-ƙa-ida/)).

## Tarkuna

- **Zaɓen AUROC**: kwatanta samfura a AUROC alhali za su yi aiki a iyaka ɗaya — a kwatanta a wurin aiki.
- **PPV na yaɗuwar gwaji da aka ambata don turawa ta zahiri** — na gargajiya; a sake lissafa a yaɗuwar gida koyaushe.
- **Son zuciya na bambance-bambance**: samfuran da aka tabbatar a kan bayyanannun lamura da masu lafiya suna wuce gona da iri a tsakiyar maras tabbas da ke mamaye aiki.
- **Rashin ƙayyade farashin hanyar ƙasa**: kowane sakamako mai kyau yana jawo bincike; samfuri shiga tsakani ne a kan tattalin arzikin *dukan hanyar*.

## Tushe

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
