# Économie de la Télésurveillance des Patients

L'économie de remboursement et de compensation de coûts de la surveillance des patients à domicile : aux États-Unis, une pile de revenus définie par code CPT ; dans les services de santé nationaux, une économie d'évitement d'admission et d'unité virtuelle jusqu'à la substitution complète d'**hôpital-à-domicile**.

## Pourquoi c'est important

La TSP est l'endroit où les données d'appareil deviennent des soins de santé facturables. La structure Medicare américaine (moyennes nationales 2025) est inhabituellement explicite :

```
99453  configuration et éducation du patient     ~19,73$  unique (après 16 jours de données)
99454  fourniture d'appareil + transmission  ~43,03$  par 30 jours — NÉCESSITE ≥16 jours
                                              de relevés sur les 30
99457  premiers 20 min/mois de gestion ~47,87$  nécessite ≥20 minutes enregistrées
99458  chaque 20 min supplémentaires        ~38,49$
```

Un mois-patient conforme s'empile à environ **90-130$ PMPM**. Du côté de la compensation de coûts, les programmes hôpital-à-domicile (exemption CMS Acute Hospital Care at Home : 300+ hôpitaux) montrent ~1 800-3 000$ économisés par contact face aux soins hospitaliers avec moins de réadmissions et d'infections — la démonstration la plus claire que la surveillance plus les soins virtuels peuvent substituer la ressource la plus coûteuse du système, le lit doté en personnel.

## Le calcul

```
Revenu TSP (États-Unis)  = inscrits × fraction conforme à la facturation × pile de codes PMPM
  — la règle des 16 jours fait de la conformité au temps de port (wearable-validation.md)
    une variable de revenu, et la règle des 20 minutes fait de l'enregistrement
    du temps clinique une exigence d'ingénierie

Valeur style NHS   = admissions évitées × coût marginal d'admission
                  + journées-lits substituées × (coût jour hospitalier − coût jour d'unité virtuelle)
                  − coût du service (appareils, plateforme, personnel de surveillance)
  (voir emergency-attendance-avoidance.md et bed-days-saved.md pour les
   règles d'attribution et de coût marginal)
```

## Exemple résolu

Un cabinet américain inscrit 400 patients d'hypertension ; 70 % atteignent le seuil de 16 jours dans un mois typique ; minutes de gestion enregistrées pour 60 % :

```
Revenu mensuel ≈ 400 × [0,70 × 43,03 + 0,60 × 47,87] = 400 × 58,84 ≈ 23 500$
Annuel ≈ 282 000$ ; coût du service (appareils 12$/mois, personnel 0,8 ETP) ≈ 180 000$
Marge ≈ 100k$/an — et notez que les leviers sont des leviers d'ingénierie :
augmenter la conformité de 16 jours de 70 % → 85 % ajoute ~31k$/an
(confort de l'appareil, fiabilité de synchronisation, conception des rappels).
```

Miroir NHS : une unité virtuelle de 50 lits à 80 % d'occupation substituant des journées hospitalières à 150 £ d'économie nette/jour ≈ 50 × 0,8 × 365 × 150 ≈ **2,19 M£/an** brut — face à la plateforme, aux appareils, et à l'équipe infirmière communautaire qui la dote en personnel.

## Lien avec l'ingénierie logicielle

Les plateformes de TSP sont le produit rare où **le temps de disponibilité et la fiabilité de synchronisation se convertissent directement en revenu** (une semaine de synchronisations échouées brise la porte des 16 jours pour une cohorte) et où le suivi temporel de niveau audit (la règle des 20 minutes) est une fonctionnalité de première classe, pas une pensée après coup. Construisez pour : des tableaux de bord de conformité par patient faisant émerger les mois de facturation à risque tant qu'ils sont encore récupérables ; des traces de données horodatées et infalsifiables (les audits de payeur sont routiniers) ; et l'ajustement de l'économie d'alertes — chaque alerte consomme des minutes de l'équipe de surveillance, qui sont à la fois l'unité facturable et la ressource rare (l'[économie du dépistage](../économie-du-dépistage/) gouverne le choix du seuil).

## Pièges

- **Inscription ≠ revenu** : la fraction conforme est le chiffre ; modélisez-la, ne la supposez pas.
- **Codes américains transplantés dans des cas NHS** — les services de santé nationaux achètent de l'évitement d'admission, pas des piles CPT ; exécutez le second modèle.
- **Allégations de compensation au coût moyen** pour des admissions dont les coûts fixes demeurent (voir [coût marginal contre moyen](../coût-marginal-contre-coût-moyen/)).
- **Saturation de l'équipe de surveillance** : le volume d'alertes s'échelonne avec l'inscription ; la ligne de personnel est la contrainte contraignante que la plupart des modèles omettent.

## Sources

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, facturation de la TSP. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
