# Déficit de QALY et modificateurs de sévérité

Le déficit de QALY (QALY shortfall) mesure la quantité de santé future qu'une maladie retire aux patients par rapport à la population générale. NICE s'en sert pour appliquer des **modificateurs de sévérité** : plus la population est malade, plus chaque QALY gagné a de la valeur — jusqu'à 1,7× le seuil standard.

## Pourquoi c'est important

Depuis le manuel 2022 de NICE, la sévérité est un multiplicateur explicite de la valeur des gains de santé, qui remplace l'ancienne prime de fin de vie. Une technologie destinée à une pathologie sévère est jugée par rapport à un seuil effectif pouvant atteindre ~51 000 £/QALY au lieu de 30 000 £. Si votre logiciel dessert une population sévèrement affectée (insuffisance cardiaque avancée, maladie mentale sévère), le modificateur de sévérité peut faire toute la différence entre un dossier économique finançable et non finançable — et il faut le calcul du déficit pour le revendiquer.

## Le calcul

Deux mesures, calculées sur la durée de vie restante avec les soins standards actuels :

```
Déficit absolu         = QALYs_population_générale − QALYs_avec_pathologie
Déficit proportionnel  = Déficit absolu / QALYs_population_générale
```

Pondérations NICE 2022 (c'est la mesure donnant le poids le plus élevé qui s'applique) :

```
Poids ×1,0 : absolu < 12 et proportionnel < 0,85
Poids ×1,2 : absolu ≥ 12 ou proportionnel ≥ 0,85
Poids ×1,7 : absolu ≥ 18 ou proportionnel ≥ 0,95
```

Le poids multiplie ΔE (ou, de façon équivalente, le seuil) : le λ effectif passe à 24 k£–36 k£ pour ×1,2 et à 34 k£–51 k£ pour ×1,7.

## Exemple chiffré

Patients atteints d'une pathologie agressive, âge moyen 60 ans. La population générale à 60 ans peut espérer 14,2 QALYs actualisés ; avec la pathologie, sous les soins actuels, 2,1.

```
Déficit absolu        = 14,2 − 2,1 = 12,1  (≥ 12 → éligible au ×1,2)
Déficit proportionnel = 12,1 / 14,2 = 0,852 (≥ 0,85 → également ×1,2)
```

L'ICER de votre plateforme de surveillance est de 26 000 £/QALY — au-dessus du point médian standard de 20 k£–30 k£, donc à la limite. Avec le poids ×1,2 : ICER effectif = 26 000 / 1,2 ≈ **21 700 £/QALY** — confortablement finançable. Le calcul du déficit vient de faire basculer la décision.

## Lien avec l'ingénierie logicielle

La pondération de sévérité est une version formalisée de ce que les organisations d'ingénierie font déjà d'instinct : dépenser davantage par unité d'amélioration sur les systèmes les plus dégradés. Le principe transférable — calculer pour chaque service son « déficit de SLO » (de combien il fonctionne en dessous de sa base de référence saine attendue, en absolu et en proportionnel), et pondérer la valeur du remède en conséquence. Cela justifie, avec de l'arithmétique plutôt que des arguments, pourquoi le système legacy en feu reçoit plus d'investissement par heure économisée qu'un système sain. Cela porte aussi la même leçon de gouvernance : publier les poids *avant* la réunion de priorisation, sinon chaque équipe revendiquera la sévérité.

## Pièges

- **Calculer le déficit par rapport à la mauvaise base de référence** : il se mesure sous les *soins standards actuels*, pas sous l'évolution naturelle sans traitement.
- **Sensibilité à l'âge** : le déficit dépend fortement de l'âge de la population (les patients plus jeunes ont davantage de QALYs à perdre → déficit absolu plus élevé) ; il faut utiliser la distribution d'âge réelle de la population traitée.
- **Supposer que le modificateur s'applique ailleurs** — c'est un mécanisme propre à NICE (Angleterre) ; les autres organismes d'ETS (HTA) traitent la sévérité différemment (ou pas du tout).

## Sources

- Analyse des décisions de modificateur de sévérité de NICE, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE, évaluations des technologies de santé : le manuel (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, explicatif sur les modificateurs de décision ETS de NICE. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
