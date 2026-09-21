# Évaluation des technologies de santé (Health Technology Assessment, HTA)

L'HTA est le processus formel et institutionnalisé par lequel les systèmes de santé décident si une technologie — médicament, dispositif ou logiciel — mérite d'être financée. Elle combine les preuves d'efficacité clinique avec une évaluation économique selon une méthodologie publiée et obligatoire.

## Pourquoi c'est important

Si vous vendez à un service de santé national, un organisme d'HTA peut littéralement décider de votre accès au marché. Connaître le processus local, c'est connaître votre véritable régulateur de la valeur :

- **NICE (Angleterre)** : évaluations statutaires selon un *cas de référence* défini — QALYs issus de l'[EQ-5D](../eq-5d/), [perspective](../analysis-perspective/) NHS+PSS, [actualisation](../discounting-and-time-preference/) à 3,5 %, [PSA](../probabilistic-sensitivity-analysis/) requise — jugées par rapport à un seuil de £20k–£30k/QALY avec [modificateurs de sévérité](../qaly-shortfall-and-severity-modifiers/) ; les technologies hautement spécialisées peuvent aller jusqu'à £100k+ avec pondération.
- **ICER (États-Unis, organisme non gouvernemental)** : rapports d'évaluation avec un *health-benefit price benchmark* — le prix auquel un produit serait coût-efficace à $100k–$150k par QALY/evLYG — utilisé comme levier de négociation ; plus des « alertes d'accessibilité » sur l'impact budgétaire.
- **Canada (CADTH → ACMTS)** : examens de remboursement à environ CAD$50k/QALY ; a historiquement demandé des baisses de prix dans ~95 % des soumissions.

## Le calcul

La puissance de l'HTA ne tient pas à une formule mais à une **méthode imposée** : chaque soumission calcule le même [ICER](../incremental-cost-effectiveness-ratio/) selon les mêmes règles du cas de référence, ce qui rend les résultats comparables entre produits et d'une année sur l'autre. Le cas de référence précise la mesure de résultat, l'instrument d'utilité, la perspective, le choix du comparateur, le taux d'actualisation, l'horizon temporel et l'analyse d'incertitude — supprimant tout degré de liberté qu'un promoteur pourrait exploiter.

## Exemple chiffré

Un thérapeutique numérique soumis à une évaluation de type NICE :

```
Modèle : ΔC = +£450/patient, ΔE = +0,03 QALY → ICER = £15 000/QALY ✓ sous £20k
Vérifications du cas de référence :
  utilités issues de l'EQ-5D-5L avec le barème de valeurs britannique  ✓
  comparateur = parcours de soins actuel (pas « aucun traitement »)    ✓
  PSA : 71 % de probabilité d'être coût-efficace à £20k                ✓ (rapporté)
  modificateur de sévérité : shortfall sous les bornes ×1,2            — non revendiqué
Recommandation : mise en œuvre courante, avec recueil de données en vie réelle.
```

L'analyse préférée par le promoteur lui-même montrait £9 000/QALY ; le cas de référence l'a poussée à £15 000 en imposant le comparateur honnête. Cet écart est *précisément* la raison d'être des cas de référence.

## Lien avec l'ingénierie logicielle

L'artefact transposable est le **cas de référence interne** : une méthode unique et imposée pour tous les dossiers d'affaires d'outillage/plateforme — comparateur déclaré, coûts unitaires standard (voir [tarif national et coûts unitaires](../national-tariff-and-unit-costs/) pour le modèle), taux d'actualisation fixe, analyse de sensibilité obligatoire, modèle standard. Un « dossier AMCP pour les outils » soumis à un comité de plateforme rend les propositions comparables et les manipulations visibles, exactement comme le fait l'HTA pour les médicaments. Commencez plus modestement que NICE : un modèle de deux pages plus un catalogue de prix publié valent mieux qu'aucune norme.

## Pièges

- **Traiter l'HTA comme une formalité après l'homologation réglementaire** — le marquage CE/UKCA/l'autorisation FDA dit qu'un produit est sûr ; l'HTA décide s'il *vaut la peine d'être acheté*. Obstacle différent, preuves différentes.
- **Construire le modèle économique après l'essai** — la production de preuves doit être conçue à rebours, à partir des exigences du cas de référence.
- **Ignorer les différences de juridiction** : un ICER finançable aux États-Unis à $120k/QALY échoue face à NICE à £30k ; planifiez preuves et tarification marché par marché.

## Sources

- NICE, health technology evaluations : le manuel (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
