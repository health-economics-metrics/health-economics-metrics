# Métriques DORA

Les métriques DORA (DevOps Research and Assessment) sont quatre mesures de la performance de livraison logicielle — fréquence de déploiement, délai de mise en œuvre des changements (« lead time »), taux d'échec des changements et temps de récupération après un déploiement raté — plus la fiabilité comme cinquième mesure. Ce sont les repères de livraison les plus validés du secteur, et chacun se lit directement en termes d'économie de la santé.

## Pourquoi c'est important

Une décennie de recherche DORA relie ces métriques à la performance organisationnelle. Les regroupements du rapport 2024 : les équipes **élite** déploient à la demande (plusieurs fois par jour), passent en moins d'un jour du commit à la production, échouent sur environ 5 % des changements, et récupèrent en moins d'une heure ; les équipes à **faible performance** déploient mensuellement ou moins, mettent des mois, échouent sur environ 40 % des changements et récupèrent en plusieurs semaines. Pour un système de santé, ce ne sont pas des indicateurs de vanité informatique : ils déterminent la vitesse à laquelle la valeur clinique atteint les patients et le niveau de risque que porte chaque changement.

## Le calcul

```
Fréquence de déploiement    = déploiements en production / temps
Lead time des changements   = t(déploiement) − t(commit), médiane
Taux d'échec des changements = changements échoués / total des changements × 100
Temps de récupération (MTTR) = t(rétabli) − t(échec), médiane
Fiabilité                    = atteinte des SLO (disponibilité, latence, exactitude)
```

Traductions en économie de la santé :

```
Lead time      → cost-of-delay.md : semaines dans le pipeline × CoD (£ ou QALYs/semaine)
Taux d'échec   → taux d'événement indésirable du changement logiciel :
                 taux d'échec × coût par incident
Temps de récupération → préjudice lié à l'indisponibilité : MTTR × (activité clinique
                 perdue + exposition sécurité)/h
Fiabilité      → décote du bénéfice : un service à 99 % de disponibilité délivre
                 ≈ 0,99 de son bénéfice modélisé — l'analogue logiciel de l'observance
```

## Exemple chiffré

L'équipe logicielle de flux patients d'un trust, avant/après un investissement en ingénierie de livraison :

```
                    Avant       Après
Déploiements        mensuel     hebdomadaire
Lead time           6 semaines  4 jours
Taux d'échec        25 %        8 %
MTTR                2 jours     2 heures
```

L'équipe livre environ 30 améliorations/an avec une valeur moyenne par amélioration de £4 000/semaine ([CoD](../cost-of-delay/)). Une réduction du lead time d'environ 5,4 semaines avance le flux de bénéfices de chaque amélioration : 30 × 5,4 × 4 000 ≈ **£648 000/an** de valeur délivrée plus tôt. Amélioration du taux d'échec : 30 × (0,25 − 0,08) = environ 5 changements échoués en moins par an × £15 000 de coût moyen d'incident (indisponibilité du système clinique, remédiation) = **£76 500/an**. L'investissement en livraison est valorisé dans la même monnaie que toute intervention clinique.

## Lien avec l'ingénierie logicielle

C'est *déjà* le côté logiciel — la connexion qui vaut la peine d'être énoncée est la correspondance inverse : les métriques DORA sont les métriques opérationnelles de l'hôpital sous un autre habillage. Lead time ↔ [délai de référence à traitement](../referral-to-treatment/) ; taux d'échec des changements ↔ [taux de réadmission](../readmission-rate/) (un travail qui a rebondi) ; MTTR ↔ réponse d'urgence ; fréquence de déploiement ↔ débit de la clinique. Les méthodes d'amélioration se transposent dans les deux sens parce que ce sont, l'un comme l'autre, des systèmes de file d'attente sous contraintes de sécurité. Notez aussi la conclusion DORA 2025 sur l'IA : l'adoption de l'IA corrèle désormais avec un débit plus élevé mais une stabilité *dégradée* — une intervention avec efficacité et effets secondaires, exigeant exactement l'analyse en bénéfice net que ce dépôt enseigne (voir [productivité des développeurs assistée par IA](../ai-developer-productivity/)).

## Pièges

- **Manipulation des métriques** : décomptes de déploiements gonflés par des mises en production sans effet ; taux d'échec sous-estimé en ne comptant pas les correctifs d'urgence comme des échecs. Définissez les événements avec précision, comme le HTA définit ses critères d'évaluation.
- **Classements inter-équipes** : les regroupements DORA comparent des pratiques, pas des équipes avec des profils de risque différents ; une équipe de systèmes cliniques au niveau « élevé » peut être optimale là où « élite » serait imprudent.
- **Optimiser une seule métrique** : la vitesse sans le taux d'échec/la fiabilité est l'arbitrage débit-instabilité — présentez toujours les quatre ensemble (elles forment un [tableau coût-conséquence](../cost-consequence-analysis/), pas un score).

## Sources

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
