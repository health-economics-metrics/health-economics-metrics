# Réalisation des bénéfices

La gestion de la réalisation des bénéfices (benefits realization management, BRM) est la discipline qui consiste à identifier, établir en référence, suivre et *démontrer* que les bénéfices promis dans un dossier d'investissement se sont réellement matérialisés après la mise en œuvre. Dans l'investissement public britannique, elle s'inscrit dans le **Five Case Model** du Green Book de HM Treasury ; en médecine, son équivalent est la surveillance post-commercialisation.

## Pourquoi c'est important

Les dossiers d'investissement sont des promesses ; la réalisation des bénéfices en est l'audit. Les évaluations de grands programmes numériques du NHS ont montré à plusieurs reprises que les bénéfices prévus ne se sont jamais matérialisés — et lorsque ces bénéfices n'étaient pas générateurs de trésorerie (cash-releasing), ils n'ont rien apporté au résultat financier du trust. La réponse du Green Book : chaque dossier de dépense doit satisfaire **cinq volets** (stratégique, économique, commercial, financier, gestion), la réalisation des bénéfices étant planifiée dans le volet gestion *avant approbation* — propriétaires nommés, référence établie, dates de mesure fixées. Sans cela, « le logiciel a fait gagner 30 minutes par infirmière » reste à jamais une fiction du fournisseur.

## Le calcul

```
Taux de réalisation = bénéfices réalisés / bénéfices prévus   (par bénéfice, par période)

Mécanismes qui rendent cela calculable :
  référence établie AVANT la mise en service (sinon l'écart est immesurable)
  pour chaque bénéfice : propriétaire, indicateur, source de données, calendrier de mesure
  prévision ajustée du biais d'optimisme lors de l'évaluation (obligation du Green Book)
  bénéfices classés en trésorerie / hors trésorerie / qualitatifs et suivis séparément
  (voir cash-releasing-vs-non-cash-releasing.md)
```

## Exemple chiffré

Un dossier d'investissement pour un système de planification des équipes (e-rostering) promettait, par an : 450 000 £ de réduction des dépenses d'intérim (trésorerie), 8 000 heures de cadres de service (capacité), une meilleure conformité du taux de couverture (qualitatif). Douze mois après la mise en service :

```
Bénéfice              Prévu       Réalisé     Taux   Preuve
Dépenses d'intérim    450 000 £   287 000 £   64 %   grand livre vs année de référence
Heures de cadres      8 000       5 100       64 %   échantillon d'analyse des temps
Conformité couverture +10 pts     +12 pts     120 %  données du système de planification

Actions issues de la revue (l'objet même de la BRM) :
le déficit sur l'intérim tracé à deux services jamais intégrés au dispositif → les intégrer ;
l'erreur d'optimisme de 30 % du modèle de prévision consignée → appliquée au dossier suivant.
```

Un taux de réalisation de 64 % n'est pas un échec — c'est de la *connaissance*. Les dossiers non mesurés revendiquent 100 % pour toujours.

## Lien avec l'ingénierie logicielle

Les organisations d'ingénierie approuvent des investissements de plateforme sur la base de bénéfices prévisionnels et ne les auditent presque jamais — exactement la pathologie que corrige la BRM. La version allégée : toute proposition au-dessus d'un seuil nomme des propriétaires de bénéfice, des indicateurs de référence et une date de revue à T+6 mois ; les taux de réalisation alimentent en retour la décote que l'organisation applique à la prochaine prévision de cette équipe (ou de ce fournisseur). C'est aussi la réponse au scepticisme envers l'outillage IA : le [constat du MIT selon lequel environ 95 % des pilotes GenAI n'ont montré aucun retour mesurable sur le compte de résultat](../ai-return-on-investment/) est un résultat de réalisation des bénéfices — les pilotes qui *ont* généré un retour disposaient de lignes de bénéfices traçables et appropriées. Prévoir → mesurer → recalibrer est la même boucle que les pilotes valorisés par l'[EVPI](../expected-value-of-perfect-information/), appliquée à l'échelle du portefeuille.

## Pièges

- **Absence de référence avant mise en service** — l'omission fatale et irrattrapable.
- **Bénéfice orphelin** : l'absence de propriétaire nommé signifie que personne ne collecte les données, et chaque revue conclut « globalement dans les temps ».
- **Bénéfices comptés deux fois entre programmes** revendiquant la même capacité libérée — tenir un registre des bénéfices à l'échelle du portefeuille.
- **Théâtre de la réalisation** : mesurer les gains qualitatifs faciles pendant que les lignes de trésorerie échappent discrètement à tout examen.

## Sources

- HM Treasury, Green Book et guide du Five Case Model. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Évaluation du programme Global Digital Exemplar (enseignements du NHS sur les bénéfices numériques). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
