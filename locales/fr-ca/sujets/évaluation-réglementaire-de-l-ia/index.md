# Évaluation Réglementaire de l'IA

Les cadres réglementaires qui régissent l'IA dans le domaine de la santé — le régime de dispositif médical logiciel (SaMD) de la FDA avec des **plans de contrôle des changements prédéterminés (PCCP)**, et des programmes d'évaluation en conditions réelles comme le Prix NHS pour l'IA en Santé et Soins — et ce qu'ils coûtent et permettent économiquement.

## Pourquoi c'est important

La réglementation détermine à la fois le **coût de preuve d'entrée sur le marché** et le **coût de chaque mise à jour ultérieure du modèle** — pour les produits d'IA, le second compte souvent davantage. Le mode traditionnel de la FDA (verrouiller le modèle ; refaire une homologation pour chaque changement) rendait l'amélioration continue économiquement brutale. Les **lignes directrices PCCP (finalisées en décembre 2024)** ont changé la donne : un fabricant peut préautoriser des mises à jour futures *spécifiées* du modèle — une description des modifications prévues, un protocole de modification (comment chacune sera validée) et une évaluation d'impact — de sorte que les améliorations sanctionnées soient déployées sans nouvelle soumission. Plus de 1 000 dispositifs dotés d'IA ont une autorisation de la FDA ; la FDA examine désormais aussi le suivi des performances en conditions réelles (métriques prédéfinies : taux de base FP/FN, dérive de calibration, indicateurs de changement de domaine).

## Le calcul

Le PCCP est l'économie du [délai DORA](../métriques-dora/) appliquée aux modèles réglementés :

```
Coût par mise à jour de modèle (traditionnel) = coût de resoumission + délai de revue × CdR
Coût par mise à jour de modèle (périmètre PCCP) = seul le coût d'exécution du protocole

Économie des mises à jour sur la vie du produit :
  N mises à jour × (coût de soumission + mois de revue × coût de retard par mois)
  contre coût unique de rédaction du PCCP + N × exécutions du protocole
```

Pour le schéma du Prix IA du NHS, l'ensemble de métriques est plus large que la précision : les évaluations indépendantes en conditions réelles apprécient la performance clinique, les effets sur le flux de travail/l'implémentation et l'impact économique — le pipeline complet [efficacité → effectivité → coût-efficacité](../productivité-des-développeurs-avec-l-ia/) institutionnalisé.

## Exemple résolu

Un fournisseur d'IA en radiologie planifie des améliorations trimestrielles du modèle sur 3 ans (12 mises à jour) :

```
Traditionnel : 12 × (80 k£ soumission + 4 mois × 50 k£/mois de CdR sur bénéfice retardé)
           = 12 × 280 k£ = 3,36 M£
Voie PCCP :  250 k£ rédaction PCCP + 12 × 30 k£ exécution de protocole = 610 k£
Économie ≈ 2,75 M£ — et les patients reçoivent chaque amélioration ~4 mois plus tôt :
12 × 4 mois × le bénéfice clinique de la mise à jour, une ligne QALY à part entière.
```

Le PCCP est une reconnaissance réglementaire du fait que **la fréquence de déploiement a une valeur clinique** — la chaîne causale maîtresse de ce dépôt, endossée par un régulateur.

## Lien avec l'ingénierie logicielle

Bien concevoir le PCCP est un problème logiciel : ensembles d'évaluation prédéfinis, jeux de données versionnés, pipelines de validation automatisés, surveillance de la dérive — le cousin réglementé du déploiement continu, où la « porte de déploiement » est un protocole validé plutôt qu'une revue de code. Les équipes dotées d'une infrastructure d'évaluation mature ([métriques de qualité de l'IA](../métriques-de-qualité-de-l-ia/)) obtiennent des PCCP à moindre coût ; les équipes qui en manquent découvrent que la contrainte réglementaire est en réalité une contrainte de maturité d'ingénierie. Pour les produits entrant dans le NHS, la pile parallèle est le DTAC (sécurité clinique, protection des données, interopérabilité) plus les niveaux de preuve du [cadre de normes de preuve NICE](../cadre-des-normes-de-preuve-nice/) — budgétez le tout comme un [CTP](../coût-total-de-possession/) d'entrée sur le marché.

## Pièges

- **Rêves d'extension de périmètre du PCCP** : seuls les types de modification *spécifiés* sont préautorisés ; les changements d'architecture ou les nouveaux usages prévus nécessitent toujours une revue complète.
- **Dérive en conditions réelles non surveillée** : autorisation basée sur la performance au lancement + dérive populationnelle silencieuse = un produit fonctionnant hors de son enveloppe homologuée ; la surveillance est à la fois une attente réglementaire et une autodéfense.
- **Confondre homologation et valeur** : l'homologation FDA/UKCA ≠ que quelqu'un va payer — c'est l'obstacle de l'[ETS](../évaluation-des-technologies-de-santé/), géré séparément.

## Sources

- FDA, logiciel de dispositif doté d'IA / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- Analyse des lignes directrices de mise en œuvre du PCCP. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, leçons des évaluations en conditions réelles du Prix IA en Santé et Soins. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
