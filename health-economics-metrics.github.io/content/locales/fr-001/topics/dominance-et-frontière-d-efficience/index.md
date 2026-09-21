# Dominance et Frontière d'Efficience

Une option est **dominée** si une autre option coûte moins *et* livre plus. La **frontière d'efficience** est ce qui reste après élimination des options dominées : l'ensemble de choix où obtenir plus nécessite de payer plus.

## Pourquoi c'est important

Avant tout débat sur les seuils ou les budgets, l'évaluation des technologies de santé élimine d'abord les options que personne ne devrait jamais choisir. Tracer chaque option sur un plan coût-contre-effet et dessiner la frontière est un exercice de cinq minutes qui tue régulièrement la moitié d'une liste restreinte. Les comparaisons incrémentales ([RCEI](../ratio-coût-efficacité-incrémental/)) ne sont alors calculées que *le long de la frontière*, chaque option contre la suivante la moins chère non dominée — jamais contre « ne rien faire » lorsque de meilleures options intermédiaires existent.

## Le calcul

```
Dominance stricte :   A domine B si Coût_A ≤ Coût_B et Effet_A ≥ Effet_B
                    (avec au moins une inégalité stricte)

Dominance étendue : B est écarté si un mélange de A et C atteint plus d'effet
                    par livre — détecté quand les RCEI diminuent en montant
                    sur la frontière. Les RCEI valides de la frontière doivent être croissants.
```

Procédure : triez les options par effet ; éliminez les strictement dominées ; calculez les RCEI par paires entre voisines ; éliminez toute option dont le RCEI dépasse celui de l'option suivante plus efficace (dominance étendue) ; répétez jusqu'à ce que les RCEI augmentent de manière monotone.

## Exemple résolu

Quatre options pour réduire les rendez-vous manqués (effet = rendez-vous récupérés/an) :

```
Option          Coût/an    Récupérés
Ne rien faire   0 £        0
Rappels SMS     20 000 £   2 000
Appels téléphoniques   120 000 £  2 200
SMS + triage IA 90 000 £   3 500
```

Les appels téléphoniques sont **strictement dominés** par SMS + triage IA (coûtent plus, récupèrent moins). Frontière : rien → SMS → SMS + IA.

```
RCEI(SMS vs rien)   = 20 000 / 2 000  = 10 £ par rendez-vous récupéré
RCEI(SMS+IA vs SMS)    = (90 000 − 20 000) / (3 500 − 2 000) = 46,67 £ par rendez-vous
```

RCEI croissants → frontière valide. À environ 160 £ économisés par rendez-vous hospitalier récupéré (voir [taux de non-présentation](../taux-de-non-présentation/)), les deux étapes de la frontière valent la peine ; la proposition de centre d'appels ne devrait jamais atteindre le comité.

## Lien avec l'ingénierie logicielle

Construisez le même graphique pour toute décision d'outillage : coût par an sur un axe, résultat mesuré (heures économisées, incidents évités, déploiements activés) sur l'autre. Les points en haut-à-gauche de la frontière sont éliminés avant que quiconque ne discute du budget. Cela recadre la sélection de fournisseur des débats de liste de fonctionnalités vers « vous êtes dominé ; la réunion est terminée ». Cela expose aussi le schéma d'entreprise courant consistant à acheter l'option la plus chère pour un gain marginal — légitime uniquement si le prix incrémental par unité incrémentale est un prix que l'organisation paierait en connaissance de cause.

## Pièges

- **Comparer tout à la ligne de base** plutôt qu'à l'option suivante sur la frontière — cela flatte les options coûteuses en cachant des quasi-équivalents moins chers.
- **Scores d'effet à dimension unique** qui cachent ce qui compte ; si deux résultats comptent, soit combinez-les de manière défendable (voir [analyse coût-utilité](../analyse-coût-utilité/)) soit montrez deux frontières.
- **Oublier l'incertitude** : les options proches de la frontière peuvent échanger leurs places sous [analyse de sensibilité](../analyse-de-sensibilité/).

## Sources

- Glossaire du York Health Economics Consortium : dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
