# Tsawon Lokacin Bincike

Tsawon lokacin bincike shi ne lokacin da bincike ke ƙirga kuɗi da tasiri. Dole ya yi tsawo isa don ɗaukar duk bambance-bambance masu ma'ana tsakanin zaɓuɓɓukan da ake kwatantawa.

## Dalilin muhimmancinsa

Zaɓi gajeren lokaci kuma za ka rasa fa'idodi na ƙarshe (rigakafi) da kuɗi na ƙarshe (kulawa). Zaɓi lokaci mai tsawo fiye da kima kuma komai yana nutsewa cikin rashin tabbas. Tantance fasahar lafiya sau da yawa tana amfani da lokacin **rayuwa** ga magunguna masu tasirin mace-mace; [binciken tasirin kasafin kuɗi](../binciken-tasirin-kasafin-kuɗi/) da gangan yana amfani da gajeren lokaci na **shekaru 1–5** domin tambayarsa ita ce iya biya, ba daraja ba. Tsawon lokaci zaɓin ƙira ne da aka bayyana, kuma tsawon lokaci da bai dace ba hanya ce ta gargajiya ta yin wasa da kwatance.

## Lissafin

Tsawon lokaci shi ne iyaka ta sama ta tara a kowane bincike:

```
Net present value = Σ (t = 0 … T) [ (Benefits_t − Costs_t) / (1 + r)^t ]

T = time horizon (years)
r = discount rate (see discounting-and-time-preference.md)
```

Ya kamata a ba da rahoton sakamako tare da bayyana tsawon lokaci, kuma da kyau a nuna shi a tsawon lokuta da dama.

## Misali da aka lissafa

Tsarin rubuta magani na lantarki yana kashe £miliyan 2 don aiwatarwa da £200,000/shekara don gudanarwa. Yana hana kurakuran magani da suka kai £600,000/shekara (kuɗin magani na cutarwar da aka kauce wa).

Riba net bisa tsawon lokaci (ba a rage daraja ba, don sauƙi):

```
Horizon 1 year:  −2,000,000 − 200,000 + 600,000  = −£1,600,000
Horizon 3 years: −2,000,000 + 3 × 400,000        = −£800,000
Horizon 5 years: −2,000,000 + 5 × 400,000        =  £0
Horizon 10 years:−2,000,000 + 10 × 400,000       = +£2,000,000
```

Tsarin yana "faɗuwa" a kowane tsawon lokaci ƙasa da shekaru 5 kuma yana "yin nasara" a 10. Babu ɗaya amsar gaskiya; rahoton gaskiya yana bayyana wurin daidaitawa kuma yana hujjar tsawon lokaci da rayuwar tsarin (har yaushe kafin maye gurbi?).

## Alaƙa da injiniyancin manhaja

- **Kimanta kayan aiki a tsawon sprint ɗaya** yana rasa nutsewar koyo a tsari (kuɗi a gaba) da kulawa na dogon lokaci (kuɗi a baya). Gwajin mataimakin rubuta lamba na AI da aka auna a mako na 2 yana ɗaukar kololuwar sabon abu, ba tsayayyen yanayi ba.
- **Tsawon kwangila ≠ tsawon lokacin fa'ida.** Kwangilar SaaS ta shekara 1 za a iya kimanta ta tsawon shekaru 5 idan kana tsammanin sabuntawa a zahiri — amma faɗi haka.
- **Shari'o'in maye gurbin tsohon tsari** ya kamata su kai ƙarshen rayuwa mai yiwuwa na tsohon tsarin, ba lamba mai zagaye ta son rai ba.

## Tarkuna

- **Zaɓen tsawon lokaci**: zaɓar duk tsawon lokacin da zai sa zaɓinka ya ci nasara. Yi rajistar tsawon lokaci kafin lissafa sakamako.
- **Tsawon lokaci daban-daban ga zaɓuɓɓuka daban-daban** a kwatance ɗaya.
- **Tsawon rayuwa ba tare da rage daraja ko nazarin rashin tabbas ba** — fa'idodin shekara 30 a ƙimar fuska ƙagaggen labari ne. Haɗa dogon tsawon lokaci da [binciken jin canji](../binciken-jin-canji/).

## Tushe

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
