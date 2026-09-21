# Économie unitaire du cloud (FinOps)

L'économie unitaire du cloud traduit la dépense cloud brute en **coût par unité de production** — par client, par transaction, par dossier traité, par token. C'est la capacité FinOps qui transforme « notre facture AWS est de 400 k£/mois » en « servir un patient coûte 0,83 £ ».

## Pourquoi c'est important

Les chiffres de dépense totale ne peuvent pas répondre aux questions qui comptent : le produit devient-il plus ou moins efficient ? La croissance améliore-t-elle ou détruit-elle la marge ? Que devrions-nous facturer ? Les coûts unitaires répondent aux trois. Spécifiquement pour la santé numérique, « coût par dossier traité » *est* un coût unitaire de service de santé — directement comparable aux chiffres de la [National Cost Collection](../national-tariff-and-unit-costs/) qu'un commissioner utilise pour tout autre service, ce qui en fait le langage naturel pour tarifer les parcours numériques face aux parcours traditionnels.

## Le calcul

```
Coût unitaire = coût total alloué (y compris coûts partagés/plateforme) / unités livrées

Deux familles :
  unités d'efficience des ressources : coût/Go stocké, coût/heure-vCPU, coût/token,
                             coût/minute de build
  unités métier :             coût/client, coût/transaction, coût/consultation,
                             coût/dossier traité

La discipline marginal vs moyen s'applique (marginal-vs-average-cost.md) :
la dépense engagée/réservée rend le coût unitaire marginal ≈ 0 jusqu'au prochain
palier d'engagement — tarifez les décisions d'expansion au marginal, les
tendances d'efficience au moyen.
```

## Exemple chiffré

Un service de triage numérique : dépense cloud de 62 000 £/mois (calcul 30 k£, données 18 k£, allocation de plateforme partagée 14 k£), traitant 380 000 épisodes de triage/mois :

```
Coût moyen par épisode = 62 000 / 380 000 ≈ 0,163 £

Comparaison commissioner : triage téléphonique ≈ 8–12 £/appel, consultation
généraliste ≈ 42 £
→ l'épisode numérique tourne à ~2 % de l'alternative humaine la moins chère —
l'économie du report de canal de gds-service-metrics.md, côté coûts.

Vérification de tendance : l'an dernier 0,21 £/épisode à 240 k épisodes →
économies d'échelle en amélioration (amortissement des coûts fixes de
plateforme), digne d'un titre dans le QBR.
```

## Lien avec l'ingénierie logicielle

L'économie unitaire est l'endroit où les choix d'ingénierie deviennent lisibles pour la finance : une architecture qui divise par deux le coût par épisode est un avantage tarifaire ; une architecture qui passe à l'échelle de façon super-linéaire est une bombe à retardement visible uniquement dans cet indicateur. Pratiques transposables depuis la comptabilisation des coûts de santé : **publiez les règles d'allocation** (les coûts partagés ont faussé les chiffres unitaires jusqu'à ce que le PLICS standardise la comptabilisation des coûts au niveau patient — l'allocation de vos coûts de plateforme exige la même rigueur) ; **choisissez des unités dans lesquelles l'acheteur pense** (les commissioners achètent des épisodes, pas des vCPU) ; et injectez les coûts unitaires dans chaque modèle d'[ICER](../incremental-cost-effectiveness-ratio/) et d'[impact budgétaire](../budget-impact-analysis/) comme dénominateur de coût faisant autorité. Pour les fonctionnalités d'IA, l'unité est le token — voir [économie unitaire de l'inférence](../inference-unit-economics/).

## Pièges

- **Ignorer les coûts partagés** : des coûts unitaires excluant les allocations plateforme/sécurité/astreinte sous-estiment de 30 à 50 % et s'effondrent à l'audit.
- **Les dénominateurs de vanité** : « coût par appel API » flatte ; « coût par épisode patient complété » informe.
- **La tarification au coût moyen de décisions marginales** : facturer aux équipes le coût unitaire moyen pour un usage marginalement gratuit produit un théâtre d'évitement du gaspillage (voir [tarif national](../national-tariff-and-unit-costs/) pour la version NHS de ce biais incitatif).

## Sources

- FinOps Foundation, économie unitaire. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction à l'économie unitaire du cloud. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
