# Vokietijos DiGA greitasis kelias

DiGA (Digitale Gesundheitsanwendungen) – Vokietijos įstatymais nustatytas „programėlių pagal receptą“ kelias – pirmoji pasaulyje nacionalinė sistema, kurioje gydytojai skiria patvirtintas sveikatos programėles, o privalomasis draudimas privalo jas kompensuoti. Tai pirmaujantis veikiantis eksperimentas, kaip nacionaliniu mastu mokėti už skaitmenines terapijos priemones.

## Kodėl tai svarbu

DiGA į klausimą, kurį užduoda kiekviena skaitmeninės sveikatos įmonė – „kas iš tikrųjų mokės?“ – atsakė teisės aktu (DVG, 2019). Dizainas nepaprastas:

- **Greitas sprendimas**: BfArM (reguliatorius) privalo apsispręsti per 3 mėnesius.
- **Laikinas įtraukimas**: programėlės gali būti įtrauktos 12 mėnesių *dar generuodamos įrodymus* – uždirbdamos pajamas per savo pagrindinį tyrimą.
- **Įrodymų terminas**: įrodykite „teigiamą poveikį sveikatos priežiūrai“ (medicininė nauda arba pacientui reikšmingas struktūrinis / procedūrinis pagerinimas) lyginamuoju tyrimu – paprastai RCT – arba būsite išbraukti. Maždaug pusė laikinų įrašų nepasiekia nuolatinio.
- **Kainodara**: gamintojas pirmųjų metų kainą nustato laisvai; vėliau ji deramasi su draudikų federacija. Mediana pradinės 3 mėnesių kainos apie 500 €; veiklos rezultatais pagrįsti kainodaros elementai atsiras nuo 2026 m.

Rinkos realybės patikra (tyrimai iki 2024 m. pabaigos): ~68 įtrauktos programėlės, >1 mln. kaupiamųjų receptų, ~81 % receptų aktyvuota, ~234 mln. € kaupiamųjų draudikų išlaidų – tikra rinka, bet kukli palyginti su šurmuliu, o laikymasis po aktyvavimo lieka silpnoji vieta.

## Matematika

Komercinis modelis, kurį skaičiuoja kiekvienas DiGA steigėjas:

```
Revenue = prescriptions × activation rate × price per prescription period
Evidence cost = pivotal RCT (typically €1M–3M) within the 12-month window
Expected value = P(evidence succeeds) × steady-state revenue − evidence cost

With ~50% conversion failure, P must be honestly assessed — half the field
spends the RCT money and loses the listing.
```

## Išspręstas pavyzdys

Depresijos valdymo programėlė laikinai įtraukiama po 450 € per ketvirtį:

```
Year 1: 20,000 prescriptions × 81% activation × €450 ≈ €7.3M revenue
RCT cost: €2M, running concurrently
Outcome A (evidence positive): permanent listing, negotiated price ~€380,
  steady state 60,000 scripts/yr ≈ €18.5M/yr
Outcome B (evidence fails): delisted at month 12; revenue stops.
```

Laikini metai finansuoja įrodymų generavimą – pagrindinė kelio naujovė. Palyginkite su tradicine seka (pirma įrodymai, pajamos po daugelio metų), kuri badu marina būtent tuos produktus, kuriuos DiGA nori turėti.

## Ryšys su programinės įrangos inžinerija

DiGA modelis – **laikinas priėmimas su iš anksto užregistruotu sėkmės rodikliu ir automatišku pabaigos terminu** – tiesiogiai kopijuojamas inžinerijos įrankių valdymui: išleiskite įrankį gamybos vartotojams 12 mėnesių, iš anksto užregistruokite rodiklį (išmatuotas sutaupytas laikas, incidentų sumažėjimas), automatiškai nutraukite, nebent įrodymai pasirodys. Tai išsprendžia bandomojo projekto paradoksą (įrankiai, kuriems reikia mastelio vertei įrodyti, niekada negauna mastelio) neteikiant nuolatinės teisės neįrodytai technologijai. 81 % aktyvavimo / mažo laikymosi duomenys taip pat turi produkto pamoką: receptas (ar vadovybės nurodymas) duoda įdiegimus; tik produkto kokybė duoda ilgalaikį naudojimą – žr. [laikymasis ir tęstinumas](../laikymasis-ir-tęstinumas/).

## Spąstai

- **Įtraukimo laikymas finišo linija** – receptai reikalauja skirtojo gydytojo pasitikėjimo; daugelis įtrauktų DiGA mato nežymų apimtį.
- **Pagrindinio tyrimo per mažos galios planavimas**, taupant pajamų metais – klaidingas taupymas, paaiškinantis didelę dalį 50 % nesėkmių.
- **Modelio perkėlimas be mokėtojo**: DiGA veikia, nes kompensavimas yra įstatyminis; kopija be privalomo mokėjimo tėra bandomoji programa.

## Šaltiniai

- Analysis of the DiGA market, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- DiGA pricing trends, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>
