# Neatvykimo į vizitą (DNA) rodiklis

DNA rodiklis – tai procentas užsakytų vizitų, į kuriuos pacientas nei atvyksta, nei atšaukia. Už gydytoją, kabinetą ir laiko tarpą sumokėta; nieko neįvyksta. Tai gryniausias švaistymo rodiklis sveikatos priežiūroje – ir vienas lengviausiai programine įranga taisomų.

## Kodėl tai svarbu

NHS England duomenys (2019): praleisti šeimos gydytojo vizitai viršija 15 mln. per metus po ~30 £ – daugiau nei **216 mln. £ per metus** – o ligoninių ambulatorinių neatvykimų būna ~8 mln. per metus (~6,4 % vizitų), vidutiniškai ~**160 £** už praleistą laiko tarpą. Kadangi priminimo ribinė kaina yra kapeikos, o susigrąžinta vertė – visiškai aprūpintas klinikinis laiko tarpas, DNA mažinimas turi vieną geriausių ROI aritmetikų skaitmeninėje sveikatoje, todėl SMS priminimai, lengvas perregistravimas ir prognozuojamas perteklinis registravimas buvo tarp pirmųjų įrodytų skaitmeninės sveikatos laimėjimų.

## Matematika

```
DNA rate = DNAs / booked appointments × 100

Value of reduction = appointments × ΔDNA rate × value per recovered slot

value per recovered slot: the slot is refilled (activity value / waiting-list
reduction) or it is not (staff time partially reusable) — mechanism matters,
as with bed-days-saved.md.
```

## Išspręstas pavyzdys

Ambulatorinis skyrius: 200 000 vizitų per metus, DNA rodiklis 8 %. Priminimų ir perregistravimo paslauga (SMS su vieno paspaudimo perregistravimu, transporto informacija, prieinamais formatais) sumažina DNA iki 5,5 %.

```
Recovered slots = 200,000 × 0.025 = 5,000/year
Refilled from the waiting list at ~£160 average outpatient value:
  5,000 × £160 = £800,000/year of recovered activity
Service cost: 200,000 × £0.40 = £80,000/year

Return ≈ 10:1, plus 5,000 waiting-list patients seen sooner
(see waiting-list-impact.md and referral-to-treatment.md).
```

Poveikio dydis (2,5 punkto) realistiškas: priminimų RCT nuosekliai rodo 25–40 % santykinį DNA sumažėjimą.

## Ryšys su programinės įrangos inžinerija

- **Tai planavimo sistemų problema**: priminimai, savitarnos perregistravimas, automatinis laukimo sąrašo užpildymas po atšaukimų ir neatvykimo prognozės modeliai, valdantys tikslinį perteklinį registravimą. Kiekvienas yra įprasta programinės įrangos inžinerija su neįprastai aiškia ekonomine byla.
- **Inžinerinis analogas**: neatvykimai į rezervuotus pajėgumus – užsakyti, bet laisvi CI laiko tarpai, rezervuoti debesijos pajėgumai, posėdžių kambariai, pokalbių komisijos. Ekonomika perkeliama: pigus automatinis paraginimas (ar automatinis nepanaudotų rezervacijų atleidimas) susigrąžina brangius įsipareigotus pajėgumus.
- **Prognozavimo etikos preliudija**: neatvykimo modeliai, apmokyti pagal lankomumo duomenis, koduoja nepriteklių ir prieigos kliūtis; juos naudojant tikėtiniems neatvykėliams *nustumti į pabaigą* nelygybė didėja, o naudojant lankomumui *palaikyti* (transporto pagalba, telefoninės alternatyvos) – mažėja. Žr. [aprėptis ir lygybė](../aprėptis-ir-lygybė/).

## Spąstai

- **Atšaukto ir perregistruoto vizito skaičiavimas kaip susigrąžintos vertės du kartus.**
- **Susigrąžintų laiko tarpų, kurie neužpildomi, vertinimas** – tuščias laiko tarpas, kuriam išsiųstas priminimas, vis tiek tuščias.
- **DNA vaikymasis iki nulio**: paskutiniai DNA punktai yra pacientai, susiduriantys su tikromis kliūtimis; baudžiamosios priemonės (išrašymas po N DNA) sumažina rodiklį, apleisdamos pacientus.

## Šaltiniai

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- DNA cost summaries. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
