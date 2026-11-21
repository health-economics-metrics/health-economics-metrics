# Aktivace a přijetí

Míra aktivace je podíl registrovaných uživatelů, kteří dosáhnou první smysluplné hodnoty (akce „aha“ – první zapsané měření, první dokončená lekce). Přijetí (uptake) je populační verze: podíl *způsobilé* populace, která službu vůbec začne používat. Společně tvoří přední brány trychtýře hodnoty: akvizice → přijetí → aktivace → [udržení](../udržení-a-odchod-uživatelů/) → výsledek.

## Proč na tom záleží

Neaktivovaní uživatelé jsou čistý náklad: výdaje na akvizici, zřízení účtu, zátěž podpory – a nulová klinická hodnota. Referenční hodnoty uvádějí aktivaci ve zdravotnickém softwaru *pod* průřezovým průměrem napříč odvětvími (≈ 24 % oproti ≈ 37 % u aktivace nových uživatelů v jedné sadě benchmarků SaaS; dokončení onboardingového kontrolního seznamu ~20 %), což odráží náročnější onboarding (identita, souhlas, klinická bezpečnost). Přijetí nese populační sázky: v [rámci RE-AIM](../dosah-a-rovnost/) platí, že dopad na veřejné zdraví ≈ dosah × účinnost – skvělá aplikace, kterou přijmou 3 % způsobilé populace, pohne populační ručičkou jen o 3 %. U předepisovaných digitálních terapeutik je brána přijetí viditelná v národních datech: **~81 % předpisů DiGA je aktivováno** – jedna z pěti předepsaných a zaplacených léčeb nikdy nezačne (viz [rychlá cesta DiGA](../rychlá-cesta-diga-v-německu/)).

## Matematika

```
Activation rate = users completing key action within window / sign-ups × 100
Uptake rate     = adopters / eligible population × 100
DTx fill rate   = activated prescription codes / issued prescriptions × 100

Funnel value model:
  eligible × uptake × activation × retention-weighted benefit = population value
  — four multiplications; improving the smallest factor usually
  dominates (theory-of-constraints for funnels)
```

## Řešený příklad

Komisař nabízí aplikaci pro prevenci diabetu 80 000 způsobilým obyvatelům:

```
Invited → registered:  80,000 → 12,000  (uptake 15%)
Registered → activated (first session + goal set, 7 days): 12,000 → 5,400 (45%)
Activated → completed 6-month programme: 5,400 → 1,600 (30%)

Programme effect (trial, completers): 0.03 QALYs + £180 avoided costs
Population value = 1,600 × (0.03 × £20,000 + £180) ≈ £1.25M
Per-eligible-person value = £15.6 — versus £780 if every eligible person completed.

Where to invest? Doubling uptake (15→30%) doubles value; raising
activation 45→65% adds ~44%; both beat further polishing the programme
content the 1,600 already complete.
```

## Souvislost se softwarovým inženýrstvím

Aktivace je nejlépe inženýrsky zvládnutelná fáze trychtýře: tření při ověření identity, toky souhlasu, návrh prázdných stavů a doba do první hodnoty jsou kód, nikoli politika (medián doby do první hodnoty ve zdravotnictví ≈ 1 den 7 hodin podle benchmarkových dat – každá hodina z ní je expozice odchodu). Přijetí je problém distribučních systémů: integrace do cest doporučení (okamžik předpisu), pozvánky podpořené praktickým lékařem (přenos důvěry) a přístupnost (jazyk, digitální dovednosti – viz [dosah a rovnost](../dosah-a-rovnost/)). Výše uvedený model hodnoty trychtýře je generátorem byznys případu pro obojí: vynásobte činitele, najděte omezení a cenu opravy poměřte s populační hodnotou, kterou uvolní.

## Úskalí

- **Aktivace definovaná podle pohodlí** (ověřený e-mail) místo klinického významu (první terapeutická akce) – nafukuje metriku a přerušuje řetězec hodnoty.
- **Hrátky se jmenovatelem přijetí**: „z těch, kdo navštívili web“ oproti skutečně způsobilé populaci – komisaře zajímá to druhé.
- **Výběrové efekty**: snadno aktivovatelní uživatelé jsou nejméně nemocní a nejméně deprivovaní; zlepšení trychtýře může rozšířit nerovnosti a přitom zlepšit průměry.

## Zdroje

- Activation benchmarks (healthcare SaaS). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- DiGA activation data, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- RE-AIM framework. <https://re-aim.org/>
