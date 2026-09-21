# Analyse Coût-Efficacité (ACE)

L'ACE compare les coûts d'interventions alternatives par rapport à un résultat unique mesuré en **unités naturelles** — années de vie, cas détectés, admissions évitées, mmHg de pression artérielle réduite. Son résultat est un coût par unité de résultat.

## Pourquoi c'est important

L'ACE est la comparaison cheval de bataille lorsque toutes les options visent le même résultat. Elle répond à « laquelle de ces façons d'atteindre X est le meilleur usage de l'argent ? » — mais *pas* « vaut-il la peine d'atteindre X, tout simplement ? » (cela nécessite l'[analyse coûts-bénéfices](../analyse-coûts-bénéfices/)) et *pas* « comment X se compare-t-il à des priorités sans rapport ? » (cela nécessite l'[analyse coût-utilité](../analyse-coût-utilité/) et un résultat générique comme le QALY).

## Le calcul

La statistique de comparaison est le [RCEI](../ratio-coût-efficacité-incrémental/) en unités naturelles :

```
RCEI = (Coût_A − Coût_B) / (Effet_A − Effet_B)
     = £ par cas supplémentaire détecté / admission évitée / etc.
```

Procédure : définissez l'unité de résultat ; chiffrez chaque option depuis la même [perspective](../perspective-d-analyse/) sur le même [horizon temporel](../horizon-temporel/) ; éliminez les options dominées ([frontière d'efficience](../dominance-et-frontière-d-efficience/)) ; calculez les ratios incrémentaux le long de la frontière.

## Exemple résolu

Trois façons de trouver une fibrillation auriculaire non diagnostiquée dans une population de 100 000 :

```
Option                    Coût        Cas trouvés
Contrôles de pouls opportunistes  150 000 £      300
Événements de dépistage en pharmacie  400 000 £      520
Dépistage par objet connecté  900 000 £      610

RCEI pharmacie vs pouls :  (400k−150k)/(520−300) = 1 136 £ par cas supplémentaire
RCEI connecté vs pharmacie :(900k−400k)/(610−520) = 5 556 £ par cas supplémentaire
```

Que 5 556 £ par cas supplémentaire « en vaille la peine » dépend de la valeur d'un cas trouvé (prévention d'AVC en aval) — l'ACE classe les options mais la décision d'adoption nécessite cette valorisation externe. Notez que le coût *moyen* par cas de l'option connectée (900k/610 = 1 475 £) semble bien ; les 5 556 £ *incrémentaux* sont le chiffre honnête pour la décision d'expansion.

## Lien avec l'ingénierie logicielle

L'ACE est le modèle correct chaque fois que les options partagent un résultat : coût par test instable éliminé à travers trois approches de remédiation ; coût par incident évité à travers des fournisseurs d'observabilité ; coût par déploiement réussi à travers des architectures de CI. La discipline qu'elle impose — une unité de résultat déclarée, des ratios incrémentaux (pas moyens), les options dominées éliminées en premier — tue la plupart des mauvaises comparaisons de fournisseurs avant même que la discussion de prix ne commence.

## Pièges

- **Comparer des options avec des résultats différents** (« cas trouvés » contre « satisfaction ») dans une seule ACE — cela nécessite une [analyse coûts-conséquences](../analyse-coûts-conséquences/) ou un résultat générique.
- **Ratios coût-efficacité moyens** présentés là où les incrémentaux sont nécessaires (l'exemple connecté ci-dessus).
- **Unités de résultat choisies pour flatter** : « alertes générées » est un produit, pas un résultat ; insistez sur des unités porteuses de valeur.

## Sources

- CDC POLARIS : analyse coût-efficacité. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- Glossaire du York Health Economics Consortium. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
