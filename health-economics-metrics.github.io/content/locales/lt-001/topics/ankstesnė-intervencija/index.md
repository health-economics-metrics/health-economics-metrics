# Ankstesnė intervencija

Jei sutaupyti pajėgumai leidžia gydytojui anksčiau peržiūrėti diagnostikos atsilikimus, pacientai greičiau pereina iš laukimo sąrašo į aktyvų gydymą – o gydyti anksčiau paprastai pigiau ir geriau nei vėliau, nes negydomos būklės progresuoja.

## Kodėl tai svarbu

Ligos progresavimas yra sveikatos priežiūros sudėtinės palūkanos. Pacientas, laukiantis su negydoma būkle, nėra nusistovėjusioje būsenoje: vėžio stadija kyla, širdies nepakankamumas dekompensuojasi, lengva depresija tampa sunkia. Todėl ankstesnė intervencija duoda dvigubą dividendą – **geresnius rezultatus** (daugiau QALY, gydant iš sveikesnės pradinės būklės) ir dažnai **mažesnes gydymo sąnaudas** (ankstyvos stadijos gydymas mažiau intensyvus nei vėlyvos stadijos gelbėjimas). Šis mechanizmas „greitesnius kelius“ iš veiklos malonumo paverčia klinikiniu ir ekonominiu imperatyvu – ir tai gilioji priežastis, kodėl [vėlavimo kaina](../vėlavimo-kaina/) taikoma klinikinei programinei įrangai.

## Matematika

```
Value of earlier intervention (per patient) =
    [Cost_late − Cost_early]                       (treatment-cost offset)
  + [QALYs_early − QALYs_late] × λ                 (health gain × threshold)
  × P(progression during the delay)                 (probability weighting)
```

Tikimybių svėrimas esminis: ne kiekvienas laukiantis pacientas progresuoja. Modeliuokite perėjimo tikimybę per laiko vienetą (iš natūralios eigos duomenų), o ne blogiausią atvejį. Tada diskontuokite: sąnaudos, išvengtos po metų, šiandien vertos mažiau ([diskontavimas](../diskontavimas-ir-laiko-pirmenybė/)) – ir atkreipkite dėmesį, kad dauguma ankstyvos intervencijos yra ekonomiškai *efektyvi*, o ne *taupanti* (žr. [prevencijos ekonomika](../prevencijos-ekonomika/)).

## Išspręstas pavyzdys

Diabetinės retinopatijos patikros atsilikimas: 4 000 pacientų, 6 mėnesiai vėlavimo. DI pagalba vertinant patrigina pralaidumą ir išvalo eilę per 8 savaites. Natūrali eiga: ~2 % laukiančių pacientų per metus progresuoja iki regėjimui grėsmingų stadijų, kol neperžiūrėti.

```
Progression events avoided by ~4 months' acceleration:
  4,000 × 2% × (4/12) ≈ 27 patients

Per avoided progression:
  treatment offset (intravitreal therapy vs laser) ≈ £4,000
  QALY gain (vision preserved) ≈ 0.8 QALYs × £20,000 = £16,000

Value ≈ 27 × (4,000 + 16,000) ≈ £540,000 — from one backlog cleared once,
before counting the permanent throughput gain.
```

## Ryšys su programinės įrangos inžinerija

Du perkėlimai. Pirma, akivaizdus: programinė įranga, greitinanti diagnostikos ir gydymo kelius (triažas, DI vertinimas, rezultatų maršrutizavimas), tampa pinigais būtent pagal šį modelį – ir modelis nurodo, kurį kelią greitinti: tą, kurio progresavimo kreivė statiausia, o ne ilgiausią eilę. Antra, inžinerinis veidrodis: **defektai taip pat progresuoja**. Klaida, pagauta projektuojant, kainuoja pokalbį; gamyboje – incidentą; „shift-left“ kainos kreivė (10–100× pagal etapą) yra progresavimo modelis, ir sąžininga versija turi tą pačią išlygą – ankstyvas aptikimas paprastai yra ekonomiškai efektyvus, o ne laisvi pinigai, nes peržiūros ir testai turi realią kainą, o dauguma pagautų problemų niekada nebūtų progresavusios.

## Spąstai

- **Blogiausio atvejo progresavimas, priimtas visiems** – tikimybių svėrimas yra skirtumas tarp analizės ir propagandos.
- **Pirmaeigio laiko paklaida (lead-time bias)**: ligos aptikimas anksčiau nekeičiant rezultatų atrodo kaip nauda, bet nėra; teiginys yra anksčiau *veiksminga intervencija*, o ne vien ankstesnis aptikimas (žr. [patikros ekonomika](../patikros-ekonomika/)).
- **Dvigubas skaičiavimas** su laukimo sąrašo ir RTT teiginiais, pagrįstais tuo pačiu pagreitinimu – vienas kelio patobulinimas, vienas naudų rinkinys, paskirstytas vieną kartą.

## Šaltiniai

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
