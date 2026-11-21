# Čistý peněžní přínos (NMB)

NMB převádí výsledek nákladové efektivity na jedinou peněžní hodnotu: zdravotní zisk oceněný prahem ochoty platit minus náklady. Jeho dvojče, čistý zdravotní přínos (NHB), vyjadřuje totéž pravidlo ve zdravotních jednotkách.

## Proč na tom záleží

Poměry ([ICER](../inkrementální-poměr-nákladové-efektivity/)) jsou nešikovné: explodují blízko nulového účinku, nelze je průměrovat napříč losováními nejistoty a nedokážou čistě seřadit tři či více možností. NMB to vše řeší – je lineární, takže můžete řadit možnosti, průměrovat losování Monte Carlo a rozkládat příspěvky. Je to také podoba zdravotně-ekonomické matematiky, kterou už zná každý inženýr: *hodnota minus náklady*.

## Matematika

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = incremental effect (e.g., QALYs)
ΔC = incremental cost
λ  = willingness-to-pay threshold (see willingness-to-pay-thresholds.md)

Decision rule: adopt if NMB > 0 (equivalently NHB > 0).
Among alternatives: choose the highest NMB.
```

NMB > 0 ⇔ ICER < λ (když ΔE > 0), takže obě pravidla souhlasí – NMB se jen lépe chová.

## Řešený příklad

Tři možnosti pro službu pro diabetiky, na 1 000 pacientů, λ = 20 000 £/QALY:

```
Option           ΔC          ΔE (QALYs)   NMB = 20,000×ΔE − ΔC
App + coaching   £400,000    30           600,000 − 400,000 = £200,000
App only         £150,000    12           240,000 − 150,000 = £90,000
Extra clinics    £700,000    32           640,000 − 700,000 = −£60,000
```

Další kliniky získají nejvíce QALY, ale při tomto prahu ničí hodnotu (NMB < 0). Vyhrává aplikace + koučink. Všimněte si, že NMB umožňuje *seřadit všechny tři najednou* – párová ICER by vyžadovala postup hranice z [dominance a hranice efektivity](../dominance-a-hranice-efektivity/) a dospěla by ke stejné odpovědi.

Pohled NHB na vítěze: 30 − 400 000/20 000 = 30 − 20 = **10 QALY čistého** – zdraví získané nad rámec toho, co by táž částka vytvořila jinde.

## Souvislost se softwarovým inženýrstvím

`(hours saved × loaded hourly rate) − tool cost` – každodenní byznys případ nástroje – je doslova výpočet NMB s λ = plné náklady inženýra. Dvě vylepšení, která health economics přidává:

- **Udělejte z λ proměnnou, ne konstantu.** Vykreslete NMB proti λ („hodnota inženýrské hodiny“) a ukažte, kde se rozhodnutí převrací; různé zainteresované strany pak mohou použít vlastní ocenění bez přepočítávání vaší matematiky.
- **Myšlení NHB**: „tato platforma ušetří 5 000 inženýrských hodin, ale spotřebuje rozpočet, který by koupil 3 000 hodin kapacity dodavatele – čistě 2 000 hodin“ vynucuje srovnání nákladů obětované příležitosti v kapacitních jednotkách. Viz [náklady obětované příležitosti](../náklady-obětované-příležitosti/).

## Úskalí

- **Skrývání prahu**: NMB je bez uvedení λ bezvýznamný; uvádějte NMB při 20 tis. £ a 30 tis. £, nebo vykreslete křivku.
- **Praní drobných účinků pomocí NMB**: obrovská populace krát zanedbatelný účinek na osobu může dát velké NMB – uvádějte vedle toho účinky na osobu.
- **Zapomenutí, že NMB zdědí každou nejistotu** v ΔC a ΔE – spárujte s [pravděpodobnostní analýzou citlivosti](../pravděpodobnostní-analýza-citlivosti/).

## Zdroje

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
