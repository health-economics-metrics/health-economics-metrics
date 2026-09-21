# Analyse de minimisation des coûts (Cost-Minimization Analysis, CMA)

La CMA ne compare que les coûts et retient l'option la moins chère — approche légitime *uniquement* lorsqu'il a été démontré que les résultats des alternatives sont équivalents.

## Pourquoi c'est important

La CMA est l'analyse la plus simple et la plus détournée de son usage. L'affirmation d'équivalence porte tout le poids de la démonstration : si les résultats ne diffèrent réellement pas (un biosimilaire face à son princeps ; deux prestataires du même service répondant au même cahier des charges), alors seul le coût compte et la CMA est correcte. La rigueur réside dans le fait de *prouver* l'équivalence au préalable — typiquement via une étude de non-infériorité avec une marge prédéfinie — étape que les acheteurs sautent le plus souvent.

## Le calcul

```
Étant donné la preuve que Effet_A ≈ Effet_B (dans une marge prédéfinie δ) :
Choisir min(Coût_A, Coût_B)

Coûts mesurés selon la même perspective, sur le même horizon,
y compris les coûts de bascule/transition.
```

Si l'équivalence ne peut être démontrée, la CMA n'est pas valide — utilisez alors la [CEA](../cost-effectiveness-analysis/)/[CUA](../cost-utility-analysis/).

## Exemple chiffré

Un trust choisit entre deux plateformes de téléconsultation. Un pilote parallèle de 3 mois montre des taux de complétion de 94,1 % contre 93,8 %, une satisfaction patient de 4,4 contre 4,4 — des différences à l'intérieur du δ convenu de 2 points de pourcentage. Résultats : équivalents. Coûts sur 3 ans :

```
                     Plateforme A   Plateforme B
Licences             £360 000       £210 000
Intégration          £80 000        £150 000
Formation/support    £60 000        £90 000
Total                £500 000       £450 000
```

La plateforme B l'emporte de £50 000 — *y compris* son coût d'intégration plus élevé. Sans le pilote, l'affirmation d'équivalence aurait reposé sur les brochures des fournisseurs, et une différence de 1 point de taux de complétion (≈ des milliers de consultations échouées par an) aurait éclipsé les £50 000.

## Lien avec l'ingénierie logicielle

La CMA est la forme formelle de l'achat de commodités : deux fournisseurs de CI répondant à des SLO identiques, deux stockages objet avec la même spécification de durabilité. La leçon d'économie de la santé, c'est l'*ordre des opérations* : d'abord prouver l'équivalence (benchmark contre votre charge de travail, pilote contre vos SLO, avec la marge convenue à l'avance), puis comparer les coûts totaux y compris la migration. « C'est à peu près pareil, B est moins cher » sans la première étape, c'est ainsi que les organisations achètent l'outil 10 % moins cher et 40 % moins bon. Corollaire : quand un fournisseur argumente sur le prix, faites-lui stipuler l'équivalence — cela engage aussi dans l'autre sens.

## Pièges

- **Équivalence supposée** — le péché originel ; l'absence de preuve de différence n'est pas une preuve d'équivalence (des pilotes sous-dimensionnés « montrent » gratuitement l'équivalence).
- **Omission des coûts de bascule** — migration, reformation et fonctionnement en parallèle doivent figurer du côté des coûts.
- **Équivalence sur les mauvais résultats** : équivalent sur la métrique mesurée, différent sur une métrique qui compte (accessibilité, latence de queue, sortie de données).

## Sources

- York Health Economics Consortium, glossaire : cost-minimization analysis. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. « The death of cost-minimization analysis? » Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
