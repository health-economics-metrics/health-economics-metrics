# Bin Ka'ida da Dorewa

Bin ka'ida shi ne yadda ainihin amfani ya yi daidai da amfanin da aka rubuta (ƙarfi); dorewa kuwa shi ne tsawon lokacin da amfani ke ci gaba kafin a daina (tsawo). Fannin magunguna yana da daidaitattun ma'auni — **MPR** da **PDC**, tare da ≥80% a matsayin ma'aunin "mai bin ka'ida" na al'ada — kuma magungunan dijital suna gadon manufofin biyu da matsalar: bin ka'ida shi ne mai ninkawa tsakanin tasirin gwaji da darajar da aka samu.

## Dalilin muhimmancinsa

Masu biya sun riga sun dogara da waɗannan lambobi: PDC ≥80% yana shiga cikin Star Ratings na Medicare na Amurka, wanda ke motsa ainihin kuɗin shigar masu biya — bin ka'ida kayan more rayuwa ne mai ɗaukar nauyin kuɗi, ba ma'aunin sassauƙa ba. Ga magungunan dijital, tsarin ya maimaita kansa: bayanan DiGA suna nuna yawan takardu mai ƙarfi amma bin ka'ida mai ɗorewa mai rauni, kuma farashin DTx bisa sakamako (da ke zuwa Jamus daga 2026) zai biya bisa sakamakon da bin ka'ida ke ƙofa. Ingantaccen tunani daga binciken lafiyar dijital: **shiga aiki mai tasiri** — shiga aiki *wanda ya isa* don cimma sakamakon da aka nufa — da abin da ya biyo bayansa, **mafi ƙarancin ma'aunin magani mai tasiri**, wanda ake tabbatarwa ta gwaji ga kowane shiga tsakani maimakon a ɗauka cewa "ƙari ya fi."

## Lissafin

```
MPR = Σ days' supply dispensed / days in period × 100   (can exceed 100%;
      overestimates via early refills)
PDC = days covered by supply / days in period × 100     (capped at 100%;
      the conservative, CMS-preferred estimator)
Digital adherence = actual usage events / prescribed usage events × 100
Persistence       = days from initiation to discontinuation
                    (report % persistent at N months; survival methods)

Value gating: realized outcome ≈ efficacy × g(adherence)
  where g is the dose-response function; below the minimum effective
  dose, g ≈ 0 — cost incurred, benefit forfeited
```

## Misali da aka lissafa

Samfurin dijital na CBT don rashin barci, wanda aka rubuta a matsayin sassa 6 cikin makonni 6; tasirin gwaji 0.025 QALY a cikin waɗanda suka kammala sassa ≥4 (mafi ƙarancin ma'aunin magani mai tasiri da aka tabbatar ta gwaji):

```
1,000 prescriptions at £250 → £250,000 payer spend
Module completion: ≥4 modules 38%; 1–3 modules 34%; zero modules 28%

QALYs realized = 1,000 × 0.38 × 0.025 = 9.5
Cost per QALY  = 250,000 / 9.5 ≈ £26,300 — marginal at NICE thresholds

Adherence engineering (reminders redesign, session shortening) lifts
≥4-module completion to 50%: 12.5 QALYs → £20,000/QALY. The product
crossed the funding threshold without touching the therapy content.
```

A ƙarƙashin farashin aiki irin na 2026, wannan sauyi ɗaya yana motsa *kuɗin shiga* kai tsaye — injiniyancin bin ka'ida ya zama taswirar kasuwanci.

## Alaƙa da injiniyancin manhaja

Harsuna biyu suna haɗuwa a kan manufa ɗaya: nazarin manhaja ([kunnawa](../kunnawa-da-karɓuwa/), [mannewa](../ma-aunan-shiga-aiki/), [riƙewa](../riƙewa-da-barin-amfani/)) da fannin magunguna na asibiti (MPR, PDC, dorewa) duka suna auna fallasa ga shiga tsakani — a fassara abubuwan samfurinka zuwa harshen asibiti kuma masu biya za su iya karanta allunan bayananka. Injiniya shi ne mai mallakar hanyoyin bin ka'ida: dabarar tunatarwa (tura saƙo na yau da kullum maras hankali yana koyar da yin watsi; lokaci mai daidaitawa ba ya yi), kuɗin zama (sashi na mintuna 20 yana kammaluwa ƙasa da sassa 3 na mintuna 7), da telemetry na rikitarwa wanda ke gano *a ina* a cikin tsarin masu amfani ke faɗuwa. A shirya auna alaƙar ma'auni-da-sakamako tun ranar farko — binciken mafi ƙarancin ma'aunin magani mai tasiri da ke ƙofa ga dukkan tsarin tattalin arziki yana buƙatar bayanan amfani da aka haɗa da sakamako waɗanda samfurin kaɗai zai iya tattarawa.

## Tarkuna

- **Rikita MPR da PDC**: MPR yana ƙara; a bayyana wane ƙiyasi aka yi amfani da shi kuma a yi amfani da PDC ga duk abin da zai fuskanci mai biya.
- **Bin ka'ida ga ma'auni, ba ga magani ba**: ana ƙidaya buɗewa a matsayin ma'aunai (duba [ma'aunan shiga aiki](../ma-aunan-shiga-aiki/)).
- **Burin shiga aiki na "ƙari ya fi"** inda shiga tsakanin yake da ma'auni iyakantacce — kammalawa nasara ce, amfani maras ƙarewa ba haka ba.
- **Da'awar tasiri bisa waɗanda suka tsira**: sakamako a cikin masu bin ka'ida yana ƙunshe da tasirin zaɓi (masu bin ka'ida sun bambanta); ƙiyasin sababi na gaskiya yana buƙatar bazuwar zaɓi ko daidaitawa da kulawa.

## Tushe

- MPR vs PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA adherence findings, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
