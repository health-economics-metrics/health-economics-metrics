# Retour sur Investissement (ROI)

Le ROI est le ratio du gain net à l'argent investi. C'est la métrique que l'ingénierie et la finance partagent déjà — l'économie de la santé ajoute la discipline qui fait qu'une allégation de ROI survit à l'examen : perspective déclarée, comparateur, horizon et catégories de bénéfice.

## Pourquoi c'est important

Le ROI est la langue franque des détenteurs de budget, et la santé publique l'utilise aussi : la revue historique de Masters et al. a trouvé un **ROI médian de 14,3:1** pour les interventions de santé publique (chaque 1 £ rapporte ~14 £ à l'économie et au système de santé plus larges) — un chiffre largement utilisé pour argumenter en faveur des dépenses de prévention. Mais ce 14:1 est un chiffre *sociétal, à horizon long* ; le ROI d'un DAF de trust est en perspective payeur et sur 1-3 ans. La plupart des batailles de ROI sont en réalité des batailles de perspective non déclarée.

## Le calcul

```
ROI = (Bénéfices − Coûts) / Coûts      (souvent × 100 %)

Période de remboursement = Coûts / bénéfice net annuel
```

Une allégation de ROI est sous-spécifiée sans quatre déclarations :

1. **Perspective** — les bénéfices de qui comptent ? (voir [perspective d'analyse](../perspective-d-analyse/))
2. **Comparateur** — face à quelle alternative ? (voir [coût d'opportunité](../coût-d-opportunité/))
3. **Horizon** — sur combien de temps, et [actualisé](../actualisation-et-préférence-temporelle/) ?
4. **Classe de bénéfice** — libératrice de trésorerie, capacité, ou qualitative ? (voir [libérateur de trésorerie contre non libérateur](../économies-libératrices-de-trésorerie-contre-non-libératrices/))

## Exemple résolu

Système de planification électronique, coût 500 000 £ sur 3 ans.

```
Libère de la trésorerie :  réduction du personnel d'agence         450 000 £
Capacité :        temps admin de gestionnaire de service libéré 600 000 £ (tarifé, pas capitalisé)
Qualitatif :      satisfaction du personnel, sécurité    non monétisé

ROI financier strict  = (450 000 − 500 000)/500 000 = −10 %
ROI économique         = (1 050 000 − 500 000)/500 000 = +110 %
```

Les deux chiffres sont vrais. Un fournisseur citant « +110 % de ROI » à un DAF ne pouvant capitaliser que 450k£ perdra sa confiance ; présenter les deux, étiquetés, la gagne. La même répartition protège un défenseur interne lorsque la finance audite les bénéfices deux ans plus tard.

## Lien avec l'ingénierie logicielle

Toute proposition d'outil a une diapositive de ROI ; presque aucune ne déclare les quatre paramètres. L'échec le plus commun est le mélange de catégories : les gains de capacité (minutes de développeur) présentés comme un retour financier. Structurez le ROI IA/plateforme comme l'exemple résolu ci-dessus — ligne de trésorerie, ligne de capacité, ligne qualitative — et ajoutez une [analyse de sensibilité](../analyse-de-sensibilité/) sur les chiffres mous. Pour la vérification de réalité P&L sur le ROI de l'IA spécifiquement, voir [retour sur investissement de l'IA](../retour-sur-investissement-de-l-ia/).

## Pièges

- **Blanchiment de perspective** : bénéfices sociétaux sur une décennie cités à un détenteur de budget avec un horizon de 12 mois.
- **Brut au lieu de net** : « rapporte 3M£ » sur une dépense de 2M£ est 50 % de ROI, pas 300 %.
- **Maximisation de ratio** : de petits dénominateurs produisent des ROI spectaculaires sur des investissements triviaux ; classez les portefeuilles par VAN ou par [bénéfice monétaire net](../bénéfice-monétaire-net/), utilisez le ROI comme filtre.
- **Aucun audit de bénéfices** : un ROI prévu sans suivi de [réalisation des bénéfices](../réalisation-des-bénéfices/) est une promesse, pas un résultat.

## Sources

- Masters R, et al. "Return on investment of public health interventions: a systematic review." J Epidemiol Community Health 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
- HM Treasury Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
