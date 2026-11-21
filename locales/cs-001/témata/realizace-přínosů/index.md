# Realizace přínosů

Řízení realizace přínosů (BRM) je disciplína identifikace, stanovení základní hodnoty, sledování a *dokládání*, že přínosy slíbené v byznys případu se po dodání skutečně dostavily. Ve veřejných investicích ve Spojeném království žije uvnitř **modelu pěti případů** v Green Book HM Treasury; v medicíně je jeho příbuzným postmarketingový dohled.

## Proč na tom záleží

Byznys případy jsou sliby; realizace přínosů je audit. Hodnocení velkých digitálních programů NHS opakovaně nacházela předpovězené přínosy, které se nikdy neuskutečnily – a pokud přínosy neuvolňovaly hotovost, neudělaly nic pro hospodaření trustu. Odpověď Green Book: každý výdajový případ musí projít **pěti případy** (strategický, ekonomický, komerční, finanční, řídicí), s plánováním realizace přínosů v řídicím případu *před schválením* – pojmenovaní vlastníci, zachycené základní hodnoty, stanovená data měření. Bez toho zůstává „software ušetřil 30 minut na sestru“ navždy fikcí dodavatele.

## Matematika

```
Realization rate = benefits realized / benefits forecast   (per benefit, per period)

Mechanics that make it computable:
  baseline captured BEFORE go-live (else the delta is unmeasurable)
  each benefit: owner, metric, data source, measurement schedule
  forecast adjusted for optimism bias at appraisal (Green Book mandate)
  benefits classed cash / non-cash / qualitative and tracked separately
  (see cash-releasing-vs-non-cash-releasing.md)
```

## Řešený příklad

Byznys případ elektronického rozpisování služeb slíbil ročně: snížení výdajů na agenturní personál o 450 tis. £ (hotovost), 8 000 hodin vrchních sester (kapacita), zlepšení souladu s obsazeností (kvalitativní). Dvanáct měsíců po spuštění:

```
Benefit           Forecast    Realized    Rate   Evidence
Agency spend      £450,000    £287,000    64%    ledger vs baseline year
Manager hours     8,000       5,100       64%    time-motion sample
Fill compliance   +10pp       +12pp       120%   rostering system data

Actions from the review (the point of BRM):
agency shortfall traced to two wards never onboarded → onboard them;
forecast model's 30%-optimism error logged → applied to the next case.
```

64% realizace není selhání – je to *poznání*. Neměřené případy si nárokují 100 % navždy.

## Souvislost se softwarovým inženýrstvím

Inženýrské organizace schvalují investice do platforem na základě předpovězených přínosů a téměř nikdy je neauditují – přesně ta patologie, kterou BRM léčí. Lehký přenos: každý návrh nad prahovou hodnotou pojmenuje vlastníky přínosů, základní metriky a datum revize T+6 měsíců; míry realizace se promítají do toho, jak moc organizace slevuje příští předpověď daného týmu (nebo dodavatele). Je to také odpověď na skepsi vůči nástrojům AI: [nález MIT, že ~95 % pilotů GenAI nevykázalo měřitelnou návratnost ve výkazu zisku a ztráty](../návratnost-investic-do-ai/), je výsledek realizace přínosů – piloty, které návratnost *přinesly*, měly dohledatelné přínosové řádky s vlastníkem. Předpověď → měření → rekalibrace je tatáž smyčka jako u pilotů oceněných [EVPI](../očekávaná-hodnota-perfektní-informace/), provozovaná v měřítku portfolia.

## Úskalí

- **Žádná základní hodnota před spuštěním** – fatální, neopravitelné opomenutí.
- **Osiřelost přínosu**: bez pojmenovaného vlastníka nikdo nesbírá data a každá revize říká „celkově na dobré cestě“.
- **Dvojí započtení přínosů napříč programy** nárokujícími tutéž uvolněnou kapacitu – veďte registr přínosů napříč portfoliem.
- **Divadlo realizace**: měření snadných kvalitativních úspěchů, zatímco hotovostní řádky zůstávají tiše nezkoumány.

## Zdroje

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
