# Économie de la télésurveillance des patients

L'économie du remboursement et de la compensation des coûts liée à la surveillance des patients à domicile : aux États-Unis, un empilement de revenus défini par des codes CPT ; dans les services de santé nationaux, l'économie de l'évitement des admissions et des « virtual wards » (services hospitaliers virtuels), jusqu'à la substitution complète de type **hospital-at-home** (hospitalisation à domicile).

## Pourquoi c'est important

La RPM (télésurveillance des patients) est le domaine où les données d'un appareil deviennent des soins facturables. La structure du Medicare américain (moyennes nationales 2025) est inhabituellement explicite :

```
99453  mise en service & éducation du patient  ~19,73 $  ponctuel (après 16 jours de données)
99454  fourniture de l'appareil + transmission ~43,03 $  par période de 30 jours — EXIGE ≥16 jours
                                                de relevés sur les 30
99457  premières 20 min/mois de gestion        ~47,87 $  exige ≥20 minutes consignées
99458  chaque tranche supplémentaire de 20 min ~38,49 $
```

Un mois-patient conforme s'accumule à environ **90–130 $ PMPM** (par membre et par mois). Côté compensation des coûts, les programmes hospital-at-home (dérogation CMS « Acute Hospital Care at Home » : plus de 300 hôpitaux) montrent une économie d'environ 1 800–3 000 $ par épisode par rapport aux soins hospitaliers classiques, avec moins de réadmissions et d'infections — la démonstration la plus nette que la surveillance combinée aux soins virtuels peut se substituer à la ressource la plus coûteuse du système : le lit avec personnel dédié.

## Le calcul

```
Revenu RPM (US)   = patients inscrits × fraction conforme à la facturation × empilement de codes PMPM
  — la règle des 16 jours fait de la conformité au temps de port (wearable-validation.md)
    une variable de revenu, et la règle des 20 minutes fait de la consignation
    du temps clinique une exigence d'ingénierie

Valeur type NHS   = admissions évitées × coût marginal d'admission
                  + journées d'hospitalisation substituées × (coût jour hospitalier − coût jour virtual ward)
                  − coût du service (appareils, plateforme, personnel de surveillance)
  (voir emergency-attendance-avoidance.md et bed-days-saved.md pour les
   règles d'attribution et de coût marginal)
```

## Exemple chiffré

Un cabinet américain inscrit 400 patients hypertendus ; 70 % atteignent le seuil des 16 jours un mois type ; les minutes de gestion sont consignées pour 60 % d'entre eux :

```
Revenu mensuel ≈ 400 × [0,70 × 43,03 + 0,60 × 47,87] = 400 × 58,84 ≈ 23 500 $
Annuel ≈ 282 000 $ ; coût du service (appareils 12 $/mois, personnel 0,8 ETP) ≈ 180 000 $
Marge ≈ 100 k$/an — et il faut noter que les leviers sont des leviers d'ingénierie :
faire passer la conformité aux 16 jours de 70 % à 85 % ajoute environ 31 k$/an
(confort de l'appareil, fiabilité de synchronisation, conception des rappels).
```

Miroir NHS : un virtual ward de 50 lits à 80 % d'occupation, substituant des journées d'hospitalisation à une économie nette de 150 £/jour ≈ 50 × 0,8 × 365 × 150 ≈ **2,19 M£/an** en brut — à mettre en regard de la plateforme, des appareils et de l'équipe d'infirmiers de proximité qui l'anime.

## Lien avec l'ingénierie logicielle

Les plateformes de RPM sont un des rares produits où **la disponibilité et la fiabilité de la synchronisation se convertissent directement en revenu** (une semaine de synchronisations échouées casse le seuil des 16 jours pour toute une cohorte), et où la traçabilité temporelle de qualité audit (la règle des 20 minutes) est une fonctionnalité de premier rang, pas un ajout après coup. À construire en priorité : des tableaux de bord de conformité par patient qui signalent les mois de facturation à risque tant qu'ils sont encore récupérables ; des pistes de données horodatées et infalsifiables (les audits des payeurs sont routiniers) ; et un réglage de l'économie des alertes — chaque alerte consomme des minutes de l'équipe de surveillance, qui constituent à la fois l'unité facturable et la ressource rare ([l'économie du dépistage](../screening-economics/) gouverne le choix du seuil).

## Pièges

- **Inscription ≠ revenu** : la fraction conforme est le chiffre qui compte ; il faut la modéliser, pas la supposer.
- **Codes américains transposés tels quels dans des dossiers NHS** — les services de santé nationaux achètent de l'évitement d'admission, pas des empilements de codes CPT ; il faut faire tourner le second modèle.
- **Compensation calculée au coût moyen** pour des admissions dont les coûts fixes subsistent (voir [coût marginal vs coût moyen](../marginal-vs-average-cost/)).
- **Saturation de l'équipe de surveillance** : le volume d'alertes croît avec les inscriptions ; la ligne d'effectifs est la contrainte contraignante que la plupart des modèles omettent.

## Sources

- Codes CPT de RPM et tarifs 2025. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- Rapport CMS sur les résultats du hospital-at-home. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, facturation de la RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
