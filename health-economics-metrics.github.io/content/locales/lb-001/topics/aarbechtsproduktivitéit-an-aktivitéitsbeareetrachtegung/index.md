# Aarbechtsproduktivitéit an Aktivitéitsbeareetrachtegung (WPAI)

WPAI ass e validéierte Selbstberichts-Froebou (Reilly, Zbrozek, Dasbach, 1993), deen mooss, wéi vill e Gesondheetsproblem déi bezuelt Aarbecht an d'Alldagsaktivitéite beaflosst, normalerweis iwwer déi lescht 7 Deeg. Hie spaltet de Verloscht an *Absentismus* — Aarbechtszäit, déi bokstäblech verpasst gouf — a *Präsentismus* — reduzéiert Produktivitéit, während een kierperlech op der Aarbecht ass —, an dat zweet ass normalerweis de gréissere, méi verstoppte Käschtenanteel.

## Firwat et wichteg ass

Einfach Krankheetsdeeg-Zielunge gesi just Absentismus. E Kliniker oder Wëssensaarbechter, deen ni e Dag freinëmmt, awer mat enger chronescher Krankheet mat 60 % Kapazitéit schafft, dréit null zu engem Ofwiesenheetsregister bäi, generéiert awer trotzdeem e groussen, richtege Produktivitéitsverloscht — WPAI ass speziell entworf, fir dës onsiichtbar Käschte siichtbar ze maachen. Well et e validéiert Instrument an net eng ad-hoc-Ëmfro ass, sinn seng Scoren a Pakéiere mat [patientegemellten Outcomes](../patientegemellt-outcomes/) a Krankheetskäschte-Studie benotzbar, ouni datt de Gutachter d'Moossnam nei muss validéieren. Als Selbstberichts-Instrument ass et selwer eng Form vu PROM, haaptsächlech ënnerscheet duerch säi Fokus op Aarbecht an Aktivitéit amplaz op Symptomer oder Liewensqualitéit.

## D'Mathematik

```
Absentismus % = verpasst_Stonnen_wéinst_Gesondheet / (verpasst_Stonnen_wéinst_Gesondheet + geschafft_Stonnen) × 100

Präsentismus %  = selwer bewäert 0–10 Beanträchtegung beim Schaffen, × 10
                  (direkt iwwer de Froebou erhuewen, hei net ofgeleet)

Gesamt-Aarbechtsbeanträchtegung % =
    Absentismus% + (1 − Absentismus%/100) × Präsentismus%
    (kombinéiert déi zwou, sou datt d'Total ni 100 % iwwerschreide kann)

Produktivitéitskäschten = Gesamt-Aarbechtsbeanträchtegung% / 100 × Verdéngscht_vun_der_Period
```

D'Formel fir d'Gesamtbeanträchtegung ass bewosst keng einfach Zomm: déi zwee Prozentsätz direkt ze addéieren kéint 100 % iwwerschreiden, dofir gëtt de Präsentismus just op den *iwwreg* (net ofwiesenen) Undeel vun der Aarbechtszäit ugewannt.

## Berechent Beispill

E Mataarbechter mat Migräne mellt, fir eng 40-Stonne-Woch agedeelt ze sinn, awer 4 Stonnen dovunner ze verpassen:

```
verpasst_Stonnen = 4, geschafft_Stonnen = 36
Absentismus% = 4 / (4 + 36) × 100 = 10 %
```

Hien bewäert säi Produktivitéitsimpakt beim Schaffen separat mat 3 vun 10 am WPAI-Froebou, d.h. `Präsentismus% = 30 %` (dëse Schrëtt ass eng rau Froebouantwert, näischt, wat aus anere Zuele ofgeleet gëtt):

```
Gesamt-Aarbechtsbeanträchtegung% = 10 + (1 − 10/100) × 30
                                 = 10 + 0,9 × 30
                                 = 10 + 27
                                 = 37 %
```

Iwwer eng 5-Deeg-Woch mat 800 £ Verdéngscht (160 £/Dag):

```
Produktivitéitskäschten = 37/100 × 800 = 296 £
```

Bemierkt, datt eng naiv Krankheetsdeeg-Zielung just déi 4 verpasst Stonnen (10 %) erfaasst hätt — de Präsentismus-Bestanddeel bal verdräifacht déi richteg Beanträchtegung, soubal e gezielt gëtt.

## Bezuch zur Softwareentwécklung

Dat mapt direkt op d'Gesondheetsmetriken vun Engineering-Teams:

- **Absentismus** ass Krankheetscongé a bezuelte Congé — siichtbar, schonn erfaasst an deen einfachen Deel.
- **Präsentismus** ass den ausgebrannten oder duerch Kontextwiessel iwwerlaaschten Ingenieur, deen an all Stand-up present ass, wärend hie mat reduzéierter Kapazitéit schafft — normalerweis de gréissere a méi verstoppte Käschtenanteel, onsiichtbar fir Personalbestand oder Präsenzdaten. Hie weist sech amplaz als reduzéierten Duerchsaz an [DORA](../dora-metriken/)- an [Flow-Metriken](../flow-metriken/), oder als méi lues Léise vun där [techneschen Schold](../technesch-schold/), deenen hir „Zënsen" d'Beanträchtegung weider verschäerfen.
- D'Engineering-Lektioun ass déiselwecht wéi déi klinesch: nëmmen Absenz ze moossen an et „Produktivitéitsverloscht" ze nennen ënnerschätzt systematesch déi richteg Käschten, well et jiddereen verpasst, deen present awer beanträchtegt ass.

## Falen

- **Erënnerungsbias bei der Selbstmellung.** E 7-Deeg-Erënnerungsfënster ënnerläit deene selwechte Mellungsverzerrunge wéi all retrospektiv Selbstmellung.
- **D'0–10-Präsentismus-Skala als wierklech kierperlech Moossung behandelen.** Si ass ordinal, duerch Selbstbewäertung erhuewen, keng validéiert kierperlech Gréisst — Differenzen drop als streng linear oder Intervall ze behandelen ass eng Modelléierungs-Bequemlechkeet, kee validéierte kierperlechen Fakt.
- **Scoren iwwer WPAI-Varianten zesummeleeën.** WPAI huet verschidde krankheetsspezifesch Versiounen — WPAI:GH (allgemeng Gesondheet), WPAI:SHP (spezifescht Gesondheetsproblem) a krankheetsspezifesch Varianten — a Scoren aus ënnerschiddleche Varianten sollten net zesummegeluecht oder vergléche ginn, ouni virdru ze préifen, ob et déiselwecht Instrumentversioun ass.

## Quellen

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI instrument documentation, Reilly Associates — the official scoring reference. <https://www.reillyassociates.net/>
