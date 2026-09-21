# Évaluation réglementaire de l'IA

Les cadres réglementaires qui régissent l'IA dans le domaine de la santé — le régime « Software as a Medical Device » (SaMD) de la FDA avec ses **Predetermined Change Control Plans (PCCP)**, et les programmes d'évaluation en conditions réelles comme le NHS AI in Health and Care Award — et ce qu'ils coûtent et permettent sur le plan économique.

## Pourquoi c'est important

La réglementation détermine à la fois le **coût de la preuve nécessaire à l'entrée sur le marché** et le **coût de chaque mise à jour ultérieure du modèle** — pour les produits d'IA, c'est souvent le second qui compte le plus. Le mode traditionnel de la FDA (verrouiller le modèle ; le refaire homologuer à chaque changement) rendait l'amélioration continue économiquement brutale. Les **lignes directrices PCCP (finalisées en décembre 2024)** ont changé la donne économique : un fabricant peut pré-autoriser des mises à jour futures *spécifiées* du modèle — une description des modifications prévues, un protocole de modification (comment chacune sera validée) et une évaluation d'impact — de sorte que les améliorations sanctionnées soient déployées sans nouvelle soumission. Plus de 1 000 dispositifs intégrant de l'IA disposent d'une autorisation de la FDA ; celle-ci examine désormais aussi le suivi des performances en conditions réelles (indicateurs préspécifiés : taux de référence de faux positifs/faux négatifs, dérive de calibration, indicateurs de changement de domaine).

## Le calcul

Le PCCP applique l'économie du [délai de mise en œuvre DORA](../dora-metrics/) aux modèles réglementés :

```
Coût par mise à jour du modèle (traditionnel) = coût de resoumission + délai
                                                d'examen × coût du délai
Coût par mise à jour du modèle (cadré par PCCP) = coût d'exécution du
                                                  protocole seul

Économie des mises à jour sur la durée de vie d'un produit :
  N mises à jour × (coût de soumission + mois d'examen × coût du délai par mois)
  vs coût unique de rédaction du PCCP + N × exécutions de protocole
```

Pour le schéma du NHS AI Award, l'ensemble d'indicateurs est plus large que la seule exactitude : des évaluations indépendantes en conditions réelles évaluent la performance clinique, les effets sur le flux de travail/la mise en œuvre, et l'impact économique — l'ensemble du pipeline [efficacité → effectivité → rapport coût-efficacité](../ai-developer-productivity/) institutionnalisé.

## Exemple chiffré

Un fournisseur d'IA en radiologie prévoit des améliorations trimestrielles du modèle sur 3 ans (12 mises à jour) :

```
Traditionnel : 12 × (80k £ de soumission + 4 mois × 50k £/mois de coût du
              délai sur le bénéfice retardé) = 12 × 280k £ = 3,36 M£
Voie PCCP :    250k £ de rédaction du PCCP + 12 × 30k £ d'exécution de
              protocole = 610k £
Économie ≈ 2,75 M£ — et les patients reçoivent chaque amélioration
~4 mois plus tôt : 12 × 4 mois × le bénéfice clinique de la mise à jour,
une ligne de QALY à part entière.
```

Le PCCP est une reconnaissance réglementaire du fait que **la fréquence de déploiement a une valeur clinique** — la chaîne causale maîtresse du dépôt, avalisée par un régulateur.

## Lien avec l'ingénierie logicielle

Bien concevoir le PCCP est un problème logiciel : suites d'évaluation préspécifiées, jeux de données versionnés, pipelines de validation automatisés, surveillance de la dérive — le cousin réglementé du déploiement continu, où la « porte de déploiement » est un protocole validé plutôt qu'une revue de code. Les équipes dotées d'une infrastructure d'évaluation mature ([indicateurs de qualité de l'IA](../ai-quality-metrics/)) obtiennent des PCCP à moindre coût ; celles qui en manquent découvrent que la contrainte réglementaire est en réalité une contrainte de maturité d'ingénierie. Pour les produits entrant dans le NHS, la pile parallèle est le DTAC (sécurité clinique, protection des données, interopérabilité) plus les niveaux de preuve [NICE ESF](../nice-evidence-standards-framework/) — budgétez-les tous comme faisant partie du [TCO](../total-cost-of-ownership/) d'entrée sur le marché.

## Pièges

- **Rêves d'extension de périmètre du PCCP** : seuls les *types* de modification spécifiés sont préautorisés ; les changements d'architecture ou les nouveaux usages prévus nécessitent toujours un examen complet.
- **Dérive en conditions réelles non surveillée** : autorisation basée sur la performance au lancement + dérive silencieuse de la population = un produit fonctionnant en dehors de son périmètre homologué ; le suivi est à la fois une attente réglementaire et une autoprotection.
- **Confondre homologation et valeur** : l'homologation FDA/UKCA ne signifie pas que quelqu'un paiera — c'est l'obstacle de l'[ETS](../health-technology-assessment/), à franchir séparément.

## Sources

- FDA, dispositifs logiciels intégrant de l'IA / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- Analyse des lignes directrices de mise en œuvre du PCCP. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, enseignements des évaluations en conditions réelles du AI in Health and Care Award. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
