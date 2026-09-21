# WSJF et CD3

Le CD3 (Cost of Delay Divided by Duration, coût du délai divisé par la durée) et le WSJF (Weighted Shortest Job First, plus courte tâche pondérée en premier) sont des règles de priorisation qui ordonnancent le travail selon la **densité de valeur** : la quantité de coût de délai supprimée par unité de capacité rare consommée. Sous une capacité partagée et fixe, traiter en premier l'élément au CD3 le plus élevé est la séquence mathématiquement optimale pour minimiser le coût de délai total.

## Pourquoi c'est important

Chaque backlog est un problème de rationnement : de nombreux éléments méritants, un seul pipeline. L'économie de la santé a résolu le même problème pour les budgets de santé avec les tableaux de classement coût-efficacité : classer les interventions par santé gagnée par livre dépensée, et financer la liste jusqu'à épuisement du budget. Le CD3 applique exactement la même logique à la capacité de livraison : le bénéfice par unité de la *ressource contrainte*, financé par ordre de classement. Bien séquencer, c'est de l'argent gratuit — même travail, même capacité, moins de coût de délai total.

## Le calcul

```
CD3  = Coût du délai (£/semaine) / Durée (semaines)      — unités réelles (Black Swan Farming)

WSJF = (valeur métier utilisateur + urgence temporelle + réduction de risque/activation
        d'opportunité) / taille de la tâche               — proxy à échelle relative de SAFe,
                                                            scores Fibonacci modifiés
```

Le CD3, avec une monnaie réelle ([coût du délai](../cost-of-delay/)), est strictement plus solide que les points sans unité du WSJF — le WSJF est au CD3 ce que la notation multicritère est à l'[analyse coût-utilité](../cost-utility-analysis/) complète : utilisable quand la monétisation est impraticable, manipulable quand les scores n'ont aucun ancrage.

## Exemple chiffré

Trois fonctionnalités, une équipe :

```
Fonctionnalité   CoD (£/sem)   Durée      CD3
A                30,000        10 sem.    3,000
B                12,000        2 sem.     6,000
C                5,000         1 sem.     5,000
```

Ordre CD3 : B, C, A. Comparez le coût de délai total à un ordre « plus gros CoD en premier » (A, B, C) :

```
Ordre CD3  (B,C,A) : A attend 3 sem., C attend 2 → 30k×3 + 5k×2  = £100k de coût de délai
Ordre CoD  (A,B,C) : B attend 10, C attend 12    → 12k×10 + 5k×12 = £180k
```

Mêmes fonctionnalités, même équipe — le seul séquencement économise £80,000. L'intuition : les petits éléments urgents passent en premier car ils libèrent leur coût de délai à moindre coût ; le gros élément perd peu en attendant brièvement.

## Lien avec l'ingénierie logicielle

Pour les portefeuilles logiciels de santé, exprimez le CoD dans les unités enseignées par ce dépôt : QALY/semaine × seuil + £/semaine opérationnel, et le backlog devient directement comparable à la manière dont le système de santé classe tout ce qu'il achète par ailleurs. Deux remarques pratiques : (1) la durée désigne le *temps calendaire occupant la contrainte*, pas l'effort — un élément écoulé sur 2 semaines mais ne nécessitant que 2 jours de l'équipe goulot d'étranglement est moins coûteux qu'il n'y paraît (voir [optimisation des ressources en aval](../downstream-resource-optimization/)) ; (2) les hôpitaux appliquent implicitement la même règle lorsqu'ils ordonnent les programmes opératoires selon un débit pondéré par l'urgence — les catégories de priorisation clinique sont un CD3 pondéré par la sévérité (voir [déficit de QALY et modificateurs de sévérité](../qaly-shortfall-and-severity-modifiers/)).

## Pièges

- **Le théâtre du score WSJF** : des débats Fibonacci sans unité qui convergent vers celui qui argumente le plus fort ; ancrez au moins les éléments en tête de backlog sur un CoD réel.
- **La manipulation de la durée** : découper des éléments pour gonfler le rang CD3 — acceptable quand les découpages livrent de la valeur de manière indépendante, frauduleux sinon.
- **Ignorer les profils d'urgence** : un CoD en forme d'échéance (dates réglementaires) rompt l'hypothèse de taux constant ; planifiez ces éléments selon la faisabilité de la date, puis appliquez le CD3 au reste.
- **Le remaniement incessant du classement** : le CD3 sert aux décisions de séquencement au moment de l'engagement, pas au remaniement quotidien du travail en cours (voir [indicateurs de flux](../flow-metrics/) sur le WIP).

## Sources

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
