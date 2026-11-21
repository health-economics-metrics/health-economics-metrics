# Kapacita vytvářející hodnotu (provozní obrat)

Kapacita vytvářející hodnotu je „přínos příležitosti“ uvolněného času: co nemocnice nyní může *dokázat* s hodinami, které váš software uvolní. Je to metrika, na které nejvíce záleží provozním ředitelům a lékařským ředitelům, protože mluví měnou, v níž jsou řízeni – aktivitou, cíli a obratem.

## Proč na tom záleží

NHS čelí obrovským nedodělkům odeslání k léčbě a trusty, které zmeškají národní standardy čekacích dob, čelí regulačnímu dohledu a zásahu (viz [odeslání k léčbě](../odeslání-k-léčbě/)). Nábor je pomalý a omezený; nemovitosti jsou dané. Jedinou rychlou pákou je získat více aktivity vytvářející hodnotu ze stávajícího personálu a prostoru. Software, který získává zpět čas specialistů, nejen „šetří peníze“ – *razí kapacitu*: kliniky, které by nemohly existovat, posouzení, která by nešla naplánovat, bez náboru či výstavby.

## Matematika

```
Hidden capacity created = time released → activity units enabled × scheme value
Activity units: outpatient attendances, pre-op assessments, monitoring reviews
Scheme value:   national tariff / NHS Payment Scheme prices
                (see national-tariff-and-unit-costs.md)
```

Je to ocenění podle výstupu z [času praktika](../čas-praktika/), škálované na linii služeb a vyjádřené v jednotkách aktivity, v nichž provozní tým už plánuje.

## Řešený příklad

Specializované sestry Band 6 vedou kliniky předoperačního posouzení. Automatizace dokumentace získá zpět 1 hodinu denně u každé z 25 sester; do každé hodiny se vejdou 2 posouzení.

```
Extra assessments = 25 nurses × 2/day × 250 days = 12,500/year
At ~£120 scheme value per pre-op assessment:
  12,500 × £120 = £1.5M/year of care capacity created
```

– bez nájmu jediné sestry nebo stavby jediné místnosti. (Široce citovaný model, který tento stub původně uváděl, dával číslo 766 920 £/rok pro menší kohortu; vzor aritmetiky je stejný – číslo se škáluje s počtem sester × sezení × tarif.) Provozní rámec pro COO: předoperační posouzení přestane být omezením operačních seznamů – klesá počet operací zrušených v den výkonu a roste využití sálů, kde začíná *další* přínosová řádka (viz [optimalizace následných zdrojů](../optimalizace-následných-zdrojů/)).

## Souvislost se softwarovým inženýrstvím

Totéž přerámování zachraňuje tvrzení o produktivitě vývojářů před mzdovou matematikou: uvolněný inženýrský čas vyjádřený jako *dodaná schopnost, kterou si organizace jinak nemohla dovolit* – funkce, migrace, práce na spolehlivosti – oceněný tím, co organizace za takovou schopnost na hraně platí (sazby dodavatelů nebo ekvivalenty odložených náborů). Rámec COO také učí něco o prodeji práce na platformě: vyjádřete přínos v jednotkách, v nichž je publikum řízeno. Provozní vedoucí myslí v aktivitě a cílech, ne v abstraktních hodinách; inženýrští vedoucí v položkách roadmapy a počtu lidí, ne v ušetřených minutách.

## Úskalí

- **Tvrzení o kapacitě bez poptávky**: 12 500 dalších termínů posouzení záleží jen tehdy, když je operační pipeline zaplní – zkontrolujte následné omezení.
- **Hodnota tarifu bez platebního mechanismu**: při smíšené platbě extra aktivita nemusí přinést extra příjem; hodnotou může být místo toho zkrácení čekací listiny (viz [dopad na čekací listinu](../dopad-na-čekací-listinu/)).
- **Prezentace kapacity jako hotovosti** – je to vlajkový přínos neuvolňující hotovost; označte ho (viz [uvolňující vs neuvolňující hotovost](../úspory-uvolňující-hotovost-vs-neuvolňující-hotovost/)).

## Zdroje

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
