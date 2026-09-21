# Cadre des Normes de Preuve NICE (CNP)

Le CNP est le cadre de NICE spécifiant **combien de preuves une technologie de santé numérique nécessite, proportionnellement à son risque**. C'est ce qui se rapproche le plus d'une réponse officielle à « que devons-nous prouver avant que le NHS n'achète notre application ? »

## Pourquoi c'est important

Le CNP (publié d'abord en 2019, mis à jour en 2022 pour couvrir l'IA et les algorithmes adaptatifs) classe les technologies de santé numérique en niveaux selon la fonction clinique, avec des normes de preuve **cumulatives** — 21 normes réparties en 5 groupes (facteurs de conception, valeur, performance/efficacité, impact économique, déploiement) :

```
Niveau A — services système, aucun résultat direct sur le patient (par ex., planification électronique)
         → normes de base : crédibilité, protection des données, assurance technique
Niveau B — informer, surveillance simple, communication (par ex., journal de symptômes)
         → + preuve de bénéfice utilisateur, fiabilité appropriée
Niveau C — traiter, diagnostiquer, ou guider activement la gestion clinique
         → + preuve d'efficacité comparative de haute qualité (idéalement ECR)
           et analyse économique
```

Pour la preuve économique, l'[analyse coûts-conséquences](../analyse-coûts-conséquences/) est acceptable pour la plupart des niveaux ; l'[analyse coût-utilité](../analyse-coût-utilité/) est attendue au risque le plus élevé. Le CNP définit votre **coût de preuve d'entrée sur le marché** — budgétez-le comme tout autre coût de développement.

## Le calcul

Aucune formule — un tableau de décision. Le calcul opérationnel est commercial :

```
Investissement de preuve requis = f(niveau)
  Niveau A : documentation + assurance ≈ 10k-50k £
  Niveau B : étude observationnelle/comparative de bénéfice utilisateur ≈ 50k-250k £
  Niveau C : étude comparative de niveau ECR + modèle économique ≈ 250k-2M £+

Positionnez délibérément les allégations de votre produit : revendiquer « soutient
les décisions cliniques » au lieu de « informe les patients » vous fait monter d'un
niveau et peut multiplier la facture par 10×.
```

## Exemple résolu

Un fabricant d'application de rappel de médication envisage d'ajouter une fonctionnalité de recommandation d'ajustement de dose.

- En tant qu'application de rappel : **Niveau B** — une étude de cohorte montrant une amélioration de l'observance suffit.
- Avec des recommandations de dose : **Niveau C** — preuve d'efficacité comparative (probablement un ECR contre les soins habituels) plus analyse économique.

Si l'ECR coûte 600k£ et que le revenu incrémental de la fonctionnalité de dose est de 200k£/an, la fonctionnalité doit conserver sa valeur pendant 3+ ans avant que les coûts de preuve n'atteignent le seuil de rentabilité — une décision produit qui semble entièrement différente une fois le niveau CNP intégré au prix. De nombreuses équipes livrent le produit de Niveau B et échelonnent l'allégation de Niveau C derrière le financement.

## Lien avec l'ingénierie logicielle

Le CNP est le modèle de gouvernance le plus transférable de ce dépôt : des **exigences de preuve échelonnées par risque pour l'adoption d'outils**. Version interne : un formateur de code a besoin d'une démo (Niveau A) ; un outil de productivité revendiquant des heures économisées a besoin d'un pilote mesuré (Niveau B) ; une porte IA qui bloque automatiquement les déploiements ou écrit automatiquement du code clinique a besoin d'une preuve de niveau essai contrôlé avant un déploiement à l'échelle de l'organisation (Niveau C). Une preuve proportionnée arrête les deux modes de défaillance — la bureaucratie étranglant des outils triviaux, et les intuitions livrant des outils conséquents. Voir aussi [voie rapide DiGA](../voie-rapide-diga-d-allemagne/) pour le complément « adoption provisoire avec échéance de preuve ».

## Pièges

- **Mauvaise classification de niveau par pensée magique** — les régulateurs et acheteurs classent selon ce que le produit *fait*, pas ce que dit le marketing.
- **Preuve construite après le produit** : adapter rétroactivement un ECR à un produit livré sans instrumentation ni équipoise est lent et souvent impossible.
- **Satisfaire le CNP et oublier le reste** : le CNP se situe aux côtés du DTAC (sécurité clinique, protection des données, interopérabilité) et, pour l'IA, l'homologation réglementaire — voir [évaluation réglementaire de l'IA](../évaluation-réglementaire-de-l-ia/).

## Sources

- Cadre des Normes de Preuve NICE (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- Tableaux des normes de preuve du CNP. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
