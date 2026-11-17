# Coût Marginal contre Coût Moyen

Le coût moyen est le coût total divisé par les unités produites. Le coût marginal est le coût de production d'une unité *supplémentaire*. Les décisions devraient être prises sur le coût marginal — mais les coûts unitaires publiés sont presque toujours des moyennes.

## Pourquoi c'est important

L'erreur la plus commune dans les dossiers de décision de santé numérique est de valoriser une ressource économisée à son coût **moyen** alors que l'économie réelle est le coût **marginal**. Une journée-lit d'hôpital a un coût moyen (pleinement absorbé) de 400 £+, mais libérer une journée-lit n'économise pas 400 £ — le bâtiment, le chauffage et la plupart des coûts de personnel continuent. La trésorerie réellement libérée peut être de 50-150 £ à moins que suffisamment de lits ne soient libérés pour fermer une unité.

## Le calcul

```
Coût moyen :  CM = CT / Q
Coût marginal : Cm = dCT/dQ   (coût d'une unité de plus/de moins)

CT = coût total, Q = quantité
```

Les coûts fixes font que Cm < CM pour les réductions de capacité, et le Cm peut approcher zéro lorsque de la capacité de réserve existe. Les allégations d'économies devraient utiliser :

```
Économie réelle = ΔQ × Cm          (petits changements)
Économie réelle = changement en escalier du CT (grands changements qui franchissent un seuil
              de capacité, par ex. fermer une unité)
```

## Exemple résolu

Votre logiciel réduit la durée de séjour moyenne, libérant 1 000 journées-lits/an dans un trust.

- **Allégation naïve** : 1 000 × 400 £ de coût moyen = **400 000 £ économisées**. Faux.
- **Allégation marginale** : le coût variable par journée-lit (nourriture, blanchisserie, consommables, une certaine flexibilité infirmière) ≈ 120 £. Économie = 1 000 × 120 = **120 000 £**, *plus* la valeur de la capacité libérée si les lits sont reremplis avec des patients programmés en attente (revenu sous paiement à l'activité, ou réduction de liste d'attente).
- **Allégation de changement en escalier** : si le trust libère 7 300 journées-lits/an (une unité de 20 lits), il peut réellement fermer l'unité : personnel + fonctionnement ≈ 1,5 million £/an de trésorerie réelle. Maintenant l'arithmétique du coût moyen est plus proche de la vérité.

Même intervention, trois chiffres défendables, selon que le changement franchit ou non un palier de capacité.

## Lien avec l'ingénierie logicielle

L'économie du cloud est un territoire natif de coût marginal :

- Le coût marginal d'une exécution CI supplémentaire sur de la capacité déjà réservée est ≈ 0 £, tandis que le coût moyen par exécution (dépense totale de plateforme ÷ exécutions) peut se compter en livres. Les systèmes de refacturation qui facturent le coût moyen poussent les équipes à sous-utiliser une capacité partagée qui est en fait gratuite au marginal.
- Inversement, « nous avons économisé 30 % de calcul » ne libère de la trésorerie que si les instances sont réellement résiliées ou les réservations réduites — la version logicielle du piège de la journée-lit. Voir [économies libératrices de trésorerie contre non libératrices](../économies-libératrices-de-trésorerie-contre-non-libératrices/).

## Pièges

- **Valoriser la capacité au coût moyen** et la présenter comme de la trésorerie (le classique).
- **Supposer que le coût marginal est constant.** Il s'échelonne aux frontières de capacité (fermetures d'unités, niveaux de licence, engagements d'instances réservées).
- **Utiliser le coût marginal pour les décisions d'expansion mais le moyen pour la contraction** dans le même dossier — choisissez selon la décision réelle.

## Sources

- Glossaire du York Health Economics Consortium : coût marginal. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, Collecte Nationale de Coûts. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
