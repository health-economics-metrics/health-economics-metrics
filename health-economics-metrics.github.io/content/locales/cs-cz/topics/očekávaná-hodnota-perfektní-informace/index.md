# Očekávaná hodnota perfektní informace (EVPI)

EVPI je maximální částka, kterou by měl rozhodovatel zaplatit za odstranění nejistoty před rozhodnutím – formální cena za „nejdřív uděláme studii“.

## Proč na tom záleží

Zdravotní systémy neustále stojí před volbou: zavést nyní na nedokonalých důkazech, nebo nejprve financovat další výzkum. EVPI dává číslo druhé možnosti. Pokud je EVPI 50 000 £ a navrhovaná studie stojí 2 miliony £, zaveďte nyní. Pokud je EVPI 20 milionů £, studie je výhodná koupě. Stejná otázka – „máme to pilotovat před nasazením?“ – vyvstává u každého rozhodnutí o podnikovém nástroji a téměř nikdo ji neoceňuje. K ocenění opce rozšířit projekt později, nikoli opce nejprve sbírat informace, viz [oceňování reálných opcí](../oceňování-reálných-opcí/).

## Matematika

EVPI je rozdíl mezi rozhodováním s dokonalým předvídáním a rozhodováním nyní podle očekávání:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = uncertain parameters (with their joint distribution)
NMB(j,θ) = net monetary benefit of option j given θ
```

První člen: průměr výplaty nejlepší volby napříč každým možným světem (vždy vyberete správně). Druhý člen: výplata jediné možnosti, která je v průměru nejlepší (musíte se zavázat nyní). EVPI ≥ 0 vždy. Populační EVPI násobí počtem dotčených rozhodnutí. Počítá se přímo z losování [PSA](../pravděpodobnostní-analýza-citlivosti/).

## Řešený příklad

Zavést asistenta AI pro dokumentaci u 5 000 klinických pracovníků, nebo ne. Dva světy:

```
World A (p = 0.6): assistant saves 20 min/day → NMB of rollout = +£8M
World B (p = 0.4): assistant saves ~0 (workflow friction) → NMB of rollout = −£3M
NMB of "don't roll out" = £0 in both worlds.
```

Rozhodnout nyní: E[NMB zavedení] = 0,6 × 8 − 0,4 × 3 = **+3,6 mil. £** → zavést.

S perfektní informací: ve světě A zvolit zavedení (+8 mil. £), ve světě B nic (0 £). Očekávaná hodnota = 0,6 × 8 + 0,4 × 0 = **4,8 mil. £**.

```
EVPI = 4.8M − 3.6M = £1.2M
```

Důkladný tříměsíční pilot za 150 000 £, který podstatně vyřeší, ve kterém světě jste, se rozhodně vyplatí – a jakýkoli pilot dražší než 1,2 mil. £ ne, jakkoli důkladný.

## Souvislost se softwarovým inženýrstvím

EVPI je ekonomika spiku, pilotu, A/B testu a proof-of-conceptu. Dává dvě praktická pravidla:

- **Pilot stojí za financování, jen pokud se rozhodnutí může skutečně změnit.** Pokud byste nasadili bez ohledu na výsledek pilotu, EVPI = 0 a pilot je divadlo.
- **Omezte výdaje na pilot hodnotou EVPI.** Hodnota informace je omezena hodnotou rozhodnutí, o němž informuje.

Parciální EVPI (EVPPI) to rozšiřuje na jednotlivé parametry: „kolik stojí přesně zjistit číslo ušetřeného času?“ – což říká, co by měl pilot měřit. K ocenění *konkrétní* navrhované studie, nikoli odstranění veškeré nejistoty, viz [EVSI](../očekávaná-hodnota-výběrové-informace/).

## Úskalí

- **Pilotování bez připojeného rozhodovacího pravidla** – informace, která nemůže změnit volbu, je z definice bezcenná.
- **Ignorování nákladů zpoždění při sběru informací**: šestiměsíční pilot zdržuje šest měsíců přínosu ([náklady zpoždění](../náklady-zpoždění/)); čistá hodnota pilotu = vyřešené EVPI − náklady zpoždění − náklady pilotu.
- **Považování EVPI za předpověď.** Je to horní hranice hodnoty informace, nikoli odhad toho, co konkrétní studie přinese.

## Zdroje

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
