# Udržení pracovní síly

Ekonomika udržení pracovní síly vyčísluje, co zdravotního systému stojí fluktuace personálu – nábor, zapracování, pokrytí neobsazenosti – a tedy co má hodnotu software, který snižuje administrativní vyhoření. Vyhoření z opakujících se administrativních datových úkolů je hlavním hnacím motorem fluktuace personálu a nemocnosti v NHS.

## Proč na tom záleží

Když klinik odejde, trust platí třikrát: za nábor náhrady (inzerce, poplatky agenturám, pohovory), za její zapracování (měsíce snížené produktivity, dohled) a za pokrytí neobsazenosti mezitím – typicky agenturním nebo zástupovým personálem za 2–3násobek základních sazeb Agenda for Change (viz [odvratitelné náklady na outsourcing](../odvratitelné-náklady-na-outsourcing/) a [tvrdé úspory uvolňující hotovost](../tvrdé-úspory-uvolňující-hotovost/)). Protože náklady fluktuace jsou skutečná hotovost, jsou zlepšení udržení jedním z mála přínosů pro pracovní sílu, které může finanční ředitel zajistit. Administrativní tření patří soustavně mezi nejčastěji uváděné hnací síly klinického vyhoření, což z něj činí náklad řešitelný softwarem.

## Matematika

```
Cost per leaver = recruitment cost + onboarding/productivity-ramp cost
                + vacancy cover premium × vacancy duration
Annual turnover cost = headcount × turnover rate × cost per leaver
Value of software  = headcount × Δturnover rate × cost per leaver
                   + sickness-absence reduction × cover cost/day
```

Kauzální řetězec má dva odhadované články – software → vyhoření/tření a vyhoření → fluktuace – takže doložte oba (průzkumy personálu před/po; zveřejněné asociace vyhoření a odchodů) a držte tvrzené Δ skromné.

## Řešený příklad

Trust zaměstnává 1 200 sester; fluktuace 11 %/rok. Náklady na odcházejícího:

```
Recruitment ≈ £4,500;  onboarding/ramp ≈ £6,000
Vacancy cover: 4 months × 0.6 WTE covered by agency premium ≈ £8,000
Total ≈ £18,500 per leaver
Baseline turnover cost = 1,200 × 0.11 × 18,500 ≈ £2.44M/year
```

Software pro snížení dokumentační zátěže (automaticky vyplňovaná posouzení, jednotné přihlášení, diktování) věrohodně posune fluktuaci o 1 procentní bod:

```
Value = 1,200 × 0.01 × 18,500 = £222,000/year cash-relevant
```

Tvrzení o 1 bodu podložené skóre tření z průzkumů personálu je věrohodné; tvrzení o 4 bodech ne. Spusťte [tornádo](../analýza-citlivosti/) na Δ fluktuace: dominuje všemu ostatnímu v modelu.

## Souvislost se softwarovým inženýrstvím

Matematika udržení v inženýrství je totožná a hůře zdokumentovaná: výměna seniorního inženýra stojí 6–12 měsíců plného platu (nábor, zapracování, ztracený kontext), takže 200členná organizace s 15% odchodovostí spálí ročně miliony na fluktuaci. Investice do vývojářské zkušenosti ([SPACE a DevEx](../space-a-devex/)) je přímou analogií úlevy od dokumentační zátěže pro sestry – a měla by být zdůvodněna stejně: změřená skóre tření, skromný tvrzený účinek na odchodovost, náklady na odcházejícího z vašich vlastních finančních dat. Disciplínou z health economics, kterou převzít, je *poctivé oceňování odcházejícího*, místo hádání, zda lidé „skutečně“ odcházejí kvůli nástrojům.

## Úskalí

- **Přičítání veškerého pohybu fluktuace vaší intervenci** – trhy práce hýbou fluktuací mnohem víc než software; použijte kontrolní skupiny nebo aspoň úpravu o sektorový trend.
- **Dvojí započtení**: úspory z udržení a úspory výdajů za agenturu se překrývají (pokrytí neobsazenosti *jsou* výdaje za agenturu); srovnejte řádky.
- **Ignorování zpoždění**: odchody způsobené vyhořením reagují na změny tření během 1–2 let, nikoli příští čtvrtletí.

## Zdroje

- NHS England, reducing agency spend. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Staff Survey (burnout and intention-to-leave data). <https://www.nhsstaffsurveys.com/>
