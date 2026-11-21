# Valeur espérée de l'information d'échantillon (EVSI)

L'EVSI est la valeur d'*une étude précise proposée* — avec une conception et une taille d'échantillon données — avant de la mener, à la différence de l'[EVPI](../valeur-espérée-de-l-information-parfaite/), qui évalue l'élimination complète de toute l'incertitude. L'EVSI répond à la question que se pose réellement un financeur de recherche : « cette étude-*ci*, à cette taille-*là*, vaut-elle son coût ? »

## Pourquoi c'est important

L'EVPI donne un plafond à la valeur que pourrait avoir n'importe quelle étude ; il ne dit jamais si l'étude que l'on a devant soi franchit la barre. Un financeur national de la recherche qui choisit entre un pilote de 50 patients et un essai décisif de 500 patients doit connaître la valeur de *chaque conception*, pas seulement celle de tout savoir. L'EVSI donne ce chiffre, et comme il varie avec la taille d'échantillon, le financeur peut trouver la taille qui maximise le bénéfice net espéré plutôt que de la deviner.

C'est aussi pourquoi l'EVSI est toujours inférieur ou égal à l'EVPI : un échantillon fini ne résout l'incertitude qu'en partie, et une étude qui semblerait valoir plus que l'information parfaite est le signe d'une erreur de calcul, non d'un résultat réel.

## Le calcul

```
Cas général :
EVSI(n) = E_données[ max_d E_θ|données[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (espérance imbriquée : l'externe sur les résultats possibles de l'étude,
  l'interne sur la croyance a posteriori sur θ après avoir vu ce résultat ;
  généralement estimée par Monte Carlo imbriqué / mise à jour bayésienne sur
  les tirages de l'analyse de sensibilité probabiliste)

Approximation normale en forme fermée (un paramètre incertain, modèle
normal-normal conjugué — raccourci courant, non exact pour tout modèle) :
EVSI(n) = EVPI × n / (n + n0)

n  = taille d'échantillon de l'étude proposée
n0 = « taille d'échantillon équivalente de l'a priori » : la taille d'échantillon
     hypothétique qui porterait autant d'information que la croyance actuelle,
     déduite du rapport entre la variance des données et la variance de l'a priori
ENBS(n) = EVSI(n) − Coût(n)
EVSI de population = EVSI_par_décision × décisions_concernées
```

La forme générale est une espérance imbriquée parce que le résultat futur de l'étude est lui-même incertain : il faut moyenner sur chaque jeu de données possible et, pour chacun, recalculer la meilleure décision selon la croyance mise à jour (a posteriori). L'approximation normale échange ce coût de calcul contre un seul rapport, valable lorsque le paramètre incertain et les données sont (à peu près) normaux et conjugués — une commodité, non une loi universelle. Le Monte Carlo imbriqué complet est la méthode générale lorsque cette hypothèse ne tient pas. Voir [Analyse de sensibilité probabiliste](../analyse-de-sensibilité-probabiliste/) pour les tirages de PSA à partir desquels l'EVSI est généralement estimée.

## Exemple chiffré

Dans le prolongement de l'exemple chiffré de l'[EVPI](../valeur-espérée-de-l-information-parfaite/) — déploiement d'un assistant de documentation par IA dans 5 000 cliniques, où l'EVPI s'est élevé à 1,2 million de £ — on écrit ici ce même EVPI en entier : **EVPI = 1 200 000 £**.

Un pilote proposé couvre 50 cliniques. À partir du rapport entre la variance de la croyance a priori et la précision de mesure du pilote, la taille d'échantillon équivalente de l'a priori est `n0 = 75` :

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

Le pilote coûte 120 000 £ :

```
ENBS = EVSI − Coût = 480,000 − 120,000 = £360,000
```

Un ENBS nettement positif : financer le pilote. Si la même décision d'achat se répète dans 3 trusts régionaux similaires, la valeur du pilote s'échelonne en conséquence :

```
EVSI de population = 480,000 × 3 = £1,440,000
```

## Lien avec l'ingénierie logicielle

L'EVSI est l'économie de la *taille* que devrait avoir un projet pilote ou un test A/B, et pas seulement de l'opportunité d'en mener un :

- **La taille d'échantillon est une décision d'investissement.** Une bêta de 50 utilisateurs et un déploiement progressif jusqu'à 5 000 sont des « études » différentes, avec des EVSI et des coûts différents ; l'EVSI permet de les comparer sur une même base plutôt que de retomber sur le réflexe « plus de données, c'est toujours mieux ».
- **Le test d'abonnement relève de l'ENBS, pas de l'EVSI seul.** Une étude à EVSI élevé dont le coût en absorbe l'essentiel est une proposition faible ; la règle de décision est le bénéfice net espéré de l'échantillon, tout comme un dossier économique met le bénéfice en regard du coût au lieu de ne rapporter que le bénéfice.
- **Les rendements marginaux décroissants sont bien visibles.** Comme l'EVSI(n) croît en `n/(n+n0)`, doubler la taille du pilote ne double jamais sa valeur : la version formelle de l'intuition de l'ingénieur selon laquelle une expérience plus grande a une valeur informationnelle marginale décroissante.

## Pièges

- **Utiliser l'approximation normale hors de ses hypothèses.** Elle n'est approximativement valable que pour une incertitude conjuguée portant sur un paramètre ; un modèle de décision réellement non linéaire ou multiparamétrique demande le Monte Carlo imbriqué complet, pas ce raccourci.
- **Comparer l'EVSI au seul coût en numéraire.** L'EVSI doit être mis en regard du coût *complet* de l'étude, y compris le coût du retard de la décision elle-même — voir [Coût du retard](../coût-du-retard/) — et pas seulement de la facture de l'étude.
- **Traiter un EVSI > EVPI comme une vraie découverte.** Par construction, l'EVSI ne peut jamais dépasser l'EVPI ; un calcul qui l'obtient est une erreur de modèle, non une découverte.

## Sources

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
