# Ekonomika screeningu

Ekonomika screeningu řídí hodnotu testování asymptomatických populací. Základní matematický fakt: **při nízké prevalenci nemoci i vynikající testy vytvářejí převážně falešně pozitivní nálezy** – a následné náklady na jejich honění mohou převážit přínos skutečných nálezů.

## Proč na tom záleží

Od roku 1968 stanoví kritéria Wilson–Jungner WHO laťku pro populační screening: stav musí být důležitý, test přijatelný a přesný, musí existovat účinná léčba a ekonomika se musí vyvažovat. Britský National Screening Committee uplatňuje formální analýzu nákladové efektivity před schválením jakéhokoli národního programu – a většinu návrhů zamítne. Každý pitch „AI vyšetří všechny na všechno“ narazí na tuto mašinérii a obvykle prohraje s aritmetikou níže.

## Matematika

Pozitivní prediktivní hodnota (PPV) – pravděpodobnost, že pozitivní výsledek je skutečný – se při nízké prevalenci hroutí:

```
PPV = (sens × prev) / [sens × prev + (1 − spec) × (1 − prev)]
Example: sensitivity 90%, specificity 95%, prevalence 0.5%:
PPV = (0.9 × 0.005) / (0.9 × 0.005 + 0.05 × 0.995)
    = 0.0045 / (0.0045 + 0.04975) ≈ 8.3%
```

Jedenáct z dvanácti pozitivních je falešných. Úplná ekonomika programu:

```
Cost per true case found = (screening cost + workup cost × all positives) / true positives
Then: is finding a case worth that? (earlier-intervention value per case,
      minus overdiagnosis harm — cases found that would never have mattered)
```

## Řešený příklad

Screening sítnice pomocí AI pro vzácný stav, 100 000 lidí, prevalence 0,5 %, sens 90 %, spec 95 %, sken 15 £, potvrzující došetření 400 £:

```
True positives:  100,000 × 0.005 × 0.90 = 450
False positives: 100,000 × 0.995 × 0.05 = 4,975
Cost = 100,000 × 15 + (450 + 4,975) × 400 = 1.5M + 2.17M = £3.67M
Cost per true case ≈ £8,156
```

Pokud dřívější léčba ušetří 20 000 £ + 1 QALY na případ, program snadno projde. Zvyšte specificitu na 99 % (méně falešných poplachů): náklady na došetření klesnou na (450 + 995) × 400 = 0,58 mil. £, celkem 2,08 mil. £, náklady na případ ≈ **4 622 £** – specificita, nikoli senzitivita, je to, kde se při nízké prevalenci screeningová ekonomika vyhrává.

## Souvislost se softwarovým inženýrstvím

Statická analýza, bezpečnostní skenování a detekce anomálií jsou screeningové programy nad kódovými základnami a telemetrií, s prevalencí skutečných vad často hluboko pod 1 % na příležitost k upozornění. Táž matematika vysvětluje únavu z upozornění: skener se specificitou 95 % na kódu s nízkou prevalencí zaplaví týmy falešně pozitivními nálezy a každý falešně pozitivní stojí pozornost a narušuje důvěru, dokud se skutečná upozornění ignorují (klinický termín je *újma ze screeningu*; inženýrský *otupělost k pageru*). Nápravy se přenášejí ze zdravotnictví: zvyšte specificitu před senzitivitou, vyšetřujte podpopulace s vyšší prevalencí (cílení podle rizika ↔ skenování jen změněného kódu) a počítejte náklady na triáž do ekonomiky nástroje – viz [NNT](../počet-pacientů-nutných-k-léčbě/) a [hodnocení klinické AI](../hodnocení-klinické-ai/). K dimenzování celého screeningového programu místo jednoho testu viz [počet vyšetřených nutných k odvrácení případu](../počet-vyšetřených-nutných-k-odvrácení-jednoho-případu/) – kolik lidí musí projít celou cestou vyšetření a léčby, aby se zabránilo jednomu výsledku.

## Úskalí

- **Uvádění senzitivity/specificity bez prevalence** – přesnost bez PPV je marketing.
- **Ignorování nadměrné diagnostiky**: nalézání indolentní „nemoci“, která by nikdy neublížila, spouští skutečné náklady a újmy léčby.
- **Zkreslení předstihem**: dřívější detekce bez změny výsledků nafukuje zdánlivé přežití – viz [dřívější intervence](../dřívější-intervence/).

## Zdroje

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
