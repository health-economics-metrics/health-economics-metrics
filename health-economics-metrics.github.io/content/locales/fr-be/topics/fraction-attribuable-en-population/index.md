# Fraction attribuable en population (PAF)

La PAF est la proportion de la charge de morbidité ou d'un événement dans une population qui est attribuable à l'exposition à un facteur de risque donné — la proportion qui disparaîtrait si l'on supprimait entièrement cette exposition. Elle transforme « ce facteur de risque double vos chances » en un chiffre au niveau de la population autour duquel un planificateur peut réellement planifier : combien cette exposition vaut-elle la peine d'être combattue en nombre de cas et en coût.

## Pourquoi c'est important

Levin a introduit la PAF en 1953 pour répondre à une question étroite et précise : si personne ne fumait, quelle part du cancer du poumon disparaîtrait ? La même arithmétique dimensionne aujourd'hui partout la planification nationale de la prévention, des stratégies contre le tabac et l'obésité aux classements de facteurs de risque de l'étude Global Burden of Disease de l'OMS, car le risque relatif seul dit très peu de l'impact : un facteur de risque peut doubler les chances d'un événement rare sans presque déplacer la charge de morbidité de la population, ou n'augmenter que légèrement celles d'un événement courant et pourtant expliquer l'essentiel des cas. La PAF fait de « le facteur de risque X est dangereux » « supprimer le facteur de risque X éviterait tant de cas par an », le chiffre dont un dossier économique de programme de prévention a réellement besoin. Voir [Économie de la prévention](../économie-de-la-prévention/) pour chiffrer le coût d'agir à partir de ce chiffre une fois qu'on l'a.

## Le calcul

```
PAF = prévalence_exposition × (risque_relatif − 1) / (1 + prévalence_exposition × (risque_relatif − 1))

prévalence_exposition = proportion de la population exposée au facteur de risque (0–1)
risque_relatif        = risque de l'événement chez les exposés par rapport aux non-exposés (ex. 2,5 = 2,5×)

cas_attribuables = cas_totaux × PAF
```

La PAF croît à la fois avec la prévalence de l'exposition et avec le risque relatif — un risque relatif modérément élevé (disons 1,5×) lié à une exposition très courante peut donner une PAF plus grande qu'un risque relatif spectaculaire (disons 5×) lié à une exposition rare. C'est toute la raison pour laquelle elle existe comme chiffre distinct à côté du risque relatif.

## Exemple chiffré

Un facteur de risque est présent chez 30 % de la population (`prévalence_exposition = 0,3`) et multiplie par 2,5 le risque de l'événement (`risque_relatif = 2,5`) :

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31,0 %)

Avec 1 000 cas par an dans la population :
cas_attribuables = 1,000 × 0.3103 ≈ 310 cas par an
```

Un peu moins d'un tiers de la charge annuelle de cet événement est attribuable à l'exposition : la supprimer entièrement (un plafond théorique ; aucune intervention réelle ne supprime 100 % de l'exposition) éviterait environ 310 cas sur 1 000 chaque année.

## Lien avec l'ingénierie logicielle

La PAF est la version épidémiologique de la question « quelle fraction du volume de nos incidents est attribuable à cette cause racine ? » — le même genre de question que se posent les équipes lorsqu'elles mesurent une classe particulière de déploiements ou de dépendances par rapport à l'ensemble des incidents de production, au lieu de considérer chaque incident comme méritant d'être corrigé de la même manière. Une catégorie de cause racine qui apparaît dans la plupart des déploiements et n'a qu'un risque relatif modéré de provoquer un incident peut l'emporter sur une catégorie rare à fort risque relatif quant à l'endroit où diriger d'abord l'effort d'ingénierie — exactement l'observation de la PAF, reformulée.

## Pièges

- **Additionner des PAF entre facteurs de risque** : les PAF de plusieurs facteurs influençant le même événement ne somment pas à 100 % — ensemble, elles peuvent le dépasser, parce que les facteurs interagissent et partagent des voies causales. Traitez chaque PAF comme « si ce seul facteur était supprimé », jamais comme une répartition du risque total.
- **Transférer le risque relatif d'une population à l'autre** : un risque relatif estimé dans une population (prévalence d'exposition de base différente, facteurs de confusion différents) donne une PAF trompeuse lorsqu'on l'applique à la prévalence d'exposition d'une autre population.
- **Confondre la PAF avec le risque attribuable chez les exposés** : la PAF est au niveau de la population et dépend de la prévalence de l'exposition ; le risque attribuable chez les exposés est au niveau individuel et n'en dépend pas. Elles répondent à des questions différentes — n'utilisez pas l'une pour répondre à la question de l'autre.

## Sources

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
