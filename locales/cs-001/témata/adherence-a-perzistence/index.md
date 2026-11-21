# Adherence a perzistence

Adherence je to, jak věrně skutečné užívání odpovídá předepsanému (intenzita); perzistence je to, jak dlouho užívání trvá do přerušení (délka). Farmacie má standardizované míry – **MPR** a **PDC**, kde ≥ 80 % je konvenční hranice „adherentního“ pacienta – a digitální terapeutika zdědila jak pojmy, tak problém: adherence je násobitel mezi účinností a realizovanou hodnotou.

## Proč na tom záleží

Plátci už na těchto číslech fungují: PDC ≥ 80 % vstupuje do hodnocení Medicare Star Ratings v USA, které hýbe skutečnými příjmy plátců – adherence je finančně nosná infrastruktura, nikoli měkká metrika. U digitálních terapeutik se vzorec opakuje: data DiGA ukazují silné objemy předpisů, ale slabou trvalou adherenci, a cenotvorba digitálních terapeutik založená na výsledcích (v Německu od roku 2026) bude platit za výsledky podmíněné adherencí. Koncepční posun z výzkumu digitálního zdraví: **efektivní zapojení** – *dostatečné* zapojení k dosažení zamýšleného výsledku – a jeho důsledek, **minimální účinná dávka**, stanovená empiricky pro každou intervenci, nikoli předpokládaná jako „čím víc, tím líp“.

## Matematika

```
MPR = Σ days' supply dispensed / days in period × 100   (can exceed 100%;
      overestimates via early refills)
PDC = days covered by supply / days in period × 100     (capped at 100%;
      the conservative, CMS-preferred estimator)
Digital adherence = actual usage events / prescribed usage events × 100
Persistence       = days from initiation to discontinuation
                    (report % persistent at N months; survival methods)

Value gating: realized outcome ≈ efficacy × g(adherence)
  where g is the dose-response function; below the minimum effective
  dose, g ≈ 0 — cost incurred, benefit forfeited
```

## Řešený příklad

Digitální KBT pro nespavost, předepsaná jako 6 modulů během 6 týdnů; účinnost v studii 0,025 QALY u těch, kdo dokončili ≥ 4 moduly (empiricky stanovená minimální účinná dávka):

```
1,000 prescriptions at £250 → £250,000 payer spend
Module completion: ≥4 modules 38%; 1–3 modules 34%; zero modules 28%

QALYs realized = 1,000 × 0.38 × 0.025 = 9.5
Cost per QALY  = 250,000 / 9.5 ≈ £26,300 — marginal at NICE thresholds

Adherence engineering (reminders redesign, session shortening) lifts
≥4-module completion to 50%: 12.5 QALYs → £20,000/QALY. The product
crossed the funding threshold without touching the therapy content.
```

Při cenotvorbě podle výkonu ve stylu roku 2026 stejný posun hýbe přímo *příjmy* – inženýrství adherence se stává komerční roadmapou.

## Souvislost se softwarovým inženýrstvím

Dva slovníky se sbíhají v jednom pojmu: softwarová analytika ([aktivace](../aktivace-a-přijetí/), [lepivost](../metriky-zapojení/), [udržení](../udržení-a-odchod-uživatelů/)) a klinická farmacie (MPR, PDC, perzistence) obě měří expozici intervenci – převeďte události svého produktu do klinického slovníku a plátci budou umět číst vaše dashboardy. Páky adherence vlastní inženýrství: logika připomínek (hloupá denní upozornění učí k odmítání; adaptivní načasování ne), cena sezení (20minutový modul se dokončuje méně než 3 × 7minutové) a telemetrie tření, která odhalí, *kde* v protokolu uživatelé odpadají. Dávku–odpověď instrumentujte od prvního dne – analýza minimální účinné dávky, na níž stojí celý ekonomický model, potřebuje data o použití propojená s výsledkem, která umí sbírat jen produkt.

## Úskalí

- **Směšování MPR/PDC**: MPR nadhodnocuje; uveďte, který odhad používáte, a pro cokoli určené plátcům používejte PDC.
- **Adherence k metrice, nikoli k terapii**: otevření aplikace počítaná jako dávky (viz [metriky zapojení](../metriky-zapojení/)).
- **Cíle zapojení „čím víc, tím líp“** tam, kde má intervence konečnou dávku – úspěchem je ukončení programu, nikoli věčné používání.
- **Tvrzení o účinnosti založená na přeživších**: výsledky mezi adherentními obsahují výběrové efekty (adherentní lidé se liší); poctivý kauzální odhad vyžaduje randomizaci nebo pečlivé úpravy.

## Zdroje

- MPR vs PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA adherence findings, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
