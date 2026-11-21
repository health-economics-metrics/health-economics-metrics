# Dominancia és hatékonysági határ

Egy lehetőség **dominált**, ha egy másik kevesebbe kerül *és* többet nyújt. A **hatékonysági határ** az, ami a dominált lehetőségek kiszűrése után marad: azon választások halmaza, ahol többet kapni többet fizetni jelent.

## Miért fontos

Bármilyen küszöbökről vagy költségvetésről szóló vita előtt az egészségügyi technológiaértékelés először kiszűri azokat a lehetőségeket, amelyeket senkinek sem szabadna választania. Minden lehetőség ábrázolása költség–hatás síkon és a határ megrajzolása ötperces feladat, amely rutinszerűen kiirtja a rövid lista felét. Az inkrementális összehasonlításokat ([ICER-ek](../inkrementális-költséghatékonysági-mutató/)) ezután csak a *határ mentén* számítják, mindegyik lehetőséget a következő legolcsóbb nem dominált lehetőséggel szemben — soha nem a „semmittevéssel" szemben, ha vannak jobb köztes lehetőségek.

## A matematika

```
Strict dominance:   A dominates B if Cost_A ≤ Cost_B and Effect_A ≥ Effect_B
                    (with at least one strict inequality)

Extended dominance: B is ruled out if a mix of A and C achieves more effect
                    per pound — detected when ICERs decrease as you move up
                    the frontier. Valid frontier ICERs must be increasing.
```

Eljárás: rendezd a lehetőségeket hatás szerint; távolítsd el a szigorúan dominált lehetőségeket; számítsd ki a szomszédok közötti páronkénti ICER-eket; távolítsd el bármely lehetőséget, amelynek ICER-je meghaladja a következő hatékonyabb lehetőségét (kiterjesztett dominancia); ismételd, amíg az ICER-ek monoton nem nőnek.

## Kidolgozott példa

Négy lehetőség az elmulasztott időpontok csökkentésére (hatás = évente visszaszerzett időpontok):

```
Option          Cost/yr    Recovered
Do nothing      £0         0
SMS reminders   £20,000    2,000
Phone calls     £120,000   2,200
SMS + AI triage £90,000    3,500
```

A telefonhívások **szigorúan dominálttak** az SMS + MI-triázs által (többe kerül, kevesebbet szerez vissza). Határ: semmi → SMS → SMS + MI.

```
ICER(SMS vs nothing)   = 20,000 / 2,000  = £10 per appointment recovered
ICER(SMS+AI vs SMS)    = (90,000 − 20,000) / (3,500 − 2,000) = £46.67 per appointment
```

Növekvő ICER-ek → érvényes határ. Visszaszerzett kórházi időpontonként ~160 £ megtakarítás mellett (lásd [meg nem jelenési arány](../meg-nem-jelenési-dna-arány/)) a határ mindkét lépése megéri; a telefonközpontos javaslatnak soha nem szabadna eljutnia a bizottság elé.

## Kapcsolat a szoftverfejlesztéssel

Készítsd el ugyanezt az ábrát bármely eszközdöntéshez: az egyik tengelyen az éves költség, a másikon a mért kimenet (megtakarított órák, elkerült incidensek, lehetővé tett telepítések). A határtól fel-és-balra eső pontokat kiszűrik, mielőtt bárki a költségvetésről vitatkozna. Ez a szállítóválasztást a funkciólista-vitákról a „te dominált vagy; az értekezletnek vége" álláspontra helyezi át. Rávilágít arra a gyakori vállalati mintára is, hogy a legdrágább lehetőséget veszik meg marginális nyereségért — ami csak akkor jogos, ha az inkrementális egységenkénti inkrementális ár olyan, amelyet a szervezet tudatosan megfizetne.

## Buktatók

- **Minden összehasonlítása az alapvonallal** a határ következő lehetősége helyett — ez hízeleg a drága lehetőségeknek azzal, hogy elrejti az olcsóbb, közel egyenértékű lehetőségeket.
- **Egydimenziós hatáspontszámok**, amelyek elrejtik, ami számít; ha két kimenet számít, vagy kombináld őket védhetően (lásd [költség-hasznosság elemzés](../költség-hasznosság-elemzés/)), vagy mutass két határt.
- **A bizonytalanság elfelejtése**: a határhoz közeli lehetőségek [érzékenységvizsgálat](../érzékenységvizsgálat/) alatt helyet cserélhetnek.

## Források

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
