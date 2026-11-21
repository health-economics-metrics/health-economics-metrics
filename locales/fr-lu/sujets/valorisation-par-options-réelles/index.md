# Valorisation par options réelles

La valorisation par options réelles applique la logique de la valorisation des options financières à des décisions d'investissement réelles (non négociées sur un marché financier) — plus précisément à l'*option d'extension* : le droit d'élargir un projet plus tard s'il réussit, sans y être obligé. Un modèle binomial simplifié à une période (Cox, Ross, Rubinstein, 1979) valorise directement cette flexibilité et transforme « livrer petit et voir » d'une intuition en un chiffre valorisé.

## Pourquoi c'est important

Un calcul de valeur actuelle statique valorise le projet comme un pari du tout ou rien : financer ou non, à l'échelle d'aujourd'hui, pour toujours. Les projets réels — et en particulier les déploiements échelonnés de santé numérique — sont rarement structurés ainsi : un système de santé peut financer un petit pilote, voir ce qui se passe, et ne s'engager davantage que si cela fonctionne. Cette flexibilité a une valeur réelle, et l'ignorer sous-évalue systématiquement les investissements échelonnés par rapport à ceux en une fois, ce qui est l'inverse des processus d'achat qui récompensent la proposition échelonnée qui paraît plus sûre. La valorisation par options réelles chiffre la flexibilité elle-même, de sorte qu'une proposition échelonnée puisse être comparée équitablement à l'alternative d'engagement total, au lieu d'être pénalisée parce qu'elle paraît plus petite sur la ligne naïve de la valeur actuelle.

## Le calcul

```
Probabilité neutre au risque de l'état « hausse » :
  p = ((1 + taux_sans_risque) − facteur_baisse) / (facteur_hausse − facteur_baisse)

Gain d'extension dans chaque état (plancher à zéro — l'extension est facultative) :
  gain_hausse = max(valeur_du_projet × facteur_hausse − coût_d_extension, 0)
  gain_baisse = max(valeur_du_projet × facteur_baisse − coût_d_extension, 0)

Valeur de l'option (gain espéré actualisé) :
  valeur_option = (p × gain_hausse + (1 − p) × gain_baisse) / (1 + taux_sans_risque)

VAN étendue = van_statique + valeur_option
```

La valeur du projet monte (`facteur_hausse`) ou baisse (`facteur_baisse`) jusqu'au prochain point de décision. L'extension n'est exercée que si elle est rentable dans cet état : le plancher à zéro du gain est ce qui en fait une véritable *option* et non une obligation. Pour valoriser l'option de recueillir d'abord de l'information, plutôt que l'option d'étendre plus tard, voir [Valeur espérée de l'information parfaite](../valeur-espérée-de-l-information-parfaite/). Pour le coût d'attendre cette décision, voir [Coût du retard](../coût-du-retard/).

## Exemple chiffré

Un pilote de service numérique avec une `valeur_du_projet = 1 000 000 £`, pouvant monter de 1,5× ou tomber à 0,5× d'ici le prochain point de décision, un taux sans risque de 8 % et un coût d'extension de 600 000 £ :

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

gain_hausse = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
gain_baisse = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

Le plancher joue : l'option ne SERAIT PAS exercée si le marché déçoit —
le coût d'extension de £600,000 dépasse les £500,000 que vaudrait le projet
dans l'état « baisse ».

valeur_option = (0.58 × 900,000 + 0.42 × 0) / 1.08
              = 522,000 / 1.08
              ≈ £483,333.33
```

En ajoutant la valeur de l'option à la base de VAN statique de 200 000 £ : VAN étendue = 200 000 + 483 333,33 ≈ **683 333,33 £**. Ne rapporter que la VAN statique de 200 000 £ sans la valeur de cette option sous-évaluerait la valeur réelle du projet échelonné de plus de moitié.

## Lien avec l'ingénierie logicielle

C'est la version formelle de « livrer maintenant la version minimale, conserver l'option d'investir davantage si elle prend » — directement pertinente pour le déploiement échelonné d'un produit de santé numérique, parallèle structurel des cadres de séquencement sous incertitude de [Coût du retard](../coût-du-retard/) et de [WSJF et CD3](../wsjf-et-cd3/), et complémentaire de la [Valeur espérée de l'information parfaite](../valeur-espérée-de-l-information-parfaite/) et de la [Valeur espérée de l'information d'échantillon](../valeur-espérée-de-l-information-d-échantillon/) — les trois chiffrent la flexibilité ou l'information sous incertitude, sous des angles différents.

## Pièges

- **Emprunter la valorisation neutre au risque sans l'hypothèse d'actif négociable sur laquelle elle repose** : les modèles d'options réelles empruntent la probabilité neutre au risque à la valorisation des options financières, qui suppose que la valeur sous-jacente est un actif *négociable* ; pour un projet réel véritablement non négociable, c'est une commodité de modélisation, non un fait de marché littéral.
- **Traiter `facteur_hausse`/`facteur_baisse` comme des paramètres libres** : les entrées de hausse/baisse du binomial sont elles-mêmes des hypothèses qui demandent une justification, et non des paramètres libres choisis pour obtenir la réponse voulue.
- **Ne rapporter que la valeur de l'option** : la valeur d'une option réelle *s'ajoute* à la VAN statique du projet autonome ; l'erreur courante est de ne rapporter que la valeur de l'option et d'omettre le cas de base, ce qui exagère l'argument quand la VAN statique est négative et le sous-évalue (comme dans l'exemple chiffré ci-dessus) quand on omet entièrement la VAN statique.

## Sources

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — relie directement les options réelles au contexte de décision en économie de la santé. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
