# Gezondheidseconomie Metrieken

Een uitgebreide inleiding tot de wiskunde, voorbeelden en redenering van gezondheidseconomie. Elk bestand behandelt één metriek of concept: definitie, waarom het ertoe doet, de wiskunde, een uitgewerkt voorbeeld, de verbinding met software-engineering, valkuilen en bronnen.

Nieuw hier? Begin met [opportuniteitskosten](locales/en-gb-oxendict/topics/opportunity-cost/), [voor kwaliteit gecorrigeerd levensjaar](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) en [kosten van vertraging](locales/en-gb-oxendict/topics/cost-of-delay/) — de drie ideeën waarop al het andere voortbouwt.

## Fundamenten van economisch redeneren

- [Opportuniteitskosten](locales/en-gb-oxendict/topics/opportunity-cost/) — de waarde van het beste opgegeven alternatief; waarom vaste budgetten elke keuze tot een verdringing maken
- [Verdiscontering en tijdsvoorkeur](locales/en-gb-oxendict/topics/discounting-and-time-preference/) — contante waarden, het 3,5% Green Book/NICE-tarief
- [Analyseperspectief](locales/en-gb-oxendict/topics/analysis-perspective/) — betaler versus zorgverlener versus maatschappij: wiens kosten tellen
- [Tijdshorizon](locales/en-gb-oxendict/topics/time-horizon/) — hoe lang kosten en effecten meetellen, en horizonmanipulatie
- [Marginale versus gemiddelde kosten](locales/en-gb-oxendict/topics/marginal-vs-average-cost/) — waarom het vrijmaken van een bed niet de gemiddelde kosten ervan bespaart
- [Kasvrijmakende versus niet-kasvrijmakende besparingen](locales/en-gb-oxendict/topics/cash-releasing-vs-non-cash-releasing/) — de eerlijkheidstoets voor elke "tijdsbesparing"-claim
- [Gevoeligheidsanalyse](locales/en-gb-oxendict/topics/sensitivity-analysis/) — tornadodiagrammen; welke aanname uw zaak draagt
- [Probabilistische gevoeligheidsanalyse](locales/en-gb-oxendict/topics/probabilistic-sensitivity-analysis/) — Monte Carlo, CEAC's, kans om gelijk te hebben
- [Verwachte waarde van perfecte informatie](locales/en-gb-oxendict/topics/expected-value-of-perfect-information/) — de pilot prijzen voordat u hem uitvoert
- [Verwachte waarde van steekproefinformatie (EVSI)](locales/en-gb-oxendict/topics/expected-value-of-sample-information/) — een *specifiek voorgestelde* studie prijzen, niet het wegnemen van alle onzekerheid
- [Reële-optiewaardering](locales/en-gb-oxendict/topics/real-options-valuation/) — de optie prijzen om een gefaseerd project later uit te breiden, in plaats van de optie om eerst informatie te verzamelen
- [Humankapitaalmethode versus frictiekostenmethode](locales/en-gb-oxendict/topics/human-capital-and-friction-cost/) — twee manieren om verloren productiviteit te waarderen, een verschil van 2x+ in de gerapporteerde kosten
- [Dominantie en de efficiëntiegrens](locales/en-gb-oxendict/topics/dominance-and-efficiency-frontier/) — opties elimineren die niemand zou moeten kiezen

## Uitkomstmaten

- [Voor kwaliteit gecorrigeerd levensjaar (QALY)](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) — de gemeenschappelijke munteenheid van gezondheidswaarde
- [Voor beperking gecorrigeerd levensjaar (DALY)](locales/en-gb-oxendict/topics/disability-adjusted-life-year/) — de spiegel aan de lastenkant; de metriek van de mondiale gezondheid
- [EQ-5D](locales/en-gb-oxendict/topics/eq-5d/) — het instrument achter de meeste QALY-nutswaarden
- [Time-trade-off-(TTO-)utiliteitsmeting](locales/en-gb-oxendict/topics/time-trade-off-utility/) — hoe een utiliteitsgewicht werkelijk van een respondent wordt verkregen
- [Incrementele kosteneffectiviteitsratio (ICER)](locales/en-gb-oxendict/topics/incremental-cost-effectiveness-ratio/) — extra kosten per extra eenheid gezondheid
- [Betalingsbereidheidsdrempels](locales/en-gb-oxendict/topics/willingness-to-pay-thresholds/) — NICE £20–30k/QALY en de andere lijnen van de wereld
- [Waarde van een statistisch leven (VSL)](locales/en-gb-oxendict/topics/value-of-a-statistical-life/) — het arbeidsmarktalternatief voor waardering op basis van drempels
- [Netto geldelijk voordeel (NMB)](locales/en-gb-oxendict/topics/net-monetary-benefit/) — waarde minus kosten, correct gedaan
- [Gewonnen levensjaren](locales/en-gb-oxendict/topics/life-years-gained/) — overlevingswiskunde, en de evLYG-billijkheidsvariant
- [Voor gezondheid gecorrigeerde levensverwachting (HALE)](locales/en-gb-oxendict/topics/health-adjusted-life-expectancy/) — boekhouding van gezonde jaren op populatieniveau
- [QALY-tekort en ernstmodifiers](locales/en-gb-oxendict/topics/qaly-shortfall-and-severity-modifiers/) — waarom QALY's van ziekere populaties zwaarder tellen
- [Werkproductiviteit en activiteitsbeperking (WPAI)](locales/en-gb-oxendict/topics/work-productivity-and-activity-impairment/) — absenteïsme vs presenteïsme, de verborgen helft van de kosten

