# Méi fréi Interventioun

Wann gespuert Kapazitéit e Praktiker léisst Diagnose-Réckstänn méi fréi ze iwwerpréiwen, kommen Patienten méi séier vun der Waardelëscht an déi aktiv Behandlung — a méi fréi behandelen ass normalerweis bëlleger a besser wéi méi spéit behandelen, well onbehandelt Zoustänn fortschreiden.

## Firwat et wichteg ass

Krankheetsprogressioun ass de Zënseszënz vun der Gesondheetsversuergung. E Patient, deen mat engem onbehandelten Zoustand waart, ass net an engem Steady State: Kriibserkrankungen wiesselen d'Stadium, Häerzschwächt dekompenséiert, mild Depressioun gëtt schwéier. Méi fréi anzegräifen liwwert dofir eng Duebeldividend — **besser Outcomes** (méi QALYs, vun enger gesonder Baseline aus behandelt) an dacks **méi niddreg Behandlungskäschten** (Behandlung am Fréistadium ass manner intensiv wéi spéit Rettung). Dëse Mechanismus hieft „méi séier Pfaden" vun enger operationeller Nettegkeet zu engem klineschen an ökonomeschen Imperativ — an et ass de déiwe Grond, firwat [Verzögerungskäschten](../verzögerungskäschten/) fir klinesch Software gëllen.

## D'Mathematik

```
Wäert vu méi fréier Interventioun (pro Patient) =
    [Käschten_spéit − Käschten_fréi]                 (Behandlungskäschte-Offset)
  + [QALYs_fréi − QALYs_spéit] × λ                   (Gesondheetsgewënn × Schwell)
  × P(Progressioun wärend der Verzögerung)            (Wahrscheinlechkeetsgewiichtung)
```

D'Wahrscheinlechkeetsgewiichtung ass essentiell: net all waardende Patient schreit fort. D'Iwwergangswahrscheinlechkeet pro Zäiteenheet modelléieren (aus Natural-History-Daten), net de Worst Case. Dann diskontéieren: Käschten, déi Joren ewech vermeit ginn, si haut manner wäert ([Diskontéierung](../diskontéierung-an-zäitpräferenz/)) — a bemierkt, datt déi meescht fréi Interventioun käschte-*effektiv* amplaz käschte-*spuerend* ass (kuckt [Präventiounsökonomie](../präventiounsökonomie/)).

## Berechent Beispill

Réckstand beim Screening op diabetesch Retinopathie: 4.000 Patienten, 6 Méint hannendrun. KI-gestëtzt Bewäertung verdräifacht den Duerchsaz a raumt d'Schlaang an 8 Wochen. Natural History: ~2 % vun de waardende Patienten/Joer schreiden zu seelesbedrohende Stadien fort, wärend se net iwwerpréift sinn.

```
Progressiounsevenementer, déi duerch ~4 Méint Beschleunegung vermeid ginn:
  4.000 × 2 % × (4/12) ≈ 27 Patienten

Pro vermeidener Progressioun:
  Behandlungs-Offset (intravitreal Therapie vs. Laser) ≈ 4.000 £
  QALY-Gewënn (Siicht erhalen) ≈ 0,8 QALYs × 20.000 £ = 16.000 £

Wäert ≈ 27 × (4.000 + 16.000) ≈ 540.000 £ — aus engem eemol geraumte Réckstand,
virum Zielen vum permanente Duerchsazgewënn.
```

## Bezuch zur Softwareentwécklung

Zwou Iwwerdroungen. Éischtens déi offensichtlech: Software, déi Diagnose- a Behandlungspfaden beschleunegt (Triage, KI-Bewäertung, Resultat-Routing), monetiséiert sech iwwer genau dëse Modell — an de Modell seet dir, wéi ee Pfad ee beschleunege soll: deen mat der steilster Progressiounskurv, net déi längst Schlaang. Zweetens de Engineering-Spigel: **Defekter schreiden och fort**. E Bug, deen am Design gefaange gëtt, kascht e Gespréich; an der Produktioun kascht en en Incident; d'„Shift-Left"-Käschtekurv (10–100× pro Stadium) ass e Progressiounsmodell, an déi éierlech Versioun dréit déi selwecht Warnung — fréi Detektioun ass normalerweis käschteeffektiv, kee gratis Geld, well Reviews an Tester richteg Käschte hunn a déi meescht gefaange Problemer ni fortgeschratt wieren.

## Falen

- **Worst-Case-Progressioun fir jiddereen ugeholl** — d'Wahrscheinlechkeetsgewiichtung ass den Ënnerscheed tëscht Analyse an Advocacy.
- **Lead-Time-Bias**: Krankheet méi fréi fannen ouni Outcomes ze änneren gesäit aus wéi Notzen, ass et awer net; méi fréi *effektiv Interventioun* ass d'Behaaptung, net méi fréi Detektioun eleng (kuckt [Screening-Ökonomie](../ökonomie-vum-screening/)).
- **Duebelzielen** mat Waardelëscht- a RTT-Behaaptungen, déi op där selwechter Beschleunegung opbauen — eng Pfadverbesserung, ee Set u Virdeeler, eemol zougewisen.

## Quellen

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
