# Métriques d'Engagement

Les métriques d'engagement mesurent combien les utilisateurs utilisent réellement une application de santé : adhérence DAU/MAU, fréquence et durée des sessions, usage des fonctionnalités. En santé numérique, l'engagement n'est pas de la vanité — c'est la **dose** : l'exposition à travers laquelle tout effet clinique doit passer.

## Pourquoi c'est important

Un médicament qui reste dans le flacon ne guérit personne ; une application qui reste désinstallée ou non ouverte est le même mode d'échec. Chaque allégation d'économie de la santé pour un produit de santé grand public se multiplie à travers l'engagement — l'efficacité montrée dans les essais a été mesurée à un certain niveau d'usage, et la valeur en conditions réelles s'échelonne selon la proximité de l'usage de déploiement à ce niveau. Repères produit standards : l'adhérence DAU/MAU autour de **20 % est considérée comme saine** pour les applications mobiles en général, >25 % exceptionnelle ; les applications de santé fonctionnent souvent plus bas.

## Le calcul

```
Adhérence (DAU/MAU) = utilisateurs actifs quotidiens / utilisateurs actifs mensuels × 100
Métriques de session      = sessions/utilisateur/période ; durée moyenne = temps total / sessions
Engagement de fonctionnalité   = utilisateurs réalisant l'action clé / utilisateurs actifs

Cadrage dose-réponse (la mise à niveau de l'économie de la santé) :
  effet réalisé ≈ effet de l'essai × f(usage réel / usage de l'essai)
  où f provient de l'analyse dose-réponse — voir le concept
  d'« engagement effectif » dans adherence-and-persistence.md : un usage suffisant
  pour atteindre le résultat visé, qui peut être modeste et fini
```

## Exemple résolu

L'étude pivot d'une application de tension artérielle a montré une réduction systolique de 6 mmHg parmi les utilisateurs enregistrant ≥4 lectures/semaine. Dans un déploiement à travers 50 000 utilisateurs enregistrés :

```
MAU 20 000 (40 %) ; parmi eux, enregistrant ≥4×/semaine : 7 000
Utilisateurs à dose effective = 7 000 / 50 000 = 14 % de la base enregistrée

L'effet au niveau populationnel ≈ effet de l'essai livré à 14 %, pas 100 % :
tout modèle économique citant « 50 000 utilisateurs × 6 mmHg » surestime d'environ 7×.
Modèle honnête : 7 000 × effet complet + crédit partiel (issu de données
dose-réponse, le cas échéant) pour les 13 000 utilisateurs sous le seuil.
```

Cette multiplication — à travers l'entonnoir d'engagement jusqu'à la dose effective — est l'endroit individuel le plus commun où l'économie de la santé numérique gonfle.

## Lien avec l'ingénierie logicielle

Les ingénieurs possèdent l'entonnoir d'engagement, ce qui en fait les propriétaires d'une variable *clinique* : la friction d'intégration, la stratégie de notification, le temps de chargement et la résilience hors ligne déplacent tous la dose livrée. Deux implications de conception : instrumentez l'**action cliniquement significative** (lectures enregistrées, leçons terminées), pas les ouvertures — le DAU construit sur des sessions de rebond de notification est de la fraude de dose ; et traitez les objectifs d'engagement comme des objectifs de *suffisance*, pas de maximisation — une application qui atteint son résultat en 5 minutes/semaine et s'efface est cliniquement idéale et métriquement « pauvre » (voir l'engagement effectif dans [observance et persistance](../observance-et-persistance/)). Valorisez le travail d'engagement lui-même via le modèle d'effet populationnel ci-dessus : un gain de 2 points de part de dose effective est une ligne QALY quantifiable.

## Pièges

- **Engagement comme résultat** : l'usage est un moyen ; le résultat est le [PROM](../résultats-rapportés-par-le-patient/) ou le critère d'évaluation clinique.
- **Moyennes sur usage bimodal** : les populations d'applications de santé se divisent en utilisateurs dévoués et fantômes ; les moyennes ne décrivent personne — segmentez-les.
- **Inflation de dose par motifs sombres** : les séries et les notifications de culpabilité augmentent les métriques et peuvent nuire aux populations anxieuses que servent les applications de santé ; les produits cliniques portent une éthique clinique.
- **Provenance de repère fournisseur** : la plupart des repères d'engagement publiés proviennent de fournisseurs d'analytique, pas de revue par les pairs ; calibrez contre vos propres essais.

## Sources

- Repères d'engagement d'applications. <https://getstream.io/blog/app-retention-guide/>
- Guides KPI d'applications de santé. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. sur l'engagement effectif. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
