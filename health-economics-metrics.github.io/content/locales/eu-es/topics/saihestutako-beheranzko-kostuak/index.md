# Saihestutako beheranzko kostuak (Avoided Downstream Costs)

Saihestutako beheranzko kostuak (kostu-konpentsazioak) aurrez edo hobeto jarduteak galarazten dituen etorkizuneko tratamendu-gastuak dira, esku-hartzearen beraren kostuarekin garbituta. Konpentsazioak dira esku-hartze bat *menderatzaile* — merkeagoa **eta** hobea — bihur daitekeen mekanismoa, eta osasun-ekonomiako lerrorik gehien bikoiztua eta gehiegi aldarrikatua ere bai.

## Zergatik axola duen

Ia osasun digitaleko balio-proposamen guztiek konpentsazio-aldarrikapen bat dute: "gure aplikazioak ospitalizazioak saihesten ditu", "gure alertek okerrera egitea saihesten dute", "gure plataformak proba bikoiztuak saihesten ditu". Konpentsazioak benetakoak direnean, ekonomia eraldatzen dute (ikus [ICER](../kostu-eraginkortasun-gehigarriaren-ratioa/) adibide landua, non £600k konpentsazioak kasua osatzen duen). Ordaintzaileek badakite — beraz konpentsazio-aldarrikapenek edozein ebaluaziotan azterketarik gogorrena jasotzen dute. Beheko sinesgarritasun-arauek bereizten dute eredu finantzagarri bat marketinetik.

## Matematika

```
Kostu garbia = esku-hartzearen kostua − Σ konpentsazioak

Konpentsazio baliozkoak hauek izan behar du:
  Egotzgarria   — esku-hartzearekin kausalki lotua (konparatzaile-ebidentzia)
  Marjinala     — dirua benetan gastatzeari uzten zaio, kostu marjinalean eta ez
                  batez bestekoan (ikus marginal-vs-average-cost.md)
  Probabilitate- — beheranzko gertaera gertatuko zatekeen P-rekin haztatua
  rekin haztatua
  Eguneratua    — etorkizuneko saihestutako kostuak egungo balioan
  Bakarra       — behin zenbatua, onura-lerro batean
```

## Adibide landua

"Migrazio-arriskuaren aldarrikapen hau, ondo eginda": ebakuntza ondoko 5.000 pazienteentzako zauri-monitorizazioko aplikazio batek infekzioari lotutako berrospitalizazioak saihesten dituela aldarrikatzen du.

```
Infekzioagatiko berrospitalizazio-oinarria: %4.0 ; aplikazioarekin (RCT): %3.1
Saihestutako gertaera egotzgarriak = 5,000 × 0.009 = 45/urte
Berrospitalizazio-epealdi bakoitzeko kostua (marjinala, trust honetan): £3,200
Konpentsazioa = 45 × 3,200 = £144,000/urte
Aplikazioaren kostua = 5,000 × £20 = £100,000/urte
Kostu garbia = −£44,000 → benetan kostu-aurrezlea, honekin:
  egozpena RCT batetik ✓  kostu marjinala ✓  probabilitatea saiakuntza-datuetatik ✓
```

"Berrospitalizazioek batez beste £5,800 kostatzen dute, asko saihestuko ditugu" oinarritutako aldarrikapen berak lau probetan huts egiten du eta merezi duen baztertzea merezi du.

## Software ingeniaritzarekin lotura

"Migrazio honek etorkizuneko berridazketa saihesten du" konpentsazio-aldarrikapen bat da, eta osasun-ekonomiaren arauek zintzo bihurtzen dute:

- **Kontrafaktuko kostua**: berridazketak benetan zenbat kostatuko luke, nola frogatuta?
- **Probabilitatea**: zein probableak da etorkizun hori? (Ez %100 — produktuak hiltzen dira, lehentasunak aldatzen dira.)
- **Eguneratzea**: 4. urtean saihestutako berridazketak, %3,5–10eko eguneratzearekin, aurpegiko balioa baino askoz gutxiago balio du.
- **Bakartasuna**: ez aldarrikatu saihestutako berridazketa bera zor teknikoaren lerroan eta atxikipenaren lerroan.

`Konpentsazio-balioa = P(etorkizuneko gertaera) × kontrafaktuko kostua × eguneratze-faktorea` — idatzi lerro hori proposamenean eta ikusi estimazioa eztabaidagarri bihurtzen, hori da helburua.

## Tranpak

- **Zenbaketa bikoitza** — saihestutako ospitalizazio bera konpentsazio, ohe-egun eta kostuarekin lotutako QALY gisa aldarrikatua.
- **Batez besteko kostuko konpentsazioak** kostu finkoak edonola jarraitzen duten gertaeretarako.
- **%100eko probabilitate isila** gertatzeko aukera baino ez zuten beheranzko gertaeretan.
- **Beste aurrekontuetarako konpentsazioak** ordaintzeko eskatzen zaion ordaintzaileari aurrezki gisa aurkeztuta — ikus [azterketaren ikuspegia](../azterketaren-ikuspegia/).

## Iturriak

- York Health Economics Consortium glossary: cost offset. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (offsets rarely exceed costs). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
