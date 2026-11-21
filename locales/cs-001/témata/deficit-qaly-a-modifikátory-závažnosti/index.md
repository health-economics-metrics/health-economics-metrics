# Deficit QALY a modifikátory závažnosti

Deficit QALY (shortfall) měří, kolik budoucího zdraví nemoc pacientům odebírá ve srovnání s běžnou populací. NICE jej používá k uplatnění **modifikátorů závažnosti**: čím nemocnější populace, tím větší hodnotu má každé získané QALY – až 1,7násobek standardního prahu.

## Proč na tom záleží

Od příručky NICE z roku 2022 je závažnost explicitním násobitelem hodnoty zdravotních zisků, který nahradil starou přirážku za konec života. Technologie pro závažné onemocnění se posuzuje proti efektivnímu prahu až ~51 000 £/QALY místo 30 000 £. Pokud váš software slouží silně postižené populaci (pokročilé srdeční selhání, těžké duševní onemocnění), může modifikátor závažnosti znamenat rozdíl mezi financovatelným a nefinancovatelným ekonomickým případem – a k jeho uplatnění potřebujete matematiku deficitu.

## Matematika

Dvě míry, počítané přes zbývající život při současném standardu péče:

```
Absolute shortfall     = QALYs_general_population − QALYs_with_condition
Proportional shortfall = Absolute shortfall / QALYs_general_population
```

Váhy NICE 2022 (platí ta míra, která dává vyšší váhu):

```
Weight ×1.0: absolute < 12 and proportional < 0.85
Weight ×1.2: absolute ≥ 12 or proportional ≥ 0.85
Weight ×1.7: absolute ≥ 18 or proportional ≥ 0.95
```

Váha násobí ΔE (nebo ekvivalentně práh): efektivní λ se stává 24–36 tis. £ při ×1,2 a 34–51 tis. £ při ×1,7.

## Řešený příklad

Pacienti s agresivním onemocněním, průměrný věk 60 let. Běžná populace v 60 letech očekává 14,2 diskontovaného QALY; s onemocněním při současné péči 2,1.

```
Absolute shortfall     = 14.2 − 2.1 = 12.1  (≥ 12 → qualifies for ×1.2)
Proportional shortfall = 12.1 / 14.2 = 0.852 (≥ 0.85 → also ×1.2)
```

ICER vaší monitorovací platformy je 26 000 £/QALY – nad standardním středem rozmezí 20–30 tis. £, hraniční. S váhou ×1,2: efektivní ICER = 26 000 / 1,2 ≈ **21 700 £/QALY** – pohodlně financovatelné. Výpočet deficitu právě posunul rozhodnutí.

## Souvislost se softwarovým inženýrstvím

Vážení závažnosti je formální verze něčeho, co inženýrské organizace dělají instinktivně: utrácet více na jednotku zlepšení u nejhůře postavených systémů. Přenositelný vzor – spočtěte „deficit SLO“ každé služby (jak daleko pod očekávanou zdravou základnou běží, absolutně i proporčně) a podle toho vážte hodnotu nápravy. To zdůvodňuje aritmetikou místo argumentů, proč hořící starý systém dostává více investic na ušetřenou hodinu než zdravý. Nese to také stejné poučení o správě: zveřejněte váhy *před* schůzkou o prioritizaci, jinak si každý tým nárokuje závažnost.

## Úskalí

- **Výpočet deficitu proti špatné základně**: měří se při *současném standardu péče*, nikoli proti neléčenému přirozenému průběhu.
- **Citlivost na věk**: deficit silně závisí na věku populace (mladší pacienti mají více QALY ke ztrátě → vyšší absolutní deficit); použijte skutečné věkové rozdělení léčené populace.
- **Předpoklad, že modifikátor platí i jinde** – je to mechanismus NICE (Anglie); jiné orgány HTA řeší závažnost odlišně (nebo vůbec).

## Zdroje

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
