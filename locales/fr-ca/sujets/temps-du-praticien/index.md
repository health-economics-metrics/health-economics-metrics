# Temps du Praticien

Le temps du praticien est la ressource la plus rare dans la plupart des systèmes de santé. Mesurer la valeur d'économiser des minutes quotidiennes à un clinicien nécessite de passer d'une arithmétique salariale simple au **coût d'opportunité et à la capacité système** : au sein d'un service de santé national, le temps d'un praticien est un goulot d'étranglement opérationnel rigide, pas une ligne de coût qui se plie.

## Pourquoi c'est important

Vous ne pouvez pas rapidement créer plus de médecins traitants, de consultants ou d'infirmières spécialisées — les filières de formation durent 5 à 15 ans, et les postes vacants sont chroniques. Donc une heure de temps de praticien économisée n'est pas un « salaire évité » (le praticien est toujours payé) ; c'est de la *capacité de goulot d'étranglement libérée*, et la capacité de goulot d'étranglement vaut ce que produit le goulot d'étranglement. C'est pourquoi les allégations « économise 10 minutes par consultation » sont simultanément la ligne la plus commune et la plus mal tarifée en santé numérique.

## Le calcul

Trois niveaux de valorisation, en honnêteté croissante :

```
1. Base salariale :        heures × taux salarial chargé (coûts unitaires PSSRU)
                      — ce que coûte le temps, pas ce qu'il produit
2. Base de résultat :      heures → rendez-vous/procédures permis × valeur du régime
                      (voir national-tariff-and-unit-costs.md)
3. Base de goulot d'étranglement :  si ce rôle conditionne tout un parcours, heures × valeur
                      du débit de parcours libéré (théorie des contraintes)
```

Décote de fragmentation : le temps économisé en fragments sous un quantum utilisable (par ex., 3 minutes dispersées dans une clinique) se redéploie mal ; appliquez un facteur d'utilisation déclaré.

## Exemple résolu

La transcription ambiante économise à un médecin traitant 2 minutes par consultation, 30 consultations/jour : 60 minutes/jour, ou **220 heures/an par médecin traitant** sur une année de travail de 220 jours.

```
Base salariale :   220 × 80 £ (heure de médecin traitant chargée, région PSSRU) ≈ 17 600 £/médecin/an
Base de résultat : 60 min/jour = 5 consultations de 12 min supplémentaires/jour
              = 1 100 rendez-vous supplémentaires/médecin/an × 42 £ ≈ 46 200 £/médecin/an
              — ou les mêmes rendez-vous absorbés comme heures supplémentaires réduites et
              consultations plus sûres et sans précipitation (ligne qualitative)
```

À travers une fédération de 50 médecins traitants, la capacité de base de résultat vaut ~2,3 M£/an — à condition que les minutes soient réelles (mesurées, pas revendiquées par le fournisseur), consolidées (consultations entières, pas fragments), et redéployées (voir [économies libératrices de trésorerie contre non libératrices](../économies-libératrices-de-trésorerie-contre-non-libératrices/)).

## Lien avec l'ingénierie logicielle

Le temps de l'ingénieur senior se comporte de manière identique : c'est le goulot d'étranglement à travers lequel circulent les conceptions, les revues et les incidents, donc valorisez-le par ce que conditionne le goulot d'étranglement, pas par le salaire. La même valorisation à trois niveaux s'applique à toute allégation « l'IA économise à chaque développeur X minutes » — l'arithmétique salariale flatte les petits nombres ; les questions honnêtes sont de savoir si les minutes se consolident en blocs utilisables et ce que produit réellement la capacité libérée. Voir [optimisation des ressources en aval](../optimisation-des-ressources-en-aval/) pour le multiplicateur lorsque l'heure économisée appartient à la personne que tout le monde attend.

## Pièges

- **Minutes × salaire = économies** — l'inflation canonique ; c'est de la capacité, et seulement à l'utilisation déclarée.
- **Ignorer le problème du quantum** : 12 × économies de 5 minutes ≠ une heure libre.
- **Valoriser tous les rôles également** : une heure du goulot d'étranglement de parcours vaut plusieurs fois une heure d'un rôle non bloquant.

## Sources

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, productivité du NHS. <https://www.england.nhs.uk/long-read/nhs-productivity/>
