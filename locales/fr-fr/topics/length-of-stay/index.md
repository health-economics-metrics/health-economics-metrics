# Durée de séjour (LOS)

La durée de séjour est le nombre de jours entre l'admission à l'hôpital et la sortie — l'indicateur central d'efficience du flux en soins hospitaliers. Les moyennes britanniques en court séjour tournent autour de 4 à 5 jours ; chaque journée excédentaire immobilise un lit rare et expose le patient aux risques liés à l'hospitalisation.

## Pourquoi c'est important

La durée de séjour détermine presque tout dans l'économie de l'hôpital de court séjour : capacité en lits, débit du programme opératoire, flux des urgences, effectifs. Réduire la durée de séjour moyenne, même de fractions de journée, à grande échelle, libère une capacité considérable (voir [journées-lits économisées](../bed-days-saved/)). La durée de séjour est aussi un signal de qualité dans les deux sens — trop longue suggère une défaillance de processus (retards de diagnostic, formalités de sortie, attente de prise en charge sociale) ; trop courte peut signifier une sortie prématurée, qui se traduit ensuite par des [réadmissions](../readmission-rate/).

## Le calcul

```
LOS (par séjour)   = date de sortie − date d'admission
LOS moyenne        = journées-lits occupées / sorties (rapporter la moyenne ET
                     la médiane ; la LOS est fortement asymétrique à droite
                     du fait des séjours longs atypiques)

Les comparaisons exigent un ajustement au case-mix (âge, diagnostic, gravité),
sinon on mesure qui l'hôpital admet, et non sa performance.
```

La loi de Little relie les variables de flux : `lits occupés = taux d'admission × LOS moyenne` — la même loi qui régit les files d'attente logicielles (voir [indicateurs de flux](../flow-metrics/)).

## Exemple chiffré

Un trust admet 40 patients médicaux en urgence/jour avec une LOS moyenne de 6,0 jours : 240 lits en permanence occupés (40 × 6). Un logiciel de coordination des sorties (suivi des tâches, automatisation de la préparation des traitements à emporter par la pharmacie, réservation des transports) réduit la partie non clinique des séjours de 0,4 jour en moyenne.

```
Lits nécessaires = 40 × 5,6 = 224 → 16 lits libérés en continu
                 = 16 × 365 = 5 840 journées-lits/an
```

Valorisez les 5 840 journées-lits selon le mécanisme (réaffectation/fermeture/marge de manœuvre), voir [journées-lits économisées](../bed-days-saved/). Notez ce qui a réellement bougé : pas la médecine, mais *l'attente* — le patient était médicalement apte à sortir ; le système faisait encore de la paperasse. C'est un problème de file d'attente, et le logiciel est doué pour résoudre les problèmes de file d'attente.

## Lien avec l'ingénierie logicielle

La durée de séjour est le temps de cycle de l'hôpital, et le plan d'amélioration est identique au travail sur le flux de livraison : instrumenter les étapes (admission → traitement → apte médicalement → sortie effective), trouver où le temps s'accumule (ce sont les points de transfert), supprimer les états d'attente plutôt que d'ajouter de la capacité. La cohorte « médicalement apte à sortir mais occupant encore un lit » est l'équivalent hospitalier d'une PR approuvée mais non fusionnée. Opportunités logicielles directes : orchestration des tâches de sortie, délai de retour des diagnostics, prescription électronique des médicaments de sortie, intégration de l'orientation vers le secteur social.

## Pièges

- **Reporting sur la moyenne seule** — les valeurs atypiques dominent ; une moyenne en baisse peut masquer une file de séjours longs en croissance.
- **Absence d'ajustement au case-mix** dans les comparaisons avant/après : les seuils d'admission varient selon la saison et dans le temps.
- **Réduction de la LOS qui réapparaît sous forme de réadmission** — toujours associer les affirmations sur la LOS aux données de réadmission à 30 jours.

## Sources

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
