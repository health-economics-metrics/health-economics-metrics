# Ekonomika prevence

Ekonomika zásahu dříve, než nemoc vznikne nebo progreduje. Titulkový nález je neintuitivní: **většina prevence neušetří peníze** – kupuje zdraví za dobrou cenu. Přelomová analýza Cohena, Neumanna a Weinsteina v NEJM zjistila, že méně než 20 % preventivních intervencí je čistě úsporných; zbytek je v nejlepším případě nákladově efektivní.

## Proč na tom záleží

„Prevence šetří peníze“ je nejopakovanější nepravdivé tvrzení ve zdravotní politice a byznys případy na něm postavené zdravotní ekonomové rozbijí. Poctivá struktura: prevence stojí peníze nyní (screening celých populací, léčba rizikových faktorů u lidí, kteří by nikdy neonemocněli) a vrací zdraví později – obvykle při *dobrých* nákladech na QALY, občas při úspoře, někdy za strašnou cenu. Vědět, v jakém režimu jste, je ta analýza. Rozdíl záleží komerčně: preventivní produkt prodávaný jako „šetří NHS peníze“ si říká o audit, který neprojde; prodávaný jako „kupuje QALY za 4 000 £“ může na stejných faktech vyhrát. Verzi uvnitř cesty viz [dřívější intervence](../dřívější-intervence/). Před oceněním preventivního programu odpovídá [populační přičitatelný podíl](../populační-přičitatelný-podíl/) nejprve na otázku velikosti – jakou část zacílené zátěže nemoci by rizikový faktor, na který program míří, mohl věrohodně odstranit.

## Matematika

```
Net cost of prevention (per person) =
    intervention cost × everyone treated
  − downstream costs avoided × the few who would have progressed
  (both discounted — the avoided costs are years away; see
   discounting-and-time-preference.md)
Cost-saving requires: intervention cost < P(progression) × avoided cost × discount factor
Cost-effective requires only: net cost / QALYs gained < threshold
```

Paradox prevence: náklady intervence se násobí přes celou populaci; přínosy připadají jen kontrafaktuálnímu hrstce.

## Řešený příklad

Aplikace pro řízení hypertenze nabízená 100 000 rizikových dospělých, 25 £/osobu/rok. Za 10 let zabrání 400 mrtvicím (každá stojí 45 000 £ diskontovaně a 3 ztracená QALY).

```
Cost:    100,000 × £25 × 10 yrs (discounted ≈ ×8.3) ≈ £20.8M
Offsets: 400 × £45,000 = £18.0M
Net cost ≈ £2.8M — NOT cost-saving
QALYs gained = 400 × 3 = 1,200
Cost per QALY = 2.8M / 1,200 ≈ £2,300/QALY — outstandingly cost-effective
```

Týž program, obě pravdy: v hotovosti ztrácí 2,8 mil. £ a kupuje zdraví za desetinu prahu NICE. Financujte jej podle druhého čísla; nikdy neslibujte první.

## Souvislost se softwarovým inženýrstvím

Shift-left kvalita je ekonomika prevence, včetně výhrady. Revize, testy a statická analýza uplatňují náklad na *každou* změnu, aby zachytily problémy u hrstky, která by dospěla do produkčních incidentů. Křivka nákladů vad (10–100× podle fáze) hraje roli nákladů mrtvic – a poctivý závěr zrcadlí zdravotnictví: shift-left je obvykle nákladově *efektivní*, nikoli automaticky nákladově *úsporný*, protože většina označených problémů by se nikdy nestala incidenty (problém kontrafaktuální hrstky). Spočtěte to: celkové náklady brány za období vs skutečně odvrácené incidenty × náklady incidentu – táž struktura řešeného příkladu, s [NNT](../počet-pacientů-nutných-k-léčbě/) jako jednotkou na záchyt.

## Úskalí

- **Tvrzení o úsporách, když důkazy podporují nákladovou efektivitu** – určující chyba advokacie prevence v obou oblastech.
- **Nediskontované budoucí kompenzace**: přínosy za 15 let při nominální hodnotě.
- **Ignorování nákladů nadměrné diagnostiky/nadměrné léčby**: prevence nachází i pseudo-nemoc – viz [ekonomika screeningu](../ekonomika-screeningu/).

## Zdroje

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
