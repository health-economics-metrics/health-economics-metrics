# Économie du Dépistage

L'économie du dépistage gouverne la valeur de tester des populations asymptomatiques. Le fait mathématique central : **à faible prévalence de maladie, même d'excellents tests génèrent majoritairement des faux positifs** — et le coût en aval de les poursuivre peut submerger le bénéfice des vraies découvertes.

## Pourquoi c'est important

Depuis 1968, les critères de Wilson-Jungner de l'OMS ont fixé la barre pour le dépistage populationnel : la condition doit être importante, le test acceptable et précis, un traitement efficace doit exister, et l'économie doit s'équilibrer. Le Comité National de Dépistage britannique applique une analyse formelle de coût-efficacité avant d'approuver tout programme national — et rejette la plupart des propositions. Chaque argumentaire « l'IA va dépister tout le monde pour tout » se heurte à cette machinerie, et perd habituellement face à l'arithmétique ci-dessous.

## Le calcul

La valeur prédictive positive (VPP) — la probabilité qu'un résultat positif soit réel — s'effondre à faible prévalence :

```
VPP = (sens × préval) / [sens × préval + (1 − spéc) × (1 − préval)]

Exemple : sensibilité 90 %, spécificité 95 %, prévalence 0,5 % :
VPP = (0,9 × 0,005) / (0,9 × 0,005 + 0,05 × 0,995)
    = 0,0045 / (0,0045 + 0,04975) ≈ 8,3 %
```

Onze positifs sur douze sont faux. Économie complète du programme :

```
Coût par vrai cas trouvé = (coût de dépistage + coût de bilan × tous les positifs) / vrais positifs
Puis : trouver un cas en vaut-il la peine ? (valeur d'intervention plus précoce par cas,
      moins le préjudice de surdiagnostic — cas trouvés qui n'auraient jamais compté)
```

## Exemple résolu

Dépistage rétinien par IA pour une condition rare, 100 000 personnes, prévalence 0,5 %, sens 90 %, spéc 95 %, scan 15 £, bilan de confirmation 400 £ :

```
Vrais positifs :  100 000 × 0,005 × 0,90 = 450
Faux positifs : 100 000 × 0,995 × 0,05 = 4 975
Coût = 100 000 × 15 + (450 + 4 975) × 400 = 1,5M + 2,17M = 3,67 M£
Coût par vrai cas ≈ 8 156 £
```

Si le traitement précoce économise 20 000 £ + 1 QALY par cas, le programme se justifie facilement. Élevez la spécificité à 99 % (moins de fausses alarmes) : le coût de bilan tombe à (450 + 995) × 400 = 0,58 M£, total 2,08 M£, coût par cas ≈ **4 622 £** — la spécificité, pas la sensibilité, est là où se gagne l'économie du dépistage à faible prévalence.

## Lien avec l'ingénierie logicielle

L'analyse statique, le scan de sécurité et la détection d'anomalies sont des programmes de dépistage sur des bases de code et de la télémétrie, avec une prévalence de vrai défaut souvent bien en dessous de 1 % par opportunité d'alerte. La même mathématique explique la fatigue d'alertes : un scanner à 95 % de spécificité sur du code à faible prévalence noie les équipes sous les faux positifs, et chaque faux positif coûte de l'attention et érode la confiance jusqu'à ce que les vraies alertes soient ignorées (le terme clinique est *préjudice de dépistage* ; le terme d'ingénierie est *engourdissement du bipeur*). Les remèdes se transposent depuis la santé : élevez la spécificité avant la sensibilité, dépistez des sous-populations à prévalence plus élevée (ciblage basé sur le risque ↔ scan-code-modifié-uniquement), et comptez le coût de triage dans l'économie de l'outil — voir [NNT](../nombre-nécessaire-à-traiter/) et [évaluation clinique de l'IA](../évaluation-clinique-de-l-ia/).

## Pièges

- **Citer sensibilité/spécificité sans la prévalence** — la précision sans VPP est du marketing.
- **Ignorer le surdiagnostic** : trouver une « maladie » indolente qui n'aurait jamais nui déclenche de vrais coûts et préjudices de traitement.
- **Biais de délai d'avance** : une détection plus précoce sans résultats changés gonfle la survie apparente — voir [intervention plus précoce](../intervention-plus-précoce/).

## Sources

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
