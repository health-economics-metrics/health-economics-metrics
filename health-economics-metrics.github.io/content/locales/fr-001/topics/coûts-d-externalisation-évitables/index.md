# Coûts d'Externalisation Évitables

Lorsqu'un trust ne peut atteindre ses objectifs avec sa capacité interne, il achète de la capacité à des tarifs premium : heures supplémentaires de week-end pour son propre personnel, ou externalisation de procédures vers des prestataires privés. La valeur économique du logiciel libérant de la capacité inclut le **coût évitable de ce travail à tarif premium**.

## Pourquoi c'est important

Sous la pression de la récupération de l'activité programmée, les trusts paient couramment des prix au comptant du secteur privé (souvent 1,2 à 1,5× le prix du barème NHS) ou des taux premium d'initiative liste d'attente à leurs propres consultants pour des listes de week-end. Contrairement aux allégations de capacité ordinaires, l'externalisation évitée **libère de la trésorerie** : la facture au prestataire privé n'est véritablement pas émise. Cela en fait l'une des lignes de bénéfice les plus solides disponibles pour un logiciel qui augmente le débit interne — et l'une des plus faciles à démontrer, car la dépense d'externalisation est déjà une ligne budgétaire visible.

## Le calcul

```
Coût d'externalisation évitable = activité rapatriée en interne × (prix unitaire externalisé
                             − coût marginal interne par cas)

Coût marginal interne : consommables + personnel variable pour l'activité supplémentaire
— l'immobilier fixe est déjà payé (voir marginal-vs-average-cost.md).
```

L'allégation exige que la capacité interne libérée absorbe réellement l'activité : les vacations de bloc, les lits et le personnel doivent tous être disponibles (la contrainte contraignante gouverne — encore la théorie des contraintes).

## Exemple résolu

Un trust externalise 800 interventions de cataracte/an à 900 £ chacune : 720 000 £/an de dépense externe, contre un prix de barème d'environ 750 £.

Un logiciel de planification de bloc opératoire (optimisation des listes, comblement des créneaux libérés par les annulations, suivi du temps de rotation) augmente l'utilisation interne du bloc suffisamment pour rapatrier 500 interventions :

```
Coût marginal interne par cas ≈ 350 £ (consommables + personnel de vacation)
Économie = 500 × (900 − 350) = 275 000 £/an — libère de la trésorerie
Externalisation restante : 300 × 900 £ = 270 000 £ (était 720 000 £)
```

Coût du logiciel 90 000 £/an → net ≈ **+185 000 £/an en trésorerie capitalisable**, plus les bénéfices de qualité interne et de formation liés au maintien du travail en interne.

## Lien avec l'ingénierie logicielle

L'analogue direct est la **prime des prestataires et consultants** : lorsque la capacité interne d'ingénierie ne peut tenir ses engagements, les organisations achètent de la capacité externe à des taux internes chargés de 1,5 à 3×. Les investissements en plateforme et productivité qui augmentent le débit interne devraient revendiquer les dépenses de prestataires évitées exactement comme ci-dessus — tarif journalier externe moins coût marginal interne, multiplié par le travail rapatrié — car c'est l'une des rares lignes véritablement libératrices de trésorerie dans un dossier de productivité des développeurs. La même mise en garde s'applique : la capacité interne doit exister réellement et être planifiée sur le travail rapatrié, sinon l'allégation est fictive.

## Pièges

- **Revendiquer le rapatriement sans la chaîne de capacité complète** — des chirurgiens libérés mais aucun créneau de bloc (ou des ingénieurs libérés mais aucune bande passante de gestion produit) ne rapatrie rien.
- **Comparer le prix externalisé au coût moyen interne** plutôt qu'au coût marginal — sous-estime l'économie, curieusement ; les coûts fixes courent de toute façon.
- **Asymétrie qualité/complexité** : les cas externalisés sont souvent les simples ; les rapatrier change le mix de cas interne et les coûts unitaires.

## Sources

- NHS England, plan de récupération des soins programmés. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, Régime de Paiement du NHS. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
