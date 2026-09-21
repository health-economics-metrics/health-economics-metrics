# Économies Dures Libératrices de Trésorerie (Défense du Déficit)

Les économies dures libératrices de trésorerie sont des lignes qu'un hôpital peut activement **supprimer du budget du mois prochain** grâce à votre logiciel. Pour un comptable financier strict — et pour un trust en déficit — c'est la seule catégorie de bénéfice qui compte pleinement.

## Pourquoi c'est important

De nombreux trusts du NHS opèrent sous des plans de redressement de déficit avec un examen intense de chaque ligne de dépense. Dans cet environnement, les bénéfices de capacité et les améliorations de qualité — aussi réels soient-ils — ne comblent pas l'écart ; seule la trésorerie le fait. Un produit logiciel qui peut prouver qu'il supprime des lignes budgétaires *s'autofinance du point de vue du DAF*, ce qui transforme l'achat : la conversation cesse d'être « pouvons-nous nous le permettre ? » et devient « pouvons-nous nous permettre de ne pas le faire ? » Ce document est le bout tranchant face au déficit des [économies libératrices de trésorerie contre non libératrices](../économies-libératrices-de-trésorerie-contre-non-libératrices/).

## Le calcul

La cible d'argent dur la plus fiable du NHS est le **personnel temporaire à tarif premium**. Les trusts couvrent les manques avec du personnel « Bank » interne (payé à des tarifs quasi standards) et du personnel « Agence » externe (souvent 2-3× les tarifs Agenda for Change, plafonnés mais fréquemment dépassés pour les rôles rares).

```
Économie dure = vacations premium évitées × (tarif premium − tarif de base)
            + heures supplémentaires évitées × prime d'heures supplémentaires
            + contrats externes annulés × valeur du contrat

Exigence de mécanisme : nommez la ligne budgétaire spécifique et le gestionnaire qui
confirmera sa réduction. Si personne ne peut désigner la ligne, ce n'est pas de l'argent dur.
```

## Exemple résolu

Une infirmière de Bande 6 perd environ 1 heure/vacation à cause de charges administratives ; la documentation déborde régulièrement au-delà de la fin de vacation vers les heures supplémentaires, et les unités réservent une couverture Bank supplémentaire pour rattraper la documentation.

Le logiciel restitue cette heure à la vacation programmée pour 300 infirmières :

```
Heures supplémentaires évitées :   300 infirmières × 2,5 h sup payées/semaine × 8 £ prime × 46 semaines
                    ≈ 276 000 £/an
Vacations bank/agence : 15 vacations de rattrapage/semaine × 180 £ prime × 52
                    ≈ 140 400 £/an
Total d'argent dur     ≈ 416 000 £/an contre un coût de licence d'environ 150 000 £
```

Chaque livre est auditable face aux systèmes de planification électronique et de paie — c'est exactement ainsi que le bénéfice devrait être démontré, mensuellement, via la [réalisation des bénéfices](../réalisation-des-bénéfices/). (Les modèles de personnel publiés du NHS ont revendiqué des ratios allant jusqu'à 11 £+ économisés par 1 £ dépensée sur ce mécanisme ; traitez tout ratio de ce type comme une hypothèse pour les données de planification propres de *votre* trust, pas comme un fait transposable.)

## Lien avec l'ingénierie logicielle

Les équivalents en ingénierie de la prime d'agence sont les achats de détresse propres à l'organisation : tarifs journaliers de prestataires couvrant des manques de livraison, heures supplémentaires pilotées par les incidents, contrats de support accéléré, et panique de prix spot cloud. Le logiciel de productivité revendiquant de l'argent dur devrait cibler ces lignes avec la même discipline — nommer la ligne budgétaire, le propriétaire, et le mois où elle se réduit. Tout ce qu'il livre d'autre est de la capacité ([capacité génératrice de valeur](../capacité-génératrice-de-valeur-redressement-opérationnel/)) ou de la qualité : réel, précieux, et différent.

## Pièges

- **Appeler la capacité des « économies »** — le tueur de crédibilité instantané avec la finance ; voir la taxonomie dans [économies libératrices de trésorerie contre non libératrices](../économies-libératrices-de-trésorerie-contre-non-libératrices/).
- **Ratios de modèle fournisseur présentés comme fait local** (le problème 11£:1£) — reconstruisez le modèle sur les données de planification propres du trust.
- **Confusion unique contre récurrent** : un contrat annulé économise sa valeur une fois par an, pas une seule fois ; un poste supprimé économise le salaire seulement tant qu'il reste supprimé.

## Sources

- NHS England, réduction des dépenses d'agence dans le NHS. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- Guide de dossier de décision NHS Digital, cas économique. <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
