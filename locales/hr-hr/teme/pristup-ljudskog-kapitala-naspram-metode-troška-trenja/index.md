# Pristup ljudskog kapitala naspram metode troška trenja

To su dvije konkurentne metode vrednovanja izgubljene produktivnosti — zbog bolesti, invaliditeta ili smrti — u studijama troška bolesti i analizama troškova i koristi. Pristup ljudskog kapitala (HCA) vrednuje sav izgubljeni učinak kroz cijelo trajanje izostanka po stopi plaće; metoda troška trenja (FCM) vrednuje ga samo za kraće razdoblje koje poslodavcu zapravo treba da obnovi proizvodnju. Izbor među njima mijenja procjenu neizravnih troškova dva ili više puta.

## Zašto je važno

Neizravni troškovi (troškovi produktivnosti) jedna su od najspornijih stavki u zdravstvenoj ekonomiji upravo zato što se dvije standardne metode tako oštro razilaze. HCA svaki dan izostanka tretira kao dan učinka koji gospodarstvo doista gubi, vrednovan punom plaćom kroz puno trajanje — ili, za smrt ili trajni invaliditet, kroz preostali radni vijek. FCM tvrdi da u gospodarstvu s nezaposlenošću i viškom na tržištu rada većina dugog izostanka zapravo ne smanjuje nacionalni učinak nakon što je poslodavac obučio zamjenu ili preraspodijelio posao; samo „razdoblje trenja” — vrijeme za vraćanje proizvodnje na prijašnju razinu — predstavlja stvaran gubitak. FCM stoga sustavno daje niže, konzervativnije procjene neizravnih troškova od HCA, a dvije metode nisu zamjenjive fusnote: to su različite ekonomske teorije o tome što „izgubljena produktivnost” znači. Zato [referentni slučaj NICE-a](../procjena-zdravstvenih-tehnologija/) zadano isključuje troškove produktivnosti, iskazujući ih, ako uopće, kao zasebnu analizu osjetljivosti iz društvene perspektive, umjesto da ih miješa u ICER referentnog slučaja — vidi [perspektivu analize](../perspektiva-analize/).

## Matematika

```
Pristup ljudskog kapitala:
HCA_cost = daily_wage × days_lost

Metoda troška trenja (pojednostavljeno, oblik ograničen na razdoblje trenja):
FCM_cost = daily_wage × min(days_lost, friction_period_days)

friction_period_days = procjena za zemlju/sektor vremena potrebnog za
                        obnovu proizvodnje (povijesno ~85 dana u nizozemskim
                        iMTA smjernicama za troškove; razlikuje se po zemlji
                        i povremeno se ponovno procjenjuje)
```

Cijelo neslaganje između dviju metoda živi u `min()`: HCA nikad ne ograničava `days_lost` pa trošak raste kroz cijeli izostanak, dok FCM ograničava brojane dane na razdoblje trenja, koliko god stvarni izostanak trajao.

## Riješeni primjer

Zaposlenik je odsutan s posla `days_lost = 180` dana, uz `daily_wage = 150 £`.

**Pristup ljudskog kapitala**:

```
HCA_cost = 150 × 180 = £27,000
```

**Metoda troška trenja**, uz razdoblje trenja `friction_period_days = 85` (povijesno nizozemsko iMTA mjerilo, prema periodičnoj ponovnoj procjeni smjernica):

```
FCM_cost = 150 × min(180, 85) = 150 × 85 = £12,750
```

FCM-ovih 12.750 £ manje je od polovice HCA-ovih 27.000 £ za *isti* izostanak — sam izbor metode bitno mijenja slučaj troška bolesti prije nego što se dotakne ijedna druga pretpostavka.

## Veza sa softverskim inženjerstvom

Ovo se izravno preslikava na način kako tim vrednuje odlazak inženjera:

- **Obračun fluktuacije u stilu HCA**: vrednovanje gubitka kao pune plaće otišlog inženjera koliko god mjesto ostane upražnjeno. To je naivna inačica većine modela troška fluktuacije i precjenjuje gubitak iz istog razloga zbog kojeg HCA precjenjuje gubitak produktivnosti — pretpostavlja da je upražnjeni kapacitet cijelo vrijeme bio potpuno produktivan i da ništa drugo nije apsorbiralo prazninu. Vidi [zadržavanje radne snage](../zadržavanje-radne-snage/), koje kvantificira lanac zapošljavanja/uvođenja/pokrivanja upražnjenog mjesta u koji se ova metoda ulijeva.
- **Obračun fluktuacije u stilu FCM**: vrednovanje gubitka samo za stvarno vrijeme do popune i uhodavanja zamjene — inženjersko „razdoblje trenja”. To je obranjiviji broj za poslovni slučaj, baš kao što je FCM konzervativniji izbor u studiji troška bolesti.
- Temeljna disciplina ista je kao u [oportunitetnom trošku](../oportunitetni-trošak/): istisnuti resurs vrednujte prema onome što se doista gubi, a ne prema naslovnom trajanju pomnoženom stopom.

## Zamke

- **Miješanje HCA i FCM unutar jedne analize ili iskazivanje samo jedne bez otkrivanja izbora.** Isti podaci o izostanku mogu dati razliku od 2 ili više puta u iskazanom trošku ovisno o metodi; izbor treba navesti, a ne zakopati.
- **Korištenje HCA u slučaju društvene perspektive bez označavanja kao analize osjetljivosti.** Referentni slučaj NICE-a izričito isključuje troškove produktivnosti; HCA procjena iz društvene perspektive pripada u scenarijsku analizu, a ne u naslovni ICER.
- **Primjena bilo koje metode na neplaćeni ili netržišni rad (npr. njegu) bez prilagodbe.** Obje metode pretpostavljaju plaću kao zamjenu za vrijednost, što se ne prenosi čisto na rad bez tržišne plaće.

## Izvori

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — topic on productivity costs.
- NICE health technology evaluations manual (PMG36) — reference-case perspective and optional societal-perspective guidance. <https://www.nice.org.uk/process/pmg36>
