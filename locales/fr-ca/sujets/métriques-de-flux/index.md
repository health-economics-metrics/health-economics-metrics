# Métriques de Flux

Les métriques de flux mesurent comment le travail se déplace à travers un système de livraison : temps de cycle, délai, débit, travail en cours (WIP) et efficience de flux. Elles sont gouvernées par la Loi de Little — la même mathématique de files d'attente qui gouverne les lits d'hôpital et les listes d'attente.

## Pourquoi c'est important

La majeure partie du temps de livraison n'est pas du travail — c'est de l'attente. Les études d'efficience de flux du travail de connaissance trouvent régulièrement des éléments travaillés activement seulement **5-15 %** de leur temps écoulé ; le reste sont des files d'attente. Cela signifie que l'accélération la moins chère est l'élimination des files d'attente, pas le recrutement — précisément l'idée que les programmes de flux de patients hospitaliers ont découverte à propos des lits. Pour tout ce qui a un [coût de retard](../coût-de-retard/), les métriques de flux localisent où le coût du retard s'accumule.

## Le calcul

```
Temps de cycle      = t(terminé) − t(commencé)
Délai       = t(livré) − t(demandé)     (inclut la file d'attente de pré-travail)
Débit          = éléments terminés / période
WIP                 = éléments commencés mais non terminés
Efficience de flux = temps actif / (temps actif + temps d'attente) × 100

Loi de Little :  WIP moyen = débit × temps de cycle moyen
               (de manière équivalente : temps de cycle = WIP / débit)
```

La Loi de Little est le levier : à débit fixe, réduire le WIP réduit le temps de cycle proportionnellement. Elle gouverne aussi les hôpitaux : `lits occupés = admissions/jour × durée de séjour`.

## Exemple résolu

Une équipe a 40 éléments en cours et en termine 10/semaine : temps de cycle = 40/10 = 4 semaines. Elle impose des limites de WIP, réduisant le WIP à 15 : temps de cycle = 15/10 = **1,5 semaine** — mêmes personnes, même débit, livraison 62 % plus rapide, purement grâce à la discipline de file d'attente.

Tarifé avec le CdR : si les éléments ont en moyenne 3 000 £/semaine de coût de retard, chaque élément passe maintenant 2,5 semaines de moins en file d'attente : 10 éléments/semaine × 2,5 × 3 000 = **75 000 £/semaine de coût de retard éliminé** — d'un changement de politique qui ne coûte rien.

Miroir hospitalier : 40 admissions/jour × 6,0 jours de DMS = 240 lits ; réduisez l'attente non clinique dans la DMS à 5,6 jours et 16 lits se libèrent ([durée de séjour](../durée-de-séjour/)) — même loi, même levier.

## Lien avec l'ingénierie logicielle

Les métriques de flux sont le langage partagé entre l'ingénierie de livraison et les opérations de santé :

- **Repères de sous-étape de PR** (LinearB, ~8M de PR) : temps de prise en charge d'élite < 7h, revue < 6h, cycle total < ~26h — le temps de prise en charge est de la file d'attente pure, la première chose à attaquer.
- Les **[listes d'attente](../impact-sur-liste-d-attente/)** sont des retards accumulés ; le **[RTT](../recommandation-vers-traitement/)** est un délai ; l'**[occupation des lits](../journées-lits-économisées/)** est du WIP. L'amélioration se transpose dans les deux sens : limites de WIP ↔ lissage des admissions ; instrumentation du temps de file d'attente ↔ suivi d'étape de parcours.
- L'efficience de flux sous 15 % est normale dans les deux domaines, et les deux la cachent car les *personnes* sont occupées pendant que le *travail* attend — mesurez l'horloge du travail, pas celle des travailleurs.

## Pièges

- **Adoration de l'utilisation** : pousser l'utilisation des travailleurs vers 100 % fait exploser les temps de file d'attente de manière non linéaire (M/M/1 : attente ∝ ρ/(1−ρ)) — la raison pour laquelle les hôpitaux occupés à 95 % s'engorgent et les équipes allouées à 95 % s'enlisent.
- **Moyennes sur des distributions asymétriques** : les temps de cycle ont des queues lourdes ; prévoyez avec des percentiles (p85), pas des moyennes.
- **Réduire le WIP en rejetant du travail en amont** et l'appeler amélioration de flux — la demande n'a pas disparu, elle a fait la queue hors de la limite de mesure (la version hospitalière : ambulances attendant hors des urgences).

## Sources

- Aperçus de la Loi de Little et des métriques de flux. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- Repères d'ingénierie LinearB. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
