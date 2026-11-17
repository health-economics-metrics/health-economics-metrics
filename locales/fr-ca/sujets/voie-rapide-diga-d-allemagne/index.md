# Voie Rapide DiGA d'Allemagne

Le DiGA (Digitale Gesundheitsanwendungen) est la voie légale allemande des « applications sur ordonnance » — le premier système national au monde où les médecins prescrivent des applications de santé approuvées et où l'assurance légale doit les rembourser. C'est la principale expérience en direct du paiement des thérapeutiques numériques à l'échelle nationale.

## Pourquoi c'est important

Le DiGA a répondu à la question que se pose chaque entreprise de santé numérique — « qui va réellement payer ? » — par une législation (la DVG, 2019). La conception est remarquable :

- **Décision rapide** : le BfArM (le régulateur) doit décider dans les 3 mois.
- **Inscription provisoire** : les applications peuvent être listées pendant 12 mois *tout en générant encore des preuves* — gagnant des revenus pendant leur étude pivot.
- **Échéance de preuve** : prouver un « effet de santé positif » (bénéfice médical, ou amélioration structurelle/procédurale pertinente pour le patient) via une étude comparative — généralement un ECR — ou être retiré de la liste. Environ la moitié des entrées provisoires ne parviennent pas à se convertir.
- **Tarification** : le fabricant fixe librement le prix de l'année 1 ; puis négocié avec la fédération des assureurs. Prix médians initiaux sur 3 mois autour de 500 €; éléments de tarification basée sur la performance arrivant dès 2026.

Vérification de la réalité du marché (recherche jusqu'à fin 2024) : ~68 applications listées, >1M de prescriptions cumulées, ~81 % des prescriptions activées, ~234 M€ de dépenses assureurs cumulées — un marché réel, mais modeste face au battage médiatique, et l'observance après activation reste le point faible.

## Le calcul

Le modèle commercial que chaque fondateur de DiGA exécute :

```
Revenu = prescriptions × taux d'activation × prix par période de prescription
Coût de preuve = ECR pivot (typiquement 1M€–3M€) dans la fenêtre de 12 mois
Valeur attendue = P(la preuve réussit) × revenu en régime stable − coût de preuve

Avec ~50 % d'échec de conversion, P doit être évalué honnêtement — la moitié
du domaine dépense l'argent de l'ECR et perd l'inscription.
```

## Exemple résolu

Une application de gestion de la dépression s'inscrit provisoirement à 450 €/trimestre :

```
Année 1 : 20 000 prescriptions × 81 % activation × 450 € ≈ 7,3 M€ de revenu
Coût de l'ECR : 2M€, en cours simultanément
Résultat A (preuve positive) : inscription permanente, prix négocié ~380 €,
  régime stable 60 000 ordonnances/an ≈ 18,5 M€/an
Résultat B (la preuve échoue) : retiré de la liste au mois 12 ; les revenus s'arrêtent.
```

L'année provisoire finance la génération de preuves — l'innovation centrale de la voie. Contraste avec la séquence traditionnelle (preuve d'abord, revenus des années plus tard), qui affame exactement les produits que le DiGA veut voir exister.

## Lien avec l'ingénierie logicielle

Le schéma du DiGA — **adoption provisoire avec une métrique de succès préenregistrée et une expiration automatique** — est directement copiable pour la gouvernance des outils d'ingénierie : livrez l'outil à des utilisateurs en production pendant 12 mois, préenregistrez la métrique (temps gagné mesuré, réduction des incidents), expirez automatiquement à moins que la preuve n'arrive. Cela résout le paradoxe du pilote (les outils qui ont besoin d'échelle pour prouver leur valeur n'obtiennent jamais l'échelle) sans accorder une titularisation permanente à une technologie non prouvée. Les données d'activation à 81 %/faible observance portent aussi une leçon produit : la prescription (ou le mandat exécutif) obtient des installations ; seule la qualité du produit obtient un usage soutenu — voir [observance et persistance](../observance-et-persistance/).

## Pièges

- **Traiter l'inscription comme la ligne d'arrivée** — les prescriptions nécessitent la confiance du prescripteur ; de nombreux DiGA listés voient un volume négligeable.
- **Sous-dimensionner l'étude pivot** pour économiser de l'argent pendant l'année de revenus — la fausse économie qui explique une grande partie du taux d'échec de 50 %.
- **Transposer le modèle sans le payeur** : le DiGA fonctionne parce que le remboursement est légal ; une copie sans paiement mandaté n'est qu'un programme pilote.

## Sources

- Analyse du marché DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- Tendances de prix DiGA, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>
