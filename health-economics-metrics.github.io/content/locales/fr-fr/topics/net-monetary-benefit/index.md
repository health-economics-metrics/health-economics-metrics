# Bénéfice monétaire net (Net Monetary Benefit, NMB)

Le NMB convertit un résultat de coût-efficacité en une seule valeur monétaire : le gain de santé valorisé au seuil de disposition à payer, moins le coût. Son jumeau, le bénéfice de santé net (Net Health Benefit, NHB), exprime la même règle en unités de santé.

## Pourquoi c'est important

Les ratios ([ICER](../incremental-cost-effectiveness-ratio/)) sont maladroits : ils explosent près d'un effet nul, ne peuvent pas être moyennés entre tirages d'incertitude, et ne permettent pas de classer proprement trois options ou plus. Le NMB corrige tout cela — il est linéaire, ce qui permet de classer les options, de moyenner les tirages Monte-Carlo et de décomposer les contributions. C'est aussi la forme de calcul économique de la santé que tout ingénieur connaît déjà : *valeur moins coût*.

## Le calcul

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = effet incrémental (par ex. QALYs)
ΔC = coût incrémental
λ  = seuil de disposition à payer (voir willingness-to-pay-thresholds.md)

Règle de décision : adopter si NMB > 0 (de manière équivalente NHB > 0).
Entre alternatives : choisir le NMB le plus élevé.
```

NMB > 0 ⇔ ICER < λ (quand ΔE > 0), les deux règles concordent donc — le NMB se comporte simplement mieux.

## Exemple chiffré

Trois options pour un service diabète, pour 1 000 patients, λ = £20 000/QALY :

```
Option              ΔC          ΔE (QALYs)   NMB = 20 000×ΔE − ΔC
App + accompagnement £400 000    30           600 000 − 400 000 = £200 000
App seule            £150 000    12           240 000 − 150 000 = £90 000
Consultations sup.   £700 000    32           640 000 − 700 000 = −£60 000
```

Les consultations supplémentaires gagnent le plus de QALYs mais détruisent de la valeur à ce seuil (NMB < 0). L'app avec accompagnement l'emporte. Notez que le NMB permet de *classer les trois options en une fois* — les ICER par paires nécessiteraient la procédure de frontière décrite dans [dominance et frontière d'efficience](../dominance-and-efficiency-frontier/), pour aboutir à la même réponse.

Vue NHB du gagnant : 30 − 400 000/20 000 = 30 − 20 = **10 QALYs nets** — la santé gagnée au-delà de ce que le même argent aurait produit ailleurs.

## Lien avec l'ingénierie logicielle

`(heures économisées × taux horaire chargé) − coût de l'outil` — le dossier d'affaires quotidien pour un outil — est littéralement un calcul de NMB avec λ = coût chargé de l'ingénieur. Deux améliorations apportées par l'économie de la santé :

- **Faites de λ une variable, pas une constante.** Tracez le NMB en fonction de λ (« valeur d'une heure-ingénieur ») et montrez où la décision bascule ; différentes parties prenantes peuvent alors appliquer leur propre valorisation sans refaire votre calcul.
- **La pensée NHB** : « cette plateforme économise 5 000 heures-ingénieur mais consomme un budget qui aurait pu acheter 3 000 heures-ingénieur de capacité en prestataire externe — net 2 000 heures » force la comparaison en coût d'opportunité, en unités de capacité. Voir [coût d'opportunité](../opportunity-cost/).

## Pièges

- **Cacher le seuil** : un NMB n'a aucun sens sans préciser λ ; rapportez le NMB à £20k et à £30k, ou tracez la courbe.
- **Utiliser le NMB pour blanchir des effets minuscules** : une population énorme multipliée par un effet négligeable par personne peut produire un NMB important — rapportez les effets par personne en parallèle.
- **Oublier que le NMB hérite de toute l'incertitude** de ΔC et ΔE — associez-le à une [analyse de sensibilité probabiliste](../probabilistic-sensitivity-analysis/).

## Sources

- York Health Economics Consortium, glossaire : net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. « Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis. » <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
