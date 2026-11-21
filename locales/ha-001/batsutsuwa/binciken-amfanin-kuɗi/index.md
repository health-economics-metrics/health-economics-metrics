# Binciken Amfanin Kuɗi (CUA)

CUA binciken tasirin kuɗi ne da **sakamako na gama-gari mai nauyin fifiko** — kusan koyaushe [QALY](../shekarar-rayuwa-da-aka-daidaita-da-inganci/) (ko [DALY](../shekarar-rayuwa-da-aka-daidaita-da-nakasa/) da aka kauce wa). Domin naúrar sakamakon ta gama-gari ce, CUA na iya kwatanta shiga tsakani a faɗin cututtuka dabam-dabam gaba ɗaya.

## Dalilin muhimmancinsa

Hidimar lafiya ta ƙasa dole ta zaɓa tsakanin maganin ciwon daji, manhajar lafiyar hankali, da robot na tiyata daga kasafin kuɗi ɗaya. Naúrorin halitta ba za su iya kwatanta su ba; QALY na iya. Saboda haka CUA ita ce hanyar ƙa'idar tunani a NICE da yawancin hukumomin HTA: fitarwarta — kuɗi ga kowane QALY, da aka yanke a kan [iyaka](../iyakokin-shirin-biya/) — ita ce abin da ya fi kama da ƙimar musayar gama-gari a manufofin lafiya. Idan kana son a ba da kuɗin manhajarka *maimakon wani abu dabam*, CUA ita ce fagen.

## Lissafin

```
ICUR = ΔCost / ΔQALYs      (the ICER with QALYs as the effect unit)

ΔQALYs = Σ (duration_i × utility_i)_new − Σ (duration_i × utility_i)_old
```

Amfani daga kayan aikin da aka tabbatar ([EQ-5D](../eq-5d/)); kuɗi da QALY duka an [rage daraja](../rage-daraja-da-fifikon-lokaci/) a 3.5% (ƙa'idar tunani ta NICE); rashin tabbas ta [PSA](../binciken-jin-canji-na-yiwuwa/).

## Misali da aka lissafa

Manhajar CBT don damuwa ta matsakaici da jerin jiran magani a fuska-da-fuska, ga kowane majiyyaci:

```
Costs:  app licence + support        £250
        therapy displaced            −£680   (40% of users no longer need it)
        ΔC = 250 − 680 = −£430 (saves money)

QALYs:  6 months at utility 0.76 instead of 0.68 while waiting
        ΔE = 0.5 × (0.76 − 0.68) = +0.04 QALYs
```

ΔC < 0 da ΔE > 0: manhajar **tana mamaye** — mafi kyau da mai arha, babu bukatar rabo. Da zaton maye gurbin magani ya zama 10% kawai, ΔC = 250 − 170 = +£80, kuma ICUR = 80 / 0.04 = **£2,000/QALY** — har yanzu ƙasa da £20,000 sosai. Shari'ar tana tsira ko da an yanke muhimmin zato: wannan shi ne yadda ingantaccen CUA yake (kuma [zanen guguwa](../binciken-jin-canji/) yana tabbatar da shi).

## Alaƙa da injiniyancin manhaja

Zurfafan manufar CUA — *naúra ɗaya mai nauyin fifiko don kwatanta abubuwa daban-daban* — ita ce tsarin kwatanta jarin injiniya daban-daban (tsaro da ƙwarewar mai haɓakawa da amincin aiki). Zaɓuɓɓukan gaskiya ko dai naúrar haɗaka mai kariya (da wuya) ko [teburin sakamakon kuɗi](../binciken-sakamakon-kuɗi/) bayyananne (na yau da kullum). Abin da CUA ke gargaɗi a kai shi ne haɗakar ƙarya: "maki na tasiri" mai nauyi da aka daidaita bayan faruwa don zaɓin da aka fi so ya yi nasara. Tattalin arzikin lafiya ya shafe shekaru yana daidaita fitar da amfani daidai domin nauyi su riga kwatanci.

## Tarkuna

- **Ribar amfani ƙasa da jin kayan aikin** (duba mafi ƙarancin bambancin da ke da muhimmanci a asibiti a [sakamakon da marasa lafiya suka bayar](../sakamakon-da-marasa-lafiya-suka-bayar/)) — ƙaramin ΔE ninka manyan al'umma dabarar wanki ce ta gargajiya.
- **Rashin lura da maye gurbin kulawar abin kwatantawa** — mafi girman kalmar kuɗi ga samfuran dijital yawanci abin da suke maye gurbinsa ne.
- **Taswirar maki marasa fifiko zuwa amfani** da giciye marasa tabbaci.

## Tushe

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
