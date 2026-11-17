# Observance et Persistance

L'observance mesure à quel point l'usage réel correspond à l'usage prescrit (intensité) ; la persistance mesure combien de temps l'usage se poursuit avant l'arrêt (durée). La pharmacie dispose de mesures standardisées — **MPR** et **PDC**, avec ≥80 % comme seuil conventionnel d'« observant » — et les thérapeutiques numériques héritent à la fois des concepts et du problème : l'observance est le multiplicateur entre l'efficacité et la valeur réalisée.

## Pourquoi c'est important

Les payeurs fonctionnent déjà avec ces chiffres : le PDC ≥80 % alimente les notations Medicare Star aux États-Unis, qui déplacent de réels revenus des payeurs — l'observance est une infrastructure financièrement porteuse, pas une métrique accessoire. Pour les thérapeutiques numériques, le schéma se répète : les données DiGA montrent des volumes de prescription élevés avec une observance soutenue faible, et la tarification des DTx basée sur les résultats (arrivant en Allemagne dès 2026) paiera selon des résultats conditionnés à l'observance. La mise à jour conceptuelle issue de la recherche en santé numérique : l'**engagement effectif** — un engagement *suffisant* pour atteindre le résultat visé — et son corollaire, la **dose minimale efficace**, établie empiriquement par intervention plutôt que supposée être « plus c'est mieux ».

## Le calcul

```
MPR = Σ jours d'approvisionnement délivrés / jours de la période × 100   (peut dépasser 100 % ;
      surestime via les renouvellements anticipés)
PDC = jours couverts par l'approvisionnement / jours de la période × 100     (plafonné à 100 % ;
      l'estimateur conservateur, préféré par le CMS)
Observance numérique = événements d'usage réels / événements d'usage prescrits × 100
Persistance           = jours entre l'initiation et l'arrêt
                    (rapporter le % persistant à N mois ; méthodes de survie)

Cadrage dose-réponse (la mise à niveau de l'économie de la santé) :
  résultat réalisé ≈ efficacité × g(observance)
  où g est la fonction dose-réponse ; en dessous de la dose
  minimale efficace, g ≈ 0 — le coût est engagé, le bénéfice est perdu
```

## Exemple résolu

Un produit numérique de TCC pour l'insomnie, prescrit sous forme de 6 modules sur 6 semaines ; efficacité de l'essai 0,025 QALY parmi ceux qui complètent ≥4 modules (la dose minimale efficace établie empiriquement) :

```
1 000 prescriptions à 250 £ → 250 000 £ de dépenses du payeur
Achèvement des modules : ≥4 modules 38 % ; 1-3 modules 34 % ; zéro module 28 %

QALY réalisés = 1 000 × 0,38 × 0,025 = 9,5
Coût par QALY  = 250 000 / 9,5 ≈ 26 300 £ — marginal aux seuils de NICE

L'ingénierie de l'observance (refonte des rappels, raccourcissement des séances) fait passer
l'achèvement des ≥4 modules à 50 % : 12,5 QALY → 20 000 £/QALY. Le produit
a franchi le seuil de financement sans toucher au contenu thérapeutique.
```

Sous une tarification à la performance de style 2026, le même changement déplace directement les *revenus* — l'ingénierie de l'observance devient la feuille de route commerciale.

## Lien avec l'ingénierie logicielle

Deux vocabulaires convergent vers un concept : l'analytique logicielle ([activation](../activation-et-adoption/), [adhérence produit](../métriques-d-engagement/), [rétention](../rétention-et-attrition/)) et la pharmacie clinique (MPR, PDC, persistance) mesurent toutes deux l'exposition à une intervention — faites correspondre les événements de votre produit au vocabulaire clinique et les payeurs pourront lire vos tableaux de bord. L'ingénierie détient les leviers d'observance : la logique des rappels (les alertes quotidiennes bêtes entraînent le rejet ; le timing adaptatif non), le coût de séance (un module de 20 minutes est moins souvent terminé que 3 modules de 7 minutes), et la télémétrie de friction qui localise *où* dans le protocole les utilisateurs décrochent. Instrumentez la réponse à la dose dès le premier jour — l'analyse de dose minimale efficace qui conditionne tout le modèle économique nécessite des données d'usage liées au résultat que seul le produit peut collecter.

## Pièges

- **Confusion MPR/PDC** : le MPR gonfle les chiffres ; précisez quel estimateur et utilisez le PDC pour tout ce qui est destiné aux payeurs.
- **Observance à la métrique, pas à la thérapie** : les ouvertures comptées comme des doses (voir [métriques d'engagement](../métriques-d-engagement/)).
- **Objectifs d'engagement « plus c'est mieux »** alors que l'intervention a une dose finie — l'obtention du diplôme est un succès, l'usage perpétuel ne l'est pas.
- **Allégations d'efficacité basées sur les survivants** : les résultats parmi les observants incluent des effets de sélection (les personnes observantes diffèrent) ; l'estimation causale honnête nécessite une randomisation ou un ajustement soigneux.

## Sources

- MPR contre PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., engagement effectif. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- Résultats d'observance DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
