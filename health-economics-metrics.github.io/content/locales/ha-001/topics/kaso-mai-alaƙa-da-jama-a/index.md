# Kaso Mai Alaƙa da Jama'a (PAF)

PAF shi ne rabon nauyin cuta ko sakamako a cikin al'umma da ake danganta shi da takamaiman fallasa ga abin haɗari — kason da zai ɓace idan an cire fallasar gaba ɗaya. Yana mayar da "wannan abin haɗari yana ninka damarka" zuwa lambar matakin al'umma da kwamishina zai iya tsarawa a kai: yawan lamura, da nawa kuɗi, fallasa ɗaya ta cancanci bi.

## Dalilin muhimmancinsa

Levin ya gabatar da PAF a 1953 don amsa tambaya kaɗan kuma tabbatacciya: idan ba wanda ya sha taba, ciwon daji na huhu nawa zai ɓace? Lissafin ɗaya yanzu yana ƙididdige tsarin rigakafi na ƙasa a ko'ina daga dabarun taba da kiba zuwa jerin abubuwan haɗari na binciken Nauyin Cututtuka na Duniya na WHO, domin haɗarin dangi shi kaɗai ba ya cewa komai game da tasiri — abin haɗari na iya ninka damar lamari mai wuya kuma ya yi ƙaramin motsi ga nauyin cuta na al'umma, ko ya ɗaga damar lamari na gama-gari kaɗan amma har yanzu ya ɗauki babban kaso na lamura. PAF shi ne abin da ke mayar da "abin haɗari X yana da haɗari" zuwa "cire abin haɗari X zai hana lamura nawa a shekara," lambar da shari'ar kasuwanci ta shirin rigakafi ke buƙata da gaske. Duba [tattalin arzikin rigakafi](../tattalin-arzikin-rigakafi/) don abin da yake kashewa don aiki a kan wannan lamba da zarar kana da ita.

## Lissafin

```
PAF = prevalence_exposed × (relative_risk − 1) / (1 + prevalence_exposed × (relative_risk − 1))

prevalence_exposed = fraction of the population exposed to the risk factor (0–1)
relative_risk      = risk of the outcome in exposed vs. unexposed people (e.g. 2.5 = 2.5×)

Cases attributable = total_cases × PAF
```

PAF yana ƙaruwa da yawan fallasa da haɗarin dangi duka — haɗarin dangi mai ƙaramin tashi (misali 1.5×) da aka haɗa da fallasa ta gama-gari na iya samar da PAF fiye da haɗarin dangi mai ban mamaki (misali 5×) da aka haɗa da fallasa mai wuya. Wannan shi ne dalilin da ya sa yake lamba daban da haɗarin dangi.

## Misali da aka lissafa

Abin haɗari yana cikin 30% na al'umma (`prevalence_exposed = 0.3`) kuma yana ɗaga haɗarin sakamako sau 2.5 (`relative_risk = 2.5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31.0%)

With 1,000 cases/year in the population:
Cases attributable = 1,000 × 0.3103 ≈ 310 cases/year
```

Ɗan ƙasa da kashi uku na nauyin wannan sakamako na shekara ana danganta shi da fallasar — kawar da ita gaba ɗaya (mafi girman ka'ida; babu shiga tsakani na gaske da ke cire 100% na fallasa) zai hana kusan lamura 310 cikin 1,000 kowace shekara.

## Alaƙa da injiniyancin manhaja

PAF shi ne sigar annoba ta "yawan abubuwan da suka faru da muke dangantawa ga wannan tushen dalili ɗaya?" — nau'in tambayar da ƙungiyoyi ke yi lokacin da suke auna wani aji na turawa ko dogaro da jimillar abubuwan da suka faru a samarwa, maimakon su ɗauki kowane lamari daidai da cancantar gyara iri ɗaya. Rukunin tushen dalili da ke cikin babban kaso na turawa tare da ƙaramin haɗarin dangi na haddasa lamari na iya wuce rukuni mai wuya mai babban haɗarin dangi a kan inda za a fara kashe ƙoƙarin injiniya — daidai ƙwarewar PAF, an fassara.

## Tarkuna

- **Tara PAF na abubuwan haɗari daban-daban**: PAF na abubuwa da yawa masu shafar sakamako ɗaya ba sa haɗuwa zuwa 100% — za su iya wuce shi a jimla, saboda abubuwa suna mu'amala kuma suna raba hanyoyin dalili. Ɗauki kowane PAF a matsayin "idan wannan abu shi kaɗai aka cire," ba rarraba jimillar haɗari ba.
- **Dasa haɗarin dangi a faɗin al'umma**: haɗarin dangi da aka kiyasta a al'umma ɗaya (yawan fallasa na tushe daban, masu ruɗani daban) yana ba da PAF mai ɓatarwa idan aka yi amfani da shi a yawan fallasar wata al'umma.
- **Rikita PAF da haɗarin da ake danganta shi ga waɗanda aka fallasa**: PAF matakin al'umma ne kuma yana dogara da yawan fallasa; haɗarin da ake danganta shi ga waɗanda aka fallasa matakin mutum ne kuma ba ya dogara. Suna amsa tambayoyi daban — kada ka faɗi ɗaya don amsa ɗayan.

## Tushe

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
