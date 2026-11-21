# Rage Daraja da Fifikon Lokaci

Rage daraja yana mayar da kuɗi da fa'idodin nan gaba zuwa darajojin yanzu, domin fa'ida a yau tana da daraja fiye da fa'ida ɗaya bayan shekaru biyar.

## Dalilin muhimmancinsa

Kowane tantancewar tattalin arzikin lafiya da kowace shari'ar kasuwanci mai tsanani ta ɓangaren jama'a tana rage darajar kwararar shekaru da yawa. Green Book na HM Treasury na Birtaniya yana wajabta kashi 3.5% na shekara na fifikon lokaci na al'umma; ƙa'idar tunani ta NICE tana rage daraja kuɗi da tasirin lafiya duka a 3.5% a kowace shekara (da kashi 1.5% na ƙa'idar da ba ta tunani ba ga magungunan kusa-da-warkewa masu fa'ida sama da shekaru 30). Idan shari'ar kasuwancin manhajarka tana da'awar "tanadin fam miliyan 5 cikin shekaru 10," mai dubawa na kuɗi zai nemi lambar da aka rage darajarta nan take.

## Lissafin

Darajar yanzu ta adadin nan gaba:

```
PV = FV / (1 + r)^t

PV = present value
FV = future value in year t
r  = discount rate (NICE/Green Book: 0.035)
t  = years from now
```

Don fa'ida ta shekara mai tsayayye B a tsawon shekaru n (annuity):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Misali da aka lissafa

Manhajarka tana adana wa asusun asibiti na NHS £100,000 a shekara cikin shekaru 5, tana farawa shekara ɗaya bayan ƙaddamarwa.

Jimla ba tare da rage daraja ba: £500,000.

An rage daraja a 3.5%:

```
Year 1: 100,000 / 1.035^1 = £96,618
Year 2: 100,000 / 1.035^2 = £93,351
Year 3: 100,000 / 1.035^3 = £90,194
Year 4: 100,000 / 1.035^4 = £87,144
Year 5: 100,000 / 1.035^5 = £84,197

Total PV ≈ £451,505
```

Kanun labarai na gaskiya kusan £451,000 ne, ƙasa da jimlar maras zurfi da kusan 10%. Yanzu a ɗauka isarwa ta jinkirta da shekara ɗaya: kowace kalma tana ƙaura shekara ɗaya daga baya, kuma PV ta faɗi zuwa kusan £436,000 — ra'ayin [kuɗin jinkiri](../kuɗin-jinkiri/) ta fuskar rage daraja.

## Alaƙa da injiniyancin manhaja

- **Biyan bashin fasaha da ƙaurar dandamali** suna alƙawarin kwararar fa'ida shekaru masu zuwa; a rage darajarsu kafin a kwatanta da aikin da ke biya a wannan kwata.
- **Kuɗi a gaba, fa'ida a baya** shi ne daidaitaccen siffar ƙaura. Rage daraja yana hukunta wannan siffar, daidai: yana ƙayyade farashin lokacin da ba shi da haɗari na ɗaukar ƙarfi yanzu don daraja nan gaba.
- **Da'awar "tanadi a shekara ta 5"** tana buƙatar shakku sau biyu — duka an rage darajarsu sosai kuma ba su da tabbas sosai (duba [binciken jin canji](../binciken-jin-canji/)).

## Tarkuna

- **Rage daraja kuɗi amma ba fa'idodi ba** (ko akasin haka) — ƙa'idar tunani tana rage daraja duka biyun, a ƙima ɗaya.
- **Amfani da ƙimar kasuwanci (8–12%) a shari'ar ɓangaren jama'a**, ko 3.5% a ta masu jari. A daidaita ƙimar da mai yanke shawara.
- **Rikita rage daraja da hauhawar farashi.** Rage daraja yana shafar darajojin *gaske* (da aka daidaita da hauhawar farashi); kar a yi duka biyun a ɓoye.

## Tushe

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
