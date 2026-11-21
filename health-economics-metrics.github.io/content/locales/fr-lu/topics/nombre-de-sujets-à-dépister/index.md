# Nombre de sujets à dépister (NNS)

Le NNS est le nombre de personnes qu'il faut dépister — et pas seulement traiter — pour prévenir **un** événement indésirable sur un suivi défini, compte tenu du risque de base de la population et de la réduction relative du risque obtenue par la détection et le traitement précoces. C'est l'analogue, au niveau du programme de dépistage, du NNT : le NNT demande combien de personnes il faut *traiter* pour éviter un événement ; le NNS demande combien de personnes doivent parcourir tout le parcours *dépistage puis traitement* pour y parvenir.

## Pourquoi c'est important

Rembold a introduit le NNS en 1998 précisément pour que les programmes de dépistage puissent être comparés sur la même base que les traitements, car le chiffre de réduction relative du risque d'un test de dépistage cache deux choses que le traitement ne cache pas : le risque de base de la population réellement invitée au dépistage, et le fait que toute personne dépistée supporte le coût du test et le poids des faux positifs, et pas seulement la minorité qui en bénéficiera plus tard. Le critère de coût-efficacité du Comité national de dépistage du Royaume-Uni (voir [Économie du dépistage](../économie-du-dépistage/)) repose sur cette distinction : un programme de dépistage avec une réduction relative du risque impressionnante dans une population à faible risque de base peut avoir un NNS de plusieurs milliers, et le coût du programme par événement évité devient alors la vraie question.

## Le calcul

```
NNS = 1 / (risque_de_base × réduction_relative_du_risque)

risque_de_base                  = probabilité de l'événement dans la population
                                  dépistée sur la période de suivi (0–1)
réduction_relative_du_risque    = réduction proportionnelle du risque obtenue par le
                                  traitement précoce que rend possible le dépistage (0–1)

coût_du_programme_par_événement_évité = NNS × coût_par_dépistage
```

À comparer directement au [NNT](../nombre-de-sujets-à-traiter/) : le NNS replie l'efficacité de tout l'entonnoir dépistage → diagnostic → traitement en un seul chiffre, tandis que le NNT suppose que le patient est déjà diagnostiqué et a commencé le traitement.

## Exemple chiffré

La population cible d'un programme de dépistage a un risque de base de l'événement de 2 % sur la période d'étude (`risque_de_base = 0,02`) et la détection précoce obtient une réduction relative du risque de 25 % (`réduction_relative_du_risque = 0,25`) :

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

Il faut dépister 200 personnes pour éviter un événement.

À 50 £ par dépistage :
Coût du programme par événement évité = 200 × £50 = £10,000
```

Ces 10 000 £ doivent être mis en regard du coût de l'événement lui-même et des QALY qu'il aurait coûtés — la même comparaison que fait l'[économie de la prévention](../économie-de-la-prévention/) pour les programmes de prévention en général.

## Lien avec l'ingénierie logicielle

Le NNS, c'est « combien d'utilisateurs, d'événements ou de requêtes doivent traverser un flux de détection ou de tri pour attraper un vrai positif sur lequel agir » — directement pertinent pour les systèmes de supervision et de tri fondés sur des alertes, où une condition cible rare gonfle le NNS de la même manière qu'elle fait s'effondrer la valeur prédictive positive (voir [Économie du dépistage](../économie-du-dépistage/) et [Évaluation de l'IA clinique](../évaluation-de-l-ia-clinique/)). Une règle de supervision qui doit traiter 200 événements par capture réelle ne vaut la peine d'être exécutée que si cette capture vaut au moins 200 fois le coût de tri par événement — la même arithmétique que l'exemple de santé ci-dessus.

## Pièges

- **Ignorer la dépendance au risque de base** : le même test ou programme de dépistage a un NNS — et un coût-efficacité — très différent dans des populations à haut et à bas risque. Ne présentez jamais un NNS sans nommer la population pour laquelle il a été calculé.
- **Mal lire le dénominateur** : le NNS compte les personnes *dépistées*, pas celles qui sont positives ou qui commencent un traitement ; il inclut déjà l'efficacité de tout l'entonnoir, donc il ne doit jamais être comparé à une mesure qui ne compte que les positifs.
- **Comparer entre périodes de suivi** : un suivi plus court gonfle généralement le NNS parce que moins d'événements sont observés dans la fenêtre. Les chiffres de NNS ne sont comparables que s'ils sont calculés pour la même durée de suivi.

## Sources

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
