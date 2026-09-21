# Observance et persistance

L'observance mesure à quel point l'usage réel correspond à l'usage prescrit (intensité) ; la persistance mesure la durée pendant laquelle l'usage se poursuit avant l'arrêt (durée). La pharmacie dispose de mesures standardisées — **MPR** et **PDC**, avec ≥80 % comme seuil conventionnel d'« observance » — et les thérapeutiques numériques héritent à la fois des concepts et du problème : l'observance est le multiplicateur entre l'efficacité et la valeur effectivement réalisée.

## Pourquoi c'est important

Les payeurs s'appuient déjà sur ces chiffres : un PDC ≥80 % alimente les Star Ratings de Medicare aux États-Unis, qui influent directement sur les revenus réels des payeurs — l'observance est une infrastructure financièrement structurante, pas un indicateur accessoire. Pour les thérapeutiques numériques, le schéma se répète : les données DiGA montrent des volumes de prescription élevés mais une observance soutenue faible, et la tarification des DTx fondée sur les résultats (qui arrive en Allemagne à partir de 2026) rémunérera en fonction de résultats conditionnés à l'observance. L'apport conceptuel issu de la recherche en santé numérique : l'**engagement efficace** — un engagement *suffisant* pour atteindre le résultat visé — et son corollaire, la **dose minimale efficace**, établie empiriquement pour chaque intervention plutôt que présumée être « plus, c'est mieux ».

## Le calcul

```
MPR = Σ jours de traitement délivrés / jours de la période × 100   (peut dépasser 100 % ;
      surestime en cas de renouvellements anticipés)
PDC = jours couverts par le traitement / jours de la période × 100 (plafonné à 100 % ;
      estimateur conservateur, privilégié par CMS)
Observance numérique = événements d'usage réels / événements d'usage prescrits × 100
Persistance           = jours entre l'initiation et l'arrêt
                        (rapporter le % persistant à N mois ; méthodes de survie)

Conditionnement de la valeur : résultat réalisé ≈ efficacité × g(observance)
  où g est la fonction dose-réponse ; en deçà de la dose minimale
  efficace, g ≈ 0 — coût engagé, bénéfice perdu
```

## Exemple chiffré

Un produit de TCC numérique pour l'insomnie, prescrit à raison de 6 modules sur 6 semaines ; efficacité en essai clinique de 0,025 QALY chez ceux ayant terminé ≥4 modules (la dose minimale efficace établie empiriquement) :

```
1 000 prescriptions à 250 £ → 250 000 £ de dépense payeur
Achèvement des modules : ≥4 modules 38 % ; 1–3 modules 34 % ; zéro module 28 %

QALYs réalisés = 1 000 × 0,38 × 0,025 = 9,5
Coût par QALY  = 250 000 / 9,5 ≈ 26 300 £ — à la marge des seuils du NICE

L'ingénierie de l'observance (refonte des rappels, raccourcissement des
séances) fait passer l'achèvement à ≥4 modules à 50 % : 12,5 QALYs →
20 000 £/QALY. Le produit franchit le seuil de financement sans toucher
au contenu thérapeutique.
```

Dans un modèle de tarification à la performance façon 2026, le même gain déplace directement le *revenu* — l'ingénierie de l'observance devient la feuille de route commerciale.

## Lien avec l'ingénierie logicielle

Deux vocabulaires convergent vers un même concept : l'analytique logicielle ([activation](../activation-and-uptake/), [stickiness](../engagement-metrics/), [rétention](../retention-and-churn/)) et la pharmacie clinique (MPR, PDC, persistance) mesurent toutes deux l'exposition à une intervention — faites correspondre vos événements produit au vocabulaire clinique, et les payeurs pourront lire vos tableaux de bord. L'ingénierie possède les leviers d'observance : la logique des rappels (des pings quotidiens naïfs entraînent le rejet ; un rythme adaptatif non), le coût de la séance (un module de 20 minutes est moins souvent terminé que 3 modules de 7 minutes), et la télémétrie de friction qui localise *où* dans le protocole les utilisateurs décrochent. Instrumentez la relation dose-réponse dès le premier jour — l'analyse de dose minimale efficace qui conditionne tout le modèle économique nécessite des données reliant usage et résultat, que seul le produit peut collecter.

## Pièges

- **Confusion MPR/PDC** : le MPR gonfle les chiffres ; précisez quel estimateur est utilisé et utilisez le PDC pour tout ce qui est destiné aux payeurs.
- **Observance à l'indicateur, pas à la thérapie** : les ouvertures comptées comme des doses (voir [indicateurs d'engagement](../engagement-metrics/)).
- **Objectifs d'engagement « plus c'est mieux »** alors que l'intervention a une dose finie — l'obtention du diplôme est un succès, l'usage perpétuel n'en est pas un.
- **Affirmations d'efficacité fondées sur les survivants** : les résultats parmi les observants incluent des effets de sélection (les personnes observantes diffèrent) ; l'estimation causale honnête nécessite une randomisation ou un ajustement rigoureux.

## Sources

- MPR contre PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., engagement efficace. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- Résultats d'observance DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
