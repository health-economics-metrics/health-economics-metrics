# Aktyvavimas ir pradėjimas naudoti

Aktyvavimo rodiklis – tai užsiregistravusiųjų dalis, pasiekusi pirmąją prasmingą vertę („aha“ veiksmas – pirmas užregistruotas matavimas, pirma baigta pamoka). Pradėjimas naudoti (uptake) – populiacijos versija: *tinkamos* populiacijos dalis, apskritai pradėjusi naudoti. Kartu jie yra vertės piltuvo priekiniai vartai: pritraukimas → pradėjimas naudoti → aktyvavimas → [išlaikymas](../išlaikymas-ir-nutekėjimas/) → rezultatas.

## Kodėl tai svarbu

Neaktyvuoti naudotojai yra gryna sąnauda: pritraukimo išlaidos, paruošimas, palaikymo paviršius – nulis klinikinės vertės. Lyginamieji rodikliai rodo, kad sveikatos priežiūros programinės įrangos aktyvavimas yra *žemesnis* nei vidutinis tarp pramonės šakų (≈24 % prieš ≈37 % naujų naudotojų aktyvavimui viename SaaS lyginamųjų duomenų rinkinyje; įvedimo kontrolinio sąrašo užbaigimas ~20 %), o tai atspindi sudėtingesnį įvedimą (tapatybė, sutikimas, klinikinė sauga). Pradėjimas naudoti lemia populiacijos statymus: pagal [RE-AIM sistemą](../aprėptis-ir-lygybė/) visuomenės sveikatos poveikis ≈ aprėptis × veiksmingumas – puiki programėlė, kurią priėmė 3 % tinkamos populiacijos, populiaciją pajudina 3 % masteliu. Receptiniams skaitmeniniams gydymo būdams pradėjimo vartai matomi nacionaliniuose duomenyse: **~81 % Vokietijos DiGA receptų aktyvuojama** – vienas iš penkių paskirtų ir apmokėtų gydymų niekada neprasideda (žr. [DiGA greitasis kelias](../vokietijos-diga-greitasis-kelias/)).

## Matematika

```
Activation rate = users completing key action within window / sign-ups × 100
Uptake rate     = adopters / eligible population × 100
DTx fill rate   = activated prescription codes / issued prescriptions × 100

Funnel value model:
  eligible × uptake × activation × retention-weighted benefit = population value
  — four multiplications; improving the smallest factor usually
  dominates (theory-of-constraints for funnels)
```

## Išspręstas pavyzdys

Užsakovas siūlo diabeto prevencijos programėlę 80 000 tinkamų gyventojų:

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

## Ryšys su programinės įrangos inžinerija

Aktyvavimas yra labiausiai inžineriniu būdu sprendžiamas piltuvo etapas: tapatybės patvirtinimo trintis, sutikimo srautai, tuščių būsenų dizainas ir laikas iki pirmos vertės yra kodas, o ne politika (sveikatos priežiūros mediana laiko iki vertės ≈ 1 diena 7 val. lyginamuosiuose duomenyse – kiekviena šios trukmės valanda yra nutekėjimo rizika). Pradėjimas naudoti yra platinimo sistemų problema: integracija į siuntimo kelius (recepto momentas), BPG rekomenduotos kvietimai (pasitikėjimo perdavimas) ir prieinamumas (kalba, skaitmeniniai įgūdžiai – žr. [aprėptis ir lygybė](../aprėptis-ir-lygybė/)). Aukščiau pateiktas piltuvo vertės modelis yra verslo atvejo generatorius abiem: sudauginkite veiksnius, raskite apribojimą, įkainokite pataisą pagal populiacijos vertę, kurią ji atlaisvina.

## Spąstai

- **Aktyvavimas apibrėžtas patogumo požiūriu** (el. paštas patvirtintas), o ne klinikine prasme (pirmasis terapinis veiksmas) – išpučia rodiklį ir nutraukia vertės grandinę.
- **Pradėjimo vardiklio žaidimai**: „iš apsilankiusiųjų svetainėje“ ir tikrai tinkama populiacija – užsakovams rūpi pastaroji.
- **Atrankos efektai**: lengvai aktyvuojami naudotojai yra mažiausiai sergantys ir mažiausiai nuskurdę; piltuvo pagerinimai gali didinti lygybės spragas gerindami vidurkius.

## Šaltiniai

- Activation benchmarks (healthcare SaaS). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- DiGA activation data, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- RE-AIM framework. <https://re-aim.org/>
