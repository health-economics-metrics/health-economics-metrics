# Capacité de création de valeur (redressement opérationnel)

La capacité de création de valeur est le « bénéfice d'opportunité » du temps libéré : ce que l'hôpital peut désormais *accomplir* grâce aux heures que votre logiciel dégage. C'est l'indicateur qui compte le plus pour les directeurs des opérations (Chief Operating Officers) et les directeurs médicaux, car il s'exprime dans la monnaie sur laquelle ils sont pilotés — activité, cibles et délais de prise en charge.

## Pourquoi c'est important

Le NHS fait face à des retards massifs de délais entre orientation et traitement, et les trusts qui manquent les normes nationales de délai d'attente s'exposent à un contrôle réglementaire et à des mesures d'intervention (voir [délai entre orientation et traitement](../referral-to-treatment/)). Le recrutement est lent et contraint ; le patrimoine immobilier est fixe. Le seul levier rapide consiste à tirer davantage d'activité créatrice de valeur du personnel et des espaces existants. Un logiciel qui récupère du temps spécialisé ne se contente pas de « faire économiser de l'argent » — il *crée de la capacité* : des consultations qui n'auraient pas pu exister, des évaluations qui n'auraient pas pu être programmées, sans recruter ni construire.

## Le calcul

```
Capacité cachée créée = temps libéré → unités d'activité rendues possibles × valeur tarifaire

Unités d'activité : consultations externes, évaluations préopératoires, revues de suivi
Valeur tarifaire :  tarif national / prix du NHS Payment Scheme
                     (voir national-tariff-and-unit-costs.md)
```

Il s'agit de la valorisation par les résultats du [temps des praticiens](../practitioner-time/), mise à l'échelle d'une ligne de service et exprimée dans les unités d'activité déjà utilisées par les équipes opérationnelles pour planifier.

## Exemple chiffré

Des infirmières spécialisées de Band 6 animent des cliniques d'évaluation préopératoire. L'automatisation de la documentation libère 1 heure/jour pour chacune des 25 infirmières ; chaque heure permet 2 évaluations.

```
Évaluations supplémentaires = 25 infirmières × 2/jour × 250 jours = 12,500/an
À une valeur tarifaire d'environ £120 par évaluation préopératoire :
  12,500 × £120 = £1.5M/an de capacité de soins créée
```

— sans recruter une seule infirmière ni construire une seule salle. (Le modèle largement cité dont cette fiche s'inspirait à l'origine avançait un chiffre de £766,920/an pour une cohorte plus restreinte ; la logique arithmétique est la même — le chiffre évolue avec le nombre d'infirmières × séances × tarif.) Le cadrage opérationnel pour le directeur des opérations : l'évaluation préopératoire cesse d'être la contrainte sur les programmes opératoires — les annulations d'opérations le jour même diminuent, et l'utilisation des blocs opératoires augmente, ce qui est le point de départ du *prochain* poste de bénéfice (voir [optimisation des ressources en aval](../downstream-resource-optimization/)).

## Lien avec l'ingénierie logicielle

Le même recadrage sauve les affirmations de productivité des développeurs du simple calcul salarial : le temps d'ingénierie libéré, exprimé comme *capacité livrée que l'organisation n'aurait pas pu financer autrement* — fonctionnalités, migrations, travaux de fiabilité — valorisé au coût que l'organisation paierait pour une telle capacité à la marge (tarifs de prestataires, ou équivalents de recrutement différé). Le cadrage « directeur des opérations » enseigne aussi quelque chose sur la manière de présenter le travail de plateforme : exprimez le bénéfice dans les unités sur lesquelles votre audience est pilotée. Les responsables opérationnels pensent en activité et en cibles, pas en heures abstraites ; les responsables d'ingénierie pensent en éléments de feuille de route et en effectifs, pas en minutes économisées.

## Pièges

- **Des affirmations de capacité sans demande** : 12,500 créneaux d'évaluation supplémentaires ne comptent que si le flux chirurgical les remplit — vérifiez la contrainte en aval.
- **La valeur tarifaire sans mécanisme de paiement** : sous un paiement mixte, l'activité supplémentaire peut ne générer aucun revenu additionnel ; la valeur peut résider plutôt dans la réduction de la liste d'attente (voir [impact sur la liste d'attente](../waiting-list-impact/)).
- **Présenter la capacité comme de la trésorerie** — il s'agit du bénéfice phare non générateur de trésorerie ; étiquetez-le comme tel (voir [générateur de trésorerie vs non générateur de trésorerie](../cash-releasing-vs-non-cash-releasing/)).

## Sources

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
