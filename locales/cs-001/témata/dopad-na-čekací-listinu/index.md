# Dopad na čekací listinu

Dopad na čekací listinu převádí ušetřenou klinickou kapacitu na pacienty odstraněné z čekací listiny (nebo jí rychleji prošlé). Převod ušetřených hodin na další klinické termíny přímo snižuje velikost čekací listiny trustu – nejhmatatelnější způsob, jak ukázat zdravotnímu systému, k čemu je uvolněná kapacita *dobrá*.

## Proč na tom záleží

Elektivní čekací listina je určujícím postpandemickým problémem NHS (její velikost je národní politická metrika) a každý trust provozuje proti ní program obnovy plánované péče. Byznys případ, který říká „ušetří 2 000 sesterských hodin“, je abstraktní; ten, který říká „vytvoří 4 000 dalších termínů, ošetří 3 800 čekajících pacientů, sníží listinu oboru o 9 %“, je příběh, který může provozní ředitel odnést své radě. Dopad na čekací listinu je přirozenou *účetní jednotkou* pro [kapacitu neuvolňující hotovost](../úspory-uvolňující-hotovost-vs-neuvolňující-hotovost/).

## Matematika

```
Extra slots        = hours released / slot duration × utilization
Patients seen      = extra slots × (1 − DNA rate)
List reduction     = patients seen − induced new demand
Waiting-time gain  = queueing improvement from higher service rate
                     (for stable queues, cutting the backlog N by ΔN at
                     service rate μ pulls everyone forward ~ΔN/μ)
```

Zdravotní hodnota kratšího čekání: pacienti tráví méně týdnů ve stavu s nižším užitkem před léčbou – aritmetika QALY v [odeslání k léčbě](../odeslání-k-léčbě/).

## Řešený příklad

Software ambientní dokumentace ušetří každé z 20 klinických sester 45 min/den. Za 250 dnů: 20 × 0,75 × 250 = 3 750 hodin/rok.

```
Slots (30 min, 85% usable) = 3,750 / 0.5 × 0.85 = 6,375 slots
Patients seen (7% DNA)     = 6,375 × 0.93       ≈ 5,929/year
```

U oboru s listinou 12 000 pacientů a 24 000 termíny ročně odpovídající poptávce zkrátí ~5 900 dodatečných návštěv průměrná čekání zhruba o čtvrtinu – a posune trust výrazně k 18týdennímu standardu bez náboru. Při ~160 £ hodnoty schématu na návštěvu má aktivita hodnotu ~949 000 £/rok (viz [národní tarif a jednotkové náklady](../národní-tarif-a-jednotkové-náklady/)) – ale prezentujte nejprve rámec *čekací listiny*; je to ten, podle kterého je systém řízen.

## Souvislost se softwarovým inženýrstvím

Čekací listina je nedodělek a ekonomika vypalování nedodělku se přenáší oběma směry. Ze zdravotnictví do softwaru: hodnotu snížení nedodělku oceňujte tím, jak dlouho *uživatelé* čekají na hodnotu, nikoli uzavřenými položkami ([náklady zpoždění](../náklady-zpoždění/) na frontovou položku). Ze softwaru do zdravotnictví: Littleův zákon říká, že listina se zmenšuje jen tehdy, když míra obsluhy převyšuje míru příchodu – zisky kapacity pohlcené rostoucími doporučeními nechávají čekání beze změny, takže modelujte i příchody. A v obou oblastech prioritizujte podle hodnoty vážené závažností (kategorie klinické naléhavosti ↔ [modifikátory závažnosti](../deficit-qaly-a-modifikátory-závažnosti/)), nikoli podle first-in-first-out.

## Úskalí

- **Termíny ≠ pacienti**: zapomenutí na míry DNA a nepoužitelné zlomky uvolněného času.
- **Vyvolaná poptávka**: viditelná extra kapacita přitahuje doporučení; čistý dopad na listinu je menší než hrubý.
- **Nárokování hotovosti**: dopad na čekací listinu je hodnota kapacity; tvrzení o hotovosti (odvrácený outsourcing nedodělku) je jiná řádka – viz [odvratitelné náklady na outsourcing](../odvratitelné-náklady-na-outsourcing/).

## Zdroje

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
