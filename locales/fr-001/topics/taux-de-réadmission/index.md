# Taux de Réadmission

Le taux de réadmission à 30 jours est le pourcentage de patients sortis qui reviennent en urgence dans les 30 jours. C'est la métrique canonique de *qualité de sortie* du système de santé — et elle porte des pénalités financières directes.

## Pourquoi c'est important

Une réadmission signifie que la première sortie n'a pas tenu : sortie prématurée, transfert de médication échoué, aucun suivi, ou soutien social manquant. Les payeurs la pénalisent explicitement — le **Hospital Readmissions Reduction Program** américain retranche jusqu'à 3 % des paiements Medicare d'un hôpital ; le NHS n'a historiquement pas payé pour les réadmissions d'urgence évitables à 30 jours. Donc l'évitement des réadmissions est l'une des rares catégories de bénéfices *directement* pertinentes en trésorerie pour un prestataire, pas seulement de la capacité.

## Le calcul

```
Taux de réadmission = réadmissions d'urgence dans les 30 jours / sorties index × 100

Les comparaisons standardisées par risque ajustent pour le mix de cas ; les
programmes de pénalité comparent l'observé contre l'attendu pour des hôpitaux similaires.

Valeur de l'évitement = réadmissions évitées × (coût par épisode de réadmission
                     + exposition à la pénalité par réadmission)
```

## Exemple résolu

Une application de soutien à la sortie pour insuffisance cardiaque (suivi des symptômes, alertes de poids, rappels de médication, escalade infirmière) : 2 000 sorties/an, taux de réadmission de base 18 %, l'essai montre 14 % avec l'application.

```
Réadmissions évitées = 2 000 × (0,18 − 0,14) = 80/an
Coût par épisode de réadmission ≈ 3 200 £ → 280 000 £/an de coût de traitement évité
Plus l'exposition à la pénalité/non-paiement sur ces épisodes.
Coût de l'application : 2 000 × 60 £ = 120 000 £/an

Net ≈ +160 000 £/an, avant toute allégation de QALY pour détérioration évitée.
```

Le chiffre à défendre est l'effet de 4 points de pourcentage : il doit provenir d'une comparaison contrôlée, car les taux de réadmission oscillent avec le mix de cas et la saison.

## Lien avec l'ingénierie logicielle

La réadmission est le **taux d'échec des changements** du système de santé (voir [métriques DORA](../métriques-dora/)) : du travail qui a été « livré » et a rebondi dans les 30 jours. Les analogies sont profondes : les tickets rouverts et les incidents de régression indiquent une « qualité de sortie » faible (vérification faible, fermeture prématurée, documentation de transfert manquante) ; la comptabilité de style pénalité (l'équipe qui répare paie, pas l'équipe qui reçoit) change le comportement ; et les deux domaines ont appris la même leçon, que pousser un débit brut (sortie plus rapide, livraison plus rapide) sans investir dans le transfert convertit simplement des files d'attente visibles en retravail invisible. Un « taux de réouverture à 30 jours » appartient à tout tableau de bord d'équipe qui célèbre le temps de cycle.

## Pièges

- **Manipulation par réétiquetage** : réadmissions codées comme séjours d'observation ou nouvelles conditions ; auditez la définition.
- **Toutes causes contre cause liée** : les 30 jours toutes causes incluent des événements véritablement non liés ; les pénalités utilisent habituellement toutes causes précisément parce que « lié » est manipulable.
- **Cécité du mix de cas** : un hôpital servant des populations plus malades et plus pauvres réadmet plus pour des raisons qu'aucune application ne corrige — ajustez au risque avant de comparer.

## Sources

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, statistiques de réadmissions d'urgence. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
