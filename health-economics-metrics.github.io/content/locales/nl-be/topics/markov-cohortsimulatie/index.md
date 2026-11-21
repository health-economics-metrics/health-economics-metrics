# Markov-cohortsimulatie

Een Markov-cohortmodel is de standaardmodelleertechniek in HTA voor interventies waarvan de effecten zich over meerdere tijdsperioden (cycli) ontvouwen in plaats van in één keer. Een hypothetisch cohort begint geheel in één gezondheidstoestand, en in elke cyclus verplaatst een vaste set overgangskansen delen van het cohort tussen toestanden; kosten en QALY's lopen in elke cyclus op naar rato van hoeveel van het cohort elke toestand bezet, en worden teruggerekend naar contante waarde. Elke software-engineer die een meerjarige businesscase voor digitale gezondheid modelleert, waarin gebruikers of patiënten in de loop van de tijd tussen toestanden als "betrokken", "afgehaakt" of "vertrokken" wisselen, bouwt dezelfde structuur.

## Waarom het ertoe doet

De meeste echte beslissingen over gezondheidstechnologie zijn geen eenmalige vergelijkingen van de kosten en uitkomst van één periode. Een chronische aandoening verergert, keert terug, reageert op behandeling of doodt, over jaren, en een [kosteneffectiviteitsanalyse](../kosteneffectiviteitsanalyse/) voor één periode kan dat niet weergeven. Indieningen bij NICE, ICER en CADTH voor interventies bij chronische ziekten, beoordeeld via [beoordeling van gezondheidstechnologie](../beoordeling-van-gezondheidstechnologie/), zijn vrijwel altijd gebouwd als Markov-cohortmodellen met een levenslange tijdshorizon, omdat het alternatief, elk mogelijk individueel patiëntentraject modelleren, op schaal onwerkbaar is. Het Markov-model op cohortniveau ruilt wat realisme op individueel niveau in (het kan het geheugen van eerdere toestanden moeilijk weergeven, vandaar "Markov": de toekomst hangt alleen af van de huidige toestand) voor een model dat transparant, controleerbaar en snel genoeg is om duizenden keren te draaien in een [probabilistische gevoeligheidsanalyse](../probabilistische-gevoeligheidsanalyse/).

## De wiskunde

```
Cohortupdate van één cyclus (rijvector × overgangsmatrix):
  nieuwe_toestand[j] = som_i toestand[i] * overgangsmatrix[i][j]

Kosten van één cyclus:
  cyclus_kosten = som_s toestand[s] * kosten_per_cyclus[s]

QALY's van één cyclus:
  cyclus_qalys = som_s toestand[s] * utiliteit[s] * cycluslengte_jaren

Volledige simulatie over `cycli` cycli, verdisconteerd met `disconteringsvoet`:
  totale_verdisconteerde_kosten = som_{t=0}^{cycli-1} cyclus_kosten(toestand_t) / (1 + disconteringsvoet)^t
  totale_verdisconteerde_qalys  = som_{t=0}^{cycli-1} cyclus_qalys(toestand_t)  / (1 + disconteringsvoet)^t
  waarbij toestand_0 = beginverdeling, toestand_{t+1} = cohort_vooruit(toestand_t, overgangsmatrix)
```

Het terugrekenen van elke cyclus naar contante waarde gebruikt precies de formule van [verdiscontering en tijdsvoorkeur](../verdiscontering-en-tijdsvoorkeur/), maar dan cyclus voor cyclus in plaats van jaar voor jaar toegepast.

## Uitgewerkt voorbeeld

**Klinisch**: een model met 2 toestanden, `Gezond` en `Overleden`, waarin 10% van het cohort per cyclus overlijdt en `Overleden` absorberend is (de zelfovergangskans is 1,0; zonder die zelflus zou de cohortmassa na één cyclus in `Overleden` verdwijnen). Het cohort begint geheel `Gezond`, kost £1.000 per cyclus zolang het `Gezond` is (£0 zodra `Overleden`) en wint 0,8 QALY per jaar zolang het `Gezond` is. Gesimuleerd over 3 jaarlijkse cycli tegen het NICE-discontopercentage van 3,5%:

```
Cyclus 0: toestand = [1,00, 0,00] (100% Gezond)
  kosten = £1.000,00, qalys = 0,800, disconteringsfactor = 1,000000
  verdisconteerd: kosten = £1.000,00, qalys = 0,8000

Cyclus 1: toestand = [0,90, 0,10] (90% Gezond, 10% Overleden)
  kosten = £900,00, qalys = 0,720, disconteringsfactor = 0,966184
  verdisconteerd: kosten = £869,57, qalys = 0,6957

Cyclus 2: toestand = [0,81, 0,19] (81% Gezond, 19% Overleden)
  kosten = £810,00, qalys = 0,648, disconteringsfactor = 0,933511
  verdisconteerd: kosten = £756,14, qalys = 0,6049

Totale verdisconteerde kosten ≈ £2.625,71
Totale verdisconteerde QALY's ≈ 2,1006
```

