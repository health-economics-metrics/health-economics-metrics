# Engagement-Metriken

Engagement-Metriken moossen, wéi vill Notzer eng Gesondheets-App tatsächlech notzen: DAU/MAU-Stickiness, Sëtzungsfrequenz a -dauer, Feature-Notzung. An der digitaler Gesondheet ass Engagement keng Vanity — et ass **Dosis**: d'Exposition, duerch déi all klinesche Effekt muss flëssen.

## Firwat et wichteg ass

E Medikament, dat an der Fläsch bleift, heelt keen; eng App, déi desinstalléiert oder zou bleift, ass dee selwechte Versoen. All gesondheetsökonomesch Behaaptung fir e Konsumenten-Gesondheetsprodukt multiplizéiert duerch Engagement — d'Wirksamkeet aus Studien gouf bei engem gewëssen Notzungsniveau gemoss, an de reale Wäert skaléiert domat, wéi no d'Asaznotzung un dat Niveau kënnt. Standard-Produkt-Benchmarks: DAU/MAU ëm **20 % gëllt als gesond** fir mobil Apps allgemeng, >25 % exzeptionell; Gesondheets-Apps leien dacks méi niddreg.

## D'Mathematik

```
Stickiness (DAU/MAU) = deeglech aktiv Notzer / monatlech aktiv Notzer × 100
Sëtzungsmetriken     = Sëtzungen/Notzer/Zäitraum; Duerchschnëttsdauer = Gesamtzäit / Sëtzungen
Feature-Engagement   = Notzer, déi Schlësselaktioun maachen / aktiv Notzer

Dosis-Äntwert-Framing (den Upgrade aus der Gesondheetsökonomie):
  realiséierten Effekt ≈ Studieneffekt × f(tatsächlech Notzung / Studiennotzung)
  wou f aus der Dosis-Äntwert-Analys kënnt — kuckt d'Konzept „effektiv
  Engagement" an adherence-and-persistence.md: genuch Notzung fir dat
  virgesinn Resultat z'erreechen, wat bescheiden an endlech ka sinn
```

## Berechent Beispill

Déi Pivotal-Studie vun enger Bluttdrock-App huet 6 mmHg systolesch Reduktioun bei Notzer gewisen, déi ≥4 Moossunge/Woch protokolléieren. Am Asaz iwwer 50.000 registréiert Notzer:

```
MAU 20.000 (40 %); dovunner protokolléieren ≥4×/Woch: 7.000
Effektiv-Dosis-Notzer = 7.000 / 50.000 = 14 % vun der registréierter Basis

Populatiounsniveau-Effekt ≈ Studieneffekt, geliwwert un 14 %, net 100 %:
all ökonomescht Modell, dat „50.000 Notzer × 6 mmHg" zitéiert, iwwerschätzt ~7×.
Éierleche Modell: 7.000 × voll Effekt + Deelkreditt (aus Dosis-Äntwert-
Daten, wann et se gëtt) fir déi 13.000 Notzer ënner der Schwell.
```

Dës Multiplikatioun — duerch den Engagement-Trichter bis zur effektiver Dosis — ass dee heefegste Plaz, wou digital-Gesondheetsökonomie opgeblose gëtt.

## Bezuch zur Softwareentwécklung

Ingenieure besëtzen den Engagement-Trichter, wat se zu Besëtzer vun enger *klinescher* Variabel mécht: Onboarding-Reibung, Notifikatiounsstrategie, Luedzäit an Offline-Resilienz beweege all déi geliwwert Dosis. Zwou Design-Implikatiounen: dat **klinesch bedeitungsvollt Aktioun** instrumentéieren (protokolléiert Moossunge, ofgeschloss Lektiounen), net Opmaachen — DAU, opgebaut op Notifikatioun-Bounce-Sëtzungen, ass Dosis-Bedrug; an Engagement-Ziler als *Suffisanz*-Ziler behandelen, net als Maximéierung — eng App, déi hiren Outcome an 5 Minutten/Woch erreecht an aus dem Wee geet, ass klinesch ideal a metresch „schwaach" (kuckt effektiv Engagement bei [Adhärenz a Persistenz](../adhärenz-a-persistenz/)). D'Engagement-Aarbecht selwer iwwer dat Populatiounseffekt-Modell hei uewen bewäerten: e 2-Punkten-Gewënn beim Undeel vun der effektiver Dosis ass eng quantifizéierbar QALY-Zeil.

## Falen

- **Engagement als Outcome**: Notzung ass e Mëttel; den Outcome ass de [PROM](../patientegemellt-outcomes/) oder klineschen Endpunkt.
- **Duerchschnëtter iwwer bimodal Notzung**: Populatioune vu Gesondheets-Apps deelen sech a engagéiert Notzer a Geeschter; Mëttelwäerter beschreiwen keen — Kohorten maachen.
- **Dark-Pattern-Dosis-Inflatioun**: Streaks a Schold-Notifikatiounen hiewen Metriken a kënnen déi ängschtlech Populatioune schueden, déi Gesondheets-Apps bedéngen; klinesch Produkter droen klinesch Ethik.
- **Vendor-Benchmark-Provenienz**: déi meescht publizéiert Engagement-Benchmarks kommen vun Analytics-Vendoren, net vu Peer-Review; géint eege Studien kalibréieren.

## Quellen

- App engagement benchmarks. <https://getstream.io/blog/app-retention-guide/>
- Health app KPI guides. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. on effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
