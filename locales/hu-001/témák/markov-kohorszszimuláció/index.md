# Markov-kohorszszimuláció

A Markov-kohorszmodell a szokásos HTA-modellezési technika olyan beavatkozásokhoz, amelyek hatásai több időszakon (cikluson) át bontakoznak ki, nem egyetlen lövésben. Egy hipotetikus kohorsz teljes egészében egy egészségi állapotban indul, és minden ciklusban rögzített átmeneti valószínűségek mozgatják a kohorsz hányadait az állapotok között; a költségek és QALY-k minden ciklusban annak arányában halmozódnak, hogy a kohorsz mekkora része foglalja az egyes állapotokat, és jelenértékre diszkontálják őket. Minden szoftvermérnök, aki többéves digitális egészségügyi üzleti esetet modellez — ahol a felhasználók vagy betegek az idő során olyan állapotok között mozognak, mint „elkötelezett", „lemaradt" vagy „lemorzsolódott" —, ugyanezt a szerkezetet építi.

## Miért fontos

A legtöbb valós egészségügyi technológiai döntés nem egyetlen időszak költségének és kimenetének egylövéses összehasonlítása. Egy krónikus betegség évek alatt progrediál, relapszál, reagál a kezelésre vagy öl — és az egyperiódusú [költséghatékonysági elemzés](../költséghatékonysági-elemzés/) ezt nem tudja ábrázolni. A krónikus betegségi beavatkozásokra vonatkozó NICE-, ICER- és CADTH-benyújtások, amelyeket [egészségügyi technológiaértékelés](../egészségügyi-technológiaértékelés/) útján bírálnak el, szinte mindig élethosszig tartó időhorizontú Markov-kohorszmodellként épülnek, mert az alternatíva — minden lehetséges egyéni betegútvonal modellezése — nagy léptékben kezelhetetlen. A kohorszszintű Markov-modell feláldoz némi egyéni szintű realizmust (nem tudja könnyen ábrázolni a múltbeli állapotok emlékezetét, ezért „Markov": a jövő csak a jelenlegi állapottól függ) egy átlátható, auditálható és elég gyors modellért ahhoz, hogy ezerszer lefusson egy [valószínűségi érzékenységvizsgálatban](../valószínűségi-érzékenységvizsgálat/).

## A matematika

```
One cycle's cohort update (row-vector x transition matrix):
  new_state[j] = sum_i state[i] * transition_matrix[i][j]

One cycle's cost:
  cycle_cost = sum_s state[s] * cost_per_cycle[s]

One cycle's QALYs:
  cycle_qalys = sum_s state[s] * utility[s] * cycle_length_years

Full simulation over `cycles` cycles, discounted at `discount_rate`:
  total_discounted_cost  = sum_{t=0}^{cycles-1} cycle_cost(state_t)  / (1 + discount_rate)^t
  total_discounted_qalys = sum_{t=0}^{cycles-1} cycle_qalys(state_t) / (1 + discount_rate)^t
  where state_0 = initial_distribution, state_{t+1} = advance_cohort(state_t, transition_matrix)
```

Az egyes ciklusok jelenértékre diszkontálása pontosan a [diszkontálás és időpreferencia](../diszkontálás-és-időpreferencia/) képletét használja, ciklusonként évenkénti helyett alkalmazva.

## Kidolgozott példa

**Klinikai**: 2 állapotú modell — `Well` és `Dead` — ahol a kohorsz 10%-a meghal minden ciklusban, és a `Dead` elnyelő (önátmeneti valószínűsége 1,0; ennek az önhurkoknak az elhagyása a kohorsz tömegét egy `Dead`-ben töltött ciklus után eltüntetné). A kohorsz teljes egészében `Well` állapotban indul, ciklusonként 1000 £-ba kerül, amíg `Well` (0 £, ha `Dead`), és évi 0,8 QALY-t nyer, amíg `Well`. 3 éves ciklusra szimulálva a NICE 3,5%-os diszkontrátáján:

```
Cycle 0: state = [1.00, 0.00] (100% Well)
  cost = £1,000.00, qalys = 0.800, discount factor = 1.000000
  discounted: cost = £1,000.00, qalys = 0.8000

Cycle 1: state = [0.90, 0.10] (90% Well, 10% Dead)
  cost = £900.00, qalys = 0.720, discount factor = 0.966184
  discounted: cost = £869.57, qalys = 0.6957

Cycle 2: state = [0.81, 0.19] (81% Well, 19% Dead)
  cost = £810.00, qalys = 0.648, discount factor = 0.933511
  discounted: cost = £756.14, qalys = 0.6049

Total discounted cost  ≈ £2,625.71
Total discounted QALYs ≈ 2.1006
```

Minden ciklus állapota az előző ciklus állapota az átmeneti mátrixon átvezetve — az 1. ciklusban még `Well` 90% 90%-a a 2. ciklusban is `Well` marad (0,9 × 0,9 = 0,81), míg a másik 19% most halt meg (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Figyeld meg, hogy a kohorsz soha nem üríti ki teljesen a `Well`-t: állandó 10% ciklusonkénti halandóság és újrabelépés nélkül a `Well` hányad mértani sorozatban csökken, ahelyett hogy bármely véges ciklusszámnál nullára esne.

## Kapcsolat a szoftverfejlesztéssel

Arról, hogyan használják a többciklusú HTA-modellt egy valódi értékelésben, lásd [egészségügyi technológiaértékelés](../egészségügyi-technológiaértékelés/) — a referenciaeset, amely meghatározza, melyik diszkontrátát, hasznossági forrást és időhorizontot kell használnia egy benyújtott Markov-modellnek.

A Markov-kohorszmodell szerkezetileg valószínűségi átmenetekkel rendelkező állapotgép, rögzített számú ütemen át futtatva, minden ütem értékét diszkontálva. Ugyanez az alak szimulálja egy felhasználói kohorsz megtartási/állapotátmeneteit az idő során — lásd [DORA-mutatók](../dora-mutatók/) a „a rendszer mekkora hányada van leromlott állapotban ebben az időszakban, és mibe kerül ez" működési megbízhatósági változatáért. Konkrétan:

- A **megtartási/lemorzsolódási modellezés** olyan állapotokkal rendelkező Markov-kohorszmodell, mint „aktív", „veszélyeztetett", „lemorzsolódott": egy rögzített havi átmeneti mátrix, 12 vagy 24 havi cikluson át futtatva, megmondja a várható aktív felhasználószámot (és bevételt) bármely jövőbeli hónapban, pontosan úgy, ahogy a `Well`/`Dead` megmondja a várható túlélőket.
- A **megbízhatósági és incidens-gazdaságtan**: egy rendszer állapotai (egészséges, leromlott, leállt) ugyanígy modellezhetők, a kiesés okozta kár „ciklusonkénti költségével", amely a leromlott/leállt állapotok foglalása alatt halmozódik — az incidensgyakoriságról szóló vitát diszkontált költségvitává alakítva, amely összehasonlítható az átmeneti valószínűségeket megváltoztató megbízhatósági munka költségével.
- Az **elnyelő állapotok mint végállapotok**: a `Dead` egy klinikai modellben pontosan egy „lemondott előfizetés" vagy „véglegesen offline" állapot egy szoftvermodellben — mindkettőnek kifejezett 1,0 önátmeneti valószínűség kell, különben a szimuláció csendben tömeget veszít.

## Buktatók

- **Soronként nem 1-re összegződő átmeneti valószínűségek.** Egy 1-nél többre vagy kevesebbre összegződő sor csendben „szivárogtatja" vagy „növeli" a kohorsz tömegét ciklusonként — mindig ellenőrizd a sorösszegeket, mielőtt megbízol a modell kimenetében, mert a modell szerkezete maga nem jelzi a hibát.
- **A betegség valódi dinamikájához túl durva ciklushossz.** Egy évi ciklus egy olyan állapotra, amely hetek alatt érdemben állapotot vált, alábecsüli a ciklus közbeni átmeneteket; válassz a modellezett folyamat tényleges mozgási sebességéhez képest rövid ciklushosszt.
- **Az elnyelő állapot önhurkának elfelejtése.** Az elnyelő állapotnak (halál, végleges abbahagyás) pontosan 1,0 önátmeneti valószínűség kell. Ha kihagyod, a kohorsz tömege abban az állapotban egyetlen ciklus után elpárolog, alábecsülve a kumulatív költségeket vagy a QALY-veszteséget.
- **A modell validáltnak tekintése, mert lefut.** Egy hihetőnek látszó átmeneti valószínűségű Markov-kohorszmodell is lehet szerkezetileg téves (hiányzó állapotok, rossz elnyelő viselkedés); validálj ismert epidemiológiai viszonyítási értékekkel (pl. egyezik-e a modellezett 5 éves túlélés a közzétett túlélési görbékkel), mielőtt megbízol a kimenetben.

## Források

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
