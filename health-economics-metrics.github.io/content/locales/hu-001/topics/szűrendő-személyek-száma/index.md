# Szűrendő személyek száma (NNS)

Az NNS azon személyek száma, akiket meg kell szűrni — nem csupán kezelni —, hogy egy meghatározott követési időszak alatt **egy** kedvezőtlen kimenetet megelőzzenek, adott a populáció alapkockázata és az a relatív kockázatcsökkenés, amelyet a korai felismerés és kezelés elér. Az NNT szűrőprogram-szintű megfelelője: az NNT azt kérdezi, hány beteget kell *kezelni* egy kimenet megelőzéséhez; az NNS azt, hányan menjenek át a teljes *szűrés-majd-kezelés* útvonalon ahhoz.

## Miért fontos

Rembold 1998-ban vezette be az NNS-t kifejezetten azért, hogy a szűrőprogramokat a kezelésekkel azonos alapon lehessen összehasonlítani, mert egy szűrőteszt címszerinti relatív kockázatcsökkenése két olyan dolgot rejt el, amit egy kezelésé nem: a ténylegesen szűrésre meghívott populáció alapkockázatát, és azt a tényt, hogy mindenki, akit megszűrnek, viseli a teszt költségét és téves pozitív terhét, nem csak az a kisebbség, amely végül profitál. Az Egyesült Királyság Nemzeti Szűrőbizottságának költséghatékonysági kapuja (lásd [a szűrés gazdaságtana](../a-szűrés-gazdaságtana/)) pontosan erre a megkülönböztetésre épül — egy lenyűgöző relatív kockázatcsökkenésű szűrőprogramnak alacsony alapkockázatú populációban is lehet ezres NNS-e, amikor a megelőzött kimenetenkénti programköltség lesz az igazi kérdés.

## A matematika

```
NNS = 1 / (baseline_risk × relative_risk_reduction)

baseline_risk           = probability of the outcome in the screened
                           population over the follow-up period (0–1)
relative_risk_reduction = proportional risk reduction achieved by
                           screening-enabled early treatment (0–1)

Program cost per outcome prevented = NNS × cost_per_screen
```

Közvetlenül összehasonlítható az [NNT](../kezelendő-betegek-száma/)-vel: az NNS a teljes szűrés → diagnózis → kezelés tölcsér hatásosságát egyetlen számba sűríti, míg az NNT már feltételezi, hogy a beteg diagnosztizált és megkezdi a kezelést.

## Kidolgozott példa

Egy szűrőprogram célpopulációjának alap eseménykockázata 2% a vizsgálati időszakban (`baseline_risk = 0.02`), és a korai felismerés 25%-os relatív kockázatcsökkenést ér el (`relative_risk_reduction = 0.25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

200 people must be screened to prevent one outcome.

At £50 per screen:
Programme cost per outcome prevented = 200 × £50 = £10,000
```

Ezt a 10 000 £-os számot kell mérlegelni a kimenet maga költségéhez és az általa elvesztett QALY-khoz képest — ugyanaz az összehasonlítás, amelyet a [megelőzés gazdaságtana](../a-megelőzés-gazdaságtana/) a megelőzési programokra általában végez.

## Kapcsolat a szoftverfejlesztéssel

Az NNS az, hogy „hány felhasználónak, eseménynek vagy kérésnek kell átfutnia egy észlelési vagy triázsfolyamaton, hogy egy cselekvésre érdemes valódi pozitívot elkapjunk" — közvetlenül releváns a riasztásalapú monitorozási és triázsrendszerekhez, ahol az alacsony prevalenciájú célállapot ugyanúgy felfújja az NNS-t, ahogy a pozitív prediktív értéket összeomlasztja (lásd [a szűrés gazdaságtana](../a-szűrés-gazdaságtana/) és [klinikai MI értékelése](../klinikai-mi-értékelése/)). Egy monitorozási szabály, amelynek valódi elkapásonként 200 eseményt kell feldolgoznia, csak akkor éri meg a futtatást, ha az elkapás legalább 200-szor annyit ér, mint az eseményenkénti triázsköltség — pontosan ugyanaz a számtan, mint a fenti egészségügyi kidolgozott példában.

## Buktatók

- **Az alapkockázat-függés figyelmen kívül hagyása**: ugyanannak a szűrőtesztnek vagy programnak nagyon eltérő az NNS-e — és költséghatékonysága — nagy kockázatú és alacsony kockázatú populációban. Soha ne idézz NNS-t annak a populációnak a megadása nélkül, amelyre számították.
- **A rossz nevező számolása**: az NNS a *megszűrt* személyeket számolja, nem azokat, akik pozitívak vagy kezelést kezdenek — már magában foglalja a teljes tölcsér hatásosságát, ezért soha nem szabad olyan mutatóval összehasonlítani, amelyet csak a pozitívakra számolnak.
- **Összehasonlítás eltérő követési időszakok között**: a rövidebb követési időszak általában felfújja az NNS-t, mert kevesebb eseményt figyelnek meg az ablakban. Az NNS-számok csak azonos követési időtartamra számítva hasonlíthatók össze.

## Források

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
