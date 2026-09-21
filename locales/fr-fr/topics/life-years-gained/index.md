# Années de vie gagnées (Life-Years Gained, LYG)

Les années de vie gagnées représentent la survie supplémentaire attribuable à une intervention, sans ajustement à la qualité : l'aire entre les courbes de survie avec et sans l'intervention. L'année de vie gagnée à valeur égale (equal-value life year gained, evLYG) est une variante moderne qui valorise toute prolongation de vie de manière égale.

## Pourquoi c'est important

La LYG est le résultat de santé le plus brut : combien de temps de plus les gens vivent-ils ? Elle compte lorsque les données de qualité de vie manquent, quand on s'adresse à des publics sceptiques envers les QALYs, et en oncologie où les courbes de survie sont le résultat principal des essais. L'**evLYG** (utilisée par l'institut ICER américain aux côtés du coût/QALY) existe pour une raison éthique : les QALYs valorisent une année de vie prolongée selon l'utilité du patient, si bien que prolonger la vie d'une personne en situation de handicap « compte moins » — l'evLYG valorise chaque année prolongée à une utilité fixe, supprimant cette discrimination.

## Le calcul

```
LYG = survie moyenne_nouveau − survie moyenne_comparateur
    = aire entre les courbes de survie (restreinte à l'horizon temporel)

Vision QALY de la prolongation de vie :   prolongation × utilité du patient
Vision evLYG de la prolongation de vie :  prolongation × utilité fixe (ICER
                                          utilise ~0,851, l'utilité moyenne
                                          de la population américaine)
```

Les deux sont [actualisées](../discounting-and-time-preference/) dans les modèles économiques.

## Exemple chiffré

Un algorithme d'alerte précoce de sepsis dans un hôpital : la modélisation montre qu'une antibiothérapie plus précoce évite 12 décès/an ; l'âge moyen de ces patients donne 8 années de vie restantes chacun à une utilité de 0,7.

```
LYG   = 12 × 8            = 96 années de vie/an
QALYs = 96 × 0,7          = 67,2
evLYG = 96 × 0,851        = 81,7
```

À £20 000 par QALY, le cadrage QALY valorise la survie à £1,34M/an ; le cadrage evLYG à £1,63M. L'écart correspond exactement au jugement éthique sur la question de savoir si une année de vie à utilité 0,7 vaut 70 % d'une année « pleine ». Les dossiers sérieux rapportent les deux.

## Lien avec l'ingénierie logicielle

- L'analyse de survie est la boîte à outils partagée : les courbes de Kaplan-Meier pour les patients et pour les *services* (temps avant panne, temps avant attrition) relèvent des mêmes mathématiques. Les « années-service gagnées » d'un investissement en fiabilité = aire entre les courbes de survie du système avec/sans — un cadrage plus honnête que les affirmations ponctuelles de MTTF.
- L'evLYG porte aussi un avertissement de conception de métrique pour l'ingénierie : toute métrique de productivité qui pondère la production par un facteur de « qualité d'équipe » sous-évaluera systématiquement les améliorations pour les équipes contraintes ou en difficulté — parfois, on veut délibérément la variante à valeur égale.

## Pièges

- **Survie médiane vs moyenne** : les modèles économiques ont besoin de la moyenne (aire sous la courbe) ; les essais affichent souvent la médiane en titre. Elles diffèrent beaucoup dans les distributions asymétriques.
- **L'extrapolation au-delà du suivi de l'essai** domine la LYG modélisée dans les maladies chroniques — précisez le modèle d'extrapolation et testez-le en [analyse de sensibilité](../sensitivity-analysis/).
- **Affirmer des décès évités à partir de données observationnelles avant/après** sans ajustement au case-mix et aux tendances séculaires.

## Sources

- York Health Economics Consortium, glossaire : life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, « Cost-Effectiveness, the QALY, and the evLYG. » <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
