# Adadin da Ake Bukatar Magani (NNT)

NNT shi ne adadin marasa lafiya da dole su karɓi shiga tsakani don **ƙarin majiyyaci ɗaya** ya amfana, a cikin ƙayyadadden lokaci. Yana mayar da raguwar haɗari ta kashi-kashi — wadda ke ruɗarwa — zuwa naúrorin ƙoƙari-ga-fa'ida da kowa zai iya tunani a kai.

## Dalilin muhimmancinsa

"Yana rage bugun zuciya da 25%!" yana jin kamar tabbatacce. Idan haɗarin tushe 4% ne a cikin shekaru 5, raguwar cikakke maki 1 ne, don haka **mutane 100 dole su sha maganin shekaru 5 don 1 ya amfana** — kuma duka 100 suna biyan kuɗi da illolin. NNT shi ne maganin tallace-tallace na haɗarin dangi, shi ya sa magani bisa shaida yake farawa da shi. Statins don rigakafin farko: NNT ≈ 50–100 a cikin shekaru 5 ga kowane bugun zuciya da aka kauce wa. Madubinsa, **NNH** (adadin da ake bukata don cutarwa), yana ƙirga mutane nawa aka yi wa magani ga kowane wanda aka cutar.

## Lissafin

```
ARR = control event rate − treatment event rate   (absolute risk reduction)
NNT = 1 / ARR

NNH = 1 / (harm rate_treatment − harm rate_control)

Economic bridge:
cost per event prevented = NNT × cost per treatment course
```

Koyaushe bayyana lokaci da al'ummar tushe — NNT ba shi da ma'ana ba tare da su ba.

## Misali da aka lissafa

Tsarin hasashen faɗuwa a asibiti yana yiwa marasa lafiya masu haɗari alama don shiga tsakani (na'urorin gado, bita, sa ido). Gwaji: faɗuwa da rauni suna raguwa daga 3.2% zuwa 2.4% na masu shiga asibiti.

```
ARR = 0.8 percentage points → NNT = 1/0.008 = 125
   (125 patients must get the intervention bundle to prevent 1 injurious fall)

Intervention cost ≈ £40/patient → cost per fall prevented = 125 × 40 = £5,000
Cost of an injurious inpatient fall (extra stay, imaging, litigation) ≈ £12,000
Net: prevention pays ~2.4:1 — and the QALY gain is on top.
```

Lura yadda NNT ke kiyaye da'awa da gaskiya: "yana rage faɗuwa da 25%" da "yana hana faɗuwa ɗaya ga kowane marasa lafiya 125 da aka yi wa magani" sakamako ɗaya ne, mai gamsarwa daban.

## Alaƙa da injiniyancin manhaja

NNT shi ne naúrar da ta dace ga kowace ƙofa ko dubawa da ke aiki a kan abubuwa da yawa don kama kaɗan: **"adadin PR da dole su wuce ta ƙofar bitar AI don kama lahani ɗaya da ke zuwa samarwa."** Idan ƙofar tana duba PR 400 ga kowane kama na gaske (NNT = 400) a mintuna 4 na kulawar mai haɓakawa kowanne, kama ɗaya yana kashe ~sa'o'in mai haɓakawa 27 — yanzu kwatanta da kuɗin lamarin da take hanawa. NNH yana kama da ƙarya masu kyau: PR nawa ga kowace alamar *ƙarya*, kuma menene kuɗin kowanne a kulawa da amana? Kayan aiki irin na bincike (linters, na'urorin duba tsaro, gano abubuwan da ba na yau da kullum ba) su fito da lissafin NNT/NNH — duba [tattalin arzikin gwajin bincike](../tattalin-arzikin-gwajin-bincike/) don dalilin da ƙarancin yawa ke sa waɗannan lambobi su yi tsanani. [Adadin da ake bukata na bincike](../adadin-da-ake-bukatar-bincike/) lamba ce makamanciyarta mataki ɗaya sama, ga dukan shirin bincike-sannan-magani maimakon magani kaɗai.

## Tarkuna

- **Babu lokaci**: "NNT = 50" ba ya nufin komai; "NNT = 50 a cikin shekaru 5" da'awa ce.
- **Dasa haɗarin tushe**: NNT da aka lissafa a al'ummar gwaji mai haɗari mai yawa yana rushewa a al'ummar turawa mai ƙarancin haɗari.
- **Watsi da NNH** — ƙofa mai NNT 400 da NNH 3 mai haifar da damuwa ce, ba tsarin tsaro ba.

## Tushe

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
