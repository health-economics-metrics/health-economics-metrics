# Odvratitelné náklady na outsourcing

Když trust nedokáže splnit cíle s interní kapacitou, kupuje kapacitu za příplatkové sazby: víkendové přesčasy vlastního personálu nebo outsourcing výkonů soukromým poskytovatelům. Ekonomická hodnota softwaru uvolňujícího kapacitu zahrnuje **odvratitelné náklady této práce za příplatkové sazby**.

## Proč na tom záleží

Pod tlakem obnovy plánované péče trusty běžně platí soukromému sektoru spotové ceny (často 1,2–1,5násobek ceny podle schématu NHS) nebo příplatkové sazby iniciativ pro čekací listiny vlastním konzultantům za víkendové seznamy. Na rozdíl od běžných tvrzení o kapacitě je odvrácený outsourcing **uvolňující hotovost**: faktura soukromému poskytovateli skutečně nevznikne. Je to tedy jedna z nejsilnějších přínosových řádek dostupných softwaru, který zvyšuje interní propustnost – a jedna z nejsnáze doložitelných, protože výdaje na outsourcing už jsou viditelnou rozpočtovou řádkou.

## Matematika

```
Avoidable outsourcing cost = activity moved in-house × (outsourced unit price
                             − internal marginal cost per case)

Internal marginal cost: consumables + variable staffing for the extra activity
— the fixed estate is already paid for (see marginal-vs-average-cost.md).
```

Tvrzení vyžaduje, aby uvolněná interní kapacita skutečně pojala aktivitu: operační sály, lůžka i personál musí být dostupné (rozhoduje omezující úzké místo – opět teorie omezení).

## Řešený příklad

Trust outsourcuje 800 operací šedého zákalu ročně po 900 £: 720 000 £ externích výdajů ročně oproti ceně podle schématu ~750 £.

Software pro plánování operačních sálů (optimalizace seznamů, zaplňování mezer po zrušeních, sledování doby obratu) zvýší interní využití sálů natolik, že se repatriuje 500 výkonů:

```
Internal marginal cost per case ≈ £350 (consumables + sessional staffing)
Saving = 500 × (900 − 350) = £275,000/year — cash-releasing
Remaining outsourcing: 300 × £900 = £270,000 (was £720,000)
```

Náklady na software 90 000 £/rok → čistý přínos ≈ **+185 000 £/rok v zajištěné hotovosti**, plus přínosy pro interní kvalitu a výuku z ponechání práce uvnitř.

## Souvislost se softwarovým inženýrstvím

Přímou analogií je **příplatek za dodavatele a konzultace**: když interní inženýrská kapacita nestačí na závazky, organizace nakupují externí kapacitu za 1,5–3násobek interních plných sazeb. Investice do platforem a produktivity, které zvyšují interní propustnost, by si měly nárokovat odvrácené výdaje na dodavatele přesně jako výše – externí denní sazba minus interní mezní náklad krát repatriovaná práce – protože je to jedna z mála skutečně hotovost uvolňujících řádek v byznys případu produktivity vývojářů. Platí stejné upozornění: interní kapacita musí skutečně existovat a být naplánována na repatriovanou práci, jinak je tvrzení fikce.

## Úskalí

- **Tvrzení o repatriaci bez celého řetězce kapacity** – uvolnění chirurgové bez operačních termínů (nebo uvolnění inženýři bez kapacity produktového managementu) nic nerepatriují.
- **Srovnávání outsourcované ceny s interním průměrným nákladem** místo mezního – kupodivu podhodnocuje úsporu; fixní náklady běží tak či tak.
- **Asymetrie kvality/složitosti**: outsourcované případy bývají ty jednoduché; jejich repatriace mění interní případový mix a jednotkové náklady.

## Zdroje

- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
