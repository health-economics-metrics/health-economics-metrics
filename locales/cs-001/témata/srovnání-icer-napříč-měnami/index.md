# Srovnání ICER napříč měnami

Srovnání [ICER](../inkrementální-poměr-nákladové-efektivity/) vypočteného v měně jedné země s [prahem ochoty platit](../prahy-ochoty-platit/) jiné země – nebo sdružování nákladových dat sebraných napříč multinárodní studií – vyžaduje explicitní, auditovatelný krok převodu měn. Když zvolíte špatnou metodu převodu, táž podkladová evidence může převrátit rozhodnutí o zavedení, i když se na klinických ani nákladových datech nic nezměnilo.

## Proč na tom záleží

Metodické pokyny ISPOR pro multinárodní klinické studie (Willke et al., *Health Economics*, 1998) doporučují převádět náklady na zdroje pomocí **parity kupní síly (PPP)** – nikoli tržních směnných kurzů – při srovnávání reálné ekonomické hodnoty zdrojů napříč zeměmi, a tržní devizové kurzy vyhradit tomu, k čemu skutečně slouží: modelování skutečných přeshraničních hotovostních plateb. Záměna obojího je jednou z nejčastějších metodických chyb multinárodního HTA, právě proto, že obojí vypadá jako „směnný kurz“ pro někoho, kdo pokyny nečetl, a tabulka vám špatné provedení nezabrání.

## Matematika

```
icer_in_local_currency = convert(icer_in_source_currency, conversion_factor)

conversion_factor should be:
  PPP conversion factor  — for comparing real economic value of resources
                            across countries (ISPOR-recommended for
                            multinational CEA)
  market FX rate         — only for actual cross-border cash payments

adopt if icer_in_local_currency < local_threshold
```

Samotné rozhodovací pravidlo je obyčejné [pravidlo prahu ICER](../prahy-ochoty-platit/) – `adopt if ICER < λ` – a metodická otázka, kterou toto téma řeší, se týká výhradně toho, *který převodní faktor* vytvoří údaj `icer_in_local_currency`, na který se pravidlo uplatňuje.

## Řešený příklad

ICER léku z americké studie je 45 000 USD/QALY. Hypotetická dovážející země si stanoví vlastní ilustrativní práh 34 000 £/QALY (hypotetický údaj specifický pro zemi jen pro tento příklad – skutečné prahy se mezi zeměmi liší a v čase mění a vždy musí být doloženy zdrojem a datovány).

**S převodním faktorem PPP 0,72** (ilustrativní, jen pro tento řešený příklad): 45 000 USD × 0,72 = 32 400 £/QALY. 32 400 £ < 34 000 £ → **přijmout**.

**S tržním směnným kurzem 0,79** (ilustrativní): 45 000 USD × 0,79 = 35 550 £/QALY. 35 550 £ > 34 000 £ → **zamítnout**.

Táž podkladová ICER 45 000 USD/QALY vede při převodu PPP k rozhodnutí přijmout a při převodu tržním kurzem k rozhodnutí zamítnout. To je konkrétní ilustrace, proč pokyny ISPOR považují volbu převodního faktoru za metodicky významnou – nikoli za detail zaokrouhlování ani za něco, co nechat implicitní ve vzorci tabulky, který nikdo nekontroluje.

## Souvislost se softwarovým inženýrstvím

Je to zrcadlo z health economics známé inženýrské oblasti: správnosti oceňování ve více měnách (i18n/l10n) v komerčním softwaru, kde stránka s cenami SaaS nikdy nesmí tiše porovnat částku v `$` s cenou v `£`. Typová záruka, kterou poskytuje dobře postavený typ `Money` – metody porovnání, které odmítnou porovnat neshodné měny a vynutí nejprve explicitní krok převodu – je přímou softwarově inženýrskou paralelou k metodickému bodu zde: neporovnávejte nepřevedené údaje napříč měnami a nenechte krok převodu být implicitní nebo nezdokumentovaný.

## Úskalí

- **Tiché porovnávání částek v různých měnách**: ad hoc práce HTA v tabulce, která odečítá nebo porovnává údaj v dolarech a v librách bez předchozího kroku převodu – třída chyb, kterou skutečný měnově uvědomělý typ `Money` zachytí konstrukcí, místo aby zůstala tichou chybou.
- **Záměna tržního směnného kurzu s PPP**: nejčastější metodická chyba multinárodního HTA podle pokynů ISPOR – obě čísla se mohou podstatně lišit a odpovídají na různé otázky (reálná ekonomická hodnota vs skutečný peněžní tok).
- **Nedatování použitého směnného kurzu či indexu PPP**: oba se v čase mění, takže každý citovaný převodní faktor musí být datován stejně, jako tento repozitář datuje jiné benchmarkové údaje (hodnoty uhlíku z Green Book, hodnota předcházeného úmrtí atd.).

## Zdroje

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
