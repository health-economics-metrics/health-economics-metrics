# Náklady obětované příležitosti

Náklady obětované příležitosti (opportunity cost) jsou hodnotou nejlepší alternativy, které se vzdáte, když zavážete zdroj. V zdravotním systému s pevným rozpočtem znamená utratit 1 milion £ za jednu věc 1 milion £ zdraví *nevytvořeného* jinde.

## Proč na tom záleží

Náklady obětované příležitosti jsou nejhlubší myšlenkou health economics a tou, kterou softwaroví inženýři nejčastěji přeskakují. Zdravotní rozpočty jsou v daném roce pevné, takže nová technologie se nikdy nefinancuje z „extra“ peněz – něco vytlačuje. Otázka, kterou plátce skutečně klade, nezní „je to dobré?“, ale „je to lepší než to, co za stejné peníze dnes kupujeme?“

Proto vůbec existují prahy nákladové efektivity: práh je odhadem zdraví, které peníze kupují na hranici současného systému. Viz [prahy ochoty platit](../prahy-ochoty-platit/).

## Matematika

Neexistuje jediný vzorec; náklady obětované příležitosti jsou disciplínou srovnání:

```
Opportunity cost of choosing A = value of best forgone alternative B
Net gain from A = value(A) − value(B)
```

Empirický benchmark: Claxton et al. (2015) odhadli, že NHS vytváří jedno QALY zhruba za **13 000 £** na hraně. Takže 13 000 £ utracených za technologii, která vytvoří méně než jedno QALY, činí národ *méně* zdravým, i když technologie „funguje“.

## Řešený příklad

Transformační rozpočet trustu NHS může financovat přesně jedno z:

- **Možnost A**: software pro elektronické rozpisování – ušetří 400 000 £/rok na výdajích za agenturní personál.
- **Možnost B**: software koordinace propouštění – ušetří 2 000 lůžkodnů ročně. Při mezních nákladech asi 150 £ na skutečně uvolněný lůžkoden to je 300 000 £/rok, plus dřívější léčba čekajících pacientů.

Financovat A znamená vzdát se B. Náklady obětované příležitosti A jsou 300 000 £ B + přínos pro pacienty; *čistý* případ pro A je jen rozdíl, nikoli titulkových 400 000 £ A. Každý byznys případ, který srovnává návrh s „nedělat nic“ místo s nejlepší alternativou, nadhodnocuje jeho hodnotu.

## Souvislost se softwarovým inženýrstvím

I inženýrská kapacita je pevný rozpočet – sloty roadmapy, ne libry. Platformní tým, který financuje nástroj A šetřící inženýrské hodiny po 500 £/hod, když nástroj B dodá totéž po 200 £/hod, ničí kapacitu, přesně jako zdravotní systém financující lék za 40 000 £/QALY vytlačuje péči za 13 000 £/QALY. Disciplína se přenáší přímo:

- Vždy pojmenujte komparátor („oproti čemu?“).
- Oceňte inženýrský čas tím, co by jinak vytvořil, nikoli jen platem.
- Považujte „zbývá nám rozpočet“ za začátek analýzy, nikoli její konec.

## Úskalí

- **Srovnávání s ničím.** Správným komparátorem je další nejlepší využití peněz, což je zřídka „nedělat nic“.
- **Předpoklad, že ušetřený čas má nulové náklady obětované příležitosti.** Ušetřený čas je hodnotný jen tehdy, když je přesunut k něčemu hodnotnému – viz [úspory uvolňující vs neuvolňující hotovost](../úspory-uvolňující-hotovost-vs-neuvolňující-hotovost/).
- **Ignorování vytlačení.** „Rozpočet se rozšíří, aby se vešel“ téměř nikdy neplatí v národní zdravotní službě v rámci roku.
- **Ignorování toho, která metoda oceňuje vytlačený zdroj.** Pro ztracenou produktivitu zvlášť – z nemoci, disability nebo odcházejícího zaměstnance – viz [přístup lidského kapitálu vs metoda třecích nákladů](../přístup-lidského-kapitálu-vs-metoda-třecích-nákladů/), verze této myšlenky specifická pro produktivitní náklady.

## Zdroje

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/opportunity-cost/>
