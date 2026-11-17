# Année de Vie Corrigée du facteur Invalidité (AVCI)

Une AVCI est une année perdue de vie en bonne santé — le miroir côté fardeau du [QALY](../année-de-vie-ajustée-par-la-qualité/). Là où les QALY comptent la santé *gagnée*, les AVCI comptent la santé *perdue* à cause de la maladie ; les interventions sont valorisées par les AVCI **évitées**.

## Pourquoi c'est important

L'AVCI est la norme mondiale de santé (OMS, l'étude Global Burden of Disease, et la plupart des ministères de la santé des pays à revenu faible et intermédiaire planifient en AVCI). Si votre logiciel cible des systèmes de santé internationaux, des donateurs, ou des programmes alignés sur l'OMS, le langage de valeur est les AVCI évitées, pas les QALY gagnés. Le repère historique de l'OMS-CHOICE : une intervention évitant une AVCI pour moins de 1× le PIB par habitant est « hautement coût-efficace », 1 à 3× le PIB par habitant « coût-efficace » (l'OMS déconseille désormais l'usage rigide de ces bandes, mais elles restent omniprésentes en pratique).

## Le calcul

```
AVCI = APVP + AVI

APVP (années de vie perdues)         = décès × espérance de vie standard à l'âge du décès
AVI (années vécues avec invalidité) = prévalence × pondération d'invalidité

pondération d'invalidité ∈ [0, 1], 0 = santé complète, 1 = équivalent au décès
(pondérations publiées par l'étude Global Burden of Disease)
```

## Exemple résolu

Une plateforme de rappel de dépistage dans une région augmente la détection précoce d'une maladie. Annuellement, elle prévient 10 décès prématurés (chacun perdant 20 ans face à l'espérance de vie standard) et évite à 200 personnes de vivre un an avec une condition dont la pondération d'invalidité est de 0,2.

```
APVP évitées = 10 × 20        = 200
AVI évitées = 200 × 0,2      = 40
AVCI évitées               = 240 par an
```

Si la plateforme coûte 600 000 $/an à faire fonctionner, le coût par AVCI évitée est de 600 000 / 240 = **2 500 $**. Dans un pays avec un PIB par habitant de 8 000 $, cela est bien en dessous du repère de 1× PIB — « hautement coût-efficace » selon les termes de l'OMS-CHOICE.

## Lien avec l'ingénierie logicielle

- La santé numérique visant les bailleurs de fonds mondiaux de santé (Gavi, Fonds Mondial, programmes nationaux) devrait exprimer l'impact comme **coût par AVCI évitée** — c'est la métrique dans laquelle les évaluateurs de subventions pensent déjà.
- L'AVCI est aussi un modèle de *comptabilité du fardeau* utile pour l'ingénierie : les incidents, les builds instables et la friction héritée sont des « années vécues avec invalidité » pour une base de code — un inventaire de fardeau pondéré par la corvée vous dit où la remédiation achète le plus d'« années d'ingénierie saine », de la même manière que les tableaux de fardeau du GBD orientent les dépenses de santé.

## Pièges

- **QALY gagnés ≠ AVCI évitées numériquement** — pondérations différentes, tables de vie différentes, conventions différentes (les AVCI utilisaient historiquement une pondération par âge et une actualisation dans la mesure). Ne convertissez pas de manière désinvolte.
- **Utiliser des seuils multiples du PIB comme tampon automatique** — l'OMS elle-même avertit qu'ils ignorent les budgets et le coût d'opportunité ; voir [seuils de disposition à payer](../seuils-de-disposition-à-payer/).
- **Revendiquer des AVCI à l'échelle populationnelle à partir d'une efficacité par utilisateur** sans multiplier par l'adoption et l'observance — voir [portée et équité](../portée-et-équité/).

## Sources

- Registre d'indicateurs de l'OMS : AVCI. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (OMS) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. sur les seuils basés sur le PIB, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
