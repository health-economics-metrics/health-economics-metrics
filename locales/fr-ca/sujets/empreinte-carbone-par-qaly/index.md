# Empreinte carbone par QALY

Le carbone par QALY est un ratio d'efficience : les émissions de carbone d'une intervention (ou celles qu'elle évite) divisées par les QALY qu'elle produit. Il est le parallèle direct du coût par QALY et permet d'évaluer l'efficience carbone à côté de l'efficience économique. Le « NMB ajusté carbone » va un cran plus loin : il monétise l'impact carbone avec la valeur officielle du carbone hors marché du Green Book britannique, puis la retranche du [bénéfice monétaire net](../bénéfice-monétaire-net/) standard.

## Pourquoi c'est important

NICE et NHS England attendent désormais que l'impact environnemental soit pris en compte à côté du coût et des QALY. Le NHS a un engagement public de neutralité carbone : zéro émission nette directe d'ici 2040 et sur l'ensemble de l'empreinte de sa chaîne d'approvisionnement d'ici 2045. Le manuel d'évaluation des technologies de santé de NICE (PMG36) cite la durabilité environnementale comme une considération émergente lors de l'évaluation des technologies. Pour les produits de santé numérique, cela signifie que le carbone devient le quatrième pilier de l'argumentaire de valeur, aux côtés du coût, des QALY et de la [dominance sur la frontière d'efficience](../dominance-et-frontière-d-efficience/) : il ne remplace aucun des trois, mais c'est une dimension qu'un bon dossier économique doit de plus en plus documenter.

## Le calcul

```
carbone_par_qaly = émissions_totales_t_co2e / qaly_total
  (une valeur négative signifie des émissions nettes évitées par QALY gagné :
  double gain, meilleure santé et moins de carbone)

impact_carbone_monétisé = émissions_t_co2e × prix_carbone_par_tonne
  (émissions négatives × prix positif = coût négatif, c'est-à-dire un bénéfice)

NMB_ajusté_carbone = bénéfice_monétaire_net − impact_carbone_monétisé
```

Cela étend l'idée de frontière d'efficience coût/QALY avec un second axe, le carbone par QALY, selon la même logique « tracer chaque option et voir laquelle est dominée » que [Dominance et frontière d'efficience](../dominance-et-frontière-d-efficience/), mais appliquée au carbone plutôt qu'au coût.

## Exemple chiffré

Un service de télémédecine remplace des consultations en présentiel, supprimant 5 000 trajets en voiture par an, d'environ 8 kg de CO2e chacun : 40 tonnes de CO2e évitées, exprimées en émissions négatives (−40,0 t), pour 25 QALY par an :

```
carbone_par_qaly = −40.0 / 25.0 = 1,6 t de CO2e évitées par QALY gagné
```

Avec le prix du carbone hors marché du Green Book (chiffre illustratif, valeur centrale hors marché de 2023 ≈ 269 £/t de CO2e ; le Green Book met à jour chaque année les valeurs du carbone, à revérifier avant toute citation dans une analyse réelle) :

```
impact_carbone_monétisé = −40.0 × £269 = −£10,760
```

Le « coût » négatif de −10 760 £ est un bénéfice de 10 760 £. Si le bénéfice monétaire net propre de l'intervention est de 500 000 £ :

```
NMB_ajusté_carbone = £500,000 − (−£10,760) = £510,760
```

L'économie de carbone renforce l'argumentaire au lieu de l'affaiblir : c'est exactement le double gain que le cadre des émissions négatives est conçu pour rendre visible.

## Lien avec l'ingénierie logicielle

C'est le point de croisement actuel avec l'économie de l'IA et du cloud : l'empreinte carbone du calcul servant à entraîner et à exécuter des modèles d'IA est déjà un poste réel des achats du NHS, car les contrats de fournisseurs du NHS dépassant un certain seuil exigent un Plan de réduction du carbone (Carbon Reduction Plan). L'[économie unitaire du cloud](../économie-unitaire-du-cloud/) suit déjà le coût par unité de production de calcul ; le carbone par QALY est le modèle naturel d'un futur indicateur de « coût carbone par inférence », qui étendrait ce module et l'économie unitaire de l'inférence à la dimension environnementale, même si cet indicateur n'existe pas encore.

## Pièges

- **Jouer sur les frontières du système** : ne compter que les émissions directes (périmètre 1) et exclure celles de la chaîne d'approvisionnement (périmètre 3), qui représentent souvent l'essentiel de l'empreinte réelle d'un produit de santé numérique.
- **Utiliser un prix du carbone périmé** : le Green Book met à jour chaque année les valeurs du carbone hors marché, donc un chiffre en £/t cité doit être daté et non présenté comme une constante.
- **Traiter l'« économie de carbone » comme un substitut du « coût-efficacité »** : une intervention peu émettrice mais de faible valeur reste un mauvais usage des ressources du NHS. Le carbone est le quatrième pilier, à côté du coût et des QALY, pas un remplaçant de l'un d'eux.

## Sources

- NHS England, "Delivering a Net Zero National Health Service" (2020, mis à jour en 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (mis à jour chaque année ; valeur centrale hors marché ≈ 269 £/tCO2e, 2023 — dater chaque citation). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
