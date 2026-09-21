# Activation et adoption

Le taux d'activation est la part des inscrits qui atteignent la première valeur significative (l'action « eurêka » — première lecture enregistrée, première leçon terminée). L'adoption (« uptake ») en est la version populationnelle : la part de la population *éligible* qui adopte le produit, tout simplement. Ensemble, elles constituent les portes d'entrée de l'entonnoir de valeur : acquisition → adoption → activation → [rétention](../retention-and-churn/) → résultat.

## Pourquoi c'est important

Les utilisateurs non activés sont un pur coût : dépenses d'acquisition, provisionnement, charge de support — zéro valeur clinique. Les repères sectoriels montrent que l'activation des logiciels de santé est *inférieure* à la moyenne tous secteurs confondus (≈24 % contre ≈37 % pour l'activation des nouveaux utilisateurs dans un ensemble de repères SaaS ; le taux d'achèvement des listes de contrôle d'onboarding ~20 %), ce qui reflète un onboarding plus lourd (identité, consentement, sécurité clinique). L'adoption porte l'enjeu populationnel : dans le [cadre RE-AIM](../reach-and-equity/), l'impact de santé publique ≈ portée × efficacité — une application excellente adoptée par 3 % de la population éligible ne fait bouger l'aiguille populationnelle que de 3 %. Pour les thérapeutiques numériques prescrites, la porte de l'adoption est visible dans les données nationales : **~81 % des prescriptions DiGA allemandes sont activées** — une prescription payée sur cinq ne démarre jamais (voir [voie rapide DiGA](../diga-fast-track/)).

## Le calcul

```
Taux d'activation = utilisateurs accomplissant l'action clé dans la fenêtre / inscriptions × 100
Taux d'adoption    = adoptants / population éligible × 100
Taux de délivrance DTx = codes de prescription activés / prescriptions émises × 100

Modèle de valeur de l'entonnoir :
  éligible × adoption × activation × bénéfice pondéré par la rétention = valeur populationnelle
  — quatre multiplications ; améliorer le plus petit facteur domine
  généralement (théorie des contraintes appliquée aux entonnoirs)
```

## Exemple chiffré

Un commissionnaire propose une application de prévention du diabète à 80 000 résidents éligibles :

```
Invités → inscrits :  80 000 → 12 000  (adoption 15 %)
Inscrits → activés (première session + objectif fixé, 7 jours) : 12 000 → 5 400 (45 %)
Activés → programme de 6 mois terminé : 5 400 → 1 600 (30 %)

Effet du programme (essai, participants ayant terminé) : 0,03 QALY + 180 £ de coûts évités
Valeur populationnelle = 1 600 × (0,03 × 20 000 £ + 180 £) ≈ 1,25 M£
Valeur par personne éligible = 15,6 £ — contre 780 £ si chaque personne éligible terminait le programme.

Où investir ? Doubler l'adoption (15→30 %) double la valeur ; faire passer
l'activation de 45 à 65 % ajoute ~44 % ; les deux battent le fait de
continuer à peaufiner le contenu du programme que les 1 600 terminent déjà.
```

## Lien avec l'ingénierie logicielle

L'activation est l'étape de l'entonnoir la plus maîtrisable par l'ingénierie : la friction de vérification d'identité, les parcours de consentement, la conception des états vides et le délai jusqu'à la première valeur relèvent du code, pas de la politique (délai médian jusqu'à la valeur en santé ≈ 1 jour 7 heures dans les données de référence — chaque heure supplémentaire est une exposition au désabonnement). L'adoption est un problème de systèmes de distribution : intégration dans les parcours d'orientation (le moment de la prescription), invitations validées par le médecin traitant (transfert de confiance), et accessibilité (langue, compétences numériques — voir [portée et équité](../reach-and-equity/)). Le modèle de valeur d'entonnoir ci-dessus est le générateur de dossier d'affaires pour les deux : multipliez les facteurs, identifiez la contrainte, chiffrez la correction au regard de la valeur populationnelle qu'elle libère.

## Pièges

- **Activation définie comme une commodité** (e-mail vérifié) plutôt qu'un sens clinique (première action thérapeutique) — gonfle l'indicateur, casse la chaîne de valeur.
- **Manipulation du dénominateur d'adoption** : « parmi ceux qui ont visité le site » plutôt que la véritable population éligible — les commissionnaires se soucient de cette dernière.
- **Effets de sélection** : les utilisateurs faciles à activer sont les moins malades et les moins défavorisés ; les améliorations de l'entonnoir peuvent creuser les écarts d'équité tout en améliorant les moyennes.

## Sources

- Repères d'activation (SaaS de santé). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- Données d'activation DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- Cadre RE-AIM. <https://re-aim.org/>
