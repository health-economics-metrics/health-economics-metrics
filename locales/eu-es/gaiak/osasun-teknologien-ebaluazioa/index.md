# Osasun-teknologien ebaluazioa (Health Technology Assessment, HTA)

HTA osasun-sistemek teknologia bat — sendagaia, gailua edo softwarea — ordaintzea merezi duen erabakitzeko prozesu formal eta instituzionalizatua da. Eraginkortasun klinikoaren ebidentzia ebaluazio ekonomikoarekin konbinatzen du, argitaratutako metodologia derrigorrezko baten pean.

## Zergatik axola duen

Osasun-zerbitzu nazional bati saltzen badiozu, HTA erakunde batek literalki zure merkatu-sarbidea erabaki dezake. Tokiko prozesua ezagutzea zure benetako balio-erregulatzailea ezagutzea da:

- **NICE (Ingalaterra)**: *erreferentzia-kasu* definitu baten pean ebaluazio estatutuak — QALYak [EQ-5D](../eq-5d/)tik, NHS+PSS [ikuspegia](../azterketaren-ikuspegia/), %3,5 [eguneratzea](../eguneratzea-eta-denbora-lehentasuna/), [PSA](../sentikortasun-analisi-probabilistikoa/) beharrezkoa — £20k–£30k/QALYren aurka epaitua [larritasun-moldatzaileekin](../qaly-defizita-eta-larritasun-modifikatzaileak/); teknologia oso espezializatuak £100k+ haztapenarekin.
- **ICER (AEB, gobernuz kanpokoa)**: *osasun-onuraren prezio-erreferentzia* duten ebidentzia-txostenak — produktu bat $100k–$150k QALY/evLYG bakoitzeko kostu-eraginkorra izango litzatekeen prezioa — negoziazio-palanka gisa erabilia; gehi aurrekontu-inpaktuko "eskuragarritasun-alertak."
- **Kanada (CADTH → CDA-AMC)**: itzulketa-berrikuspenak ≈CAD$50k/QALYn; historikoki aurkezpenen ~%95ean prezio-murrizketak eskatu ditu.

## Matematika

HTAren indarra ez da formula bat **agindutako metodo** bat baizik: aurkezpen orok [ICER](../kostu-eraginkortasun-gehigarriaren-ratioa/) bera kalkulatzen du erreferentzia-kasuko arau berdinen pean, beraz emaitzak produktuen eta urteen artean alderagarriak dira. Erreferentzia-kasuak emaitza-neurria, utilitate-tresna, ikuspegia, konparatzailearen hautaketa, eguneratze-tasa, denbora-horizontea eta ziurgabetasun-analisia zehazten ditu — babesle batek manipula zitzakeen askatasun-gradu guztiak kenduz.

## Adibide landua

Terapia digital batek NICE estiloko ebaluazio batera aurkezten du:

```
Eredua: ΔC = +£450/paziente, ΔE = +0.03 QALY → ICER = £15,000/QALY ✓ £20k azpitik
Erreferentzia-kasuko egiaztapenak:
  utilitateak EQ-5D-5Ltik UK balio-multzoarekin           ✓
  konparatzailea = egungo arreta-bidea (ez "tratamendurik gabe") ✓
  PSA: %71eko probabilitatea kostu-eraginkorra £20k-n      ✓ (jakinarazia)
  larritasun-moldatzailea: gabezia ×1.2 mugen azpitik       — ez da aldarrikatu
Gomendioa: ohiko enkargua, mundu errealeko datuen bilketarekin.
```

Babesleak berak hobetsitako analisiak £9,000/QALY erakutsi zuen; erreferentzia-kasuak £15,000ra bultzatu zuen konparatzaile zintzoa behartuz. Alde horrek *azaltzen du* erreferentzia-kasuak zergatik existitzen diren.

## Software ingeniaritzarekin lotura

Transferitzen den artefaktua **barne erreferentzia-kasua** da: metodo bakar agindua tresna/plataformako negozio-kasu guztietarako — konparatzaile adierazia, unitate-kostu estandarrak (ikus [tarifa nazionala eta unitate-kostuak](../tarifa-nazionala-eta-unitate-kostuak/) eredurako), eguneratze-tasa finkoa, sentsibilitate-analisia beharrezkoa, txantiloi estandarra. Plataforma-kontseilu bati aurkeztutako "tresnetarako AMCP-dosierrak" proposamenak alderagarri eta manipulazioa ikusgarri egiten ditu, HTAk medikuntzarako egiten duen bezala. Hasi NICEk baino txikiagoa: bi orrialdeko txantiloi bat eta argitaratutako prezio-liburu bat estandarrik ezer baino hobeak dira.

Ziklo anitzeko HTA eredu bat kohorteka eta zikloka benetan nola simulatzen den ikusteko, ikus [Markov kohorte-simulazioa](../markov-kohorte-simulazioa/).

## Tranpak

- **HTA baimen erregulatzailearen ondoren formalitate gisa tratatzea** — CE/UKCA/FDA baimenak produktua segurua dela esaten du; HTAk *erosteko merezi* duen erabakitzen du. Langa desberdina, ebidentzia desberdina.
- **Eredu ekonomikoa saiakuntzaren ondoren eraikitzea** — ebidentzia-sorrera erreferentzia-kasuaren eskakizunetatik atzerantz diseinatu behar da.
- **Jurisdikzio-aldeak ez ikustea**: AEBetan $120k/QALYn finantza daitekeen ICER bat NICEn £30k-n huts egiten du; planifikatu ebidentzia eta prezioak merkatu bakoitzeko.

## Iturriak

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
