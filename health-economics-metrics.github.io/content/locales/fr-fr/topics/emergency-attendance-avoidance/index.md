# Évitement des passages aux urgences

L'évitement des passages aux urgences comptabilise les passages aux urgences (ED / A&E) et les admissions en urgence évités grâce à une intervention en amont — applications de triage, télésurveillance, hôpitaux virtuels, réorientation vers les soins non programmés. Cela transforme le « nous l'avons détecté plus tôt » en une revendication chiffrée.

## Pourquoi c'est important

Les soins d'urgence constituent le cadre routinier le plus coûteux du système (les coûts unitaires des passages aux urgences se situent dans la fourchette de 250 à 400 £ selon les chiffres de la National Cost Collection / PSSRU ; une admission en urgence se chiffre en milliers de livres), et l'engorgement des urgences se répercute en délais ambulanciers et en annulations d'opérations programmées. Tout ce qui résorbe la demande en amont en toute sécurité — conseils d'auto-soins, soins primaires le jour même, réponse communautaire — achète de la capacité au point du système le plus sous tension. C'est la ligne de bénéfice standard pour les orienteurs de symptômes, les services de triage type « 111 » et la [télésurveillance des patients](../remote-patient-monitoring-economics/).

## Le calcul

```
Passages évités = population × (taux de référence − taux avec intervention)
Économie brute  = passages évités × coût unitaire par passage
                  (+ admissions évitées × coût d'admission, comptées séparément)

Économie nette  = économie brute − coût de l'intervention − coût du nouveau
                  recours au parcours (la demande réorientée n'est pas gratuite :
                  un appel au 111, un créneau de médecin généraliste, une journée
                  d'hôpital virtuel ont tous un coût unitaire)
```

La revendication causale nécessite un comparateur : les taux de passages évoluent avec des tendances et des variations saisonnières, donc l'avant/après seul ne prouve rien.

## Exemple chiffré

Un service de télésurveillance de la BPCO pour 3 000 patients à haut risque. Une évaluation par témoins appariés montre que les passages aux urgences liés aux exacerbations passent de 0,9 à 0,7 par patient-année, et les admissions en urgence de 0,5 à 0,42.

```
Passages évités   = 3 000 × 0,2  = 600 × 300 £   = 180 000 £
Admissions évitées = 3 000 × 0,08 = 240 × 3 800 £ = 912 000 £
Brut                                              1 092 000 £/an

Coûts : service de télésurveillance 600 000 £ ; interventions supplémentaires
d'infirmiers communautaires 150 000 £
Net ≈ +342 000 £/an — plus les gains de QALY liés aux exacerbations traitées plus tôt.
```

Notez que la ligne des admissions domine : l'évitement des passages seul finance rarement un service de télésurveillance ; c'est l'évitement des *admissions* qui génère l'essentiel de la valeur.

## Lien avec l'ingénierie logicielle

C'est l'**économie de l'évitement d'incidents**. La valeur de l'observabilité, des déploiements canaris et des systèmes d'alerte précoce réside dans les « passages aux urgences » évités — pages, cellules de crise, incidents sev-1 — chacun ayant un coût chargé (heures-ingénieur × taux horaire + impact client). Les mêmes règles de modélisation s'appliquent : déduire le coût du nouveau parcours en amont (le triage des alertes n'est pas gratuit), se méfier de la substitution (des alertes qui créent du travail sans prévenir d'incidents sont de l'anxiété, pas de la santé), et prouver le contrefactuel avec un témoin (les taux d'incidents des équipes évoluent et régressent vers la moyenne, exactement comme les passages aux urgences).

## Pièges

- **Régression vers la moyenne** : les cohortes à haut risque sélectionnées sur une mauvaise année s'améliorent même sans traitement ; des témoins appariés ou des plans à coin échelonné (stepped-wedge) sont essentiels.
- **Demande induite par l'offre** : un triage numérique facile peut *augmenter* le nombre total de contacts (seuil plus bas pour demander de l'aide) tout en réduisant la part des urgences — comptez le coût total du système.
- **Valoriser les passages au coût moyen** alors que les coûts fixes des urgences ne diminuent pas — voir [coût marginal vs coût moyen](../marginal-vs-average-cost/).

## Sources

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
