# Bizitza estatistikoaren balioa (Value of a Statistical Life, VSL)

Bizitza estatistikoaren balioa (VSL) —Erresuma Batuan "prebenitutako heriotzaren balioa" (VPF) deitua— *populazio* batek heriotza estatistiko bat izateko arriskua murrizteko kolektiboki ordaintzeko prest dagoen zenbatekoa da, soldata-arrisku trukeen azterlanetatik (langileek lan arriskutsuagoengatik zenbat soldata gehigarri eskatzen duten) eta lehentasun adierazien inkestetatik eratorria. Ez da identifikatutako inoren bizitzaren prezioa; populazio-arriskuaren eraikuntza bat da, eta arriskua murrizten duten sistemak eraikitzen dituen software-ingeniari batek —triage algoritmoak, anbulantzia-bidalketa, segurtasun-monitorizazioa— jakin behar du [borondatezko ordainketa-atalaseetatik](../ordaintzeko-borondatearen-atalaseak/) tradizio teoriko ezberdin batetik datorrela.

## Zergatik axola duen

VSL/VPF erregulazio-kostu-onura analisian heriotza-arriskuaren murrizketak monetizatzeko tresna estandarra da: garraio-segurtasunak, ingurumen-erregulazioak eta osasun publikoko esku-hartze batzuek beren negozio-kasuak horren bidez egiten dituzte. HM Treasuryren Green Book-ak VPF zifra bat argitaratzen du, Erresuma Batuko lan-merkatuaren eta inkesten ebidentziatik eratorria, eta Department for Transport-ek zuzenean erabiltzen du errepide-segurtasunaren balioespenean. Hau QALY × borondatezko ordainketa-atalasea metodologiatik benetan ezberdina den balioespen-tradizio bat da: atalase-ikuspegiak osasun-irabaziak osasun-*aurrekontuak* oraintxe marjinan sortzen duenaren aurka baloratzen ditu, VSL/VPFk, berriz, arrisku-murrizketa lan-merkatuko edo inkestako pertsonek ordaintzeko prest daudela agerian uzten dutenaren aurka. Bi markoak ez dira beti bateratu daitezke, eta biak kasu berean erabiltzea hori aitortu gabe analisi-akats arrunta da.

## Matematika

```
Deaths averted = population × risk_reduction_per_person
  (risk_reduction_per_person is a probability, e.g. 0.000001 = 1-in-a-million
   reduction in annual mortality risk)

Monetized mortality benefit = deaths_averted × value_of_prevented_fatality
```

## Adibide landua

800,000 pertsonako eskualde batek errepide-segurtasuneko bidalketa/triage digitaleko esku-hartze batetik onura jasotzen du, pertsona bakoitzaren urteko heriotza-arriskua milioiko 1ean (0.000001) murrizten duena:

```
Deaths averted = 800,000 × 0.000001 = 0.8
```

Erresuma Batuko Prebenitutako Heriotzaren Balioa erabiliz, £2,180,000 (HM Treasury/DfT zifra, 2023/24 prezioak — Green Book-ak urtero eguneratzen du hau, egiaztatu berriro analisi bizi batean aipatu aurretik):

```
Monetized mortality benefit = 0.8 × £2,180,000 = £1,744,000/year
```

£1.75 milioi baino pixka bat gutxiago urtero monetizatutako heriotza-onuran, eragindako populazioaren gehienek banaka inoiz nabarituko ez luketen arrisku-murrizketa batetik.

## Software ingeniaritzarekin lotura

Segurtasun kritikoko software-taldeek —gailu medikoen firmwarea, ibilgailu autonomoen softwarea, kontrol industrialeko sistemak— prezio-arazo hori bera dute segurtasun-inbertsio baten kostu-onura kasua eraikitzean: nola prezioetan jarri "hutsegite kaltegarri bat saihestea" hutsegitea arraroa, larria eta erabiltzaile-populazio handi baten artean banatua denean? VSL/VPF hamarkadetako aurrekari publiko eta dokumentatua da arrisku-murrizketa arraro, larri eta populazio-mailako bati zenbaki bat jartzeko — argudio-forma bera da SRE inbertsio bat geldialdi kaltegarri arraro baten aurka prezioetan jartzea, heriotza-emaitza geldialdi-emaitzaren ordez duela soilik.

## Tranpak

- **VSL "identifikatutako bizitza baten prezio" gisa tratatzea**: ez da hori. VSL/VPF jende askoren arteko arrisku-murrizketa trukeetatik eratorritako eraikuntza estatistiko populazionala da, ez pertsona zehatz baten bizitzaren edo heriotzaren balioespena.
- **QALY oinarritutako onura monetario garbiaren kalkuluarekin bikoizte-zenbaketa**: VSL/VPF zifra bat eta QALY × atalasea kalkulu bereizi bat kasu berean erabiltzeak, bateratu gabe, isilean bikoizten du saihestutako heriotza berberen balioa. Aukeratu marko bakarra kasu bakoitzerako.
- **VSL estimazio bat testuinguruen artean doikuntzarik gabe transplantatzea**: herrialde bateko lan-merkatutik, edo adin produktiboko soldata-arrisku datuetatik eratorritako VSL bat, doitu gabe errenta-testuinguru ezberdin edo populazio ezberdin (haurrak, erretiratuak) batean aplikatzea aspaldiko arazo metodologiko benetan eztabaidatua da, ez konponduta dagoena.

## Iturriak

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality supplementary guidance (2023/24 prices; Green Book values are updated annually). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (for the US VSL tradition, cited for contrast with the UK VPF figure above). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
