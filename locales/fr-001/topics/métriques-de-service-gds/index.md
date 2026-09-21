# Métriques de Service GDS

Le Manuel de Service du Service Numérique Gouvernemental britannique (GDS) impose quatre KPI pour chaque service numérique gouvernemental : **coût par transaction, satisfaction de l'utilisateur, taux d'achèvement et adoption numérique**. Ensemble, ils constituent l'économie minimale d'un service numérique public — et le modèle dont héritent les services numériques du NHS.

## Pourquoi c'est important

Les métriques GDS codifient le dossier de décision de transfert de canal qui a financé une décennie de numérisation gouvernementale : le Rapport d'Efficience Numérique a trouvé les transactions numériques environ 20× moins chères que le téléphone et environ 50× moins chères qu'en face à face (chiffres du gouvernement local : web 0,15 £, téléphone 2,83 £, face à face 8,62 £). Mais les économies ne se matérialisent que lorsque les gens *achèvent* le parcours numérique (taux d'achèvement) *plutôt que* le canal coûteux (adoption) — les quatre KPI sont un seul modèle économique, pas quatre tableaux de bord.

## Le calcul

```
Coût par transaction = coût total du service / transactions achevées
Taux d'achèvement      = achevées / transactions commencées × 100
Adoption numérique      = transactions numériques / transactions tous canaux × 100
Satisfaction utilisateur    = % satisfait+très satisfait (5 points, enquête intra-service)

Économie de transfert de canal = volume × changement d'adoption × (coût_ancien_canal − coût_numérique)
… moins la demande d'échec : (1 − taux d'achèvement) × coût du canal de secours
```

## Exemple résolu

Un service de gestion de rendez-vous du NHS : 2M de transactions/an, actuellement 70 % téléphone (3,20 £/appel) / 30 % numérique (0,25 £). Une refonte fait passer l'adoption numérique à 55 % et l'achèvement de 84 % à 93 % :

```
Économie de changement d'adoption = 2M × 0,25 × (3,20 − 0,25) = 1 475 000 £/an

Économie de demande d'échec : les parcours numériques échoués reviennent au téléphone
  avant : 2M × 0,30 × 0,16 × 3,20 £ = 307 200 £
  après :  2M × 0,55 × 0,07 × 3,20 £ = 246 400 £
  net 60 800 £/an — les améliorations d'achèvement protègent les gains d'adoption

La satisfaction est l'indicateur avancé : les utilisateurs insatisfaits reviennent au téléphone,
donc une baisse de satisfaction prédit le déclin de l'adoption avant qu'il n'apparaisse.
```

## Lien avec l'ingénierie logicielle

Ces quatre KPI sont un exemple de niveau production d'un [tableau coûts-conséquences](../analyse-coûts-conséquences/) : une métrique de coût, trois métriques de résultat, jamais fondues en un score. Pour les ingénieurs produit, les leçons opérationnelles : le **taux d'achèvement est un problème d'instrumentation d'entonnoir** (chaque point d'abandon est localisable et corrigible) ; le **coût par transaction est de l'[économie unitaire du cloud](../économie-unitaire-du-cloud/)** plus les coûts de canal assisté par personnel ; l'**adoption est une métrique d'équité déguisée** — les utilisateurs qui ne peuvent pas ou ne veulent pas changer de canal sont de manière disproportionnée âgés, handicapés et défavorisés, donc une fermeture agressive de canal convertit les « économies » en préjudice d'accès (voir [portée et équité](../portée-et-équité/)). Publier les KPI (GOV.UK le fait, par service) est en soi un mécanisme : la transparence discipline les prévisions de la même manière que les audits de [réalisation des bénéfices](../réalisation-des-bénéfices/).

## Pièges

- **Adoption par coercition** : fermer la ligne téléphonique augmente l'adoption et déverse la demande d'échec sur le personnel de première ligne ; mesurez le coût total du système.
- **Achèvement mesuré depuis la page 2** : commencer l'entonnoir après le point d'abandon flatte le taux.
- **Coût par transaction ignorant le support numérique assisté** et la gestion de la demande d'échec.
- **Enquêtes de satisfaction uniquement à l'achèvement réussi** — les insatisfaits n'atteignent majoritairement jamais l'enquête.

## Sources

- Manuel de Service GOV.UK, mesure du succès / KPI obligatoires. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Rapport d'Efficience Numérique. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
