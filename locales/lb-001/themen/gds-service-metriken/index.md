# GDS-Service-Metriken

D'Service Manual vum UK Government Digital Service (GDS) mandatéiert véier KPIs fir all digitale Regierungsservice: **Käschte pro Transaktioun, Notzerzefriddenheet, Ofschlossquote an digital Opnam (Take-up)**. Zesumme sinn si déi minimal Ökonomie vun engem ëffentlechen digitale Service — an dat Template, dat NHS-Digitalservicer iwwerhuelen.

## Firwat et wichteg ass

D'GDS-Metriken kodéieren de Channel-Shift-Business-Case, deen en Joerzéngt Regierungsdigitaliséierung finanzéiert huet: de Digital Efficiency Report huet digital Transaktiounen ~20× méi bëlleg wéi Telefon a ~50× méi bëlleg wéi Face-to-Face fonnt (Lokalregierungszuelen: Web 0,15 £, Telefon 2,83 £, Face-to-Face 8,62 £). Awer d'Ersparnisser materialiséieren sech nëmmen, wann d'Leit de digitale Wee *ofschléissen* (Ofschlossquote) *amplaz vum* deieren Kanal (Take-up) — déi véier KPIs sinn een ökonomescht Modell, net véier Dashboards.

## D'Mathematik

```
Käschte pro Transaktioun = Gesamtservicekäschten / ofgeschloss Transaktiounen
Ofschlossquote           = ofgeschloss / ugefaange Transaktiounen × 100
Digital Take-up          = digital Transaktiounen / Transaktiounen iwwer all Kanäl × 100
Notzerzefriddenheet      = % zefridden+ganz zefridden (5-Punkten, In-Service-Ëmfro)

Channel-Shift-Ersparnis = Volumen × Take-up-Verréckelung × (Käschten_aalt_Kanal − Käschten_digital)
… minus Failure Demand: (1 − Ofschlossquote) × Käschte vum Fallback-Kanal
```

## Berechent Beispill

En NHS-Rendez-vous-Management-Service: 2 Mio. Transaktiounen/Joer, aktuell 70 % Telefon (3,20 £/Uruff) / 30 % digital (0,25 £). E Redesign hieft den digitale Take-up op 55 % an d'Ofschlossquote vun 84 % op 93 %:

```
Take-up-Verréckelungs-Ersparnis = 2 Mio. × 0,25 × (3,20 − 0,25) = 1.475.000 £/Joer

Failure-Demand-Ersparnis: feelgeschloen digital Reesen falen op Telefon zréck
  virdrun: 2 Mio. × 0,30 × 0,16 × 3,20 £ = 307.200 £
  duerno:  2 Mio. × 0,55 × 0,07 × 3,20 £ = 246.400 £
  netto 60.800 £/Joer — Ofschlossverbesserunge schützen d'Take-up-Gewënn

Zefriddenheet ass de féierenden Indikator: onzefridden Notzer gi bei
Telefon zréck, also prognostizéiert e Zefriddenheetsrécklaf Take-up-Zerfall,
ier hien opdaucht.
```

## Bezuch zur Softwareentwécklung

Dës véier KPIs sinn e produktiounsreift Beispill vun enger [Käschte-Konsequenz-Tabell](../käschte-konsequenz-analyse/): eng Käschtemetrik, dräi Outcome-Metriken, ni a e Score kompriméiert. Fir Produktingenieure d'operationell Lektiounen: **Ofschlossquote ass en Trichter-Instrumentéierungsproblem** (all Ofbroch-Punkt ass fënnbar a fixbar); **Käschte pro Transaktioun sinn [Cloud-Unit-Economics](../cloud-unit-economics/)** plus Käschte vun de personalgestëtzte Kanäl; **Take-up ass en Equity-Metrik a Verkleedung** — d'Notzer, déi de Kanal net kënnen oder wëllen wiesselen, sinn iwwerproportional eeler, behënnert a benodeelegt, also verwandelt aggressiv Kanalzoumaachung „Ersparnisser" an Zougangsschued (kuckt [Reechwäit an Equity](../reechwäit-a-gerechtegkeet/)). D'KPIs ze publizéieren (GOV.UK mécht et, pro Service) ass selwer e Mechanismus: Transparenz disziplinéiert Prognosen, wéi [Benefits-Realization](../benefits-realization/)-Audite et maachen.

## Falen

- **Take-up duerch Zwang**: d'Telefonslinn zoumaachen hieft Take-up an dëmpt Failure Demand op d'Frontlinn-Personal; d'Gesamtkäschte vum System moossen.
- **Ofschloss vun Säit 2 gemoss**: de Trichter no dem Ofbroch-Punkt unzefänken schmeechelt der Quote.
- **Käschte pro Transaktioun ouni assistéiert-digital Support** a Failure-Demand-Handling.
- **Zefriddenheetsëmfroen nëmmen bei erfollegräichem Ofschloss** — d'Onzefridde komme meeschtens ni bei d'Ëmfro.

## Quellen

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
