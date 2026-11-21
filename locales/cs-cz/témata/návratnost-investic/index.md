# Návratnost investic (ROI)

ROI je poměr čistého zisku k investovaným penězům. Je to metrika, kterou inženýrství a finance už sdílejí – health economics přidává disciplínu, díky níž tvrzení o ROI přežije prověrku: deklarovanou perspektivu, komparátor, horizont a kategorie přínosů.

## Proč na tom záleží

ROI je lingua franca držitelů rozpočtů a používá ho i veřejné zdraví: přelomový přehled Masters et al. zjistil **mediánové ROI 14,3:1** u intervencí veřejného zdraví (každá 1 £ vrací ~14 £ širší ekonomice a zdravotnímu systému) – číslo široce používané k argumentaci pro výdaje na prevenci. Ale toto 14:1 je *společenské, dlouhodobé* číslo; ROI finančního ředitele nemocnice je z perspektivy plátce a na 1–3 roky. Většina sporů o ROI jsou ve skutečnosti spory o nedeklarovanou perspektivu.

## Matematika

```
ROI = (Benefits − Costs) / Costs      (often × 100%)
Payback period = Costs / annual net benefit
```

Tvrzení o ROI je bez čtyř deklarací nedostatečně specifikované:

1. **Perspektiva** – čí přínosy se počítají? (viz [perspektiva analýzy](../perspektiva-analýzy/))
2. **Komparátor** – oproti jaké alternativě? (viz [náklady obětované příležitosti](../náklady-obětované-příležitosti/))
3. **Horizont** – po jak dlouho a [diskontováno](../diskontování-a-časová-preference/)?
4. **Třída přínosu** – uvolňující hotovost, kapacita, nebo kvalitativní? (viz [uvolňující vs neuvolňující hotovost](../úspory-uvolňující-hotovost-vs-neuvolňující-hotovost/))

## Řešený příklad

Systém elektronického rozpisování, náklady 500 000 £ za 3 roky.

```
Cash-releasing:  agency shift reduction        £450,000
Capacity:        ward-manager admin time freed £600,000 (valued, not banked)
Qualitative:     staff satisfaction, safety    not monetized
Strict financial ROI  = (450,000 − 500,000)/500,000 = −10%
Economic ROI          = (1,050,000 − 500,000)/500,000 = +110%
```

Obě čísla jsou pravdivá. Dodavatel, který CFO uvede „+110 % ROI“, když ten může zajistit jen 450 tis. £, ztratí důvěru; předložení obou, označených, ji získá. Stejné rozdělení chrání interního šampiona, když finance po dvou letech audituje přínosy.

## Souvislost se softwarovým inženýrstvím

Každý návrh nástrojů má slajd s ROI; téměř žádný nedeklaruje čtyři parametry. Nejčastějším selháním je míchání kategorií: kapacitní zisky (minuty vývojářů) prezentované jako finanční návratnost. ROI AI/platforem strukturujte jako v řešeném příkladu výše – řádek hotovosti, řádek kapacity, kvalitativní řádek – a přidejte [analýzu citlivosti](../analýza-citlivosti/) u měkkých čísel. K ověření reality výkazu zisku a ztráty u ROI AI konkrétně viz [návratnost investic do AI](../návratnost-investic-do-ai/).

## Úskalí

- **Praní perspektivy**: společenské přínosy za desetiletí citované držiteli rozpočtu s 12měsíčním horizontem.
- **Hrubé místo čistého**: „vrací 3 mil. £“ při výdaji 2 mil. £ je 50% ROI, nikoli 300 %.
- **Maximalizace poměru**: drobní jmenovatelé dávají velkolepá ROI u triviálních investic; portfolia řaďte podle NPV nebo [čistého peněžního přínosu](../čistý-peněžní-přínos/), ROI používejte jako síto.
- **Žádný audit přínosů**: předpovězené ROI bez sledování [realizace přínosů](../realizace-přínosů/) je slib, nikoli výsledek.

## Zdroje

- Masters R, et al. "Return on investment of public health interventions: a systematic review." J Epidemiol Community Health 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
- HM Treasury Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
