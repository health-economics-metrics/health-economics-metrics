# Prow Mona Nett (NMB)

NMB a dreyl sewyans kost-effeythusnans dhe unn talvos mona: gwayn yeghes prisys orth an threshold parys-dhe-bayi, minus kost. Y gevell, Prow Yeghes Nett (NHB), a dhiskwedh an keth rewl yn unnysow yeghes.

## Perag yth yw posek

Ratyos ([ICERs](../ratyo-kost-effeythusnans-ynkressys/)) yw kamm-es: ymons ow tefyskel ogas efekt nul, na yllons bos kresys dres tennow ansylder, ha na yllons rankya tri po moy dewis yn glan. NMB a sawya an dri — hi yw linear, ytho hwi a yll rankya dewisyow, kresya tennow Monte Carlo, ha dyspartha kevrannow. Yw ynwedh an furv a matematik ekonomek yeghes a woer kenyver ynjynnyer yn kodh: *talvos minus kost*.

## An Matematik

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = efekt ynkressys (rag ensampel, QALYs)
ΔC = kost ynkressys
λ  = threshold parys-dhe-bayi (gwelewgh willingness-to-pay-thresholds.md)

Rewl dewisyans: degemerewgh mar NMB > 0 (kehaval NHB > 0).
Ynter dewisow: dewisewgh an NMB uhella.
```

NMB > 0 ⇔ ICER < λ (pan ΔE > 0), ytho an dew rewl a gesvedh — NMB yw gwell-omdhon yn unnik.

## Ensampel gwrys

Tri dewis rag servis diabetes, rag 1,000 klav, λ = £20,000/QALY:

```
Dewis            ΔC          ΔE (QALY)    NMB = 20,000×ΔE − ΔC
App + kothyans   £400,000    30           600,000 − 400,000 = £200,000
App yn unnik     £150,000    12           240,000 − 150,000 = £90,000
Klinikys ekstra  £700,000    32           640,000 − 700,000 = −£60,000
```

Klinikys ekstra a wayn moy QALY mes a dhistrowya talvos orth an threshold ma (NMB < 0). App + kothyans a wynn. Merkewgh y hyll NMB *rankya oll an tri warbarth* — ICERs re-ban a res fordh an harth yn [dominans ha harth effeythusnans](../dominans-ha-harth-effeythusnans/), hag a'n kefyth an keth gorthyp.

Golok NHB a'n gwynnyer: 30 − 400,000/20,000 = 30 − 20 = **10 QALY nett** — an yeghes gwynnys dres an pyth a vedhya an keth mona dhelivrys yn kyn tyller.

## Kolm gans ynjynnyans medhelweyth

`(eurow sawys × reyt eur kowlvaghys) − kost ark` — an kas besneth ark pub dydh — yw yn lyterel kowntyans NMB gans λ = kost ynjynnyer kowlvaghys. Dew wellheans a re ekonomek yeghes:

- **Gwrewgh λ variabyl, na ny yw konstant.** Tresewgh NMB erbynn λ ("talvos eur-ynjynnyer") ha diskwedhewgh ple y hwra an dewisyans flippya; rann-perghenogyon dyffrans a yll devnydhya aga thalvosyans aga honan heb dasober dha vatematik.
- **Tybyans NHB**: "an platform ma a sav 5,000 eur-ynjynnyer mes a dhevnydh budjet a wra prena 3,000 eur kanasow kontraktor — nett 2,000 eur" a dhirgel keskomparyans kost an dewis yn unnysow kanasow. Gwelewgh [kost an dewis](../kost-an-dewis/).

## Fowtys Kemmyn

- **Kudha an threshold**: NMB yw heb styr heb lavar λ; derivewgh NMB orth £20k ha £30k, po tresewgh an kromm.
- **Devnydhya NMB dhe lanhe efektys byghan**: pobel vras × efekt rag unn-den heb vri a yll dhri NMB bras — derivewgh efektys rag unn-den a-ryb.
- **Ankevi bos NMB ow ertha pub ansylder** yn ΔC ha ΔE — parewgh gans [analys ansylder probabilistek](../analys-ansylder-probabilistek/).

## Fontynnow

- Gerlyver York Health Economics Consortium: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
