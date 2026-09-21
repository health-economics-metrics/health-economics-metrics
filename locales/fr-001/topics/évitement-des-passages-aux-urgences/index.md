# Évitement des Passages aux Urgences

L'évitement des passages aux urgences compte les visites aux urgences et les admissions d'urgence prévenues par une intervention en amont — applications de triage, télésurveillance, unités virtuelles, réorientation des soins urgents. Il convertit « nous l'avons détecté plus tôt » en une allégation chiffrée.

## Pourquoi c'est important

Les soins d'urgence sont le cadre routinier le plus coûteux du système (les coûts unitaires de passage aux urgences se situent dans la fourchette de 250-400 £ selon les chiffres de la Collecte Nationale de Coûts/PSSRU ; une admission d'urgence se compte en milliers), et l'engorgement des urgences se répercute en retards d'ambulances et annulations de chirurgies programmées. Tout ce qui résout la demande en toute sécurité en amont — conseil d'autosoin, soins primaires le jour même, réponse communautaire — achète de la capacité système au point le plus stressé. C'est la ligne de bénéfice standard pour les vérificateurs de symptômes, les services de triage de type 111, et la [télésurveillance des patients](../économie-de-la-télésurveillance-des-patients/).

## Le calcul

```
Passages évités = population × (taux de référence − taux d'intervention)
Économie brute        = passages évités × coût unitaire par passage
                      (+ admissions évitées × coût d'admission, comptées séparément)

Économie nette          = économie brute − coût de l'intervention − coût d'usage du nouveau parcours
                      (la demande réorientée n'est pas gratuite : un appel 111, un créneau
                       de médecin traitant, un jour d'unité virtuelle ont tous des coûts unitaires)
```

L'allégation causale nécessite un comparateur : les taux de passage suivent une tendance et varient saisonnièrement, donc avant/après seul ne prouve rien.

## Exemple résolu

Un service de télésurveillance BPCO pour 3 000 patients à haut risque. Une évaluation avec contrôle apparié montre que les passages aux urgences liés aux exacerbations chutent de 0,9 à 0,7 par patient-année, et les admissions d'urgence de 0,5 à 0,42.

```
Passages évités = 3 000 × 0,2  = 600 × 300 £   = 180 000 £
Admissions évitées  = 3 000 × 0,08 = 240 × 3 800 £ = 912 000 £
Brut                                              1 092 000 £/an

Coûts : service de surveillance 600 000 £ ; réponses infirmières communautaires supplémentaires 150 000 £
Net ≈ +342 000 £/an — plus les gains de QALY des exacerbations traitées plus tôt.
```

Notez que la ligne des admissions domine : l'évitement des passages seul rembourse rarement un service de surveillance ; l'évitement des *admissions* est là où est l'argent.

## Lien avec l'ingénierie logicielle

C'est l'**économie de l'évitement des incidents**. La valeur de l'observabilité, des déploiements canaris et des systèmes d'alerte précoce, c'est des « passages aux urgences » évités — pages, war rooms, sev-1 — chacun avec un coût chargé (heures-ingénieur × taux + impact client). Les mêmes règles de modélisation s'appliquent : nettez le coût du nouveau parcours en amont (le triage des alertes n'est pas gratuit), méfiez-vous de la substitution (les alertes qui créent du travail sans prévenir d'incidents sont de l'anxiété de santé, pas de la santé), et prouvez le contrefactuel avec un contrôle (les taux d'incidents des équipes suivent une tendance et régressent vers la moyenne, exactement comme les passages aux urgences).

## Pièges

- **Régression vers la moyenne** : les cohortes à haut risque sélectionnées sur une mauvaise année s'améliorent sans traitement ; les contrôles appariés ou les conceptions en coin étagé sont essentiels.
- **Demande induite par l'offre** : le triage numérique facile peut *augmenter* les contacts totaux (seuil plus bas pour chercher de l'aide) tout en diminuant la part des urgences — comptez le coût total du système.
- **Valoriser les passages au coût moyen** alors que les coûts fixes des urgences ne baissent pas — voir [coût marginal contre moyen](../coût-marginal-contre-coût-moyen/).

## Sources

- NHS England, Collecte Nationale de Coûts. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
