# Munkahelyi termelékenység és tevékenységkorlátozottság (WPAI)

A WPAI egy validált önbeszámolós kérdőív (Reilly, Zbrozek, Dasbach, 1993), amely azt méri, mennyire befolyásol egy egészségügyi probléma fizetett munkát és mindennapi tevékenységeket, általában az elmúlt 7 napra vonatkozóan. A veszteséget *távolmaradásra* — szó szerint kihagyott munkaidő — és *presenteeismre* — csökkent termelékenység a fizikailag munkahelyen töltött idő alatt — bontja, és a második általában a nagyobb, rejtettebb költségelem.

## Miért fontos

Az egyszerű betegnap-számlálás csak a távolmaradást látja. Az a klinikus vagy tudásmunkás, aki soha nem vesz ki szabadnapot, de krónikus állapot mellett 60%-os kapacitással dolgozik, nullát ad a hiányzási nyilvántartáshoz, miközben nagy, valós termelékenységi veszteséget okoz — a WPAI kifejezetten ennek a láthatatlan költségnek a felszínre hozására készült. Mivel validált mérőeszköz, nem egyedi felmérés, pontszámai használhatók [betegek által jelentett kimenetel](../betegek-által-jelentett-kimenetelek/) bizonyítékcsomagokban és betegségköltség-vizsgálatokban anélkül, hogy a bírálónak újra validálnia kellene a mérést. Önbeszámolós mérőeszközként maga is a PROM egy formája, amelyet főként a munkára és tevékenységre való összpontosítása különböztet meg a tünetektől vagy életminőségtől.

## A matematika

```
Absenteeism % = hours_missed_due_to_health / (hours_missed_due_to_health + hours_worked) × 100

Presenteeism %  = self-rated 0–10 impairment while working, × 10
                  (elicited directly via questionnaire, not derived here)

Overall Work Impairment % =
    Absenteeism% + (1 − Absenteeism%/100) × Presenteeism%
    (combines the two so the total can never exceed 100%)

Productivity cost = Overall Work Impairment% / 100 × period_earnings
```

Az összesített korlátozottság képlete szándékosan nem egyszerű összeg: a két százalék közvetlen összeadása meghaladhatná a 100%-ot, ezért a presenteeismet csak a munkaidő *fennmaradó* (nem hiányzó) részére alkalmazzuk.

## Kidolgozott példa

Egy migrénes munkavállaló arról számol be, hogy 40 órás hétre van beosztva, de 4 órát kihagy belőle:

```
hours_missed = 4, hours_worked = 36
Absenteeism% = 4 / (4 + 36) × 100 = 10%
```

Külön önértékeli a termelékenységre gyakorolt hatását munka közben 3-ra a 10-ből a WPAI kérdőíven, azaz `Presenteeism% = 30%` (ez a lépés nyers kérdőíves válasz, nem más számokból levezetett):

```
Overall Work Impairment% = 10 + (1 − 10/100) × 30
                          = 10 + 0.9 × 30
                          = 10 + 27
                          = 37%
```

Egy 800 £-t kereső (160 £/nap) 5 napos hétre:

```
Productivity cost = 37/100 × 800 = £296
```

Figyeld meg, hogy a naiv betegnap-számlálás csak a kihagyott 4 órát (10%) rögzítette volna — a presenteeism-összetevő a valódi korlátozottságot közel háromszorosára növeli, ha beszámítják.

## Kapcsolat a szoftverfejlesztéssel

Ez közvetlenül megfelel a mérnökcsapatok egészségi mutatóinak:

- A **távolmaradás** a betegszabadság és a PTO — látható, már követett, és az egyszerű rész.
- A **presenteeism** a kiégett vagy környezetváltásokkal túlterhelt mérnök, aki minden stand-upon jelen van, miközben csökkent kapacitással működik — általában a nagyobb és rejtettebb költség, és láthatatlan a létszám- vagy jelenléti adatokban. Inkább a [DORA](../dora-mutatók/)- és [folyammutatók](../folyammutatók/) csökkent áteresztőképességeként, vagy éppen annak a [technikai adósságnak](../technikai-adósság/) lassabb megoldásaként jelenik meg, amelynek „kamata" tovább halmozza a korlátozottságot.
- A mérnöki tanulság ugyanaz, mint a klinikai: ha csak a hiányzást mérjük, és azt „termelékenységi veszteségnek" nevezzük, rendszeresen alábecsüljük a valódi költséget, mert kihagyjuk mindenkit, aki jelen van, de korlátozott.

## Buktatók

- **Önbeszámolós felidézési torzítás.** A 7 napos felidézési ablak ugyanazoknak a jelentési torzulásoknak van kitéve, mint bármely retrospektív önbeszámoló.
- **A 0–10-es presenteeism-skála valódi fizikai mérésként kezelése.** Ordinális, önértékeléssel kikérdezett, nem validált fizikai mennyiség — a rajta mért különbségek szigorúan lineárisként vagy intervallumként kezelése modellezési kényelem, nem validált fizikai tény.
- **A WPAI-változatok közötti pontszámok összevonása.** A WPAI-nak több állapotspecifikus változata van — WPAI:GH (általános egészség), WPAI:SHP (konkrét egészségi probléma) és betegségspecifikus változatok —, és a különböző változatokból származó pontszámokat nem szabad összevonni vagy összehasonlítani anélkül, hogy előbb ellenőriznénk, hogy ugyanazon mérőeszköz-változatról van szó.

## Források

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI instrument documentation, Reilly Associates — the official scoring reference. <https://www.reillyassociates.net/>
