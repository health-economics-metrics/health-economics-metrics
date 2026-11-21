# Multikriteriální analýza rozhodování (MCDA)

Multikriteriální analýza rozhodování (MCDA) je model vážených součtových skóre používaný v hodnocení zdravotnických technologií, když jediné ICER / práh ochoty platit nezachytí vše, na čem rozhodovateli záleží: rovnost, nenaplněná potřeba, inovace, dopad na rozpočet, závažnost nemoci. Každé kritérium dostane váhu odrážející jeho důležitost (zjištěnou od zainteresovaných stran, váhy se sčítají na 1), každá možnost dostane normalizované skóre za kritérium (typicky 0–1) a celkové skóre je vážený součet – stejný matematický tvar jako scorecard pro výběr softwarového dodavatele.

## Proč na tom záleží

MCDA se používá v rámcích jako EVIDEM a některými orgány HTA pro posuzování sirotčích/vzácných onemocnění, kde je striktní přístup prahu nákladů na QALY považován za příliš úzký na zachycení všeho, na čem u rozhodnutí záleží. Pracovní skupina ISPOR MCDA Emerging Good Practices Task Force formalizovala pokyny dobré praxe pro obhajitelné zjišťování vah a skóre právě proto, že neformálně vážené rozhodnutí se snadno vytvoří a snadno zneužije. Když má zdravotnická technologie skutečně rozměry hodnoty, které jediný [práh ochoty platit](../prahy-ochoty-platit/) nezachytí – závažnost, inovace, rovnost – dává MCDA rozhodovatelům explicitní, auditovatelnou strukturu pro jejich kombinaci místo nevyslovného úsudku.

## Matematika

```
MCDA score = Σ_i (weight_i × score_i)

weights should sum to 1 (elicited via stakeholder methods such as swing
weighting or the Analytic Hierarchy Process)
```

## Řešený příklad

Komise HTA skóruje digitální terapeutikum ve čtyřech kritériích:

```
Criterion                          Weight   Score   Weight × Score
Clinical benefit                   0.4      0.8     0.32
Cost impact                        0.3      0.5     0.15
Disease severity / unmet need      0.2      0.9     0.18
Innovation                         0.1      0.6     0.06
                                    ─────                ─────
                                    1.0                  0.71
```

Váhy se sčítají na 1,0 (0,4 + 0,3 + 0,2 + 0,1) a skóre MCDA je 0,71 (0,32 + 0,15 + 0,18 + 0,06). Komise porovná 0,71 s předem dohodnutým prahem, nebo ho seřadí proti konkurenčním technologiím skórovaným stejně.

## Souvislost se softwarovým inženýrstvím

Je to přesně táž matematika jako vážený scorecard pro výběr dodavatele, hodnoticí matice RFP nebo model skórování priorit funkcí – viz [vyrobit, nebo koupit](../vyrobit-nebo-koupit/), klasický případ vážených scorecardů v softwarovém zadávání. Stojí také za to ji kontrastovat s [WSJF a CD3](../wsjf-a-cd3/): WSJF/CD3 je metoda prioritizace založená na *poměru* (náklady zpoždění dělené velikostí úlohy nebo trváním), zatímco MCDA je vážený *součet*. MCDA a WSJF/CD3 jsou dvě strukturálně odlišné odpovědi na „jak seřadit soupeřící možnosti“ a vědět, kterou dané rozhodnutí skutečně vyžaduje – aditivní hodnotu napříč nezávislými kritérii, nebo hustotu hodnoty na jednotku vzácné kapacity – záleží více než to, který vzorec vypadá přísněji.

## Úskalí

- **Zkreslení při zjišťování vah**: kdo nastavuje váhy, fakticky předurčuje pořadí, takže „vzorec“ může vyprat politické nebo komerční rozhodnutí jako objektivní výpočet. Zdokumentujte, kdo váhy nastavil a jak.
- **Dvojí započtení kritéria už zachyceného jinde**: skórování „nákladové efektivity“ jako jednoho kritéria a *zároveň* samostatné skórování „dopadu na náklady“ přeceňuje peníze vůči ostatním kritériím, aniž to někdo zamýšlel.
- **Falešná přesnost**: dvoumístné vážené skóre (0,71) naznačuje větší přísnost, než skutečně podporují podkladová hodnocení zainteresovaných stran na škále 0–10, a mezi-hodnotitelská variabilita těchto hodnocení se často vůbec neuvádí.

## Zdroje

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
