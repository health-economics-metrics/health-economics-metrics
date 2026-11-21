# Kezelendő betegek száma (NNT)

Az NNT azon betegek száma, akiknek egy beavatkozást kell kapniuk ahhoz, hogy **egy** további beteg hasznot húzzon belőle, megadott időkereten belül. A félrevezető százalékos kockázatcsökkenéseket ráfordítás-haszon egységekké alakítja, amelyekről bárki tud gondolkodni.

## Miért fontos

„25%-kal csökkenti a szívrohamokat!" döntőnek hangzik. Ha az alapkockázat 5 év alatt 4%, az abszolút csökkenés 1 százalékpont, tehát **100 embernek kell 5 évig szednie a gyógyszert, hogy 1 profitáljon** — és mind a 100 viseli a költségeket és mellékhatásokat. Az NNT az ellenszer a relatív kockázattal való marketing ellen, ezért kezdi vele a bizonyítékalapú orvoslás. Sztatinok primer prevencióra: NNT ≈ 50–100 5 év alatt elkerült szívrohamonként. Tükörképe, az **NNH** (ártalomhoz szükséges szám) azt számolja, hányat kezelnek egy megkárosított emberenként.

## A matematika

```
ARR = control event rate − treatment event rate   (absolute risk reduction)
NNT = 1 / ARR

NNH = 1 / (harm rate_treatment − harm rate_control)

Economic bridge:
cost per event prevented = NNT × cost per treatment course
```

Mindig add meg az időkeretet és az alappopulációt — az NNT mindkettő nélkül értelmetlen.

## Kidolgozott példa

Egy kórházi eséselőrejelző rendszer beavatkozásra jelöli a nagy kockázatú betegeket (ágyérzékelők, felülvizsgálat, felügyelet). Vizsgálat: a sérüléssel járó esések a felvételek 3,2%-áról 2,4%-ára csökkennek.

```
ARR = 0.8 percentage points → NNT = 1/0.008 = 125
   (125 patients must get the intervention bundle to prevent 1 injurious fall)

Intervention cost ≈ £40/patient → cost per fall prevented = 125 × 40 = £5,000
Cost of an injurious inpatient fall (extra stay, imaging, litigation) ≈ £12,000
Net: prevention pays ~2.4:1 — and the QALY gain is on top.
```

Figyeld meg, hogyan tartja az NNT őszintén az állítást: a „25%-kal csökkenti az eséseket" és a „125 kezelt betegenként egy esést megelőz" ugyanaz az eredmény, másként meggyőzően.

## Kapcsolat a szoftverfejlesztéssel

Az NNT a megfelelő egység minden olyan kapuhoz vagy ellenőrzéshez, amely sok tételen dolgozik, hogy keveset fogjon: **„azon PR-ok száma, amelyeknek át kell menniük az MI-review kapun, hogy egy élesbe tartó hibát elkapjanak."** Ha a kapu 400 PR-t néz át valódi elkapásonként (NNT = 400), egyenként 4 perc fejlesztői figyelemmel, egy elkapás ~27 fejlesztőórába kerül — most hasonlítsd ezt az általa megelőzött incidens költségéhez. Az NNH a téves pozitívokra képezhető le: hány PR jut egy *téves* jelzésre, és mibe kerül mindegyik figyelemben és bizalomban? A szűrés-stílusú eszközöknek (linterek, biztonsági szkennerek, anomáliadetektálás) NNT/NNH-számtannal kell érkezniük — lásd [a szűrés gazdaságtana](../a-szűrés-gazdaságtana/), miért teszi brutálissá ezeket a számokat az alacsony prevalencia. A [szűrendő személyek száma](../szűrendő-személyek-száma/) az analóg szám egy szinttel feljebb, egy egész szűrés-majd-kezelés programra, nem csak egy kezelésre.

## Buktatók

- **Nincs időkeret**: az „NNT = 50" semmit sem jelent; az „NNT = 50 5 év alatt" állítás.
- **Alapkockázat-átültetés**: a nagy kockázatú vizsgálati populációban számított NNT összeomlik egy alacsony kockázatú bevezetési populációban.
- **Az NNH figyelmen kívül hagyása** — az NNT 400 és NNH 3 kapu kellemetlenségtermelő, nem biztonsági rendszer.

## Források

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
