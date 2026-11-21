# Daugiakriterinė sprendimų analizė (MCDA)

Daugiakriterinė sprendimų analizė (MCDA) yra svertinės sumos vertinimo modelis, naudojamas sveikatos technologijų vertinime, kai vienas ICER / norimo mokėti slenkstis neapima visko, kas rūpi sprendimų priėmėjui: lygybė, nepatenkintas poreikis, naujovė, biudžeto poveikis, ligos sunkumas. Kiekvienas kriterijus gauna svorį, atspindintį jo svarbą (išgautą iš suinteresuotųjų šalių, svorių suma lygi 1), kiekviena parinktis gauna normalizuotą balą pagal kriterijų (paprastai 0–1), o bendras balas yra svertinė suma – ta pati matematinė forma kaip programinės įrangos tiekėjų pasirinkimo vertinimo kortelė.

## Kodėl tai svarbu

MCDA naudojama tokiose sistemose kaip EVIDEM ir kai kurių SVV institucijų našlaičių / retų ligų vertinimuose, kur griežtas kainos už QALY slenksčio metodas laikomas per siauru, kad apimtų viską, kas svarbu sprendimui. ISPOR MCDA Emerging Good Practices Task Force suformalizavo gerosios praktikos gaires svoriams ir balams ginamai išgauti, būtent todėl, kad neformaliai pasvertas sprendimas lengvai sukonstruojamas ir lengvai manipuliuojamas. Kai sveikatos technologija tikrai turi vertės dimensijų, kurių vienas [norimo mokėti slenkstis](../pasirengimo-mokėti-slenksčiai/) negali atvaizduoti – sunkumas, naujovė, lygybė – MCDA suteikia sprendimų priėmėjams aiškią, audituojamą struktūrą jiems sujungti, o ne nepasakytą vertinimo sprendimą.

## Matematika

```
MCDA score = Σ_i (weight_i × score_i)

weights should sum to 1 (elicited via stakeholder methods such as swing
weighting or the Analytic Hierarchy Process)
```

## Išspręstas pavyzdys

SVV komitetas vertina skaitmeninę terapijos priemonę pagal keturis kriterijus:

```
Criterion                          Weight   Score   Weight × Score
Clinical benefit                   0.4      0.8     0.32
Cost impact                        0.3      0.5     0.15
Disease severity / unmet need      0.2      0.9     0.18
Innovation                         0.1      0.6     0.06
                                    ─────                ─────
                                    1.0                  0.71
```

Svorių suma lygi 1,0 (0,4 + 0,3 + 0,2 + 0,1), o MCDA balas yra 0,71 (0,32 + 0,15 + 0,18 + 0,06). Komitetas lygina 0,71 su iš anksto sutartu slenksčiu arba reitinguoja prieš konkuruojančias technologijas, įvertintas taip pat.

## Ryšys su programinės įrangos inžinerija

Tai ta pati matematika kaip svertinė tiekėjų pasirinkimo vertinimo kortelė, RFP vertinimo matrica ar funkcijų prioritetų vertinimo modelis – žr. [kurti ar pirkti](../kurti-ar-pirkti/), klasikinį svertinės kortelės panaudojimo atvejį programinės įrangos pirkimuose. Taip pat verta palyginti su [WSJF ir CD3](../wsjf-ir-cd3/): WSJF / CD3 yra *santykiu* pagrįstas prioritetų nustatymo metodas (vėlavimo kaina, padalyta iš darbo dydžio ar trukmės), o MCDA yra svertinė *suma*. MCDA ir WSJF / CD3 yra du struktūriškai skirtingi atsakymai į „kaip reitinguoti konkuruojančias parinktis“, ir žinoti, kurio iš tikrųjų reikia konkrečiam sprendimui – adityvi vertė per nepriklausomus kriterijus, ar vertės tankis vienam retų pajėgumų vienetui – svarbiau už tai, kuri formulė atrodo griežtesnė.

## Spąstai

- **Svorių išgavimo šališkumas**: kas nustato svorius, faktiškai iš anksto nulemia reitingą, todėl „formulė“ gali išplauti politinį ar komercinį sprendimą kaip objektyvų skaičiavimą. Dokumentuokite, kas nustatė svorius ir kaip.
- **Kriterijaus, jau užfiksuoto kitur, dvigubas skaičiavimas**: „ekonominio efektyvumo“ vertinimas kaip vieno kriterijaus *kartu* atskirai vertinant „sąnaudų poveikį“ per daug sveria pinigus kitų kriterijų atžvilgiu, niekam to nenorint.
- **Klaidingas tikslumas**: dviejų dešimtainių ženklų svertinis balas (0,71) numano daugiau griežtumo, nei iš tikrųjų palaiko pagrindiniai 0–10 suinteresuotųjų šalių įverčiai, o vertintojų tarpusavio kintamumas tuose įverčiuose dažnai visai nepateikiamas.

## Šaltiniai

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
