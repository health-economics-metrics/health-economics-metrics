# Intervention Plus Précoce

Si la capacité économisée permet à un praticien de revoir plus tôt les retards de diagnostic, les patients passent de la liste d'attente au traitement actif plus rapidement — et traiter plus tôt est généralement moins cher et meilleur que traiter plus tard, car les conditions non traitées progressent.

## Pourquoi c'est important

La progression de la maladie est l'intérêt composé des soins de santé. Un patient attendant avec une condition non traitée n'est pas dans un état stable : les cancers changent de stade, l'insuffisance cardiaque se décompense, la dépression légère devient sévère. Intervenir plus tôt livre donc un double dividende — de **meilleurs résultats** (plus de QALY, traités depuis une ligne de base plus saine) et souvent des **coûts de traitement plus bas** (le traitement en phase précoce est moins intensif que le sauvetage en phase tardive). Ce mécanisme est ce qui élève les « parcours plus rapides » d'une commodité opérationnelle à un impératif clinique et économique — et c'est la raison profonde pour laquelle le [coût de retard](../coût-de-retard/) s'applique au logiciel clinique.

## Le calcul

```
Valeur de l'intervention plus précoce (par patient) =
    [Coût_tardif − Coût_précoce]                       (compensation de coût de traitement)
  + [QALY_précoce − QALY_tardif] × λ                 (gain de santé × seuil)
  × P(progression pendant le retard)                 (pondération de probabilité)
```

La pondération de probabilité est essentielle : tous les patients en attente ne progressent pas. Modélisez la probabilité de transition par unité de temps (à partir de données d'histoire naturelle), pas le pire cas. Puis actualisez : les coûts évités à des années de distance valent moins aujourd'hui ([actualisation](../actualisation-et-préférence-temporelle/)) — et notez que la plupart des interventions précoces sont coût-*efficaces* plutôt que coût-*économiques* (voir [économie de la prévention](../économie-de-la-prévention/)).

## Exemple résolu

Retard de dépistage de la rétinopathie diabétique : 4 000 patients, 6 mois de retard. La classification assistée par IA triple le débit et vide la file d'attente en 8 semaines. Histoire naturelle : ~2 % des patients en attente/an progressent vers des stades menaçant la vue pendant qu'ils ne sont pas revus.

```
Événements de progression évités par ~4 mois d'accélération :
  4 000 × 2 % × (4/12) ≈ 27 patients

Par progression évitée :
  compensation de traitement (thérapie intravitréenne contre laser) ≈ 4 000 £
  gain de QALY (vision préservée) ≈ 0,8 QALY × 20 000 £ = 16 000 £

Valeur ≈ 27 × (4 000 + 16 000) ≈ 540 000 £ — d'un retard vidé une fois,
avant de compter le gain de débit permanent.
```

## Lien avec l'ingénierie logicielle

Deux transferts. D'abord, l'évident : le logiciel qui accélère les parcours de diagnostic et de traitement (triage, classification par IA, acheminement des résultats) se monétise via ce même modèle — et le modèle vous dit quel parcours accélérer : celui avec la courbe de progression la plus raide, pas la file d'attente la plus longue. Ensuite, le miroir en ingénierie : **les défauts progressent aussi**. Un bogue détecté à la conception coûte une conversation ; en production, il coûte un incident ; la courbe de coût « shift-left » (10-100× selon l'étape) est un modèle de progression, et la version honnête porte le même avertissement — la détection précoce est généralement coût-efficace, pas de l'argent gratuit, car les revues et les tests ont des coûts réels et la plupart des problèmes détectés n'auraient jamais progressé.

## Pièges

- **Supposer la progression du pire cas pour tous** — la pondération de probabilité est la différence entre l'analyse et le plaidoyer.
- **Biais de délai d'avance** : trouver la maladie plus tôt sans changer les résultats ressemble à un bénéfice mais n'en est pas un ; l'*intervention efficace* plus précoce est l'allégation, pas la détection plus précoce seule (voir [économie du dépistage](../économie-du-dépistage/)).
- **Double comptage** avec des allégations de liste d'attente et de RTT construites sur la même accélération — une amélioration de parcours, un ensemble de bénéfices, alloué une fois.

## Sources

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, programme de dépistage oculaire diabétique. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
