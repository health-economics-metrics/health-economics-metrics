# Waarde van een statistisch leven (VSL)

De waarde van een statistisch leven (VSL), in Brits spraakgebruik de "waarde van een voorkomen sterfgeval" (VPF), is het bedrag dat een *populatie* gezamenlijk bereid is te betalen om het risico op één statistisch sterfgeval te verlagen, afgeleid uit studies naar de afweging tussen loon en risico (hoeveel extra loon werknemers eisen voor riskanter werk) en uit enquêtes naar gestelde voorkeuren. Het is niet de prijs van het leven van een geïdentificeerd individu; het is een populatierisicoconstructie, en een software-engineer die risicoverlagende systemen bouwt, zoals triagealgoritmen, ambulancedispatch en veiligheidsmonitoring, moet weten dat het uit een andere theoretische traditie komt dan [betalingsbereidheidsdrempels](../betalingsbereidheidsdrempels/).

## Waarom het ertoe doet

VSL/VPF is het standaardinstrument om sterfterisicoverlagingen in geld uit te drukken in regelgevende kosten-batenanalyse: verkeersveiligheid, milieuregelgeving en sommige volksgezondheidsinterventies laten hun businesscases er allemaal doorheen lopen. Het Green Book van HM Treasury publiceert een VPF-cijfer dat is afgeleid uit Britse arbeidsmarkt- en enquêtegegevens, en het ministerie van Transport gebruikt het rechtstreeks bij de beoordeling van verkeersveiligheid. Dit is een werkelijk andere waarderingstraditie dan de methodologie van QALY × betalingsbereidheidsdrempel: de drempelbenadering waardeert gezondheidswinst tegen wat een gezondheids*budget* op dit moment aan de marge oplevert, terwijl VSL/VPF risicoverlaging waardeert tegen wat mensen op een arbeidsmarkt of in een enquête onthullen ervoor te willen betalen. De twee kaders zijn niet altijd verenigbaar, en beide in dezelfde casus gebruiken zonder dat te erkennen is een veelgemaakte analysefout.

## De wiskunde

```
Voorkomen sterfgevallen = populatie × risicoreductie_per_persoon
  (risicoreductie_per_persoon is een kans, bijv. 0,000001 = een daling van
   1 op een miljoen van het jaarlijkse sterfterisico)

Omgerekend sterftevoordeel = voorkomen_sterfgevallen × waarde_van_een_voorkomen_sterfgeval
```

## Uitgewerkt voorbeeld

Een regio van 800.000 mensen profiteert van een digitale dispatch-/triage-interventie voor verkeersveiligheid die het jaarlijkse sterfterisico van elke persoon met 1 op een miljoen (0,000001) verlaagt:

```
Voorkomen sterfgevallen = 800.000 × 0,000001 = 0,8
```

Met de Britse waarde van een voorkomen sterfgeval, £2.180.000 (cijfer van HM Treasury/DfT, prijzen 2023/24; het Green Book werkt dit jaarlijks bij, controleer opnieuw voordat je het in een lopende analyse citeert):

```
Omgerekend sterftevoordeel = 0,8 × £2.180.000 = £1.744.000/jaar
```

Net onder £1,75 miljoen per jaar aan omgerekend sterftevoordeel, uit een risicoverlaging die de meeste betrokkenen individueel nooit zouden merken.

## Verbinding met software-engineering

Teams voor veiligheidskritieke software, zoals firmware voor medische hulpmiddelen, software voor autonome voertuigen en industriële besturingssystemen, staan voor precies dit prijsprobleem wanneer ze de kosten-batencasus voor een veiligheidsinvestering opbouwen: hoe prijs je "één catastrofale storing voorkomen" wanneer de storing zeldzaam en ernstig is en over een grote populatie gebruikers is verspreid? VSL/VPF is een tientallen jaren oud, openbaar gedocumenteerd praktijkvoorbeeld van het zetten van een getal op een zeldzame, ernstige risicoverlaging op populatieniveau: dezelfde redeneervorm als het prijzen van een SRE-investering tegen een zeldzame catastrofale uitval, alleen met een sterfte-uitkomst in plaats van een uitvaltijduitkomst.

## Valkuilen

- **VSL behandelen als "de prijs van een geïdentificeerd leven"**: dat is het niet. VSL/VPF is een statistische populatieconstructie, afgeleid uit afwegingen van risicoverlaging over veel mensen, geen waardering van het leven of de dood van een specifiek persoon.
- **Dubbeltelling ten opzichte van een op QALY's gebaseerde berekening van het netto geldelijk voordeel**: een VSL/VPF-cijfer en een aparte QALY × drempel-berekening in dezelfde casus gebruiken zonder ze te verzoenen, telt de waarde van dezelfde voorkomen sterfgevallen stilzwijgend dubbel. Kies voor een gegeven casus één kader.
- **Een VSL-schatting zonder aanpassing tussen contexten verplaatsen**: een VSL die is afgeleid van de arbeidsmarkt van één land, of van loon-risicogegevens van de beroepsbevolking, ongecorrigeerd toegepast op een andere inkomenscontext of een andere populatie (kinderen, gepensioneerden), is een al lang bestaand, werkelijk omstreden methodologisch vraagstuk, geen opgelost.

## Bronnen

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation: aanvullende richtlijn Value of a Prevented Fatality (prijzen 2023/24; Green Book-waarden worden jaarlijks bijgewerkt). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (voor de Amerikaanse VSL-traditie, aangehaald als contrast met het Britse VPF-cijfer hierboven). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
