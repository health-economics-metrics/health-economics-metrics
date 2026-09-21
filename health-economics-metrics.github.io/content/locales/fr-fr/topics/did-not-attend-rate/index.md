# Taux de rendez-vous non honorés (Did-Not-Attend, DNA)

Le taux de DNA est le pourcentage de rendez-vous réservés où le patient ne se présente ni n'annule. Le clinicien, la salle et le créneau sont payés ; rien ne se passe. C'est la métrique de gaspillage la plus pure du secteur de la santé — et l'une des plus faciles à corriger par le logiciel.

## Pourquoi c'est important

Les chiffres du NHS England (2019) : les rendez-vous de médecine générale manqués dépassent 15 millions par an à environ £30 chacun — plus de **£216M/an** — et les DNA en consultation hospitalière externe atteignent environ 8M/an (~6,4 % des rendez-vous) pour une valeur moyenne d'environ **£160** par créneau manqué. Comme le coût marginal d'un rappel se compte en centimes et que la valeur récupérée correspond à un créneau clinique entièrement doté en personnel, la réduction des DNA offre l'une des meilleures arithmétiques de retour sur investissement de la santé numérique — d'où le fait que les rappels par SMS, la reprise de rendez-vous facilitée et la surréservation prédictive comptent parmi les premières réussites avérées de la santé numérique.

## Le calcul

```
Taux de DNA = DNA / rendez-vous réservés × 100

Valeur de la réduction = rendez-vous × ΔTaux de DNA × valeur par créneau récupéré

valeur par créneau récupéré : le créneau est réattribué (valeur de l'activité /
réduction de la liste d'attente) ou il ne l'est pas (temps de personnel
partiellement réutilisable) — le mécanisme compte, comme pour
bed-days-saved.md.
```

## Exemple chiffré

Un service de consultation externe : 200 000 rendez-vous/an, taux de DNA de 8 %. Un service de rappel avec reprise de rendez-vous (SMS avec reprise en un clic, informations de transport, formats accessibles) fait baisser les DNA à 5,5 %.

```
Créneaux récupérés = 200 000 × 0,025 = 5 000/an
Réattribués depuis la liste d'attente à une valeur moyenne
en consultation externe d'environ £160 :
  5 000 × £160 = £800 000/an d'activité récupérée
Coût du service : 200 000 × £0,40 = £80 000/an

Retour ≈ 10:1, plus 5 000 patients de la liste d'attente vus plus tôt
(voir waiting-list-impact.md et referral-to-treatment.md).
```

L'ampleur de l'effet (2,5 points) est réaliste : les essais contrôlés randomisés sur les rappels montrent systématiquement une réduction relative des DNA de 25 à 40 %.

## Lien avec l'ingénierie logicielle

- **C'est un problème de systèmes de planification** : rappels, reprise de rendez-vous en libre-service, remplissage automatique de la liste d'attente à partir des annulations, et modèles de prédiction des absences qui pilotent un surbooking ciblé. Chacun relève de l'ingénierie logicielle ordinaire avec un dossier économique inhabituellement net.
- **L'analogie en ingénierie** : les absences pour capacité réservée — créneaux de CI réservés mais inutilisés, capacité cloud réservée, salles de réunion, jurys d'entretien. L'économie se transpose : une relance automatisée peu coûteuse (ou la libération automatique de réservations inutilisées) récupère une capacité engagée coûteuse.
- **Aperçu éthique de la prédiction** : les modèles d'absence entraînés sur des données de fréquentation encodent la précarité et les obstacles d'accès ; les utiliser pour *déprioriser* les personnes susceptibles de ne pas venir amplifie l'iniquité, les utiliser pour *soutenir* la venue (aide au transport, alternatives téléphoniques) la réduit. Voir [portée et équité](../reach-and-equity/).

## Pièges

- **Compter deux fois comme valeur récupérée un rendez-vous annulé puis re-réservé.**
- **Valoriser des créneaux récupérés qui ne sont pas réattribués** — un créneau vide avec un rappel envoyé reste vide.
- **Vouloir ramener les DNA à zéro** : les derniers points de DNA correspondent à des patients confrontés à de réels obstacles ; les approches punitives (sortie du dispositif après N DNA) font baisser la métrique en abandonnant les patients.

## Sources

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- DNA cost summaries. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
