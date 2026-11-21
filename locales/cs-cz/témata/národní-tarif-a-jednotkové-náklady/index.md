# Národní tarif a jednotkové náklady

NHS platí poskytovatelům za aktivitu podle národního ceníku založeného na pravidlech – historicky National Tariff / Payment by Results, nahrazený **NHS Payment Scheme (NHSPS)** dne 1. dubna 2023. Za cenami stojí národní infrastruktura jednotkového nákladování: **National Cost Collection (NCC)** a kompendium **PSSRU Unit Costs of Health and Social Care**.

## Proč na tom záleží

Jsou to jmenovatelé každého věrohodného byznys případu NHS. Když tvrzení říká „ambulantní návštěva má hodnotu 160 £“ nebo „hodina sestry Band 6 stojí 31 £“, tato čísla pocházejí z této infrastruktury – a používání oficiálních údajů místo vymyšlených je to, co činí nezávislá hodnocení srovnatelnými a finanční týmy ochotnými ke spolupráci. Pro dodavatele tarif také určuje stranu *příjmů*: aktivita, kterou váš software umožní (další kliniky, znovu obsazená lůžka), se oceňuje cenami schématu.

## Matematika

```
Tariff price per unit of activity (HRG-coded spell, outpatient attendance)
  = national average unit cost (from NCC) × Market Forces Factor (local adjustment)
  under NHSPS: blended fixed + variable ("aligned payment and incentive") elements

NCC unit cost = trust-reported total cost of an activity type / activity volume
                (built on Patient-Level Information and Costing Systems, PLICS)

PSSRU compendium: ~80 standard unit costs (GP consultation, nurse-hour by band,
ED attendance…) — the default source in UK economic evaluations.
```

## Řešený příklad

Váš software uvolní 1 hodinu denně času sestry Band 6 v 250denním pracovním roce:

```
PSSRU-based Band 6 cost incl. overheads ≈ £31/hour (check current edition)
Capacity value = 250 × £31 = £7,750/nurse/year (non-cash-releasing)
```

Alternativně sestra provádí 2 další ambulantní kontroly denně při hodnotě ~160 £ podle schématu: 500 × 160 £ = **80 000 £/rok financované aktivity** – desetinásobný rozdíl v tvrzené hodnotě podle přesunu, to vše z oficiálních jednotkových nákladů. Obě tvrzení jsou auditovatelná, protože jmenovatelé jsou zveřejněni; to je smyslem všeho.

## Souvislost se softwarovým inženýrstvím

Je to vzor **interního ceníku**. Britská health economics funguje, protože každé hodnocení používá stejné zveřejněné jednotkové náklady; inženýrské organizace to většinou nemají, takže každý byznys případ vymýšlí vlastní cenu inženýrské hodiny, incidentu, nasazení. Platformní tým může zveřejnit právě takový ceník – plné náklady na inženýrskou hodinu podle úrovně, na incident podle závažnosti, na minutu buildu – a vyžadovat jeho použití ve všech návrzích. Systémy chargeback/showback také opakují známé způsoby selhání tarifu: oceňování průměrnými náklady vede k hrátkám s objemem, fixní platby k nedostatečnému poskytování. Vývoj NHSPS od čisté platby za aktivitu ke smíšené fixní+variabilní je dvacet let poučení z návrhu pobídek pro interní cenotvorbu platforem.

## Úskalí

- **Zastaralé údaje**: ceny NCC, PSSRU a NHSPS se obnovují ročně – datujte každé číslo.
- **Cena tarifu ≠ náklad**: ceny jsou národní průměry s úpravami; vaše místní mezní náklady se liší (viz [mezní vs průměrné náklady](../mezní-vs-průměrné-náklady/)).
- **Ocenění kapacity tarifem bez mechanismu**, jak extra aktivitu skutečně poskytnout a nechat si ji zaplatit.

## Zdroje

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
