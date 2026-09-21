# La voie rapide DiGA en Allemagne

Le DiGA (Digitale Gesundheitsanwendungen) est le dispositif légal allemand d'« applications sur ordonnance » — le premier système national au monde où les médecins prescrivent des applications de santé approuvées et où l'assurance maladie obligatoire doit les rembourser. C'est l'expérience grandeur nature la plus aboutie de financement des thérapies numériques à l'échelle nationale.

## Pourquoi c'est important

Le DiGA a répondu à la question que se pose toute entreprise de santé numérique — « qui va réellement payer ? » — par la loi (le DVG, 2019). Le dispositif est remarquable :

- **Décision rapide** : le BfArM (le régulateur) doit se prononcer dans un délai de 3 mois.
- **Inscription provisoire** : les applications peuvent être inscrites pendant 12 mois *tout en continuant à produire des preuves* — générant des revenus pendant leur étude pivot.
- **Échéance de preuve** : démontrer un « effet positif sur les soins de santé » (bénéfice médical, ou amélioration structurelle/procédurale pertinente pour le patient) via une étude comparative — généralement un essai contrôlé randomisé — sous peine de radiation. Environ la moitié des inscriptions provisoires ne parvient pas à se convertir.
- **Tarification** : le fabricant fixe librement le prix de la première année ; il est ensuite négocié avec la fédération des assureurs. Prix médian initial sur 3 mois autour de €500 ; des éléments de tarification à la performance arrivent à partir de 2026.

État des lieux du marché (recherche jusqu'à fin 2024) : environ 68 applications inscrites, plus d'1M de prescriptions cumulées, environ 81 % des prescriptions activées, environ €234M de dépenses cumulées des assureurs — un marché réel, mais modeste par rapport au battage médiatique, et l'observance après activation reste le point faible.

## Le calcul

Le modèle commercial que tout fondateur de DiGA applique :

```
Revenu = prescriptions × taux d'activation × prix par période de prescription
Coût de la preuve = essai pivot (typiquement €1M–3M) dans la fenêtre de 12 mois
Valeur attendue = P(la preuve réussit) × revenu en régime permanent − coût de la preuve

Avec ~50 % d'échec de conversion, P doit être évalué honnêtement — la moitié
du secteur dépense l'argent de l'essai et perd son inscription.
```

## Exemple chiffré

Une application de gestion de la dépression s'inscrit provisoirement à €450/trimestre :

```
Année 1 : 20 000 prescriptions × 81 % d'activation × €450 ≈ €7,3M de revenu
Coût de l'essai : €2M, mené en parallèle
Scénario A (preuve positive) : inscription définitive, prix négocié ~€380,
  régime permanent 60 000 prescriptions/an ≈ €18,5M/an
Scénario B (preuve négative) : radiation au 12e mois ; le revenu s'arrête.
```

L'année provisoire finance la production de la preuve — l'innovation centrale du dispositif. À comparer avec la séquence traditionnelle (la preuve d'abord, le revenu des années plus tard), qui affame précisément les produits que le DiGA cherche à faire exister.

## Lien avec l'ingénierie logicielle

Le modèle du DiGA — **adoption provisoire avec une métrique de succès pré-enregistrée et une extinction automatique** — est directement transposable à la gouvernance des outils d'ingénierie : mettre l'outil en production auprès des utilisateurs pendant 12 mois, pré-enregistrer la métrique (temps gagné mesuré, réduction des incidents), le retirer automatiquement à défaut de preuve. Cela résout le paradoxe du pilote (les outils qui ont besoin d'échelle pour prouver leur valeur n'obtiennent jamais cette échelle) sans accorder de titularisation permanente à une technologie non prouvée. Les données 81 % d'activation / faible observance portent aussi une leçon produit : la prescription (ou le mandat exécutif) obtient des installations ; seule la qualité du produit obtient un usage durable — voir [observance et persistance](../adherence-and-persistence/).

## Pièges

- **Considérer l'inscription comme la ligne d'arrivée** — la prescription requiert la confiance des prescripteurs ; de nombreux DiGA inscrits n'atteignent qu'un volume négligeable.
- **Sous-dimensionner l'étude pivot** pour économiser pendant l'année de revenu — la fausse économie qui explique une bonne part du taux d'échec de 50 %.
- **Transposer le modèle sans le payeur** : le DiGA fonctionne parce que le remboursement est légal ; une copie sans paiement obligatoire n'est qu'un programme pilote.

## Sources

- Analysis of the DiGA market, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- DiGA pricing trends, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>
