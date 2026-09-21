# Tarif national et coûts unitaires

Le NHS paie les prestataires pour leur activité selon une liste de prix nationale fondée sur des règles — historiquement le National Tariff / Payment by Results, remplacé par le **NHS Payment Scheme (NHSPS)** le 1er avril 2023. Derrière ces prix se trouve une infrastructure nationale de coûts unitaires : la **National Cost Collection (NCC)** et le recueil **PSSRU Unit Costs of Health and Social Care**.

## Pourquoi c'est important

Ce sont les dénominateurs de tout dossier économique NHS crédible. Quand une affirmation dit « une consultation externe vaut 160 £ » ou « une heure d'infirmier Band 6 coûte 31 £ », ces chiffres proviennent de cette infrastructure — et utiliser les chiffres officiels plutôt que des chiffres inventés est ce qui rend les évaluations indépendantes comparables et les équipes financières coopératives. Pour un fournisseur, le tarif définit aussi le volet *recettes* : l'activité que votre logiciel permet (consultations supplémentaires, lits reremplis) est valorisée aux prix du barème.

## Le calcul

```
Prix du tarif par unité d'activité (séjour codé HRG, consultation externe)
  = coût unitaire moyen national (issu de la NCC) × Market Forces Factor
    (ajustement local)
  sous le NHSPS : éléments mixtes fixes + variables (« aligned payment and
  incentive »)

Coût unitaire NCC = coût total déclaré par le trust pour un type d'activité
                     / volume d'activité
                    (construit sur les Patient-Level Information and Costing
                     Systems, PLICS)

Recueil PSSRU : environ 80 coûts unitaires standard (consultation de médecin
généraliste, heure d'infirmier par grade, passage aux urgences…) — la source
par défaut dans les évaluations économiques britanniques.
```

## Exemple chiffré

Votre logiciel libère 1 heure/jour de temps d'un infirmier Band 6, sur une année de travail de 250 jours :

```
Coût Band 6 selon PSSRU, charges comprises ≈ 31 £/heure (vérifier l'édition
en vigueur)
Valeur de capacité = 250 × 31 £ = 7 750 £/infirmier/an (non libératrice
de trésorerie)
```

Autrement, l'infirmier assure 2 consultations de suivi externes supplémentaires/jour à une valeur de barème d'environ 160 £ : 500 × 160 £ = **80 000 £/an d'activité financée** — un écart d'un facteur dix dans la valeur revendiquée selon la réaffectation, le tout à partir de coûts unitaires officiels. Les deux affirmations sont vérifiables car les dénominateurs sont publiés ; c'est tout l'intérêt de la démarche.

## Lien avec l'ingénierie logicielle

C'est le schéma du **barème de prix interne**. L'économie de la santé britannique fonctionne parce que chaque évaluation utilise les mêmes coûts unitaires publiés ; les organisations d'ingénierie en sont le plus souvent dépourvues, si bien que chaque dossier économique invente son propre coût d'une heure-ingénieur, d'un incident, d'un déploiement. Une équipe plateforme peut publier exactement un tel barème — coût chargé par heure-ingénieur selon le niveau, par incident selon la sévérité, par minute de build — et en imposer l'usage dans toutes les propositions. Les systèmes de refacturation/showback reproduisent aussi les modes de défaillance bien connus du tarif : la tarification au coût moyen incite à gonfler les volumes, les paiements fixes incitent à la sous-provision. L'évolution du NHSPS, du paiement pur à l'activité vers un modèle mixte fixe + variable, représente vingt ans de leçons en conception d'incitations pour la tarification interne des plateformes.

## Pièges

- **Chiffres obsolètes** : les prix de la NCC, du PSSRU et du NHSPS sont actualisés chaque année — datez chaque chiffre.
- **Le prix du tarif n'est pas le coût** : les prix sont des moyennes nationales ajustées ; votre coût marginal local diffère (voir [coût marginal contre coût moyen](../marginal-vs-average-cost/)).
- **Valoriser la capacité au tarif sans mécanisme** permettant réellement de fournir l'activité supplémentaire et d'être payé pour celle-ci.

## Sources

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
