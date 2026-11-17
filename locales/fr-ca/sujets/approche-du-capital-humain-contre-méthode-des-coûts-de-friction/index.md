# Approche du capital humain contre méthode des coûts de friction

Ce sont deux méthodes concurrentes pour valoriser la productivité perdue du fait d'une maladie, d'un handicap ou d'un décès dans les études de coût de la maladie et de coûts-bénéfices. L'approche du capital humain (HCA) valorise toute la production perdue pendant toute la durée de l'absence au taux de salaire ; la méthode des coûts de friction (FCM) ne valorise que la période plus courte dont l'employeur a réellement besoin pour rétablir la production. Le choix entre les deux modifie l'estimation des coûts indirects d'un facteur deux ou plus.

## Pourquoi c'est important

Les coûts indirects (de productivité) sont l'un des postes les plus contestés de l'économie de la santé, précisément parce que les deux méthodes standard divergent si fortement. La HCA traite chaque jour d'absence comme un jour de production que l'économie perd réellement, valorisé au salaire plein pendant toute la durée — ou pendant le reste de la vie active en cas de décès ou d'invalidité permanente. La FCM soutient que, dans une économie avec chômage et marge de manœuvre sur le marché du travail, la plupart des absences longues ne réduisent pas réellement la production nationale, car l'employeur forme un remplaçant ou redistribue le travail ; seule la « période de friction » — le temps pour rétablir la production à son niveau antérieur — est la perte réelle. La FCM donne donc des estimations de coûts indirects systématiquement plus basses et plus prudentes que la HCA, et les deux ne sont pas des notes de bas de page interchangeables : ce sont deux théories économiques différentes de ce que signifie « productivité perdue ». C'est aussi pourquoi le [cas de référence de NICE](../évaluation-des-technologies-de-santé/) exclut par défaut les coûts de productivité et ne les rapporte, le cas échéant, que comme une analyse de sensibilité distincte du point de vue sociétal, au lieu de les mêler à l'ICER du cas de référence — voir [Perspective d'analyse](../perspective-d-analyse/).

## Le calcul

```
Approche du capital humain :
coût_HCA = salaire_journalier × jours_perdus

Méthode des coûts de friction (simplifiée, plafonnée par la période de friction) :
coût_FCM = salaire_journalier × min(jours_perdus, jours_période_de_friction)

jours_période_de_friction = estimation propre à chaque pays/secteur du temps
                            nécessaire pour rétablir la production
                            (historiquement ~85 jours dans le guide de coûts
                            néerlandais iMTA ; varie selon les pays et est
                            réévaluée périodiquement)
```

Tout le désaccord entre les deux méthodes tient au `min()` : la HCA ne plafonne jamais `jours_perdus`, donc le coût croît pendant toute l'absence ; la FCM plafonne les jours comptés à la période de friction, quelle que soit la durée réelle de l'absence.

## Exemple chiffré

Un salarié est absent `jours_perdus = 180` jours, avec un `salaire_journalier = 150 £`.

**Approche du capital humain** :

```
coût_HCA = 150 × 180 = £27,000
```

**Méthode des coûts de friction**, avec `jours_période_de_friction = 85` (la référence historique néerlandaise iMTA, selon la réévaluation périodique du guide) :

```
coût_FCM = 150 × min(180, 85) = 150 × 85 = £12,750
```

Les 12 750 £ de la FCM représentent moins de la moitié des 27 000 £ de la HCA pour la *même* absence : le seul choix de méthode change sensiblement l'argument du coût de la maladie, avant même de toucher à une autre hypothèse.

## Lien avec l'ingénierie logicielle

Cela correspond directement à la manière dont une équipe estime le coût du départ d'un ingénieur :

- **Calcul du coût de rotation façon HCA** : valoriser la perte au salaire plein de l'ingénieur parti pendant toute la durée de vacance du poste. C'est la version naïve de la plupart des modèles de coût de rotation, et elle surestime pour la même raison que la HCA surestime la productivité perdue : elle suppose que la capacité vacante était pleinement productive et que rien d'autre n'a absorbé le vide. Voir [Fidélisation des effectifs](../rétention-de-la-main-d-œuvre/), qui quantifie la chaîne recrutement/intégration/couverture du poste vacant que cette méthode alimente.
- **Calcul du coût de rotation façon FCM** : valoriser la perte uniquement sur le temps réel nécessaire pour trouver et intégrer un remplaçant — la « période de friction » de l'ingénierie. C'est un chiffre plus défendable pour un dossier économique, de même que la FCM est le choix le plus prudent dans une étude de coût de la maladie.
- La discipline sous-jacente est celle du [coût d'opportunité](../coût-d-opportunité/) : valoriser la ressource déplacée par ce qui est réellement perdu, et non par le produit de la durée affichée et du taux.

## Pièges

- **Mélanger HCA et FCM dans une même analyse, ou ne rapporter que l'une sans révéler le choix.** Les mêmes données d'absence peuvent donner un coût rapporté différent d'un facteur 2 ou plus selon la méthode ; le choix doit être nommé, pas caché.
- **Utiliser la HCA dans un cas de perspective sociétale sans la signaler comme analyse de sensibilité.** Le cas de référence de NICE exclut explicitement les coûts de productivité ; une estimation HCA du point de vue sociétal relève de l'analyse de scénarios, pas de l'ICER principal.
- **Appliquer l'une ou l'autre méthode au travail non rémunéré ou hors marché (par exemple les soins) sans ajustement.** Toutes deux utilisent le taux de salaire comme substitut de la valeur, ce qui ne se transpose pas proprement au travail sans salaire de marché.

## Sources

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — chapitre sur les coûts de productivité.
- NICE health technology evaluations manual (PMG36) — perspective du cas de référence et indications facultatives sur la perspective sociétale. <https://www.nice.org.uk/process/pmg36>
