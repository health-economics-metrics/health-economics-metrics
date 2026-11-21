# Időalku (TTO) hasznosságfelmérés

A TTO egy szabványos módszer egy egészségállapot-hasznossági érték közvetlen kikérdezésére a válaszadótól, kitalálás helyett. Egyike azoknak a kikérdezési módszereknek — a standard gamble és a diszkrét választási kísérletek mellett —, amelyek az olyan kérdőívek mögötti értékkészleteket előállítják, mint az [EQ-5D](../eq-5d/), és így a legtöbb lejjebb következő [QALY](../minőséggel-korrigált-életév/)-számítás mögött állnak.

## Miért fontos

Minden hasznossági súlynak, amely egy QALY-számításba táplál, valahonnan származnia kellett. A TTO ennek módja: a halálnál jobbnak tartott állapot esetén a válaszadótól azt kérdezik, hány `X` év teljes egészségben tekintene egyenértékűnek a károsodott állapotban eltöltött `T` évvel (`X < T`); a hasznosság `X / T`. Egy olyan állapotnál, amelyet egyes válaszadók a halálnál rosszabbnak tartanak, a szokásos képlet összeomlik (nem tud tisztán nulla alatti hasznosságokat ábrázolni), ezért kiterjesztett TTO-t alkalmaznak. Az a szoftvermérnök vagy elemző, aki a hasznossági súlyt adottnak vett bemenetként kezeli, anélkül, hogy tudná: előállításához validált kikérdezési protokoll kellett, egy lépésre van egy olyan számtól, amelyet kérdésre nem tud megvédeni.

## A matematika

```
Standard TTO (state better than death):
  utility = time_in_full_health / time_in_impaired_state

Extended TTO (state worse than death):
  utility = -time_traded_for_death / (total_duration - time_traded_for_death)
```

`time_in_full_health` / `time_in_impaired_state` — a teljes egészségben eltöltött `X` évek, amelyeket a károsodott állapotban eltöltött `T` évvel egyenértékűnek ítélnek. `time_traded_for_death` / `total_duration` — a halálnál rosszabb megfogalmazásban a `T` éves hátralévő élet azon `a` évei, amelyeket a válaszadó az azonnali halálra cserélne, a `T − a` év teljes egészséget, majd halált előnyben részesítve a halálnál rosszabb állapotban eltöltött `T` évvel szemben. Az eredmény negatív, úgy horgonyozva, hogy halál = 0.

## Kidolgozott példa

**Szokásos**: a válaszadó 10 évig károsodott állapotban van, és közömbös 7 év teljes egészséggel szemben: hasznosság = 7 / 10 = **0,7**.

**A halálnál rosszabb**: 10 éves hátralévő élet alatt a válaszadó 2 évet cserélne azonnali halálra — a 8 év teljes egészséget, majd halált részesíti előnyben a halálnál rosszabb állapotban eltöltött 10 évvel szemben: hasznosság = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Kapcsolat a szoftverfejlesztéssel

Ugyanaz a pont, amelybe a DevEx- vagy elköteleződési felmérések ütköznek, amikor az emberektől valamit egy vizsgálatlan 0–10-es skálán kérnek értékelni, itt fordítva érvényes: a TTO éppen azért létezik, mert a „csak kérd meg az embereket, hogy értékeljék" önmagában nem validált kikérdezési módszer. Mielőtt összetett indexet építenél — DevEx-pontszámot, elköteleződési indexet, kiégési skálát — egy önértékelt szám tetejére, kérdezd meg, mi kérdezte ki, és validált volt-e a módszer, ugyanazt a kérdést, amelyet az egészséggazdászok egy hasznossági súllyal kapcsolatban feltesznek, mielőtt QALY-ba kerül.

## Buktatók

- **Az egyéni érték általánosítása**: a TTO-értékeket a nyilvánosság (vagy a betegek) *mintájától* kérdezik ki, nem attól az egyéntől, akinek az ellátásáról döntenek — egy válaszadó TTO-értékének általánosítottként való használata mintavételi hiba.
- **Az állapothoz nem illő megfogalmazás**: a szokásos TTO-képlet feltételezi, hogy az állapot egyértelműen jobb a halálnál; ha olyan állapotra alkalmazzák, amelyet egyes válaszadók a halálnál rosszabbnak tartanának, a kiterjesztett megfogalmazásra váltás nélkül, csendben téves (pozitív) hasznosságot ad.
- **Összehasonlíthatatlan időtartamok**: a halálnál rosszabb összehasonlításhoz eltérő hátralévő életidők `T` mellett kikérdezett TTO-értékek nem hasonlíthatók össze közvetlenül anélkül, hogy ellenőriznénk, hogy a vizsgálat felépítése állandó `T`-t tartott.

## Források

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
