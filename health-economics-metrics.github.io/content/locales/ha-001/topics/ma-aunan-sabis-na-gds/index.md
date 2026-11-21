# Ma'aunan Sabis na GDS

Littafin Hidima na Gwamnatin Dijital ta Birtaniya (GDS) yana wajabta KPI huɗu ga kowace hidimar dijital ta gwamnati: **kuɗi ga kowane ciniki, gamsuwar mai amfani, adadin kammalawa, da karɓuwar dijital**. Tare, su ne mafi ƙarancin tattalin arzikin hidimar dijital ta jama'a — kuma samfurin da hidimomin dijital na NHS ke gada.

## Dalilin muhimmancinsa

Ma'aunan GDS suna ɗauke da shari'ar kasuwanci ta sauya tashar da ta ba da kuɗin shekaru goma na dijital na gwamnati: Rahoton Ingancin Dijital ya gano cinikin dijital ~sau 20 mai arha fiye da waya da ~sau 50 mai arha fiye da fuska-da-fuska (alkaluman gwamnatin gida: yanar gizo £0.15, waya £2.83, fuska-da-fuska £8.62). Amma tanadin yana tabbata ne kawai idan mutane suka *kammala* tafiyar dijital (adadin kammalawa) *maimakon* tashar mai tsada (karɓuwa) — KPI huɗun samfurin tattalin arziki ɗaya ne, ba allunan bayanai huɗu ba.

## Lissafin

```
Cost per transaction = total service cost / completed transactions
Completion rate      = completed / started transactions × 100
Digital take-up      = digital transactions / all-channel transactions × 100
User satisfaction    = % satisfied+very satisfied (5-point, in-service survey)

Channel-shift saving = volume × take-up shift × (cost_old_channel − cost_digital)
… minus failure demand: (1 − completion rate) × fallback channel cost
```

## Misali da aka lissafa

Hidimar sarrafa alƙawari ta NHS: cinikai miliyan 2/shekara, a yanzu 70% waya (£3.20/kira) / 30% dijital (£0.25). Sake tsarawa yana ɗaga karɓuwar dijital zuwa 55% da kammalawa daga 84% zuwa 93%:

```
Take-up shift saving = 2M × 0.25 × (3.20 − 0.25) = £1,475,000/year

Failure-demand saving: failed digital journeys fall back to phone
  before: 2M × 0.30 × 0.16 × £3.20 = £307,200
  after:  2M × 0.55 × 0.07 × £3.20 = £246,400
  net £60,800/year — completion improvements protect the take-up gains

Satisfaction is the leading indicator: dissatisfied users revert to phone,
so a satisfaction drop forecasts take-up decay before it appears.
```

## Alaƙa da injiniyancin manhaja

Waɗannan KPI huɗu misali ne na matakin samarwa na [teburin sakamakon kuɗi](../binciken-sakamakon-kuɗi/): ma'aunin kuɗi ɗaya, ma'aunan sakamako uku, ba a taɓa matse su zuwa maki ba. Ga injiniyoyin samfur darussan aiki: **adadin kammalawa matsala ce ta kayan aikin mazubi** (kowane wurin barin ana iya samunsa da gyara); **kuɗi ga kowane ciniki shi ne [tattalin arzikin naúrar gajimare](../tattalin-arzikin-naúrar-gajimare/)** tare da kuɗin tashar da ma'aikata ke taimakawa; **karɓuwa ma'aunin adalci ne a ɓoye** — masu amfani da ba za su iya ko ba sa so su sauya tasha galibi tsofaffi ne, nakasassu, da talakawa, don haka rufe tasha da tsauri yana mayar da "tanadi" zuwa cutar samun dama (duba [isa da adalci](../isa-da-adalci/)). Wallafa KPI (GOV.UK tana yi, ga kowace hidima) hanya ce kanta: bayyana gaskiya tana ladabtar da hasashe kamar yadda binciken [gane fa'idodi](../gane-fa-idodi/) ke yi.

## Tarkuna

- **Karɓuwa ta tilas**: rufe layin waya yana ɗaga karɓuwa kuma yana watsar da buƙatar gazawa a kan ma'aikatan gaba; a auna jimlar kuɗin tsarin.
- **Auna kammalawa daga shafi na 2**: fara mazubi bayan wurin barin yana yabon adadin.
- **Kuɗi ga kowane ciniki ba tare da tallafin dijital mai taimako** da sarrafa buƙatar gazawa ba.
- **Binciken gamsuwa kawai a ƙarshen kammalawa mai nasara** — waɗanda ba su gamsu ba galibi ba sa isa ga binciken.

## Tushe

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
