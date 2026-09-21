# Analyse coût-conséquence (CCA)

La CCA présente les coûts aux côtés d'un **tableau désagrégé de tous les résultats** — cliniques, opérationnels, d'expérience — sans les réduire à un ratio ou un score unique. Le décideur pèse explicitement les arbitrages.

## Pourquoi c'est important

La CCA est le **format économique préféré du NICE pour la plupart des technologies de santé numérique** dans le cadre de l'Evidence Standards Framework. Les produits numériques produisent des effets hétérogènes (temps gagné, satisfaction, réduction des rendez-vous manqués, petits gains cliniques) qui résistent à une agrégation honnête en un seul chiffre de QALY. Plutôt que de forcer un composite fragile, la CCA montre le grand livre complet. Pour la plupart des dossiers d'investissement logiciels, c'est à la fois le format le plus honnête et le plus persuasif, car chaque partie prenante peut y trouver sa propre ligne pertinente pour la décision.

## Le calcul

Il n'y a délibérément aucune formule d'agrégation. Le résultat est un tableau :

```
                          Intervention   Comparateur   Différence
Coûts (annuels)           X £            Y £           ΔC
Résultat 1 (unités naturelles) …          …            Δ1
Résultat 2                …              …            Δ2
Résultats qualitatifs     décrits, non notés
```

Chaque ligne conserve ses propres unités. Règles : chaque conséquence prédéfinie (pas de sélection sélective après les résultats) ; même [perspective](../analysis-perspective/) et même [horizon](../time-horizon/) tout au long ; incertitude par ligne.

## Exemple chiffré

Plateforme d'évaluation préopératoire numérique vs processus téléphonique, par an, un trust :

```
                              Numérique    Téléphone    Différence
Coût de fonctionnement        180 000 £    95 000 £     +85 000 £
Heures infirmières sur évaluations 6 200   11 800        −5 600 h
Annulations chirurgicales le jour même 92  174           −82
Satisfaction patient (CSAT)   4,5/5        3,9/5         +0,6
Évaluations perdues/incomplètes 1,2 %      4,8 %         −3,6 pts

```

Aucun score unique — mais la décision se raisonne facilement : 85 000 £ achètent 5 600 heures infirmières (≈ 15 £/heure, bien en dessous de tout coût de personnel), 82 annulations évitées (chacune gaspillant un créneau de bloc opératoire valant ~1 200 £), et une meilleure expérience. Un comité peut aussi voir exactement ce qu'il *n'obtient pas* : aucun effet revendiqué sur les QALY ou la mortalité.

## Lien avec l'ingénierie logicielle

La CCA est la version formelle du tableau de bord équilibré qu'une bonne proposition de plateforme utilise déjà : coût à côté des indicateurs DORA, scores d'expérience développeur, nombre d'incidents — non agrégés. La discipline d'économie de la santé à ajouter : **prédéfinissez les lignes** (décidez ce qui compte avant le pilote, pour ne pas pouvoir discrètement écarter l'indicateur qui s'est dégradé), et **montrez les lignes défavorables** — une CCA qui ne contient que de bonnes nouvelles relève du marketing. Utilisez la CCA lorsqu'aucun composite défendable n'existe, ce qui, pour l'outillage développeur, est presque toujours le cas.

## Pièges

- **Conséquences sélectionnées après coup** — l'intégrité du format dépend de la prédéfinition.
- **L'agrégation dissimulée** : un code couleur ou des « scores globaux » réintroduisent les pondérations arbitraires que la CCA vise justement à éviter.
- **La paralysie décisionnelle** : la CCA exige un décideur prêt à peser les arbitrages ; associez-la à une recommandation et à son raisonnement.

## Sources

- NICE Evidence Standards Framework pour les technologies de santé numérique (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- Tableaux de normes de preuve de l'ESF. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
