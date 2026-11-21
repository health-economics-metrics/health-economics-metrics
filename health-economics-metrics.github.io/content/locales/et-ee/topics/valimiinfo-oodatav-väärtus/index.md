# Valimiinfo oodatav väärtus (EVSI)

EVSI on *konkreetse kavandatud uuringu* — antud kavandi, antud valimi suuruse — väärtus enne selle läbiviimist, erinevalt [EVPI-st](../täiusliku-info-oodatav-väärtus/), mis hindab kogu ebakindluse täielikku kõrvaldamist. EVSI vastab küsimusele, millega teadusuuringute rahastaja tegelikult silmitsi seisab: „kas *see* uuring *sellises* suuruses on oma kulu väärt?“

## Miks see on oluline

EVPI annab lae sellele, kui palju mis tahes uuring võiks väärt olla; see ei ütle kunagi, kas teie ees olev uuring ületab latti. Riiklik teadusuuringute rahastaja, kes valib 50 patsiendiga pilootuuringu ja 500 patsiendiga otsustava uuringu vahel, peab teadma, kui palju on väärt *iga konkreetne kavand*, mitte ainult kõiketeadmise väärtus. EVSI annab selle arvu ja kuna see skaleerub valimi suurusega, saab rahastaja leida valimi suuruse, mis maksimeerib oodatavat netokasu, selle asemel et oletada.

See on ka põhjus, miks EVSI on alati väiksem või võrdne EVPI-ga: lõplik valim saab ebakindlust lahendada vaid osaliselt ning uuring, mis näib olevat väärt rohkem kui täiuslik info, on märk sellest, et arvutus on vale, mitte tegelik tulemus.

## Matemaatika

```
Üldiselt:
EVSI(n) = E_andmed[ max_d E_θ|andmed[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (pesastatud ootus: väline üle võimalike uuringutulemuste, sisemine üle
  posterioorse uskumuse θ kohta pärast selle tulemuse nägemist — tavaliselt
  hinnatud pesastatud Monte Carlo / Bayesi uuendamisega tõenäosusliku
  tundlikkusanalüüsi tõmmete üle)

Kinnine normaalaproksimatsioon (üks ebakindel parameeter, seotud
normaal-normaal-mudel — levinud otsetee, mitte iga mudeli jaoks täpne):
EVSI(n) = EVPI × n / (n + n0)

n  = kavandatud uuringu valimi suurus
n0 = „priooriga samaväärne valimi suurus“ — kujuteldava valimi suurus, mis
     kannaks sama infot kui praegune prioor, tuletatud andmete dispersiooni
     ja prioori dispersiooni suhtest
ENBS(n) = EVSI(n) − Kulu(n)
Populatsiooni-EVSI = EVSI_otsuse_kohta × mõjutatud_otsused
```

Üldvorm on pesastatud ootus, sest uuringu tulevane tulemus on ise ebakindel: tuleb keskmistada üle iga võimaliku andmestiku, mida uuring võiks anda, ja iga jaoks arvutada parim otsus uuesti uuendatud (posterioorse) uskumuse põhjal. Kinnine normaalaproksimatsioon vahetab selle arvutuskulu ühe suhte vastu, kehtides siis, kui ebakindel parameeter ja andmed on (ligikaudu) normaalsed ja seotud — mugavus, mitte universaalne seadus. Täielik pesastatud Monte Carlo on üldotstarbeline meetod, kui see eeldus ei kehti. Vaata [tõenäosuslikku tundlikkusanalüüsi](../tõenäosuslik-tundlikkusanalüüs/) PSA tõmmete kohta, mille põhjal EVSI-d tavaliselt hinnatakse.

## Lahendatud näide

Tuginedes [EVPI](../täiusliku-info-oodatav-väärtus/) lahendatud näitele — tehisintellekti dokumenteerimisabilise kasutuselevõtt 5 000 kliinikule, kus EVPI osutus £1,2 mln — väljendame sama EVPI siin täisnaeltes: **EVPI = £1 200 000**.

Laual on kavandatud pilootuuring 50 kliinikuga. Varasema uskumuse dispersiooni ja piloodi mõõtetäpsuse suhtest saab priooriga samaväärseks valimi suuruseks `n0 = 75`:

```
EVSI(50) = 1 200 000 × 50 / (50 + 75)
         = 1 200 000 × 50 / 125
         = 1 200 000 × 0,4
         = £480 000
```

Pilootuuring maksab £120 000:

```
ENBS = EVSI − Kulu = 480 000 − 120 000 = £360 000
```

Selgelt positiivne ENBS: rahasta pilootuuring. Kui sama hankeotsus kordub 3 sarnases piirkondlikus trustis, skaleerub piloodi väärtus:

```
Populatsiooni-EVSI = 480 000 × 3 = £1 440 000
```

## Seos tarkvaraarendusega

EVSI on selle majandus, kui *suur* peaks pilootprojekt või A/B-test olema, mitte ainult see, kas üldse ühte läbi viia:

- **Valimi suurus kui investeerimisotsus.** 50 kasutajaga beeta ja 5 000 kasutajani etapiviisiline kasutuselevõtt on erinevad „uuringud“ erinevate EVSI-de ja kuludega — EVSI laseb neid võrrelda samal alusel, selle asemel et langeda tagasi vaikimisi „rohkem andmeid on alati parem“.
- **Tellimistest on ENBS, mitte EVSI üksi.** Kõrge EVSI-ga uuring, mille kulu sööb suurema osa sellest ära, on nõrk ettepanek; otsustusreegel on valimi oodatav netokasu, täpselt nagu ärijuhtum seab kasu kulu vastu, mitte ei raporteeri ainult kasu.
- **Vähenev piirtulu on selgelt nähtav.** Kuna EVSI(n) kasvab kui `n/(n+n0)`, ei kahekordista piloodi suuruse kahekordistamine kunagi selle väärtust — inseneri instinkti formaalne versioon, et suuremal eksperimendil on vähenev piirinfoväärtus.

## Lõksud

- **Normaalaproksimatsiooni rakendamine väljaspool selle eeldusi.** See kehtib vaid ligikaudu seotud ühe parameetri ebakindluse korral; tõeliselt mittelineaarne või mitme parameetriga otsustusmudel vajab täielikku pesastatud Monte Carlot, mitte seda otseteed.
- **EVSI võrdlemine ainult rahalise kuluga.** EVSI-d tuleb kaaluda uuringu *täieliku* kulu vastu, sealhulgas selle enda otsuse viivituse kulu — vaata [viivituse kulu](../viivituse-kulu/) —, mitte ainult uuringu arvet.
- **EVSI > EVPI käsitamine tegeliku leiuna.** EVSI ei saa konstruktsiooni järgi kunagi ületada EVPI-d; arvutus, mis seda annab, on mudelivea, mitte avastus.

## Allikad

- Ades AE, Lu G, Claxton K. „Expected value of sample information calculations in medical decision modeling.“ Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. „The value of information and optimal clinical trial design.“ Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. „When is a model-based value of information analysis feasible?“ Medical Decision Making 2014.
