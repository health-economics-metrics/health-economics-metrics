# Rétention et attrition (churn)

La rétention mesure la fraction d'une cohorte d'utilisateurs encore active N jours après le démarrage (courbes D1/D7/D30) ; le churn (attrition) en est le complément. Le constat brutal pour la santé numérique : **environ 90 % des utilisateurs d'applications de santé abandonnent dans les 30 jours** — la rétention D30 en santé numérique tourne autour de 3–4 %, contre une moyenne tous secteurs d'environ 6 %.

## Pourquoi c'est important

Eysenbach a nommé ce phénomène en 2005 : la **loi de l'attrition** (law of attrition) — perdre des utilisateurs à un rythme élevé est une propriété intrinsèque et structurelle des interventions d'eSanté, pas un défaut d'implémentation, l'attrition dans les essais d'eSanté dépassant couramment 50 %. La conséquence économique est totale : la rétention définit la *fenêtre de traitement* dans laquelle un bénéfice peut être délivré, et l'[économie unitaire](../health-app-unit-economics/) qui s'ensuit est sans appel — un CAC payé pour un utilisateur qui ne reste que 12 jours ne délivre ni LTV, ni QALYs. Tout modèle économique d'un produit de santé grand public qui ne pondère pas ses bénéfices par la courbe de rétention décrit un produit qui n'existe pas.

## Le calcul

```
Rétention_Dn = utilisateurs actifs au jour n / taille de la cohorte × 100
Taux de churn = utilisateurs perdus sur la période / utilisateurs en début de période × 100

Pondération du bénéfice (le geste propre à l'économie de la santé) :
  bénéfice attendu par utilisateur acquis = Σ_t rétention(t) × taux de bénéfice(t)
  ≈ aire sous la courbe de rétention × bénéfice par unité de temps
  — PAS bénéfice de l'essai × 100 % des utilisateurs acquis

Coût par utilisateur retenu à D30 = CAC / rétention D30
  (à 4 % de rétention D30, un CAC de 5 £ vaut en réalité 125 £ par utilisateur retenu)
```

## Exemple chiffré

Une application de santé mentale : l'essai clinique montrait un gain de 0,02 QALY par utilisateur ayant complété 8 semaines. Cohorte de déploiement de 100 000 téléchargements, rétention D7 25 %, D30 8 %, semaine 8 4 % :

```
Ayants terminé       = 100 000 × 0,04 = 4 000
QALYs délivrés       = 4 000 × 0,02 = 80  (et non 100 000 × 0,02 = 2 000)
À 20 000 £/QALY      = 1,6 M£ de valeur santé (et non 40 M£)

Valeur santé par téléchargement = 16 £ — c'est ce chiffre qui devrait fixer ce
qu'un payeur est prêt à verser par téléchargement, et il ne représente que 4 %
de l'affirmation naïve.
Cas d'amélioration de la rétention : faire passer l'achèvement à la semaine 8
de 4 % à 6 % ajoute 40 QALYs/an ≈ 800 k£ — l'ingénierie de la rétention EST
de la production de santé.
```

## Lien avec l'ingénierie logicielle

La rétention est la mesure où l'ingénierie produit manufacture le plus directement de la valeur santé, comme le montre l'arithmétique ci-dessus. Les pratiques qui la font évoluer sont ordinaires : temps jusqu'à la première valeur perçue lors de l'onboarding, conception du réengagement, performance, et surtout **l'achèvement planifié d'une dose** — un programme avec une fin définie (8 semaines, puis « diplôme ») devrait mesurer *l'achèvement*, pas un DAU perpétuel, alignant ainsi la mesure sur le modèle clinique plutôt que sur le modèle de l'attention financé par la publicité. L'analyse de survie est la bonne boîte à outils (les mêmes mathématiques de Kaplan-Meier que pour les [années de vie gagnées](../life-years-gained/)) ; il faut segmenter les courbes par canal d'acquisition, car le mix de canaux modifie la rétention plus que la plupart des fonctionnalités.

## Pièges

- **Blanchiment en intention de traiter, mais à l'envers** : les essais rapportent les utilisateurs ayant terminé ; l'économie du déploiement doit compter tout le monde acquis (l'avertissement central d'Eysenbach).
- **Le théâtre de la rétention** : des utilisateurs « actifs » pilotés par des notifications qui n'effectuent jamais l'action thérapeutique (voir [mesures d'engagement](../engagement-metrics/)).
- **Comparer des courbes selon des définitions différentes** : « actif » défini comme une ouverture d'application vs une action significative fait varier le D30 du simple au multiple.
- **Ignorer qui décroche** : si les plus malades décrochent le plus vite, le bénéfice par utilisateur baisse à mesure que la rétention s'améliore parmi les personnes en bonne santé — il faut croiser les courbes avec le case-mix (voir [portée et équité](../reach-and-equity/)).

## Sources

- Eysenbach G. « The law of attrition. » JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Repères de rétention des applications mobiles. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Repères des produits de santé. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
