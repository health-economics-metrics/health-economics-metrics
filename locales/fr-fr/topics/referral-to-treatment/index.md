# Délai d'orientation vers le traitement (RTT)

Le délai d'orientation vers le traitement (referral to treatment) est le temps écoulé entre l'orientation par un médecin généraliste et le début du traitement mené par un consultant. La Constitution du NHS fixe le standard : **92 % des patients devraient débuter leur traitement dans les 18 semaines**. Le RTT est l'indicateur opérationnel le plus politiquement visible du NHS anglais.

## Pourquoi c'est important

Les trusts qui manquent la cible RTT font face à un contrôle réglementaire, à une intervention et à un dommage réputationnel ; la liste d'attente nationale est un chiffre de une. Chaque semaine d'attente d'un patient est de la santé perdue (attendre dans un moins bon état de santé — voir le calcul QALY ci-dessous) et souvent du coût gagné (les pathologies se détériorent ; voir [intervention précoce](../earlier-intervention/)). Un logiciel qui fait gagner du temps n'importe où dans le parcours d'orientation vers le traitement — triage, délai de retour des diagnostics, capacité de consultation, planification — atténue directement les conséquences opérationnelles et financières du non-respect du standard, ce pourquoi l'impact sur le RTT est une ligne de bénéfice de premier plan dans les dossiers économiques du numérique NHS.

## Le calcul

```
Performance RTT = patients traités dans les 18 semaines / total traité × 100
Coût de santé du temps d'attente par patient = durée d'attente ×
  (utilité_traité − utilité_en_attente)

Vue de parcours : RTT = Σ durées des étapes (triage de l'orientation →
premier rendez-vous → diagnostics → décision → traitement) — améliorez
la file la plus longue, pas l'étape la plus occupée (voir flow-metrics.md).
```

## Exemple chiffré

Une spécialité traite 5 000 patients de parcours/an ; attente moyenne 24 semaines ; utilité en attente 0,68 contre traité 0,80.

Le triage numérique associé à des protocoles d'examen direct suppriment 5 semaines de pure mise en attente :

```
Gain de QALY = 5 000 × (5/52) × (0,80 − 0,68) = 57,7 QALY/an
Monétisé à 20 000-30 000 £/QALY (voir willingness-to-pay-thresholds.md) :
  ≈ 1,15-1,73 M£/an de valeur de santé
```

— en plus, le trust passe d'un manquement au respect du standard des 18 semaines, ce qui a une valeur de gouvernance qu'aucune feuille de calcul ne capture pleinement.

## Lien avec l'ingénierie logicielle

Le RTT est un **indicateur de délai (lead time) sur une file d'attente à plusieurs étapes** — l'équivalent hospitalier du délai commit-à-production (voir [indicateurs DORA](../dora-metrics/)). La méthode d'amélioration est identique : instrumenter chaque étape, trouver où le temps calendaire s'accumule (ce sont presque toujours les transmissions et les files, pas le travail clinique), et supprimer les états d'attente. Gains logiciels typiques : e-triage qui achemine les orientations en heures plutôt qu'en lots hebdomadaires, envoi automatique des résultats diagnostiques plutôt que rendez-vous de suivi, et critères automatisés d'examen direct. Valorisez l'amélioration avec le [coût du délai](../cost-of-delay/) exprimé en QALY/semaine.

## Pièges

- **Améliorer une étape qui n'est pas la contrainte** — réduire l'attente du premier rendez-vous alors que les files de diagnostics grandissent ne fait que déplacer l'accumulation.
- **Manipulation** : les réinitialisations de parcours et les pauses d'horloge peuvent améliorer le RTT rapporté sans traiter personne plus tôt ; auditez la distribution sous-jacente.
- **Revendiquer l'amélioration de tout le parcours** pour un seul outil alors que plusieurs changements sont arrivés ensemble — l'attribution nécessite un comparateur.

## Sources

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
