# Économie de la Prévention

L'économie d'intervenir avant qu'une maladie ne survienne ou ne progresse. Le constat phare est contre-intuitif : **la plupart de la prévention n'économise pas d'argent** — elle achète de la santé à bon prix. L'analyse historique de Cohen, Neumann et Weinstein dans le NEJM a trouvé que moins de 20 % des interventions préventives sont nettement économes en coûts ; le reste est au mieux coût-efficace.

## Pourquoi c'est important

« La prévention économise de l'argent » est l'allégation fausse la plus répétée en politique de santé, et les dossiers de décision construits dessus sont démolis par les économistes de la santé. La structure honnête : la prévention coûte de l'argent maintenant (dépister des populations entières, traiter des facteurs de risque chez des personnes qui n'auraient jamais été malades) et rend de la santé plus tard — habituellement à un *bon* coût par QALY, occasionnellement avec une économie, parfois à un prix terrible. Savoir dans quel régime vous êtes, c'est l'analyse. La distinction compte commercialement : un produit de prévention vendu comme « économise de l'argent au NHS » invite un audit qu'il échouera ; vendu comme « achète des QALY à 4 000 £ », il peut gagner avec les mêmes faits. Voir [intervention plus précoce](../intervention-plus-précoce/) pour la version intra-parcours.

## Le calcul

```
Coût net de la prévention (par personne) =
    coût de l'intervention × tous les traités
  − coûts en aval évités × les quelques-uns qui auraient progressé
  (les deux actualisés — les coûts évités sont à des années de distance ; voir
   discounting-and-time-preference.md)

Économie de coût nécessite : coût de l'intervention < P(progression) × coût évité × facteur d'actualisation
Coût-efficacité nécessite seulement : coût net / QALY gagnés < seuil
```

Le paradoxe de la prévention : le coût de l'intervention se multiplie sur toute la population ; les bénéfices s'accumulent uniquement pour les quelques contrefactuels.

## Exemple résolu

Une application de gestion de l'hypertension proposée à 100 000 adultes à risque, 25 £/personne/an. Sur 10 ans, elle prévient 400 AVC (chacun coûtant 45 000 £ actualisés, et 3 QALY perdus).

```
Coût :    100 000 × 25 £ × 10 ans (actualisé ≈ ×8,3) ≈ 20,8 M£
Compensations : 400 × 45 000 £ = 18,0 M£
Coût net ≈ 2,8 M£ — N'ÉCONOMISE PAS de coût

QALY gagnés = 400 × 3 = 1 200
Coût par QALY = 2,8M / 1 200 ≈ 2 300 £/QALY — exceptionnellement coût-efficace
```

Même programme, deux vérités : il perd 2,8 M£ en trésorerie et achète de la santé à un dixième du seuil de NICE. Financez-le sur le deuxième chiffre ; ne promettez jamais le premier.

## Lien avec l'ingénierie logicielle

La qualité shift-left est de l'économie de la prévention, avertissement inclus. Les revues, les tests et l'analyse statique appliquent un coût à *chaque* changement pour attraper des problèmes parmi les quelques-uns qui auraient progressé vers des incidents de production. La courbe de coût des défauts (10-100× selon l'étape) joue le rôle des coûts d'AVC — et la conclusion honnête reflète la santé : le shift-left est généralement coût-*efficace*, pas automatiquement coût-*économique*, car la plupart des problèmes signalés ne seraient jamais devenus des incidents (le problème des quelques contrefactuels). Calculez-le : coût total de porte par période contre incidents réellement évités × coût d'incident — la même structure d'exemple résolu, avec le [NNT](../nombre-nécessaire-à-traiter/) comme unité par capture.

## Pièges

- **Revendiquer des économies de coûts alors que la preuve soutient la coût-efficacité** — l'erreur définitoire du plaidoyer pour la prévention dans les deux domaines.
- **Compensations futures non actualisées** : bénéfices à 15 ans de distance à valeur nominale.
- **Ignorer les coûts de surdiagnostic/surtraitement** : la prévention trouve aussi de la pseudo-maladie — voir [économie du dépistage](../économie-du-dépistage/).

## Sources

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
