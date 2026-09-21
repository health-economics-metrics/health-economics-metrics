# Économies libérant de la trésorerie vs économies ne libérant pas de trésorerie

Les économies libérant de la trésorerie (cash-releasing) réduisent la dépense réelle — une ligne budgétaire diminue. Les économies ne libérant pas de trésorerie (non-cash-releasing) libèrent du temps ou de la capacité qui est *réutilisé* plutôt qu'encaissé. Les directeurs financiers des systèmes de santé traitent ces deux notions comme des espèces différentes, et vous devriez faire de même.

## Pourquoi c'est important

C'est le test d'honnêteté le plus exigeant appliqué à tout dossier d'investissement numérique dans un service de santé national. Les cadres de bénéfices du NHS classent explicitement chaque bénéfice revendiqué en trésorerie libérée, trésorerie non libérée, ou qualitatif. La plupart des « économies » de santé numérique — minutes de clinicien économisées par patient, documentation plus rapide — ne libèrent pas de trésorerie : elles ont de la valeur, mais ne réduisent pas le déficit. Un directeur financier de trust confronté à un déficit de financement ne peut dépenser que de la trésorerie. Voir aussi [économies fermes libérant de la trésorerie](../hard-cash-releasing-savings-deficit-defence/).

## Le calcul

```
Économie libérant de la trésorerie = ligne budgétaire avant − ligne budgétaire après
                          (doit être extractible : un contrat résilié, un service fermé,
                           une réduction des dépenses d'intérim, un achat évité)

Valeur ne libérant pas de trésorerie = temps libéré × coût unitaire de ce temps
                          (valorisé au coût d'opportunité ; l'argent n'est PAS extractible)
```

Le même événement physique (une heure économisée) se classe dans l'une ou l'autre catégorie selon ce qui se passe ensuite :

```
heure économisée → vacation d'heures supplémentaires/intérim annulée → libère de la trésorerie
heure économisée → le clinicien voit un patient en attente de plus  → ne libère pas de trésorerie (capacité)
heure économisée → absorbée dans du temps mort, rien ne change      → aucun bénéfice
```

## Exemple chiffré

Un logiciel fait gagner 30 minutes par vacation à chacune de 100 infirmières. Cela représente 100 × 0,5 × 5 vacations/semaine × 46 semaines ≈ 11 500 heures/an. Avec un coût employeur de Bande 5 d'environ 25 £/heure, le titre tentant serait 287 500 £/an.

La répartition honnête :

- 20 % du temps correspond à des situations où les services paient actuellement une prime de personnel de pool/intérim pour couvrir des dépassements de documentation : 2 300 heures × taux d'intérim de 35 £ = **80 500 £ libérant de la trésorerie** (vacations réellement non réservées).
- 60 % est redéployé vers les soins directs aux patients : 6 900 heures × 25 £ = **172 500 £ de capacité ne libérant pas de trésorerie** — une valeur réelle, rapportée séparément, jamais qualifiée d'« économies ».
- 20 % se dissipe en pauses et interruptions : **0 £**. Le revendiquer relèverait de la fiction.

Un dossier d'investissement présentant 80,5 k£ de trésorerie + 172,5 k£ de capacité est crédible. Un dossier présentant 287,5 k£ d'« économies » sera rejeté par le premier comptable qui le lira.

## Lien avec l'ingénierie logicielle

Une logique identique régit le ROI des assistants de codage IA : « 30 minutes par développeur et par jour » est de la capacité ne libérant pas de trésorerie, sauf si les effectifs, les dépenses de sous-traitance ou le coût cloud diminuent réellement. Rapportez les catégories séparément :

- Libère de la trésorerie : engagements de prestataires annulés, licences d'outillage décommissionnées, dépenses cloud réduites.
- Capacité : fonctionnalités livrées plus tôt (valeur via le [coût du retard](../cost-of-delay/)), arriéré résorbé.
- Rien : minutes économisées qui se fragmentent en changements de contexte.

Suivez aussi *où le temps libéré est réellement allé* — la réalisation des bénéfices ([benefits-realization.md](../benefits-realization/)) existe parce que les gains de capacité revendiqués s'évaporent fréquemment à l'audit.

## Pièges

- **Multiplier les minutes par le salaire et appeler cela des économies** — le péché canonique.
- **Valoriser le temps libéré au coût chargé moyen** alors que l'usage marginal de ce temps est de faible valeur — voir [coût marginal vs coût moyen](../marginal-vs-average-cost/).
- **Compter la même heure deux fois** : comme trésorerie (vacation évitée) et comme capacité (patients supplémentaires vus).

## Sources

- NHS Digital, guide de dossier d'investissement pour la connectivité, cas économique (catégories de bénéfices). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, productivité du NHS. <https://www.england.nhs.uk/long-read/nhs-productivity/>
