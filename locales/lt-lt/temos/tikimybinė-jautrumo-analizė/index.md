# Tikimybinė jautrumo analizė (PSA)

PSA kiekvienam neapibrėžtam parametrui priskiria tikimybių skirstinį, tūkstančius kartų (Monte Karlo) vienu metu juos visus atrenka ir pateikia *tikimybę*, kad parinktis yra geriausias pasirinkimas – užuot pateikusi vieną taškinį įvertį.

## Kodėl tai svarbu

NICE etaloninis atvejis *reikalauja* PSA. Deterministinė analizė atsako „kas jei viena įvestis klaidinga?“; PSA atsako „atsižvelgiant į viską, ko nežinome vienu metu, kiek tikėtina, kad priimame teisingą sprendimą?“ Jos būdingas rezultatas, **ekonominio efektyvumo priimtinumo kreivė (CEAC)**, pavaizduoja tikimybę, kad parinktis yra ekonomiškai efektyvi, prieš norimo mokėti slenkstį – paversdama „ICER yra 24 000 £/QALY“ į „yra 78 % tikimybė, kad tai teisingas pasirinkimas ties 30 000 £/QALY“.

## Matematika

```
For each of N draws (N ≈ 10,000):
  sample every parameter θ from its distribution
    (costs ~ Gamma, probabilities ~ Beta, utilities ~ Beta, effects ~ Normal/logNormal)
  compute NMB_j(θ) = λ × Effect_j(θ) − Cost_j(θ) for each option j

CEAC_j(λ) = fraction of draws in which option j has the highest NMB at threshold λ
```

NMB žr. [grynoji piniginė nauda](../grynoji-piniginė-nauda/), λ – [norimo mokėti slenksčiai](../pasirengimo-mokėti-slenksčiai/).

## Išspręstas pavyzdys

Platformos migracijos verslo byla. Trys neapibrėžtos įvestys:

```
Migration cost      ~ Gamma,  mean £800k, sd £200k
Annual benefit      ~ Normal, mean £350k, sd £150k
Benefit duration    ~ Uniform, 3–6 years
```

Kiekvienam iš 10 000 traukimų apskaičiuojama grynoji nauda = trukmė × metinė − kaina (diskontavimas dėl aiškumo praleistas). Iliustraciniai rezultatai:

```
Mean net benefit:      £775k
Probability net > 0:   0.86
5th–95th percentile:  −£180k … +£1.9M
```

Taškinis įvertis sakė „akivaizdžiai taip“. PSA sako „86 % taip, su tikra uodega, kur prarandame 180 tūkst. £+“ – būtent to portfelio savininkui ir reikia, ir tai įkainoja bylą atlikti pirminį tyrimo spike (žr. [EVPI](../tobulos-informacijos-tikėtina-vertė/)).

## Ryšys su programinės įrangos inžinerija

Inžinieriai jau pasitiki Monte Karlo pristatymo prognozavimui (pralaidumo atranka lenkia taškinius įverčius). Išplėskite tą patį aparatą pinigams: skirstiniai diegimui, sutaupytam laikui ir atlyginimui, tada pateikite „tikimybę, kad ši platformos investicija yra grynai teigiama“ vietoje klaidingai tikslaus ROI. CEAC tipo kreivė – tikimybė būti geriausia parinktimi kaip funkcija to, kaip organizacija vertina inžinieriaus valandą – yra tikrai geresnis artefaktas finansavimo komitetui nei bet kuris vienas skaičius.

## Spąstai

- **Šiukšlių skirstiniai**: PSA su išgalvotais standartiniais nuokrypiais yra deterministinė analizė, apsivilkusi laboratorijos chalatu. Sklaidą grįskite duomenimis ar struktūrizuotu ekspertų išgavimu.
- **Koreliacijos tarp parametrų ignoravimas** (didelis diegimas paprastai koreliuoja su dideliu sutaupytu laiku); nepriklausoma atranka nuvertina uodegos riziką.
- **Pateikiamas tik simuliacijos vidurkis** – visa esmė yra skirstinys ir sprendimo tikimybė.

## Šaltiniai

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
