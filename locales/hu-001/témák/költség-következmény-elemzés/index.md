# Költség-következmény elemzés (CCA)

A CCA a költségeket az **összes kimenet dezaggregált táblázatával** együtt mutatja be — klinikai, működési, tapasztalati —, anélkül, hogy egyetlen hányadossá vagy pontszámmá zsugorítaná őket. A döntéshozó kifejezetten mérlegeli a kompromisszumokat.

## Miért fontos

A CCA a NICE **előnyben részesített gazdasági formátuma a legtöbb digitális egészségügyi technológiához** a Bizonyítékszabványi Keretrendszer (Evidence Standards Framework) alatt. A digitális termékek heterogén hatásokat hoznak létre (megtakarított idő, elégedettség, DNA-csökkenés, kisebb klinikai nyereségek), amelyek ellenállnak az őszinte aggregálásnak egyetlen QALY-számmá. Törékeny összetett mutató erőltetése helyett a CCA a teljes főkönyvet mutatja. A legtöbb szoftveres üzleti esetnél egyszerre a legőszintébb és a legmeggyőzőbb formátum, mert minden érdekelt megtalálja a saját döntési szempontból releváns sorát.

## A matematika

Szándékosan nincs aggregálási képlet. A kimenet egy táblázat:

```
                          Intervention   Comparator   Difference
Costs (annual)            £X             £Y           ΔC
Outcome 1 (natural units) …              …            Δ1
Outcome 2                 …              …            Δ2
Qualitative outcomes      described, not scored
```

Minden sor megtartja a saját egységeit. Szabályok: minden következmény előre meghatározott (nincs utólagos szemezgetés az eredmények után); mindenütt azonos [nézőpont](../elemzési-nézőpont/) és [horizont](../időhorizont/); sorokénti bizonytalanság.

## Kidolgozott példa

Digitális műtét előtti felmérési platform és telefonos folyamat, évente, egy trösztnél:

```
                              Digital      Phone       Difference
Running cost                  £180,000     £95,000     +£85,000
Nurse hours on assessments    6,200        11,800      −5,600 hrs
On-day surgery cancellations  92           174         −82
Patient satisfaction (CSAT)   4.5/5        3.9/5       +0.6
Assessments lost/incomplete   1.2%         4.8%        −3.6 pp
```

Nincs egyetlen pontszám — de a döntés könnyen megindokolható: 85 000 £ 5600 ápolói órát vásárol (≈ 15 £/óra, jóval bármely személyzeti költség alatt), 82 elkerült lemondást (mindegyik egy ~1200 £ értékű műtői időablakot pazarol), és jobb élményt. A bizottság azt is pontosan látja, mit *nem* kap: nincs állított QALY- vagy halálozási hatás.

## Kapcsolat a szoftverfejlesztéssel

A CCA a kiegyensúlyozott eredménylap (balanced scorecard) formális változata, amelyet egy jó platformjavaslat már használ: költség a DORA-mutatók, DevEx-pontszámok és incidensszámok mellett — aggregálatlanul. Az egészséggazdasági fegyelem, amelyet hozzá kell adni: **határozd meg előre a sorokat** (döntsd el, mi számít a kísérleti projekt előtt, hogy ne hagyhasd el csendben azt a mutatót, amelyik rosszabb lett), és **mutasd a kedvezőtlen sorokat** — a csak jó hírekkel rendelkező CCA marketing. Használj CCA-t, ha nincs védhető összetett mutató, ami a fejlesztői eszközöknél szinte mindig így van.

## Buktatók

- **Szemezgetett következmények** — a formátum integritása az előzetes meghatározáson múlik.
- **Becsempészett aggregálás**: a színkódolás vagy az „összpontszámok" újra bevezetik azokat az önkényes súlyokat, amelyek elkerülésére a CCA létezik.
- **Döntési bénulás**: a CCA-hoz olyan döntéshozó kell, aki kész mérlegelni a kompromisszumokat; párosítsd ajánlással és indoklással.

## Források

- NICE Evidence Standards Framework for digital health technologies (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
