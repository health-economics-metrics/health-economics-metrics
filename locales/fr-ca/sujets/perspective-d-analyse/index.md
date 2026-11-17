# Perspective d'Analyse

La perspective définit *dont* les coûts et bénéfices comptent dans une analyse économique : ceux du payeur, du prestataire, ou de la société dans son ensemble. La même intervention peut sembler brillante d'une perspective et terrible d'une autre.

## Pourquoi c'est important

Toute évaluation économique doit déclarer sa perspective au préalable, car la perspective détermine quelles lignes existent :

- **Perspective du payeur** (par ex. commanditaire NHS, assureur) : uniquement les coûts remboursés par le payeur.
- **Perspective du prestataire** (par ex. un trust hospitalier) : coûts internes de prestation, personnel, immobilier.
- **Perspective sociétale** : tout — y compris le temps du patient, les déplacements, les soins informels par la famille et les pertes de productivité pour les employeurs.

Le cas de référence de NICE utilise la perspective **NHS et Services Sociaux Personnels (PSS)** pour les coûts. Le Second Panel américain sur le rapport coût-efficacité recommande de rapporter à la fois une analyse du secteur de la santé et une analyse sociétale avec un « inventaire d'impact » listant ce qui est inclus.

## Le calcul

Pas de formule — une règle de périmètre appliquée avant tout calcul :

```
Catégories de coûts/bénéfices incluses = f(perspective)
```

Une vérification utile : construisez un tableau d'inventaire d'impact avec une ligne par coût/bénéfice et une colonne par perspective, et marquez quelles cellules comptent.

## Exemple résolu

Une application de vérification des symptômes détourne 10 000 consultations de médecin traitant par an vers l'autosoin.

- **Payeur (NHS)** : économise 10 000 × 42 £ par consultation de médecin traitant = **420 000 £/an** — fortement positif.
- **Prestataire (cabinet de médecine générale)** : si les cabinets sont payés à la capitation, leur revenu ne change pas mais la charge de travail baisse — légèrement positif.
- **Sociétal** : ajoutez le temps de déplacement et d'attente économisé aux patients, disons 10 000 × 2 heures × 15 £/heure = 300 000 £ de valeur temporelle ; mais retranchez le préjudice si 2 % sont faussement rassurés et se présentent plus tard, plus malades, à 200 × 3 000 £ = 600 000 £ de traitement supplémentaire. Net sociétal : 420 000 + 300 000 − 600 000 = **120 000 £/an** — positif, mais dominé par l'hypothèse de sécurité.

Même application, trois réponses différentes. La déclaration de la perspective est ce qui rend les chiffres comparables et honnêtes.

## Lien avec l'ingénierie logicielle

Le ROI des outils et plateformes a aussi des perspectives :

- **Budget de l'équipe (« payeur »)** : le tarif de licence tient-il dans mon centre de coûts ?
- **Organisation de plateforme (« prestataire »)** : coût total incluant l'intégration, le support et la maintenance.
- **Entreprise (« sociétal »)** : inclut l'impact client, les externalités de sécurité et le temps de chaque équipe affectée.

Un outil de CI bon marché pour l'équipe acheteuse mais qui pousse le travail de migration vers 40 autres équipes est la version logicielle du transfert de coûts — visible seulement depuis la perspective la plus large. Déclarez la perspective dans chaque dossier de décision ; les relecteurs ne peuvent pas contester des hypothèses qu'ils ne voient pas.

## Pièges

- **Changement silencieux de perspective** : compter les bénéfices sociétaux mais seulement les coûts du payeur fait paraître n'importe quoi coût-efficace.
- **Double comptage** lorsque les perspectives sont fusionnées (par ex. compter un rendez-vous de médecin traitant économisé à la fois comme économie du payeur et comme économie de temps du patient alors que le chiffre du payeur inclut déjà le temps du personnel).
- **Ignorer le transfert de coûts** : des « économies » qui déplacent simplement le coût vers les patients, les aidants ou un autre service.

## Sources

- Sanders GD, et al. "Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine." JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
