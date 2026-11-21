# Egészséggel korrigált várható élettartam (HALE)

A HALE populációs szintű összegző mutató: azon évek száma, amelyet egy személy várhatóan *teljes egészségben* él, a betegségben vagy fogyatékosságban töltött éveket leszámítva. A globális HALE születéskor körülbelül 61,9 év volt 73,3 éves várható élettartam mellett (WHO, 2019-es adatok) — az emberiség átlagosan az utolsó évtizedét nem teljes egészségben tölti.

## Miért fontos

A HALE a nemzeti és globális egészségpolitika sarkcsillag-mutatója — az „egészséges öregedés" célok számlálója, és az általa feltárt rés (várható élettartam mínusz HALE) az a teher, amelyet a megelőzés, a korai beavatkozás és a krónikus betegségek kezelése be akar zárni. A minisztériumi szintű digitális egészségügyi stratégiákat HALE-ben indokolják; az alkalmazások, szűrőszolgáltatások és monitorozó programok portfóliója végül ide összegződik.

## A matematika

A szokásos számítás a **Sullivan-módszer**:

```
HALE_age_x = Σ (life-table person-years at each age ≥ x × proportion in full health)
             / survivors at age x

"proportion in full health" = 1 − Σ (prevalence_condition × disability weight)
```

Bemenetek: egy szokásos halandósági tábla plusz az egészségállapotok prevalenciája és fogyatékossági súlyai (a Global Burden of Disease adataiból). A HALE a [DALY-khoz](../fogyatékossággal-korrigált-életév/) kapcsolódik — a populációs DALY-teher és a HALE-rés ugyanazon elveszett egészség két nézete.

## Kidolgozott példa

Nemzeti digitális hipertónia-program: 500 000 beiratkozott, az átlagos vérnyomás-kontroll annyit javul, hogy a stroke-incidenciát évi 0,2 százalékponttal csökkenti. A kohorsz élethosszára modellezve az elkerült stroke-ok 15 000 fogyatékossággal súlyozott évet takarítanak meg (YLD 0,32-es súllyal plusz a halálos stroke-ok YLL-je).

```
HALE contribution ≈ 15,000 healthy years / 500,000 people
                  ≈ 0.03 years (≈ 11 days) of HALE per enrolled person
```

Tizenegy nap kevésnek hangzik — de populációs léptékben így mozognak ténylegesen a nemzeti mutatók: a minisztériumok milliónyi apró személyenkénti nyereséget vásárolnak. Ez a számtan azt is mutatja, miért **dominál az elérés**: egy kétszer hatásosabb, de tizedannyi beiratkozású beavatkozás ötször kevesebbet mozdít a HALE-n. Lásd [elérés és méltányosság](../elérés-és-méltányosság/).

## Kapcsolat a szoftverfejlesztéssel

A HALE flottaegészségi mutatóminta: **várható szolgáltatási élettartam × az élet egészséges hányada**. Egy platformcsapat kiszámíthatja az „egészséges szolgáltatási élettartam-várakozást" az állományában — a szolgáltatás várható futási évei, diszkontálva a leromlott, elavult vagy incidens-állapotban töltött idővel (a súlyok az SLO-hiányból). A megbízhatóságot a pontszerű rendelkezésre állásról az élettartam-egészségre keretezi át, és a javítást azokra a rendszerekre irányítja, amelyek lehúzzák az állomány HALE-jét.

## Buktatók

- **A HALE lassan és több okból mozog** — egyetlen beavatkozás sem „mozdítja mérhetően a HALE-t"; a modellezett hozzájárulást állítsd, ne a nemzeti statisztikát.
- **A prevalenciaadatok évekkel késnek**; a friss nyereségek nem látszanak a hivatalos HALE-ben.
- **A HALE összehasonlítása országok között** eltérő egészségállapot-mérés mellett alattomos; használd hosszmetszetben egy rendszeren belül.

## Források

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
