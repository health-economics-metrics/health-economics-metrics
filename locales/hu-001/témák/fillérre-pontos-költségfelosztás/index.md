# Fillérre pontos költségfelosztás

Egy pénzösszeg — közös támogatás, infrastruktúra-számla, költségvetési hatás-szám — több címzett közötti felosztása naiv százalékos számtannal rutinszerűen olyan részeket ad, amelyek nem összegződnek vissza az eredeti összegre. A fillérre pontos felosztás a javítás: egész/tizedes módszer, kisebb pénzegységekben (centekben) számolva, amely garantálja, hogy a részek *pontosan* kiadják az egészet, bármilyen egyenetlenül is osztódik. Minden szoftvermérnöknek, akinek egy felosztott összeget centre egyeztetnie kell — bérszámfejtés, támogatáskifizetés, közös szolgáltatás visszaterhelése —, erre a mintára van szüksége, nem lebegőpontos százalékokra.

## Miért fontos

Ez egy megnevezett, alapvető minta a vállalati szoftvermérnökségben: Martin Fowler *Patterns of Enterprise Application Architecture* (2002) című műve éppen azért dokumentálja a `Money` és az `Allocate` mintát, mert a „oszd el 100 dollárt háromfelé" olyan probléma, amelyet a naiv kód állandóan elront, és csendben — a hiba csak akkor kerül felszínre, amikor valaki egyezteti a könyveket, és a részeket egy centtel hiányosnak (vagy többnek) találja az összeghez képest. Az egészséggazdaságtani és NHS-pénzügyi munkában ez nem akadémikus: a költségvetési hatás-összegeket telephelyek, évek vagy igazgatóságok között osztják fel; a közös infrastruktúra- és licencköltségeket létszám vagy tevékenység-részesedés szerint osztják szét az osztályok között. Mindegyik felosztásnak pontosan egyeznie kell, mert az a pénzügyi igazgató, akinek olyan részeket adnak át, amelyek nem összegződnek az összegre, megszűnik megbízni az egész modellben.

## A matematika

```
Naive (broken) method:
  part_i = round(total × share_i / Σ shares)     — rounds each part independently

Exact method (largest remainder / "largest remainder allocation"):
  1. base_i = floor(total_minor_units × share_i / Σ shares)   — whole minor units (cents) only
  2. remainder = total_minor_units − Σ base_i                  — leftover cents, always < number of recipients
  3. distribute 1 extra minor unit each to the `remainder` recipients with the
     largest fractional remainder from step 1, until the leftover is exhausted

Result: Σ part_i == total, always, by construction.
```

A pontos módszer soha nem kerekít egy részt elszigetelten — a *teljes felosztást* kerekíti egyetlen műveletként, ez teszi érvényessé az összeg-invariánst.

## Kidolgozott példa

Oszd fel 100,00 $-t három egyenlő felé (`shares = [1, 1, 1]`).

Naiv módszer: 100,00 $ ÷ 3 = 33,333… $, egymástól függetlenül a legközelebbi centre kerekítve címzettenként 33,33 $. Összegezve: 33,33 $ × 3 = 99,99 $ — egy cent eltűnt, és egyetlen sortétel sem „hibás" eléggé ahhoz, hogy szemrevételezéssel észrevegyük.

Pontos módszer: a `base` mindhárom esetén 33,33 $ (összesen 9999 kisebb egység a `floor(10 000 / 3) = 3333` centből egyenként), 1 cent maradékot hagyva (10 000 − 9999). Ez az egyetlen maradék cent annak a címzettnek jut, akinek a legnagyobb a törtmaradéka az osztásban — a konkrét címzett belső döntetlen-feloldási részlet, amelyre a hívónak nem szabad támaszkodnia. Két címzett 33,33 $-t, egy 33,34 $-t kap, és a három rész pontosan 100,00 $-t ad.

Pontosan ez az a számtan, amelyre egy [költségvetési hatáselemzésnek](../költségvetési-hatáselemzés/) szüksége van, amikor egy összes költségvetési hatás-számot telephelyek, kohorszok vagy pénzügyi évek között kell felosztani és a közzétett összegre visszaegyeztetni — lásd [valutabiztos költségösszesítés](../valutabiztos-költségösszesítés/) a társ-problémáról, sok ilyen tételsor eltolódás nélküli összegzéséről.

## Kapcsolat a szoftverfejlesztéssel

Ez szó szerint „a Money minta" a vállalati szoftverarchitektúrából — pontosan erre a hibaosztályra szóló alapvető, megnevezett minta, nem egyszeri trükk. Valódi pénzügyi egyeztetési hibák érkeztek pontosan ebből a hibaosztályból: `f64`-ben számolt, címzettenként kerekített százalékos felosztások, amelyeket soha nem vetettek össze az eredeti összeggel. Közvetlenül kapcsolódik a repó [teljes birtoklási költség](../teljes-birtoklási-költség/) moduljához, amely jelenleg sima lebegőpontos költségeket összegez évek és lehetőségek között — ugyanez a pontossági fegyelem érvényes, valahányszor egy TCO- vagy költségvetési hatás-összeget fel kell osztani, nem csupán összegezni.

## Buktatók

- **Százalék-majd-kerekítés a legnagyobb maradék helyett**: lebegőpontos százalékokkal való felosztás és minden címzett független kerekítése, ami halmozza a kerekítési hibát, és ritkán összegződik vissza az összegre, különösen sok címzettnél.
- **A pénznem kisebb egység kitevőinek figyelmen kívül hagyása**: annak feltételezése, hogy minden pénznemnek 2 tizedesjegye van — a japán jennek 0, egyes pénznemeknek 3 — egy kézzel írt százalékos felosztás általában 2-t kódol be, és csendben elromlik más pénznemeknél; egy pontos felosztási rutin a kitevőt magából a pénznemből olvassa (ISO 4217).
- **Egy már felosztott maradék újraosztása**: a felosztási rutin újrafuttatása az előző felosztásból megmaradt részen idempotencia-ellenőrzés nélkül, ami ugyanazt a centet kétszer jóváírhatja ugyanannak a címzettnek.

## Források

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` and `Allocate` patterns.
- ISO 4217 — currency and funds code standard, which defines each currency's minor-unit exponent.
