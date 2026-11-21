# Comparaison de l'ICER entre devises

Comparer un [ICER](../ratio-coût-efficacité-incrémental/) calculé dans la monnaie d'un pays au [seuil de disposition à payer](../seuils-de-disposition-à-payer/) d'un autre, ou agréger des données de coûts recueillies dans un essai multinational, exige une étape de conversion monétaire explicite et auditable. Choisir la mauvaise méthode de conversion peut inverser la décision d'adoption à partir des mêmes preuves, alors même que les données cliniques ou de coûts n'ont pas changé.

## Pourquoi c'est important

Les lignes directrices méthodologiques de l'ISPOR pour les essais cliniques multinationaux (Willke et al., *Health Economics*, 1998) recommandent de convertir les coûts des ressources avec la **parité de pouvoir d'achat (PPA)** — et non le taux de change du marché — lorsqu'on compare la valeur économique réelle des ressources entre pays, et de réserver le taux de change du marché à son véritable usage : modéliser des flux de trésorerie transfrontaliers réels. Confondre les deux est l'une des erreurs méthodologiques les plus courantes en ETS multinationale, car pour qui n'a pas lu les lignes directrices, les deux ressemblent à « un taux de change », et le tableur n'empêchera pas de se tromper.

## Le calcul

```
icer_en_devise_locale = convertir(icer_en_devise_source, facteur_de_conversion)

le facteur_de_conversion doit être :
  facteur de conversion PPA   — pour comparer la valeur économique réelle des
                                ressources entre pays (recommandation de l'ISPOR
                                pour la CEA multinationale)
  taux de change du marché    — uniquement pour de véritables paiements en
                                numéraire transfrontaliers

adopter si icer_en_devise_locale < seuil_local
```

La règle de décision est la [règle de l'ICER](../seuils-de-disposition-à-payer/) habituelle — `adopter si ICER < λ` — ; la question méthodologique de ce sujet est de savoir *quel facteur de conversion* produit l'`icer_en_devise_locale` auquel cette règle s'applique.

## Exemple chiffré

Un médicament a un ICER issu d'un essai américain de 45 000 $/QALY. Un pays importateur hypothétique a fixé son propre seuil composite à 34 000 £/QALY (chiffre hypothétique propre au pays, pour cet exemple seulement ; les seuils réels varient selon les pays et changent avec le temps, et doivent toujours citer source et date).

**Avec un facteur de conversion PPA de 0,72** (chiffre illustratif pour cet exemple seulement) : 45 000 $ × 0,72 = 32 400 £/QALY. 32 400 £ < 34 000 £ → **adopter**.

**Avec le taux de change du marché de 0,79** (chiffre illustratif) : 45 000 $ × 0,79 = 35 550 £/QALY. 35 550 £ > 34 000 £ → **rejeter**.

Le même ICER de 45 000 $/QALY donne une décision d'adoption quand on convertit par la PPA et une décision de rejet quand on convertit au taux du marché. C'est une illustration concrète de la raison pour laquelle les lignes directrices de l'ISPOR jugent le choix du facteur de conversion important sur le plan méthodologique : ce n'est pas un détail d'arrondi, ni quelque chose qu'on laisse implicite dans la formule d'un tableur que personne ne relit.

## Lien avec l'ingénierie logicielle

C'est le pendant, en économie de la santé, d'un problème d'ingénierie bien connu : la justesse de la tarification multidevise i18n/l10n dans les logiciels commerciaux, où une page de tarifs SaaS ne doit pas comparer en silence un montant en `$` à un prix en `£`. La garantie au niveau du type qu'offre un type `Money` bien conçu — une méthode de comparaison qui refuse de comparer des devises différentes et impose d'abord une conversion explicite — est le parallèle direct, en ingénierie logicielle, du point méthodologique d'économie de la santé : ne comparez pas des chiffres non convertis entre devises, et ne laissez pas l'étape de conversion implicite ou non documentée.

## Pièges

- **Comparer en silence des montants de devises différentes** : un travail d'ETS ad hoc dans un tableur qui soustrait ou compare des chiffres en dollars à des chiffres en livres sans conversion préalable, le genre de bogue qu'un type `Money` conscient de la devise attrape structurellement plutôt que de le laisser en erreur silencieuse.
- **Confondre taux de change du marché et PPA** : l'erreur méthodologique la plus courante en ETS multinationale selon les lignes directrices de l'ISPOR ; les deux chiffres peuvent différer fortement et répondent à des questions différentes (valeur économique réelle contre flux de trésorerie réel).
- **Ne pas dater le taux de change ou l'indice de PPA utilisé** : les deux évoluent avec le temps, donc chaque facteur de conversion cité doit être daté, comme ce dépôt date ses autres chiffres de référence (prix du carbone du Green Book, valeur d'un décès évité, etc.).

## Sources

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
