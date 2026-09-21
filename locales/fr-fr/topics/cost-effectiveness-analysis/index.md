# Analyse coût-efficacité (CEA)

La CEA compare les coûts d'interventions alternatives par rapport à un résultat unique mesuré en **unités naturelles** — années de vie, cas détectés, admissions évitées, mmHg de réduction de la tension artérielle. Son résultat est un coût par unité de résultat.

## Pourquoi c'est important

La CEA est la comparaison de référence lorsque toutes les options visent le même résultat. Elle répond à « laquelle de ces façons d'atteindre X constitue le meilleur usage de l'argent ? » — mais *pas* à « X vaut-il la peine d'être atteint, tout simplement ? » (cela nécessite une [analyse coûts-bénéfices](../cost-benefit-analysis/)) et *pas* à « comment X se compare-t-il à des priorités sans rapport ? » (cela nécessite une [analyse coût-utilité](../cost-utility-analysis/) et un résultat générique comme le QALY).

## Le calcul

La statistique de comparaison est l'[ICER](../incremental-cost-effectiveness-ratio/) en unités naturelles :

```
ICER = (Coût_A − Coût_B) / (Effet_A − Effet_B)
     = £ par cas détecté supplémentaire / admission évitée / etc.
```

Procédure : définir l'unité de résultat ; chiffrer chaque option depuis la même [perspective](../analysis-perspective/) sur le même [horizon temporel](../time-horizon/) ; éliminer les options dominées ([frontière d'efficience](../dominance-and-efficiency-frontier/)) ; calculer les ratios incrémentaux le long de la frontière.

## Exemple chiffré

Trois façons de détecter la fibrillation auriculaire non diagnostiquée dans une population de 100 000 personnes :

```
Option                              Coût        Cas trouvés
Contrôles opportunistes du pouls    150 000 £      300
Événements de dépistage en pharmacie 400 000 £      520
Dépistage par objets connectés      900 000 £      610

ICER pharmacie vs pouls :  (400k−150k)/(520−300) = 1 136 £ par cas supplémentaire
ICER connecté vs pharmacie : (900k−400k)/(610−520) = 5 556 £ par cas supplémentaire
```

Savoir si 5 556 £ par cas supplémentaire « en vaut la peine » dépend de la valeur d'un cas trouvé (prévention d'AVC en aval) — la CEA classe les options, mais la décision d'adoption a besoin de cette valorisation externe. Notez que le coût *moyen* par cas de l'option connectée (900k/610 = 1 475 £) paraît correct ; le chiffre *incrémental* de 5 556 £ est le chiffre honnête pour la décision d'expansion.

## Lien avec l'ingénierie logicielle

La CEA est le bon modèle chaque fois que des options partagent un seul résultat : coût par test instable éliminé selon trois approches de remédiation ; coût par incident évité selon les fournisseurs d'observabilité ; coût par déploiement réussi selon les architectures de CI. La discipline qu'elle impose — une unité de résultat déclarée, des ratios incrémentaux (et non moyens), les options dominées éliminées en premier — tue la plupart des mauvaises comparaisons de fournisseurs avant même que la discussion tarifaire ne commence.

## Pièges

- **Comparer des options aux résultats différents** (« cas trouvés » vs « satisfaction ») dans une seule CEA — cela nécessite une [analyse coût-conséquence](../cost-consequence-analysis/) ou un résultat générique.
- **Des ratios coût-efficacité moyens** présentés là où des ratios incrémentaux sont nécessaires (l'exemple de l'objet connecté ci-dessus).
- **Des unités de résultat choisies pour flatter** : « alertes générées » est un extrant, pas un résultat ; exigez des unités porteuses de valeur.

## Sources

- CDC POLARIS : analyse coût-efficacité. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- Glossaire du York Health Economics Consortium. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
