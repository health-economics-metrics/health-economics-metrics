# Kimanta Zaɓuɓɓuka na Gaske

Kimanta zaɓuɓɓuka na gaske yana amfani da dabarar farashin zaɓi na kuɗi ga shawarwarin jari na gaske (marasa kasuwar kuɗi) — musamman *zaɓin faɗaɗa* aiki daga baya idan ya yi nasara, ba tare da wajibi ba. Samfurin binomial mai sauƙi na lokaci ɗaya (Cox, Ross, Rubinstein, 1979) yana ƙididdige wannan sassauci kai tsaye, yana mayar da "mu fitar da ƙarami mu gani" daga zato zuwa lamba mai farashi.

## Dalilin muhimmancinsa

Lissafin NPV a tsaye yana yi wa aiki farashi a matsayin caca ta duka-ko-komai: a ba da kuɗi ko a'a, a ma'aunin yau, har abada. Ayyuka na gaske — musamman fitar da lafiyar dijital a matakai — da wuya a yi musu caca haka: tsarin lafiya na iya ba da kuɗin ƙaramin gwaji, ya kalli abin da ke faruwa, ya kuma ƙara kuɗi kawai idan ya yi aiki. Wannan sassauci yana da daraja ta gaske, kuma watsi da shi yana rage darajar jari na matakai a tsari idan aka kwatanta da na lokaci ɗaya, wanda ya saɓa da tsarin sayayya da ke ba da lada ga shawara ta matakai da ta fi tsaro. Kimanta zaɓuɓɓuka na gaske yana yi wa sassaucin kansa farashi, don haka shawara ta matakai za a iya kwatanta ta adalci da madadin cikakken alƙawari maimakon a hukunta ta saboda ta yi ƙarami a layin NPV na zahiri.

## Lissafin

```
Risk-neutral probability of the "up" state:
  p = ((1 + risk_free_rate) − down_factor) / (up_factor − down_factor)

Expansion payoff in each state (floored at zero — expanding is optional):
  payoff_up   = max(project_value × up_factor   − expansion_cost, 0)
  payoff_down = max(project_value × down_factor − expansion_cost, 0)

Option value (discounted expected payoff):
  option_value = (p × payoff_up + (1 − p) × payoff_down) / (1 + risk_free_rate)

Expanded NPV = static_npv + option_value
```

Darajar aikin ko dai tana tashi (`up_factor`) ko tana faɗuwa (`down_factor`) zuwa wurin shawara na gaba. Ana amfani da faɗaɗawa ne kawai idan yana da riba a wannan yanayi — bene na sifili a biya shi ne ke mai da wannan *zaɓi* na gaske ba wajibi ba. Don farashin zaɓin tattara bayanai tukuna, maimakon zaɓin faɗaɗa daga baya, duba [darajar da ake tsammani ta cikakken bayani](../darajar-da-ake-tsammani-ta-cikakken-bayani/). Don kuɗin jira don yin wannan shawara, duba [kuɗin jinkiri](../kuɗin-jinkiri/).

## Misali da aka lissafa

Gwajin sabis na dijital tare da `project_value = £1,000,000`, yiwuwar tashi zuwa 1.5× ko faɗuwa zuwa 0.5× a wurin shawara na gaba, adadin mara haɗari 8%, da kuɗin faɗaɗawa £600,000:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

payoff_up   = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
payoff_down = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

The floor matters: the option would NOT be exercised if the market
disappoints — the £600,000 expansion cost exceeds the £500,000 the
project would be worth in the down state.

option_value = (0.58 × 900,000 + 0.42 × 0) / 1.08
             = 522,000 / 1.08
             ≈ £483,333.33
```

Ƙara darajar zaɓin zuwa tushen NPV na tsaye na £200,000: NPV da aka faɗaɗa = 200,000 + 483,333.33 ≈ **£683,333.33**. Bayar da rahoton NPV na tsaye £200,000 kaɗai, ba tare da wannan darajar zaɓi ba, zai rage ainihin darajar aikin na matakai fiye da rabi.

## Alaƙa da injiniyancin manhaja

Wannan sigar hukuma ce ta "fitar da mafi ƙarancin sigar yanzu, ka riƙe zaɓin ƙara jari idan ya ɗauka" — yana da muhimmanci kai tsaye ga fitar da samfurin lafiyar dijital a matakai, a tsari yana kama da tsarin jeri-ƙarƙashin-rashin-tabbas na [kuɗin jinkiri](../kuɗin-jinkiri/) da [WSJF/CD3](../wsjf-da-cd3/), kuma yana haɗa da [darajar da ake tsammani ta cikakken bayani](../darajar-da-ake-tsammani-ta-cikakken-bayani/) da [darajar da ake tsammani ta bayanin samfuri](../darajar-da-ake-tsammani-ta-bayanin-samfuri/) — duka uku suna yi wa sassauci ko bayani farashi ƙarƙashin rashin tabbas, ta kusurwoyi daban-daban.

## Tarkuna

- **Aro farashin tsaka-tsakin haɗari ba tare da zaton kadarar da ake ciniki ba da yake dogara da shi**: samfuran zaɓuɓɓuka na gaske suna aron yiwuwar tsaka-tsakin haɗari daga farashin zaɓin kuɗi, wanda ke zaton ƙimar tushe kadara ce *da ake ciniki da ita* — ga aiki na gaske da ba a ciniki, wannan sauƙin ƙira ne, ba gaskiyar kasuwa ta zahiri ba.
- **Ɗaukar `up_factor`/`down_factor` a matsayin sigogi masu 'yanci**: shigarwar binomial na sama/ƙasa kansu zato ne da ke buƙatar hujja, ba sigogi masu 'yanci da aka zaɓa don samar da amsar da ake so ba.
- **Bayar da rahoton darajar zaɓi kaɗai**: darajar zaɓuɓɓuka na gaske *ƙari* ne ga NPV na tsaye na aiki daban — kuskure na gama-gari shi ne bayar da rahoton darajar zaɓi kaɗai a bar tushen shari'a, wanda ke ƙara girman shari'a idan NPV na tsaye mara kyau ne kuma yana rage ta (kamar a misalin sama) idan an bar NPV na tsaye gabaɗaya.

## Tushe

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — ties real options directly to a health-economics decision context. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