De toestand van elke cyclus is de toestand van de vorige cyclus doorgevoerd door de overgangsmatrix: 90% van de 90% die in cyclus 1 nog `Gezond` is, blijft in cyclus 2 `Gezond` (0,9 × 0,9 = 0,81), terwijl de overige 19% inmiddels is overleden (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Merk op dat het cohort `Gezond` nooit helemaal leegmaakt: met een constante sterfte van 10% per cyclus en zonder terugkeer neemt het aandeel `Gezond` geometrisch af in plaats van bij een eindig aantal cycli nul te bereiken.

## Verbinding met software-engineering

Voor hoe een multicyclisch HTA-model in een echte beoordeling wordt gebruikt, zie [beoordeling van gezondheidstechnologie](../beoordeling-van-gezondheidstechnologie/): de referentiecasus die bepaalt welke disconteringsvoet, utiliteitsbron en tijdshorizon een ingediend Markov-model moet gebruiken.

Een Markov-cohortmodel is structureel een toestandsmachine met probabilistische overgangen, voor een vast aantal ticks gedraaid, waarbij de waarde van elke tick wordt verdisconteerd. Dezelfde vorm simuleert de retentie-/toestandsovergangen van een gebruikerscohort in de tijd; zie [DORA-metrieken](../dora-metrieken/) voor de operationele-betrouwbaarheidsversie van "welk deel van het systeem verkeert in deze periode in een gedegradeerde toestand en wat kost dat". Concreet:

- **Retentie-/churnmodellering** is een Markov-cohortmodel met toestanden als "actief", "risico" en "vertrokken": een vaste maandelijkse overgangsmatrix, over 12 of 24 maandcycli gedraaid, vertelt je het verwachte aantal actieve gebruikers (en de omzet) in elke toekomstige maand, op dezelfde manier als `Gezond`/`Overleden` je de verwachte overlevenden vertelt.
- **Betrouwbaarheid en incidenteneconomie**: de toestanden van een systeem (gezond, gedegradeerd, uitgevallen) kunnen op dezelfde manier worden gemodelleerd, met "kosten per cyclus" voor uitvalschade die oploopt zolang het systeem de toestanden gedegradeerd/uitgevallen bezet. Zo wordt een argument over incidentfrequentie een argument over verdisconteerde kosten, vergelijkbaar met de kosten van het betrouwbaarheidswerk dat de overgangskansen zou veranderen.
- **Absorberende toestanden als eindtoestanden**: `Overleden` in een klinisch model is exact een "opgezegd abonnement" of "blijvend offline" in een softwaremodel: beide hebben een expliciete zelfovergangskans van 1,0 nodig, anders verliest de simulatie stilzwijgend massa.

## Valkuilen

- **Overgangskansen die per rij niet op 1 uitkomen.** Een rij die op meer of minder dan 1 uitkomt, laat het cohort stilzwijgend elke cyclus massa "lekken" of "winnen"; controleer altijd de rijsommen voordat je de uitvoer van een model vertrouwt, want de modelstructuur zelf signaleert de fout niet.
- **Cycluslengte te grof voor de werkelijke dynamiek van de ziekte.** Een jaarlijkse cyclus voor een aandoening die binnen weken wezenlijk van toestand verandert, onderschat overgangen die midden in de cyclus plaatsvinden; kies een cycluslengte die kort is ten opzichte van hoe snel het gemodelleerde proces zich werkelijk beweegt.
- **De zelflus van een absorberende toestand vergeten.** Een absorberende toestand (overlijden, blijvende stopzetting) heeft een zelfovergangskans van precies 1,0 nodig. Laat je die weg, dan verdampt de cohortmassa in die toestand na één cyclus en worden cumulatieve kosten of QALY-verlies onderschat.
- **Het model als gevalideerd beschouwen omdat het draait.** Een Markov-cohortmodel met plausibel ogende overgangskansen kan structureel nog steeds fout zijn (ontbrekende toestanden, verkeerd absorberend gedrag); valideer tegen bekende epidemiologische benchmarks (bijv. komt de gemodelleerde 5-jaarsoverleving overeen met gepubliceerde overlevingscurves) voordat je de uitvoer vertrouwt.

## Bronnen

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
