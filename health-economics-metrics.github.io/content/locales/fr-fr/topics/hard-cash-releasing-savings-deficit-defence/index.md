# Économies libérant de la trésorerie réelle (défense de déficit)

Les économies libérant de la trésorerie réelle (« hard cash-releasing savings ») sont des postes que l'hôpital peut activement **supprimer du budget du mois prochain** grâce à votre logiciel. Pour un comptable financier strict — et pour un trust en déficit —, c'est la seule catégorie de bénéfice qui compte pleinement.

## Pourquoi c'est important

De nombreux trusts du NHS opèrent sous des plans de redressement de déficit avec un examen intense de chaque ligne de dépense. Dans cet environnement, les gains de capacité et les améliorations de qualité — aussi réels soient-ils — ne comblent pas l'écart ; seule la trésorerie compte. Un produit logiciel capable de prouver qu'il supprime des lignes budgétaires s'autofinance *du point de vue du directeur financier*, ce qui transforme les achats : la conversation cesse d'être « pouvons-nous nous le permettre ? » pour devenir « pouvons-nous nous permettre de ne pas le faire ? ». Ce document est le versant offensif, face au déficit, des [économies libérant de la trésorerie vs non libérant de la trésorerie](../cash-releasing-vs-non-cash-releasing/).

## Le calcul

La cible de trésorerie réelle la plus fiable du NHS est le **personnel temporaire à tarif majoré**. Les trusts couvrent les lacunes avec du personnel interne « Bank » (payé à des taux quasi standards) et du personnel externe « Agency » (souvent 2 à 3 fois les taux Agenda for Change, plafonnés mais fréquemment dépassés pour les postes rares).

```
Économie réelle = postes premium évités × (taux premium − taux titulaire)
                + heures supplémentaires évitées × majoration heures sup
                + contrats externes annulés × valeur du contrat

Exigence de mécanisme : nommez la ligne budgétaire précise et le
responsable qui confirmera sa réduction. Si personne ne peut pointer
la ligne, ce n'est pas de la trésorerie réelle.
```

## Exemple chiffré

Une infirmière de grade Band 6 perd environ 1 heure/vacation à cause de la charge administrative ; la documentation déborde régulièrement au-delà de la fin de vacation en heures supplémentaires, et les services réservent du personnel Bank supplémentaire pour rattraper la documentation.

Le logiciel restitue cette heure à la vacation programmée pour 300 infirmières :

```
Heures supplémentaires évitées : 300 infirmières × 2,5 h sup. payées/semaine
                                  × 8 £ de majoration × 46 semaines
                                  ≈ 276 000 £/an
Vacations Bank/agence :           15 vacations de rattrapage/semaine
                                  × 180 £ de majoration × 52
                                  ≈ 140 400 £/an
Total trésorerie réelle           ≈ 416 000 £/an contre un coût de
                                  licence d'environ 150 000 £
```

Chaque livre est vérifiable au regard des systèmes de planification électronique (e-rostering) et de paie — c'est exactement ainsi que le bénéfice devrait être démontré, mensuellement, via la [réalisation des bénéfices](../benefits-realization/). (Des modèles publiés de main-d'œuvre du NHS ont revendiqué des ratios allant jusqu'à 11 £+ économisées par 1 £ dépensée sur ce mécanisme ; traitez tout ratio de ce type comme une hypothèse à vérifier sur les données de planification de *votre* trust, pas comme un fait transposable.)

## Lien avec l'ingénierie logicielle

Les équivalents en ingénierie de la majoration d'agence sont les achats de détresse propres à l'organisation : les taux journaliers de prestataires couvrant les lacunes de livraison, les heures supplémentaires induites par des incidents, les contrats de support accéléré et la panique liée aux prix spot du cloud. Les logiciels de productivité revendiquant de la trésorerie réelle devraient cibler ces lignes avec la même rigueur — nommer la ligne budgétaire, le responsable, et le mois où elle se réduit. Tout le reste qu'ils apportent relève de la capacité ([capacité génératrice de valeur](../value-generating-capacity-operational-turnaround/)) ou de la qualité : réel, précieux, et différent.

## Pièges

- **Appeler la capacité des « économies »** — le tueur de crédibilité instantané auprès des financiers ; voir la taxonomie dans [économies libérant de la trésorerie vs non libérant de la trésorerie](../cash-releasing-vs-non-cash-releasing/).
- **Ratios de modèles fournisseurs présentés comme des faits locaux** (le problème du 11 £ pour 1 £) — reconstruisez le modèle sur les propres données de planification du trust.
- **Confusion ponctuel vs récurrent** : un contrat annulé économise sa valeur une fois par an, pas une seule fois ; un poste supprimé n'économise le salaire que tant qu'il reste supprimé.

## Sources

- NHS England, réduire les dépenses d'agence dans le NHS. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Digital, guide de dossier économique. <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
