# Horizon temporel

L'horizon temporel est la période sur laquelle une analyse comptabilise les coûts et les effets. Il doit être suffisamment long pour saisir toutes les différences significatives entre les options comparées.

## Pourquoi c'est important

Choisissez un horizon court et vous manquez les bénéfices tardifs (prévention) et les coûts tardifs (maintenance). Choisissez un horizon trop long et tout se noie dans l'incertitude. L'évaluation des technologies de santé utilise souvent un horizon **à vie** pour les traitements ayant des effets sur la mortalité ; [l'analyse d'impact budgétaire](../budget-impact-analysis/) utilise délibérément un horizon court de **1 à 5 ans**, car sa question porte sur l'accessibilité budgétaire, et non sur la valeur. L'horizon est un choix de modélisation explicite, et des horizons mal assortis sont une façon classique de fausser une comparaison.

## Le calcul

L'horizon est la limite supérieure de la sommation dans toute évaluation :

```
Net present value = Σ (t = 0 … T) [ (Benefits_t − Costs_t) / (1 + r)^t ]

T = horizon temporel (années)
r = taux d'actualisation (voir discounting-and-time-preference.md)
```

Les résultats doivent être présentés avec l'horizon indiqué, et idéalement montrés pour plusieurs horizons.

## Exemple chiffré

Un système de prescription électronique coûte £2 million à mettre en œuvre et £200,000/year à exploiter. Il évite des erreurs médicamenteuses représentant £600,000/year (coût de traitement du préjudice évité).

Bénéfice net par horizon (non actualisé, pour la clarté) :

```
Horizon 1 year:  −2,000,000 − 200,000 + 600,000  = −£1,600,000
Horizon 3 years: −2,000,000 + 3 × 400,000        = −£800,000
Horizon 5 years: −2,000,000 + 5 × 400,000        =  £0
Horizon 10 years:−2,000,000 + 10 × 400,000       = +£2,000,000
```

Le système « échoue » pour tout horizon inférieur à 5 ans et « réussit » à 10 ans. Aucun des deux n'est la vraie réponse ; un rapport honnête indique le point d'équilibre et justifie l'horizon par la durée de vie du système (combien de temps avant son remplacement ?).

## Lien avec l'ingénierie logicielle

- **Les évaluations d'outils mesurées sur un seul sprint** manquent systématiquement le creux de la courbe d'apprentissage (coûts concentrés en début de période) et la maintenance à long terme (coûts reportés en fin de période). Les pilotes d'assistants de codage par IA mesurés en semaine 2 captent le pic de nouveauté, pas le régime stable.
- **La durée du contrat ≠ l'horizon du bénéfice.** Un contrat SaaS d'1 an peut tout de même être évalué sur 5 ans si un renouvellement est raisonnablement anticipé — mais il faut le préciser.
- **Les projets de remplacement de systèmes historiques** doivent courir jusqu'à la fin de vie crédible de l'ancien système, et non jusqu'à un chiffre rond arbitraire.

## Pièges

- **Le « choix d'horizon opportuniste »** : sélectionner l'horizon qui fait gagner son option. Il faut prédéfinir l'horizon avant de calculer les résultats.
- **Des horizons différents pour des options différentes** au sein d'une même comparaison.
- **Des horizons à vie sans actualisation ni analyse d'incertitude** — les bénéfices de l'année 30 pris à leur valeur nominale relèvent de la fiction. Associez les horizons longs à une [analyse de sensibilité](../sensitivity-analysis/).

## Sources

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. « Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force. » Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
