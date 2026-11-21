# Berrospitalizazio-tasa (Readmission Rate)

30 eguneko berrospitalizazio-tasa alta jaso eta 30 eguneko barruan larrialdi gisa itzultzen diren pazienteen ehunekoa da. Osasun-sistemaren *alta-kalitatearen* metrika kanonikoa da, eta zehapen finantzario zuzenak dakartza.

## Zergatik axola duen

Berrospitalizazioak esan nahi du lehen altak ez zuela eutsi: goizegiko alta, medikazio-eskuz-esku huts egina, jarraipenik eza edo gizarte-laguntzarik eza. Ordaintzaileek esplizituki zigortzen dute: AEBetako Hospital Readmissions Reduction Program-ak ospitale baten Medicare ordainketen %3 arte kentzen du; NHSk historikoki ez ditu ordaindu saihestu daitezkeen 30 eguneko larrialdi-berrospitalizazioak. Beraz, berrospitalizazioa saihestea hornitzaile batentzat *zuzenean* dirutan garrantzitsua den onura-kategoria urrietako bat da, ez kapazitatea soilik.

## Matematika

```
Readmission rate = emergency readmissions within 30 days / index discharges × 100

Risk-standardized comparisons adjust for case mix; penalty programmes
compare observed vs expected for like hospitals.

Value of avoidance = avoided readmissions × (cost per readmission spell
                     + penalty exposure per readmission)
```

## Adibide landua

Bihotz-gutxiegitasunaren alta-laguntzako aplikazio bat (sintomen jarraipena, pisu-alertak, medikazio-gogorarazleak, erizainaren eskalada): urtean 2.000 alta, oinarrizko berrospitalizazio-tasa %18, saiakuntzak %14 erakusten du aplikazioarekin.

```
Avoided readmissions = 2,000 × (0.18 − 0.14) = 80/year
Cost per readmission spell ≈ £3,500 → £280,000/year avoided treatment cost
Plus penalty/non-payment exposure on those spells.
App cost: 2,000 × £60 = £120,000/year

Net ≈ +£160,000/year, before any QALY claim for avoided deterioration.
```

Defendatu beharreko zenbakia 4 ehuneko-puntuko efektua da: konparazio kontrolatu batetik etorri behar du, berrospitalizazio-tasak case-mix-arekin eta urtaroarekin aldatzen direlako.

## Software ingeniaritzarekin lotura

Berrospitalizazioa osasun-sistemaren **aldaketa-hutsegite tasa** da (ikus [DORA metrikak](../dora-metrikak/)): "bidali" zen eta 30 egunen barruan itzuli zen lana. Analogiak sakonak dira: berrireki diren txartelek eta erregresio-intzidentziek "alta-kalitate" eskasa adierazten dute (egiaztapen ahula, goizegiko itxiera, eskuz-eskuko dokumentazio falta); zehapen motako kontabilitateak (konpontzen duen taldeak ordaintzen du, ez jasotzen duenak) jokabidea aldatzen du; eta bi alorrek ikasgai bera ikasi dute: throughput gordina bultzatzeak (alta azkarragoa, bidalketa azkarragoa) eskuz-eskuan inbertitu gabe ilara ikusgaiak berrikuspen ikusezin bihurtzen ditu. "30 eguneko berrireketa-tasa" zikloaren denbora ospatzen duen edozein talde-panelean egon behar da.

## Tranpak

- **Berrizendatuz jokoa manipulatzea**: berrospitalizazioak behaketa-egonaldi edo egoera berri gisa kodetuta; auditatu definizioa.
- **Kausa guztiak vs kausa lotuak**: 30 eguneko kausa-guztiek benetan lotu gabeko gertaerak barne hartzen dituzte; zehapenek kausa-guztiak erabili ohi dituzte, "lotua" manipulagarria delako zehazki.
- **Case-mix-aren itsutasuna**: populazio gaixoago eta pobreagoak zerbitzatzen dituen ospitale batek aplikazio batek konpon ez ditzakeen arrazoiengatik berrospitalizatzen du gehiago; doitu arriskua konparatu aurretik.

## Iturriak

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, emergency readmissions statistics. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
