# Nationalen Tarif a Stéckkäschten

Den NHS bezilt Leeschtungserbrénger fir Aktivitéit no enger reegelbaséierter nationaler Präislëscht — historesch dem National Tariff / Payment by Results, den 1. Abrëll 2023 duerch den **NHS Payment Scheme (NHSPS)** ersat. Hannert de Präisser steet eng national Stéckkäschten-Infrastruktur: d'**National Cost Collection (NCC)** an d'**PSSRU Unit Costs of Health and Social Care**-Kompendium.

## Firwat et wichteg ass

Dat sinn d'Nenner vun all glaubwürdege NHS-Business-Case. Wann eng Behaaptung seet „e Besuch an der Ambulanz ass 160 £ wäert" oder „eng Band-6-Infirmière-Stonn kascht 31 £", kommen dës Zuelen aus dëser Infrastruktur — an déi offiziell Zuelen amplaz vun erfonnenen ze benotzen ass dat, wat onofhängeg Evaluatiounen vergläichbar a Finanzteams kooperativ mécht. Fir e Vendor definéiert den Tarif och d'*Ëmsaz*-Säit: Aktivitéit, déi deng Software erméiglecht (zousätzlech Kliniken, nei opgefëllt Better), gëtt zu Scheme-Präisser bewäert.

## D'Mathematik

```
Tarifpräis pro Eenheet Aktivitéit (HRG-codéiert Episod, ambulante Besuch)
  = nationalen Duerchschnëtts-Stéckkäschten (aus NCC) × Market Forces Factor (lokal Ajustéierung)
  ënner NHSPS: gemëscht fix + variabel („aligned payment and incentive") Elementer

NCC-Stéckkäschten = vum Trust gemellte Gesamtkäschte vun enger Aktivitéitsaart / Aktivitéitsvolumen
                    (opgebaut op Patient-Level Information and Costing Systems, PLICS)

PSSRU-Kompendium: ~80 Standard-Stéckkäschten (Hausdokter-Consultatioun, Infirmière-Stonn no Band,
ED-Besuch…) — d'Standardquell an UK-ökonomesche Evaluatiounen.
```

## Berechent Beispill

Deng Software setzt 1 Stonn/Dag vun der Zäit vun enger Band-6-Infirmière an engem 250-Deeg-Aarbechtsjoer fräi:

```
PSSRU-baséiert Band-6-Käschte inkl. Overheads ≈ 31 £/Stonn (aktuell Editioun kontrolléieren)
Kapazitéitswäert = 250 × 31 £ = 7.750 £/Infirmière/Joer (net cash-fräisetzend)
```

Alternativ mécht d'Infirmière 2 zousätzlech ambulant Follow-up-Rendez-vousen/Dag zu ~160 £ Scheme-Wäert: 500 × 160 £ = **80.000 £/Joer u finanzéierter Aktivitéit** — en Zéngfachen Ënnerscheed am behaapte Wäert, jee nom Ëmverdeele, alles aus offiziellen Stéckkäschten. Béid Behaaptungen si auditéierbar, well d'Nenner publizéiert sinn; dat ass de ganze Punkt.

## Bezuch zur Softwareentwécklung

Dat ass d'**interne Präis-Buch**-Muster. D'UK-Gesondheetsökonomie fonctionnéiert, well all Evaluatioun dee selwechte publizéierte Stéckkäschten benotzt; Engineering-Organisatioune feelen dat meeschtens, also erfënnt all Business Case seng eege Käschte vun enger Ingenieur-Stonn, engem Incident, engem Deploy. E Plattform-Team ka genau esou e Buch publizéieren — belaascht Käschte pro Ingenieur-Stonn no Niveau, pro Incident no Schwéieregrad, pro Build-Minutt — a seng Notzung an alle Virschléi verlaangen. Chargeback-/Showback-Systemer replizéieren och déi bekannte Feelermoduser vum Tarif: Duerchschnëttskäschte-Präisser dreiwen Volumen-Gaming, fix Bezuelungen dreiwen Ënner-Versuergung. D'Evolutioun vum NHSPS vu reiner Aktivitéitsbezuelung zu gemëschter fix+variabel ass zwanzeg Joer Lektioune an Incentive-Design fir intern Plattformpräisser.

## Falen

- **Vereelzt Zuelen**: NCC-, PSSRU- an NHSPS-Präisser erfrëschen jäerlech — all Zuel datéieren.
- **Tarifpräis ≠ Käschten**: Präisser si national Duerchschnëtter mat Ajustéierungen; deng lokal Grenzkäschte ënnerscheede sech (kuckt [Grenz- vs. Duerchschnëttskäschten](../grenzkäschte-vs-duerchschnëttskäschte/)).
- **Kapazitéit zum Tarif bewäerten ouni Mechanismus**, fir déi zousätzlech Aktivitéit tatsächlech ze liwweren an dofir bezuelt ze ginn.

## Quellen

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
