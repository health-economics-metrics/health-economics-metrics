# Sentikortasun-analisi probabilistikoa (Probabilistic Sensitivity Analysis, PSA)

PSAk probabilitate-banaketa bat esleitzen dio parametro ziur gabe bakoitzari, denak aldi berean milaka aldiz laginketatzen ditu (Monte Carlo) eta aukera bat hautaketarik onena izateko *probabilitatea* jakinarazten du, balio-puntual bakarraren ordez.

## Zergatik axola duen

NICEren erreferentzia-kasuak PSA *eskatzen* du. Analisi deterministak "zer gertatzen da sarrera bat oker badago?" galderari erantzuten dio; PSAk "ezagutzen ez dugun guztia aldi berean kontuan hartuta, zenbat aukera dugu erabaki zuzena hartzeko?" galderari. Bere irteera bereizgarria, **kostu-eraginkortasunaren onargarritasun-kurba (CEAC)**, aukera bat kostu-eraginkorra izateko probabilitatea marrazten du ordaintzeko borondatearen atalasearen aurka: "ICERra £24.000/QALY da" hori "£30.000/QALY-n %78ko probabilitatea dago hau aukera zuzena izateko" bihurtuz.

## Matematika

```
For each of N draws (N ≈ 10,000):
  sample every parameter θ from its distribution
    (costs ~ Gamma, probabilities ~ Beta, utilities ~ Beta, effects ~ Normal/logNormal)
  compute NMB_j(θ) = λ × Effect_j(θ) − Cost_j(θ) for each option j

CEAC_j(λ) = fraction of draws in which option j has the highest NMB at threshold λ
```

Ikus [onura monetario garbia](../onura-monetario-garbia/) NMBrako eta [ordaintzeko borondatearen atalaseak](../ordaintzeko-borondatearen-atalaseak/) λrako.

## Adibide landua

Plataforma-migrazioaren negozio-kasua. Hiru sarrera ziurgabe:

```
Migration cost      ~ Gamma,  mean £800k, sd £200k
Annual benefit      ~ Normal, mean £350k, sd £150k
Benefit duration    ~ Uniform, 3–6 years
```

10.000 lagin bakoitzeko kalkulatu onura garbia = iraupena × urteko onura − kostua (eguneratzea alde batera utzita, argitasunerako). Emaitza ilustratiboak:

```
Mean net benefit:      £775k
Probability net > 0:   0.86
5th–95th percentile:  −£180k … +£1.9M
```

Balio-puntualak "jakina baietz" esaten zuen. PSAk "%86 baiezkoa, £180k+ galtzen ditugun benetako isats batekin" esaten du: hori da zorroaren jabeak benetan behar duena, eta aurretiazko aurkikuntza-spike bat egitearen kasua prezioztatzen du (ikus [EVPI](../informazio-perfektuaren-balio-esperoa/)).

## Software ingeniaritzarekin lotura

Ingeniariek dagoeneko Monte Carlo-n konfiatzen dute entrega-aurreikuspenetarako (throughput laginketak balio-puntualak gainditzen ditu). Zabaldu makineria bera diruara: banaketak hartzean, aurreztutako denboran eta soldatan, eta gero jakinarazi "plataforma-inbertsio hau garbi positiboa izateko probabilitatea" zehaztasun faltsuko ROI baten ordez. CEAC motako kurba bat (aukerarik onena izateko probabilitatea, erakundeak ingeniari-ordua nola baloratzen duenaren funtzio gisa) finantzaketa-batzorde batentzat zenbaki bakar bat baino artefaktu hobea da benetan.

## Tranpak

- **Banaketa zakarrak**: asmatutako desbiderazio estandarrak dituen PSA bata zuriz jantzitako analisi deterministea da. Oinarritu sakabanaketak datuetan edo adituen elikadura egituratuan.
- **Parametroen arteko korrelazioa alde batera uztea** (hartze handia normalean aurreztutako denbora handiarekin lotzen da); laginketa independenteak isats-arriskua gutxiesten du.
- **Simulazioaren batez bestekoa soilik jakinaraztea**: puntu osoa banaketa eta erabaki-probabilitatea da.

## Iturriak

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
