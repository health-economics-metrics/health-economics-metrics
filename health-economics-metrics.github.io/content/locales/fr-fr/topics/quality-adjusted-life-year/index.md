# Année de vie ajustée sur la qualité (QALY)

Un QALY est une année de vie vécue en parfaite santé. Il combine *combien de temps* on vit avec *avec quelle qualité* on vit, de sorte qu'une année en mauvaise santé compte pour moins d'un QALY — ce qui rend comparables sur une échelle unique des interventions de santé pourtant très différentes.

## Pourquoi c'est important

Le QALY est la monnaie commune de l'évaluation des technologies de santé. NICE (Angleterre) valorise les gains de santé à **20 000–30 000 £ par QALY** : une intervention qui achète des QALYs moins cher que ce seuil est normalement recommandée ; une intervention qui les achète plus cher est normalement rejetée. Ce chiffre unique est ce qui permet à un service de santé national de comparer un médicament anticancéreux, une prothèse de hanche et une application de triage sur le même axe. Si votre logiciel peut revendiquer de manière crédible des QALYs — en évitant une dégradation de l'état de santé, en accélérant le traitement ou en améliorant la sécurité — vous pouvez valoriser son bénéfice santé dans la même monnaie que la médecine elle-même.

## Le calcul

```
QALYs = Σ_i (durée_i × utilité_i)

durée_i   = nombre d'années passées dans l'état de santé i
utilité_i = poids de qualité de l'état i, ancré à 1 = santé parfaite, 0 = décès
            (des valeurs négatives sont possibles pour des états pires que la mort)
```

Les poids d'utilité proviennent d'instruments validés, le plus souvent l'[EQ-5D](../eq-5d/). Le *gain* de QALY d'une intervention est la différence entre les flux de QALY avec et sans elle, [actualisée](../discounting-and-time-preference/) à 3,5 %/an dans le cas de référence de NICE.

## Exemple chiffré

Un patient attend un traitement cardiaque dans un état d'utilité 0,6. Le traitement lui restitue une utilité de 0,85.

- **Traité immédiatement** : 1 an à 0,85 = 0,85 QALY cette année-là.
- **Traité après un délai de 6 mois** : 0,5 × 0,6 + 0,5 × 0,85 = 0,725 QALY.
- **Perte de QALY par patient due au délai** : 0,85 − 0,725 = **0,125 QALY**.

Valorisée au seuil de NICE : 0,125 × 20 000–30 000 £ = **2 500–3 750 £ de valeur santé perdue par patient pour un délai de 6 mois**. Si un logiciel qui accélère le parcours supprime ce délai pour 400 patients/an, la valeur santé est de 50 QALYs ≈ **1,0–1,5 million £/an** — avant même de compter les économies opérationnelles.

## Lien avec l'ingénierie logicielle

- **Des parcours plus rapides = des QALYs gagnés plus tôt.** Tout ce qui raccourcit le [délai entre orientation et traitement](../referral-to-treatment/) convertit la désutilité de l'attente en gain de santé, valorisé comme ci-dessus.
- **Sécurité = QALYs préservés.** Les erreurs médicamenteuses évitées et les diagnostics manqués évités sont des pertes de QALY empêchées.
- **Le QALY est aussi un gabarit de conception de métrique** : un composite de quantité × qualité, avec des poids de qualité recueillis via un instrument standardisé. Une « année-ingénieur ajustée sur la qualité » (temps × poids issu d'une enquête DevEx) obéit à la même construction — voir [SPACE et DevEx](../space-and-devex/).
- Pour convertir des QALYs en argent dans un dossier économique, utilisez le [bénéfice monétaire net](../net-monetary-benefit/) ; pour les convertir en décision, utilisez les [seuils de disposition à payer](../willingness-to-pay-thresholds/).

## Pièges

- **Inventer des poids d'utilité.** Les poids doivent provenir d'instruments validés (EQ-5D) et de barèmes de valeurs publiés, pas de l'intuition.
- **Revendiquer des QALYs sans chaîne causale.** « Notre application améliore le bien-être » n'est pas une revendication de QALY ; « supprime X semaines d'attente dans un état d'utilité 0,6 » en est une.
- **Double comptage** : revendiquer à la fois le gain de QALY et les économies de coûts liées à la même dégradation évitée exige de vérifier avec soin qu'ils sont bien distincts.
- **Angles morts en matière d'équité** : le QALY valorise une année de vie gagnée par l'utilité de référence, ce qui peut désavantager les personnes en situation de handicap — c'est pourquoi l'ICER (États-Unis) publie aussi l'evLYG (voir [années de vie gagnées](../life-years-gained/)).

## Sources

- Glossaire NICE : QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE, évaluations des technologies de santé : le manuel (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, « Cost-Effectiveness, the QALY, and the evLYG ». <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
