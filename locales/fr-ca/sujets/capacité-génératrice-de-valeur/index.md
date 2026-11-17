# Capacité Génératrice de Valeur (Redressement Opérationnel)

La capacité génératrice de valeur est le « bénéfice d'opportunité » du temps libéré : ce que l'hôpital peut maintenant *accomplir* avec les heures que votre logiciel libère. C'est la métrique qui compte le plus pour les Directeurs des Opérations et les Directeurs Médicaux, car elle parle dans la monnaie sur laquelle ils sont gérés — activité, objectifs et redressement.

## Pourquoi c'est important

Le NHS fait face à d'énormes arriérés de recommandation vers traitement, et les trusts qui manquent les normes nationales de temps d'attente font face à un examen réglementaire et à une intervention (voir [recommandation vers traitement](../recommandation-vers-traitement/)). Le recrutement est lent et contraint ; l'immobilier est fixe. Le seul levier rapide est de tirer plus d'activité génératrice de valeur du personnel et de l'espace existants. Un logiciel qui récupère du temps de spécialiste ne « économise » pas seulement de l'argent — il *frappe de la capacité* : des cliniques qui ne pouvaient pas exister, des évaluations qui ne pouvaient pas être planifiées, sans recruter ni construire.

## Le calcul

```
Capacité cachée créée = temps libéré → unités d'activité permises × valeur du régime

Unités d'activité : consultations ambulatoires, évaluations préopératoires, revues de surveillance
Valeur du régime :   prix de tarif national / Régime de Paiement du NHS
                (voir national-tariff-and-unit-costs.md)
```

C'est la valorisation de base de résultat du [temps du praticien](../temps-du-praticien/), échelonnée à une ligne de service et exprimée dans les unités d'activité selon lesquelles l'équipe des opérations planifie déjà.

## Exemple résolu

Des infirmières spécialisées de Bande 6 dirigent des cliniques d'évaluation préopératoire. L'automatisation de la documentation récupère 1 heure/jour pour chacune des 25 infirmières ; chaque heure permet 2 évaluations.

```
Évaluations supplémentaires = 25 infirmières × 2/jour × 250 jours = 12 500/an
À environ 120 £ de valeur de régime par évaluation préopératoire :
  12 500 × 120 £ = 1,5 M£/an de capacité de soins créée
```

— sans recruter une seule infirmière ni construire une seule salle. (Le modèle largement cité que cette ébauche citait à l'origine plaçait le chiffre à 766 920 £/an pour une cohorte plus petite ; le modèle arithmétique est le même — le chiffre s'échelonne avec infirmières × sessions × tarif.) Le cadrage opérationnel pour le Directeur des Opérations : l'évaluation préopératoire cesse d'être la contrainte sur les listes de bloc — les opérations annulées le jour même chutent, et l'utilisation du bloc augmente, ce qui est là où commence la *prochaine* ligne de bénéfice (voir [optimisation des ressources en aval](../optimisation-des-ressources-en-aval/)).

## Lien avec l'ingénierie logicielle

Le même recadrage sauve les allégations de productivité des développeurs de l'arithmétique salariale : le temps d'ingénierie libéré, exprimé comme *capacité livrée que l'organisation n'aurait pas pu se permettre autrement* — fonctionnalités, migrations, travail de fiabilité — tarifé à ce que l'organisation paie pour une telle capacité à la marge (tarifs de prestataires, ou équivalents de recrutement différé). Le cadrage du Directeur des Opérations enseigne aussi quelque chose sur la présentation du travail de plateforme : exprimez le bénéfice dans les unités selon lesquelles le public est géré. Les leaders des opérations pensent en activité et objectifs, pas en heures abstraites ; les leaders d'ingénierie pensent en éléments de feuille de route et effectifs, pas en minutes économisées.

## Pièges

- **Allégations de capacité sans demande** : 12 500 créneaux d'évaluation supplémentaires ne comptent que si le pipeline chirurgical les remplit — vérifiez la contrainte en aval.
- **Valeur de tarif sans mécanisme de paiement** : sous un paiement mélangé, l'activité supplémentaire peut ne pas apporter de revenu supplémentaire ; la valeur peut être une réduction de liste d'attente à la place (voir [impact sur liste d'attente](../impact-sur-liste-d-attente/)).
- **Présenter la capacité comme de la trésorerie** — c'est le bénéfice phare ne libérant pas de trésorerie ; étiquetez-le (voir [libérateur de trésorerie contre non libérateur](../économies-libératrices-de-trésorerie-contre-non-libératrices/)).

## Sources

- NHS England, Régime de Paiement du NHS. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, plan de récupération des soins programmés. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
