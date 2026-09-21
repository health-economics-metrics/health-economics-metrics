# Coûts Évités en Aval

Les coûts évités en aval (compensations de coûts) sont des dépenses de traitement futures évitées par une action plus précoce ou meilleure, nettées contre le coût de l'intervention elle-même. Les compensations sont le mécanisme par lequel une intervention peut devenir *dominante* — moins chère **et** meilleure — et elles sont aussi la ligne la plus dupliquée et surestimée en économie de la santé.

## Pourquoi c'est important

Presque toute proposition de valeur en santé numérique contient une allégation de compensation : « notre application prévient les hospitalisations », « nos alertes préviennent la dégradation », « notre plateforme évite les tests en double ». Lorsque les compensations sont réelles, elles transforment l'économie (voir l'exemple résolu du [RCEI](../ratio-coût-efficacité-incrémental/), où une compensation de 600 k£ fait le dossier). Les payeurs le savent — donc les allégations de compensation attirent l'examen le plus rigoureux dans toute évaluation. Les règles de crédibilité ci-dessous sont ce qui distingue un modèle finançable du marketing.

## Le calcul

```
Coût net = coût de l'intervention − Σ compensations

Une compensation valide doit être :
  Attribuable — liée causalement à l'intervention (preuve comparative)
  Marginale     — l'argent cesse réellement d'être dépensé, au coût marginal et non
                 moyen (voir marginal-vs-average-cost.md)
  Pondérée par probabilité — pondérée par P(l'événement en aval se serait produit)
  Actualisée   — coûts futurs évités à valeur actuelle
  Unique       — comptée une fois, dans une seule ligne de bénéfice
```

## Exemple résolu

« Cette allégation de risque de migration, faite correctement » : une application de surveillance des plaies pour 5 000 patients post-chirurgicaux prétend éviter les réadmissions liées aux infections.

```
Réadmission de référence pour infection : 4,0 % ; avec l'application (ECR) : 3,1 %
Événements attribuables évités = 5 000 × 0,009 = 45/an
Coût par épisode de réadmission (marginal, ce trust) : 3 200 £
Compensation = 45 × 3 200 = 144 000 £/an
Coût de l'application = 5 000 × 20 £ = 100 000 £/an
Coût net = −44 000 £ → véritablement économe en coûts, avec :
  attribution issue d'un ECR ✓  chiffrage marginal ✓  probabilité issue de données d'essai ✓
```

La même allégation construite sur « les réadmissions coûtent 5 800 £ en moyenne, nous en éviterons beaucoup » échoue aux quatre tests et mérite le rejet qu'elle reçoit.

## Lien avec l'ingénierie logicielle

« Cette migration évite la réécriture future » est une allégation de compensation, et les règles de l'économie de la santé la rendent honnête :

- **Coût contrefactuel** : combien coûterait réellement la réécriture, démontré comment ?
- **Probabilité** : quelle est la probabilité de ce futur ? (Pas 100 % — les produits sont abandonnés, les priorités changent.)
- **Actualisation** : une réécriture évitée en année 4 avec un taux d'actualisation de 3,5-10 % vaut bien moins que sa valeur nominale.
- **Unicité** : ne revendiquez pas aussi la même réécriture évitée dans la ligne de dette technique et la ligne de rétention.

`Valeur de compensation = P(événement futur) × coût contrefactuel × facteur d'actualisation` — écrivez cette ligne dans la proposition et regardez l'estimation devenir débattable, ce qui est le but.

## Pièges

- **Double comptage** — la même hospitalisation évitée revendiquée comme compensation, jours-lits et QALY avec coût attaché.
- **Compensations à coût moyen** pour des événements dont les coûts fixes continuent de toute façon.
- **Probabilité de 100 % silencieuse** sur des événements en aval qui étaient simplement possibles.
- **Compensations vers d'autres budgets** présentées comme des économies au payeur à qui on demande de payer — voir [perspective d'analyse](../perspective-d-analyse/).

## Sources

- Glossaire du York Health Economics Consortium : compensation de coût. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (les compensations dépassent rarement les coûts). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
