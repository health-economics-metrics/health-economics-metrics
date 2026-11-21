# EQ-5D

Az EQ-5D az EuroQol csoport szabványosított kérdőíve az egészséggel összefüggő életminőség mérésére. Ez az a mérőeszköz, amely a legtöbb [QALY](../minőséggel-korrigált-életév/)-számításban a hasznossági súlyokat előállítja — a NICE referenciaesete a felnőttek számára előnyben részesített mérőeszközként nevezi meg.

## Miért fontos

Bármely digitális egészségügyi termékhez, amely QALY-kat akar állítani, validált kérdőívből származó hasznosságok kellenek, és az EQ-5D az alapértelmezett az Egyesült Királyságban és Európa nagy részén. Elég rövid ahhoz, hogy egy alkalmazásba ágyazzák (5 kérdés + vizuális skála), ami azt jelenti, hogy a szoftvertermékek a normál használat mellékhatásaként gyűjthetnek HTA-minőségű kimeneti adatokat — szerkezeti előny a gyógyszerekkel szemben, amelyeknek dedikált vizsgálatok kellenek.

## A matematika

Az EQ-5D-5L **5 dimenzióban** egy-egy kérdést tesz fel — mozgékonyság, önellátás, szokásos tevékenységek, fájdalom/kellemetlenség, szorongás/depresszió —, mindegyiket **5 szinten** (nincs probléma … rendkívüli probléma) megválaszolva, plusz egy 0–100-as vizuális analóg skála (EQ VAS).

```
Health state = 5-digit profile, e.g. "21221"
Utility index = value_set(profile)

The value set is country-specific, derived from time-trade-off /
discrete-choice surveys of the general public. Anchors: 1 = full health,
0 = dead; states worse than death are negative (UK 3L set floor: −0.594).
```

A QALY-számítás ezután `időtartam × hasznosság` alapján történik.

## Kidolgozott példa

Egy mozgásszervi rehabilitációs alkalmazás EQ-5D-5L-t mér a beléptetéskor és 6 hónap után a befejező 1000 felhasználónál.

```
Mean utility at baseline:  0.62
Mean utility at 6 months:  0.71
Gain sustained (assume) 1 year: (0.71 − 0.62) × 1.0 = 0.09 QALYs per user
```

A kontrollcsoport 0,03-as változásához (természetes gyógyulás) képest a tulajdonítható nyereség 0,06 QALY/felhasználó. 20 000–30 000 £/QALY értéken pénzre váltva: **1200–1800 £ egészségérték befejező felhasználónként** — ez a szám horgonyozza le az alkalmazás árról szóló tárgyalását egy finanszírozóval. (Az EQ-5D-index minimális klinikailag fontos különbségei általában a 0,03–0,08 tartományban vannak, így a 0,06 hihető, de át kell mennie a kontrollösszehasonlításon; lásd [betegek által jelentett kimenetelek](../betegek-által-jelentett-kimenetelek/).)

## Kapcsolat a szoftverfejlesztéssel

- **Építsd be.** Az EQ-5D a regisztrációkor és az utánkövetési időközönként néhány UI-képernyő; a hozadék HTA-minőségű bizonyíték. Szerezz licencet az EuroQoltól (kötelező, egyes felhasználásokra ingyenes).
- **Használd a megfelelő értékkészletet** a bevezetési országhoz — ugyanazok a válaszok másként pontozódnak az Egyesült Királyságban, Németországban és Japánban.
- **Tervezési tanulság**: az EQ-5D megmutatja, hogyan ad egy apró szabványosított felmérés plusz egy közzétett pontozófüggvény összehasonlítható egyetlen indexet. Ez a minta bármely hiteles fejlesztői élmény indexhez is — szabványosított kérdőív, közzétett súlyok, nem ad hoc hangulatok. Lásd [SPACE és DevEx](../space-és-devex/).

## Buktatók

- **Előtte/utána összehasonlító nélkül** — az átlaghoz való visszatérés és a természetes gyógyulás felfújja a naiv nyereségeket.
- **Túlélési torzítás**: csak azokat a felhasználókat mérni, akik elkötelezettek maradtak (lásd [megtartás és lemorzsolódás](../megtartás-és-lemorzsolódás/)).
- **A 3L és 5L változatok vagy értékkészletek keverése** a vizsgálatok között — rendszeresen eltérő számok.
- **Plafonhatások** enyhén érintett populációkban: sok felhasználó az alapvonalon 1,0 közelében pontoz, így nincs mozgástér a nyereség kimutatására.
- **Az értékkészlet önigazoltként kezelése**: az értékkészlet által visszaadott hasznossági számokat maguk is a nyilvánosságtól kérdezték ki időalku (vagy kapcsolódó, választás-alapú) felmérésekkel — lásd [időalku (TTO) hasznosságfelmérés](../időalku-tto-hasznosságfelmérés/) arról, hogyan.

## Források

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
