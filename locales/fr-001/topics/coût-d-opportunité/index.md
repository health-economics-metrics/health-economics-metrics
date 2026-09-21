# Coût d'Opportunité

Le coût d'opportunité est la valeur de la meilleure alternative à laquelle vous renoncez lorsque vous engagez une ressource. Dans un système de santé à budget fixe, dépenser 1 million £ pour une chose signifie 1 million £ de santé *non* produite ailleurs.

## Pourquoi c'est important

Le coût d'opportunité est l'idée la plus profonde en économie de la santé, et celle que les ingénieurs logiciels sautent le plus souvent. Les budgets de santé sont fixes pour une année donnée, donc une nouvelle technologie n'est jamais financée avec de l'argent « supplémentaire » — elle déplace quelque chose. La question qu'un payeur pose réellement n'est pas « est-ce bon ? » mais « est-ce meilleur que ce que le même argent achète actuellement ? »

C'est pourquoi les seuils de coût-efficacité existent tout court : le seuil est une estimation de la santé que l'argent achète à la marge du système actuel. Voir [seuils de disposition à payer](../seuils-de-disposition-à-payer/).

## Le calcul

Il n'y a pas de formule unique ; le coût d'opportunité est une discipline de comparaison :

```
Coût d'opportunité de choisir A = valeur de la meilleure alternative B renoncée
Gain net de A = valeur(A) − valeur(B)
```

Le repère empirique : Claxton et al. (2015) ont estimé que le NHS produit un QALY pour environ **13 000 £** à la marge. Donc 13 000 £ dépensés sur une technologie produisant moins d'un QALY rendent la nation *moins* saine, même si la technologie « fonctionne ».

## Exemple résolu

Le budget de transformation d'un trust du NHS peut financer exactement l'une de :

- **Option A** : logiciel de planification électronique — économise 400 000 £/an en dépenses de personnel d'agence.
- **Option B** : logiciel de coordination des sorties — économise 2 000 journées-lits/an. À un coût marginal d'environ 150 £ par journée-lit réellement libérée, cela fait 300 000 £/an, plus un traitement plus précoce pour les patients en attente.

Financer A signifie renoncer à B. Le coût d'opportunité de A est les 300 000 £ de B + le bénéfice patient ; le dossier *net* pour A n'est que la différence, pas le titre de 400 000 £ de A. Tout dossier de décision qui compare une proposition à « ne rien faire » plutôt qu'à la meilleure alternative surestime sa valeur.

## Lien avec l'ingénierie logicielle

La capacité d'ingénierie est aussi un budget fixe — des créneaux de feuille de route, pas des livres. Une équipe de plateforme qui finance l'outil A économisant des heures-ingénieur à 500 £/heure alors que l'outil B livre la même chose à 200 £/heure détruit de la capacité, exactement comme un système de santé finançant un médicament à 40 000 £/QALY déplace des soins à 13 000 £/QALY. La discipline se transpose directement :

- Nommez toujours le comparateur (« face à quoi ? »).
- Valorisez le temps d'ingénieur par ce qu'il produirait autrement, pas seulement par le salaire.
- Traitez « il nous reste du budget » comme le début de l'analyse, pas la fin.

## Pièges

- **Comparer à rien.** Le comparateur correct est le meilleur usage suivant de l'argent, qui est rarement « ne rien faire ».
- **Supposer que le temps économisé a un coût d'opportunité nul.** Le temps économisé n'est précieux que s'il est redéployé vers quelque chose de précieux — voir [économies libératrices de trésorerie contre non libératrices](../économies-libératrices-de-trésorerie-contre-non-libératrices/).
- **Ignorer le déplacement.** « Le budget s'étendra pour s'adapter » n'est presque jamais vrai dans un service de santé national en cours d'année.

## Sources

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- Glossaire du York Health Economics Consortium. <https://yhec.co.uk/glossary/opportunity-cost/>
