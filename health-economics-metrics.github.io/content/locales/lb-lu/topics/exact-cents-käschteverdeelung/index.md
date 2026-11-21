# Exact-Cents-Käschteverdeelung

E Gesamtbetrag u Geld — e gedeelte Grant, eng Infrastrukturrechnung, eng Budgetimpakt-Zuel — mat naiver Prozentarithmetik op e puer Empfänger opzedeelen, produzéiert routinéiert Deeler, déi sech net méi zum ursprénglechen Total addéieren. Exact-Cents-Verdeelung ass de Fix: eng Integer-/Dezimalmethod, déi a klengste Währungseenheeten (Cent) schafft a garantéiert, datt d'Deeler sech *genau* zum Ganzen addéieren, egal wéi ongläich et sech deelt. All Softwareingenieur, deen en opgedeelten Total op de Cent ofstëmme muss — Pai, Grant-Auszuelung, Shared-Service-Chargeback — brauch dëst Muster, keng Gleitkomma-Prozenter.

## Firwat et wichteg ass

Dat ass e benannt, fundamentaalt Muster am Enterprise-Software-Engineering: dem Martin Fowler säi *Patterns of Enterprise Application Architecture* (2002) dokumentéiert `Money` an `Allocate` genau well „100 $ op dräi opdeelen" e Problem ass, dat naive Code ëmmer erëm falsch mécht, a roueg falsch mécht — de Feeler kënnt nëmmen un d'Liicht, wann een d'Bicher ofstëmmt a fënnt, datt d'Deeler e Cent manner (oder méi) wéi den Total sinn. A Gesondheetsökonomie- an NHS-Finanzaarbecht ass dat net akademesch: Budgetimpakt-Totaler ginn iwwer Site, Joren oder Direktioune opgedeelt; gedeelt Infrastruktur- a Lizenzkäschte ginn no Headcount oder Aktivitéitsundeel iwwer Departementer opgedeelt. All eenzel vun dëse Splits muss genau ofstëmmen, well e Finanzdirekter, deem Deeler iwwerreecht ginn, déi sech net zum Total addéieren, hält op, dem ganze Modell ze trauen.

## D'Mathematik

```
Naiv (futtis) Method:
  Deel_i = round(total × Undeel_i / Σ Undeeler)    — rundt all Deel onofhängeg

Exakt Method (Largest Remainder / „Largest-Remainder-Verdeelung"):
  1. base_i = floor(total_Minor_Units × Undeel_i / Σ Undeeler)   — nëmmen ganz Minor Units (Cent)
  2. Rescht = total_Minor_Units − Σ base_i                       — iwwreg Cent, ëmmer < Zuel vun Empfänger
  3. 1 zousätzlech Minor Unit un jidderee vun de `Rescht` Empfänger mat
     dem gréissten Bruchrescht aus Schrëtt 1 verdeelen, bis de Rescht opgebraucht ass

Resultat: Σ Deel_i == total, ëmmer, per Konstruktioun.
```

Déi exakt Method rundt ni en Deel isoléiert — si rundt déi *ganz Verdeelung* als eng Operatioun, wat d'Zomm-Invarianz hält.

## Berechent Beispill

100,00 $ dräi gläich opdeelen (`Undeeler = [1, 1, 1]`).

Naiv Method: 100,00 $ ÷ 3 = 33,333… $, onofhängeg op de nootste Cent gerundet gëtt 33,33 $ fir all Empfänger. Zesummegezielt: 33,33 $ × 3 = 99,99 $ — ee Cent ass verschwonnen, an keng eenzel Zeil ass „falsch" genuch, fir se beim Kucken ze gesinn.

Exakt Method: `base` = 33,33 $ fir all dräi (9.999 Minor Units am Ganzen aus `floor(10.000 / 3) = 3.333` Cent jidderee), mat engem Rescht vun 1 Cent (10.000 − 9.999). Dee eenzegen iwwregen Cent geet un deen Empfänger mam gréissten Bruchrescht an der Divisioun — de spezifeschen Empfänger ass en internen Tie-Break-Detail, net eppes, vun deem en Opruffer ofhänke soll. Zwee Empfänger enden mat 33,33 $ an een mat 33,34 $, an déi dräi Deeler addéieren sech genau zu 100,00 $.

Dat ass genau d'Arithmetik, déi eng [Budgetimpakt-Analyse](../budgetimpakt-analyse/) brauch, wann en Gesamt-Budgetimpakt-Zuel iwwer Site, Kohorten oder Fiskaljoren opgedeelt a mam publizéierten Total ofgestëmmt muss ginn — kuckt [währungssécheren Käschte-Rollup](../währungssécheren-käschte-rollup/) fir dat Begleitproblem, vill esou Zeilen ouni Drift ze summéieren.

## Bezuch zur Softwareentwécklung

Dat ass wuertwiertlech „dat Money-Muster" aus der Enterprise-Software-Architektur — e fundamentaalt, benannt Muster fir genau dës Bug-Klass, kee Eemol-Trick. Echt Finanz-Ofstëmmungsfehler sinn aus genau dëser Bug-Klass erauskomm: Prozentsplits a `f64` berechent, pro Empfänger gerundet, a ni géint den ursprénglechen Total gepréift. Et verbënnt sech direkt mam [Total-Cost-of-Ownership](../gesamtbesëtzkäschten/)-Modul vun dësem Repo, dat aktuell einfach Gleitkomma-Käschte iwwer Joren an Optiounen summéiert — déiselwecht Exaktheetsdisziplin gëllt, wann en TCO- oder Budgetimpakt-Total opgedeelt amplaz just summéiert muss ginn.

## Falen

- **Prozent-dann-Ronnen amplaz Largest-Remainder**: mat Gleitkomma-Prozenter verdeelen an all Empfänger onofhängeg ronnen, wat Rundungsfeeler verstäerkt a sech selten zum Total zréck addéiert, besonnesch bei villen Empfänger.
- **Währungs-Minor-Unit-Exponenten ignoréieren**: unhuelen, all Währung hätt 2 Dezimalstellen — de Japanesche Yen huet 0, verschidde Währunge 3 — en handgemaachte Prozentsplit hard-codéiert normalerweis 2 a brécht roueg fir aner Währungen; eng Exact-Allocation-Routine liest den Exponent vun der Währung selwer (ISO 4217).
- **Eng schonn zougewise Rescht nei verdeelen**: d'Verdeelungsroutine nach eng Kéier op dat uwenden, wat vun enger virdrun Verdeelung iwwreg ass, ouni Idempotenz-Kontrollen, wat dee selwechte Cent zweemol un dee selwechte Empfänger gutschreiwe kann.

## Quellen

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` and `Allocate` patterns.
- ISO 4217 — currency and funds code standard, which defines each currency's minor-unit exponent.
