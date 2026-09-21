# Productivité des Développeurs avec l'IA

Métriques de ce que l'assistance de codage par IA fait réellement à la production d'ingénierie : taux d'acceptation des suggestions, accélérations en études contrôlées, débit de PR et rétention du code. La base de preuves est véritablement contradictoire — ce qui en fait une étude de cas parfaite de la distinction efficacité/effectivité que l'économie de la santé a été conçue pour gérer.

## Pourquoi c'est important

Les deux études contrôlées les plus citées pointent dans des directions opposées :

- **Peng et al. 2023 (ECR GitHub Copilot)** : les développeurs ont terminé une tâche de serveur HTTP en partant de zéro **55,8 % plus vite** avec Copilot (1h11 contre 2h41, n=95).
- **ECR METR 2025** : des développeurs open-source expérimentés travaillant sur *leurs propres dépôts matures* ont été **19 % plus lents** avec les outils d'IA du début 2025 (16 développeurs, 246 tâches) — tout en *croyant* être 20 % plus rapides.

Les deux sont de bonnes études. La contradiction est le résultat : l'efficacité sur tâche vierge ne se transpose pas à l'effectivité sur code base mature, et le bénéfice *perçu* ne peut se substituer au bénéfice mesuré. La médecine a des noms pour les deux phénomènes (essais explicatifs contre pragmatiques ; le problème du placebo) et des outils pour les gérer.

## Le calcul

```
Taux d'acceptation  = suggestions acceptées / suggestions affichées
                   (télémétrie GitHub ~30 % en moyenne ; varie : SQL 45 %, Python 35 %, JS 28 %)
Taux de rétention   = code IA survivant jusqu'à la fusion / code IA accepté (~88 % rapporté)
Accélération          = (t_contrôle − t_IA) / t_contrôle  (issue UNIQUEMENT d'une comparaison contrôlée)
Delta de débit = Δ PR fusionnées/dév/semaine (données terrain GitHub/Accenture : +8,7 %)

Modèle de valeur     = devs × temps gagné × taux chargé × facteur d'utilisation
                  — chaque terme nécessite une mesure locale ; voir le diagramme en tornade dans
                  sensitivity-analysis.md, où le temps gagné domine tous
                  les autres paramètres combinés
```

## Exemple résolu

Une organisation de 500 développeurs pilote un assistant avec un contrôle approprié (équipes appariées, 3 mois, métriques préenregistrées) :

```
Résultat du pilote : temps de cycle de PR −18 % ; PR fusionnées +6 % ; TEC inchangé ;
              temps gagné autodéclaré 45 min/jour ; niveau tâche mesuré ≈ 15 min/jour

Valorisez le chiffre MESURÉ : 500 × 0,25h × 220j × 60 £ × 0,6 d'utilisation
                          ≈ 990 000 £/an de capacité (ne libère pas de trésorerie)
Coût : 500 × 39 £/mois × 12 ≈ 234 000 £/an
Ratio de capacité nette ≈ 4:1 — finançable, à un tiers de l'allégation autodéclarée.
```

L'écart de 3× entre le perçu et le mesuré est le résultat de METR à l'œuvre dans la réalité ; budgéter sur l'autodéclaration aurait triplé la ligne de bénéfice.

## Lien avec l'ingénierie logicielle

Les importations d'économie de la santé pour quiconque évalue des outils d'IA : menez des **essais pragmatiques** (votre code base, vos ingénieurs, de vrais tickets — pas des tâches de démonstration du fournisseur) ; traitez le **taux d'acceptation comme un proxy, pas un résultat** (c'est la [VPP](../évaluation-clinique-de-l-ia/) des suggestions du point de vue du développeur — une acceptation élevée avec une faible rétention est un surdiagnostic) ; associez chaque gain de débit à une **vérification de stabilité** (DORA 2025 : l'IA augmente le débit, nuit à la stabilité — une intervention avec effets secondaires nécessite une analyse du bénéfice net, selon les [métriques DORA](../métriques-dora/)) ; et classez honnêtement le bénéfice comme de la capacité ([libérateur de trésorerie contre non libérateur](../économies-libératrices-de-trésorerie-contre-non-libératrices/)).

## Pièges

- **Transplantation d'étude de fournisseur** : chiffres d'ECR sur tâche vierge appliqués à du travail sur code base hérité — l'erreur exacte que l'étude METR a exposée.
- **Autodéclaration comme mesure** : l'écart de perception de 20 points de pourcentage est le plus grand biais connu dans cette littérature.
- **Inflation d'activité** : plus de PR et plus de code sont de l'Activité, pas des résultats ([SPACE](../space-et-devex/)) ; associez au retravail et au TEC.
- **Ignorer la courbe d'apprentissage** : les mesures de la semaine 2 capturent des effets de nouveauté dans les deux sens ; mesurez en régime stable ([horizon temporel](../horizon-temporel/)).

## Sources

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- Rapport DORA 2025. <https://dora.dev/dora-report-2025/>
