# Productivité des développeurs assistée par l'IA

Les indicateurs de ce que l'assistance au codage par IA produit réellement sur la production d'ingénierie : taux d'acceptation des suggestions, gains de vitesse issus d'études contrôlées, débit de pull requests et taux de rétention du code. La base de preuves est franchement contradictoire — ce qui en fait une étude de cas parfaite pour la distinction efficacité-vs-effectivité que l'économie de la santé a été bâtie pour gérer.

## Pourquoi c'est important

Les deux études contrôlées les plus citées pointent dans des directions opposées :

- **Peng et al. 2023 (essai contrôlé randomisé GitHub Copilot)** : les développeurs ont terminé une tâche de serveur HTTP en partant de zéro **55,8 % plus vite** avec Copilot (1h11 contre 2h41, n=95).
- **Essai contrôlé randomisé METR 2025** : des développeurs open source expérimentés travaillant sur *leurs propres dépôts matures* étaient **19 % plus lents** avec les outils IA de début 2025 (16 développeurs, 246 tâches) — tout en *croyant* être 20 % plus rapides.

Les deux sont de bonnes études. La contradiction est le résultat en soi : l'efficacité sur des tâches en terrain vierge ne se transfère pas à l'effectivité sur une base de code mature, et le bénéfice *perçu* ne peut pas se substituer au bénéfice mesuré. La médecine a des noms pour ces deux phénomènes (essais explicatifs vs pragmatiques ; le problème du placebo) et des outils pour les traiter.

## Le calcul

```
Taux d'acceptation  = suggestions acceptées / suggestions affichées
                      (télémétrie GitHub ~30 % en moyenne ; varie : SQL 45 %, Python 35 %, JS 28 %)
Taux de rétention   = code IA survivant jusqu'à la fusion / code IA accepté (~88 % rapporté)
Gain de vitesse      = (t_témoin − t_IA) / t_témoin  (à partir d'une comparaison
                       contrôlée UNIQUEMENT)
Variation de débit   = Δ PR fusionnées/développeur/semaine (données de terrain
                       GitHub/Accenture : +8,7 %)

Modèle de valeur    = développeurs × temps gagné × taux chargé × facteur d'utilisation
                      — chaque terme nécessite une mesure locale ; voir le
                      diagramme en tornade dans sensitivity-analysis.md, où le
                      temps gagné domine tous les autres paramètres combinés
```

## Exemple chiffré

Une organisation de 500 développeurs pilote un assistant avec un contrôle rigoureux (équipes appariées, 3 mois, indicateurs préenregistrés) :

```
Résultat du pilote : temps de cycle des PR −18 % ; PR fusionnées +6 % ; CFR
                      inchangé ; temps gagné autodéclaré 45 min/jour ;
                      mesuré au niveau de la tâche ≈ 15 min/jour

Valoriser le chiffre MESURÉ : 500 × 0,25h × 220j × 60 £ × 0,6 facteur
                             d'utilisation ≈ 990 000 £/an de capacité
                             (ne libérant pas de trésorerie)
Coût : 500 × 39 £/mois × 12 ≈ 234 000 £/an
Ratio de capacité nette ≈ 4:1 — finançable, à un tiers seulement de
la déclaration autodéclarée.
```

L'écart de 3× entre perception et mesure est l'observation METR à l'œuvre en situation réelle ; budgéter sur l'autodéclaration aurait triplé la ligne de bénéfice.

## Lien avec l'ingénierie logicielle

Les importations issues de l'économie de la santé pour quiconque évalue l'outillage IA : menez des **essais pragmatiques** (votre base de code, vos ingénieurs, de vrais tickets — pas les tâches de démonstration du fournisseur) ; traitez le **taux d'acceptation comme un indicateur de substitution, pas un résultat** (c'est la [VPP](../clinical-ai-evaluation/) des suggestions du point de vue du développeur — une acceptation élevée avec une rétention faible équivaut à un surdiagnostic) ; associez chaque gain de débit à une **vérification de stabilité** (DORA 2025 : l'IA augmente le débit, nuit à la stabilité — une intervention avec effets secondaires nécessite une analyse du bénéfice net, selon [les indicateurs DORA](../dora-metrics/)) ; et classez honnêtement le bénéfice comme de la capacité ([libérant ou non de la trésorerie](../cash-releasing-vs-non-cash-releasing/)).

## Pièges

- **Transplantation d'études fournisseur** : des chiffres d'essais contrôlés en terrain vierge appliqués à du travail sur base de code héritée — exactement l'erreur que l'étude METR a mise au jour.
- **L'autodéclaration comme mesure** : l'écart de perception de 20 points de pourcentage est le plus grand biais connu de cette littérature.
- **Inflation de l'activité** : plus de PR et plus de code, c'est de l'Activité, pas des résultats ([SPACE](../space-and-devex/)) ; associez-le au retravail et au CFR.
- **Ignorer la courbe d'apprentissage** : les mesures de la semaine 2 captent des effets de nouveauté dans un sens ou dans l'autre ; mesurez à l'état stable ([horizon temporel](../time-horizon/)).

## Sources

- Peng S, et al. « The Impact of AI on Developer Productivity: Evidence from GitHub Copilot. » 2023. <https://arxiv.org/abs/2302.06590>
- METR, « Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity. » 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- Rapport DORA 2025. <https://dora.dev/dora-report-2025/>
