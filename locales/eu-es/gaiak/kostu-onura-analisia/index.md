# Kostu-onura analisia (Cost-Benefit Analysis, CBA)

CBAk kostuak *eta* emaitzak diruan balioesten ditu. "Merezi al du hau egiteak?" — ez bakarrik "zein aukera da onena?" — erantzun dezakeen analisi mota bakarra da, onura monetizatuak zuzenean kostuekin alderatu daitezkeelako.

## Zergatik axola duen

CBA Erresuma Batuko HM Treasury-ren **Green Book**-eko estandarra da gastu publiko guztiaren ebaluaziorako, osasuna barne emaitzak monetizatu daitezkeenean. [CEA](../kostu-eraginkortasun-analisia/)/[CUA](../kostu-utilitate-analisia/)k "osasun-unitate bakoitzeko kostuan" gelditzen diren lekuan, CBAk osasuna bera prezioztatzen du (QALY × atalase-balioa) eta gainerako guztia — denbora, joan-etorriak, karbonoa — eta zifra garbi bakarra jakinarazten du. NHSren negozio-kasu digital oso orok CBA itxurako kasu ekonomikoa du.

## Matematika

```
NPV (gizarte-balio garbiaren egungo balioa) = Σ_t [ (Onurak_t − Kostuak_t) / (1 + r)^t ]
BCR (onura-kostu ratioa)                    = PV(onurak) / PV(kostuak)

Onartu NPV > 0 bada (baliokidea BCR > 1); sailkatu NPVaren arabera, ez BCRren arabera.
r = %3.5 (Green Book-eko gizarte-denbora-lehentasun tasa)
```

Osasun-efektuak monetizatuta sar daitezke QALY × λ gisa (ikus [ordaintzeko borondatearen atalaseak](../ordaintzeko-borondatearen-atalaseak/)). Green Book-ek **baikortasun-alborapenaren doikuntzak** ere agintzen ditu — kostu-estimazioak igotzea eta onurak ebidentzian oinarritutako ehunekoetan murriztea, ebaluazioak sistematikoki arrosak direlako.

## Adibide landua

E-deribazio sistema bat, 5 urteko horizontea, %3.5eko eguneratzea:

```
Kostuak:  eraikuntza £1.2M (0. urtea), funtzionamendua £300k/urte (1–5 urteak)
Onurak:   administrazio-aurrezkiak £250k/urte, saihestutako diagnostiko bikoitzak £280k/urte,
          pazientearen denbora aurreztua 40,000 ordu/urte × £15 = £600k/urte → £1,130k/urte

PV kostuak = 1,200k + 300k × 4.515 (anualitate-faktorea) = £2,555k
PV onurak  = 1,130k × 4.515                             = £5,102k

NPV = 5,102 − 2,555 = +£2,547k     BCR = 2.0
```

Aplikatu Green Book-eko baikortasun-alborapena (esan, eraikuntza-kostuan +%40, onuretan −%20): PV kostuak ≈ £3,035k, PV onurak ≈ £4,082k, NPV ≈ **+£1,047k** — oraindik positiboa, hori da doikuntzaren helburua: kasuek euren baikortasuna gainditu behar dute.

## Software ingeniaritzarekin lotura

Ingeniaritza-negozio-kasuak CBA informalak dira. Green Book-etik lapurtzeko merezi duten hobekuntzak:

- **Baikortasun-alborapena igoera estandar gisa** — ingeniariek migrazio-kostua ministerioek azpiegitura-kostua bezain fidagarriki gutxiesten dute; aplikatu adierazitako igoera bat "oraingoan desberdina da" itxurak egin ordez.
- **Monetizatu onura nagusia zintzo edo ez inondik ere** — pazientearen/erabiltzailearen denbora tasa defendagarrietan monetizatzen da; "marka-balioa" ez.
- **NPVk sailkatzen du, BCRk ez**: BCR 5 duen proiektu ñimiño batek BCR 1.6 duen handi batek baino gutxiago axola dezake.

## Tranpak

- **Monetizaezina monetizatzea** onurak puztzeko (moral, "lerrokatze estrategikoa") — mantendu kualitatibo, [kostu-ondorio analisia](../kostu-ondorio-analisia/)ren arabera.
- **Transferentziak onura gisa zenbatzea**: erakunde publikoen artean mugitzen den diruak zero garbitzen du gizarte-[ikuspegian](../azterketaren-ikuspegia/).
- **Kontrafaktikorik ez**: onurak gutxieneko-egin aukeraren aurka neurtzen dira, ez zeroren aurka.

## Iturriak

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
