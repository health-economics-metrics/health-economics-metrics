# Coût d'opportunité

Le coût d'opportunité est la valeur de la meilleure alternative à laquelle on renonce en engageant une ressource. Dans un système de santé à budget fixe, dépenser 1 million de £ sur une chose signifie 1 million de £ de santé *non produite* ailleurs.

## Pourquoi c'est important

Le coût d'opportunité est l'idée la plus profonde de l'économie de la santé, et celle que les ingénieurs logiciels ignorent le plus souvent. Les budgets de santé sont fixes pour une année donnée, donc une nouvelle technologie n'est jamais financée avec de l'argent « en plus » — elle en déplace une autre. La question qu'un payeur se pose réellement n'est pas « est-ce bon ? » mais « est-ce meilleur que ce que cet argent achète actuellement ? ».

C'est pourquoi les seuils de coût-efficacité existent : le seuil est une estimation de la santé que l'argent achète à la marge du système actuel. Voir [seuils de consentement à payer](../willingness-to-pay-thresholds/).

## Le calcul

Il n'existe pas de formule unique ; le coût d'opportunité est une discipline de comparaison :

```
Coût d'opportunité du choix de A = valeur de la meilleure alternative B abandonnée
Gain net de A = valeur(A) − valeur(B)
```

Le repère empirique : Claxton et al. (2015) ont estimé que le NHS produit un QALY pour environ **13 000 £** à la marge. Donc 13 000 £ dépensés sur une technologie qui produit moins d'un QALY rendent la nation *moins* en bonne santé, même si la technologie « fonctionne ».

## Exemple chiffré

Le budget de transformation d'un trust du NHS ne peut financer que l'une des deux options suivantes :

- **Option A** : logiciel de planification des équipes (e-rostering) — économise 400 000 £/an de dépenses de personnel d'intérim.
- **Option B** : logiciel de coordination des sorties — économise 2 000 journées-lits/an. À un coût marginal d'environ 150 £ par journée-lit réellement libérée, cela représente 300 000 £/an, plus un traitement plus précoce pour les patients en attente.

Financer A signifie renoncer à B. Le coût d'opportunité de A est constitué des 300 000 £ de B plus le bénéfice patient ; le cas *net* en faveur de A n'est que la différence, pas les 400 000 £ affichés par A. Tout dossier d'investissement qui compare une proposition à « ne rien faire » plutôt qu'à la meilleure alternative surestime sa valeur.

## Lien avec l'ingénierie logicielle

La capacité d'ingénierie est aussi un budget fixe — des créneaux de feuille de route, pas des livres sterling. Une équipe de plateforme qui finance un outil A économisant des heures-ingénieur à 500 £/heure alors que l'outil B délivre la même chose à 200 £/heure détruit de la capacité, exactement comme un système de santé finançant un médicament à 40 000 £/QALY déplace des soins à 13 000 £/QALY. La discipline se transpose directement :

- Toujours nommer le comparateur (« par rapport à quoi ? »).
- Valoriser le temps de l'ingénieur à ce qu'il produirait autrement, pas seulement à son salaire.
- Traiter « il nous reste du budget » comme le début de l'analyse, pas sa fin.

## Pièges

- **Comparer à rien.** Le bon comparateur est le meilleur usage suivant de l'argent, ce qui est rarement « ne rien faire ».
- **Supposer que le temps économisé a un coût d'opportunité nul.** Le temps économisé n'a de la valeur que s'il est redéployé vers quelque chose de valeur — voir [économies libérant de la trésorerie vs économies ne libérant pas de trésorerie](../cash-releasing-vs-non-cash-releasing/).
- **Ignorer le déplacement.** « Le budget va s'élargir pour s'adapter » n'est presque jamais vrai dans un service de santé national en cours d'exercice.

## Sources

- Claxton K, et al. « Methods for the estimation of the NICE cost effectiveness threshold. » Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- Glossaire du York Health Economics Consortium. <https://yhec.co.uk/glossary/opportunity-cost/>
