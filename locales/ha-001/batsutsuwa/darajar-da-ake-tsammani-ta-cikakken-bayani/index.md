# Darajar da Ake Tsammani ta Cikakken Bayani (EVPI)

EVPI shi ne matsakaicin adadin da mai yanke shawara ya kamata ya biya don kawar da rashin tabbas kafin ya yanke shawara — ainihin farashin "bari mu gudanar da bincike tukuna."

## Dalilin muhimmancinsa

Tsarin lafiya akai-akai suna fuskantar zaɓi: a ɗauka yanzu a kan shaida maras kammala, ko a ba da kuɗin ƙarin bincike tukuna. EVPI yana sa lamba a kan zaɓi na biyu. Idan EVPI £50,000 ne kuma gwajin da aka gabatar yana kashe fam miliyan 2, a ɗauka yanzu. Idan EVPI fam miliyan 20 ne, gwajin ciniki ne mai kyau. Tambayar iri ɗaya — "ko mu gwada wannan kafin mu faɗaɗa?" — tana tasowa ga kowace shawarar kayan kamfani, kuma kusan ba wanda ke ƙayyade mata farashi. Don ƙayyade farashin zaɓin faɗaɗa aiki daga baya, maimakon zaɓin tattara bayanai tukuna, duba [Kimanta Zaɓuɓɓuka na Gaske](../kimanta-zaɓuɓɓuka-na-gaske/).

## Lissafin

EVPI shi ne gibi tsakanin yanke shawara da hangen nesa cikakke da yanke shawara yanzu bisa tsammani:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = uncertain parameters (with their joint distribution)
NMB(j,θ) = net monetary benefit of option j given θ
```

Kalma ta farko: matsakaicin ribar zaɓi mafi kyau a kowace duniya mai yiwuwa (kullum kana zaɓar daidai). Kalma ta biyu: ribar zaɓi guda ɗaya da ya fi kyau a matsakaici (dole ka ɗaure yanzu). EVPI ≥ 0 koyaushe. EVPI na al'umma yana ninkawa da adadin shawarwarin da abin ya shafa. Ana lissafa shi kai tsaye daga zane-zanen [PSA](../binciken-jin-canji-na-yiwuwa/).

## Misali da aka lissafa

A faɗaɗa mataimakin rubuta bayanai na AI ga likitoci 5,000, ko a'a. Duniyoyi biyu:

```
World A (p = 0.6): assistant saves 20 min/day → NMB of rollout = +£8M
World B (p = 0.4): assistant saves ~0 (workflow friction) → NMB of rollout = −£3M
NMB of "don't roll out" = £0 in both worlds.
```

A yanke shawara yanzu: E[NMB rollout] = 0.6 × 8 − 0.4 × 3 = **+£3.6M** → a faɗaɗa.

Da cikakken bayani: a duniya A a zaɓi faɗaɗawa (+£8M), a duniya B a zaɓi komai (£0). Ƙimar da ake tsammani = 0.6 × 8 + 0.4 × 0 = **£4.8M**.

```
EVPI = 4.8M − 3.6M = £1.2M
```

Gwajin watanni 3 mai tsauri da ke kashe £150,000 wanda ya warware a wace duniya kake yana da daraja ba tare da shakka ba — kuma duk gwajin da ya kashe fiye da £1.2M ba shi da daraja, komai cikawarsa.

## Alaƙa da injiniyancin manhaja

EVPI shi ne tattalin arzikin spike, gwaji, gwajin A/B, da proof-of-concept. Yana ba da ƙa'idodi masu amfani biyu:

- **A ba da kuɗin gwaji ne kawai idan shawarar za ta iya canzawa da gaske.** Idan za ka faɗaɗa ko da sakamakon gwajin menene, EVPI = 0 kuma gwajin wasan kwaikwayo ne.
- **A taƙaita kashe kuɗin gwaji a EVPI.** Darajar bayani tana da iyaka ta darajar shawarar da take sanarwa.

EVPI na wani ɓangare (EVPPI) yana faɗaɗa wannan zuwa sigogi guda ɗaya: "menene darajar tabbatar da lambar lokacin da aka ceta musamman?" — wanda ke gaya maka abin da gwajin ya kamata ya auna. Don ƙayyade farashin *takamaiman* binciken da aka gabatar maimakon kawar da dukan rashin tabbas, duba [EVSI](../darajar-da-ake-tsammani-ta-bayanin-samfuri/).

## Tarkuna

- **Gudanar da gwaje-gwaje ba tare da ƙa'idar yanke shawara ba** — bayanin da ba zai iya canza zaɓi ba ba shi da daraja ta ma'ana.
- **Watsi da kuɗin jinkirin tattara bayanai**: gwajin watanni 6 yana jinkirta watanni 6 na fa'ida ([kuɗin jinkiri](../kuɗin-jinkiri/)); ribar net ta gwajin = EVPI da aka warware − kuɗin jinkiri − kuɗin gwaji.
- **Ɗaukar EVPI a matsayin hasashe.** Iyaka ce ta sama ga darajar bayani, ba ƙiyasin abin da takamaiman bincike zai isar ba.

## Tushe

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
