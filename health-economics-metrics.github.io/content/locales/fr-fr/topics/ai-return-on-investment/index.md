# Retour sur investissement de l'IA

Le ROI de l'IA est le retour mesurable sur le compte de résultat attribuable aux initiatives d'IA. Le constat qui doit inciter à la prudence : la recherche « GenAI Divide » du MIT en 2025 a révélé que, malgré 30 à 40 milliards de dollars d'investissement en IA générative en entreprise, **~95 % des pilotes n'ont montré aucun retour mesurable sur le compte de résultat** — et les 5 % qui ont réussi partageaient des habitudes identifiables.

## Pourquoi c'est important

Les systèmes de santé ont un nom pour ce schéma des pilotes IA : la **« pilotite »** — le cimetière du NHS d'applications prometteuses pilotées indéfiniment et jamais déployées à l'échelle. Les résultats du MIT rejoignent exactement ce que l'évaluation des technologies de santé sait déjà : les revendications de valeur ont besoin de critères d'évaluation préspécifiés, l'attribution a besoin de comparateurs, et « tout le monde a le sentiment que ça aide » n'est pas une ligne de bénéfice. La minorité qui a réussi dans les données du MIT se concentrait dans l'automatisation des fonctions support avec des références de coût traçables, et **les outils achetés ont réussi ~67 % du temps contre environ un tiers pour les développements internes** — des priors qui ont leur place dans tout dossier d'investissement en IA (voir [développer ou acheter](../build-vs-buy/)).

## Le calcul

```
ROI de l'IA = (bénéfice attribuable − coût total de l'IA) / coût total de l'IA

Coût total de l'IA = licences/inférence (voir inference-unit-economics.md)
                    + intégration + préparation des données + évaluation
                    + refonte des flux de travail + gouvernance/assurance
                    (la licence représente généralement la minorité du dénominateur)

Bénéfice attribuable : mesuré par rapport à une référence ou un groupe témoin,
classé en trésorerie / capacité / qualité selon
cash-releasing-vs-non-cash-releasing.md
```

## Exemple chiffré

Un groupe hospitalier déploie l'IA pour deux cas d'usage :

```
Cas d'usage A — rédaction de courriers cliniques (fonction support, traçable) :
  référence : transcription externalisée 380k £/an
  après :     contrat de transcription résilié ; temps de relecture
              clinicien +60k £
  coût de l'IA : 120k £/an tout compris
  ROI = (380k − 60k − 120k) / 120k ≈ 167 % — libère de la trésorerie,
        auditable ✓

Cas d'usage B — « copilote IA pour cliniciens » (large, non suivi) :
  revendication de bénéfice : « fait gagner du temps à 4 000 membres du
  personnel » — aucune référence capturée
  effet mesuré sur le compte de résultat : aucun démontrable
  → le lot des 95 %, indépendamment de son utilité réelle
```

La différence ne tient pas à la qualité de l'IA — elle tient à savoir si le bénéfice avait une **référence, un propriétaire et une ligne budgétaire** ([réalisation des bénéfices](../benefits-realization/)).

## Lien avec l'ingénierie logicielle

Le manuel en forme d'ETS pour l'investissement en IA : **échelonnez les preuves comme les [niveaux du NICE ESF](../nice-evidence-standards-framework/)** — des preuves de niveau démonstration pour les outils à faible enjeu, des pilotes contrôlés avant toute dépense à l'échelle de l'organisation, avec des portes de déploiement préenregistrées (le schéma [DiGA](../diga-fast-track/) d'inscription provisoire avec échéance) ; **comptabilisez l'évitement de coût comme l'économie de la santé comptabilise l'évitement de demande** — réel uniquement quand une ligne budgétaire spécifique bouge réellement ; et **chiffrez le pilote lui-même avec l'[EVPI](../expected-value-of-perfect-information/)** — un pilote qui ne peut pas changer la décision de déploiement vaut 0 £. Pour le volet spécifique des outils de développement, voir [productivité des développeurs assistée par l'IA](../ai-developer-productivity/).

## Pièges

- **Diffusion du bénéfice** : une valeur diluée sur des milliers d'utilisateurs est par construction impossible à mesurer ; choisissez des cas d'usage avec des références concentrées et traçables.
- **Chiffrage limité à la licence** : l'intégration, l'évaluation et la refonte des flux de travail dominent généralement le vrai dénominateur.
- **Vol d'attribution** : l'IA déployée en même temps qu'une refonte de processus s'attribue tout l'écart.
- **Escalade de pilotes déjà coulés** : prolonger des pilotes échoués parce qu'arrêter reviendrait à admettre l'échec — la date de fin doit être convenue à l'avance.

## Sources

- Couverture du rapport « GenAI Divide » du MIT Project NANDA. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- Synthèse des résultats du ROI de l'IA générative du MIT. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, trouver le ROI de l'IA. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
