# Indicateurs de service GDS

Le manuel de service du Government Digital Service (GDS) britannique impose quatre KPI pour chaque service numérique public : **le coût par transaction, la satisfaction des usagers, le taux d'achèvement et le taux d'adoption numérique**. Ensemble, ils constituent l'économie minimale d'un service numérique public — et le modèle dont héritent les services numériques du NHS.

## Pourquoi c'est important

Les indicateurs GDS codifient le dossier économique du transfert de canal qui a financé une décennie de numérisation gouvernementale : le Digital Efficiency Report a montré que les transactions numériques sont environ 20 fois moins coûteuses que le téléphone et environ 50 fois moins coûteuses que le face-à-face (chiffres des collectivités locales : web 0,15 £, téléphone 2,83 £, face-à-face 8,62 £). Mais les économies ne se matérialisent que lorsque les usagers *terminent* le parcours numérique (taux d'achèvement) *au lieu* du canal coûteux (adoption) — les quatre KPI forment un seul modèle économique, pas quatre tableaux de bord.

## Le calcul

```
Coût par transaction  = coût total du service / transactions terminées
Taux d'achèvement     = terminées / transactions démarrées × 100
Adoption numérique    = transactions numériques / transactions tous canaux × 100
Satisfaction usager    = % satisfait+très satisfait (échelle à 5 points,
                          enquête en service)

Économie de transfert de canal = volume × déplacement d'adoption ×
                                  (coût_ancien_canal − coût_numérique)
… moins la demande d'échec : (1 − taux d'achèvement) × coût du canal
  de repli
```

## Exemple chiffré

Un service de gestion des rendez-vous du NHS : 2 M de transactions/an, actuellement 70 % téléphone (3,20 £/appel) / 30 % numérique (0,25 £). Une refonte porte l'adoption numérique à 55 % et l'achèvement de 84 % à 93 % :

```
Économie de déplacement d'adoption = 2 M × 0,25 × (3,20 − 0,25) = 1 475 000 £/an

Économie de demande d'échec : les parcours numériques échoués
retombent sur le téléphone
  avant : 2 M × 0,30 × 0,16 × 3,20 £ = 307 200 £
  après :  2 M × 0,55 × 0,07 × 3,20 £ = 246 400 £
  net 60 800 £/an — les améliorations d'achèvement protègent les gains
  d'adoption

La satisfaction est l'indicateur avancé : les usagers insatisfaits
reviennent au téléphone, donc une baisse de satisfaction annonce
un déclin de l'adoption avant qu'il n'apparaisse.
```

## Lien avec l'ingénierie logicielle

Ces quatre KPI sont un exemple de qualité industrielle de [tableau coût-conséquence](../cost-consequence-analysis/) : un indicateur de coût, trois indicateurs de résultat, jamais réduits à un score unique. Pour les ingénieurs produit, les leçons opérationnelles : **le taux d'achèvement est un problème d'instrumentation d'entonnoir** (chaque point d'abandon est repérable et corrigible) ; **le coût par transaction relève de l'[économie unitaire cloud](../cloud-unit-economics/)** plus les coûts des canaux assistés par du personnel ; **l'adoption est un indicateur d'équité déguisé** — les usagers qui ne peuvent pas ou ne veulent pas changer de canal sont de façon disproportionnée âgés, en situation de handicap et défavorisés, de sorte qu'une fermeture agressive des canaux transforme des « économies » en préjudice d'accès (voir [portée et équité](../reach-and-equity/)). La publication des KPI (GOV.UK le fait, par service) est elle-même un mécanisme : la transparence discipline les prévisions de la même façon que les audits de [réalisation des bénéfices](../benefits-realization/).

## Pièges

- **Adoption par coercition** : fermer la ligne téléphonique fait grimper l'adoption et déverse la demande d'échec sur le personnel de première ligne ; mesurez le coût total du système.
- **Achèvement mesuré à partir de la page 2** : démarrer l'entonnoir après le point de décrochage flatte le taux.
- **Coût par transaction ignorant le support numérique assisté** et le traitement de la demande d'échec.
- **Enquêtes de satisfaction uniquement à l'achèvement réussi** — les insatisfaits n'atteignent presque jamais l'enquête.

## Sources

- GOV.UK Service Manual, mesurer le succès / KPI obligatoires. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
