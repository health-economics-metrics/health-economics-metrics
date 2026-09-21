# Ratio coût-efficacité incrémental (ICER)

L'ICER est le coût supplémentaire par unité d'effet de santé supplémentaire lorsqu'on choisit une option plutôt que la meilleure alternative suivante. C'est le chiffre phare de l'évaluation des technologies de santé (HTA). (Lorsque l'unité d'effet est le QALY, on parle aussi de ratio coût-utilité incrémental, ICUR.)

## Pourquoi c'est important

Les systèmes de santé n'évaluent jamais une technologie isolément — toujours *de manière incrémentale*, par rapport à ce qui serait fait autrement. Le NICE compare l'ICER d'une technologie à son seuil de **20 000 à 30 000 £ par QALY** ; l'ICER Institute américain rapporte une fourchette de 50 000 à 200 000 $/QALY ; le Canada travaille avec un seuil d'environ 50 000 CAD$/QALY. Savoir si votre produit « en vaut la peine » pour un service de santé national revient, formellement, à savoir si son ICER passe sous le seuil local. Voir [seuils de disposition à payer](../willingness-to-pay-thresholds/).

## Le calcul

```
ICER = (Coût_nouveau − Coût_comparateur) / (Effet_nouveau − Effet_comparateur)
     = ΔC / ΔE
```

Règles d'interprétation :

- ΔC < 0, ΔE > 0 : la nouvelle option **domine** — moins chère et meilleure ; aucun ratio nécessaire.
- ΔC > 0, ΔE > 0 : calculer l'ICER, le comparer au seuil λ ; adopter si ICER < λ.
- ΔC > 0, ΔE < 0 : la nouvelle option est dominée — rejeter.
- Les ratios se comportent mal près de ΔE = 0 — préférer le [bénéfice monétaire net](../net-monetary-benefit/) pour classer les options.

Le comparateur doit être la *meilleure alternative non dominée suivante*, et non « ne rien faire » — voir [dominance et frontière d'efficience](../dominance-and-efficiency-frontier/).

## Exemple chiffré

Un service de télésurveillance pour patients en insuffisance cardiaque, pour 1 000 patients/an, comparé aux soins habituels :

```
Coûts :   service 900 000 £ ; admissions évitées permettent d'économiser 600 000 £
          ΔC = 900 000 − 600 000 = 300 000 £
Effets :  l'intervention précoce apporte un gain de 25 QALY
          ΔE = 25

ICER = 300 000 / 25 = 12 000 £ par QALY
```

12 000 £/QALY est confortablement en dessous du seuil de 20 000 £ du NICE — un argument solide. Notez à quel point le coût *net* compte : sans la compensation de 600 000 £, l'ICER serait de 36 000 £/QALY et le dossier échouerait probablement. Les compensations de coûts et la qualité des preuves qui les étayent sont ce qui fait gagner ou perdre ces analyses (voir [coûts en aval évités](../avoided-downstream-costs/)).

## Lien avec l'ingénierie logicielle

La discipline de l'ICER se transpose intégralement aux décisions d'ingénierie :

```
(coût de l'option B − coût de l'option A) / (résultat B − résultat A)
```

— coût incrémental par déploiement supplémentaire, par heure-ingénieur économisée, par incident évité — toujours par rapport à la meilleure alternative suivante, jamais par rapport à ne rien faire. Deux habitudes à emprunter : (1) *nommer explicitement le comparateur* ; la plupart des allégations de ROI d'un outil comparent en secret à un homme de paille ; (2) *nettoyer les coûts en premier* — un outil qui coûte 100 000 £ mais déplace 80 000 £ de dépenses existantes a un ΔC de 20 000 £.

## Pièges

- **Manipulation du comparateur** : comparer à une base de référence obsolète ou artificiellement mauvaise gonfle le ΔE et flatte l'ICER.
- **Moyennes au lieu d'incréments** : le coût par QALY d'un programme entier n'est pas l'ICER de son extension ou de son adoption.
- **Culte de l'estimation ponctuelle** : les ICER sont des ratios de deux différences incertaines ; communiquez l'incertitude via [l'analyse de sensibilité probabiliste et les CEAC](../probabilistic-sensitivity-analysis/).
- **Les ICER négatifs sont ambigus** (moins cher et meilleur vs plus cher et moins bon donnent le même signe) — ne jamais rapporter un ICER négatif sans préciser de quel quadrant il s'agit.

## Sources

- NICE : cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
