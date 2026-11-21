# Čas praktika

Čas praktika je nejvzácnějším zdrojem ve většině zdravotních systémů. Měření hodnoty ušetření několika minut denně klinikovi vyžaduje přechod od jednoduché mzdové matematiky k **nákladům obětované příležitosti a kapacitě systému**: v národní zdravotní službě je čas praktika rigidním provozním úzkým místem, nikoli nákladovou řádkou, která se ohýbá.

## Proč na tom záleží

Nelze rychle vyrobit více praktických lékařů, konzultantů nebo specializovaných sester – školicí cesty trvají 5–15 let a neobsazená místa jsou chronická. Hodina ušetřeného času praktika tedy není „ušetřená mzda“ (praktik je stále placen); je to *uvolněná kapacita úzkého místa* a kapacita úzkého místa má hodnotu toho, co úzké místo vytváří. Proto jsou tvrzení „ušetří 10 minut na konzultaci“ zároveň nejčastější a nejhůře oceněnou řádkou v digitálním zdraví.

## Matematika

Tři úrovně ocenění, s rostoucí poctivostí:

```
1. Wage basis:        hours × loaded salary rate (PSSRU unit costs)
                      — what the time costs, not what it produces
2. Output basis:      hours → appointments/procedures enabled × scheme value
                      (see national-tariff-and-unit-costs.md)
3. Bottleneck basis:  if this role gates a whole pathway, hours × value of
                      pathway throughput released (theory of constraints)
```

Sleva za fragmentaci: čas ušetřený v drobcích pod použitelným kvantem (např. 3 minuty rozptýlené po klinice) se špatně přesouvá; uplatněte stanovený faktor využití.

## Řešený příklad

Ambientní zápis ušetří praktickému lékaři 2 minuty na konzultaci při 30 konzultacích denně: 60 minut/den, neboli **220 hodin ročně na lékaře** při 220 pracovních dnech.

```
Wage basis:   220 × £80 (loaded GP hour, PSSRU-region) ≈ £17,600/GP/year
Output basis: 60 min/day = 5 extra 12-min consultations/day
              = 1,100 extra appointments/GP/year × £42 ≈ £46,200/GP/year
              — or the same appointments absorbed as reduced overtime and
              safer, unhurried consultations (qualitative line)
```

V federaci 50 praktických lékařů má kapacita podle výstupu hodnotu ~2,3 mil. £/rok – za předpokladu, že minuty jsou skutečné (změřené, nikoli tvrzené dodavatelem), konsolidované (celé konzultace, nikoli zlomky) a přesunuté (viz [uvolňující vs neuvolňující hotovost](../úspory-uvolňující-hotovost-vs-neuvolňující-hotovost/)).

## Souvislost se softwarovým inženýrstvím

Čas seniorního inženýra se chová stejně: je úzkým místem, jímž proudí návrhy, revize a incidenty, takže ho oceňte tím, co úzké místo řídí, nikoli platem. Totéž třístupňové ocenění platí pro každé tvrzení „AI ušetří každému vývojáři X minut“ – mzdová matematika lichotí malým číslům; poctivé otázky jsou, zda se minuty konsolidují do použitelných bloků a co uvolněná kapacita skutečně vytváří. Násobitel pro případ, kdy ušetřená hodina patří osobě, na kterou všichni ostatní čekají, viz [optimalizace následných zdrojů](../optimalizace-následných-zdrojů/).

## Úskalí

- **Minuty × plat = úspory** – kanonické nafouknutí; je to kapacita, a to jen při stanoveném využití.
- **Ignorování problému kvanta**: 12 × 5minutových úspor ≠ jedna volná hodina.
- **Oceňování všech rolí stejně**: hodina úzkého místa cesty má mnohonásobně větší hodnotu než hodina neřídicí role.

## Zdroje

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
