# Grenzkäschte vs. Duerchschnëttskäschte

Duerchschnëttskäschte sinn Gesamtkäschte gedeelt duerch produzéiert Eenheeten. Grenzkäschte sinn d'Käschte fir eng *zousätzlech* Eenheet ze produzéieren. Entscheedunge sollen op Grenzkäschte baséieren — awer publizéiert Stéckkäschte sinn bal ëmmer Duerchschnëtter.

## Firwat et wichteg ass

Dee heefegste Feeler an digitale Gesondheets-Business-Cases ass et, eng gespuert Ressource zu hire **Duerchschnëttskäschte** ze bewäerten, wann déi richteg Ersparnis d'**Grenzkäschte** sinn. E Spidols-Bettdag huet Duerchschnëtts- (voll absorbéiert) Käschte vun 400 £+, awer ee Bettdag fräizesetzen spuert keng 400 £ — d'Gebai, d'Heizung an déi meescht Personalkäschte lafen weider. De tatsächlech fräigesate Cash kann 50–150 £ sinn, ausser genuch Better ginn fräigesat, fir eng Statioun zouzemaachen.

## D'Mathematik

```
Duerchschnëttskäschten:  AC = TC / Q
Grenzkäschten:           MC = dTC/dQ   (Käschte vun enger méi/manner Eenheet)

TC = Gesamtkäschten, Q = Quantitéit
```

Fixkäschte maachen MC < AC bei Kapazitéitsreduktiounen, a MC kann géint null goen, wann Reservekapazitéit existéiert. Ersparnisbehaaptunge sollen benotzen:

```
Richteg Ersparnis = ΔQ × MC             (kleng Ännerungen)
Richteg Ersparnis = Schrëttännerung vun TC (grouss Ännerungen, déi eng Kapazitéitsschwell iwwerschreiden, z. B. Statioun zoumaachen)
```

## Berechent Beispill

Deng Software reduzéiert d'duerchschnëttlech Openthaltsdauer a setzt 1.000 Bettdeeg/Joer bei engem Trust fräi.

- **Naiv Behaaptung**: 1.000 × 400 £ Duerchschnëttskäschten = **400.000 £ gespuert**. Falsch.
- **Grenzbehaaptung**: variabel Käschte pro Bettdag (Iessen, Wäsch, Verbrauchsmaterial, e bëssen Infirmièren-Flex) ≈ 120 £. Ersparnis = 1.000 × 120 £ = **120.000 £**, *plus* de Wäert vun der fräigesater Kapazitéit, wann d'Better mat waardenden Elektivpatienten nei opgefëllt ginn (Akommes ënner aktivitéitsbaséierter Bezuelung, oder Waardelëscht-Reduktioun).
- **Schrëttännerungs-Behaaptung**: wann den Trust 7.300 Bettdeeg/Joer fräisetzt (eng 20-Better-Statioun), kann en d'Statioun tatsächlech zoumaachen: Personal + Betrib ≈ 1,5 Mio. £/Joer u richtegem Cash. Elo ass d'Duerchschnëttskäschte-Mathematik méi no beim Wouerte.

Dselwecht Interventioun, dräi verdeedegbar Zuelen, jee nodeems ob d'Ännerung eng Kapazitéitsstuf iwwerschreit.

## Bezuch zur Softwareentwécklung

D'Cloud-Ökonomie ass natierlecht Grenzkäschte-Territoire:

- D'Grenzkäschte vun engem méi CI-Run op scho reservéierter Kapazitéit sinn ≈ 0 £, wärend d'Duerchschnëttskäschte pro Run (Gesamt-Plattformausgaben ÷ Runs) Pond kënne sinn. Chargeback-Systemer, déi Duerchschnëttskäschte rechnen, dreiwen Equipen dozou, gedeelt Kapazitéit ënner-ze-notzen, déi am Grenzfall tatsächlech gratis ass.
- Ëmgekéiert setzt „mir hunn 30 % Compute gespuert" nëmmen Cash fräi, wann Instanze wierklech beendet oder Reservatioune reduzéiert ginn — d'Softwareversioun vun der Bettdag-Fal. Kuckt [cash-fräisetzend vs. net cash-fräisetzend Ersparnisser](../cash-fräisetzend-vs-net-cash-fräisetzend-ersparnisser/).

## Falen

- **Kapazitéit zu Duerchschnëttskäschte bewäerten** a se als Cash presentéieren (de Klassiker).
- **Ugeholl, Grenzkäschte wieren konstant.** Si trëppelen un Kapazitéitsgrenzen (Statiounszoumaachungen, Lizenzstufen, Reserved-Instance-Engagementer).
- **Grenzkäschte fir Expansiounsentscheedungen, awer Duerchschnëtt fir Kontraktioun** am selwechte Fall — no der tatsächlecher Entscheedung wielen.

## Quellen

- York Health Economics Consortium glossary: marginal cost. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
