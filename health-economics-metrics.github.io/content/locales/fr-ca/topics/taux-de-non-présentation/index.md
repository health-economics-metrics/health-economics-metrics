# Taux de Non-Présentation (DNA)

Le taux de non-présentation (DNA) est le pourcentage de rendez-vous réservés où le patient ne se présente ni n'annule. Le clinicien, la salle et le créneau sont payés ; rien ne se passe. C'est la métrique de gaspillage la plus pure en santé — et l'une des plus corrigibles par le logiciel.

## Pourquoi c'est important

Les chiffres de NHS England (2019) : les rendez-vous manqués chez le médecin traitant dépassent 15 millions/an à environ 30 £ chacun — plus de **216 M£/an** — et les non-présentations en ambulatoire hospitalier avoisinent 8 M/an (~6,4 % des rendez-vous) avec une moyenne d'environ **160 £** par créneau manqué. Parce que le coût marginal d'un rappel se compte en centimes et que la valeur récupérée est un créneau clinique pleinement doté en personnel, la réduction des DNA a l'une des meilleures arithmétiques de ROI en santé numérique, ce qui explique pourquoi les rappels SMS, la reprogrammation facile et la surréservation prédictive ont figuré parmi les premières victoires prouvées de la santé numérique.

## Le calcul

```
Taux DNA = DNA / rendez-vous réservés × 100

Valeur de la réduction = rendez-vous × ΔTaux DNA × valeur par créneau récupéré

valeur par créneau récupéré : le créneau est rerempli (valeur d'activité / réduction
de liste d'attente) ou non (temps de personnel partiellement réutilisable) — le mécanisme
compte, comme dans bed-days-saved.md.
```

## Exemple résolu

Un service ambulatoire : 200 000 rendez-vous/an, taux DNA 8 %. Un service rappel-plus-reprogrammation (SMS avec reprogrammation en un clic, information de transport, formats accessibles) réduit le DNA à 5,5 %.

```
Créneaux récupérés = 200 000 × 0,025 = 5 000/an
Reremplis depuis la liste d'attente à environ 160 £ de valeur ambulatoire moyenne :
  5 000 × 160 £ = 800 000 £/an d'activité récupérée
Coût du service : 200 000 × 0,40 £ = 80 000 £/an

Retour ≈ 10:1, plus 5 000 patients de la liste d'attente vus plus tôt
(voir waiting-list-impact.md et referral-to-treatment.md).
```

La taille d'effet (2,5 points) est réaliste : les ECR de rappels montrent systématiquement une réduction relative du DNA de 25 à 40 %.

## Lien avec l'ingénierie logicielle

- **C'est un problème de systèmes de planification** : rappels, reprogrammation en libre-service, remplissage automatique de liste d'attente à partir des annulations, et modèles de prédiction de non-présentation qui pilotent la surréservation ciblée. Chacun est de l'ingénierie logicielle ordinaire avec un dossier économique inhabituellement net.
- **L'analogue en ingénierie** : les non-présentations pour capacité réservée — créneaux de CI réservés-mais-inactifs, capacité cloud réservée, salles de réunion, jurys d'entretien. L'économie se transpose : une relance automatisée bon marché (ou une libération automatique des réservations non utilisées) récupère une capacité engagée coûteuse.
- **Aperçu d'éthique de prédiction** : les modèles de non-présentation entraînés sur des données de présence encodent la précarité et les barrières d'accès ; les utiliser pour *dépriorer* les non-présentateurs probables amplifie l'iniquité, les utiliser pour *soutenir* la présence (aide au transport, alternatives téléphoniques) la réduit. Voir [portée et équité](../portée-et-équité/).

## Pièges

- **Compter l'annulé-et-reprogrammé comme valeur récupérée deux fois.**
- **Valoriser des créneaux récupérés qui ne sont pas reremplis** — un créneau vide avec un rappel envoyé reste vide.
- **Poursuivre le DNA jusqu'à zéro** : les derniers points de DNA sont des patients faisant face à de réels obstacles ; les approches punitives (sortie après N DNA) réduisent la métrique en abandonnant les patients.

## Sources

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- Résumés de coût des DNA. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
