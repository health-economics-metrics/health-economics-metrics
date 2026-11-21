# Odvrácení urgentních příjmů

Odvrácení urgentních příjmů počítá návštěvy ED (A&E) a akutní hospitalizace, kterým zabránila intervence na počátku cesty – triážní aplikace, vzdálené monitorování, virtuální oddělení, přesměrování do urgentní péče. Převádí „zachytili jsme to dříve“ na oceněné tvrzení.

## Proč na tom záleží

Akutní péče je nejdražší rutinní prostředí v systému (jednotkové náklady na návštěvu ED v rozmezí 250–400 £ podle National Cost Collection / PSSRU; akutní hospitalizace jsou tisíce) a přeplnění ED kaskáduje do zpoždění sanitek a zrušených plánovaných výkonů. Cokoli, co bezpečně vyřeší poptávku výše – rady k sebepéči, primární péče týž den, komunitní reakce – kupuje systému kapacitu v jeho nejvíce zatíženém bodě. Je to standardní přínosová řádka pro kontroly příznaků, triážní služby ve stylu 111 a [vzdálené monitorování pacientů](../ekonomika-vzdáleného-monitorování-pacientů/).

## Matematika

```
Avoided attendances = population × (baseline rate − intervention rate)
Gross saving        = avoided attendances × unit cost per attendance
                      (+ avoided admissions × admission cost, counted separately)

Net saving          = gross saving − intervention cost − cost of new pathway usage
                      (redirected demand isn't free: a 111 call, a GP slot,
                       a virtual-ward day all have unit costs)
```

Kauzální tvrzení potřebuje komparátor: míry návštěv mají trend a sezónní variaci, takže samotné před/po nic nedokazuje.

## Řešený příklad

Služba vzdáleného monitorování CHOPN pro 3 000 vysoce rizikových pacientů. Hodnocení s přiřazenou kontrolou ukazuje, že návštěvy ED související s exacerbacemi klesnou z 0,9 na 0,7 na pacientorok a akutní hospitalizace z 0,5 na 0,42.

```
Avoided attendances = 3,000 × 0.2  = 600 × £300   = £180,000
Avoided admissions  = 3,000 × 0.08 = 240 × £3,800 = £912,000
Gross                                              £1,092,000/year

Costs: monitoring service £600,000; extra community-nurse responses £150,000
Net ≈ +£342,000/year — plus the QALY gains of exacerbations treated earlier.
```

Všimněte si, že řádka hospitalizací dominuje: samotné odvrácení návštěv monitorovací službu zřídka zaplatí; peníze jsou v odvrácení *hospitalizací*.

## Souvislost se softwarovým inženýrstvím

Je to **ekonomika předcházení incidentům**. Hodnotou observability, canary nasazení a systémů včasného varování jsou odvrácené „urgentní příjmy“ – pagery, krizové místnosti, sev-1 – každé s plným nákladem (inženýrské hodiny × sazba + dopad na zákazníky). Platí stejná pravidla modelování: odečtěte náklady nové cesty výše (třídění upozornění není zdarma), pozor na substituci (upozornění, která vytvářejí práci bez předcházení incidentům, jsou zdravotní úzkost, nikoli zdraví) a dokažte kontrafaktuál kontrolou (míry incidentů týmů mají trend a regredují k průměru, přesně jako návštěvy ED).

## Úskalí

- **Regrese k průměru**: vysoce rizikové kohorty vybrané podle špatného roku se zlepší bez léčby; přiřazené kontroly nebo stepped-wedge návrhy jsou nezbytné.
- **Poptávka vyvolaná nabídkou**: snadná digitální triáž může *zvýšit* celkové kontakty (nižší práh vyhledání pomoci) při snížení podílu ED – počítejte celkové náklady systému.
- **Oceňování návštěv průměrnými náklady**, když fixní náklady ED neklesají – viz [mezní vs průměrné náklady](../mezní-vs-průměrné-náklady/).

## Zdroje

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
