# Debesijos vieneto ekonomika (FinOps)

Debesijos vieneto ekonomika išverčia neapdorotas debesijos išlaidas į **kainą vienam rezultato vienetui** – vienam klientui, vienam sandoriui, vienam išspręstam atvejui, vienam žetonui. Tai FinOps gebėjimas, paverčiantis „mūsų AWS sąskaita – 400 tūkst. £ per mėnesį“ į „vieno paciento aptarnavimas kainuoja 0,83 £“.

## Kodėl tai svarbu

Bendros išlaidų sumos negali atsakyti į svarbiausius klausimus: ar produktas tampa efektyvesnis, ar mažiau efektyvus? Ar augimas gerina, ar naikina maržą? Ką turėtume imti? Vienetų kaštai atsako į visus tris. Skaitmeninei sveikatai konkrečiai „kaina vienam išspręstam atvejui“ *yra* sveikatos tarnybos vieneto kaina – tiesiogiai palyginama su [Nacionalinės sąnaudų kolekcijos](../nacionalinis-tarifas-ir-vieneto-sąnaudos/) skaičiais, kuriuos užsakovas naudoja kiekvienai kitai paslaugai, todėl tai natūrali kalba skaitmeniniams keliams palyginti su tradiciniais.

## Matematika

```
Unit cost = total allocated cost (incl. shared/platform costs) / units delivered

Two families:
  resource-efficiency units: cost/GB stored, cost/vCPU-hour, cost/token,
                             cost/build-minute
  business units:            cost/customer, cost/transaction, cost/consultation,
                             cost/case-resolved

Marginal vs average discipline applies (marginal-vs-average-cost.md):
committed/reserved spend makes marginal unit cost ≈ 0 until the next
commitment step — price expansion decisions at marginal, efficiency
trends at average.
```

## Išspręstas pavyzdys

Skaitmeninė triažo paslauga: debesijos išlaidos 62 000 £ per mėnesį (skaičiavimai 30 tūkst. £, duomenys 18 tūkst. £, bendros platformos paskirstymas 14 tūkst. £), aptarnaujama 380 000 triažo epizodų per mėnesį:

```
Average cost per episode = 62,000 / 380,000 ≈ £0.163

Commissioner comparison: telephone triage ≈ £8–12/call, GP consultation ≈ £42
→ digital episode runs at ~2% of the cheapest human alternative — the
channel-shift economics of gds-service-metrics.md, from the cost side.

Trend check: last year £0.21/episode at 240k episodes → improving scale
economics (fixed platform costs amortizing), worth a headline in the QBR.
```

## Ryšys su programinės įrangos inžinerija

Vieneto ekonomika yra vieta, kur inžinerijos pasirinkimai tampa suprantami finansams: architektūra, perpus sumažinanti kainą vienam epizodui, yra kainodaros pranašumas; didėjanti viršlinijiškai – laikrodinė bomba, matoma tik šiame rodiklyje. Praktikos, perkeliamos iš sveikatos sąnaudų apskaitos: **skelbkite paskirstymo taisykles** (bendros sąnaudos iškreipdavo vieneto skaičius, kol PLICS standartizavo paciento lygio sąnaudų apskaitą – jūsų platformos sąnaudų paskirstymui reikia tokio pat griežtumo); **rinkitės vienetus, kuriais mąsto pirkėjas** (užsakovai perka epizodus, o ne vCPU); ir pateikite vieneto sąnaudas į kiekvieną [ICER](../prieaugio-sąnaudų-efektyvumo-santykis/) ir [biudžeto poveikio](../biudžeto-poveikio-analizė/) modelį kaip autoritetingą sąnaudų vardiklį. DI funkcijoms vienetas yra žetonas – žr. [išvedimo vieneto ekonomika](../išvedimo-vieneto-ekonomika/).

## Spąstai

- **Bendrų sąnaudų ignoravimas**: vieneto kaštai be platformos / saugumo / budėjimo paskirstymų nuvertina 30–50 % ir žlunga audito metu.
- **Tuščiagarbiai vardikliai**: „kaina vienam API iškvietimui“ pataikauja; „kaina vienam užbaigtam paciento epizodui“ informuoja.
- **Vidutinių sąnaudų kainodara ribiniams sprendimams**: komandoms skaičiuojant vidutinį vieneto kaštą už naudojimą, kuris ribiškai nemokamas, skatinamas švaistymo vengimo teatras (NHS šios skatinimo klaidos versiją žr. [nacionalinis tarifas](../nacionalinis-tarifas-ir-vieneto-sąnaudos/)).

## Šaltiniai

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
