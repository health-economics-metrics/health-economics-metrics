# Économie unitaire de l'inférence

L'économie unitaire de l'inférence consiste à tarifer les fonctionnalités d'IA selon leur coût de calcul marginal : **coût par jeton (token)**, agrégé en coût par transaction, par utilisateur, par épisode clinique. La dynamique déterminante : les prix des LLM ont chuté d'environ **un ordre de grandeur tous les 1 à 2 ans**, à capacité constante — un taux de déflation sans précédent dans la tarification des technologies de santé.

## Pourquoi c'est important

Deux conséquences découlent de cet effondrement des prix. Sur le plan commercial, une fonctionnalité d'IA à peine rentable aujourd'hui peut devenir triviale à rentabiliser dans 18 mois — et un concurrent tarifé sur les coûts actuels se fera sous-coter. Pour l'évaluation économique, tout modèle de coût-efficacité pour un service clinique reposant sur l'IA qui fige les prix d'inférence de 2024 **surestime nettement le coût courant** — l'analyse a besoin de scénarios de baisse de prix, de la même façon que les modèles de médicaments intègrent l'expiration des brevets et l'entrée des génériques. (Points de repère issus de la recherche : jetons de sortie de pointe à environ 15–75 $/M mi-2026, modèles intermédiaires un ordre de grandeur moins chers, capacité de niveau GPT-4 passée d'environ 20 $/M en 2022 à 0,40 $/M ; Epoch AI a mesuré des baisses de 9× à 900×/an selon le jalon de capacité considéré.)

## Le calcul

```
Coût par appel     = jetons d'entrée × tarif d'entrée + jetons de sortie × tarif de sortie
Coût par unité     = Σ appels par unité de résultat métier (par épisode de triage,
                     par lettre rédigée, par compte-rendu de consultation)

Réalité mixte      = appel de base + relances + contexte RAG (forte consommation
                     d'entrée) + appels d'évaluation/garde-fous (souvent 20–50 %
                     de surcoût)

Scénario de baisse de prix pour les modèles pluriannuels :
  coût_t = coût_0 × d^t, tester d ∈ {0.3, 0.5, 0.7}/an en analyse de sensibilité
```

## Exemple chiffré

Un service de compte-rendu de sortie par IA : un compte-rendu moyen utilise 12 000 jetons d'entrée (contexte du dossier) + 1 200 de sortie, plus une passe de vérification (6 000 en entrée / 300 en sortie). À 3 $/M en entrée, 15 $/M en sortie :

```
Rédaction : 12 000 × 3/1M + 1 200 × 15/1M = 0,036 $ + 0,018 $ = 0,054 $
Vérif. :     6 000 × 3/1M +   300 × 15/1M = 0,018 $ + 0,0045 $ ≈ 0,023 $
Par compte-rendu ≈ 0,077 $ → pour 100 000 comptes-rendus/an ≈ 7 700 $

Rapporté à environ 20 minutes de temps clinicien économisées par compte-rendu
(≈ 25 £), l'inférence représente 0,25 % de la valeur créée — l'économie est
dominée par tout SAUF les jetons : intégration, évaluation, gouvernance,
adoption.
```

Cette conclusion — le coût d'inférence est rarement la contrainte déterminante, aux prix actuels, pour les tâches cliniques à forte valeur — est en elle-même l'enseignement à emporter en réunion de tarification.

## Lien avec l'ingénierie logicielle

Il s'agit d'une spécialisation de l'[économie unitaire du cloud](../cloud-unit-economics/) pour l'IA, avec trois notes pratiques : **mesurer par unité métier**, et non par appel API, afin que le chiffre s'intègre directement dans les modèles d'[ICER](../incremental-cost-effectiveness-ratio/)/[d'impact budgétaire](../budget-impact-analysis/) ; **surveiller l'asymétrie entrée/sortie** (la sortie coûte généralement environ 4× le prix de l'entrée ; les architectures RAG consomment beaucoup d'entrée — les choix d'architecture sont des choix de tarification) ; et **router par palier de tâche** — faire correspondre la capacité du modèle à la difficulté de la tâche (modèles bon marché pour la classification, modèles de pointe pour la synthèse) réduit régulièrement le coût mixte d'un facteur 5 à 10 à qualité égale, l'équivalent logiciel de l'utilisation de l'intervention efficace la moins coûteuse ([minimisation des coûts](../cost-minimization-analysis/), équivalence démontrée).

## Pièges

- **Modèles pluriannuels à prix figé** — surestiment le coût ; mais aussi **modèles de revenus supposant la déflation** — une guerre des prix n'est pas un contrat ; envisager les deux scénarios.
- **Ignorer le surcoût d'évaluation** : garde-fous, juges automatiques et relances représentent de vrais jetons, souvent majoritaires dans les contextes réglementés.
- **Myopie du jeton** : latence, limites de débit et contraintes de fenêtre de contexte ont des coûts qu'aucun prix de jeton ne capture.

## Sources

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
