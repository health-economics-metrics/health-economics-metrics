# Inkrementální poměr nákladové efektivity (ICER)

ICER jsou dodatečné náklady na dodatečnou jednotku zdravotního účinku, když zvolíte jednu možnost místo další nejlepší alternativy. Je to titulkové číslo health technology assessment. (Když je jednotkou účinku QALY, nazývá se také inkrementální poměr nákladů a užitku, ICUR.)

## Proč na tom záleží

Zdravotní systémy nikdy nehodnotí technologii izolovaně – vždy *inkrementálně*, proti tomu, co by se jinak dělalo. NICE porovnává ICER technologie s prahem **20 000–30 000 £ za QALY**; americký institut ICER uvádí rozmezí 50 000–200 000 USD/QALY; Kanada pracuje zhruba s 50 000 CAD/QALY. Zda je váš produkt pro národní zdravotní službu „vhodný“, je formálně otázkou, zda jeho ICER překoná místní práh. Viz [prahy ochoty platit](../prahy-ochoty-platit/).

## Matematika

```
ICER = (Cost_new − Cost_comparator) / (Effect_new − Effect_comparator)
     = ΔC / ΔE
```

Pravidla interpretace:

- ΔC < 0, ΔE > 0: nová možnost **dominuje** – levnější a lepší; poměr není třeba.
- ΔC > 0, ΔE > 0: spočtěte ICER, porovnejte s prahem λ; zaveďte, pokud ICER < λ.
- ΔC > 0, ΔE < 0: nová možnost je dominována – zamítnout.
- Poměry se chovají špatně blízko ΔE = 0 – pro řazení raději použijte [čistý peněžní přínos](../čistý-peněžní-přínos/).

Komparátorem musí být *další nejlepší nedominovaná možnost*, nikoli „nedělat nic“ – viz [dominance a hranice efektivity](../dominance-a-hranice-efektivity/).

## Řešený příklad

Služba vzdáleného monitorování pro pacienty se srdečním selháním, na 1 000 pacientů/rok, oproti obvyklé péči:

```
Costs:   service £900,000; admissions avoided save £600,000
         ΔC = 900,000 − 600,000 = £300,000
Effects: earlier intervention gains 25 QALYs
         ΔE = 25

ICER = 300,000 / 25 = £12,000 per QALY
```

12 000 £/QALY je pohodlně pod prahem NICE 20 000 £ – silný případ. Všimněte si, jak záleží na *čistých* nákladech: bez kompenzace 600 000 £ by ICER byl 36 000 £/QALY a případ by pravděpodobně neprošel. Kompenzace nákladů a kvalita jejich důkazů jsou místem, kde se tyto analýzy vyhrávají a prohrávají (viz [odvrácené následné náklady](../odvrácené-následné-náklady/)).

## Souvislost se softwarovým inženýrstvím

Disciplína ICER se přenáší na inženýrská rozhodnutí v celku:

```
(cost of option B − cost of option A) / (outcome B − outcome A)
```

– inkrementální náklady na další nasazení, na ušetřenou inženýrskou hodinu, na odvrácený incident – vždy proti další nejlepší alternativě, nikoli proti nedělání ničeho. Dva návyky, které stojí za převzetí: (1) *pojmenujte komparátor explicitně*; většina tvrzení o ROI nástrojů se tajně srovnává se slaměným mužem; (2) *nejprve vyčistěte náklady* – nástroj, který stojí 100 tis. £, ale vytlačí 80 tis. £ stávajících výdajů, má ΔC = 20 tis. £.

## Úskalí

- **Srovnávání ICER napříč měnami bez explicitního kroku převodu**: ICER vypočtené v měně jedné země se musí před porovnáním s prahem jiné země převést uvedenou metodou – viz [srovnání ICER napříč měnami](../srovnání-icer-napříč-měnami/), proč může samotná volba převodního faktoru (parita kupní síly vs tržní směnný kurz) převrátit rozhodnutí o zavedení.
- **Hrátky s komparátorem**: srovnání se zastaralým nebo uměle špatným základem nafukuje ΔE a lichotí ICER.
- **Průměry místo přírůstků**: náklady na QALY celého programu nejsou ICER jeho rozšíření nebo zavedení.
- **Uctívání bodových odhadů**: ICER jsou poměry dvou nejistých rozdílů; uvádějte nejistotu pomocí [PSA a CEAC](../pravděpodobnostní-analýza-citlivosti/).
- **Záporná ICER jsou nejednoznačná** (levnější-a-lepší vs dražší-a-horší dávají stejné znaménko) – nikdy neuvádějte záporné ICER, aniž byste řekli, o který kvadrant jde.

## Zdroje

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
