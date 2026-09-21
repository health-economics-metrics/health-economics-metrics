# Validation des objets connectés portables (wearables)

Les indicateurs de validation quantifient dans quelle mesure les mesures d'un objet connecté portable concordent avec une référence clinique de référence (ECG pour la fréquence cardiaque, polysomnographie pour le sommeil) : **MAPE**, corrélation de concordance, accord de Bland-Altman — ainsi que les indicateurs opérationnels qui conditionnent la qualité des données en conditions réelles : **le taux de port (wear-time compliance)** et **la complétude des données**.

## Pourquoi c'est important

La validation est la condition préalable à tout ce qui suit : un dispositif incapable de démontrer sa concordance avec une mesure de référence ne peut ni ancrer des [critères d'évaluation numériques](../digital-endpoints-and-biomarkers/), ni justifier une [facturation de télésurveillance](../remote-patient-monitoring-economics/), ni porter d'allégations cliniques. Les seuils communément admis dans le domaine pour la fréquence cardiaque : **MAPE ≤5%** (strict) ou **≤10%** (souple) par rapport à l'ECG. Repères issus de la littérature : Oura Gen 3, MAPE de la fréquence cardiaque au repos de 1.67% (CCC de 0.97) ; Fitbit Charge 6, MAPE d'environ 5.5% — les dispositifs grand public se situent désormais de part et d'autre de la frontière du niveau clinique, ce qui explique précisément pourquoi la mesure doit être évaluée par appareil et par condition.

## Le calcul

```
MAPE = (1/n) Σ |measured_i − reference_i| / reference_i × 100

CCC (concordance correlation) = accord incluant à la fois la corrélation
      et le biais systématique (r de Pearson pénalisé par le décalage de
      position/échelle)

Bland–Altman : biais moyen ± 1,96 écart-type de limites d'accord — montre
      si l'erreur dépend de l'ampleur de la valeur

Seuils opérationnels :
Taux de port = temps porté / temps du protocole × 100
Complétude des données = points de données observés / attendus × 100
```

La validation doit être rapportée **par condition d'activité** (repos, mouvement, sommeil) et par population — la détection optique PPG se dégrade avec les artefacts de mouvement, un mauvais contact et les tons de peau plus foncés, un mode de défaillance documenté et pertinent en matière d'équité.

## Exemple chiffré

Un programme d'hôpital virtuel (virtual ward) sélectionne un objet connecté de surveillance. Candidat A : MAPE au repos 2.1%, MAPE à l'effort 11.4%. Candidat B : au repos 3.8%, à l'effort 6.9%.

```
Cas d'usage : détection à domicile d'un patient en dégradation — les
alertes se déclenchent sur une FC élevée soutenue, souvent pendant l'activité.
Le chiffre vitrine du candidat A (2,1%) gagne la brochure ; le candidat B
gagne le cas d'usage : à la condition pertinente pour l'alerte (mouvement),
l'erreur de 11,4% du candidat A à FC 100 = ±11 bpm — couvrant toute la
bande du seuil d'alerte, générant de fausses escalades (chacune un appel
infirmier, ~40 £) ou des alertes manquées.

Économie des fausses alertes : 500 patients × 2 fausses alertes
supplémentaires/semaine × 40 £ = 2,08 M£/an de coût d'erreur lié au choix
du mauvais chiffre de validation.
```

## Lien avec l'ingénierie logicielle

Les ingénieurs consomment des données de validation lorsqu'ils choisissent des capteurs, et ils en *produisent* lorsqu'ils construisent des fonctionnalités de mesure — ces deux rôles exigent la même rigueur : tester dans les conditions de déploiement, pas dans les conditions de démonstration (l'équivalent logiciel : évaluer les performances sur votre charge de production, pas sur celle du fournisseur). Le taux de port et la complétude sont des résultats d'ingénierie produit — le confort, l'autonomie de la batterie, la conception du rituel de recharge et la fiabilité de la synchronisation déterminent si le seuil de facturation de télésurveillance de 16 jours sur 30 est atteint ([économie de la télésurveillance](../remote-patient-monitoring-economics/)) et si les jeux de données d'essai sont analysables. Traitez les données manquantes comme un signal à concevoir : distinguez dès le départ, dans le schéma, « non porté », « porté mais sans signal » et « échec de synchronisation » — regroupées sous une valeur nulle, elles empoisonnent toute analyse en aval.

## Pièges

- **Un MAPE agrégé masquant une défaillance propre à une condition donnée** — le piège de l'exemple chiffré.
- **Une population de validation ≠ population de déploiement** : l'âge, le teint de peau, les tremblements, l'obésité modifient tous l'erreur des capteurs optiques ; vérifiez la composition démographique de l'étude.
- **Une corrélation rapportée là où un accord est nécessaire** : un r de Pearson élevé avec un biais systématique peut tout de même entraîner des erreurs de classification par rapport à des seuils absolus — exigez le CCC ou l'analyse de Bland-Altman.
- **Une complétude gonflée par imputation** : des lacunes comblées présentées comme des données observées.

## Sources

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
