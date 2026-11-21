# Nyert életévek (LYG)

A nyert életévek a beavatkozásnak tulajdonítható többlet túlélés, minőségi korrekció nélkül: a vele és nélküle mért túlélési görbék közötti terület. Az egyenlő értékű nyert életév (evLYG) modern változat, amely minden élethosszabbítást egyformán értékel.

## Miért fontos

A LYG a legnyersebb egészségi kimenet: mennyivel élnek tovább az emberek? Akkor számít, ha hiányoznak a minőségi adatok, ha QALY-szkeptikus közönséggel szemben hasonlítunk össze, és az onkológiában, ahol a túlélési görbék az elsődleges vizsgálati kimenet. Az **evLYG** (az amerikai ICER intézet használja a költség/QALY mellett) etikai okból létezik: a QALY a meghosszabbított életévet a beteg hasznossága szerint értékeli, így egy fogyatékossággal élő életének meghosszabbítása „kevesebbet számít" — az evLYG minden meghosszabbított évet rögzített hasznosságon értékel, megszüntetve ezt a megkülönböztetést.

## A matematika

```
LYG = mean survival_new − mean survival_comparator
    = area between survival curves (restricted to the time horizon)

QALY view of life extension:  extension × patient utility
evLYG view of life extension: extension × fixed utility (ICER uses ~0.851,
                              the average US population utility)
```

Mindkettőt [diszkontálják](../diszkontálás-és-időpreferencia/) a gazdasági modellekben.

## Kidolgozott példa

Szepszis korai figyelmeztető algoritmus egy kórházban: a modellezés szerint a korábbi antibiotikum évente 12 halált előz meg; e betegek átlagos életkora mellett fejenként 8 hátralévő életév jut 0,7 hasznosságon.

```
LYG   = 12 × 8            = 96 life-years/year
QALYs = 96 × 0.7          = 67.2
evLYG = 96 × 0.851        = 81.7
```

QALY-nként 20 000 £-nál a QALY-keretezés a túlélést 1,34 M£/évre értékeli; az evLYG-keretezés 1,63 M£-ra. A különbség pontosan az etikai ítélet arról, hogy egy 0,7 hasznosságú életév a „teljes" érték 70%-át éri-e. A komoly dosszié mindkettőt közli.

## Kapcsolat a szoftverfejlesztéssel

- A túlélési elemzés a közös eszköztár: a Kaplan–Meier-görbék betegekre és *szolgáltatásokra* (meghibásodásig eltelt idő, lemorzsolódásig eltelt idő) ugyanaz a matematika. A megbízhatósági befektetésből „nyert szolgáltatásévek" = a rendszer a vele/nélküle túlélési görbéi közötti terület — őszintébb keretezés a pontszerű MTTF-állításoknál.
- Az evLYG mutatótervezési figyelmeztetést is hordoz a mérnöki munkára: bármely termelékenységi mutató, amely a kimenetet „csapatminőségi" tényezővel súlyozza, rendszeresen alulértékeli a korlátozott vagy küzdő csapatok javulását — néha szándékosan az egyenlő értékű változatot akarod.

## Buktatók

- **Medián és átlagos túlélés**: a gazdasági modellek átlagot igényelnek (görbe alatti terület); a vizsgálatok gyakran a mediánt tüntetik fel címszóként. Ferde eloszlásokban nagyon különböznek.
- **Extrapoláció a vizsgálati követés után** dominálja a krónikus betegségek modellezett LYG-jét — add meg az extrapolációs modellt, és tesztelj [érzékenységvizsgálatban](../érzékenységvizsgálat/).
- **Megelőzött halálesetek állítása megfigyeléses előtte/utána adatokból** az esetösszetétel és a szekuláris trendek kiigazítása nélkül.

## Források

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
