# Esku-hartze goiztiarra (Earlier Intervention)

Aurreztutako ahalmenak profesional bati diagnostiko-atzerapenak lehenago berrikusten uzten badio, pazienteak itxaron-zerrendatik tratamendu aktibora azkarrago pasatzen dira — eta lehenago tratatzea normalean merkeagoa eta hobea da gero tratatzea baino, tratatu gabeko egoerak aurrera egiten duelako.

## Zergatik axola duen

Gaixotasunaren aurrerapena osasun-arretaren interes konposatua da. Tratatu gabeko egoera batekin itxaroten duen pazientea ez dago egoera egonkorrean: minbiziak fasez aldatzen dira, bihotz-gutxiegitasuna deskonpentsatzen da, depresio arina larri bihurtzen da. Beraz, lehenago esku hartzeak dibidendu bikoitza ematen du — **emaitza hobeak** (QALY gehiago, oinarri osasuntsuagotik tratatuta) eta maiz **tratamendu-kostu txikiagoak** (hasierako faseko tratamendua berandu erreskatea baino ez da hain intentsiboa). Mekanismo honek "bide azkarragoak" eragiketa-xehetasun batetik beharrizan kliniko eta ekonomiko bihurtzen ditu — eta [atzerapenaren kostua](../atzerapenaren-kostua/) software klinikoari aplikatzen zaion arrazoi sakona da.

## Matematika

```
Esku-hartze goiztiarraren balioa (pazienteko) =
    [Kostua_berantiarra − Kostua_goiztiarra]       (tratamendu-kostuaren konpentsazioa)
  + [QALY_goiztiarra − QALY_berantiarra] × λ       (osasun-irabazia × atalasea)
  × P(aurrerapena atzerapenean)                     (probabilitate-haztapena)
```

Probabilitate-haztapena ezinbestekoa da: itxaroten duten paziente guztiek ez dute aurrera egiten. Modelatu denbora-unitate bakoitzeko trantsizio-probabilitatea (historia naturaleko datuetatik), ez kasurik txarrena. Gero eguneratu: urte batzuk haratago saihestutako kostuek gutxiago balio dute gaur ([eguneratzea](../eguneratzea-eta-denbora-lehentasuna/)) — eta kontuan izan esku-hartze goiztiar gehienak kostu-*eraginkorrak* direla, ez kostu-*aurrezleak* (ikus [prebentzioaren ekonomia](../prebentzioaren-ekonomia/)).

## Adibide landua

Erretinopatia diabetikoaren kribatze-atzerapena: 4.000 paziente, 6 hilabete atzean. AA bidezko sailkapenak emaritza hirukoizten du eta ilara 8 astetan husten du. Historia naturala: itxaroten duten pazienteen ~%2k urtean ikusmena mehatxatzen duten faseetara aurrera egiten du berrikusi gabe dauden bitartean.

```
~4 hilabeteko azelerazioak saihestutako aurrerapen-gertaerak:
  4,000 × 2% × (4/12) ≈ 27 paziente

Saihestutako aurrerapen bakoitzeko:
  tratamendu-konpentsazioa (terapia intrabitreoa vs laserra) ≈ £4,000
  QALY irabazia (ikusmena zainduta) ≈ 0.8 QALY × £20,000 = £16,000

Balioa ≈ 27 × (4,000 + 16,000) ≈ £540,000 — behin garbitutako atzerapen batetik,
emaritza-irabazi iraunkorra zenbatu aurretik.
```

## Software ingeniaritzarekin lotura

Bi transferentzia. Lehena, begi-bistakoa: diagnostiko- eta tratamendu-bideak azeleratzen dituen softwareak (triagea, AA sailkapena, emaitzen bideratzea) eredu zehatz honen bidez monetizatzen du — eta ereduak esaten dizu zein bide azeleratu: aurrerapen-kurba aldapatsuena duena, ilararik luzeena duena ez. Bigarrena, ingeniaritzako ispilua: **akatsek ere aurrera egiten dute**. Diseinuan harrapatutako akats batek elkarrizketa bat kostatzen du; produkzioan, intzidentzia bat; "shift-left" kostu-kurba (10–100× fasearen arabera) aurrerapen-eredu bat da, eta bertsio zintzoak oharra bera dakar — detekzio goiztiarra normalean kostu-eraginkorra da, ez diru librea, berrikuspenek eta testek benetako kostuak dituztelako eta harrapatutako arazo gehienek inoiz aurrera egingo ez zutelako.

## Tranpak

- **Kasurik txarreneko aurrerapena guztientzat suposatzea** — probabilitate-haztapena analisiaren eta aldarrikapenaren arteko aldea da.
- **Lead-time alborapena**: gaixotasuna lehenago aurkitzeak emaitzak aldatu gabe onura dirudi baina ez da; aldarrikapena esku-hartze *eraginkor* goiztiarra da, ez detekzio goiztiarra bakarrik (ikus [kribatzearen ekonomia](../screening-aren-ekonomia/)).
- **Zenbaketa bikoitza** azelerazio berean oinarritutako itxaron-zerrenda eta RTT aldarrikapenekin — bide-hobekuntza bat, onura-multzo bat, behin esleitua.

## Iturriak

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
