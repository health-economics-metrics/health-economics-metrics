# Impact sur la liste d'attente

L'impact sur la liste d'attente convertit la capacité clinique économisée en patients retirés de la liste d'attente (ou pris en charge plus rapidement). Convertir des heures économisées en créneaux de consultation supplémentaires réduit directement la taille de la liste d'attente d'un trust — c'est la façon la plus tangible de montrer à un système de santé à quoi sert la capacité libérée.

## Pourquoi c'est important

La liste d'attente pour les soins programmés est le défi post-pandémie déterminant du NHS (sa taille est un indicateur politique national), et chaque trust conduit un programme de rattrapage des soins programmés pour y faire face. Un dossier économique qui affirme « économise 2 000 heures infirmières » reste abstrait ; un dossier qui affirme « crée 4 000 créneaux de rendez-vous supplémentaires, prend en charge 3 800 patients en attente, réduit la liste de la spécialité de 9 % » est une histoire qu'un directeur des opérations peut présenter à son conseil d'administration. L'impact sur la liste d'attente est l'*unité de compte* naturelle de la [capacité non génératrice de trésorerie](../cash-releasing-vs-non-cash-releasing/).

## Le calcul

```
Créneaux supplémentaires = heures libérées / durée du créneau × taux d'utilisation
Patients vus              = créneaux supplémentaires × (1 − taux de DNA)
Réduction de liste        = patients vus − nouvelle demande induite
Gain de temps d'attente   = amélioration de la file d'attente due à un taux de service plus élevé
                            (pour des files stables, réduire le retard N de ΔN à un
                            taux de service μ avance tout le monde d'environ ΔN/μ)
```

Valeur pour la santé des délais raccourcis : les patients passent moins de semaines dans l'état d'utilité inférieur précédant le traitement — l'arithmétique des QALY développée dans [délai entre orientation et traitement](../referral-to-treatment/).

## Exemple chiffré

Un logiciel de documentation ambiante fait gagner à chacune des 20 infirmières de consultation 45 min/jour. Sur 250 jours : 20 × 0.75 × 250 = 3,750 heures/an.

```
Créneaux (30 min, 85% utilisables) = 3,750 / 0.5 × 0.85 = 6,375 créneaux
Patients vus (7% de DNA)            = 6,375 × 0.93        ≈ 5,929/an
```

Pour une spécialité avec une liste de 12,000 patients et 24,000 rendez-vous/an de capacité ajustée à la demande, environ 5,900 rendez-vous supplémentaires réduisent les délais d'attente moyens d'environ un quart — rapprochant sensiblement le trust de la norme des 18 semaines sans recrutement. À une valeur tarifaire d'environ £160 par consultation, l'activité représente environ £949,000/an (voir [tarif national et coûts unitaires](../national-tariff-and-unit-costs/)) — mais présentez d'abord le cadrage en termes de *liste d'attente* ; c'est celui sur lequel le système est piloté.

## Lien avec l'ingénierie logicielle

Une liste d'attente est un backlog, et l'économie du « burndown » de backlog se transpose dans les deux sens. De la santé vers le logiciel : valorisez la réduction du backlog par le temps que les *utilisateurs* attendent la valeur, et non par le nombre d'éléments clos ([coût du délai](../cost-of-delay/) par élément en file). Du logiciel vers la santé : la loi de Little indique que la liste ne se réduit que si le taux de service dépasse le taux d'arrivée — des gains de capacité absorbés par une hausse des orientations laissent les délais inchangés, d'où la nécessité de modéliser aussi les arrivées. Et dans les deux domaines, priorisez selon une valeur pondérée par la sévérité (catégories d'urgence clinique ↔ [modificateurs de sévérité](../qaly-shortfall-and-severity-modifiers/)), et non selon le principe du premier arrivé, premier servi.

## Pièges

- **Créneaux ≠ patients** : oublier les taux d'absentéisme (DNA) et les fragments de temps libéré inutilisables.
- **La demande induite** : une capacité supplémentaire visible attire des orientations ; l'impact net sur la liste est plus faible que l'impact brut.
- **Revendiquer de la trésorerie** : l'impact sur la liste d'attente est une valeur de capacité ; l'économie de trésorerie (externalisation évitée du travail de rattrapage) est un poste différent — voir [coûts d'externalisation évitables](../avoidable-outsourcing-costs/).

## Sources

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
