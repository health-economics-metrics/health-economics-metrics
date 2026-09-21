# Valeur Espérée de l'Information Parfaite (VEIP)

La VEIP est le montant maximal qu'un décideur devrait payer pour éliminer l'incertitude avant de décider — le prix formel de « faisons d'abord une étude ».

## Pourquoi c'est important

Les systèmes de santé font constamment face au choix : adopter maintenant sur une preuve imparfaite, ou financer d'abord plus de recherche. La VEIP met un chiffre sur la seconde option. Si la VEIP est de 50 000 £ et que l'essai proposé coûte 2 millions £, adoptez maintenant. Si la VEIP est de 20 millions £, l'essai est une bonne affaire. La même question — « devrions-nous piloter cela avant de le déployer ? » — se pose pour chaque décision d'outil d'entreprise, et presque personne ne la chiffre.

## Le calcul

La VEIP est l'écart entre décider avec une prévoyance parfaite et décider maintenant sur des attentes :

```
VEIP = E_θ[ max_j BMN(j, θ) ]  −  max_j E_θ[ BMN(j, θ) ]

θ        = paramètres incertains (avec leur distribution conjointe)
BMN(j,θ) = bénéfice monétaire net de l'option j étant donné θ
```

Premier terme : moyenne du gain du meilleur choix à travers chaque monde possible (vous choisissez toujours correctement). Second terme : gain de la seule option qui est meilleure en moyenne (vous devez vous engager maintenant). La VEIP ≥ 0 toujours. La VEIP populationnelle se multiplie par le nombre de décisions affectées. Calculée directement à partir de tirages d'[ASP](../analyse-de-sensibilité-probabiliste/).

## Exemple résolu

Déployer un assistant de documentation par IA auprès de 5 000 cliniciens, ou non. Deux mondes :

```
Monde A (p = 0,6) : l'assistant économise 20 min/jour → BMN du déploiement = +8 M£
Monde B (p = 0,4) : l'assistant économise ~0 (friction du flux de travail) → BMN du déploiement = −3 M£
BMN de « ne pas déployer » = 0 £ dans les deux mondes.
```

Décidez maintenant : E[BMN déploiement] = 0,6 × 8 − 0,4 × 3 = **+3,6 M£** → déployez.

Avec information parfaite : dans le monde A choisissez de déployer (+8 M£), dans le monde B choisissez rien (0 £). Valeur espérée = 0,6 × 8 + 0,4 × 0 = **4,8 M£**.

```
VEIP = 4,8M − 3,6M = 1,2 M£
```

Un pilote rigoureux de 3 mois coûtant 150 000 £ qui résout substantiellement dans quel monde vous êtes en vaut clairement la peine — et tout pilote coûtant plus de 1,2 M£ ne la vaut pas, aussi approfondi soit-il.

## Lien avec l'ingénierie logicielle

La VEIP est l'économie du sprint exploratoire, du pilote, du test A/B et de la preuve de concept. Elle produit deux règles pratiques :

- **Un pilote ne mérite d'être financé que si la décision pourrait réellement changer.** Si vous déploieriez de toute façon quel que soit le résultat du pilote, la VEIP = 0 et le pilote est du théâtre.
- **Plafonnez la dépense du pilote à la VEIP.** La valeur de l'information est bornée par la valeur de la décision qu'elle informe.

La VEIP partielle (VEIPP) étend cela aux paramètres individuels : « que vaut le fait de préciser spécifiquement le chiffre de temps économisé ? » — ce qui vous indique ce que le pilote devrait mesurer.

## Pièges

- **Mener des pilotes sans règle de décision attachée** — l'information qui ne peut pas changer le choix n'a aucune valeur par définition.
- **Ignorer le coût de retard de la collecte d'informations** : un pilote de 6 mois retarde 6 mois de bénéfice ([coût de retard](../coût-de-retard/)) ; la valeur nette du pilote = VEIP résolue − coût de retard − coût du pilote.
- **Traiter la VEIP comme une prévision.** C'est une borne supérieure de la valeur de l'information, pas une estimation de ce qu'une étude spécifique livrera.

## Sources

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- Glossaire du York Health Economics Consortium : VEIP. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
