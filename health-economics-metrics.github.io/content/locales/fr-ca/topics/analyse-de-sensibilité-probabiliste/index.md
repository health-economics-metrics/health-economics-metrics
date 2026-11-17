# Analyse de Sensibilité Probabiliste (ASP)

L'ASP attribue une distribution de probabilité à chaque paramètre incertain, les échantillonne tous simultanément des milliers de fois (Monte-Carlo), et rapporte la *probabilité* qu'une option soit le meilleur choix — plutôt qu'une seule estimation ponctuelle.

## Pourquoi c'est important

Le cas de référence de NICE *exige* l'ASP. L'analyse déterministe répond à « que se passe-t-il si une entrée est incorrecte ? » ; l'ASP répond à « étant donné tout ce que nous ne savons pas à la fois, quelle est la probabilité que nous prenions la bonne décision ? » Son résultat phare, la **courbe d'acceptabilité de coût-efficacité (CACE)**, trace la probabilité qu'une option soit coût-efficace face au seuil de disposition à payer — transformant « le RCEI est de 24 000 £/QALY » en « il y a 78 % de chances que ce soit le bon choix à 30 000 £/QALY ».

## Le calcul

```
Pour chacun des N tirages (N ≈ 10 000) :
  échantillonnez chaque paramètre θ de sa distribution
    (coûts ~ Gamma, probabilités ~ Bêta, utilités ~ Bêta, effets ~ Normale/logNormale)
  calculez BMN_j(θ) = λ × Effet_j(θ) − Coût_j(θ) pour chaque option j

CACE_j(λ) = fraction des tirages où l'option j a le BMN le plus élevé au seuil λ
```

Voir [bénéfice monétaire net](../bénéfice-monétaire-net/) pour le BMN et [seuils de disposition à payer](../seuils-de-disposition-à-payer/) pour λ.

## Exemple résolu

Dossier de décision de migration de plateforme. Trois entrées incertaines :

```
Coût de migration      ~ Gamma,  moyenne 800k£, éc-t 200k£
Bénéfice annuel        ~ Normale, moyenne 350k£, éc-t 150k£
Durée du bénéfice      ~ Uniforme, 3–6 ans
```

Pour chacun des 10 000 tirages, calculez bénéfice net = durée × annuel − coût (actualisation omise pour la clarté). Résultats illustratifs :

```
Bénéfice net moyen :      775k£
Probabilité net > 0 :   0,86
Percentile 5e–95e :  −180k£ … +1,9M£
```

L'estimation ponctuelle disait « évidemment oui ». L'ASP dit « 86 % oui, avec une vraie queue où nous perdons 180k£+ » — ce qui est ce dont un propriétaire de portefeuille a réellement besoin, et cela tarife le dossier pour d'abord exécuter un sprint exploratoire (voir [VEIP](../valeur-espérée-de-l-information-parfaite/)).

## Lien avec l'ingénierie logicielle

Les ingénieurs font déjà confiance à Monte-Carlo pour la prévision de livraison (l'échantillonnage de débit bat les estimations ponctuelles). Étendez la même machinerie à l'argent : distributions sur l'adoption, le temps économisé et le salaire, puis rapportez « probabilité que cet investissement de plateforme soit net positif » plutôt qu'un ROI de fausse précision. Une courbe de style CACE — probabilité d'être la meilleure option en fonction de la façon dont l'organisation valorise une heure-ingénieur — est un artefact véritablement meilleur pour un comité de financement que n'importe quel nombre unique.

## Pièges

- **Distributions poubelles** : l'ASP avec des écarts-types inventés est de l'analyse déterministe portant une blouse de laboratoire. Fondez les dispersions sur des données ou une élicitation d'experts structurée.
- **Ignorer la corrélation** entre paramètres (une forte adoption corrèle habituellement avec un fort temps économisé) ; l'échantillonnage indépendant sous-estime le risque de queue.
- **Rapporter uniquement la moyenne** de la simulation — tout l'intérêt est la distribution et la probabilité de décision.

## Sources

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
