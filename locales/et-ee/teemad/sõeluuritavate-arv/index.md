# Sõeluuritavate arv (NNS)

NNS on inimeste arv, keda tuleb sõeluuringuga uurida — mitte ainult ravida —, et ära hoida **üks** ebasoodne tulemus määratletud jälgimisperioodi jooksul, arvestades populatsiooni baasriski ja suhtelist riskivähenemist, mille varajane avastamine ja ravi saavutavad. See on NNT sõeluuringuprogrammi tasandi analoog: NNT küsib, mitut tuleb *ravida*, et üks tulemus ära hoida; NNS küsib, mitu inimest peab läbima kogu *sõeluuring-ja-seejärel-ravi* tee, et sinna jõuda.

## Miks see on oluline

Rembold võttis NNS-i kasutusele 1998. aastal just selleks, et sõeluuringuprogramme saaks võrrelda samal alusel nagu ravi, sest sõeluuringutesti pealkirja suhtelise riskivähenemise arv varjab kahte asja, mida ravi oma ei varja: tegelikult sõeluuringule kutsutava populatsiooni baasriski ning asjaolu, et kõik sõeluuritavad kannavad testi kulu ja valepositiivsete koormat, mitte ainult vähemus, kes hiljem kasu saab. Briti National Screening Committee kulutõhususe värav (vaata [sõeluuringute majandust](../sõeluuringute-majandus/)) on ehitatud just sellele vahetegemisele — sõeluuringuprogrammil, millel on muljetavaldav suhteline riskivähenemine madala baasriskiga populatsioonis, võib olla ikkagi NNS tuhandetes, ja siis saab programmi kulu ärahoitud tulemuse kohta tõeliseks küsimuseks.

## Matemaatika

```
NNS = 1 / (baasrisk × suhteline_riskivähenemine)

baasrisk                  = tulemuse tõenäosus sõeluuritavas populatsioonis
                            jälgimisperioodi jooksul (0–1)
suhteline_riskivähenemine = proportsionaalne riskivähenemine, mille saavutab
                            sõeluuringuga võimaldatud varajane ravi (0–1)

Programmi kulu ärahoitud tulemuse kohta = NNS × kulu_sõeluuringu_kohta
```

Võrdle otse [NNT-ga](../ravi-vajavate-arv/): NNS voldib kogu lehtri sõeluuring → diagnoos → ravi tõhususe üheks arvuks, samas kui NNT eeldab juba, et patsient on diagnoositud ja alustab ravi.

## Lahendatud näide

Sõeluuringuprogrammi sihtpopulatsiooni sündmuse baasrisk uuringuperioodil on 2% (`baasrisk = 0,02`) ja varajane avastamine saavutab 25% suhtelise riskivähenemise (`suhteline_riskivähenemine = 0,25`):

```
NNS = 1 / (0,02 × 0,25) = 1 / 0,005 = 200

Ühe tulemuse ärahoidmiseks tuleb sõeluurida 200 inimest.

£50 sõeluuringu kohta:
Programmi kulu ärahoitud tulemuse kohta = 200 × £50 = £10 000
```

Seda £10 000 tuleks kaaluda tulemuse enda kulu ja QALY-de vastu, mida see oleks maksnud — sama võrdlus, mida [ennetusmajandus](../ennetusmajandus/) teeb ennetusprogrammide jaoks üldiselt.

## Seos tarkvaraarendusega

NNS on „mitu kasutajat, sündmust või päringut peab läbima avastus- või triaaživoo, et tabada üks tõeline positiivne, mille peale tasub tegutseda“ — otseselt oluline hoiatustel põhinevatele seire- ja triaažisüsteemidele, kus madala levimusega sihtseisund puhub NNS-i üles samamoodi, nagu see lööb kokku positiivse ennustusväärtuse (vaata [sõeluuringute majandust](../sõeluuringute-majandus/) ja [kliinilise tehisintellekti hindamist](../kliinilise-tehisintellekti-hindamine/)). Seirereeglit, mis peab töötlema 200 sündmust tõelise tabamuse kohta, tasub käitada ainult siis, kui tabamus on väärt vähemalt 200 korda triaažikulu sündmuse kohta — täpselt sama aritmeetika nagu ülaltoodud tervishoiunäites.

## Lõksud

- **Baasriskist sõltuvuse eiramine**: sama sõeluuringutest või -programm omab kõrge riskiga populatsioonis hoopis teistsugust NNS-i — ja kulutõhusust — kui madala riskiga populatsioonis. Ära esita kunagi NNS-i ilma populatsiooni nimetamata, mille jaoks see arvutati.
- **Vale nimetaja lugemine**: NNS loeb *sõeluuritud* inimesi, mitte neid, kes testivad positiivselt või alustavad ravi — see sisaldab juba kogu lehtri tõhusust, seega ei tohi seda kunagi võrrelda näitajaga, mida loetakse ainult positiivsete üle.
- **Võrdlemine üle jälgimisperioodide**: lühem jälgimisperiood puhub NNS-i tavaliselt üles, sest aknas jälgitakse vähem sündmusi. NNS-i arvud on võrreldavad ainult siis, kui need on arvutatud sama jälgimiskestuse kohta.

## Allikad

- Rembold CM. „Number needed to screen: development of a statistic for disease screening.“ BMJ. 1998;317(7154):307-12.
