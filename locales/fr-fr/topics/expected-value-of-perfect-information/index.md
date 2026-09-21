# Valeur espérée de l'information parfaite (EVPI)

L'EVPI est le montant maximal qu'un décideur devrait payer pour éliminer l'incertitude avant de décider — le prix formel du « lançons d'abord une étude ».

## Pourquoi c'est important

Les systèmes de santé font constamment face à ce choix : adopter maintenant sur des preuves imparfaites, ou financer davantage de recherche d'abord. L'EVPI met un chiffre sur la seconde option. Si l'EVPI est de 50 000 £ et que l'essai proposé coûte 2 millions de £, adoptez maintenant. Si l'EVPI est de 20 millions de £, l'essai est une bonne affaire. La même question — « devrions-nous piloter ceci avant de le déployer ? » — se pose pour chaque décision d'outil d'entreprise, et presque personne ne la chiffre.

## Le calcul

L'EVPI est l'écart entre décider avec une prévoyance parfaite et décider maintenant sur la base d'espérances :

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = paramètres incertains (avec leur distribution conjointe)
NMB(j,θ) = bénéfice monétaire net de l'option j étant donné θ
```

Premier terme : moyenne du gain du meilleur choix à travers chaque monde possible (vous choisissez toujours correctement). Second terme : gain de l'option unique qui est la meilleure en moyenne (vous devez vous engager maintenant). L'EVPI est toujours ≥ 0. L'EVPI de population se multiplie par le nombre de décisions concernées. Calculé directement à partir des tirages d'[ASP](../probabilistic-sensitivity-analysis/).

## Exemple chiffré

Déployer un assistant de documentation par IA auprès de 5 000 cliniciens, ou non. Deux mondes :

```
Monde A (p = 0,6) : l'assistant fait gagner 20 min/jour → NMB du déploiement = +8 M£
Monde B (p = 0,4) : l'assistant ne gagne ~rien (friction du flux de travail)
                     → NMB du déploiement = −3 M£
NMB du « ne pas déployer » = 0 £ dans les deux mondes.
```

Décider maintenant : E[NMB déploiement] = 0,6 × 8 − 0,4 × 3 = **+3,6 M£** → déployer.

Avec une information parfaite : dans le monde A, choisir le déploiement (+8 M£) ; dans le monde B, choisir de ne rien faire (0 £). Valeur espérée = 0,6 × 8 + 0,4 × 0 = **4,8 M£**.

```
EVPI = 4,8 M£ − 3,6 M£ = 1,2 M£
```

Un pilote rigoureux de 3 mois coûtant 150 000 £ qui résout substantiellement la question de savoir dans quel monde vous vous trouvez en vaut résolument la peine — et tout pilote coûtant plus de 1,2 M£ ne la vaut pas, aussi rigoureux soit-il.

## Lien avec l'ingénierie logicielle

L'EVPI est l'économie du spike, du pilote, du test A/B et de la preuve de concept. Elle produit deux règles pratiques :

- **Un pilote ne vaut la peine d'être financé que si la décision pourrait réellement changer.** Si vous déploieriez de toute façon quel que soit le résultat du pilote, l'EVPI = 0 et le pilote n'est que du théâtre.
- **Plafonnez la dépense du pilote à l'EVPI.** La valeur de l'information est bornée par la valeur de la décision qu'elle éclaire.

L'EVPI partielle (EVPPI) étend ceci à des paramètres individuels : « que vaut-il de préciser spécifiquement le chiffre de temps gagné ? » — ce qui indique ce que le pilote devrait mesurer.

## Pièges

- **Lancer des pilotes sans règle de décision associée** — une information qui ne peut pas changer le choix est sans valeur par définition.
- **Ignorer le coût du délai** lié à la collecte d'informations : un pilote de 6 mois retarde 6 mois de bénéfice ([coût du délai](../cost-of-delay/)) ; la valeur nette du pilote = EVPI résolue − coût du délai − coût du pilote.
- **Traiter l'EVPI comme une prévision.** C'est une borne supérieure de la valeur de l'information, pas une estimation de ce qu'une étude spécifique produira.

## Sources

- Claxton K. « Exploring uncertainty in cost-effectiveness analysis. » PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium, glossaire : EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