## Soorten economische analyse

- [Kosteneffectiviteitsanalyse (CEA)](locales/en-gb-oxendict/topics/cost-effectiveness-analysis/) — kosten per natuurlijke uitkomsteenheid
- [Kostenutiliteitsanalyse (CUA)](locales/en-gb-oxendict/topics/cost-utility-analysis/) — kosten per QALY; ongelijksoortige interventies vergelijken
- [Kosten-batenanalyse (CBA)](locales/en-gb-oxendict/topics/cost-benefit-analysis/) — alles in geld; Green Book NCW
- [Kostenminimalisatieanalyse (CMA)](locales/en-gb-oxendict/topics/cost-minimization-analysis/) — goedkoopste optie, na bewijs van gelijkwaardigheid
- [Kostengevolgenanalyse (CCA)](locales/en-gb-oxendict/topics/cost-consequence-analysis/) — de uitgesplitste tabel; NICE's voorkeur voor digitale gezondheid
- [Budgetimpactanalyse (BIA)](locales/en-gb-oxendict/topics/budget-impact-analysis/) — betaalbaarheid, te onderscheiden van waarde
- [Rendement op investering (ROI)](locales/en-gb-oxendict/topics/return-on-investment/) — de gedeelde metriek, met verklaarde parameters
- [Sociaal rendement op investering (SROI)](locales/en-gb-oxendict/topics/social-return-on-investment/) — geldelijk waarderen van wat markten niet prijzen
- [ICER-vergelijking tussen valuta's](locales/en-gb-oxendict/topics/cross-currency-icer-comparison/) — PPP vs marktwisselkoers; de omrekenkeuze die een invoeringsbeslissing kan omkeren

## Operationele economie van het gezondheidssysteem

- [Bespaarde bedopnamedagen](locales/en-gb-oxendict/topics/bed-days-saved/) — het werkpaard-voordeel, en de valkuilen van de waardering ervan
- [Opnameduur](locales/en-gb-oxendict/topics/length-of-stay/) — de doorlooptijd van het ziekenhuis
- [Heropnamepercentage](locales/en-gb-oxendict/topics/readmission-rate/) — het "wijzigingsfoutpercentage" van het gezondheidssysteem
- [Niet-verschijningspercentage (DNA)](locales/en-gb-oxendict/topics/did-not-attend-rate/) — gemiste afspraken; de zuiverste verspillingsmetriek
- [Vermijding van spoedeisende bezoeken](locales/en-gb-oxendict/topics/emergency-attendance-avoidance/) — economie van vroegtijdige interventie
- [Nationaal tarief en eenheidskosten](locales/en-gb-oxendict/topics/national-tariff-and-unit-costs/) — het NHS-prijsboek en de kosteninfrastructuur
- [Doorverwijzing naar behandeling (RTT)](locales/en-gb-oxendict/topics/referral-to-treatment/) — de 18-wekennorm als doorlooptijdmetriek
- [Impact van wachtlijsten](locales/en-gb-oxendict/topics/waiting-list-impact/) — bespaarde uren omzetten in geziene patiënten
- [Tijd van zorgverleners](locales/en-gb-oxendict/topics/practitioner-time/) — knelpuntcapaciteit waarderen, niet lonen
- [Personeelsbehoud](locales/en-gb-oxendict/topics/workforce-retention/) — verlooppuntkosten en burn-outeconomie
- [Vermijdbare uitbestedingskosten](locales/en-gb-oxendict/topics/avoidable-outsourcing-costs/) — premiumtariefwerk terughalen
- [Optimalisatie van downstream middelen](locales/en-gb-oxendict/topics/downstream-resource-optimization/) — de rol ontgrendelen waarop iedereen wacht
- [Vroegtijdige interventie](locales/en-gb-oxendict/topics/earlier-intervention/) — de economie van behandelen vóór progressie
- [Waardegenererende capaciteit (operationele ommekeer)](locales/en-gb-oxendict/topics/value-generating-capacity-operational-turnaround/) — capaciteit creëren zonder aan te werven
- [Harde kasvrijmakende besparingen (tekortverdediging)](locales/en-gb-oxendict/topics/hard-cash-releasing-savings-deficit-defence/) — begrotingsposten schrappen; de metriek van de CFO

## HTA-kaders en preventie-economie

- [Beoordeling van gezondheidstechnologie (HTA)](locales/en-gb-oxendict/topics/health-technology-assessment/) — NICE, ICER (VS), CADTH: wie beslist wat de moeite waard is om te kopen
- [Markov-cohortsimulatie](locales/en-gb-oxendict/topics/markov-cohort-simulation/) — hoe een multicyclisch HTA-model werkelijk wordt gesimuleerd, cohort voor cohort, cyclus voor cyclus
- [Kader voor bewijsstandaarden van NICE](locales/en-gb-oxendict/topics/nice-evidence-standards-framework/) — risicogelaagde bewijsvereisten voor digitale gezondheid
- [Duitslands DiGA-snelspoor](locales/en-gb-oxendict/topics/diga-fast-track/) — apps op recept; voorlopige opname met een bewijsdeadline
- [Aantal te behandelen patiënten (NNT)](locales/en-gb-oxendict/topics/number-needed-to-treat/) — eenheden inspanning-per-voordeel die claims eerlijk houden
- [Populatie-attribueerbare fractie (PAF)](locales/en-gb-oxendict/topics/population-attributable-fraction/) — hoeveel ziektelast een risicofactor werkelijk de moeite waard is om aan te pakken
- [Preventie-economie](locales/en-gb-oxendict/topics/prevention-economics/) — waarom preventie kosteneffectief is maar zelden kostenbesparend
- [Screeningseconomie](locales/en-gb-oxendict/topics/screening-economics/) — Wilson–Jungner, instorting van de PPV bij lage prevalentie, alarmmoeheid
- [Aantal te screenen personen (NNS)](locales/en-gb-oxendict/topics/number-needed-to-screen/) — het analogon van NNT op het niveau van een screeningsprogramma
- [Vermeden downstream kosten](locales/en-gb-oxendict/topics/avoided-downstream-costs/) — kostencompensaties en de regels die ze geloofwaardig maken
- [Multicriteria-beslisanalyse (MCDA)](locales/en-gb-oxendict/topics/multi-criteria-decision-analysis/) — gewogen scoren wanneer één enkele drempel niet volstaat
- [Koolstofvoetafdruk per QALY](locales/en-gb-oxendict/topics/carbon-footprint-per-qaly/) — de netto-nulverplichting van de NHS ontmoet kosten per QALY

## Software-engineering en digitale dienstverlening

- [Kosten van vertraging](locales/en-gb-oxendict/topics/cost-of-delay/) — £/week of QALY's/week van niet-levering; de centrale brugmetriek
- [DORA-metrieken](locales/en-gb-oxendict/topics/dora-metrics/) — leveringsprestaties, vertaald naar gezondheidseconomische termen
- [Stroommetrieken](locales/en-gb-oxendict/topics/flow-metrics/) — de wet van Little, WIP, stroomefficiëntie; de gedeelde wachtrijwiskunde van ziekenhuizen en pijplijnen
- [WSJF en CD3](locales/en-gb-oxendict/topics/wsjf-and-cd3/) — prioritering op waardedichtheid; de backlog als QALY-ranglijst
- [SPACE en DevEx](locales/en-gb-oxendict/topics/space-and-devex/) — multidimensionale productiviteit; de EQ-5D-les voor engineeringmetrieken
- [Technische schuld](locales/en-gb-oxendict/topics/technical-debt/) — hoofdsom, rente en chronische-ziekte-economie voor codebases
- [Totale eigendomskosten (TCO)](locales/en-gb-oxendict/topics/total-cost-of-ownership/) — onderhoud is 50–80%; de naïeve-medicijnprijs-fout in software
- [Cloud-eenheidseconomie (FinOps)](locales/en-gb-oxendict/topics/cloud-unit-economics/) — kosten per eenheid output; de referentiekosten van de digitale dienst
- [Exacte-centen kostentoewijzing](locales/en-gb-oxendict/topics/exact-cents-cost-allocation/) — de grootste-restmethode; een totaal zo verdelen dat de delen exact terugtellen
- [Valutaveilige kostenaggregatie](locales/en-gb-oxendict/topics/currency-safe-cost-rollup/) — exacte decimale `Money`, niet `f64`, voor totalen die op de cent moeten sluiten
- [Bouwen versus kopen](locales/en-gb-oxendict/topics/build-vs-buy/) — risicogecorrigeerde vergelijking met de vertragingsterm geprijsd
- [Realisatie van baten](locales/en-gb-oxendict/topics/benefits-realization/) — controleren of voorspelde baten daadwerkelijk zijn opgetreden
- [GDS-dienstmetrieken](locales/en-gb-oxendict/topics/gds-service-metrics/) — kosten per transactie, tevredenheid, voltooiing, gebruiksgraad

## AI-versnelling

- [AI-productiviteit van ontwikkelaars](locales/en-gb-oxendict/topics/ai-developer-productivity/) — Copilot RCT versus METR RCT; werkzaamheid versus effectiviteit
- [Rendement op AI-investering](locales/en-gb-oxendict/topics/ai-return-on-investment/) — de bevinding van 95%-geen-rendement en wat de 5% anders deed
- [Inferentie-eenheidseconomie](locales/en-gb-oxendict/topics/inference-unit-economics/) — kosten per token, en het modelleren van meedogenloze prijsdaling
- [AI-kwaliteitsmetrieken](locales/en-gb-oxendict/topics/ai-quality-metrics/) — hallucinatiepercentages als schadepercentages met een prijskaartje
- [Klinische AI-evaluatie](locales/en-gb-oxendict/topics/clinical-ai-evaluation/) — sensitiviteit, specificiteit, AUROC, en waarom prevalentie de economie beheerst
- [AI-regelgevende evaluatie](locales/en-gb-oxendict/topics/ai-regulatory-evaluation/) — FDA SaMD, PCCP's en de economie van modelupdates

## Consumentengezondheidsapps en -apparaten

- [Betrokkenheidsmetrieken](locales/en-gb-oxendict/topics/engagement-metrics/) — betrokkenheid als klinische dosis
- [Retentie en verloop](locales/en-gb-oxendict/topics/retention-and-churn/) — de wet van uitval; retentiecurves als behandelvensters
- [Activering en adoptie](locales/en-gb-oxendict/topics/activation-and-uptake/) — de voorpoorten van de waardetrechter
- [Therapietrouw en volharding](locales/en-gb-oxendict/topics/adherence-and-persistence/) — MPR, PDC, effectieve betrokkenheid, minimaal effectieve dosis
- [Door de patiënt gerapporteerde uitkomsten](locales/en-gb-oxendict/topics/patient-reported-outcomes/) — PROM's, PREM's en de MCID-eerlijkheidsgrens
- [Digitale eindpunten en biomarkers](locales/en-gb-oxendict/topics/digital-endpoints-and-biomarkers/) — van sensortelemetrie naar bewijs van regelgevende kwaliteit
- [Validatie van wearables](locales/en-gb-oxendict/topics/wearable-validation/) — MAPE, overeenstemmingsstatistieken, draagtijd, volledigheid
- [Economie van monitoring op afstand van patiënten](locales/en-gb-oxendict/topics/remote-patient-monitoring-economics/) — CPT-codestapels en substitutie van ziekenhuis-thuis
- [Eenheidseconomie van gezondheidsapps](locales/en-gb-oxendict/topics/health-app-unit-economics/) — CAC, LTV, PMPM en ROI versus VOI
- [Bereik en billijkheid](locales/en-gb-oxendict/topics/reach-and-equity/) — RE-AIM; populatie-impact = bereik × effectiviteit
- [Concentratie-index](locales/en-gb-oxendict/topics/concentration-index/) — een formele statistische maat voor sociaaleconomisch bepaalde gezondheidsongelijkheid

## Actualiteit van benchmarks

Veel geciteerde cijfers worden jaarlijks bijgewerkt (NHS-eenheidskosten, betalingsregelingsprijzen, DORA-clusters, DiGA-aantallen, LLM-prijzen). Elk document dateert zijn benchmarks inline; verifieer opnieuw voordat u ze gebruikt in een actuele business case.

## Claude Skills

Deze repository bevat twee [Claude Skills](https://code.claude.com/docs/en/skills) — plaats een van beide in de `.claude/skills/` van een project (of wijs Claude naar de `skills/` van deze repository) om dit boek direct te gebruiken binnen een agentische codeersessie:

- [health-economics-metrics-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-skill/SKILL.md) — voor algemeen gebruik: een concept uitleggen, een metriek berekenen op basis van uw eigen cijfers, of een business case met meerdere metrieken samenstellen, gebaseerd op de formules, uitgewerkte voorbeelden en valkuilen van dit boek in plaats van algemene kennis.
- [health-economics-metrics-maintainer-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-maintainer-skill/SKILL.md) — voor beheerders van deze repository: de sjabloon per onderwerp, README-indexeringsconventies, en een checklist voor link-/synchronisatievalidatie voor het toevoegen of bewerken van onderwerpen.
