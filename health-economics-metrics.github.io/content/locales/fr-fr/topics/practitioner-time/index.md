# Temps du praticien

Le temps du praticien est la ressource la plus rare dans la plupart des systèmes de santé. Mesurer la valeur du gain de quelques minutes par jour pour un clinicien exige de passer d'un calcul salarial simple au **coût d'opportunité et à la capacité du système** : au sein d'un service de santé national, le temps d'un praticien est un goulot d'étranglement opérationnel rigide, pas une ligne de coût qui se module.

## Pourquoi c'est important

On ne peut pas rapidement produire davantage de généralistes, de consultants ou d'infirmières spécialisées — les filières de formation durent 5 à 15 ans, et les postes vacants sont chroniques. Ainsi, une heure de temps de praticien économisée n'est pas un « salaire évité » (le praticien est toujours payé) ; c'est de la *capacité de goulot d'étranglement libérée*, et la capacité de goulot d'étranglement vaut ce que le goulot d'étranglement produit. C'est pourquoi les revendications du type « fait gagner 10 minutes par consultation » sont à la fois la ligne la plus courante et la plus mal valorisée de la santé numérique.

## Le calcul

Trois niveaux de valorisation, par honnêteté croissante :

```
1. Base salariale :     heures × taux de salaire chargé (coûts unitaires PSSRU)
                        — ce que le temps coûte, pas ce qu'il produit
2. Base de production :  heures → rendez-vous/actes permis × valeur du barème
                        (voir national-tariff-and-unit-costs.md)
3. Base du goulot :     si ce rôle conditionne tout un parcours, heures × valeur
                        du débit de parcours libéré (théorie des contraintes)
```

Décote de fragmentation : le temps économisé par bribes en dessous d'un quantum utilisable (par ex. 3 minutes éparpillées sur une vacation) se redéploie mal ; appliquez un facteur d'utilisation explicite.

## Exemple chiffré

La transcription ambiante fait gagner à un généraliste 2 minutes par consultation, 30 consultations/jour : 60 minutes/jour, soit **220 heures/an par généraliste** sur 220 jours ouvrés.

```
Base salariale :    220 × 80 £ (heure de généraliste chargée, région PSSRU)
                    ≈ 17 600 £/généraliste/an
Base de production : 60 min/jour = 5 consultations supplémentaires de 12 min/jour
                    = 1 100 rendez-vous supplémentaires/généraliste/an × 42 £
                    ≈ 46 200 £/généraliste/an
                    — ou les mêmes rendez-vous absorbés sous forme d'heures
                    supplémentaires réduites et de consultations plus sereines
                    et non précipitées (ligne qualitative)
```

Sur une fédération de 50 généralistes, la capacité en base de production vaut ~2,3 M£/an — à condition que les minutes soient réelles (mesurées, non revendiquées par le fournisseur), consolidées (consultations entières, pas des fragments), et redéployées (voir [économies libérant de la trésorerie vs économies ne libérant pas de trésorerie](../cash-releasing-vs-non-cash-releasing/)).

## Lien avec l'ingénierie logicielle

Le temps d'un ingénieur senior se comporte de façon identique : c'est le goulot d'étranglement à travers lequel passent conceptions, revues et incidents, donc valorisez-le par ce que le goulot conditionne, pas par le salaire. La même valorisation à trois niveaux s'applique à toute affirmation du type « l'IA fait gagner X minutes à chaque développeur » — le calcul salarial flatte les petits nombres ; les questions honnêtes sont de savoir si les minutes se consolident en blocs utilisables et ce que la capacité libérée produit réellement. Voir [optimisation des ressources en aval](../downstream-resource-optimization/) pour le multiplicateur lorsque l'heure économisée appartient à la personne que tout le monde attend.

## Pièges

- **Minutes × salaire = économies** — l'inflation canonique ; c'est de la capacité, et seulement au taux d'utilisation déclaré.
- **Ignorer le problème du quantum** : 12 × économies de 5 minutes ≠ une heure libre.
- **Valoriser tous les rôles de la même façon** : une heure du goulot d'étranglement du parcours vaut plusieurs fois une heure d'un rôle non conditionnant.

## Sources

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, productivité du NHS. <https://www.england.nhs.uk/long-read/nhs-productivity/>
