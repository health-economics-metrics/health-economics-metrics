# Coût total de possession (TCO)

Le TCO est le coût complet d'un système sur toute sa durée de vie : acquisition ou développement, intégration, exploitation, maintenance, support, formation et mise hors service. Le constat de base, inconfortable : **la maintenance représente 50 à 80 % du TCO logiciel** — environ les trois quarts du coût total sur la durée de vie surviennent *après* la mise en service.

## Pourquoi c'est important

L'évaluation des technologies de santé a compris depuis longtemps que le prix d'un médicament n'est pas son coût — l'administration, le suivi et la gestion des effets secondaires font tous partie du modèle. Les dossiers économiques logiciels qui ne comptabilisent que le coût de développement ou de licence reproduisent cette même erreur du « prix nu du médicament » et sous-estiment systématiquement le volet coût de chaque [ICER](../incremental-cost-effectiveness-ratio/) et [impact budgétaire](../budget-impact-analysis/) qu'ils alimentent. Pour les achats du NHS, la rigueur du TCO est ce qui rend honnête l'affirmation de rapport coût-efficacité d'un produit numérique — et c'est précisément là que les options d'apparence bon marché perdent leur avantage.

## Le calcul

```
TCO = coût initial (construction/licence + intégration + migration des données + formation)
    + Σ_t [exploitation + maintenance + support + infrastructure + mises à niveau
           + conformité/assurance]_t / (1 + r)^t
    + coût de démantèlement (sortie, extraction des données, fonctionnement en parallèle)

Horizon : 3–5 ans dans le commercial, durée de vie du système pour l'infrastructure clinique
r : 3,5% secteur public (Green Book), 8–12% commercial
Repères : maintenance annuelle ≈ 15–20% du coût de construction ; ~78% du TCO sur la
durée de vie survient après le lancement ; négliger le démantèlement et le verrouillage
fournisseur revient à sous-évaluer le TCO.
```

## Exemple chiffré

Deux options pour un système d'observations électroniques, horizon de 5 ans :

```
                            SaaS fournisseur   Développement interne
Année 0 (licence/construction)  £250,000        £900,000
Intégration + formation          £180,000        £150,000
Fonctionnement annuel (an 1–5)   £120,000/an     £190,000/an  (hébergement + 1,5 ETP maint.)
Sortie/démantèlement             £60,000         £30,000

TCO non actualisé                £1,090,000      £2,030,000
```

L'estimation d'ingénierie de l'option de développement interne (£900k) ne représentait que 44 % de son TCO réel — et les estimations de développement elles-mêmes dépassent généralement de 30 à 40 % (voir [construire ou acheter](../build-vs-buy/)). À moins que l'option interne ne produise des *résultats* réellement différents, la logique de [minimisation des coûts](../cost-minimization-analysis/) s'applique, et le SaaS l'emporte avec un écart d'environ £940k.

## Lien avec l'ingénierie logicielle

Les ingénieurs sous-estiment les propres données de maintenance de leur discipline lorsqu'ils plaident pour un développement interne : la règle des 15 à 20 % de maintenance annuelle rapportée au coût de développement signifie que chaque système à £1M engage silencieusement £150–200k/an de capacité future — un passif qui relève du même bilan mental que la [dette technique](../technical-debt/). Le TCO est aussi le volet coût de chaque métrique de ce dépôt : coût par déploiement, [économie unitaire du cloud](../cloud-unit-economics/), et la rigueur du dénominateur que l'évaluation des technologies de santé impose aux promoteurs de médicaments. Lorsque le prix de votre produit est contesté, une comparaison de TCO incluant les coûts d'exploitation réels de la solution en place est généralement le recadrage le plus solide disponible.

## Pièges

- **L'ancrage sur le coût de lancement** : comparer les options sur leur coût de l'année 0, alors que le classement s'inverse dès l'année 3.
- **Le sophisme du « travail interne gratuit »** : la maintenance interne valorisée à zéro parce que « l'équipe est déjà payée » — voir [coût d'opportunité](../opportunity-cost/).
- **Ignorer les coûts de sortie** : extraction des données, résiliation de contrat et fonctionnement en parallèle sont les postes où un SaaS « bon marché » devient coûteux.
- **Les violations d'horizon commun** : comparer le TCO d'un SaaS sur 3 ans à l'amortissement d'un développement interne sur 10 ans (voir [horizon temporel](../time-horizon/)).

## Sources

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
