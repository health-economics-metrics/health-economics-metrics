# Recommandation vers Traitement (RTT)

La recommandation vers traitement est le temps écoulé entre la recommandation d'un médecin traitant et le début du traitement dirigé par un consultant. La Constitution du NHS fixe la norme : **92 % des patients devraient commencer le traitement dans les 18 semaines**. Le RTT est la métrique opérationnelle individuelle la plus visible politiquement dans le NHS anglais.

## Pourquoi c'est important

Les trusts manquant les objectifs RTT font face à un examen réglementaire, une intervention et une atteinte à la réputation ; la liste d'attente nationale est un chiffre de une. Chaque semaine qu'un patient attend est de la santé perdue (attendre dans un état de santé moins bon — voir l'arithmétique QALY ci-dessous) et souvent du coût gagné (les conditions se détériorent ; voir [intervention plus précoce](../intervention-plus-précoce/)). Un logiciel qui économise du temps n'importe où dans le parcours recommandation-vers-traitement — triage, délai de rendu diagnostique, capacité de clinique, planification — atténue directement les conséquences opérationnelles et financières du non-respect de la norme, ce pourquoi l'impact RTT est une ligne de bénéfice de première classe dans les dossiers de décision numériques du NHS.

## Le calcul

```
Performance RTT = patients traités dans les 18 semaines / total traités × 100
Coût de santé du temps d'attente par patient = durée d'attente × (utilité_traité − utilité_attente)

Vue parcours : RTT = Σ durées d'étape (triage de recommandation → premier rendez-vous →
diagnostic → décision → traitement) — améliorez la file d'attente la plus longue, pas l'étape
la plus occupée (voir flow-metrics.md)
```

## Exemple résolu

Une spécialité traite 5 000 patients de parcours/an ; attente moyenne 24 semaines ; utilité d'attente 0,68 contre traité 0,80.

Le triage numérique plus les protocoles directs-vers-examen éliminent 5 semaines de file d'attente pure :

```
Gain de QALY = 5 000 × (5/52) × (0,80 − 0,68) = 57,7 QALY/an
Monétisé à 20 000-30 000 £/QALY (voir willingness-to-pay-thresholds.md) :
  ≈ 1,15-1,73 million £/an de valeur de santé
```

— plus le trust passe de la violation au respect de la norme des 18 semaines, ce qui a une valeur de gouvernance qu'aucune feuille de calcul ne capture pleinement.

## Lien avec l'ingénierie logicielle

Le RTT est une **métrique de délai sur une file d'attente multi-étapes** — la version hospitalière du délai commit-à-production (voir [métriques DORA](../métriques-dora/)). La méthode d'amélioration est identique : instrumentez chaque étape, trouvez où le temps calendaire s'accumule (ce sont presque toujours les transferts et les files d'attente, pas le travail clinique), et éliminez les états d'attente. Gains logiciels typiques : e-triage acheminant les recommandations en heures plutôt qu'en lots hebdomadaires, envoi push des résultats diagnostiques plutôt que rendez-vous de suivi, et critères directs-vers-examen automatisés. Valorisez l'amélioration avec le [coût de retard](../coût-de-retard/) dénommé en QALY/semaine.

## Pièges

- **Améliorer une étape qui n'est pas la contrainte** — réduire les attentes du premier rendez-vous alors que les files de diagnostic grandissent ne fait que déplacer l'accumulation.
- **Manipulation** : les réinitialisations de parcours et les pauses d'horloge peuvent améliorer le RTT rapporté sans traiter personne plus tôt ; auditez la distribution sous-jacente.
- **Revendiquer toute l'amélioration du parcours** pour un outil alors que plusieurs changements sont arrivés ensemble — l'attribution nécessite un comparateur.

## Sources

- NHS England, statistiques de temps d'attente RTT. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, plan de récupération des soins programmés. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
