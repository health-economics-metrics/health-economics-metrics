# Klinikinio DI vertinimas

Pagrindinė statistika klinikiniam DI ar diagnostiniam modeliui vertinti: jautrumas, specifiškumas, AUROC, prognostinės vertės ir reikalingas ištirti skaičius. Pagrindinė ekonominė pamoka: **puikus AUROC nepadaro diegimo ekonomiškai efektyvaus** – vertė priklauso nuo veikimo taško, paplitimo ir to, kas vyksta po kiekvieno teigiamo rezultato.

## Kodėl tai svarbu

Reguliatoriai (FDA, MHRA) klinikinį DI patvirtina **užrakintame veikimo taške** – konkrečioje jautrumo / specifiškumo poroje (pvz., pirmoji FDA patvirtinta autonominė diabetinės retinopatijos sistema: jautrumas 87,2 %, specifiškumas 90,7 % pagrindiniame tyrime). Sveikatos ekonomistai tuomet užduoda klausimą, į kurį tikslumo rodikliai neatsako: esant jūsų diegimo populiacijos paplitimui, kiek *kainuoja* kiekvienas aptikimas ir ar verta pagal jį veikti? Retinopatijos patikros DI ekonominis vertinimas (npj Digital Medicine 2024) parodė, kad aukštesnis tikslumas pats savaime negarantavo ekonominio efektyvumo, kai buvo įskaičiuotos siuntimų sąnaudos.

## Matematika

```
Sensitivity = TP / (TP + FN)        — of the truly positive, share caught
Specificity = TN / (TN + FP)        — of the truly negative, share cleared
AUROC       = P(model ranks a random positive above a random negative)
              0.5 chance … 1.0 perfect; threshold-independent — and therefore
              deployment-decision-insufficient

PPV = TP / (TP + FP)   ← prevalence-dependent (Bayes); collapses when rare
NPV = TN / (TN + FN)

NNS  ≈ 1 / (prevalence × sensitivity)       — screened per true case found
Cost per true case = programme cost / TP      — the economic bottom line
```

## Išspręstas pavyzdys

Tas pats modelis, dvi aplinkos – jautrumas 90 %, specifiškumas 93 %:

```
Specialist clinic (prevalence 20%):
  PPV = (0.9×0.2)/(0.9×0.2 + 0.07×0.8) = 0.18/0.236 ≈ 76%  → 3 in 4 alerts real

Primary care (prevalence 1%):
  PPV = (0.9×0.01)/(0.9×0.01 + 0.07×0.99) = 0.009/0.0783 ≈ 11.5%
  → 8 in 9 alerts false; workup at £350 each:
  cost per true case = (0.009 + 0.0693) × 350 / 0.009 ≈ £3,045 per case found
```

Identiškas modelis, radikaliai skirtinga ekonomika – todėl vietai specifinis vertinimas yra reguliavimo tema, o „mūsų modelio AUROC 0,95“ yra ekonominės bylos pradžia, o ne pabaiga. Visą programos matematiką žr. [patikros ekonomika](../patikros-ekonomika/).

## Ryšys su programinės įrangos inžinerija

Inžinieriams, kuriantiems ar perkantiems klinikinį DI: **pateikite klaidų matricą esant diegimo paplitimui**, o ne vien ROC kreivę; **leiskite slenkstį nulemti ekonominiam sprendimui** – jautrumo / specifiškumo kompromisas turi minimizuoti tikėtinas sąnaudas (praleisti atvejai × praleidimo kaina prieš klaidingi aliarmai × tolesnio tyrimo kaina), o ne maksimizuoti etaloninį rodiklį; ir atpažinkite tą pačią matematiką savo įrankiuose – perspėjimų sistemos, anomalijų detektoriai ir saugumo skeneriai yra diagnostiniai testai retų įvykių srautuose, kur perspėjimų nuovargis yra [NNH](../reikalingas-gydyti-skaičius/). Modelio atnaujinimai, keičiantys veikimo tašką, iš naujo atveria ekonomiką (ir reguliacinį patvirtinimą – žr. [DI reguliavimo vertinimas](../di-reguliavimo-vertinimas/)).

## Spąstai

- **AUROC pirkimas**: modelių lyginimas pagal AUROC, kai jie veiks vienu slenksčiu – lyginkite veikimo taške.
- **Tyrimo paplitimo PPV, cituojamas realiam diegimui** – klasikinė klaida; visada perskaičiuokite pagal vietinį paplitimą.
- **Spektro šališkumas**: modeliai, validuoti su akivaizdžiais atvejais ir sveikais kontroliniais, prasčiau veikia dviprasmiškoje vidurinėje srityje, kuri dominuoja praktikoje.
- **Nepaskaičiuotos tolesnio kelio sąnaudos**: kiekvienas teigiamas rezultatas inicijuoja tolesnį tyrimą; modelis yra intervencija į *viso kelio* ekonomiką.

## Šaltiniai

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
