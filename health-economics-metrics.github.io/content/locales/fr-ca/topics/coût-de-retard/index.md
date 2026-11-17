# Coût de Retard (CdR)

Le Coût de Retard est la valeur économique perdue par unité de temps qu'une fonctionnalité, un produit ou un service n'est *pas* livré. C'est le pont individuel le plus solide entre les métriques de livraison logicielle et l'économie de la santé : il convertit « nous avons livré en retard » en monnaie — ou en QALY.

## Pourquoi c'est important

La règle de Reinertsen : « Si vous ne quantifiez qu'une seule chose, quantifiez le Coût de Retard. » La plupart des organisations savent ce que coûte un projet mais pas ce que coûte un mois de retard, elles optimisent donc les budgets tout en hémorragiant de la valeur temporelle. Pour le logiciel de santé, les enjeux sont littéraux : chaque semaine où une amélioration de parcours est retardée, les patients attendent plus longtemps dans des états de santé moins bons. Le CdR est le cadre mathématique le plus fort à présenter aux parties prenantes du NHS car il tarife l'*absence* de votre logiciel.

## Le calcul

```
CdR = bénéfice par unité de temps perdu tant que non livré   (£/semaine ou QALY/semaine)

Perte totale de retard = CdR × durée du retard

Pour la priorisation, voir wsjf-and-cd3.md : CD3 = CdR / durée.
```

Pour le logiciel clinique, dénommez à la fois en santé et en argent :

```
CdR_santé = patients affectés par semaine × gain de QALY par patient
CdR_argent  = CdR_santé × λ (seuil de disposition à payer, 20k–30k £/QALY)
             + économies opérationnelles par semaine perdues
```

## Exemple résolu

**Opérationnel** : le logiciel économise 200 £ par patient sur un parcours ; un trust traite 50 patients ainsi/semaine.

```
CdR = 200 × 50 = 10 000 £/semaine
Un retard d'achat de 10 semaines coûte 200 × 50 × 10 = 100 000 £ de gaspillage évitable.
```

**Clinique** : une amélioration du triage élimine 5 semaines d'attente (utilité 0,68 → 0,80 plus tôt) pour 100 patients/semaine :

```
Gain de QALY par patient = (5/52) × 0,12 ≈ 0,0115
CdR_santé = 100 × 0,0115 = 1,15 QALY/semaine
CdR_argent  = 1,15 × 20 000 £ ≈ 23 000 £/semaine de valeur de santé
```

Un retard de déploiement de 6 mois « coûte » ~30 QALY — l'argument qui recadre un dérapage de mise en service informatique comme un événement clinique. (Repère d'échelle : la célèbre analyse Maersk de Black Swan Farming a trouvé des fonctionnalités individuelles avec un CdR ≈ 200 k$/semaine ayant attendu 38 semaines.)

## Lien avec l'ingénierie logicielle

Le CdR est la métrique qui rend le [délai DORA](../métriques-dora/) et l'[efficience de flux](../métriques-de-flux/) financièrement lisibles : délai × CdR = argent (ou santé) brûlé dans les files d'attente. Usages :

- **Priorisation** : classez le travail par CdR/durée ([WSJF/CD3](../wsjf-et-cd3/)) plutôt que par partie prenante la plus bruyante.
- **Économie de processus** : une cadence de livraison de 2 semaines a un coût de retard attendu d'environ 1 semaine × CdR par fonctionnalité contre la livraison continue — tarifez le lot.
- **Achats** : les cycles d'achat du NHS de 6 à 18 mois ont un CdR ; le montrer change les conversations d'urgence (voir l'[analyse d'impact budgétaire](../analyse-d-impact-budgétaire/) pour la contrepartie d'accessibilité financière).

## Pièges

- **Supposer un CdR linéaire** : certains travaux ont une valeur en forme d'échéance (dates réglementaires — CdR infini après la date, zéro avant) ou une valeur décroissante (fenêtres de premier arrivant). Classez le profil d'urgence avant de multiplier.
- **CdR sur des résultats que personne ne veut** : le retard ne coûte que si la chose a de la valeur ; les déchets retardés sont gratuits.
- **Double comptage du retard et de l'actualisation** : l'[actualisation](../actualisation-et-préférence-temporelle/) tarife déjà le temps sur des horizons pluriannuels ; le CdR est la version opérationnelle intra-horizon. Utilisez le CdR pour les semaines/mois, le décalage de VAN pour les années.

## Sources

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Coût de Retard. <https://blackswanfarming.com/cost-of-delay/>
- Aperçu du coût de retard. <https://en.wikipedia.org/wiki/Cost_of_delay>
