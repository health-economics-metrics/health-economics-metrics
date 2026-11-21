# Gina da Saye

Gina-da-saye kwatanta ne tsararre na haɓaka na musamman da sayen kasuwanci, bisa [TCO](../jimillar-kuɗin-mallaka/) da aka rage daraja, lokacin isarwa, da haɗari. Ra'ayoyin farko na gwaji suna da gefe ɗaya: **ainihin kuɗin gini yawanci yana wuce hasashe da 30–40%**, mafita da aka saya tana tura da sauri 40–60%, kuma binciken GenAI na MIT na 2025 ya gano cewa kayan AI da aka saya sun yi nasara ~67% na lokaci yayin da na cikin gida suka yi nasara kusan kashi uku na hakan.

## Dalilin muhimmancinsa

Tsarin lafiya suna fuskantar wannan shawara akai-akai ("make vs commission" a harshen NHS), kuma ƙungiyoyin injiniya suna yin kuskure a hanyar gini a kai a kai — domin masu gini suna ƙiyasta ginin, ba [TCO](../jimillar-kuɗin-mallaka/) ba, kuma domin gini ya fi daɗi. Tsarin tattalin arziki yana tilasta kwatanta na gaskiya: duka zaɓuɓɓuka an ƙayyade farashinsu a tsawon lokaci ɗaya, duka an daidaita haɗarinsu, kuma *bambancin lokaci an ƙayyade farashinsa a matsayin [kuɗin jinkiri](../kuɗin-jinkiri/)* — kalmar da ta fi sau da yawa ta yanke amsa kuma ta fi sau da yawa a bar ta.

## Lissafin

```
Compare over the same 3–5 year horizon, discounted:

NPV_option = PV(benefits, shifted by time-to-value) − PV(TCO)

Risk adjustments (Green Book "optimism bias" pattern):
  build cost × 1.3–1.4        (overrun prior)
  build time-to-value + 40–60% (deployment delay prior)
  buy: add integration reality-check and exit costs instead

Decision drivers, in the order they usually decide:
  1. differentiation — is this capability your product, or plumbing?
  2. time-to-value × CoD
  3. risk-adjusted TCO
```

## Misali da aka lissafa

Wani asusun asibiti yana buƙatar tsarin e-consent. Saye: SaaS £150k/shekara, yana aiki cikin watanni 3. Gini: an ƙiyasta £600k + £120k/shekara na kulawa, yana aiki cikin watanni 12.

```
Risk-adjusted build: 600k × 1.35 = £810k; time-to-value ≈ 18 months
5-yr TCO:  buy = 150k × 5 = £750k
           build = 810k + 120k × 5 = £1,410k
Delay term: consent digitization saves £25k/month; build arrives 15 months
            later → CoD = 15 × 25k = £375k

Effective comparison: £750k vs £1,785k — buy wins by ~£1M, and the largest
single term after the build itself is the delay cost nobody had priced.
```

Gini yana ci gaba da zama daidai lokacin da ƙarfin yana bambanta (babban algorithm na samfurinka), lokacin da babu mai sayarwa da ya cika ƙaƙƙarfan ƙuntatawa (aminci na asibiti, wurin zama na bayanai), ko lokacin da haɗarin ɗaure da mai sayarwa mai tsanani ne kuma an ƙayyade farashinsa.

## Alaƙa da injiniyancin manhaja

Horon tattalin arzikin lafiya mai wucewa yana da sassa uku: **daidaita haɗari bisa ra'ayoyin farko** (ƙarin 30–40% na wuce gona da iri shi ne son zuciya na Green Book na manhaja — a yi amfani da shi ta atomatik, a yi muhawarar keɓancewa maimakon farawa daga cikinsu); **gaskiyar abin kwatantawa** (madadin ginawa ba "komai" ba ne, shi ne mafi kyawun sayen da ake da shi — duba [farashin damar da aka bari](../farashin-damar-da-aka-bari/)); da **gwajin daidaito kafin kwatanta kuɗi** (idan saye da gini suna cika ƙayyadewa ɗaya da gaske, wannan [binciken rage kuɗi](../binciken-rage-kuɗi/) ne kuma mai arha ya yi nasara; idan ba haka ba, dole a kimanta bambancin sakamako, ba a tabbatar kawai ba).

## Tarkuna

- **Kwatanta farashin jeri na mai sayarwa da ƙiyasin gini da ba a daidaita haɗarinsa ba** — yabo biyu ga gini.
- **Aikin cikin gida da aka ba farashin sifili** ("ƙungiyar tana nan tuni").
- **Ɗauri maras farashi ta kowace hanya**: kuɗin fita daga mai sayarwa, amma kuma bus-factor na ginin da zaman kulawa.
- **Gini bisa asali**: "wannan ginshiƙi ne a gare mu" da aka yi da'awa ga bututu — a gwada bambanci ko abokan ciniki za su lura.

## Tushe

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
