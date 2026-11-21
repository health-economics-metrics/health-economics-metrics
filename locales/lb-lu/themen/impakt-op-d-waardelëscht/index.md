# Impakt op d'Waardelëscht

Den Impakt op d'Waardelëscht iwwersetzt agespuert klinesch Kapazitéit a Patienten, déi vun der Waardelëscht erofkommen (oder méi séier doduerch kommen). Wann ee agespuert Stonnen a méi Sprechstonne-Plaze émsetzt, gëtt d'Gréisst vun der Waardelëscht vun engem Trust direkt méi kleng — dat konkretste Mëttel, fir engem Gesondheetssystem ze weisen, wofir fräigemaach Kapazitéit do ass.

## Firwat et wichteg ass

D'elektiv Waardelëscht ass d'definéierend Erausfuerderung vum NHS no der Pandemie (hir Gréisst ass eng nationalpolitesch Kennzuel), an all Trust féiert doergéint e Programm zur elektiver Erhuelung duerch. E Business Case, deen seet „spuert 2.000 Pfleegestonnen", ass abstrakt; ee, deen seet „schaaft 4.000 zousätzlech Rendez-vous-Plazen, gesäit 3.800 waardend Patienten a reduzéiert d'Lëscht vun der Fachrichtung em 9 %", ass eng Geschicht, déi e Chief Operating Officer virum Verwaltungsrot erzielen kann. Den Impakt op d'Waardelëscht ass déi natierlech *Rechnungseenheet* fir [net cash-fräisetzend Kapazitéit](../cash-fräisetzend-vs-net-cash-fräisetzend-ersparnisser/).

## D'Mathematik

```
Zousätzlech Plazen = fräigesat Stonnen / Dauer vun der Plaz × Auslastung
Gesi Patienten     = zousätzlech Plazen × (1 − DNA-Quote)
Lëschtereduktioun  = gesi Patienten − induzéiert nei Nofro
Waardezäit-Gewënn  = Verbesserung vun der Waardeschlaang duerch méi héich Servicerate
                     (bei stabilen Schlaangen zitt eng Reduktioun vum Réckstau N em ΔN
                     bei der Servicerate μ jiddereen ëm ~ΔN/μ no vir)
```

Gesondheetswäert vu méi kuerze Waardezäiten: d'Patienten verbréngen manner Wochen am méi niddregen Utilitéitszoustand virun der Behandlung — d'QALY-Rechnung steet am [Referral to Treatment](../iwwerweisung-bis-behandlung/).

## Berechent Beispill

Ambient-Dokumentatiounssoftware spuert all vun 20 Ambulanz-Pfleeger 45 Min/Dag. Iwwer 250 Deeg: 20 × 0,75 × 250 = 3.750 Stonnen/Joer.

```
Plazen (30 Min, 85 % notzbar) = 3.750 / 0,5 × 0,85 = 6.375 Plazen
Gesi Patienten (7 % DNA)      = 6.375 × 0,93       ≈ 5.929/Joer
```

Bei enger Fachrichtung mat enger Lëscht vu 12.000 Patienten an 24.000 Rendez-vousen/Joer un nofroenkonformer Kapazitéit reduzéiere ~5.900 zousätzlech Rendez-vousen d'duerchschnëttlech Waardezäiten ëm ongeféier e Véirel — dat bréngt den Trust däitlech méi no un den 18-Wochen-Standard, ouni anzestellen. Bei ~160 £ Schema-Wäert pro Besuch ass d'Aktivitéit ~949.000 £/Joer wäert (kuckt [Nationalen Tarif a Stéckkäschten](../nationalen-tarif-a-stéckkäschten/)) — awer d'Rummen vun der *Waardelëscht* éischt presentéieren; et ass dee, no deem de System geféiert gëtt.

## Bezuch zur Softwareentwécklung

Eng Waardelëscht ass e Backlog, an d'Ökonomie vum Backlog-Ofbau gëllt a béid Richtungen. Vun der Gesondheet zur Software: de Backlog-Ofbau dru bewäerten, wéi laang *Notzer* op Wäert waarden, net un de zouene Punkten ([Verzögerungskäschten](../verzögerungskäschten/) pro Element an der Schlaang). Vun der Software zur Gesondheet: no dem Gesetz vum Little schrumpft d'Lëscht just, wann d'Servicerate méi héich ass wéi d'Ukunftsrate — Kapazitéitsgewënn, deen duerch méi Iwwerweisunge geschléckt gëtt, léisst d'Waardezäiten onverännert, dofir och d'Ukünfte mat modelléieren. A béiden Domainen no schwéierem-gewiichtegem Wäert prioritiséieren (klinesch Dringlechkeetskategorien ↔ [Schwéiergrad-Modifikatoren](../qaly-defizit-a-schwéiergrad-modifikatoren/)), net no First-in-first-out.

## Falen

- **Plazen ≠ Patienten**: d'DNA-Quoten an onbenotzbar Fragmenter vun der fräigesater Zäit vergiessen.
- **Induzéiert Nofro**: siichtbar zousätzlech Kapazitéit zitt Iwwerweisunge un; den Netto-Impakt op d'Lëscht ass méi kleng wéi de Brutto-Impakt.
- **Cash behaapten**: Impakt op d'Waardelëscht ass Kapazitéitswäert; d'Cash-Behaaptung (vermeident Outsourcing vu Backlog-Aarbecht) ass eng aner Zeil — kuckt [Vermeidbar Outsourcing-Käschten](../vermeidbar-outsourcing-käschten/).

## Quellen

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
