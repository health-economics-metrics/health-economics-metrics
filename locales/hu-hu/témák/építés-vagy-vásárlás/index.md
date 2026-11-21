# Építés vagy vásárlás

Az építés-vagy-vásárlás az egyedi fejlesztés és a kereskedelmi beszerzés strukturált összehasonlítása a diszkontált [TCO](../teljes-birtoklási-költség/), a szállítási idő és a kockázat alapján. Az empirikus priorok egyoldalúak: **a tényleges építési költségek jellemzően 30–40%-kal meghaladják az előrejelzést**, a vásárolt megoldások 40–60%-kal gyorsabban települnek, és az MIT 2025-ös GenAI-kutatása szerint a vásárolt MI-eszközök ~67%-ban sikeresek, a belső építések nagyjából harmadannyiszor.

## Miért fontos

Az egészségügyi rendszerek ezzel a döntéssel folyton szembesülnek (az NHS nyelvén „make vs commission"), és a mérnöki szervezetek rendszeresen az építés irányába tévednek — mert az építők az építést becslik, nem a [TCO-t](../teljes-birtoklási-költség/), és mert az építés szórakoztatóbb. A gazdasági keret kikényszeríti az őszinte összehasonlítást: mindkét lehetőség árazva ugyanazon a horizonton, mindkettő kockázattal korrigálva, és az *időkülönbség [a késedelem költségeként](../a-késedelem-költsége/) árazva* — az a tag, amely a leggyakrabban dönti el a választ, és a leggyakrabban kimarad.

## A matematika

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

## Kidolgozott példa

Egy trösztnek e-beleegyezési rendszerre van szüksége. Vásárlás: 150 ezer £/év SaaS, 3 hónap alatt éles. Építés: becsült 600 ezer £ + 120 ezer £/év karbantartás, 12 hónap alatt éles.

```
Risk-adjusted build: 600k × 1.35 = £810k; time-to-value ≈ 18 months
5-yr TCO:  buy = 150k × 5 = £750k
           build = 810k + 120k × 5 = £1,410k
Delay term: consent digitization saves £25k/month; build arrives 15 months
            later → CoD = 15 × 25k = £375k

Effective comparison: £750k vs £1,785k — buy wins by ~£1M, and the largest
single term after the build itself is the delay cost nobody had priced.
```

Az építés akkor marad helyes, ha a képesség differenciáló (a termék központi algoritmusa), ha egyetlen szállító sem felel meg egy kemény korlátnak (klinikai biztonság, adatrezidencia), vagy ha a szállítói bezártság kockázata súlyos és árazott.

## Kapcsolat a szoftverfejlesztéssel

Az átvihető egészséggazdasági fegyelem háromszoros: **priorokon alapuló kockázatkorrekció** (a 30–40%-os túllépési felár a szoftveres Green Book optimizmustorzítás — alkalmazd mechanikusan, a kivételekért érvelj, ne azokból kiindulva); **összehasonlító-őszinteség** (az építés alternatívája nem „semmi", hanem a legjobb elérhető vásárlás — lásd [alternatív költség](../alternatív-költség/)); és **egyenértékűségi teszt a költség-összehasonlítás előtt** (ha a vásárlás és az építés valóban ugyanazt a specifikációt teljesíti, ez [költségminimalizálási elemzés](../költségminimalizálási-elemzés/), és az olcsóbb nyer; ha nem, a kimenetkülönbséget értékelni kell, nem állítani).

## Buktatók

- **A szállítói listaár összehasonlítása a nem kockázatkorrigált építési becslésekkel** — kettős hízelgés az építés felé.
- **Nulla áras belső munkaerő** („a csapat már itt van").
- **Árazatlan bezártság mindkét irányban**: a szállítói kilépési költségek, de az építés busz-faktora és karbantartási hivatali ideje is.
- **Identitásvezérelt építések**: „ez a központi nálunk" állítva a vízvezetékre — teszteld a differenciálást azzal, észrevennék-e az ügyfelek.

## Források

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
