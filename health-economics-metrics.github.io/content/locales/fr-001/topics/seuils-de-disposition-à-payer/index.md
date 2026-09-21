# Seuils de Disposition à Payer

Un seuil de disposition à payer (SDP) est le maximum qu'un décideur paiera par unité de gain de santé — la ligne qui transforme un [RCEI](../ratio-coût-efficacité-incrémental/) en une décision d'adopter/rejeter.

## Pourquoi c'est important

Le seuil est là où l'économie de la santé cesse d'être de la mesure et devient de la politique. Chaque système national en a un, explicite ou implicite, et connaître le chiffre local vous dit exactement comment tarifer une allégation de valeur de santé :

| Organisme | Seuil (tel que recherché, 2024–2025) |
|---|---|
| NICE (Angleterre) | 20 000-30 000 £ par QALY ; seuil de décision empirique moyen ≈ 24 400 £ (2022-24) ; les modulateurs de sévérité élèvent le plafond effectif à ~36k-51k£ ; technologies hautement spécialisées jusqu'à 100k£+ |
| ICER (États-Unis, non gouvernemental) | repères de prix de 100 000-150 000$ par QALY/evLYG ; rapporte une fourchette de 50k-200k$ |
| Canada (CADTH / CDA-AMC) | ≈ 50 000$ CAD par QALY seuil de travail |
| OMS-CHOICE (historique, mondial) | 1-3× le PIB par habitant par AVCI évitée (maintenant déconseillé car trop grossier) |
| Côté offre empirique britannique (Claxton et al.) | ≈ 13 000 £ par QALY réellement déplacé à la marge du NHS |

## Le calcul

Le seuil λ entre dans chaque règle de décision :

```
Adoptez si RCEI = ΔC/ΔE < λ
De manière équivalente : adoptez si BMN = λ×ΔE − ΔC > 0
```

Deux théories sur ce qu'*est* λ :

- **Côté demande** : ce que la société est disposée à payer pour la santé (un jugement de valeur).
- **Côté offre** : la santé que le budget produit actuellement à la marge (une quantité empirique — le ~13k£/QALY de Claxton). Si le λ utilisé pour les décisions dépasse le taux du côté offre, approuver une nouvelle technologie déplace plus de santé qu'elle n'en ajoute.

## Exemple résolu

Votre thérapeutique numérique livre 0,05 QALY par patient traité à un coût net (prix moins compensations) de 800 £.

```
RCEI = 800 / 0,05 = 16 000 £ par QALY
```

- Angleterre : sous 20k£ → finançable. Prix maximal défendable : à λ = 20 000 £, prix_max = 0,05 × 20 000 + compensations = 1 000 £ + compensations.
- Cadrage commercial américain à 150k$/QALY : le prix basé sur la valeur est bien plus élevé.
- Seuil d'un pays au PIB par habitant de 4 000$ : le même produit doit coûter moins de ~200$ net.

Même produit, trois marchés, trois prix — le seuil *est* le modèle de tarification. C'est de la tarification basée sur la valeur, exécutée à rebours à partir de λ.

## Lien avec l'ingénierie logicielle

Toute organisation d'ingénierie a un λ implicite : le seuil auquel elle finance des outils par heure-ingénieur économisée. Le rendre explicite — « nous finançons tout ce qui est sous 40 £ par heure-ingénieur crédible économisée » — permet une comparaison de tableau de classement des investissements de plateforme, exactement comme les tableaux de classement coût-par-QALY classent les dépenses de santé. La leçon du côté offre se transpose aussi : votre vrai λ interne est ce que votre arriéré *actuel* produit à la marge, pas ce que dit la direction que vaut le temps.

## Pièges

- **Magasinage de seuils** à travers les juridictions ou citer le plafond HST pour un produit ordinaire.
- **Traiter λ comme un plancher de prix** : franchir le seuil est nécessaire, pas suffisant — l'[impact budgétaire](../analyse-d-impact-budgétaire/) peut toujours couler un produit abordable par unité.
- **Ignorer que les seuils bougent** : les modulateurs de sévérité de NICE (2022) et les revues périodiques changent le λ effectif ; datez vos allégations.

## Sources

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
