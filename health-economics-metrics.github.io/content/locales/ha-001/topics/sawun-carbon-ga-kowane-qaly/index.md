# Sawun Carbon ga Kowane QALY

Carbon ga kowane QALY rabon inganci ne — hayaƙin carbon na shiga tsakani (ko hayaƙin da aka kauce wa) da aka raba da QALY da yake bayarwa — makamancin kuɗi ga kowane QALY kai tsaye, yana ba da damar tantance ingancin carbon na shiga tsakani tare da ingancin kuɗinsa. "Ribar kuɗi net da aka daidaita da carbon" tana tafiya mataki gaba, tana mayar da tasirin carbon zuwa kuɗi ta amfani da ƙimar carbon na hukuma marasa ciniki na Green Book na Birtaniya da kuma rage shi daga [ribar kuɗi net](../ribar-kuɗi-net/) ta al'ada.

## Dalilin muhimmancinsa

NICE da NHS England yanzu suna tsammanin a yi la'akari da tasirin muhalli tare da kuɗi da QALY. NHS tana da alƙawarin sifili-net na jama'a: sifili-net ga hayaƙinta kai tsaye zuwa 2040, da sifili-net ga cikakken sawun sarkar samar da kayanta zuwa 2045. Littafin tantance fasahar lafiya na NICE (PMG36) yana ambaton dorewar muhalli a matsayin abin la'akari mai tasowa a tantance fasaha. Ga samfurin lafiyar dijital, wannan na nufin carbon yana zama ginshiƙi na huɗu na shari'ar daraja, tare da kuɗi, QALY, da [mamaya a kan iyakar inganci](../mamaya-da-iyakar-inganci/) — ba maye gurbin ɗayansu ba, amma girman da kyakkyawar shari'ar kasuwanci ke ƙara buƙatar bayar da rahoto a kai.

## Lissafin

```
Carbon per QALY = total_emissions_tonnes_co2e / total_qalys
  (a negative value means net emissions AVOIDED per QALY gained — a
  double win: better health and lower carbon)

Monetized carbon impact = emissions_tonnes_co2e × carbon_value_per_tonne
  (negative emissions × positive value = a negative cost, i.e. a benefit)

Carbon-adjusted NMB = net_monetary_benefit − monetized_carbon_impact
```

Wannan yana faɗaɗa manufar iyakar inganci ta kuɗi/QALY da gatari na biyu — carbon ga kowane QALY — dabarar "a zana kowane zaɓi a ga abin da aka mamaye" iri ɗaya da [mamaya da iyakar inganci](../mamaya-da-iyakar-inganci/), da aka shafa ga carbon maimakon kuɗi.

## Misali da aka lissafa

Sabis na telehealth yana maye gurbin ziyarar kai-tsaye, yana kauce wa tafiye-tafiyen mota 5,000/shekara a kusan 8kg CO2e kowanne — tan 40 na CO2e da aka kauce wa, wanda aka wakilta a matsayin lambar hayaƙi mara kyau (−40.0 tan), kuma yana bayar da QALY 25/shekara:

```
Carbon per QALY = −40.0 / 25.0 = −1.6 tonnes CO2e avoided per QALY gained
```

Ta amfani da ƙimar carbon marar ciniki ta Green Book (lamba ta misali, ƙimar tsakiya ta marasa ciniki ta 2023 ≈ £269/tan CO2e — Green Book tana sabunta ƙimar carbon kowace shekara, a sake tabbatarwa kafin ambaton a binciken zahiri):

```
Monetized carbon impact = −40.0 × £269 = −£10,760
```

"Kuɗi" na −£10,760 fa'ida ce ta £10,760. Idan ribar kuɗi net ta shiga tsakanin ita kaɗai £500,000:

```
Carbon-adjusted NMB = £500,000 − (−£10,760) = £510,760
```

Ajiyar carbon tana ƙara wa shari'ar maimakon ragewa — nasara biyun da tsarin hayaƙi mara kyau aka nufa ya bayyana.

## Alaƙa da injiniyancin manhaja

Wannan haɗuwa ce ta yanzu da tattalin arzikin AI/gajimare: sawun carbon na lissafi na horar da gudanar da samfurin AI yanzu layin kuɗi ne na gaske a sayen NHS, tun da kwangilolin masu samar da NHS sama da wasu iyakoki suna buƙatar Carbon Reduction Plan. [Tattalin arzikin naúrar gajimare](../tattalin-arzikin-naúrar-gajimare/) ya riga ya bi kuɗi ga kowace naúrar fitarwar lissafi; carbon ga kowane QALY shi ne samfurin dabi'a na ma'aunin "kuɗin carbon ga kowane hasashe" na nan gaba da zai faɗaɗa wannan ɓangaren da tattalin arzikin naúrar hasashe zuwa girman muhalli, ko da yake wannan ma'aunin bai wanzu ba tukuna.

## Tarkuna

- **Wasan iyakar fage**: ƙidaya hayaƙin kai tsaye (Scope 1) kawai da barin hayaƙin sarkar samarwa (Scope 3), wanda yawanci shi ne mafi yawa ga ainihin sawun samfurin lafiyar dijital.
- **Amfani da ƙimar carbon ta da ta tsufa**: Green Book tana sabunta ƙimar carbon marasa ciniki kowace shekara, don haka duk lambar £/tan da aka ambata dole a ranace ta, ba a faɗe ta a matsayin tsayayyen ƙima ba.
- **Ɗaukar "mai ingancin carbon" a matsayin maye gurbin "mai tasirin kuɗi"**: shiga tsakani mai ƙarancin carbon da ƙarancin daraja har yanzu rashin amfani ne mai kyau na albarkatun NHS. Carbon ginshiƙi ne na huɗu tare da kuɗi da QALY, ba maye gurbin ɗayansu ba.

## Tushe

- NHS England, "Delivering a Net Zero National Health Service" (2020, updated 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (updated annually; non-traded central value ≈ £269/tCO2e, 2023 — date any citation). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
