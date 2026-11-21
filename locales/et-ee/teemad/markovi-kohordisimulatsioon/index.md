# Markovi kohordisimulatsioon

Markovi kohordimudel on HTA standardne modelleerimistehnika sekkumiste jaoks, mille mõjud avanevad mitme ajaperioodi (tsükli) jooksul, mitte ühe hoobiga. Hüpoteetiline kohort algab täielikult ühes tervise seisundis ja igas tsüklis nihutab püsiv ülemineku tõenäosuste komplekt kohordi osi seisundite vahel; kulud ja QALY-d kogunevad igas tsüklis proportsionaalselt sellega, kui suur osa kohordist iga seisundit hõivab, ning diskonteeritakse tänasesse väärtusse. Iga tarkvarainsener, kes modelleerib mitmeaastast digitervise ärijuhtumit — kus kasutajad või patsiendid liiguvad aja jooksul seisundite vahel nagu „kaasatud“, „väljalangenud“ või „lahkunud“ —, ehitab sama struktuuri.

## Miks see on oluline

Enamik tegelikke tervisetehnoloogia otsuseid ei ole ühe perioodi kulu ja tulemuse ühekordsed võrdlused. Krooniline seisund progresseerub, retsidiveerub, reageerib ravile või tapab, aastate jooksul — ja ühe perioodi [kulutõhususe analüüs](../kulutõhususe-analüüs/) ei suuda seda esitada. NICE-i, ICER-i ja CADTH-i esildised krooniliste haiguste sekkumiste kohta, mida hinnatakse [tervisetehnoloogia hindamise](../tervisetehnoloogia-hindamine/) kaudu, ehitatakse peaaegu alati Markovi kohordimudelitena eluaegse ajahorisondiga, sest alternatiiv — iga võimaliku individuaalse patsiendiraja modelleerimine — on suures mastaabis lahendamatu. Kohordi tasandi Markovi mudel vahetab osa individuaaltaseme realismi (sellel on raske kujutada mälu varasemate seisundite kohta, sellest „Markov“: tulevik sõltub ainult praegusest seisundist) mudeli vastu, mis on läbipaistev, auditeeritav ja piisavalt kiire, et seda tuhandeid kordi [tõenäosuslikus tundlikkusanalüüsis](../tõenäosuslik-tundlikkusanalüüs/) käitada.

## Matemaatika

```
Kohordi uuendus ühes tsüklis (reavektor × üleminekumaatriks):
  uus_seisund[j] = summa_i seisund[i] * üleminekumaatriks[i][j]

Ühe tsükli kulu:
  tsükli_kulu = summa_s seisund[s] * kulu_tsükli_kohta[s]

Ühe tsükli QALY-d:
  tsükli_qaly = summa_s seisund[s] * kasulikkus[s] * tsükli_pikkus_aastat

Täielik simulatsioon `tsüklid` tsükli ulatuses, diskonteeritud `diskontomäär`-ga:
  diskonteeritud_kulu_kokku = summa_{t=0}^{tsüklid-1} tsükli_kulu(seisund_t) / (1 + diskontomäär)^t
  diskonteeritud_qaly_kokku = summa_{t=0}^{tsüklid-1} tsükli_qaly(seisund_t) / (1 + diskontomäär)^t
  kus seisund_0 = algjaotus, seisund_{t+1} = edenda_kohorti(seisund_t, üleminekumaatriks)
```

Iga tsükli diskonteerimine tänasesse väärtusse kasutab täpselt [diskonteerimise ja ajaeelistuse](../diskonteerimine-ja-ajaeelistus/) valemit, rakendatuna tsükkel tsükli haaval, mitte aasta aasta haaval.

## Lahendatud näide

**Kliiniline**: 2 seisundiga mudel — `Terve` ja `Surnud` — kus 10% kohordist sureb igas tsüklis ja `Surnud` on neelav (selle enda juurde jäämise tõenäosus on 1,0; selle silmuse väljajätmisel kaoks kohordi mass pärast ühte tsüklit `Surnud`-is). Kohort algab täielikult `Terve`-na, maksab £1 000 tsükli kohta, kuni on `Terve` (£0 kui `Surnud`), ja võidab 0,8 QALY-t aastas, kuni on `Terve`. Simuleeritud 3 aastase tsükli ulatuses NICE-i 3,5% diskontomääraga:

```
Tsükkel 0: seisund = [1,00, 0,00] (100% Terved)
  kulu = £1 000,00, qaly = 0,800, diskontotegur = 1,000000
  diskonteeritud: kulu = £1 000,00, qaly = 0,8000

Tsükkel 1: seisund = [0,90, 0,10] (90% Terved, 10% Surnud)
  kulu = £900,00, qaly = 0,720, diskontotegur = 0,966184
  diskonteeritud: kulu = £869,57, qaly = 0,6957

Tsükkel 2: seisund = [0,81, 0,19] (81% Terved, 19% Surnud)
  kulu = £810,00, qaly = 0,648, diskontotegur = 0,933511
  diskonteeritud: kulu = £756,14, qaly = 0,6049

Diskonteeritud kulu kokku ≈ £2 625,71
Diskonteeritud QALY-d kokku ≈ 2,1006
```

