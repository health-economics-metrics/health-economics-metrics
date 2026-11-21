# Isa da Adalci

RE-AIM — Isa, Tasiri, Karɓuwa, Aiwatarwa, Kulawa (Reach, Effectiveness, Adoption, Implementation, Maintenance) — shi ne tsarin ƙa'ida don auna tasirin shiga tsakani a kan *al'umma*. Babban lissafinsa: **tasirin lafiyar jama'a ≈ isa × tasiri**. Kayan aikin dijital suna ƙara ma'aunin adalci: rarrabuwar dijital tana nufin isa ba daidai ba ne a tsari, kuma isarwa ta dijital-farko na iya faɗaɗa gibin lafiya da take nufin rufewa.

## Dalilin muhimmancinsa

Bitar tsari da ke amfani da RE-AIM ga mHealth sun gano alama ɗaya: Isa da Karɓuwa masu ƙarfi, **Tasiri da Kulawa marasa ƙarfi** — manhajoji suna yaɗuwa cikin sauƙi kuma suna ɓacewa da sauri. Ga hidimar lafiya ta ƙasa, wannan yana nufin samfur mai ban sha'awa ga kowane mai amfani na iya zama jari mara kyau ga al'umma, kuma akasin haka: kayan aiki mai matsakaicin tasiri da ya isa miliyoyi na iya wuce mai ban mamaki da ya isa dubbai (duba lissafin [HALE](../tsawon-rai-mai-lafiya/)). Adalci ba ƙaramin ƙuntatawa ba ne amma mai tuƙa daraja ne: keɓancewar dijital tana bin shekaru, talauci, nakasa, da harshe — daidai al'ummomin da ke ɗaukar mafi yawan nauyin da za a iya magancewa — saboda haka mai amfani da aka keɓe a ƙarshe yawanci yana da damar fa'ida *fiye da matsakaici*. Don ma'aunin ƙididdiga na hukuma na rashin daidaiton lafiya da ya shafi zamantakewa da tattalin arziki, duba [Ma'aunin Taruwa](../ma-aunin-taruwa/).

## Lissafin

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

## Misali da aka lissafa

Shirin rigakafin ciwon sukari na dijital, an ba da rahoto ta hanyoyi biyu:

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

## Alaƙa da injiniyancin manhaja

Isa ƙirar injiniya ce a mafi yawa: buƙatun mafi ƙarancin na'ura da OS, zaton bandwidth, tallafin harshe, bin ƙa'idar samun dama (WCAG), cikas na tabbatar da shaida, da rarrabawa ta kantin manhaja kawai kowanne yana yanke al'ummomi daga mai rabawa — yawanci a ɓoye, domin masu amfani da aka keɓe ba sa bayyana a nazari. Ayyukan injiniya da ke motsa adalci: auna *mai rabawa* (a yi kayan aunawa ga al'ummar da suka cancanta, ba masu amfani kaɗai ba); tsara aiki don tsofaffin na'urori da mummunar haɗin intanet; fitar da hanyoyin dijital masu taimako (waya, SMS, kiosk) a matsayin hanyoyi na farko ba hanyoyin kunya ba; kuma raba kowane ma'aunin dashboard bisa ma'aunan adalci — matsakaicin da ba a raba ba shi ne inda rashin adalci ke ɓoyewa ([karɓuwar GDS](../ma-aunan-sabis-na-gds/) tana ɗauke da gargaɗi ɗaya).

## Tarkuna

- **An bayar da rahoton tasiri a kan waɗanda suka kammala, an yi da'awar tasiri a kan al'ummomi** — sharuɗɗan isa an watsar da su a ɓoye.
- **Adalci a matsayin binciken bayan lokaci** maimakon shigar ƙira; gyara isa daga baya ya fi tsada sosai fiye da tsara shi.
- **Mantawa da Kulawa**: ma'auni mafi rauni na RE-AIM a mHealth — da'awar tasiri fiye da tsawon lokacin shaida.
- **Tanadin tashar dijital kawai** da ke mayar da kuɗi kan masu amfani da aka keɓe da ma'aikatan gaba (duba [ma'aunan sabis na GDS](../ma-aunan-sabis-na-gds/)).

## Tushe

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
