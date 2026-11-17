# Analyse Coûts-Bénéfices (ACB)

L'ACB tarife à la fois les coûts *et* les résultats en argent. C'est le seul type d'analyse pouvant répondre « cela vaut-il la peine de le faire, tout simplement ? » — pas seulement « quelle option est la meilleure ? » — car les bénéfices monétisés peuvent être comparés directement aux coûts.

## Pourquoi c'est important

L'ACB est la norme du **Green Book** de HM Treasury britannique pour toute évaluation de dépense publique, y compris la santé lorsque les résultats peuvent être monétisés. Là où l'[ACE](../analyse-coût-efficacité/)/l'[ACU](../analyse-coût-utilité/) s'arrêtent à « coût par unité de santé », l'ACB tarife la santé elle-même (QALY × valeur seuil) et tout le reste — temps, déplacement, carbone — et rapporte un chiffre net unique. Chaque dossier de décision numérique complet du NHS contient un cas économique en forme d'ACB.

## Le calcul

```
VAN (valeur sociale actuelle nette) = Σ_t [ (Bénéfices_t − Coûts_t) / (1 + r)^t ]
RCB (ratio coûts-bénéfices)       = VA(bénéfices) / VA(coûts)

Adoptez si VAN > 0 (équivalemment RCB > 1) ; classez par VAN, pas par RCB.
r = 3,5 % (taux de préférence temporelle sociale du Green Book)
```

Les effets sur la santé peuvent entrer monétisés en QALY × λ (voir [seuils de disposition à payer](../seuils-de-disposition-à-payer/)). Le Green Book exige aussi des **ajustements de biais d'optimisme** — majorant les estimations de coûts et rognant les bénéfices selon des pourcentages fondés sur des preuves, car les évaluations sont systématiquement optimistes.

## Exemple résolu

Un système de recommandation électronique, horizon de 5 ans, actualisation de 3,5 % :

```
Coûts :    développement 1,2 M£ (année 0), fonctionnement 300 k£/an (années 1–5)
Bénéfices : économies administratives 250 k£/an, diagnostics dupliqués évités 280 k£/an,
          temps patient économisé 40 000 h/an × 15 £ = 600 k£/an → 1 130 k£/an

VA coûts    = 1 200k + 300k × 4,515 (facteur d'annuité) = 2 555 k£
VA bénéfices = 1 130k × 4,515                          = 5 102 k£

VAN = 5 102 − 2 555 = +2 547 k£     RCB = 2,0
```

Appliquez le biais d'optimisme du Green Book (disons +40 % sur le coût de développement, −20 % sur les bénéfices) : VA coûts ≈ 3 035 k£, VA bénéfices ≈ 4 082 k£, VAN ≈ **+1 047 k£** — toujours positif, ce qui est le but de l'ajustement : les dossiers devraient survivre à leur propre optimisme.

## Lien avec l'ingénierie logicielle

Les dossiers de décision d'ingénierie sont des ACB informelles. Les mises à niveau du Green Book qui valent le vol :

- **Le biais d'optimisme comme majoration standard** — les ingénieurs sous-estiment le coût de migration aussi fiablement que les ministères sous-estiment le coût d'infrastructure ; appliquez une majoration déclarée plutôt que de prétendre que cette fois est différente.
- **Monétisez le bénéfice dominant honnêtement ou pas du tout** — le temps patient/utilisateur est monétisé à des taux défendables ; la « valeur de marque » ne l'est pas.
- **La VAN classe, le RCB non** : un petit projet avec RCB 5 peut compter moins qu'un grand avec RCB 1,6.

## Pièges

- **Monétiser l'ininétisable** pour gonfler les bénéfices (moral, « alignement stratégique ») — gardez cela qualitatif, selon l'[analyse coûts-conséquences](../analyse-coûts-conséquences/).
- **Compter les transferts comme des bénéfices** : l'argent se déplaçant entre organismes publics se neutralise à zéro dans la [perspective](../perspective-d-analyse/) sociétale.
- **Aucun contrefactuel** : les bénéfices sont mesurés contre l'option du minimum d'effort, pas contre zéro.

## Sources

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Guide complémentaire d'actualisation du Green Book. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
