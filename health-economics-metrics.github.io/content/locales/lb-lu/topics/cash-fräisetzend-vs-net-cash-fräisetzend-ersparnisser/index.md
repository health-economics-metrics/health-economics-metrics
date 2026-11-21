# Cash-fräisetzend vs. net cash-fräisetzend Ersparnisser

Cash-fräisetzend Ersparnisser reduzéieren tatsächlech Ausgaben — eng Budgetzeil gëtt méi kleng. Net cash-fräisetzend Ersparnisser setzen Zäit oder Kapazitéit fräi, déi *nei notzt* amplaz bankéiert gëtt. Finanzdirekteren am Gesondheetssystem behandelen dës als verschidden Aarten, an dir sollt dat och maachen.

## Firwat et wichteg ass

Dat ass dee schärfsten Éierlechkeetstest, dee fir all digitale Business Case an engem nationale Gesondheetsdingscht ugewannt gëtt. NHS-Notzenrahmen kategoriséieren explizit all behaapte Virdeel als cash-fräisetzend, net cash-fräisetzend oder qualitativ. déi meescht digital „Ersparnisser" an der Gesondheet — agespuert Kliniker-Minutten pro Patient, méi séier Dokumentatioun — sinn net cash-fräisetzend: wäertvoll, awer se reduzéieren de Defizit net. E Trust-CFO mat enger Finanzéierungslück ka just Cash ausginn. Kuckt och [haart cash-fräisetzend Ersparnisser](../haart-cash-fräisetzend-ersparnisser/).

## D'Mathematik

```
Cash-fräisetzend Ersparnis = Budgetzeil virdrun − Budgetzeil duerno
                          (muss extrahéierbar sinn: e kënnegte Kontrakt, zougemaach Statioun,
                           reduzéiert Agenturausgaben, vermeide Kaf)

Net cash-fräisetzenden Wäert = fräigesat Zäit × Stéckkäschte vun där Zäit
                          (zu Opportunitéitskäschten bewäert; d'Geld ass NET extrahéierbar)
```

Dat selwecht kierperlecht Evenement (eng Stonn agespuert) landet an där enger oder där anerer Kategorie, jee nodeems wat duerno geschitt:

```
Stonn agespuert → Iwwerstonne-/Agenturschicht annuléiert        → cash-fräisetzend
Stonn agespuert → Kliniker gesäit ee Patient méi vun der Waardelëscht → net cash-fräisetzend (Kapazitéit)
Stonn agespuert → an Spillraum opgeholl, näischt ännert sech    → iwwerhaapt kee Virdeel
```

## Berechent Beispill

Software spuert all vun 100 Infirmièren 30 Minutten pro Schicht. Dat sinn 100 × 0,5 × 5 Schichten/Woch × 46 Wochen ≈ 11.500 Stonnen/Joer. Bei engem Band-5-Employer-Käschte vu ~25 £/Stonn ass d'verlockend Schlagzeil 287.500 £/Joer.

Déi éierlech Opdeelung:

- 20 % vun der Zäit landen do, wou Statioune momentan Bank-/Agenturpremium bezuelen, fir Dokumentatiouns-Iwwerlaf ofzedecken: 2.300 Stonnen × 35 £ Agenturtarif = **80.500 £ cash-fräisetzend** (Schichte wierklech net gebucht).
- 60 % gi fir direkt Patientebetreiung ëmverdeelt: 6.900 Stonnen × 25 £ = **172.500 £ net cash-fräisetzend Kapazitéit** — echte Wäert, getrennt gemellt, ni „Ersparnisser" genannt.
- 20 % verflüchtegen sech a Paus an Ënnerbriechungen: **0 £**. Dat ze behaapten wier Fiktioun.

E Business Case, deen 80,5k £ Cash + 172,5k £ Kapazitéit presentéiert, ass glaubwürdeg. E Business Case, deen 287,5k £ „Ersparnisser" presentéiert, gëtt vum éischte Comptabel, dee en liest, refuséiert.

## Bezuch zur Softwareentwécklung

Dee selwechte Logik regéiert den ROI vu KI-Codéierungsassistenten: „30 Minutten pro Entwéckler pro Dag" ass net cash-fräisetzend Kapazitéit, ausser Headcount, Contractor-Ausgaben oder Cloud-Käschte falen wierklech. Mellt d'Kategorië getrennt:

- Cash-fräisetzend: annuléiert Contractor-Engagementer, ausser Betrib geholl Tooling-Lizenzen, reduzéiert Cloud-Ausgaben.
- Kapazitéit: méi fréi ausgelieferte Features (Wäert iwwer [Cost of Delay](../verzögerungskäschten/)), ofgebaute Backlog.
- Näischt: gespuert Minutten, déi sech am Context-Switching fragmentéieren.

Verfollegt och, *wouhin déi fräigesate Zäit wierklech gaangen ass* — Benefits Realization ([benefits-realization.md](../benefits-realization/)) gëtt et, well behaapte Kapazitéitsgewënn beim Audit dacks verdampen.

## Falen

- **Minutten mat dem Gehalt multiplizéieren an et Ersparnis nennen** — d'kanonesch Sënn.
- **Fräigesate Zäit zu duerchschnëttleche belaaschte Käschten bewäerten**, wann de marginale Gebrauch vun där Zäit wäertaarm ass — kuckt [Grenz- vs. Duerchschnëttskäschten](../grenzkäschte-vs-duerchschnëttskäschte/).
- **Dat selwecht Stonn zweemol zielen**: als Cash (Schicht vermeit) an als Kapazitéit (zousätzlech Patiente gesinn).

## Quellen

- NHS Digital connectivity business case guidance, economic case (benefit categories). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
