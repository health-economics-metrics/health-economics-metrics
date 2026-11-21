# Darajar Rayuwar Ƙididdiga (VSL)

Darajar rayuwar ƙididdiga (VSL) — wadda ake kira "darajar mutuwar da aka hana" (VPF) a amfanin Burtaniya — ita ce adadin da *al'umma* tare take son biya don rage haɗarin mutuwar ƙididdiga ɗaya, da aka samo daga bincike na musanyar albashi-haɗari (nawa ƙarin albashi ma'aikata ke nema don ayyuka masu haɗari) da binciken fifiko da aka bayyana. Ba farashin rayuwar wani mutum da aka gano ba ne; ginin haɗarin al'umma ne, kuma injiniyan manhaja da ke gina tsarin rage haɗari — algorithms na rarrabawa, aika motar daukar marasa lafiya, sa ido kan tsaro — yana buƙatar sanin cewa yana fitowa daga al'adar ka'ida daban da [iyakokin shirin biya](../iyakokin-shirin-biya/).

## Dalilin muhimmancinsa

VSL/VPF shi ne kayan aikin ƙa'ida don mayar da raguwar haɗarin mace-mace zuwa kuɗi a binciken riba da kuɗi na ƙa'ida: amincin sufuri, ƙa'idar muhalli, da wasu shiga tsakani na lafiyar jama'a duk suna gudanar da shari'o'in kasuwancinsu ta cikinsa. Green Book na HM Treasury yana buga lambar VPF da aka samo daga shaidar kasuwar ƙwadago da bincike na Burtaniya, kuma Ma'aikatar Sufuri tana amfani da ita kai tsaye a kimanta amincin hanya. Wannan al'adar kimantawa ce daban gaba ɗaya daga hanyar QALY × iyakar shirin biya: hanyar iyaka tana darajar ribar lafiya a kan abin da *kasafin lafiya* ke samarwa a iyaka a yanzu, yayin da VSL/VPF ke darajar rage haɗari a kan abin da mutane a kasuwar ƙwadago ko bincike ke bayyana cewa za su biya. Tsarori biyun ba koyaushe ake daidaita su ba, kuma amfani da duka biyu a shari'a ɗaya ba tare da amincewa da hakan ba kuskuren bincike ne na gama-gari.

## Lissafin

```
Deaths averted = population × risk_reduction_per_person
  (risk_reduction_per_person is a probability, e.g. 0.000001 = 1-in-a-million
   reduction in annual mortality risk)

Monetized mortality benefit = deaths_averted × value_of_prevented_fatality
```

## Misali da aka lissafa

Yanki na mutane 800,000 yana amfana daga shiga tsakani na aika/rarrabawa na dijital na amincin hanya wanda ke rage haɗarin mace-mace na shekara na kowane mutum da 1 a miliyan (0.000001):

```
Deaths averted = 800,000 × 0.000001 = 0.8
```

Ta amfani da Darajar Mutuwar da Aka Hana ta Burtaniya, £2,180,000 (lambar HM Treasury/DfT, farashin 2023/24 — Green Book yana sabunta wannan kowace shekara, a sake tabbatarwa kafin ambaton a binciken da ke gudana):

```
Monetized mortality benefit = 0.8 × £2,180,000 = £1,744,000/year
```

Ɗan ƙasa da fam miliyan 1.75 a shekara na fa'idar mace-mace da aka mayar kuɗi, daga raguwar haɗari da yawancin al'ummar da abin ya shafa ba za su taɓa lura da shi daban-daban ba.

## Alaƙa da injiniyancin manhaja

Ƙungiyoyin manhaja masu mahimmancin tsaro — firmware na na'urorin likita, manhajar motoci masu tuƙin kansu, tsarin sarrafa masana'antu — suna fuskantar daidai wannan matsalar farashi lokacin da suke gina shari'ar riba da kuɗi ta jarin tsaro: ta yaya za ka yi wa "hana gazawa mai muni ɗaya" farashi lokacin da gazawar ba kasafai ba ce, mai tsanani, kuma ta bazu a faɗin babban al'ummar masu amfani? VSL/VPF misali ne na shekaru da yawa, da aka rubuta a bainar jama'a, na sanya lamba a kan raguwar haɗari mai wuya, mai tsanani, na matakin al'umma — nau'in hujja ɗaya da yi wa jarin SRE farashi a kan katsewar sabis mai muni mai wuya, kawai tare da sakamakon mace-mace maimakon lokacin da bai yi aiki ba.

## Tarkuna

- **Ɗaukar VSL a matsayin "farashin rayuwar da aka gano"**: ba haka ba ne. VSL/VPF ginin ƙididdiga ne na al'umma da aka samo daga musanyar rage haɗari a tsakanin mutane da yawa, ba kimantawar rayuwa ko mutuwar wani takamaiman mutum ba.
- **Ƙirga sau biyu da lissafin ribar kuɗi net bisa QALY**: amfani da lambar VSL/VPF da lissafin QALY × iyaka dabam a shari'a ɗaya, ba tare da daidaita su ba, yana ƙirga sau biyu a ɓoye darajar mutuwar da aka hana iri ɗaya. Zaɓi tsari ɗaya ga kowace shari'a.
- **Dasa kiyasin VSL a mahallai ba tare da daidaitawa ba**: VSL da aka samo daga kasuwar ƙwadago ta ƙasa ɗaya, ko daga bayanan albashi-haɗari na shekarun aiki, da aka yi amfani da shi ba tare da daidaitawa ba a mahallin samun kuɗi daban ko al'umma daban (yara, masu ritaya) matsala ce ta hanya da aka daɗe ana jayayya a kai — ba wadda aka warware ba.

## Tushe

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality supplementary guidance (2023/24 prices; Green Book values are updated annually). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (for the US VSL tradition, cited for contrast with the UK VPF figure above). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
