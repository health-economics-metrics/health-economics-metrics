# Kunnawa da Karɓuwa

Adadin kunnawa shi ne kason waɗanda suka yi rajista waɗanda suka kai ga fara samun daraja mai ma'ana (aikin "aha" — karatun farko da aka rubuta, darasi na farko da aka kammala). Karɓuwa kuwa ita ce sigar al'umma: kason al'ummar da *ta cancanta* waɗanda suka karɓa kwata-kwata. Tare, su ne ƙofofin gaba na mazubin daraja: samun masu amfani → karɓuwa → kunnawa → [riƙewa](../riƙewa-da-barin-amfani/) → sakamako.

## Dalilin muhimmancinsa

Masu amfani da ba a kunna ba tsantsar kuɗi ne: kuɗin samun masu amfani, tanadi, da fuskar tallafi — babu darajar asibiti ko kaɗan. Ma'auni sun nuna kunnawar manhajar lafiya *ta ragu* fiye da matsakaicin dukkan masana'antu (≈24% da ≈37% na kunna sabbin masu amfani a wani rukunin ma'aunin SaaS; kammala jerin shiga kusan 20%), wanda ke nuna nauyin shiga (ainihi, yarda, aminci na asibiti). Karɓuwa tana ɗauke da nauyin al'umma: a [tsarin RE-AIM](../isa-da-adalci/), tasirin lafiyar jama'a ≈ isa × tasiri — kyakkyawar manhaja da kashi 3% na al'ummar da suka cancanta suka karɓa tana motsa al'umma ne da darajar kashi 3% kawai. Ga magungunan dijital da aka rubuta, ƙofar karɓuwa tana bayyane a bayanan ƙasa: **kusan kashi 81% na takardun DiGA na Jamus ake kunnawa** — ɗaya cikin biyar na magungunan da aka rubuta aka biya ba sa fara aiki ba (duba [hanyar gaggawa ta DiGA](../hanyar-gaggawa-ta-diga-ta-jamus/)).

## Lissafin

```
Activation rate = users completing key action within window / sign-ups × 100
Uptake rate     = adopters / eligible population × 100
DTx fill rate   = activated prescription codes / issued prescriptions × 100

Funnel value model:
  eligible × uptake × activation × retention-weighted benefit = population value
  — four multiplications; improving the smallest factor usually
  dominates (theory-of-constraints for funnels)
```

## Misali da aka lissafa

Wani mai ba da umarni yana ba da manhajar rigakafin ciwon suga ga mazauna 80,000 da suka cancanta:

```
Invited → registered:  80,000 → 12,000  (uptake 15%)
Registered → activated (first session + goal set, 7 days): 12,000 → 5,400 (45%)
Activated → completed 6-month programme: 5,400 → 1,600 (30%)

Programme effect (trial, completers): 0.03 QALYs + £180 avoided costs
Population value = 1,600 × (0.03 × £20,000 + £180) ≈ £1.25M
Per-eligible-person value = £15.6 — versus £780 if every eligible person completed.

Where to invest? Doubling uptake (15→30%) doubles value; raising
activation 45→65% adds ~44%; both beat further polishing the programme
content the 1,600 already complete.
```

## Alaƙa da injiniyancin manhaja

Kunnawa ita ce matakin mazubin da injiniya ya fi iya sarrafawa: rikitarwar tabbatar da ainihi, hanyoyin yarda, tsarin yanayin fanko, da lokaci-zuwa-daraja ta farko duk lamba ne, ba manufofi ba (matsakaicin lokaci-zuwa-daraja a manhajar lafiya ≈ kwana 1 da sa'o'i 7 a bayanan ma'auni — kowace sa'a a cikinsa tana fallasa ga barin amfani). Karɓuwa matsalar tsarin rarrabawa ce: haɗawa cikin hanyoyin turawa (lokacin rubuta takarda), gayyatar da likitan gida ya amince da ita (amana na yaɗuwa), da samun dama (harshe, ƙwarewar dijital — duba [isa da adalci](../isa-da-adalci/)). Samfurin darajar mazubi na sama shi ne mai samar da shari'ar kasuwanci ga duka biyun: a ninka abubuwan, a gano ƙugiyar, a ƙayyade farashin gyaran da darajar al'ummar da yake 'yantarwa.

## Tarkuna

- **Fassara kunnawa a matsayin sauƙi** (an tabbatar da imel) maimakon ma'anar asibiti (aikin magani na farko) — yana ƙara ma'aunin, yana karya sarkar daraja.
- **Wasan mai rabawa a karɓuwa**: "daga cikin waɗanda suka ziyarci shafin" da al'ummar da suka cancanta da gaske — masu ba da umarni suna kula da na biyun.
- **Tasirin zaɓi**: masu amfani da ke da sauƙin kunnawa su ne mafi ƙarancin rashin lafiya da mafi ƙarancin talauci; ingantawar mazubi na iya faɗaɗa gibin adalci yayin da yake inganta matsakaici.

## Tushe

- Activation benchmarks (healthcare SaaS). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- DiGA activation data, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- RE-AIM framework. <https://re-aim.org/>
