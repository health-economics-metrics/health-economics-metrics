# Portée et équité

RE-AIM — Reach, Effectiveness, Adoption, Implementation, Maintenance (portée, efficacité, adoption, mise en œuvre, maintien) — est le cadre de référence pour juger l'impact *populationnel* d'une intervention. Son arithmétique centrale : **l'impact de santé publique ≈ portée × efficacité**. Les outils numériques ajoutent une dimension d'équité : la fracture numérique fait que la portée est systématiquement inégale, et une prestation numérique par défaut peut élargir les écarts de santé qu'elle vise à réduire.

## Pourquoi c'est important

Les revues systématiques appliquant RE-AIM à la mHealth (santé mobile) trouvent une signature constante : forte portée et forte adoption, mais **efficacité et maintien faibles** — les applications se diffusent facilement et s'essoufflent vite. Pour un service de santé national, cela signifie qu'un produit impressionnant à l'échelle de l'utilisateur peut être un mauvais investissement à l'échelle de la population, et inversement : un outil modestement efficace touchant des millions de personnes peut surpasser un outil brillant n'en touchant que des milliers (voir l'arithmétique de l'[espérance de vie ajustée sur la santé (HALE)](../health-adjusted-life-expectancy/)). L'équité n'est pas une contrainte annexe mais un moteur de valeur : l'exclusion numérique suit l'âge, la précarité, le handicap et la langue — exactement les populations portant le fardeau le plus « traitable » — de sorte que l'utilisateur marginal exclu a souvent un bénéfice potentiel *supérieur à la moyenne*.

## Le calcul

```
Impact populationnel ≈ portée × efficacité
  portée     = participants / population éligible (voir activation-and-uptake.md)
  efficacité = effet en conditions réelles parmi les participants (pondéré par
               la rétention — voir retention-and-churn.md)

Version stratifiée par équité :
  impact_groupe_g = portée_g × efficacité_g, rapporté par quintile de
  précarité / tranche d'âge / groupe linguistique
  écart d'équité = impact_quintile le plus favorisé − impact_quintile le plus défavorisé

Coût-efficacité distributionnelle : appliquer des poids d'équité aux QALYs
selon le groupe bénéficiaire — un QALY pour les plus défavorisés compte
davantage (une extension de plus en plus répandue dans l'ETS/HTA).
```

## Exemple chiffré

Un programme numérique de prévention du diabète, rapporté de deux manières :

```
Agrégé : portée 12 %, effet 0,02 QALY/participant → 0,0024 QALY/personne éligible

Stratifié (quintiles de précarité) :
  Q1 (moins défavorisé) : portée 22 %, effet 0,02 → 0,0044
  Q5 (plus défavorisé) :  portée 4 %,  effet 0,025 → 0,0010

Le programme délivre 4,4× plus de santé aux moins défavorisés —
alors que l'effet par participant de Q5 est PLUS ÉLEVÉ (davantage de marge
de progression). Un bras d'inclusion numérique accompagnée (accompagnement
téléphonique + accès communautaire) coûtant 20 % de plus par participant
Q5 et portant la portée de Q5 à 12 % triple l'impact sur Q5 et améliore
l'agrégat — ici, l'investissement d'équité EST l'investissement
d'efficacité.
```

## Lien avec l'ingénierie logicielle

La portée est en grande partie un artefact d'ingénierie : exigences minimales d'appareil et d'OS, hypothèses de bande passante, prise en charge des langues, conformité d'accessibilité (WCAG), obstacles de vérification d'identité, et distribution limitée aux stores d'applications retranchent chacun des populations entières du dénominateur — le plus souvent de manière invisible, car les utilisateurs exclus n'apparaissent jamais dans les analytics. Les pratiques d'ingénierie qui font progresser l'équité : mesurer le *dénominateur* (instrumenter la population éligible, pas seulement les utilisateurs) ; budgéter la performance pour les appareils anciens et les connexions médiocres ; livrer les parcours d'inclusion numérique accompagnée (téléphone, SMS, kiosque) comme des flux de premier rang plutôt que comme des circuits de la honte ; et stratifier chaque métrique de tableau de bord selon les dimensions d'équité — une moyenne non stratifiée est précisément l'endroit où se cache l'inégalité (le [taux de recours GDS](../gds-service-metrics/) porte le même avertissement).

## Pièges

- **Efficacité rapportée sur les utilisateurs ayant terminé, impact revendiqué sur les populations** — les termes de portée discrètement supprimés.
- **L'équité traitée comme un audit après coup** plutôt que comme une donnée de conception ; rattraper la portée après coup coûte bien plus cher que de la concevoir dès le départ.
- **Amnésie du maintien** : la dimension la plus faible de RE-AIM en mHealth — des revendications d'impact au-delà de l'horizon temporel des preuves disponibles.
- **Économies liées à un canal exclusivement numérique** qui reportent les coûts sur les utilisateurs exclus et le personnel de première ligne (voir [métriques de service GDS](../gds-service-metrics/)).

## Sources

- Cadre RE-AIM. <https://re-aim.org/>
- Revues systématiques RE-AIM sur la mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM pour la planification de l'équité. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
