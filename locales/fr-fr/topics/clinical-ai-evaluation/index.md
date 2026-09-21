# Évaluation de l'IA clinique

Les statistiques centrales pour évaluer un modèle d'IA clinique ou diagnostique : sensibilité, spécificité, AUROC, valeurs prédictives et nombre de sujets à dépister. La leçon économique centrale : **une excellente AUROC ne rend pas un déploiement rentable** — la valeur dépend du point de fonctionnement, de la prévalence, et de ce qui se passe en aval de chaque résultat positif.

## Pourquoi c'est important

Les régulateurs (FDA, MHRA) autorisent l'IA clinique à un **point de fonctionnement verrouillé** — une paire sensibilité/spécificité spécifique (par exemple, le premier système autonome de dépistage de la rétinopathie diabétique homologué par la FDA : sensibilité de 87,2 %, spécificité de 90,7 % dans son essai pivot). Les économistes de la santé posent alors la question à laquelle les indicateurs de précision ne peuvent pas répondre : à la prévalence de votre population de déploiement, combien *coûte* chaque détection, et agir en conséquence en vaut-il la peine ? Une évaluation économique de l'IA de dépistage de la rétinopathie (npj Digital Medicine 2024) a montré qu'une précision plus élevée à elle seule ne garantissait pas la rentabilité une fois les coûts d'orientation pris en compte.

## Le calcul

```
Sensibilité = VP / (VP + FN)        — parmi les vrais positifs, part détectée
Spécificité = VN / (VN + FP)        — parmi les vrais négatifs, part écartée
AUROC       = P(le modèle classe un positif aléatoire au-dessus d'un négatif aléatoire)
              0,5 hasard … 1,0 parfait ; indépendante du seuil — donc
              insuffisante pour la décision de déploiement

VPP = VP / (VP + FP)   ← dépend de la prévalence (Bayes) ; s'effondre si rare
VPN = VN / (VN + FN)

NSD  ≈ 1 / (prévalence × sensibilité)       — sujets dépistés par vrai cas trouvé
Coût par vrai cas = coût du programme / VP  — le résultat économique final
```

## Exemple chiffré

Même modèle, deux contextes — sensibilité 90 %, spécificité 93 % :

```
Clinique spécialisée (prévalence 20 %) :
  VPP = (0,9×0,2)/(0,9×0,2 + 0,07×0,8) = 0,18/0,236 ≈ 76 %  → 3 alertes sur 4 réelles

Soins primaires (prévalence 1 %) :
  VPP = (0,9×0,01)/(0,9×0,01 + 0,07×0,99) = 0,009/0,0783 ≈ 11,5 %
  → 8 alertes sur 9 fausses ; bilan à 350 £ chacun :
  coût par vrai cas = (0,009 + 0,0693) × 350 / 0,009 ≈ 3 045 £ par cas trouvé
```

Modèle identique, économie radicalement différente — d'où le fait que l'évaluation site par site soit un thème réglementaire, et que « notre modèle a une AUROC de 0,95 » ne soit que le début d'un dossier économique, pas sa conclusion. Voir [économie du dépistage](../screening-economics/) pour le calcul complet à l'échelle d'un programme.

## Lien avec l'ingénierie logicielle

Pour les ingénieurs qui construisent ou achètent de l'IA clinique : **livrez la matrice de confusion à la prévalence de déploiement**, pas seulement la courbe ROC ; **laissez le seuil être une décision économique** — l'arbitrage sensibilité/spécificité doit minimiser le coût attendu (cas manqués × coût du cas manqué vs fausses alertes × coût du bilan), pas maximiser une statistique de référence ; et reconnaissez le même calcul dans votre propre outillage — systèmes d'alerte, détecteurs d'anomalies et scanners de sécurité sont des tests diagnostiques sur des flux d'événements à faible prévalence, avec la lassitude face aux alertes comme équivalent du [NNH](../number-needed-to-treat/). Les mises à jour de modèle qui déplacent le point de fonctionnement rouvrent le calcul économique (et l'homologation réglementaire — voir [évaluation réglementaire de l'IA](../ai-regulatory-evaluation/)).

## Pièges

- **Le magasinage d'AUROC** : comparer des modèles sur l'AUROC alors qu'ils fonctionneront à un seuil unique — comparez au point de fonctionnement.
- **La VPP de la prévalence de l'essai citée pour un déploiement en vie réelle** — le classique ; toujours recalculer à la prévalence locale.
- **Le biais de spectre** : les modèles validés sur des cas évidents face à des témoins sains surperforment sur la zone grise ambiguë qui domine la pratique.
- **L'absence de chiffrage du parcours en aval** : chaque positif déclenche un bilan ; un modèle est une intervention sur l'économie de *tout le parcours*.

## Sources

- Référence sur les mesures de précision diagnostique. <https://www.medcalc.org/en/manual/roc-curves.php>
- Évaluation économique du dépistage de la rétinopathie par IA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (fondements du NNT). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
