# Metriky služeb GDS

Service Manual britské Government Digital Service (GDS) nařizuje čtyři KPI pro každou vládní digitální službu: **náklady na transakci, spokojenost uživatelů, míru dokončení a digitální přijetí**. Společně tvoří minimální ekonomiku veřejné digitální služby – a šablonu, kterou dědí digitální služby NHS.

## Proč na tom záleží

Metriky GDS kódují byznys případ přesunu kanálů, který financoval desetiletí digitalizace vlády: Digital Efficiency Report zjistil, že digitální transakce jsou ~20× levnější než telefonické a ~50× levnější než osobní (údaje místní správy: web 0,15 £, telefon 2,83 £, osobně 8,62 £). Úspory se však projeví jen tehdy, když lidé digitální cestu *dokončí* (míra dokončení) *místo* drahého kanálu (přijetí) – čtyři KPI jsou jeden ekonomický model, nikoli čtyři dashboardy.

## Matematika

```
Cost per transaction = total service cost / completed transactions
Completion rate      = completed / started transactions × 100
Digital take-up      = digital transactions / all-channel transactions × 100
User satisfaction    = % satisfied+very satisfied (5-point, in-service survey)

Channel-shift saving = volume × take-up shift × (cost_old_channel − cost_digital)
… minus failure demand: (1 − completion rate) × fallback channel cost
```

## Řešený příklad

Služba správy objednávek NHS: 2 mil. transakcí ročně, nyní 70 % telefonicky (3,20 £/hovor) / 30 % digitálně (0,25 £). Redesign zvýší digitální přijetí na 55 % a dokončení z 84 % na 93 %:

```
Take-up shift saving = 2M × 0.25 × (3.20 − 0.25) = £1,475,000/year

Failure-demand saving: failed digital journeys fall back to phone
  before: 2M × 0.30 × 0.16 × £3.20 = £307,200
  after:  2M × 0.55 × 0.07 × £3.20 = £246,400
  net £60,800/year — completion improvements protect the take-up gains

Satisfaction is the leading indicator: dissatisfied users revert to phone,
so a satisfaction drop forecasts take-up decay before it appears.
```

## Souvislost se softwarovým inženýrstvím

Tyto čtyři KPI jsou produkčním příkladem [tabulky nákladů a důsledků](../analýza-nákladů-a-důsledků/): jedna nákladová metrika, tři metriky výsledků, nikdy nesloučené do skóre. Pro produktové inženýry jsou provozní poučení: **míra dokončení je problém instrumentace trychtýře** (každý bod opuštění lze najít a opravit); **náklady na transakci jsou [jednotková ekonomika cloudu](../jednotková-ekonomika-cloudu/)** plus náklady kanálů s asistencí personálu; **přijetí je skrytě metrika rovnosti** – uživatelé, kteří nemohou nebo nechtějí přejít na jiný kanál, jsou nepřiměřeně staří, zdravotně postižení a deprivovaní, takže agresivní uzavírání kanálů mění „úspory“ na újmu přístupu (viz [dosah a rovnost](../dosah-a-rovnost/)). Zveřejňování KPI (GOV.UK to dělá, po službách) je samo mechanismem: transparentnost disciplinuje předpovědi stejně jako audity [realizace přínosů](../realizace-přínosů/).

## Úskalí

- **Přijetí nátlakem**: zavření telefonní linky zvýší přijetí a hodí poptávku po selhání na zaměstnance v první linii; měřte celkové náklady systému.
- **Dokončení měřené od strany 2**: zahájení trychtýře po bodu odpadu lichotí míře.
- **Náklady na transakci ignorující asistovanou digitální podporu** a vyřizování poptávky po selhání.
- **Průzkumy spokojenosti jen při úspěšném dokončení** – nespokojení se k průzkumu většinou nikdy nedostanou.

## Zdroje

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
