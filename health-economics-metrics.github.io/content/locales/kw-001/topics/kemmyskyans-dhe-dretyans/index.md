# Kemmyskyans dhe Dretyans (RTT)

Kemmyskyans dhe dretyans yw an termyn tremenys dhort kemmyskyans medhek-teylu bys dalleth tretyans ledys gans konsultant. Konstytusyon an NHS a settya an savon: **92% a glavjiyon a dalleth tretyans a-berth 18 seythun**. RTT yw an metrik oberyel moyha gwelys yn politek y'n NHS Sows.

## Perag yth yw posek

Trestow a fyll an harthow RTT a wra fia chekyans rewlyek, ynterventyans ha dyskrediansa; an rol-wortos kenedhlek yw niver pennlin. Pub seythun a wor klav yw yeghes kellys (ow kortos yn stad yeghes gweth — gwelewgh matematik QALY a-woeles) ha fenowgh kost gwrys (klevesow a goedh; gwelewgh [ynterventyans a-varr](../ynkleth-a-varr/)). Medhelweyth a sav termyn pypynag y'n fordh kemmyskyans-dhe-dretyans — triage, hwil diagnostek, kapasita klinik, rolyans — a leha yn dhirek an sewyansow oberyel hag arghansek a fyllans an savon, an rasyn may ma efekt RTT linenn brow a'n kensa klass yn kuntellow busnes digidel NHS.

## An Matematik

```
Performya RTT = klavjiyon tretys a-berth 18 seythun / tretys oll × 100
Kost yeghes gortos rag klav = hys gortos × (utilita_tretys − utilita_ow-kortos)

Gwel fordh: RTT = Σ hyssow stagys (triage kemmyskyans → kensa apoyntyans →
diagnostek → dewisyans → tretyans) — gwellhewgh an rew hirha, na an stagys
moyha bysy (gwelewgh flow-metrics.md).
```

## Ensampel gwrys

Arbennikrys a dreta 5,000 klav fordh/bledhen; gortos kres 24 seythun; utilita ow kortos 0.68 erbynn tretys 0.80.

Triage digidel ha protokolyow res-dhe-anwoes a dhileth 5 seythun a rew pur:

```
Nowodh QALY = 5,000 × (5/52) × (0.80 − 0.68) = 57.7 QALY/bledhen
Talvosys orth £20,000–£30,000/QALY (gwelewgh willingness-to-pay-thresholds.md):
  ≈ £1.15M–£1.73M/bledhen a dalvos yeghes
```

— ha'n trest a dremen dhort fyllya dhe gonvedhes an savon 18-seythun, a'th eus talvos governans na wra lyver jorrans vyth y gevalas yn tien.

## Kolm gans ynjynnyans medhelweyth

RTT yw **metrik termyn-ledh war rew liesstagys** — versyon klavji a dermyn-ledh kommit-dhe-produksyon (gwelewgh [metryks DORA](../metryks-dora/)). An fordh wellha yw kehaval: ynstrumentewgh pub stagys, hwilewgh pyn ma kelgh an termyn (ogas bythkweth treusdrehevansow ha rewyow yw, na ober klinikel), ha dilettewgh stadow gortos. Wins medhelweyth: e-triage a rout kemmyskyansow a-berth our yn le bagasow seythunnyek, drevya sewyans diagnostek yn le apoyntyansow holya, ha krisyow res-dhe-anwoes awtomatek. Talvosewgh an gwellhe gans [kost dalgh](../kost-dalgh/) yn QALY/seythun.

## Fowtys Kemmyn

- **Gwellhe stagys na vo an harth** — kussya gortosow kensa apoyntyans hogen rewyow diagnostek ow kressa, y fydh an pol gwrys dhe symudhya.
- **Gwari**: dasherewow fordh ha powsyow klokk a yll gwellhe RTT derivys heb tretya nebonan a-varr; awdytyewgh an dasparth wortiow.
- **Klamya oll gwellhe an fordh** rag unn arf pan dheuth lies chanj warbarth — res yw keskomparyer rag attribusyon.

## Fontynnow

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
