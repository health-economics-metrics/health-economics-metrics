# Pasirengimo mokėti slenksčiai

Pasirengimo mokėti (WTP) slenkstis – tai didžiausia suma, kurią sprendimų priėmėjas sutinka mokėti už sveikatos prieaugio vienetą, – linija, paverčianti [ICER](../prieaugio-sąnaudų-efektyvumo-santykis/) sprendimu priimti ar atmesti.

## Kodėl tai svarbu

Slenkstis yra vieta, kur sveikatos ekonomika nustoja būti matavimu ir tampa politika. Kiekviena nacionalinė sistema jį turi, aiškų ar numanomą, o žinant vietinį skaičių tiksliai aišku, kaip įkainoti sveikatos vertės teiginį:

| Institucija | Slenkstis (kaip ištirta, 2024–2025 m.) |
|---|---|
| NICE (Anglija) | 20 000–30 000 £ už QALY; empirinis vidutinis sprendimų slenkstis ≈ 24 400 £ (2022–24 m.); sunkumo modifikatoriai kelia efektyvią ribą iki ~36–51 tūkst. £; labai specializuotos technologijos iki 100 tūkst. £+ |
| ICER (JAV, nevyriausybinis) | 100 000–150 000 USD už QALY/evLYG kainų orientyrai; ataskaitose 50–200 tūkst. USD intervalas |
| Kanada (CADTH / CDA-AMC) | ≈ 50 000 CAD už QALY darbinis slenkstis |
| WHO-CHOICE (istorinis, pasaulinis) | 1–3 × BVP vienam gyventojui už išvengtą DALY (dabar nerekomenduojama kaip pernelyg grubus) |
| Empirinė JK pasiūlos pusė (Claxton ir kt.) | ≈ 13 000 £ už QALY, iš tikrųjų išstumiamą NHS ribinėje srityje |

## Matematika

Slenkstis λ įeina į kiekvieną sprendimo taisyklę:

```
Adopt if ICER = ΔC/ΔE < λ
Equivalently: adopt if NMB = λ×ΔE − ΔC > 0
```

Dvi teorijos, kas yra λ:

- **Paklausos pusė**: kiek visuomenė pasirengusi mokėti už sveikatą (vertybinis sprendimas).
- **Pasiūlos pusė**: sveikata, kurią biudžetas šiuo metu sukuria ribinėje srityje (empirinis dydis – Claxton ~13 tūkst. £/QALY). Jei sprendimams naudojamas λ viršija pasiūlos pusės santykį, naujos technologijos patvirtinimas išstumia daugiau sveikatos, nei prideda.

## Išspręstas pavyzdys

Jūsų skaitmeninis terapinis sprendimas suteikia 0,05 QALY vienam gydomam pacientui, grynosios kainos (kaina minus kompensacijos) 800 £.

```
ICER = 800 / 0.05 = £16,000 per QALY
```

- Anglija: žemiau 20 tūkst. £ → finansuotina. Didžiausia pagrįsta kaina: kai λ = 20 000 £, price_max = 0,05 × 20 000 + kompensacijos = 1 000 £ + kompensacijos.
- JAV komercinis požiūris esant 150 tūkst. USD/QALY: verte grįsta kaina gerokai didesnė.
- Šalies, kurios BVP vienam gyventojui slenkstis 4 000 USD: tas pats produktas turi kainuoti mažiau nei ~200 USD grynąja verte.

Tas pats produktas, trys rinkos, trys kainos – slenkstis *yra* kainodaros modelis. Tai verte grįsta kainodara, paleista atvirkščiai nuo λ.

## Ryšys su programinės įrangos inžinerija

Kiekviena inžinerijos organizacija turi numanomą λ: slenkstį, kurį pasiekus ji finansuoja įrankius už sutaupytą inžinieriaus valandą. Padarius jį aiškų – „finansuojame viską, kas pigiau nei 40 £ už patikimai sutaupytą inžinieriaus valandą“ – galima lyginti platformų investicijas lentelėse, lygiai taip, kaip kaina-už-QALY lentelės reitinguoja sveikatos išlaidas. Pasiūlos pusės pamoka taip pat perkeliama: jūsų tikrasis vidinis λ yra tai, ką jūsų *dabartinis* atsilikimas sukuria ribinėje srityje, o ne tai, kiek vadovybė sako vertinanti laiką.

## Spąstai

- **Slenksčių rinkimasis** tarp jurisdikcijų arba HST ribos citavimas paprastam produktui.
- **λ laikymas kainos apačia**: slenksčio pasiekimas yra būtina, bet nepakankama sąlyga – [biudžeto poveikis](../biudžeto-poveikio-analizė/) vis tiek gali nuskandinti vienetui prieinamą produktą.
- **Nepaisymas, kad slenksčiai keičiasi**: NICE sunkumo modifikatoriai (2022 m.) ir periodinės peržiūros keičia efektyvų λ; datuokite savo teiginius.
- **ICER lyginimas su slenksčiu kita valiuta be konvertavimo**: žr. [ICER palyginimas skirtingomis valiutomis](../icer-palyginimas-skirtingomis-valiutomis/) – konvertavimo metodas (perkamosios galios paritetas ar rinkos valiutų kursas) yra metodologiškai reikšmingas, o ne apvalinimo detalė.
- **λ pagrįsto vertinimo painiojimas su darbo rinkos VSL/VPF tradicija**: jos kyla iš skirtingų teorinių tradicijų (sveikatos biudžeto ribojamos metodologijos ir atskleistų pirmenybių iš darbo užmokesčio ir rizikos kompromisų) ir ne visada suderinamos – alternatyvų atskleistų pirmenybių požiūrį į gyvybės vertinimą žr. [Statistinio gyvenimo vertė](../statistinio-gyvenimo-vertė/).

## Šaltiniai

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
