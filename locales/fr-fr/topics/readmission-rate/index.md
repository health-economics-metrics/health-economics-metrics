# Taux de réadmission

Le taux de réadmission à 30 jours est le pourcentage de patients sortis d'hôpital qui reviennent en urgence dans les 30 jours. C'est l'indicateur canonique de *qualité de la sortie* du système de santé — et il entraîne des pénalités financières directes.

## Pourquoi c'est important

Une réadmission signifie que la première sortie n'a pas tenu : sortie prématurée, transmission médicamenteuse défaillante, absence de suivi, ou soutien social manquant. Les payeurs la pénalisent explicitement — le programme américain Hospital Readmissions Reduction Program retient jusqu'à 3 % des paiements Medicare d'un hôpital ; le NHS n'a historiquement pas payé les réadmissions d'urgence évitables à 30 jours. La prévention des réadmissions est donc l'une des rares catégories de bénéfice *directement* pertinente en trésorerie pour un prestataire, pas seulement en capacité.

## Le calcul

```
Taux de réadmission = réadmissions d'urgence dans les 30 jours / sorties
                       index × 100

Les comparaisons standardisées par le risque ajustent au case-mix ; les
programmes de pénalité comparent l'observé à l'attendu pour des hôpitaux
comparables.

Valeur de la prévention = réadmissions évitées × (coût par séjour de
                          réadmission + exposition à la pénalité par
                          réadmission)
```

## Exemple chiffré

Une application de soutien post-sortie pour l'insuffisance cardiaque (suivi des symptômes, alertes de poids, rappels de médication, escalade vers l'infirmier) : 2 000 sorties/an, taux de réadmission de référence 18 %, l'essai montre 14 % avec l'application.

```
Réadmissions évitées = 2 000 × (0,18 − 0,14) = 80/an
Coût par séjour de réadmission ≈ 3 500 £ → 280 000 £/an de coût de
traitement évité
Plus l'exposition aux pénalités/non-paiement sur ces séjours.
Coût de l'application : 2 000 × 60 £ = 120 000 £/an

Net ≈ +160 000 £/an, avant toute revendication de QALY pour la
détérioration évitée.
```

Le chiffre à défendre est l'effet de 4 points de pourcentage : il doit provenir d'une comparaison contrôlée, car les taux de réadmission varient avec le case-mix et la saison.

## Lien avec l'ingénierie logicielle

La réadmission est le **taux d'échec des changements** du système de santé (voir [indicateurs DORA](../dora-metrics/)) : un travail « livré » qui rebondit dans les 30 jours. Les analogies sont profondes — les tickets rouverts et les incidents de régression indiquent une mauvaise « qualité de sortie » (vérification faible, clôture prématurée, documentation de transmission manquante) ; une comptabilité de type pénalité (l'équipe qui corrige paie, pas l'équipe qui reçoit) change les comportements ; et les deux domaines ont appris la même leçon, à savoir que pousser le débit brut (sortie plus rapide, livraison plus rapide) sans investir dans la transmission convertit simplement des files d'attente visibles en retouches invisibles. Un « taux de réouverture à 30 jours » a sa place sur tout tableau de bord d'équipe qui célèbre le temps de cycle.

## Pièges

- **Manipulation par re-étiquetage** : réadmissions codées comme séjours d'observation ou nouvelles pathologies ; auditez la définition.
- **Toutes causes contre causes liées** : le « toutes causes » à 30 jours inclut des événements réellement sans rapport ; les programmes de pénalité utilisent généralement le « toutes causes » précisément parce que le « lié » est manipulable.
- **Aveuglement au case-mix** : un hôpital servant des populations plus malades et plus pauvres réadmet davantage pour des raisons qu'aucune application ne corrige — ajustez au risque avant de comparer.

## Sources

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, emergency readmissions statistics. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
