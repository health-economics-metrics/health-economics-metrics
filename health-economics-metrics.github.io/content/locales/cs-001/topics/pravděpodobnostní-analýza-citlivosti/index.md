# Pravděpodobnostní analýza citlivosti (PSA)

PSA přiřadí pravděpodobnostní rozdělení každému nejistému parametru, vzorkuje je všechny současně tisíckrát (Monte Carlo) a vykazuje *pravděpodobnost*, že možnost je nejlepší volbou – místo jediného bodového odhadu.

## Proč na tom záleží

Referenční případ NICE PSA *vyžaduje*. Deterministická analýza odpovídá na „co když je špatný jeden vstup?“; PSA odpovídá na „vzhledem ke všemu, co nevíme zároveň, jak pravděpodobné je, že se rozhodujeme správně?“ Její signaturní výstup, **křivka přijatelnosti nákladové efektivity (CEAC)**, vykresluje pravděpodobnost, že je možnost nákladově efektivní, proti prahu ochoty platit – mění „ICER je 24 000 £/QALY“ na „existuje 78% šance, že je to správná volba při 30 000 £/QALY“.

## Matematika

```
For each of N draws (N ≈ 10,000):
  sample every parameter θ from its distribution
    (costs ~ Gamma, probabilities ~ Beta, utilities ~ Beta, effects ~ Normal/logNormal)
  compute NMB_j(θ) = λ × Effect_j(θ) − Cost_j(θ) for each option j
CEAC_j(λ) = fraction of draws in which option j has the highest NMB at threshold λ
```

K NMB viz [čistý peněžní přínos](../čistý-peněžní-přínos/), k λ viz [prahy ochoty platit](../prahy-ochoty-platit/).

## Řešený příklad

Byznys případ migrace platformy. Tři nejisté vstupy:

```
Migration cost      ~ Gamma,  mean £800k, sd £200k
Annual benefit      ~ Normal, mean £350k, sd £150k
Benefit duration    ~ Uniform, 3–6 years
```

Pro každé z 10 000 losování spočtěte čistý přínos = trvání × roční − náklady (diskont pro přehlednost vynechán). Ilustrativní výsledky:

```
Mean net benefit:      £775k
Probability net > 0:   0.86
5th–95th percentile:  −£180k … +£1.9M
```

Bodový odhad říkal „zjevně ano“. PSA říká „z 86 % ano, se skutečným ocasem, kde ztratíme 180 tis. £+“ – což je to, co vlastník portfolia skutečně potřebuje, a oceňuje to argument pro nejprve provedený discovery spike (viz [EVPI](../očekávaná-hodnota-perfektní-informace/)).

## Souvislost se softwarovým inženýrstvím

Inženýři už Monte Carlu při předpovídání dodávky důvěřují (vzorkování propustnosti poráží bodové odhady). Rozšiřte stejný aparát na peníze: rozdělení na adopci, ušetřený čas a plat, a pak vykazujte „pravděpodobnost, že tato investice do platformy je čistě kladná“ místo ROI s falešnou přesností. Křivka ve stylu CEAC – pravděpodobnost, že je nejlepší možností, jako funkce toho, jak organizace oceňuje inženýrskou hodinu – je pro finanční komisi skutečně lepším artefaktem než jakékoli jediné číslo.

## Úskalí

- **Odpadní rozdělení**: PSA s vymyšlenými směrodatnými odchylkami je deterministická analýza v laboratorním plášti. Zakládejte rozptyly na datech nebo strukturovaném zjišťování názorů expertů.
- **Ignorování korelace** mezi parametry (vysoká adopce obvykle koreluje s vysokým ušetřeným časem); nezávislé vzorkování podhodnocuje riziko v ocasech.
- **Vykazování jen průměru** simulace – celým smyslem je rozdělení a pravděpodobnost rozhodnutí.

## Zdroje

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
