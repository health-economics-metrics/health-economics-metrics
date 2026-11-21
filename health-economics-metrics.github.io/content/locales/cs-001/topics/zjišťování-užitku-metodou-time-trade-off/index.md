# Zjišťování užitku metodou Time Trade-Off (TTO)

TTO je standardní metoda zjišťování hodnoty užitku zdravotního stavu přímo od respondenta, místo aby se vymýšlela. Je jednou z metod zjišťování – vedle standardní sázky (standard gamble) a diskrétních volbových experimentů – které vytvářejí sady hodnot za nástroji jako [EQ-5D](../eq-5d/), a tedy za většinou následných výpočtů [QALY](../rok-života-upravený-o-kvalitu/).

## Proč na tom záleží

Každá užitková váha, která vstupuje do výpočtu QALY, musela odněkud pocházet. TTO je způsob jak: u stavu považovaného za lepší než smrt se respondent ptá, kolik let `X` v plném zdraví by považoval za ekvivalentní `T` letům ve zhoršeném stavu (`X < T`); užitek je `X / T`. U stavu, který někteří respondenti považují za horší než smrt, standardní vzorec selhává (nedokáže čistě vyjádřit užitky pod nulou), proto se použije rozšířené TTO. Softwarový inženýr nebo analytik, který bere užitkovou váhu jako daný vstup, aniž ví, že její vznik vyžadoval validovaný protokol zjišťování, je o krok vzdálen od čísla, které neobhájí, pokud bude zpochybněno.

## Matematika

```
Standard TTO (state better than death):
  utility = time_in_full_health / time_in_impaired_state
Extended TTO (state worse than death):
  utility = -time_traded_for_death / (total_duration - time_traded_for_death)
```

`time_in_full_health` / `time_in_impaired_state` – roky `X` v plném zdraví posouzené jako ekvivalentní `T` letům ve zhoršeném stavu. `time_traded_for_death` / `total_duration` – ve formulaci horší než smrt roky `a` ze `T`letého zbývajícího života, které by respondent vyměnil za okamžitou smrt, když dává přednost `T − a` letům v plném zdraví následovaným smrtí před `T` lety ve stavu horším než smrt. Výsledek je záporný, ukotvený tak, že smrt = 0.

## Řešený příklad

**Standardní**: respondent je ve zhoršeném stavu 10 let a je indiferentní vůči 7 letům v plném zdraví: užitek = 7 / 10 = **0,7**.

**Horší než smrt**: během 10letého zbývajícího života by respondent vyměnil 2 roky za okamžitou smrt – dává přednost 8 letům v plném zdraví následovaným smrtí před 10 lety ve stavu horším než smrt: užitek = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Souvislost se softwarovým inženýrstvím

Totéž, na co narazí průzkum DevEx nebo zapojení, když žádá lidi o hodnocení něčeho na nezkoumané škále 0–10, platí zde obráceně: TTO existuje právě proto, že „prostě lidi požádat o hodnocení“ není samo o sobě validovaná metoda zjišťování. Než postavíte kompozitní index – skóre DevEx, index zapojení, škálu vyhoření – nad sebehodnoceným číslem, zeptejte se, co jej zjistilo a zda byla ta metoda validována, tu samou otázku, kterou zdravotní ekonomové kladou užitkové váze, než vstoupí do QALY.

## Úskalí

- **Zobecnění individuální hodnoty**: hodnoty TTO se zjišťují od *vzorku* široké veřejnosti (nebo pacientů), nikoli od jednotlivce, o jehož péči se rozhoduje – použití hodnoty TTO jednoho respondenta, jako by se zobecňovala, je chyba vzorkování.
- **Špatná formulace pro stav**: standardní vzorec TTO předpokládá, že stav je jednoznačně lepší než smrt; jeho aplikace na stav, který někteří respondenti považují za horší než smrt, bez přechodu na rozšířenou formulaci tiše vytvoří chybný (kladný) užitek.
- **Nesrovnatelné délky**: hodnoty TTO zjištěné s různými délkami zbývajícího života `T` pro srovnání horší než smrt nejsou přímo srovnatelné bez kontroly, že návrh studie držel `T` konstantní.

## Zdroje

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
