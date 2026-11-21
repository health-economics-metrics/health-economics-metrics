# Adadin da Ake Bukatar Bincike (NNS)

NNS shi ne adadin mutanen da dole a bincika — ba kawai a yi wa magani ba — don hana **guda ɗaya** na sakamako mara kyau a cikin ƙayyadadden lokacin bibiya, la'akari da haɗarin tushe na al'umma da raguwar haɗarin dangi da gano da wuri da magani ke samu. Shi ne kwatankwacin NNT a matakin shirin bincike: NNT yana tambaya mutane nawa dole a *yi wa magani* don hana sakamako ɗaya; NNS yana tambaya nawa dole su bi dukan hanyar *bincike-sannan-magani* don kaiwa can.

## Dalilin muhimmancinsa

Rembold ya gabatar da NNS a 1998 musamman don a kwatanta shirye-shiryen bincike a kan tushe ɗaya da magunguna, domin babban raguwar haɗarin dangi na gwajin bincike yana ɓoye abubuwa biyu da na magani ba ya ɓoyewa: haɗarin tushe na al'ummar da aka gayyata bincike, da gaskiyar cewa duk wanda aka bincika yana ɗaukar kuɗin gwajin da nauyin ƙarya mai kyau, ba kaɗan ɗin da za su amfana kawai ba. Ƙofar tasirin kuɗi ta Kwamitin Binciken Ƙasa na Burtaniya (duba [tattalin arzikin gwajin bincike](../tattalin-arzikin-gwajin-bincike/)) an gina ta ne a kan wannan bambanci — shirin bincike mai kyakkyawan raguwar haɗarin dangi a al'umma mai ƙarancin haɗarin tushe na iya samun NNS a dubbai, a lokacin ne kuɗin shirin ga kowane sakamakon da aka hana ya zama ainihin tambaya.

## Lissafin

```
NNS = 1 / (baseline_risk × relative_risk_reduction)

baseline_risk           = probability of the outcome in the screened
                           population over the follow-up period (0–1)
relative_risk_reduction = proportional risk reduction achieved by
                           screening-enabled early treatment (0–1)

Program cost per outcome prevented = NNS × cost_per_screen
```

Kwatanta kai tsaye da [NNT](../adadin-da-ake-bukatar-magani/): NNS yana ɗaukar tasirin dukan mazubin bincike → ganewa → magani cikin lamba ɗaya, yayin da NNT ya riga ya ɗauka an gano majiyyaci kuma yana fara magani.

## Misali da aka lissafa

Al'ummar da shirin bincike ke nufi tana da haɗarin faruwar lamari na 2% a lokacin binciken (`baseline_risk = 0.02`), kuma gano da wuri yana samun raguwar haɗarin dangi na 25% (`relative_risk_reduction = 0.25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

200 people must be screened to prevent one outcome.

At £50 per screen:
Programme cost per outcome prevented = 200 × £50 = £10,000
```

Wannan lambar £10,000 ita ce abin da ya kamata a auna da kuɗin sakamakon kansa da QALY da zai ci — kwatancen da [tattalin arzikin rigakafi](../tattalin-arzikin-rigakafi/) yake yi ga shirye-shiryen rigakafi gaba ɗaya.

## Alaƙa da injiniyancin manhaja

NNS shi ne "masu amfani, abubuwan da suka faru, ko buƙatu nawa dole su bi ta hanyar ganowa ko rarrabawa don kama mai kyau na gaskiya guda ɗaya da ya cancanci mataki" — yana da muhimmanci kai tsaye ga tsarin sa ido da rarrabawa bisa faɗakarwa, inda ƙarancin yawan yanayin da ake nema ke ƙara NNS kamar yadda yake rage ƙimar hasashen mai kyau (duba [tattalin arzikin gwajin bincike](../tattalin-arzikin-gwajin-bincike/) da [tantance AI na asibiti](../tantance-ai-na-asibiti/)). Ƙa'idar sa ido da dole ta sarrafa abubuwa 200 ga kowane kama na gaske ta cancanci gudana ne kawai idan kamawar ta kai aƙalla ninki 200 na kuɗin rarrabawa na kowane abu — lissafi ɗaya da misalin lafiya na sama.

## Tarkuna

- **Watsi da dogaron haɗarin tushe**: gwajin bincike ko shirin ɗaya yana da NNS — da tasirin kuɗi — daban sosai a al'umma mai haɗari mai yawa da mai ƙaranci. Kada ka faɗi NNS ba tare da bayyana al'ummar da aka lissafa shi ba.
- **Ƙirga ma'auni mara kyau**: NNS yana ƙirga mutanen da aka *bincika*, ba waɗanda gwajinsu ya yi kyau ko suka fara magani ba — ya riga ya ƙunshi tasirin dukan mazubin, saboda haka bai kamata a kwatanta shi da ma'aunin da aka ƙirga a kan masu kyau kawai ba.
- **Kwatanta tsakanin lokutan bibiya**: gajeren lokacin bibiya gabaɗaya yana ƙara NNS, domin ana lura da ƙarancin abubuwan da suka faru. Lambobin NNS ana kwatanta su ne kawai idan an lissafa su a tsawon bibiya ɗaya.

## Tushe

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
