# Nombre Nécessaire à Traiter (NNT)

Le NNT est le nombre de patients devant recevoir une intervention pour qu'**un** patient supplémentaire en bénéficie, sur une période déclarée. Il convertit les réductions de risque en pourcentage — qui induisent en erreur — en unités d'effort-par-bénéfice que quiconque peut raisonner.

## Pourquoi c'est important

« Réduit les crises cardiaques de 25 % ! » semble décisif. Si le risque de base est de 4 % sur 5 ans, la réduction absolue est de 1 point de pourcentage, donc **100 personnes doivent prendre le médicament pendant 5 ans pour qu'1 en bénéficie** — et les 100 paient les coûts et effets secondaires. Le NNT est l'antidote au marketing de risque relatif, ce pourquoi la médecine fondée sur les preuves le met en avant. Statines pour prévention primaire : NNT ≈ 50-100 sur 5 ans par crise cardiaque évitée. Son miroir, le **NNN** (nombre nécessaire pour nuire), compte combien sont traités par personne lésée.

## Le calcul

```
RRA = taux d'événements contrôle − taux d'événements traitement   (réduction de risque absolue)
NNT = 1 / RRA

NNN = 1 / (taux de préjudice_traitement − taux de préjudice_contrôle)

Pont économique :
coût par événement évité = NNT × coût par cure de traitement
```

Déclarez toujours la période et la population de base — le NNT n'a aucun sens sans les deux.

## Exemple résolu

Un système de prédiction des chutes dans un hôpital signale les patients à haut risque pour intervention (capteurs de lit, revue, supervision). Essai : les chutes avec blessure passent de 3,2 % à 2,4 % des admissions.

```
RRA = 0,8 point de pourcentage → NNT = 1/0,008 = 125
   (125 patients doivent recevoir le paquet d'intervention pour prévenir 1 chute avec blessure)

Coût de l'intervention ≈ 40 £/patient → coût par chute évitée = 125 × 40 = 5 000 £
Coût d'une chute hospitalière avec blessure (séjour supplémentaire, imagerie, litige) ≈ 12 000 £
Net : la prévention rapporte ~2,4:1 — et le gain de QALY vient en plus.
```

Notez comment le NNT maintient l'allégation honnête : « réduit les chutes de 25 % » et « prévient une chute pour 125 patients traités » sont le même résultat, différemment persuasif.

## Lien avec l'ingénierie logicielle

Le NNT est l'unité correcte pour toute porte ou vérification agissant sur de nombreux éléments pour en capturer peu : **« nombre de PR devant passer par la porte de revue IA pour attraper un défaut destiné à la production »**. Si la porte revoit 400 PR par capture réelle (NNT = 400) à 4 minutes d'attention développeur chacune, une capture coûte ~27 heures-développeur — comparez maintenant cela au coût de l'incident qu'elle prévient. Le NNN se mappe aux faux positifs : combien de PR par signalement *faux*, et que coûte chacun en attention et confiance ? Les outils de style dépistage (linters, scanners de sécurité, détection d'anomalies) devraient être livrés avec l'arithmétique NNT/NNN — voir [économie du dépistage](../économie-du-dépistage/) pour pourquoi la faible prévalence rend ces chiffres brutaux.

## Pièges

- **Aucune période** : « NNT = 50 » ne signifie rien ; « NNT = 50 sur 5 ans » est une allégation.
- **Transplantation de risque de base** : le NNT calculé dans une population d'essai à haut risque s'effondre dans une population de déploiement à faible risque.
- **Ignorer le NNN** — une porte avec NNT 400 et NNN 3 est un générateur de nuisance, pas un système de sécurité.

## Sources

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT expliqué. <https://www.thennt.com/thennt-explained/>
