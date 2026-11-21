# Grynoji piniginė nauda (NMB)

NMB paverčia sąnaudų efektyvumo rezultatą viena pinigų verte: sveikatos laimėjimas, įkainotas norimo mokėti slenksčiu, minus kaina. Jos dvynys – grynoji sveikatos nauda (NHB) – tą pačią taisyklę išreiškia sveikatos vienetais.

## Kodėl tai svarbu

Santykiai ([ICER](../prieaugio-sąnaudų-efektyvumo-santykis/)) nepatogūs: jie sprogsta prie nulinio poveikio, negali būti suvidurkinami per neapibrėžtumo traukimus ir negali švariai reitinguoti trijų ar daugiau parinkčių. NMB visa tai sutvarko – ji tiesinė, todėl galima reitinguoti parinktis, vidurkinti Monte Karlo traukimus ir skaidyti indėlius. Tai taip pat sveikatos ekonomikos matematikos forma, kurią kiekvienas inžinierius jau žino: *vertė minus kaina*.

## Matematika

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = incremental effect (e.g., QALYs)
ΔC = incremental cost
λ  = willingness-to-pay threshold (see willingness-to-pay-thresholds.md)

Decision rule: adopt if NMB > 0 (equivalently NHB > 0).
Among alternatives: choose the highest NMB.
```

NMB > 0 ⇔ ICER < λ (kai ΔE > 0), todėl dvi taisyklės sutampa – NMB tiesiog geriau elgiasi.

## Išspręstas pavyzdys

Trys diabeto paslaugos parinktys, 1 000 pacientų, λ = 20 000 £/QALY:

```
Option           ΔC          ΔE (QALYs)   NMB = 20,000×ΔE − ΔC
App + coaching   £400,000    30           600,000 − 400,000 = £200,000
App only         £150,000    12           240,000 − 150,000 = £90,000
Extra clinics    £700,000    32           640,000 − 700,000 = −£60,000
```

Papildomos klinikos įgyja daugiausia QALY, bet pagal šį slenkstį naikina vertę (NMB < 0). Laimi programėlė + konsultavimas. Atkreipkite dėmesį, kad NMB leidžia *reitinguoti visas tris iš karto* – poriniams ICER reikėtų ribos procedūros iš [dominavimas ir efektyvumo riba](../dominavimas-ir-efektyvumo-riba/) ir jie pasiektų tą patį atsakymą.

NHB žvilgsnis į nugalėtoją: 30 − 400 000/20 000 = 30 − 20 = **10 QALY grynųjų** – sveikata, įgyta virš to, ką tie patys pinigai būtų davę kitur.

## Ryšys su programinės įrangos inžinerija

`(hours saved × loaded hourly rate) − tool cost` – kasdienė įrankių verslo byla – yra pažodžiui NMB skaičiavimas su λ = visa inžinieriaus kaina. Du patobulinimai, kuriuos prideda sveikatos ekonomika:

- **Padarykite λ kintamuoju, o ne konstanta.** Pavaizduokite NMB prieš λ („inžinieriaus valandos vertė“) ir parodykite, kur sprendimas apsiverčia; skirtingos suinteresuotosios šalys gali pritaikyti savo vertinimą nekartodamos jūsų matematikos.
- **NHB mąstymas**: „ši platforma sutaupo 5 000 inžinieriaus valandų, bet sunaudoja biudžetą, kuris būtų nupirkęs 3 000 valandų rangovų pajėgumų – grynai 2 000 valandų“ verčia alternatyviosios kainos palyginimą pajėgumo vienetais. Žr. [alternatyvioji kaina](../alternatyvioji-kaina/).

## Spąstai

- **Slenksčio slėpimas**: NMB be nurodyto λ beprasmė; pateikite NMB ties 20 tūkst. £ ir 30 tūkst. £ arba pavaizduokite kreivę.
- **NMB naudojimas mažiems poveikiams išplauti**: didžiulė populiacija, padauginta iš nežymaus poveikio vienam žmogui, gali duoti didelę NMB – kartu pateikite poveikius vienam asmeniui.
- **Pamiršimas, kad NMB paveldi kiekvieną ΔC ir ΔE neapibrėžtumą** – derinkite su [tikimybine jautrumo analize](../tikimybinė-jautrumo-analizė/).

## Šaltiniai

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
