# Technický dluh

Technický dluh je implicitní budoucí náklad účelových minulých rozhodnutí v kódové základně: dlužná práce na nápravu (**jistina**) a trvalá brzda dodávání, kterou vyvíjí (**úrok**). Kvantifikační metody jako SQALE jej mění z metafory na oceněný závazek.

## Proč na tom záleží

Nekvantifikovaný je technický dluh kvílení; kvantifikovaný je byznys případ. Průmyslové základny (CAST Appmarq, 1 400 aplikací / 550 mil. LOC): historicky ≈ **3,61 USD jistiny technického dluhu na řádek kódu**, přičemž typické kódové základny nesou poměr dluhu 15–20 % nákladů na přestavbu, oproti běžně používané zdravé hranici ≤ 5 % (známka „A“ v SonarQube). Rámec health economics sedí přesně: dluh je *chronické onemocnění* – neléčený progreduje, jeho „úrok“ se skládá jako pomalejší dodávání a vyšší míra vad a náprava soupeří o kapacitu s prací na funkcích přesně tak, jak prevence soupeří s léčbou.

## Matematika

```
SQALE principal   = Σ over violations (remediation time) × developer cost rate
Technical debt ratio (TDR) = remediation cost / redevelopment cost × 100
                    (SonarQube grades: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)
Interest (the number that justifies paydown):
  interest/year = Δ delivery velocity × value per unit velocity
                + Δ defect rate × cost per defect
Paydown case  = PV(interest avoided over horizon) − remediation cost
                (discounted — see discounting-and-time-preference.md)
```

Jistina stanovuje závazek; **úrok** tvoří investiční případ. Zaplatit 500 tis. £ jistiny, aby se odvrátilo 40 tis. £ úroku ročně, je špatný obchod; odvrátit 400 tis. £ ročně je výborné.

## Řešený příklad

Integrační vrstva klinických záznamů o 400 tis. LOC: jistina SQALE 3 800 hodin × 75 £ = **285 tis. £**; TDR ≈ 12 % (známka C). Změřený úrok: týmy pracující s touto vrstvou mají o 40 % delší cycle time a 2× vyšší míru selhání změn oproti základně celého majetku. Vrstva pohltí 6 000 vývojářských hodin ročně:

```
Interest ≈ 6,000 × 0.40 × £75      = £180,000/year (velocity drag)
         + 12 extra failures × £8,000 = £96,000/year (rework/incidents)
         ≈ £276,000/year
Remediate the worst 30% of principal (£85k) targeting hotspots → modelled
interest reduction 60%: saves ~£166k/year. Payback ≈ 6 months.
```

Cílení na hotspoty záleží: úrok dluhu se koncentruje tam, kde se maximalizuje frekvence změn × hustota dluhu – náprava zřídka dotčeného dluhu nekoupí nic, jako léčba stavu, který by nikdy neprogredoval ([ekonomika prevence](../ekonomika-prevence/)).

## Souvislost se softwarovým inženýrstvím

Importy z health economics, které vylepšují argumenty o technickém dluhu: vyjádřete majetek jako **soupis zátěže** (ve stylu [DALY](../rok-života-upravený-o-disabilitu/) – kde jsou ztracené zdravé inženýrské roky?); zdůvodněte splácení matematikou progrese, poctivě (obvykle nákladově efektivní, nikoli nákladově úsporné); vážte nápravu nejhorších systémů [deficitem závažnosti](../deficit-qaly-a-modifikátory-závažnosti/); a velké návrhy nápravy předkládejte s analýzou kompenzací, která přežije pravidla [odvrácených následných nákladů](../odvrácené-následné-náklady/) – pravděpodobnostně vážené, diskontované, započtené jednou.

## Úskalí

- **Vykazování jen jistiny**: velké strašidelné číslo bez odhadu úroku nic nezdůvodní.
- **Doslovné přebírání čísel dluhu z nástrojů**: SQALE počítá porušení pravidel; míjí architektonický dluh (ten drahý) a počítá drobnosti.
- **Utopismus nulového dluhu**: optimální úroveň dluhu není nula – dluh je páka; otázkou je úroková sazba.
- **„Přepis odstraní všechno“**: návrhy přepisu musí splnit tatáž pravidla kompenzace – kontrafaktuální náklad, pravděpodobnost, diskontování.

## Zdroje

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
