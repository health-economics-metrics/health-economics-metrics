# Dette technique

La dette technique est le coût futur implicite de décisions passées prises par commodité dans une base de code : le travail de remédiation dû (le **principal**) et le frein continu qu'elle exerce sur la livraison (les **intérêts**). Les méthodes de quantification comme SQALE la transforment de métaphore en passif chiffré.

## Pourquoi c'est important

Non quantifiée, la dette technique est une plainte ; quantifiée, c'est un dossier d'affaires. Repères sectoriels (CAST Appmarq, 1 400 applications / 550 M lignes de code) : historiquement, environ **3,61 $ de principal de dette technique par ligne de code**, avec des bases de code typiques portant un taux d'endettement de 15–20 % du coût de reconstruction, contre un seuil de bonne santé couramment retenu de ≤5 % (la note « A » de SonarQube). Le cadre de l'économie de la santé s'applique presque parfaitement : la dette est une *maladie chronique* — non traitée, elle progresse, ses « intérêts » se composent sous forme de livraisons plus lentes et de taux de défauts plus élevés, et la remédiation entre en concurrence avec le travail de fonctionnalités pour la capacité, exactement comme la prévention est en concurrence avec le traitement.

## Le calcul

```
Principal SQALE   = Σ sur les violations (temps de remédiation) × taux de coût du développeur
Taux d'endettement technique (TDR) = coût de remédiation / coût de redéveloppement × 100
                    (notes SonarQube : A ≤ 5 %, B ≤ 10 %, C ≤ 20 %, D ≤ 50 %)

Intérêts (le chiffre qui justifie le remboursement) :
  intérêts/an = Δ vélocité de livraison × valeur par unité de vélocité
              + Δ taux de défauts × coût par défaut
Dossier de remboursement = VA(intérêts évités sur l'horizon) − coût de remédiation
                (actualisé — voir discounting-and-time-preference.md)
```

Le principal énonce le passif ; ce sont les **intérêts** qui font le dossier d'investissement. Payer 500 k£ de principal pour éviter 40 k£/an d'intérêts est un mauvais échange ; pour en éviter 400 k£/an, c'est excellent.

## Exemple chiffré

Une couche d'intégration de dossiers cliniques de 400 000 lignes de code : principal SQALE 3 800 heures × 75 £ = **285 k£** ; TDR ≈ 12 % (note C). Intérêts mesurés : les équipes touchant cette couche affichent des temps de cycle 40 % plus longs et un taux d'échec de changement 2× plus élevé que la référence du parc applicatif. La couche absorbe 6 000 heures-développeur/an :

```
Intérêts ≈ 6 000 × 0,40 × 75 £        = 180 000 £/an (frein de vélocité)
         + 12 échecs supplémentaires × 8 000 £ = 96 000 £/an (reprise/incidents)
         ≈ 276 000 £/an

Rembourser les 30 % pires du principal (85 k£) en ciblant les points chauds →
réduction des intérêts modélisée à 60 % : économise ~166 k£/an. Retour sur
investissement ≈ 6 mois.
```

Le ciblage des points chauds compte : les intérêts de la dette se concentrent là où fréquence de changement × densité de dette culmine — rembourser une dette rarement touchée n'achète rien, comme traiter une maladie qui n'aurait jamais progressé ([économie de la prévention](../prevention-economics/)).

## Lien avec l'ingénierie logicielle

Les importations de l'économie de la santé qui améliorent les arguments de dette technique : exprimer le parc applicatif comme un **inventaire de charge de morbidité** (à la manière [DALY](../disability-adjusted-life-year/) — où sont les années-ingénieur en bonne santé perdues ?) ; justifier le remboursement avec des mathématiques de progression, honnêtement (généralement coût-efficace, pas générateur d'économies) ; pondérer la remédiation des pires systèmes par le [déficit de sévérité](../qaly-shortfall-and-severity-modifiers/) ; et soumettre les grandes propositions de remédiation avec une analyse de compensation qui respecte les règles des [coûts aval évités](../avoided-downstream-costs/) — pondérée par la probabilité, actualisée, comptée une seule fois.

## Pièges

- **Rapporter uniquement le principal** : un gros chiffre effrayant sans estimation des intérêts ne justifie rien.
- **Prendre au pied de la lettre les chiffres de dette générés par un outil** : SQALE compte les violations de règles ; il manque la dette architecturale (la plus coûteuse) et compte des détails triviaux.
- **L'utopie de la dette zéro** : le niveau de dette optimal n'est pas zéro — la dette est un levier ; la question est le taux d'intérêt.
- **« La réécriture évite tout cela »** : les propositions de réécriture doivent respecter les mêmes règles de compensation — coût contrefactuel, probabilité, actualisation.

## Sources

- CAST, estimation de la dette technique. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, « The SQALE method for evaluating Technical Debt. » <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
