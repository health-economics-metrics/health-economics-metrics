# Indice de concentration

L'indice de concentration (Wagstaff, Paci, van Doorslaer, 1991) est la mesure statistique standard des inégalités socio-économiques sur une variable de santé. Il va de −1 à 1 : une valeur négative signifie que la variable de santé se concentre chez les plus défavorisés sur le plan socio-économique, une valeur positive chez les plus aisés, et zéro qu'il n'y a pas de gradient socio-économique systématique. Il transforme le soupçon d'une répartition inégale en un chiffre unique et comparable.

## Pourquoi c'est important

Un programme peut sembler efficace en moyenne tout en apportant presque tous ses bénéfices à des personnes déjà favorisées. C'est la préoccupation de répartition que [Portée et équité](../portée-et-équité/) suit de façon descriptive (portée stratifiée par quintile de défavorisation, écart d'équité entre les groupes supérieur et inférieur), mais un tableau stratifié ne se résume pas à une ligne de tendance et se compare mal entre deux mesures très différentes exprimées sur des échelles différentes. L'indice de concentration règle les deux problèmes : il se calcule de la même façon pour n'importe quelle variable de santé par rapport à n'importe quel classement socio-économique, de sorte qu'un service national de santé peut suivre si l'inégalité d'un service numérique donné se creuse ou se résorbe d'une version à l'autre, et comparer l'équité de répartition du déploiement d'une application à celle, par exemple, d'un programme de dépistage, sur une échelle normalisée.

## Le calcul

```
CI = (2 / moyenne(valeur_santé)) × Cov(valeur_santé, rang_socio_économique)

Cov(X, Y) = moyenne(X × Y) − moyenne(X) × moyenne(Y)   (covariance de population)

rang_socio_économique : le rang fractionnaire de chaque personne dans la
distribution socio-économique, dans [0, 1] (0 = le plus défavorisé, 1 = le
plus favorisé ; pour des données groupées/par tranches, on utilise
généralement le rang du point médian de chaque groupe)
```

C'est la « formule pratique de la covariance » (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Banque mondiale 2008) : le raccourci standard des praticiens pour calculer l'indice de concentration directement à partir de données observées appariées, sans tracer ni intégrer sous la courbe de concentration.

## Exemple chiffré

Un score de santé autodéclaré (1 = le pire, 4 = le meilleur) observé sur quatre quartiles socio-économiques de taille égale, chacun représenté par le rang de son point médian :

```
valeur_santé                = [1.0, 2.0, 3.0, 4.0]
rang_socio_économique       = [0.125, 0.375, 0.625, 0.875]

moyenne(valeur_santé)       = 2.5
moyenne(santé × rang)       = moyenne([0.125, 0.75, 1.875, 3.5]) = 1.5625
moyenne(rang)               = 0.5

Cov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

La valeur positive `0,25` signifie que ce score de santé se concentre chez les plus favorisés sur le plan socio-économique : les répondants aux scores plus élevés penchent vers l'extrémité la plus aisée du classement.

## Lien avec l'ingénierie logicielle

C'est une mesure d'inégalité fondée sur la covariance, de la même famille que celles utilisées en économie en général (parente du coefficient de Gini), et elle se transpose à la mesure de la concentration des bénéfices d'un produit logiciel dans des groupes d'utilisateurs déjà favorisés, ou de leur répartition équitable : un prolongement direct de [Portée et équité](../portée-et-équité/) (la dimension « reach » de RE-AIM) vers une mesure statistique formelle plutôt qu'un écart décrit. Là où portée et équité rendent compte de l'impact strate par strate, l'indice de concentration comprime toute la distribution en un seul nombre signé, adapté comme KPI unique suivi de version en version, pratique pour les tableaux de bord où la distribution stratifiée complète ne tient pas.

## Pièges

- **Dérive de la convention de signe** : le signe dépend de la manière dont la variable de santé et le rang sont définis ; inverser l'un des deux inverse le signe, donc indiquer toujours la convention employée lorsqu'on rapporte une valeur.
- **Utiliser des rangs de bornes plutôt que de points médians** : des données socio-économiques groupées ou par tranches (par exemple des quintiles) exigent le rang fractionnaire de chaque groupe à son *point médian*, non à sa borne, sous peine de biaiser l'indice.
- **Lire « proche de zéro » comme « pas d'inégalité »** : un indice de concentration proche de zéro signifie « pas de gradient socio-économique systématique », non « pas d'inégalité » au sens absolu ; des inégalités de sens opposé peuvent s'annuler.

## Sources

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — le manuel de référence des praticiens, source de la formule pratique de la covariance utilisée ici. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
