# Années de Vie Gagnées (AVG)

Les années de vie gagnées représentent la survie supplémentaire attribuable à une intervention, sans ajustement de qualité : l'aire entre les courbes de survie avec et sans elle. L'année de vie gagnée à valeur égale (evLYG) est une variante moderne qui crédite toute extension de vie de manière égale.

## Pourquoi c'est important

Les AVG sont le résultat de santé le plus brut : combien de temps les gens vivent-ils de plus ? C'est important lorsque les données de qualité manquent, lors de comparaisons face à des audiences sceptiques envers les QALY, et en oncologie où les courbes de survie sont le résultat principal des essais. L'**evLYG** (utilisé par l'institut ICER américain aux côtés du coût/QALY) existe pour une raison éthique : les QALY valorisent une année de vie prolongée par l'utilité du patient, donc prolonger la vie de quelqu'un avec un handicap « compte moins » — l'evLYG valorise chaque année prolongée à une utilité fixe, éliminant cette discrimination.

## Le calcul

```
AVG = survie moyenne_nouvelle − survie moyenne_comparateur
    = aire entre les courbes de survie (restreinte à l'horizon temporel)

Vue QALY de l'extension de vie :  extension × utilité du patient
Vue evLYG de l'extension de vie : extension × utilité fixe (ICER utilise ~0,851,
                              l'utilité moyenne de la population américaine)
```

Les deux sont [actualisées](../actualisation-et-préférence-temporelle/) dans les modèles économiques.

## Exemple résolu

Un algorithme d'alerte précoce de sepsis dans un hôpital : la modélisation montre que des antibiotiques plus précoces préviennent 12 décès/an ; l'âge moyen de ces patients donne 8 années de vie restantes chacun à une utilité de 0,7.

```
AVG   = 12 × 8            = 96 années de vie/an
QALY = 96 × 0,7          = 67,2
evLYG = 96 × 0,851        = 81,7
```

À 20 000 £ par QALY, le cadrage QALY valorise la survie à 1,34 M£/an ; le cadrage evLYG à 1,63 M£. L'écart est exactement le jugement éthique sur la question de savoir si une année de vie à utilité 0,7 vaut 70 % d'une année « complète ». Les dossiers sérieux rapportent les deux.

## Lien avec l'ingénierie logicielle

- L'analyse de survie est la boîte à outils partagée : les courbes de Kaplan-Meier pour les patients et pour les *services* (temps-jusqu'à-la-panne, temps-jusqu'à-l'attrition) sont la même mathématique. Les « années de service gagnées » d'un investissement en fiabilité = aire entre les courbes de survie avec/sans le système — un cadrage plus honnête que les allégations ponctuelles de MTTF.
- L'evLYG porte aussi un avertissement de conception de métrique pour l'ingénierie : toute métrique de productivité qui pondère le résultat par un facteur de « qualité d'équipe » sous-évaluera systématiquement les améliorations pour les équipes contraintes ou en difficulté — parfois vous voulez la variante à valeur égale exprès.

## Pièges

- **Médiane contre moyenne de survie** : les modèles économiques ont besoin de la moyenne (aire sous la courbe) ; les essais titrent souvent la médiane. Elles diffèrent beaucoup dans les distributions asymétriques.
- **L'extrapolation au-delà du suivi de l'essai** domine les AVG modélisées en maladie chronique — déclarez le modèle d'extrapolation et testez-le en [analyse de sensibilité](../analyse-de-sensibilité/).
- **Revendiquer des décès prévenus à partir de données observationnelles avant/après** sans ajuster pour le mix de cas et les tendances séculaires.

## Sources

- Glossaire du York Health Economics Consortium : années de vie gagnées. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
