# Rétention et Attrition

La rétention mesure quelle fraction d'une cohorte d'utilisateurs reste active N jours après le début (courbes D1/D7/D30) ; l'attrition est son complément. La ligne de base brutale de la santé numérique : **environ 90 % des utilisateurs d'applications de santé abandonnent dans les 30 jours** — la rétention D30 de la santé numérique tourne à ~3-4 % contre une moyenne toutes-applications de ~6 %.

## Pourquoi c'est important

Eysenbach l'a nommé en 2005 : la **loi de l'attrition** — perdre des utilisateurs à des taux élevés est une propriété structurelle intrinsèque des interventions d'eSanté, pas un bogue d'implémentation, avec une attrition dans les essais d'eSanté dépassant couramment 50 %. La conséquence économique est totale : la rétention définit la *fenêtre de traitement* dans laquelle tout bénéfice peut être livré, et l'[économie unitaire](../économie-unitaire-des-applications-de-santé/) — le CAC payé par utilisateur restant 12 jours ne livre ni LTV ni QALY. Tout modèle économique pour un produit de santé grand public qui ne pondère pas les bénéfices par la courbe de rétention décrit un produit qui n'existe pas.

## Le calcul

```
Rétention_Dn = utilisateurs actifs le jour n / taille de cohorte × 100
Taux d'attrition   = utilisateurs perdus dans la période / utilisateurs au début de la période × 100

Cadrage de pondération du bénéfice (l'amélioration de l'économie de la santé) :
  bénéfice attendu par utilisateur acquis = Σ_t rétention(t) × taux de bénéfice(t)
  ≈ aire sous la courbe de rétention × bénéfice par temps
  — PAS bénéfice de l'essai × 100 % des utilisateurs acquis

Coût par utilisateur retenu à D30 = CAC / rétention D30
  (à 4 % de rétention D30, un CAC de 5 £ est réellement 125 £ par utilisateur retenu)
```

## Exemple résolu

Une application de santé mentale : l'essai a montré 0,02 QALY gagnés par utilisateur terminant 8 semaines. Cohorte de déploiement de 100 000 téléchargements, rétention D7 25 %, D30 8 %, semaine-8 4 % :

```
Terminants          = 100 000 × 0,04 = 4 000
QALY livrés     = 4 000 × 0,02 = 80  (pas 100 000 × 0,02 = 2 000)
À 20 000 £/QALY     = 1,6 M£ de valeur de santé (pas 40 M£)

Valeur de santé par téléchargement = 16 £ — le chiffre qui devrait fixer ce
qu'un payeur paiera par téléchargement, et c'est 4 % de l'allégation naïve.
Cas d'amélioration de rétention : faire passer l'achèvement de la semaine-8 de 4 % → 6 % ajoute
40 QALY/an ≈ 800k£ — l'ingénierie de rétention EST de la production de santé.
```

## Lien avec l'ingénierie logicielle

La rétention est la métrique où l'ingénierie produit fabrique le plus directement de la valeur de santé, selon l'arithmétique ci-dessus. Les pratiques qui la déplacent sont ordinaires : temps jusqu'à la première valeur de l'intégration, conception de réengagement, performance, et de manière cruciale l'**achèvement de dose planifié** — un programme avec une fin définie (8 semaines, puis obtention du diplôme) devrait mesurer l'*achèvement*, pas le DAU perpétuel, alignant la métrique avec le modèle clinique plutôt qu'avec le modèle d'attention financé par la publicité. L'analyse de survie est la bonne boîte à outils (les mêmes mathématiques de Kaplan-Meier que les [années de vie gagnées](../années-de-vie-gagnées/)) ; segmentez les courbes par canal d'acquisition, car le mix de canaux change la rétention plus que la plupart des fonctionnalités.

## Pièges

- **Blanchiment inversé de l'intention de traiter** : les essais rapportent les terminants ; l'économie de déploiement doit compter tous les acquis (l'avertissement central d'Eysenbach).
- **Théâtre de rétention** : des utilisateurs « actifs » pilotés par notification qui ne réalisent jamais l'action thérapeutique (voir [métriques d'engagement](../métriques-d-engagement/)).
- **Comparer des courbes entre définitions** : « actif » défini comme ouverture contre action significative déplace le D30 par multiples.
- **Ignorer qui abandonne** : si les plus malades abandonnent le plus vite, les bénéfices par utilisateur chutent à mesure que la rétention s'améliore parmi les personnes en bonne santé — associez les courbes au mix de cas (voir [portée et équité](../portée-et-équité/)).

## Sources

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Repères de rétention des applications mobiles. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Repères de produits de santé. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
