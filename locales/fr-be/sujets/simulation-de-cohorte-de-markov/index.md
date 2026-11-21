# Simulation de cohorte de Markov

Un modèle de cohorte de Markov est la technique de modélisation standard de l'ETS pour les interventions dont les effets se déploient sur plusieurs périodes (cycles) plutôt que d'un seul coup. Une cohorte hypothétique démarre entièrement dans un état de santé et, à chaque cycle, un ensemble fixe de probabilités de transition déplace des fractions de la cohorte entre les états ; les coûts et les QALY s'accumulent à chaque cycle proportionnellement à la fraction de la cohorte qui occupe chaque état, puis sont actualisés à leur valeur présente. Tout ingénieur logiciel qui modélise un dossier économique de santé numérique sur plusieurs années, où des utilisateurs ou des patients passent d'un état à l'autre — « engagé », « décroché » ou « résilié » — au fil du temps, construit cette même structure.

## Pourquoi c'est important

La plupart des décisions réelles sur les technologies de santé ne sont pas une comparaison de coût et de résultat sur une seule période. Une affection chronique progresse, rechute, répond au traitement ou tue, sur des années — et une [analyse coût-efficacité](../analyse-coût-efficacité/) à période unique ne peut pas le représenter. Les dossiers soumis à NICE, ICER et CADTH pour des interventions sur des maladies chroniques évaluées par l'[évaluation des technologies de santé](../évaluation-des-technologies-de-santé/) sont presque toujours construits comme des modèles de cohorte de Markov à horizon temporel vie entière, parce que l'alternative — modéliser chaque trajectoire individuelle possible de patient — n'est pas soluble à grande échelle. Un modèle de Markov au niveau de la cohorte échange une partie du réalisme individuel (il représente mal la mémoire des états antérieurs, d'où le « Markov » : l'avenir ne dépend que de l'état présent) contre un modèle transparent, auditable et assez rapide pour être exécuté des milliers de fois dans une [analyse de sensibilité probabiliste](../analyse-de-sensibilité-probabiliste/).

## Le calcul

```
Mise à jour de la cohorte en un cycle (vecteur ligne × matrice de transition) :
  nouvel_état[j] = somme_i état[i] * matrice_transition[i][j]

Coût d'un cycle :
  coût_cycle = somme_s état[s] * coût_par_cycle[s]

QALY d'un cycle :
  qaly_cycle = somme_s état[s] * utilité[s] * durée_cycle_années

Simulation complète sur `cycles` cycles, actualisée au `taux_d_actualisation` :
  coût_actualisé_total = somme_{t=0}^{cycles-1} coût_cycle(état_t) / (1 + taux_d_actualisation)^t
  qaly_actualisé_total = somme_{t=0}^{cycles-1} qaly_cycle(état_t) / (1 + taux_d_actualisation)^t
  où état_0 = distribution initiale, état_{t+1} = faire_avancer_cohorte(état_t, matrice_transition)
```

L'actualisation de chaque cycle à sa valeur présente utilise exactement la formule d'[Actualisation et préférence temporelle](../actualisation-et-préférence-temporelle/), appliquée cycle par cycle plutôt qu'année par année.

## Exemple chiffré

**Clinique** : un modèle à 2 états — `En bonne santé` et `Décédé` — où 10 % de la cohorte meurt à chaque cycle et où `Décédé` est un état absorbant (probabilité de rester dans cet état de 1,0 ; sans cette boucle, la masse de la cohorte disparaîtrait après un cycle dans `Décédé`). La cohorte démarre entièrement `En bonne santé`, coûte 1 000 £ par cycle tant qu'elle est `En bonne santé` (0 £ une fois `Décédé`) et gagne 0,8 QALY par an tant qu'elle est `En bonne santé`. Simulation de 3 cycles annuels au taux d'actualisation de 3,5 % de NICE :

```
Cycle 0 : état = [1.00, 0.00] (100 % en bonne santé)
  coût = £1,000.00, qaly = 0.800, facteur d'actualisation = 1.000000
  actualisé : coût = £1,000.00, qaly = 0.8000

Cycle 1 : état = [0.90, 0.10] (90 % en bonne santé, 10 % décédés)
  coût = £900.00, qaly = 0.720, facteur d'actualisation = 0.966184
  actualisé : coût = £869.57, qaly = 0.6957

Cycle 2 : état = [0.81, 0.19] (81 % en bonne santé, 19 % décédés)
  coût = £810.00, qaly = 0.648, facteur d'actualisation = 0.933511
  actualisé : coût = £756.14, qaly = 0.6049

Coût actualisé total ≈ £2,625.71
QALY actualisés totaux ≈ 2.1006
```

