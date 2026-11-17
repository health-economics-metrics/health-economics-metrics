# Retour sur Investissement de l'IA

Le ROI de l'IA est le retour de compte de résultat mesurable attribuable aux initiatives d'IA. Le repère qui donne à réfléchir : la recherche « GenAI Divide » du MIT de 2025 a révélé que malgré 30 à 40 milliards de dollars d'investissement d'entreprise dans l'IA générative, **~95 % des pilotes n'ont montré aucun retour de compte de résultat mesurable** — et les 5 % à succès partageaient des habitudes identifiables.

## Pourquoi c'est important

Les systèmes de santé ont un nom pour ce schéma de pilote IA : la **« pilotite »** — le cimetière du NHS d'applications prometteuses pilotées éternellement et jamais déployées à l'échelle. Les résultats du MIT s'alignent parfaitement avec ce que l'évaluation des technologies de santé sait déjà : les allégations de valeur nécessitent des critères d'évaluation prédéfinis, l'attribution nécessite des comparateurs, et « tout le monde sent que ça aide » n'est pas une ligne de bénéfice. La minorité à succès dans les données du MIT s'est concentrée sur l'automatisation back-office avec des lignes de base de coût traçables, et les **outils achetés ont réussi ~67 % du temps contre les développements internes à environ un tiers de ce taux** — des priorités qui appartiennent à tout dossier d'investissement en IA (voir [développer ou acheter](../développer-ou-acheter/)).

## Le calcul

```
ROI de l'IA = (bénéfice attribuable − coût total de l'IA) / coût total de l'IA

Coût total de l'IA = licences/inférence (voir inference-unit-economics.md)
              + intégration + préparation des données + évaluation
              + refonte du flux de travail + gouvernance/assurance
              (la licence est généralement la part minoritaire du dénominateur)

Bénéfice attribuable : mesuré par rapport à une ligne de base ou un contrôle, classé
trésorerie / capacité / qualité selon cash-releasing-vs-non-cash-releasing.md
```

## Exemple résolu

Un groupe hospitalier déploie l'IA pour deux cas d'usage :

```
Cas d'usage A — rédaction de lettres cliniques (back-office, traçable) :
  ligne de base : transcription externalisée 380 k£/an
  après :    contrat de transcription annulé ; temps de relecture clinique +60 k£
  coût de l'IA :  120 k£/an tout compris
  ROI = (380k − 60k − 120k) / 120k ≈ 167 % — libère de la trésorerie, auditable ✓

Cas d'usage B — « copilote IA pour cliniciens » (large, non suivi) :
  allégation de bénéfice : « fait gagner du temps sur 4 000 employés » — aucune ligne de base capturée
  effet mesuré sur le compte de résultat : aucun démontrable
  → le groupe des 95 %, indépendamment du fait que ça aide réellement ou non
```

La différence n'est pas la qualité de l'IA — c'est de savoir si le bénéfice avait une **ligne de base, un propriétaire et une ligne budgétaire** ([réalisation des bénéfices](../réalisation-des-bénéfices/)).

## Lien avec l'ingénierie logicielle

Le manuel en forme d'ETS pour l'investissement en IA : **échelonnez les preuves comme les [niveaux du cadre de normes de preuve NICE](../cadre-des-normes-de-preuve-nice/)** — preuves de niveau démonstration pour les outils à faible enjeu, pilotes contrôlés avant une dépense à l'échelle de l'organisation, avec des portes de déploiement préenregistrées (le schéma de [liste provisoire avec échéance](../voie-rapide-diga-d-allemagne/) du DiGA) ; **comptez l'évitement de coût comme l'économie de la santé compte l'évitement de la demande** — réel uniquement quand une ligne budgétaire spécifique bouge ; et **tarifez le pilote lui-même avec la [VEIP](../valeur-espérée-de-l-information-parfaite/)** — un pilote qui ne peut pas changer la décision de déploiement vaut 0 £. Pour la tranche outils de développeurs spécifiquement, voir [productivité des développeurs avec l'IA](../productivité-des-développeurs-avec-l-ia/).

## Pièges

- **Diffusion du bénéfice** : une valeur diluée sur des milliers d'utilisateurs est immesurable par construction ; choisissez des cas d'usage avec des lignes de base concentrées et traçables.
- **Chiffrage limité à la licence** : l'intégration, l'évaluation et la refonte du flux de travail dominent généralement le vrai dénominateur.
- **Vol d'attribution** : une IA déployée en parallèle d'une refonte de processus s'attribue tout le delta.
- **Escalade de pilote coulé** : prolonger des pilotes échoués car s'arrêter équivaut à admettre l'échec — la date d'échéance doit être convenue à l'avance.

## Sources

- Couverture du projet NANDA du MIT « GenAI Divide ». <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- Résumé des résultats ROI de l'IA générative du MIT. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, trouver le ROI de l'IA. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
