# Balioa sortzeko gaitasuna (eragiketa-berreskurapena) (Value-Generating Capacity (Operational Turnaround))

Balioa sortzeko gaitasuna askatutako denboraren "aukera-onura" da: ospitaleak orain zer *lor dezakeen* zure softwareak askatzen dituen orduekin. Hau da Chief Operating Officer eta Mediku Zuzendarientzat gehien axola duen metrika, kudeatzen dituzten monetan hitz egiten duelako: jarduera, helburuak eta berreskurapen-denbora.

## Zergatik axola duen

NHS deribaziotik tratamendurako atzerapen masiboei egiten die aurre, eta itxaron-denboraren estandar nazionalak betetzen ez dituzten trustek ikuskapen eta esku-hartze erregulatzaileak jasaten dituzte (ikus [deribaziotik tratamendura](../bidalketatik-tratamendura/)). Kontratazioa motela eta mugatua da; instalazioak finkoak dira. Palanka azkar bakarra lehendik dauden langileekin eta espazioarekin balioa sortzen duen jarduera gehiago lortzea da. Espezialisten denbora berreskuratzen duen softwareak ez du "dirua aurrezten" soilik: gaitasuna *sortzen du*: existitu ezin ziren kontsultak, programatu ezin ziren ebaluazioak, langilerik kontratatu edo eraiki gabe.

## Matematika

```
Hidden capacity created = time released → activity units enabled × scheme value

Activity units: outpatient attendances, pre-op assessments, monitoring reviews
Scheme value:   national tariff / NHS Payment Scheme prices
                (see national-tariff-and-unit-costs.md)
```

Hau [profesionalaren denboraren](../profesionalen-denbora/) irteera-oinarriko balioespena da, zerbitzu-lerro batera eskalatua eta eragiketa-taldeak dagoeneko planifikatzen duen jarduera-unitateetan adierazia.

## Adibide landua

6. mailako (Band 6) erizain espezialistek ebaluazio preoperatorioko kontsultak egiten dituzte. Dokumentazio-automatizazioak 25 erizainetako bakoitzari ordu 1/egun berreskuratzen dio; ordu bakoitzean 2 ebaluazio sartzen dira.

```
Extra assessments = 25 nurses × 2/day × 250 days = 12,500/year
At ~£120 scheme value per pre-op assessment:
  12,500 × £120 = £1.5M/year of care capacity created
```

— erizain bakar bat kontratatu gabe eta gela bakar bat eraiki gabe. (Zirriborro honek jatorriz aipatzen zuen eredu zabalki aipatuak £766,920/urte jartzen zuen talde txikiago baterako; aritmetika-eredua bera da: zenbakia erizainak × saioak × tarifa gisa eskalatzen da.) COOrentzako eragiketa-markoa: ebaluazio preoperatorioa kirofano-zerrenden murrizgarri izateari uzten dio — egun berean bertan behera uzten diren ebakuntzak murrizten dira, eta kirofanoen erabilera igotzen da, hortik hasten da *hurrengo* onura-lerroa (ikus [downstream baliabideen optimizazioa](../beheranzko-baliabideen-optimizazioa/)).

## Software ingeniaritzarekin lotura

Birformulazio berak garatzaile-produktibitatearen aldarrikapenak soldaten matematikatik erreskatatzen ditu: askatutako ingeniaritza-denbora, erakundeak bestela ordaindu ezin zuen *entregatutako gaitasun* gisa adierazita —eginbideak, migrazioak, fidagarritasun-lana—, erakundeak gaitasun horrengatik marjinan ordaintzen duenaren arabera baloratua (kontratista-tarifak edo aldiz atzeratutako kontratazioen baliokideak). COO markoak plataforma-lana saltzeari buruz zerbait ere irakasten du: adierazi onura hartzaileak kudeatzen diren unitateetan. Eragiketa-buruek jarduera eta helburuetan pentsatzen dute, ez ordu abstraktuetan; ingeniaritza-buruek ibilbide-orriko elementuetan eta langile-kopuruan, ez aurrezitako minutuetan.

## Tranpak

- **Eskaririk gabeko gaitasun-aldarrikapenak**: 12,500 ebaluazio-hutsune gehigarri garrantzitsuak dira bakarrik ebakuntza-fluxuak betetzen baditu — egiaztatu behe-ibilbideko murrizketa.
- **Ordainketa-mekanismorik gabeko tarifa-balioa**: ordainketa nahasian, jarduera gehigarriak ez du zertan diru-sarrera gehigarririk ekarri; balioa itxaron-zerrendaren murrizketa izan daiteke (ikus [itxaron-zerrendaren eragina](../itxaron-zerrendaren-eragina/)).
- **Gaitasuna dirutzat aurkeztea** — hau da diru-sarrera zuzena askatzen ez duen onura nagusia; etiketatu (ikus [dirua askatzen duena vs ez duena](../diru-sarrera-sortzen-duten-aurrezkiak-vs-sortzen-ez-dituztenak/)).

## Iturriak

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
