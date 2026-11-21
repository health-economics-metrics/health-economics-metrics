# Sveikatos požiūriu pakoreguota gyvenimo trukmė (HALE)

HALE yra populiacijos lygio apibendrinimas: metų skaičius, kurį žmogus gali tikėtis gyventi *visiškai sveikas*, neįskaitant ligoje ar negalioje praleistų metų. Pasaulinė HALE gimimo metu buvo apie 61,9 metų, o gyvenimo trukmė – 73,3 (PSO, 2019 m. duomenys) – žmonija paskutinį dešimtmetį vidutiniškai gyvena ne visiškai sveika.

## Kodėl tai svarbu

HALE yra nacionalinės ir pasaulinės sveikatos politikos šiaurinė žvaigždė – „sveiko senėjimo“ tikslų skaitiklis, o jos atskleidžiama spraga (gyvenimo trukmė minus HALE) yra našta, kurią siekia uždaryti prevencija, ankstyva intervencija ir lėtinių ligų valdymas. Ministerijos lygio skaitmeninės sveikatos strategijos pagrindžiamos HALE terminais; programėlių, patikros paslaugų ir stebėsenos programų portfelis galiausiai susumuojamas čia.

## Matematika

Standartinis skaičiavimas yra **Sullivano metodas**:

```
HALE_age_x = Σ (life-table person-years at each age ≥ x × proportion in full health)
             / survivors at age x

"proportion in full health" = 1 − Σ (prevalence_condition × disability weight)
```

Įvestys: standartinė gyvenimo lentelė plius sveikatos būsenų paplitimas ir negalios svoriai (iš Pasaulinės ligų naštos duomenų). HALE susijusi su [DALY](../dėl-negalios-prarasti-gyvenimo-metai/) – populiacijos DALY našta ir HALE spraga yra du to paties prarastos sveikatos vaizdai.

## Išspręstas pavyzdys

Nacionalinė skaitmeninė hipertenzijos programa: 500 000 užregistruotų, vidutinė kraujospūdžio kontrolė pagerėja tiek, kad insulto dažnis sumažėja 0,2 procentinio punkto per metus. Modeliuojant per kohortos gyvenimą, išvengti insultai sutaupo 15 000 pagal negalią pasvertų metų (YLD pagal svorį 0,32 plius YLL iš mirtinų insultų).

```
HALE contribution ≈ 15,000 healthy years / 500,000 people
                  ≈ 0.03 years (≈ 11 days) of HALE per enrolled person
```

Vienuolika dienų skamba mažai – bet populiacijos mastu būtent taip nacionaliniai rodikliai ir juda: ministerijos perka milijonus mažų kiekvieno žmogaus laimėjimų. Ši aritmetika taip pat parodo, kodėl **aprėptis dominuoja**: dvigubai veiksmingesnė intervencija su dešimtadaliu įtraukimo HALE pajudina penkis kartus mažiau. Žr. [aprėptis ir lygybė](../aprėptis-ir-lygybė/).

## Ryšys su programinės įrangos inžinerija

HALE yra parko sveikatos rodiklio šablonas: **tikėtina eksploatavimo trukmė × sveikai praleistos tos trukmės dalis**. Platformos komanda gali apskaičiuoti „sveiko eksploatavimo trukmės lūkestį“ visame savo parke – metus, kuriuos tikimasi veikiančią paslaugą, diskontuotus už laiką, praleistą degradavusioje, atmestoje ar incidento būsenoje (svoriai iš SLO trūkumo). Tai perrėmina patikimumą iš taškinio prieinamumo į viso gyvenimo sveikatą ir nukreipia taisymą į sistemas, tempiančias parko HALE žemyn.

## Spąstai

- **HALE juda lėtai ir daugiapriežastiškai** – jokia atskira intervencija išmatuojamai „nepajudina HALE“; deklaruokite modeliuotą indėlį, o ne nacionalinę statistiką.
- **Paplitimo duomenys vėluoja** metais; naujausi laimėjimai oficialioje HALE nesimatys.
- **HALE lyginimas tarp šalių** su skirtingu sveikatos būsenų matavimu klastingas; naudokite ją išilgai vienoje sistemoje.

## Šaltiniai

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
