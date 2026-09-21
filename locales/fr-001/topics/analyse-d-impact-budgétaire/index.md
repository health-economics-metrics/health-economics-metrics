# Analyse d'Impact Budgétaire (AIB)

L'AIB estime ce que l'adoption d'une intervention fait au **budget** d'un payeur spécifique au cours des 1 à 5 prochaines années. Elle répond à l'*accessibilité financière* ; le rapport coût-efficacité répond à la *valeur*. Une technologie peut avoir une excellente valeur et rester néanmoins inabordable — ou être abordable et de faible valeur. Les évaluations sérieuses exigent les deux.

## Pourquoi c'est important

La question du directeur financier n'est jamais « quel est le RCEI ? » — c'est « qu'est-ce que cela fait au budget de l'année prochaine ? » Les lignes directrices de bonnes pratiques de l'ISPOR (la norme du domaine) précisent : la perspective propre du payeur, un horizon de 1 à 5 ans, des flux de trésorerie annuels *non actualisés*, des courbes d'adoption réalistes, et une incertitude par scénario (non probabiliste). NICE exige des informations d'impact budgétaire aux côtés du rapport coût-efficacité ; un produit dont l'impact budgétaire national dépasse ~20 M£/an en Angleterre déclenche une négociation commerciale indépendamment de son RCEI.

## Le calcul

```
IB_année_t = Coût_scénario_avec_nouveau(t) − Coût_scénario_actuel(t)

Coût_scénario(t) = Σ sur les groupes de patients :
   population éligible(t) × adoption(t) × coût net par patient(t)

coût net par patient = coût de l'intervention − coût de soins déplacés + coût de soins induits
```

Choix de modélisation clés : croissance de la population éligible, courbe d'adoption (l'adoption n'est jamais instantanée), ce que la nouvelle option déplace, et toute demande qu'elle *induit* (accès plus facile → plus d'utilisateurs).

## Exemple résolu

Un payeur couvrant 2 M de personnes envisage une thérapeutique numérique à 300 £/patient/an ; 1,5 % des membres sont éligibles (30 000) ; adoption 20 % → 40 % → 60 % sur 3 ans ; chaque utilisateur déplace 120 £/an d'autres soins.

```
Coût net par utilisateur = 300 − 120 = 180 £

Année 1 : 30 000 × 0,20 × 180 = 1,08 M£
Année 2 : 30 000 × 0,40 × 180 = 2,16 M£
Année 3 : 30 000 × 0,60 × 180 = 3,24 M£
```

Même si le RCEI du produit est un stellaire 8 000 £/QALY, le payeur doit trouver 3,24 M£ d'*argent nouveau* d'ici l'année 3 — les 120 £ déplacés se dispersent finement sur d'autres lignes budgétaires et ne seront pas libérés en trésorerie (voir [libérateur de trésorerie contre non libérateur](../économies-libératrices-de-trésorerie-contre-non-libératrices/)). C'est pourquoi la valeur unitaire et l'accessibilité financière sont des obstacles distincts.

## Lien avec l'ingénierie logicielle

L'AIB est exactement le complément orienté DAF d'une allégation de ROI par poste : « c'est coût-efficace par développeur, mais pouvons-nous nous permettre un déploiement à l'échelle de l'organisation cet exercice fiscal ? » Modélisez les niveaux de licence, une courbe d'adoption en S, les dépenses outillage déplacées qui ne libèrent de la trésorerie que lorsque les anciens contrats se terminent réellement, et l'usage induit (CI moins chère → plus de CI). Présenter un tableau d'impact budgétaire sur 3 ans aux côtés du ROI est ce qui rend une proposition d'outillage d'entreprise crédible financièrement.

## Pièges

- **Fantasme d'adoption instantanée** : impact de l'année 1 calculé à l'adoption en régime stable.
- **Compter le coût déplacé comme de la trésorerie** alors qu'il s'agit de capacité diffuse.
- **Ignorer la demande induite** — les améliorations d'accès augmentent l'usage de la population éligible.
- **Confondre les horizons/actualisations de l'AIB et de l'ACE** : l'AIB est à horizon court, non actualisée, spécifique au payeur par conception.

## Sources

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- Bonnes pratiques ISPOR : analyse d'impact budgétaire. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
