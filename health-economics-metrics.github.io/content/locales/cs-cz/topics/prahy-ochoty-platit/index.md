# Prahy ochoty platit

Práh ochoty platit (WTP) je maximum, které je rozhodovatel ochoten zaplatit za jednotku zdravotního zisku – čára, která mění [ICER](../inkrementální-poměr-nákladové-efektivity/) na rozhodnutí přijmout/zamítnout.

## Proč na tom záleží

Práh je místo, kde health economics přestává být měřením a stává se politikou. Každý národní systém jeden má, explicitní nebo implicitní, a znalost místního čísla vám přesně říká, jak oceňovat tvrzení o zdravotní hodnotě:

| Orgán | Práh (podle výzkumu, 2024–2025) |
|---|---|
| NICE (Anglie) | 20 000–30 000 £ za QALY; empirický průměrný rozhodovací práh ≈ 24 400 £ (2022–24); modifikátory závažnosti zvyšují efektivní strop na ~36–51 tis. £; vysoce specializované technologie až 100 tis. £+ |
| ICER (USA, nevládní) | cenové benchmarky 100 000–150 000 USD za QALY/evLYG; uvádí rozmezí 50–200 tis. USD |
| Kanada (CADTH / CDA-AMC) | ≈ 50 000 CAD za QALY pracovní práh |
| WHO-CHOICE (historicky, globálně) | 1–3× HDP na obyvatele za odvrácené DALY (nyní odrazováno jako příliš hrubé) |
| Empirická strana nabídky ve Spojeném království (Claxton et al.) | ≈ 13 000 £ za QALY skutečně vytlačené na hraně NHS |

## Matematika

Práh λ vstupuje do každého rozhodovacího pravidla:

```
Adopt if ICER = ΔC/ΔE < λ
Equivalently: adopt if NMB = λ×ΔE − ΔC > 0
```

Dvě teorie toho, čím λ *je*:

- **Strana poptávky**: co je společnost ochotna zaplatit za zdraví (hodnotový soud).
- **Strana nabídky**: zdraví, které rozpočet nyní vytváří na hraně (empirická veličina – Claxtonových ~13 tis. £/QALY). Pokud λ použité pro rozhodnutí přesahuje sazbu na straně nabídky, schvalování nové technologie vytlačí více zdraví, než přidá.

## Řešený příklad

Vaše digitální terapeutikum přináší 0,05 QALY na léčeného pacienta při čistých nákladech (cena minus kompenzace) 800 £.

```
ICER = 800 / 0.05 = £16,000 per QALY
```

- Anglie: pod 20 tis. £ → financovatelné. Maximální obhajitelná cena: při λ = 20 000 £ je price_max = 0,05 × 20 000 + kompenzace = 1 000 £ + kompenzace.
- Americké komerční rámování při 150 tis. USD/QALY: cena založená na hodnotě je mnohem vyšší.
- Práh země založený na HDP na obyvatele 4 000 USD: tentýž produkt musí stát čistě pod ~200 USD.

Týž produkt, tři trhy, tři ceny – práh *je* cenovým modelem. Je to cenotvorba založená na hodnotě, počítaná opačně od λ.

## Souvislost se softwarovým inženýrstvím

Každá inženýrská organizace má implicitní λ: laťku, při níž financuje nástroje na ušetřenou inženýrskou hodinu. Jeho zveřejnění – „financujeme cokoli pod 40 £ za věrohodnou ušetřenou inženýrskou hodinu“ – umožňuje srovnání investic do platforem v žebříčku, přesně jako žebříčky nákladů na QALY řadí zdravotní výdaje. Přenáší se i poučení ze strany nabídky: vaše skutečné interní λ je to, co váš *současný* backlog vytváří na hraně, nikoli to, co vedení říká, že čas stojí.

## Úskalí

- **Nakupování prahů** napříč jurisdikcemi nebo citování stropu HST pro běžný produkt.
- **Pojímání λ jako cenové podlahy**: překonat práh je nutné, nikoli postačující – [dopad na rozpočet](../analýza-dopadu-na-rozpočet/) může potopit i produkt dostupný na jednotku.
- **Ignorování toho, že se prahy pohybují**: modifikátory závažnosti NICE (2022) a periodické revize mění efektivní λ; datujte svá tvrzení.
- **Srovnávání ICER s prahem v jiné měně bez předchozího převodu**: viz [srovnání ICER napříč měnami](../srovnání-icer-napříč-měnami/) – metoda převodu (parita kupní síly vs tržní směnný kurz) je metodicky významná, nikoli detail zaokrouhlování.
- **Záměna ocenění založeného na λ s tradicí VSL/VPF z trhu práce**: pocházejí z různých teoretických tradic (metodika omezená zdravotním rozpočtem vs odhalená preference z kompromisů mzda–riziko) a nelze je vždy sladit – k alternativnímu přístupu odhalených preferencí při oceňování života viz [Hodnota statistického života](../hodnota-statistického-života/).

## Zdroje

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
