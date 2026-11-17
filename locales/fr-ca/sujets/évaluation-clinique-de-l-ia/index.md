# Évaluation Clinique de l'IA

Les statistiques centrales pour évaluer un modèle clinique d'IA ou de diagnostic : sensibilité, spécificité, AUROC, valeurs prédictives et nombre nécessaire pour dépister. La leçon économique centrale : **une excellente AUROC ne fait pas un déploiement coût-efficace** — la valeur dépend du point de fonctionnement, de la prévalence, et de ce qui se passe en aval de chaque positif.

## Pourquoi c'est important

Les régulateurs (FDA, MHRA) autorisent l'IA clinique à un **point de fonctionnement verrouillé** — une paire spécifique de sensibilité/spécificité (par ex., le premier système autonome de rétinopathie diabétique homologué par la FDA : sensibilité 87,2 %, spécificité 90,7 % dans son essai pivot). Les économistes de la santé posent alors la question à laquelle les métriques de précision ne peuvent répondre : à la prévalence de votre population de déploiement, que *coûte* chaque détection, et cela vaut-il la peine d'agir dessus ? Une évaluation économique du dépistage de la rétinopathie par IA (npj Digital Medicine 2024) a montré qu'une précision plus élevée seule ne garantissait pas le rapport coût-efficacité une fois les coûts de recommandation comptabilisés.

## Le calcul

```
Sensibilité = VP / (VP + FN)        — parmi les vrais positifs, part détectée
Spécificité = VN / (VN + FP)        — parmi les vrais négatifs, part écartée
AUROC       = P(le modèle classe un positif aléatoire au-dessus d'un négatif aléatoire)
              0,5 hasard … 1,0 parfait ; indépendant du seuil — et donc
              insuffisant pour la décision de déploiement

VPP = VP / (VP + FP)   ← dépendant de la prévalence (Bayes) ; s'effondre quand rare
VPN = VN / (VN + FN)

NND  ≈ 1 / (prévalence × sensibilité)       — dépistés par vrai cas trouvé
Coût par vrai cas = coût du programme / VP      — le résultat économique final
```

## Exemple résolu

Même modèle, deux contextes — sensibilité 90 %, spécificité 93 % :

```
Clinique spécialisée (prévalence 20 %) :
  VPP = (0,9×0,2)/(0,9×0,2 + 0,07×0,8) = 0,18/0,236 ≈ 76 %  → 3 alertes sur 4 sont réelles

Soins primaires (prévalence 1 %) :
  VPP = (0,9×0,01)/(0,9×0,01 + 0,07×0,99) = 0,009/0,0783 ≈ 11,5 %
  → 8 alertes sur 9 sont fausses ; bilan à 350 £ chacun :
  coût par vrai cas = (0,009 + 0,0693) × 350 / 0,009 ≈ 3 045 £ par cas trouvé
```

Modèle identique, économie radicalement différente — c'est pourquoi l'évaluation propre au site est un thème réglementaire et pourquoi « notre modèle a une AUROC de 0,95 » est le début d'un dossier économique, pas sa fin. Voir l'[économie du dépistage](../économie-du-dépistage/) pour l'arithmétique complète du programme.

## Lien avec l'ingénierie logicielle

Pour les ingénieurs qui développent ou achètent de l'IA clinique : **fournissez la matrice de confusion à la prévalence de déploiement**, pas seulement la courbe ROC ; **laissez le seuil être une décision économique** — le compromis sensibilité/spécificité devrait minimiser le coût attendu (cas manqués × coût du manqué contre fausses alertes × coût de bilan), pas maximiser une statistique de référence ; et reconnaissez la même arithmétique dans vos propres outils — systèmes d'alerte, détecteurs d'anomalies et scanners de sécurité sont des tests diagnostiques sur des flux d'événements à faible prévalence, avec la fatigue d'alerte comme le [NNN](../nombre-nécessaire-à-traiter/). Les mises à jour de modèle qui déplacent le point de fonctionnement rouvrent l'économie (et l'homologation réglementaire — voir [évaluation réglementaire de l'IA](../évaluation-réglementaire-de-l-ia/)).

## Pièges

- **Magasinage d'AUROC** : comparer des modèles par AUROC alors qu'ils fonctionneront à un seul seuil — comparez au point de fonctionnement.
- **VPP de prévalence d'essai cité pour un déploiement en conditions réelles** — le classique ; recalculez toujours à la prévalence locale.
- **Biais de spectre** : les modèles validés sur des cas évidents contre des témoins sains surperforment sur le milieu ambigu qui domine la pratique.
- **Aucun chiffrage de parcours en aval** : chaque positif déclenche un bilan ; un modèle est une intervention sur l'économie de *tout le parcours*.

## Sources

- Référence des mesures de précision diagnostique. <https://www.medcalc.org/en/manual/roc-curves.php>
- Évaluation économique du dépistage de rétinopathie par IA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (fondements du NNT). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
