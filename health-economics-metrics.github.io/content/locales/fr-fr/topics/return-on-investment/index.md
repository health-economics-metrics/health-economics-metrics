# Retour sur investissement (ROI)

Le ROI est le ratio entre le gain net et l'argent investi. C'est une mesure déjà partagée par l'ingénierie et la finance — l'économie de la santé y ajoute la rigueur qui permet à une affirmation de ROI de résister à l'examen : perspective déclarée, comparateur, horizon et catégories de bénéfices.

## Pourquoi c'est important

Le ROI est la langue commune des détenteurs de budget, et la santé publique s'en sert également : la revue de référence de Masters et al. a établi un **ROI médian de 14,3:1** pour les interventions de santé publique (chaque 1 £ investie rapporte environ 14 £ à l'économie et au système de santé au sens large) — un chiffre largement utilisé pour défendre les dépenses de prévention. Mais ce 14:1 est un chiffre *sociétal, à long horizon* ; le ROI d'un directeur financier hospitalier est une perspective payeur, à 1–3 ans. La plupart des désaccords sur le ROI sont en réalité des désaccords sur une perspective non déclarée.

## Le calcul

```
ROI = (Bénéfices − Coûts) / Coûts      (souvent × 100 %)

Période de retour sur investissement = Coûts / bénéfice net annuel
```

Une affirmation de ROI est sous-spécifiée sans quatre déclarations :

1. **Perspective** — les bénéfices de qui comptent ? (voir [perspective d'analyse](../analysis-perspective/))
2. **Comparateur** — par rapport à quelle alternative ? (voir [coût d'opportunité](../opportunity-cost/))
3. **Horizon** — sur quelle durée, et [actualisé](../discounting-and-time-preference/) comment ?
4. **Catégorie de bénéfice** — libérant de la trésorerie, de capacité, ou qualitatif ? (voir [libérant de la trésorerie vs ne libérant pas de trésorerie](../cash-releasing-vs-non-cash-releasing/))

## Exemple chiffré

Système de gestion des plannings automatisée (e-rostering), coût 500 000 £ sur 3 ans.

```
Libérant de la trésorerie : réduction des vacations d'intérim   450 000 £
Capacité :                  temps administratif libéré pour les
                             cadres de soins                    600 000 £ (valorisé, non encaissé)
Qualitatif :                satisfaction du personnel, sécurité  non monétisé

ROI financier strict   = (450 000 − 500 000)/500 000 = −10 %
ROI économique          = (1 050 000 − 500 000)/500 000 = +110 %
```

Les deux chiffres sont vrais. Un fournisseur qui annonce « +110 % de ROI » à un directeur financier qui ne peut encaisser que 450 k£ perdra sa confiance ; présenter les deux chiffres, clairement étiquetés, la gagne. La même distinction protège un porteur de projet interne lorsque les finances auditent les bénéfices deux ans plus tard.

## Lien avec l'ingénierie logicielle

Chaque proposition d'outillage a sa diapositive de ROI ; presque aucune ne déclare les quatre paramètres. L'erreur la plus fréquente est le mélange de catégories : des gains de capacité (minutes de développeur) présentés comme un retour financier. Il faut structurer le ROI d'une IA ou d'une plateforme comme dans l'exemple ci-dessus — une ligne trésorerie, une ligne capacité, une ligne qualitative — et ajouter une [analyse de sensibilité](../sensitivity-analysis/) sur les chiffres les plus incertains. Pour l'épreuve de réalité du compte de résultat appliquée spécifiquement au ROI de l'IA, voir [retour sur investissement de l'IA](../ai-return-on-investment/).

## Pièges

- **Blanchiment de perspective** : des bénéfices sociétaux sur une décennie cités à un détenteur de budget qui a un horizon de 12 mois.
- **Brut au lieu de net** : « rapporte 3 M£ » pour une dépense de 2 M£, c'est un ROI de 50 %, pas de 300 %.
- **Maximisation du ratio** : de tout petits dénominateurs produisent des ROI spectaculaires sur des investissements triviaux ; il faut classer les portefeuilles par VAN ou par [bénéfice monétaire net](../net-monetary-benefit/), et utiliser le ROI comme filtre.
- **Absence d'audit des bénéfices** : un ROI prévisionnel sans suivi de la [réalisation des bénéfices](../benefits-realization/) est une promesse, pas un résultat.

## Sources

- Masters R, et al. « Return on investment of public health interventions: a systematic review. » J Epidemiol Community Health 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
- HM Treasury Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
