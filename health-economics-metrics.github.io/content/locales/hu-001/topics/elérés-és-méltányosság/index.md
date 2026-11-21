# Elérés és méltányosság

A RE-AIM — Reach (elérés), Effectiveness (hatékonyság), Adoption (átvétel), Implementation (megvalósítás), Maintenance (fenntartás) — a beavatkozások *népességi* hatásának megítélésére szolgáló szokásos keretrendszer. Központi számtana: **közegészségügyi hatás ≈ elérés × hatékonyság**. A digitális eszközök egy méltányossági dimenziót is hoznak: a digitális szakadék miatt az elérés rendszerszerűen egyenetlen, és a digitális-első szolgáltatás szélesítheti azokat az egészségügyi különbségeket, amelyeket csökkenteni hivatott.

## Miért fontos

A RE-AIM-et mHealth-megoldásokra alkalmazó szisztematikus áttekintések következetes mintázatot találnak: erős elérés és átvétel, **gyenge hatékonyság és fenntartás** — az appok könnyen elterjednek és gyorsan elhalványulnak. Egy nemzeti egészségügyi szolgálat számára ez azt jelenti, hogy egy felhasználónként lenyűgöző termék rossz népességi befektetés lehet, és fordítva: egy szerényen hatékony, milliókat elérő eszköz többet teljesíthet, mint egy zseniális, amely ezreket ér el (lásd a [HALE](../egészséggel-korrigált-várható-élettartam/) számtanát). A méltányosság nem mellékfeltétel, hanem értékteremtő tényező: a digitális kirekesztettség az életkorral, a depriváltsággal, a fogyatékossággal és a nyelvvel jár együtt — pontosan azokkal a népességekkel, amelyek a legtöbb kezelhető terhet viselik —, így a marginális kirekesztett felhasználó gyakran *átlag feletti* lehetséges haszonnal bír. Az egészségi egyenlőtlenség társadalmi-gazdasági helyzethez kötött formális statisztikai mérőszámához lásd a [koncentrációs indexet](../koncentrációs-index/).

## A matematika

```
Population impact ≈ reach × effectiveness
  reach         = participants / eligible population (see activation-and-uptake.md)
  effectiveness = real-world effect among participants (retention-weighted —
                  see retention-and-churn.md)

Equity-stratified version:
  impact_group_g = reach_g × effectiveness_g, reported per deprivation
  quintile / age band / language group
  equity gap = impact_top quintile − impact_bottom quintile

Distributional cost-effectiveness: apply equity weights to QALYs by
recipient group — a QALY to the worst-off counts more (an increasingly
mainstream HTA extension).
```

## Kidolgozott példa

Egy digitális cukorbetegség-megelőző program, kétféleképpen jelentve:

```
Aggregate: reach 12%, effect 0.02 QALYs/participant → 0.0024 QALYs/eligible person

Stratified (deprivation quintiles):
  Q1 (least deprived): reach 22%, effect 0.02 → 0.0044
  Q5 (most deprived):  reach 4%,  effect 0.025 → 0.0010

The programme delivers 4.4× more health to the least deprived —
while Q5's per-participant effect is HIGHER (more headroom). An
assisted-digital arm (phone coaching + community access) costing 20%
more per Q5 participant that lifts Q5 reach to 12% triples Q5 impact
and improves the aggregate — the equity investment IS the efficiency
investment here.
```

## Kapcsolat a szoftverfejlesztéssel

Az elérés jelentős részben mérnöki műtermék: az eszköz- és operációsrendszer-minimumkövetelmények, a sávszélességi feltevések, a nyelvi támogatás, a hozzáférhetőségi megfelelés (WCAG), a személyazonosság-ellenőrzési akadályok és a kizárólag alkalmazásboltból történő terjesztés mind kifaragnak populációkat a nevezőből — általában láthatatlanul, mert a kirekesztett felhasználók sosem jelennek meg az analitikában. A méltányosságot javító mérnöki gyakorlatok: mérd a *nevezőt* (a jogosult populációt műszerezd, ne csak a felhasználókat); költségvetezd a teljesítményt régi eszközökre és gyenge kapcsolatra; szállíts támogatott digitális útvonalakat (telefon, SMS, kioszk) első osztályú folyamatként, ne szégyenletes csatornaként; és rétegezz minden irányítópult-mutatót a méltányossági dimenziók szerint — a rétegezetlen átlag az, ahol az egyenlőtlenség elbújik (a [GDS-igénybevétel](../gds-szolgáltatásmutatók/) ugyanezt a figyelmeztetést hordozza).

## Buktatók

- **A hatékonyság a teljesítőkön jelentve, a hatás a népességre állítva** — az elérési tagok csendben kimaradnak.
- **A méltányosság utólagos auditként** tervezési bemenet helyett; az elérés utólagos javítása sokkal drágább, mint a rá való tervezés.
- **Fenntartási amnézia**: a RE-AIM leggyengébb mHealth-dimenziója — a bizonyítékok időhorizontján túlmutató hatásállítások.
- **Csak digitális csatornás megtakarítások**, amelyek költségeket tolnak a kirekesztett felhasználókra és a frontvonalbeli személyzetre (lásd [GDS-szolgáltatásmutatók](../gds-szolgáltatásmutatók/)).

## Források

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
