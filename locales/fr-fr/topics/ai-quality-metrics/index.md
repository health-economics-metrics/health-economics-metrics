# Indicateurs de qualité de l'IA

Indicateurs de la justesse des contenus générés par l'IA : exactitude par rapport à une vérité de référence, **fidélité/ancrage** (chaque affirmation est-elle étayée par le contexte fourni ?), et **taux d'hallucination** (quelle fraction des sorties contient un contenu non étayé ou faux ?). Dans les contextes de santé, ce ne sont pas des raffinements de qualité — ce sont des taux de préjudice.

## Pourquoi c'est important

Des référentiels dans le domaine médical ont mesuré des taux d'hallucination **supérieurs à 60 % pour les LLM non ancrés** sur des tâches médicales (certains modèles ouverts >80 %), tandis que l'ancrage, la récupération d'information et les modes de raisonnement réduisent ces taux de manière spectaculaire (par exemple, le mode de réflexion de GPT-5 a réduit les hallucinations HealthBench de 3,6 % à 1,6 % sur un référentiel). Un dosage halluciné ou une citation fabriquée dans un flux de travail clinique constituent un **événement de fausse information avec une voie de préjudice** — cela relève du bras « préjudices » de tout modèle économique, chiffré comme les faux positifs de l'[économie du dépistage](../screening-economics/) : chacun déclenche un coût en aval (agir sur une information erronée, travail de vérification, exposition médico-légale, confiance érodée).

## Le calcul

```
Taux d'hallucination = sorties contenant un contenu non étayé/faux / total des sorties
  intrinsèque : contredit le contexte fourni
  extrinsèque : fabrication invérifiable au-delà du contexte

Fidélité (façon RAGAS) = affirmations étayées dans la réponse / total des affirmations dans la réponse
Précision/rappel du contexte = qualité de la récupération alimentant le générateur

Pondération économique — toutes les hallucinations ne coûtent pas pareil :
  coût de préjudice attendu = Σ sur les types d'erreur (taux × P(non détecté) ×
                              P(utilisé en pratique) × coût par erreur utilisée)
  La couche de relecture humaine fixe P(non détecté) — et son coût doit
  aussi figurer dans le modèle (minutes du relecteur × volume).
```

## Exemple chiffré

Un assistant IA de codage clinique traite 200 000 épisodes/an ; un audit montre que 2 % des sorties contiennent une erreur de codage matérielle ; les codeurs humains en détectent 85 % :

```
Erreurs atteignant la soumission = 200 000 × 0,02 × 0,15 = 600/an
Coût par erreur non détectée (facturation erronée moy. + exposition à l'audit) ≈ 250 £
Coût d'erreur attendu       = 600 × 250 = 150 000 £/an
Coût de relecture (2 min × 200k × 0,50 £/min)  = 200 000 £/an

Cas d'amélioration : l'ancrage par récupération réduit le taux d'erreur à 0,8 %
→ erreurs non détectées 240, coût d'erreur 60 000 £ (−90k £/an) ; le temps
  de relecture peut aussi diminuer (échantillonnage au lieu de relecture
  complète) — l'investissement qualité est rentable avant même toute
  revendication de gain de vitesse.
```

## Lien avec l'ingénierie logicielle

Traitez la qualité des modèles comme l'économie de la couverture de tests, avec la rigueur de niveau santé : **les jeux d'évaluation sont votre essai clinique** — préenregistrés, représentatifs de *votre* mix de cas, actualisés face à la dérive ; **l'ancrage l'emporte sur l'échelle pour les tâches factuelles** (la récupération d'information associée à des prompts exigeant des citations est généralement la réduction d'hallucination la moins coûteuse disponible — cf. [l'économie unitaire de l'inférence](../inference-unit-economics/) pour son surcoût en tokens) ; et **publiez le point de fonctionnement** : comme pour la [sensibilité/spécificité](../clinical-ai-evaluation/), « 97 % fidèle » ne veut rien dire sans la distribution des tâches et le seuil de détection. Les calculs de la couche de relecture ci-dessus relèvent de la même arithmétique [NNT/NNH](../number-needed-to-treat/) que n'importe quel filtre de dépistage.

## Pièges

- **Transplantation référentiel-vers-production** : les taux d'hallucination dépendent fortement de la tâche ; votre propre mix de cas est le seul référentiel qui compte.
- **Relecture humaine non chiffrée** : « un clinicien vérifie tout » réduit de moitié le bénéfice et doit figurer dans la ligne de coût — et la vigilance décline (complaisance liée à l'automatisation), de sorte que P(non détecté) augmente avec la confiance.
- **Optimiser la qualité moyenne alors que le risque de queue porte le préjudice** : une seule note d'allergie fabriquée pèse plus lourd que mille formulations maladroites ; pondérez les erreurs par leur conséquence, selon la formule de préjudice attendu.

## Sources

- Méthodes et indicateurs d'évaluation des hallucinations. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Statistiques d'hallucination des LLM médicaux. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- Indicateurs de fidélité RAG. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
