# Fitar da Amfani ta Musayar Lokaci (TTO)

TTO hanya ce ta ƙa'ida ta fitar da ƙimar amfanin yanayin lafiya kai tsaye daga mai amsawa, maimakon ƙirƙira ɗaya. Yana ɗaya daga cikin hanyoyin fitarwa — tare da standard gamble da gwajin zaɓi mai rarrabuwa — waɗanda ke samar da saitin ƙima a bayan kayan aiki kamar [EQ-5D](../eq-5d/), don haka a bayan yawancin lissafin [QALY](../shekarar-rayuwa-da-aka-daidaita-da-inganci/) na ƙasa.

## Dalilin muhimmancinsa

Kowane nauyin amfani da ke ciyar da lissafin QALY dole ya fito daga wani wuri. TTO shi ne yadda: ga yanayin da ake ganin ya fi mutuwa, ana tambayar mai amsawa shekaru nawa `X` cikin cikakkiyar lafiya zai ɗauka daidai da shekaru `T` a yanayin da ya lalace (`X < T`); amfanin shi ne `X / T`. Ga yanayin da wasu masu amsawa ke ganin ya fi mutuwa muni, dabarar ƙa'ida tana rushewa (ba za ta iya wakiltar amfani ƙasa da sifili da tsafta ba), don haka ana amfani da TTO da aka faɗaɗa. Injiniyan manhaja ko mai bincike da ke ɗaukar nauyin amfani a matsayin shigarwa da aka bayar, ba tare da sanin cewa yana buƙatar ka'idar fitarwa da aka tabbatar don samar da shi ba, yana mataki ɗaya daga lamba da ba zai iya kare ba idan aka ƙalubalance shi.

## Lissafin

```
Standard TTO (state better than death):
  utility = time_in_full_health / time_in_impaired_state

Extended TTO (state worse than death):
  utility = -time_traded_for_death / (total_duration - time_traded_for_death)
```

`time_in_full_health` / `time_in_impaired_state` — shekaru `X` cikin cikakkiyar lafiya da ake ganin daidai da shekaru `T` a yanayin da ya lalace. `time_traded_for_death` / `total_duration` — a tsarin da ya fi mutuwa muni, shekaru `a` na rayuwa ta `T` da suka rage da mai amsawa zai musanya don mutuwa nan take, yana fifita shekaru `T − a` cikin cikakkiyar lafiya sannan mutuwa a kan shekaru `T` a yanayin da ya fi mutuwa muni. Sakamakon mara kyau ne, an ɗaure shi don mutuwa = 0.

## Misali da aka lissafa

**Na ƙa'ida**: mai amsawa yana cikin yanayi da ya lalace shekaru 10 kuma ba ya damuwa da shekaru 7 cikin cikakkiyar lafiya: amfani = 7 / 10 = **0.7**.

**Ya fi mutuwa muni**: a rayuwa ta shekaru 10 da suka rage, mai amsawa zai musanya shekaru 2 don mutuwa nan take — yana fifita shekaru 8 cikin cikakkiyar lafiya sannan mutuwa a kan shekaru 10 a yanayin da ya fi mutuwa muni: amfani = −2 / (10 − 2) = −2 / 8 = **−0.25**.

## Alaƙa da injiniyancin manhaja

Batun da binciken DevEx ko shigar aiki ke cin karo da shi idan ya nemi mutane su ƙididdige wani abu a kan ma'auni na 0–10 da ba a bincika ba yana aiki a nan a akasin haka: TTO yana wanzuwa daidai domin "kawai ka nemi mutane su ƙididdige shi" ba hanyar fitarwa ce da aka tabbatar da kanta ba. Kafin gina ma'auni mai haɗaka — maki na DevEx, ma'aunin shigar aiki, ma'aunin gajiya — a kan lamba da aka ƙididdige da kai, tambayi me ya fitar da ita kuma ko an tabbatar da hanyar, tambaya ɗaya da masana tattalin arzikin lafiya ke yi game da nauyin amfani kafin ya shiga QALY.

## Tarkuna

- **Gama-gari da ƙimar mutum ɗaya**: ana fitar da ƙimar TTO daga *samfurin* jama'a (ko marasa lafiya), ba mutumin da ake yanke shawara kan kulawarsa ba — amfani da ƙimar TTO ta mai amsawa ɗaya kamar tana gama-gari kuskuren samfuri ne.
- **Tsarin da bai dace da yanayi ba**: dabarar TTO ta ƙa'ida tana zaton yanayin ya fi mutuwa a bayyane; amfani da ita ga yanayin da wasu masu amsawa za su ɗauka ya fi mutuwa muni, ba tare da sauya zuwa tsarin da aka faɗaɗa ba, yana samar da amfani mara kyau (mai kyau) a ɓoye.
- **Tsawon lokaci marasa kwatankwacin juna**: ƙimar TTO da aka fitar ta amfani da tsawon rayuwa da ya rage `T` daban don kwatancen da ya fi mutuwa muni ba za a iya kwatanta su kai tsaye ba ba tare da duba cewa ƙirar binciken ta riƙe `T` tsayayye ba.

## Tushe

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
