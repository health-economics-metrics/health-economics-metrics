# Optimisation des ressources en aval

Faire gagner une heure à un praticien senior — un médecin généraliste, un interne senior, un médecin consultant — évite souvent des goulots d'étranglement pour toute une équipe pluridisciplinaire (MDT) d'infirmiers, d'agents administratifs et de thérapeutes qui attendent des validations cliniques. La valeur du déblocage du goulot d'étranglement est le débit de tout ce qui se trouve en aval de celui-ci.

## Pourquoi c'est important

Les soins de santé fonctionnent par chaînes d'autorisation : les sorties attendent la validation d'un consultant, les plans de traitement attendent la revue de l'équipe pluridisciplinaire, les orientations attendent le triage. Quand le rôle qui verrouille le processus est retardé, le coût n'est pas celui d'une heure d'une seule personne — c'est du temps inactif ou bloqué à travers chaque rôle dépendant, plus du temps de patient en limbe (des [jours-lits](../bed-days-saved/) supplémentaires, des [attentes RTT](../referral-to-treatment/) plus longues). C'est la théorie des contraintes appliquée aux parcours cliniques : une heure économisée *à la contrainte* vaut le débit marginal de tout le système ; une heure économisée ailleurs vaut bien moins.

## Le calcul

```
Valeur du déblocage = Σ sur les rôles en aval (heures bloquées libérées × coût unitaire)
                     + gain de débit du parcours × valeur par achèvement de parcours

Comparaison : la valeur de la même heure économisée sur un rôle non contraignant
≈ la seule valeur de capacité de ce rôle (voir practitioner-time.md).
```

Identifiez la contrainte empiriquement : où le travail file-t-il d'attente le plus longtemps ? Vers quelle boîte de réception les retards remontent-ils ?

## Exemple chiffré

Dans un service, les sorties nécessitent une revue par un consultant chaque matin. Le consultant passe 90 minutes/jour à rassembler des informations éparpillées entre systèmes ; les revues se terminent à 14h00, et 6 sorties/jour se terminent trop tard pour ce jour-là — chacune coûtant un jour-lit évitable.

Un tableau de bord de synthèse de sortie (résultats de laboratoire, médicaments, alertes réunis en une seule vue) réduit l'assemblage à 20 minutes ; les revues se terminent à 11h30 :

```
Jours-lits évités       = 4 des 6 sorties tardives × 365 ≈ 1 460 jours-lits/an
Déblocage en aval : 2 coordinateurs de sortie + pharmacie + transport
                    auparavant inactifs puis débordés chaque après-midi —
                    ~3 heures de personnel/jour de temps bloqué libérées
                    ≈ 1 100 heures/an
```

Les 70 minutes gagnées par le consultant lui-même sont la *plus petite* part de la valeur — c'est tout l'intérêt de cette métrique. Valorisez les jours-lits selon leur mécanisme (voir [jours-lits économisés](../bed-days-saved/)) et les heures de personnel comme de la capacité.

## Lien avec l'ingénierie logicielle

C'est la revue de code, la validation d'architecture et la boîte de réception de l'ingénieur senior référent. Quand cinq ingénieurs attendent une journée la seule personne pouvant approuver une conception, le coût est de cinq jours-ingénieur plus une journée de [coût du retard](../cost-of-delay/) sur le travail lui-même — pas une heure d'un seul relecteur. L'outillage qui comprime la tâche du rôle verrouillant le processus (meilleur contexte de revue, pré-vérifications automatisées, tableaux de bord qui rassemblent ce dont l'approbateur a besoin) achète du débit système, pas du confort individuel. Mesurez le temps de prise en charge/d'attente à la contrainte (voir [métriques de flux](../flow-metrics/)) — c'est l'équivalent logiciel de la falaise des sorties de 14h00.

## Pièges

- **Optimiser un élément qui n'est pas la contrainte** : un outillage superbe pour un rôle derrière lequel rien ne fait la queue produit une valeur système quasi nulle.
- **Migration de la contrainte** : débloquez le consultant et la contrainte se déplace (vers la pharmacie, vers le transport) — modélisez la *prochaine* contrainte avant de revendiquer des gains de débit complets.
- **Compter les heures en aval comme du cash** : la libération de temps bloqué est de la capacité, soumise au [test de redéploiement](../cash-releasing-vs-non-cash-releasing/) habituel.

## Sources

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
