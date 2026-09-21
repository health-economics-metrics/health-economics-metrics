# EQ-5D

L'EQ-5D est le questionnaire standardisé du groupe EuroQol pour mesurer la qualité de vie liée à la santé. C'est l'instrument qui produit les pondérations d'utilité au sein de la plupart des calculs de [QALY](../année-de-vie-ajustée-par-la-qualité/) — le cas de référence de NICE le nomme la mesure préférée pour les adultes.

## Pourquoi c'est important

Tout produit de santé numérique qui veut revendiquer des QALY a besoin d'utilités issues d'un instrument validé, et l'EQ-5D est le défaut au Royaume-Uni et dans une grande partie de l'Europe. Il est assez court pour être intégré dans une application (5 questions + une échelle visuelle), ce qui signifie que les produits logiciels peuvent collecter des données de résultats de niveau ETS comme effet secondaire d'un usage normal — un avantage structurel sur les médicaments, qui nécessitent des études dédiées.

## Le calcul

L'EQ-5D-5L pose une question dans chacune des **5 dimensions** — mobilité, autonomie personnelle, activités courantes, douleur/inconfort, anxiété/dépression — chacune répondue selon **5 niveaux** (aucun problème … problèmes extrêmes), plus une échelle visuelle analogique de 0 à 100 (EQ VAS).

```
État de santé = profil à 5 chiffres, par ex. « 21221 »
Indice d'utilité = ensemble_de_valeurs(profil)

L'ensemble de valeurs est spécifique au pays, dérivé d'enquêtes
d'arbitrage temporel/choix discret auprès du grand public. Ancres : 1 = santé
complète, 0 = décès ; les états pires que le décès sont négatifs (plancher de
l'ensemble 3L au Royaume-Uni : −0,594).
```

L'arithmétique QALY procède ensuite comme `durée × utilité`.

## Exemple résolu

Une application de rééducation musculosquelettique mesure l'EQ-5D-5L à l'intégration et à 6 mois pour 1 000 utilisateurs qui terminent.

```
Utilité moyenne à la ligne de base :  0,62
Utilité moyenne à 6 mois :  0,71
Gain soutenu (supposé) sur 1 an : (0,71 − 0,62) × 1,0 = 0,09 QALY par utilisateur
```

Face à un changement de groupe témoin de 0,03 (récupération naturelle), le gain attribuable est de 0,06 QALY/utilisateur. Monétisé à 20 000-30 000 £/QALY : **1 200-1 800 £ de valeur de santé par utilisateur qui termine** — le chiffre qui ancre la négociation de prix de l'application avec un payeur. (Les différences minimales cliniquement importantes pour l'indice EQ-5D se situent couramment dans la fourchette de 0,03-0,08, donc 0,06 est plausible mais doit franchir la comparaison de contrôle ; voir [résultats rapportés par le patient](../résultats-rapportés-par-le-patient/)).

## Lien avec l'ingénierie logicielle

- **Instrumentez-le.** L'EQ-5D à l'inscription et aux intervalles de suivi représente quelques écrans d'interface ; le retour est une preuve de niveau ETS. Obtenez une licence d'EuroQol (requise, gratuite pour certains usages).
- **Utilisez le bon ensemble de valeurs** pour le pays de déploiement — les mêmes réponses se notent différemment au Royaume-Uni contre l'Allemagne contre le Japon.
- **Leçon de conception** : l'EQ-5D montre comment une petite enquête standardisée plus une fonction de notation publiée produit un indice unique comparable. C'est le modèle pour tout indice crédible d'expérience développeur aussi — instrument standardisé, pondérations publiées, pas des intuitions ad hoc. Voir [SPACE et DevEx](../space-et-devex/).

## Pièges

- **Avant/après sans comparateur** — la régression vers la moyenne et la récupération naturelle gonflent les gains naïfs.
- **Biais de survie** : mesurer uniquement les utilisateurs qui sont restés engagés (voir [rétention et attrition](../rétention-et-attrition/)).
- **Mélanger les versions 3L et 5L ou les ensembles de valeurs** entre les études — des chiffres systématiquement différents.
- **Effets de plafond** dans les populations légèrement affectées : de nombreux utilisateurs notent près de 1,0 à la ligne de base, ne laissant aucune marge pour démontrer un gain.

## Sources

- EuroQol : EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
