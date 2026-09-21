# Impact sur Liste d'Attente

L'impact sur liste d'attente convertit la capacité clinique économisée en patients retirés de (ou déplacés plus rapidement à travers) la liste d'attente. Convertir les heures économisées en créneaux de clinique supplémentaires réduit directement la taille de la liste d'attente d'un trust — la façon la plus tangible de montrer à un système de santé ce *pour quoi* sert la capacité libérée.

## Pourquoi c'est important

La liste d'attente programmée est le défi post-pandémique définitoire du NHS (sa taille est une métrique politique nationale), et chaque trust exécute un programme de récupération programmée contre elle. Un dossier de décision qui dit « économise 2 000 heures-infirmière » est abstrait ; un qui dit « crée 4 000 créneaux de rendez-vous supplémentaires, voit 3 800 patients en attente, réduit la liste de la spécialité de 9 % » est une histoire qu'un Directeur des Opérations peut porter à son conseil. L'impact sur liste d'attente est l'*unité de compte* naturelle de la [capacité non libératrice de trésorerie](../économies-libératrices-de-trésorerie-contre-non-libératrices/).

## Le calcul

```
Créneaux supplémentaires        = heures libérées / durée du créneau × utilisation
Patients vus       = créneaux supplémentaires × (1 − taux de DNA)
Réduction de liste          = patients vus − nouvelle demande induite
Gain de temps d'attente   = amélioration de file d'attente due à un taux de service plus élevé
                     (pour des files stables, réduire l'arriéré N de ΔN à
                     un taux de service μ avance tout le monde de ~ΔN/μ)
```

La valeur de santé d'attentes plus courtes : les patients passent moins de semaines dans l'état d'utilité pré-traitement plus bas — l'arithmétique QALY dans [recommandation vers traitement](../recommandation-vers-traitement/).

## Exemple résolu

Un logiciel de documentation ambiante économise à chacune de 20 infirmières de clinique 45 min/jour. Sur 250 jours : 20 × 0,75 × 250 = 3 750 heures/an.

```
Créneaux (30 min, 85 % utilisable) = 3 750 / 0,5 × 0,85 = 6 375 créneaux
Patients vus (7 % DNA)     = 6 375 × 0,93       ≈ 5 929/an
```

Pour une spécialité avec une liste de 12 000 patients et 24 000 rendez-vous/an de capacité ajustée à la demande, ~5 900 rendez-vous supplémentaires réduisent les attentes moyennes d'environ un quart — rapprochant matériellement le trust de la norme des 18 semaines sans recruter. À environ 160 £ de valeur de régime par consultation, l'activité vaut ~949 000 £/an (voir [tarif national et coûts unitaires](../tarif-national-et-coûts-unitaires/)) — mais présentez d'abord le cadrage de *liste d'attente* ; c'est celui sur lequel le système est géré.

## Lien avec l'ingénierie logicielle

Une liste d'attente est un arriéré, et l'économie de résorption d'arriéré se transpose dans les deux sens. De la santé au logiciel : valorisez la réduction d'arriéré par combien de temps les *utilisateurs* attendent la valeur, pas par les éléments clôturés ([coût de retard](../coût-de-retard/) par élément en file d'attente). Du logiciel à la santé : la Loi de Little dit que la liste ne rétrécit que si le taux de service dépasse le taux d'arrivée — les gains de capacité absorbés par des recommandations croissantes laissent les attentes inchangées, donc modélisez aussi les arrivées. Et dans les deux domaines, priorisez par valeur pondérée par sévérité (catégories d'urgence clinique ↔ [modulateurs de sévérité](../déficit-de-qaly-et-modulateurs-de-sévérité/)), pas premier-arrivé-premier-servi.

## Pièges

- **Créneaux ≠ patients** : oublier les taux de DNA et les fragments inutilisables du temps libéré.
- **Demande induite** : la capacité supplémentaire visible attire des recommandations ; l'impact net sur la liste est plus petit que le brut.
- **Revendiquer de la trésorerie** : l'impact sur liste d'attente est de la valeur de capacité ; l'allégation de trésorerie (externalisation évitée du travail d'arriéré) est une ligne différente — voir [coûts d'externalisation évitables](../coûts-d-externalisation-évitables/).

## Sources

- NHS England, statistiques de temps d'attente RTT. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, plan de récupération des soins programmés. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
