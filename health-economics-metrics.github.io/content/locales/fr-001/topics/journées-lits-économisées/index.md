# Journées-Lits Économisées

Une journée-lit correspond à un patient occupant un lit d'hôpital pendant une journée. Les « journées-lits économisées » — via une sortie plus précoce, l'évitement d'admission, ou les unités virtuelles — sont le bénéfice cheval de bataille des dossiers de décision numériques du NHS, et le plus souvent surévalué.

## Pourquoi c'est important

Les lits sont la contrainte contraignante des soins aigus : lorsque les lits se remplissent, la chirurgie programmée est annulée, les ambulances font la queue et le service des urgences déborde. Les interventions qui libèrent des journées-lits portent donc une valeur réelle — mais le *type* de valeur dépend entièrement de ce qui arrive au lit libéré. Les directeurs financiers ont appris à fortement décoter les allégations naïves de journées-lits ; obtenir cette arithmétique juste est un test de crédibilité.

## Le calcul

```
Journées-lits économisées = patients concernés × Δ durée de séjour (ou admissions évitées × DMS moyenne)

La valeur dépend de l'usage de la capacité libérée :
  reremplie avec de l'activité programmée → valeur = revenu d'activité ou bénéfice de liste d'attente
  unité fermée / réduite      → valeur = personnel + coût de fonctionnement libéré (trésorerie)
  absorbée comme marge          → valeur ≈ seul le coût marginal (hôtelier), 50–150 £/jour
```

Le coût moyen pleinement absorbé d'une journée-lit aiguë est souvent cité à 400 £+ (la Collecte Nationale de Coûts historiquement ~350 £ pour les journées-lits excédentaires) — mais voir [coût marginal contre moyen](../coût-marginal-contre-coût-moyen/) : la moyenne n'est presque jamais l'économie réelle.

## Exemple résolu

Une « unité virtuelle » de télésurveillance permet à 600 patients/an de rentrer chez eux 2 jours plus tôt : 1 200 journées-lits économisées.

- **Allégation naïve** : 1 200 × 400 £ = 480 000 £. Faux à moins qu'une unité ne ferme.
- **Allégation honnête** : le trust remplit les lits avec des patients orthopédiques programmés. 1 200 journées-lits ÷ séjour moyen de 3 jours = 400 séjours programmés supplémentaires à environ 6 000 £ de revenu chacun sous paiement à l'activité = **2,4 M£ d'activité financée supplémentaire** (moins le coût marginal de traiter ces patients), *plus* 400 patients sortis de la liste d'attente. Le coût de fonctionnement de l'unité virtuelle (350 000 £) se compense avec cela.

La capacité libérée qui est *réutilisée* vaut souvent plus que l'allégation de trésorerie naïve — mais c'est un type de valeur différent et doit être étiquetée comme telle ([libérateur de trésorerie contre non libérateur](../économies-libératrices-de-trésorerie-contre-non-libératrices/)).

## Lien avec l'ingénierie logicielle

Les « journées de serveur économisées » se comportent de manière identique. Démanteler des environnements toujours actifs ne libère de la trésorerie que lorsque les instances sont réellement résiliées ou les réservations expirées ; la capacité réabsorbée dans le pool vaut son coût marginal (~0 sur les dépenses engagées). La discipline parallèle : pour chaque économie revendiquée, nommez le *mécanisme* — résilié, reremplie avec du travail de valeur, ou évaporée. Un logiciel qui réduit la durée de séjour hospitalier (coordination des sorties, télésurveillance, délai de rendu des examens) devrait modéliser les trois scénarios et laisser le trust choisir par unité.

## Pièges

- **Valorisation au coût moyen** de la capacité marginale — l'erreur canonique.
- **Double comptage** : journées-lits économisées *et* admissions évitées *et* réduction de liste d'attente du même lit libéré.
- **Supposer que les jours économisés sont les jours coûteux** : les jours économisés en fin de séjour sont les moins chers (faible acuité).

## Sources

- NHS England, Collecte Nationale de Coûts. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, calculateur de coûts du NHS. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
