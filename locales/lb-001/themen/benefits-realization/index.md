# Benefits Realization

Benefits-Realization-Management (BRM) ass d'Disziplin, d'Virdeeler, déi an engem Business Case versprach goufen, z'identifizéieren, ze baselinen, ze verfollegen an z'*beleeën*, datt se no der Liwwerung wierklech agetrueden sinn. An der briteschen ëffentlecher Investitioun gehéiert et zum **Five Case Model** vum HM-Treasury-Green-Book; an der Medizin ass säi Cousin d'Post-Market-Surveillance.

## Firwat et wichteg ass

Business Cases si Verspriechen; Benefits Realization ass den Audit. Evaluatioune vu groussen NHS-Digitalprogrammer hunn ëmmer erëm prognostizéiert Virdeeler fonnt, déi ni agetrueden sinn — a wann d'Virdeeler net cash-fräisetzend waren, hunn se dem Trust säin Netto-Resultat näischt bruecht. D'Äntwert vum Green Book: all Ausgabefall muss **fënnef Cases** passéieren (strategesch, ökonomesch, kommerziell, finanziell, Management), mat Benefits Realization am Management Case *virun der Genehmegung* geplangt — Besëtzer genannt, Baselines erfaasst, Moossdaten festgesat. Ouni dat bleift „d'Software huet 30 Minutte pro Infirmier gespuert" éiweg Vendor-Fiktioun.

## D'Mathematik

```
Realiséierungsquote = realiséiert Virdeeler / prognostizéiert Virdeeler   (pro Virdeel, pro Zäitraum)

Mechanik, déi et berechenbar mécht:
  Baseline VIRUM Go-live erfaasst (soss ass d'Delta net moossbar)
  all Virdeel: Besëtzer, Metrik, Datequell, Moossplang
  Prognos bei der Bewäertung fir Optimismus-Bias ajustéiert (Green-Book-Mandat)
  Virdeeler als Cash / Net-Cash / qualitativ klasséiert a getrennt verfollegt
  (kuckt cash-releasing-vs-non-cash-releasing.md)
```

## Berechent Beispill

E Business Case fir E-Rostering huet pro Joer verspriechen: 450k £ Agentur-Ausgabereduktioun (Cash), 8.000 Statiounsleeder-Stonnen (Kapazitéit), besser Fill-Rate-Compliance (qualitativ). Zwielef Méint no Go-live:

```
Virdeel            Prognos     Realiséiert   Quote  Evidenz
Agenturausgaben    450.000 £   287.000 £     64 %   Haaptbuch vs. Baselinejoer
Leeder-Stonnen     8.000       5.100         64 %   Time-Motion-Stéchprouf
Fill-Compliance    +10 pp      +12 pp        120 %  Rostering-Systemdaten

Aktiounen aus der Review (de Punkt vu BRM):
Agentur-Manktem op zwou Statioune zréckgefouert, déi ni ageschloss goufen → ofschléissen;
30-%-Optimismusfeeler vum Prognosmodell protokolléiert → beim nächste Case ugewannt.
```

64 % Realiséierung ass kee Versoen — et ass *Wëssen*. Net gemoossen Cases behaapten éiweg 100 %.

## Bezuch zur Softwareentwécklung

Engineering-Organisatioune genehmegen Plattforminvestitiounen op Basis vu Prognosen a kontrolléiere se bal ni — genau déi Pathologie, déi BRM behandelt. De liichte Port: all Virschlag iwwer enger Schwell nennt Virdeelsbesëtzer, Baseline-Metriken an e T+6-Méint-Review-Datum; Realiséierungsquote fléissen zréck an d'Mooss, wéi staark d'Organisatioun déi nächst Prognos vun deem Team (oder Vendor) diskontéiert. Dat ass och d'Äntwert op KI-Tooling-Skepsis: de [MIT-Befund, datt ~95 % vun de GenAI-Piloten kee moossbare P&L-Return gewisen hunn](../return-on-investment-vu-ki/), ass e Benefits-Realization-Resultat — d'Piloten, déi *wierklech* Return bruecht hunn, haten verfolgbar Virdeelszeilen mat Besëtzer. Prognos → moossen → nei kalibréieren ass dee selwechte Loop wéi bei [EVPI](../erwaarte-wäert-vu-perfekter-informatioun/)-bewäertene Piloten, op Portfolio-Skala.

## Falen

- **Keng Baseline virum Go-live** — dat fatalt, net méi ze reparéiert Versäumnis.
- **Virdeels-Weisenhaftegkeet**: ouni genannte Besëtzer sammelt keen d'Daten a all Review seet „am Grousse Ganze um Plang."
- **Duebel gezielt Virdeeler iwwer Programmer**, déi déiselwecht fräigesate Kapazitéit behaapten — féier e Virdeelsregister iwwer de Portfolio.
- **Realiséierungstheater**: déi einfach qualitativ Succèsen moossen, während d'Cash-Zeilen roueg ongepréift bleiwen.

## Quellen

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
