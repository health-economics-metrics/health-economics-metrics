# Rétention de la Main-d'Œuvre

L'économie de rétention de la main-d'œuvre quantifie ce que le turnover du personnel coûte à un système de santé — recrutement, intégration, couverture de postes vacants — et donc ce que vaut un logiciel qui réduit l'épuisement administratif. L'épuisement dû aux tâches de données administratives répétitives est un moteur principal du turnover du personnel et de l'absentéisme maladie dans le NHS.

## Pourquoi c'est important

Lorsqu'un clinicien part, le trust paie trois fois : pour recruter un remplaçant (publicité, frais d'agence, entretiens), pour l'intégrer (des mois de productivité réduite, supervision), et pour couvrir le poste vacant entre-temps — typiquement avec du personnel d'agence ou remplaçant à des taux 2-3× les taux substantiels Agenda for Change (voir [coûts d'externalisation évitables](../coûts-d-externalisation-évitables/) et [économies dures libératrices de trésorerie](../économies-dures-libératrices-de-trésorerie-défense-du-déficit/)). Parce que les coûts de turnover sont de la vraie trésorerie, les améliorations de rétention sont parmi les rares bénéfices de main-d'œuvre qu'un directeur financier peut capitaliser. La friction administrative est constamment parmi les moteurs les plus cités de l'épuisement clinique, ce qui en fait un coût adressable par le logiciel.

## Le calcul

```
Coût par départ = coût de recrutement + coût d'intégration/montée en productivité
                + prime de couverture de poste vacant × durée du poste vacant

Coût annuel de turnover = effectifs × taux de turnover × coût par départ

Valeur du logiciel  = effectifs × Δtaux de turnover × coût par départ
                   + réduction de l'absentéisme maladie × coût de couverture/jour
```

La chaîne causale a deux liens estimés — logiciel → épuisement/friction, et épuisement → turnover — donc démontrez les deux (enquêtes de personnel avant/après ; associations épuisement-attrition publiées) et gardez le Δ revendiqué modeste.

## Exemple résolu

Un trust emploie 1 200 infirmières ; turnover 11 %/an. Coût par départ :

```
Recrutement ≈ 4 500 £ ;  intégration/montée en puissance ≈ 6 000 £
Couverture de poste vacant : 4 mois × 0,6 ETP couvert par prime d'agence ≈ 8 000 £
Total ≈ 18 500 £ par départ
Coût de turnover de base = 1 200 × 0,11 × 18 500 ≈ 2,44 M£/an
```

Le logiciel de charge de documentation (évaluations auto-remplies, authentification unique, dictée) déplace plausiblement le turnover d'1 point de pourcentage :

```
Valeur = 1 200 × 0,01 × 18 500 = 222 000 £/an pertinent en trésorerie
```

Une allégation d'1 point soutenue par des scores de friction d'enquête de personnel est crédible ; une allégation de 4 points ne l'est pas. Exécutez le [tornado](../analyse-de-sensibilité/) sur Δturnover : il domine tout le reste dans le modèle.

## Lien avec l'ingénierie logicielle

L'arithmétique de rétention en ingénierie est identique et moins bien documentée : remplacer un ingénieur senior coûte 6-12 mois de salaire chargé (recrutement, montée en puissance, contexte perdu), donc une organisation de 200 personnes avec 15 % d'attrition brûle des millions annuellement en turnover. L'investissement en expérience développeur ([SPACE et DevEx](../space-et-devex/)) est l'analogue direct du soulagement de charge de documentation pour les infirmières — et devrait être justifié de la même manière : scores de friction mesurés, effet modeste revendiqué sur l'attrition, coût par départ issu de vos propres données financières. La discipline d'économie de la santé à copier est *chiffrer honnêtement le départ* plutôt que débattre de savoir si les gens partent « vraiment » à cause de l'outillage.

## Pièges

- **Attribuer tout le mouvement de turnover à votre intervention** — les marchés du travail déplacent le turnover bien plus que le logiciel ; utilisez des groupes témoins ou au moins un ajustement de tendance sectorielle.
- **Double comptage** : les économies de rétention et les économies de dépense d'agence se chevauchent (la couverture de poste vacant *est* de la dépense d'agence) ; réconciliez les lignes.
- **Ignorer le délai** : l'attrition pilotée par l'épuisement répond aux changements de friction sur 1-2 ans, pas le trimestre prochain.

## Sources

- NHS England, reducing agency spend. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Staff Survey (données d'épuisement et d'intention de départ). <https://www.nhsstaffsurveys.com/>
