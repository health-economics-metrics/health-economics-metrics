# Intervention plus précoce

Si la capacité gagnée permet à un praticien de traiter les listes d'attente diagnostiques plus tôt, les patients passent de la liste d'attente au traitement actif plus rapidement — et traiter plus tôt est généralement moins coûteux et plus efficace que traiter plus tard, car les pathologies non traitées évoluent.

## Pourquoi c'est important

La progression de la maladie est l'intérêt composé des soins de santé. Un patient qui attend avec une pathologie non traitée n'est pas dans un état stationnaire : les cancers changent de stade, l'insuffisance cardiaque se décompense, une dépression légère devient sévère. Intervenir plus tôt procure donc un double dividende — de **meilleurs résultats** (plus de QALY, traités à partir d'un état de base plus favorable) et souvent des **coûts de traitement plus faibles** (un traitement à un stade précoce est moins intensif qu'un sauvetage à un stade tardif). Ce mécanisme est ce qui élève les « parcours plus rapides » d'une simple commodité opérationnelle à un impératif clinique et économique — et c'est la raison profonde pour laquelle le [coût du délai](../cost-of-delay/) s'applique aux logiciels cliniques.

## Le calcul

```
Valeur de l'intervention plus précoce (par patient) =
    [Coût_tardif − Coût_précoce]                    (compensation du coût de traitement)
  + [QALY_précoce − QALY_tardif] × λ                (gain de santé × seuil)
  × P(progression pendant le délai)                  (pondération probabiliste)
```

La pondération probabiliste est essentielle : tous les patients en attente ne progressent pas. Modélisez la probabilité de transition par unité de temps (à partir de données d'histoire naturelle), pas le pire des cas. Puis actualisez : les coûts évités dans plusieurs années valent moins aujourd'hui ([actualisation](../discounting-and-time-preference/)) — et notez que la plupart des interventions précoces sont coût-*efficaces* plutôt que génératrices d'économies (voir [économie de la prévention](../prevention-economics/)).

## Exemple chiffré

File d'attente de dépistage de la rétinopathie diabétique : 4 000 patients, 6 mois de retard. Le classement assisté par IA triple le débit et résorbe la file en 8 semaines. Histoire naturelle : environ 2 % des patients en attente/an évoluent vers des stades menaçant la vision en l'absence de suivi.

```
Événements de progression évités par une accélération d'environ 4 mois :
  4 000 × 2 % × (4/12) ≈ 27 patients

Par progression évitée :
  compensation du traitement (thérapie intravitréenne vs laser) ≈ 4 000 £
  gain de QALY (vision préservée) ≈ 0,8 QALY × 20 000 £ = 16 000 £

Valeur ≈ 27 × (4 000 + 16 000) ≈ 540 000 £ — pour une seule file résorbée une fois,
avant même de compter le gain de débit permanent.
```

## Lien avec l'ingénierie logicielle

Deux transferts. D'abord, l'évident : les logiciels qui accélèrent les parcours diagnostiques et thérapeutiques (triage, classement par IA, routage des résultats) se monétisent exactement selon ce modèle — et le modèle indique quel parcours accélérer : celui dont la courbe de progression est la plus raide, pas la file la plus longue. Ensuite, le miroir en ingénierie : **les défauts progressent aussi**. Un bogue détecté en conception coûte une conversation ; en production, il coûte un incident ; la courbe de coût du « décalage vers l'amont » (« shift-left », facteur 10 à 100 selon le stade) est un modèle de progression, et sa version honnête porte la même réserve — la détection précoce est généralement coût-efficace, pas de l'argent gratuit, car les revues et les tests ont un coût réel et la plupart des problèmes détectés n'auraient jamais progressé.

## Pièges

- **Progression du pire cas supposée pour tous** — la pondération probabiliste fait la différence entre l'analyse et le plaidoyer.
- **Biais de délai d'avance (lead-time bias)** : détecter une maladie plus tôt sans changer les résultats ressemble à un bénéfice mais n'en est pas un ; c'est l'*intervention efficace* plus précoce qui compte, pas la seule détection précoce (voir [économie du dépistage](../screening-economics/)).
- **Double comptage** avec les revendications sur les listes d'attente et le RTT fondées sur la même accélération — une seule amélioration de parcours, un seul ensemble de bénéfices, alloué une seule fois.

## Sources

- Cohen JT, Neumann PJ, Weinstein MC. « Does preventive care save money? » NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, programme de dépistage oculaire diabétique. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
