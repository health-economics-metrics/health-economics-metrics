# Horizon Temporel

L'horizon temporel est la période pendant laquelle une analyse compte les coûts et les effets. Il doit être assez long pour capturer toutes les différences significatives entre les options comparées.

## Pourquoi c'est important

Choisissez un horizon court et vous manquez les bénéfices tardifs (prévention) et les coûts tardifs (maintenance). Choisissez un horizon excessivement long et tout se noie dans l'incertitude. L'évaluation des technologies de santé utilise souvent un horizon de **durée de vie** pour les traitements avec des effets de mortalité ; l'[analyse d'impact budgétaire](../analyse-d-impact-budgétaire/) utilise délibérément un horizon court de **1-5 ans** parce que sa question est l'accessibilité financière, pas la valeur. L'horizon est un choix de modélisation déclaré, et les horizons mal appariés sont une manière classique de manipuler une comparaison.

## Le calcul

L'horizon est la limite supérieure de la sommation dans toute évaluation :

```
Valeur actuelle nette = Σ_t [ (Bénéfices_t − Coûts_t) / (1 + r)^t ]

T = horizon temporel (années)
r = taux d'actualisation (voir discounting-and-time-preference.md)
```

Les résultats devraient être rapportés avec l'horizon déclaré, et idéalement montrés à plusieurs horizons.

## Exemple résolu

Un système de prescription électronique coûte 2 millions £ à implémenter et 200 000 £/an à faire fonctionner. Il prévient des erreurs de médication d'une valeur de 600 000 £/an (coût de traitement du préjudice évité).

Bénéfice net par horizon (non actualisé, pour la clarté) :

```
Horizon 1 an :  −2 000 000 − 200 000 + 600 000  = −1 600 000 £
Horizon 3 ans : −2 000 000 + 3 × 400 000        = −800 000 £
Horizon 5 ans : −2 000 000 + 5 × 400 000        =  0 £
Horizon 10 ans :−2 000 000 + 10 × 400 000       = +2 000 000 £
```

Le système « échoue » à tout horizon inférieur à 5 ans et « réussit » à 10. Aucun n'est la vraie réponse ; le rapport honnête déclare le point d'équilibre et justifie l'horizon par la durée de vie du système (combien de temps avant remplacement ?).

## Lien avec l'ingénierie logicielle

- **Les évaluations d'outils mesurées sur un seul sprint** manquent systématiquement le creux de la courbe d'apprentissage (coûts en amont) et la maintenance à long terme (coûts en aval). Les pilotes d'assistant de codage IA mesurés à la semaine 2 capturent le pic de nouveauté, pas le régime stable.
- **La durée du contrat ≠ l'horizon de bénéfice.** Un contrat SaaS d'1 an peut néanmoins être évalué sur 5 ans si vous attendez raisonnablement le renouvellement — mais dites-le.
- **Les dossiers de remplacement de legacy** devraient courir jusqu'à la fin de vie crédible de l'ancien système, pas jusqu'à un chiffre rond arbitraire.

## Pièges

- **Magasinage d'horizon** : choisir l'horizon qui fait gagner votre option. Préenregistrez l'horizon avant de calculer les résultats.
- **Horizons différents pour des options différentes** dans la même comparaison.
- **Horizons de durée de vie sans actualisation ni analyse d'incertitude** — les bénéfices de l'année 30 à valeur nominale sont de la fiction. Associez les horizons longs à l'[analyse de sensibilité](../analyse-de-sensibilité/).

## Sources

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
