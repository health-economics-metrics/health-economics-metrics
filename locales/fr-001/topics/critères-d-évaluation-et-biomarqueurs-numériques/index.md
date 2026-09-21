# Critères d'Évaluation et Biomarqueurs Numériques

Un biomarqueur numérique est une mesure physiologique ou comportementale objective collectée via des capteurs (vitesse de marche depuis un téléphone, sommeil depuis un objet connecté, tremblement depuis l'accélérométrie). Un critère d'évaluation numérique est une telle mesure élevée au rang de **résultat d'essai** — utilisé pour démontrer un effet thérapeutique. La promotion de « données émises par l'appareil » à « preuve acceptée par un régulateur » traverse une échelle de validation définie.

## Pourquoi c'est important

Les critères d'évaluation d'essai traditionnels sont épisodiques (visites en clinique tous les 3 mois) et coûteux ; les critères numériques sont continus, écologiques (vie réelle, pas performance en clinique), et bon marché par observation — ils peuvent réduire les essais, détecter les effets plus tôt et permettre des études décentralisées. Le piège est la validation : le cadre accepté (aligné FDA, trois piliers) exige une **vérification/validation analytique** (le capteur mesure la quantité physique avec précision), une **validation clinique** (la mesure reflète l'état clinique qu'elle prétend refléter), et un **aspect significatif de la santé** démontré (les patients se soucient de ce qu'elle capture). Un critère d'évaluation sans les trois est de la télémétrie, pas de la preuve.

## Le calcul

```
Validation analytique : accord avec la référence (voir wearable-validation.md —
                       MAPE, CCC, Bland-Altman)
Validation clinique :   corrélation/discrimination face à des ancres cliniques
                       (validité de groupes connus, réactivité au changement)
Économie du critère d'évaluation :
  événements détectés par patient-année (continu) contre échantillonnage par visite
  puissance de l'essai : les mesures continues réduisent la taille d'échantillon quand
  la variance entre visites domine — N ∝ σ²/Δ², et σ² chute avec un échantillonnage dense
```

## Exemple résolu

Un essai sur la maladie de Parkinson envisage la vitesse de marche depuis un capteur de poignet contre des scores trimestriels notés en clinique :

```
Critère clinique :  4 mesures/patient/an, bruit jour-à-jour élevé
Critère numérique : ~200 mesures passives/patient/an

La variance de l'estimation de changement annuel chute d'environ 5× avec un échantillonnage dense →
la taille d'effet détectable à puissance fixe s'améliore d'environ √5 ≈ 2,2×, ou
de manière équivalente la taille d'échantillon se réduit d'environ 40–60 % pour la même hypothèse.
À 25 000 £ par patient recruté, réduire de 200 patients ≈ 5M£ économisés
par essai — le dossier commercial pour l'investissement de validation
(lui-même peut-être 1–2M£) à travers le pipeline d'un promoteur.
```

## Lien avec l'ingénierie logicielle

Les critères d'évaluation numériques sont une discipline d'ingénierie des données vêtue de clinique : **provenance et versionnage** (les mises à jour d'algorithme en milieu d'étude menacent la comparabilité — le problème [PCCP](../évaluation-réglementaire-de-l-ia/) sous forme d'essai ; verrouillez la version et validez le pont) ; **conception des données manquantes** (les lacunes de temps de port sont informatives, pas aléatoires — voir [validation des objets connectés](../validation-des-objets-connectés/) ; les choix d'imputation sont des allégations scientifiques) ; et **décisions de répartition edge/cloud** qui changent quel signal brut est même récupérable plus tard. Les équipes qui traitent le pipeline de mesure comme un logiciel réglementé dès le premier jour — testé, versionné, documenté — achètent à moindre coût la crédibilité de leurs critères d'évaluation ; adapter la validation a posteriori à un pipeline développé rapidement est là où meurent les programmes de critères d'évaluation numériques.

## Pièges

- **Corrélation-avec-la-clinique comme validation complète** : correspondre à une mesure clinique imparfaite prouve l'héritage, pas la vérité ; validez contre l'aspect significatif de la santé.
- **Risque réglementaire de critère d'évaluation nouveau** : un critère sans précédent peut être scientifiquement supérieur et pourtant couler une soumission — engagez les régulateurs tôt (des programmes de qualification existent).
- **Décalage capteur-population** : validation sur des poignets jeunes et sains, déploiement sur des patients âgés avec des différences de tremblement et de pigmentation que le PPG n'a jamais vues.
- **Dérive des caractéristiques** : réentraîner l'algorithme de marche sur de nouvelles données redéfinit silencieusement le critère d'évaluation en milieu d'étude.

## Sources

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), ressources sur les critères d'évaluation numériques. <https://dimesociety.org/>
