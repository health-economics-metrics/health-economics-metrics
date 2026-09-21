# Résultats rapportés par les patients (PROMs, PREMs, MCID)

Les PROMs sont des instruments standardisés par lesquels les patients rapportent eux-mêmes leur état de santé (symptômes, fonction, qualité de vie) ; les PREMs capturent l'*expérience* de soins. Le **MCID** — différence minimale cliniquement importante — est le plus petit changement de score réellement perçu par les patients comme bénéfique : la barre que toute amélioration revendiquée doit franchir.

## Pourquoi c'est important

Les PROMs sont la monnaie d'efficacité principale de la santé numérique : les applications font rarement bouger la mortalité, mais elles peuvent faire bouger de façon crédible des scores de symptômes validés. Les instruments qui comptent sont peu nombreux et standardisés — le **PHQ-9** (dépression, 0–27 ; seuils de sévérité à 5/10/15/20), le **GAD-7** (anxiété, 0–21 ; seuils à 5/10/15), l'**EQ-5D** (utilité pour les [QALY](../quality-adjusted-life-year/)) — et les régulateurs, organismes d'HTA et payeurs les acceptent précisément parce qu'ils sont comparables entre produits et essais. Le MCID est le garde-fou de l'honnêteté : MCID du PHQ-9 ≈ 5 points, GAD-7 ≈ 4, indice EQ-5D couramment ~0,03–0,08 — un changement de 1,5 point du PHQ-9 statistiquement significatif sur un large échantillon est *réel mais cliniquement dénué de sens*, et un évaluateur de preuves le dira.

## Le calcul

```
Scoring des PROM : sommes spécifiques à l'instrument (ex. PHQ-9 = Σ 9 items × 0–3)

Estimation du MCID :
  fondée sur l'ancrage :      changement de score chez les patients rapportant
                              se sentir « un peu mieux »
  fondée sur la distribution : ≈ 0,5 × écart-type des scores de référence
                                (heuristique approximative)

Cadrage du taux de réponse (pour essais et dossiers) :
  répondeur = patient s'améliorant de ≥ MCID (ou ≥50 % selon la convention PHQ-9)
  NNT = 1 / (taux de répondeurs_traitement − taux de répondeurs_contrôle)
  — voir number-needed-to-treat.md
```

## Exemple chiffré

Une application de soutien à la dépression, ECR vs liste d'attente, 12 semaines :

```
Changement PHQ-9 : application −6,2 points, contrôle −2,1 → différence ajustée −4,1
Contrôle MCID : 4,1 < 5 → différence moyenne sous le MCID ; rapporter les
  répondeurs à la place :
  répondeurs (baisse ≥5 points) : application 48 %, contrôle 22 % → ARR 26 %
  NNT = 1/0,26 ≈ 4 — quatre utilisateurs traités par réponse clinique
  supplémentaire

Passerelle économique : gain EQ-5D des répondeurs de 0,06 maintenu 6 mois
  = 0,03 QALY ; pour 1 000 utilisateurs : 260 répondeurs supplémentaires
  × 0,03 = 7,8 QALY ≈ 156 000–234 000 £ de valeur de santé aux seuils du NICE
```

Le cadrage répondeurs/NNT survit à la revue là où la différence moyenne sous le MCID aurait été écartée.

## Lien avec l'ingénierie logicielle

Les PROMs sont un problème de collecte de données que le logiciel est particulièrement bien placé pour résoudre : les instruments intégrés à l'application obtiennent des taux de complétion et une densité longitudinale que le papier n'a jamais atteints, transformant la télémétrie produit de routine en preuve de niveau HTA (l'[EQ-5D](../eq-5d/) tient en cinq écrans). Règles d'ingénierie : utiliser l'instrument validé *à la lettre* (une reformulation l'invalide — des licences s'appliquent) ; planifier la mesure selon le protocole, pas selon la commodité d'engagement (ne mesurer que les utilisateurs actifs est un biais de survie — voir [rétention](../retention-and-churn/)) ; et verrouiller la version des données d'instrument comme tout schéma — un changement de formulation en cours d'étude est une corruption de données. Les PREMs correspondent aux instruments type CSAT/NPS, et la même leçon s'applique : le standardisé bat le fait maison partout où l'audience est un payeur.

## Pièges

- **Signification statistique en deçà du MCID** présentée comme un bénéfice clinique — l'inflation la plus courante du domaine.
- **La régression vers la moyenne** : les utilisateurs s'inscrivent à des pics de symptômes ; un avant/après à bras unique surestime fortement — les comparateurs ne sont pas négociables.
- **Le magasinage d'instruments** : faire passer PHQ-9, GAD-7 et WHO-5, puis rapporter celui qui a bougé — préenregistrez le critère principal.
- **La pression d'enquête liée au consentement numérique** : orienter les utilisateurs vers des réponses favorables corrompt l'instrument (et les évaluateurs connaissent les taux de base).

## Sources

- Revue de l'estimation du MCID (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- Introduction PROMs vs PREMs. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. Littérature de validation du PHQ-9. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
