# MI szabályozási értékelése

Az MI-t az egészségügyben szabályozó keretrendszerek — az FDA Software as a Medical Device (SaMD) rendszere **Predetermined Change Control Plans (PCCP)** tervekkel, és olyan valós körülmények közötti értékelési programok, mint az NHS AI in Health and Care Award — és az, hogy gazdaságilag mibe kerülnek, és mit tesznek lehetővé.

## Miért fontos

A szabályozás határozza meg a **piacra lépés bizonyítékköltségét** és **minden további modellfrissítés költségét** — az MI-termékeknél az utóbbi gyakran fontosabb. Az FDA hagyományos módja (rögzítsd a modellt; változtatáskor újra engedélyeztess) a folyamatos fejlesztést gazdaságilag brutálissá tette. A **PCCP-útmutató (2024 decemberében véglegesítve)** megváltoztatta a gazdaságtant: a gyártó előre engedélyezhet *meghatározott* jövőbeli modellfrissítéseket — a tervezett módosítások leírása, módosítási protokoll (hogyan validálják az egyes módosításokat) és hatásértékelés révén —, így a jóváhagyott fejlesztések új benyújtás nélkül szállíthatók. Több mint 1000 MI-alapú eszköz rendelkezik FDA-engedéllyel; az FDA ma a valós teljesítményfelügyeletet is vizsgálja (előre meghatározott mutatók: kiinduló FP/FN arányok, kalibrációs eltolódás, doménváltási jelzők).

## A matematika

A PCCP a [DORA átfutási idő](../dora-mutatók/) gazdaságtana szabályozott modellekre alkalmazva:

```
Cost per model update (traditional) = re-submission cost + review delay × CoD
Cost per model update (PCCP-scoped) = protocol-execution cost only

Update economics over a product life:
  N updates × (submission cost + months of review × cost-of-delay per month)
  vs one-time PCCP authoring cost + N × protocol executions
```

Az NHS AI Award mintánál a mutatókészlet szélesebb a pontosságnál: a független valós körülmények közötti értékelések a klinikai teljesítményt, a munkafolyamati/bevezetési hatásokat és a gazdasági hatást értékelik — a teljes [hatásosság → eredményesség → költséghatékonyság](../mi-fejlesztői-termelékenység/) csővezeték intézményesítve.

## Kidolgozott példa

Egy radiológiai MI-szállító negyedéves modellfejlesztéseket tervez 3 évre (12 frissítés):

```
Traditional: 12 × (£80k submission + 4 months × £50k/month delayed-benefit CoD)
           = 12 × £280k = £3.36M
PCCP route:  £250k PCCP authoring + 12 × £30k protocol execution = £610k
Saving ≈ £2.75M — and patients receive each improvement ~4 months sooner:
12 × 4 months × the update's clinical benefit, a QALY line in its own right.
```

A PCCP a szabályozói elismerése annak, hogy **a telepítési gyakoriságnak klinikai értéke van** — a repó fő oksági lánca, szabályozó által támogatva.

## Kapcsolat a szoftverfejlesztéssel

A PCCP jó megtervezése szoftveres probléma: előre meghatározott értékelési csomagok, verziózott adathalmazok, automatizált validációs csővezetékek, eltolódás-monitorozás — a folyamatos telepítés szabályozott unokatestvére, ahol a „telepítési kapu" egy validált protokoll a kódfelülvizsgálat helyett. Az érett értékelési infrastruktúrával rendelkező csapatok ([MI-minőségmutatók](../mi-minőségmutatók/)) olcsón kapnak PCCP-ket; azok, akiknek nincs, felfedezik, hogy a szabályozói korlát valójában mérnöki érettségi korlát. Az NHS-be lépő termékeknél a párhuzamos csomag a DTAC (klinikai biztonság, adatvédelem, interoperabilitás) plusz a [NICE ESF](../nice-bizonyítékszabványi-keretrendszer/) bizonyítékszintek — mindegyiket költségvetezd piacra lépési [TCO](../teljes-birtoklási-költség/)-ként.

## Buktatók

- **PCCP hatókör-kúszási álmok**: csak a *meghatározott* módosítástípusok előre engedélyezettek; az architektúraváltoztatások vagy az új rendeltetések továbbra is teljes felülvizsgálatot igényelnek.
- **Monitorozatlan valós eltolódás**: az induláskori teljesítményre szóló engedély + csendes populációs eltolódás = az engedélyezett burkolóján kívül teljesítő termék; a monitorozás egyszerre szabályozói elvárás és önvédelem.
- **Az engedély összekeverése az értékkel**: az FDA/UKCA-engedély ≠ bárki fizetni fog — ez a [HTA](../egészségügyi-technológiaértékelés/)-akadály, külön futtatva.

## Források

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
