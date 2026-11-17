# Élicitation des utilités par arbitrage temporel (TTO)

Le TTO est la méthode standard pour obtenir la valeur d'utilité d'un état de santé directement auprès d'un répondant, plutôt que de l'inventer. C'est l'une des méthodes d'élicitation — avec le pari standard et les expériences de choix discrets — qui produisent les jeux de valeurs (value sets) derrière des instruments comme l'[EQ-5D](../eq-5d/) et donc derrière la plupart des calculs de [QALY](../année-de-vie-ajustée-par-la-qualité/) en aval.

## Pourquoi c'est important

Chaque pondération d'utilité qui entre dans un calcul de QALY a bien dû venir de quelque part. Le TTO est le « comment » : pour un état jugé meilleur que la mort, on demande au répondant combien d'années `X` en santé parfaite équivalent à `T` années dans l'état altéré (`X < T`) ; l'utilité est `X / T`. Pour un état que certains répondants jugent pire que la mort, la formule standard ne fonctionne plus (elle ne peut pas représenter proprement une utilité inférieure à zéro), si bien qu'on utilise le TTO étendu. Un ingénieur logiciel ou un analyste qui traite une pondération d'utilité comme une donnée d'entrée, sans savoir qu'il a fallu un protocole d'élicitation validé pour l'obtenir, est à un pas d'un chiffre qu'il ne pourra pas défendre s'il est contesté.

## Le calcul

```
TTO standard (état meilleur que la mort) :
  utilité = temps_en_santé_parfaite / temps_dans_l_état_altéré

TTO étendu (état pire que la mort) :
  utilité = -temps_échangé_contre_la_mort / (durée_totale - temps_échangé_contre_la_mort)
```

`temps_en_santé_parfaite` / `temps_dans_l_état_altéré` — `X` années en santé parfaite jugées équivalentes à `T` années dans l'état altéré. `temps_échangé_contre_la_mort` / `durée_totale` — dans la formulation « pire que la mort », sur `T` années de vie restante, les années `a` que le répondant échangerait contre une mort immédiate, préférant `T − a` années en santé parfaite suivies de la mort à `T` années dans l'état pire que la mort. Le résultat est négatif, ancré de sorte que la mort = 0.

## Exemple chiffré

**Standard** : un répondant est dans un état altéré pendant 10 ans et est indifférent à 7 ans en santé parfaite : utilité = 7 / 10 = **0,7**.

**Pire que la mort** : sur 10 ans de vie restante, le répondant échangerait 2 ans contre une mort immédiate — il préfère 8 ans en santé parfaite suivis de la mort à 10 ans dans l'état pire que la mort : utilité = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Lien avec l'ingénierie logicielle

Le même point qu'une enquête DevEx ou d'engagement rencontre lorsqu'elle demande aux gens de noter quelque chose sur une échelle de 0 à 10 non validée s'applique ici à l'envers : le TTO existe précisément parce que « demandez simplement aux gens de noter » n'est pas en soi une méthode d'élicitation validée. Avant de construire un indice composite — un score DevEx, un indice d'engagement, une échelle d'épuisement — sur un chiffre autodéclaré, demandez comment il a été obtenu et si cette méthode a été validée ; c'est la même question que les économistes de la santé posent à une pondération d'utilité avant qu'elle n'entre dans un QALY.

## Pièges

- **Généraliser à partir d'une valeur isolée** : les valeurs de TTO sont obtenues auprès d'un *échantillon* du public (ou de patients), pas de la personne dont les soins sont en jeu ; utiliser la valeur de TTO d'un seul répondant comme si elle se généralisait est une erreur d'échantillonnage.
- **Formuler l'état de la mauvaise façon** : la formule de TTO standard suppose que l'état est sans équivoque meilleur que la mort ; l'appliquer à un état que certains répondants jugeraient pire que la mort, sans passer à la formulation étendue, donne en silence une utilité fausse (positive).
- **Durées non comparables** : des valeurs de TTO obtenues avec des vies restantes `T` différentes pour la comparaison « pire que la mort » ne sont pas directement comparables sans vérifier que la conception de l'étude a maintenu `T` constant.

## Sources

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
