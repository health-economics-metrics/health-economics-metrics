# Perspective d'analyse

La perspective définit *quels* coûts et bénéfices comptent dans une analyse économique : ceux du payeur, du prestataire, ou de la société dans son ensemble. Une même intervention peut sembler brillante depuis une perspective et désastreuse depuis une autre.

## Pourquoi c'est important

Toute évaluation économique doit déclarer sa perspective dès le départ, car celle-ci détermine quelles lignes de poste existent :

- **Perspective du payeur** (par ex. commissionnaire du NHS, assureur) : uniquement les coûts remboursés par le payeur.
- **Perspective du prestataire** (par ex. un trust hospitalier) : coûts de prestation internes, personnel, biens immobiliers.
- **Perspective sociétale** : tout — y compris le temps des patients, les déplacements, les soins informels par la famille, et les pertes de productivité pour les employeurs.

Le cas de référence du NICE utilise la perspective **NHS et services sociaux personnels (PSS)** pour les coûts. Le deuxième panel américain sur le rapport coût-efficacité recommande de rapporter à la fois une analyse du secteur de la santé et une analyse sociétale, avec un « inventaire d'impact » listant ce qui est inclus.

## Le calcul

Pas de formule — une règle de cadrage appliquée avant tout calcul :

```
Catégories de coût/bénéfice incluses = f(perspective)
```

Une vérification utile : construisez un tableau d'inventaire d'impact avec une ligne par coût/bénéfice et une colonne par perspective, et marquez quelles cellules comptent.

## Exemple chiffré

Une application de vérification des symptômes détourne 10 000 consultations chez le médecin généraliste par an vers l'auto-prise en charge.

- **Payeur (NHS)** : économise 10 000 × 42 £ par consultation de généraliste = **420 000 £/an** — nettement positif.
- **Prestataire (cabinet de médecine générale)** : si les cabinets sont payés à la capitation, leurs revenus sont inchangés mais la charge de travail diminue — légèrement positif.
- **Sociétal** : ajoutez le temps de déplacement et d'attente économisé par les patients, disons 10 000 × 2 heures × 15 £/heure = 300 000 £ de valeur temporelle ; mais soustrayez le préjudice si 2 % sont faussement rassurés et se présentent plus tard, plus malades, à 200 × 3 000 £ = 600 000 £ de traitement supplémentaire. Net sociétal : 420 000 + 300 000 − 600 000 = **120 000 £/an** — positif, mais dominé par l'hypothèse de sécurité.

Même application, trois réponses différentes. C'est la déclaration de la perspective qui rend les chiffres comparables et honnêtes.

## Lien avec l'ingénierie logicielle

Le ROI des outils et plateformes a lui aussi ses perspectives :

- **Budget d'équipe (« payeur »)** : les frais de licence tiennent-ils dans mon centre de coûts ?
- **Organisation plateforme (« prestataire »)** : coût total incluant intégration, support et maintenance.
- **Entreprise (« sociétal »)** : inclure l'impact client, les externalités de sécurité et le temps de chaque équipe concernée.

Un outil de CI bon marché pour l'équipe acheteuse mais qui reporte le travail de migration sur 40 autres équipes est la version logicielle du transfert de coût — visible uniquement depuis la perspective la plus large. Déclarez la perspective dans chaque dossier d'affaires ; les relecteurs ne peuvent pas contester des hypothèses qu'ils ne voient pas.

## Pièges

- **Changement silencieux de perspective** : compter les bénéfices sociétaux mais uniquement les coûts du payeur fait paraître n'importe quoi rentable.
- **Double comptage** lorsque les perspectives sont fusionnées (par ex. compter un rendez-vous chez le généraliste évité à la fois comme économie pour le payeur et comme économie de temps patient, alors que le chiffre du payeur inclut déjà le temps du personnel).
- **Ignorer le transfert de coût** : des « économies » qui ne font que déplacer le coût vers les patients, les aidants, ou un autre service.

## Sources

- Sanders GD, et al. « Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine. » JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE, manuel d'évaluation des technologies de santé (PMG36). <https://www.nice.org.uk/process/pmg36>
