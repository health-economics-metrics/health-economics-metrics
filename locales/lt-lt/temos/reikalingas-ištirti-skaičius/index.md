# Reikalingas ištirti skaičius (NNS)

NNS – tai žmonių, kuriuos reikia ištirti – ne tik gydyti – skaičius, kad per apibrėžtą stebėjimo laikotarpį būtų užkirstas kelias **vienam** nepageidaujamam rezultatui, atsižvelgiant į populiacijos bazinę riziką ir santykinį rizikos sumažėjimą, pasiekiamą ankstyvu aptikimu ir gydymu. Tai NNT patikros programos lygio analogas: NNT klausia, kiek reikia *gydyti*, kad būtų išvengta vieno rezultato; NNS klausia, kiek žmonių turi praeiti visą *patikros-ir-tada-gydymo* kelią, kad tai pasiektume.

## Kodėl tai svarbu

Rembold NNS pristatė 1998 m. būtent tam, kad patikros programas būtų galima lyginti tuo pačiu pagrindu kaip gydymą, nes patikros testo antraštinis santykinis rizikos sumažėjimas slepia du dalykus, kurių gydymo nepaslepia: iš tikrųjų pakviestos tikrinti populiacijos bazinę riziką ir tai, kad visi ištirti neša testo kainą ir klaidingai teigiamų rezultatų naštą, o ne tik mažuma, kuri vėliau gauna naudos. JK Nacionalinio patikros komiteto ekonominio efektyvumo vartai (žr. [patikros ekonomika](../patikros-ekonomika/)) pastatyti ant būtent šio skirtumo – patikros programa su įspūdingu santykiniu rizikos sumažėjimu mažos bazinės rizikos populiacijoje vis tiek gali turėti NNS tūkstančiais, ir tada programos kaina už išvengtą rezultatą tampa tikru klausimu.

## Matematika

```
NNS = 1 / (baseline_risk × relative_risk_reduction)

baseline_risk           = probability of the outcome in the screened
                           population over the follow-up period (0–1)
relative_risk_reduction = proportional risk reduction achieved by
                           screening-enabled early treatment (0–1)

Program cost per outcome prevented = NNS × cost_per_screen
```

Tiesiogiai palyginkite su [NNT](../reikalingas-gydyti-skaičius/): NNS į vieną skaičių įtraukia visos patikros → diagnozės → gydymo piltuvo veiksmingumą, o NNT jau prielaidauja, kad pacientas diagnozuotas ir pradeda gydymą.

## Išspręstas pavyzdys

Patikros programos tikslinės populiacijos bazinė įvykio rizika per tyrimo laikotarpį yra 2 % (`baseline_risk = 0.02`), o ankstyvas aptikimas pasiekia 25 % santykinį rizikos sumažėjimą (`relative_risk_reduction = 0.25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

200 people must be screened to prevent one outcome.

At £50 per screen:
Programme cost per outcome prevented = 200 × £50 = £10,000
```

Tą 10 000 £ skaičių reikėtų svarstyti prieš paties rezultato kainą ir QALY, kuriuos jis būtų kainavęs – tas pats palyginimas, kurį [prevencijos ekonomika](../prevencijos-ekonomika/) daro prevencijos programoms apskritai.

## Ryšys su programinės įrangos inžinerija

NNS – tai „kiek vartotojų, įvykių ar užklausų turi praeiti aptikimo ar triažo srautą, kad pagautume vieną tikrą teigiamą atvejį, vertą veiksmo“ – tiesiogiai aktualu perspėjimais pagrįstai stebėsenai ir triažo sistemoms, kur mažo paplitimo tikslinė būklė išpučia NNS taip pat, kaip sugriauna teigiamą prognostinę vertę (žr. [patikros ekonomika](../patikros-ekonomika/) ir [klinikinio DI vertinimas](../klinikinio-di-vertinimas/)). Stebėsenos taisyklė, kuriai reikia apdoroti 200 įvykių vienam tikram pagavimui, verta vykdyti tik jei pagavimas vertas bent 200 kartų daugiau nei vieno įvykio triažo kaina – identiška aritmetika kaip aukščiau pateiktame sveikatos priežiūros išspręstame pavyzdyje.

## Spąstai

- **Bazinės rizikos priklausomybės ignoravimas**: tas pats patikros testas ar programa turi labai skirtingą NNS – ir ekonominį efektyvumą – didelės rizikos populiacijoje, palyginti su mažos rizikos. Niekada necituokite NNS nenurodę populiacijos, kuriai jis apskaičiuotas.
- **Netinkamo vardiklio skaičiavimas**: NNS skaičiuoja *ištirtus* žmones, o ne tuos, kurių testas teigiamas ar kurie pradeda gydymą – jis jau įterpia viso piltuvo veiksmingumą, todėl niekada neturėtų būti lyginamas su rodikliu, skaičiuojamu tik teigiamiems.
- **Palyginimas tarp skirtingų stebėjimo laikotarpių**: trumpesnis stebėjimo laikotarpis paprastai išpučia NNS, nes lange stebima mažiau įvykių. NNS skaičiai palyginami tik tada, kai apskaičiuoti per tą pačią stebėjimo trukmę.

## Šaltiniai

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
