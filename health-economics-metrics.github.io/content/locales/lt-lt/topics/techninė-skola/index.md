# Techninė skola

Techninė skola – tai numanomos būsimos praeities skubotų sprendimų kodo bazėje sąnaudos: likusio taisymo darbo (**pagrindinė suma**) ir nuolatinio pristatymo stabdymo (**palūkanos**). Kiekybinio įvertinimo metodai, tokie kaip SQALE, paverčia ją iš metaforos į įkainotą įsipareigojimą.

## Kodėl tai svarbu

Neįvertinta, techninė skola yra skundas; įvertinta – verslo byla. Pramonės bazės (CAST Appmarq, 1 400 programų / 550 mln. LOC): istoriškai ≈ **3,61 USD techninės skolos pagrindinės sumos vienai kodo eilutei**, o tipinės kodo bazės neša 15–20 % perkūrimo kainos skolos santykį, palyginti su dažnai naudojama sveikatos riba ≤ 5 % (SonarQube „A“ įvertis). Sveikatos ekonomikos rėmas tinka tiksliai: skola yra *lėtinė būklė* – negydoma, ji progresuoja, jos „palūkanos“ kaupiasi kaip lėtesnis pristatymas ir didesnis defektų dažnis, o taisymas konkuruoja dėl pajėgumų su funkcijų darbu lygiai taip, kaip prevencija konkuruoja su gydymu.

## Matematika

```
SQALE principal   = Σ over violations (remediation time) × developer cost rate
Technical debt ratio (TDR) = remediation cost / redevelopment cost × 100
                    (SonarQube grades: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Interest (the number that justifies paydown):
  interest/year = Δ delivery velocity × value per unit velocity
                + Δ defect rate × cost per defect
Paydown case  = PV(interest avoided over horizon) − remediation cost
                (discounted — see discounting-and-time-preference.md)
```

Pagrindinė suma nurodo įsipareigojimą; **palūkanos** sudaro investicijos bylą. Mokėti 500 tūkst. £ pagrindinės sumos, kad išvengtum 40 tūkst. £ per metus palūkanų, yra bloga sandoris; išvengiant 400 tūkst. £ per metus – puikus.

## Išspręstas pavyzdys

400 tūkst. LOC klinikinių įrašų integracijos sluoksnis: SQALE pagrindinė suma 3 800 valandų × 75 £ = **285 tūkst. £**; TDR ≈ 12 % (C įvertis). Išmatuotos palūkanos: šį sluoksnį liečiančių komandų ciklo trukmės 40 % ilgesnės ir 2× didesnis pakeitimų nesėkmių dažnis nei parko bazė. Sluoksnis sugeria 6 000 kūrėjo valandų per metus:

```
Interest ≈ 6,000 × 0.40 × £75      = £180,000/year (velocity drag)
         + 12 extra failures × £8,000 = £96,000/year (rework/incidents)
         ≈ £276,000/year

Remediate the worst 30% of principal (£85k) targeting hotspots → modelled
interest reduction 60%: saves ~£166k/year. Payback ≈ 6 months.
```

Karštųjų taškų taikymas svarbus: skolos palūkanos koncentruojasi ten, kur pakeitimų dažnis × skolos tankis piką pasiekia – retai liečiamos skolos taisymas nieko neperka, tarsi gydyti būklę, kuri niekada nebūtų progresavusi ([prevencijos ekonomika](../prevencijos-ekonomika/)).

## Ryšys su programinės įrangos inžinerija

Sveikatos ekonomikos importai, patobulinantys techninės skolos argumentus: išreikškite parką kaip **naštos inventorių** ([DALY](../dėl-negalios-prarasti-gyvenimo-metai/) stiliumi – kur prarasti sveiki inžinerijos metai?); grąžinimą pagrįskite progresavimo matematika, sąžiningai (paprastai ekonomiškai efektyvus, o ne taupantis); blogiausių sistemų taisymo vertę svertinkite pagal [sunkumo deficitą](../qaly-deficitas-ir-sunkumo-modifikatoriai/); ir didelius taisymo pasiūlymus teikite su užskaitos analize, atlaikančia [išvengtų tolesnių sąnaudų](../išvengtos-tolesnės-sąnaudos/) taisykles – tikimybėmis svertą, diskontuotą, skaičiuotą vieną kartą.

## Spąstai

- **Pateikiama tik pagrindinė suma**: didelis bauginantis skaičius be palūkanų įverčio nieko nepagrindžia.
- **Įrankio sugeneruoti skolos skaičiai paimti pažodžiui**: SQALE skaičiuoja taisyklių pažeidimus; jis praleidžia architektūrinę skolą (brangią rūšį) ir skaičiuoja smulkmenas.
- **Nulinės skolos utopizmas**: optimalus skolos lygis nėra nulis – skola yra svertas; klausimas yra palūkanų norma.
- **„Perrašymas išvengia visko“**: perrašymo pasiūlymai turi atitikti tas pačias užskaitos taisykles – kontrafaktinė kaina, tikimybė, diskontavimas.

## Šaltiniai

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
