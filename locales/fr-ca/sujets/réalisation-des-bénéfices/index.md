# Réalisation des Bénéfices

La gestion de la réalisation des bénéfices (GRB) est la discipline consistant à identifier, établir une ligne de base, suivre et *démontrer* que les bénéfices promis dans un dossier de décision se sont réellement matérialisés après la livraison. Dans l'investissement public britannique, elle vit au sein du **Modèle des Cinq Cas** du Green Book de HM Treasury ; en médecine, sa cousine est la surveillance post-commercialisation.

## Pourquoi c'est important

Les dossiers de décision sont des promesses ; la réalisation des bénéfices est l'audit. Les évaluations des grands programmes numériques du NHS ont trouvé de manière répétée des bénéfices prévus qui ne se sont jamais matérialisés — et lorsque les bénéfices ne libéraient pas de trésorerie, ils n'ont rien fait pour le résultat net du trust. La réponse du Green Book : chaque dossier de dépense doit passer **cinq cas** (stratégique, économique, commercial, financier, de gestion), avec la réalisation des bénéfices planifiée dans le cas de gestion *avant l'approbation* — propriétaires nommés, lignes de base capturées, dates de mesure fixées. Sans cela, « le logiciel a économisé 30 minutes par infirmière » reste une fiction du fournisseur pour toujours.

## Le calcul

```
Taux de réalisation = bénéfices réalisés / bénéfices prévus   (par bénéfice, par période)

Mécanique qui le rend calculable :
  ligne de base capturée AVANT la mise en service (sinon le delta est immesurable)
  chaque bénéfice : propriétaire, métrique, source de données, calendrier de mesure
  prévision ajustée pour le biais d'optimisme lors de l'évaluation (mandat du Green Book)
  bénéfices classés trésorerie / hors trésorerie / qualitatifs et suivis séparément
  (voir cash-releasing-vs-non-cash-releasing.md)
```

## Exemple résolu

Un dossier de décision de planification électronique promettait, par an : 450 k£ de réduction des dépenses d'agences (trésorerie), 8 000 heures de gestionnaire de service (capacité), meilleure conformité au taux de couverture (qualitatif). Douze mois après la mise en service :

```
Bénéfice           Prévu       Réalisé     Taux   Preuve
Dépense d'agence   450 000 £   287 000 £   64 %   grand livre contre année de référence
Heures de gestion  8 000       5 100       64 %   échantillon d'étude de temps
Conformité couv.   +10pp       +12pp       120 %  données du système de planification

Actions issues de la revue (l'objet de la GRB) :
le déficit d'agence a été retracé à deux unités jamais intégrées → les intégrer ;
l'erreur d'optimisme de 30 % du modèle de prévision a été consignée → appliquée au dossier suivant.
```

64 % de réalisation n'est pas un échec — c'est de la *connaissance*. Les dossiers non mesurés revendiquent 100 % pour toujours.

## Lien avec l'ingénierie logicielle

Les organisations d'ingénierie approuvent les investissements en plateforme sur des bénéfices prévus et ne les auditent presque jamais — la pathologie exacte que corrige la GRB. Le portage léger : chaque proposition au-delà d'un seuil nomme des propriétaires de bénéfices, des métriques de référence et une date de revue à T+6 mois ; les taux de réalisation alimentent en retour le degré auquel l'organisation décote la prochaine prévision de cette équipe (ou de ce fournisseur). C'est aussi la réponse au scepticisme envers les outils d'IA : le [constat du MIT selon lequel ~95 % des pilotes d'IA générative n'ont montré aucun retour de compte de résultat mesurable](../retour-sur-investissement-de-l-ia/) est un résultat de réalisation des bénéfices — les pilotes qui *ont* rapporté avaient des lignes de bénéfice traçables et appartenues. Prévoir → mesurer → recalibrer est la même boucle que les pilotes tarifés par [VEIP](../valeur-espérée-de-l-information-parfaite/), exécutée à l'échelle du portefeuille.

## Pièges

- **Pas de ligne de base avant mise en service** — l'omission fatale et irréparable.
- **Orphelinat de bénéfice** : pas de propriétaire nommé signifie que personne ne collecte les données et chaque revue dit « globalement dans les clous ».
- **Bénéfices comptés deux fois entre programmes** revendiquant la même capacité libérée — tenez un registre des bénéfices à l'échelle du portefeuille.
- **Théâtre de réalisation** : mesurer les victoires qualitatives faciles pendant que les lignes de trésorerie passent silencieusement sans examen.

## Sources

- HM Treasury, Green Book et guide du Modèle des Cinq Cas. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Évaluation du programme Global Digital Exemplar (leçons de bénéfices numériques du NHS). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
