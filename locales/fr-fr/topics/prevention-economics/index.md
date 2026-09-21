# Économie de la prévention

L'économie d'intervenir avant qu'une maladie ne survienne ou ne progresse. Le constat principal est contre-intuitif : **la plupart des actions de prévention ne font pas économiser d'argent** — elles achètent de la santé à bon prix. L'analyse de référence de Cohen, Neumann et Weinstein dans le NEJM a trouvé que moins de 20 % des interventions préventives sont nettement génératrices d'économies ; le reste est, au mieux, coût-efficace.

## Pourquoi c'est important

« La prévention fait économiser de l'argent » est l'affirmation fausse la plus répétée en politique de santé, et les dossiers d'investissement construits dessus sont démolis par les économistes de la santé. La structure honnête : la prévention coûte de l'argent maintenant (dépister des populations entières, traiter des facteurs de risque chez des personnes qui n'auraient jamais été malades) et rend de la santé plus tard — généralement à un *bon* coût par QALY, parfois avec une économie, parfois à un prix épouvantable. Savoir dans quel régime on se trouve, c'est ça l'analyse. La distinction compte commercialement : un produit de prévention vendu comme « fait économiser de l'argent au NHS » s'expose à un audit qu'il échouera ; vendu comme « achète des QALY à 4 000 £ » il peut l'emporter sur les mêmes faits. Voir [intervention plus précoce](../earlier-intervention/) pour la version intra-parcours.

## Le calcul

```
Coût net de la prévention (par personne) =
    coût de l'intervention × tous les traités
  − coûts en aval évités × les quelques-uns qui auraient progressé
  (les deux actualisés — les coûts évités sont dans plusieurs années ; voir
   discounting-and-time-preference.md)

Générer des économies exige : coût de l'intervention < P(progression) × coût évité × facteur d'actualisation
Être coût-efficace exige seulement : coût net / QALY gagnés < seuil
```

Le paradoxe de la prévention : le coût de l'intervention se multiplie sur toute la population ; les bénéfices ne reviennent qu'aux quelques-uns du scénario contrefactuel.

## Exemple chiffré

Une application de gestion de l'hypertension proposée à 100 000 adultes à risque, 25 £/personne/an. Sur 10 ans, elle évite 400 AVC (chacun coûtant 45 000 £ actualisés, et 3 QALY perdus).

```
Coût :      100 000 × 25 £ × 10 ans (actualisé ≈ ×8,3) ≈ 20,8 M£
Économies compensatoires : 400 × 45 000 £ = 18,0 M£
Coût net ≈ 2,8 M£ — PAS d'économie nette

QALY gagnés = 400 × 3 = 1 200
Coût par QALY = 2,8 M / 1 200 ≈ 2 300 £/QALY — exceptionnellement coût-efficace
```

Même programme, deux vérités : il perd 2,8 M£ en trésorerie et achète de la santé à un dixième du seuil du NICE. Financez-le sur le second chiffre ; ne promettez jamais le premier.

## Lien avec l'ingénierie logicielle

La qualité décalée vers l'amont (shift-left) est de l'économie de la prévention, réserve comprise. Revues, tests et analyse statique appliquent un coût à *chaque* changement pour attraper les problèmes chez les quelques-uns qui auraient progressé jusqu'à des incidents en production. La courbe de coût des défauts (10 à 100× selon l'étape) joue le rôle des coûts d'AVC — et la conclusion honnête reflète celle de la santé : le shift-left est généralement coût-*efficace*, pas automatiquement générateur d'*économies*, car la plupart des problèmes signalés ne seraient jamais devenus des incidents (le problème des quelques-uns du scénario contrefactuel). Calculez-le : coût total du filtre par période face aux incidents réellement évités × coût de l'incident — la même structure d'exemple chiffré, avec le [NNT](../number-needed-to-treat/) comme unité par attrape.

## Pièges

- **Revendiquer des économies de coûts alors que les preuves ne soutiennent que la coût-efficacité** — l'erreur emblématique du plaidoyer pour la prévention dans les deux domaines.
- **Des compensations futures non actualisées** : des bénéfices à 15 ans pris à leur valeur nominale.
- **Ignorer les coûts de surdiagnostic/surtraitement** : la prévention trouve aussi de la pseudo-maladie — voir [économie du dépistage](../screening-economics/).

## Sources

- Cohen JT, Neumann PJ, Weinstein MC. « Does preventive care save money? » NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. « Return on investment of public health interventions. » JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
