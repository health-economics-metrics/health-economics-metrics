# Seuils de disposition à payer

Un seuil de disposition à payer (willingness-to-pay, WTP) est le montant maximal qu'un décideur est prêt à payer par unité de gain de santé — la ligne qui transforme un [ICER](../incremental-cost-effectiveness-ratio/) en décision d'adoption ou de rejet.

## Pourquoi c'est important

Le seuil est le point où l'économie de la santé cesse d'être une mesure pour devenir une politique. Chaque système national en possède un, explicite ou implicite, et connaître le chiffre local indique précisément comment valoriser une allégation de valeur pour la santé :

| Organisme | Seuil (tel qu'étudié, 2024–2025) |
|---|---|
| NICE (Angleterre) | £20,000–£30,000 par QALY ; seuil de décision empirique moyen ≈ £24,400 (2022–24) ; les modificateurs de sévérité relèvent le plafond effectif à environ £36k–£51k ; jusqu'à £100k+ pour les technologies hautement spécialisées |
| ICER (États-Unis, non gouvernemental) | repères de prix de $100,000–$150,000 par QALY/evLYG ; fourchette rapportée de $50k–$200k |
| Canada (CADTH / CDA-AMC) | seuil de travail d'environ CAD$50,000 par QALY |
| WHO-CHOICE (historique, mondial) | 1 à 3× le PIB par habitant par DALY évité (désormais déconseillé, jugé trop grossier) |
| Côté offre empirique au Royaume-Uni (Claxton et al.) | ≈ £13,000 par QALY réellement déplacé à la marge du NHS |

## Le calcul

Le seuil λ intervient dans chaque règle de décision :

```
Adopter si ICER = ΔC/ΔE < λ
De manière équivalente : adopter si NMB = λ×ΔE − ΔC > 0
```

Deux théories sur ce qu'*est* λ :

- **Côté demande** : ce que la société est disposée à payer pour la santé (un jugement de valeur).
- **Côté offre** : la santé que le budget produit actuellement à la marge (une grandeur empirique — environ £13k/QALY selon Claxton). Si le λ utilisé pour les décisions dépasse le taux côté offre, approuver une nouvelle technologie déplace plus de santé qu'elle n'en ajoute.

## Exemple chiffré

Votre thérapeutique numérique délivre 0.05 QALY par patient traité, pour un coût net (prix moins compensations) de £800.

```
ICER = 800 / 0.05 = £16,000 per QALY
```

- Angleterre : en dessous de £20k → finançable. Prix maximal défendable : à λ = £20,000, prix_max = 0.05 × 20,000 + compensations = £1,000 + compensations.
- Cadrage commercial américain à $150k/QALY : le prix fondé sur la valeur est bien plus élevé.
- Un pays au seuil fondé sur le PIB par habitant de $4,000 : le même produit doit coûter moins d'environ $200 net.

Même produit, trois marchés, trois prix — le seuil *est* le modèle de tarification. C'est la tarification fondée sur la valeur, appliquée en sens inverse à partir de λ.

## Lien avec l'ingénierie logicielle

Chaque organisation d'ingénierie a un λ implicite : le seuil au-delà duquel elle finance un outil par heure-ingénieur économisée. Le rendre explicite — « nous finançons tout ce qui coûte moins de £40 par heure-ingénieur crédible économisée » — permet une comparaison en tableau de classement des investissements de plateforme, exactement comme les tableaux de classement coût-par-QALY classent les dépenses de santé. La leçon du côté offre se transpose aussi : votre véritable λ interne est ce que votre backlog *actuel* produit à la marge, pas ce que la direction affirme que le temps vaut.

## Pièges

- **Le « magasinage de seuil »** entre juridictions, ou citer le plafond des technologies hautement spécialisées (HST) pour un produit ordinaire.
- **Traiter λ comme un prix plancher** : franchir le seuil est nécessaire, mais pas suffisant — l'[impact budgétaire](../budget-impact-analysis/) peut encore couler un produit pourtant abordable à l'unité.
- **Ignorer que les seuils évoluent** : les modificateurs de sévérité de NICE (2022) et les révisions périodiques modifient le λ effectif ; datez vos affirmations.

## Sources

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
