# Économie Unitaire du Cloud (FinOps)

L'économie unitaire du cloud traduit la dépense cloud brute en **coût par unité de résultat** — par client, par transaction, par cas résolu, par jeton. C'est la capacité FinOps qui transforme « notre facture AWS est de 400 k£/mois » en « servir un patient coûte 0,83 £ ».

## Pourquoi c'est important

Les chiffres de dépense totale ne peuvent répondre aux questions qui comptent : le produit devient-il plus ou moins efficace ? La croissance améliore-t-elle ou détruit-elle la marge ? Que devrions-nous facturer ? Les coûts unitaires répondent aux trois. Pour la santé numérique spécifiquement, « coût par cas résolu » *est* un coût unitaire de service de santé — directement comparable aux chiffres de la [Collecte Nationale de Coûts](../tarif-national-et-coûts-unitaires/) qu'un commanditaire utilise pour tout autre service, ce qui en fait le langage naturel pour tarifer les parcours numériques face aux traditionnels.

## Le calcul

```
Coût unitaire = coût total alloué (incl. coûts partagés/plateforme) / unités livrées

Deux familles :
  unités d'efficacité des ressources : coût/Go stocké, coût/heure-vCPU, coût/jeton,
                             coût/minute de build
  unités d'affaires :            coût/client, coût/transaction, coût/consultation,
                             coût/cas résolu

La discipline marginal contre moyen s'applique (marginal-vs-average-cost.md) :
la dépense engagée/réservée fait tendre le coût unitaire marginal vers 0 jusqu'à la
prochaine étape d'engagement — tarifez les décisions d'expansion au marginal, les
tendances d'efficacité au moyen.
```

## Exemple résolu

Un service de triage numérique : dépense cloud 62 000 £/mois (calcul 30k£, données 18k£, allocation plateforme partagée 14k£), traitant 380 000 épisodes de triage/mois :

```
Coût moyen par épisode = 62 000 / 380 000 ≈ 0,163 £

Comparaison du commanditaire : triage téléphonique ≈ 8–12 £/appel, consultation de médecin traitant ≈ 42 £
→ l'épisode numérique fonctionne à ~2 % de l'alternative humaine la moins chère — l'économie
de transfert de canal de gds-service-metrics.md, côté coût.

Vérification de tendance : l'an dernier 0,21 £/épisode à 240k épisodes → économie
d'échelle en amélioration (amortissement des coûts de plateforme fixes), digne d'un titre au QBR.
```

## Lien avec l'ingénierie logicielle

L'économie unitaire est là où les choix d'ingénierie deviennent lisibles financièrement : une architecture qui divise par deux le coût-par-épisode est un avantage tarifaire ; une qui s'échelonne super-linéairement est une bombe à retardement visible seulement dans cette métrique. Pratiques transposées du chiffrage sanitaire : **publiez les règles d'allocation** (les coûts partagés ont faussé les chiffres unitaires jusqu'à ce que PLICS standardise le chiffrage au niveau patient — l'allocation de coûts de votre plateforme a besoin de la même rigueur) ; **choisissez des unités dans lesquelles l'acheteur pense** (les commanditaires achètent des épisodes, pas des vCPU) ; et alimentez les coûts unitaires dans chaque modèle de [RCEI](../ratio-coût-efficacité-incrémental/) et d'[impact budgétaire](../analyse-d-impact-budgétaire/) comme le dénominateur de coût autorisé. Pour les fonctionnalités d'IA, l'unité est le jeton — voir l'[économie unitaire de l'inférence](../économie-unitaire-de-l-inférence/).

## Pièges

- **Ignorer les coûts partagés** : les coûts unitaires excluant les allocations plateforme/sécurité/astreinte sous-estiment de 30-50 % et s'effondrent à l'audit.
- **Dénominateurs de vanité** : « coût par appel API » flatte ; « coût par épisode patient complété » informe.
- **Tarification au coût moyen de décisions marginales** : facturer aux équipes le coût unitaire moyen pour un usage marginalement gratuit alimente un théâtre d'évitement du gaspillage (voir [tarif national](../tarif-national-et-coûts-unitaires/) pour la version NHS de ce bogue d'incitation).

## Sources

- FinOps Foundation, économie unitaire. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction à l'économie unitaire du cloud. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
