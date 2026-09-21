# Indicateurs d'engagement

Les indicateurs d'engagement mesurent l'usage effectif que les utilisateurs font d'une application de santé : la fidélité DAU/MAU, la fréquence et la durée des sessions, l'utilisation des fonctionnalités. En santé numérique, l'engagement n'est pas une vanité — c'est la **dose** : l'exposition à travers laquelle tout effet clinique doit transiter.

## Pourquoi c'est important

Un médicament qui reste dans le flacon ne guérit personne ; une application qui reste désinstallée ou jamais ouverte relève du même mode d'échec. Chaque revendication d'économie de la santé pour un produit de santé grand public se multiplie par l'engagement — l'efficacité démontrée en essai a été mesurée à un certain niveau d'usage, et la valeur en conditions réelles s'échelonne selon la proximité entre l'usage en déploiement et ce niveau. Repères produit standards : un DAU/MAU d'environ **20 % est considéré comme sain** pour les applications mobiles en général, >25 % étant exceptionnel ; les applications de santé se situent souvent en dessous.

## Le calcul

```
Fidélité (DAU/MAU)     = utilisateurs actifs quotidiens / utilisateurs actifs
                          mensuels × 100
Indicateurs de session  = sessions/utilisateur/période ; durée moy. = temps
                          total / sessions
Engagement fonctionnel  = utilisateurs réalisant l'action clé / utilisateurs actifs

Cadre dose-réponse (la version économie de la santé) :
  effet réalisé ≈ effet en essai × f(usage réel / usage en essai)
  où f provient de l'analyse dose-réponse — voir le concept
  d'« engagement effectif » dans adherence-and-persistence.md :
  suffisamment d'usage pour atteindre le résultat visé, qui peut
  être modeste et fini
```

## Exemple chiffré

L'étude pivot d'une application de tension artérielle a montré une réduction de 6 mmHg de la pression systolique chez les utilisateurs enregistrant ≥4 relevés/semaine. En déploiement sur 50 000 utilisateurs enregistrés :

```
MAU 20 000 (40 %) ; parmi eux, enregistrant ≥4×/semaine : 7 000
Utilisateurs à dose effective = 7 000 / 50 000 = 14 % de la base enregistrée

Effet au niveau de la population ≈ effet de l'essai délivré à 14 %, pas à 100 % :
tout modèle économique citant « 50 000 utilisateurs × 6 mmHg » surestime d'environ ×7.
Modèle honnête : 7 000 × effet complet + crédit partiel (à partir des données
dose-réponse, le cas échéant) pour les 13 000 utilisateurs sous le seuil.
```

Cette multiplication — à travers l'entonnoir d'engagement jusqu'à la dose effective — est l'endroit le plus fréquent où l'économie de la santé numérique gonfle ses chiffres.

## Lien avec l'ingénierie logicielle

Les ingénieurs possèdent l'entonnoir d'engagement, ce qui fait d'eux les propriétaires d'une variable *clinique* : la friction à l'onboarding, la stratégie de notifications, le temps de chargement et la résilience hors-ligne déplacent tous la dose délivrée. Deux implications de conception : instrumenter l'**action cliniquement significative** (relevés enregistrés, leçons terminées), pas les ouvertures — un DAU construit sur des sessions de rebond issues de notifications est une fraude à la dose ; et traiter les objectifs d'engagement comme des objectifs de *suffisance*, pas de maximisation — une application qui atteint son résultat en 5 minutes/semaine et s'efface ensuite est cliniquement idéale et métriquement « médiocre » (voir l'engagement effectif dans [adhésion et persistance](../adherence-and-persistence/)). Valorisez le travail d'engagement lui-même via le modèle d'effet populationnel ci-dessus : un gain de 2 points de part de dose effective est une ligne de QALY quantifiable.

## Pièges

- **L'engagement comme résultat** : l'usage est un moyen ; le résultat est le [PROM](../patient-reported-outcomes/) ou le critère clinique.
- **Moyennes sur un usage bimodal** : les populations d'applications de santé se répartissent entre utilisateurs assidus et utilisateurs fantômes ; les moyennes ne décrivent personne — segmentez par cohorte.
- **Inflation de la dose par des mécanismes addictifs (dark patterns)** : les séries de jours consécutifs et les notifications culpabilisantes font grimper les indicateurs et peuvent nuire aux populations anxieuses que servent les applications de santé ; les produits cliniques portent une éthique clinique.
- **Provenance des repères fournisseurs** : la plupart des repères d'engagement publiés proviennent de fournisseurs d'analytique, pas de la revue par les pairs ; calibrez-les sur vos propres essais.

## Sources

- Repères d'engagement applicatif. <https://getstream.io/blog/app-retention-guide/>
- Guides d'indicateurs clés pour applications de santé. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. sur l'engagement effectif. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