L'état de chaque cycle est celui du cycle précédent passé dans la matrice de transition : 90 % des 90 % encore `En bonne santé` au cycle 1 le restent au cycle 2 (0,9 × 0,9 = 0,81), tandis que les 19 % restants sont déjà décédés (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Notez que la cohorte ne vide jamais complètement l'état `En bonne santé` : avec une mortalité constante de 10 % par cycle et sans retour, la proportion `En bonne santé` décroît géométriquement et n'atteint zéro en aucun nombre fini de cycles.

## Lien avec l'ingénierie logicielle

Pour voir comment un modèle d'ETS à plusieurs cycles est utilisé dans une évaluation réelle, voir [Évaluation des technologies de santé](../évaluation-des-technologies-de-santé/) — le cas de référence qui fixe le taux d'actualisation, la source des utilités et l'horizon temporel qu'un modèle de Markov soumis doit utiliser.

Un modèle de cohorte de Markov est, structurellement, une machine à états à transitions probabilistes, exécutée sur un nombre fixe de pas, avec actualisation de la valeur à chaque pas. La même forme simule la rétention d'une cohorte d'utilisateurs et leurs transitions d'état dans le temps — voir les [métriques DORA](../métriques-dora/) pour la version fiabilité : « quelle fraction du système est en état dégradé sur cette période et combien cela coûte-t-il ». Concrètement :

- **Modéliser la rétention/le désabonnement** revient à un modèle de cohorte de Markov avec des états comme « actif », « à risque », « perdu » : une matrice de transition mensuelle fixe, exécutée sur 12 ou 24 cycles mensuels, donne le nombre attendu d'utilisateurs actifs (et le chiffre d'affaires) pour n'importe quel mois futur, tout comme `En bonne santé`/`Décédé` donne les survivants attendus.
- **Fiabilité et économie des incidents** : les états du système (sain, dégradé, hors service) peuvent se modéliser de la même façon, avec un « coût par cycle » pour les dégâts d'indisponibilité qui s'accumulent tant que le système occupe les états dégradé/hors service — ce qui transforme l'argument de fréquence des incidents en un argument de coût actualisé, comparable au coût du travail de fiabilité qui modifierait les probabilités de transition.
- **Les états absorbants comme états terminaux** : `Décédé` dans le modèle clinique est exactement l'« abonnement résilié » ou le « hors ligne définitivement » d'un modèle logiciel — tous deux exigent une probabilité explicite de rester dans cet état de 1,0, faute de quoi la simulation perd de la masse en silence.

## Pièges

- **Des probabilités de transition dont la somme par ligne n'égale pas 1.** Une ligne dont la somme est supérieure ou inférieure à 1 fait « fuir » ou « apparaître » la masse de la cohorte en silence à chaque cycle ; il faut toujours vérifier les sommes de lignes avant de se fier aux sorties du modèle, car la structure du modèle ne signale pas cette erreur.
- **Une durée de cycle trop grossière pour la dynamique réelle de la maladie.** Un cycle annuel pour un état qui change en quelques semaines sous-estime les transitions intermédiaires ; il faut choisir une durée de cycle courte par rapport à la vitesse réelle du processus modélisé.
- **Oublier la boucle de l'état absorbant.** Un état absorbant (décès, résiliation définitive) a besoin d'une probabilité de rester dans cet état de 1,0 exactement. Si on l'omet, la masse de la cohorte s'évapore de cet état après un cycle et les coûts cumulés ou la perte de QALY sont sous-estimés.
- **Tenir le modèle pour validé parce qu'il tourne.** Un modèle de cohorte de Markov avec des probabilités de transition plausibles peut rester structurellement faux (états manquants, comportement absorbant erroné) ; il faut le valider par rapport à des repères épidémiologiques connus (par exemple, la survie à 5 ans simulée correspond-elle aux courbes de survie publiées ?) avant de se fier à ses sorties.

## Sources

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
