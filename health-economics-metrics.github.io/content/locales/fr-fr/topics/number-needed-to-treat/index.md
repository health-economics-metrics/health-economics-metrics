# Nombre de sujets à traiter (NNT)

Le NNT est le nombre de patients devant recevoir une intervention pour qu'**un seul** patient supplémentaire en bénéficie, sur une période donnée. Il convertit les réductions de risque en pourcentage — qui induisent en erreur — en unités d'effort par bénéfice que chacun peut appréhender.

## Pourquoi c'est important

« Réduit les crises cardiaques de 25 % ! » paraît décisif. Si le risque de base est de 4 % sur 5 ans, la réduction absolue est de 1 point de pourcentage, donc **100 personnes doivent prendre le médicament pendant 5 ans pour qu'une seule en bénéficie** — et les 100 en subissent les coûts et effets secondaires. Le NNT est l'antidote au marketing du risque relatif, ce pourquoi la médecine fondée sur les preuves le met en avant. Statines en prévention primaire : NNT ≈ 50–100 sur 5 ans par crise cardiaque évitée. Son miroir, le **NNH** (number needed to harm, nombre de sujets pour nuire à un), compte combien de personnes traitées par personne lésée.

## Le calcul

```
ARR = taux d'événement contrôle − taux d'événement traitement   (réduction de risque absolue)
NNT = 1 / ARR

NNH = 1 / (taux de nuisance_traitement − taux de nuisance_contrôle)

Passerelle économique :
coût par événement évité = NNT × coût du cursus de traitement
```

Toujours préciser la période et la population de référence — le NNT n'a aucun sens sans les deux.

## Exemple chiffré

Un système de prédiction des chutes dans un hôpital signale les patients à haut risque pour intervention (capteurs de lit, revue, supervision). Essai : les chutes avec blessure passent de 3,2 % à 2,4 % des admissions.

```
ARR = 0,8 point de pourcentage → NNT = 1/0,008 = 125
   (125 patients doivent recevoir le dispositif d'intervention pour éviter 1 chute avec blessure)

Coût de l'intervention ≈ 40 £/patient → coût par chute évitée = 125 × 40 = 5 000 £
Coût d'une chute hospitalière avec blessure (séjour prolongé, imagerie, contentieux) ≈ 12 000 £
Net : la prévention rapporte ~2,4:1 — et le gain de QALY s'ajoute par-dessus.
```

Notez comment le NNT garde l'affirmation honnête : « réduit les chutes de 25 % » et « prévient une chute pour 125 patients traités » sont le même résultat, diversement persuasifs.

## Lien avec l'ingénierie logicielle

Le NNT est la bonne unité pour tout filtre ou contrôle qui traite un grand nombre d'éléments pour en attraper peu : **« nombre de PR devant passer par le filtre de revue IA pour attraper un défaut destiné à la production ».** Si le filtre examine 400 PR par attrape réelle (NNT = 400) avec 4 minutes d'attention développeur chacune, une attrape coûte ~27 heures-développeur — comparez maintenant cela au coût de l'incident qu'elle évite. Le NNH correspond aux faux positifs : combien de PR par fausse alerte, et quel en est le coût en attention et en confiance ? Les outils de type dépistage (linters, scanners de sécurité, détection d'anomalies) devraient être livrés avec le calcul NNT/NNH — voir [économie du dépistage](../screening-economics/) pour comprendre pourquoi une faible prévalence rend ces chiffres brutaux.

## Pièges

- **Absence de période** : « NNT = 50 » ne veut rien dire ; « NNT = 50 sur 5 ans » est une affirmation.
- **La transplantation du risque de base** : un NNT calculé dans une population d'essai à haut risque s'effondre dans une population de déploiement à faible risque.
- **Ignorer le NNH** — un filtre avec un NNT de 400 et un NNH de 3 est un générateur de nuisances, pas un système de sécurité.

## Sources

- Laupacis A, Sackett DL, Roberts RS. « An assessment of clinically useful measures of the consequences of treatment. » NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT expliqué. <https://www.thennt.com/thennt-explained/>
