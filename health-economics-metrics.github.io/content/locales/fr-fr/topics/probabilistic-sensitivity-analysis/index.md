# Analyse de sensibilité probabiliste (PSA)

La PSA assigne une distribution de probabilité à chaque paramètre incertain, les échantillonne tous simultanément des milliers de fois (Monte-Carlo), et rapporte la *probabilité* qu'une option soit le meilleur choix — plutôt qu'une estimation ponctuelle unique.

## Pourquoi c'est important

Le reference case du NICE *exige* la PSA. L'analyse déterministe répond à « que se passe-t-il si une donnée d'entrée est fausse ? » ; la PSA répond à « compte tenu de tout ce que nous ignorons à la fois, quelle est la probabilité que nous fassions le bon choix ? ». Son résultat emblématique, la **courbe d'acceptabilité coût-efficacité (CEAC)**, trace la probabilité qu'une option soit coût-efficace en fonction du seuil de consentement à payer — transformant « l'ICER est de 24 000 £/QALY » en « il y a 78 % de chances que ce soit le bon choix à 30 000 £/QALY ».

## Le calcul

```
Pour chacun des N tirages (N ≈ 10 000) :
  échantillonner chaque paramètre θ depuis sa distribution
    (coûts ~ Gamma, probabilités ~ Bêta, utilités ~ Bêta, effets ~ Normale/logNormale)
  calculer NMB_j(θ) = λ × Effet_j(θ) − Coût_j(θ) pour chaque option j

CEAC_j(λ) = fraction des tirages où l'option j a le NMB le plus élevé au seuil λ
```

Voir [bénéfice monétaire net](../net-monetary-benefit/) pour le NMB et [seuils de consentement à payer](../willingness-to-pay-thresholds/) pour λ.

## Exemple chiffré

Dossier d'investissement pour une migration de plateforme. Trois données d'entrée incertaines :

```
Coût de migration     ~ Gamma,  moyenne 800 k£, écart-type 200 k£
Bénéfice annuel       ~ Normale, moyenne 350 k£, écart-type 150 k£
Durée du bénéfice     ~ Uniforme, 3–6 ans
```

Pour chacun des 10 000 tirages, calculer le bénéfice net = durée × bénéfice annuel − coût (actualisation omise par souci de clarté). Résultats illustratifs :

```
Bénéfice net moyen :        775 k£
Probabilité bénéfice net > 0 : 0,86
5e–95e centile :           −180 k£ … +1,9 M£
```

L'estimation ponctuelle disait « évidemment oui ». La PSA dit « oui à 86 %, avec une véritable queue de distribution où l'on perd 180 k£ ou plus » — ce dont un responsable de portefeuille a réellement besoin, et cela valorise l'intérêt de lancer d'abord un sprint exploratoire (voir [EVPI](../expected-value-of-perfect-information/)).

## Lien avec l'ingénierie logicielle

Les ingénieurs font déjà confiance à Monte-Carlo pour les prévisions de livraison (l'échantillonnage du débit bat les estimations ponctuelles). Étendez la même machinerie à l'argent : des distributions sur l'adoption, le temps économisé et le salaire, puis rapportez « la probabilité que cet investissement de plateforme soit net positif » plutôt qu'un ROI en fausse précision. Une courbe de type CEAC — probabilité d'être la meilleure option en fonction de la façon dont l'organisation valorise une heure-ingénieur — est un artefact réellement meilleur pour un comité de financement que n'importe quel chiffre unique.

## Pièges

- **Des distributions fantaisistes** : une PSA avec des écarts-types inventés est une analyse déterministe déguisée en blouse de laboratoire. Fondez les dispersions sur des données ou une élicitation structurée d'experts.
- **Ignorer la corrélation** entre paramètres (une forte adoption est généralement corrélée à un temps économisé élevé) ; un échantillonnage indépendant sous-estime le risque de queue.
- **Ne rapporter que la moyenne** de la simulation — tout l'intérêt réside dans la distribution et la probabilité de décision.

## Sources

- Fenwick E, Claxton K, Sculpher M. « Representing uncertainty: the role of cost-effectiveness acceptability curves. » Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
