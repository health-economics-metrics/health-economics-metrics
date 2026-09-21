# Jours-lits économisés

Un jour-lit correspond à un patient occupant un lit d'hôpital pendant une journée. Les « jours-lits économisés » — par sortie plus précoce, évitement d'admission, ou services hospitaliers virtuels — sont le bénéfice de référence des dossiers d'affaires numériques du NHS, et le plus fréquemment surestimé.

## Pourquoi c'est important

Les lits sont la contrainte contraignante des soins aigus : quand les lits se remplissent, la chirurgie programmée est annulée, les ambulances font la queue, et le service des urgences s'engorge. Les interventions qui libèrent des jours-lits portent donc une valeur réelle — mais le *type* de valeur dépend entièrement de ce qui advient du lit libéré. Les directeurs financiers ont appris à fortement décoter les revendications naïves de jours-lits ; obtenir cette arithmétique juste est un test de crédibilité.

## Le calcul

```
Jours-lits économisés = patients concernés × Δ durée de séjour (ou
                        admissions évitées × durée moyenne de séjour)

La valeur dépend de l'usage de la capacité libérée :
  reremplie par de l'activité programmée → valeur = revenu d'activité
                                            ou bénéfice de liste d'attente
  service fermé / réduit                 → valeur = personnel + coût de
                                            fonctionnement libéré (trésorerie)
  absorbée comme marge de manœuvre       → valeur ≈ coût marginal (hôtelier)
                                            seul, 50–150 £/jour
```

Le coût moyen pleinement absorbé d'un jour-lit aigu est souvent cité à plus de 400 £ (National Cost Collection, historiquement ~350 £ pour les jours-lits excédentaires) — mais voir [coût marginal contre coût moyen](../marginal-vs-average-cost/) : la moyenne n'est presque jamais l'économie réelle.

## Exemple chiffré

Un « service hospitalier virtuel » de télésurveillance permet à 600 patients/an de rentrer chez eux 2 jours plus tôt : 1 200 jours-lits économisés.

- **Revendication naïve** : 1 200 × 400 £ = 480 000 £. Faux à moins qu'un service ne ferme.
- **Revendication honnête** : le trust remplit les lits avec des patients d'orthopédie programmée. 1 200 jours-lits ÷ 3 jours de séjour moyen = 400 séjours programmés supplémentaires à environ 6 000 £ de revenu chacun sous paiement à l'activité = **2,4 M£ d'activité financée supplémentaire** (moins le coût marginal de traitement de ces patients), *plus* 400 patients sortis de la liste d'attente. Le coût de fonctionnement du service virtuel (350 000 £) se nette contre ce montant.

La capacité libérée qui est *réutilisée* vaut souvent plus que la revendication de trésorerie naïve — mais c'est un type de valeur différent, qui doit être étiqueté comme tel ([libérant ou non de la trésorerie](../cash-releasing-vs-non-cash-releasing/)).

## Lien avec l'ingénierie logicielle

Les « jours-serveur économisés » se comportent de manière identique. Décommissionner des environnements toujours actifs ne libère de la trésorerie que lorsque les instances sont réellement arrêtées ou les réservations résiliées ; la capacité réabsorbée dans le pool vaut son coût marginal (~0 sur des dépenses déjà engagées). La discipline parallèle : pour chaque économie revendiquée, nommez le *mécanisme* — arrêté, rerempli avec du travail à valeur, ou simplement évaporé. Les logiciels qui réduisent la durée de séjour hospitalier (coordination de sortie, télésurveillance, délai de rendu des diagnostics) devraient modéliser les trois scénarios et laisser le trust choisir par service.

## Pièges

- **Valorisation au coût moyen** d'une capacité marginale — l'erreur canonique.
- **Double comptage** : jours-lits économisés *et* admissions évitées *et* réduction de liste d'attente à partir du même lit libéré.
- **Supposer que les jours économisés sont les jours les plus coûteux** : les jours économisés en fin de séjour sont les moins chers (faible acuité).

## Sources

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, calculateur de coût NHS. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
