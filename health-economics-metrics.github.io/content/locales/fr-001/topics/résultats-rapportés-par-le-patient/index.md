# Résultats Rapportés par le Patient (PROM, PREM, DMCI)

Les PROM sont des instruments standardisés où les patients rapportent leur propre état de santé (symptômes, fonction, qualité de vie) ; les PREM capturent l'*expérience* de soins. La **DMCI** — différence minimale cliniquement importante — est le plus petit changement de score que les patients perçoivent réellement comme bénéfique : la barre que toute amélioration revendiquée doit franchir.

## Pourquoi c'est important

Les PROM sont la monnaie d'efficacité principale pour la santé numérique : les applications déplacent rarement la mortalité, mais elles peuvent déplacer de manière crédible des scores de symptômes validés. Les instruments qui comptent sont peu nombreux et standardisés — **PHQ-9** (dépression, 0-27 ; bandes de sévérité à 5/10/15/20), **GAD-7** (anxiété, 0-21 ; bandes à 5/10/15), **EQ-5D** (utilité pour les [QALY](../année-de-vie-ajustée-par-la-qualité/)) — et les régulateurs, organismes d'ETS et payeurs les acceptent précisément parce qu'ils sont comparables entre produits et essais. La DMCI est la porte d'honnêteté : DMCI du PHQ-9 ≈ 5 points, GAD-7 ≈ 4, indice EQ-5D couramment ~0,03-0,08 — un changement de PHQ-9 de 1,5 point statistiquement significatif sur un large échantillon est *réel mais cliniquement insignifiant*, et un évaluateur de preuves le dira.

## Le calcul

```
Notation PROM : sommes spécifiques à l'instrument (par ex., PHQ-9 = Σ 9 items × 0-3)

Estimation de la DMCI :
  basée sur l'ancre :      changement de score parmi les patients rapportant « un peu mieux »
  basée sur la distribution : ≈ 0,5 × ÉT des scores de base (heuristique approximative)

Cadrage du taux de réponse (pour les essais et les dossiers) :
  répondeur = patient s'améliorant de ≥ DMCI (ou ≥50 % pour la convention PHQ-9)
  NNT = 1 / (taux de répondeur_traitement − taux de répondeur_contrôle)
  — voir number-needed-to-treat.md
```

## Exemple résolu

Une application de soutien à la dépression, ECR contre liste d'attente, 12 semaines :

```
Changement PHQ-9 : application −6,2 points, contrôle −2,1 → différence ajustée −4,1
Vérification DMCI : 4,1 < 5 → différence moyenne sous la DMCI ; rapportez les répondeurs à la place :
  répondeurs (baisse ≥5 points) : application 48 %, contrôle 22 % → RRA 26 %
  NNT = 1/0,26 ≈ 4 — quatre utilisateurs traités par réponse clinique supplémentaire

Pont économique : le gain EQ-5D des répondeurs 0,06 soutenu 6 mois
  = 0,03 QALY ; pour 1 000 utilisateurs : 260 répondeurs supplémentaires × 0,03 = 7,8 QALY
  ≈ 156 000-234 000 £ de valeur de santé aux seuils de NICE
```

Le cadrage répondeur/NNT survit à la revue là où la différence moyenne sous la DMCI aurait été rejetée.

## Lien avec l'ingénierie logicielle

Les PROM sont un problème de collecte de données que le logiciel est particulièrement bien placé pour résoudre : les instruments intégrés à l'application obtiennent des taux d'achèvement et une densité longitudinale que le papier n'a jamais atteints, transformant la télémétrie produit routinière en preuve de niveau ETS ([EQ-5D](../eq-5d/) c'est cinq écrans). Règles d'ingénierie : utilisez l'instrument validé *littéralement* (le reformuler l'invalide — la licence s'applique) ; programmez la mesure selon le protocole, pas la commodité d'engagement (mesurer uniquement les utilisateurs actifs est un biais de survie — voir [rétention](../rétention-et-attrition/)) ; et verrouillez la version des données d'instrument comme tout schéma — un changement de formulation en milieu d'étude est de la corruption de données. Les PREM se mappent à des instruments de style CSAT/NPS, et la même leçon s'applique : le standardisé bat le maison partout où le public est un payeur.

## Pièges

- **Signification statistique sous la DMCI** présentée comme un bénéfice clinique — l'inflation la plus commune du domaine.
- **Régression vers la moyenne** : les utilisateurs s'inscrivent aux pics de symptômes ; l'avant/après à un seul bras surestime énormément — les comparateurs ne sont pas négociables.
- **Magasinage d'instruments** : exécuter PHQ-9, GAD-7 et WHO-5, puis rapporter celui qui a bougé — préenregistrez le principal.
- **Pression d'enquête de consentement numérique** : pousser les utilisateurs vers des réponses favorables corrompt l'instrument (et les évaluateurs connaissent les taux de base).

## Sources

- Revue d'estimation de la DMCI (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- Introduction PROM contre PREM. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. Littérature de validation du PHQ-9. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
