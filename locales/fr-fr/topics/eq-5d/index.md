# EQ-5D

EQ-5D est le questionnaire standardisé du groupe EuroQol pour mesurer la qualité de vie liée à la santé. C'est l'instrument qui produit les poids d'utilité utilisés dans la plupart des calculs de [QALY](../quality-adjusted-life-year/) — le cas de référence de NICE le désigne comme la mesure privilégiée pour les adultes.

## Pourquoi c'est important

Tout produit de santé numérique qui souhaite revendiquer des QALY a besoin d'utilités issues d'un instrument validé, et EQ-5D est la référence par défaut au Royaume-Uni et dans une grande partie de l'Europe. Il est assez court pour être intégré dans une application (5 questions + une échelle visuelle), ce qui signifie que les produits logiciels peuvent recueillir des données de résultats de qualité HTA comme sous-produit d'un usage normal — un avantage structurel par rapport aux médicaments, qui nécessitent des études dédiées.

## Le calcul

L'EQ-5D-5L pose une question dans chacune des **5 dimensions** — mobilité, autonomie de la personne, activités courantes, douleurs/gêne, anxiété/dépression — chacune évaluée sur **5 niveaux** (aucun problème … problèmes extrêmes), plus une échelle visuelle analogique de 0 à 100 (EQ VAS).

```
État de santé = profil à 5 chiffres, ex. « 21221 »
Indice d'utilité = value_set(profil)

Le barème de valeurs est spécifique à chaque pays, dérivé d'enquêtes
de type arbitrage temporel / choix discrets menées auprès du grand
public. Ancres : 1 = pleine santé, 0 = décès ; les états pires que
la mort sont négatifs (plancher du barème 3L au Royaume-Uni : −0,594).
```

L'arithmétique des QALY procède ensuite par `durée × utilité`.

## Exemple chiffré

Une application de rééducation musculosquelettique mesure l'EQ-5D-5L à l'inclusion et à 6 mois pour 1 000 utilisateurs ayant terminé le programme.

```
Utilité moyenne à l'inclusion :  0,62
Utilité moyenne à 6 mois :       0,71
Gain maintenu (hypothèse) sur 1 an : (0,71 − 0,62) × 1,0 = 0,09 QALY par utilisateur
```

Par rapport à un changement du groupe témoin de 0,03 (récupération naturelle), le gain attribuable est de 0,06 QALY/utilisateur. Monétisé à 20 000–30 000 £/QALY : **1 200–1 800 £ de valeur santé par utilisateur ayant terminé le programme** — le chiffre qui ancre la négociation tarifaire de l'application avec un payeur. (Les différences minimales cliniquement importantes pour l'indice EQ-5D se situent habituellement dans la fourchette 0,03–0,08, donc 0,06 est plausible mais doit franchir la comparaison au groupe témoin ; voir [résultats rapportés par les patients](../patient-reported-outcomes/).)

## Lien avec l'ingénierie logicielle

- **Instrumentez-le.** L'EQ-5D à l'inscription et à des intervalles de suivi représente quelques écrans d'interface ; le gain est une preuve de qualité HTA. Obtenez une licence auprès d'EuroQol (requise, gratuite pour certains usages).
- **Utilisez le bon barème de valeurs** pour le pays de déploiement — les mêmes réponses obtiennent des scores différents au Royaume-Uni, en Allemagne ou au Japon.
- **Leçon de conception** : EQ-5D montre comment une minuscule enquête standardisée associée à une fonction de notation publiée produit un indice unique comparable. C'est le même schéma pour tout indice crédible d'expérience développeur — instrument standardisé, poids publiés, pas d'impressions ad hoc. Voir [SPACE et DevEx](../space-and-devex/).

## Pièges

- **Avant/après sans comparateur** — la régression vers la moyenne et la récupération naturelle gonflent les gains naïfs.
- **Biais de survie** : ne mesurer que les utilisateurs restés engagés (voir [rétention et attrition](../retention-and-churn/)).
- **Mélanger les versions 3L et 5L ou les barèmes de valeurs** entre études — des chiffres systématiquement différents.
- **Effets de plafond** dans les populations légèrement atteintes : de nombreux utilisateurs obtiennent un score proche de 1,0 à l'inclusion, laissant peu de marge pour démontrer un gain.

## Sources

- EuroQol : EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations : le manuel (PMG36). <https://www.nice.org.uk/process/pmg36>
