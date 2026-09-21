# NICE Evidence Standards Framework (ESF)

L'ESF est le cadre de NICE qui précise **le volume de preuves qu'une technologie de santé numérique doit fournir, proportionnellement à son risque**. C'est ce qui se rapproche le plus d'une réponse officielle à la question « que devons-nous prouver avant que le NHS achète notre application ? »

## Pourquoi c'est important

L'ESF (publié pour la première fois en 2019, mis à jour en 2022 pour couvrir l'IA et les algorithmes adaptatifs) classe les technologies de santé numérique en paliers selon leur fonction clinique, avec des exigences de preuves **cumulatives** — 21 normes réparties en 5 groupes (facteurs de conception, valeur, performance/efficacité, impact économique, déploiement) :

```
Palier A — services système, sans résultat direct pour le patient (par ex.
           e-rostering) → normes de base : crédibilité, protection des
           données, assurance technique
Palier B — informer, surveillance simple, communication (par ex. journal
           de symptômes) → + preuve de bénéfice pour l'utilisateur,
           fiabilité appropriée
Palier C — traiter, diagnostiquer ou guider activement la prise en charge
           clinique → + preuves comparatives d'efficacité de haute qualité
           (idéalement un essai randomisé) et analyse économique
```

Pour les preuves économiques, l'[analyse coût-conséquence](../cost-consequence-analysis/) est acceptable pour la plupart des paliers ; l'[analyse coût-utilité](../cost-utility-analysis/) est attendue au niveau de risque le plus élevé. L'ESF définit votre **coût de preuve d'entrée sur le marché** — budgétez-le comme tout autre coût de construction.

## Le calcul

Pas de formule — un tableau de décision. Le calcul opérant est commercial :

```
Investissement en preuves requis = f(palier)
  Palier A : documentation + assurance ≈ £10k–50k
  Palier B : étude observationnelle/comparative du bénéfice utilisateur
             ≈ £50k–250k
  Palier C : étude comparative de niveau essai randomisé + modèle
             économique ≈ £250k–£2M+

Positionnez délibérément les revendications de votre produit : affirmer
« soutient les décisions cliniques » plutôt que « informe les patients »
vous fait changer de palier et peut multiplier la facture par 10.
```

## Exemple chiffré

Un éditeur d'application de rappel de médication envisage d'ajouter une fonctionnalité de recommandation d'ajustement de dose.

- En tant qu'application de rappel : **Palier B** — une étude de cohorte montrant une amélioration de l'observance suffit.
- Avec des recommandations de dose : **Palier C** — preuves comparatives d'efficacité (probablement un essai randomisé contre les soins habituels) plus analyse économique.

Si l'essai randomisé coûte £600k et que le revenu incrémental de la fonctionnalité de dosage est de £200k/an, la fonctionnalité doit conserver sa valeur pendant 3 ans ou plus avant que les coûts de preuve ne soient amortis — une décision produit qui a une tout autre allure une fois le palier ESF chiffré. Beaucoup d'équipes livrent le produit de Palier B et repoussent la revendication de Palier C derrière un financement.

## Lien avec l'ingénierie logicielle

L'ESF est le modèle de gouvernance le plus transposable de ce dépôt : **des exigences de preuves graduées selon le risque pour l'adoption d'outils**. Version interne : un formateur de code a besoin d'une démonstration (Palier A) ; un outil de productivité revendiquant des heures économisées a besoin d'un pilote mesuré (Palier B) ; une porte d'IA qui bloque automatiquement des déploiements ou écrit automatiquement du code clinique a besoin de preuves de niveau essai contrôlé avant un déploiement à l'échelle de l'organisation (Palier C). Des preuves proportionnées empêchent les deux dérives : la bureaucratie qui étouffe des outils triviaux, et le déploiement à l'instinct d'outils lourds de conséquences. Voir aussi [DiGA fast-track](../diga-fast-track/) pour le complément « adoption provisoire avec échéance de preuve ».

## Pièges

- **Mauvaise classification du palier par pensée magique** — les régulateurs et acheteurs classent selon ce que le produit *fait*, pas selon ce que dit le marketing.
- **Preuves construites après le produit** : greffer un essai randomisé sur un produit déjà livré, sans instrumentation ni équilibre clinique, est lent et souvent impossible.
- **Satisfaire l'ESF en oubliant le reste** : l'ESF coexiste avec le DTAC (sécurité clinique, protection des données, interopérabilité) et, pour l'IA, l'homologation réglementaire — voir [évaluation réglementaire de l'IA](../ai-regulatory-evaluation/).

## Sources

- NICE Evidence Standards Framework (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- Tableaux des normes de preuves de l'ESF. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
