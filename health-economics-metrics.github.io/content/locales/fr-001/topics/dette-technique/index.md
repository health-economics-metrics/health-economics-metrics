# Dette Technique

La dette technique est le coût futur implicite de décisions passées expéditives dans une base de code : le travail de remédiation dû (le **principal**) et le frein continu qu'il exerce sur la livraison (l'**intérêt**). Des méthodes de quantification comme SQALE la transforment d'une métaphore en un passif chiffré.

## Pourquoi c'est important

Non quantifiée, la dette technique est une plainte ; quantifiée, c'est un dossier de décision. Les lignes de base de l'industrie (CAST Appmarq, 1 400 applications / 550M LOC) : historiquement ≈ **3,61$ de principal de dette technique par ligne de code**, avec des bases de code typiques portant un ratio de dette de 15-20 % du coût de reconstruction, contre une barre de santé couramment utilisée de ≤5 % (le grade « A » de SonarQube). Le cadre de l'économie de la santé s'ajuste précisément : la dette est une *condition chronique* — non traitée, elle progresse, son « intérêt » se compose en livraison plus lente et taux de défauts plus élevés, et la remédiation entre en concurrence pour la capacité avec le travail de fonctionnalités exactement comme la prévention entre en concurrence avec le traitement.

## Le calcul

```
Principal SQALE   = Σ sur les violations (temps de remédiation) × taux de coût du développeur
Ratio de dette technique (RDT) = coût de remédiation / coût de redéveloppement × 100
                    (grades SonarQube : A ≤ 5 %, B ≤ 10 %, C ≤ 20 %, D ≤ 50 %)

Intérêt (le chiffre qui justifie le remboursement) :
  intérêt/an = Δ vitesse de livraison × valeur par unité de vitesse
                + Δ taux de défauts × coût par défaut
Dossier de remboursement  = VA(intérêt évité sur l'horizon) − coût de remédiation
                (actualisé — voir discounting-and-time-preference.md)
```

Le principal énonce le passif ; l'**intérêt** fait le dossier d'investissement. Rembourser 500k£ de principal pour éviter 40k£/an d'intérêt est une mauvaise affaire ; pour éviter 400k£/an, excellente.

## Exemple résolu

Une couche d'intégration de dossiers cliniques de 400k LOC : principal SQALE 3 800 heures × 75 £ = **285k£** ; RDT ≈ 12 % (grade C). Intérêt mesuré : les équipes touchant cette couche montrent des temps de cycle 40 % plus longs et des taux d'échec de changement 2× par rapport à la ligne de base du parc. La couche absorbe 6 000 heures-dév/an :

```
Intérêt ≈ 6 000 × 0,40 × 75 £      = 180 000 £/an (frein de vitesse)
         + 12 échecs supplémentaires × 8 000 £ = 96 000 £/an (retravail/incidents)
         ≈ 276 000 £/an

Remédiez le pire 30 % du principal (85k£) en ciblant les points chauds → réduction
d'intérêt modélisée de 60 % : économise ~166k£/an. Remboursement ≈ 6 mois.
```

Le ciblage de points chauds compte : l'intérêt de dette se concentre là où la fréquence de changement × densité de dette atteint son pic — remédier une dette rarement touchée n'achète rien, comme traiter une condition qui n'aurait jamais progressé ([économie de la prévention](../économie-de-la-prévention/)).

## Lien avec l'ingénierie logicielle

Les importations d'économie de la santé qui améliorent les arguments de dette technique : exprimez le parc comme un **inventaire de fardeau** (style [AVCI](../année-de-vie-corrigée-du-facteur-invalidité/) — où sont les années-ingénieur saines perdues ?) ; justifiez le remboursement avec des mathématiques de progression, honnêtement (habituellement coût-efficace, pas coût-économique) ; pondérez la remédiation des pires systèmes par le [déficit de sévérité](../déficit-de-qaly-et-modulateurs-de-sévérité/) ; et soumettez les grandes propositions de remédiation avec une analyse de compensation qui survit aux règles des [coûts évités en aval](../coûts-évités-en-aval/) — pondérées par probabilité, actualisées, comptées une fois.

## Pièges

- **Rapport uniquement du principal** : un gros chiffre effrayant sans estimation d'intérêt ne justifie rien.
- **Chiffres de dette générés par outil pris littéralement** : SQALE compte les violations de règles ; il rate la dette architecturale (le type coûteux) et compte des trivialités.
- **Utopisme de dette zéro** : le niveau de dette optimal n'est pas zéro — la dette est du levier ; la question est le taux d'intérêt.
- **« La réécriture évite tout ça »** : les propositions de réécriture doivent franchir les mêmes règles de compensation — coût contrefactuel, probabilité, actualisation.

## Sources

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
