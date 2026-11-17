# Économie Unitaire de l'Inférence

L'économie unitaire de l'inférence tarife les fonctionnalités d'IA par leur calcul marginal : **coût par jeton**, agrégé en coût par transaction, par utilisateur, par épisode clinique. La dynamique définitoire : les prix des LLM ont chuté d'environ **un ordre de grandeur tous les 1-2 ans** à capacité constante — un taux de déflation sans précédent dans le chiffrage des technologies de santé.

## Pourquoi c'est important

Deux conséquences découlent de l'effondrement des prix. Commercialement, une fonctionnalité d'IA marginale aujourd'hui peut être trivialement rentable dans 18 mois — et un concurrent tarifé sur les coûts d'aujourd'hui sera sous-coté. Pour l'évaluation économique, tout modèle de coût-efficacité pour un service clinique doté d'IA qui gèle les prix d'inférence de 2024 **surestime matériellement le coût continu** — l'analyse a besoin de scénarios de baisse de prix de la même manière que les modèles de médicaments gèrent l'expiration de brevet et l'entrée de génériques. (Points de référence issus de la recherche : jetons de sortie de pointe ~15-75 $/M mi-2026, modèles de niveau intermédiaire un ordre moins chers, capacité de niveau GPT-4 passant d'environ 20 $/M en 2022 à environ 0,40 $/M ; Epoch AI a mesuré des baisses de 9×-900×/an selon le jalon de capacité.)

## Le calcul

```
Coût par appel     = jetons d'entrée × tarif d'entrée + jetons de sortie × tarif de sortie
Coût par unité     = Σ appels par unité de résultat métier (par épisode de
                    triage, par lettre rédigée, par résumé de consultation)

Réalité mélangée   = appel de base + relances + contexte RAG (intensif en entrée)
                    + appels d'évaluation/garde-fous (souvent 20-50 % de surcharge)

Scénario de baisse de prix pour modèles pluriannuels :
  coût_t = coût_0 × d^t, testez d ∈ {0,3, 0,5, 0,7}/an en analyse de sensibilité
```

## Exemple résolu

Un service de résumé de sortie par IA : le résumé moyen utilise 12 000 jetons d'entrée (contexte du dossier) + 1 200 de sortie, plus une passe de vérification (6 000 entrée / 300 sortie). À 3 $/M entrée, 15 $/M sortie :

```
Brouillon :   12 000 × 3/1M + 1 200 × 15/1M  = 0,036$ + 0,018$ = 0,054$
Vérification :   6 000 × 3/1M +   300 × 15/1M  = 0,018$ + 0,0045$ ≈ 0,023$
Par résumé ≈ 0,077$ → pour 100 000 résumés/an ≈ 7 700$

Face à ~20 minutes-clinicien économisées par résumé (≈ 25 £), l'inférence
représente 0,25 % de la valeur créée — l'économie est dominée par tout
SAUF les jetons : intégration, évaluation, gouvernance, adoption.
```

Cette conclusion — le coût d'inférence est rarement la contrainte contraignante, aux prix actuels, pour les tâches cliniques à haute valeur — est elle-même le constat qui mérite d'être porté aux réunions de tarification.

## Lien avec l'ingénierie logicielle

C'est l'[économie unitaire du cloud](../économie-unitaire-du-cloud/) spécialisée pour l'IA, avec trois notes pratiques : **mesurez par unité métier**, pas par appel API, pour que le chiffre s'insère directement dans les modèles de [RCEI](../ratio-coût-efficacité-incrémental/)/[impact budgétaire](../analyse-d-impact-budgétaire/) ; **surveillez l'asymétrie entrée/sortie** (la sortie coûte typiquement environ 4× le prix d'entrée ; les architectures RAG sont intensives en entrée — les choix d'architecture sont des choix de tarification) ; et **acheminez par niveau de tâche** — faire correspondre la capacité du modèle à la difficulté de la tâche (modèles bon marché pour la classification, de pointe pour la synthèse) réduit régulièrement le coût mélangé de 5-10× à qualité égale, la version logicielle de l'utilisation de l'intervention efficace la moins chère ([minimisation des coûts](../analyse-de-minimisation-des-coûts/), équivalence démontrée).

## Pièges

- **Modèles pluriannuels à prix gelé** — surestime le coût ; mais aussi **modèles de revenus à déflation supposée** — une guerre des prix n'est pas un contrat ; envisagez les deux scénarios.
- **Ignorer la surcharge d'évaluation** : garde-fous, juges et relances sont de vrais jetons, souvent la majorité dans les contextes réglementés.
- **Myopie par jeton** : la latence, les limites de débit et les contraintes de fenêtre de contexte portent des coûts qu'aucun prix de jeton ne capture.

## Sources

- Epoch AI, tendances de prix d'inférence LLM. <https://epoch.ai/data-insights/llm-inference-price-trends>
- Comparaisons de prix LLM. <https://www.silicondata.com/blog/llm-cost-per-token>
