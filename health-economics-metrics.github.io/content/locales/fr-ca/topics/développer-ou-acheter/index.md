# Développer ou Acheter

Développer-ou-acheter est une comparaison structurée du développement sur mesure face à l'acquisition commerciale, sur le [CTP](../coût-total-de-possession/) actualisé, le délai de livraison et le risque. Les a priori empiriques sont unilatéraux : **les coûts de développement réels dépassent typiquement les projections de 30 à 40 %**, les solutions achetées se déploient 40 à 60 % plus vite, et la recherche IA générative du MIT de 2025 a révélé que les outils d'IA achetés réussissaient ~67 % du temps tandis que les développements internes réussissaient environ un tiers aussi souvent.

## Pourquoi c'est important

Les systèmes de santé font face à cette décision en permanence (« faire ou commander » dans le langage du NHS), et les organisations d'ingénierie se trompent systématiquement dans le sens du développement — parce que ceux qui développent estiment le développement, pas le [CTP](../coût-total-de-possession/), et parce que développer est plus amusant. Le cadre économique force la comparaison honnête : les deux options tarifées sur le même horizon, toutes deux ajustées au risque, et la *différence de temps tarifée comme [coût de retard](../coût-de-retard/)* — le terme qui décide le plus souvent la réponse et qui est le plus souvent omis.

## Le calcul

```
Comparez sur le même horizon de 3 à 5 ans, actualisé :

VAN_option = VA(bénéfices, décalés par délai de mise en valeur) − VA(CTP)

Ajustements de risque (schéma « biais d'optimisme » du Green Book) :
  coût de développement × 1,3–1,4        (a priori de dépassement)
  délai de mise en valeur du développement + 40–60 % (a priori de retard de déploiement)
  achat : ajoutez plutôt une vérification de réalité d'intégration et des coûts de sortie

Facteurs de décision, dans l'ordre où ils décident habituellement :
  1. différenciation — cette capacité est-elle votre produit, ou de la plomberie ?
  2. délai de mise en valeur × CdR
  3. CTP ajusté au risque
```

## Exemple résolu

Un trust a besoin d'un système de consentement électronique. Acheter : 150 k£/an SaaS, en service en 3 mois. Développer : estimé 600 k£ + 120 k£/an de maintenance, en service en 12 mois.

```
Développement ajusté au risque : 600k × 1,35 = 810 k£ ; délai de mise en valeur ≈ 18 mois
CTP sur 5 ans :  achat = 150k × 5 = 750 k£
           développement = 810k + 120k × 5 = 1 410 k£
Terme de retard : la numérisation du consentement économise 25 k£/mois ; le développement arrive 15 mois
            plus tard → CdR = 15 × 25k = 375 k£

Comparaison effective : 750 k£ contre 1 785 k£ — l'achat gagne d'environ 1 M£, et le plus grand
terme individuel après le développement lui-même est le coût de retard que personne n'avait tarifé.
```

Développer reste juste lorsque la capacité est différenciante (l'algorithme central de votre produit), lorsqu'aucun fournisseur ne répond à une contrainte dure (sécurité clinique, résidence des données), ou lorsque le risque de dépendance envers un fournisseur est sévère et tarifé.

## Lien avec l'ingénierie logicielle

La discipline transférable de l'économie de la santé est triple : **ajustement du risque fondé sur des a priori** (le supplément de 30-40 % pour dépassement est le biais d'optimisme du Green Book logiciel — appliquez-le mécaniquement, plaidez pour des exceptions plutôt que de partir d'elles) ; **honnêteté du comparateur** (l'alternative au développement n'est pas « rien », c'est le meilleur achat disponible — voir [coût d'opportunité](../coût-d-opportunité/)) ; et **test d'équivalence avant comparaison des coûts** (si l'achat et le développement répondent réellement au même cahier des charges, c'est une [analyse de minimisation des coûts](../analyse-de-minimisation-des-coûts/) et le moins cher gagne ; sinon, la différence de résultat doit être valorisée, pas affirmée).

## Pièges

- **Comparer le prix catalogue du fournisseur à des estimations de développement non ajustées au risque** — double flatterie envers le développement.
- **Main-d'œuvre interne à coût nul** (« l'équipe est déjà là »).
- **Dépendance non tarifée dans les deux sens** : coûts de sortie du fournisseur, mais aussi le facteur bus et la durée de maintenance du développement.
- **Développements motivés par l'identité** : « c'est central pour nous » revendiqué pour de la plomberie — testez la différenciation en vous demandant si les clients le remarqueraient.

## Sources

- Analyses de CTP développer-contre-acheter. <https://neontri.com/blog/build-vs-buy-software/>
- Résultats de la division IA générative du MIT (taux de réussite acheter contre développer). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (biais d'optimisme). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
