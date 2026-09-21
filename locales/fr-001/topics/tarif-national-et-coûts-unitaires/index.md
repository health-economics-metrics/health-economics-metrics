# Tarif National et Coûts Unitaires

Le NHS paie les prestataires pour l'activité selon une liste de prix nationale fondée sur des règles — historiquement le Tarif National / Paiement par Résultats, remplacé par le **Régime de Paiement du NHS (RPN)** le 1er avril 2023. Derrière les prix se trouve une infrastructure nationale de chiffrage unitaire : la **Collecte Nationale de Coûts (CNC)** et le compendium **PSSRU Unit Costs of Health and Social Care**.

## Pourquoi c'est important

Ce sont les dénominateurs de chaque dossier de décision crédible du NHS. Quand une allégation dit « une consultation ambulatoire vaut 160 £ » ou « une heure-infirmière de Bande 6 coûte 31 £ », ces chiffres proviennent de cette infrastructure — et utiliser les chiffres officiels plutôt qu'inventés est ce qui rend les évaluations indépendantes comparables et les équipes financières coopératives. Pour un fournisseur, le tarif définit aussi le côté *revenu* : l'activité que votre logiciel permet (cliniques supplémentaires, lits reremplis) est valorisée aux prix du régime.

## Le calcul

```
Prix de tarif par unité d'activité (séjour codé HRG, consultation ambulatoire)
  = coût unitaire moyen national (issu de la CNC) × Facteur de Forces du Marché (ajustement local)
  sous le RPN : éléments mélangés fixes + variables (« paiement et incitation alignés »)

Coût unitaire CNC = coût total rapporté par le trust pour un type d'activité / volume d'activité
                (construit sur les Systèmes d'Information et de Chiffrage au Niveau Patient, PLICS)

Compendium PSSRU : ~80 coûts unitaires standards (consultation médecin traitant, heure-infirmière
par bande, consultation aux urgences…) — la source par défaut dans les évaluations économiques du Royaume-Uni.
```

## Exemple résolu

Votre logiciel libère 1 heure/jour du temps d'une infirmière de Bande 6 sur une année de travail de 250 jours :

```
Coût de Bande 6 basé sur PSSRU incl. frais généraux ≈ 31 £/heure (vérifiez l'édition actuelle)
Valeur de capacité = 250 × 31 £ = 7 750 £/infirmière/an (ne libère pas de trésorerie)
```

Alternativement, l'infirmière effectue 2 rendez-vous de suivi ambulatoire supplémentaires/jour à environ 160 £ de valeur de régime : 500 × 160 £ = **80 000 £/an d'activité financée** — une différence de dix fois dans la valeur revendiquée selon le redéploiement, tout cela à partir de coûts unitaires officiels. Les deux allégations sont auditables car les dénominateurs sont publiés ; c'est tout l'intérêt.

## Lien avec l'ingénierie logicielle

C'est le modèle du **catalogue de prix interne**. L'économie de la santé britannique fonctionne parce que chaque évaluation utilise les mêmes coûts unitaires publiés ; les organisations d'ingénierie en manquent la plupart du temps, donc chaque dossier de décision invente son propre coût d'une heure-ingénieur, d'un incident, d'un déploiement. Une équipe de plateforme peut publier exactement un tel catalogue — coût chargé par heure-ingénieur selon le niveau, par incident selon la sévérité, par minute de build — et exiger son usage dans toutes les propositions. Les systèmes de refacturation reproduisent aussi les modes de défaillance connus du tarif : la tarification au coût moyen alimente la manipulation de volume, les paiements fixes alimentent le sous-provisionnement. L'évolution du RPN du paiement d'activité pur vers du fixe+variable mélangé représente vingt ans de leçons en conception d'incitations pour la tarification de plateforme interne.

## Pièges

- **Chiffres obsolètes** : les prix CNC, PSSRU et RPN sont actualisés annuellement — datez chaque chiffre.
- **Prix de tarif ≠ coût** : les prix sont des moyennes nationales avec ajustements ; votre coût marginal local diffère (voir [coût marginal contre moyen](../coût-marginal-contre-coût-moyen/)).
- **Valoriser la capacité au tarif sans mécanisme** pour réellement livrer l'activité supplémentaire et être payé pour elle.

## Sources

- NHS England, Régime de Paiement du NHS. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, Collecte Nationale de Coûts. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
