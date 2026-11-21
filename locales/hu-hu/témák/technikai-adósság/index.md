# Technikai adósság

A technikai adósság egy kódbázisban a múltbeli célszerű döntések implicit jövőbeli költsége: a tartozott javítási munka (**tőke**) és a szállításra gyakorolt folyamatos fékezőhatás (**kamat**). Az olyan számszerűsítési módszerek, mint a SQALE, metaforából költségezett kötelezettséggé alakítják.

## Miért fontos

Számszerűsítés nélkül a technikai adósság panaszkodás; számszerűsítve üzleti eset. Iparági alapvonalak (CAST Appmarq, 1400 alkalmazás / 550 M kódsor): történelmileg ≈ **3,61 $ technikaiadósság-tőke kódsoronként**, a tipikus kódbázisok az újraépítési költség 15–20%-os adósságarányát hordozzák, szemben a gyakran használt ≤5%-os egészségi léccel (a SonarQube „A" osztálya). Az egészséggazdasági keret pontosan illik: az adósság *krónikus betegség* — kezelés nélkül progrediál, „kamata" lassabb szállításként és magasabb hibaarányként kamatozik, és a javítás kapacitásért versenyez a funkciómunkával, pontosan úgy, ahogy a megelőzés versenyez a kezeléssel.

## A matematika

```
SQALE principal   = Σ over violations (remediation time) × developer cost rate
Technical debt ratio (TDR) = remediation cost / redevelopment cost × 100
                    (SonarQube grades: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Interest (the number that justifies paydown):
  interest/year = Δ delivery velocity × value per unit velocity
                + Δ defect rate × cost per defect
Paydown case  = PV(interest avoided over horizon) − remediation cost
                (discounted — see discounting-and-time-preference.md)
```

A tőke megállapítja a kötelezettséget; a **kamat** teszi a befektetési esetet. 500 ezer £ tőke megfizetése évi 40 ezer £ kamat elkerüléséért rossz csere; évi 400 ezer £ elkerüléséért kiváló.

## Kidolgozott példa

Egy 400 ezer kódsoros klinikai nyilvántartási integrációs réteg: SQALE-tőke 3800 óra × 75 £ = **285 ezer £**; TDR ≈ 12% (C osztály). Mért kamat: az ezt a réteget érintő csapatok 40%-kal hosszabb átfutási időt és 2× változási hibaarányt mutatnak az állomány alapvonalához képest. A réteg évi 6000 fejlesztői órát nyel el:

```
Interest ≈ 6,000 × 0.40 × £75      = £180,000/year (velocity drag)
         + 12 extra failures × £8,000 = £96,000/year (rework/incidents)
         ≈ £276,000/year

Remediate the worst 30% of principal (£85k) targeting hotspots → modelled
interest reduction 60%: saves ~£166k/year. Payback ≈ 6 months.
```

A hotspot-célzás számít: az adósságkamat ott koncentrálódik, ahol a változási gyakoriság × adósságsűrűség csúcsra ér — a ritkán érintett adósság javítása semmit nem vásárol, mint egy olyan állapot kezelése, amely soha nem progrediált volna ([a megelőzés gazdaságtana](../a-megelőzés-gazdaságtana/)).

## Kapcsolat a szoftverfejlesztéssel

Az egészséggazdasági importok, amelyek feljavítják a technikai adósságról szóló érveket: fejezd ki az állományt **teherleltárként** ([DALY](../fogyatékossággal-korrigált-életév/)-stílusban — hol vannak az elveszett egészséges mérnöki évek?); indokold a törlesztést progressziós matematikával, őszintén (általában költséghatékony, nem költségmegtakarító); súlyozd a legrosszabb rendszerek javítását a [súlyossági hiánnyal](../qaly-hiány-és-súlyossági-módosítók/); és a nagy javítási javaslatokat olyan kompenzációs elemzéssel nyújtsd be, amely túléli az [elkerült lefelé irányuló költségek](../elkerült-lefelé-irányuló-költségek/) szabályait — valószínűséggel súlyozott, diszkontált, egyszer számolt.

## Buktatók

- **Csak tőkejelentés**: egy nagy ijesztő szám kamatbecslés nélkül semmit nem indokol.
- **Az eszköz által generált adósságszámok szó szerinti vétele**: a SQALE szabálysértéseket számol; elmulasztja az architekturális adósságot (a drága fajtát) és apróságokat számol.
- **Adósság-nulla utópizmus**: az optimális adósságszint nem nulla — az adósság tőkeáttétel; a kérdés a kamatláb.
- **„Az újraírás mindent elkerül"**: az újraírási javaslatoknak át kell menniük ugyanazokon a kompenzációs szabályokon — kontrafaktuális költség, valószínűség, diszkontálás.

## Források

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
