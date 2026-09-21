# Métriques DORA

Les métriques DORA (DevOps Research and Assessment) sont quatre mesures de performance de livraison logicielle — fréquence de déploiement, délai pour les changements, taux d'échec des changements et temps de récupération après déploiement échoué — plus la fiabilité comme cinquième. Ce sont les repères de livraison les plus validés du domaine, et chacune a une lecture directe en économie de la santé.

## Pourquoi c'est important

Une décennie de recherche DORA relie ces métriques à la performance organisationnelle. Les groupes du rapport 2024 : les équipes **d'élite** déploient à la demande (plusieurs fois par jour), prennent moins d'un jour du commit à la production, échouent sur ~5 % des changements, et récupèrent en moins d'une heure ; les équipes à **faible performance** déploient mensuellement ou moins, prennent des mois, échouent sur ~40 % des changements, et récupèrent en semaines. Pour un système de santé, ce ne sont pas des chiffres de vanité informatique : ils déterminent la vitesse à laquelle la valeur clinique atteint les patients et le risque porté par chaque changement.

## Le calcul

```
Fréquence de déploiement    = déploiements en production / temps
Délai pour les changements   = t(déploiement) − t(commit), médiane
Taux d'échec des changements     = changements échoués / total des changements × 100
Temps de récupération (TMTR)    = t(restauré) − t(échec), médiane
Fiabilité             = respect des ANS (disponibilité, latence, exactitude)
```

Traductions en économie de la santé :

```
Délai     → cost-of-delay.md : semaines dans le pipeline × CdR (£ ou QALY/semaine)
Taux d'échec  → taux d'événement indésirable du changement logiciel : TEC × coût par incident
Temps de récupération → préjudice de l'indisponibilité : TMTR × (activité clinique perdue + exposition de sécurité)/h
Fiabilité   → décote de bénéfice : un service à 99 % de disponibilité livre ≈ 0,99
                de son bénéfice modélisé — l'analogue logiciel de l'observance
```

## Exemple résolu

L'équipe logicielle de flux de patients d'un trust, avant/après un investissement en ingénierie de livraison :

```
                    Avant       Après
Déploiements        mensuel     hebdomadaire
Délai               6 semaines  4 jours
TEC                 25 %        8 %
TMTR                2 jours     2 heures
```

L'équipe livre ~30 améliorations/an avec une valeur moyenne par amélioration de 4 000 £/semaine ([CdR](../coût-de-retard/)). Une réduction du délai d'environ 5,4 semaines avance le flux de bénéfice de chaque amélioration : 30 × 5,4 × 4 000 ≈ **648 000 £/an** de valeur livrée plus tôt. Amélioration du TEC : 30 × (0,25 − 0,08) = ~5 changements échoués en moins/an × 15 000 £ de coût moyen d'incident (indisponibilité de système clinique, remédiation) = **76 500 £/an**. L'investissement en livraison est valorisé dans la même monnaie que toute intervention clinique.

## Lien avec l'ingénierie logicielle

Ceci *est* le côté logiciel — le lien qui mérite d'être signalé est le mappage inverse : les métriques DORA sont les métriques opérationnelles de l'hôpital sous un autre habillage. Délai ↔ [recommandation vers traitement](../recommandation-vers-traitement/) ; taux d'échec des changements ↔ [taux de réadmission](../taux-de-réadmission/) (travail qui a rebondi) ; TMTR ↔ réponse d'urgence ; fréquence de déploiement ↔ débit de clinique. Les méthodes d'amélioration se transposent dans les deux sens car les deux sont des systèmes de files d'attente sous contraintes de sécurité. Notez aussi le constat IA de DORA 2025 : l'adoption de l'IA corrèle désormais avec un débit plus élevé mais une stabilité *pire* — une intervention avec efficacité et effets secondaires, exigeant exactement l'analyse de bénéfice net que ce dépôt enseigne (voir [productivité des développeurs avec l'IA](../productivité-des-développeurs-avec-l-ia/)).

## Pièges

- **Manipulation des métriques** : décomptes de déploiement gonflés par des versions sans opération ; TEC dégonflé en ne comptant pas les correctifs d'urgence comme des échecs. Définissez les événements précisément, comme l'ETS définit les critères d'évaluation.
- **Classements inter-équipes** : les groupes DORA comparent des pratiques, pas des équipes avec des profils de risque différents ; une équipe de systèmes cliniques à « élevé » peut être optimale là où « élite » serait imprudent.
- **Optimiser une seule métrique** : la vitesse sans TEC/fiabilité est le compromis débit-instabilité — rapportez toujours les quatre ensemble (ce sont un [tableau coûts-conséquences](../analyse-coûts-conséquences/), pas un score).

## Sources

- Recherche et rapports DORA. <https://dora.dev/>
- Résumé des repères DORA 2024. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
