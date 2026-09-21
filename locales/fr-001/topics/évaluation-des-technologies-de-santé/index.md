# Évaluation des Technologies de Santé (ETS)

L'ETS est le processus formel et institutionnalisé par lequel les systèmes de santé décident si une technologie — médicament, dispositif ou logiciel — mérite d'être payée. Elle combine des preuves d'efficacité clinique avec une évaluation économique selon une méthodologie publiée et obligatoire.

## Pourquoi c'est important

Si vous vendez à un système de santé national, un organisme d'ETS peut littéralement décider de votre accès au marché. Connaître le processus local, c'est connaître votre véritable régulateur de valeur :

- **NICE (Angleterre)** : évaluations statutaires selon un *cas de référence* défini — QALY issus de l'[EQ-5D](../eq-5d/), [perspective](../perspective-d-analyse/) NHS+PSS, [actualisation](../actualisation-et-préférence-temporelle/) à 3,5 %, [ASP](../analyse-de-sensibilité-probabiliste/) requise — jugées face à 20 000-30 000 £/QALY avec [modulateurs de sévérité](../déficit-de-qaly-et-modulateurs-de-sévérité/) ; technologies hautement spécialisées jusqu'à 100 000 £+ avec pondération.
- **ICER (États-Unis, non gouvernemental)** : rapports de preuves avec un *repère de prix de bénéfice de santé* — le prix auquel un produit serait coût-efficace à 100 000-150 000 $ par QALY/evLYG — utilisé comme levier de négociation ; plus des « alertes d'accessibilité financière » d'impact budgétaire.
- **Canada (CADTH → CDA-AMC)** : revues de remboursement à environ 50 000 $ CAD/QALY ; a historiquement demandé des réductions de prix dans ~95 % des soumissions.

## Le calcul

Le pouvoir de l'ETS n'est pas une formule mais une **méthode obligatoire** : chaque soumission calcule le même [RCEI](../ratio-coût-efficacité-incrémental/) selon les mêmes règles de cas de référence, de sorte que les résultats sont comparables entre produits et années. Le cas de référence spécifie la mesure de résultat, l'instrument d'utilité, la perspective, la sélection du comparateur, le taux d'actualisation, l'horizon temporel et l'analyse d'incertitude — éliminant chaque degré de liberté qu'un promoteur pourrait manipuler.

## Exemple résolu

Une thérapeutique numérique est soumise à une évaluation de style NICE :

```
Modèle : ΔC = +450 £/patient, ΔE = +0,03 QALY → RCEI = 15 000 £/QALY ✓ sous 20k
Vérifications du cas de référence :
  utilités issues de l'EQ-5D-5L avec ensemble de valeurs du Royaume-Uni              ✓
  comparateur = parcours de soins actuel (pas « aucun traitement ») ✓
  ASP : 71 % de probabilité coût-efficace à 20k£            ✓ (rapporté)
  modulateur de sévérité : déficit sous les limites de ×1,2         — aucun revendiqué
Recommandation : commissionnement de routine, avec collecte de données en conditions réelles.
```

L'analyse préférée du promoteur lui-même montrait 9 000 £/QALY ; le cas de référence l'a poussée à 15 000 £ en forçant le comparateur honnête. Cet écart est *pourquoi* les cas de référence existent.

## Lien avec l'ingénierie logicielle

L'artefact transférable est le **cas de référence interne** : une méthode obligatoire pour tous les dossiers de décision d'outillage/plateforme — comparateur déclaré, coûts unitaires standards (voir [tarif national et coûts unitaires](../tarif-national-et-coûts-unitaires/) pour le modèle), taux d'actualisation fixe, analyse de sensibilité requise, modèle standard. Un « dossier style AMCP pour outils » soumis à un conseil de plateforme rend les propositions comparables et la manipulation visible, exactement comme le fait l'ETS pour la médecine. Commencez plus petit que ne l'a fait NICE : un modèle de deux pages plus un catalogue de prix publié bat l'absence totale de norme.

## Pièges

- **Traiter l'ETS comme une formalité après l'homologation réglementaire** — l'homologation CE/UKCA/FDA dit qu'un produit est sûr ; l'ETS décide s'il *vaut la peine d'être acheté*. Obstacle différent, preuve différente.
- **Construire le modèle économique après l'essai** — la génération de preuves devrait être conçue à rebours à partir des exigences du cas de référence.
- **Ignorer les différences de juridiction** : un RCEI finançable aux États-Unis à 120 000 $/QALY échoue chez NICE à 30 000 £ ; planifiez les preuves et la tarification par marché.

## Sources

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Agence des médicaments du Canada (CDA-AMC). <https://www.cda-amc.ca/>
