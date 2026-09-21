# Coût Total de Possession (CTP)

Le CTP est le coût complet d'un système sur sa durée de vie : acquisition ou développement, intégration, exploitation, maintenance, support, formation et mise hors service. La ligne de base inconfortable : **la maintenance représente 50-80 % du CTP logiciel** — environ les trois quarts du coût de vie arrivent *après* le lancement.

## Pourquoi c'est important

L'évaluation des technologies de santé a appris depuis longtemps que le prix d'un médicament n'est pas son coût — l'administration, la surveillance et la gestion des effets secondaires appartiennent tous au modèle. Les dossiers de décision logiciels qui ne comptent que le coût de développement/licence répètent l'erreur naïve du prix des médicaments et sous-estiment systématiquement le côté coût de chaque [RCEI](../ratio-coût-efficacité-incrémental/) et [impact budgétaire](../analyse-d-impact-budgétaire/) qu'ils alimentent. Pour les achats du NHS, la discipline du CTP est ce qui rend honnête l'allégation de coût-efficacité d'un produit numérique — et c'est là où perdent les options qui semblent bon marché.

## Le calcul

```
CTP = coût initial (développement/licence + intégration + migration de données + formation)
    + Σ_t [exploitation + maintenance + support + infrastructure + mises à niveau
           + conformité/assurance]_t / (1 + r)^t
    + coût de mise hors service (sortie, extraction de données, exécution parallèle)

Horizon : 3-5 ans commercial, durée de vie du système pour l'infrastructure clinique
r : 3,5 % secteur public (Green Book), 8-12 % commercial
Repères : maintenance annuelle ≈ 15-20 % du coût de développement ; ~78 % de la vie
du CTP après le lancement ; ignorer la mise hors service et le verrouillage fournisseur se tarife lui-même.
```

## Exemple résolu

Deux options pour un système d'observations électroniques, horizon de 5 ans :

```
                        SaaS du fournisseur     Développement interne
Année 0 (licence/développement)  250 000 £        900 000 £
Intégration + formation  180 000 £        150 000 £
Exploitation annuelle (années 1-5)     120 000 £/an     190 000 £/an  (hébergement + 1,5 ETP maint.)
Sortie/mise hors service       60 000 £         30 000 £

CTP non actualisé        1 090 000 £      2 030 000 £
```

L'estimation d'ingénierie de l'option de développement (900k£) n'était que 44 % de son vrai CTP — et les estimations de développement elles-mêmes dépassent typiquement de 30-40 % (voir [développer ou acheter](../développer-ou-acheter/)). À moins que l'option interne ne livre des *résultats* matériellement différents, la logique de [minimisation des coûts](../analyse-de-minimisation-des-coûts/) s'applique et le SaaS gagne d'environ 940k£.

## Lien avec l'ingénierie logicielle

Les ingénieurs sous-pondèrent les données de maintenance de leur propre domaine lorsqu'ils plaident pour des développements : la règle de maintenance annuelle de 15-20 % du coût de développement signifie que chaque système d'1M£ engage silencieusement 150-200k£/an de capacité future — un passif qui appartient au même bilan mental que la [dette technique](../dette-technique/). Le CTP est aussi la moitié coût de chaque métrique de ce dépôt : coût par déploiement, [économie unitaire du cloud](../économie-unitaire-du-cloud/), et la discipline du dénominateur que l'ETS impose aux promoteurs de médicaments. Lorsque le prix de votre produit est contesté, une comparaison de CTP incluant les vrais coûts de fonctionnement du titulaire en place est habituellement le recadrage le plus fort disponible.

## Pièges

- **Ancrage au coût de lancement** : comparer les options au coût de l'année 0 alors que le classement s'inverse d'ici l'année 3.
- **Fallacieuse main-d'œuvre interne gratuite** : maintenance interne tarifée à zéro car « l'équipe est déjà là » — voir [coût d'opportunité](../coût-d-opportunité/).
- **Ignorer les coûts de sortie** : la sortie de données, la résiliation de contrat et l'exécution parallèle sont là où le SaaS « bon marché » devient coûteux.
- **Violations d'horizon identique** : comparer un CTP SaaS sur 3 ans contre un amortissement de développement sur 10 ans (voir [horizon temporel](../horizon-temporel/)).

## Sources

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Repères de coût de maintenance logicielle. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
