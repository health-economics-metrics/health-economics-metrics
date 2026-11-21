# Zäit vum Praktiker

D'Zäit vum Praktiker ass déi knappst Ressource an de meeschte Gesondheetssystemer. D'Wäert ze moossen, engem Kliniker Minutten pro Dag ze spueren, verlaangt e Wiessel vun der einfacher Lounmathematik zu **Opportunitéitskäschten a Systemkapazitéit**: bannent engem nationale Gesondheetsdingscht ass d'Zäit vun engem Praktiker en starre operationelle Flaschenhals, keng Käschtezeil, déi sech anpasst.

## Firwat et wichteg ass

Dir kënnt net séier méi Hausdokteren, Beroder oder Spezialiste-Infirmièren maachen — Ausbildungspipelines lafen 5–15 Joer, a Vakanze sinn chronesch. Also ass eng gespuert Stonn Praktiker-Zäit net „vermeid Läun" (de Praktiker gëtt weiderbezuelt); et ass *fräigesat Engpass-Kapazitéit*, an Engpass-Kapazitéit ass dat wäert, wat den Engpass produzéiert. Dofir sinn „spuert 10 Minutten pro Consultatioun"-Behaaptunge gläichzäiteg déi heefegst an déi am schlëmmsten bewäert Zeil an der digitaler Gesondheet.

## D'Mathematik

Dräi Bewäertungsniveauen, an zouhuelender Éierlechkeet:

```
1. Lounbasis:         Stonnen × belaaschte Gehaltssaz (PSSRU-Stéckkäschten)
                      — wat d'Zäit kascht, net wat se produzéiert
2. Outputbasis:       Stonnen → erméiglecht Rendez-vousen/Prozeduren × Scheme-Wäert
                      (kuckt national-tariff-and-unit-costs.md)
3. Engpassbasis:      wann dës Roll e ganze Pfad gatet, Stonnen × Wäert vum
                      fräigesate Pfad-Duerchsaz (Theory of Constraints)
```

Fragmentéierungsdiskont: Zäit, déi a Stécker ënner engem brauchbare Quantum gespuert gëtt (z. B. 3 Minutten, verstreet iwwer eng Klinik), gëtt schlecht ëmverdeelt; e uginne Auslaaschtungsfaktor uwenden.

## Berechent Beispill

Ambient Scribing spuert engem Hausdokter 2 Minutten pro Consultatioun, 30 Consultatiounen/Dag: 60 Minutten/Dag, oder **220 Stonnen/Joer pro Hausdokter** iwwer 220 Aarbechtsdeeg.

```
Lounbasis:    220 × 80 £ (belaaschte Hausdokter-Stonn, PSSRU-Regioun) ≈ 17.600 £/Hausdokter/Joer
Outputbasis:  60 Min/Dag = 5 zousätzlech 12-Min-Consultatiounen/Dag
              = 1.100 zousätzlech Rendez-vousen/Hausdokter/Joer × 42 £ ≈ 46.200 £/Hausdokter/Joer
              — oder dee selwechte Rendez-vousen als reduzéiert Iwwerstonnen an
              méi sécher, net gehetzt Consultatiounen opgeholl (qualitativ Zeil)
```

Iwwer eng 50-Hausdokter-Federatioun ass d'Outputbasis-Kapazitéit ~2,3 Mio. £/Joer wäert — virausgesat, d'Minutten si reell (gemoss, net vum Vendor behaapt), konsolidéiert (ganz Consultatiounen, keng Fragmenter) an ëmverdeelt (kuckt [cash-fräisetzend vs. net cash-fräisetzend](../cash-fräisetzend-vs-net-cash-fräisetzend-ersparnisser/)).

## Bezuch zur Softwareentwécklung

Zäit vu Senior-Ingenieuren behält sech identesch: si ass den Engpass, duerch deen Designs, Reviews an Incidenter fléissen, also bewäert se no deem, wat den Engpass gatet, net no Gehalt. Déiselwecht Dräi-Niveau-Bewäertung gëllt fir all „KI spuert all Entwéckler X Minutten"-Behaaptung — Lounmathematik schmeechelt kleng Zuelen; déi éierlech Froen sinn, ob Minutten sech zu brauchbare Blöck konsolidéieren a wat déi fräigesate Kapazitéit tatsächlech produzéiert. Kuckt [Optiméierung vun nodelege Ressourcen](../optiméierung-vun-nodelege-ressourcen/) fir de Multiplikator, wann déi gespuert Stonn der Persoun gehéiert, op déi jiddereen anescht waart.

## Falen

- **Minutten × Gehalt = Ersparnisser** — déi kanonesch Opbloosung; et ass Kapazitéit, a just bei der uginner Auslaaschtung.
- **De Quantum-Problem ignoréieren**: 12 × 5-Minute-Ersparnisser ≠ eng fräi Stonn.
- **All Rollen gläich bewäerten**: eng Stonn vum Pfad-Engpass ass vill Mol méi wäert wéi eng Stonn vun enger net gatender Roll.

## Quellen

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
