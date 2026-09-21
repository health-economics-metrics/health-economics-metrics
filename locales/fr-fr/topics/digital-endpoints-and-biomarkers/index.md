# Critères d'évaluation et biomarqueurs numériques

Un biomarqueur numérique est une mesure physiologique ou comportementale objective recueillie via des capteurs (vitesse de marche depuis un téléphone, sommeil depuis un objet connecté, tremblement depuis l'accélérométrie). Un critère d'évaluation numérique (« digital endpoint ») est une telle mesure élevée au rang de **résultat d'essai clinique** — utilisée pour démontrer un effet thérapeutique. Le passage de « données émises par l'appareil » à « preuve acceptée par un régulateur » suit une échelle de validation bien définie.

## Pourquoi c'est important

Les critères d'évaluation traditionnels des essais sont épisodiques (visites en clinique tous les 3 mois) et coûteux ; les critères numériques sont continus, écologiques (la vraie vie, pas la performance en clinique) et peu coûteux par observation — ils peuvent réduire la taille des essais, détecter des effets plus tôt et permettre des études décentralisées. Le piège, c'est la validation : le cadre reconnu (aligné FDA, trois piliers) exige une **vérification/validation analytique** (le capteur mesure la grandeur physique avec précision), une **validation clinique** (la mesure reflète bien l'état clinique qu'elle prétend refléter), et une démonstration d'un **aspect significatif de la santé** (« meaningful aspect of health » — les patients se soucient de ce qu'elle capture). Un critère d'évaluation sans ces trois éléments est de la télémétrie, pas une preuve.

## Le calcul

```
Validation analytique : concordance avec la référence (voir wearable-validation.md —
                        MAPE, CCC, Bland-Altman)
Validation clinique :   corrélation/discrimination par rapport aux ancres cliniques
                        (validité de groupes connus, sensibilité au changement)
Économie du critère d'évaluation :
  événements détectés par patient-année (continu) vs échantillonnage par visite
  puissance de l'essai : les mesures continues réduisent la taille d'échantillon
  quand la variance inter-visites domine — N ∝ σ²/Δ², et σ² diminue avec
  un échantillonnage dense
```

## Exemple chiffré

Un essai sur la maladie de Parkinson compare la vitesse de marche mesurée par un capteur au poignet à des scores évalués en clinique tous les trimestres :

```
Critère en clinique :   4 mesures/patient/an, forte variabilité jour à jour
Critère numérique :     ~200 mesures passives/patient/an

La variance de l'estimation du changement annuel diminue d'environ 5× avec
un échantillonnage dense → la taille d'effet détectable à puissance fixe
s'améliore d'environ √5 ≈ 2,2×, soit une réduction d'environ 40–60 % de la
taille d'échantillon pour la même hypothèse.
À £25 000 par patient inclus, réduire de 200 patients ≈ £5M économisés
par essai — le dossier commercial de l'investissement en validation
(lui-même de l'ordre de £1–2M) sur l'ensemble du portefeuille d'un promoteur.
```

## Lien avec l'ingénierie logicielle

Les critères d'évaluation numériques relèvent d'une discipline d'ingénierie des données déguisée en clinique : **traçabilité et versionnage** (une mise à jour d'algorithme en cours d'étude menace la comparabilité — le problème du [PCCP](../ai-regulatory-evaluation/) sous forme d'essai clinique ; verrouillez la version et validez les ponts) ; **conception face aux données manquantes** (les périodes sans port du capteur sont informatives, pas aléatoires — voir [validation des objets connectés](../wearable-validation/) ; les choix d'imputation sont des affirmations scientifiques) ; et **décisions de répartition edge/cloud** qui changent ce qui, plus tard, reste même récupérable comme signal brut. Les équipes qui traitent le pipeline de mesure comme un logiciel réglementé dès le premier jour — testé, versionné, documenté — achètent la crédibilité de leurs critères d'évaluation à bas coût ; retro-adapter la validation sur un pipeline construit à la hâte est là où meurent les programmes de critères numériques.

## Pièges

- **La corrélation avec la clinique comme validation complète** : concorder avec une mesure clinique imparfaite prouve une filiation, pas une vérité ; validez par rapport à l'aspect significatif de la santé.
- **Le risque réglementaire d'un critère inédit** : un critère d'évaluation sans précédent peut être scientifiquement supérieur et néanmoins faire échouer un dossier — engagez les régulateurs tôt (il existe des programmes de qualification).
- **Inadéquation capteur-population** : validation sur des poignets jeunes et en bonne santé, déploiement chez des patients âgés présentant tremblements et différences de pigmentation que le PPG n'avait jamais vus.
- **Dérive des caractéristiques (« feature drift »)** : ré-entraîner l'algorithme de marche sur de nouvelles données redéfinit silencieusement le critère d'évaluation en cours d'étude.

## Sources

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
