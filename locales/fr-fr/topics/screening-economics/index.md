# Économie du dépistage

L'économie du dépistage gouverne la valeur du test de populations asymptomatiques. Le fait mathématique central : **à faible prévalence de la maladie, même d'excellents tests génèrent surtout des faux positifs** — et le coût aval lié à la poursuite de ces faux positifs peut engloutir le bénéfice des vrais cas trouvés.

## Pourquoi c'est important

Depuis 1968, les critères de Wilson-Jungner de l'OMS (WHO) fixent la barre pour le dépistage en population : la maladie doit être importante, le test acceptable et précis, un traitement efficace doit exister, et l'équilibre économique doit être atteint. Le UK National Screening Committee applique une analyse coût-efficacité formelle avant d'approuver tout programme national — et rejette la plupart des propositions. Chaque argumentaire du type « l'IA va dépister tout le monde pour tout » se heurte à cette mécanique, et perd en général face à l'arithmétique ci-dessous.

## Le calcul

La valeur prédictive positive (VPP) — la probabilité qu'un résultat positif soit réel — s'effondre à faible prévalence :

```
VPP = (sens × prév) / [sens × prév + (1 − spéc) × (1 − prév)]

Exemple : sensibilité 90 %, spécificité 95 %, prévalence 0,5 % :
VPP = (0,9 × 0,005) / (0,9 × 0,005 + 0,05 × 0,995)
    = 0,0045 / (0,0045 + 0,04975) ≈ 8,3 %
```

Onze positifs sur douze sont faux. Économie complète du programme :

```
Coût par vrai cas trouvé = (coût de dépistage + coût de bilan × tous les positifs) / vrais positifs
Ensuite : trouver ce cas en vaut-il le coût ? (valeur de l'intervention précoce
      par cas, moins le préjudice du surdiagnostic — des cas trouvés qui n'auraient
      jamais compté)
```

## Exemple chiffré

Dépistage rétinien par IA pour une pathologie rare, 100 000 personnes, prévalence 0,5 %, sens 90 %, spéc 95 %, examen 15 £, bilan de confirmation 400 £ :

```
Vrais positifs :  100 000 × 0,005 × 0,90 = 450
Faux positifs :   100 000 × 0,995 × 0,05 = 4 975
Coût = 100 000 × 15 + (450 + 4 975) × 400 = 1,5 M£ + 2,17 M£ = 3,67 M£
Coût par vrai cas ≈ 8 156 £
```

Si un traitement précoce fait économiser 20 000 £ + 1 QALY par cas, le programme est largement rentable. En portant la spécificité à 99 % (moins de fausses alertes) : le coût de bilan tombe à (450 + 995) × 400 = 0,58 M£, total 2,08 M£, coût par cas ≈ **4 622 £** — c'est la spécificité, pas la sensibilité, qui fait gagner l'économie du dépistage à faible prévalence.

## Lien avec l'ingénierie logicielle

L'analyse statique, l'analyse de sécurité et la détection d'anomalies sont des programmes de dépistage appliqués aux bases de code et à la télémétrie, avec une prévalence de vrais défauts souvent bien inférieure à 1 % par occasion d'alerte. L'arithmétique identique explique la lassitude face aux alertes (alert fatigue) : un scanner spécifique à 95 % sur du code à faible prévalence noie les équipes sous les faux positifs, et chaque faux positif coûte de l'attention et érode la confiance jusqu'à ce que les vraies alertes finissent ignorées (le terme clinique est *préjudice du dépistage* ; le terme d'ingénierie est *engourdissement du pager*). Les remèdes se transposent depuis la santé : augmenter la spécificité avant la sensibilité, dépister des sous-populations à plus forte prévalence (ciblage fondé sur le risque ↔ analyse limitée au code modifié), et compter le coût de tri dans l'économie de l'outil — voir [NNT](../number-needed-to-treat/) et [évaluation clinique de l'IA](../clinical-ai-evaluation/).

## Pièges

- **Citer la sensibilité/spécificité sans la prévalence** — l'exactitude sans la VPP relève du marketing.
- **Ignorer le surdiagnostic** : trouver une « maladie » indolente qui n'aurait jamais nui déclenche des coûts et des préjudices de traitement bien réels.
- **Biais du délai d'avance (lead-time bias)** : une détection plus précoce sans changement des résultats gonfle artificiellement la survie apparente — voir [intervention précoce](../earlier-intervention/).

## Sources

- Wilson JMG, Jungner G. « Principles and practice of screening for disease. » OMS (WHO) 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
