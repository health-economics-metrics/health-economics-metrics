# WSJF a CD3

CD3 (Cost of Delay Divided by Duration – náklady zpoždění dělené trváním) a WSJF (Weighted Shortest Job First) jsou pravidla prioritizace, která plánují práci podle **hustoty hodnoty**: kolik nákladů zpoždění se odstraní na jednotku spotřebované vzácné kapacity. Při sdílené, pevné kapacitě je pořadí nejvyšší-CD3-první matematicky optimální posloupností pro minimalizaci celkových nákladů zpoždění.

## Proč na tom záleží

Každý backlog je problém přidělování: mnoho hodnotných položek, jedna pipeline. Health economics vyřešila stejný problém pro zdravotní rozpočty pomocí žebříčků nákladové efektivity – řaďte intervence podle zdraví získaného za libru, financujte dolů po seznamu, dokud se rozpočet nevyčerpá. CD3 je totožná logika pro kapacitu dodávky: přínos na jednotku *omezeného zdroje*, financovaný v pořadí. Správné řazení je peníze zdarma – stejná práce, stejná kapacita, méně celkových nákladů zpoždění.

## Matematika

```
CD3  = Cost of Delay (£/week) / Duration (weeks)      — real units (Black Swan Farming)
WSJF = (user-business value + time criticality + risk reduction/opportunity
        enablement) / job size                         — SAFe's relative-scale proxy,
                                                        modified-Fibonacci scores
```

CD3 se skutečnou měnou ([náklady zpoždění](../náklady-zpoždění/)) je striktně silnější než bezjednotkové body WSJF – WSJF je k CD3 tím, čím je vícekriteriální skórování k plné [analýze nákladů a užitku](../analýza-nákladů-a-užitku/): použitelné, když je monetizace nepraktická, zmanipulovatelné, když skóre nemá kotvu.

## Řešený příklad

Tři funkce, jeden tým:

```
Feature   CoD (£/wk)   Duration   CD3
A         30,000       10 wks     3,000
B         12,000       2 wks      6,000
C         5,000        1 wk       5,000
```

Pořadí CD3: B, C, A. Porovnejte celkové náklady zpoždění s „největší CoD první“ (A, B, C):

```
CD3 order  (B,C,A): A waits 3 wks, C waits 2 → 30k×3 + 5k×2  = £100k delay cost
CoD order  (A,B,C): B waits 10, C waits 12   → 12k×10 + 5k×12 = £180k
```

Stejné funkce, stejný tým – samotné řazení ušetří 80 000 £. Intuice: malé, naléhavé položky jdou první, protože uvolní své náklady zpoždění levně; velká položka krátkým čekáním ztratí málo.

## Souvislost se softwarovým inženýrstvím

U portfolií zdravotnického softwaru vyjadřujte CoD v jednotkách, které tento repozitář učí: QALY/týden × práh + provozní £/týden, a backlog se stává přímo souměřitelným s tím, jak zdravotní systém řadí všechno ostatní, co nakupuje. Dvě praktické poznámky: (1) trváním se rozumí *kalendářní čas zabírající omezení*, nikoli úsilí – položka s uplynulými 2 týdny, která potřebuje 2 dny týmu na úzkém místě, je levnější, než vypadá (viz [optimalizace následných zdrojů](../optimalizace-následných-zdrojů/)); (2) nemocnice implicitně používají stejné pravidlo, když řadí operační seznamy podle propustnosti vážené naléhavostí – kategorie klinické prioritizace jsou CD3 vážené závažností (viz [deficit QALY a modifikátory závažnosti](../deficit-qaly-a-modifikátory-závažnosti/)).

## Úskalí

- **Divadlo skóre WSJF**: bezjednotkové debaty o Fibonacciho číslech konvergují k tomu, kdo argumentuje nejhlasitěji; ukotvěte aspoň položky na vrcholu backlogu ve skutečném CoD.
- **Hrátky s trváním**: dělení položek za účelem nafouknutí pořadí CD3 – v pořádku, když dělení dodávají hodnotu nezávisle, podvod, když ne.
- **Ignorování profilů naléhavosti**: CoD ve tvaru termínu (regulační data) porušuje předpoklad ustálené sazby; plánujte je podle proveditelnosti dat a CD3 použijte na zbytek.
- **Neustálé přeřazování**: CD3 je pro rozhodnutí o řazení při okamžiku závazku, nikoli pro každodenní míchání rozpracované práce (viz [metriky toku](../metriky-toku/) o WIP).

## Zdroje

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
