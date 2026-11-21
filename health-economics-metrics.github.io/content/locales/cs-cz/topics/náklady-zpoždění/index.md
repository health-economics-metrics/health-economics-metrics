# Náklady zpoždění (CoD)

Náklady zpoždění jsou ekonomická hodnota ztracená za jednotku času, po kterou funkce, produkt nebo služba *není* dodána. Je to nejsilnější most mezi metrikami softwarové dodávky a health economics: převádí „dodali jsme pozdě“ na měnu – nebo na QALY.

## Proč na tom záleží

Reinertsenovo pravidlo: „Pokud kvantifikujete jedinou věc, kvantifikujte Cost of Delay.“ Většina organizací ví, kolik projekt stojí, ale ne kolik stojí měsíc zpoždění, takže optimalizují rozpočty a přitom krvácejí časovou hodnotu. U zdravotnického softwaru jsou sázky doslovné: každý týden, o který se zpozdí zlepšení cesty, pacienti čekají déle v horších zdravotních stavech. CoD je nejsilnější matematický rámec k předložení zainteresovaným stranám v NHS, protože oceňuje *absenci* vašeho softwaru.

## Matematika

```
CoD = benefit per unit time forgone while undelivered   (£/week or QALYs/week)

Total delay loss = CoD × delay duration

For prioritization, see wsjf-and-cd3.md: CD3 = CoD / duration.
```

U klinického softwaru vyjadřujte jak ve zdraví, tak v penězích:

```
CoD_health = patients affected per week × QALY gain per patient
CoD_money  = CoD_health × λ (willingness-to-pay threshold, £20k–30k/QALY)
             + operational savings per week forgone
```

## Řešený příklad

**Provozní**: software ušetří 200 £ na pacienta na cestě; trust zpracuje 50 takových pacientů týdně.

```
CoD = 200 × 50 = £10,000/week
A 10-week procurement delay costs 200 × 50 × 10 = £100,000 in avoidable waste.
```

**Klinický**: zlepšení triáže odstraní 5 týdnů čekání (užitek 0,68 → 0,80 dříve) pro 100 pacientů týdně:

```
QALY gain per patient = (5/52) × 0.12 ≈ 0.0115
CoD_health = 100 × 0.0115 = 1.15 QALYs/week
CoD_money  = 1.15 × £20,000 ≈ £23,000/week of health value
```

Šestiměsíční zpoždění nasazení „stojí“ ~30 QALY – argument, který přerámuje skluz spuštění IT na klinickou událost. (Měřítko: slavná analýza Maersku od Black Swan Farming našla jednotlivé funkce s CoD ≈ 200 tis. USD týdně, které čekaly 38 týdnů.)

## Souvislost se softwarovým inženýrstvím

CoD je metrika, která činí [dobu realizace DORA](../metriky-dora/) a [efektivitu toku](../metriky-toku/) finančně čitelnou: doba realizace × CoD = peníze (nebo zdraví) spálené ve frontách. Využití:

- **Prioritizace**: řaďte práci podle CoD/trvání ([WSJF/CD3](../wsjf-a-cd3/)) místo nejhlasitějšího zainteresovaného.
- **Ekonomika procesu**: dvoutýdenní cyklus vydání má očekávané náklady zpoždění ~1 týden × CoD na funkci oproti kontinuálnímu dodávání – oceňte dávku.
- **Zadávání zakázek**: cykly zadávání v NHS o délce 6–18 měsíců mají CoD; jeho ukázání mění rozhovory o naléhavosti (protějšek dostupnosti viz [analýza dopadu na rozpočet](../analýza-dopadu-na-rozpočet/)).

## Úskalí

- **Předpoklad lineárního CoD**: některá práce má hodnotu ve tvaru termínu (regulační data – nekonečné CoD po datu, nulové před ním) nebo klesající hodnotu (okna prvního na trhu). Před násobením klasifikujte profil naléhavosti.
- **CoD u výstupů, které nikdo nechce**: zpoždění stojí jen tehdy, když věc má hodnotu; odpad opožděný je zdarma.
- **Dvojí započtení zpoždění a diskontování**: [diskontování](../diskontování-a-časová-preference/) už oceňuje čas na víceletých horizontech; CoD je jeho provozní verze uvnitř horizontu. CoD používejte pro týdny/měsíce, posun NPV pro roky.

## Zdroje

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
