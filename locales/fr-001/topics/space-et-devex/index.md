# SPACE et DevEx

SPACE (Satisfaction et bien-être, Performance, Activité, Communication et collaboration, Efficience et flux) et DevEx (boucles de rétroaction, charge cognitive, état de flux) sont des cadres pour mesurer la productivité des développeurs **multidimensionnellement** — la réponse du domaine à la découverte qu'aucune métrique unique ne survit au contact avec la réalité.

## Pourquoi c'est important

Les deux cadres codifient la même leçon durement acquise que la recherche sur les résultats de santé a apprise des décennies plus tôt : un chiffre unique (lignes de code ; pression artérielle) déforme une réalité multidimensionnelle, et l'optimiser produit de la manipulation, pas de l'amélioration. SPACE prescrit de combiner des métriques d'au moins trois dimensions, mélangeant télémétrie et auto-déclaration — structurellement identique à la façon dont l'[EQ-5D](../eq-5d/) profile cinq dimensions avant qu'un indice ne soit calculé, et pourquoi les [PROM](../résultats-rapportés-par-le-patient/) existent aux côtés des mesures cliniques. La satisfaction/bien-être n'est pas non plus une garniture accessoire : elle alimente l'économie de la [rétention de la main-d'œuvre](../rétention-de-la-main-d-œuvre/), où l'attrition est tarifée en mois de salaire chargé.

## Le calcul

Aucun des deux cadres n'est une formule ; les deux sont des conceptions de mesure :

```
Règle SPACE : ≥ 3 dimensions, ≥ 1 métrique perceptuelle (enquête) + ≥ 1 métrique système (télémétrie)

Dimensions DevEx et exemples d'appariement :
  boucles de rétroaction  → durée CI (télémétrie) + « attendre semble lent » (enquête)
  charge cognitive  → capacité à trouver la documentation, temps d'intégration + effort perçu
  état de flux      → densité de réunions/interruptions + concentration auto-déclarée

Indices dérivés (par ex., le DXI de DX) mappent des composites d'enquête au temps :
allégation du fournisseur ≈ 13 min/dév/semaine par point d'indice — traitez-la comme
un repère fournisseur à valider localement, pas comme une constante de la nature.
```

## Exemple résolu

Une équipe de plateforme justifie un investissement DevEx (accélération CI + refonte documentation) pour 300 développeurs :

```
Ligne de base : CI p75 = 28 min ; enquête « je perds ma concentration en attendant les builds » : 62 % d'accord
Après :    CI p75 = 9 min ;  accord 24 %

Temps récupéré (télémétrie) : 6 builds/jour × 19 min × 0,4 utilisable = ~45 min/jour/dév
Valeur de capacité : 300 × 0,75h × 220j × 60 £/h ≈ 2,97 M£/an (ne libère pas de trésorerie —
voir cash-releasing-vs-non-cash-releasing.md ; le facteur d'utilisabilité de 0,4 est la
décote de fragmentation de practitioner-time.md)
La corroboration perceptuelle est ce qui rend l'allégation de télémétrie crédible — chacune
seule est manipulable ; ensemble elles triangulent.
```

## Lien avec l'ingénierie logicielle

Ce document *est* le côté logiciel ; le transfert va vers l'économie de la santé. Une « année-ingénieur ajustée par la qualité » — du temps pondéré par un indice d'expérience standardisé — est la construction du [QALY](../année-de-vie-ajustée-par-la-qualité/) appliquée à la capacité d'ingénierie, et elle hérite des règles du QALY : pondérations issues d'un instrument validé (enquête cohérente, notation publiée), obtenues *avant* la comparaison, jamais ajustées pour flatter un outil favori. La leçon [SF-6D contre EQ-5D](../eq-5d/) s'applique aussi : des instruments différents donnent des chiffres systématiquement différents, donc ne comparez jamais des indices DevEx entre les instruments de différents fournisseurs.

## Pièges

- **Effondrement en métrique unique** : les tableaux de bord qui réduisent SPACE à un score recréent le problème que le cadre existe pour prévenir.
- **Métriques d'activité comme résultats** : les commits, PR et points d'histoire sont de l'Activité — la dimension dont SPACE avertit explicitement qu'elle est la plus manipulable (analogue de santé : compter les procédures, pas les guérisons).
- **Fatigue d'enquête et effets Hawthorne** : les instruments trimestriels à touche légère battent l'interrogation hebdomadaire.
- **Comparer des équipes** : comme des tableaux de classement hospitaliers sans ajustement du mix de cas — les différences de contexte (domaine, charge héritée, astreinte) dominent.

## Sources

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
