# Költséghatékonysági elemzés (CEA)

A CEA az alternatív beavatkozások költségeit egyetlen, **természetes egységben** mért kimenethez hasonlítja — életévek, felismert esetek, elkerült felvételek, csökkent vérnyomás mmHg-ben. Kimenete a költség a kimenet egységére vetítve.

## Miért fontos

A CEA az igáslovas összehasonlítás, amikor minden lehetőség ugyanazt a kimenetet célozza. Azt válaszolja meg, hogy „az X elérésének e módjai közül melyik a legjobb pénzfelhasználás?" — de *nem* azt, hogy „megéri-e egyáltalán X-et elérni?" (ahhoz [költség-haszon elemzés](../költség-haszon-elemzés/) kell), és *nem* azt, hogy „hogyan viszonyul X a független prioritásokhoz?" (ahhoz [költség-hasznosság elemzés](../költség-hasznosság-elemzés/) és az olyan általános kimenet kell, mint a QALY).

## A matematika

Az összehasonlító statisztika az [ICER](../inkrementális-költséghatékonysági-mutató/) természetes egységekben:

```
ICER = (Cost_A − Cost_B) / (Effect_A − Effect_B)
     = £ per additional case detected / admission avoided / etc.
```

Eljárás: határozd meg a kimeneti egységet; költségezz minden lehetőséget ugyanabból a [nézőpontból](../elemzési-nézőpont/) ugyanazon [időhorizonton](../időhorizont/); szűrd ki a dominált lehetőségeket ([hatékonysági határ](../dominancia-és-hatékonysági-határ/)); számítsd ki az inkrementális hányadosokat a határ mentén.

## Kidolgozott példa

Három mód a nem diagnosztizált pitvarfibrilláció megtalálására 100 000 fős populációban:

```
Option                    Cost        Cases found
Opportunistic pulse checks £150,000       300
Pharmacy screening events  £400,000       520
Wearable-based screening   £900,000       610

ICER pharmacy vs pulse:  (400k−150k)/(520−300) = £1,136 per additional case
ICER wearable vs pharmacy:(900k−400k)/(610−520) = £5,556 per additional case
```

Hogy az 5556 £ további esetenként „megéri-e", a megtalált eset értékétől függ (lefelé irányuló stroke-megelőzés) — a CEA rangsorolja a lehetőségeket, de a bevezetési döntéshez ez a külső értékelés kell. Figyeld meg, hogy a viselhető eszközös lehetőség *átlagos* esetenkénti költsége (900k/610 = 1475 £) rendben látszik; a *inkrementális* 5556 £ az őszinte szám a bővítési döntéshez.

## Kapcsolat a szoftverfejlesztéssel

A CEA a megfelelő sablon, amikor a lehetőségek egy kimenetet osztanak: költség kiküszöbölt megbízhatatlan tesztenként három javítási megközelítésen át; költség elkerült incidensenként megfigyelhetőségi szállítók között; költség sikeres telepítésenként CI-architektúrák között. A fegyelem, amelyet kikényszerít — egy deklarált kimeneti egység, inkrementális (nem átlagos) hányadosok, a dominált lehetőségek előzetes kiszűrése — a legtöbb rossz szállítói összehasonlítást megöli az árról szóló vita megkezdése előtt.

## Buktatók

- **Eltérő kimenetű lehetőségek összehasonlítása** („megtalált esetek" és „elégedettség") egy CEA-ban — ahhoz [költség-következmény elemzés](../költség-következmény-elemzés/) vagy általános kimenet kell.
- **Átlagos költséghatékonysági hányadosok** bemutatása ott, ahol inkrementálisak kellenek (a fenti viselhető eszközös példa).
- **Hízelgésre választott kimeneti egységek**: a „generált riasztások" kibocsátás, nem kimenet; követeld az értéket hordozó egységeket.

## Források

- CDC POLARIS: cost-effectiveness analysis. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
