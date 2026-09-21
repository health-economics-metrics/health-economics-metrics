# Coût marginal contre coût moyen

Le coût moyen est le coût total divisé par les unités produites. Le coût marginal est le coût de production d'une unité *supplémentaire*. Les décisions devraient reposer sur le coût marginal — mais les coûts unitaires publiés sont presque toujours des moyennes.

## Pourquoi c'est important

L'erreur la plus courante dans les analyses de rentabilité de la santé numérique consiste à valoriser une ressource économisée à son coût **moyen** alors que l'économie réelle correspond au coût **marginal**. Une journée-lit hospitalière a un coût moyen (pleinement absorbé) de plus de 400 £, mais libérer une journée-lit ne fait pas économiser 400 £ — le bâtiment, le chauffage et l'essentiel des coûts de personnel continuent de courir. Le montant de trésorerie réellement libéré peut n'être que de 50 à 150 £, sauf si suffisamment de lits sont libérés pour fermer un service.

## Le calcul

```
Coût moyen :    CM = CT / Q
Coût marginal : Cm = dCT/dQ   (coût d'une unité en plus/en moins)

CT = coût total, Q = quantité
```

Les coûts fixes font que Cm < CM lors des réductions de capacité, et Cm peut approcher zéro en présence de capacité excédentaire. Les affirmations d'économies devraient utiliser :

```
Économie réelle = ΔQ × Cm            (petites variations)
Économie réelle = variation en palier de CT (grandes variations qui franchissent
                  un seuil de capacité, ex. fermeture d'un service)
```

## Exemple chiffré

Votre logiciel réduit la durée moyenne de séjour, libérant 1 000 journées-lits/an dans un trust.

- **Affirmation naïve** : 1 000 × 400 £ de coût moyen = **400 000 £ économisés**. Faux.
- **Affirmation marginale** : le coût variable par journée-lit (alimentation, blanchisserie, consommables, une partie de la flexibilité infirmière) ≈ 120 £. Économie = 1 000 × 120 £ = **120 000 £**, *plus* la valeur de la capacité libérée si les lits sont réoccupés par des patients programmés en attente (recette au titre du paiement à l'activité, ou réduction de la liste d'attente).
- **Affirmation en palier** : si le trust libère 7 300 journées-lits/an (un service de 20 lits), il peut effectivement fermer le service : personnel + fonctionnement ≈ 1,5 million £/an de trésorerie réelle. Là, le calcul au coût moyen se rapproche de la vérité.

Même intervention, trois chiffres défendables, selon que le changement franchit ou non un palier de capacité.

## Lien avec l'ingénierie logicielle

L'économie du cloud est un terrain naturel de coût marginal :

- Le coût marginal d'une exécution CI supplémentaire sur une capacité déjà réservée est ≈ 0 £, alors que le coût moyen par exécution (dépense totale de la plateforme ÷ exécutions) peut se chiffrer en livres. Les systèmes de refacturation qui facturent au coût moyen incitent les équipes à sous-utiliser une capacité partagée qui, à la marge, est en réalité gratuite.
- À l'inverse, « nous avons économisé 30 % de calcul » ne libère de la trésorerie que si les instances sont réellement arrêtées ou les réservations réduites — l'équivalent logiciel du piège de la journée-lit. Voir [économies libératrices de trésorerie contre économies non libératrices de trésorerie](../cash-releasing-vs-non-cash-releasing/).

## Pièges

- **Valoriser la capacité au coût moyen** et la présenter comme de la trésorerie (le cas classique).
- **Supposer que le coût marginal est constant.** Il évolue par paliers aux frontières de capacité (fermetures de services, niveaux de licence, engagements d'instances réservées).
- **Utiliser le coût marginal pour les décisions d'expansion mais le coût moyen pour la contraction** dans le même dossier — choisir selon la décision réellement en jeu.

## Sources

- York Health Economics Consortium glossary: marginal cost. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
