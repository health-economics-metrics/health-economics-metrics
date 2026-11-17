# Économie Unitaire des Applications de Santé

L'arithmétique commerciale des produits de santé grand public : coût d'acquisition client (CAC), valeur vie client (LTV), revenu moyen par utilisateur (ARPU), tarification par membre par mois (PMPM), et la distinction du marché employeur entre **ROI et VOI** (valeur sur investissement).

## Pourquoi c'est important

Les applications de santé font face à une pression structurelle : l'acquisition est coûteuse (allégations réglementées, barrières de confiance, coûts de conformité) tandis que la rétention est la pire de toute verticale logicielle (~90 % d'abandon dans les 30 jours — voir [rétention et attrition](../rétention-et-attrition/)). Le test de viabilité standard — **LTV:CAC ≥ 3:1** — est donc brutalement difficile en santé grand public, ce pourquoi l'industrie migre vers des modèles B2B2C : employeurs, assureurs et systèmes de santé payant du PMPM pour des populations, où l'acheteur n'est pas l'individu qui se désabonne.

## Le calcul

```
CAC   = dépense ventes + marketing / nouveaux clients payants
ARPU  = revenu / utilisateurs actifs (par période)
LTV   = ARPU × durée de vie moyenne  =  ARPU / taux d'attrition
Viabilité : LTV : CAC ≥ 3, période de remboursement ≤ 12–18 mois

CAC effectif par utilisateur retenu = CAC / rétention(t)
  — à 4 % de rétention D30, un CAC de 5 £ vaut réellement 125 £ par utilisateur retenu à 30 jours

Revenu PMPM = tarif × membres inscrits × mois
  marge du fournisseur = PMPM − coût de service par membre par mois
  — l'engagement inverse le signe : sous les abonnements B2C l'engagement pilote
    le revenu ; sous PMPM, les membres engagés COÛTENT plus cher à servir que
    les dormants, et les contrats de résultats l'inversent à nouveau
```

## Exemple résolu

Une application de sommeil B2C : 6,99 £/mois, attrition mensuelle 18 %, CAC mélangé 38 £.

```
LTV = 6,99 / 0,18 ≈ 38,8 £ → LTV:CAC ≈ 1,0 — non viable

Pivot vers PMPM employeur : 1,20 £ PMPM × 40 000 vies couvertes = 48k£/mois
Coût de service : infrastructure 0,15 £ + support 0,10 £ + contenu 0,05 £
  par membre ≈ 0,30 £ → marge ~75 %, cycle de vente long mais l'attrition est
  au niveau contrat (annuelle), pas au niveau utilisateur (quotidienne)

La question de l'employeur déplace la métrique : le ROI en dollars durs
(réclamations réduites, absentéisme) est rarement démontrable pour les produits
de bien-être — la réponse de l'industrie est la VOI : productivité, attrait
de recrutement, engagement — ce qui est honnête uniquement lorsque étiqueté
comme VOI, pas déguisé en ROI (voir return-on-investment.md et social-return-on-investment.md).
```

## Lien avec l'ingénierie logicielle

Les choix d'ingénierie fixent les deux côtés du ratio : le **coût de service** est de l'architecture ([économie unitaire du cloud](../économie-unitaire-du-cloud/) — la marge PMPM vit ou meurt sur le coût d'infrastructure par membre), et la **LTV** est de l'ingénierie de rétention (chaque point d'attrition est de l'arithmétique de revenu — les mathématiques QALY du document sur la [rétention](../rétention-et-attrition/) ont un jumeau exact en revenu). Pour les produits de santé spécifiquement, le tableau de bord d'économie unitaire devrait porter une troisième ligne aux côtés de la LTV et du CAC : la **valeur de santé par utilisateur acquis** (QALY pondérés par rétention × seuil) — parce que les marchés de payeurs et de style DiGA la tarifient de plus en plus, et parce qu'un produit dont l'économie unitaire commerciale et clinique diverge (rentable mais inerte en santé, ou efficace mais non finançable) a besoin de savoir quel problème il a.

## Pièges

- **LTV issue de l'attrition de cohorte précoce** : l'attrition se stabilise à la baisse ; mais aussi un biais de survie — les premiers adoptants retiennent mieux que les audiences échelonnées. Utilisez des données de cohorte mature.
- **CAC mélangé entre canaux** : le CAC social payant et le CAC de recommandation clinicienne diffèrent de 10×, avec des profils de rétention opposés — segmentez ou soyez induit en erreur.
- **PMPM sans plafonds d'utilisation** : les membres à engagement atypique peuvent inverser les marges ; modélisez la distribution, pas la moyenne.
- **VOI présentée comme ROI** à un DAF — l'échec de crédibilité que l'industrie du bien-être employeur a mis une décennie à gagner.

## Sources

- Introductions à l'économie unitaire des technologies de santé. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- Cadres de tarification PMPM pour la santé numérique. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
