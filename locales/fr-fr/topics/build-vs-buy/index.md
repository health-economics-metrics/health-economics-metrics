# Construire ou acheter

L'arbitrage construire-ou-acheter (build-vs-buy) est une comparaison structurée entre le développement sur mesure et l'acquisition commerciale, fondée sur le [TCO](../total-cost-of-ownership/) actualisé, le délai de livraison et le risque. Les données empiriques a priori penchent nettement d'un côté : **les coûts réels de construction dépassent typiquement les projections de 30 à 40 %**, les solutions achetées se déploient 40 à 60 % plus vite, et l'étude GenAI 2025 du MIT a montré que les outils d'IA achetés réussissaient environ 67 % du temps, contre environ un tiers seulement pour les projets construits en interne.

## Pourquoi c'est important

Les systèmes de santé sont confrontés en permanence à cette décision (« make vs commission » dans le vocabulaire du NHS), et les organisations d'ingénierie se trompent systématiquement en faveur de la construction — parce que les développeurs estiment le coût de construction, pas le [TCO](../total-cost-of-ownership/), et parce que construire est plus stimulant. Le cadre économique impose la comparaison honnête : les deux options chiffrées sur le même horizon, toutes deux ajustées du risque, et *l'écart de délai valorisé comme un [coût du retard](../cost-of-delay/)* — le terme qui, le plus souvent, tranche la décision et qui, le plus souvent, est omis.

## Le calcul

```
Comparer sur le même horizon de 3 à 5 ans, actualisé :

VAN_option = VA(bénéfices, décalés du délai de mise en valeur) − VA(TCO)

Ajustements de risque (schéma « biais d'optimisme » du Green Book) :
  coût de construction × 1,3–1,4        (a priori de dépassement)
  délai de mise en valeur de la construction + 40–60 % (a priori de retard de déploiement)
  achat : ajouter plutôt un contrôle de réalité de l'intégration et les coûts de sortie

Facteurs de décision, dans l'ordre qui tranche habituellement :
  1. différenciation — cette capacité est-elle votre produit, ou de la plomberie ?
  2. délai de mise en valeur × CoD
  3. TCO ajusté du risque
```

## Exemple chiffré

Un trust a besoin d'un système de consentement électronique. Achat : 150 k£/an en SaaS, en service en 3 mois. Construction : estimée à 600 k£ + 120 k£/an de maintenance, en service en 12 mois.

```
Construction ajustée du risque : 600 k × 1,35 = 810 k£ ; délai de mise en valeur ≈ 18 mois
TCO sur 5 ans :  achat = 150 k × 5 = 750 k£
                 construction = 810 k + 120 k × 5 = 1 410 k£
Terme de retard : la dématérialisation du consentement fait économiser 25 k£/mois ;
                  la construction arrive 15 mois plus tard → CoD = 15 × 25 k = 375 k£

Comparaison effective : 750 k£ contre 1 785 k£ — l'achat l'emporte d'environ 1 M£,
et le plus gros poste après la construction elle-même est le coût du retard
que personne n'avait chiffré.
```

Construire reste le bon choix lorsque la capacité est différenciante (l'algorithme central de votre produit), lorsqu'aucun fournisseur ne satisfait une contrainte impérative (sécurité clinique, résidence des données), ou lorsque le risque de dépendance à un fournisseur (lock-in) est sévère et chiffré.

## Lien avec l'ingénierie logicielle

La discipline de l'économie de la santé transposable ici est triple : **l'ajustement du risque fondé sur des a priori** (la majoration de 30 à 40 % pour dépassement est l'équivalent logiciel du biais d'optimisme du Green Book — appliquez-la mécaniquement, et argumentez les exceptions plutôt que de partir d'elles) ; **l'honnêteté du comparateur** (l'alternative à construire n'est pas « rien », c'est la meilleure option d'achat disponible — voir le [coût d'opportunité](../opportunity-cost/)) ; et **le test d'équivalence avant la comparaison de coûts** (si l'achat et la construction répondent réellement au même cahier des charges, il s'agit d'une [analyse de minimisation des coûts](../cost-minimization-analysis/) et l'option la moins chère l'emporte ; sinon, la différence de résultat doit être valorisée, et non affirmée).

## Pièges

- **Comparer le prix catalogue du fournisseur à des estimations de construction non ajustées du risque** — un double avantage indu accordé à la construction.
- **Le travail interne à coût zéro** (« l'équipe est déjà là »).
- **La dépendance non chiffrée dans les deux sens** : les coûts de sortie du fournisseur, mais aussi le facteur bus et la pérennité de la maintenance côté construction.
- **Les constructions dictées par l'identité** : « c'est notre cœur de métier » invoqué pour de la simple plomberie — testez la différenciation en vous demandant si les clients le remarqueraient.

## Sources

- Analyses TCO construire-ou-acheter. <https://neontri.com/blog/build-vs-buy-software/>
- Constats du MIT sur la fracture GenAI (taux de réussite achat vs construction). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (biais d'optimisme). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
