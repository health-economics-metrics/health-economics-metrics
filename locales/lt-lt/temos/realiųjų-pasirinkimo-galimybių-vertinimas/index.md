# Realiųjų pasirinkimo galimybių vertinimas

Realiųjų pasirinkimo galimybių vertinimas taiko finansinių pasirinkimo sandorių kainodaros logiką realiems (ne finansų rinkos) investicijų sprendimams – konkrečiai *galimybei išplėsti* projektą vėliau, jei jis pasiseka, neprivalant to daryti. Supaprastintas vieno laikotarpio binominis modelis (Cox, Ross, Rubinstein, 1979) tiesiogiai įvertina šį lankstumą, paversdamas „išleiskime mažą ir pažiūrėkime“ iš nuojautos į įkainotą skaičių.

## Kodėl tai svarbu

Statinis NPV skaičiavimas įkainoja projektą kaip viskas arba nieko statymą: finansuoti ar ne, šiandienos mastu, amžinai. Tikri projektai – ypač etapiniai skaitmeninės sveikatos diegimai – retai statomi taip: sveikatos sistema gali finansuoti mažą bandymą, stebėti, kas nutiks, ir įsipareigoti toliau tik jei veikia. Tas lankstumas turi realią vertę, o jo ignoravimas sistemingai nuvertina etapines investicijas, palyginti su vienkartinėmis – būtent atvirkščiai pirkimo procesams, kurie apdovanoja saugiau atrodantį etapinį pasiūlymą. Realiųjų pasirinkimo galimybių vertinimas įkainoja patį lankstumą, kad etapinį pasiūlymą būtų galima teisingai palyginti su pilno įsipareigojimo alternatyva, užuot jį baudus už tai, kad atrodo mažesnis naivioje NPV eilutėje.

## Matematika

```
Risk-neutral probability of the "up" state:
  p = ((1 + risk_free_rate) − down_factor) / (up_factor − down_factor)

Expansion payoff in each state (floored at zero — expanding is optional):
  payoff_up   = max(project_value × up_factor   − expansion_cost, 0)
  payoff_down = max(project_value × down_factor − expansion_cost, 0)

Option value (discounted expected payoff):
  option_value = (p × payoff_up + (1 − p) × payoff_down) / (1 + risk_free_rate)

Expanded NPV = static_npv + option_value
```

Projekto vertė iki kito sprendimo taško arba išauga (`up_factor`), arba nukrinta (`down_factor`). Plėtimasis įgyvendinamas tik jei toje būsenoje pelningas – nulinė išmokos riba daro tai tikra *galimybe*, o ne prievole. Kaip įkainoti galimybę pirmiausia rinkti informaciją, o ne galimybę vėliau plėsti, žr. [tobulos informacijos tikėtina vertė](../tobulos-informacijos-tikėtina-vertė/). Dėl laukimo to sprendimo kainos žr. [vėlavimo kaina](../vėlavimo-kaina/).

## Išspręstas pavyzdys

Skaitmeninės paslaugos bandymas su `project_value = 1 000 000 £`, galimu pakilimu iki 1,5× arba kritimu iki 0,5× iki kito sprendimo taško, 8 % nerizikinga norma ir plėtimo kaina 600 000 £:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

payoff_up   = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
payoff_down = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

The floor matters: the option would NOT be exercised if the market
disappoints — the £600,000 expansion cost exceeds the £500,000 the
project would be worth in the down state.

option_value = (0.58 × 900,000 + 0.42 × 0) / 1.08
             = 522,000 / 1.08
             ≈ £483,333.33
```

Pridėjus galimybės vertę prie statinio NPV bazės 200 000 £: išplėstas NPV = 200 000 + 483 333,33 ≈ **683 333,33 £**. Pateikiant vien 200 000 £ statinį NPV be šios galimybės vertės, etapinio projekto tikroji vertė būtų nuvertinta daugiau nei dvigubai.

## Ryšys su programinės įrangos inžinerija

Tai formali versija „išleisk minimalią versiją dabar, išlaikyk galimybę investuoti toliau, jei prigis“ – tiesiogiai aktualu etapiniam skaitmeninės sveikatos produkto diegimui, struktūriškai lygiagreti [vėlavimo kainos](../vėlavimo-kaina/) ir [WSJF / CD3](../wsjf-ir-cd3/) sekos nustatymo neapibrėžtumo sąlygomis rėmui ir papildanti [tobulos informacijos tikėtiną vertę](../tobulos-informacijos-tikėtina-vertė/) bei [imties informacijos tikėtiną vertę](../imties-informacijos-tikėtina-vertė/) – visi trys įkainoja lankstumą ar informaciją neapibrėžtumo sąlygomis, iš skirtingų pusių.

## Spąstai

- **Rizikai neutralios kainodaros skolinimasis be prekiaujamo turto prielaidos, kuria ji remiasi**: realiųjų galimybių modeliai skolinasi rizikai neutralią tikimybę iš finansinių galimybių kainodaros, kuri prielaidauja, kad pagrindinė vertė yra *prekiaujamas* turtas – tikrai neprekiaujamam realiam projektui tai modeliavimo patogumas, o ne pažodinis rinkos faktas.
- **`up_factor` / `down_factor` laikymas laisvais parametrais**: binominės aukštyn / žemyn įvestys pačios yra prielaidos, reikalaujančios pagrindimo, o ne laisvi parametrai, parinkti norimam atsakymui gauti.
- **Pateikiama tik galimybės vertė**: realiųjų galimybių vertė yra *adityvi* atskiro projekto statiniam NPV – dažna klaida pateikti tik galimybės vertę ir praleisti bazinį atvejį, kas pervertina bylą, jei statinis NPV neigiamas, ir nuvertina ją (kaip aukščiau pateiktame pavyzdyje), kai statinis NPV visai paliekamas.

## Šaltiniai

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — ties real options directly to a health-economics decision context. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
