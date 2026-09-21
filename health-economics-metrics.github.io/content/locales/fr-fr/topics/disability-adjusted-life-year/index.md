# Année de vie corrigée du facteur invalidité (DALY)

Un DALY est une année de vie en bonne santé perdue — le miroir, côté fardeau de la maladie, du [QALY](../quality-adjusted-life-year/). Là où les QALYs comptent la santé *gagnée*, les DALYs comptent la santé *perdue* à cause de la maladie ; les interventions sont valorisées par les DALYs **évités**.

## Pourquoi c'est important

Le DALY est la norme mondiale en santé (OMS, l'étude Global Burden of Disease, et la plupart des ministères de la santé des pays à revenu faible ou intermédiaire planifient en DALYs). Si votre logiciel cible des systèmes de santé internationaux, des bailleurs de fonds ou des programmes alignés sur l'OMS, le langage de valeur est celui des DALYs évités, pas des QALYs gagnés. Le repère historique de l'OMS-CHOICE : une intervention évitant un DALY pour moins d'1× le PIB par habitant est « hautement rentable » (« highly cost-effective »), 1–3× le PIB par habitant est « rentable » (l'OMS déconseille désormais un usage rigide de ces seuils, mais ils restent omniprésents en pratique).

## Le calcul

```
DALY = YLL + YLD

YLL (années de vie perdues)                = décès × espérance de vie standard à l'âge du décès
YLD (années vécues avec une invalidité)    = prévalence × poids d'invalidité

poids d'invalidité ∈ [0, 1], 0 = pleine santé, 1 = équivalent à la mort
(poids publiés par l'étude Global Burden of Disease)
```

## Exemple chiffré

Une plateforme de rappels de dépistage dans une région augmente la détection précoce d'une maladie. Chaque année, elle évite 10 décès prématurés (chacun perdant 20 années par rapport à l'espérance de vie standard) et évite à 200 personnes de vivre une année avec une pathologie dont le poids d'invalidité est de 0,2.

```
YLL évités = 10 × 20        = 200
YLD évités = 200 × 0,2      = 40
DALYs évités                = 240 par an
```

Si la plateforme coûte $600 000/an à faire fonctionner, le coût par DALY évité est de 600 000 / 240 = **$2 500**. Dans un pays avec un PIB par habitant de $8 000, cela reste bien en dessous du repère de 1× PIB — « hautement rentable » selon les termes de l'OMS-CHOICE.

## Lien avec l'ingénierie logicielle

- La santé numérique destinée aux bailleurs de fonds mondiaux (Gavi, Fonds mondial, programmes nationaux) devrait exprimer son impact en **coût par DALY évité** — c'est la métrique dans laquelle les évaluateurs de subventions pensent déjà.
- Le DALY est aussi un modèle utile de *comptabilisation du fardeau* pour l'ingénierie : les incidents, les builds instables et les frictions liées au legacy sont les « années vécues avec une invalidité » d'une base de code — un inventaire du fardeau pondéré par la corvée (« toil ») indique où la remédiation achète le plus d'« années d'ingénierie en bonne santé », exactement comme les tables de fardeau du GBD orientent les dépenses de santé.

## Pièges

- **Les QALYs gagnés ≠ les DALYs évités numériquement** — poids différents, tables de vie différentes, conventions différentes (les DALYs ont historiquement utilisé une pondération par l'âge et une actualisation intégrées à la mesure). Ne convertissez pas sans précaution.
- **Utiliser des seuils en multiples du PIB comme tampon automatique** — l'OMS elle-même avertit qu'ils ignorent les budgets et le coût d'opportunité ; voir [seuils de disposition à payer](../willingness-to-pay-thresholds/).
- **Revendiquer des DALYs à l'échelle d'une population à partir d'une efficacité par utilisateur** sans multiplier par l'adoption et l'observance — voir [portée et équité](../reach-and-equity/).

## Sources

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
