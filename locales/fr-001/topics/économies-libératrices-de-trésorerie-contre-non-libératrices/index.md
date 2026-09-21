# Économies Libératrices de Trésorerie contre Non Libératrices

Les économies libératrices de trésorerie réduisent la dépense réelle — une ligne budgétaire rétrécit. Les économies non libératrices de trésorerie libèrent du temps ou de la capacité qui est *réutilisée* plutôt que capitalisée. Les directeurs financiers des systèmes de santé traitent celles-ci comme des espèces différentes, et vous devriez aussi.

## Pourquoi c'est important

C'est le test d'honnêteté le plus aigu appliqué à tout dossier de décision numérique dans un système de santé national. Les cadres de bénéfices du NHS catégorisent explicitement chaque bénéfice revendiqué comme libérateur de trésorerie, non libérateur de trésorerie, ou qualitatif. La plupart des « économies » de santé numérique — minutes de clinicien économisées par patient, documentation plus rapide — ne libèrent pas de trésorerie : précieuses, mais elles ne réduisent pas le déficit. Un DAF de trust confronté à un déficit de financement ne peut dépenser que de la trésorerie. Voir aussi [économies dures libératrices de trésorerie](../économies-dures-libératrices-de-trésorerie-défense-du-déficit/).

## Le calcul

```
Économie libératrice de trésorerie   = ligne budgétaire avant − ligne budgétaire après
                          (doit être extractible : un contrat annulé, une unité fermée,
                           une dépense d'agence réduite, un achat évité)

Valeur non libératrice de trésorerie = temps libéré × coût unitaire de ce temps
                          (tarifée au coût d'opportunité ; l'argent N'EST PAS extractible)
```

Le même événement physique (une heure économisée) tombe dans une catégorie ou l'autre selon ce qui se passe ensuite :

```
heure économisée → vacation heures sup/agence annulée        → libère de la trésorerie
heure économisée → le clinicien voit un patient en attente de plus → ne libère pas de trésorerie (capacité)
heure économisée → absorbée dans la marge, rien ne change    → aucun bénéfice du tout
```

## Exemple résolu

Un logiciel économise à chacune de 100 infirmières 30 minutes par vacation. Cela fait 100 × 0,5 × 5 vacations/semaine × 46 semaines ≈ 11 500 heures/an. À un coût employeur de Bande 5 d'environ 25 £/heure, le titre tentant est 287 500 £/an.

La répartition honnête :

- 20 % du temps tombe là où les unités paient actuellement une prime banque/agence pour couvrir les dépassements de documentation : 2 300 heures × 35 £ tarif d'agence = **80 500 £ libérateurs de trésorerie** (vacations véritablement non réservées).
- 60 % est redéployé vers les soins directs aux patients : 6 900 heures × 25 £ = **172 500 £ de capacité non libératrice de trésorerie** — valeur réelle, rapportée séparément, jamais appelée « économies ».
- 20 % se dissipe en pauses et interruptions : **0 £**. Le revendiquer serait de la fiction.

Un dossier de décision présentant 80,5 k£ de trésorerie + 172,5 k£ de capacité est crédible. Un présentant 287,5 k£ d'« économies » est rejeté par le premier comptable qui le lit.

## Lien avec l'ingénierie logicielle

Une logique identique gouverne le ROI de l'assistant de codage par IA : « 30 minutes par développeur par jour » est de la capacité non libératrice de trésorerie à moins que les effectifs, la dépense en prestataires, ou le coût cloud ne baissent réellement. Rapportez les catégories séparément :

- Libère de la trésorerie : engagements de prestataires annulés, licences d'outillage démantelées, dépense cloud réduite.
- Capacité : fonctionnalités livrées plus tôt (valeur via [coût de retard](../coût-de-retard/)), retard de backlog résorbé.
- Rien : minutes économisées qui se fragmentent en changement de contexte.

Suivez aussi *où le temps libéré est réellement allé* — la réalisation des bénéfices ([benefits-realization.md](../réalisation-des-bénéfices/)) existe parce que les gains de capacité revendiqués s'évaporent fréquemment à l'audit.

## Pièges

- **Multiplier les minutes par le salaire et appeler cela des économies** — le péché canonique.
- **Valoriser le temps libéré au coût moyen chargé** alors que l'usage marginal de ce temps est de faible valeur — voir [coût marginal contre moyen](../coût-marginal-contre-coût-moyen/).
- **Compter la même heure deux fois** : comme trésorerie (vacation évitée) et comme capacité (patients supplémentaires vus).

## Sources

- Guide de dossier de décision de connectivité NHS Digital, cas économique (catégories de bénéfices). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, productivité du NHS. <https://www.england.nhs.uk/long-read/nhs-productivity/>
