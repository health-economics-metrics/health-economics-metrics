# Activation et Adoption

Le taux d'activation est la part des inscrits qui atteignent la première valeur significative (l'action « aha » — première lecture enregistrée, première leçon terminée). L'adoption est la version populationnelle : la part de la population *éligible* qui adopte la solution. Ensemble, elles constituent les portes d'entrée de l'entonnoir de valeur : acquisition → adoption → activation → [rétention](../rétention-et-attrition/) → résultat.

## Pourquoi c'est important

Les utilisateurs non activés représentent un coût pur : dépenses d'acquisition, provisionnement, surface de support — zéro valeur clinique. Les repères indiquent que l'activation des logiciels de santé est *inférieure* à la moyenne intersectorielle (≈24 % contre ≈37 % pour l'activation de nouveaux utilisateurs dans un ensemble de référence SaaS ; achèvement de la liste d'intégration ~20 %), ce qui reflète une intégration plus lourde (identité, consentement, sécurité clinique). L'adoption porte les enjeux populationnels : dans le [cadre RE-AIM](../portée-et-équité/), l'impact en santé publique ≈ portée × efficacité — une application excellente adoptée par 3 % de la population éligible ne déplace l'aiguille populationnelle que de 3 %. Pour les thérapeutiques numériques prescrites, la porte d'adoption est visible dans les données nationales : **~81 % des prescriptions allemandes de DiGA sont activées** — une prescription remboursée sur cinq ne démarre jamais (voir [voie rapide DiGA](../voie-rapide-diga-d-allemagne/)).

## Le calcul

```
Taux d'activation = utilisateurs réalisant l'action clé dans le délai / inscriptions × 100
Taux d'adoption    = adoptants / population éligible × 100
Taux de délivrance DTx = codes de prescription activés / prescriptions émises × 100

Modèle de valeur de l'entonnoir :
  éligibles × adoption × activation × bénéfice pondéré par la rétention = valeur populationnelle
  — quatre multiplications ; améliorer le facteur le plus petit domine
  généralement (théorie des contraintes appliquée aux entonnoirs)
```

## Exemple résolu

Un commanditaire propose une application de prévention du diabète à 80 000 résidents éligibles :

```
Invités → inscrits :  80 000 → 12 000  (adoption 15 %)
Inscrits → activés (première session + objectif fixé, 7 jours) : 12 000 → 5 400 (45 %)
Activés → programme de 6 mois terminé : 5 400 → 1 600 (30 %)

Effet du programme (essai, ceux qui terminent) : 0,03 QALY + 180 £ de coûts évités
Valeur populationnelle = 1 600 × (0,03 × 20 000 £ + 180 £) ≈ 1,25 M £
Valeur par personne éligible = 15,6 £ — contre 780 £ si chaque personne éligible terminait.

Où investir ? Doubler l'adoption (15→30 %) double la valeur ;
faire passer l'activation de 45→65 % ajoute ~44 % ; les deux battent le simple
polissage du contenu du programme que les 1 600 terminent déjà.
```

## Lien avec l'ingénierie logicielle

L'activation est l'étape de l'entonnoir la plus maîtrisable par l'ingénierie : la friction de vérification d'identité, les flux de consentement, la conception des états vides et le délai avant la première valeur sont du code, pas de la politique (le délai médian avant valeur en santé ≈ 1 jour 7 heures dans les données de référence — chaque heure de ce délai est une exposition à l'attrition). L'adoption est un problème de systèmes de distribution : intégration dans les parcours de recommandation (le moment de la prescription), invitations avalisées par le médecin traitant (transfert de confiance) et accessibilité (langue, compétences numériques — voir [portée et équité](../portée-et-équité/)). Le modèle de valeur de l'entonnoir ci-dessus est le générateur d'argumentaire économique pour les deux : multipliez les facteurs, trouvez la contrainte, chiffrez la correction par rapport à la valeur populationnelle qu'elle libère.

## Pièges

- **Définir l'activation comme une commodité** (e-mail vérifié) plutôt qu'une signification clinique (première action thérapeutique) — gonfle la métrique, brise la chaîne de valeur.
- **Jeux sur le dénominateur d'adoption** : « parmi ceux qui ont visité le site » contre la population réellement éligible — les commanditaires se soucient de la seconde.
- **Effets de sélection** : les utilisateurs faciles à activer sont les moins malades et les moins défavorisés ; les améliorations de l'entonnoir peuvent élargir les écarts d'équité tout en améliorant les moyennes.

## Sources

- Repères d'activation (SaaS santé). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- Données d'activation DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- Cadre RE-AIM. <https://re-aim.org/>
