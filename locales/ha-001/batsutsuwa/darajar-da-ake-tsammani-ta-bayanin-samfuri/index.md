# Darajar da Ake Tsammani ta Bayanin Samfuri (EVSI)

EVSI shi ne darajar *takamaiman binciken da aka gabatar* — wani ƙira, wani girman samfuri — kafin a gudanar da shi, ba kamar [EVPI](../darajar-da-ake-tsammani-ta-cikakken-bayani/) ba, wanda ke ƙayyade farashin kawar da dukan rashin tabbas gaba ɗaya. EVSI yana amsa tambayar da mai ba da kuɗin bincike ke fuskanta a zahiri: "shin *wannan* gwajin, a *wannan* girman, ya cancanci kuɗinsa?"

## Dalilin muhimmancinsa

EVPI yana gaya maka rufin abin da kowane bincike zai iya cancanta; ba ya taɓa gaya maka ko gwajin da ke gabanka ya wuce shingen. Mai ba da kuɗin bincike na ƙasa da ke zaɓa tsakanin gwajin farko na marasa lafiya 50 da gwajin ƙarshe na marasa lafiya 500 yana buƙatar sanin nawa *kowane takamaiman ƙira* ya cancanta, ba kawai darajar sanin komai ba. EVSI yana ba da wannan lamba, kuma domin yana girma da girman samfuri, yana bari mai ba da kuɗi ya sami girman samfurin da ke ƙara ribar net da ake tsammani maimakon yin zato.

Wannan kuma shi ne dalilin da ya sa EVSI koyaushe yake ƙasa ko daidai da EVPI: samfuri mai iyaka zai iya warware rashin tabbas a wani ɓangare kawai, kuma binciken da ya bayyana yana da daraja fiye da cikakken bayani alama ce lissafin ba daidai ba ne, ba sakamako na gaske ba.

## Lissafin

```
General:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (nested expectation: outer over possible study results, inner over the
  posterior belief about θ after seeing that result — usually estimated by
  nested Monte Carlo / Bayesian updating over probabilistic sensitivity
  analysis draws)

Closed-form normal approximation (single uncertain parameter, conjugate
normal-normal model — a standard shortcut, not exact for every model):
EVSI(n) = EVPI × n / (n + n0)

n  = proposed study's sample size
n0 = "prior-equivalent sample size" — the size of an imaginary sample that
     would carry the same information as the current prior, derived from
     the ratio of data variance to prior variance
ENBS(n) = EVSI(n) − Cost(n)
Population EVSI = per-decision EVSI × decisions affected
```

Tsarin gama-gari tsammani ne mai gida a cikin gida domin sakamakon binciken nan gaba shi kansa ba shi da tabbas: dole ka ƙididdige matsakaici a kan kowane bayanan da binciken zai iya samarwa, kuma ga kowanne ka sake lissafin mafi kyawun shawara bisa ra'ayin da aka sabunta (na baya). Kusantar al'ada ta rufaffiyar dabara tana musanya wannan kuɗin lissafi da rabo ɗaya, mai inganci lokacin da sigar rashin tabbas da bayanan suke (kusan) al'ada da conjugate — sauƙi ne, ba doka ta duniya ba. Cikakken nested Monte Carlo shi ne hanyar gama-gari lokacin da wannan zato bai tabbata ba. Duba [binciken jin canji na yiwuwa](../binciken-jin-canji-na-yiwuwa/) don zane-zanen PSA da ake yawan ƙiyasta EVSI daga gare su.

## Misali da aka lissafa

Ana ginawa a kan misalin [EVPI](../darajar-da-ake-tsammani-ta-cikakken-bayani/) — faɗaɗa mataimakin rubuta bayanai na AI ga likitoci 5,000, inda aka gano EVPI £1.2M ne — a bayyana EVPI iri ɗaya a nan cikin cikakkun fam: **EVPI = £1,200,000**.

Ana gabatar da gwajin farko na likitoci 50. Daga rabon bambancin ra'ayin da ya gabata da daidaiton aunawar gwajin, girman samfurin daidai na farko yana fitowa `n0 = 75`:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

Gwajin yana kashe £120,000:

```
ENBS = EVSI − Cost = 480,000 − 120,000 = £360,000
```

ENBS mai kyau a fili: a ba da kuɗin gwajin. Idan shawarar sayen iri ɗaya tana maimaituwa a asusun yanki 3 iri ɗaya, darajar gwajin tana girma:

```
Population EVSI = 480,000 × 3 = £1,440,000
```

## Alaƙa da injiniyancin manhaja

EVSI shi ne tattalin arzikin zaɓar *yaya girman* gwaji ko gwajin A/B ya kamata ya zama, ba kawai ko a gudanar da ɗaya kwata-kwata ba:

- **Girman samfuri a matsayin shawarar jari.** Beta na masu amfani 50 da fitarwa ta matakai ta masu amfani 5,000 "bincike" ne daban-daban masu EVSI daban-daban da kuɗi daban-daban — EVSI yana bari ka kwatanta su a tushe ɗaya maimakon komawa "ƙarin bayanai koyaushe ya fi."
- **ENBS, ba EVSI kaɗai ba, shi ne gwajin ba da umarni.** Bincike mai EVSI mai yawa amma kuɗi da ya cinye yawancinsa shawara ce mai rauni; ƙa'idar yanke shawara ita ce ribar net da ake tsammani ta ɗaukar samfuri, daidai kamar shari'ar kasuwanci tana rage fa'ida daga kuɗi maimakon bayar da fa'ida kaɗai.
- **Raguwar ribar tana bayyane.** Domin EVSI(n) yana ƙaruwa da `n/(n+n0)`, ninka girman gwaji ba ya ninka darajarsa — sigar hukuma ta tunanin injiniya cewa babban gwaji yana da raguwar darajar bayani ta ƙari.

## Tarkuna

- **Amfani da kusantar al'ada a wajen zatonta.** Tana tabbata ga rashin tabbas na siga ɗaya, kusan conjugate kawai; samfurin shawara maras layi ko mai sigogi da yawa yana buƙatar cikakken nested Monte Carlo, ba wannan gajeren hanyar ba.
- **Kwatanta EVSI da kuɗin tsabar kuɗi kaɗai.** Dole a auna EVSI da *cikakken* kuɗin binciken, har da kuɗin jinkirin shawararsa — duba [kuɗin jinkiri](../kuɗin-jinkiri/) — ba kawai takardar kuɗin binciken ba.
- **Ɗaukar EVSI > EVPI a matsayin gano na gaske.** EVSI ba zai taɓa wuce EVPI ta ƙira ba; lissafin da ya samar da wannan kwaro ne na ƙira, ba ganowa ba.

## Tushe

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
