# Portée et Équité

RE-AIM — Reach, Effectiveness, Adoption, Implementation, Maintenance (Portée, Efficacité, Adoption, Implémentation, Maintien) — est le cadre standard pour juger l'impact *populationnel* d'une intervention. Son arithmétique centrale : **l'impact en santé publique ≈ portée × efficacité**. Les outils numériques ajoutent une dimension d'équité : la fracture numérique signifie que la portée est systématiquement inégale, et la livraison numérique-d'abord peut élargir les écarts de santé qu'elle vise à combler.

## Pourquoi c'est important

Les revues systématiques appliquant RE-AIM à la mHealth trouvent une signature cohérente : Portée et Adoption fortes, **Efficacité et Maintien faibles** — les applications se répandent facilement et s'estompent vite. Pour un service de santé national, cela signifie qu'un produit impressionnant par utilisateur peut être un mauvais investissement populationnel, et vice versa : un outil modestement efficace atteignant des millions peut surpasser un outil brillant en atteignant des milliers (voir l'arithmétique de l'[EVCS](../espérance-de-vie-corrigée-de-la-santé/)). L'équité n'est pas une contrainte secondaire mais un moteur de valeur : l'exclusion numérique suit l'âge, la précarité, le handicap et la langue — exactement les populations portant le fardeau le plus traitable — donc l'utilisateur marginal exclu a souvent un bénéfice potentiel *au-dessus de la moyenne*.

## Le calcul

```
Impact populationnel ≈ portée × efficacité
  portée         = participants / population éligible (voir activation-and-uptake.md)
  efficacité     = effet en conditions réelles parmi les participants (pondéré par la rétention —
                  voir retention-and-churn.md)

Version stratifiée par équité :
  impact_groupe_g = portée_g × efficacité_g, rapporté par quintile
  de précarité / tranche d'âge / groupe linguistique
  écart d'équité = impact_quintile_supérieur − impact_quintile_inférieur

Coût-efficacité distributionnelle : appliquez des pondérations d'équité aux QALY par
groupe récipiendaire — un QALY pour le plus défavorisé compte plus (une extension
d'ETS de plus en plus courante).
```

## Exemple résolu

Un programme numérique de prévention du diabète, rapporté de deux façons :

```
Agrégé : portée 12 %, effet 0,02 QALY/participant → 0,0024 QALY/personne éligible

Stratifié (quintiles de précarité) :
  Q1 (moins précaire) : portée 22 %, effet 0,02 → 0,0044
  Q5 (plus précaire) :  portée 4 %,  effet 0,025 → 0,0010

Le programme délivre 4,4× plus de santé aux moins précaires —
alors que l'effet par participant de Q5 est PLUS ÉLEVÉ (plus de marge). Un
bras numérique assisté (coaching téléphonique + accès communautaire) coûtant 20 %
de plus par participant de Q5 qui élève la portée de Q5 à 12 % triple l'impact
de Q5 et améliore l'agrégé — l'investissement d'équité EST l'investissement
d'efficience ici.
```

## Lien avec l'ingénierie logicielle

La portée est substantiellement un artefact d'ingénierie : les exigences minimales d'appareil et d'OS, les hypothèses de bande passante, le support linguistique, la conformité d'accessibilité (WCAG), les obstacles de vérification d'identité, et la distribution uniquement via boutique d'applications découpent chacun des populations du dénominateur — habituellement de manière invisible, car les utilisateurs exclus n'apparaissent jamais dans l'analytique. Les pratiques d'ingénierie qui déplacent l'équité : mesurez le *dénominateur* (instrumentez la population éligible, pas seulement les utilisateurs) ; budgétez la performance pour les vieux appareils et la connectivité pauvre ; livrez les parcours numériques assistés (téléphone, SMS, kiosque) comme des flux de première classe plutôt que des canaux honteux ; et stratifiez chaque métrique de tableau de bord selon les dimensions d'équité — une moyenne non stratifiée est où se cache l'iniquité (l'[adoption GDS](../métriques-de-service-gds/) porte le même avertissement).

## Pièges

- **Efficacité rapportée sur ceux qui terminent, impact revendiqué sur les populations** — les termes de portée discrètement abandonnés.
- **L'équité comme audit après coup** plutôt qu'une entrée de conception ; adapter la portée rétroactivement est bien plus coûteux que de la concevoir dès le départ.
- **Amnésie du maintien** : la dimension mHealth la plus faible de RE-AIM — des allégations d'impact au-delà de l'horizon temporel de la preuve.
- **Économies de canal numérique-uniquement** qui déplacent des coûts vers les utilisateurs exclus et le personnel de première ligne (voir [métriques de service GDS](../métriques-de-service-gds/)).

## Sources

- Cadre RE-AIM. <https://re-aim.org/>
- Revues systématiques RE-AIM de la mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM pour la planification d'équité. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
