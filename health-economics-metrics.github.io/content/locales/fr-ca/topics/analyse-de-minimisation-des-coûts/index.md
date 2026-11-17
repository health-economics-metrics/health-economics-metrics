# Analyse de Minimisation des Coûts (AMC)

L'AMC compare uniquement les coûts et choisit l'option la moins chère — légitime *seulement* lorsqu'il a été démontré que les résultats des alternatives sont équivalents.

## Pourquoi c'est important

L'AMC est l'analyse la plus simple et la plus mal utilisée. L'allégation d'équivalence fait tout le travail : si les résultats ne diffèrent véritablement pas (un biosimilaire contre son original ; deux fournisseurs du même service répondant au même cahier des charges), alors le coût est la seule question et l'AMC est correcte. La rigueur réside dans le fait de *prouver* l'équivalence en premier — typiquement via une étude de non-infériorité avec une marge prédéfinie — ce qui est exactement l'étape que les acheteurs sautent habituellement.

## Le calcul

```
Étant donné une preuve que Effet_A ≈ Effet_B (dans une marge prédéfinie δ) :
Choisissez min(Coût_A, Coût_B)

Coûts mesurés depuis la même perspective, sur le même horizon,
incluant les coûts de changement/transition.
```

Si l'équivalence ne peut être démontrée, l'AMC est invalide — utilisez plutôt l'[ACE](../analyse-coût-efficacité/)/[ACU](../analyse-coût-utilité/).

## Exemple résolu

Un trust choisit entre deux plateformes de vidéoconsultation. Un pilote parallèle de 3 mois montre des taux d'achèvement de 94,1 % contre 93,8 %, une satisfaction patient de 4,4 contre 4,4 — des différences dans le δ préconvenu de 2 points de pourcentage. Résultats : équivalents. Coûts sur 3 ans :

```
                     Plateforme A     Plateforme B
Licences             360 000 £       210 000 £
Intégration          80 000 £        150 000 £
Formation/support    60 000 £        90 000 £
Total                500 000 £       450 000 £
```

La Plateforme B gagne de 50 000 £ — *y compris* son coût d'intégration plus élevé. Sans le pilote, l'allégation d'équivalence reposerait sur des brochures de fournisseur, et une différence de 1 point de taux d'achèvement (≈ des milliers de consultations échouées/an) éclipserait les 50 000 £.

## Lien avec l'ingénierie logicielle

L'AMC est la forme formelle de l'achat de commodités : deux fournisseurs de CI répondant à des ANS identiques, deux stockages d'objets avec la même spécification de durabilité. La leçon de l'économie de la santé est l'*ordre des opérations* : d'abord prouvez l'équivalence (référencez face à votre charge de travail, pilotez face à vos ANS, avec la marge convenue à l'avance), puis comparez les coûts totaux incluant la migration. « Ils sont fondamentalement les mêmes, B est moins cher » sans la première étape, c'est comment les organisations achètent l'outil 10 % moins cher et 40 % pire. Corollaire : lorsqu'un fournisseur argumente sur le prix, faites-le stipuler l'équivalence — c'est aussi contraignant dans l'autre sens.

## Pièges

- **Équivalence supposée** — le péché définitoire ; l'absence de preuve de différence n'est pas une preuve d'équivalence (les pilotes sous-puissants « montrent » l'équivalence gratuitement).
- **Omettre les coûts de changement** — la migration, la reformation et l'exécution en parallèle appartiennent au côté coût.
- **Équivalence sur les mauvais résultats** : équivalent sur la métrique mesurée, différent sur une qui compte (accessibilité, latence de queue, sortie de données).

## Sources

- Glossaire du York Health Economics Consortium : analyse de minimisation des coûts. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
