# Coûts d'externalisation évitables

Lorsqu'un trust ne peut pas atteindre ses objectifs avec sa capacité interne, il achète de la capacité à des tarifs majorés : heures supplémentaires de week-end pour son propre personnel, ou externalisation d'actes vers des prestataires privés. La valeur économique des logiciels libérant de la capacité inclut le **coût évitable de ce travail à tarif majoré**.

## Pourquoi c'est important

Sous la pression de la reprise de l'activité programmée, les trusts paient régulièrement les prix ponctuels du secteur privé (souvent 1,2 à 1,5× le prix du barème NHS) ou des taux majorés d'initiative de liste d'attente à leurs propres consultants pour des listes de week-end. Contrairement aux revendications de capacité ordinaires, l'externalisation évitée **libère de la trésorerie** : la facture au prestataire privé n'est réellement pas émise. Cela en fait l'une des lignes de bénéfice les plus solides disponibles pour un logiciel qui augmente le débit interne — et l'une des plus faciles à documenter, car la dépense d'externalisation est déjà une ligne budgétaire visible.

## Le calcul

```
Coût d'externalisation évitable = activité rapatriée en interne × (prix
                                  unitaire externalisé − coût marginal
                                  interne par cas)

Coût marginal interne : consommables + personnel variable pour l'activité
supplémentaire — le patrimoine immobilier fixe est déjà payé (voir
marginal-vs-average-cost.md).
```

La revendication exige que la capacité interne libérée absorbe réellement l'activité : les sessions de bloc opératoire, les lits et le personnel doivent tous être disponibles (c'est la contrainte contraignante qui gouverne — encore la théorie des contraintes).

## Exemple chiffré

Un trust externalise 800 interventions de la cataracte/an à 900 £ chacune : 720 000 £/an de dépense externe, contre un prix de barème d'environ 750 £.

Un logiciel de planification de bloc opératoire (optimisation des listes, comblement des créneaux libérés par les annulations, suivi du temps de rotation) augmente suffisamment l'utilisation interne du bloc pour rapatrier 500 interventions :

```
Coût marginal interne par cas ≈ 350 £ (consommables + personnel de session)
Économie = 500 × (900 − 350) = 275 000 £/an — libère de la trésorerie
Externalisation restante : 300 × 900 £ = 270 000 £ (contre 720 000 £)
```

Coût du logiciel 90 000 £/an → net ≈ **+185 000 £/an de trésorerie encaissable**, plus les bénéfices de qualité interne et de formation liés au maintien du travail en interne.

## Lien avec l'ingénierie logicielle

L'analogue direct est la **prime de sous-traitance et de conseil** : lorsque la capacité d'ingénierie interne ne peut pas honorer les engagements, les organisations achètent de la capacité externe à 1,5–3× les taux internes chargés. Les investissements en plateforme et en productivité qui augmentent le débit interne devraient revendiquer la dépense de sous-traitance évitée exactement comme ci-dessus — taux journalier externe moins coût marginal interne, multiplié par le travail rapatrié — car c'est l'une des rares lignes réellement génératrices de trésorerie dans un dossier d'affaires de productivité des développeurs. La même mise en garde s'applique : la capacité interne doit réellement exister et être planifiée sur le travail rapatrié, sinon la revendication n'est que fiction.

## Pièges

- **Revendiquer un rapatriement sans la chaîne de capacité complète** — des chirurgiens libérés mais pas de créneaux de bloc (ou des ingénieurs libérés mais pas de bande passante de gestion de produit) ne rapatrie rien.
- **Comparer le prix externalisé au coût moyen interne** plutôt qu'au coût marginal — sous-estime l'économie, aussi étrange que cela paraisse ; les coûts fixes courent dans les deux cas.
- **Asymétrie de qualité/complexité** : les cas externalisés sont souvent les plus simples ; les rapatrier modifie le mix de cas interne et les coûts unitaires.

## Sources

- NHS England, plan de reprise des soins programmés. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
