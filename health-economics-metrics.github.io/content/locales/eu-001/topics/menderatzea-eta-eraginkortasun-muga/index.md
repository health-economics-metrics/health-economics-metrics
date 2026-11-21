# Menderatzea eta eraginkortasun-muga (Dominance and the Efficiency Frontier)

Aukera bat **menderatua** dago beste aukera batek gutxiago kostatzen badu *eta* gehiago ematen badu. **Eraginkortasun-muga** aukera menderatuak ezabatu ondoren gelditzen dena da: gehiago lortzeko gehiago ordaindu behar den aukeren multzoa.

## Zergatik axola duen

Atalaseei edo aurrekontuei buruzko edozein eztabaida baino lehen, osasun-teknologien ebaluazioak lehenik inork inoiz aukeratu behar ez lituzkeen aukerak ezabatzen ditu. Aukera guztiak kostu-vs-efektu planoan marraztea eta muga marraztea bost minutuko ariketa da, rutinaz zerrenda laburreko erdia hiltzen duena. Konparaketa gehigarriak ([ICERak](../kostu-eraginkortasun-gehigarriaren-ratioa/)) orduan *mugan zehar* bakarrik kalkulatzen dira, aukera bakoitza hurrengo aukerarik merkeena den menderatu gabeko aukerarekin — inoiz ez "ezer ez egitearekin" tarteko aukera hobeak daudenean.

## Matematika

```
Menderatze zorrotza:  A-k B menderatzen du Kostua_A ≤ Kostua_B eta Efektua_A ≥ Efektua_B bada
                      (gutxienez desberdintasun zorrotz batekin)

Menderatze hedatua:   B baztertzen da A eta C-ren nahasketa batek libera bakoitzeko
                      efektu gehiago lortzen badu — ICERak jaisten direnean detektatzen da
                      mugan gora joan ahala. Mugako ICER baliozkoak gorakorrak izan behar dute.
```

Prozedura: sailkatu aukerak efektuaren arabera; kendu zorrotz menderatuak; kalkulatu bikoteen ICERak bizilagunen artean; kendu ICERa hurrengo efektu handiagoko aukerarena baino handiagoa duen edozein aukera (menderatze hedatua); errepikatu ICERak monotonoki igo arte.

## Adibide landua

Hutsegindako hitzorduak murrizteko lau aukera (efektua = urteko berreskuratutako hitzorduak):

```
Aukera          Kostua/urte  Berreskuratuak
Ezer ez egin    £0           0
SMS gogorarazpenak £20,000   2,000
Telefono-deiak  £120,000     2,200
SMS + AA triagea £90,000     3,500
```

Telefono-deiak SMS + AA triageak **zorrotz menderatzen ditu** (gehiago kostatzen du, gutxiago berreskuratzen du). Muga: ezer ez → SMS → SMS + AA.

```
ICER(SMS vs ezer ez)   = 20,000 / 2,000  = £10 berreskuratutako hitzordu bakoitzeko
ICER(SMS+AA vs SMS)    = (90,000 − 20,000) / (3,500 − 2,000) = £46.67 hitzordu bakoitzeko
```

ICER gorakorrak → muga baliozkoa. Berreskuratutako ospitaleko hitzordu bakoitzeko ~£160 aurreztuta ([bertaratu ez izanaren tasa](../bertaratu-ez-izanaren-tasa/) ikus), mugako bi urratsak merezi dute; telefono-zentralaren proposamenak ez luke inoiz batzordera iritsi behar.

## Software ingeniaritzarekin lotura

Eraiki diagrama bera edozein tresna-erabakirako: urteko kostua ardatz batean, neurtutako emaitza (aurreztutako orduak, saihestutako intzidentziak, ahalbidetutako hedapenak) bestean. Mugaren gora-ezkerrean dauden puntuak ezabatzen dira inork aurrekontuaz eztabaidatu aurretik. Honek saltzaile-hautaketa ezaugarri-zerrenda eztabaidetatik "menderatuta zaude; bilera amaitu da" bihurtzen du. Marjinaren irabazi baterako aukerarik garestiena erostearen enpresa-eredu arrunta ere agerian uzten du — legitimoa soilik erakundeak unitate gehigarri bakoitzeko prezio gehigarria jakinaren gainean ordainduko lukeenean.

## Tranpak

- **Dena oinarriarekin alderatzea** mugako hurrengo aukerarekin alderatu beharrean — aukera garestiak lausengatzen ditu gertuko ordezko merkeagoak ezkutatuz.
- **Dimentsio bakarreko efektu-puntuazioak** axola duena ezkutatzen dutenak; bi emaitzak kontuan hartzen badira, konbinatu itzazu defendagarriki (ikus [kostu-utilitate analisia](../kostu-utilitate-analisia/)) edo erakutsi bi muga.
- **Ziurgabetasuna ahaztea**: mugatik gertu dauden aukerek lekuak trukatu ditzakete [sentsibilitate-analisian](../sentikortasun-analisia/).

## Iturriak

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
