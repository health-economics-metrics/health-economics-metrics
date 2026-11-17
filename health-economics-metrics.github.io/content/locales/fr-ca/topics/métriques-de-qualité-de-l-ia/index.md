# Métriques de Qualité de l'IA

Métriques pour l'exactitude des résultats générés par IA : précision par rapport à la vérité terrain, **fidélité/ancrage** (chaque affirmation est-elle étayée par le contexte fourni ?), et **taux d'hallucination** (quelle fraction des résultats contient un contenu non étayé ou faux ?). Dans les contextes de santé, ce ne sont pas des raffinements de qualité — ce sont des taux de préjudice.

## Pourquoi c'est important

Les repères du domaine médical ont mesuré des taux d'hallucination **supérieurs à 60 % pour les LLM non ancrés** sur des tâches médicales (certains modèles ouverts >80 %), tandis que l'ancrage, la récupération et les modes de raisonnement réduisent drastiquement les taux (par ex., le mode de réflexion de GPT-5 a réduit les hallucinations HealthBench de 3,6 % à 1,6 % sur un repère). Un dosage halluciné ou une citation fabriquée dans un flux de travail clinique est un **événement d'information fausse avec une voie de préjudice** — il appartient au volet préjudices de tout modèle économique, tarifé comme les faux positifs de l'[économie du dépistage](../économie-du-dépistage/) : chacun déclenche un coût en aval (agir sur une information erronée, travail de vérification, exposition médico-légale, érosion de la confiance).

## Le calcul

```
Taux d'hallucination = résultats contenant un contenu non étayé/faux / total des résultats
  intrinsèque :  contredit le contexte fourni
  extrinsèque :  fabrication non vérifiable au-delà du contexte

Fidélité (style RAGAS) = affirmations étayées dans la réponse / total des affirmations dans la réponse
Précision/rappel du contexte = qualité de récupération alimentant le générateur

Pondération économique — toutes les hallucinations ne coûtent pas pareil :
  coût de préjudice attendu = Σ sur les types d'erreur (taux × P(non détecté) ×
                       P(suivi d'action) × coût par erreur suivie d'action)
  La couche de revue humaine fixe P(non détecté) — et son coût
  appartient aussi au modèle (minutes du relecteur × volume).
```

## Exemple résolu

Un assistant de codage clinique par IA traite 200 000 épisodes/an ; l'audit montre que 2 % des résultats contiennent une erreur de codage matérielle ; les codeurs humains en détectent 85 % :

```
Erreurs atteignant la soumission = 200 000 × 0,02 × 0,15 = 600/an
Coût par erreur non détectée (facturation erronée moyenne + exposition à l'audit) ≈ 250 £
Coût d'erreur attendu         = 600 × 250 = 150 000 £/an
Coût de revue (2 min × 200k × 0,50 £/min)  = 200 000 £/an

Cas d'amélioration : l'ancrage par récupération réduit le taux d'erreur à 0,8 %
→ erreurs non détectées 240, coût d'erreur 60 000 £ (−90 k £/an) ; le temps
  de revue peut aussi baisser (échantillonnage au lieu de revue complète) — l'investissement
  qualité se rembourse avant toute allégation de vitesse.
```

## Lien avec l'ingénierie logicielle

Traitez la qualité du modèle comme l'économie de la couverture de tests, avec une discipline de niveau santé : les **ensembles d'évaluation sont votre essai clinique** — préenregistrés, représentatifs de *votre* mix de cas, actualisés contre la dérive ; l'**ancrage bat l'échelle pour les tâches factuelles** (la récupération + le prompting à citation obligatoire est généralement la réduction d'hallucination la moins chère disponible — cf. l'[économie unitaire de l'inférence](../économie-unitaire-de-l-inférence/) pour son surcoût en jetons) ; et **publiez le point de fonctionnement** : comme la [sensibilité/spécificité](../évaluation-clinique-de-l-ia/), « 97 % fidèle » ne signifie rien sans la distribution des tâches et le seuil de détection. Les mathématiques de la couche de revue ci-dessus sont la même arithmétique [NNT/NNN](../nombre-nécessaire-à-traiter/) que n'importe quelle porte de dépistage.

## Pièges

- **Transplantation référence-production** : les taux d'hallucination dépendent énormément de la tâche ; votre mix de cas est le seul repère qui compte.
- **Revue humaine non chiffrée** : « un clinicien vérifie tout » divise le bénéfice par deux et doit apparaître dans la ligne de coût — et la vigilance décline (complaisance liée à l'automatisation), donc P(non détecté) augmente avec la confiance.
- **Optimiser la qualité moyenne alors que le risque de queue porte le préjudice** : une note d'allergie fabriquée pèse plus que mille formulations maladroites ; pondérez les erreurs par conséquence, selon la formule du préjudice attendu.

## Sources

- Méthodes et métriques d'évaluation des hallucinations. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Statistiques d'hallucination des LLM médicaux. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- Métriques de fidélité RAG. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
