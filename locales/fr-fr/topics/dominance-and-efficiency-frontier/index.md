# Dominance et frontière d'efficience

Une option est **dominée** si une autre option coûte moins cher *et* apporte plus. La **frontière d'efficience** est ce qui reste après élimination des options dominées : l'ensemble des choix où obtenir plus exige de payer plus.

## Pourquoi c'est important

Avant tout débat sur les seuils ou les budgets, l'évaluation des technologies de santé commence par éliminer les options que personne ne devrait jamais choisir. Placer chaque option sur un plan coût/effet et tracer la frontière est un exercice de cinq minutes qui élimine régulièrement la moitié d'une liste présélectionnée. Les comparaisons incrémentales ([ICER](../incremental-cost-effectiveness-ratio/)) ne sont ensuite calculées que *le long de la frontière*, chaque option contre la suivante la moins chère non dominée — jamais contre « ne rien faire » lorsque de meilleures options intermédiaires existent.

## Le calcul

```
Dominance stricte :  A domine B si Coût_A ≤ Coût_B et Effet_A ≥ Effet_B
                     (avec au moins une inégalité stricte)

Dominance étendue :  B est écarté si un mélange de A et C atteint plus d'effet
                     par livre — détecté quand les ICER diminuent en montant
                     le long de la frontière. Les ICER valides de la frontière
                     doivent être croissants.
```

Procédure : trier les options par effet ; retirer les options strictement dominées ; calculer les ICER par paires entre voisins ; retirer toute option dont l'ICER dépasse celui de l'option suivante, plus efficace (dominance étendue) ; répéter jusqu'à ce que les ICER croissent de manière monotone.

## Exemple chiffré

Quatre options pour réduire les rendez-vous manqués (effet = rendez-vous récupérés/an) :

```
Option                Coût/an    Récupérés
Ne rien faire         £0         0
Rappels SMS           £20 000    2 000
Appels téléphoniques  £120 000   2 200
SMS + triage IA       £90 000    3 500
```

Les appels téléphoniques sont **strictement dominés** par SMS + triage IA (coûtent plus, récupèrent moins). Frontière : rien → SMS → SMS + IA.

```
ICER(SMS vs rien)      = 20 000 / 2 000  = £10 par rendez-vous récupéré
ICER(SMS+IA vs SMS)    = (90 000 − 20 000) / (3 500 − 2 000) = £46,67 par rendez-vous
```

Des ICER croissants → frontière valide. Avec environ £160 économisés par rendez-vous hospitalier récupéré (voir [taux de rendez-vous non honorés](../did-not-attend-rate/)), les deux étapes de la frontière valent la peine d'être franchies ; la proposition de centre d'appels téléphoniques ne devrait jamais atteindre le comité.

## Lien avec l'ingénierie logicielle

Construisez le même graphique pour toute décision d'outillage : coût par an sur un axe, résultat mesuré (heures économisées, incidents évités, déploiements rendus possibles) sur l'autre. Les points en haut et à gauche de la frontière sont éliminés avant même qu'on discute budget. Cela transforme la sélection de fournisseurs, de débats sur des listes de fonctionnalités en « vous êtes dominé, la réunion est terminée ». Cela met aussi en lumière le schéma classique en entreprise consistant à acheter l'option la plus chère pour un gain marginal — légitime seulement si le prix incrémental par unité incrémentale est un prix que l'organisation accepterait sciemment de payer.

## Pièges

- **Comparer chaque option à la référence de base** plutôt qu'à l'option suivante sur la frontière — cela flatte les options coûteuses en masquant des quasi-équivalents moins chers.
- **Des scores d'effet à une seule dimension** qui masquent ce qui compte ; si deux résultats comptent, soit les combiner de façon défendable (voir [analyse coût-utilité](../cost-utility-analysis/)), soit présenter deux frontières.
- **Oublier l'incertitude** : des options proches de la frontière peuvent échanger leurs places sous [analyse de sensibilité](../sensitivity-analysis/).

## Sources

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
