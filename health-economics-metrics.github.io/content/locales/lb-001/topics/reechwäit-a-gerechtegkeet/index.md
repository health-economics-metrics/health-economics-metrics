# Reechwäit a Gerechtegkeet

RE-AIM — Reach, Effectiveness, Adoption, Implementation, Maintenance — ass de Standard-Kader, fir den *Bevëlkerungsimpakt* vun enger Interventioun ze beuerteelen. Seng zentral Arithmetik: **Public-Health-Impakt ≈ Reechwäit × Wirksamkeet**. Digital Tools bréngen eng Gerechtegkeetsdimensioun derbäi: déi digital Kluft heescht, datt d'Reechwäit systematesch ongläich ass, an digital-éischt Lieferung kann d'Gesondheetsluechten erweideren, déi si wëll zouginn.

## Firwat et wichteg ass

Systematesch Iwwersiichte, déi RE-AIM op mHealth uwennen, fanne eng konsequent Signatur: staark Reach an Adoption, **schwaach Effectiveness a Maintenance** — Apps verbreeden sech liicht a verbleechen séier. Fir e nationale Gesondheetsservice heescht dat, datt e beandrockend Produit pro Notzer eng schlecht Bevëlkerungsinvestitioun ka sinn, a vice versa: en bescheiden effektivt Tool, dat Millioune erreecht, kann méi produzéieren wéi e brillanten, dee Dausende erreecht (kuckt d'[HALE](../gesondheetsbereenegt-liewenserwaardung/)-Arithmetik). Gerechtegkeet ass keng Niewebedingung, mee en Wäerttreiwer: digital Exklusioun follegt dem Alter, der Deprivatioun, der Behënnerung an der Sprooch — genau de Bevëlkerungen, déi déi meescht behandelbar Laascht droen —, sou datt de marginalen ausgeschlossenen Notzer dacks e *iwwerduerchschnëttleche* Notzepotenzial huet. Fir eng formell statistesch Moossnam vu sozioökonomesch bedéngter gesondheetlecher Ongläichheet kuckt [Konzentratiounsindex](../konzentratiounsindex/).

## D'Mathematik

```
Bevëlkerungsimpakt ≈ Reechwäit × Wirksamkeet
  Reechwäit   = Participanten / berechtegt Bevëlkerung (kuckt activation-and-uptake.md)
  Wirksamkeet = Real-World-Effekt bei de Participanten (retentiounsgewiicht —
                kuckt retention-and-churn.md)

Gerechtegkeetsstratifizéiert Versioun:
  Impakt_Grupp_g = Reechwäit_g × Wirksamkeet_g, gemellt pro Deprivatiouns-
  Quintil / Alterskategorie / Sproochgrupp
  Gerechtegkeetsluecht = Impakt_Spëtzequintil − Impakt_Basisquintil

Distributiv Käschte-Effektivitéit: Gerechtegkeetsgewiichter op QALYs no
Empfängergrupp uwennen — e QALY fir déi am schlëmmste Gestallte zielt méi
(eng ëmmer méi gängeg HTA-Erweiderung).
```

## Berechent Beispill

E digitale Diabetes-Präventiounsprogramm, op zwou Aarte gemellt:

```
Aggregéiert: Reechwäit 12 %, Effekt 0,02 QALYs/Participant → 0,0024 QALYs/berechtegt Persoun

Stratifizéiert (Deprivatiounsquintilen):
  Q1 (am mannsten depriviéiert): Reechwäit 22 %, Effekt 0,02 → 0,0044
  Q5 (am meeschten depriviéiert): Reechwäit 4 %,  Effekt 0,025 → 0,0010

De Programm liwwert 4,4× méi Gesondheet un déi am mannsten Depriviéiert —
wärend de Q5-Effekt pro Participant HÉIICHER ass (méi Spillraum). E begleeten
digitalen Arm (Telefonscoaching + Zougang an der Gemeng), deen 20 % méi pro
Q5-Participant kascht a Q5-Reechwäit op 12 % hieft, verdräifacht den Q5-Impakt
a verbessert den Aggregat — d'Gerechtegkeetsinvestitioun ASS hei d'Effizienzinvestitioun.
```

## Bezuch zur Softwareentwécklung

Reechwäit ass wesentlech en Engineering-Artefakt: Mindestufuerderunge u Gerät a Betribssystem, Bandbreet-Annahmen, Sproochënnerstëtzung, Accessibility-Konformitéit (WCAG), Hürde bei der Identitéitsverifizéierung an Distributioun nëmmen iwwer App-Stores schneide all Bevëlkerungen aus dem Nenner — normalerweis onsiichtbar, well ausgeschloss Notzer ni an Analytics optrieden. Engineering-Praktiken, déi d'Gerechtegkeet bewegen: den *Nenner* moossen (déi berechtegt Bevëlkerung instrumentéieren, net just d'Notzer); Performance fir al Geräter a schlecht Verbindung budgetéieren; begleet-digital Weeër (Telefon, SMS, Kiosk) als éischtklasseg Flows ausliwwere amplaz als Schimmkanäl; an all Dashboard-Metrik no de Gerechtegkeetsdimensiounen stratifizéieren — en net stratifizéierten Duerchschnëtt ass, wou Ongerechtegkeet sech verstoppt (d'[GDS-Take-up](../gds-service-metriken/) dréit dës selwecht Warnung).

## Falen

- **Wirksamkeet bei Ofschléisser gemellt, Impakt op Bevëlkerunge behaapt** — d'Reechwäit-Terme roueg fale gelooss.
- **Gerechtegkeet als nogeschalten Audit** amplaz als Design-Input; Reechwäit nozerüsten ass vill méi deier wéi dofir ze designen.
- **Maintenance-Amnesie**: dem RE-AIM seng schwächst mHealth-Dimensioun — Impaktbehaaptunge iwwer den Zäithorizont vun der Evidenz eraus.
- **Spueren duerch Nëmmen-Digital-Kanäl**, déi Käschten op ausgeschloss Notzer a Personal u virderster Front verschiewen (kuckt [GDS-Service-Metriken](../gds-service-metriken/)).

## Quellen

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
