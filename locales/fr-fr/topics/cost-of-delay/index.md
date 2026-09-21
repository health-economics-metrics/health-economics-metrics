# Coût du retard (Cost of Delay, CoD)

Le coût du retard est la valeur économique perdue par unité de temps tant qu'une fonctionnalité, un produit ou un service *n'est pas* livré. C'est le pont le plus solide entre les métriques de livraison logicielle et l'économie de la santé : il convertit « nous avons livré en retard » en monnaie — ou en QALYs.

## Pourquoi c'est important

La règle de Reinertsen : « Si vous ne devez quantifier qu'une seule chose, quantifiez le coût du retard. » La plupart des organisations connaissent le coût d'un projet, mais pas le coût d'un mois de retard ; elles optimisent donc les budgets tout en laissant filer la valeur-temps. Pour les logiciels de santé, l'enjeu est littéral : chaque semaine où l'amélioration d'un parcours de soins est retardée, des patients attendent plus longtemps dans un état de santé dégradé. Le CoD est le cadre mathématique le plus puissant à présenter aux parties prenantes du NHS, car il chiffre l'*absence* de votre logiciel.

## Le calcul

```
CoD = bénéfice par unité de temps perdu tant que non livré   (£/semaine ou QALYs/semaine)

Perte totale liée au retard = CoD × durée du retard

Pour la priorisation, voir wsjf-and-cd3.md : CD3 = CoD / durée.
```

Pour les logiciels cliniques, exprimez le résultat à la fois en santé et en monnaie :

```
CoD_santé   = patients concernés par semaine × gain de QALY par patient
CoD_monnaie = CoD_santé × λ (seuil de disposition à payer, £20k–30k/QALY)
              + économies opérationnelles perdues par semaine
```

## Exemple chiffré

**Opérationnel** : un logiciel permet d'économiser £200 par patient sur un parcours de soins ; un trust traite 50 patients de ce type par semaine.

```
CoD = 200 × 50 = £10 000/semaine
Un retard de 10 semaines dans les achats coûte 200 × 50 × 10 = £100 000 de gaspillage évitable.
```

**Clinique** : une amélioration du triage supprime 5 semaines d'attente (utilité 0,68 → 0,80 plus tôt) pour 100 patients par semaine :

```
Gain de QALY par patient = (5/52) × 0,12 ≈ 0,0115
CoD_santé   = 100 × 0,0115 = 1,15 QALY/semaine
CoD_monnaie = 1,15 × £20 000 ≈ £23 000/semaine de valeur santé
```

Un retard de déploiement de 6 mois « coûte » environ 30 QALYs — l'argument qui transforme un glissement de mise en production informatique en événement clinique. (Point de repère : la fameuse analyse Maersk de Black Swan Farming a mis au jour des fonctionnalités isolées avec un CoD ≈ $200 000/semaine, ayant attendu 38 semaines.)

## Lien avec l'ingénierie logicielle

Le CoD est la métrique qui rend le [lead time DORA](../dora-metrics/) et l'[efficience de flux](../flow-metrics/) financièrement lisibles : lead time × CoD = argent (ou santé) brûlé dans les files d'attente. Usages :

- **Priorisation** : classer le travail par CoD/durée ([WSJF/CD3](../wsjf-and-cd3/)) plutôt que par la partie prenante la plus bruyante.
- **Économie des processus** : un cycle de mise en production de 2 semaines a un coût de retard attendu d'environ 1 semaine × CoD par fonctionnalité, comparé au déploiement continu — chiffrez le lot.
- **Achats publics** : les cycles d'achat du NHS de 6 à 18 mois ont un CoD ; le montrer change les discussions sur l'urgence (voir [analyse d'impact budgétaire](../budget-impact-analysis/) pour le pendant en termes d'abordabilité).

## Pièges

- **Supposer un CoD linéaire** : certains travaux ont une valeur en forme d'échéance (dates réglementaires — CoD infini après la date, nul avant) ou une valeur décroissante (fenêtres de premier arrivant). Classez le profil d'urgence avant de multiplier.
- **CoD sur des livrables dont personne ne veut** : le retard ne coûte que si la chose a de la valeur ; retarder un déchet ne coûte rien.
- **Double comptage du retard et de l'actualisation** : l'[actualisation](../discounting-and-time-preference/) chiffre déjà le temps sur des horizons pluriannuels ; le CoD en est la version opérationnelle intra-horizon. Utilisez le CoD pour des semaines/mois, le décalage de VAN pour des années.

## Sources

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
