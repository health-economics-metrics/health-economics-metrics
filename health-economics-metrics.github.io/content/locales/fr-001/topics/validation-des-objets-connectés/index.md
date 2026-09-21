# Validation des Objets Connectés

Les métriques de validation quantifient à quel point les mesures d'un objet connecté concordent avec un étalon-or clinique (ECG pour la fréquence cardiaque, polysomnographie pour le sommeil) : **MAPE**, corrélation de concordance, accord de Bland-Altman — plus les métriques opérationnelles qui conditionnent la qualité des données en conditions réelles : **conformité au temps de port** et **complétude des données**.

## Pourquoi c'est important

La validation est la précondition pour tout ce qui suit : un appareil qui ne peut prouver la concordance avec la mesure de référence ne peut pas ancrer des [critères d'évaluation numériques](../critères-d-évaluation-et-biomarqueurs-numériques/), soutenir la [facturation TSP](../économie-de-la-télésurveillance-des-patients/), ou porter des allégations cliniques. Les seuils acceptés du domaine pour la fréquence cardiaque : **MAPE ≤5 %** (strict) ou **≤10 %** (indulgent) face à l'ECG. Points de référence issus de la littérature : MAPE de fréquence cardiaque au repos Oura Gen 3 1,67 % (CCC 0,97) ; MAPE Fitbit Charge 6 ~5,5 % — les appareils grand public s'étendent maintenant à travers la frontière de niveau clinique, ce qui est exactement pourquoi la mesure compte par appareil et par condition.

## Le calcul

```
MAPE = (1/n) Σ |mesuré_i − référence_i| / référence_i × 100

CCC (corrélation de concordance) = accord incluant à la fois la corrélation
      et le biais systématique (Pearson r pénalisé par le décalage de position/échelle)

Bland-Altman : biais moyen ± 1,96 ÉT limites d'accord — montre si
      l'erreur dépend de l'ampleur de la valeur

Portes opérationnelles :
Conformité au temps de port = temps porté / temps de protocole × 100
Complétude des données    = points de données observés / attendus × 100
```

La validation doit être rapportée **par condition d'activité** (repos, mouvement, sommeil) et par population — la détection optique PPG se dégrade avec les artefacts de mouvement, le contact médiocre, et les tons de peau plus foncés, un mode de défaillance documenté et pertinent pour l'équité.

## Exemple résolu

Un programme d'unité virtuelle sélectionne un objet connecté de surveillance. Candidat A : MAPE repos 2,1 %, MAPE exercice 11,4 %. Candidat B : repos 3,8 %, exercice 6,9 %.

```
Cas d'usage : détection de patient en détérioration à domicile — les alertes se
déclenchent sur une fréquence cardiaque élevée soutenue, souvent pendant l'activité.
Le titre du Candidat A (2,1 %) gagne la brochure ; le candidat B gagne le
cas d'usage : à la condition pertinente pour l'alerte (mouvement), l'erreur de
11,4 % de A à FC 100 = ±11 bpm — s'étendant sur toute la bande de seuil
d'alerte, générant de fausses escalades (chacune un appel infirmier, ~40 £)
ou des cas manqués.

Économie de fausses alertes : 500 patients × 2 fausses alertes supplémentaires/semaine × 40 £
= 2,08 M£/an de coût d'erreur pour avoir choisi le mauvais chiffre de validation.
```

## Lien avec l'ingénierie logicielle

Pour les ingénieurs qui développent ou achètent des objets connectés : **livrez la matrice de confusion à la prévalence de déploiement**, pas seulement la courbe ROC seule ; **laissez le seuil être une décision économique** — le compromis sens/spéc devrait minimiser le coût attendu (cas manqués × coût du manqué contre fausses alarmes × coût de bilan), pas maximiser une statistique de référence ; et reconnaissez la même mathématique dans vos propres outils — capteurs, détecteurs d'anomalies et scanners de sécurité sont des tests diagnostiques sur des flux d'événements à faible prévalence, avec la fatigue d'alerte comme le [NNN](../nombre-nécessaire-à-traiter/). Les mises à jour de modèle qui déplacent le point de fonctionnement rouvrent l'économie (et l'homologation réglementaire — voir [évaluation réglementaire de l'IA](../évaluation-réglementaire-de-l-ia/)).

## Pièges

- **MAPE agrégé masquant un échec spécifique à une condition** — le piège de l'exemple résolu.
- **Population de validation ≠ population de déploiement** : l'âge, le ton de peau, le tremblement, l'obésité changent tous l'erreur du capteur optique ; vérifiez la démographie de l'étude.
- **Corrélation rapportée là où l'accord est nécessaire** : un r de Pearson élevé avec un biais systématique classe toujours mal face aux seuils absolus — insistez sur CCC/Bland-Altman.
- **Complétude gonflée par imputation** : lacunes comblées rapportées comme données observées.

## Sources

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
