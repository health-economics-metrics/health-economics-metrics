# Coûts en aval évités

Les coûts en aval évités (compensations de coût) sont des dépenses de traitement futures évitées grâce à une action plus précoce ou meilleure, nettées du coût propre de l'intervention. Les compensations sont le mécanisme par lequel une intervention peut devenir *dominante* — moins chère **et** meilleure — et elles constituent aussi la ligne la plus sujette au double comptage et à la surestimation en économie de la santé.

## Pourquoi c'est important

Presque toute proposition de valeur en santé numérique contient une revendication de compensation : « notre application prévient les admissions », « nos alertes préviennent la détérioration », « notre plateforme évite les examens en double ». Quand les compensations sont réelles, elles transforment l'économie du dossier (voir l'exemple chiffré de l'[ICER](../incremental-cost-effectiveness-ratio/), où une compensation de 600k £ emporte la décision). Les payeurs le savent — les revendications de compensation attirent donc l'examen le plus rigoureux de toute évaluation. Les règles de crédibilité ci-dessous sont ce qui distingue un modèle finançable d'un argument marketing.

## Le calcul

```
Coût net = coût de l'intervention − Σ compensations

Une compensation valide doit être :
  Attribuable — liée causalement à l'intervention (preuve comparative)
  Marginale   — l'argent cesse réellement d'être dépensé, au coût marginal
                et non moyen (voir marginal-vs-average-cost.md)
  Pondérée par la probabilité — pondérée par P(l'événement en aval se
                serait produit)
  Actualisée   — coûts futurs évités ramenés à leur valeur actuelle
  Unique       — comptée une seule fois, dans une seule ligne de bénéfice
```

## Exemple chiffré

« Cette revendication de risque de migration, bien faite » : une application de surveillance des plaies pour 5 000 patients post-chirurgicaux revendique d'éviter les réadmissions liées à l'infection.

```
Réadmission de référence pour infection : 4,0 % ; avec l'application
(essai contrôlé randomisé) : 3,1 %
Événements attribuables évités = 5 000 × 0,009 = 45/an
Coût par séjour de réadmission (marginal, ce trust) : 3 200 £
Compensation = 45 × 3 200 = 144 000 £/an
Coût de l'application = 5 000 × 20 £ = 100 000 £/an
Coût net = −44 000 £ → véritablement générateur d'économies, avec :
  attribution issue d'un ECR ✓  chiffrage marginal ✓  probabilité
  issue de données d'essai ✓
```

La même revendication construite sur « les réadmissions coûtent en moyenne 5 800 £, nous en éviterons plein » échoue aux quatre tests et mérite le rejet qu'elle obtient.

## Lien avec l'ingénierie logicielle

« Cette migration évite la future réécriture » est une revendication de compensation, et les règles de l'économie de la santé la rendent honnête :

- **Coût contrefactuel** : que coûterait réellement la réécriture, et comment le démontrer ?
- **Probabilité** : quelle est la probabilité de ce futur ? (Pas 100 % — les produits sont abandonnés, les priorités changent.)
- **Actualisation** : une réécriture évitée en année 4, actualisée à 3,5–10 %, vaut bien moins que sa valeur faciale.
- **Unicité** : ne revendiquez pas la même réécriture évitée à la fois dans la ligne de dette technique et dans la ligne de rétention.

`Valeur de compensation = P(événement futur) × coût contrefactuel × facteur d'actualisation` — écrivez cette ligne dans la proposition et regardez l'estimation devenir discutable, ce qui est précisément le but.

## Pièges

- **Double comptage** — la même admission évitée revendiquée comme compensation, comme jours-lits, et comme QALY avec un coût rattaché.
- **Compensations à coût moyen** pour des événements dont les coûts fixes se poursuivent de toute façon.
- **Probabilité de 100 % silencieuse** sur des événements en aval qui n'étaient que possibles.
- **Compensations vers d'autres budgets** présentées comme des économies pour le payeur à qui l'on demande de payer — voir [perspective d'analyse](../analysis-perspective/).

## Sources

- Glossaire du York Health Economics Consortium : compensation de coût. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (les compensations dépassent rarement les coûts). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
