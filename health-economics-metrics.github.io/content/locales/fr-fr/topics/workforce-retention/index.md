# Fidélisation des effectifs

L'économie de la fidélisation des effectifs quantifie ce que coûte à un système de santé la rotation du personnel — recrutement, intégration, couverture des postes vacants — et donc la valeur d'un logiciel qui réduit l'épuisement professionnel lié aux tâches administratives. L'épuisement professionnel causé par des tâches de saisie de données administratives répétitives est un moteur majeur de la rotation du personnel et de l'absentéisme maladie au sein du NHS.

## Pourquoi c'est important

Quand un clinicien part, le trust paie trois fois : pour recruter un remplaçant (publicité, frais d'agence, entretiens), pour l'intégrer (des mois de productivité réduite, d'encadrement), et pour couvrir le poste vacant entre-temps — généralement avec du personnel d'agence ou vacataire à des taux 2 à 3 fois supérieurs aux grilles Agenda for Change habituelles (voir [coûts d'externalisation évitables](../avoidable-outsourcing-costs/) et [économies génératrices de trésorerie difficiles](../hard-cash-releasing-savings-deficit-defence/)). Comme les coûts de rotation représentent de la trésorerie réelle, les gains de fidélisation figurent parmi les rares bénéfices en matière d'effectifs qu'un directeur financier peut inscrire au bilan. La friction administrative fait constamment partie des principaux facteurs cités de l'épuisement professionnel clinique, ce qui en fait un coût que le logiciel peut adresser.

## Le calcul

```
Coût par départ = coût de recrutement + coût d'intégration/montée en productivité
                 + surcoût de couverture du poste vacant × durée de la vacance

Coût annuel de rotation = effectif × taux de rotation × coût par départ

Valeur du logiciel  = effectif × Δtaux de rotation × coût par départ
                    + réduction de l'absentéisme maladie × coût de couverture/jour
```

La chaîne causale comporte deux maillons à estimer — logiciel → épuisement/friction, et épuisement → rotation — il faut donc étayer les deux (enquêtes auprès du personnel avant/après ; associations épuisement-attrition publiées) et garder le Δ revendiqué modeste.

## Exemple chiffré

Un trust emploie 1,200 infirmières ; rotation de 11%/an. Coût par départ :

```
Recrutement ≈ £4,500 ; intégration/montée en compétence ≈ £6,000
Couverture du poste vacant : 4 mois × 0.6 ETP couverts par une prime d'agence ≈ £8,000
Total ≈ £18,500 par départ
Coût de rotation de référence = 1,200 × 0.11 × 18,500 ≈ £2.44M/an
```

Un logiciel de réduction de la charge documentaire (évaluations auto-remplies, authentification unique, dictée) fait plausiblement évoluer la rotation d'1 point de pourcentage :

```
Valeur = 1,200 × 0.01 × 18,500 = £222,000/an pertinents en trésorerie
```

Une allégation de 1 point étayée par des scores de friction issus d'enquêtes auprès du personnel est crédible ; une allégation de 4 points ne l'est pas. Faites tourner le [diagramme en tornade](../sensitivity-analysis/) sur le Δ de rotation : il domine tout le reste du modèle.

## Lien avec l'ingénierie logicielle

Le calcul de fidélisation en ingénierie est identique et bien moins documenté : remplacer un ingénieur senior coûte 6 à 12 mois de salaire chargé (recrutement, montée en compétence, perte de contexte), de sorte qu'une organisation de 200 personnes avec 15% d'attrition brûle des millions par an en rotation. L'investissement dans l'expérience développeur ([SPACE et DevEx](../space-and-devex/)) est l'analogue direct de l'allégement de la charge documentaire pour les infirmières — et devrait être justifié de la même manière : scores de friction mesurés, effet revendiqué modeste sur l'attrition, coût par départ tiré de vos propres données financières. La discipline de l'économie de la santé à reproduire est de *chiffrer honnêtement le coût du départ* plutôt que de débattre pour savoir si les gens partent « vraiment » à cause des outils.

## Pièges

- **Attribuer tout le mouvement de rotation à votre intervention** — le marché du travail fait bouger la rotation bien plus qu'un logiciel ; utilisez des groupes témoins ou au moins un ajustement sur la tendance sectorielle.
- **Le double comptage** : les économies de fidélisation et les économies sur les dépenses d'agence se recoupent (la couverture des postes vacants *est* une dépense d'agence) ; réconciliez les postes.
- **Ignorer le délai** : l'attrition liée à l'épuisement professionnel réagit aux changements de friction sur 1 à 2 ans, pas dès le trimestre suivant.

## Sources

- NHS England, reducing agency spend. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Staff Survey (burnout and intention-to-leave data). <https://www.nhsstaffsurveys.com/>
