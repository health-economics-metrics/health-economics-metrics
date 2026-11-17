# Optimisation des Ressources en Aval

Économiser une heure à un praticien senior — un médecin traitant, un chef de clinique senior, un consultant — évite souvent des retards de goulot d'étranglement pour toute une équipe pluridisciplinaire (EPD) d'infirmières, d'agents administratifs et de thérapeutes qui attendent des validations cliniques. La valeur du déblocage du goulot d'étranglement est le débit de tous ceux qui sont en aval de lui.

## Pourquoi c'est important

Les soins de santé fonctionnent avec des chaînes d'autorisation : les sorties attendent la validation du consultant, les plans de traitement attendent la revue de l'EPD, les recommandations attendent le triage. Lorsque le rôle de porte est retardé, le coût n'est pas l'heure d'une personne — c'est du temps inactif ou bloqué à travers chaque rôle dépendant, plus le temps du patient dans les limbes (jours-lits supplémentaires, attentes [RTT](../recommandation-vers-traitement/) plus longues). C'est la théorie des contraintes appliquée aux parcours cliniques : une heure économisée *à la contrainte* vaut le débit marginal de tout le système ; une heure économisée ailleurs vaut bien moins.

## Le calcul

```
Valeur du déblocage = Σ sur les rôles en aval (heures bloquées libérées × coût unitaire)
                    + gain de débit de parcours × valeur par achèvement de parcours

Contraste : la valeur de la même heure économisée sur un rôle non bloquant ≈ seulement
la valeur de capacité de ce rôle (voir practitioner-time.md).
```

Identifiez la contrainte empiriquement : où le travail fait-il la plus longue queue ? À quelle boîte de réception les retards se retracent-ils ?

## Exemple résolu

Les sorties d'une unité nécessitent une revue du consultant chaque matin. Le consultant passe 90 min/jour à rassembler des informations dispersées entre systèmes ; les revues se terminent vers 14h00, et 6 sorties/jour se complètent trop tard pour ce jour-là — chacune coûtant une journée-lit évitable.

Un tableau de bord de résumé de sortie (analyses, médicaments, alertes en une seule vue) réduit le rassemblement à 20 minutes ; les revues se terminent vers 11h30 :

```
Journées-lits évitées     = 4 des 6 sorties tardives × 365 ≈ 1 460 journées-lits/an
Déblocage en aval : 2 coordinateurs de sortie + pharmacie + transport
                       auparavant inactifs-puis-débordés chaque après-midi —
                       ~3 heures-personnel/jour de temps bloqué libéré ≈ 1 100 h/an
```

Les 70 minutes du consultant lui-même sont la partie *la plus petite* de la valeur — le point de cette métrique. Valorisez les journées-lits par mécanisme (voir [journées-lits économisées](../journées-lits-économisées/)) et les heures de personnel comme de la capacité.

## Lien avec l'ingénierie logicielle

Ceci est la revue de code, la validation d'architecture et la boîte de réception de l'ingénieur senior. Lorsque cinq ingénieurs attendent un jour la seule personne pouvant approuver une conception, le coût est de cinq jours-ingénieur plus un jour de [coût de retard](../coût-de-retard/) sur le travail lui-même — pas une heure-relecteur. Les outils qui compressent la tâche du rôle de porte (meilleur contexte de revue, vérifications préalables automatisées, tableaux de bord rassemblant ce dont l'approbateur a besoin) achètent du débit système, pas du confort individuel. Mesurez le temps de prise en charge/attente à la contrainte (voir [métriques de flux](../métriques-de-flux/)) — c'est l'équivalent logiciel de la falaise de sortie de 14h00.

## Pièges

- **Optimiser une non-contrainte** : un bel outillage pour un rôle sans file d'attente derrière lui produit une valeur système proche de zéro.
- **Migration de contrainte** : débloquez le consultant et la contrainte se déplace (vers la pharmacie, vers le transport) — modélisez la *prochaine* contrainte avant de revendiquer des gains de débit complets.
- **Compter les heures en aval comme de la trésorerie** : la libération de temps bloqué est de la capacité, soumise au [test de redéploiement](../économies-libératrices-de-trésorerie-contre-non-libératrices/) habituel.

## Sources

- Goldratt EM, *The Goal* (théorie des contraintes).
- NHS England, productivité du NHS. <https://www.england.nhs.uk/long-read/nhs-productivity/>
