# Analyse Coûts-Conséquences (ACC)

L'ACC présente les coûts aux côtés d'un **tableau désagrégé de tous les résultats** — cliniques, opérationnels, expérientiels — sans les fondre en un ratio ou score unique. Le décideur pèse les compromis explicitement.

## Pourquoi c'est important

L'ACC est le **format économique préféré de NICE pour la plupart des technologies de santé numérique** dans le cadre du Cadre des Normes de Preuve. Les produits numériques produisent des effets hétérogènes (temps économisé, satisfaction, réduction des absences, petits gains cliniques) qui résistent à une agrégation honnête en un seul chiffre QALY. Plutôt que de forcer un composite fragile, l'ACC montre le grand livre complet. Pour la plupart des dossiers de décision logiciels, c'est à la fois le format le plus honnête et le plus persuasif, car chaque partie prenante peut trouver sa propre ligne pertinente pour la décision.

## Le calcul

Délibérément aucune formule d'agrégation. Le résultat est un tableau :

```
                          Intervention   Comparateur   Différence
Coûts (annuels)            X £            Y £           ΔC
Résultat 1 (unités naturelles)  …         …             Δ1
Résultat 2                 …             …              Δ2
Résultats qualitatifs      décrits, non notés
```

Chaque ligne conserve ses propres unités. Règles : chaque conséquence prédéfinie (pas de sélection après les résultats) ; même [perspective](../perspective-d-analyse/) et même [horizon](../horizon-temporel/) partout ; incertitude par ligne.

## Exemple résolu

Plateforme d'évaluation préopératoire numérique contre processus téléphonique, par an, un trust :

```
                              Numérique    Téléphone   Différence
Coût de fonctionnement        180 000 £    95 000 £    +85 000 £
Heures infirmières sur évaluations  6 200       11 800      −5 600 h
Annulations chirurgicales le jour même  92          174         −82
Satisfaction patient (CSAT)   4,5/5        3,9/5       +0,6
Évaluations perdues/incomplètes  1,2 %       4,8 %       −3,6 pp
```

Aucun score unique — mais la décision est facile à raisonner : 85 000 £ achètent 5 600 heures infirmières (≈ 15 £/heure, bien en dessous de tout coût de personnel), 82 annulations évitées (chacune gaspillant un créneau de bloc valant environ 1 200 £), et une meilleure expérience. Un comité peut aussi voir exactement ce qu'il *n'obtient pas* : aucun QALY revendiqué ni effet de mortalité.

## Lien avec l'ingénierie logicielle

L'ACC est la version formelle du tableau de bord équilibré qu'une bonne proposition de plateforme utilise déjà : coût aux côtés des métriques DORA, scores DevEx, comptes d'incidents — non agrégés. La discipline d'économie de la santé à ajouter : **prédéfinissez les lignes** (décidez ce qui compte avant le pilote, pour ne pas pouvoir discrètement retirer la métrique qui s'est dégradée), et **montrez les lignes défavorables** — une ACC uniquement de bonnes nouvelles est du marketing. Utilisez l'ACC lorsqu'aucun composite défendable n'existe, ce qui pour l'outillage de développeurs est presque toujours le cas.

## Pièges

- **Conséquences sélectionnées après coup** — l'intégrité du format dépend de la prédéfinition.
- **Agrégation dissimulée** : le codage couleur ou les « scores globaux » réintroduisent les pondérations arbitraires que l'ACC existe pour éviter.
- **Paralysie décisionnelle** : l'ACC a besoin d'un décideur prêt à peser les compromis ; associez-la à une recommandation et au raisonnement.

## Sources

- Cadre des Normes de Preuve de NICE pour les technologies de santé numérique (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- Tableaux des normes de preuve du CNP. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
