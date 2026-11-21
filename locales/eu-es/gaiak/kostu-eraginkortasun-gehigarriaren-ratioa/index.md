# Kostu-eraginkortasun gehigarriaren ratioa (Incremental Cost-Effectiveness Ratio, ICER)

ICERa aukera bat hurrengo alternatibarik onenaren aurrean aukeratzean osasun-efektuaren unitate gehigarri bakoitzeko kostu gehigarria da. Osasun-teknologien ebaluazioaren titular-zenbakia da. (Efektu-unitatea QALYa denean, kostu-utilitate ratio gehigarria ere deitzen zaio, ICUR.)

## Zergatik axola duen

Osasun-sistemek ez dute inoiz teknologia bat isolatuan ebaluatzen — beti *gehigarriki*, bestela egingo litzatekeenaren aurka. NICEk teknologia baten ICERa bere **£20,000–£30,000 QALY bakoitzeko** atalasearekin alderatzen du; AEBetako ICER institutuak $50,000–$200,000/QALY tartean jakinarazten du; Kanadak CAD$50,000/QALY inguruan lan egiten du. Zure produktua osasun-zerbitzu nazional batentzat "merezi duen" ala ez, formalki, bere ICERak tokiko atalasea gainditzen duen ala ez da. Ikus [ordaintzeko borondatearen atalaseak](../ordaintzeko-borondatearen-atalaseak/).

## Matematika

```
ICER = (Kostua_berria − Kostua_konparatzailea) / (Efektua_berria − Efektua_konparatzailea)
     = ΔC / ΔE
```

Interpretazio-arauak:

- ΔC < 0, ΔE > 0: aukera berriak **menderatzen du** — merkeagoa eta hobea; ez da ratiorik behar.
- ΔC > 0, ΔE > 0: kalkulatu ICERa, alderatu λ atalasearekin; onartu ICER < λ bada.
- ΔC > 0, ΔE < 0: aukera berria menderatua da — baztertu.
- Ratioek gaizki jokatzen dute ΔE = 0 inguruan — hobetsi [onura monetario garbia](../onura-monetario-garbia/) sailkapenerako.

Konparatzailea *menderatu gabeko hurrengo aukerarik onena* izan behar da, ez "ezer ez egin" — ikus [menderatzea eta eraginkortasun-muga](../menderatzea-eta-eraginkortasun-muga/).

## Adibide landua

Bihotz-gutxiegitasuna duten pazienteentzako urruneko monitorizazio-zerbitzu bat, 1.000 paziente/urte bakoitzeko, ohiko arretaren aurka:

```
Kostuak:  zerbitzua £900,000; saihestutako ospitalizazioek £600,000 aurrezten dituzte
          ΔC = 900,000 − 600,000 = £300,000
Efektuak: esku-hartze goiztiarrak 25 QALY irabazten ditu
          ΔE = 25

ICER = 300,000 / 25 = £12,000 QALY bakoitzeko
```

£12,000/QALY NICEren £20,000 atalasearen azpian erosoki dago — kasu sendoa. Kontuan izan kostu *garbia* axola duela: £600,000ko konpentsaziorik gabe ICERa £36,000/QALY izango litzateke eta kasuak ziurrenik huts egingo luke. Kostu-konpentsazioak eta haien ebidentzia-kalitatea analisi hauek irabazten edo galtzen diren lekua da (ikus [saihestutako beheranzko kostuak](../saihestutako-beheranzko-kostuak/)).

## Software ingeniaritzarekin lotura

ICER diziplina oso-osorik transferitzen da ingeniaritza-erabakietara:

```
(B aukeraren kostua − A aukeraren kostua) / (B emaitza − A emaitza)
```

— hedapen gehigarri bakoitzeko, aurreztutako ingeniari-ordu bakoitzeko, saihestutako intzidentzia bakoitzeko kostu gehigarria — beti hurrengo alternatibarik onenaren aurka, ez ezer ez egitearen aurka. Lapurtzeko merezi duten bi ohitura: (1) *izendatu konparatzailea esplizituki*; tresnen ROI aldarrikapen gehienek isilean strawman baten aurka alderatzen dute; (2) *garbitu kostuak lehenik* — £100k kostatzen duen baina lehendik dagoen £80k gastua ordezkatzen duen tresnak ΔC = £20k du.

## Tranpak

- **ICERa monetetan zehar bihurketa-urrats esplizitu gabe alderatzea**: herrialde baten monetan kalkulatutako ICERa bihurketa-metodo adierazi batekin bihurtu behar da beste herrialde baten atalasearekin alderatu aurretik — ikus [moneta arteko ICER konparaketa](../moneta-arteko-icer-konparaketa/) bihurketa-faktorearen aukerak (erosteko ahalmenaren parekotasuna vs merkatu-truke tasa) berak onarpen-erabakia nola irauli dezakeen jakiteko.
- **Konparatzailearen manipulazioa**: oinarri zaharkitu edo artifizialki txar baten aurka alderatzeak ΔE puztzen du eta ICERa lausengatzen du.
- **Gehigarrien ordez batez bestekoak**: programa oso baten QALY bakoitzeko kostua ez da hura zabaltzearen edo onartzearen ICERa.
- **Estimazio-puntuaren gurtza**: ICERak bi desberdintasun ziurgabeen ratioak dira; jakinarazi ziurgabetasuna [PSA eta CEACen](../sentikortasun-analisi-probabilistikoa/) bidez.
- **ICER negatiboak anbiguoak dira** (merkeagoa-eta-hobea vs garestiagoa-eta-okerragoa zeinu bera ematen dute) — ez jakinarazi inoiz ICER negatiborik zein koadrante den esan gabe.

## Iturriak

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
