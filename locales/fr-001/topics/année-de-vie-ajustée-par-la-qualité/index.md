# Année de Vie Ajustée par la Qualité (QALY)

Un QALY est une année de vie vécue en pleine santé. Il combine *combien de temps* les gens vivent avec *à quel point* ils vivent bien, de sorte qu'une année en mauvaise santé compte pour moins d'un QALY — rendant des interventions de santé complètement différentes comparables sur une échelle unique.

## Pourquoi c'est important

Le QALY est la monnaie commune de l'évaluation des technologies de santé. NICE (Angleterre) valorise les gains de santé à **20 000-30 000 £ par QALY** : une intervention qui achète des QALY moins cher que ce seuil est normalement recommandée ; une qui les achète plus cher est normalement rejetée. Ce chiffre unique est la façon dont un système de santé national compare un médicament anticancéreux, une prothèse de hanche et une application de triage sur le même axe. Si votre logiciel peut revendiquer des QALY de manière crédible — en prévenant la détérioration, en accélérant le traitement, ou en améliorant la sécurité — vous pouvez tarifer sa valeur de santé dans la même monnaie que la médecine elle-même.

## Le calcul

```
QALY = Σ_i (durée_i × utilité_i)

durée_i = années passées dans l'état de santé i
utilité_i  = pondération de qualité de l'état i, ancrée à 1 = santé parfaite, 0 = décès
             (valeurs négatives permises pour les états pires que le décès)
```

Les pondérations d'utilité proviennent d'instruments validés, le plus souvent l'[EQ-5D](../eq-5d/). Le *gain* de QALY d'une intervention est la différence entre les flux de QALY avec et sans elle, [actualisée](../actualisation-et-préférence-temporelle/) à 3,5 %/an dans le cas de référence de NICE.

## Exemple résolu

Un patient attend un traitement cardiaque dans un état d'utilité 0,6. Le traitement le restaure à une utilité de 0,85.

- **Traité maintenant** : 1 an à 0,85 = 0,85 QALY cette année.
- **Traité après un retard de 6 mois** : 0,5 × 0,6 + 0,5 × 0,85 = 0,725 QALY.
- **Perte de QALY par patient due au retard** : 0,85 − 0,725 = **0,125 QALY**.

Monétisé au seuil de NICE : 0,125 × 20 000-30 000 £ = **2 500-3 750 £ de valeur de santé perdue par patient par retard de 6 mois**. Si un logiciel accélérant le parcours élimine ce retard pour 400 patients/an, la valeur de santé est de 50 QALY ≈ **1,0-1,5 million £/an** — avant de compter toute économie opérationnelle.

## Lien avec l'ingénierie logicielle

- **Des parcours plus rapides = des QALY plus tôt.** Tout ce qui raccourcit la [recommandation vers traitement](../recommandation-vers-traitement/) convertit la désutilité du temps d'attente en gain de santé, tarifé comme ci-dessus.
- **Sécurité = QALY préservés.** Les erreurs de médication prévenues et les diagnostics manqués sont des pertes de QALY évitées.
- **Le QALY est aussi un modèle de conception de métrique** : un composite de quantité × qualité, avec des pondérations de qualité obtenues d'un instrument standardisé. Une « année-ingénieur ajustée par la qualité » (temps × pondération d'enquête DevEx) est la même construction — voir [SPACE et DevEx](../space-et-devex/).
- Pour convertir les QALY en argent pour un dossier de décision, utilisez le [bénéfice monétaire net](../bénéfice-monétaire-net/) ; pour les convertir en décision, utilisez les [seuils de disposition à payer](../seuils-de-disposition-à-payer/).

## Pièges

- **Inventer des pondérations d'utilité.** Les pondérations doivent provenir d'instruments validés (EQ-5D) et d'ensembles de valeurs publiés, pas de l'intuition.
- **Revendiquer des QALY sans chemin causal.** « Notre application améliore le bien-être » n'est pas une allégation de QALY ; « supprime X semaines d'attente en état d'utilité 0,6 » l'est.
- **Double comptage** : revendiquer à la fois le gain de QALY et les économies de coût de la même détérioration évitée nécessite une attention pour s'assurer qu'ils sont véritablement séparés.
- **Angles morts d'équité** : les QALY valorisent une année d'extension de vie par l'utilité de base, ce qui peut désavantager les personnes avec des handicaps — la raison pour laquelle l'ICER (États-Unis) rapporte aussi l'evLYG (voir [années de vie gagnées](../années-de-vie-gagnées/)).

## Sources

- Glossaire NICE : QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
