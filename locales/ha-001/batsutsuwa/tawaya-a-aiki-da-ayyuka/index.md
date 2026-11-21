# Tawaya a Aiki da Ayyuka (WPAI)

WPAI takardar tambayoyi ce ta rahoton kai da aka tabbatar (Reilly, Zbrozek, Dasbach, 1993) da ke auna yawan tasirin matsalar lafiya ga aiki mai albashi da ayyukan yau da kullum, yawanci a cikin kwanaki 7 da suka wuce. Yana raba asara zuwa *rashin zuwa aiki* — lokacin aiki da aka rasa a zahiri — da *zuwa aiki amma da ƙarancin ƙwazo* — ƙarancin ƙwazo yayin da yake jiki a wurin aiki — kuma na biyun yawanci shi ne ɓangaren kuɗi mafi girma kuma mafi ɓoye.

## Dalilin muhimmancinsa

Ƙirga kwanakin rashin lafiya masu sauƙi yana ganin rashin zuwa aiki kawai. Likita ko ma'aikacin ilimi da ba ya taɓa ɗaukar hutu amma yana aiki a ƙarfin 60% cikin yanayi na dindindin yana ba da sifili ga rajistar rashin zuwa yayin da yake haifar da babbar asarar ƙwazo ta gaske — an ƙera WPAI musamman don bayyana wannan kuɗi marar gani. Domin kayan aiki ne da aka tabbatar ba bincike na musamman ba, ana iya amfani da makinsa a cikin fakitin shaidar [sakamakon da marasa lafiya suka bayar](../sakamakon-da-marasa-lafiya-suka-bayar/) da binciken kuɗin rashin lafiya ba tare da mai bita ya buƙaci sake tabbatar da ma'aunin ba. A matsayin kayan aikin rahoton kai, shi kansa nau'in PROM ne, wanda ke bambanta ta mayar da hankali kan aiki da ayyuka maimakon alamomi ko ingancin rayuwa.

## Lissafin

```
Absenteeism % = hours_missed_due_to_health / (hours_missed_due_to_health + hours_worked) × 100

Presenteeism %  = self-rated 0–10 impairment while working, × 10
                  (elicited directly via questionnaire, not derived here)

Overall Work Impairment % =
    Absenteeism% + (1 − Absenteeism%/100) × Presenteeism%
    (combines the two so the total can never exceed 100%)

Productivity cost = Overall Work Impairment% / 100 × period_earnings
```

Dabarar tawaya gabaɗaya da gangan ba tara mai sauƙi ba ce: ƙara kashi biyun kai tsaye zai iya wuce 100%, don haka ana amfani da zuwa-aiki-da-ƙarancin-ƙwazo ga ragowar (marar rashin zuwa) kason lokacin aiki kawai.

## Misali da aka lissafa

Ma'aikaci mai ciwon kai na migraine ya ba da rahoton an tsara masa mako na sa'o'i 40 amma ya rasa sa'o'i 4 daga ciki:

```
hours_missed = 4, hours_worked = 36
Absenteeism% = 4 / (4 + 36) × 100 = 10%
```

Daban, yana ƙididdige tasirin ƙwazonsa yayin aiki a matsayin 3 cikin 10 a takardar tambayoyin WPAI, wato `Presenteeism% = 30%` (wannan mataki amsar takarda ce ta ɗanyen abu, ba abin da aka samo daga wasu lambobi ba):

```
Overall Work Impairment% = 10 + (1 − 10/100) × 30
                          = 10 + 0.9 × 30
                          = 10 + 27
                          = 37%
```

A mako na kwanaki 5 da ake samun £800 (£160/rana):

```
Productivity cost = 37/100 × 800 = £296
```

Lura cewa ƙirga kwanakin rashin lafiya masu sauƙi zai rubuta sa'o'i 4 (10%) da aka rasa kawai — ɓangaren zuwa-aiki-da-ƙarancin-ƙwazo yana kusan ninka tawayar ta gaskiya sau uku da zarar an ƙirga shi.

## Alaƙa da injiniyancin manhaja

Wannan yana taswira kai tsaye a kan ma'aunan lafiyar ƙungiyar injiniya:

- **Rashin zuwa aiki** shi ne hutun rashin lafiya da PTO — a bayyane, an riga an bi diddiginsa, kuma ɓangaren mai sauƙi.
- **Zuwa-aiki-da-ƙarancin-ƙwazo** shi ne injiniyan da ya gaji ko ya cika da sauya mahalli wanda ke halarta kowane stand-up yana aiki a ƙaramin ƙarfi — yawanci mafi girman kuɗi kuma mafi ɓoye, kuma ba a gani a bayanan ma'aikata ko halarta ba. Yana bayyana a maimakon haka a matsayin ƙarancin kayan aiki a [DORA](../ma-aunan-dora/) da [ma'aunan gudana](../ma-aunan-gudana/), ko a matsayin jinkirin warware [bashin fasaha](../bashin-fasaha/) da "ribarsa" ke ƙara tawayar.
- Darasin injiniya iri ɗaya ne da na asibiti: auna rashi kawai a kira shi "asarar ƙwazo" yana rage kuɗin gaske a tsari, domin yana rasa duk wanda yake nan amma ya lalace.

## Tarkuna

- **Son zuciya na tunawa a rahoton kai.** Tagar tunawa ta kwanaki 7 tana fuskantar ɓarna ta bayar da rahoto iri ɗaya da kowane rahoton kai na baya.
- **Ɗaukar ma'aunin 0–10 na zuwa-aiki-da-ƙarancin-ƙwazo a matsayin ainihin aunawa ta zahiri.** Na jere ne, an fitar da shi ta ƙididdige kai, ba adadi na zahiri da aka tabbatar ba — ɗaukar bambance-bambance a kai a matsayin layi ko tazara tsantsa sauƙin ƙira ne, ba gaskiyar zahiri da aka tabbatar ba.
- **Haɗa maki a faɗin bambance-bambancen WPAI.** WPAI yana da nau'o'i da dama na takamaiman yanayi — WPAI:GH (lafiya gabaɗaya), WPAI:SHP (takamaiman matsalar lafiya), da bambance-bambance na takamaiman cuta — kuma bai kamata a haɗa ko a kwatanta makin nau'o'i daban-daban ba tare da fara tabbatar da suna da sigar kayan aiki ɗaya ba.

## Tushe

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI instrument documentation, Reilly Associates — the official scoring reference. <https://www.reillyassociates.net/>
