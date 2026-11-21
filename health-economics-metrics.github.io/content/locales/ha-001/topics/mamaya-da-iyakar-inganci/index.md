# Mamaya da Iyakar Inganci

Zaɓi yana **mamayuwa** idan wani zaɓi yana kashe ƙasa *kuma* yana isar da fiye. **Iyakar inganci** ita ce abin da ya rage bayan an kawar da zaɓuɓɓukan da aka mamaye: jerin zaɓuɓɓukan da samun ƙari ke buƙatar biyan ƙari.

## Dalilin muhimmancinsa

Kafin kowace muhawara game da iyakoki ko kasafin kuɗi, tantance fasahar lafiya tana farko kawar da zaɓuɓɓukan da bai kamata kowa ya zaɓa ba. Zana kowane zaɓi a kan jirgin kuɗi-da-tasiri da zana iyaka aikin mintuna biyar ne wanda yake kashe rabin jerin gajeru akai-akai. Ana lissafa kwatancen ƙari ([ICER](../rabon-ƙarin-tasirin-kuɗi/)) sai a *kan iyakar* kawai, kowane zaɓi a kan na gaba mafi arha wanda ba a mamaye ba — ba a kan "kada a yi komai" idan akwai mafi kyawun zaɓuɓɓukan tsakiya ba.

## Lissafin

```
Strict dominance:   A dominates B if Cost_A ≤ Cost_B and Effect_A ≥ Effect_B
                    (with at least one strict inequality)

Extended dominance: B is ruled out if a mix of A and C achieves more effect
                    per pound — detected when ICERs decrease as you move up
                    the frontier. Valid frontier ICERs must be increasing.
```

Hanya: a jera zaɓuɓɓuka bisa tasiri; a cire waɗanda aka mamaye da tsauri; a lissafa ICER bibbiyu tsakanin maƙwabta; a cire duk zaɓin da ICER ɗinsa ya wuce na zaɓi na gaba mafi tasiri (mamayar faɗaɗa); a maimaita har sai ICER ya ƙaru ba tare da tsayawa ba.

## Misali da aka lissafa

Zaɓuɓɓuka huɗu na rage alƙawuran da aka rasa (tasiri = alƙawuran da aka dawo da su/shekara):

```
Option          Cost/yr    Recovered
Do nothing      £0         0
SMS reminders   £20,000    2,000
Phone calls     £120,000   2,200
SMS + AI triage £90,000    3,500
```

Kiran waya **an mamaye shi da tsauri** da SMS + AI triage (yana kashe fiye, yana dawo da ƙasa). Iyaka: komai → SMS → SMS + AI.

```
ICER(SMS vs nothing)   = 20,000 / 2,000  = £10 per appointment recovered
ICER(SMS+AI vs SMS)    = (90,000 − 20,000) / (3,500 − 2,000) = £46.67 per appointment
```

ICER masu ƙaruwa → iyaka ingantacciya. A ~£160 da aka ceta ga kowane alƙawarin asibiti da aka dawo da shi (duba [adadin rashin halartar alƙawari](../adadin-rashin-halartar-alƙawari/)), duka matakan iyakar sun cancanci ɗauka; shawarar bankin waya bai kamata ta isa ga kwamiti ba.

## Alaƙa da injiniyancin manhaja

A gina zane ɗaya don kowace shawarar kayan aiki: kuɗi a shekara a gatari ɗaya, sakamakon da aka auna (sa'o'in da aka ceta, abubuwan da aka kauce wa, aikawa da aka ba da dama) a ɗaya. Maki sama-da-hagu na iyakar ana kawar da su kafin kowa ya yi muhawara game da kasafin kuɗi. Wannan yana sake tsara zaɓen mai sayarwa daga muhawarar jerin fasali zuwa "an mamaye ka; taron ya ƙare." Yana kuma bayyana tsarin kamfani na gama-gari na sayen zaɓi mafi tsada don ƙaramar riba — halal ne kawai idan farashin ƙari ga kowace naúrar ƙari wanda ƙungiyar za ta biya da sanin ya yi ne.

## Tarkuna

- **Kwatanta komai da tushe** maimakon da zaɓi na gaba a kan iyakar — yana yabon zaɓuɓɓuka masu tsada ta ɓoye masu arha kusa da daidai.
- **Maki na tasiri mai girma ɗaya** da ke ɓoye abin da ke da muhimmanci; idan sakamako biyu suna ƙidayuwa, a haɗa su da kariya (duba [binciken amfanin kuɗi](../binciken-amfanin-kuɗi/)) ko a nuna iyakoki biyu.
- **Mantawa da rashin tabbas**: zaɓuɓɓuka kusa da iyakar na iya musayar wurare a ƙarƙashin [binciken jin canji](../binciken-jin-canji/).

## Tushe

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
