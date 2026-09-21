# Économie unitaire des applications de santé

L'arithmétique commerciale des produits de santé grand public : le coût d'acquisition client (CAC), la valeur vie client (LTV), le revenu moyen par utilisateur (ARPU), la tarification par membre et par mois (PMPM), et la distinction propre au marché employeur entre **ROI et VOI** (valeur sur investissement).

## Pourquoi c'est important

Les applications de santé font face à un étau structurel : l'acquisition est coûteuse (revendications réglementées, barrières de confiance, coûts de conformité) tandis que la rétention est la pire de tous les secteurs logiciels (environ 90 % d'abandon en 30 jours — voir [rétention et attrition](../retention-and-churn/)). Le test de viabilité standard — **LTV:CAC ≥ 3:1** — est donc brutalement difficile à atteindre en santé grand public, ce qui explique pourquoi le secteur migre vers des modèles B2B2C : employeurs, assureurs et systèmes de santé payant un PMPM pour des populations, l'acheteur n'étant plus l'individu qui se désabonne.

## Le calcul

```
CAC    = dépenses commerciales + marketing / nouveaux clients payants
ARPU   = revenu / utilisateurs actifs (par période)
LTV    = ARPU × durée de vie moyenne  =  ARPU / taux d'attrition
Viabilité : LTV : CAC ≥ 3, délai de récupération ≤ 12–18 mois

CAC effectif par utilisateur retenu = CAC / rétention(t)
  — à 4 % de rétention à J30, 5 £ par installation = 125 £ par
    utilisateur retenu à 30 jours

Revenu PMPM = tarif × membres inscrits × mois
  marge fournisseur = PMPM − coût de service par membre et par mois
  — l'engagement inverse de signe : sous abonnement B2C, l'engagement
    génère du revenu ; sous PMPM, les membres engagés COÛTENT plus
    cher à servir que les membres dormants, et les contrats à
    résultats inversent à nouveau la logique
```

## Exemple chiffré

Une application de sommeil B2C : 6,99 £/mois, attrition mensuelle de 18 %, CAC mixte de 38 £.

```
LTV = 6,99 / 0,18 ≈ 38,8 £ → LTV:CAC ≈ 1,0 — non viable

Pivot vers un PMPM employeur : 1,20 £ PMPM × 40 000 vies couvertes
  = 48 k£/mois
Coût de service : infrastructure 0,15 £ + support 0,10 £ + contenu
  0,05 £ par membre ≈ 0,30 £ → marge ~75 %, cycle de vente long
  mais l'attrition se situe au niveau du contrat (annuelle), pas
  au niveau utilisateur (quotidienne)

La question de l'employeur déplace l'indicateur : le ROI en dur
(réduction des sinistres, de l'absentéisme) est rarement démontrable
pour les produits de bien-être — la réponse du secteur est le VOI :
productivité, attractivité en recrutement, engagement — ce qui n'est
honnête que si c'est étiqueté comme VOI, pas déguisé en ROI (voir
return-on-investment.md et social-return-on-investment.md).
```

## Lien avec l'ingénierie logicielle

Les choix d'ingénierie déterminent les deux côtés du ratio : le **coût de service** relève de l'architecture ([économie unitaire cloud](../cloud-unit-economics/) — la marge PMPM vit ou meurt selon le coût d'infrastructure par membre), et la **LTV** relève de l'ingénierie de la rétention (chaque point d'attrition est du revenu arithmétique — les mathématiques de QALY du document [rétention](../retention-and-churn/) ont un jumeau exact en revenu). Pour les produits de santé spécifiquement, le tableau de bord d'économie unitaire devrait porter une troisième ligne à côté de la LTV et du CAC : la **valeur santé par utilisateur acquis** (QALY pondérés par la rétention × seuil) — parce que les marchés de type payeur et DiGA la tarifient de plus en plus, et parce qu'un produit dont l'économie unitaire commerciale et clinique diverge (rentable mais cliniquement inerte, ou efficace mais infinançable) a besoin de savoir de quel problème il souffre.

## Pièges

- **LTV calculée sur l'attrition d'une cohorte précoce** : l'attrition se stabilise à la baisse ; mais il y a aussi un biais de survie — les premiers adoptants se retiennent mieux que les audiences à l'échelle. Utilisez des données de cohorte arrivées à maturité.
- **CAC mixé sur les canaux** : le CAC des réseaux sociaux payants et celui de la prescription par un clinicien diffèrent d'un facteur 10, avec des profils de rétention opposés — segmentez, sous peine d'erreur.
- **PMPM sans plafond d'utilisation** : des membres exceptionnellement engagés peuvent inverser les marges ; modélisez la distribution, pas la moyenne.
- **VOI présenté comme un ROI** à un directeur financier — l'échec de crédibilité que le secteur du bien-être en entreprise a mis une décennie à mériter.

## Sources

- Introductions à l'économie unitaire de la healthtech. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- Cadres de tarification PMPM pour la santé numérique. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
