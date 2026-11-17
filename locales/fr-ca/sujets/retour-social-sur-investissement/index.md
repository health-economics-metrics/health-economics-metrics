# Retour Social sur Investissement (RSI)

Le RSI étend le [ROI](../retour-sur-investissement/) aux résultats que les marchés ne tarifient pas — bien-être, connexion sociale, impact environnemental — en les monétisant avec des proxys financiers, pour *toutes* les parties prenantes affectées.

## Pourquoi c'est important

Une grande partie de ce que produisent les interventions de santé et communautaires ne touche jamais une ligne budgétaire : solitude réduite, répit des aidants, gains d'emploi, dignité. Le RSI, gouverné par les sept principes de Social Value International (impliquer les parties prenantes, valoriser ce qui compte, ne pas surévaluer, être transparent, vérifier…), produit des déclarations comme « 3,20 £ de valeur sociale par 1 £ investie ». Les exigences de valeur sociale des marchés publics britanniques rendent les preuves de style RSI commercialement pertinentes : les offres pour des contrats publics (y compris le NHS) marquent des points pour une valeur sociale démontrée.

## Le calcul

```
Ratio RSI = VA(résultats sociaux monétisés) / VA(investissement)

Pour chaque résultat :
  valeur = quantité × proxy financier × attribution × (1 − poids mort) × (1 − déplacement)

poids mort   = se serait produit de toute façon
attribution  = part causée par d'autres
déplacement = bénéfice déplacé d'ailleurs plutôt que créé
dégradation  = décroissance du résultat au fil des années
```

Les facteurs d'ajustement sont l'intégrité de la méthode : sans eux, le RSI est de la fiction avec un signe monétaire.

## Exemple résolu

Une application de compagnonnage connectant des personnes âgées isolées à des bénévoles ; coût du programme 200 000 £/an ; 1 500 paires actives.

```
Résultat : solitude réduite pour 1 500 personnes
  proxy : valorisation de bien-être de « soulagement de la solitude » ≈ 1 800 £/personne/an
  poids mort 25 % (certains auraient trouvé une connexion de toute façon)
  attribution 80 % (une partie du crédit revient à d'autres services)

Valeur = 1 500 × 1 800 × 0,80 × 0,75 = 1 620 000 £

Résultat : moins de visites chez le médecin traitant, 1 500 × 1,2 visites × 42 £ = 75 600 £ (réel pour le payeur)

RSI = (1 620 000 + 75 600) / 200 000 ≈ 8,5 : 1
```

Notez que le ratio est 96 % de bien-être tarifé par proxy et 4 % de trésorerie dure. C'est un RSI légitime — mais il doit être présenté comme de la valeur sociale, jamais en laissant entendre que 1,7M£ est capitalisable.

## Lien avec l'ingénierie logicielle

Le RSI est le cadre honnête pour le travail d'ingénierie dont les bénéficiaires sont hors de l'équipe payante : maintenance de l'open source, améliorations d'accessibilité, travail de plateforme consommé par d'autres équipes, investissement dans la communauté de développeurs. La mécanique transférable : identifiez toutes les parties prenantes, monétisez avec des proxys déclarés, et appliquez des décotes de poids mort/attribution (cette correction OSS se serait-elle produite de toute façon ? combien du gain est votre travail contre celui de l'écosystème ?). La discipline consistant à *décoter ses propres allégations d'impact* est ce qui sépare le RSI d'un chiffre marketing.

## Pièges

- **Magasinage de proxy** : choisir la valorisation de bien-être la plus généreuse disponible.
- **Sauter le poids mort/l'attribution** — l'inflation la plus commune, doublant souvent le ratio.
- **Comparaison de ratios entre études** : les ratios RSI sont sensibles à la méthode ; comparez uniquement au sein d'un cadre cohérent.
- **Présenter la valeur sociale comme des économies capitalisables** à un détenteur de budget.

## Sources

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
