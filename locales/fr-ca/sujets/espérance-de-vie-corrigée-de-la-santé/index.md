# Espérance de Vie Corrigée de la Santé (EVCS)

L'EVCS est un résumé au niveau populationnel : le nombre d'années qu'une personne peut espérer vivre *en bonne santé complète*, en actualisant les années passées avec maladie ou invalidité. L'EVCS mondiale à la naissance était d'environ 61,9 ans contre une espérance de vie de 73,3 (OMS, données 2019) — l'humanité vit sa dernière décennie, en moyenne, en moins que bonne santé complète.

## Pourquoi c'est important

L'EVCS est la métrique étoile polaire de la politique de santé nationale et mondiale — le numérateur des objectifs de « vieillissement en bonne santé » et l'écart qu'elle expose (espérance de vie moins EVCS) est le fardeau que la prévention, l'intervention précoce et la gestion des maladies chroniques visent à combler. Les stratégies de santé numérique au niveau ministériel sont justifiées en termes d'EVCS ; un portefeuille d'applications, de services de dépistage et de programmes de surveillance se répercute finalement ici.

## Le calcul

Le calcul standard est la **méthode de Sullivan** :

```
EVCS_âge_x = Σ (années-personne de table de vie à chaque âge ≥ x × proportion en bonne santé complète)
             / survivants à l'âge x

« proportion en bonne santé complète » = 1 − Σ (prévalence_condition × pondération d'invalidité)
```

Entrées : une table de vie standard plus la prévalence et les pondérations d'invalidité pour les états de santé (issues des données Global Burden of Disease). L'EVCS se rapporte aux [AVCI](../année-de-vie-corrigée-du-facteur-invalidité/) — le fardeau populationnel d'AVCI et l'écart d'EVCS sont deux vues de la même santé perdue.

## Exemple résolu

Un programme national numérique d'hypertension : 500 000 inscrits, le contrôle moyen de la pression artérielle s'améliore suffisamment pour réduire l'incidence des AVC de 0,2 point de pourcentage/an. Modélisé sur la durée de vie de la cohorte, les AVC évités économisent 15 000 années pondérées par invalidité (AVI à pondération 0,32 plus APVP d'AVC mortels).

```
Contribution à l'EVCS ≈ 15 000 années saines / 500 000 personnes
                  ≈ 0,03 année (≈ 11 jours) d'EVCS par personne inscrite
```

Onze jours semble petit — mais à l'échelle populationnelle, c'est ainsi que les métriques nationales bougent réellement : les ministères achètent des millions de petits gains par personne. Cette arithmétique montre aussi pourquoi **la portée domine** : une intervention deux fois plus efficace avec un dixième de l'inscription déplace l'EVCS cinq fois moins. Voir [portée et équité](../portée-et-équité/).

## Lien avec l'ingénierie logicielle

L'EVCS est un modèle de métrique de santé de parc : **durée de vie de service espérée × proportion de cette vie passée en bonne santé**. Une équipe de plateforme peut calculer une « espérance de vie de service saine » à travers son parc — années pendant lesquelles un service est censé fonctionner, actualisées par le temps passé dans des états dégradés, obsolètes ou d'incident (pondérations issues du déficit d'ANS). Cela recadre la fiabilité de la disponibilité ponctuelle vers la santé de vie entière, et dirige la remédiation vers les systèmes qui tirent l'EVCS du parc vers le bas.

## Pièges

- **L'EVCS bouge lentement et de manière multicausale** — aucune intervention individuelle « ne déplace l'EVCS » de manière mesurable ; revendiquez la contribution modélisée, pas la statistique nationale.
- **Les données de prévalence ont du retard** de plusieurs années ; les gains récents n'apparaîtront pas dans l'EVCS officielle.
- **Comparer l'EVCS entre pays** avec une mesure d'état de santé différente est périlleux ; utilisez-la longitudinalement au sein d'un système.

## Sources

- Registre d'indicateurs de l'OMS : EVCS. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Étude Global Burden of Disease (IHME). <https://www.healthdata.org/research-analysis/gbd>
