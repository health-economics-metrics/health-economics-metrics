# Ratio Coût-Efficacité Incrémental (RCEI)

Le RCEI est le coût supplémentaire par unité supplémentaire d'effet de santé lorsque vous choisissez une option plutôt que la meilleure alternative suivante. C'est le chiffre phare de l'évaluation des technologies de santé. (Lorsque l'unité d'effet est le QALY, on l'appelle aussi le ratio coût-utilité incrémental, RCUI.)

## Pourquoi c'est important

Les systèmes de santé n'évaluent jamais une technologie isolément — toujours *incrémentalement*, face à ce qui serait fait autrement. NICE compare le RCEI d'une technologie à son [seuil](../seuils-de-disposition-à-payer/) de **20 000-30 000 £ par QALY** ; l'institut ICER américain rapporte entre 50 000-200 000 $/QALY ; le Canada travaille autour de 50 000 $ CAD/QALY. Que votre produit « en vaille la peine » pour un système de santé national est, formellement, une question de savoir si son RCEI franchit le seuil local.

## Le calcul

```
RCEI = (Coût_nouveau − Coût_comparateur) / (Effet_nouveau − Effet_comparateur)
     = ΔC / ΔE
```

Règles d'interprétation :

- ΔC < 0, ΔE > 0 : la nouvelle option **domine** — moins chère et meilleure ; aucun ratio nécessaire.
- ΔC > 0, ΔE > 0 : calculez le RCEI, comparez-le au seuil λ ; adoptez si RCEI < λ.
- ΔC > 0, ΔE < 0 : la nouvelle option est dominée — rejetez.
- Les ratios se comportent mal près de ΔE = 0 — préférez le [bénéfice monétaire net](../bénéfice-monétaire-net/) pour le classement.

Le comparateur doit être la *meilleure option non dominée suivante*, pas « ne rien faire » — voir [dominance et frontière d'efficience](../dominance-et-frontière-d-efficience/).

## Exemple résolu

Un service de télésurveillance pour patients en insuffisance cardiaque, par 1 000 patients/an, contre les soins habituels :

```
Coûts :   service 900 000 £ ; admissions évitées économisent 600 000 £
         ΔC = 900 000 − 600 000 = 300 000 £
Effets : l'intervention plus précoce gagne 25 QALY
         ΔE = 25

RCEI = 300 000 / 25 = 12 000 £ par QALY
```

12 000 £/QALY est confortablement en dessous du seuil de 20 000 £ de NICE — un dossier solide. Notez à quel point le coût *net* compte : sans la compensation de 600 000 £, le RCEI serait de 36 000 £/QALY et le dossier échouerait probablement. Les compensations de coûts et la qualité de leurs preuves sont là où ces analyses se gagnent et se perdent (voir [coûts évités en aval](../coûts-évités-en-aval/)).

## Lien avec l'ingénierie logicielle

La discipline du RCEI se transpose en gros aux décisions d'ingénierie :

```
(coût de l'option B − coût de l'option A) / (résultat B − résultat A)
```

— coût incrémental par déploiement supplémentaire, par heure-ingénieur économisée, par incident évité — toujours face à la meilleure alternative suivante, jamais face à ne rien faire. Les deux habitudes qui valent le vol : (1) *nommez le comparateur explicitement* ; la plupart des allégations de ROI d'outils comparent secrètement contre un homme de paille ; (2) *nettez les coûts d'abord* — un outil qui coûte 100k£ mais déplace 80k£ de dépense existante a ΔC = 20k£.

## Pièges

- **Manipulation du comparateur** : comparer contre une ligne de base obsolète ou artificiellement mauvaise gonfle ΔE et flatte le RCEI.
- **Moyennes au lieu d'incréments** : le coût par QALY d'un programme entier n'est pas le RCEI de son extension ou de son adoption.
- **Adoration de l'estimation ponctuelle** : les RCEI sont des ratios de deux différences incertaines ; rapportez l'incertitude via [ASP et CAEC](../analyse-de-sensibilité-probabiliste/).
- **Les RCEI négatifs sont ambigus** (moins cher-et-meilleur contre plus cher-et-pire donnent le même signe) — ne rapportez jamais un RCEI négatif sans dire quel quadrant c'est.

## Sources

- NICE : FAQ sur les seuils de coût-efficacité. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- Glossaire du York Health Economics Consortium : RCEI. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
