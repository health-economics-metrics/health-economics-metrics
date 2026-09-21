# Analyse coûts-bénéfices (CBA)

La CBA valorise à la fois les coûts *et* les résultats en unités monétaires. C'est le seul type d'analyse capable de répondre à « cela vaut-il la peine d'être fait, tout simplement ? » — et pas seulement « quelle option est la meilleure ? » — car des bénéfices monétisés peuvent être comparés directement aux coûts.

## Pourquoi c'est important

La CBA est la norme du **Green Book** de HM Treasury (Royaume-Uni) pour toute évaluation de dépense publique, y compris en santé lorsque les résultats peuvent être monétisés. Là où la [CEA](../cost-effectiveness-analysis/)/[CUA](../cost-utility-analysis/) s'arrête à « coût par unité de santé », la CBA valorise la santé elle-même (QALY × valeur seuil) et tout le reste — temps, déplacements, carbone — et rapporte un chiffre net unique. Chaque dossier d'investissement numérique complet du NHS contient un cas économique de forme CBA.

## Le calcul

```
VAN (valeur sociale nette actualisée) = Σ_t [ (Bénéfices_t − Coûts_t) / (1 + r)^t ]
RCB (ratio coûts-bénéfices)           = VA(bénéfices) / VA(coûts)

Adopter si VAN > 0 (de façon équivalente RCB > 1) ; classer par VAN, pas par RCB.
r = 3,5 % (taux de préférence temporelle sociale du Green Book)
```

Les effets sur la santé peuvent entrer sous forme monétisée en QALY × λ (voir [seuils de consentement à payer](../willingness-to-pay-thresholds/)). Le Green Book impose également des **ajustements de biais d'optimisme** — majorer les estimations de coûts et rogner les bénéfices selon des pourcentages fondés sur des données probantes, car les évaluations sont systématiquement trop optimistes.

## Exemple chiffré

Un système de e-référencement, horizon de 5 ans, actualisation à 3,5 % :

```
Coûts :     construction 1,2 M£ (année 0), fonctionnement 300 k£/an (années 1–5)
Bénéfices : économies administratives 250 k£/an, examens diagnostiques
            en double évités 280 k£/an, temps patient économisé
            40 000 h/an × 15 £ = 600 k£/an → 1 130 k£/an

VA coûts    = 1 200 k + 300 k × 4,515 (facteur d'annuité) = 2 555 k£
VA bénéfices = 1 130 k × 4,515                             = 5 102 k£

VAN = 5 102 − 2 555 = +2 547 k£     RCB = 2,0
```

En appliquant le biais d'optimisme du Green Book (disons +40 % sur le coût de construction, −20 % sur les bénéfices) : VA coûts ≈ 3 035 k£, VA bénéfices ≈ 4 082 k£, VAN ≈ **+1 047 k£** — toujours positive, ce qui est précisément l'objet de l'ajustement : les dossiers doivent survivre à leur propre optimisme.

## Lien avec l'ingénierie logicielle

Les dossiers d'investissement en ingénierie sont des CBA informelles. Les apports du Green Book qui méritent d'être empruntés :

- **Le biais d'optimisme comme majoration standard** — les ingénieurs sous-estiment le coût de migration aussi fidèlement que les ministères sous-estiment le coût des infrastructures ; appliquez une majoration déclarée plutôt que de prétendre que cette fois-ci sera différente.
- **Monétiser honnêtement le bénéfice dominant, ou pas du tout** — le temps des patients/utilisateurs est monétisé à des taux défendables ; la « valeur de marque » ne l'est pas.
- **La VAN classe, le RCB non** : un petit projet avec un RCB de 5 peut compter moins qu'un grand projet avec un RCB de 1,6.

## Pièges

- **Monétiser l'immonétisable** pour gonfler les bénéfices (moral des équipes, « alignement stratégique ») — gardez ces éléments qualitatifs, selon l'[analyse coût-conséquence](../cost-consequence-analysis/).
- **Compter les transferts comme des bénéfices** : l'argent qui circule entre organismes publics s'annule à la [perspective](../analysis-perspective/) sociétale.
- **Absence de contrefactuel** : les bénéfices sont mesurés contre l'option du minimum d'action, pas contre zéro.

## Sources

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book, guide sur l'actualisation. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
