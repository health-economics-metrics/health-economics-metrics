# Retour social sur investissement (SROI)

Le SROI étend le [ROI](../return-on-investment/) aux résultats que les marchés ne tarifient pas — bien-être, lien social, impact environnemental — en les monétisant à l'aide de proxys financiers, pour *toutes* les parties prenantes concernées.

## Pourquoi c'est important

Une grande partie de ce que produisent les interventions de santé et communautaires ne touche jamais une ligne budgétaire : réduction de l'isolement, répit pour les aidants, gains en emploi, dignité. Le SROI, encadré par les sept principes de Social Value International (impliquer les parties prenantes, valoriser ce qui compte, ne pas surestimer, être transparent, vérifier…), produit des énoncés du type « 3,20 £ de valeur sociale par £ investie ». Les exigences de valeur sociale des marchés publics britanniques rendent les preuves de type SROI commercialement pertinentes : les offres pour des contrats publics (y compris le NHS) marquent des points pour la valeur sociale démontrée.

## Le calcul

```
Ratio SROI = VA(résultats sociaux monétisés) / VA(investissement)

Pour chaque résultat :
  valeur = quantité × proxy financier × attribution × (1 − effet d'aubaine) × (1 − déplacement)

effet d'aubaine (deadweight) = ce qui se serait produit de toute façon
attribution                  = part causée par d'autres acteurs
déplacement                  = bénéfice déplacé d'ailleurs plutôt que créé
décroissance (drop-off)      = affaiblissement du résultat au fil des années
```

Les facteurs d'ajustement sont ce qui fait l'intégrité de la méthode : sans eux, le SROI n'est qu'une fiction avec un symbole monétaire.

## Exemple chiffré

Une application de mise en relation (befriending) connectant des personnes âgées isolées à des bénévoles ; coût du programme 200 000 £/an ; 1 500 binômes actifs.

```
Résultat : réduction de l'isolement pour 1 500 personnes
  proxy : valorisation du bien-être du « soulagement de l'isolement » ≈ 1 800 £/personne/an
  effet d'aubaine 25 % (certains auraient trouvé du lien social de toute façon)
  attribution 80 % (une part de mérite revient à d'autres services)

Valeur = 1 500 × 1 800 × 0,80 × 0,75 = 1 620 000 £

Résultat : réduction des consultations médecin généraliste, 1 500 × 1,2 consultations × 42 £ = 75 600 £ (réel côté payeur)

SROI = (1 620 000 + 75 600) / 200 000 ≈ 8,5 : 1
```

Il faut noter que le ratio est composé à 96 % de bien-être valorisé par proxy et à 4 % de trésorerie réelle. C'est un SROI légitime — mais il doit être présenté comme de la valeur sociale, sans jamais laisser entendre que 1,7 M£ serait encaissable.

## Lien avec l'ingénierie logicielle

Le SROI est le cadre honnête pour le travail d'ingénierie dont les bénéficiaires sont en dehors de l'équipe qui paie : maintenance open source, améliorations d'accessibilité, travail de plateforme consommé par d'autres équipes, investissement dans la communauté des développeurs. La mécanique transposable : identifier toutes les parties prenantes, monétiser avec des proxys explicites, et appliquer des décotes d'effet d'aubaine et d'attribution (ce correctif open source se serait-il produit de toute façon ? quelle part du gain revient à votre travail plutôt qu'à l'écosystème ?). La discipline consistant à *décoter ses propres affirmations d'impact* est ce qui distingue le SROI d'un chiffre marketing.

## Pièges

- **Recherche du proxy le plus flatteur** : choisir la valorisation du bien-être la plus généreuse disponible.
- **Omettre l'effet d'aubaine ou l'attribution** — l'inflation la plus courante, doublant souvent le ratio.
- **Comparer des ratios entre études** : les ratios SROI sont sensibles à la méthode ; ne les comparer qu'au sein d'un cadre cohérent.
- **Présenter la valeur sociale comme des économies encaissables** à un détenteur de budget.

## Sources

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- Guide du gouvernement britannique sur le SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
