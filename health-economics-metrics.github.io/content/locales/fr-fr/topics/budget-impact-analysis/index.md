# Analyse d'impact budgétaire (BIA)

La BIA estime l'effet de l'adoption d'une intervention sur le **budget** d'un payeur donné au cours des 1 à 5 prochaines années. Elle répond à la question de l'*accessibilité financière* ; l'analyse coût-efficacité répond à celle de la *valeur*. Une technologie peut représenter un excellent rapport valeur/coût tout en étant inabordable — ou être abordable tout en offrant peu de valeur. Une évaluation sérieuse exige les deux.

## Pourquoi c'est important

La question du directeur financier n'est jamais « quel est l'ICER ? » — c'est « quel est l'effet sur le budget de l'an prochain ? ». Les recommandations de bonnes pratiques de l'ISPOR (la référence du domaine) précisent : la perspective propre au payeur, un horizon de 1 à 5 ans, des flux de trésorerie annuels *non actualisés*, des courbes d'adoption réalistes, et une incertitude traitée par scénarios (et non de façon probabiliste). Le NICE exige des informations sur l'impact budgétaire en complément de l'analyse coût-efficacité ; un produit dont l'impact budgétaire national dépasse environ 20 M£/an en Angleterre déclenche une négociation commerciale, quel que soit son ICER.

## Le calcul

```
BI_année_t = Coût_scénario_avec_nouveau(t) − Coût_scénario_actuel(t)

Coût_scénario(t) = Σ sur les groupes de patients :
   population éligible(t) × taux d'adoption(t) × coût net par patient(t)

coût net par patient = coût de l'intervention − coût des soins déplacés + coût des soins induits
```

Choix de modélisation clés : croissance de la population éligible, courbe d'adoption (l'adoption n'est jamais instantanée), ce que la nouvelle option remplace, et toute demande qu'elle *induit* (accès facilité → davantage d'utilisateurs).

## Exemple chiffré

Un payeur couvrant 2 millions de personnes envisage un dispositif thérapeutique numérique à 300 £/patient/an ; 1,5 % des adhérents sont éligibles (30 000) ; adoption de 20 % → 40 % → 60 % sur 3 ans ; chaque utilisateur remplace 120 £/an d'autres soins.

```
Coût net par utilisateur = 300 − 120 = 180 £

Année 1 : 30 000 × 0,20 × 180 = 1,08 M£
Année 2 : 30 000 × 0,40 × 180 = 2,16 M£
Année 3 : 30 000 × 0,60 × 180 = 3,24 M£
```

Même si l'ICER du produit est un excellent 8 000 £/QALY, le payeur doit trouver 3,24 M£ d'*argent nouveau* d'ici l'année 3 — les 120 £ déplacés sont dilués sur de nombreuses autres lignes budgétaires et ne seront pas libérés sous forme de trésorerie (voir [trésorerie libérée vs non libérée](../cash-releasing-vs-non-cash-releasing/)). C'est pourquoi la valeur unitaire et l'accessibilité financière constituent deux obstacles distincts.

## Lien avec l'ingénierie logicielle

La BIA est exactement le pendant, côté directeur financier, d'une revendication de ROI par poste de travail : « c'est rentable par développeur, mais pouvons-nous nous permettre un déploiement à l'échelle de l'organisation cette année fiscale ? ». Modélisez les paliers de licence, une courbe d'adoption en S, les dépenses d'outillage déplacées qui ne libèrent de la trésorerie que lorsque les anciens contrats prennent réellement fin, et l'usage induit (un CI moins cher → plus de CI). Présenter un tableau d'impact budgétaire sur 3 ans aux côtés du ROI est ce qui rend une proposition d'outillage d'entreprise crédible pour la finance.

## Pièges

- **Le fantasme de l'adoption instantanée** : l'impact de l'année 1 calculé au niveau d'adoption stabilisé.
- **Compter le coût déplacé comme de la trésorerie** alors qu'il s'agit de capacité diffuse.
- **Ignorer la demande induite** — les améliorations d'accès accroissent l'usage au sein de la population éligible.
- **Confondre les horizons/l'actualisation de la BIA et de la CEA** : la BIA est, par construction, à horizon court, non actualisée et spécifique au payeur.

## Sources

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- Bonnes pratiques ISPOR : analyse d'impact budgétaire. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
