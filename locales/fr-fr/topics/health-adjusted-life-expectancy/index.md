# Espérance de vie ajustée sur la santé (HALE)

La HALE est un indicateur synthétique au niveau de la population : le nombre d'années qu'une personne peut espérer vivre *en pleine santé*, en déduisant les années passées en maladie ou en incapacité. La HALE mondiale à la naissance était d'environ 61,9 ans contre une espérance de vie de 73,3 ans (OMS, données 2019) — l'humanité vit sa dernière décennie, en moyenne, en état de santé imparfait.

## Pourquoi c'est important

La HALE est l'indicateur polaire de la politique de santé nationale et mondiale — le numérateur des objectifs de « vieillissement en bonne santé », et l'écart qu'elle révèle (espérance de vie moins HALE) est le fardeau que la prévention, l'intervention précoce et la gestion des maladies chroniques visent à réduire. Les stratégies de santé numérique au niveau ministériel sont justifiées en termes de HALE ; un portefeuille d'applications, de services de dépistage et de programmes de surveillance finit par s'y agréger.

## Le calcul

Le calcul standard est la **méthode de Sullivan** :

```
HALE_âge_x = Σ (années-personnes de la table de mortalité à chaque
              âge ≥ x × proportion en pleine santé)
             / survivants à l'âge x

« proportion en pleine santé » = 1 − Σ (prévalence_pathologie ×
                                        poids d'incapacité)
```

Intrants : une table de mortalité standard plus la prévalence et les poids d'incapacité pour les états de santé (issus des données de l'étude Global Burden of Disease). La HALE se rattache aux [DALY](../disability-adjusted-life-year/) — le fardeau de DALY de la population et l'écart de HALE sont deux vues de la même santé perdue.

## Exemple chiffré

Un programme national numérique d'hypertension : 500 000 inscrits, le contrôle moyen de la pression artérielle s'améliore suffisamment pour réduire l'incidence des AVC de 0,2 point de pourcentage/an. Modélisé sur la durée de vie de la cohorte, les AVC évités permettent d'économiser 15 000 années pondérées par l'incapacité (YLD à un poids de 0,32 plus YLL issues des AVC mortels).

```
Contribution à la HALE ≈ 15 000 années en bonne santé / 500 000 personnes
                       ≈ 0,03 année (≈ 11 jours) de HALE par personne inscrite
```

Onze jours, cela paraît peu — mais à l'échelle de la population, c'est ainsi que les indicateurs nationaux évoluent réellement : les ministères achètent des millions de minuscules gains par personne. Cette arithmétique montre aussi pourquoi **la portée domine** : une intervention deux fois plus efficace avec un dixième des inscrits fait évoluer la HALE cinq fois moins. Voir [portée et équité](../reach-and-equity/).

## Lien avec l'ingénierie logicielle

La HALE est un modèle d'indicateur de santé de parc : **durée de service attendue × proportion de cette durée passée en bon état**. Une équipe plateforme peut calculer une « espérance de durée de service en bon état » sur son parc : les années pendant lesquelles un service est censé fonctionner, pondérées par le temps passé en état dégradé, obsolète ou en incident (poids issus des écarts de SLO). Cela recadre la fiabilité, qui passe d'une disponibilité ponctuelle à une santé sur toute la durée de vie, et oriente la remédiation vers les systèmes qui tirent vers le bas la HALE du parc.

## Pièges

- **La HALE évolue lentement et de façon multicausale** — aucune intervention isolée ne « fait bouger la HALE » de manière mesurable ; revendiquez la contribution modélisée, pas la statistique nationale.
- **Les données de prévalence accusent un retard** de plusieurs années ; les gains récents n'apparaîtront pas dans la HALE officielle.
- **Comparer la HALE entre pays** aux mesures d'états de santé différentes est périlleux ; utilisez-la de façon longitudinale au sein d'un même système.

## Sources

- Registre d'indicateurs de l'OMS : HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Étude Global Burden of Disease (IHME). <https://www.healthdata.org/research-analysis/gbd>
