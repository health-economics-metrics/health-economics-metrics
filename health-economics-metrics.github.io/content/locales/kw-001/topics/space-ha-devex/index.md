# SPACE ha DevEx

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) ha DevEx (kelghyow gorthyp, sawder kognitiv, stad lanwes) yw framyow rag musurya produktivita displegyer **yn liesdimensyon** — gorthyp an maes dhe'n dyskudhans na wra unn musur vyth gwitha kesyans gans gwiryonedh.

## Perag yth yw posek

An dhew framya a godh an keth dyskans kales a dhyskas hwilas sewyansow yeghes ugens bledhen kyns: unn niver (linennow kodh; gwask goes) a wrug gaou a wiryonedh liesdimensyon, ha'y wellhe a dhre gwari, na gwellhe. SPACE a ragorderya kesmeskans musurow a dri dimensyon dhe'n lyha, ow kesmeski telemetry ha hunnys-derivas — strukturel kehaval dhe fatell wra [EQ-5D](../eq-5d/) profilya pymp dimensyon kyns jorra index vyth, ha perag y'n eus [PROMs](../sewyansow-derivys-gans-klav/) ryb musurow klinikel. Gwarder/yeghes-bewnans nyns yw gwarnyans medh: a berthy ekonomek [synsyans gweythres](../synsyans-gweythlu/), may ma diskressans prisys yn mysyow a seleri leun.

## An Matematik

Nag yw an framya formula; an dhew yw dyghtow musurya:

```
Rewl SPACE: ≥ 3 dimensyon, ≥ 1 musur ankevrus (sorvey) + ≥ 1 musur system (telemetry)

Dimensyons DevEx ha kevresow ensampel:
  kelghyow gorthyp → hys CI (telemetry) + "an gortos a omglew lent" (sorvey)
  sawder kognitiv  → kavadewder dogvenn, termyn onboarding + strevya gwelys
  stad lanwes      → dewder kesunnow/hwarvosow lettya + fokus hunnys-derivys

Indeksow dyrivys (ex. DXI DX) a vap kesyans sorvey dhe dermyn:
klaym gwerther ≈ 13 mynysen/displegyer/seythun rag poynt index — perthewgh
avel linenn-vonn gwerther dhe wiryfia yn le, na ny yw kevrenn natur.
```

## Ensampel gwrys

Skuadron plattform a jystyf investyans DevEx (CI skonnyk + dogvenn nowydh) rag 300 displegyer:

```
Linenn-vonn: CI p75 = 28 min; sorvey "Yth esof ow kelli fokus orth gortos drehevyansow": 62% a asent
Wosa:        CI p75 = 9 min;  asentyans 24%

Termyn dasgavys (telemetry): 6 drehevyans/dydh × 19 min × 0.4 devnydhadow = ~45 min/dydh/displegyer
Talvos kapasita: 300 × 0.75h × 220d × £60/h ≈ £2.97M/bledhen (nag-arghans-rydhek —
gwelewgh cash-releasing-vs-non-cash-releasing.md; faktour devnydhadewder 0.4 yw
an diskont dryllyans dhort practitioner-time.md)
Kefrysans ankevrus a wra an klaym telemetry kredus — kyn unn vo gwariadow;
warbarth, y a drikorna.
```

## Kolm gans ynjynnyans medhelweyth

An dhogvenn ma *yw* an tu medhelweyth; an treusdrehans a dheu dhe ekonomek yeghes. "Bledhen ynjynnyer addasys-sawder" — termyn pwyssys gans index skiansek savonek — yw drehevyans an [QALY](../bledhen-bewnans-addasys-anabalder-2/) devnydhys dhe gapasita ynjynnyans, ha derivow rewlyow an QALY: pwysyow dhort ynstrument validys (sorvey kesys, pwyntyans dyllys), kuntellys *kyns* an keskomparyans, na vyth tunyys dhe wul bonkyans dhe arf an gwarya. An dyskas [SF-6D erbynn EQ-5D](../eq-5d/) a dal ynwedh: ynstrumentow dyvers a re niverow dyffrans yn rewlys, ytho na geskomparewgh indeksow DevEx a-dreus ynstrumentow gwerthoryon.

## Fowtys Kemmyn

- **Kowlap unn-musur**: dashboardow a dhrehev SPACE dhe unn skor a wra arta an kudyn may ma an framya ow bos dhe'y lettya.
- **Musurow aktivita avel sewyansow**: kommitys, PRs ha poyntow story yw Aktivita — an dimensyon a warnya SPACE bos an moyha gwariadow (kehaval yeghes: kontya oberow, na dasvewyans).
- **Skwithder sorvey ha efektow Hawthorne**: ynstrumentow tredhek ha skyfel a wayn war chekyans seythunnyek.
- **Keskomparya skuadronow**: kepar ha tablow lyga klavjiyow heb addasya kesmesk-kas — dyffransow kettesten (maes, pwys heyl, galwas) a dhomin.

## Fontynnow

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
