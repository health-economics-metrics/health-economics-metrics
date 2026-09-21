# Indicateurs de flux

Les indicateurs de flux mesurent la façon dont le travail circule dans un système de livraison : temps de cycle, délai (lead time), débit, travail en cours (WIP) et efficacité de flux. Ils sont régis par la loi de Little — la même mathématique de files d'attente qui régit les lits d'hôpital et les listes d'attente.

## Pourquoi c'est important

La majeure partie du temps de livraison n'est pas du travail — c'est de l'attente. Les études d'efficacité de flux sur le travail de la connaissance constatent régulièrement que les éléments sont réellement travaillés seulement **5 à 15 %** de leur temps écoulé ; le reste, ce sont des files d'attente. Cela signifie que l'accélération la moins coûteuse consiste à supprimer les files d'attente, pas à embaucher — exactement l'enseignement que les programmes de flux patient hospitalier ont tiré au sujet des lits. Pour tout ce qui a un [coût du délai](../cost-of-delay/), les indicateurs de flux localisent où le coût du délai s'accumule.

## Le calcul

```
Temps de cycle       = t(terminé) − t(démarré)
Délai (lead time)    = t(livré) − t(demandé)          (inclut la file d'attente pré-travail)
Débit                = éléments terminés / période
WIP                  = éléments démarrés mais non terminés
Efficacité de flux   = temps actif / (temps actif + temps d'attente) × 100

Loi de Little :  WIP moyen = débit × temps de cycle moyen
                 (de façon équivalente : temps de cycle = WIP / débit)
```

La loi de Little est le levier : à débit fixe, réduire le WIP réduit le temps de cycle proportionnellement. Elle régit aussi les hôpitaux : `lits occupés = admissions/jour × durée de séjour`.

## Exemple chiffré

Une équipe a 40 éléments en cours et en termine 10/semaine : temps de cycle = 40/10 = 4 semaines. Elle impose des limites de WIP, réduisant le WIP à 15 : temps de cycle = 15/10 = **1,5 semaine** — mêmes personnes, même débit, livraison 62 % plus rapide, uniquement grâce à la discipline des files d'attente.

Chiffré avec le CoD : si les éléments coûtent en moyenne 3 000 £/semaine de délai, chaque élément passe désormais 2,5 semaines de moins en file d'attente : 10 éléments/semaine × 2,5 × 3 000 = **75 000 £/semaine de coût de délai éliminé** — grâce à un changement de politique qui ne coûte rien.

Miroir hospitalier : 40 admissions/jour × 6,0 jours de DMS = 240 lits ; réduisez l'attente non clinique à l'intérieur de la DMS à 5,6 jours et 16 lits se libèrent ([durée de séjour](../length-of-stay/)) — même loi, même levier.

## Lien avec l'ingénierie logicielle

Les indicateurs de flux forment le langage commun entre l'ingénierie de livraison et les opérations de santé :

- **Repères de sous-étapes de PR** (LinearB, ~8 M de PR) : temps de prise en charge élite < 7 h, revue < 6 h, cycle total < ~26 h — le temps de prise en charge est de la pure file d'attente, le premier point à attaquer.
- Les **[listes d'attente](../waiting-list-impact/)** sont des arriérés ; le **[RTT](../referral-to-treatment/)** est un délai ; l'**[occupation des lits](../bed-days-saved/)** est du WIP. L'amélioration se transfère dans les deux sens : limites de WIP ↔ lissage des admissions ; instrumentation du temps de file d'attente ↔ suivi des étapes du parcours.
- Une efficacité de flux inférieure à 15 % est normale dans les deux domaines, et les deux la masquent car les *personnes* sont occupées pendant que le *travail* attend — mesurez l'horloge du travail, pas celle des travailleurs.

## Pièges

- **Le culte de l'utilisation** : pousser l'utilisation des travailleurs vers 100 % fait exploser les temps de file d'attente de façon non linéaire (M/M/1 : attente ∝ ρ/(1−ρ)) — la raison pour laquelle les hôpitaux occupés à 95 % s'engorgent et les équipes allouées à 95 % s'enlisent.
- **Moyennes sur des distributions asymétriques** : les temps de cycle ont une queue lourde ; prévoyez avec des percentiles (p85), pas des moyennes.
- **Réduire le WIP en rejetant le travail en amont** et appeler cela une amélioration de flux — la demande n'a pas disparu, elle a fait la queue hors du périmètre de mesure (la version hospitalière : des ambulances attendant à l'extérieur des urgences).

## Sources

- Aperçus de la loi de Little et des indicateurs de flux. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- Repères d'ingénierie LinearB. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
