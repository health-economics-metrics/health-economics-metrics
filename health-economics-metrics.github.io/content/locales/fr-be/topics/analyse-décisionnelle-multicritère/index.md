# Analyse décisionnelle multicritère (MCDA)

L'analyse décisionnelle multicritère (MCDA) est un modèle de notation par somme pondérée utilisé dans l'évaluation des technologies de santé lorsqu'un seuil unique d'ICER/disposition à payer ne saisit pas tout ce qui compte pour le décideur : équité, besoin non satisfait, innovation, impact budgétaire, gravité de la maladie. Chaque critère reçoit un poids reflétant son importance (obtenu auprès des parties prenantes, de somme 1), chaque option reçoit une note normalisée par critère (généralement de 0 à 1) et la note totale est la somme pondérée — la même forme mathématique qu'une grille de notation d'évaluation de fournisseurs de logiciels.

## Pourquoi c'est important

La MCDA est utilisée dans des cadres comme EVIDEM et dans certaines agences d'ETS pour les médicaments orphelins/maladies rares, où l'approche stricte par seuil de coût par QALY est jugée trop étroite pour saisir tout ce qui compte pour la décision. Le groupe de travail ISPOR MCDA Emerging Good Practices Task Force a formalisé de bonnes pratiques pour obtenir des poids et des notes défendables, précisément parce qu'une décision pondérée informelle est facile à construire et facile à manipuler. Lorsqu'une technologie de santé a des dimensions de valeur qu'un seul [seuil de disposition à payer](../seuils-de-disposition-à-payer/) ne peut pas représenter — gravité, innovation, équité —, la MCDA donne aux décideurs une structure explicite et auditable pour les combiner, au lieu d'un jugement non dit.

## Le calcul

```
Score MCDA = Σ_i (poids_i × note_i)

les poids devraient sommer à 1 (obtenus par des méthodes impliquant les
parties prenantes comme le swing weighting ou l'Analytic Hierarchy Process)
```

## Exemple chiffré

Un comité d'ETS évalue une thérapie numérique selon quatre critères :

```
Critère                              Poids    Note   Poids × Note
Bénéfice clinique                    0.4      0.8    0.32
Impact sur les coûts                 0.3      0.5    0.15
Gravité / besoin non satisfait       0.2      0.9    0.18
Innovation                           0.1      0.6    0.06
                                     ─────           ─────
                                     1.0             0.71
```

Les poids somment à 1,0 (0,4 + 0,3 + 0,2 + 0,1) et le score MCDA est de 0,71 (0,32 + 0,15 + 0,18 + 0,06). Le comité compare 0,71 à un seuil convenu à l'avance, ou le classe face à des technologies concurrentes notées de la même façon.

## Lien avec l'ingénierie logicielle

C'est exactement la même mathématique qu'une grille de notation pondérée de sélection de fournisseurs, une matrice d'évaluation de RFP ou un modèle de notation pour la priorisation de fonctionnalités — voir [Construire ou acheter](../construire-ou-acheter/) pour l'usage classique de la grille de notation pondérée dans l'achat de logiciels. Elle mérite aussi d'être mise en regard de [WSJF et CD3](../wsjf-et-cd3/) : WSJF/CD3 est une méthode de priorisation fondée sur un *ratio* (coût du retard divisé par la taille ou la durée du travail), alors que la MCDA est une *somme* pondérée. MCDA et WSJF/CD3 sont deux réponses structurellement différentes à la question « comment classe-t-on des options concurrentes ? », et savoir laquelle une décision donnée exige réellement — une valeur agrégée sur des critères indépendants, ou une densité de valeur par unité de capacité rare — compte plus que la formule qui paraît la plus rigoureuse.

## Pièges

- **Biais d'obtention des poids** : celui qui fixe les poids détermine pratiquement le classement à l'avance, de sorte que la « formule » peut blanchir une décision politique ou commerciale en calcul d'apparence objective. Documenter qui a fixé les poids et comment.
- **Double comptage d'un critère déjà couvert ailleurs** : noter le « coût-efficacité » comme critère *et* noter séparément l'« impact sur les coûts » surpondère l'argent par rapport aux autres critères, sans que personne l'ait voulu.
- **Fausse précision** : un score pondéré à deux décimales (0,71) suggère plus de rigueur que ne le permettent réellement les évaluations des parties prenantes sur une échelle de 0 à 10, et la variabilité inter-évaluateurs de ces évaluations n'est souvent pas rapportée du tout.

## Sources

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
