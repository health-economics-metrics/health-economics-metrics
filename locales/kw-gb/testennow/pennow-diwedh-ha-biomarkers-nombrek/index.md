# Pennow Diwedh ha Biomarkers Nombrek

Biomarker nombrek yw musur fysiologek po omdhon objektif kuntellys dre synsoryow (kamm-yskonnyans dhort pellgows, kosk dhort gwisk, krena dhort akselerometri). Penn diwedh nombrek yw musur a'n par ma ystynnys dhe **sewyans previans** — devnydhys dhe dhiskwedhes efekt ynkleth. An promosyon dhort "data a dhelivr an dyvis" dhe "skoodhyans a degemer rewler" a rediw dre skala gwiryans dyssynyes.

## Perag yth yw posek

Pennow diwedh previans tradisyonel yw hwarvosek (gwelyansow klinik pub 3 mis) ha kostus; pennow diwedh nombrek yw kesradhyek, ekologek (bewnans gwir, na ny yw perfformyans klinik), ha es rag pub gwelyans — hi a yll krunya previansow, dyskudha efektys a-varr, ha gul studhyansow dyskentrys. An kramm yw gwiryans: an framya degemerys (kedhlys FDA, tri pilier) a res **gwiryans-verifikyans/analytek** (an synsor a vus an kantiti fysikel yn ewn), **gwiryans klinikel** (an musur a dhiskwedh an stat klinikel a glam), ha **rann yeghes a vri** diskwedhys (klevyon a vyn dhedha an pyth a gemmer). Penn diwedh heb an tri yw telemetri, na ny yw skoodhyans.

## An Matematik

```
Gwiryans analytek:    kesradh gans an kyrghyer (gwelewgh wearable-validation.md —
                      MAPE, CCC, Bland-Altman)
Gwiryans klinikel:    kesradhyans/dyskrimynans erbynn ankrow klinikel
                      (gwiryans bagas-aswonnys, gorthyp dhe chanj)
Ekonomek penn diwedh:
  hwarvosow dyskudhys rag klav-bledhen (kesradhyek) erbynn sampel pub gwelyans
  nerth previans: musurow kesradhyek a ledha mynsys sampel pan wra
  variyans ynter-gwelyans dominya — N ∝ σ²/Δ², ha σ² a goll gans sampel tew
```

## Ensampel gwrys

Previans Parkinson a bris kamm-yskonnyans dhort synsor dornlin erbynn skoryow klinik kwartran:

```
Penn diwedh klinik:   4 musur/klav/bledhen, nois uhel dydh-dhe-dydh
Penn diwedh nombrek:  ~200 musur pasyf/klav/bledhen

Variyans an estymasyon chanj bledhenyek a goll ~5× gans sampel tew →
meur efekt dyskudhadow orth nerth ervirys a wellha ~√5 ≈ 2.2×, po
kehaval an mynsys sampel a grunn ~40–60% rag an keth hypothesis.
Orth £25,000 rag klav enrolys, ledha 200 klav ≈ £5M sawys
rag previans — an kas kenwerthek rag an investyans gwiryans
(y honan martesen £1–2M) dres pibelyn an sponser.
```

## Kolm gans ynjynnyans medhelweyth

Pennow diwedh nombrek yw dyskyplin ynjynnyans data yn gwiskow klinikel: **provenans ha versyonya** (nowedhyansow algorythm yn hanter-studhyans a dhagrew keskomparadewder — kudyn [PCCP](../gwerthjyans-rewlyek-ai/) yn furv previans; kloesewgh versyon ha gwiryewgh pons); **dyssynyans data kellys** (bylyow termyn-gwisk yw kampol, na ny yw hap — gwelewgh [gwiryans dyvis gwisk](../gwiriens-gwiskadow/); dewisyansow imputya yw klaymow skiansek); ha **dewisyansow rann ymyl/skeul** a chanj pyth signal krev a yll bos dasserghys wosa. Tymow a drettyas an pibelyn musur avel medhelweyth rewlys dhort an kensa dydh — previs, versyonys, dokumentys — a bren oll kredadowder aga fennow diwedh yn es; dasplansya gwiryans war bibelyn gwrys skonnyk yw le may fyll towlow penn-diwedh nombrek.

## Fowtys Kemmyn

- **Kesradhyans-gans-klinik avel gwiryans kowl**: metya musur klinik fowtys a brov erbynn, na ny yw gwir; gwiryewgh erbynn an rann yeghes a vri.
- **Risk rewlyek penn diwedh nowydh**: penn diwedh heb ensampel a yll bos gwell yn skians ha hwath sedha sommas — kesdhenewgh gans rewlers a-varr (yma towlow gwiryans).
- **Digesson synsor-pobel**: gwiryans yn dornlin yagh yowynk, delivrans yn klevyon koth gans krena ha diffransow liw-kroen na welis an PPG bythkweth.
- **Drif nodhow**: dasdyski algorythm kamm-yskonnyans war data nowydh a dhasdyssyn tawesek an penn diwedh yn hanter-studhyans.

## Fontynnow

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), skoodhow pennow diwedh nombrek. <https://dimesociety.org/>
