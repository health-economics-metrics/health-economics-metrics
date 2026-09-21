# Déficit de QALY et Modulateurs de Sévérité

Le déficit de QALY mesure combien de santé future une maladie retire aux patients par rapport à la population générale. NICE l'utilise pour appliquer des **modulateurs de sévérité** : plus la population est malade, plus chaque QALY gagné vaut — jusqu'à 1,7× le seuil standard.

## Pourquoi c'est important

Depuis le manuel 2022 de NICE, la sévérité est un multiplicateur explicite sur la valeur des gains de santé, remplaçant l'ancienne prime de fin de vie. Une technologie pour une condition sévère est jugée face à un seuil effectif allant jusqu'à ~51 000 £/QALY au lieu de 30 000 £. Si votre logiciel sert une population sévèrement affectée (insuffisance cardiaque avancée, maladie mentale sévère), le modulateur de sévérité peut faire la différence entre un dossier économique finançable et non finançable — et vous avez besoin de l'arithmétique du déficit pour le revendiquer.

## Le calcul

Deux mesures, calculées sur la durée de vie restante avec la norme de soins actuelle :

```
Déficit absolu     = QALY_population_générale − QALY_avec_condition
Déficit proportionnel = Déficit absolu / QALY_population_générale
```

Pondérations NICE 2022 (la mesure donnant la pondération la plus élevée s'applique) :

```
Pondération ×1,0 : absolu < 12 et proportionnel < 0,85
Pondération ×1,2 : absolu ≥ 12 ou proportionnel ≥ 0,85
Pondération ×1,7 : absolu ≥ 18 ou proportionnel ≥ 0,95
```

La pondération multiplie ΔE (ou de manière équivalente le seuil) : le λ effectif devient 24k-36k£ à ×1,2 et 34k-51k£ à ×1,7.

## Exemple résolu

Patients atteints d'une condition agressive, âge moyen 60 ans. La population générale à 60 ans espère 14,2 QALY actualisés ; avec la condition sous les soins actuels, 2,1.

```
Déficit absolu     = 14,2 − 2,1 = 12,1  (≥ 12 → qualifie pour ×1,2)
Déficit proportionnel = 12,1 / 14,2 = 0,852 (≥ 0,85 → aussi ×1,2)
```

Le RCEI de votre plateforme de surveillance est de 26 000 £/QALY — au-dessus du jugement standard du point médian de 20k-30k£, marginal. Avec la pondération ×1,2 : RCEI effectif = 26 000 / 1,2 ≈ **21 700 £/QALY** — confortablement finançable. Le calcul du déficit vient de déplacer la décision.

## Lien avec l'ingénierie logicielle

La pondération de sévérité est une version formelle de quelque chose que les organisations d'ingénierie font d'instinct : dépenser plus par unité d'amélioration sur les systèmes les plus mal en point. Le modèle transférable — calculez le « déficit d'ANS » de chaque service (à quel point il fonctionne en dessous de sa ligne de base saine attendue, absolument et proportionnellement), et pondérez la valeur de remédiation en conséquence. Cela justifie, avec de l'arithmétique plutôt que des arguments, pourquoi le système hérité en feu obtient plus d'investissement par heure économisée qu'un système sain. Cela porte aussi la même leçon de gouvernance : publiez les pondérations *avant* la réunion de priorisation, sinon chaque équipe revendique la sévérité.

## Pièges

- **Calculer le déficit face à la mauvaise ligne de base** : il est mesuré sous la *norme de soins actuelle*, pas l'histoire naturelle non traitée.
- **Sensibilité à l'âge** : le déficit dépend fortement de l'âge de la population (les patients plus jeunes ont plus de QALY à perdre → déficit absolu plus élevé) ; utilisez la distribution d'âge de la population réellement traitée.
- **Supposer que le modulateur s'applique ailleurs** — c'est un mécanisme NICE (Angleterre) ; d'autres organismes d'ETS gèrent la sévérité différemment (ou pas du tout).

## Sources

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