Iga tsükli seisund on eelmise tsükli seisund, mis on viidud läbi üleminekumaatriksi — 90% neist 90%-st, kes on tsüklis 1 veel `Terved`, jääb tsüklis 2 `Terveks` (0,9 × 0,9 = 0,81), samal ajal kui ülejäänud 19% on nüüdseks surnud (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Pane tähele, et kohort ei tühjenda kunagi `Terve` seisundit täielikult: püsiva 10% suremuse korral tsükli kohta ja ilma tagasipöördumiseta väheneb `Terve` osakaal geomeetriliselt, mitte ei jõua nullini üheski lõplikus tsüklite arvus.

## Seos tarkvaraarendusega

Selle kohta, kuidas mitmetsüklilist HTA mudelit tegelikus hindamises kasutatakse, vaata [tervisetehnoloogia hindamist](../tervisetehnoloogia-hindamine/) — referentsjuhtum, mis määrab, millist diskontomäära, kasulikkuse allikat ja ajahorisonti esitatud Markovi mudel peab kasutama.

Markovi kohordimudel on struktuurselt tõenäosuslike üleminekutega olekumasin, mida käitatakse kindel arv taakte jooksul, diskonteerides iga taktiga väärtust. Sama kuju simuleerib kasutajakohordi säilimist/seisundiüleminekuid ajas — vaata [DORA näitajaid](../dora-näitajad/) töökindluse versiooni jaoks: „milline osa süsteemist on selles perioodis halvenenud seisundis ja mis see maksab“. Konkreetselt:

- **Säilimise/lahkumise modelleerimine** on Markovi kohordimudel seisunditega nagu „aktiivne“, „ohus“, „lahkunud“: püsiv igakuine üleminekumaatriks, käitatud 12 või 24 kuutsükli jooksul, ütleb ootuspärase aktiivsete kasutajate arvu (ja tulu) mis tahes tulevasel kuul, samamoodi nagu `Terve`/`Surnud` ütleb oodatavad ellujäänud.
- **Töökindlus ja intsidendimajandus**: süsteemi seisundeid (terve, halvenenud, maas) saab modelleerida samamoodi, „kuluga tsükli kohta“ seisakukahjule, mis kogub, kuni süsteem hõivab halvenenud/maas seisundeid — muutes intsidentide sageduse argumendi diskonteeritud kulu argumendiks, mida saab võrrelda töökindlustöö kuluga, mis muudaks üleminekutõenäosusi.
- **Neelavad seisundid lõppseisunditena**: `Surnud` kliinilises mudelis on täpselt „tühistatud tellimus“ või „püsivalt võrguühenduseta“ tarkvaramudelis — mõlemad vajavad selget enda juurde jäämise tõenäosust 1,0, vastasel juhul kaotab simulatsioon vaikselt massi.

## Lõksud

- **Üleminekutõenäosused, mis ei liitu reas 1-ni.** Rida, mis liitub rohkema või vähemaga kui 1, paneb kohordi vaikselt igas tsüklis massi „lekkima“ või „kasvama“ — kontrolli alati ridade summasid enne, kui usaldad mudeli väljundit, sest mudeli struktuur ise viga ei märgi.
- **Liiga jäme tsükli pikkus haiguse tegeliku dünaamika jaoks.** Aastatsükkel seisundi jaoks, mis muutub oluliselt nädalatega, alahindab tsükli keskel toimuvaid üleminekuid; vali tsükli pikkus, mis on lühike võrreldes sellega, kui kiiresti modelleeritav protsess tegelikult liigub.
- **Neelava seisundi silmuse unustamine.** Neelav seisund (surm, püsiv lõpetamine) vajab enda juurde jäämise tõenäosust täpselt 1,0. Kui see ära jätta, aurustub kohordi mass selles seisundis pärast ühte tsüklit ja alahindab kumulatiivseid kulusid või QALY kadu.
- **Mudeli pidamine valideerituks seetõttu, et see töötab.** Usutavate üleminekutõenäosustega Markovi kohordimudel võib ikkagi olla struktuurselt vale (puuduvad seisundid, vale neelav käitumine); valideeri teadaolevate epidemioloogiliste võrdlusaluste vastu (nt kas modelleeritud 5-aastane ellujäämine ühtib avaldatud elulemuskõveratega), enne kui usaldad väljundit.

## Allikad

- Sonnenberg FA, Beck JR. „Markov models in medical decision making: a practical guide.“ Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. „An introduction to Markov modelling for economic evaluation.“ PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
