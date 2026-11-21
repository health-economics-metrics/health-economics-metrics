# Sensitivitéitsanalyse

Déi deterministesch Sensitivitéitsanalyse (DSA) variéiert eng Annahm no där anerer iwwer e plausibelt Beräich, fir ze kucken, ob de Schluss iwwerlieft. Déi Standardvisualiséierung ass en Tornado-Diagramm: Parameteren, gerankt no deem, wéi vill se d'Resultat schwanken.

## Firwat et wichteg ass

All wirtschaftleche Modell baut op Schätzunge: gespuerter Zäit, Notzungsopnam, Eenheetskäschten. D'Gesondheetstechnologie-Bewäertung refuséiert eng Punktschätzung („ROI ass 340 %") ouni Beweis, datt de Schluss géint raisonnabel Meenungsënnerscheeder iwwer d'Inputen robust ass. En Tornado-Diagramm seet dem Entscheedungsträger, *wéi eng Annahm ze hannerfroen ass*: wann de Fall nëmmen funktionéiert, wann de ëmstriddenste Parameter um optimistesche Enn ass, gesäit dat jidderee direkt.

Dat ass déi eenzeg iwwerdroebarst Gewunnecht vun der Gesondheetsökonomie fir Software-Business-Cases.

## D'Mathematik

Fir all Parameter p mat plausibelem Beräich [p_low, p_high]:

```
Resultat_low  = Modell(p = p_low,  alles anert am Basisfall)
Resultat_high = Modell(p = p_high, alles anert am Basisfall)
Schwankung(p) = |Resultat_high − Resultat_low|
```

D'Parameteren no der Schwankung ranken; horizontal Balken ëm d'Basisfall-Resultat plotten. Varianten: Zwee-Wee-DSA (zwee Parameteren op engem Gitter variéieren), Schwellewäert-Analyse (de Parameterwäert fannen, wou d'Entscheedung kippt).

## Berechent Beispill

KI-Coding-Assistent fir 200 Entwéckler. Basisfall: 39 £/Entwéckler/Mount Lizenz; 30 Min/Entwéckler/Dag gespuert; beluechte Käschte 60 £/Stonn; 220 Aarbechtsdeeg.

```
Jäerlechen Notzen am Basisfall = 200 × 0,5 h × 220 × 60 £ = 1.320.000 £
Jäerlech Käschten              = 200 × 39 £ × 12          = 93.600 £
Netto am Basisfall             = 1.226.400 £
```

Tornado (ee Parameter no deem aneren):

```
Gespuert Zäit 0,1–1,0 h/Dag:  Netto = 170.400 £ … 2.546.400 £   (Schwankung 2,38 Mio. £) ← dominéiert
Beluecht Käschte 40–80 £/h:   Netto = 786.400 £ … 1.666.400 £   (Schwankung 0,88 Mio. £)
Aarbechtsdeeg 200–240:        Netto = 1.106.400 £ … 1.346.400 £ (Schwankung 0,24 Mio. £)
Lizenz 30–50 £/Mt.:           Netto = 1.248.000 £ … 1.200.000 £ (Schwankung 48.000 £)
```

Schwellewäert-Analyse: de Nettonotzen geet bei ongeféier **2,1 Minutten/Dag** gespuert op Null. D'Entscheedung ass onsensibel géint de Lizenzpräis an hänkt komplett vun der Schätzung vun der gespuerter Zäit of — dat also moossen, net de Rescht. (A bedenkt, datt d'Resultat Kapazitéit ass, net Cash — kuckt [Cash-fräisetzend vs. net cash-fräisetzend Ersparnisser](../cash-fräisetzend-vs-net-cash-fräisetzend-ersparnisser/).)

## Bezuch zur Softwareentwécklung

Ingenieuren hunn dësen Instinkt schonn als „wat wann mir bei X falsch leien?" — DSA mécht en just systematesch a siichtbar. E Tornado-Diagramm an all Tooling-Virschlag, Kapazitéitsplang a Build-vs-Buy-Analyse setzen. Et verwandelt Argumenter doriwwer, wiem säi Bauchgefill richteg ass, a Verständegungen doriwwer, wéi ee Parameter ze moossen ass — dacks iwwer e Pilot, dem säi Wäert selwer ka bewäert ginn (kuckt [Erwaarte Wäert vu perfekter Informatioun](../erwaarte-wäert-vu-perfekter-informatioun/)).

## Falen

- **Beräicher, déi gewielt si fir ze schmeechelen**: ±10 % ëm all Input onofhängeg vun der tatsächlecher Onsécherheet. Schätzunge vun der gespuerter Zäit verdéngen ±80 %; Lizenzpräisser ±10 %.
- **Ee-no-deem-aneren verpasst Interaktiounen** — korreléiert Parameteren (Notzungsopnam a gespuert Zäit) brauche Zwee-Wee-Analyse oder voll [probabilistesch Sensitivitéitsanalyse](../probabilistesch-sensitivitéitsanalyse/).
- **D'Analyse maachen an ignoréieren**: wann den Tornado seet, de Fall hänkt un enger mëller Zuel, ass den nächste Schrëtt Moossung, net Fräigab.

## Quellen

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
