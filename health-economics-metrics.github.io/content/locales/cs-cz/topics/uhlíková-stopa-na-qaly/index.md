# Uhlíková stopa na QALY

Uhlík na QALY je poměr efektivity – emise uhlíku intervence (nebo odvrácené emise) dělené QALY, které přináší – přímo analogický k nákladům na QALY, umožňující posoudit uhlíkovou efektivitu intervence vedle její nákladové efektivity. „Uhlíkově upravený čistý peněžní přínos“ jde o krok dál: monetizuje dopad uhlíku pomocí oficiálních netržních hodnot uhlíku z britského Green Book a odečítá jej od standardního [čistého peněžního přínosu](../čistý-peněžní-přínos/).

## Proč na tom záleží

NICE a NHS England nyní očekávají, že se vedle nákladů a QALY zohlední i dopad na životní prostředí. NHS má veřejný závazek k nulovým čistým emisím: nulové čisté přímé emise do roku 2040 a nulová čistá celá stopa dodavatelského řetězce do roku 2045. Příručka NICE k hodnocení zdravotnických technologií (PMG36) zmiňuje environmentální udržitelnost jako nově se objevující hledisko při posuzování technologií. Pro produkt digitálního zdraví to znamená, že uhlík se stává čtvrtým pilířem případu hodnoty vedle nákladů, QALY a [dominance na hranici efektivity](../dominance-a-hranice-efektivity/) – ne jako náhrada žádného z nich, ale jako rozměr, který dobře postavený byznys případ stále častěji musí uvádět.

## Matematika

```
Carbon per QALY = total_emissions_tonnes_co2e / total_qalys
  (a negative value means net emissions AVOIDED per QALY gained — a
  double win: better health and lower carbon)

Monetized carbon impact = emissions_tonnes_co2e × carbon_value_per_tonne
  (negative emissions × positive value = a negative cost, i.e. a benefit)

Carbon-adjusted NMB = net_monetary_benefit − monetized_carbon_impact
```

Tím se myšlenka hranice efektivity náklady/QALY rozšiřuje o druhou osu – uhlík na QALY – táž logika „zakreslete každou možnost a uvidíte, co je dominováno“ jako u [dominance a hranice efektivity](../dominance-a-hranice-efektivity/), aplikovaná na uhlík místo nákladů.

## Řešený příklad

Telehealth služba nahrazuje osobní návštěvy, čímž odvrací 5 000 jízd autem ročně při zhruba 8 kg CO2e na jízdu – 40 tun CO2e odvráceno, vyjádřeno jako záporná hodnota emisí (−40,0 tun) – a přináší 25 QALY/rok:

```
Carbon per QALY = −40.0 / 25.0 = −1.6 tonnes CO2e avoided per QALY gained
```

S použitím netržní hodnoty uhlíku z Green Book (ilustrativní údaj, centrální netržní hodnota z roku 2023 ≈ 269 £/t CO2e – Green Book hodnoty uhlíku aktualizuje každoročně, před citací v živé analýze znovu ověřte):

```
Monetized carbon impact = −40.0 × £269 = −£10,760
```

„Náklad“ −10 760 £ je přínos 10 760 £. Pokud je samostatný čistý peněžní přínos intervence 500 000 £:

```
Carbon-adjusted NMB = £500,000 − (−£10,760) = £510,760
```

Úspora uhlíku případ posiluje, nikoli oslabuje – dvojí výhra, kterou má vyjádření zápornými emisemi odhalit.

## Souvislost se softwarovým inženýrstvím

Je to živé, aktuální průsečík s ekonomikou AI/cloudu: výpočetní uhlíková stopa trénování a provozu modelu AI je nyní skutečnou položkou v zadávání zakázek NHS, protože smlouvy dodavatelů NHS nad určitými prahy vyžadují Plán snižování uhlíku (Carbon Reduction Plan). [Jednotková ekonomika cloudu](../jednotková-ekonomika-cloudu/) už sleduje náklady na jednotku výpočetního výstupu; uhlík na QALY je přirozenou šablonou pro budoucí metriku „uhlíkové náklady na inferenci“, rozšiřující tento modul a jednotkovou ekonomiku inference do environmentální dimenze, i když tato metrika zatím neexistuje.

## Úskalí

- **Hrátky s hranicí rozsahu**: počítání jen přímých emisí (Scope 1) a vynechání emisí dodavatelského řetězce (Scope 3), které jsou u skutečné stopy produktu digitálního zdraví obvykle většinou.
- **Použití zastaralé hodnoty uhlíku**: Green Book aktualizuje netržní hodnoty uhlíku každoročně, takže každý citovaný údaj v £/t musí být datován, nikoli uváděn jako pevná konstanta.
- **Zaměňování „uhlíkově efektivní“ za „nákladově efektivní“**: nízkouhlíková intervence s nízkou hodnotou je stále špatným využitím zdrojů NHS. Uhlík je čtvrtý pilíř vedle nákladů a QALY, nikoli náhrada kteréhokoli z nich.

## Zdroje

- NHS England, "Delivering a Net Zero National Health Service" (2020, updated 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (updated annually; non-traded central value ≈ £269/tCO2e, 2023 — date any citation). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
