# Bénéfice Monétaire Net (BMN)

Le BMN convertit un résultat de coût-efficacité en une valeur monétaire unique : le gain de santé tarifé au seuil de disposition à payer, moins le coût. Son jumeau, le Bénéfice de Santé Net (BSN), exprime la même règle en unités de santé.

## Pourquoi c'est important

Les ratios ([RCEI](../ratio-coût-efficacité-incrémental/)) sont maladroits : ils explosent près de l'effet zéro, ne peuvent être moyennés à travers les tirages d'incertitude, et ne peuvent classer proprement trois options ou plus. Le BMN corrige tout cela — il est linéaire, donc vous pouvez classer les options, moyenner les tirages Monte-Carlo, et décomposer les contributions. C'est aussi la forme de mathématique d'économie de la santé que tout ingénieur connaît déjà : *la valeur moins le coût*.

## Le calcul

```
BMN = (ΔE × λ) − ΔC
BSN = ΔE − (ΔC / λ)

ΔE = effet incrémental (par ex. QALY)
ΔC = coût incrémental
λ  = seuil de disposition à payer (voir willingness-to-pay-thresholds.md)

Règle de décision : adoptez si BMN > 0 (équivalemment BSN > 0).
Parmi les alternatives : choisissez le BMN le plus élevé.
```

BMN > 0 ⇔ RCEI < λ (quand ΔE > 0), donc les deux règles s'accordent — le BMN se comporte simplement mieux.

## Exemple résolu

Trois options pour un service de diabète, par 1 000 patients, λ = 20 000 £/QALY :

```
Option           ΔC          ΔE (QALY)   BMN = 20 000×ΔE − ΔC
App + coaching   400 000 £   30           600 000 − 400 000 = 200 000 £
App seule         150 000 £   12           240 000 − 150 000 = 90 000 £
Cliniques suppl. 700 000 £   32           640 000 − 700 000 = −60 000 £
```

Les cliniques supplémentaires gagnent le plus de QALY mais détruisent de la valeur à ce seuil (BMN < 0). App + coaching gagne. Notez que le BMN vous permet de *classer les trois à la fois* — les RCEI par paires nécessiteraient la procédure de frontière dans [dominance et frontière d'efficience](../dominance-et-frontière-d-efficience/), et arriveraient à la même réponse.

Vue BSN du gagnant : 30 − 400 000/20 000 = 30 − 20 = **10 QALY nets** — la santé gagnée au-delà de ce que le même argent aurait produit ailleurs.

## Lien avec l'ingénierie logicielle

`(heures économisées × taux horaire chargé) − coût de l'outil` — le dossier de décision d'outillage quotidien — est littéralement un calcul de BMN avec λ = coût chargé de l'ingénieur. Deux améliorations qu'ajoute l'économie de la santé :

- **Faites de λ une variable, pas une constante.** Tracez le BMN face à λ (« valeur d'une heure-ingénieur ») et montrez où la décision bascule ; différentes parties prenantes peuvent alors appliquer leur propre valorisation sans refaire vos calculs.
- **Pensée BSN** : « cette plateforme économise 5 000 heures-ingénieur mais consomme un budget qui aurait acheté 3 000 heures-ingénieur de capacité de prestataire — net 2 000 heures » force la comparaison de coût d'opportunité en unités de capacité. Voir [coût d'opportunité](../coût-d-opportunité/).

## Pièges

- **Cacher le seuil** : un BMN est dénué de sens sans déclarer λ ; rapportez le BMN à 20k£ et 30k£, ou tracez la courbe.
- **Utiliser le BMN pour blanchir de petits effets** : une population énorme fois un effet négligeable par personne peut produire un grand BMN — rapportez les effets par personne à côté.
- **Oublier que le BMN hérite de toute l'incertitude** en ΔC et ΔE — associez-le à l'[analyse de sensibilité probabiliste](../analyse-de-sensibilité-probabiliste/).

## Sources

- Glossaire du York Health Economics Consortium : bénéfice monétaire net. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
