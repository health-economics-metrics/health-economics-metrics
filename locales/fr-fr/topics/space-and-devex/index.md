# SPACE et DevEx

SPACE (Satisfaction & bien-être, Performance, Activité, Communication & collaboration, Efficacité & flux) et DevEx (boucles de rétroaction, charge cognitive, état de flow) sont des cadres pour mesurer la productivité des développeurs de manière **multidimensionnelle** — la réponse du domaine à la découverte qu'aucune mesure unique ne survit au contact avec la réalité.

## Pourquoi c'est important

Les deux cadres encodent la même leçon durement acquise, apprise des décennies plus tôt par la recherche sur les résultats de santé : un chiffre unique (lignes de code ; pression artérielle) déforme une réalité multidimensionnelle, et l'optimiser produit du contournement (gaming), pas de l'amélioration. SPACE prescrit de combiner des mesures issues d'au moins trois dimensions, en mêlant télémétrie et auto-déclaration — structurellement identique à la façon dont [EQ-5D](../eq-5d/) profile cinq dimensions avant tout calcul d'indice, et à la raison pour laquelle les [PROMs](../patient-reported-outcomes/) existent aux côtés des mesures cliniques. La satisfaction et le bien-être ne sont pas non plus un simple ornement : ils alimentent l'économie de la [rétention des effectifs](../workforce-retention/), où l'attrition est chiffrée en mois de salaire chargé.

## Le calcul

Aucun des deux cadres n'est une formule ; ce sont tous deux des dispositifs de mesure :

```
Règle SPACE : ≥ 3 dimensions, ≥ 1 mesure perceptuelle (enquête) + ≥ 1 mesure système (télémétrie)

Dimensions DevEx et exemples d'association :
  boucles de rétroaction → durée du CI (télémétrie) + « l'attente semble lente » (enquête)
  charge cognitive        → facilité à trouver la documentation, temps d'onboarding + effort perçu
  état de flow             → densité des réunions/interruptions + concentration auto-déclarée

Indices dérivés (par ex. le DXI de DX) associent des composites d'enquête à du temps :
affirmation du fournisseur ≈ 13 min/dev/semaine par point d'indice — à traiter comme
un repère fournisseur à valider localement, pas comme une constante universelle.
```

## Exemple chiffré

Une équipe plateforme justifie un investissement DevEx (accélération du CI + refonte de la documentation) pour 300 développeurs :

```
Référence : CI p75 = 28 min ; enquête « je perds le focus en attendant les builds » : 62 % d'accord
Après :     CI p75 = 9 min ;  accord 24 %

Temps récupéré (télémétrie) : 6 builds/jour × 19 min × 0,4 utilisable = ~45 min/jour/dev
Valeur de capacité : 300 × 0,75h × 220j × 60 £/h ≈ 2,97 M£/an (ne libérant pas de trésorerie —
voir cash-releasing-vs-non-cash-releasing.md ; le facteur d'utilisabilité de 0,4 est la
décote de fragmentation issue de practitioner-time.md)
La corroboration perceptuelle est ce qui rend l'affirmation issue de la télémétrie
crédible — chacune seule est manipulable ; ensemble, elles se recoupent (triangulation).
```

## Lien avec l'ingénierie logicielle

Ce document *est* déjà le volet logiciel ; le transfert se fait ici vers l'économie de la santé. Une « année-ingénieur ajustée sur la qualité » — le temps pondéré par un indice d'expérience standardisé — est la construction du [QALY](../quality-adjusted-life-year/) appliquée à la capacité d'ingénierie, et elle en hérite les règles : des pondérations issues d'un instrument validé (enquête cohérente, notation publiée), recueillies *avant* la comparaison, jamais ajustées pour flatter un outil favori. La leçon [SF-6D vs EQ-5D](../eq-5d/) s'applique aussi : des instruments différents donnent des chiffres systématiquement différents, donc il ne faut jamais comparer des indices DevEx entre instruments de fournisseurs différents.

## Pièges

- **Effondrement en mesure unique** : des tableaux de bord qui réduisent SPACE à un seul score recréent le problème que le cadre existe pour prévenir.
- **Mesures d'activité prises pour des résultats** : commits, PR et story points relèvent de l'Activité — la dimension que SPACE désigne explicitement comme la plus manipulable (analogue en santé : compter les actes, pas les guérisons).
- **Lassitude d'enquête et effets Hawthorne** : des instruments légers trimestriels valent mieux qu'un interrogatoire hebdomadaire.
- **Comparer des équipes** : comme des classements d'hôpitaux sans ajustement au case-mix — les différences de contexte (domaine, dette existante, astreintes) dominent.

## Sources

- Forsgren N, et al. « The SPACE of Developer Productivity. » ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. « DevEx: What Actually Drives Productivity. » ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
