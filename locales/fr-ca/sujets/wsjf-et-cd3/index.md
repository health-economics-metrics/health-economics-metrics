# WSJF et CD3

Le CD3 (Coût de Retard Divisé par la Durée) et le WSJF (Travail le Plus Court Pondéré en Premier) sont des règles de priorisation qui planifient le travail par **densité de valeur** : combien de coût de retard est éliminé par unité de capacité rare consommée. Sous une capacité partagée et fixe, le CD3-le-plus-élevé-d'abord est la séquence mathématiquement optimale pour minimiser le coût total de retard.

## Pourquoi c'est important

Chaque arriéré est un problème de rationnement : de nombreux éléments méritants, un seul pipeline. L'économie de la santé a résolu le même problème pour les budgets de santé avec des tableaux de classement de coût-efficacité — classez les interventions par santé gagnée par livre, financez en descendant la liste jusqu'à épuisement du budget. Le CD3 est la logique identique pour la capacité de livraison : bénéfice par unité de la *ressource contrainte*, financé par ordre de classement. Bien séquencer, c'est de l'argent gratuit — même travail, même capacité, coût total de retard moindre.

## Le calcul

```
CD3  = Coût de Retard (£/semaine) / Durée (semaines)      — unités réelles (Black Swan Farming)

WSJF = (valeur utilisateur-affaires + criticité temporelle + réduction de risque/permission
        d'opportunité) / taille du travail              — proxy d'échelle relative de SAFe,
                                                        scores Fibonacci modifiés
```

Le CD3 avec une monnaie authentique ([coût de retard](../coût-de-retard/)) est strictement plus fort que les points sans unité du WSJF — le WSJF est au CD3 ce que la notation multi-critères est à l'[analyse coût-utilité](../analyse-coût-utilité/) complète : utilisable quand la monétisation est peu pratique, manipulable quand les scores n'ont pas d'ancrage.

## Exemple résolu

Trois fonctionnalités, une équipe :

```
Fonctionnalité   CdR (£/sem)   Durée      CD3
A         30 000        10 sem     3 000
B         12 000        2 sem      6 000
C         5 000         1 sem      5 000
```

Ordre CD3 : B, C, A. Comparez le coût total de retard face à « plus gros CdR d'abord » (A, B, C) :

```
Ordre CD3  (B,C,A) : A attend 3 sem, C attend 2 → 30k×3 + 5k×2  = 100k£ coût de retard
Ordre CdR  (A,B,C) : B attend 10, C attend 12   → 12k×10 + 5k×12 = 180k£
```

Mêmes fonctionnalités, même équipe — le séquençage seul économise 80 000 £. L'intuition : les petits éléments urgents passent en premier car ils libèrent leur coût de retard à bon marché ; le gros élément perd peu en attendant brièvement.

## Lien avec l'ingénierie logicielle

Pour les portefeuilles logiciels de santé, dénommez le CdR dans les unités enseignées par ce dépôt : QALY/semaine × seuil + £/semaine opérationnel, et l'arriéré devient directement comparable à la façon dont le système de santé classe tout ce qu'il achète d'autre. Deux notes pratiques : (1) la durée signifie le *temps calendaire occupant la contrainte*, pas l'effort — un élément écoulé sur 2 semaines qui nécessite 2 jours de l'équipe goulot d'étranglement est moins cher qu'il n'y paraît (voir [optimisation des ressources en aval](../optimisation-des-ressources-en-aval/)) ; (2) les hôpitaux exécutent la même règle implicitement lorsqu'ils ordonnent les listes de bloc par débit pondéré par urgence — les catégories de priorisation clinique sont un CD3 pondéré par sévérité (voir [déficit de QALY et modulateurs de sévérité](../déficit-de-qaly-et-modulateurs-de-sévérité/)).

## Pièges

- **Théâtre de score WSJF** : les débats Fibonacci sans unité convergent vers celui qui argumente le plus fort ; ancrez au moins les éléments en tête d'arriéré dans un vrai CdR.
- **Manipulation de durée** : diviser les éléments pour gonfler le classement CD3 — acceptable quand les divisions livrent de la valeur indépendamment, fraude sinon.
- **Ignorer les profils d'urgence** : le CdR en forme d'échéance (dates réglementaires) brise l'hypothèse de taux constant ; planifiez ceux-ci par faisabilité de date, puis appliquez le CD3 au reste.
- **Reclassement chaotique** : le CD3 sert aux décisions de séquençage au moment de l'engagement, pas au réarrangement quotidien du travail en cours (voir [métriques de flux](../métriques-de-flux/) sur le WIP).

## Sources

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
